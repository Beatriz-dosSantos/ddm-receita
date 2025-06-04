import { View, Text, ScrollView, Image } from 'react-native';
import { useLocalSearchParams } from 'expo-router';
import { recipes } from '@/services/recipes';
import { Recipe } from '@/types/recipe';


export default function RecipeDetails() {
  const { id } = useLocalSearchParams();
  const recipe = recipes.find((r: Recipe) => r.id === Number(id));

  if (!recipe) {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Receita não encontrada</Text>
      </View>
    );
  }

  return (
    <ScrollView style={{ padding: 16 }}>
      <Text style={{ fontSize: 24, fontWeight: 'bold', marginVertical: 16 }}>
        {recipe.name}
      </Text>
      <Text>Ingredientes:</Text>
      {recipe.ingredients.map((ing, i) => (
        <Text key={i}>• {ing}</Text>
      ))}
    </ScrollView>
  );
}