import React from 'react'
import { SafeAreaView, StyleSheet, Text, View } from 'react-native'
import { typography } from '../theme/typography'
import { Icon } from 'react-native-vector-icons/AntDesign'
import { spacings } from '../theme/spacing'


export default function SearchBar() {

    const searchIcon = <Icon
    name='SearchOutlined'
    size={20}
    color= 'black'
/> 
    return (
        <SafeAreaView style={styles.searchBarContainer}>
            <View style={styles.searchBar}>
                <Text style={styles.searchText}>Search your contact person</Text>
            </View>

        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    searchBarContainer: {
        textAlign: 'center'
    },
    searchBar: {
        backgroundColor: 'lightgray',
        width: '90%',
        paddingHorizontal: 30,
        paddingVertical: 20,
        borderRadius: 15,
        
    },
    searchText: {
        fontFamily: typography.primary,
        fontSize: spacings[4]
    }
})