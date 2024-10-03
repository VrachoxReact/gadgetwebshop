import { defineStore } from "pinia";

export interface Product {
  id: number;
  name: string;
  description: string;
  price: number;
  image: string;
}

export const useProductStore = defineStore("product", {
  state: () => ({
    products: [
      {
        id: 1,
        name: "iPhone 13 Pro",
        description:
          "Apple's latest flagship smartphone with advanced camera system",
        price: 999.99,
        image: "https://images.unsplash.com/photo-1632661674596-df8be070a5c5",
      },
      {
        id: 2,
        name: "iPad Air",
        description: "Powerful and versatile tablet for work and play",
        price: 599.99,
        image: "https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0",
      },
      {
        id: 3,
        name: "MacBook Pro",
        description: "High-performance laptop for professionals",
        price: 1299.99,
        image: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8",
      },
      {
        id: 4,
        name: "AirPods Pro",
        description: "Wireless earbuds with active noise cancellation",
        price: 249.99,
        image: "https://images.unsplash.com/photo-1588423771073-b8903fbb85b5",
      },
      {
        id: 5,
        name: "Samsung Galaxy S21",
        description: "Powerful Android smartphone with 5G capabilities",
        price: 799.99,
        image: "https://images.unsplash.com/photo-1610945265064-0e34e5519bbf",
      },
      {
        id: 6,
        name: "Nintendo Switch",
        description: "Hybrid gaming console for home and on-the-go play",
        price: 299.99,
        image: "https://images.unsplash.com/photo-1578303512597-81e6cc155b3e",
      },
      {
        id: 7,
        name: "Sony WH-1000XM4",
        description:
          "Premium wireless headphones with industry-leading noise cancellation",
        price: 349.99,
        image: "https://images.unsplash.com/photo-1618366712010-f4ae9c647dcb",
      },
      {
        id: 8,
        name: "DJI Mavic Air 2",
        description:
          "Compact drone with 4K camera and intelligent flight modes",
        price: 799.99,
        image: "https://images.unsplash.com/photo-1579829366248-204fe8413f31",
      },
      {
        id: 9,
        name: "Fitbit Versa 3",
        description: "Advanced fitness smartwatch with built-in GPS",
        price: 229.99,
        image: "https://images.unsplash.com/photo-1575311373937-040b8e1fd5b6",
      },
      {
        id: 10,
        name: "Amazon Echo Dot",
        description: "Smart speaker with Alexa voice assistant",
        price: 49.99,
        image: "https://images.unsplash.com/photo-1518444065439-e933c06ce9cd",
      },
      {
        id: 11,
        name: "GoPro HERO9 Black",
        description: "Versatile action camera with 5K video capabilities",
        price: 399.99,
        image: "https://images.unsplash.com/photo-1565849904461-04a58ad377e0",
      },
      {
        id: 12,
        name: "Bose QuietComfort Earbuds",
        description:
          "True wireless earbuds with world-class noise cancellation",
        price: 279.99,
        image: "https://images.unsplash.com/photo-1590658268037-6bf12165a8df",
      },
    ] as Product[],
  }),
  getters: {
    getProducts: (state) => () => state.products,
    getProductById: (state) => (id: number) =>
      state.products.find((product) => product.id === id),
  },
});
