import React, { useEffect, useState } from 'react';
import { FlatList, Text, View } from 'react-native';
import { PokedexItem } from '../../components/pokedex/PokedexItem';
import { getAllPokemons } from '../../services/pokeApi';

import { styles } from './styles';

export function PokedexScreen() {
  const [pokemons, setPokemons] = useState([]);

  useEffect(() => {
    const fetchPokemons = async () => {
      const allPokemons = await getAllPokemons();
      setPokemons(allPokemons);
    };

    fetchPokemons();
  }, [setPokemons, getAllPokemons]);

  return (
    <View style={styles.container}>
      <FlatList
        data={pokemons}
        numColumns={2}
        renderItem={(itemData) => <PokedexItem data={itemData.item.data} />}
        columnWrapperStyle={{ justifyContent: 'space-between' }}
      />
    </View>
  );
}
