<template>
  <div class="flex flex-col py-10 space-y-5">
    <div class="flex items-center">
      <span class="w-16 h-0 border-t border-gray-400 border-dashed"></span>
      <span class="px-2 text-xl text-gray-400">{{ history.name.toUpperCase() }}</span>
      <span class="w-full h-0 border-t border-gray-400 border-dashed"></span>
    </div>
    <content-component
      class="pl-3"
      v-for="content in history.contents"
      :key="content.name"
      :content="content"
    />
  </div>
</template>

<script>
import ContentComponent from "./ContentComponent.vue";

export default {
  components: { ContentComponent },
  props: { history: Object },
};
</script>