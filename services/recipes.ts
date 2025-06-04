import { Recipe } from '../types/recipe';

export const recipes: Recipe[] = [
  {
    id: 1,
    name: 'Panquecas',
    image: 'https://example.com/panquecas.jpg',
    time: 20,
    ingredients: ['Farinha', 'Ovos', 'Leite', 'Açúcar'],
    steps: ['Misture tudo', 'Frite em frigideira'],
    category: 'Café da manhã'
  },
  {
    id: 2,
    name: 'Macarrão à Bolonhesa',
    image: 'https://example.com/macarrao.jpg',
    time: 40,
    ingredients: ['Macarrão', 'Carne moída', 'Molho de tomate'],
    steps: ['Cozinhe o macarrão', 'Prepare o molho'],
    category: 'Almoço'
  }
];