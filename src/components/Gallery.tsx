import React, { useState } from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { galleryImages } from "../utils/imageData";
import { ArrowBigLeftDash, ArrowBigRightDash, X } from "lucide-react";
import { GalleryImage } from "./image/GalleryImage";

export function Gallery() {
  const [isOpen, setIsOpen] = useState(false);
  const [currentImages, setCurrentImages] = useState<string[]>([]);

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
          className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50"
          onClick={handleBackdropClick}
        >
          <div className="relative rounded-lg w-full max-w-4xl p-10">
            <button
              className="absolute rounded-md bg-black bg-opacity-50 w-7 h-7 flex items-center justify-center top-0 right-14 text-white"
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
                  className="absolute left-0 top-1/2 transform -translate-y-1/2 p-3 rounded-full bg-black bg-opacity-50 hover:bg-opacity-25 text-white z-10"
                  onClick={clickHandler}
                >
                  <ArrowBigLeftDash />
                </button>
              )}
              renderArrowNext={(clickHandler) => (
                <button
                  className="absolute right-0 top-1/2 transform -translate-y-1/2 p-3 bg-black bg-opacity-50 hover:bg-opacity-25 text-white rounded-full z-10"
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
                  <img
                    src={img}
                    alt={`Gallery Image ${idx + 1}`}
                    className="rounded-md max-h-[500px] max-w-full object-contain"
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
