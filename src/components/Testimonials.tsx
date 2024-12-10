import React, { useEffect, useState } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { X } from "lucide-react";

interface Testimonial {
  id: number;
  name: string;
  role: string;
  message: string;
  image: string;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Lisa Snavely",
    role: "Family member",
    message:
      "From the first time we entered Bluebird AFH and met Elsa Amanuel and her staff, we thought this has got to be too good to be true! But after 3 years of our mother living at Bluebird, I can tell you it’s not too good to be true. It is true. If you have an opportunity to have Bluebird become your parent’s home, do not hesitate to trust Elsa with your beloved Mom or Dad. During COVID restrictions I had every confidence that Bluebird Staff was caring for our Mom in a family setting, while protecting the residents from COVID diligently. Elsa has a talent/skill to hire people who have the same outlook about their work as she does. For the Amanuel’s Bluebird isn’t a profession, it’s a calling.",
    image: "https://via.placeholder.com/150?text=Mary+Johnson",
  },
  {
    id: 2,
    name: "S.L",
    role: "Caring daughter",
    message:
      "Review from a Caring daughter; I feel very fortunate to have found Bluebird Millcreek. Elsa and her well trained care givers have been so wonderful to my mother with their compassionate and caring personalities Elsa is a LPN, so it's very reassuring to know she is keeping a close eye on each residents needs, both health wise and emotionally. Elsa communicates extremely well with family and care givers. She also readily contacts and receives messages from your doctor, pharmacist and other professionals like physical or occupational therapist, when health issues arise. I love how prompt she is to follow through with their instructions and suggestions. Elsa cares about all of the residents as individuals and tries to find activities that each one enjoys.The home has a cozy, quiet atmosphere and is very clean and organized. Having my mother at Bluebird is a blessing that I'm thankful for every day.",
    image: "https://via.placeholder.com/150?text=David+Lee",
  },
  {
    id: 3,
    name: "Graziella Palumbo-Perry",
    role: "Spouse",
    message:
      "While describing how well, gently and compassionately Blue Bird took care of Lee to our friends, my husband ended his account by stating, ‘when I get old, I want to move into Blue Bird for Elsa and her family to take care of me’....and that really does sum it up …Elsa and her team do not provide services; they provide a family environment full of kindness, patience, and love. Yes, the place was clean; yes, Lee loved the food; and yes, they were very attentive to all his grooming needs (he was always clean)….but the love was palpable. They really cared about Lee and our family. We were always welcomed with smiles; provided updates; and were very mindful and respectful of our privacy. Especially while he was transitioning to the next life, Elsa and her family were there for us, ensuring he was comfortable, attending to his every needs and ours as well. What impressed me the most is that after Lee died, her primary concern was not to upset the rest of her guests while showing us dignity and respect. We could had not gone through this time as well as we all did, without their love and support. Thank God for Blue Bird, Elsa and her family.’ ….and I mean it. You guys are a blessing to all that comes to you….thank you so much for how well you took care of Lee and us. I actually miss you.",
    image: "https://via.placeholder.com/150?text=Susan+Parker",
  },
  {
    id: 4,
    name: "C. Fletcher",
    role: "Family member",
    message:
      "The Bluebird Mill Creek Adult Family Home (AFH) was a true blessing for my mother. When we first visited, it had an immediate feel of warmth and comfort. Elsa, the owner, is an LPN and has many years of experience in caring for the elderly. She is very knowledgeable and keeps current with the resident’s needs, doctors, and communication with family members. My mother required total care which they provided and so much more. The staff is very friendly and diligent at making sure the residents are comfortable at all times. The home is very clean and offers a variety of activities for its residents. They also provided nutritious and pleasing meals. I highly recommend the Bluebird Mill Creek AFH as a wonderful place for aging loved ones.",
    image: "https://via.placeholder.com/150?text=Anna+White",
  },
];

const TestimonialSection: React.FC = () => {
  const [selectedTestimonial, setSelectedTestimonial] =
    useState<Testimonial | null>(null);

  // Disable scrolling when the modal is open
  useEffect(() => {
    if (selectedTestimonial) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }

    return () => {
      document.body.classList.remove("overflow-hidden");
    };
  }, [selectedTestimonial]);

  const handleBackdropClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) {
      setSelectedTestimonial(null);
    }
  };

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: true,
    arrows: true,
    responsive: [
      {
        breakpoint: 1024, // For tablet or larger screens
        settings: {
          slidesToShow: 2, // Show 2 slides on medium screens
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768, // For mobile screens
        settings: {
          slidesToShow: 1, // Show 1 slide on mobile
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <section className="py-12">
      <div className="px-12 rounded-xl">
        <h2 className="text-3xl font-semibold text-center text-gray-800 mb-8">
          What Our Clients Say
        </h2>

        <Slider {...settings} className="flex flex-row gap-4 rounded-xl">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="bg-white p-6 rounded-xl border h-[250px] w-full cursor-pointer overflow-hidden mx-4 hover:bg-slate-900 group transition-all duration-700"
              onClick={() => setSelectedTestimonial(testimonial)}
            >
              <div className="flex items-center mb-4">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-16 h-16 rounded-full object-cover mr-4"
                />
                <div>
                  <h3 className="text-xl font-medium text-gray-900 group-hover:text-white">
                    {testimonial.name}
                  </h3>
                  <p className="text-gray-600 group-hover:text-white">
                    {testimonial.role}
                  </p>
                </div>
              </div>

              <p className="text-gray-700 group-hover:text-white text-sm sm:text-lg line-clamp-4">
                {testimonial.message}
              </p>
            </div>
          ))}
        </Slider>
      </div>

      {/* Modal for full message */}
      {selectedTestimonial && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
          onClick={handleBackdropClick}
        >
          <div className="bg-white p-8 rounded-lg max-w-3xl w-full relative">
            <button
              className="absolute top-2 right-2 text-gray-500 hover:text-gray-800"
              onClick={() => setSelectedTestimonial(null)}
            >
              <X size={"15px"} />
            </button>
            <div className="flex items-center mb-4">
              <img
                src={selectedTestimonial.image}
                alt={selectedTestimonial.name}
                className="w-16 h-16 rounded-full object-cover mr-4"
              />
              <div>
                <h3 className="text-xl font-medium text-gray-900">
                  {selectedTestimonial.name}
                </h3>
                <p className="text-gray-600">{selectedTestimonial.role}</p>
              </div>
            </div>
            <p className="text-gray-700">{selectedTestimonial.message}</p>
          </div>
        </div>
      )}
    </section>
  );
};

export default TestimonialSection;
