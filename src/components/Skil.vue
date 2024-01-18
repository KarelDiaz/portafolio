<template>
  <div class="flex flex-col">
    <div class="flex items-center">
      <span class="px-2 text-xl text-gray-400 w-28">{{ skil.name }}</span>
      <div class="flex items-center gap-1">
        <div
          :class="['w-3 h-3 rounded-full', 
          { 'bg-gradient-to-t from-blue-300 to-blue-400': i <= skil.stars },
           { 'bg-gradient-to-t from-gray-200 to-gray-300': i > skil.stars }]"
          v-for="i in 10"
          :key="`skil-${skil.name}-star-${i}`"
        ></div>
      </div>
    </div>
  </div>
</template>

<script> 

export default {
  props: { skil: Object },
};
</script>