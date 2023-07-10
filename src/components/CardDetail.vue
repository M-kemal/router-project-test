<template>
  <div class="w-full h-full flex- items-center justify-center">
    <div class="">
      <a
        href="#"
        class="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700"
      >
        <h5
          class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white"
        >
          {{ book.title }}
        </h5>
        <p class="font-normal text-gray-700 dark:text-gray-400">
          {{ book.author }}
        </p>
        <p class="font-normal text-gray-700 dark:text-gray-400">
          {{ book.content }}
        </p>
      </a>
    </div>
  </div>
</template>

<script>
import { useRoute } from "vue-router";
import CardsData from "../data.json";
import { onBeforeMount, ref } from "vue";

export default {
  setup() {
    const route = useRoute();
    const { id } = route.params;
    const book = ref(null);

    onBeforeMount(() => {
      book.value = CardsData.find((b) => b.id === parseInt(id));
    });

    return { book };
  },
};
</script>
