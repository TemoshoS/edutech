import React, { useState } from 'react';
import { View, Text, Button, StyleSheet, ScrollView, ImageBackground  } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const CourseDetailScreen = ({ route }) => {
  const navigation = useNavigation();
  const { course } = route.params;

  const instructor = "John Doe";
  const upcomingAssignments = ["Assignment 1", "Assignment 2"];

  const [isEnrolled, setIsEnrolled] = useState(false);

  const toggleEnrollment = () => {
    setIsEnrolled(!isEnrolled);
  };

  const navigateToMaterials = () => {
    navigation.navigate('CourseMaterials', { course });
  };

  return (
    <ImageBackground source={require('../assets/edu.jpg')} style={styles.backgroundImage}>
      <ScrollView contentContainerStyle={styles.container}>
        <Text style={styles.title}>{course.title}</Text>
        <Text style={styles.instructor}>Instructor: {instructor}</Text>
        <Text style={styles.description}>
          Schools are organized spaces purposed for teaching and learning. The classrooms where teachers teach and students learn are of central importance. 
        </Text>
        <Text style={styles.subtitle}>Upcoming Assignments:</Text>
        <View>
          {upcomingAssignments.map((assignment, index) => (
            <Text key={index} style={styles.assignment}>{assignment}</Text>
          ))}
        </View>
        <Text style={styles.status}>
          Enrollment Status: {isEnrolled ? 'Enrolled' : 'Not Enrolled'}
        </Text>
        <View style={styles.buttonsContainer}>
          <Button
            title={isEnrolled ? 'Drop Course' : 'Enroll in Course'}
            onPress={toggleEnrollment}
            color={isEnrolled ? 'red' : 'green'} 
          />
          <Button
            title="Study Materials"
            onPress={navigateToMaterials}
          />
        </View>
      </ScrollView>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover',
  },
  container: {
    flexGrow: 1,
    padding: 16,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 16,
    color: 'white', // Updated title color
  },
  instructor: {
    fontSize: 18,
    marginBottom: 12,
    color: 'lightgray', // Updated instructor info color
  },
  description: {
    fontSize: 16,
    marginBottom: 20,
    color: 'lightgray', // Updated description text color
  },
  subtitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 20,
    color: 'white', // Updated subtitle color
  },
  assignment: {
    fontSize: 16,
    marginBottom: 12,
    color: 'lightgray', // Updated assignment text color
  },
  status: {
    fontSize: 18,
    marginTop: 20,
    color: 'green',
  },
  buttonsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 20,
  },
});

export default CourseDetailScreen;
