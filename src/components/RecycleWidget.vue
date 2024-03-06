<template>
  <article class="flex flex-col items-center w-56">
    <header
      :class="translateColor(selectedColor)"
      class="flex items-center h-16 p-4 w-full gap-2 rounded-lg bg-blue-500"
    >
      <img src="@/assets/greensparkLogo.svg" />
      <div>
        <span class="text-sm">This product {{ action }}</span>
        <br />
        <span>{{ amount }} {{ type }}</span>
      </div>
    </header>
    <div class="w-full">
      <div class="flex justify-between items-center">
        <p>Badge colour</p>
        <div class="flex gap-1 items-center">
          <span
            v-for="color in colorsAvailable"
            :key="color"
            class="flex h-4 w-4 border-gray-100 border-[1px] hover:border-2"
            :class="translateColor(color)"
            @click="selectColor(color)"
          />
        </div>
      </div>
    </div>
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
  },
  data() {
    return {
      colorsAvailable: ["white", "black", "blue", "green", "beige"],
      selectedColor: "blue",
    };
  },
  computed: {},
  methods: {
    translateColor(color: string | undefined) {
      switch (color) {
        case "white":
          return "bg-white";
        case "black":
          return "bg-black";
        case "blue":
          return "bg-blue-500";
        case "green":
          return "bg-green-700";
        case "beige":
          return "bg-amber-100 text-green-800";
      }
    },
    selectColor(color: string) {
      this.selectedColor = color;
    },
  },
});
</script>
