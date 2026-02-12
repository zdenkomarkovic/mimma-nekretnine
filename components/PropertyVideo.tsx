interface PropertyVideoProps {
  videoUrl: string
  title: string
}

export default function PropertyVideo({ videoUrl, title }: PropertyVideoProps) {
  return (
    <div className="mb-8">
      <h2 className="text-2xl font-semibold mb-4">Video</h2>
      <div className="rounded-lg overflow-hidden bg-black">
        <video
          className="w-full"
          controls
          preload="metadata"
          aria-label={title}
        >
          <source src={videoUrl} />
          Vaš pretraživač ne podržava video.
        </video>
      </div>
    </div>
  )
}
