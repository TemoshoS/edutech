import { StyleSheet, Text, View, TextInput, TouchableOpacity, Picker } from 'react-native';
import React, { useState } from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import { useNavigation } from '@react-navigation/native';

const RegisterScreen = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [password, setPassword] = useState('');
    const [role, setRole] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const navigation = useNavigation();

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };
    const handleRegistration = () => {

    };
    const handleLoginNavigation = () => {
        navigation.navigate('Login');
    };

    return (
        <View style={styles.container}>
            <Text style={styles.header}>Register</Text>
            <TextInput
                style={styles.input}
                placeholder="Name"
                value={name}
                onChangeText={(text) => setName(text)}
            />
            <TextInput
                style={styles.input}
                placeholder="Email"
                value={email}
                onChangeText={(text) => setEmail(text)}
                keyboardType="email-address"
            />
            <TextInput
                style={styles.input}
                placeholder="Phone"
                value={phone}
                onChangeText={(text) => setPhone(text)}
                keyboardType="phone-pad"
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

            <Picker
                style={styles.input}
                selectedValue={role}
                onValueChange={(itemValue, itemIndex) => setRole(itemValue)}
            >
                <Picker.Item label="Roles" />
                <Picker.Item label="Teacher" value="teacher" />
                <Picker.Item label="Learner" value="learner" />
                <Picker.Item label="Parent" value="parent" />
            </Picker>
            <TouchableOpacity style={styles.registerBtn}
                onPress={handleRegistration}>
                <Text style={styles.registerTxt}>Register</Text>
            </TouchableOpacity>

            <View style={{ flexDirection: 'row', marginTop: 16 }}>
                <Text>Already have an account?</Text>
                <TouchableOpacity style={styles.loginBtn} onPress={handleLoginNavigation}>
                    <Text style={styles.loginTxt}>Log in</Text>
                </TouchableOpacity>
            </View>
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
        borderBottomWidth: 1,
        borderBottomColor: 'gray',
        marginBottom: 16,
        paddingHorizontal: 8,
    },
    passwordVisibilityButton: {
        position: 'absolute',
        right: 20,
        top: 470,
    },

    registerBtn: {
        backgroundColor: '#C0C0C0',
        width: 200,
        height: 30,
        borderRadius: 10,
        justifyContent: 'center',
    },
    registerTxt: {
        color: 'white',
        textAlign: 'center',
    },
    loginBtn: {
        borderRadius: 4,
        paddingHorizontal: 8,
        marginLeft: 8,
    },
    loginTxt: {
        color: 'blue',
        textDecorationLine: 'underline',
    },
});

export default RegisterScreen;
