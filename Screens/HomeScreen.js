import React from 'react';
import { StyleSheet, Text, View, FlatList, TouchableOpacity, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const HomeScreen = () => {                                                                                                                                                                
  const navigation = useNavigation();

  const courses = [
    { id: '1', title: 'Mathes', imageUrl: 'https://example.com/course1.jpg' },
    { id: '2', title: 'Physical Sciences', imageUrl: 'https://example.com/course2.jpg' },
    { id: '3', title: 'English', imageUrl: 'https://example.com/course3.jpg' },
    // Add more courses as needed
  ];

  const handleCourseNavigation = (courseId) => {
    navigation.navigate('Course', { id: courseId });
  };

  const handleCourse= () => {
    navigation.navigate('CourseList');
  };

  const handleChatbot = () => {
    navigation.navigate('Chats'); 
  };
  


  return (
    <View style={styles.container}>
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
      <TouchableOpacity onPress={handleCourse}>
        <Text>Courses</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={handleChatbot}>
        <Text>let chat</Text>
      </TouchableOpacity>
      </View>
    </View>

  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#fff',
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
    borderRadius: 4,
  },
  courseTitle: {
    fontSize: 18,
  },
  courseImage: {
    width: '100%',
    height: 200,
    marginBottom: 16,
  },
  chatbot:{
    flexDirection: 'row',
    justifyContent: 'space-between',
  }
});

export default HomeScreen;