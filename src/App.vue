<template>
  <div class="w-screen h-screen flex font-sans items-center justify-center">
    <div class="flex flex-col p-10 rounded-xl shadow-2xl gap-2">
      <h1 class="text-3xl">Per products widgets</h1>
      <hr class="w-full bg-grey-800 h-4" />
      <div class="flex gap-4 flex-col md:flex-row">
        <RecycleWidget
          v-for="(widget, index) in recycleWidgets"
          :key="index"
          :id="widget.id"
          :type="widget.type"
          :amount="widget.amount"
          :action="widget.action"
          :defaultColor="widget.defaultColor"
          :defaultLinked="widget.defaultLinked"
          :defaultActive="widget.defaultActive"
        />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import RecycleWidget from "./components/RecycleWidget.vue";

export default {
  name: "App",
  components: {
    RecycleWidget,
  },
  data() {
    return {
      recycleWidgets: [
        {
          id: 1,
          type: "plastic bottles",
          amount: 100,
          action: "collects",
          defaultColor: "blue",
          defaultLinked: true,
          defaultActive: true,
        },
        {
          id: 2,
          type: "trees",
          amount: 10,
          action: "plants",
          defaultColor: "green",
          defaultLinked: false,
          defaultActive: false,
        },
        {
          id: 3,
          type: "carbon",
          amount: 100,
          action: "offsets",
          defaultColor: "beige",
          defaultLinked: true,
          defaultActive: true,
        },
      ],
    };
  },
};
</script>
