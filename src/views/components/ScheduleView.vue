<template>
  <div class="text-gray-400 m-2 font-mono">Schedule</div>
  <div class="grid grid-cols-2 w-full">
    <div v-for="anime in schedules" :key="anime.mal_id">
      <ScheduleCard :anime="anime" />
    </div>
  </div>
</template>

<script>
import { ref } from "vue";
import fetchData from "@/data/fetchData";
import ScheduleCard from "./cards/SchedulesCard.vue";

export default {
  components: {
    ScheduleCard,
  },

  setup() {
    const schedules = ref();
    fetchData("schedules").then((response) => {
      schedules.value = response.data;
    });
    return { schedules };
  },
};
</script>

<style>
</style>