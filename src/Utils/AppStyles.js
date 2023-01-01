import { StyleSheet } from 'react-native';
import { Dimensions, PixelRatio, Platform, NativeModules } from 'react-native';
const WindowWidth = Dimensions.get('window').width;
const WindowHeight = Dimensions.get('window').height;
export { WindowHeight, WindowWidth };

export const COLORS = {
  PRIMARY: "#ECA869",
  SECONDRY: "Config.secondryColor",
  TERTIARY: "Config.tertiaryColor",
  WHITE: 'white',
  BLACK: 'black',
  textColor: '#2E2E32',
  iconColor: '#515151',
  background: '#F5F5DC',
  redColor: '#E95E5E',
  yellowCOLOR: '#F8D834',
  lightGray: '#D9D9D9',
  defaultText: '#7C7C7C',
};


export const GeneralWidth = { width: '90%' };
export const GeneralTop = { marginTop: WindowHeight * 0.016 };


export const IOSAndroid = StyleSheet.create({
  elevation1: {
    elevation: 1,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.18,
    shadowRadius: 1.0,
  },
  elevation10: {
    elevation: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.34,
    shadowRadius: 6.27,
  },
  elevation2: {
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,
  },
  elevation3: {
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,
  },
  elevation4: {
    elevation: 4,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,
  },
  elevation5: {
    elevation: 5,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  },
  elevation6: {
    elevation: 6,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.27,
    shadowRadius: 4.65,
  },
  elevation7: {
    elevation: 7,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.29,
    shadowRadius: 4.65,
  },
  elevation8: {
    elevation: 8,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.3,
    shadowRadius: 4.65,
  },
  elevation9: {
    elevation: 9,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.32,
    shadowRadius: 5.46,
  },
});