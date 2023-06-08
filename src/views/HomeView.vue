<template >
  <div class="home">
   
  <RecommendationView/>
  <ScheduleView/>
  </div>
</template>

<script>
// @ is an alias to /src
import fetchData from '@/data/fetchData'

import { ref } from 'vue'

import RecommendationView from './components/RecommendationView.vue'
import ScheduleView from './components/ScheduleView.vue';

export default {
  name: 'HomeView',
  components: {
    RecommendationView,
    ScheduleView
}, 

  
}
</script>


