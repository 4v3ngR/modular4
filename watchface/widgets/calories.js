export const createCalories = (x, y, w, h, Images) => {
  hmUI.createWidget(hmUI.widget.TEXT_IMG, {
    x: x + 36,
    y,
    type: hmUI.data_type.CAL,
    font_array: Images.SmallNums,
    align_h: hmUI.align.LEFT,
    h_space: 0,
    show_level: hmUI.show_level.ONLY_NORMAL,
    padding: false,
    isCharacter: false
  });

  hmUI.createWidget(hmUI.widget.IMG, {
    x,
    y: y + 4,
    src: Images.Calories,
    show_level: hmUI.show_level.ONLY_NORMAL,
  });
}
