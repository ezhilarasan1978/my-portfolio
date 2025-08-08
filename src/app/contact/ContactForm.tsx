'use client'

import React from 'react'

export default function ContactForm() {
  return (
    <form
      action="https://formspree.io/f/mzzvkywr" // Replace with your real Formspree endpoint
      method="POST"
      className="space-y-6"
    >
      <div>
        <label htmlFor="name" className="block font-medium mb-1 text-gray-800">
          Your Name
        </label>
        <input
          id="name"
          type="text"
          name="name"
          className="border border-gray-300 rounded-lg p-3 w-full focus:ring-2 focus:ring-blue-500 outline-none"
          required
        />
      </div>

      <div>
        <label htmlFor="email" className="block font-medium mb-1 text-gray-800">
          Email Address
        </label>
        <input
          id="email"
          type="email"
          name="email"
          className="border border-gray-300 rounded-lg p-3 w-full focus:ring-2 focus:ring-blue-500 outline-none"
          required
        />
      </div>

      <div>
        <label htmlFor="message" className="block font-medium mb-1 text-gray-800">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          className="border border-gray-300 rounded-lg p-3 w-full focus:ring-2 focus:ring-blue-500 outline-none"
          rows={5}
          required
        />
      </div>

      <button
        type="submit"
        className="bg-gradient-to-r from-blue-600 to-blue-800 text-white px-6 py-3 rounded-lg shadow-md hover:from-blue-700 hover:to-blue-900 transition-all"
      >
        Send Message
      </button>
    </form>
  )
}
