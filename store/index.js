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
    let uuid = this.$getUuid_v4();
    let data = states.events;
    states.events = {
      ...states.events,
      [uuid]: {
        id: uuid,
        components: new Array(),
      },
    };
  },
  deleteEventBlock(states, parent) {
    this._vm.$delete(states.events, parent);
    console.log(states.events);
  },
  toggleEventComponent(states, [component, parent, hasComponent = undefined]) {
    if (component == undefined) return;
    if (hasComponent == undefined) {
      hasComponent = !states.events[parent].components.some((val) => val == component);
    }
    if (hasComponent) {
      const uuid = this.$getUuid_v4();
      const data = { name: component, id: uuid, data: undefined };
      states.events[parent].components.push(data);
    } else {
      states.events[parent].components = states.events[parent].components.filter(
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
