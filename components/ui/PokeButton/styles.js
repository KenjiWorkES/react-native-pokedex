import { StyleSheet } from 'react-native';
import { theme } from '../../../themes/theme';

export const styles = StyleSheet.create({
  button: {
    backgroundColor: theme.colors.darkRed,
    maxWidth: 155,
    borderRadius: 10,
    overflow: 'hidden',
  },
  image: {},
  buttonInner: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    maxHeight: 50,
  },
  text: {
    color: 'white',
    fontFamily: theme.fonts.bold,
    paddingHorizontal: 10,
    fontSize: 16,
  },
});
