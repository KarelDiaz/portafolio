<template>
  <div class="flex flex-col space-y-1 text-sm tracking-widest">
    <!-- Name and date -->
    <div class="flex flex-col-reverse sm:items-end sm:flex-row sm:space-x-3">
      <span class="text-xl font-bold text-gray-700">{{ content.name }}</span>
      <i class="text-gray-400 w-52 min-w-max">
        {{ content.dateStart }}
        {{ content.dateStart || content.dateEnd ? " - " : "" }}
        {{ content.dateEnd }}
      </i>
    </div>
    <!-- Name 2 -->
    <span class="text-sm text-gray-600 font-extralight">{{ content.name2 }}</span>
    <!-- Description -->
    <span class="text-sm" v-if="content.description">{{ content.description }}</span>

    <div class="flex flex-col">
      <!-- Event -->
      <div class="flex space-x-3" v-if="content.events.length > 0">
        <span>Events:</span>
        <div class="flex flex-col">
          <div class="flex space-x-3" v-for="event in content.events" :key="event.name">
            <span>{{ event.name }}</span>
            <span class="italic text-gray-400">{{ event.date }}</span>
          </div>
        </div>
      </div>
      <!-- Role -->
      <span v-if="content.role">Role: {{ content.role }}</span>
      <!-- Team -->
      <span v-if="content.team">Team: {{ content.team }}</span>
      <!-- Tasks -->
      <list-component name="Tasks" :array="content.tasks" v-if="content.tasks.length > 0" />
      <!-- Technologies -->
      <list-component
        name="Technologies"
        :array="content.technologies"
        v-if="content.technologies.length > 0"
      />
    </div>
    <!-- Links -->
    <span
      class="flex flex-wrap p-3 space-y-2 sm:space-y-0 sm:space-x-3 sm:flex-row"
      v-if="content.links.length > 0"
    >
      <link-component
        v-for="link in content.links"
        :key="link.link"
        :href="link.link"
      >{{ link.title }}</link-component>
    </span>
  </div>
</template>

<script>
import LinkComponent from "./LinkComponent.vue";
import ListComponent from "./ListComponent.vue";
export default {
  components: { ListComponent, LinkComponent },
  props: {
    content: Object,
  },
};
</script>