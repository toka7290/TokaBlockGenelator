export const state = () => ({
  format_version: "1.16.100",
  // TODO:仕様変更合わせておく
  /**
   * メインのコンポーネント情報
   * ["uuid","uuid"]
   */
  main: [],
  /**
   * パーミュテーションのコンポーネント情報
   * [{condition:"",components:["uuid",uuid]}]
   */
  permutations: [],
  /**
   * イベントのコンポーネント情報
   * [{name:"name",components:["uuid","uuid"]}]
   */
  events: [],
  /**
   * メイン、パーミュテーション、イベントのコンポーネント情報
   * "key": {type:"",data:undefined}
   */
  components: {},
  /**
   * [{name:"",type:0,data:undefined}]
   */
  block_states: [],
  main_components: {}, //廃止
  data: "test",
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
            components: new Object(),
          },
        };
        break;
      case "block_states":
        states.block_states.push({ name: "", type: 0, data: [false, true] });
        break;
    }
  },
  deleteStatusBlock(states, [/**@type {"block_states"|"events"} */ type, parent]) {
    console.log(parent);
    states[type].splice(parent, 1);
    // this._vm.$delete(states[type], parent);
  },
  setBlockStatus(states, [number, name, type, data]) {
    this._vm.$set(states.block_states, number, { name: name, type: type, data: data });
  },
  toggleEventComponent(states, [component, parent, hasComponent = undefined]) {
    if (component == undefined) return;
    if (hasComponent == undefined) {
      hasComponent = !states.events[parent].components.some((val) => val == component);
    }
    if (hasComponent) {
      const uuid = this.$getUuid_v4();
      states.events[parent].components = {
        ...states.events[parent].components,
        [uuid]: {
          name: component,
          group: parent,
          data: undefined,
        },
      };
    } else {
      for (const uuid in states.events[parent].components) {
        if (states.events[parent].components[uuid].name == component) {
          this._vm.$delete(states.events[parent].components, uuid);
        }
      }
    }
  },
  setEventData(states, [target_id, group, data, pearents = undefined]) {
    // TODO:階層構造対応
    if (pearents == undefined) {
      states.events[group].components[target_id].data = data;
    } else {
      // 作り直し
      let [root, ...tree] = pearents;
      tree = [...tree, target_id];
      states.events[group].components[root].data = setObjectEventTreeData(
        { ...states.events[group].components[root].data },
        tree,
        data
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

/**
 * 対象のオブジェクトにデータを挿入したデータを返す。
 * @param {Object} obj
 * @param {string|string[]} tree
 * @param {any} data
 * @return {Object}
 */
function setObjectEventTreeData(obj, tree, data) {
  if (tree.length == 1) tree = tree.toString();
  // 配列の場合
  if (Array.isArray(tree)) {
    let [key, ...next] = tree;
    setObjectEventTreeData(obj[key].data, next, data);
  } else {
    obj[tree] = data;
  }
  return obj;
}

export const getters = {
  components: (states) => {
    return states.components;
  },
};
