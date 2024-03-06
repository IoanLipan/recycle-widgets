<template>
  <article class="flex flex-col gap-4 items-center w-56">
    <header
      :class="[
        translateColor(selectedColor).bg,
        translateColor(selectedColor).text,
      ]"
      class="flex items-center h-16 p-3 w-full gap-3 rounded-lg"
    >
      <GreensparkLogo :fillColor="translateColor(selectedColor).svgFill" />
      <div>
        <h3 class="text-sm font-light">This product {{ action }}</h3>
        <h2 class="text-lg font-medium">
          {{ amount }}{{ type === "carbon" ? "kgs of carbon" : " " + type }}
        </h2>
      </div>
    </header>
    <div class="flex text-sm flex-col gap-2 w-full text-custom-green">
      <div>Link to Public Profile</div>
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
import GreensparkLogo from "./GreensparkLogo.vue";

export default defineComponent({
  name: "RecycleWidget",
  components: {
    GreensparkLogo,
  },
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
    defaultColor: {
      type: String,
      default: "blue",
    },
  },
  data() {
    return {
      colorsAvailable: ["blue", "green", "beige", "white", "black"],
      selectedColor: this.defaultColor,
    };
  },
  methods: {
    translateColor(color: string) {
      const colorMap = {
        white: { bg: "bg-white", text: "text-black", svgFill: "#000000" },
        black: { bg: "bg-black", text: "text-white", svgFill: "#FFFFFF" },
        blue: { bg: "bg-custom-blue", text: "text-white", svgFill: "#FFFFFF" },
        green: {
          bg: "bg-custom-green",
          text: "text-white",
          svgFill: "#FFFFFF",
        },
        beige: {
          bg: "bg-custom-beige",
          text: "text-custom-green",
          svgFill: "#3B755F",
        },
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
