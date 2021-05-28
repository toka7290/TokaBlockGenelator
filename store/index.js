export const state = () => ({
  format_version: "1.16.100",
  main_components: [], //component
  data: "test",
  events: [],
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
  setEventBlock(states) {
    states.events.push({ id: this.$getUuid_v4(), components: new Array() });
  },
  toggleEventComponent(states, [component, parent_index, hasComponent = undefined]) {
    if (component == undefined) return;
    if (hasComponent == undefined) {
      hasComponent = !states.events[parent_index].components.some((val) => val == component);
    }
    if (hasComponent) {
      const uuid = this.$getUuid_v4();
      const data = { name: component, id: uuid, data: undefined };
      states.events[parent_index].components.push(data);
    } else {
      states.events[parent_index].components = states.events[parent_index].components.filter(
        (val) => val.name != `${component}`
      );
    }
  },
};

export const getters = {
  components: (states) => {
    return states.components;
  },
};
