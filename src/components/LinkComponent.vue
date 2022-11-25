<template>
  <a
    class="px-3 py-1 text-xs text-blue-700 transition-all duration-500 hover:text-blue-900"
    @mouseenter="hover = true"
    @mouseleave="hover = false"
    :href="href"
    target="blanck"
  >
    <slot></slot>
  </a>
</template>

<script>
export default {
  data() {
    return {
      hover: false,
    };
  },
  props: {
    href: String,
  },
};
</script>