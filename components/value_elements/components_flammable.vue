<template>
  <div
    class="value-element components_flammable"
    title="ブロックの燃焼に関する設定をします。"
  >
    <div class="value-label">
      <p>燃焼</p>
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
              <div class="modal-title">燃焼</div>
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
                title="ブロックの燃えやすさを設定します。"
              >
                <div class="value-label">
                  <p>燃焼発火性</p>
                </div>
                <label class="value-input">
                  <input
                    type="number"
                    min="0"
                    name="components-flammable-flame-odds"
                    class="components-flammable-flame-odds"
                    value="0"
                    v-on:change="setFlameOdds"
                    v-model.number="flame_odds"
                  />
                </label>
              </div>
              <div
                class="value-element"
                title="ブロックが燃えた後消滅する確率を設定します。"
              >
                <div class="value-label">
                  <p>燃焼消失率</p>
                </div>
                <div class="value-input type-unit">
                  <label>
                    <input
                      type="number"
                      min="0"
                      name="components-flammable-burn-odds"
                      class="components-flammable-burn-odds"
                      value="0"
                      v-on:change="setBurnOdds"
                      v-bind:disabled="0 >= data.flame"
                      v-model.number="burn_odds"
                    />
                    <span>%</span>
                  </label>
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
      flame_odds: 0,
      burn_odds: 0,
      data: {
        flame: 0,
        burn: 0,
      },
    };
  },
  props: ["uuid"],
  created() {
    this.onChangedValue();
  },
  methods: {
    setFlameOdds() {
      this.data = {
        ...this.data,
        flame: this.flame_odds,
      };
      this.onChangedValue();
    },
    setBurnOdds() {
      this.data = {
        ...this.data,
        burn: this.flame_odds > 0 ? this.burn_odds : 0,
      };
      this.onChangedValue();
    },
    onChangedValue() {
      this.$store.commit("setComponentData", [this.uuid, this.data]);
    },
  },
};
</script>