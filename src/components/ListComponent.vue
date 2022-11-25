<template>
  <div class="flex ">
    {{ name }}:
    <div class="flex flex-col">
      <span class="pl-3" v-for="element in array" :key="element">
      {{ element }}
    </span>
    </div>
  </div>
</template>

<script>
export default {
  props: { name: String, array: Array },
};
</script>
