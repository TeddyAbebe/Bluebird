import React from 'react';
import { Mail, Phone, MapPin, Clock } from 'lucide-react';

export function Contact() {
  return (
    <section className="py-20 bg-white" id="contact">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-display text-4xl font-bold text-gray-900 mb-4">Contact Us</h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto leading-relaxed">
            We're here to answer your questions and help you make the best decision for your loved one
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-gray-50 p-8 rounded-lg">
            <h3 className="font-display text-2xl font-semibold mb-6">Get in Touch</h3>
            <div className="space-y-4">
              <div className="flex items-center">
                <Phone className="h-5 w-5 text-primary-600 mr-3" />
                <a href="tel:4252256227" className="text-gray-600 hover:text-primary-600">
                  (425) 225-6227
                </a>
              </div>
              <div className="flex items-center">
                <Mail className="h-5 w-5 text-primary-600 mr-3" />
                <span className="text-gray-600">contact@bluebirdmillcreek.com</span>
              </div>
              <div className="flex items-center">
                <MapPin className="h-5 w-5 text-primary-600 mr-3" />
                <span className="text-gray-600">Mill Creek, WA</span>
              </div>
              <div className="flex items-center">
                <Clock className="h-5 w-5 text-primary-600 mr-3" />
                <span className="text-gray-600">Available 24/7 for inquiries</span>
              </div>
            </div>

            <div className="mt-8">
              <h4 className="font-display text-xl font-semibold mb-4">Location</h4>
              <div className="aspect-w-16 aspect-h-9">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2673.7638882372766!2d-122.2087873!3d47.8605161!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDfCsDUxJzM3LjkiTiAxMjLCsDEyJzMxLjYiVw!5e0!3m2!1sen!2sus!4v1631825092134!5m2!1sen!2sus"
                  className="w-full h-64 rounded-lg"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                ></iframe>
              </div>
            </div>
          </div>

          <form className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Name</label>
              <input
                type="text"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-600 focus:border-transparent"
                placeholder="Your name"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
              <input
                type="email"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-600 focus:border-transparent"
                placeholder="your@email.com"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Phone</label>
              <input
                type="tel"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-600 focus:border-transparent"
                placeholder="(xxx) xxx-xxxx"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Message</label>
              <textarea
                rows={4}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-600 focus:border-transparent"
                placeholder="How can we help you?"
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full bg-primary-600 text-white py-3 px-6 rounded-lg hover:bg-primary-700 transition-colors font-semibold"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}