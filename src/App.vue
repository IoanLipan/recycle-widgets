<template>
  <div class="w-screen h-screen flex font-sans items-center justify-center">
    <div class="flex flex-col p-10 rounded-xl shadow-2xl gap-2">
      <h1 class="text-3xl">Per products widgets</h1>
      <hr class="w-full bg-grey-800 h-4" />
      <div class="flex">
        <RecycleWidget
          :id="1"
          type="plastic bottles"
          :amount="100"
          action="collects"
          selectedColor="blue"
          active
          linked
        />
        <RecycleWidget
          :id="2"
          type="trees"
          :amount="10"
          action="plants"
          selectedColor="green"
          active
          linked
        />
        <RecycleWidget
          :id="3"
          type="carbon"
          :amount="100"
          action="offsets"
          selectedColor="beige"
          active
          linked
        />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import RecycleWidget from "./components/RecycleWidget.vue";

@Options({
  components: {
    RecycleWidget,
  },
})
export default class App extends Vue {}
</script>
