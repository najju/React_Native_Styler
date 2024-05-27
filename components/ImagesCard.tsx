import { Image, ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function ImagesCard() {
   return (
      <View>
         <Text style={styles.headingText}>Trending Places</Text>
         <View style={[styles.card, styles.cardElevated]}>
            <Image source={{ uri: 'https://images.unsplash.com/photo-1523251343397-9225e4cb6319?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' }} style={styles.imageCard}></Image>
            <View style={styles.cardBody}>
               <Text style={styles.cardTitle}>Hawa Mahal</Text>
               <Text style={styles.cardLocation}>Pink City, Jaipur</Text>
               <Text style={styles.cardDescription}>The Hawa Mahal is a palace in the city of Jaipur, India, 
               Built from red and pink sandstone, It is on the edge of the city palace.</Text>
               <Text style={styles.cardFooter}>12 min away</Text>
            </View>
         </View>
      </View>
   )
}

const styles = StyleSheet.create({
   headingText: {
      fontSize: 24,
      fontWeight: "bold",
      paddingHorizontal: 12,
   },
   card: {
      width: 330,
      height: 360,
      margin: 15,
      borderRadius: 8,
   },
   cardElevated: {
      backgroundColor: '#222831',
      elevation: 5,
   },
   imageCard: {
      height: 180,
      borderRadius: 6,
      marginBottom: 6,
   },
   cardBody: {
      flex: 1,
      flexGrow: 1,
      marginHorizontal: 12,
   },
   cardTitle: {
      color: '#2ecc71',
      fontSize: 22,
      fontWeight: 'bold',
      marginBottom: 8,
      alignSelf: 'center',
   },
   cardLocation: {
      color: '#3498db',
      fontSize: 16,
      marginBottom: 8,
   },
   cardDescription: {
      color: '#1abc9c',
      fontSize: 14,
      marginBottom: 8,
   },
   cardFooter: {
      color: '#95a5a6',
      fontSize: 14,
      alignSelf: 'flex-end',
   },
})