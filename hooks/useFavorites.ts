import { useState, useEffect } from 'react';
import { Recipe } from '../types/recipe';
import AsyncStorage from '@react-native-async-storage/async-storage';

export function useFavorites() {
  const [favorites, setFavorites] = useState<Recipe[]>([]);

  useEffect(() => {
    loadFavorites();
  }, []);

  const loadFavorites = async () => {
    try {
      const stored = await AsyncStorage.getItem('favorites');
      if (stored) setFavorites(JSON.parse(stored));
    } catch (error) {
      console.error('Failed to load favorites', error);
    }
  };

  const toggleFavorite = async (recipe: Recipe) => {
    try {
      const isFavorite = favorites.some((fav) => fav.id === recipe.id);
      let newFavorites;

      if (isFavorite) {
        newFavorites = favorites.filter((fav) => fav.id !== recipe.id);
      } else {
        newFavorites = [...favorites, recipe];
      }

      setFavorites(newFavorites);
      await AsyncStorage.setItem('favorites', JSON.stringify(newFavorites));
    } catch (error) {
      console.error('Failed to toggle favorite', error);
    }
  };

  return { favorites, toggleFavorite };
}