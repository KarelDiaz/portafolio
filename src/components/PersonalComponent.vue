<template>
  <div class="relative">
    <!-- Background -->
    <div
      class="relative flex justify-between shadow-xl bg-gradient-to-t from-white to-gray-300 h-36 opacity-95"
    ></div>
    <!-- Name and phone number -->
    <div
      class="absolute top-0 left-0 flex flex-col h-full p-3 font-extralight filter drop-shadow-md"
    >
      <span class="pb-1 text-xl font-bold sm:text-2xl pr-28">
        {{ info.name }}
      </span>
      <link-component :href="`mailto:${info.email}`">
        {{ info.email }}
      </link-component>
      <link-component :href="`tel:${info.phone}`">
        {{ info.phone }}
      </link-component>
    </div>
    <!-- Image -->
    <img
      class="absolute top-0 right-0 z-10 h-36 filter drop-shadow-md"
      src="../assets/photo-small.png"
    />
    <!-- Social medias -->
    <social-media
      class="absolute z-50 right-24 -bottom-5"
      :socialMedias="info.socialMedias"
    />
  </div>
</template>

<script>
import SocialMedia from "./SocialMedia.vue";
import LinkComponent from "./LinkComponent.vue";
export default {
  components: { SocialMedia, LinkComponent },
  props: {
    info: Object,
  },
};
</script>
