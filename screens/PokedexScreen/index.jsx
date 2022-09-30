import React, { useEffect, useState } from 'react';
import { FlatList, Text, View, ActivityIndicator } from 'react-native';
import { PokedexItem } from '../../components/pokedex/PokedexItem';
import { getAllPokemons } from '../../services/pokeApi';
import { theme } from '../../themes/theme';

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

  const returnSpinner = () => {
    return offSet < 1000 && <ActivityIndicator color={theme.colors.darkGray} />;
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={pokemons}
        numColumns={2}
        renderItem={(itemData) => <PokedexItem data={itemData.item.data} />}
        columnWrapperStyle={{ justifyContent: 'space-between' }}
        onEndReached={changeEndHandler}
        onEndReachedThreshold={2.0}
        ListFooterComponent={returnSpinner}
      />
    </View>
  );
}
