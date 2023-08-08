import React from 'react'
import { SafeAreaView, StyleSheet, Text, View } from 'react-native'
import { Feather } from '@expo/vector-icons';


export default function Calling() {

    return (
        <SafeAreaView style={styles.callingContainer}>
            <View style={{paddingBottom: 80}}>
                <Feather name="phone-outgoing" size={24} color="green" />
                <Text>Calling....</Text>
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    callingContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
})