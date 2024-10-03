<template>
  <img
    :src="loadedSrc"
    :alt="alt"
    :class="{ 'opacity-0': !isLoaded }"
    class="transition-opacity duration-300"
    @load="onLoad"
  />
</template>

<script lang="ts" setup>
import { ref, onMounted } from "vue";

const props = defineProps<{
  src: string;
  alt: string;
}>();

const loadedSrc = ref("");
const isLoaded = ref(false);

const onLoad = () => {
  isLoaded.value = true;
};

onMounted(() => {
  const img = new Image();
  img.onload = () => {
    loadedSrc.value = props.src;
  };
  img.src = props.src;
});
</script>
