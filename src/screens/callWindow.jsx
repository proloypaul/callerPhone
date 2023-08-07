import React from 'react'
import { SafeAreaView, StyleSheet, Text, View } from 'react-native'
import SearchBar from './searchBar'
import TypingNumber from '../components/typeingNumber'
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { typography } from '../theme/typography';
import { spacings } from '../theme/spacing';

export default function CallWindow() {
    return (
        <SafeAreaView style={styles.callWindowContainer}>
            <View>
                <SearchBar/>
            </View>
            <View style={{marginVertical: 30, marginLeft: 25}}>
                <View style={styles.contactMethods}>
                    <MaterialCommunityIcons name="account-search" size={30} color="black" />
                    <Text style={styles.contactMethodDesign}>Create New Contacts</Text>
                </View>
                <View style={styles.contactMethods}>
                    <MaterialCommunityIcons name="account-plus" size={30} color="black" />
                    <Text style={styles.contactMethodDesign}>Add New Account</Text>
                </View>
                <View style={styles.contactMethods}>
                    <MaterialCommunityIcons name="message-text" size={30} color="black" />
                    <Text style={styles.contactMethodDesign}>Send Message</Text>
                </View>
            </View>
            <View>
                <TypingNumber/>
            </View>
            
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    callWindowContainer: {
        paddingTop: 20,
        backgroundColor: 'white',
    },
    contactMethodDesign: {
        fontFamily: typography.primary,
        fontSize: spacings[5],
        color: 'gray',
        marginLeft: 5,
        marginBottom: 15,
    },
    contactMethods: {
        flexDirection: 'row', 
        alignItems: 'center'
    }
})