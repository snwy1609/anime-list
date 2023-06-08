<template>

   <div class=" bg-gray-200 rounded-lg relative ">
      <div class="flex h-52 w-full ">
        <div ><img :src="anime.images.jpg.large_image_url" class="h-52 w-52 p-2"  /></div> 
        <div class=" flex flex-col ">

            <p class="  text-left font-serif text-s decoration-slate-400 font-semibold  ">{{ anime.title }}</p>
            <p class="  text-left font-serif text-s  decoration-slate-400  ">{{ anime.status}}</p>
       <!-- <p class="text-xs text-start text-cyan-600 ">{{ anime.entry[0].url}}</p> -->
        </div>
      
      </div>
   </div>



</template>

<script>
export default {
    props:['anime']

}
</script>

<style>

</style>