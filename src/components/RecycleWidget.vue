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
      <div class="flex justify-between items-center">
        <h4 class="flex gap-1">
          Link to Public Profile <img class="-mt-2" src="@/assets/info.svg" />
        </h4>
        <div
          class="flex p-2 hover:bg-opacity-30 hover:bg-custom-green rounded-full relative"
          @click="toggleCheckbox"
        >
          <input
            class="opacity-0 absolute"
            type="checkbox"
            v-model="linked"
            @change="handleCheckboxChange"
          />
          <div
            class="h-4 w-4 border-2 rounded-sm flex justify-center items-center"
            :style="checkboxStyle"
          >
            <svg
              v-show="linked"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              class="w-3 h-3 scale-150 text-white"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2.5"
                d="M5 13l4 4L19 7"
              />
            </svg>
          </div>
        </div>
      </div>
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
      <div>Activate badge</div>
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
    defaultLinked: {
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
      linked: this.defaultLinked,
    };
  },
  computed: {
    checkboxStyle(): { backgroundColor: string; borderColor: string } {
      return {
        backgroundColor: this.linked ? "#3B755F" : "transparent",
        borderColor: this.linked ? "#3B755F" : "#000",
      };
    },
  },
  methods: {
    toggleCheckbox() {
      this.linked = !this.linked;
    },
    handleCheckboxChange() {
      console.log(this.linked);
    },
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
