export const createTime = (x, y, w, h, Images) => {
  hmUI.createWidget(hmUI.widget.IMG_TIME, {
    hour_zero: hmSetting.getTimeFormat(),
    hour_startX: x,
    hour_startY: y,
    hour_array: Images.BigNums,
    hour_space: 0,
    hour_unit_sc: Images.Colon,
    hour_unit_tc: Images.Colon,
    hour_unit_en: Images.Colon,
    hour_align: hmUI.align.RIGHT,
    minute_zero: 1,
    minute_startX: x + 100,
    minute_startY: y,
    minute_array: Images.BigNums,
    minute_space: 0,
    minute_align: hmUI.align.LEFT,
    minute_follow: 0,
    enable: true,
    show_level: hmUI.show_level.ONLY_NORMAL
  });

  hmUI.createWidget(hmUI.widget.IMG_CLICK, {
    x,
    y,
    w,
    h,
    type: hmUI.data_type.COUNT_DOWN,
    show_level: hmUI.show_level.ONLY_NORMAL,
  });
}
