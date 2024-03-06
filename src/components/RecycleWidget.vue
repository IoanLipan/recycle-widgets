<template>
  <article class="flex flex-col gap-4 items-center w-56">
    <div
      class="absolute max-w-60 top-[30%]"
      v-if="showTooltip"
      @mouseenter="cancelTooltipHide"
      @mouseleave="hideTooltipDelayed"
    >
      <div class="p-4 text-center bg-slate-50 shadow-2xl text-black rounded-md">
        <p>
          This widget links directly to your public profile so that you can
          easily share your impact with your customers. Turn it off here if you
          do not want the badge to link to it.
        </p>
        <button v-if="linked" class="text-custom-green pt-2">
          View Public Profile
        </button>
      </div>
    </div>
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
    <div class="flex text-sm flex-col gap-1 w-full text-custom-green">
      <div class="flex justify-between items-center">
        <h4 class="flex gap-1">
          Link to Public Profile
          <img
            class="-mt-2 cursor-pointer"
            src="@/assets/info.svg"
            @mouseenter="
              cancelTooltipHide();
              showTooltip = true;
            "
            @mouseleave="hideTooltipDelayed"
          />
        </h4>
        <div
          class="flex p-2 hover:bg-opacity-30 hover:bg-custom-green rounded-full relative"
          @click="toggleCheckbox"
        >
          <input class="opacity-0 absolute" type="checkbox" v-model="linked" />
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
          <div class="flex gap-1 items-center">
            <div
              v-for="color in colorsAvailable"
              :key="color"
              class="relative z-10 hover:bg-opacity-50 hover:bg-gray-500 transition duration-300"
              @click="selectColor(color)"
            >
              <span
                class="flex h-4 w-4 border-gray-100"
                :class="[
                  translateColor(color).bg,
                  { 'border-[1px] border-gray-400': selectedColor === color },
                ]"
              />
              <div
                class="absolute top-0 left-0 w-full h-full opacity-0 hover:opacity-30 bg-gray-200 transition duration-300"
              ></div>
            </div>
          </div>
        </div>
      </div>
      <div class="flex justify-between items-center">
        <p>Activate badge</p>
        <div
          class="group relative cursor-pointer w-[42px] h-[22px] rounded-full border-[1px] border-custom-green border-opacity-25"
          :class="active ? 'bg-custom-green' : 'bg-gray-100'"
          @click="toggleBadge"
          @update:active="toggleBadge"
        >
          <div
            class="absolute z-10 w-5 h-5 scale-110 bg-white rounded-full transition-all duration-300 border-[1px] border-gray-100"
            :class="{ 'left-5 border-custom-green': active, 'left-0': !active }"
          ></div>

          <div
            class="hidden group-hover:block absolute w-7 h-7 bg-opacity-40 bg-custom-green rounded-full transition-all duration-300 -top-1"
            :class="{ 'left-4': active, '-left-1': !active }"
          ></div>
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
    defaultActive: {
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
      active: this.defaultActive,
      showTooltip: false,
      tooltipTimeoutId: 0,
    };
  },
  computed: {
    checkboxStyle(): { backgroundColor: string; borderColor: string } {
      return {
        backgroundColor: this.linked ? "#3B755F" : "transparent",
        borderColor: this.linked ? "#3B755F" : "#000",
      };
    },
    badgeStyle(): { backgroundColor: string; borderColor: string } {
      return {
        backgroundColor: this.active ? "#3B755F" : "transparent",
        borderColor: this.active ? "#3B755F" : "#000",
      };
    },
  },
  methods: {
    toggleCheckbox() {
      this.linked = !this.linked;
    },
    toggleBadge() {
      this.active = !this.active;
      this.$emit("update:active", this.active); // Emit changes if needed
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
    showTooltipDelayed() {
      this.tooltipTimeoutId = setTimeout(() => {
        this.showTooltip = true;
      }, 300);
    },
    hideTooltipDelayed() {
      if (this.tooltipTimeoutId) {
        clearTimeout(this.tooltipTimeoutId);
      }
      this.tooltipTimeoutId = setTimeout(() => {
        this.showTooltip = false;
      }, 300);
    },
    cancelTooltipHide() {
      if (this.tooltipTimeoutId) {
        clearTimeout(this.tooltipTimeoutId);
      }
    },
  },
});
</script>
