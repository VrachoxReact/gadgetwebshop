<template>
  <div class="max-w-4xl mx-auto py-8 px-4" v-once>
    <h1 class="text-4xl font-bold mb-8 text-center text-indigo-600">
      Terms & Conditions
    </h1>
    <div class="bg-white rounded-lg shadow-lg p-8">
      <section v-for="(section, index) in sections" :key="index" class="mb-8">
        <h2 class="text-2xl font-semibold mb-4 text-indigo-600">
          {{ section.title }}
        </h2>
        <p class="mb-4" v-html="section.content"></p>
      </section>
    </div>
  </div>
</template>

<script lang="ts" setup>
const sections = [
  {
    title: "1. Acceptance of Terms",
    content:
      "By accessing and using TechTrove's website and services, you agree to be bound by these Terms & Conditions. If you do not agree with any part of these terms, please do not use our website or services.",
  },
  {
    title: "2. Use of Website",
    content:
      "You agree to use our website for lawful purposes only and in a way that does not infringe upon or restrict others' use and enjoyment of the website.",
  },
  {
    title: "3. Product Information",
    content:
      "We strive to provide accurate product information, but we do not warrant that product descriptions or other content is accurate, complete, reliable, current, or error-free.",
  },
  {
    title: "4. Pricing and Availability",
    content:
      "All prices are subject to change without notice. We reserve the right to modify or discontinue products without notice. We are not liable for any modification, price change, or discontinuance of any product.",
  },
  {
    title: "5. Privacy Policy",
    content:
      "Your use of our website is also governed by our Privacy Policy. Please review our Privacy Policy, which also governs the site and informs users of our data collection practices.",
  },
];
</script>
