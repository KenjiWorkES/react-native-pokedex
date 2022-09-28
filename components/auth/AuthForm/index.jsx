import React from 'react';
import { Pressable, Text, TextInput, View } from 'react-native';
import { styles } from './styles';

import { useNavigation } from '@react-navigation/native';

import { PokeButton } from '../../ui/PokeButton';

export function AuthForm({ isSignIn }) {
  const navigation = useNavigation();

  const changeScreenHandler = () => {
    if (isSignIn) {
      navigation.replace('Login');
    } else {
      navigation.replace('SignIn');
    }
  };

  return (
    <View style={styles.form}>
      <Text style={styles.title}>{isSignIn ? 'Sign In' : 'Login'}</Text>
      <View style={styles.inputControl}>
        <Text style={styles.label}>Email</Text>
        <TextInput style={styles.input} />
      </View>
      {isSignIn && (
        <View style={styles.inputControl}>
          <Text style={styles.label}>Confirm Email</Text>
          <TextInput style={styles.input} />
        </View>
      )}
      <View style={styles.inputControl}>
        <Text style={styles.label}>Password</Text>
        <TextInput style={styles.input} />
      </View>
      {isSignIn && (
        <View style={styles.inputControl}>
          <Text style={styles.label}>Confirm Pasword</Text>
          <TextInput style={styles.input} />
        </View>
      )}
      <PokeButton style={isSignIn && styles.buttonPurple}>
        {isSignIn ? 'Sign In' : 'Login'}
      </PokeButton>
      <Pressable onPress={changeScreenHandler}>
        <Text style={[styles.link, isSignIn && styles.linkPurple]}>
          Dont't have account? Create a new user!
        </Text>
      </Pressable>
    </View>
  );
}
