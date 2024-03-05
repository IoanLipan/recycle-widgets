import { createStore } from "vuex";

interface Widget {
  id: number;
  type: "carbon" | "plastic bottles" | "trees";
  amount: number;
  action: "collects" | "plants" | "offsets";
  active: boolean;
  linked: boolean;
  selectedColor: "white" | "black" | "blue" | "green" | "beige";
}

interface State {
  widgets: Widget[];
}

export default createStore<State>({
  state: {
    widgets: [],
  },
  mutations: {
    addWidget(state, widget: Widget) {
      state.widgets.push(widget);
    },
    updateWidget(state, updatedWidget: Widget) {
      const index = state.widgets.findIndex((w) => w.id === updatedWidget.id);
      if (index !== -1) {
        state.widgets.splice(index, 1, updatedWidget);
      }
    },
  },
  actions: {
    addWidget({ commit }, widget: Widget) {
      commit("addWidget", widget);
    },
    updateWidget({ commit }, updatedWidget: Widget) {
      commit("updateWidget", updatedWidget);
    },
  },
});
