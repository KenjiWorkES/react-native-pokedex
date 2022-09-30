import { StyleSheet } from 'react-native';
import { theme } from '../../../themes/theme';

export const styles = StyleSheet.create({
  item: {
    width: 155,
    maxHeight: 125,
    paddingLeft: 16,
    paddingTop: 10,
    borderRadius: 15,
    marginBottom: 10,
  },
  numberContainer: {
    alignItems: 'flex-end',
  },
  number: {
    color: theme.colors.darkGray,
    fontFamily: theme.fonts.bold,
    opacity: 0.25,
    paddingRight: 8,
  },
  title: {
    color: theme.colors.white,
    fontFamily: theme.fonts.bold,
    textTransform: 'capitalize',
  },
  content: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  typeContainer: {
    marginTop: 10,
  },
  imageContainer: {
    alignItems: 'flex-end',
    paddingRight: 8,
    paddingBottom: 10,
  },
  image: {
    width: 70,
    height: 75,
  },
});
