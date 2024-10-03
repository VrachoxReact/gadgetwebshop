<template>
  <div class="max-w-4xl mx-auto py-8 px-4">
    <h1 class="text-4xl font-bold mb-8 text-center text-indigo-600">
      Privacy Policy
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
    title: "1. Information We Collect",
    content:
      "We collect personal information that you provide to us, such as your name, email address, shipping address, and payment information when you make a purchase. We also collect non-personal information such as browser type, IP address, and pages visited on our site.",
  },
  {
    title: "2. How We Use Your Information",
    content:
      "We use your information to process orders, provide customer service, improve our website and services, and send promotional emails (if you've opted in). We do not sell or share your personal information with third parties for their marketing purposes.",
  },
  {
    title: "3. Data Security",
    content:
      "We implement a variety of security measures to maintain the safety of your personal information. Your personal information is contained behind secured networks and is only accessible by a limited number of persons who have special access rights to such systems.",
  },
  {
    title: "4. Cookies",
    content:
      "We use cookies to enhance your browsing experience, analyze site traffic, and personalize content. You can choose to have your computer warn you each time a cookie is being sent, or you can choose to turn off all cookies through your browser settings.",
  },
  {
    title: "5. Third-Party Links",
    content:
      "Our website may contain links to third-party websites. We are not responsible for the privacy practices or content of these third-party sites. We encourage you to review the privacy policy of any site you visit.",
  },
];
</script>
