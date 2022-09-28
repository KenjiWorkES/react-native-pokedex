import React from 'react';
import { Pressable, Text, TextInput, View } from 'react-native';

import { styles } from './styles';

import { PokeButton } from '../../ui/PokeButton';

export function AuthForm() {
  return (
    <View style={styles.form}>
      <Text style={styles.title}>Login</Text>
      <View style={styles.inputControl}>
        <Text style={styles.label}>Email</Text>
        <TextInput style={styles.input} />
      </View>
      <View style={styles.inputControl}>
        <Text style={styles.label}>Password</Text>
        <TextInput style={styles.input} />
      </View>
      <PokeButton>Login</PokeButton>
      <Pressable>
        <Text style={styles.link}>Dont't have account? Create a new user!</Text>
      </Pressable>
    </View>
  );
}
