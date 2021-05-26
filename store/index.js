export const state = () => ({
  format_version: "1.16.100",
  main_components: [], //component
  data: "test",
});

export const mutations = {
  setFormatVersion(states, version) {
    states.format_version = version;
  },
  toggleMainComponent(states, [component, hasComponent = undefined]) {
    if (component == undefined) return;
    if (hasComponent == undefined) {
      hasComponent = !states.main_components.some((val) => val == component);
    }
    if (hasComponent) {
      const uuid = this.$getUuid_v4();
      const data = { name: component, id: uuid, data: undefined };
      states.main_components.push(data);
    } else {
      states.main_components = states.main_components.filter((val) => val.name != `${component}`);
    }
  },
  setComponentData(states, [targetIndex, data]) {
    states.main_components[targetIndex].data = data;
  },
};

export const getters = {
  components: (states) => {
    return states.components;
  },
};
