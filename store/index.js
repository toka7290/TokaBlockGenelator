export const state = () => ({
  format_version: "1.16.100",
  main_components: {}, //component
  data: "test",
  events: {},
  permutations: {},
  block_states: {},
  error_list: {},
  warning_list: {},
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
      states.main_components = {
        ...states.main_components,
        [uuid]: {
          group: "main", // グループでコンポーネントは管理。
          name: component,
          data: Object(),
        },
      };
    } else {
      for (const uuid in states.main_components) {
        if (states.main_components[uuid].name == component) {
          this._vm.$delete(states.main_components, uuid);
        }
      }
    }
  },
  setComponentData(states, [target_id, group, data]) {
    if (group == "main") states.main_components[target_id].data = data;
    else {
      states.permutations[group].components[target_id].data = data;
    }
    console.log(data);
  },
  setStatusBlock(states, /**@type {(block_states|events)} */ type) {
    let uuid = this.$getUuid_v4();
    switch (type) {
      case "events":
        states.events = {
          ...states.events,
          [uuid]: {
            id: uuid,
            components: new Array(),
          },
        };
        break;
      case "block_states":
        states.block_states = {
          ...states.block_states,
          [uuid]: {
            id: uuid,
            components: new Array(),
          },
        };
        break;
    }
  },
  deleteStatusBlock(states, [/**@type {(block_states|events)} */ type, parent]) {
    this._vm.$delete(states[type], parent);
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
  setBlockTab(states, /**@type {(permutations)} */ type) {
    let uuid = this.$getUuid_v4();
    switch (type) {
      case "permutations":
        states.permutations = {
          ...states.permutations,
          [uuid]: {
            id: uuid,
            components: new Array(),
          },
        };
        break;
      default:
        break;
    }
  },
  deleteBlockTab(states, [/**@type {(permutations)} */ type, parent]) {
    this._vm.$delete(states[type], Object.keys(states[type])[parent]);
  },
  togglePermutationComponent(states, [component, parent, hasComponent = undefined]) {
    if (component == undefined) return;
    if (hasComponent == undefined) {
      hasComponent = !states.permutations[parent].components.some((val) => val == component);
    }
    if (hasComponent) {
      const uuid = this.$getUuid_v4();
      states.permutations[parent].components = {
        ...states.permutations[parent].components,
        [uuid]: {
          group: parent, // グループでコンポーネントは管理。
          name: component,
          data: undefined,
        },
      };
    } else {
      this._vm.$delete(states.permutations[parent].components, uuid);
    }
  },
  addWarning(states, [id, issue_comment]) {
    // [id]: {comment:issue_comment,to:elem}
    states.warning_list = {
      ...states.warning_list,
      [id]: issue_comment,
    };
  },
  addError(states, [id, issue_comment]) {
    states.error_list = {
      ...states.error_list,
      [id]: issue_comment,
    };
  },
  deleteError(states, id) {
    this._vm.$delete(states.error_list, id);
  },
};

export const getters = {
  components: (states) => {
    return states.components;
  },
};
