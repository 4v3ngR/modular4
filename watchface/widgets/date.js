export const createDate = (x, y, Images) => {
  hmUI.createWidget(hmUI.widget.IMG_DATE, {
    day_startX: x,
    day_startY: y + 12,
    day_sc_array: Images.MidNums,
    day_tc_array: Images.MidNums,
    day_en_array: Images.MidNums,
    day_align: hmUI.align.LEFT,
    day_zero: 0,
    day_follow: 0,
    day_space: 0,
    day_is_character: false,
    enable: false,
    show_level: hmUI.show_level.ONLY_NORMAL,
  });

  hmUI.createWidget(hmUI.widget.IMG_WEEK, {
    x: x + 2,
    y: y,
    week_en: Images.WeekDays,
    show_level: hmUI.show_level.ONLY_NORMAL,
  });
}