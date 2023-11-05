import React, { useState, useEffect } from 'react';
import { View, Text, Button, FlatList } from 'react-native';

const studentData = [
  {
    id: 1,
    name: 'John',
    surname: 'Doe',
    age: 18,
    gender: 'Male',
    grade: '12th',
    marks: 95,
  },
  {
    id: 2,
    name: 'Jane',
    surname: 'Smith',
    age: 17,
    gender: 'Female',
    grade: '11th',
    marks: 79,
  },
  ,
  {
    id: 3,
    name: 'Talane',
    surname: 'Smith',
    age: 17,
    gender: 'Female',
    grade: '11th',
    marks: 88,
  },


];

const Dashboard = () => {
  return (
    <View>
      <Text style={{ fontSize: 24, fontWeight: 'bold' }}>Student Dashboard</Text>
      <FlatList
        data={studentData}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View style={{ marginBottom: 10 }}>
            <Text>Name: {item.name} {item.surname}</Text>
            <Text>Age: {item.age}</Text>
            <Text>Gender: {item.gender}</Text>
            <Text>Grade: {item.grade}</Text>
            <Text>Marks: {item.marks}</Text>
          </View>
        )}
      />
      <Button title="Log Out" onPress={() => alert('Logout clicked')} />
    </View>
  );
};

export default Dashboard;



// import { StyleSheet, Text, View } from 'react-native'
// import React from 'react'

// import { WebView } from 'react-native-webview';

// const Dashboard = () => {
//   const powerBIReportURL = 'https://app.powerbi.com/links/9f5ErFGstn?ctid=3df74539-9453-4d03-bb9d-b9102cb9ce9c&pbi_source=linkShare';

//   return (
//     <View style={styles.container}>
//       <WebView source={{ uri: powerBIReportURL }} style={styles.webview} />
//     </View>
//   );
// };

// export default Dashboard;

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//   },
//   webview: {
//     marginTop: 20,
//   },
// });

