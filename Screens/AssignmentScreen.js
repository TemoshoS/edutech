import React, { useState } from 'react';
import { View, Text, Button, TouchableOpacity, Modal, TextInput, ScrollView, StyleSheet } from 'react-native';

const AssignmentScreen = ({ route }) => {
  const { course } = route.params;

  // Sample assignments (you would fetch these from your data source)
  const assignments = [
    { id: 1, title: 'Assignment 1', description: 'Complete the React Native assignment.', dueDate: '2023-11-30' },
    { id: 2, title: 'Assignment 2', description: 'Write a report on JavaScript best practices.', dueDate: '2023-12-10' },
    // Add more assignments
  ];

  // State to track the selected assignment and submission status
  const [selectedAssignment, setSelectedAssignment] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  // State for file upload
  const [fileUpload, setFileUpload] = useState(null);

  // Function to select an assignment
  const selectAssignment = (assignment) => {
    setSelectedAssignment(assignment);
  };

  // Function to submit the selected assignment
  const submitAssignment = () => {
    // Implement the assignment submission logic here, including file upload.
    // You can use libraries like 'react-native-document-picker' for file uploads.
    setIsSubmitting(true);
    // After submission, you can update the submission status.
    setTimeout(() => {
      setIsSubmitting(false);
      setSelectedAssignment(null);
    }, 3000); // Simulating a submission process.
  };

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>{course.title} Assignments</Text>
      {assignments.map((assignment) => (
        <TouchableOpacity
          key={assignment.id}
          style={styles.assignmentItem}
          onPress={() => selectAssignment(assignment)}
        >
          <Text style={styles.assignmentTitle}>{assignment.title}</Text>
          <Text>Due Date: {assignment.dueDate}</Text>
        </TouchableOpacity>
      ))}
      <Modal
        visible={selectedAssignment !== null}
        animationType="slide"
      >
        <View style={styles.modalContainer}>
          <Text style={styles.modalTitle}>Assignment Details</Text>
          <Text>Title: {selectedAssignment?.title}</Text>
          <Text>Description: {selectedAssignment?.description}</Text>
          <Text>Due Date: {selectedAssignment?.dueDate}</Text>
          <TextInput
            placeholder="Your submission comments"
            multiline
            style={styles.commentsInput}
          />
          <Button title="Choose File" onPress={() => handleFileUpload()} />
          {fileUpload && <Text>Selected File: {fileUpload.name}</Text>}
          <Button
            title={isSubmitting ? "Submitting..." : "Submit Assignment"}
            onPress={() => submitAssignment()}
            disabled={isSubmitting}
          />
          <Button
            title="Close"
            onPress={() => setSelectedAssignment(null)}
          />
        </View>
      </Modal>
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
  assignmentItem: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 16,
    marginBottom: 16,
    borderRadius: 8,
  },
  assignmentTitle: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  modalContainer: {
    flex: 1,
    padding: 16,
    justifyContent: 'center',
  },
  modalTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  commentsInput: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 8,
    marginBottom: 16,
  },
});

export default AssignmentScreen;
