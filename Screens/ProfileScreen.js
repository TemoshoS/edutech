import React, { useState } from 'react';
import { View, Text, TextInput, Button, Image, StyleSheet, Switch, TouchableOpacity, ImageBackground } from 'react-native';
import user from '../assets/user.jpg';
import backgroundImg from '../assets/edu.jpg';

const ProfileScreen = () => {
  const [isEditing, setIsEditing] = useState(false);
  const [name, setName] = useState('John Doe');
  const [email, setEmail] = useState('johndoe@example.com');
  const [profilePicture, setProfilePicture] = useState(user);
  const [newPassword, setNewPassword] = useState('');
  const [notificationsEnabled, setNotificationsEnabled] = useState(true);

  const saveProfile = () => {
    // Implement the logic to save the edited profile information to your server or storage.
    setIsEditing(false);
  };

  return (
    <ImageBackground source={backgroundImg} style={styles.backgroundImage}>
      <View style={styles.container}>
        <View style={styles.profileHeader}> {/* Profile header container */}
          <Text style={styles.title}>Profile</Text>
        </View>
        <View style={styles.profilePictureContainer}> {/* Centering container */}
          <Image source={{ uri: profilePicture }} style={styles.profilePicture} />
        </View>
        <TouchableOpacity
          style={styles.changePictureButton}
          onPress={() => alert('Change Profile Picture')}
        >
          <Text style={styles.buttonText}>Change Profile Picture</Text>
        </TouchableOpacity>
        <Text style={styles.label}>Name</Text>
        <TextInput
          style={styles.input}
          value={name}
          onChangeText={(text) => setName(text)}
          editable={isEditing}
        />
        <Text style={styles.label}>Email</Text>
        <TextInput
          style={styles.input}
          value={email}
          onChangeText={(text) => setEmail(text)}
          editable={isEditing}
        />
        {isEditing && (
          <View>
            <Text style={styles.label}>New Password</Text>
            <TextInput
              style={styles.input}
              value={newPassword}
              onChangeText={(text) => setNewPassword(text)}
              secureTextEntry={true}
            />
          </View>
        )}
        
        {isEditing ? (
          <TouchableOpacity
            style={styles.saveButton}
            onPress={saveProfile}
          >
            <Text style={styles.buttonText}>Save</Text>
          </TouchableOpacity>
        ) : (
          <TouchableOpacity
            style={styles.editButton}
            onPress={() => setIsEditing(true)}
          >
            <Text style={styles.buttonText}>Edit Profile</Text>
          </TouchableOpacity>
        )}
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
  profileHeader: {
    alignItems: 'center', // Center content horizontally
    marginBottom: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'white',
  },
  label: {
    color: 'white',
  },
  profilePictureContainer: {
    alignItems: 'center', // Center content horizontally
    marginBottom: 16,
  },
  profilePicture: {
    width: 100,
    height: 100,
    borderRadius: 50,
  },
  changePictureButton: {
    backgroundColor: '#007bff',
    padding: 10,
    alignItems: 'center',
    borderRadius: 8,
    marginBottom: 16,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 8,
    marginBottom: 16,
    borderRadius: 8,
    color: 'white',
  },
  saveButton: {
    backgroundColor: '#007bff',
    padding: 10,
    alignItems: 'center',
    borderRadius: 8,
  },
  editButton: {
    backgroundColor: '#007bff',
    padding: 10,
    alignItems: 'center',
    borderRadius: 8,
  },
});

export default ProfileScreen;
