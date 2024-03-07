import * as React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { SafeAreaView } from 'react-native-safe-area-context';

function Home({ navigation }) {
    return (
        <View style={styles.container}>
            <SafeAreaView>
            <View style={styles.topPart}>
                <View style={styles.topBarLeft}>
                    <View style={styles.profilePicture}/>
                    <Text style={styles.greetingText}>Hello there, Mike!</Text>
                </View>
                <View style={styles.topBarRight}>
                    <View style={styles.settings}></View>
                </View>
            </View>
            </SafeAreaView>

            <View style={styles.middlePart}>
                <Text>You can buy crypto really fast!</Text>
                <Button
                    title="Buy Crypto!"
                    onPress={() => navigation.navigate('Buy Crypto')}
                />
            </View>
        
            <View style={styles.bottomPart}/>
        </View>
    );
}

styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'space-between',
    },

    topPart: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 20,
        marginTop: 12,
    },

    topBarLeft: {
        flexDirection: 'row',
        alignItems: 'center',

    },

    profilePicture: {
        width: 24,
        height: 24,
        borderRadius: 24,
        backgroundColor: '#80BCBD',
        marginRight: 8,
    },

    greetingText: {
        fontSize: 16,
    },

    topBarRight: {
    },

    settings: {
        width: 24,
        height: 24,
        borderRadius: 5,
        backgroundColor: '#AAD9BB'
    },

    middlePart: {
        alignItems: 'center'
    },

    bottomPart: {
        height: 62,
        borderRadius: 62,
        paddingBottom: 20,
        marginHorizontal: 20,
        marginBottom: 40,
        backgroundColor: '#AAD9BB'
    },

});

export default Home;