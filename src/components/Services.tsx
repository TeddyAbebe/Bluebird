import React from "react";
import { Clock, Utensils, Heart, Activity, UserPlus, Home } from "lucide-react";

export function Services() {
  const services = [
    {
      icon: <Clock className="h-8 w-8 text-primary-800" />,
      title: "24/7 Care",
      description: "Round-the-clock professional care and supervision",
    },
    {
      icon: <Utensils className="h-8 w-8 text-primary-800" />,
      title: "Nutritious Meals",
      description: "Personalized meal plans and dietary accommodations",
    },
    {
      icon: <Activity className="h-8 w-8 text-primary-800" />,
      title: "Health Monitoring",
      description: "Regular health assessments and medication management",
    },
    {
      icon: <UserPlus className="h-8 w-8 text-primary-800" />,
      title: "Personal Care",
      description: "Assistance with daily activities and personal hygiene",
    },
    {
      icon: <Heart className="h-8 w-8 text-primary-800" />,
      title: "Social Activities",
      description: "Engaging social programs and recreational activities",
    },
    {
      icon: <Home className="h-8 w-8 text-primary-800" />,
      title: "Comfortable Living",
      description: "Private and semi-private rooms in a home-like setting",
    },
  ];

  return (
    <section className="py-20 bg-primary-50" id="services">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-display text-4xl font-bold text-gray-900 mb-4">
            Our Services
          </h2>
          <p className="text-gray-600 text-base max-w-2xl mx-auto leading-relaxed">
            We provide comprehensive care services tailored to meet the unique
            needs of each resident
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white hover:bg-slate-900 hover:text-white p-8 rounded-lg shadow-md hover:shadow-lg cursor-pointer hover:scale-105 transition-all duration-500"
            >
              <div className="mb-4">{service.icon}</div>
              <h3 className="text-xl font-display font-semibold mb-3">
                {service.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
