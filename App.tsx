import { Text, SafeAreaView, ScrollView } from 'react-native'
import React from 'react'
import FlatCards from './components/FlatCards'
import ElevatedCards from './components/ElevatedCards'
import ImagesCard from './components/ImagesCard'
import ActionCard from './components/ActionCard'
import ContactsList from './components/ContactsList'

const App = () => {

  return (
    <SafeAreaView>
      <ScrollView>
        <FlatCards />
        <ElevatedCards />
        <ImagesCard />
        <ContactsList />
        <ActionCard></ActionCard>
      </ScrollView>
    </SafeAreaView>
  )
}

export default App