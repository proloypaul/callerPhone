import React from 'react'
import { SafeAreaView, StyleSheet, Text, View } from 'react-native'
import SearchBar from './searchBar'
import { MaterialIcons } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';
import { typography } from '../theme/typography';
import { spacings } from '../theme/spacing';



export default function Recent() {

    return (
        <SafeAreaView style={styles.recentContainer}>
            <View>
                <SearchBar/>
            </View>
            <View style={{flexDirection: 'column', alignItems: 'center', paddingVertical: 30}}>
                <MaterialIcons name="account-circle" size={100} color="black" />
                <Text style={{fontFamily: typography.primary, fontSize: spacings[5]}}>Recent call history</Text>
            </View>

            <View style={styles.allCalls}>
                <MaterialIcons name="supervisor-account" size={50} color="white" />
                <View style={{paddingLeft: 10}}>
                    <View>
                        <Text style={{color: 'white', fontFamily: typography.primary, fontSize: spacings[5]}}>Shifat f</Text>
                        <Feather name="phone-incoming" size={24} color="green" />
                    </View>
                    <Text style={{color: 'white'}}>7.00 pm</Text>
                </View>
            </View>
            <View style={styles.allCalls}>
                <MaterialIcons name="supervisor-account" size={50} color="white" />
                <View style={{paddingLeft: 10}}>
                    <Text style={{color: 'white', fontFamily: typography.primary, fontSize: spacings[5]}}>Pritish f (2)</Text>
                    <Feather name="phone-outgoing" size={24} color="green" />
                </View>
            </View>
            <View style={styles.allCalls}>
                <MaterialIcons name="supervisor-account" size={50} color="white" />
                <View style={{paddingLeft: 10}}>
                    <Text style={{color: 'white', fontFamily: typography.primary, fontSize: spacings[5]}}>Fardin f</Text>
                    <Feather name="phone-outgoing" size={24} color="green" />
                </View>
            </View>
            <View style={styles.allCalls}>
                <MaterialIcons name="supervisor-account" size={50} color="white" />
                <View style={{paddingLeft: 10}}>
                    <Text style={{color: 'white', fontFamily: typography.primary, fontSize: spacings[5]}}>DPI Nazrul</Text>
                    <Feather name="phone-incoming" size={24} color="green" />
                </View>
            </View>

        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    recentContainer: {
        paddingTop: 20
    },  
    allCalls: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: 'black',
        width: '100%',
        paddingHorizontal: 30,
        paddingVertical: 20,
        borderRadius: 15,
        marginVertical: 5
    }
})