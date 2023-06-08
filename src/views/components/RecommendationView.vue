<template>


<div class=" h-96 overflow-auto rounded w-auto ml-4 ">
 <div class="m-2 font-mono">Recommendations</div>
  <div class=" flex   ">
   
    <div v-for="anime in recommendations" :key="anime.mal_id" >
        <RecommendationCard :anime="anime"/>
      
    </div>
   </div>
  </div>
 
</template>

<script>
import { ref } from 'vue'
import fetchData from '@/data/fetchData'
import RecommendationCard from './cards/RecommendationCard.vue'

export default {

    components:{
       RecommendationCard
    },

 setup(){
   
  
   const recommendations=ref()
   fetchData('recommendations/anime')
  .then(response=>{
    recommendations.value=response.data
  })

  
   return{recommendations, }
 }

}
</script>

<style>
.grid {
  display: grid;
  grid-template-columns: repeat(1, minmax(0, 1fr));
  gap: 1rem;
  width: 100%;

  margin: 0 auto;
}

@media (min-width: 640px) {
  .grid {
    grid-template-columns: repeat(1, minmax(0, 1fr));
  }
}

@media (min-width: 768px) {
  .grid {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
}

@media (min-width: 1024px) {
  .grid {
    grid-template-columns: repeat(5, minmax(0, 1fr));
  }
}

</style>