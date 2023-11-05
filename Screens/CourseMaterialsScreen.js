import React, { useState } from 'react';
import { View, Text, ScrollView, StyleSheet, TouchableOpacity, Button, Image, Video,ImageBackground   } from 'react-native';
import { RadioButton } from 'react-native-paper';
import maths from '../assets/maths.jpg';
import science from '../assets/science.mp4';
import study from '../assets/study.mp4';

const CourseMaterialsScreen = ({ route }) => {
    const { course } = route.params;

    // Sample course materials
    const materials = [
        { id: 1, type: 'Lecture Notes', title: 'Introduction to algebra', url: maths },
        { id: 2, type: 'Maths Video', title: 'Mathematics', url: science },
        { id: 3, type: 'Science Video', title: 'Life science', url: study },
    ];

    // Sample quiz questions and answers
    const quizQuestions = [
        {
            id: 1,
            question: 'What is React Native?',
            options: ['A framework for building Android apps', 'A framework for building web apps', 'A framework for building cross-platform mobile apps'],
            correctAnswer: 2,
            selectedAnswer: -1,
        },
        {
            id: 2,
            question: 'What is JSX?',
            options: ['A JavaScript extension language', 'A file format for videos', 'A database management system'],
            correctAnswer: 0,
            selectedAnswer: -1,
        },
    ];

    const handleSelectAnswer = (questionIndex, answerIndex) => {
        // Create a copy of the quiz questions array
        const updatedQuizQuestions = [...quizQuestions];
        // Update the selected answer for the given question
        updatedQuizQuestions[questionIndex].selectedAnswer = answerIndex;
        // Set the state with the updated questions
        setQuizQuestions(updatedQuizQuestions);
    };

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
        <ImageBackground source={require('../assets/edu.jpg')} style={styles.backgroundImage}>
        <ScrollView style={styles.container}>
            <Text style={styles.title}>{course.title} Materials</Text>
            {materials.map((material) => (
                <View key={material.id} style={styles.materialItem}>
                    <Text style={styles.materialType}>{material.type}</Text>
                    <Text style={styles.materialTitle}>{material.title}</Text>
                    {material.type === 'Lecture Notes' ? (
                        <Image source={material.url} style={styles.image} />
                    ) : (
                        <View style={styles.videoButtons}>
                            <Button title="Play Video" onPress={() => handlePlayVideo(material.url)} />
                            <Button
                                title={downloadedMaterials.includes(material.id) ? 'Remove Download' : 'Download'}
                                onPress={() => toggleDownload(material)}
                            />
                        </View>
                    )}
                </View>
            ))}

            {/* Button to show the quiz */}
            <TouchableOpacity style={styles.showQuizButton} onPress={handleShowQuiz}>
                <Text style={styles.showQuizButtonText}>Show Quiz</Text>
            </TouchableOpacity>

             {showQuiz && (
            <View style={styles.quizContainer}>
                <Text style={styles.quizTitle}>Quiz Questions</Text>
                {quizQuestions.map((question, questionIndex) => (
                    <View key={question.id} style={styles.questionContainer}>
                        <Text style={styles.questionText}>{question.question}</Text>
                        {question.options.map((option, answerIndex) => (
                            <View key={answerIndex} style={styles.optionContainer}>
                                <RadioButton.Android
                                    value={answerIndex}
                                    status={question.selectedAnswer === answerIndex ? 'checked' : 'unchecked'}
                                    onPress={() => handleSelectAnswer(questionIndex, answerIndex)}
                                />
                                <Text style={styles.optionText}>{option}</Text>
                            </View>
                        ))}
                    </View>
                ))}
                <TouchableOpacity style={styles.submitButton} onPress={handleQuizSubmit}>
                    <Text style={styles.submitButtonText}>Submit Quiz</Text>
                </TouchableOpacity>
            </View>
            )}
        </ScrollView>
        </ImageBackground>
    );
};

// Add this function to handle video playback
const handlePlayVideo = (url) => {
    // Implement video playback logic here
};

const styles = StyleSheet.create({
    backgroundImage: {
        flex: 1,
        resizeMode: 'cover',
      },
    container: {
        
        padding: 16,
        
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 16,
        textAlign: 'center',
        color: 'white'
    },
    materialItem: {
        borderWidth: 1,
        borderColor: '#D0D0D0',
        padding: 16,
        marginBottom: 16,
        borderRadius: 8,
        backgroundColor: 'rgba(255, 255, 255, 0.8)',
    },
    materialType: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 8,
        color: 'blue',
    },
    materialTitle: {
        fontSize: 16,
        marginBottom: 8,
    },
    image: {
        width: '100%',
        height: 200, 
    },
    downloadButton: {
        backgroundColor: 'green',
        padding: 10,
        borderRadius: 5,
        alignItems: 'center',
    },
    downloadButtonText: {
        color: 'white',
    },
    showQuizButton: {
        backgroundColor: 'blue',
        padding: 12,
        borderRadius: 5,
        alignItems: 'center',
        alignSelf: 'center',
        marginTop: 16,
    },
    showQuizButtonText: {
        color: 'white',
    },
    quizContainer: {
        borderWidth: 1,
        borderColor: '#D0D0D0',
        padding: 16,
        marginBottom: 16,
        borderRadius: 8,
        backgroundColor: 'rgba(255, 255, 255, 0.8)',
    },
    quizTitle: {
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 16,
        textAlign: 'center',
    },
    questionContainer: {
        marginBottom: 16,
    },
    questionText: {
        fontSize: 16,
        marginBottom: 8,
    },
    optionContainer: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    radioButton: {
        marginRight: 8,
    },
    optionText: {
        fontSize: 16,
    },
    submitButton: {
        backgroundColor: 'blue',
        padding: 12,
        borderRadius: 5,
        alignItems: 'center',
        alignSelf: 'center',
        marginTop: 16,
    },
    submitButtonText: {
        color: 'white',
    },
    videoButtons: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 8,
    },
});

export default CourseMaterialsScreen;
