<template>
  <div
    class="value-element event_responses_remove_mob_effect"
    title="エンティティのエフェクトを削除します。"
  >
    <div class="value-label">
      <p>エフェクト削除</p>
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
              <div class="modal-title">エフェクト削除</div>
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
                title="削除するエフェクトID。allですべて削除"
              >
                <div class="value-label">
                  <p>エフェクトID</p>
                </div>
                <label class="value-input">
                  <input
                    type="text"
                    name="event-responses-remove-mob-effect-id"
                    class="event-responses-remove-mob-effect-id"
                    placeholder="all"
                    v-on:change="setId"
                  />
                </label>
              </div>
              <div class="value-element" title="エフェクトを削除するターゲット">
                <div class="value-label">
                  <p>ターゲット</p>
                </div>
                <div class="value-input">
                  <select
                    name="event-responses-remove-mob-effect-target"
                    class="event-responses-remove-mob-effect-target"
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
        id: "all",
        target: "default",
      },
    };
  },
  props: ["uuid"],
  methods: {
    setId(event) {
      this.data = {
        ...this.data,
        id: event.target.value,
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