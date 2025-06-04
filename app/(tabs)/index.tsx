import React, { useState } from 'react';
import { View, Text, TextInput, FlatList, StyleSheet } from 'react-native';
import { Recipe } from '@/types/recipe';
import { recipes } from '@/services/recipes';
import RecipeCard from '@/components/RecipeCard';

export default function HomeScreen() {
  const [search, setSearch] = useState('');

  const filteredRecipes = recipes.filter((recipe: Recipe) => {
    return (
      recipe.name.toLowerCase().includes(search.toLowerCase()) ||
      recipe.ingredients.some((ingredient: string) => {
        return ingredient.toLowerCase().includes(search.toLowerCase());
      })
    );
  });

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Receitas</Text>
      
      <TextInput
        placeholder="Buscar receitas ou ingredientes..."
        style={styles.searchInput}
        value={search}
        onChangeText={setSearch}
      />
      
      <FlatList
        data={filteredRecipes}
        renderItem={({ item }) => <RecipeCard recipe={item} />}
        keyExtractor={(item) => item.id.toString()}
        contentContainerStyle={styles.listContent}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  searchInput: {
    padding: 12,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    marginBottom: 16,
    backgroundColor: '#fff',
  },
  listContent: {
    paddingBottom: 20,
  },
});