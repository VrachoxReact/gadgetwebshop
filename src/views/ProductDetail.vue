<template>
  <div v-if="product" class="bg-white rounded-lg shadow-lg p-8">
    <div class="flex flex-col md:flex-row">
      <div class="md:w-1/2 mb-8 md:mb-0">
        <img
          :src="product.image"
          :alt="product.name"
          class="w-full h-auto rounded-lg shadow-md transition-transform duration-300 hover:scale-105"
        />
      </div>
      <div class="md:w-1/2 md:pl-8">
        <h1 class="text-4xl font-bold mb-4 text-indigo-600">
          {{ product.name }}
        </h1>
        <p class="text-xl text-gray-600 mb-6">{{ product.description }}</p>
        <div class="mb-6 bg-gray-100 p-4 rounded-lg">
          <h2 class="text-2xl font-semibold mb-2 text-indigo-600">
            Key Features:
          </h2>
          <ul class="list-disc list-inside text-gray-600">
            <li v-for="feature in product.features" :key="feature" class="mb-1">
              {{ feature }}
            </li>
          </ul>
        </div>
        <div class="mb-6">
          <h2 class="text-2xl font-semibold mb-2 text-indigo-600">
            Specifications:
          </h2>
          <table class="w-full text-left">
            <tbody>
              <tr
                v-for="(value, key) in product.specifications"
                :key="key"
                class="border-b"
              >
                <td class="py-2 font-semibold text-gray-600">{{ key }}</td>
                <td class="py-2 text-gray-800">{{ value }}</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p class="text-3xl font-bold text-indigo-600 mb-6">
          ${{ product.price.toFixed(2) }}
        </p>
        <div class="flex items-center mb-6">
          <button
            @click="decreaseQuantity"
            class="bg-gray-200 text-gray-600 px-3 py-1 rounded-l-full hover:bg-gray-300 transition-colors"
          >
            -
          </button>
          <input
            v-model="quantity"
            type="number"
            min="1"
            class="w-16 text-center border-t border-b border-gray-200"
          />
          <button
            @click="increaseQuantity"
            class="bg-gray-200 text-gray-600 px-3 py-1 rounded-r-full hover:bg-gray-300 transition-colors"
          >
            +
          </button>
        </div>
        <button
          @click="addToCart(product)"
          class="bg-indigo-600 text-white px-8 py-3 rounded-full text-lg hover:bg-indigo-700 transition-colors shadow-lg hover:shadow-xl transform hover:-translate-y-1"
        >
          Add to Cart
        </button>
      </div>
    </div>
    <div class="mt-12">
      <h2 class="text-3xl font-bold mb-6 text-indigo-600">Related Products</h2>
      <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div
          v-for="relatedProduct in relatedProducts"
          :key="relatedProduct.id"
          class="bg-white rounded-lg shadow-md overflow-hidden transition-transform hover:scale-105"
        >
          <img
            :src="relatedProduct.image"
            :alt="relatedProduct.name"
            class="w-full h-48 object-cover"
          />
          <div class="p-4">
            <h3 class="text-xl font-semibold mb-2 text-indigo-600">
              {{ relatedProduct.name }}
            </h3>
            <p class="text-gray-600 mb-4">{{ relatedProduct.description }}</p>
            <div class="flex justify-between items-center">
              <span class="text-2xl font-bold text-indigo-600"
                >${{ relatedProduct.price.toFixed(2) }}</span
              >
              <router-link
                :to="`/product/${relatedProduct.id}`"
                class="bg-indigo-600 text-white px-4 py-2 rounded-full hover:bg-indigo-700 transition-colors"
              >
                View Details
              </router-link>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div v-else class="text-2xl text-center text-gray-600">Product not found</div>
</template>

<script lang="ts" setup>
import { ref, onMounted, computed } from "vue";
import { useRoute } from "vue-router";
import { useProductStore } from "@/stores/product";
import { useCartStore } from "@/stores/cart";
import type { Product } from "@/stores/product";

const route = useRoute();
const productStore = useProductStore();
const cartStore = useCartStore();

const product = ref<Product | undefined>(undefined);
const showNotification = ref(false);
const quantity = ref(1);

onMounted(() => {
  const productId = Number(route.params.id);
  product.value = productStore.getProductById(productId);
});

const relatedProducts = computed(() => {
  if (!product.value) return [];
  return productStore
    .getProducts()
    .filter(
      (p) =>
        p.category === product.value?.category && p.id !== product.value?.id
    )
    .slice(0, 3);
});

const addToCart = (product: Product) => {
  if (product) {
    for (let i = 0; i < quantity.value; i++) {
      cartStore.addItem(product);
    }
    showNotification.value = true;
    setTimeout(() => {
      showNotification.value = false;
    }, 2000);
  }
};

const decreaseQuantity = () => {
  if (quantity.value > 1) {
    quantity.value--;
  }
};

const increaseQuantity = () => {
  quantity.value++;
};
</script>
