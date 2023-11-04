import React, { useState } from 'react';
import { View, Text, TextInput, Button, Image, StyleSheet, Switch } from 'react-native';

const ProfileScreen = () => {
  const [isEditing, setIsEditing] = useState(false);
  const [name, setName] = useState('John Doe');
  const [email, setEmail] = useState('johndoe@example.com');
  const [profilePicture, setProfilePicture] = useState(
    'https://example.com/default-profile.jpg'
  );
  const [newPassword, setNewPassword] = useState('');
  const [notificationsEnabled, setNotificationsEnabled] = useState(true);

  const saveProfile = () => {
    // Implement the logic to save the edited profile information to your server or storage.
    setIsEditing(false);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Profile</Text>
      <Image source={{ uri: profilePicture }} style={styles.profilePicture} />
      <Button title="Change Profile Picture" />
      <Text>Name</Text>
      <TextInput
        style={styles.input}
        value={name}
        onChangeText={(text) => setName(text)}
        editable={isEditing}
      />
      <Text>Email</Text>
      <TextInput
        style={styles.input}
        value={email}
        onChangeText={(text) => setEmail(text)}
        editable={isEditing}
      />
      {isEditing && (
        <View>
          <Text>New Password</Text>
          <TextInput
            style={styles.input}
            value={newPassword}
            onChangeText={(text) => setNewPassword(text)}
            secureTextEntry={true}
          />
        </View>
      )}
      <Text>Notifications</Text>
      <Switch
        value={notificationsEnabled}
        onValueChange={(value) => setNotificationsEnabled(value)}
      />
      {isEditing ? (
        <Button title="Save" onPress={saveProfile} />
      ) : (
        <Button title="Edit Profile" onPress={() => setIsEditing(true)} />
      )}
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
  profilePicture: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: 16,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 8,
    marginBottom: 16,
    borderRadius: 8,
  },
});

export default ProfileScreen;
