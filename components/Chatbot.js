import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';

const Chatbot = () => {
  const [messages, setMessages] = useState([]);
  const [inputText, setInputText] = useState('');

  // Your GPT-3 API key
  const apiKey = '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';

  const handleSendMessage = async () => {
    if (inputText) {
      setMessages([...messages, { text: inputText, isUser: true }]);
      setInputText('');


try {
    const response = await fetch('https://api.openai.com/v1/engines/davinci/completions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${apiKey}`,
      },
      body: JSON.stringify({
        prompt: inputText,
        max_tokens: 50,
      }),
    });
  
    if (response.ok) {
      const data = await response.json();
      if (data && data.choices && data.choices.length > 0) {
        const botMessage = data.choices[0].text;
        setMessages([...messages, { text: botMessage, isUser: false }]);
      } else {
        console.error('Empty or invalid response from GPT-3 API');
      }
    } else {
      console.error('API request failed with status: ' + response.status);
    }
  } catch (error) {
    console.error('Error sending message to GPT-3:', error);
  }
    }}
  

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Chatbot</Text>
      <View style={styles.chatContainer}>
        {messages.map((message, index) => (
          <View
            key={index}
            style={[
              styles.message,
              message.isUser ? styles.userMessage : styles.botMessage,
            ]}
          > 
            <Text>{message.text}</Text>
          </View>
        ))}
      </View>
      <TextInput
        style={styles.input}
        placeholder="Type your message..."
        value={inputText}
        onChangeText={(text) => setInputText(text)}
      />
      <Button title="Send" onPress={handleSendMessage} />
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
  chatContainer: {
    flex: 1,
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 16,
    marginBottom: 16,
    borderRadius: 8,
  },
  message: {
    padding: 8,
    marginBottom: 8,
    borderRadius: 8,
  },
  userMessage: {
    alignSelf: 'flex-end',
    backgroundColor: '#007bff',
    color: 'white',
  },
  botMessage: {
    alignSelf: 'flex-start',
    backgroundColor: 'lightgray',
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 8,
    borderRadius: 8,
  },
});

export default Chatbot;
