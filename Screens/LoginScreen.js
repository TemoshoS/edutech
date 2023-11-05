import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Button, ImageBackground } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/FontAwesome';
import backgroundImg from '../assets/edu.jpg';

const LoginScreen = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const navigation = useNavigation();

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleLogin = () => {
    navigation.navigate('HomeScreen');
  };

  const handleRegisterNavigation = () => {
    navigation.navigate('Register');
  };

  return (
    <ImageBackground source={backgroundImg} style={styles.backgroundImage}>
      <View style={styles.container}>
        <Icon name="user" size={100} color="#007BFF" />
        <TextInput
          style={styles.input}
          placeholder="Email"
          value={email}
          onChangeText={(text) => setEmail(text)}
          keyboardType="email-address"
        />
        <View style={styles.passwordInput}>
          <TextInput
            style={styles.input}
            placeholder="Password"
            value={password}
            onChangeText={(text) => setPassword(text)}
            secureTextEntry={!showPassword}
          />
          <TouchableOpacity style={styles.passwordVisibilityButton} onPress={togglePasswordVisibility}>
            <Icon name={showPassword ? 'eye' : 'eye-slash'} size={20} color="gray" />
          </TouchableOpacity>
        </View>
        <Button title="Login" onPress={handleLogin} color="#007BFF" />

        <TouchableOpacity onPress={handleRegisterNavigation}>
          <Text style={styles.registerLink}>Don't have an account? Register</Text>
        </TouchableOpacity>
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
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
    backgroundColor: 'rgba(255, 255, 255, 0.8)',
  },
  input: {
    width: '100%',
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 4,
    marginBottom: 16,
    paddingHorizontal: 8,
  },
  passwordInput: {
    position: 'relative',
  },
  passwordVisibilityButton: {
    position: 'absolute',
    right: 10,
    top: 12,
  },
  registerLink: {
    marginTop: 16,
    fontSize: 16,
    color: '#007BFF',
  },
});

export default LoginScreen;
