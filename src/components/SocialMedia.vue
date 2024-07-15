<template>
  <div class="flex justify-end p-3 space-x-3">
    <a
      class="flex justify-center items-center cursor-pointer bg-gradient-to-tr from-white to-gray-300 text-gray-900 hover:text-gray-800 hover:shadow-xl transition-all duration-500 transform hover:scale-110 rounded-full p-1 w-10 h-10 sm:p-1.5 sm:w-14 sm:h-14 shadow-md"
      v-for="social in socialMedias"
      :key="social.name"
      :href="social.link"
      target="_blank"
    >
      <img class="w-6 sm:w-8 opacity-70" :src="require(`../assets/${social.icon}.png`)" />
    </a>
  </div>
</template>

<script>
export default {
  props: {
    socialMedias: Array,
  },
};
</script>
