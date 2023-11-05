import React from 'react';
import { StyleSheet, Text, View, FlatList, TouchableOpacity, Image, ImageBackground } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import mathesImage from '../assets/maths.jpg';
import physicalSciencesImage from '../assets/physics.jpg';
import englishImage from '../assets/english.jpg';
import sepedi from '../assets/sepedi.jpg';
import backgroundImg from '../assets/edu.jpg';

const HomeScreen = () => {
  const navigation = useNavigation();

  const courses = [
    { id: '1', title: 'Mathematics', imageUrl: mathesImage },
    { id: '2', title: 'Physical Sciences', imageUrl: physicalSciencesImage },
    { id: '3', title: 'English', imageUrl: englishImage },
    { id: '4', title: 'Sepedi', imageUrl: sepedi },
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
    <ImageBackground source={backgroundImg} style={styles.backgroundImage}>
      <View style={styles.container}>
        <Text style={styles.header}>Welcome, John Doe</Text>
        <Text style={styles.subHeader}>Explore All Subjects</Text>
        <FlatList
          data={courses}
          keyExtractor={(item) => item.id}
          numColumns={2}
          renderItem={({ item }) => (
            <TouchableOpacity style={styles.courseItem} onPress={() => handleCourseNavigation(item.id)}>
              <Image source={{ uri: item.imageUrl }} style={styles.courseImage} />
              <Text style={styles.courseTitle}>{item.title}</Text>
            </TouchableOpacity>
          )}
        />
        <View style={styles.actions}>
          <TouchableOpacity style={styles.actionButton} onPress={handleCourse}>
            <Text style={styles.actionButtonText}>Study</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.actionButton} onPress={handleChatbot}>
            <Text style={styles.actionButtonText}>Let's Chat</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover',
  },
  container: {
    flex: 1,
    padding: 16,
  },
  header: {
    fontSize: 28,
    marginBottom: 16,
    fontWeight: 'bold',
    color: 'white', // Set the text color to white
  },
  subHeader: {
    fontSize: 20,
    marginBottom: 16,
    color: 'white', // Set the text color to white
  },
  courseItem: {
    flex: 1,
    margin: 8,
    padding: 16,
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 8,
    alignItems: 'center',
    backgroundColor: 'rgba(255, 255, 255, 0.8)',
  },
  courseTitle: {
    fontSize: 16,
    marginTop: 8,
    color: 'black', // Set the text color to black
  },
  courseImage: {
    width: '100%',
    height: 150,
    marginBottom: 8,
  },
  actions: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 16,
  },
  actionButton: {
    flex: 1,
    backgroundColor: 'black',
    padding: 12,
    margin: 8,
    alignItems: 'center',
    borderRadius: 8,
    borderBottomWidth: 1,
  },
  actionButtonText: {
    color: '#ccc',
    fontSize: 18,
  },
});

export default HomeScreen;
