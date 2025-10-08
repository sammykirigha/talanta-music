'use client';

import type { Metadata } from 'next';
import { useState, useEffect } from 'react';
import { useForm, ValidationError } from '@formspree/react';


export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [errors, setErrors] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [submitMessage, setSubmitMessage] = useState('');
  const [state, handleSubmit, reset] = useForm("xanpdbkb");

  useEffect(() => {
    if (state.succeeded) {
      setSubmitMessage('Thank you for your message! We\'ll get back to you soon.');
      setFormData({ name: '', email: '', message: '' });
      reset();
    }
  }, [state.succeeded, reset]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    if (errors[e.target.name as keyof typeof errors]) {
      setErrors({ ...errors, [e.target.name]: '' });
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-[#01435d] text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Contact Us
          </h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto">
            We&apos;d love to hear from you. Reach out with questions about our courses, instruments, or how to get involved.
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="bg-white rounded-lg shadow-md p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Send us a Message</h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                    Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className={`w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#f06723] ${errors.name ? 'border-red-500' : 'border-gray-300'
                      }`}
                    aria-describedby={errors.name ? 'name-error' : undefined}
                  />
                  <ValidationError
                    prefix="Name"
                    field="name"
                    errors={state.errors}
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className={`w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#f06723] ${errors.email ? 'border-red-500' : 'border-gray-300'
                      }`}
                    aria-describedby={errors.email ? 'email-error' : undefined}
                  />
                  <ValidationError
                    prefix="Email"
                    field="email"
                    errors={state.errors}
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    value={formData.message}
                    onChange={handleChange}
                    className={`w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#f06723] ${errors.message ? 'border-red-500' : 'border-gray-300'
                      }`}
                    aria-describedby={errors.message ? 'message-error' : undefined}
                  />
                  <ValidationError
                    prefix="Message"
                    field="message"
                    errors={state.errors}
                  />
                </div>
                <button
                  type="submit"
                 disabled={state.submitting}
                  className="w-full bg-[#f06723] text-white px-6 py-3 rounded-md hover:bg-[#d55a1f] transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {state.submitting ? 'Sending...' : 'Send Message'}
                </button>
                {submitMessage && (
                  <p className="text-green-600 text-center mt-4">{submitMessage}</p>
                )}
              </form>
            </div>

            {/* Contact Information */}
            <div className="space-y-8">
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Get in Touch</h2>
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <div className="bg-[#f06723] text-white w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0">
                      📍
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900">Location</h3>
                      <p className="text-gray-600">Utawala opposite AP training college,<br />Twiga Plaza 1nd floor</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="bg-[#f06723] text-white w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0">
                      📞
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900">Phone</h3>
                      <p className="text-gray-600">0794 943 791 / 0703 26 34 34</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="bg-[#f06723] text-white w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0">
                      ✉️
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900">Email</h3>
                      <p className="text-gray-600">talantaschool.arts@gmail.com</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Map Placeholder */}
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Find Us</h3>
                <iframe
                  src="https://maps.google.com/maps?q=Talanta%20Music%20and%20Arts%20Academy%2C%20Utawala%2C%20Nairobi%2C%20Kenya&t=&z=15&ie=UTF8&iwloc=&output=embed"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="rounded-lg"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}