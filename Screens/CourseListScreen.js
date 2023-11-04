import React from 'react';
import { View, Text, FlatList, TouchableOpacity, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';

// Sample array of courses (you'd fetch this from your data source)
const courses = [
  { id: 1, title: 'Course 1' },
  { id: 2, title: 'Course 2' },
  { id: 3, title: 'Course 3' },
  // Add more course objects here
];

const CourseListScreen = () => {
  const navigation = useNavigation();

  // Function to navigate to the individual course screen when a course is selected
  const navigateToCourse = (course) => {
    navigation.navigate('CouseDetails', { course }); // 'CourseDetail' is the name of the screen for the individual course detail.
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Available Courses</Text>
      <FlatList
        data={courses}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <TouchableOpacity onPress={() => navigateToCourse(item)}>
            <View style={styles.courseItem}>
              <Text>{item.title}</Text>
            </View>
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  courseItem: {
    padding: 16,
    borderWidth: 1,
    borderColor: '#ccc',
    marginVertical: 8,
    borderRadius: 8,
  },
});

export default CourseListScreen;
