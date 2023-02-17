export class PageWidget {
  constructor (x, y, w, h, page, Images, callback) {
    this.pageImage = hmUI.createWidget(hmUI.widget.IMG, {
      x, y, w, h,
      src: page === 0 ? Images.PageDown : Images.PageUp,
      show_level: hmUI.show_level.ONLY_NORMAL,
    });

    if (callback) {
      this.pageImage.addEventListener(hmUI.event.CLICK_DOWN, callback);
    }
  }

  destroy() {
    if (this.pageImage) {
      hmUI.deleteWidget(this.pageImage);
      this.pageImage = null;
    }
  }
        
  show() {
    this.pageImage.setProperty(hmUI.prop.VISIBLE, true);
  }     
      
  hide() {
    this.pageImage.setProperty(hmUI.prop.VISIBLE, false);
  }   

  setPage(page, Images) {
    this.pageImage.setProperty(hmUI.prop.MORE, {
      src: page === 0 ? Images.PageDown : Images.PageUp
    });
  }
}
