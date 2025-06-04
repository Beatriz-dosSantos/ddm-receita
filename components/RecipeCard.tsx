import React from 'react';
import { View, Text, TouchableOpacity, Image, StyleSheet } from 'react-native';
import { Link } from 'expo-router';
import { Recipe } from '@/types/recipe';
import { Ionicons } from '@expo/vector-icons';
import { useFavorites } from '@/hooks/useFavorites';

interface RecipeCardProps {
  recipe: Recipe;
}

const RecipeCard: React.FC<RecipeCardProps> = ({ recipe }) => {
  const { toggleFavorite, favorites } = useFavorites();
  const isFavorite = favorites.some(fav => fav.id === recipe.id);

  return (
    <View style={styles.container}>
      <Link
        href={{
          pathname: "/recipe-details/[id]",
          params: { id: recipe.id.toString() }
        }}
        asChild
      >
        <TouchableOpacity style={styles.content}>
          <Image
            source={{ uri: recipe.image || 'https://placehold.co/600x400' }}
            style={styles.image}
            resizeMode="cover"
          />
          <View style={styles.textContainer}>
            <Text style={styles.title} numberOfLines={1}>{recipe.name}</Text>
            <Text style={styles.details}>
              {recipe.time} min • {recipe.category}
            </Text>
          </View>
        </TouchableOpacity>
      </Link>

      <TouchableOpacity
        onPress={() => toggleFavorite(recipe)}
        style={styles.favoriteButton}
      >
        <Ionicons
          name={isFavorite ? "heart" : "heart-outline"}
          size={24}
          color={isFavorite ? "red" : "#333"}
        />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    borderRadius: 12,
    marginBottom: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
    position: 'relative',
    overflow: 'hidden',
  },
  content: {
    width: '100%',
  },
  image: {
    width: '100%',
    height: 150,
  },
  textContainer: {
    padding: 12,
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 4,
  },
  details: {
    fontSize: 14,
    color: '#666',
  },
  favoriteButton: {
    position: 'absolute',
    top: 10,
    right: 10,
    backgroundColor: 'rgba(255, 255, 255, 0.7)',
    borderRadius: 20,
    padding: 6,
  },
});

export default RecipeCard;