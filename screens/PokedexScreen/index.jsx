import React, { useEffect, useState } from 'react';
import { FlatList, Text, View } from 'react-native';
import { getAllPokemons } from '../../services/pokeApi';

import { styles } from './styles';

export function PokedexScreen() {
  const [pokemons, setPokemons] = useState([]);

  useEffect(() => {
    const fetchPokemons = async () => {
      const allPokemons = await getAllPokemons();
      console.log(allPokemons);
      setPokemons(allPokemons);
    };

    fetchPokemons();
  }, [setPokemons, getAllPokemons]);

  return (
    <View style={styles.container}>
      <FlatList
        data={pokemons}
        renderItem={(itemData) => <Text>{itemData.item.name}</Text>}
      />
    </View>
  );
}
