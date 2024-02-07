import { StyleSheet } from "react-native";

import { theme } from '../../theme';

export const styles = StyleSheet.create({
  input: {
    height: 54,
    width: 270,
    backgroundColor: theme.COLORS.GRAY_500,
    borderRadius: 10,
    paddingLeft: 20,
    paddingRight: 20,
    color: theme.COLORS.GRAY_100,
    fontFamily: theme.FONT_FAMILY.REGULAR,
    fontSize: theme.FONT_SIZE.LG,
  },
});
