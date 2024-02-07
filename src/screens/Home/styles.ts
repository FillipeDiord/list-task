import { StyleSheet } from "react-native";

import { theme } from "../../theme";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.COLORS.GRAY_600,
    height: 20,
    alignItems: "center",
  },
  containerHeader: {
    flex: 0.5,
    alignItems: "center",
  },
  header: {
    backgroundColor: theme.COLORS.GRAY_700,
    width: "100%",
    height: 174,
    alignItems: "center",
    justifyContent: "center",
    position: "absolute",
  },
  title: {
    color: theme.COLORS.PURPLE_DARK,
    fontSize: 40,
    fontFamily: theme.FONT_FAMILY.BOLD,
  },
  containerAddTask: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    gap: 4,
    position: "relative",
    top: 144,
    zIndex: 1,
  },
  containerTaskList: {
    flex: 1,
    marginBottom: 20,
    zIndex: 2,
  },
  containerInfoTask: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 20,
  },
  boxCreatedTask: {
    alignItems: "center",
    flexDirection: "row",
    gap: 8,
  },
  textCreatedTask: {
    color: theme.COLORS.BLUE,
    fontSize: theme.FONT_SIZE.MD,
    fontFamily: theme.FONT_FAMILY.BOLD,
  },
  boxNumberTask: {
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: theme.COLORS.GRAY_400,
    color: theme.COLORS.GRAY_200,
    width: 24,
    height: 18,
    borderRadius: 12,
  },
  infoCreatedTask: {
    color: theme.COLORS.GRAY_200,
  },
  boxDoneTask: {
    alignItems: "center",
    flexDirection: "row",
    gap: 8,
  },
  textDoneTask: {
    color: theme.COLORS.PURPLE,
    fontSize: theme.FONT_SIZE.MD,
    fontFamily: theme.FONT_FAMILY.BOLD,
  },
  boxNumberDoneTask: {
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: theme.COLORS.GRAY_400,
    color: theme.COLORS.GRAY_200,
    width: 24,
    height: 18,
    borderRadius: 12,
  },
  infoDoneTask: {
    color: theme.COLORS.GRAY_200,
  },
  containerEmptyTask: {
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 16,
    width: 326,
    height: 208,
  },
  lineEmptyTask: {
    height: 1,
    width: '100%',
    flexDirection: 'column',
    marginBottom: 48,
    backgroundColor: theme.COLORS.GRAY_300,
  },
  deleteTaskImage: {
    marginBottom: 16,
  },
  messageEmptyTask: {
    color: theme.COLORS.GRAY_300,
    fontFamily: theme.FONT_FAMILY.BOLD,
    textAlign: "center",
    marginBottom: 3,
  },
  messageTipTask: {
    color: theme.COLORS.GRAY_300,
    fontFamily: theme.FONT_FAMILY.REGULAR,
    textAlign: "center",
  },
});
