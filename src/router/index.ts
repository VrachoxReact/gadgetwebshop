import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: () => import("@/views/Home.vue"),
    },
    {
      path: "/products",
      name: "products",
      component: () => import("@/views/Products.vue"),
    },
    {
      path: "/product/:id",
      name: "product-detail",
      component: () => import("@/views/ProductDetail.vue"),
    },
    {
      path: "/contact",
      name: "contact",
      component: () => import("@/views/Contact.vue"),
    },
    {
      path: "/cart",
      name: "cart",
      component: () => import("../views/Cart.vue"),
    },
    {
      path: "/checkout",
      name: "checkout",
      component: () => import("../views/Checkout.vue"),
    },
    {
      path: "/shipping-returns",
      name: "shipping-returns",
      component: () => import("../views/ShippingReturns.vue"),
    },
    {
      path: "/faq",
      name: "faq",
      component: () => import("../views/FAQ.vue"),
    },
    {
      path: "/terms-conditions",
      name: "terms-conditions",
      component: () => import("../views/TermsConditions.vue"),
    },
    {
      path: "/privacy-policy",
      name: "privacy-policy",
      component: () => import("../views/PrivacyPolicy.vue"),
    },
  ],
});

export default router;
