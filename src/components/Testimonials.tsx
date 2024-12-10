import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

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
    name: "Mary Johnson",
    role: "Family Member",
    message:
      "BlueBird Millcreek has been an incredible place for my loved one. The care and attention provided by the team here has exceeded our expectations.",
    image: "https://via.placeholder.com/150?text=Mary+Johnson",
  },
  {
    id: 2,
    name: "David Lee",
    role: "Resident",
    message:
      "I've never felt more at home. The caregivers are so kind, and I feel safe and well-cared-for every day. Highly recommend!",
    image: "https://via.placeholder.com/150?text=David+Lee",
  },
  {
    id: 3,
    name: "Susan Parker",
    role: "Family Member",
    message:
      "The staff at BlueBird Millcreek go above and beyond to ensure comfort and well-being. It's comforting to know my family member is in such good hands.",
    image: "https://via.placeholder.com/150?text=Susan+Parker",
  },
  {
    id: 4,
    name: "Anna White",
    role: "Resident",
    message:
      "I appreciate the peaceful and homely environment at BlueBird. The caregivers treat everyone with respect, and I truly feel like part of the family.",
    image: "https://via.placeholder.com/150?text=Anna+White",
  },
  {
    id: 5,
    name: "John Black",
    role: "Family Member",
    message:
      "The transition was difficult, but the team at BlueBird made it so much easier. They genuinely care for their residents, and it shows every day.",
    image: "https://via.placeholder.com/150?text=John+Black",
  },
  {
    id: 6,
    name: "Laura Green",
    role: "Family Member",
    message:
      "Seeing my mother happy and well-cared for at BlueBird has brought peace to our whole family. We couldn't ask for a better place for her care.",
    image: "https://via.placeholder.com/150?text=Laura+Green",
  },
  {
    id: 7,
    name: "Michael Harris",
    role: "Resident",
    message:
      "The caregivers here go beyond expectations. Every day I feel cared for, and I enjoy the company and attention I receive from everyone at BlueBird.",
    image: "https://via.placeholder.com/150?text=Michael+Harris",
  },
  {
    id: 8,
    name: "Emma Davis",
    role: "Family Member",
    message:
      "I’m so grateful for the team at BlueBird Millcreek. The facility is wonderful, and my father is in great hands. They make a tough time so much easier.",
    image: "https://via.placeholder.com/150?text=Emma+Davis",
  },
];

const TestimonialSection: React.FC = () => {
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

        <Slider {...settings} className="flex flex-row gap-4 rounded-xl p-">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="bg-white p-6 rounded-xl border h-[250px] w-full"
            >
              <div className="flex items-center mb-4">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-16 h-16 rounded-full object-cover mr-4"
                />
                <div>
                  <h3 className="text-xl font-medium text-gray-900">
                    {testimonial.name}
                  </h3>
                  <p className="text-gray-600">{testimonial.role}</p>
                </div>
              </div>

              <p className="text-gray-700 text-sm sm:text-lg">
                {testimonial.message}
              </p>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default TestimonialSection;
