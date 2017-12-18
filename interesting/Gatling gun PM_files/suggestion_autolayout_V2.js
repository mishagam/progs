/**
 * @fileoverview Suggested Auto Layout V2 javascript.
 */

var elements = {
  canvas: {
    type: 'shape',
    node_id: 'adContent',
    background_color_ids: 'back1MCColor',
    auto_background_color_id: 'autoBack1Color'
  },
  product1MCImage: {
    type: 'product',
    node_id: 'product-image'
  },
  logoMCImage: {
    type: 'logo',
    node_id: 'logo-image'
  },
  text1TFText: {
    type: 'text',
    component_type: 'headline',
    font_level: 1,
    node_id: 'headline',
    font_color_id: 'text1TFTextColor',
    auto_font_color_id: 'autoText1Color',
    auto_background_color_id: 'autoBack1Color'
  },
  text2TFText: {
    type: 'text',
    component_type: 'description',
    font_level: 2,
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
    weight: 1 / 24
  }
};

var spec = {
  elements: elements,
  variations: {
    tower1: {
      calibrations: [
        'AspectRatioGE 1 0'
      ],
      product1MCImage: {
        type: 'element',
        spec: {
          element: 'product1MCImage'
        },
        alignments: 'top',
        left: '0',
        top: '0',
        right: '0',
        bottom: '50%'
      },
      textBox: {
        type: 'vertical-list',
        spec: {
          elements: ['text1TFText', 'text2TFText'],
          margin: 'auto',
          alignments: 'top bottom'
        },
        alignments: 'top bottom',
        top: 'product1MCImage',
        bottom: 'logoAndButton'
      },
      logoAndButton: {
        type: 'auto-list',
        spec: {
          elements: ['logoMCImage', 'clickTFText'],
          margin: 'auto',
          alignments: 'bottom'
        },
        alignments: 'bottom',
        top: '50%'
      }
    },
    banner1: {
      calibrations: [
        'AspectRatioLE 0.5 0'
      ],
      product1MCImage: {
        type: 'element',
        spec: {
          element: 'product1MCImage'
        },
        alignments: 'left',
        left: '0',
        top: '0',
        right: '50%',
        bottom: '0'
      },
      textBox: {
        type: 'vertical-list',
        spec: {
          elements: ['text1TFText', 'text2TFText'],
          margin: 'auto'
        },
        alignments: 'left',
        left: 'product1MCImage',
        right: 'logoAndButton'
      },
      logoAndButton: {
        type: 'auto-list',
        spec: {
          elements: ['logoMCImage', 'clickTFText'],
          margin: 'auto',
          alignments: 'right'
        },
        alignments: 'right',
        left: '50%'
      }
    },
    banner2: {
      product1MCImage: {
        type: 'element',
        spec: {
          element: 'product1MCImage'
        },
        alignments: 'left',
        left: '0',
        top: '0',
        right: '50%',
        bottom: '0'
      },
      textBox: {
        type: 'vertical-list',
        spec: {
          elements: ['text1TFText', 'text2TFText'],
          margin: 'auto'
        },
        left: 'product1MCImage',
        bottom: 'logoAndButton'
      },
      logoAndButton: {
        type: 'horizontal-list',
        spec: {
          elements: ['logoMCImage', 'clickTFText'],
          margin: 'auto',
          alignments: 'bottom'
        },
        alignments: 'bottom',
        left: 'product1MCImage'
      }
    },
    square1: {
      calibrations: [
        'AspectRatioLE 0.8 0',
        'AspectRatioGE 2.1 0'
      ],
      product1MCImage: {
        type: 'element',
        spec: {
          element: 'product1MCImage'
        },
        alignments: 'left',
        left: '0',
        top: '0',
        right: '50%',
        bottom: '0'
      },
      textBox: {
        type: 'vertical-list',
        spec: {
          elements: ['text1TFText', 'text2TFText'],
          margin: 'auto'
        },
        left: 'product1MCImage',
        bottom: 'logoAndButton'
      },
      logoAndButton: {
        type: 'vertical-list',
        spec: {
          elements: ['logoMCImage', 'clickTFText'],
          margin: 'auto',
          alignments: 'bottom'
        },
        alignments: 'bottom',
        left: 'product1MCImage'
      }
    },
    square2: {
      calibrations: [
        'AspectRatioLE 0.8 0',
        'AspectRatioGE 2.1 0'
      ],
      product1MCImage: {
        type: 'element',
        spec: {
          element: 'product1MCImage'
        },
        alignments: 'top',
        left: '0',
        top: '0',
        right: '0',
        bottom: '50%'
      },
      text1TFText: {
        type: 'element',
        spec: {
          element: 'text1TFText'
        },
        alignments: 'top',
        top: 'product1MCImage'
      },
      text2TFText: {
        type: 'element',
        spec: {
          element: 'text2TFText'
        },
        alignments: 'top',
        top: 'text1TFText',
        right: 'logoAndButton'
      },
      logoAndButton: {
        type: 'vertical-list',
        spec: {
          elements: ['logoMCImage', 'clickTFText'],
          margin: 'auto',
          alignments: 'right bottom'
        },
        alignments: 'right bottom',
        left: '50%',
        top: 'text1TFText'
      }
    }
  }
};

var smallSizeSpec = {
  elements: elements,
  variations: {
    smallSquare: {
      calibrations: [
        'AspectRatioGE 2.1 0'
      ],
      product1MCImage: {
        type: 'element',
        spec: {
          element: 'product1MCImage'
        },
        alignments: 'top',
        left: '0',
        top: '0',
        right: '0',
        bottom: '40%'
      },
      textBox1: {
        type: 'element',
        spec: {
          element: 'text1TFText'
        },
        alignments: 'top',
        top: 'product1MCImage',
        bottom: 'logoAndButton'
      },
      textBox2: {
        type: 'element',
        spec: {
          element: 'text2TFText'
        },
        top: 'product1MCImage',
        bottom: 'logoAndButton',
        z_index: 1
      },
      logoAndButton: {
        type: 'vertical-list',
        spec: {
          elements: ['logoMCImage', 'clickTFText'],
          margin: 'auto'
        },
        top: '80%'
      }
    },
    smallBanner: {
      calibrations: [
        'AspectRatioLE 0.5 0'
      ],
      product1MCImage: {
        type: 'element',
        spec: {
          element: 'product1MCImage'
        },
        alignments: 'left',
        left: '0',
        top: '0',
        right: '50%',
        bottom: '0'
      },
      textBox1: {
        type: 'element',
        spec: {
          element: 'text1TFText'
        },
        left: 'product1MCImage',
        right: 'logoAndButton'
      },
      textBox2: {
        type: 'element',
        spec: {
          element: 'text2TFText'
        },
        left: 'product1MCImage',
        right: 'logoAndButton',
        top: '2%',
        bottom: '2%',
        z_index: 1
      },
      logoAndButton: {
        type: 'auto-list',
        spec: {
          elements: ['logoMCImage', 'clickTFText'],
          margin: 'auto',
          alignments: 'right'
        },
        alignments: 'right',
        left: '50%'
      }
    }
  }
};

function onAdData(adData) {
  var ccm = adData['google_template_data']['adData'][0];
  ccm['siriusFlagEnableSingleCss'] = 'true';

  var adArea = adData['google_width'] * adData['google_height'];
  if (adArea > 180 * 180) {
    renderAd(adData, spec);
  } else {
    renderAd(adData, smallSizeSpec);
  }
}
