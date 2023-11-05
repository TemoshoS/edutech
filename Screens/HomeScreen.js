import React from 'react';
import { StyleSheet, Text, View, FlatList, TouchableOpacity, Image, ImageBackground } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import mathesImage from '../assets/maths.jpg';
import physicalSciencesImage from '../assets/physics.jpg';
import englishImage from '../assets/english.jpg';

const HomeScreen = () => {
  const navigation = useNavigation();

  const courses = [
    { id: '1', title: 'Mathes', imageUrl: mathesImage },
    { id: '2', title: 'Physical Sciences', imageUrl: physicalSciencesImage },
    { id: '3', title: 'English', imageUrl: englishImage },
    // Add more courses as needed
  ];

  const handleCourseNavigation = (course) => {
    navigation.navigate('CourseDetails', { course });
  };

  const handleCourse = () => {
    navigation.navigate('CourseList');
  };

  const handleChatbot = () => {
    navigation.navigate('Chats');
  };

  return (
    <ImageBackground source={require('../assets/light_gray_background.jpg')} style={styles.container}>
      <Text style={styles.header}>Hi, user</Text>
      <Text style={styles.subHeader}>All subjects</Text>
      <FlatList
        data={courses}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity style={styles.courseItem} onPress={() => handleCourseNavigation(item.id)}>
            <Image source={{ uri: item.imageUrl }} style={styles.courseImage} />
            <Text style={styles.courseTitle}>{item.title}</Text>
          </TouchableOpacity>
        )}
      />
      <View style={styles.chatbot}>
        <TouchableOpacity style={styles.button} onPress={handleCourse}>
          <Text style={styles.buttonText}>Courses</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={handleChatbot}>
          <Text style={styles.buttonText}>Let's Chat</Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#f2f2f2', // Light grey background
  },
  header: {
    fontSize: 24,
    marginBottom: 16,
  },
  subHeader: {
    fontSize: 20,
    marginBottom: 16,
  },
  courseItem: {
    padding: 16,
    marginBottom: 16,
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 8,
    backgroundColor: 'white',
    shadowColor: 'black',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 2,
  },
  courseTitle: {
    fontSize: 18,
    marginTop: 8,
    textAlign: 'center',
  },
  courseImage: {
    width: '100%',
    height: 200,
    marginBottom: 16,
  },
  chatbot: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  button: {
    backgroundColor: '#007BFF',
    padding: 12,
    borderRadius: 8,
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
  },
});

export default HomeScreen;
