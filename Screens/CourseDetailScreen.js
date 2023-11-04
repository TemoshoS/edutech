import React, { useState } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const CourseDetailScreen = ({ route }) => {
  const navigation = useNavigation();
  const { course } = route.params;

  // Mocked instructor and assignment information
  const instructor = "John Doe";
  const upcomingAssignments = ["Assignment 1", "Assignment 2"];

  // State to track course enrollment status
  const [isEnrolled, setIsEnrolled] = useState(false);

  // Function to toggle course enrollment status
  const toggleEnrollment = () => {
    setIsEnrolled(!isEnrolled);
  };

  // Function to navigate to the course materials screen
  const navigateToMaterials = () => {
    navigation.navigate('CourseMaterials', { course }); // 'CourseMaterials' is the name of the screen for course materials.
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{course.title}</Text>
      <Text style={styles.instructor}>Instructor: {instructor}</Text>
      <Text style={styles.subtitle}>Upcoming Assignments:</Text>
      <View>
        {upcomingAssignments.map((assignment, index) => (
          <Text key={index} style={styles.assignment}>{assignment}</Text>
        ))}
      </View>
      <Button
        title={isEnrolled ? 'Drop Course' : 'Enroll in Course'}
        onPress={toggleEnrollment}
      />
      <Button
        title="Course Materials"
        onPress={navigateToMaterials}
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
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  instructor: {
    fontSize: 16,
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginTop: 16,
  },
  assignment: {
    fontSize: 14,
    marginBottom: 8,
  },
});

export default CourseDetailScreen;
