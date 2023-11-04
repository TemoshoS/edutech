import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function TeacherMainScreen() {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome, Teacher!</Text>

      <Button
        title="View My Classes"
        onPress={() => navigation.navigate('TeacherClasses')}
      />

      <Button
        title="Create New Class"
        onPress={() => navigation.navigate('CreateClass')}
      />

      <Button
        title="View My Profile"
        onPress={() => navigation.navigate('TeacherProfile')}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
  },
});