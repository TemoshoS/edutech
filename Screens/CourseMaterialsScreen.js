import React, { useState } from 'react';
import { View, Text, Button, ScrollView, StyleSheet } from 'react-native';
import { RadioButton } from 'react-native-paper';



const CourseMaterialsScreen = ({ route }) => {
    const { course } = route.params;

    // Sample course materials

    const materials = [
        { id: 1, type: 'Lecture Notes', title: 'Introduction to React Native', url: 'https://example.com/lecture1.pdf' },
        { id: 2, type: 'Video', title: 'React Native Basics', url: 'https://example.com/video1.mp4' },
        { id: 3, type: 'Video', title: 'React Native Basics', url: 'https://example.com/video1.mp4' },
        { id: 4, type: 'Video', title: 'React Native Basics', url: 'https://example.com/video1.mp4' },
        { id: 5, type: 'Video', title: 'React Native Basics', url: 'https://example.com/video1.mp4' },
        // Add more materials
    ];

    // Sample quiz questions and answers
    const quizQuestions = [
        {
            id: 1,
            question: 'What is React Native?',
            options: ['A framework for building Android apps', 'A framework for building web apps', 'A framework for building cross-platform mobile apps'],
            correctAnswer: 2,
        },
        {
            id: 2,
            question: 'What is JSX?',
            options: ['A JavaScript extension language', 'A file format for videos', 'A database management system'],
            correctAnswer: 0,
        },
        // Add more quiz questions
    ];

    // State to track downloaded materials
    const [downloadedMaterials, setDownloadedMaterials] = useState([]);
    const [showQuiz, setShowQuiz] = useState(false); // To control quiz visibility

    // Function to toggle material download status
    const toggleDownload = (material) => {
        if (downloadedMaterials.includes(material.id)) {
            setDownloadedMaterials(downloadedMaterials.filter(id => id !== material.id));
        } else {
            setDownloadedMaterials([...downloadedMaterials, material.id]);
        }
    };

    // Function to show the quiz
    const handleShowQuiz = () => {
        setShowQuiz(true);
    };

    // Function to handle submitting quiz answers (you can implement this)
    const handleQuizSubmit = () => {
        // Implement your quiz submission logic here
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

            {/* Button to show the quiz */}
            <Button title="Show Quiz" onPress={handleShowQuiz} />

            {showQuiz && (
                // Render quiz questions and answers
                <View style={styles.quizContainer}>
                    <Text style={styles.quizTitle}>Quiz Questions</Text>
                    {quizQuestions.map((question) => (
                        <View key={question.id} style={styles.questionContainer}>
                            <Text style={styles.questionText}>{question.question}</Text>
                            {question.options.map((option, index) => (
                                <View key={index} style={styles.optionContainer}>
                                    <RadioButton value={index} />
                                    <Text style={styles.optionText}>{option}</Text>
                                </View>
                            ))}
                        </View>
                    ))}
                    <Button title="Submit Quiz" onPress={handleQuizSubmit} />
                </View>
            )}
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    // Existing styles
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
    // New styles for quiz section
    quizContainer: {
        borderWidth: 1,
        borderColor: '#ccc',
        padding: 16,
        marginBottom: 16,
        borderRadius: 8,
    },
    quizTitle: {
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 16,
    },
    quizItem: {
        marginBottom: 16,
    },
    quizQuestion: {
        fontSize: 16,
        marginBottom: 8,
    },
});

export default CourseMaterialsScreen;
