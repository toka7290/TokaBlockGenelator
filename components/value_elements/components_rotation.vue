<template>
  <div
    class="value-element components_rotation"
    title="ブロックを回転させます。"
  >
    <div class="value-label">
      <p>回転</p>
    </div>
    <div class="value-input type-3D">
      <label>
        <span>X=</span>
        <input
          type="number"
          name=""
          class="components-rotation-x"
          value="0"
          step="90"
          v-on:change="onChangedValue($event, 0)"
        />
      </label>
      <label>
        <span>Y=</span>
        <input
          type="number"
          name=""
          class="components-rotation-y"
          value="0"
          step="90"
          v-on:change="onChangedValue($event, 1)"
        />
      </label>
      <label>
        <span>Z=</span>
        <input
          type="number"
          name=""
          class="components-rotation-z"
          value="0"
          step="90"
          v-on:change="onChangedValue($event, 2)"
        />
      </label>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return { val: [0, 0, 0] };
  },
  props: ["group", "uuid"],
  methods: {
    onChangedValue(event, /**@type {(0|1|2)} */ axis) {
      this.val[axis] = event.target.value;
      this.$store.commit("setComponentData", [this.uuid, this.val]);
    },
  },
};
</script>