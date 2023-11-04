import React, { useState } from 'react';
import { View, Text, Button, ScrollView, StyleSheet } from 'react-native';

const CourseMaterialsScreen = ({ route }) => {
  const { course } = route.params;

  // Sample course materials (you would fetch these from your data source)
  const materials = [
    { id: 1, type: 'Lecture Notes', title: 'Introduction to React Native', url: 'https://example.com/lecture1.pdf' },
    { id: 2, type: 'Video', title: 'React Native Basics', url: 'https://example.com/video1.mp4' },
    // Add more materials
  ];

  // State to track downloaded materials
  const [downloadedMaterials, setDownloadedMaterials] = useState([]);

  // Function to toggle material download status
  const toggleDownload = (material) => {
    if (downloadedMaterials.includes(material.id)) {
      setDownloadedMaterials(downloadedMaterials.filter(id => id !== material.id));
    } else {
      setDownloadedMaterials([...downloadedMaterials, material.id]);
    }
  };

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>{course.title} Materials</Text>
      {materials.map((material) => (
        <View key={material.id} style={styles.materialItem}>
          <Text style={styles.materialType}>{material.type}</Text>
          <Text style={styles.materialTitle}>{material.title}</Text>
          {material.type === 'Video' ? (
            // Add video player component for video materials
            <Button title="Play Video" onPress={() => handleVideoPlayer(material.url)} />
          ) : (
            // Add a download button for other material types
            <Button
              title={downloadedMaterials.includes(material.id) ? 'Remove Download' : 'Download'}
              onPress={() => toggleDownload(material)}
            />
          )}
        </View>
      ))}
    </ScrollView>
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
  materialItem: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 16,
    marginBottom: 16,
    borderRadius: 8,
  },
  materialType: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  materialTitle: {
    fontSize: 16,
    marginBottom: 8,
  },
});

export default CourseMaterialsScreen;
