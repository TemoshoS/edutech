import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Button, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/FontAwesome';

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
    <View style={styles.container}>
      <Text style={styles.header}>Login</Text>
      <TextInput
        style={styles.input}
        placeholder="Email"
        value={email}
        onChangeText={(text) => setEmail(text)}
        keyboardType="email-address"
      />
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
      <Button title="Login" onPress={handleLogin} />
   
   <TouchableOpacity onPress={handleRegisterNavigation}>
    <Text>register</Text>
   </TouchableOpacity>
   
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
    backgroundColor: '#fff',
  },
  header: {
    fontSize: 24,
    marginBottom: 16,
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
  passwordVisibilityButton: {
        position: 'absolute',
        right: 20,
        top: 470,
    },
});

export default LoginScreen;
