import React from 'react'
import { SafeAreaView, StyleSheet, Text, View } from 'react-native'
import SearchBar from './searchBar'



export default function Contact() {

    return (
        <SafeAreaView style={styles.contactContainer}>
            <View>
                <SearchBar/>
            </View>

        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    
})