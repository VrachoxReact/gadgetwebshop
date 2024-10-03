import { defineStore } from "pinia";
import { ref, computed } from "vue";

export interface CartItem {
  id: number;
  name: string;
  price: number;
  image: string;
  quantity: number;
}

export const useCartStore = defineStore("cart", () => {
  const items = ref<CartItem[]>([]);

  const itemsCount = computed(() =>
    items.value.reduce((sum, item) => sum + item.quantity, 0)
  );

  const total = computed(() =>
    items.value.reduce((sum, item) => sum + item.price * item.quantity, 0)
  );

  function addItem(item: Omit<CartItem, "quantity">) {
    const existingItem = items.value.find((i) => i.id === item.id);
    if (existingItem) {
      existingItem.quantity++;
    } else {
      items.value.push({ ...item, quantity: 1 });
    }
    saveCart();
  }

  function removeItem(id: number) {
    const index = items.value.findIndex((item) => item.id === id);
    if (index !== -1) {
      items.value.splice(index, 1);
      saveCart();
    }
  }

  function updateQuantity(id: number, quantity: number) {
    const item = items.value.find((i) => i.id === id);
    if (item) {
      item.quantity = Math.max(1, quantity);
      saveCart();
    }
  }

  function clearCart() {
    items.value = [];
    saveCart();
  }

  function saveCart() {
    localStorage.setItem("cart", JSON.stringify(items.value));
  }

  function loadCart() {
    const savedCart = localStorage.getItem("cart");
    if (savedCart) {
      items.value = JSON.parse(savedCart);
    }
  }

  // Load cart from localStorage when the store is created
  loadCart();

  return {
    items,
    itemsCount,
    total,
    addItem,
    removeItem,
    updateQuantity,
    clearCart,
  };
});
