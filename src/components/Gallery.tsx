import React, { useState, useEffect } from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { galleryImages as defaultGalleryImages } from "../utils/imageData";
import { ArrowBigLeftDash, ArrowBigRightDash, X } from "lucide-react";
import { GalleryImage } from "./image/GalleryImage";
import { ImageLoader } from "./image/ImageLoader";

export function Gallery() {
  const [isOpen, setIsOpen] = useState(false);
  const [currentImages, setCurrentImages] = useState<string[]>([]);
  const [galleryImages, setGalleryImages] = useState(defaultGalleryImages);

  useEffect(() => {
    const storedImages = localStorage.getItem("galleryImages");

    const fetchGalleryImages = () => {
      return defaultGalleryImages;
    };

    const checkForUpdates = () => {
      // Periodically check for updates every 10 minutes
      const timeoutId = setTimeout(() => {
        const newImages = fetchGalleryImages();
        const storedImages = JSON.parse(
          localStorage.getItem("galleryImages") || "[]"
        );

        // Compare the stored images with the fetched ones
        if (JSON.stringify(storedImages) !== JSON.stringify(newImages)) {
          // Update localStorage with new images
          localStorage.setItem("galleryImages", JSON.stringify(newImages));
          setGalleryImages(newImages);
        }
      }, 600000); // 10 minutes

      // Return the timeout ID for clearing
      return timeoutId;
    };

    let timeoutId;

    if (storedImages) {
      // Use stored images if they exist
      setGalleryImages(JSON.parse(storedImages));
      timeoutId = checkForUpdates();
    } else {
      // Save default images to localStorage
      const newImages = fetchGalleryImages();
      localStorage.setItem("galleryImages", JSON.stringify(newImages));
      setGalleryImages(newImages);
      timeoutId = checkForUpdates();
    }

    // Clean up the timeout
    return () => clearTimeout(timeoutId);
  }, []);

  const openModal = (images: string[]) => {
    setCurrentImages(images);
    setIsOpen(true);
    document.body.classList.add("overflow-hidden");
  };

  const closeModal = () => {
    setIsOpen(false);
    setCurrentImages([]);
    document.body.classList.remove("overflow-hidden");
  };

  const handleBackdropClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) {
      closeModal();
    }
  };

  return (
    <section className="py-20 bg-gray-50" id="gallery">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-display text-4xl font-bold text-gray-900 mb-4">
            Photo Gallery
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto leading-relaxed">
            Take a virtual tour through our beautiful adult family home
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {galleryImages.map((image, index) => (
            <GalleryImage
              key={index}
              onClick={() => openModal(image.images!)}
              className="cursor-pointer"
              url={image.url}
              title={image.title}
              description={image.description}
            />
          ))}
        </div>
      </div>

      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-85 flex items-center justify-center z-50"
          onClick={handleBackdropClick}
        >
          <div className="relative rounded-lg w-full max-w-4xl p-10">
            <button
              className="absolute rounded-md bg-black bg-opacity-50 w-7 h-7 flex items-center justify-center top-0 right-32 text-white"
              onClick={closeModal}
            >
              <X size={"15px"} />
            </button>

            <Carousel
              showThumbs={false}
              showStatus={false}
              infiniteLoop={true}
              autoPlay={true}
              renderArrowPrev={(clickHandler) => (
                <button
                  className="absolute left-16 top-1/2 transform -translate-y-1/2 p-3 rounded-full bg-black bg-opacity-50 hover:bg-opacity-25 text-white z-10"
                  onClick={clickHandler}
                >
                  <ArrowBigLeftDash />
                </button>
              )}
              renderArrowNext={(clickHandler) => (
                <button
                  className="absolute right-16 top-1/2 transform -translate-y-1/2 p-3 bg-black bg-opacity-50 hover:bg-opacity-25 text-white rounded-full z-10"
                  onClick={clickHandler}
                >
                  <ArrowBigRightDash />
                </button>
              )}
            >
              {currentImages.map((img, idx) => (
                <div
                  key={idx}
                  className="rounded-md overflow-hidden flex items-center justify-center"
                >
                  <ImageLoader
                    src={img}
                    alt={img}
                    className="rounded-md object-contain"
                    height={500}
                    width={500}
                  />
                </div>
              ))}
            </Carousel>
          </div>
        </div>
      )}
    </section>
  );
}
