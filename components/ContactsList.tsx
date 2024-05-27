import { Image, ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function ContactsList() {

    const contacts = [
        {
            uid: 1,
            name: 'Hitesh Choudhary',
            status: 'Just an extra ordinary teacher',
            imageUrl: 'https://avatars.githubusercontent.com/u/11613311?v=4',
          },
          {
            uid: 2,
            name: 'Anurag Tiwari',
            status: 'I ❤️ To Code and Teach!',
            imageUrl: 'https://avatars.githubusercontent.com/u/94738352?v=4',
          },
          {
            uid: 3,
            name: 'Sanket Singh',
            status: 'Making your GPay smooth',
            imageUrl: 'https://avatars.githubusercontent.com/u/29747452?v=4',
          },
          {
            uid: 4,
            name: 'Anirudh Jwala',
            status: 'Building secure Digital banks',
            imageUrl: 'https://avatars.githubusercontent.com/u/25549847?v=4',
          },
    ]


  return (
    <View>
      <Text style={styles.headingText}>Contacts List</Text>
      <ScrollView style={styles.scroller}>
        {
            contacts.map(({uid, name, status, imageUrl}) => (
                <View key={uid} style={styles.contactView}>
                    <Image style={styles.contactImage} source={
                        {uri: imageUrl}
                    } />
                    <View style={styles.nameStatus}>
                        <Text style={styles.contactName}>Name: {name}</Text>
                        <Text style={styles.contactStatus}>Status: {status}</Text>
                    </View>
                </View>
            ))
        }
      </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
    headingText: {
        fontSize: 24,
        fontWeight: "bold",
        color: '#000',
        paddingHorizontal: 12,
    },
    scroller: {
        backgroundColor: '#023020',
        margin: 15,
        padding: 3,
        borderRadius: 8,
    },
    contactImage: {
        height: 60,
        width: 60,
        borderRadius: 60/2,
        marginRight: 5,
    },
    contactView: {
        backgroundColor: '#25D366',
        borderRadius: 8,
        flexDirection: 'row',
        alignItems: 'center',
        margin: 3,
        padding: 5,
    },
    contactName: {
        color: '#000',
        fontSize: 16,
    },
    contactStatus: {
        fontSize: 15,
        color: '#000',
    },
    nameStatus: {
    },
})