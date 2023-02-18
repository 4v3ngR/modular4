import { getImages } from './includes/images';
import { TimeWidget } from './widgets/time';
import { WeatherWidget } from './widgets/large/weather';
import { DateWidget } from './widgets/date';
import { StepsWidget } from './widgets/steps';
import { CaloriesWidget } from './widgets/calories';
import { HeartrateWidget } from './widgets/heartrate';
import { BatteryWidget } from './widgets/battery';
import { PageWidget } from './widgets/page';
import { DistanceWidget } from './widgets/distance';
import { VO2MaxWidget } from './widgets/vo2max';
import { SPO2Widget } from './widgets/spo2';
import { TrainingLoadWidget } from './widgets/training';

import { EditableWidget } from './widgets/editable';

let timeWidget = null;
let weatherWidget = null;
let dateWidget = null;
let pageWidget = null;

// page 0
let stepsWidget = null;
let caloriesWidget = null;
let heartrateWidget = null;
let batteryWidget = null;

// page 1
let distanceWidget = null;
let vo2maxWidget = null;
let spo2Widget = null;
let trainingLoadWidget = null;

let activePage = 0;

WatchFace({
  initView() {
    const deviceInfo = hmSetting.getDeviceInfo();
    const screenType = hmSetting.getScreenType();

    this.Images = getImages(hmSetting.getLanguage());

    // background
    hmUI.createWidget(hmUI.widget.FILL_RECT, {
      x: px(0),
      y: px(0),
      w: px(deviceInfo.width),
      h: px(deviceInfo.height),
      color: 0x000000
    });

    this.createWidgets();
  },

  setPage(page) {
    switch(page) {
      case 0:
        pageWidget.setPage(1, this.Images);
        stepsWidget.hide();
        caloriesWidget.hide();
        heartrateWidget.hide();
        batteryWidget.hide();

        distanceWidget.show();
        vo2maxWidget.show();
        spo2Widget.show();
        trainingLoadWidget.show();
        break;
      case 1:
        pageWidget.setPage(0, this.Images);
        stepsWidget.show();
        caloriesWidget.show();
        heartrateWidget.show();
        batteryWidget.show();

        distanceWidget.hide();
        vo2maxWidget.hide();
        spo2Widget.hide();
        trainingLoadWidget.hide();
        break;
    }
  },

  onPgClick() {
    activePage = 1 - activePage;
    this.setPage(activePage);
  },

  destroyWidgets() {
    timeWidget.destroy(); timeWidget = null;
    weatherWidget.destroy(); weatherWidget = null;
    dateWidget.destroy(); dateWidget = null;
    stepsWidget.destroy(); stepsWidget = null;
    caloriesWidget.destroy(); caloriesWidget = null;
    heartrateWidget.destroy(); heartrateWidget = null;
    batteryWidget.destroy(); batteryWidget = null;
    distanceWidget.destroy(); distanceWidget = null;
    vo2maxWidget.destroy(); vo2maxWidget = null;
    spo2Widget.destroy(); spo2Widget = null;
    trainingLoadWidget.destroy(); trainingLoadWidget = null;
    pageWidget.destroy(); pageWidget = null;
  },

  createWidgets() {
    timeWidget = new TimeWidget(124 - 20 * !hmSetting.getTimeFormat(), 40, 200, 80, this.Images);
    weatherWidget = new WeatherWidget(30, 140, 300, 120, this.Images);
    dateWidget = new DateWidget(48, 51, this.Images);

    // page 0
    stepsWidget = new StepsWidget(40, 288, 80, 80, this.Images);
    caloriesWidget = new CaloriesWidget(40, 332, 80, 80, this.Images);
    heartrateWidget = new HeartrateWidget(200, 288, 80, 80, this.Images);
    batteryWidget = new BatteryWidget(204, 332, 80, 80, this.Images);

    // page 1
    distanceWidget = new DistanceWidget(40, 288, 80, 80, this.Images);
    vo2maxWidget = new VO2MaxWidget(40, 332, 80, 80, this.Images);
    spo2Widget = new SPO2Widget(200, 288, 80, 80, this.Images);
    trainingLoadWidget = new TrainingLoadWidget(200, 332, 80, 80, this.Images);

    pageWidget = new PageWidget(154, 304, 30, 56, activePage, this.Images, this.onPgClick.bind(this));
    this.setPage(activePage);
  },

  onInit() {
    let timeFormat = hmSetting.getTimeFormat();
    let language = hmSetting.getLanguage();

    const widgetDelegate = hmUI.createWidget(hmUI.widget.WIDGET_DELEGATE, {
      resume_call: (() => {
        const newTimeFormat = hmSetting.getTimeFormat();
        const newLanguage = hmSetting.getLanguage();
        if (newTimeFormat !== timeFormat || newLanguage !== language) {
          this.Images = getImages(hmSetting.getLanguage());
          this.destroyWidgets();
          this.createWidgets();
          timeFormat = newTimeFormat;
          language = newLanguage;
        }
      }),
      pause_call: (() => {
        console.log('ui pause');
      }),
    })
  },

  build() {
    try {
      this.initView();
    } catch (ex) {
      console.log("got ex " + ex.message);
    }
  },

  onDestroy() { },
})
