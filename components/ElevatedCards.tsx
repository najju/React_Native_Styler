import { ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function ElevatedCards() {
  return (
    <View>
      <Text style={styles.headingText}>Elevated Cards</Text>
      <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
        <View style={[styles.card, styles.elevatedCard]}>
            <Text>Tap</Text>
        </View>
        <View style={[styles.card, styles.elevatedCard]}>
            <Text>Tap</Text>
        </View>
        <View style={[styles.card, styles.elevatedCard]}>
            <Text>Tap</Text>
        </View>
        <View style={[styles.card, styles.elevatedCard]}>
            <Text>Tap</Text>
        </View>
        <View style={[styles.card, styles.elevatedCard]}>
            <Text>Tap</Text>
        </View>
        <View style={[styles.card, styles.elevatedCard]}>
            <Text>Tap</Text>
        </View>
      </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
    headingText: {
        fontSize: 24,
        fontWeight: "bold",
        paddingHorizontal: 12,
      },
    container: {},
    card: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        width: 100,
        height: 100,
        margin: 8,
        borderRadius: 4,
    },
    elevatedCard: {
        elevation: 4,
        backgroundColor: "teal",
    },
})