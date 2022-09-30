import React from 'react';
import { Text, View } from 'react-native';
import { theme } from '../../../themes/theme';

import { styles } from './styles';

export function PokemonType({ text, color }) {
  const primaryColor = `${color}Type2`;

  return (
    <View
      style={[styles.type, { backgroundColor: theme.colors[primaryColor] }]}
    >
      <Text style={styles.typeText}>{text}</Text>
    </View>
  );
}
