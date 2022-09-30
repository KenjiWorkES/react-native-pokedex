import React from 'react';
import { Text, View, Image, ImageBackground } from 'react-native';
import { theme } from '../../../themes/theme';
import { addExtraZero } from '../../../utils';
import { PokemonType } from '../PokemonType';

import { styles } from './styles';

export function PokedexItem(data) {
  const pokemon = data.data;

  const primaryColor = `${pokemon.types[0].type.name}Type1`;
  const secondaryColor = `${pokemon.types[0].type.name}Type1`;

  const number = addExtraZero(pokemon.id, 3);

  return (
    <View
      style={[styles.item, { backgroundColor: theme.colors[secondaryColor] }]}
    >
      <View style={styles.numberContainer}>
        <Text style={styles.number}>#{number}</Text>
      </View>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>{pokemon.name}</Text>
      </View>
      <View style={styles.content}>
        <View style={styles.typeContainer}>
          {pokemon.types.map((type) => {
            return (
              <PokemonType
                key={type.type.name}
                color={pokemon.types[0].type.name}
                text={type.type.name}
              />
            );
          })}
        </View>
        <ImageBackground
          style={styles.imageContainer}
          source={require('../../../assets/images/pokeball-backgound-2.png')}
          resizeMode="contain"
        >
          <Image
            style={styles.image}
            source={{
              uri: pokemon.sprites.other['official-artwork']['front_default'],
            }}
          />
        </ImageBackground>
      </View>
    </View>
  );
}
