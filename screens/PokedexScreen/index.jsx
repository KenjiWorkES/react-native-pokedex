import React, { useEffect, useState } from 'react';
import { FlatList, Text, View } from 'react-native';
import { PokedexItem } from '../../components/pokedex/PokedexItem';
import { getAllPokemons } from '../../services/pokeApi';

import { styles } from './styles';

export function PokedexScreen() {
  const [pokemons, setPokemons] = useState([]);
  const [offSet, setoffSet] = useState(0);

  useEffect(() => {
    const fetchPokemons = async () => {
      const pokemonsData = await getAllPokemons(offSet);
      const allPokemons = [...pokemons, ...pokemonsData];
      setPokemons(allPokemons);
    };

    fetchPokemons();
  }, [setPokemons, getAllPokemons, offSet]);

  const changeEndHandler = () => {
    setoffSet((prevState) => prevState + 20);
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={pokemons}
        numColumns={2}
        renderItem={(itemData) => <PokedexItem data={itemData.item.data} />}
        columnWrapperStyle={{ justifyContent: 'space-between' }}
        onEndReached={changeEndHandler}
      />
    </View>
  );
}
