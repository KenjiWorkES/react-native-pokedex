import React from 'react';
import { Image, View } from 'react-native';

import { styles } from './styles';

export function AuthContent() {
  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Image
          style={styles.image}
          source={require('../../../assets/images/pokeball-logo.png')}
        />
      </View>
    </View>
  );
}
