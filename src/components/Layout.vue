<template>
  <div class="flex flex-col min-h-screen bg-gray-50">
    <header
      class="bg-gradient-to-r from-indigo-600 to-purple-600 text-white shadow-lg sticky top-0 z-50"
    >
      <div class="container mx-auto py-4 px-6">
        <div class="flex justify-between items-center">
          <router-link
            to="/"
            class="text-3xl font-bold tracking-tight flex items-center group"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-8 w-8 mr-2 transform group-hover:rotate-12 transition-transform"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fill-rule="evenodd"
                d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z"
                clip-rule="evenodd"
              />
            </svg>
            TechTrove
          </router-link>
          <nav class="space-x-6">
            <router-link
              v-for="link in navLinks"
              :key="link.to"
              :to="link.to"
              class="hover:text-indigo-200 transition-colors text-lg relative group"
              active-class="font-bold"
            >
              {{ link.text }}
              <span
                class="absolute left-0 right-0 bottom-0 h-0.5 bg-white transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left"
              ></span>
            </router-link>
            <router-link
              to="/cart"
              class="bg-white text-indigo-600 px-4 py-2 rounded-full hover:bg-indigo-100 transition-colors flex items-center group"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-5 w-5 mr-2 transform group-hover:rotate-12 transition-transform"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  d="M3 1a1 1 0 000 2h1.22l.305 1.222a.997.997 0 00.01.042l1.358 5.43-.893.892C3.74 11.846 4.632 14 6.414 14H15a1 1 0 000-2H6.414l1-1H14a1 1 0 00.894-.553l3-6A1 1 0 0017 3H6.28l-.31-1.243A1 1 0 005 1H3zM16 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM6.5 18a1.5 1.5 0 100-3 1.5 1.5 0 000 3z"
                />
              </svg>
              {{ cartItemsCount }}
            </router-link>
          </nav>
        </div>
      </div>
    </header>

    <!-- Promotional Banner with close button -->
    <div
      v-if="showPromo"
      class="bg-gradient-to-r from-yellow-400 to-yellow-600 text-white px-4 py-3 text-center relative"
    >
      <p class="font-medium text-lg">
        🎉 Summer Sale! Up to 50% off on selected items. Shop now! 🛒
      </p>
      <button
        @click="closePromo"
        class="absolute top-1 right-2 text-white hover:text-yellow-200 transition-colors"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="h-6 w-6"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fill-rule="evenodd"
            d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
            clip-rule="evenodd"
          />
        </svg>
      </button>
    </div>

    <main class="flex-grow container mx-auto py-8 px-6">
      <router-view></router-view>
    </main>

    <footer class="bg-gray-800 text-white">
      <div class="container mx-auto py-12 px-6">
        <div class="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 class="text-2xl font-bold mb-4 flex items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-6 w-6 mr-2"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fill-rule="evenodd"
                  d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z"
                  clip-rule="evenodd"
                />
              </svg>
              TechTrove
            </h3>
            <p class="text-gray-400">
              Your one-stop shop for cutting-edge technology and gadgets.
            </p>
          </div>
          <div>
            <h4 class="text-xl font-semibold mb-4">Quick Links</h4>
            <ul class="space-y-2">
              <li v-for="link in navLinks" :key="link.to">
                <router-link
                  :to="link.to"
                  class="hover:text-indigo-400 transition-colors flex items-center"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="h-4 w-4 mr-2"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                      clip-rule="evenodd"
                    />
                  </svg>
                  {{ link.text }}
                </router-link>
              </li>
            </ul>
          </div>
          <div>
            <h4 class="text-xl font-semibold mb-4">Customer Service</h4>
            <ul class="space-y-2">
              <li>
                <router-link
                  to="/shipping-returns"
                  class="hover:text-indigo-400 transition-colors flex items-center"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="h-4 w-4 mr-2"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      d="M8.707 7.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l2-2a1 1 0 00-1.414-1.414L11 7.586V3a1 1 0 10-2 0v4.586l-.293-.293z"
                    />
                    <path
                      d="M3 5a2 2 0 012-2h1a1 1 0 010 2H5v7h2l1 2h4l1-2h2V5h-1a1 1 0 110-2h1a2 2 0 012 2v10a2 2 0 01-2 2H5a2 2 0 01-2-2V5z"
                    />
                  </svg>
                  Shipping & Returns
                </router-link>
              </li>
              <li>
                <router-link
                  to="/faq"
                  class="hover:text-indigo-400 transition-colors flex items-center"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="h-4 w-4 mr-2"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z"
                      clip-rule="evenodd"
                    />
                  </svg>
                  FAQ
                </router-link>
              </li>
              <li>
                <router-link
                  to="/terms-conditions"
                  class="hover:text-indigo-400 transition-colors flex items-center"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="h-4 w-4 mr-2"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4zm2 6a1 1 0 011-1h6a1 1 0 110 2H7a1 1 0 01-1-1zm1 3a1 1 0 100 2h6a1 1 0 100-2H7z"
                      clip-rule="evenodd"
                    />
                  </svg>
                  Terms & Conditions
                </router-link>
              </li>
              <li>
                <router-link
                  to="/privacy-policy"
                  class="hover:text-indigo-400 transition-colors flex items-center"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="h-4 w-4 mr-2"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M18 8a6 6 0 01-7.743 5.743L10 14l-1 1-1 1H6v2H2v-4l4.257-4.257A6 6 0 1118 8zm-6-4a1 1 0 100 2 2 2 0 012 2 1 1 0 102 0 4 4 0 00-4-4z"
                      clip-rule="evenodd"
                    />
                  </svg>
                  Privacy Policy
                </router-link>
              </li>
            </ul>
          </div>
          <div>
            <h4 class="text-xl font-semibold mb-4">Newsletter</h4>
            <p class="text-gray-400 mb-4">
              Stay updated with our latest offers and products.
            </p>
            <form @submit.prevent="subscribeNewsletter" class="flex">
              <input
                v-model="email"
                type="email"
                placeholder="Your email"
                required
                class="flex-grow px-4 py-2 rounded-l-md focus:outline-none focus:ring-2 focus:ring-indigo-500 bg-gray-700 text-white"
              />
              <button
                type="submit"
                class="bg-indigo-600 text-white px-4 py-2 rounded-r-md hover:bg-indigo-700 transition-colors flex items-center"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-5 w-5 mr-2"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"
                  />
                  <path
                    d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"
                  />
                </svg>
                Subscribe
              </button>
            </form>
          </div>
        </div>
        <div
          class="mt-8 pt-8 border-t border-gray-700 text-center text-gray-400"
        >
          &copy; {{ new Date().getFullYear() }} TechTrove. All rights reserved.
        </div>
      </div>
    </footer>
  </div>
</template>

<script lang="ts" setup>
import { ref, computed } from "vue";
import { useCartStore } from "@/stores/cart";

const cartStore = useCartStore();
const cartItemsCount = computed(() => cartStore.itemsCount);

const showPromo = ref(true);
const email = ref("");

const navLinks = [
  { to: "/", text: "Home" },
  { to: "/products", text: "Products" },
  { to: "/contact", text: "Contact" },
];

function closePromo() {
  showPromo.value = false;
}

function subscribeNewsletter() {
  // Implement newsletter subscription logic here
  alert(
    `Thank you for subscribing to our newsletter with email: ${email.value}`
  );
  email.value = "";
}
</script>
