import { ImageLoader } from "./ImageLoader";

interface GalleryImageProps {
  url: string;
  title: string;
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
        alt={title}
        className="w-full h-[300px] object-cover transform transition-transform duration-300 group-hover:scale-110"
      />
      <div className="absolute inset-0 bg-black bg-opacity-40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center p-4">
        <h3 className="text-white font-display text-2xl font-semibold text-center mb-2">
          {title}
        </h3>
        {description && (
          <p className="text-white text-center text-sm">{description}</p>
        )}
      </div>
    </div>
  );
}
