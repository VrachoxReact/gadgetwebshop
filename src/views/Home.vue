<template>
  <div>
    <section
      class="bg-gradient-to-r from-indigo-600 to-purple-600 text-white py-24 mb-20 rounded-lg shadow-xl relative overflow-hidden"
    >
      <div class="container mx-auto text-center px-4 relative z-10">
        <h1
          class="text-5xl md:text-6xl font-extrabold mb-6 animate-fade-in-down"
        >
          Welcome to TechTrove
        </h1>
        <p
          class="text-xl md:text-2xl mb-10 max-w-3xl mx-auto animate-fade-in-up"
        >
          Discover cutting-edge gadgets that will revolutionize your tech
          experience. From smart home devices to wearable tech, we've got the
          latest innovations at your fingertips.
        </p>
        <router-link
          to="/products"
          class="bg-white text-indigo-600 px-8 py-4 rounded-full text-lg font-semibold hover:bg-indigo-100 transition-colors inline-block shadow-lg hover:shadow-xl transform hover:-translate-y-1 animate-bounce"
        >
          Explore Our Products
        </router-link>
      </div>
      <div class="absolute inset-0 bg-black opacity-20"></div>
      <div class="absolute bottom-0 left-0 right-0">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path
            fill="#ffffff"
            fill-opacity="1"
            d="M0,96L48,112C96,128,192,160,288,160C384,160,480,128,576,112C672,96,768,96,864,112C960,128,1056,160,1152,160C1248,160,1344,128,1392,112L1440,96L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
          ></path>
        </svg>
      </div>
    </section>

    <FeaturedProducts />

    <section class="mb-20 bg-gray-100 py-20 rounded-lg shadow-inner">
      <div class="container mx-auto px-4">
        <h2
          class="text-3xl md:text-4xl font-bold mb-10 text-center text-indigo-600"
        >
          Why Choose TechTrove?
        </h2>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-10">
          <div
            v-for="feature in features"
            :key="feature.title"
            class="bg-white rounded-lg shadow-md p-8 transition-all duration-300 hover:shadow-xl hover:scale-105"
          >
            <div class="text-indigo-600 mb-6">
              <component :is="feature.icon" class="w-16 h-16 mx-auto" />
            </div>
            <h3 class="text-2xl font-semibold mb-4 text-center text-indigo-600">
              {{ feature.title }}
            </h3>
            <p class="text-gray-600 text-center">{{ feature.description }}</p>
          </div>
        </div>
      </div>
    </section>

    <section class="mb-20">
      <h2
        class="text-3xl md:text-4xl font-bold mb-10 text-center text-indigo-600"
      >
        What Our Customers Say
      </h2>
      <div class="grid grid-cols-1 md:grid-cols-2 gap-10">
        <div
          v-for="testimonial in testimonials"
          :key="testimonial.name"
          class="bg-white rounded-lg shadow-md p-8 flex flex-col items-center text-center transition-all duration-300 hover:shadow-xl hover:scale-105"
        >
          <img
            :src="testimonial.avatar"
            :alt="testimonial.name"
            class="w-24 h-24 rounded-full mb-6 border-4 border-indigo-600"
          />
          <p class="text-gray-600 italic mb-6 text-lg">
            "{{ testimonial.quote }}"
          </p>
          <h4 class="font-semibold text-xl text-indigo-600">
            {{ testimonial.name }}
          </h4>
          <p class="text-gray-500">{{ testimonial.location }}</p>
        </div>
      </div>
    </section>
  </div>
</template>

<script lang="ts" setup>
import { defineComponent, h } from "vue";
import { useProductStore } from "@/stores/product";
import LazyImage from "@/components/LazyImage.vue";
import FeaturedProducts from "@/components/FeaturedProducts.vue";

const productStore = useProductStore();

const IconComponent = defineComponent({
  props: ["d"],
  render() {
    return h(
      "svg",
      {
        xmlns: "http://www.w3.org/2000/svg",
        fill: "none",
        viewBox: "0 0 24 24",
        stroke: "currentColor",
        class: "w-6 h-6",
      },
      [
        h("path", {
          "stroke-linecap": "round",
          "stroke-linejoin": "round",
          "stroke-width": "2",
          d: this.d,
        }),
      ]
    );
  },
});

const features = [
  {
    title: "Curated Selection",
    description:
      "We handpick the best gadgets from top brands to ensure quality and innovation.",
    icon: defineComponent({
      render: () =>
        h(IconComponent, {
          d: "M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01",
        }),
    }),
  },
  {
    title: "Competitive Pricing",
    description:
      "Get the latest tech at prices that won't break the bank. We offer regular deals and discounts.",
    icon: defineComponent({
      render: () =>
        h(IconComponent, {
          d: "M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z",
        }),
    }),
  },
  {
    title: "Expert Support",
    description:
      "Our tech-savvy team is always ready to assist you with product inquiries and after-sales support.",
    icon: defineComponent({
      render: () =>
        h(IconComponent, {
          d: "M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z",
        }),
    }),
  },
];

const featuredProducts = productStore.getProducts().slice(0, 3);

const testimonials = [
  {
    name: "Sarah Johnson",
    location: "New York, USA",
    quote:
      "TechTrove has the best selection of gadgets I've ever seen. Their customer service is top-notch too!",
    avatar: "https://randomuser.me/api/portraits/women/1.jpg",
  },
  {
    name: "Michael Chen",
    location: "San Francisco, USA",
    quote:
      "I love how easy it is to find exactly what I'm looking for on TechTrove. Great prices and fast shipping!",
    avatar: "https://randomuser.me/api/portraits/men/2.jpg",
  },
];
</script>

<style scoped>
@keyframes fadeInDown {
  from {
    opacity: 0;
    transform: translateY(-20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.animate-fade-in-down {
  animation: fadeInDown 1s ease-out;
}

.animate-fade-in-up {
  animation: fadeInUp 1s ease-out;
}
</style>
