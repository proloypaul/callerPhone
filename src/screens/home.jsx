import React from 'react'
import { SafeAreaView, StyleSheet, Text, TextInput, View } from 'react-native'
import SearchBar from './searchBar'
import { typography } from '../theme/typography'
import { spacings } from '../theme/spacing'


export default function Home({ navigation }) {
    return (
        <SafeAreaView style={styles.homeContainer}>
            <View>
                <SearchBar/>
            </View>
            <View style={styles.homeCenterTitle}>
                <Text style={{fontFamily: typography.primaryBold, fontSize: spacings[7]}}>No recent call</Text>
                <Text style={{fontFamily: typography.primary}}>A record of your call will appear here</Text>
            </View>
            {/* <View style={styles.ContactBtn}>
                <Text style={{fontSize: spacings[10], color: 'white'}}>...</Text>
            </View> */}
            <View style={styles.homeBottomSection}>
                <Text style={{flex:2, fontFamily: typography.secondry,
        fontSize: spacings[4],}}>Favourite</Text>
                <Text style={{flex:2, fontFamily: typography.secondry,
        fontSize: spacings[4],}}>Recent</Text>
                <Text style={{flex:2, fontFamily: typography.secondry,
        fontSize: spacings[4],}}>Contacts</Text>
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    homeContainer: {
        flex: 1,
        paddingTop: 25,
        paddingHorizontal: 20,
        backgroundColor: 'white',
    },
    homeCenterTitle: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    homeBottomSection: {
        flexDirection: 'row', 
        // marginBottom: 20,
        backgroundColor: 'lightgray',
        margin: 0,
        paddingLeft: 40,
        paddingVertical: 30,
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
    },
    ContactBtn: {
        backgroundColor: 'gray',
        width: 60,
        height: 60,
        borderRadius: 10
    }
})