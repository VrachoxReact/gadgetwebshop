<template>
  <div>
    <h1 class="text-4xl font-bold mb-8 text-center">Your Cart</h1>
    <div
      v-if="cartItems.length === 0"
      class="text-xl text-center text-gray-600"
    >
      Your cart is empty.
    </div>
    <div v-else class="bg-white rounded-lg shadow-md p-6">
      <div
        v-for="item in cartItems"
        :key="item.id"
        class="flex justify-between items-center mb-4 pb-4 border-b last:border-b-0"
      >
        <div class="flex items-center">
          <img
            :src="item.image"
            :alt="item.name"
            class="w-16 h-16 object-cover rounded mr-4"
          />
          <div>
            <h2 class="text-xl font-semibold">{{ item.name }}</h2>
            <p class="text-gray-600">${{ item.price.toFixed(2) }}</p>
          </div>
        </div>
        <div class="flex items-center">
          <div class="mr-4">
            <button
              @click="decreaseQuantity(item)"
              class="bg-gray-200 text-gray-600 px-2 py-1 rounded-l"
            >
              -
            </button>
            <input
              type="number"
              v-model="item.quantity"
              @change="updateQuantity(item)"
              class="w-12 text-center border-t border-b border-gray-200"
            />
            <button
              @click="increaseQuantity(item)"
              class="bg-gray-200 text-gray-600 px-2 py-1 rounded-r"
            >
              +
            </button>
          </div>
          <p class="text-lg font-semibold mr-4">
            ${{ (item.price * item.quantity).toFixed(2) }}
          </p>
          <button
            @click="removeFromCart(item.id)"
            class="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 transition-colors"
          >
            Remove
          </button>
        </div>
      </div>
      <div class="mt-6 text-right">
        <p class="text-xl mb-2">Subtotal: ${{ cartSubtotal.toFixed(2) }}</p>
        <p class="text-2xl font-bold">Total: ${{ cartTotal.toFixed(2) }}</p>
      </div>
      <div class="mt-8 flex justify-between">
        <button
          @click="clearCart"
          class="bg-gray-500 text-white px-6 py-3 rounded hover:bg-gray-600 transition-colors"
        >
          Clear Cart
        </button>
        <router-link
          to="/checkout"
          class="bg-indigo-600 text-white px-6 py-3 rounded hover:bg-indigo-700 transition-colors"
        >
          Proceed to Checkout
        </router-link>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { computed } from "vue";
import { useCartStore } from "@/stores/cart";
import type { CartItem } from "@/stores/cart";

const cartStore = useCartStore();

const cartItems = computed(() => cartStore.items);
const cartSubtotal = computed(() => cartStore.total);
const cartTotal = computed(() => cartStore.total);

const removeFromCart = (id: number) => {
  cartStore.removeItem(id);
};

const clearCart = () => {
  cartStore.clearCart();
};

const updateQuantity = (item: CartItem) => {
  cartStore.updateQuantity(item.id, item.quantity);
};

const decreaseQuantity = (item: CartItem) => {
  if (item.quantity > 1) {
    cartStore.updateQuantity(item.id, item.quantity - 1);
  }
};

const increaseQuantity = (item: CartItem) => {
  cartStore.updateQuantity(item.id, item.quantity + 1);
};
</script>
