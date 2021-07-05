<template>
  <div
    class="value-element event_responses_add_mob_effect"
    title="エンティティにエフェクトを付与します。"
  >
    <div class="value-label">
      <p>エフェクト付与</p>
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
              <div class="modal-title">エフェクト付与</div>
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
              <div class="value-element" title="付与するエフェクトID">
                <div class="value-label">
                  <p>エフェクトID</p>
                </div>
                <label class="value-input">
                  <input
                    type="text"
                    name="event-responses-add-mob-effect-id"
                    class="event-responses-add-mob-effect-id"
                    v-on:change="setEffectId"
                  />
                </label>
              </div>
              <div class="value-element" title="エフェクトのレベル">
                <div class="value-label">
                  <p>amplifier</p>
                </div>
                <label class="value-input">
                  <input
                    type="number"
                    min="1"
                    name="event-responses-add-mob-effect-amplifier"
                    class="event-responses-add-mob-effect-amplifier"
                    value="1"
                    step="1"
                    v-on:change="setAmplifier"
                  />
                </label>
              </div>
              <div class="value-element" title="エフェクトの時間[秒]">
                <div class="value-label">
                  <p>duration</p>
                </div>
                <label class="value-input">
                  <input
                    type="number"
                    min="0"
                    name="event-responses-add-mob-effect-duration"
                    class="event-responses-add-mob-effect-duration"
                    value="0"
                    step="1"
                    v-on:change="setDuration"
                  />
                </label>
              </div>
              <div class="value-element" title="エフェクトを付与するターゲット">
                <div class="value-label">
                  <p>ターゲット</p>
                </div>
                <div class="value-input">
                  <select
                    name="event-responses-add-mob-effect-target"
                    class="event-responses-add-mob-effect-target"
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
        effect_id: "",
        amplifier: 1,
        duration: 0,
        target: "default",
      },
    };
  },
  props: ["group", "uuid"],
  methods: {
    setEffectId(event) {
      this.data = {
        ...this.data,
        effect_id: event.target.value,
      };
      this.onChangedValue();
    },
    setAmplifier(event) {
      this.data = {
        ...this.data,
        amplifier: Number(event.target.value),
      };
      this.onChangedValue();
    },
    setDuration(event) {
      this.data = {
        ...this.data,
        duration: Number(event.target.value),
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
      this.$store.commit("setEventData", [this.uuid, this.group, this.data]);
    },
  },
};
</script>