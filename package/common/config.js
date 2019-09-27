const golbalConfig = {
  xform: {
    input: {
      type: 'text',
      valueKey: 'value',
      debounce: 300,
      placement: 'bottom-start',
      triggerOnFocus: true,
      selectWhenUnmatched: false,
      maxlength: 12,
      minlength: 12,
      showWordLimit: false,
      placeholder: 'aaa',
      clearable: false,
      size: 'medium',
      rows: 3,
      autosize: false,
      autocomplete: 'off',
      resize: 'none',
      validateEvent: true,
      hideLoading: false,
      popperAppendToBody: true,
      highlightFirstItem: false
    },
    select: {
      multiple: false,
      valueKey: 'value',
      size: 'medium',
      clearable: false,
      collapseTags: false,
      multipleLimit: 0,
      autocomplete: 'off',
      placeholder: '请选择',
      filterable: false,
      allowcreate: false,
      remote: false,
      loading: false,
      loadingText: '加载中',
      noMatchText: '无匹配数据',
      noDataText: '无数据',
      reserveKeyword: false,
      defaultFirstOption: false,
      popperAppendToBody: true,
      automaticDropdown: false
    },
    datePicker: {
      readonly: false,
      editable: true,
      clearable: true,
      size: '',
      placeholder: '请选择日期',
      startPlaceholder: '开始时间',
      endPlaceholder: '结束时间',
      type: 'date',
      format: '',
      align: 'left',
      pickerOptions: {},
      rangeSeparator: '——',
      valueFormat: '',
      unlinkPanels: false,
      prefixIcon: 'el-icon-date',
      clearIcon: 'el-icon-circle-close',
      validateEvent: true
    },
    checkbox: {
      size: 'medium',
      min: null,
      max: null,
      textColor: '#ffffff',
      fill: '#409EFF',
      border: false
    },
    radio: {
      border: false,
      size: 'medium',
      textColor: '#ffffff',
      fill: '#409EFF'
    },
    cascader: {
      size: 'medium',
      placeholder: '请选择',
      clearable: false,
      showAllLevels: true,
      collapseTags: false,
      separator: ' / ',
      debounce: 300
    },
    switch: {
      width: 40,
      activeValue: true,
      inactiveValue: false,
      activeColor: '#409EFF',
      inactiveColor: '#C0CCDA',
      validateEvent: true
    },
    inputNumber: {
      min: '-Infinity',
      max: 'Infinity',
      step: 1,
      stepStrictly: false,
      precision: null,
      size: 'medium',
      controls: true,
      controlsPosition: null,
      placeholder: null
    },
    slider: {
      min: 0,
      max: 100,
      step: 1,
      showInput: false,
      showInputControls: true,
      inputSize: 'small',
      showStops: false,
      showTooltip: true,
      range: false,
      vertical: false,
      height: null,
      label: null,
      debounce: 300,
      marks: null
    },
    timePicker: {
      editable: true,
      clearable: true,
      size: 'medium',
      placeholder: '',
      align: 'left',
      startPlaceholder: '',
      endPlaceholder: '',
      isRange: false,
      arrowControl: false,
      pickerOptions: {},
      rangeSeparator: '-',
      valueFormat: '',
      prefixIcon: 'el-icon-time',
      clearIcon: 'el-icon-circle-close',

      selectableRange: null,
      format: 'HH:mm:ss'
    },
    timeSelect: {
      editable: true,
      clearable: true,
      size: 'medium',
      placeholder: '',
      align: 'left',
      startPlaceholder: '',
      endPlaceholder: '',
      isRange: false,
      arrowControl: false,
      pickerOptions: {},
      rangeSeparator: '-',
      valueFormat: '',
      prefixIcon: 'el-icon-time',
      clearIcon: 'el-icon-circle-close',

      start: '09:00',
      end: '18:00',
      step: '00:30',
      minTime: '00:00',
      maxTime: null
    },
    rate: {
      max: 5,
      texts: ['极差', '失望', '一般', '满意', '惊喜'],
      colors: ['#F7BA2A', '#F7BA2A', '#F7BA2A'],
      allowHalf: false,
      lowThreshold: 2,
      highThreshold: 4,
      voidColor: '#C6D1DE',
      iconClasses: ['el-icon-star-on', 'el-icon-star-on', 'el-icon-star-on'],
      showText: false,
      showScore: false,
      textColor: '#1F2D3D',
      scoreTemplate: '{value}',
      disabledVoidColor: '#EFF2F7',
      voidIconClass: 'el-icon-star-off',
      disabledVoidIconClass: 'el-icon-star-on'
    },
    colorPicker: {
      size: 'medium',
      predefine: null,
      showAlpha: false,
      colorFormat: 'hex'
    }
  }
}

export default {
  get: () => golbalConfig,
  set: item => {
    Object.assign(golbalConfig, item)
  }
}
