import { StyleSheet } from 'react-native';

import { theme } from '../../theme';

export const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row',
    borderRadius: 8,
    gap: 10,
    width: 326,
    height: 64,
    paddingRight: 10,
    paddingLeft: 10,
    backgroundColor: theme.COLORS.GRAY_500,
    borderColor: theme.COLORS.GRAY_300
  },
  description: {
    display: 'flex',
    flexShrink: 0,
    width: 235,
    height: 40,
    color: theme.COLORS.GRAY_100,
    fontSize: theme.FONT_SIZE.MD,
    fontFamily: theme.FONT_FAMILY.REGULAR,
  },
  image: {
    width: 32,
    height: 32,
    margin: 8
  }
});
