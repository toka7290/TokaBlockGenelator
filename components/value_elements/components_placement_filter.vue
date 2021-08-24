<template>
  <div
    class="value-element components_placement_filter"
    title="ブロックが設置できる面とブロックを設定します。"
  >
    <div class="value-label">
      <p>配置フィルター</p>
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
              <div class="modal-title">コンディション</div>
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
              <div class="tabpanel">
                <div class="tab-navigation">
                  <div class="tab-body">
                    <label
                      class="tab-children invisible-Control"
                      v-for="(elem, tab_index) in data"
                      :key="tab_index"
                    >
                      <input
                        type="radio"
                        name="placement-filter-conditions"
                        class="placement-filter-conditions"
                        v-on:change="changeTab(tab_index)"
                        checked
                      />
                      <div class="tab-number">{{ tab_index }}</div>
                      <div class="tab-underBar"></div>
                    </label>
                  </div>
                  <div class="tab-controls">
                    <label class="add-tab" title="タブを追加します。">
                      <input
                        type="button"
                        class="add-tab-element invisible-Control"
                        v-on:click="addTab"
                      />
                      <div class="add-tab-label">
                        <div class="add-tab-label-text">+ 追加</div>
                      </div>
                    </label>
                    <label class="remove-tab" title="現在のタブを削除します。">
                      <input
                        type="button"
                        class="remove-tab-element invisible-Control"
                        v-on:click="removeTab"
                      />
                      <div class="remove-tab-label">
                        <div class="remove-tab-label-text">- 削除</div>
                      </div>
                    </label>
                  </div>
                </div>
                <div
                  class="tab-contents"
                  v-for="(elem, tab_index) in data"
                  :key="tab_index"
                  v-show="tab_index == selected_tab"
                >
                  <div class="tab-container selected">
                    <div class="value-element" title="設置できる面を設定します">
                      <div class="value-label">
                        <p>許可する面</p>
                      </div>
                      <div class="value-input type-array-select">
                        <div class="array-list">
                          <label
                            class="array-data"
                            v-for="(elem, i) in data[tab_index].faces"
                            :key="i"
                          >
                            <div class="array-num">{{ i }}</div>
                            <select
                              name="components-placement-filter-block-filter"
                              class="
                                components-placement-filter-block-filter
                                type-array-string
                              "
                              v-on:change="
                                setAllowedFaces($event, tab_index, i)
                              "
                            >
                              <option value="up">上</option>
                              <option value="down">下</option>
                              <option value="north">北</option>
                              <option value="south">南</option>
                              <option value="east">東</option>
                              <option value="west">西</option>
                              <option value="side">側面</option>
                              <option value="all">全面</option>
                            </select>
                          </label>
                        </div>
                        <div class="array-list-control">
                          <label class="add-array" title="設定面を追加します。">
                            <input
                              type="button"
                              class="add-array-element invisible-Control"
                              v-on:click="addAllowedFaces(tab_index)"
                            />
                            <div class="add-array-label">
                              <div class="add-array-element-text">+ 追加</div>
                            </div>
                          </label>
                          <label
                            class="remove-array"
                            title="設定面を削除します。"
                          >
                            <input
                              type="button"
                              class="remove-array-element invisible-Control"
                              v-on:click="removeAllowedFaces(tab_index)"
                            />
                            <div class="remove-array-label">
                              <div class="remove-array-element-text">
                                - 削除
                              </div>
                            </div>
                          </label>
                        </div>
                      </div>
                    </div>
                    <div
                      class="value-element"
                      title="設置できるブロックを設定します。"
                    >
                      <div class="value-label">
                        <p>ブロック</p>
                      </div>
                      <div class="value-input type-array-string">
                        <div class="array-list">
                          <label
                            class="array-data"
                            v-for="(elem, i) in data[tab_index].filter"
                            :key="i"
                          >
                            <div class="array-num">{{ i }}</div>
                            <input
                              type="text"
                              name="components-placement-filter-block-filter"
                              class="
                                components-placement-filter-block-filter
                                type-array-string
                              "
                              v-on:change="setBlockFilter($event, tab_index, i)"
                            />
                          </label>
                        </div>
                        <div class="array-list-control">
                          <label
                            class="add-array"
                            title="ブロック入力欄を追加します。"
                          >
                            <input
                              type="button"
                              class="add-array-element invisible-Control"
                              v-on:click="addBlockFilter(tab_index)"
                            />
                            <div class="add-array-label">
                              <div class="add-array-element-text">+ 追加</div>
                            </div>
                          </label>
                          <label
                            class="remove-array"
                            title="ブロック入力欄を消します。"
                          >
                            <input
                              type="button"
                              class="remove-array-element invisible-Control"
                              v-on:click="removeBlockFilter(tab_index)"
                            />
                            <div class="remove-array-label">
                              <div class="remove-array-element-text">
                                - 削除
                              </div>
                            </div>
                          </label>
                        </div>
                      </div>
                    </div>
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
  </div>
</template>

<script>
import svgClose from "~/assets/img/close.svg?raw";
export default {
  data() {
    return {
      svgClose,
      selected_tab: 0,
      data: [
        {
          faces: ["up"],
          filter: [""],
        },
      ],
    };
  },
  props: ["uuid"],
  methods: {
    addTab() {
      this.data = [
        ...this.data,
        {
          faces: ["up"],
          filter: [""],
        },
      ];
      this.selected_tab++;
    },
    removeTab() {
      if (this.data.length > 1) {
        let tmp = this.data.map((val) => val);
        tmp.splice(tmp.length - 1, 1);
        this.data = tmp;
        this.selected_tab--;
      }
    },
    changeTab(tab_index) {
      this.selected_tab = tab_index;
    },
    addAllowedFaces(tab_index) {
      let tmp = this.data.map((val) => val);
      tmp[tab_index] = {
        ...tmp[tab_index],
        faces: [...this.data[tab_index].faces, ""],
      };
      this.data = tmp;
    },
    removeAllowedFaces(tab_index) {
      if (this.data[tab_index].faces.length > 1) {
        let tmp = this.data.map((val) => val);
        tmp[tab_index] = {
          ...tmp[tab_index],
          faces: this.data[tab_index].faces
            .map((val) => val)
            .splice(tmp.length - 1, 1),
        };
        this.data = tmp;
      }
    },
    setAllowedFaces(event, tab_index, index) {
      let tmp = this.data.map((val) => val);
      tmp[tab_index] = {
        ...tmp[tab_index],
        faces: this.data[tab_index].faces.map((val, i) =>
          i == index ? event.target.value : val
        ),
      };
      this.data = tmp;
      this.onChangedValue();
    },
    addBlockFilter(tab_index) {
      let tmp = this.data.map((val) => val);
      tmp[tab_index] = {
        ...tmp[tab_index],
        filter: [...this.data[tab_index].filter, ""],
      };
      this.data = tmp;
    },
    removeBlockFilter(tab_index) {
      if (this.data[tab_index].filter.length > 1) {
        let tmp = this.data.map((val) => val);
        tmp[tab_index] = {
          ...tmp[tab_index],
          filter: this.data[tab_index].filter
            .map((val) => val)
            .splice(tmp.length - 1, 1),
        };
        this.data = tmp;
      }
    },
    setBlockFilter(event, tab_index, index) {
      let tmp = this.data.map((val) => val);
      tmp[tab_index] = {
        ...tmp[tab_index],
        filter: this.data[tab_index].filter.map((val, i) =>
          i == index ? event.target.value : val
        ),
      };
      this.data = tmp;
      this.onChangedValue();
    },
    onChangedValue() {
      this.$store.commit("setComponentData", [this.uuid, this.data]);
    },
  },
};
</script>