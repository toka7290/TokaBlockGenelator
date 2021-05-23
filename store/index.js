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
      states.main_components.push(component);
    } else {
      states.main_components = states.main_components.filter((val) => val != `${component}`);
    }
  },
};

export const getters = {
  components: (states) => {
    return states.components;
  },
};
