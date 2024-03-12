import * as React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import colors from '../colors';
import Icon from 'react-native-vector-icons/FontAwesome';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const bigButton = (props) => {
    <View style={props.buttonStyle}>
        <Icon name={props.iconName} size={48} color={colors.background} />
        <Text style={styles.buttonTitle}>props.title</Text>
    </View>
}

function BuyCrypto({ navigation }) {
    return (
        <View style={styles.container}>
            <View style={styles.top}>
                <View style={styles.topLeft}>
                    <Icon name="angle-left" size={30} color={colors.blue} onPress={() => navigation.goBack()} />
                </View>
                <View style={styles.topMiddle}>
                    <Text style={styles.greetingText}>Buy Crypto Coins!</Text>
                </View>
                <View style={styles.topRight}>
                    <Icon name="cube" size={24} color={colors.blue} onPress={() => navigation.goBack()} />
                </View>
            </View>
            <View style={styles.bottom}>
                <View style={styles.bottomUp}>
                    <View style={styles.budgetView}>
                        <Text style={styles.yourBudgetText}>Your total budget is</Text>
                        <Text style={styles.budgetText}>$14,739.54</Text>
                    </View>
                </View>
                <View style={styles.bottomMiddle}>
                    <View style={styles.addMoney}>
                        <Icon name='hand-o-up' size={40} color={colors.background} />
                        <Text style={styles.addMoneyText}>Add Money</Text>
                    </View>
                    <View style={styles.pullMoney}>
                        <Icon name='hand-o-down' size={40} color={colors.background} />
                        <Text style={styles.addMoneyText}>Pull Money</Text>
                    </View>
                    <View style={styles.switchCurrency}>
                        <Icon name='reply' size={40} color={colors.background} />
                        <Text style={styles.addMoneyText}>Change $</Text>
                    </View>
                </View>
                <View style={styles.bottomDown}></View>
            </View>
        </View>
    );
}

styles = StyleSheet.create({
    container: {
        flex: 1,
    },

    top: {
        flex: 1,
        flexDirection: 'row',
        paddingHorizontal: 20,
        paddingBottom: 20,
        backgroundColor: colors.background
    },

    topLeft: {
        flex: 1,
        justifyContent: 'flex-end',
    },

    topMiddle: {
        flex: 3,
        alignItems: 'center',
        justifyContent: 'flex-end',
    },

    greetingText: {
        fontSize: 20,
        fontWeight: '700',
        color: colors.textColor
    },

    topRight: {
        flex: 1,
        alignItems: 'flex-end',
        justifyContent: 'flex-end',
    },

    backButton: {
        width: 12,
        height: 12,
        borderRadius: 24,
        backgroundColor: colors.textColor,
    },

    bottom: {
        flex: 7,
        backgroundColor: colors.blue
    },

    bottomUp: {
        flex: 1.5,
        backgroundColor: colors.background
    },

    budgetView: {
        flex: 1,
        alignItems: 'flex-start',
        justifyContent: 'center',
        margin: 20,
        paddingLeft: 24,
        borderRadius: 12,
        backgroundColor: colors.blue,
    },

    yourBudgetText: {
        paddingBottom: 6,
        color: colors.background,
    },

    budgetText: {
        fontSize: 42,
        letterSpacing: 1,
        fontWeight: '700',
        color: colors.background,
    },


    bottomMiddle: {
        flex: 1,
        flexDirection: 'row',
        backgroundColor: colors.background,
    },

    buttonStyleLeft: {
        flex: 1,
        marginLeft: 20,
        marginVertical: 6,
        borderRadius: 12,
        backgroundColor: colors.green,
    },

    buttonStyleRight: {
        flex: 1,
        marginLeft: 20,
        marginVertical: 6,
        borderRadius: 12,
        backgroundColor: colors.green,
    },

    addMoney: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        marginLeft: 20,
        marginVertical: 6,
        borderRadius: 12,
        backgroundColor: colors.green,
    },

    addMoneyText: {
        fontSize: 12,
        fontWeight: '600',
        marginTop: 6,
        color: colors.background
    },

    pullMoney: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        marginHorizontal: 20,
        marginVertical: 6,
        borderRadius: 12,
        backgroundColor: colors.red,
    },

    switchCurrency: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        marginRight: 20,
        marginVertical: 6,
        borderRadius: 12,
        backgroundColor: colors.blue,
    },


    bottomDown: {
        flex: 4,
        backgroundColor: colors.background,
    },

});

export default BuyCrypto;