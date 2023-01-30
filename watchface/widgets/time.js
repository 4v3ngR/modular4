export class TimeWidget {
  constructor(x, y, w, h, Images) {
    const timeFormat = hmSetting.getTimeFormat();

    if (!this.timeWidget) {
      let ampm = {};
      if (!timeFormat) {
        ampm = {
          am_x: x + w - 20,
          am_y: y + h - 18,
          am_sc_path: Images.AM,
          am_en_path: Images.AM,
          pm_x: x + w - 20,
          pm_y: y + h - 18,
          pm_sc_path: Images.PM,
          pm_en_path: Images.PM,
        };
      }

      this.timeWidget = hmUI.createWidget(hmUI.widget.IMG_TIME, {
        hour_zero: timeFormat,
        hour_startX: x,
        hour_startY: y,
        hour_array: Images.BigNums,
        hour_space: 0,
        hour_unit_sc: Images.Colon,
        hour_unit_tc: Images.Colon,
        hour_unit_en: Images.Colon,
        hour_align: hmUI.align.RIGHT,
        minute_zero: 1,
        minute_array: Images.BigNums,
        minute_align: hmUI.align.RIGHT,
        minute_follow: 1,
        ...ampm,
        enable: true,
        show_level: hmUI.show_level.ONLY_NORMAL
      });
    }

    this.clickZone = hmUI.createWidget(hmUI.widget.IMG_CLICK, {
      x,
      y,
      w,
      h,
      type: hmUI.data_type.COUNT_DOWN,
      show_level: hmUI.show_level.ONLY_NORMAL,
    });
  }

  destroy() {
    if (this.timeWidget) {
      hmUI.deleteWidget(this.timeWidget);
      this.timeWidget = null;
    }

    if (this.clickZone) {
      hmUI.deleteWidget(this.clickZone);
      this.clickZone = null;
    }
  }
}
