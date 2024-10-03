<template>
  <div class="max-w-4xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
    <h1 class="text-4xl font-extrabold mb-10 text-center text-indigo-600">
      Frequently Asked Questions
    </h1>
    <div class="bg-white rounded-lg shadow-lg p-8">
      <div v-for="(faq, index) in faqs" :key="index" class="mb-8 last:mb-0">
        <h2 class="text-xl font-semibold mb-3 text-indigo-600">
          {{ faq.question }}
        </h2>
        <p class="text-gray-700 leading-relaxed">{{ faq.answer }}</p>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { shallowRef } from "vue";

const faqs = shallowRef([
  {
    question: "How long does shipping take?",
    answer:
      "Standard shipping typically takes 3-5 business days. Expedited and next-day shipping options are also available at checkout.",
  },
  {
    question: "What is your return policy?",
    answer:
      "We offer a 30-day return policy for most items. Products must be in their original, unopened condition. Please see our Shipping & Returns page for more details.",
  },
  {
    question: "Do you offer international shipping?",
    answer:
      "Yes, we ship to many countries worldwide. International shipping rates and delivery times vary by destination.",
  },
  {
    question: "How can I track my order?",
    answer:
      "Once your order ships, you'll receive a tracking number via email. You can use this number to track your package on our website or the carrier's site.",
  },
  {
    question: "Are your products covered by a warranty?",
    answer:
      "Most of our products come with a manufacturer's warranty. The duration and coverage vary by product. Please check the product description for specific warranty information.",
  },
]);
</script>
