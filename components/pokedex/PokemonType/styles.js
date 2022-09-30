import { StyleSheet } from 'react-native';
import { theme } from '../../../themes/theme';

export const styles = StyleSheet.create({
  type: {
    borderRadius: 38,
    paddingVertical: 2,
    paddingHorizontal: 6,
    marginBottom: 6,
  },
  typeText: {
    color: theme.colors.white,
    fontFamily: theme.fonts.medium,
    textTransform: 'capitalize',
    fontSize: 12,
    textAlign: 'center',
  },
});
