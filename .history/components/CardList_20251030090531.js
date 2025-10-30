components/CardList.js 
import React from 'react'; 
import { View, FlatList, StyleSheet } from 'react-native'; 
import CardItem from './CardItem'; 
 
// import du JSON local 
import cards from '../data/cards.json'; 
 
// export nommé 
export function CardList() { 
  const renderItem = ({ item }) => ( 
    <CardItem 
      title={item.title} 
      description={item.description} 
      image={item.image} 
    /> 
  ); 
 
  return ( 
    <View style={styles.container}> 
      <FlatList 
        data={cards} 
        keyExtractor={(item) => item.id} 
        renderItem={renderItem} 
        contentContainerStyle={{ padding: 16 }} 
        showsVerticalScrollIndicator={false} 
      /> 