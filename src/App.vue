<template>
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
