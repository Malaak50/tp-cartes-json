import React, { useState } from 'react';
import { View, FlatList, StyleSheet, TextInput, Text } from 'react-native';
import CardItem from './CardItem';
import cards from '../data/cards.json';

export function CardList() {
  const [searchQuery, setSearchQuery] = useState(''); // texte saisi
  const [filteredCards, setFilteredCards] = useState(cards); // données filtrées

  // Fonction de filtrage
  const handleSearch = (text) => {
    setSearchQuery(text);

    if (text.trim() === '') {
      // Si la barre est vide → afficher toutes les cartes
      setFilteredCards(cards);
    } else {
      const filtered = cards.filter(
        (item) =>
          item.title.toLowerCase().includes(text.toLowerCase()) ||
          item.description.toLowerCase().includes(text.toLowerCase())
      );
      setFilteredCards(filtered);
    }
  };

  const renderItem = ({ item }) => (
    <CardItem
      title={item.title}
      description={item.description}
      image={item.image}
    />
  );

  return (
    <View style={styles.container}>
      {/* Barre de recherche */}
      <TextInput
        style={styles.searchInput}
        placeholder="🔍 Rechercher une carte..."
        value={searchQuery}
        onChangeText={handleSearch}
      />

      {/* Si aucune carte trouvée */}
      {filteredCards.length === 0 ? (
        <Text style={styles.noResult}>Aucun résultat trouvé 😕</Text>
      ) : (
        <FlatList
          data={filteredCards}
          keyExtractor={(item) => item.id}
          renderItem={renderItem}
          contentContainerStyle={{ padding: 16 }}
          showsVerticalScrollIndicator={false}
        />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f6f7fb',
  },
  searchInput: {
    backgroundColor: '#fff',
    margin: 16,
    paddingHorizontal: 12,
    paddingVertical: 10,
    borderRadius: 10,
    fontSize: 16,
    borderColor: '#ccc',
    borderWidth: 1,
  },
  noResult: {
    textAlign: 'center',
    color: '#666',
    marginTop: 20,
    fontSize: 16,
  },
});
