/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from "react";

/* $FlowFixMe[missing-local-annot] The type annotation(s) required by Flow's
 * LTI update could not be added via codemod */
import { WebView } from "react-native-webview";
import { StyleSheet, ActivityIndicator, View , Image} from "react-native";

const App = () => {
  const Spinner = () => (
    <View style={styles.activityContainer}>
      <Image source={require('./images/geploading.gif')}  style={{ width: '100%',height:'50%' }} />
    </View>
  );
  return (
    <>
      <WebView
       startInLoadingState={true}
       renderLoading={Spinner}
       style={styles.container}
       cacheEnabled={false}

      source={{ uri: "https://dev.myhealthmonk.com/" }} />
    </>
  );
};

export default App;

export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  activityContainer: {
    alignItems: "center",
    justifyContent: "center",
    position: "absolute",
    top: 0,
    left: 0,
    backgroundColor: "black",
    height: "100%",
    width: "100%",
  },
});
