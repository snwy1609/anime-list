<template>
<div class="relative h-56 w-44 max-w-sm rounded-2xl m-2 bg-gray-100">

  
     
        <img class="rounded-2xl shadow-xl h-56 w-44 object-cover shadow-xl"  :src="anime.entry[0].images.jpg.image_url" />

      <div class="absolute h-16 bottom-0 left-0 right-0 px-4 rounded-b-2xl bg-gradient-to-t from-gray-800 to bg-transparent">
        <div class="absolute text-center font-bold font-serif text-s decoration-slate-400 text-slate-100 ">{{ anime.entry[0].title }}</div>
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