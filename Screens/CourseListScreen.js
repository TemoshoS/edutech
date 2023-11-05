import React from 'react';
import { View, Text, FlatList, TouchableOpacity, StyleSheet, ImageBackground } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Dimensions } from 'react-native';

const { width } = Dimensions.get('window');
const numColumns = Math.floor(width / 150);
const fontSize = width > 320 ? 18 : 16;
const vw = width / 100;

const courses = [
  { id: 1, title: 'Biology', color: '#FF5733' },
  { id: 2, title: 'Chemistry', color: '#33FF57' },
  { id: 3, title: 'Physics', color: '#5733FF' },
  { id: 4, title: 'History', color: '#FF5733' },
  { id: 5, title: 'Literature', color: '#33FF57' },
  // Add more course objects here
];

// Sort the courses array by title in ascending order
courses.sort((a, b) => a.title.localeCompare(b.title));

const CourseListScreen = () => {
  const navigation = useNavigation();

  const navigateToCourse = (course) => {
    navigation.navigate('CourseDetails', { course });
  };

  return (
    <ImageBackground source={require('../assets/edu.jpg')} style={styles.container}>
      <Text style={styles.title}>Available Subjects</Text>
      <FlatList
        data={courses}
        keyExtractor={(item) => item.id.toString()}
        numColumns={numColumns}
        renderItem={({ item }) => (
          <TouchableOpacity onPress={() => navigateToCourse(item)}>
            <View style={[styles.courseItem, { backgroundColor: item.color }]}>
              <Text style={styles.courseTitle}>{item.title}</Text>
            </View>
          </TouchableOpacity>
        )}
      />
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: '5%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 2 * vw,
    fontWeight: 'bold',
    color: 'white',
    marginBottom: 20,
  },
  courseItem: {
    padding: '3%',
    borderWidth: 1,
    borderColor: '#ccc',
    marginVertical: '2%',
    borderRadius: 8,
    width: '45%',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(255, 255, 255, 0.6)',
  },
  courseTitle: {
    fontSize: fontSize,
    fontWeight: 'bold',
    color: 'white',
  },
});

export default CourseListScreen;
