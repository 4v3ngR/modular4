export class DistanceWidget {
  constructor(x, y, w, h, Images) {
    this.distanceWidget = hmUI.createWidget(hmUI.widget.TEXT_IMG, {
      x: x + 36,
      y,
      type: hmUI.data_type.DISTANCE,
      font_array: Images.SmallNums,
      aligh_h: hmUI.align.LEFT,
      h_space: 0,
      show_level: hmUI.show_level.ONLY_NORMAL,
      padding: false,
      isCharacter: false,
      dot_image: Images.SmallDot
    });

    this.distanceImage = hmUI.createWidget(hmUI.widget.IMG, {
      x,
      y: y + 2,
      src: Images.Distance,
      showLevel: hmUI.show_level.ONLY_NORMAL,
    });
  }

  destroy() {
    if (this.distanceWidget) {
      hmUI.deleteWidget(this.distanceWidget);
      this.distanceWidget = null;
    }

    if (this.distanceImage) {
      hmUI.deleteWidget(this.distanceImage);
      this.distanceImage = null;
    }
  }

  show() {
    this.distanceWidget.setProperty(hmUI.prop.VISIBLE, true);
    this.distanceImage.setProperty(hmUI.prop.VISIBLE, true);
  }

  hide() {
    this.distanceWidget.setProperty(hmUI.prop.VISIBLE, false);
    this.distanceImage.setProperty(hmUI.prop.VISIBLE, false);
  }
}
