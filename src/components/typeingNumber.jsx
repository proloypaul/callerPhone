import React from 'react'
import { SafeAreaView, StyleSheet, Text, View } from 'react-native'
import { Entypo } from '@expo/vector-icons';
import { typography } from '../theme/typography';
import { spacings } from '../theme/spacing';
import { Ionicons } from '@expo/vector-icons';


export default function TypingNumber() {
    return (
        <SafeAreaView style={styles.typingNumberContainer}>
            <View style={styles.showNumberDesign}>
                <Text style={{fontFamily: typography.primaryBold, fontSize: spacings[8], color: '#FFFFFF'}}>4564335</Text>
                <Entypo name="cross" size={40} color="#FFFFFF" />
            </View>
            <View style={styles.NumberRow}>
                <Text style={styles.numberInnerDesign}>1</Text>
                <Text style={styles.numberInnerDesign}>2</Text>
                <Text style={styles.numberInnerDesign}>3</Text>
            </View>
            <View style={styles.NumberRow}>
                <Text style={styles.numberInnerDesign}>4</Text>
                <Text style={styles.numberInnerDesign}>5</Text>
                <Text style={styles.numberInnerDesign}>6</Text>
            </View>
            <View style={styles.NumberRow}>
                <Text style={styles.numberInnerDesign}>7</Text>
                <Text style={styles.numberInnerDesign}>8</Text>
                <Text style={styles.numberInnerDesign}>9</Text>
            </View>
            <View style={styles.NumberRow}>
                <Text style={styles.numberInnerDesign}>*</Text>
                <Text style={styles.numberInnerDesign}>0</Text>
                <Text style={styles.numberInnerDesign}>#</Text>
            </View>
            <View style={{flexDirection:'row', justifyContent:'center', paddingTop:20}}>
                <View>
                    <Ionicons name="ios-call" size={24} color='green' />
                    <Text style={{fontFamily: typography.primary, fontSize: spacings[6], color: '#FFFFFF'}}>Sim1</Text>
                </View>
                <View style={{marginLeft: 50}}>
                    <Ionicons name="ios-call" size={24} color="green" />
                    <Text style={{fontFamily: typography.primary, fontSize: spacings[6], color: '#FFFFFF'}}>Sim2</Text>
                </View>
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    typingNumberContainer:{
        paddingHorizontal: 20,
        paddingVertical: 30,
        backgroundColor: '#000000',
        color: '#FFFFFF'
    },
    NumberRow: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center'
    },
    numberInnerDesign: {
        // flex: 2,
        fontFamily: typography.secondry,
        fontSize: spacings[7],   
        backgroundColor: 'gray',
        paddingHorizontal: 20,
        paddingVertical: 10,
        margin: 5,
        borderRadius: 20,
        color: '#FFFFFF'

    },
    showNumberDesign:{
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        paddingVertical: 15,
        color: '#FFFFFF'
    }

})