import React, { useState } from 'react';
import { View, Text,ImageBackground, Switch, StyleSheet, TouchableOpacity, Modal, Button, Picker } from 'react-native';
import backgroundImg from '../assets/edu.jpg';

const SettingsScreen = ({ navigation }) => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [language, setLanguage] = useState('English');
  const [pushNotificationsEnabled, setPushNotificationsEnabled] = useState(true);
  const [isLogOutModalVisible, setLogOutModalVisible] = useState(false);

  const handleLogOut = () => {
    // Open the log-out confirmation modal
    setLogOutModalVisible(true);
  };

  const confirmLogOut = () => {
    // Perform the log-out action here (clear authentication data, etc.).
    // Then, navigate back to the login screen and close the modal.
    setLogOutModalVisible(false);
    navigation.navigate('Login');
  };

  const cancelLogOut = () => {
    // Close the log-out confirmation modal without logging out.
    setLogOutModalVisible(false);
  };

  const containerStyle = {
    ...styles.container,
    backgroundColor: isDarkMode ? '#202124' : 'white', // Dark mode and light mode backgrounds
  };

  return (
    <ImageBackground source={backgroundImg} style={styles.backgroundImage}>
    <View style={containerStyle}>
      <Text style={styles.title}>Settings</Text>
      <Text style={styles.sectionTitle}>Theme</Text>
      <View style={styles.settingItem}>
        <Text>Dark Mode</Text>
        <Switch
          value={isDarkMode}
          onValueChange={(value) => setIsDarkMode(value)}
          trackColor={{ false: '#767577', true: '#81b0ff' }}
          thumbColor={isDarkMode ? '#f5dd4b' : '#f4f3f4'}
        />
      </View>
      <Text style={styles.sectionTitle}>Language</Text>
      <View style={styles.settingItem}>
        <Text>Language Preference</Text>
        <Picker
          selectedValue={language}
          onValueChange={(value) => setLanguage(value)}
          style={styles.picker}
        >
          <Picker.Item label="English" value="English" />
          <Picker.Item label="Spanish" value="Spanish" />
          <Picker.Item label="French" value="French" />
        </Picker>
      </View>
      <Text style={styles.sectionTitle}>Notifications</Text>
      <View style={styles.settingItem}>
        <Text>Push Notifications</Text>
        <Switch
          value={pushNotificationsEnabled}
          onValueChange={(value) => setPushNotificationsEnabled(value)}
          trackColor={{ false: '#767577', true: '#81b0ff' }}
          thumbColor={pushNotificationsEnabled ? '#f5dd4b' : '#f4f3f4'}
        />
      </View>
      <TouchableOpacity onPress={handleLogOut} style={styles.logOutButton}>
        <Text style={styles.logOutText}>Log out</Text>
      </TouchableOpacity>

      {/* Log-out confirmation modal */}
      <Modal visible={isLogOutModalVisible} transparent animationType="slide">
        <View style={styles.modalContainer}>
          <Text style={styles.modalTitle}>Confirm Log Out</Text>
          <Text style={styles.modalText}>Are you sure you want to log out?</Text>
          <View style={styles.modalButtonsContainer}>
            <Button title="Log Out" onPress={confirmLogOut} color="red" />
            <Button title="Cancel" onPress={cancelLogOut} color="#007bff" />
          </View>
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
    flex:1
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 16,
    color: '#007bff', // Blue color for section titles
  },
  settingItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 16,
  },
  picker: {
    height: 40,
  },
  logOutButton: {
    backgroundColor: 'red',
    padding: 16,
    alignItems: 'center',
    borderRadius: 8,
    marginTop: 16,
  },
  logOutText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
  // Styles for the log-out confirmation modal
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  modalText: {
    fontSize: 18,
    marginBottom: 16,
  },
  modalButtonsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '60%',
  },
});

export default SettingsScreen;
