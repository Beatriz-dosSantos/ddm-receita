import { View, Text, FlatList } from 'react-native';
import RecipeCard from '../../components/RecipeCard';
import { useFavorites } from '../../hooks/useFavorites';

export default function FavoritesScreen() {
  const { favorites } = useFavorites();

  return (
    <View style={{ flex: 1, padding: 16 }}>
      <Text style={{ fontSize: 24, fontWeight: 'bold', marginBottom: 16 }}>
        Favoritos
      </Text>
      {favorites.length > 0 ? (
        <FlatList
          data={favorites}
          renderItem={({ item }) => <RecipeCard recipe={item} />}
          keyExtractor={(item) => item.id.toString()}
        />
      ) : (
        <Text>Nenhuma receita favoritada ainda</Text>
      )}
    </View>
  );
}