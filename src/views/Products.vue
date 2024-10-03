<template>
  <div>
    <h1 class="text-4xl font-bold mb-8 text-center text-indigo-600">
      Discover Our Tech Marvels
    </h1>
    <div
      class="mb-8 flex flex-col md:flex-row md:items-center md:justify-between"
    >
      <div class="mb-4 md:mb-0 md:w-1/3">
        <input
          v-model="searchQuery"
          type="text"
          placeholder="Search products..."
          class="w-full px-4 py-2 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all duration-300"
        />
      </div>
      <div class="md:w-1/3">
        <select
          v-model="selectedCategory"
          class="w-full px-4 py-2 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all duration-300"
        >
          <option value="">All Categories</option>
          <option
            v-for="category in categories"
            :key="category"
            :value="category"
          >
            {{ category }}
          </option>
        </select>
      </div>
      <div class="flex items-center justify-center md:justify-end mt-4 md:mt-0">
        <button
          @click="viewMode = 'grid'"
          :class="{ 'text-indigo-600': viewMode === 'grid' }"
          class="mr-2 p-2 rounded-full hover:bg-gray-200 transition-colors"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"
            />
          </svg>
        </button>
        <button
          @click="viewMode = 'list'"
          :class="{ 'text-indigo-600': viewMode === 'list' }"
          class="p-2 rounded-full hover:bg-gray-200 transition-colors"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M4 6h16M4 10h16M4 14h16M4 18h16"
            />
          </svg>
        </button>
      </div>
    </div>
    <div
      :class="{
        'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8':
          viewMode === 'grid',
      }"
    >
      <div
        v-for="product in filteredProducts"
        :key="product.id"
        :class="{
          'bg-white rounded-lg shadow-md overflow-hidden transition-all duration-300 hover:shadow-xl hover:scale-105':
            viewMode === 'grid',
          'bg-white rounded-lg shadow-md overflow-hidden transition-all duration-300 hover:shadow-xl mb-4 flex':
            viewMode === 'list',
        }"
      >
        <img
          :src="product.image"
          :alt="product.name"
          :class="{
            'w-full h-48 object-cover': viewMode === 'grid',
            'w-48 h-48 object-cover': viewMode === 'list',
          }"
        />
        <div
          :class="{
            'p-4': viewMode === 'grid',
            'p-4 flex-grow': viewMode === 'list',
          }"
        >
          <h2 class="text-xl font-semibold mb-2 text-indigo-600">
            {{ product.name }}
          </h2>
          <p
            class="text-gray-600 mb-4"
            :class="{ 'h-20 overflow-hidden': viewMode === 'grid' }"
          >
            {{ product.description }}
          </p>
          <div class="flex justify-between items-center">
            <span class="text-2xl font-bold text-indigo-600"
              >${{ product.price.toFixed(2) }}</span
            >
            <div class="space-x-2">
              <router-link
                :to="`/product/${product.id}`"
                class="bg-indigo-600 text-white px-4 py-2 rounded-full hover:bg-indigo-700 transition-colors transform hover:-translate-y-1 inline-block"
              >
                View Details
              </router-link>
              <button
                @click="addToCart(product)"
                class="bg-green-500 text-white px-4 py-2 rounded-full hover:bg-green-600 transition-colors transform hover:-translate-y-1"
              >
                Add to Cart
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div
      v-if="showNotification"
      class="fixed bottom-4 right-4 bg-green-500 text-white px-6 py-3 rounded-lg shadow-lg transition-opacity duration-300 animate-fade-in"
      :class="{ 'opacity-0': !showNotification }"
    >
      Item added to cart!
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref, computed } from "vue";
import { useCartStore } from "@/stores/cart";
import { useProductStore } from "@/stores/product";
import type { Product } from "@/stores/product";

const cartStore = useCartStore();
const productStore = useProductStore();

const products = ref(productStore.getProducts());
const showNotification = ref(false);
const searchQuery = ref("");
const selectedCategory = ref("");
const viewMode = ref("grid");

const categories = computed(() => {
  const allCategories = products.value.map((product) => product.category);
  return [...new Set(allCategories)];
});

const filteredProducts = computed(() => {
  return products.value.filter((product) => {
    const matchesSearch =
      product.name.toLowerCase().includes(searchQuery.value.toLowerCase()) ||
      product.description
        .toLowerCase()
        .includes(searchQuery.value.toLowerCase());
    const matchesCategory =
      selectedCategory.value === "" ||
      product.category === selectedCategory.value;
    return matchesSearch && matchesCategory;
  });
});

const addToCart = (product: Product) => {
  cartStore.addItem(product);
  showNotification.value = true;
  setTimeout(() => {
    showNotification.value = false;
  }, 2000);
};
</script>

<style scoped>
@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.animate-fade-in {
  animation: fadeIn 0.3s ease-out;
}
</style>
