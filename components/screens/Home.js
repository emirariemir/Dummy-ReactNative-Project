import * as React from 'react';
import { View, Text, StyleSheet, Button, Pressable, ScrollView } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import colors from '../colors';
import Icon from 'react-native-vector-icons/FontAwesome';

const CoinCard = (props) => {
    return (
        <View style={styles.coinCard}>
            <View style={styles.coinLeft}>
                <Icon name={props.coinIcon} color={colors.lightBlue} size={26} />
                <Text style={styles.coinTag}>{props.coinCode}</Text>
            </View>
            <Text style={styles.amountText}>{props.amount}</Text>
        </View>
    )
}

const BuyMoreCoinsButton = ({ navigation }) => {
    return (
        <Pressable style={styles.buyButton} onPress={() => navigation.navigate('Buy Crypto')}>
            <Text style={styles.buyText}>Buy more coins!</Text>
        </Pressable>
    )
}

function Home({ navigation }) {
    return (
        <View style={styles.container}>

            <View style={styles.top}>
                <Icon name='user-circle-o' size={24} color={colors.blue} />
                <Text style={styles.greetingText}>Hi there, Mike!</Text>
                <Icon name='sliders' size={24} color={colors.blue} />
            </View>

            <View style={styles.middle}>
                <View style={styles.middleTop}>
                    <Text style={styles.budgetText}>$4539</Text>
                    <Text style={styles.infoText}>Your financial situation looking really good!</Text>
                </View>
                <View style={styles.middleMid}>
                    <ScrollView showsVerticalScrollIndicator={false}>
                        <CoinCard coinIcon={'internet-explorer'} coinCode={'ETH'} amount={'$235'}/>
                        <CoinCard coinIcon={'bitcoin'} coinCode={'BTC'} amount={'$457'}/>
                        <CoinCard coinIcon={'rocket'} coinCode={'AVAX'} amount={'$235'}/>
                        <CoinCard coinIcon={'diamond'} coinCode={'TRON'} amount={'$235'}/>
                        <CoinCard coinIcon={'usd'} coinCode={'USDC'} amount={'$235'}/>
                    </ScrollView>
                </View>
                <View style={styles.middleBottom}>
                    <BuyMoreCoinsButton navigation={navigation}/>
                </View>
            </View>

            <View style={styles.bottom}>
                <View style={styles.navigationBackground}>
                    <View style={styles.navigationButton}/>
                    <View style={styles.navigationButton}/>
                    <View style={styles.navigationButton}/>
                    <View style={styles.navigationButton}/>
                </View>
            </View>
        </View>
    );
}

styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'space-evenly'
    },

    top: {
        flex: 0.8,
        flexDirection: 'row',
        alignItems: 'space-between',
        justifyContent: 'space-between',
        paddingHorizontal: 20,
        paddingBottom: 20,
        backgroundColor: colors.lightBlue,
    },
    
    topLeft: {
        flexDirection: 'row',
        alignItems: 'flex-end',
    },

    topRight: {
        width: 24,
        height: 24,
        borderRadius: 24,
    },

    greetingText: {
        fontSize: 18,
        fontWeight: '600',
        color: colors.textColor,
    },

    marketText: {
        fontSize: 16,
        color: colors.textColor
    },

    middle: {
        flex: 6,
        paddingHorizontal: 20,
        backgroundColor: colors.background
    },

    middleTop: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 24,
    },

    budgetText: {
        fontSize: 56,
        color: colors.textColor,
        fontWeight: '600'
    },

    infoText: {
        fontSize: 14,
        color: colors.textColor
    },

    middleMid: {
        flex: 3,
        padding: 20,
        borderRadius: 24,
        backgroundColor: colors.lightBlue,
    },

    coinCard: {
        height: 64,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: 20,
        marginBottom: 15,
        borderRadius: 64,
        backgroundColor: colors.blue
    },

    coinLeft: {
        flexDirection: 'row',
        alignItems: 'center',
    },

    coinIcon: {
        height: 26,
        width: 26,
        marginRight: 10,
        backgroundColor: '#FFF',
        borderRadius: 24,
    },

    coinTag: {
        fontSize: 24,
        marginLeft: 8,
        fontWeight: '500',
        color: '#FFF'
    },

    amountText: {
        fontSize: 18,
        color: '#FFF',
        opacity: 0.8,
    },

    middleBottom: {
        flex: 1,
        borderRadius: 24,
    },

    buyButton: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        marginVertical: 25,
        borderRadius: 62,
        backgroundColor: '#B9EDDD',
        elevation: 1,
    },

    buyText: {
        fontSize: 24,
        fontWeight: '500',
        color: '#577D86'
    },

    bottom: {
        flex: 1,
        backgroundColor: colors.background
    },

    navigationBackground: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: 30,
        marginHorizontal: 20,
        marginBottom: 40,
        borderRadius: 64,
        backgroundColor: colors.lightBlue
    },

    navigationButton: {
        width: 24,
        height: 24,
        borderRadius: 6,
        backgroundColor: colors.blue
    }
});

export default Home;