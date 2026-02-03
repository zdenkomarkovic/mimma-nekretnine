import { MetadataRoute } from 'next'
import { client } from '@/sanity/lib/client'

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = 'https://www.nekretninemimma.rs'

  // Osnovne stranice
  const staticPages = [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'daily' as const,
      priority: 1,
    },
    {
      url: `${baseUrl}/nekretnine`,
      lastModified: new Date(),
      changeFrequency: 'daily' as const,
      priority: 0.9,
    },
    {
      url: `${baseUrl}/kontakt`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    },
  ]

  // Dobavi sve nekretnine iz Sanity
  let properties: any[] = []
  try {
    properties = await client.fetch(`
      *[_type == "property" && !(_id in path("drafts.**"))] {
        "slug": slug.current,
        _updatedAt
      }
    `)
  } catch (error) {
    console.error('Error fetching properties for sitemap:', error)
  }

  // Kreiraj URLs za sve nekretnine
  const propertyPages = properties.map((property) => ({
    url: `${baseUrl}/nekretnine/${property.slug}`,
    lastModified: new Date(property._updatedAt),
    changeFrequency: 'weekly' as const,
    priority: 0.7,
  }))

  // Dobavi sve kategorije iz Sanity
  let categories: any[] = []
  try {
    categories = await client.fetch(`
      *[_type == "category" && !(_id in path("drafts.**"))] {
        "slug": slug.current,
        _updatedAt
      }
    `)
  } catch (error) {
    console.error('Error fetching categories for sitemap:', error)
  }

  // Kreiraj URLs za sve kategorije
  const categoryPages = categories.map((category) => ({
    url: `${baseUrl}/nekretnine?kategorija=${category.slug}`,
    lastModified: new Date(category._updatedAt),
    changeFrequency: 'weekly' as const,
    priority: 0.8,
  }))

  return [...staticPages, ...propertyPages, ...categoryPages]
}
