import Vue from "vue";
Vue.mixin({
  methods: {
    // UUID生成
    getUuid_v4() {
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
    },
    // UUIDチェック
    isUUID(uuid = "") {
      const s = uuid.match(
        "^[0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12}$"
      );
      if (s === null) {
        return false;
      }
      return true;
    },
  },
});
export class JSONReplace {
  constructor() {
    this.replace_point = new Object();
  }
  /**
   *
   * @param {*} data
   * @returns {string}
   */
  register(data) {
    let key = null;
    if (Array.isArray(data)) {
      // 配列
      if (
        (Math.max.apply(
          null,
          data.map((val) => String(val).length)
        ) >= 5 &&
          data.length >= 6) ||
        data.join(",").length >= 80 ||
        data.some((val) => typeof val == "object") ||
        data.length == 0
      ) {
        // 5文字以上、6要素以上。80文字以上。オブジェクトアリ。空
        key = data;
      } else {
        key = getUuid_v4();
        this.replace_point[`"${key}"`] = data;
      }
    } else if (typeof data == "string") {
      // 文字列
      key = getUuid_v4();
      this.replace_point[`"${key}"`] = data.replace(/\\[^n\\]|\\$/g, "");
    } else {
      // それ以外
      key = data;
    }
    return key;
  }
  replaceAll(/**@type {String} */ string_json) {
    const keys = Object.keys(this.replace_point);
    for (let index = 0; index < keys.length; index++) {
      const key = keys[index];
      const data = this.replace_point[key];
      string_json = string_json.replace(
        key,
        (() => {
          if (Array.isArray(data))
            return JSON.stringify(data)
              .split(/^\[/)
              .join("[ ")
              .split(/,/)
              .join(", ")
              .split(/\]$/)
              .join(" ]");
          else if (typeof data == "string") return `"${data}"`;
        })()
      );
    }
    return string_json;
  }
}

export class Issue {
  constructor() {
    this.error_list = new Array();
    this.warning_list = new Array();
    $("ul.issue-list li").remove();
    $(".stat-warning,.stat-error").removeClass("stat-warning stat-error");
  }
  setIssueList() {
    $("span.issue-error-num").text("エラー:" + this.error_list.length);
    $("span.issue-warning-num").text("警告:" + this.warning_list.length);
    if (this.warning_list.length <= 0 && this.error_list.length <= 0) {
      $("ul.issue-list").append("<li>問題はありません</li>");
    } else {
      this.error_list.forEach((val) => {
        $("ul.issue-list").append(
          $("<li>").append(
            $("<img>").attr({
              src: "~/assets/img/error.svg",
              alt: "",
              width: "19px",
              height: "19px",
            }),
            $("<p>").text(val[0])
          )
        );
        val[1].addClass("stat-error");
      });
      this.warning_list.forEach((val) => {
        $("ul.issue-list").append(
          $("<li>").append(
            $("<img>").attr({
              src: "~/assets/img/warning.svg",
              alt: "",
              width: "19px",
              height: "19px",
            }),
            $("<p>").text(val[0])
          )
        );
        val[1].addClass("stat-warning");
      });
    }
  }
  addWarning(issue_comment, issue_element) {
    this.warning_list.push([issue_comment, issue_element]);
  }
  addError(issue_comment, issue_element) {
    this.error_list.push([issue_comment, issue_element]);
  }
}
