import React, { useState } from 'react';
import { View, Text, Switch, StyleSheet, TouchableOpacity } from 'react-native';

const SettingsScreen = ({ navigation }) => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [language, setLanguage] = useState('English');
  const [pushNotificationsEnabled, setPushNotificationsEnabled] = useState(true);

  const handleLogOut = () => {
    // Perform the log-out action here (clear authentication data, etc.).
    // Then, navigate back to the login screen.
    navigation.navigate('Login');
  };

  const containerStyle = {
    ...styles.container,
    backgroundColor: isDarkMode ? 'gray' : 'white', // Change background color based on dark mode
  };

  return (
    <View style={containerStyle}>
      <Text style={styles.title}>Settings</Text>
      <Text style={styles.subtitle}>Theme</Text>
      <View style={styles.settingItem}>
        <Text>Dark Mode</Text>
        <Switch
          value={isDarkMode}
          onValueChange={(value) => setIsDarkMode(value)}
        />
      </View>
      <Text style={styles.subtitle}>Language</Text>
      <View style={styles.settingItem}>
        <Text>Language Preference</Text>
        <Text>{language}</Text>
      </View>
      <Text style={styles.subtitle}>Notifications</Text>
      <View style={styles.settingItem}>
        <Text>Push Notifications</Text>
        <Switch
          value={pushNotificationsEnabled}
          onValueChange={(value) => setPushNotificationsEnabled(value)}
        />
      </View>
      
      <TouchableOpacity onPress={handleLogOut}>
        <Text>Log out</Text>
      </TouchableOpacity>
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
  subtitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 16,
  },
  settingItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 16,
  },
});

export default SettingsScreen;
