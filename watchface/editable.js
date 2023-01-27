const createEditable = (edit_id, x, y, w, h, Images, default_type) => {
  /*
    x: 200,
    y: 330,
    w: 80,
    h: 38,
    */
  const component = hmUI.createWidget(hmUI.widget.WATCHFACE_EDIT_GROUP, {
    edit_id,
    x,
    y,
    w,
    h,
    default_type,
    optional_types: [{"type":hmUI.edit_type.BATTERY,"preview":""},{"type":hmUI.edit_type.CAL,"preview":""},{"type":hmUI.edit_type.HEART,"preview":""}],
    count: 3,
    tips_BG: '86.png',
    tips_x: 0,
    tips_y: 0,
    tips_width: 38,
    tips_margin: 1
  });

  const editType = component.getProperty(hmUI.prop.CURRENT_TYPE);

  switch (editType) {
    case hmUI.edit_type.STEP:
      break;
    case hmUI.edit_type.BATTERY:

      hmUI.createWidget(hmUI.widget.TEXT_IMG, {
        x: x + 27,
        y: 332,
        type: hmUI.data_type.BATTERY,
        font_array: Images.SmallNums,
        align_h: hmUI.align.LEFT,
        h_space: 0,
        show_level: hmUI.show_level.ONLY_NORMAL,
        padding: false,
        isCharacter: false
      });


      normal$_$battery$_$icon$_$component_0$_$img = hmUI.createWidget(hmUI.widget.IMG, {
        x: x + 4,
        y: 339,
        src: '87.png',
        show_level: hmUI.show_level.ONLY_NORMAL,
      });

      break;
    case hmUI.edit_type.HEART:

      normal$_$heart_rate$_$text$_$component_0$_$text_img = hmUI.createWidget(hmUI.widget.TEXT_IMG, {
        x: x + 27,
        y: 332,
        type: hmUI.data_type.HEART,
        font_array: Images.SmallNums,
        align_h: hmUI.align.LEFT,
        h_space: 0,
        show_level: hmUI.show_level.ONLY_NORMAL,
        invalid_image: Images.Invalid,
        padding: false,
        isCharacter: false
      });


      normal$_$heart_rate$_$icon$_$component_0$_$img = hmUI.createWidget(hmUI.widget.IMG, {
        x: x + 1,
        y: 339,
        src: '89.png',
        show_level: hmUI.show_level.ONLY_NORMAL,
      });

      break;
    case hmUI.edit_type.CAL:
      hmUI.createWidget(hmUI.widget.TEXT_IMG, {
        x: x + 27,
        y: 332,
        type: hmUI.data_type.CAL,
        font_array: Images.SmallNums,
        align_h: hmUI.align.LEFT,
        h_space: 0,
        show_level: hmUI.show_level.ONLY_NORMAL,
        padding: false,
        isCharacter: false
      });


      normal$_$calorie$_$icon$_$component_0$_$img = hmUI.createWidget(hmUI.widget.IMG, {
        x: x,
        y: 336,
        src: '90.png',
        show_level: hmUI.show_level.ONLY_NORMAL,
      });

      break;
    case hmUI.edit_type.PAI_DAILY:
      break;
    case hmUI.edit_type.DISTANCE:
      break;
    case hmUI.edit_type.AQI:
      break;
    case hmUI.edit_type.HUMIDITY:
      break;
    case hmUI.edit_type.ALTIMETER:
      break;
    case hmUI.edit_type.STRESS:
      break;
    case hmUI.edit_type.WIND:
      break;
    case hmUI.edit_type.SPO2:
      break;
    case hmUI.edit_type.TRAINING_LOAD:
      break;
    case hmUI.edit_type.VO2MAX:
      break;
    case hmUI.edit_type.UVI:
      break;
    case hmUI.edit_type.DATE:
      break;
    case hmUI.edit_type.WEEK:
      break;
    case hmUI.edit_type.WEATHER:
      break;
    case hmUI.edit_type.TEMPERATURE:
      break;
    case hmUI.edit_type.SUN:
      break;
    default:
      break
  }


  hmUI.createWidget(hmUI.widget.WATCHFACE_EDIT_MASK,{
    x: 0,
    y: 0,
    w: 336,
    h: 384,
    src: '91.png',
    show_level:hmUI.show_level.ONLY_EDIT,
  });


  hmUI.createWidget(hmUI.widget.WATCHFACE_EDIT_FG_MASK,{
    x: 0,
    y: 0,
    w: 336,
    h: 384,
    src: '92.png',
    show_level:hmUI.show_level.ONLY_EDIT,
  });
}
