import { useRef } from "react";
import { images } from "../utils/images";
import { FamilyImages } from "../utils/imageData";
import { ArrowBigLeftDash, ArrowBigRightDash } from "lucide-react";

export function About() {
  const firstHalfRef = useRef(null);
  const secondHalfRef = useRef(null);

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const scrollContainer = (ref: any, direction: any) => {
    if (ref.current) {
      const scrollAmount = direction === "right" ? 400 : -400;
      ref.current.scrollBy({ left: scrollAmount, behavior: "smooth" });
    }
  };

  const half = Math.ceil(FamilyImages.length / 2);
  const firstHalf = FamilyImages.slice(0, half);
  const secondHalf = FamilyImages.slice(half);

  return (
    <section className="py-20 bg-white" id="about">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="font-display text-4xl font-bold text-gray-900 mb-6">
              About Bluebird Millcreek
            </h2>

            <div className="space-y-4 text-gray-600 leading-relaxed">
              <p className="text-lg">
                At Bluebird Millcreek Adult Family Home, we believe in providing
                exceptional care in a warm, home-like environment. Our adult
                family home offers personalized attention and support while
                maintaining the dignity and independence of our residents.
              </p>
              <p className="text-lg">
                Our experienced caregivers are passionate about creating a
                nurturing atmosphere where residents can thrive. We maintain a
                low resident-to-caregiver ratio to ensure each person receives
                the attention they deserve.
              </p>
              <p className="text-lg">
                Licensed and certified, our facility meets the highest standards
                of care while offering the comfort and familiarity of home. We
                take pride in being a trusted partner in your loved one's care
                journey.
              </p>
            </div>
          </div>

          <div>
            <img
              src={images.about}
              alt="Bluebird Millcreek Adult Family Home"
              className="rounded-lg shadow-lg w-full h-[500px] object-cover"
            />
          </div>
        </div>
      </div>

      <div className="mt-8 flex flex-col gap-20">
        {/* Scrollable container for the first half of the images */}
        <div className="relative">
          <div
            className="flex overflow-x-auto overflow-y-hidden gap-10 p-4"
            ref={firstHalfRef}
            style={{
              height: "300px",
              borderRadius: "20px",
            }}
          >
            {firstHalf.map((img, index) => (
              <div
                key={`right-${index}`}
                className="flex-shrink-0 flex flex-col items-center justify-center"
              >
                <div className="w-[400px] flex items-center justify-center transition-transform transform hover:scale-110 hover:shadow-xl cursor-pointer rounded-xl">
                  <img
                    src={img}
                    alt={`Family ${index + 1}`}
                    className="object-contain"
                  />
                </div>
              </div>
            ))}
          </div>

          <button
            className="absolute left-0 sm:left-4 top-1/2 transform -translate-y-1/2 p-3 rounded-full bg-black bg-opacity-50 hover:bg-opacity-25 text-white z-10"
            onClick={() => scrollContainer(firstHalfRef, "left")}
          >
            <ArrowBigLeftDash />
          </button>
          <button
            className="absolute right-0 sm:right-4 top-1/2 transform -translate-y-1/2 p-3 bg-black bg-opacity-50 hover:bg-opacity-25 text-white rounded-full z-10"
            onClick={() => scrollContainer(firstHalfRef, "right")}
          >
            <ArrowBigRightDash />
          </button>
        </div>

        {/* Scrollable container for the second half of the images */}
        <div className="relative">
          <div
            className="flex overflow-x-auto overflow-y-hidden gap-10 p-4"
            ref={secondHalfRef}
            style={{
              height: "300px",
              borderRadius: "20px",
            }}
          >
            {secondHalf.map((img, index) => (
              <div
                key={`left-${index}`}
                className="flex-shrink-0 flex flex-col items-center justify-center"
              >
                <div className="w-[400px] flex items-center justify-center rounded-lg transition-transform transform hover:scale-110 hover:shadow-xl cursor-pointer">
                  <img
                    src={img}
                    alt={`Family ${index + 1}`}
                    className="object-contain"
                  />
                </div>
              </div>
            ))}
          </div>

          {/* Arrow buttons for scrolling */}
          <button
            className="absolute left-0 sm:left-4 top-1/2 transform -translate-y-1/2 p-3 rounded-full bg-black bg-opacity-50 hover:bg-opacity-25 text-white z-10"
            onClick={() => scrollContainer(secondHalfRef, "left")}
          >
            <ArrowBigLeftDash />
          </button>
          <button
            className="absolute right-0 sm:right-4 top-1/2 transform -translate-y-1/2 p-3 bg-black bg-opacity-50 hover:bg-opacity-25 text-white rounded-full z-10"
            onClick={() => scrollContainer(secondHalfRef, "right")}
          >
            <ArrowBigRightDash />
          </button>
        </div>
      </div>
    </section>
  );
}
