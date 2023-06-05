<template>
  <div class="home"></div>
   

  
  <div v-for="anime in data" :key="anime.mal_id" class="grid grid-flow-row auto-rows-max">
    <img :src="anime.entry[0].images.jpg.image_url"/>
  <div >{{ anime.entry[0].title }}</div></div>

</template>

<script>
// @ is an alias to /src
import fetchData from '@/data/fetchData'

import { ref } from 'vue'

export default {
  name: 'HomeView',
  components: {
    
  },


  setup(){
    
    const data=ref()
   fetchData('recommendations/anime')
   .then(response=>{
     data.value=response.data
   })
    return{data}
  }
}
</script>
