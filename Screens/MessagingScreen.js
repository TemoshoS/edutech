import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  TextInput,
  Button,
  FlatList,
  Modal,
  StyleSheet,
  ImageBackground,
} from 'react-native';
import user from '../assets/edu.jpg';

const MessagingScreen = () => {
  const [messages, setMessages] = useState([]); // To store message history
  const [newMessage, setNewMessage] = useState(''); // To compose a new message
  const [attachmentModalVisible, setAttachmentModalVisible] = useState(false); // To control the attachment modal
  const [attachments, setAttachments] = useState([]); // To store sent attachments
  const [selectedAttachment, setSelectedAttachment] = useState(null); // To display the selected attachment

  // Function to send a new text message
  const sendMessage = () => {
    if (newMessage.trim() !== '') {
      const message = {
        text: newMessage,
        sender: 'User',
        timestamp: new Date().toLocaleTimeString(),
      };
      setMessages([...messages, message]);
      setNewMessage('');
    }
  };

  // Function to send an attachment (mocked here)
  const sendAttachment = () => {
    // In a real app, you'd upload the attachment to your server and handle it accordingly.
    const attachment = {
      type: 'image',
      url: user,
    };
    setAttachments([...attachments, attachment]);
    setAttachmentModalVisible(false);
  };

  // Function to display an attachment in a modal
  const viewAttachment = (attachment) => {
    setSelectedAttachment(attachment);
    setAttachmentModalVisible(true);
  };

  useEffect(() => {
    // Simulate receiving messages from other users. In a real app, you'd use WebSocket or another real-time communication method.
    const receivedMessage = {
      text: 'Hello there!',
      sender: 'Teacher',
      timestamp: new Date().toLocaleTimeString(),
    };
    setTimeout(() => setMessages([...messages, receivedMessage]), 10000);
  }, [messages]);

  return (
    <ImageBackground source={user} style={styles.backgroundImage}>
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Messaging</Text>
      </View>
      <FlatList
        data={messages}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => (
          <View
            style={[
              styles.messageContainer,
              item.sender === 'User'
                ? styles.userMessageContainer
                : styles.senderMessageContainer,
            ]}
          >
            <Text>{item.sender}</Text>
            <Text>{item.timestamp}</Text>
            <Text>{item.text}</Text>
          </View>
        )}
      />
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.messageInput}
          placeholder="Type your message..."
          value={newMessage}
          onChangeText={(text) => setNewMessage(text)}
        />
        <Button title="Send" onPress={sendMessage} />
      </View>
      <Button
        title="Attach File"
        onPress={() => setAttachmentModalVisible(true)}
      />
      <Modal
        visible={attachmentModalVisible}
        animationType="slide"
        onRequestClose={() => setAttachmentModalVisible(false)}
      >
        <View style={styles.attachmentModalContainer}>
          {attachments.map((attachment, index) => (
            <Button
              key={index}
              title={`View Attachment ${index + 1}`}
              onPress={() => viewAttachment(attachment)}
            />
          ))}
          <Button
            title="Add Mocked Attachment (image)"
            onPress={sendAttachment}
          />
        </View>
      </Modal>
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
    backgroundColor: '#007bff',
    padding: 16,
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'white',
  },
  messageContainer: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 16,
    marginBottom: 16,
    borderRadius: 8,
  },
  userMessageContainer: {
    alignSelf: 'flex-end',
  },
  senderMessageContainer: {
    alignSelf: 'flex-start',
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  messageInput: {
    flex: 1,
    borderWidth: 1,
    borderColor: 'lightgray',
    padding: 8,
    borderRadius: 8,
    color: 'gray',
  },
  attachmentModalContainer: {
    flex: 1,
    padding: 16,
    justifyContent: 'center',
  },
});

export default MessagingScreen;
