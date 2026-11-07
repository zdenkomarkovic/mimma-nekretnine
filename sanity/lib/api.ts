import { client } from './client'
import {
  categoriesQuery,
  featuredPropertiesQuery,
  allPropertiesQuery,
  propertyBySlugQuery,
  propertiesByCategoryQuery,
} from './queries'
import { Property, Category } from '@/types/property'

export async function getCategories(): Promise<Category[]> {
  return await client.fetch(categoriesQuery, {}, { cache: 'no-store' })
}

export async function getFeaturedProperties(): Promise<Property[]> {
  return await client.fetch(featuredPropertiesQuery, {}, { cache: 'no-store' })
}

export async function getAllProperties(): Promise<Property[]> {
  return await client.fetch(allPropertiesQuery, {}, { cache: 'no-store' })
}

export async function getPropertyBySlug(slug: string): Promise<Property | null> {
  return await client.fetch(propertyBySlugQuery, { slug }, { cache: 'no-store' })
}

export async function getPropertiesByCategory(categoryId: string): Promise<Property[]> {
  return await client.fetch(propertiesByCategoryQuery, { categoryId }, { cache: 'no-store' })
}
