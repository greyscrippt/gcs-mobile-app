import { StyleSheet } from 'react-native';

const appLightTheme = StyleSheet.create({
  primary:      { backgroundColor: 0xBBBBBB },
  secondary:    { backgroundColor: 0xAAAAAA },

  background:   { backgroundColor: 0x000000 },
  header:       { backgroundColor: 0x111111 },

  tabInactive:  { backgroundColor: 0x222222 },
  tabActive:    { backgroundColor: 0x333333 },
});

const appStyles = StyleSheet.create({
    container: {
      flex: 1,
    },
    map: {
      width: '100%',
      height: '100%',
    },
    resultItemSeparator: {
      margin: 5,
    },
    resultView: {
      padding: 5,
    },
    textSpecView: {
      display: 'flex',
      flexDirection: 'row',
    }
  });

export { appStyles };