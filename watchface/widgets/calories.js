export class CaloriesWidget {
  constructor(x, y, w, h, Images) {
    this.caloriesWidget = hmUI.createWidget(hmUI.widget.TEXT_IMG, {
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

    this.caloriesImage = hmUI.createWidget(hmUI.widget.IMG, {
      x,
      y: y + 4,
      src: Images.Calories, 
      show_level: hmUI.show_level.ONLY_NORMAL,
    });
  } 

  destroy() {
    if (this.caloriesWidget) {
      hmUI.deleteWidget(this.caloriesWidget);
      this.caloriesWidget = null;
    }

    if (this.caloriesImage) {
      hmUI.deleteWidget(this.caloriesImage);
      this.caloriesImage = null
    }
  }

  show() {
    this.caloriesWidget.setProperty(hmUI.prop.VISIBLE, true);
    this.caloriesImage.setProperty(hmUI.prop.VISIBLE, true);
  }

  hide() {
    this.caloriesWidget.setProperty(hmUI.prop.VISIBLE, false);
    this.caloriesImage.setProperty(hmUI.prop.VISIBLE, false);
  }
}
