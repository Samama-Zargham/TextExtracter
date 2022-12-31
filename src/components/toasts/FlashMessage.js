import { showMessage, hideMessage } from 'react-native-flash-message';
import { COLORS, fontFamily } from '../../Utils/AppStyles';

export const FlashMessage = (message, color) => {
  showMessage({
    message: message,
    icon: 'auto',
    backgroundColor: color, // background color
    titleStyle: {
      fontFamily: fontFamily[500],
      fontSize: 16,
      color: COLORS.WHITE,
    },
    style: {
      width: '100%',
    },
  });
};
