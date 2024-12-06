import { ImageLoader } from "./ImageLoader";

interface GalleryImageProps {
  url: string;
  title?: string;
  description?: string;
  onClick?: () => void;
  className?: string;
}

export function GalleryImage({
  url,
  title,
  description,
  onClick,
  className = "",
}: GalleryImageProps) {
  return (
    <div
      className={`relative group overflow-hidden rounded-lg shadow-lg ${className}`}
      onClick={onClick}
    >
      <ImageLoader
        src={url}
        alt={title!}
        className="w-full h-[300px] object-cover transform transition-transform duration-300 group-hover:scale-110"
      />

      <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/90 to-transparent text-white">
        <h3 className="font-bold">{title}</h3>
        <p className="text-sm">{description}</p>
      </div>
    </div>
  );
}
