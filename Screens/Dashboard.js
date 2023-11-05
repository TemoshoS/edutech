import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

import { WebView } from 'react-native-webview';

const Dashboard = () => {
  const powerBIReportURL = 'https://app.powerbi.com/links/9f5ErFGstn?ctid=3df74539-9453-4d03-bb9d-b9102cb9ce9c&pbi_source=linkShare';

  return (
    <View style={styles.container}>
      <WebView source={{ uri: powerBIReportURL }} style={styles.webview} />
    </View>
  );
};

export default Dashboard;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  webview: {
    marginTop: 20,
  },
});

