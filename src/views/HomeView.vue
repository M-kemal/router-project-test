<template>
  <div class="home h-screen bg-gray-100 py-2">
    <CardsView />
  </div>
</template>

<script>
// @ is an alias to /src
import CardsView from "@/components/CardsView.vue";
export default {
  name: "HomeView",
  components: { CardsView },
};
</script>
