import { StyleSheet } from "react-native";

import { theme } from '../../theme';

export const styles = StyleSheet.create({
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    width: 52,
    height: 52,
    backgroundColor: theme.COLORS.BLUE_DARK,
    borderRadius: 8,
  }
});
