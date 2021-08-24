import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

export default function Header(){
    return(
        <View style={styles.headerText}>
            <View>
                <Text style={styles.headerText}>Başlık</Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    header: {
        width: '100%',
        height:'100%',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center'
    },
    header: {
        fontWeight: 'bold',
        fontSize:20,
        color: '#333',
        letterSpacing: 1
    }
})