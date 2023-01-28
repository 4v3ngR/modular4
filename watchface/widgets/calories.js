let caloriesWidget = null;
let caloriesImage = null;

export const createCalories = (x, y, w, h, Images) => {
  if (!caloriesWidget) {
    caloriesWidget = hmUI.createWidget(hmUI.widget.TEXT_IMG, {
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
  }

  if (!caloriesImage) {
    caloriesImage = hmUI.createWidget(hmUI.widget.IMG, {
      x,
      y: y + 4,
      src: Images.Calories,
      show_level: hmUI.show_level.ONLY_NORMAL,
    });
  }
}

export const destroyCalories = () => {
  if (caloriesWidget) {
    hmUI.deleteWidget(caloriesWidget);
    caloriesWidget = null;
  }

  if (caloriesImage) {
    hmUI.deleteWidget(caloriesImage);
    caloriesImage = null
  }
}
