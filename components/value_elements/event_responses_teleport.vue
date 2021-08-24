<template>
  <div
    class="value-element event_responses_teleport"
    title="ランダムにテレポートさせます。"
  >
    <div class="value-label">
      <p>ランダムテレポート</p>
    </div>
    <div class="value-input type-modal">
      <label
        ><input
          type="button"
          value="編集"
          class="modal-open"
          v-on:click="this.$showModal"
      /></label>
      <div class="modal hide" v-on:click="this.$closeModal">
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <div class="modal-title">ランダムテレポート</div>
              <label class="modal-close-btn">
                <input
                  type="button"
                  value="閉じる"
                  class="modal-close invisible-Control"
                />
                <div class="close-btn-icon" v-html="svgClose"></div>
              </label>
            </div>
            <div class="modal-body">
              <div
                class="value-element"
                title="テレポート元の座標を設定します。"
              >
                <div class="value-label">
                  <p>テレポート元</p>
                </div>
                <div class="value-input type-3D">
                  <label>
                    <span>X=</span>
                    <input
                      type="number"
                      name=""
                      class="event-responses-teleport-destination-x"
                      value="0"
                      step="1"
                      v-on:change="setAxisValue($event, 'destination', 0)"
                    />
                  </label>
                  <label>
                    <span>Y=</span>
                    <input
                      type="number"
                      name=""
                      class="event-responses-teleport-destination-y"
                      value="0"
                      step="1"
                      v-on:change="setAxisValue($event, 'destination', 1)"
                    />
                  </label>
                  <label>
                    <span>Z=</span>
                    <input
                      type="number"
                      name=""
                      class="event-responses-teleport-destination-z"
                      value="0"
                      step="1"
                      v-on:change="setAxisValue($event, 'destination', 2)"
                    />
                  </label>
                </div>
              </div>
              <div
                class="value-element"
                title="テレポート先の許容範囲を設定します。"
              >
                <div class="value-label">
                  <p>テレポート範囲</p>
                </div>
                <div class="value-input type-3D">
                  <label>
                    <span>X=</span>
                    <input
                      type="number"
                      name=""
                      class="event-responses-teleport-max-range-x"
                      value="0"
                      step="1"
                      v-on:change="setAxisValue($event, 'max_range', 0)"
                    />
                  </label>
                  <label>
                    <span>Y=</span>
                    <input
                      type="number"
                      name=""
                      class="event-responses-teleport-max-range-y"
                      value="0"
                      step="1"
                      v-on:change="setAxisValue($event, 'max_range', 1)"
                    />
                  </label>
                  <label>
                    <span>Z=</span>
                    <input
                      type="number"
                      name=""
                      class="event-responses-teleport-max-range-z"
                      value="0"
                      step="1"
                      v-on:change="setAxisValue($event, 'max_range', 2)"
                    />
                  </label>
                </div>
              </div>
              <div
                class="value-element"
                title="水中にテレポートするのを避けるか"
              >
                <label class="value-checkbox">
                  <input
                    type="checkbox"
                    name="event-responses-teleport-avoid_water"
                    class="
                      event-responses-teleport-avoid_water
                      invisible-Control
                    "
                    v-on:change="setAvoidWater"
                  />
                  <div class="checkbox-body">
                    <div class="checkbox-body-box">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        class="checkbox-body-checkMark"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="3"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      >
                        <polyline points="20 6 9 17 4 12"></polyline>
                      </svg>
                    </div>
                    <p class="checkbox-body-text">水を避ける</p>
                  </div>
                </label>
              </div>
              <div
                class="value-element"
                title="地面のあるところにテレポートするか"
              >
                <label class="value-checkbox">
                  <input
                    type="checkbox"
                    name="event-responses-teleport-land-on-block"
                    class="
                      event-responses-teleport-land-on-block
                      invisible-Control
                    "
                    v-on:change="setLandOnBlock"
                  />
                  <div class="checkbox-body">
                    <div class="checkbox-body-box">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        class="checkbox-body-checkMark"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="3"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      >
                        <polyline points="20 6 9 17 4 12"></polyline>
                      </svg>
                    </div>
                    <p class="checkbox-body-text">空中を避ける</p>
                  </div>
                </label>
              </div>
              <div class="value-element" title="テレポートするターゲット">
                <div class="value-label">
                  <p>ターゲット</p>
                </div>
                <div class="value-input">
                  <select
                    name="event-responses-teleport-target"
                    class="event-responses-teleport-target"
                    v-on:change="setTarget"
                  >
                    <option value="default">default</option>
                    <option value="self">self</option>
                    <option value="holder">holder</option>
                    <option value="baby">baby</option>
                    <option value="other">other</option>
                    <option value="player">player</option>
                    <option value="target">target</option>
                    <option value="parent">parent</option>
                    <option value="block">block</option>
                    <option value="damager">damager</option>
                    <option value="item">item</option>
                  </select>
                </div>
              </div>
            </div>
          </div>
          <div class="modal-footer">
            <label
              ><input type="button" value="Close" class="modal-close"
            /></label>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import svgClose from "~/assets/img/close.svg?raw";
export default {
  data() {
    return {
      svgClose,
      data: {
        destination: [0, 0, 0],
        max_range: [0, 0, 0],
        avoid_water: false,
        land_on_block: false,
        target: "default",
      },
    };
  },
  props: ["uuid"],
  methods: {
    setAxisValue(
      event,
      /**@type {("destination"|"max_range")} */ axis_type,
      /**@type {(0|1|2)} */ axis
    ) {
      let tmp = this.data[`${axis_type}`].map((val) => val);
      tmp.splice(axis, 1, Number(event.target.value));
      this.data = {
        ...this.data,
        [axis_type]: tmp,
      };
      this.onChangedValue();
    },
    setAvoidWater(event) {
      this.data = {
        ...this.data,
        avoid_water: event.target.checked,
      };
      this.onChangedValue();
    },
    setLandOnBlock(event) {
      this.data = {
        ...this.data,
        land_on_block: event.target.checked,
      };
      this.onChangedValue();
    },
    setTarget(event) {
      this.data = {
        ...this.data,
        target: event.target.value,
      };
      this.onChangedValue();
    },
    onChangedValue() {
      this.$store.commit("setComponentData", [this.uuid, this.data]);
    },
  },
};
</script>