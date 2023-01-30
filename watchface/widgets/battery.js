export class BatteryWidget {
  constructor(x, y, w, h, Images) {
    this.batteryWidget = hmUI.createWidget(hmUI.widget.TEXT_IMG, {
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

    this.batteryImage = hmUI.createWidget(hmUI.widget.IMG, {
      x,
      y: y + 7,
      src: Images.Percentage,
      show_level: hmUI.show_level.ONLY_NORMAL,
    });
  }

  destroy() {
    if (this.batteryWidget) {
      hmUI.deleteWidget(this.batteryWidget);
      this.batteryWidget = null;
    }

    if (this.batteryImage) {
      hmUI.deleteWidget(this.batteryImage);
      this.batteryImage = null;
    }
  }
}
