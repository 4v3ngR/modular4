export const createBattery = (x, y, w, h, Images) => {
  hmUI.createWidget(hmUI.widget.TEXT_IMG, {
    x: x + 23,
    y,
    type: hmUI.data_type.BATTERY,
    font_array: Images.SmallNums,
    align_h: hmUI.align.LEFT,
    h_space: 0,
    show_level: hmUI.show_level.ONLY_NORMAL,
    padding: false,
    isCharacter: false
  });


  normal$_$battery$_$icon$_$component_0$_$img = hmUI.createWidget(hmUI.widget.IMG, {
    x,
    y: y + 7,
    src: Images.Percentage,
    show_level: hmUI.show_level.ONLY_NORMAL,
  });
}
