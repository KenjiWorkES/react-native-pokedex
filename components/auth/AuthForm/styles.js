import { StyleSheet } from 'react-native';
import { theme } from '../../../themes/theme';

export const styles = StyleSheet.create({
  form: {
    alignItems: 'center',
    marginHorizontal: 30,
    paddingHorizontal: 16,
    paddingVertical: 16,
    borderRadius: 15,
    elevation: 2,
    shadowColor: theme.colors.darkGray,
    shadowOffset: { width: 1, height: 1 },
    shadowOpacity: 0.75,
    shadowRadius: 15,
    backgroundColor: 'white',
  },
  title: {
    fontFamily: theme.fonts.bold,
    fontSize: 30,
    textAlign: 'center',
    color: theme.colors.darkGray,
  },
  inputControl: {
    marginBottom: 20,
    width: '100%',
  },
  label: {
    fontSize: 14,
    fontFamily: theme.fonts.medium,
    color: theme.colors.darkGray,
    marginBottom: 8,
  },
  input: {
    width: '100%',
    backgroundColor: theme.colors.lightGray,
    borderRadius: 18,
    paddingHorizontal: 16,
    paddingVertical: 4,
    fontFamily: theme.fonts.medium,
    fontSize: 16,
    color: theme.colors.darkGray,
  },
  link: {
    color: theme.colors.lightRed,
    marginTop: 15,
    fontFamily: theme.fonts.medium,
  },
});
