<template>
  <article>
    <header>
      <img src="@/assets/greensparkLogo.svg" />
    </header>
  </article>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "RecycleWidget",
  props: {
    id: {
      type: Number,
      default: 0,
    },
    type: {
      type: String,
      default: "carbon",
    },
    amount: {
      type: Number,
      default: 0,
    },
    action: {
      type: String,
      default: "offsets",
    },
    active: {
      type: Boolean,
      default: false,
    },
    linked: {
      type: Boolean,
      default: false,
    },
    selectedColor: {
      type: String,
      default: "green",
    },
  },
});
</script>
