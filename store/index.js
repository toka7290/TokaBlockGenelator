export const state = () => ({
  format_version: "1.16.100",
  // TODO:仕様変更合わせておく
  /**
   * 完了
   * メインのコンポーネント情報
   * ["uuid","uuid"]
   */
  main: [],
  /**
   * 完了
   * パーミュテーションのコンポーネント情報
   * [{id:"",condition:"",components:["uuid","uuid"]]
   */
  permutations: [],
  /**
   * 完了
   * イベントのコンポーネント情報
   * [{id:"",name:"name",components:["uuid","uuid"]}]
   */
  events: [],
  /**
   * メイン、パーミュテーション、イベントのコンポーネント情報
   * "key": {type:"",data:undefined}
   */
  components: {},
  /**
   * 完了
   * [{name:"",type:0,data:undefined}]
   */
  block_states: [],
  main_components: {}, //廃止
  data: "test",
  error_list: {},
  warning_list: {},
});

export const mutations = {
  // フォーマットバージョン変更
  setFormatVersion(states, version) {
    states.format_version = version;
  },
  // コンポーネントデータ変更
  setComponentData(states, [target_id, data]) {
    states.components[target_id].data = data;
  },
  // メインコンポーネントの管理
  toggleMainComponent(states, [component_type, hasComponent = undefined]) {
    if (component_type == undefined || hasComponent == undefined) {
      console.error("toggleMainComponent: Unexpected value!");
      return;
    }
    if (hasComponent) {
      const target_id = this.$getUuid_v4();
      // 新規登録
      states.main = [...states.main, target_id];
      states.components = {
        ...states.components,
        [target_id]: { type: component_type, data: undefined },
      };
    } else {
      for (const target_id of states.main) {
        if (states.components[target_id].type == component_type) {
          // 削除
          states.main.splice(states.main.indexOf(target_id), 1);
          this._vm.$delete(states.components, target_id);
          break;
        }
      }
    }
  },
  // パーミュテーション条件
  setPermutationCondition(states, [permutation_index, value]) {
    states.permutations[permutation_index].condition = value;
  },
  // パーミュテーションコンポーネントの管理
  togglePermutationComponent(
    states,
    [component_type, permutation_index, hasComponent = undefined]
  ) {
    if (
      component_type == undefined ||
      permutation_index == undefined ||
      hasComponent == undefined
    ) {
      console.error("togglePermutationComponent: Unexpected value!");
      return;
    }
    if (hasComponent) {
      const target_id = this.$getUuid_v4();
      // 新規登録
      states.permutations[permutation_index].components = [
        ...states.permutations[permutation_index].components,
        target_id,
      ];
      states.components = {
        ...states.components,
        [target_id]: { type: component_type, data: undefined },
      };
    } else {
      for (const target_id of states.permutations[permutation_index].components) {
        if (states.components[target_id].type == component_type) {
          // 削除
          states.permutations[permutation_index].components.splice(
            states.permutations[permutation_index].components.indexOf(target_id),
            1
          );
          this._vm.$delete(states.components, target_id);
          break;
        }
      }
    }
  },
  // ブロックタブ管理
  setBlockTab(states, /**@type {(permutations)} */ type) {
    switch (type) {
      case "permutations":
        states.permutations = [
          ...states.permutations,
          {
            id: this.$getUuid_v4(),
            condition: "",
            components: new Array(),
          },
        ];
        break;
      default:
        break;
    }
  },
  deleteBlockTab(states, [/**@type {(permutations)} */ type, parent]) {
    // コンポーネント削除
    for (const target_id of states.permutations[parent].components) {
      this._vm.$delete(states.components, target_id);
    }
    // ブロックタブ削除
    states[type].splice(parent, 1);
  },
  // イベント名
  setEventName(states, [event_index, value]) {
    states.events[event_index].name = value;
  },
  // イベントコンポーネントの管理
  toggleEventComponent(states, [component_type, event_index, hasComponent = undefined]) {
    if (component_type == undefined || event_index == undefined || hasComponent == undefined) {
      console.error("toggleEventComponent: Unexpected value!");
      return;
    }
    if (hasComponent) {
      const target_id = this.$getUuid_v4();
      // 新規登録
      states.events[event_index].components = [...states.events[event_index].components, target_id];
      states.components = {
        ...states.components,
        [target_id]: { type: component_type, data: undefined },
      };
    } else {
      for (const target_id of states.events[event_index].components) {
        if (states.components[target_id].type == component_type) {
          // 削除
          states.events[event_index].components.splice(
            states.events[event_index].components.indexOf(target_id),
            1
          );
          this._vm.$delete(states.components, target_id);
          break;
        }
      }
    }
  },
  // ブロックステート管理
  setBlockStatus(states, [number, name, type, data]) {
    this._vm.$set(states.block_states, number, { name: name, type: type, data: data });
  },
  // ステータスブロック管理
  setStatusBlock(states, /**@type {(block_states|events)} */ type) {
    switch (type) {
      case "events":
        states.events = [
          ...states.events,
          {
            id: this.$getUuid_v4(),
            name: "",
            components: new Array(),
          },
        ];
        break;
      case "block_states":
        states.block_states.push({ name: "", type: 0, data: [false, true] });
        break;
    }
  },
  deleteStatusBlock(states, [/**@type {"block_states"|"events"} */ type, parent]) {
    // コンポーネント削除
    if (type == "event")
      for (const target_id of states[type][parent].components) {
        this._vm.$delete(states.components, target_id);
      }
    // ステータスブロック削除
    states[type].splice(parent, 1);
  },
  // イシュー管理
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
  mainComponents: (states) => states.main,
  updateComponents: (states) => states.components,
};
