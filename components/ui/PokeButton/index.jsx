import React from 'react';
import { Image, Pressable, Text, View } from 'react-native';
import { theme } from '../../../themes/theme';

import { styles } from './styles';

export function PokeButton({ children, style }) {
  return (
    <View style={[styles.button, style]}>
      <Pressable
        style={styles.buttonInner}
        android_ripple={{ color: theme.colors.lightRed }}
      >
        <Text style={styles.text}>{children}</Text>
        <Image
          style={styles.image}
          source={require('../../../assets/images/pokeball-background-1.png')}
        />
      </Pressable>
    </View>
  );
}
