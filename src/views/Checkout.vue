<template>
  <div class="max-w-6xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
    <h1 class="text-4xl font-extrabold mb-10 text-center text-indigo-600">
      Checkout
    </h1>
    <div
      v-if="cartItems.length === 0"
      class="text-xl text-center text-gray-600 mb-8 bg-white rounded-lg shadow-md p-8"
    >
      Your cart is empty. Please add items before checking out.
    </div>
    <div v-else class="grid grid-cols-1 lg:grid-cols-2 gap-12">
      <div class="bg-white rounded-lg shadow-md p-8">
        <h2 class="text-2xl font-semibold mb-6 text-indigo-600">
          Order Summary
        </h2>
        <div class="space-y-4">
          <div
            v-for="item in cartItems"
            :key="item.id"
            class="flex justify-between items-center border-b pb-4 last:border-b-0 last:pb-0"
          >
            <div class="flex items-center">
              <img
                :src="item.image"
                :alt="item.name"
                class="w-16 h-16 object-cover rounded-md mr-4"
              />
              <div>
                <h3 class="font-medium">{{ item.name }}</h3>
                <p class="text-gray-500">Quantity: {{ item.quantity }}</p>
              </div>
            </div>
            <span class="font-semibold"
              >${{ (item.price * item.quantity).toFixed(2) }}</span
            >
          </div>
        </div>
        <div class="mt-6 pt-6 border-t">
          <div class="flex justify-between items-center text-xl font-bold">
            <span>Total:</span>
            <span>${{ cartTotal.toFixed(2) }}</span>
          </div>
        </div>
      </div>

      <div class="bg-white rounded-lg shadow-md p-8">
        <h2 class="text-2xl font-semibold mb-6 text-indigo-600">
          Shipping Information
        </h2>
        <form @submit.prevent="processOrder" class="space-y-6">
          <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label
                for="firstName"
                class="block text-sm font-medium text-gray-700 mb-1"
                >First Name</label
              >
              <input
                type="text"
                id="firstName"
                v-model="shippingInfo.firstName"
                required
                class="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500 transition-all duration-200"
              />
            </div>
            <div>
              <label
                for="lastName"
                class="block text-sm font-medium text-gray-700 mb-1"
                >Last Name</label
              >
              <input
                type="text"
                id="lastName"
                v-model="shippingInfo.lastName"
                required
                class="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500 transition-all duration-200"
              />
            </div>
          </div>
          <!-- Add more form fields (address, city, zip, country) similar to the above structure -->
          <button
            type="submit"
            class="w-full bg-indigo-600 text-white px-6 py-3 rounded-md hover:bg-indigo-700 transition-colors duration-200 transform hover:-translate-y-1 hover:shadow-lg"
          >
            Place Order
          </button>
        </form>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref, computed } from "vue";
import { useRouter } from "vue-router";
import { useCartStore } from "@/stores/cart";

const router = useRouter();
const cartStore = useCartStore();

const cartItems = computed(() => cartStore.items);
const cartTotal = computed(() => cartStore.total);

const shippingInfo = ref({
  name: "",
  address: "",
  city: "",
  zipCode: "",
  country: "",
});

const processOrder = () => {
  // Here you would typically send the order data to a server
  console.log("Order processed:", {
    items: cartItems.value,
    total: cartTotal.value,
    shipping: shippingInfo.value,
  });

  // Clear the cart
  cartStore.clearCart();

  // Show a success message
  alert("Thank you for your order! It has been processed successfully.");

  // Redirect to the home page
  router.push("/");
};
</script>

<style scoped>
input:focus {
  outline: none;
  box-shadow: 0 0 0 3px rgba(99, 102, 241, 0.2);
}
</style>
