<template>
  <div class="container grid grid-cols-3 mx-auto gap-4">
    <div
      class="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700"
      v-for="card in cardsData"
      :key="card"
      @click="router.push(`/detail/${card.id}`)"
    >
      <a href="#">
        <img
          class="rounded-t-lg w-full object-cover h-52 object-top"
          :src="card.img"
          alt=""
        />
      </a>
      <div class="p-5">
        <a href="#">
          <h5
            class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white"
          >
            {{ card.title }}
          </h5>
        </a>
        <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
          {{ card.author }}
        </p>
        <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
          {{ card.country }}
        </p>
        <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
          {{ card.language }}
        </p>
        <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
          Pages :{{ card.pages }} | Year :{{ card.year }}
        </p>
        <a
          href="#"
          class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          Read more
          <svg
            class="w-3.5 h-3.5 ml-2"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 14 10"
          >
            <path
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M1 5h12m0 0L9 1m4 4L9 9"
            />
          </svg>
        </a>
      </div>
    </div>
  </div>
</template>

<script>
import { ref } from "vue";
import CardsData from "../data.json";
import { useRouter } from "vue-router";

export default {
  setup() {
    const cardsData = ref(CardsData);

    const router = useRouter();

    return { cardsData, router };
  },
};
</script>
