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
      const uuid = getUuid_v4();
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
// UUID生成
function getUuid_v4() {
  let chars = "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".split("");
  for (let i = 0, len = chars.length; i < len; i++) {
    switch (chars[i]) {
      case "x":
        chars[i] = Math.floor(Math.random() * 16).toString(16);
        break;
      case "y":
        chars[i] = (Math.floor(Math.random() * 4) + 8).toString(16);
        break;
    }
  }
  return chars.join("");
}
