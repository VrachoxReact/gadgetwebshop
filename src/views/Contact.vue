<template>
  <div class="max-w-6xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
    <h1
      class="text-4xl md:text-5xl font-extrabold mb-10 text-center text-indigo-600"
    >
      Get in Touch
    </h1>
    <div class="grid grid-cols-1 md:grid-cols-2 gap-12">
      <div class="bg-white rounded-lg shadow-lg p-8 mb-8">
        <h2 class="text-2xl font-semibold mb-6 text-indigo-600">
          Send Us a Message
        </h2>
        <p class="text-lg text-gray-600 mb-8">
          Have questions or need assistance? We're here to help! Fill out the
          form below, and our team will get back to you as soon as possible.
        </p>
        <form @submit.prevent="submitForm" class="space-y-6">
          <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label
                for="name"
                class="block text-sm font-medium text-gray-700 mb-1"
                >Name</label
              >
              <input
                type="text"
                id="name"
                v-model="name"
                required
                class="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500 transition-colors"
                placeholder="Your name"
              />
            </div>
            <div>
              <label
                for="email"
                class="block text-sm font-medium text-gray-700 mb-1"
                >Email</label
              >
              <input
                type="email"
                id="email"
                v-model="email"
                required
                class="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500 transition-colors"
                placeholder="your.email@example.com"
              />
            </div>
          </div>
          <div>
            <label
              for="subject"
              class="block text-sm font-medium text-gray-700 mb-1"
              >Subject</label
            >
            <input
              type="text"
              id="subject"
              v-model="subject"
              required
              class="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500 transition-colors"
              placeholder="What is your message about?"
            />
          </div>
          <div>
            <label
              for="message"
              class="block text-sm font-medium text-gray-700 mb-1"
              >Message</label
            >
            <textarea
              id="message"
              v-model="message"
              required
              rows="5"
              class="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500 transition-colors"
              placeholder="Your message here..."
            ></textarea>
          </div>
          <div class="text-center">
            <button
              type="submit"
              class="bg-indigo-600 text-white px-8 py-3 rounded-full text-lg font-semibold hover:bg-indigo-700 transition-colors transform hover:-translate-y-1 hover:shadow-lg"
            >
              Send Message
            </button>
          </div>
        </form>
      </div>
      <div>
        <div class="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h2 class="text-2xl font-semibold mb-6 text-indigo-600">
            Contact Information
          </h2>
          <div class="space-y-4">
            <div class="flex items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-6 w-6 text-indigo-600 mr-3"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                />
              </svg>
              <span class="text-lg">+1 (555) 123-4567</span>
            </div>
            <div class="flex items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-6 w-6 text-indigo-600 mr-3"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                />
              </svg>
              <span class="text-lg">support@techtrove.com</span>
            </div>
            <div class="flex items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-6 w-6 text-indigo-600 mr-3"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                />
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                />
              </svg>
              <span class="text-lg"
                >123 Tech Street, San Francisco, CA 94105</span
              >
            </div>
          </div>
        </div>
        <div class="bg-white rounded-lg shadow-lg p-8">
          <h2 class="text-2xl font-semibold mb-6 text-indigo-600">
            Business Hours
          </h2>
          <ul class="space-y-2">
            <li class="flex justify-between">
              <span class="font-medium">Monday - Friday:</span>
              <span>9:00 AM - 6:00 PM</span>
            </li>
            <li class="flex justify-between">
              <span class="font-medium">Saturday:</span>
              <span>10:00 AM - 4:00 PM</span>
            </li>
            <li class="flex justify-between">
              <span class="font-medium">Sunday:</span>
              <span>Closed</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref } from "vue";

const name = ref("");
const email = ref("");
const subject = ref("");
const message = ref("");

const submitForm = () => {
  // Here you would typically send the form data to a server
  console.log("Form submitted:", {
    name: name.value,
    email: email.value,
    subject: subject.value,
    message: message.value,
  });
  // Reset form fields
  name.value = "";
  email.value = "";
  subject.value = "";
  message.value = "";
  alert("Thank you for your message. We will get back to you soon!");
};
</script>

<style scoped>
input:focus,
textarea:focus {
  outline: none;
  box-shadow: 0 0 0 3px rgba(99, 102, 241, 0.2);
}
</style>
