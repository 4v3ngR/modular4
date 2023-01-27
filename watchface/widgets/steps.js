export const createSteps = (x, y, w, h, Images) => {
  hmUI.createWidget(hmUI.widget.TEXT_IMG, {
    x: x + 36,
    y,
    type: hmUI.data_type.STEP,
    font_array: Images.SmallNums,
    align_h: hmUI.align.LEFT,
    h_space: 0,
    show_level: hmUI.show_level.ONLY_NORMAL,
    padding: false,
    isCharacter: false
  });

  hmUI.createWidget(hmUI.widget.IMG, {
    x,
    y: y + 2,
    src: Images.Steps,
    show_level: hmUI.show_level.ONLY_NORMAL,
  });

  hmUI.createWidget(hmUI.widget.IMG_CLICK, {
    x,
    y,
    w,
    h,
    type: hmUI.data_type.STEP,
    show_level: hmUI.show_level.ONLY_NORMAL,
  });
}
