<template>
  <article class="flex flex-col items-center w-56">
    <header
      :class="[
        translateColor(selectedColor).bg,
        translateColor(selectedColor).text,
      ]"
      class="flex items-center h-16 p-4 w-full gap-2 rounded-lg"
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
            :class="translateColor(color).bg"
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
      colorsAvailable: ["blue", "green", "beige", "white", "black"],
      selectedColor: "blue",
    };
  },
  methods: {
    translateColor(color: string) {
      const colorMap = {
        white: { bg: "bg-white", text: "text-black" },
        black: { bg: "bg-black", text: "text-white" },
        blue: { bg: "bg-custom-blue", text: "text-white" },
        green: { bg: "bg-custom-green", text: "text-white" },
        beige: { bg: "bg-custom-beige", text: "text-custom-green" },
      };
      //eslint-disable-next-line
      // @ts-ignore
      return colorMap[color] || colorMap["blue"];
    },
    selectColor(color: string) {
      this.selectedColor = color;
    },
  },
});
</script>
