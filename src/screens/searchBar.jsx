import React from 'react'
import { SafeAreaView, StyleSheet, Text, View } from 'react-native'
import { typography } from '../theme/typography'
import { Entypo } from '@expo/vector-icons';
import { spacings } from '../theme/spacing'
import { FontAwesome5 } from '@expo/vector-icons';


export default function SearchBar() {

    return (
        <SafeAreaView style={styles.searchBarContainer}>
            <View style={styles.searchBar}>
                <FontAwesome5 name="search" size={24} color="black" />
                <Text style={styles.searchText}>Search your contact person</Text>
                <Entypo name="dots-three-vertical" size={15} color="black" />
            </View>

        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    searchBarContainer: {
        textAlign: 'center',
        paddingHorizontal: 20,
    },
    searchBar: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        backgroundColor: 'lightgray',
        width: '100%',
        paddingHorizontal: 30,
        paddingVertical: 20,
        borderRadius: 15,
        
    },
    searchText: {
        fontFamily: typography.primary,
        fontSize: spacings[4]
    }
})