/**
 * @fileoverview Suggested Auto Layout V2_4 javascript.
 */

var elements = {
  canvas: {
    type: 'shape',
    node_id: 'adContent',
    background_color_ids: 'back1MCColor',
    auto_background_color_id: 'autoBack1Color'
  },
  logoMCImage: {
    type: 'logo',
    node_id: 'logo-image',
    priority: 2
  },
  text1TFText: {
    type: 'text',
    font_level: 1,
    component_type: 'headline',
    node_id: 'headline',
    font_color_id: 'text1TFTextColor',
    auto_font_color_id: 'autoText1Color',
    auto_background_color_id: 'autoBack1Color'
  },
  text2TFText: {
    type: 'text',
    font_level: 2,
    component_type: 'description',
    node_id: 'description',
    font_color_id: 'text2TFTextColor',
    auto_background_color_id: 'autoBack1Color'
  },
  clickTFText: {
    type: 'button',
    node_id: 'button',
    font_color_id: 'clickTFTextColor',
    background_color_ids: 'clickTFBackColor',
    auto_background_color_id: 'autoButton1Color',
    weight: 1 / 28.0,
    priority: 1
  }
};

var spec = {
  elements: elements,
  variations: {
    square: {
      text1: {
        type: 'element',
        spec: {
          element: 'text1TFText'
        },
        alignments: 'top',
        bottom: '65%'
      },
      text2: {
        type: 'element',
        spec: {
          element: 'text2TFText'
        },
        top: 'text1 5%',
        bottom: 'logoAndButton 5%'
      },
      logoAndButton: {
        type: 'horizontal-list',
        spec: {
          elements: ['logoMCImage', 'clickTFText'],
          margin: 'even_left_extra',
          alignments: 'bottom'
        },
        alignments: 'bottom',
        top: '70%',
        bottom: '10%',
        left: '5%',
        right: '5%'
      }
    },
    tower: {
      calibrations: [
        'AspectRatioGE 1 0.5'
      ],
      text1: {
        type: 'element',
        spec: {
          element: 'text1TFText'
        },
        alignments: 'top'
      },
      text2: {
        type: 'element',
        spec: {
          element: 'text2TFText'
        },
        top: 'text1',
        left: '5%',
        right: '5%',
        bottom: 'buttonAndLogo 10%'
      },
      buttonAndLogo: {
        type: 'vertical-list',
        spec: {
          elements: ['clickTFText', 'logoMCImage'],
          margin: 'auto',
          alignments: 'bottom'
        },
        alignments: 'bottom',
        top: '70%'
      }
    },
    banner1: {
      calibrations: [
        'AspectRatioLE 1.5 0.5'
      ],
      texts: {
        type: 'vertical-list',
        spec: {
          elements: ['text1TFText', 'text2TFText'],
          margin: 'even_left_extra'
        },
        left: 'logo',
        right: 'button'
      },
      logo: {
        type: 'element',
        spec: {
          element: 'logoMCImage'
        },
        alignments: 'left',
        right: '70%'
      },
      button: {
        type: 'element',
        spec: {
          element: 'clickTFText'
        },
        alignments: 'right',
        left: '60%'
      }
    },
    banner2: {
      calibrations: [
        'AspectRatioLE 1.5 0.5'
      ],
      logo: {
        type: 'element',
        spec: {
          element: 'logoMCImage'
        },
        alignments: 'left',
        right: '70%'
      },
      text1: {
        type: 'element',
        spec: {
          element: 'text1TFText'
        },
        alignments: 'left',
        left: 'logo 4%',
        right: '50%'
      },
      text2: {
        type: 'element',
        spec: {
          element: 'text2TFText'
        },
        left: 'text1 4%',
        top: '7%',
        bottom: '7%',
        right: 'button'
      },
      button: {
        type: 'element',
        spec: {
          element: 'clickTFText'
        },
        alignments: 'left right',
        left: '80%'
      }
    }
  }
};

var smallSizeSpec = {
  elements: elements,
  variations: {
    smallSquare1: {
      styles: {
        clickTFText: {
          displayType: 'nessieButton'
        }
      },
      text1: {
        type: 'element',
        spec: {
          element: 'text1TFText'
        },
        bottom: 'buttonAndLogo 10%'
      },
      text2: {
        type: 'element',
        spec: {
          element: 'text2TFText'
        },
        bottom: 'buttonAndLogo 10%',
        z_index: 1
      },
      buttonAndLogo: {
        type: 'vertical-list',
        spec: {
          elements: ['clickTFText', 'logoMCImage'],
          margin: 'auto',
          alignments: 'bottom'
        },
        alignments: 'bottom',
        top: '70%'
      }
    },
    smallSquare2: {
      styles: {
        clickTFText: {
          displayType: 'nessieButton'
        }
      },
      text1: {
        type: 'element',
        spec: {
          element: 'text1TFText'
        },
        bottom: 'logoAndButton 15%'
      },
      text2: {
        type: 'element',
        spec: {
          element: 'text2TFText'
        },
        bottom: 'logoAndButton 15%',
        z_index: 1
      },
      logoAndButton: {
        type: 'horizontal-list',
        spec: {
          elements: ['logoMCImage', 'clickTFText'],
          margin: 'even_left_extra',
          alignments: 'bottom'
        },
        alignments: 'bottom',
        top: '70%'
      }
    },
    smallBanner1: {
      styles: {
        clickTFText: {
          displayType: 'nessieButton'
        }
      },
      logo: {
        type: 'element',
        spec: {
          element: 'logoMCImage'
        },
        alignments: 'left',
        right: 'button'
      },
      text1: {
        type: 'element',
        spec: {
          element: 'text1TFText'
        },
        alignments: 'left',
        left: 'logo',
        right: 'button'
      },
      text2: {
        type: 'element',
        spec: {
          element: 'text2TFText'
        },
        alignments: 'left',
        left: 'logo',
        right: 'button',
        z_index: 1
      },
      button: {
        type: 'element',
        spec: {
          element: 'clickTFText'
        },
        alignments: 'right',
        left: '70%'
      }
    }
  }
};

function onAdData(adData) {
  var ccm = adData['google_template_data']['adData'][0];
  ccm['siriusFlagEnableSingleCss'] = 'true';

  var pickedSpec = isSmallSizeAd(adData) ? smallSizeSpec : spec;
  renderAd(adData, pickedSpec);
}
