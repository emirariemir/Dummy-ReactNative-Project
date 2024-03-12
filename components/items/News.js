import * as React from 'react';
import { View, Text, StyleSheet, Button, Pressable } from 'react-native';

const News = (props) => {
    return (
        <View style={styles.container}>
            <Text style={styles.newsTitle}>{props.title}</Text>
            <Text style={styles.newsText}>{props.text}</Text>
        </View>
    )
}

styles = StyleSheet.create( {
    container: {
        backgroundColor: '#F9F7C7',
        paddingHorizontal: 16,
        paddingVertical: 16,
        borderRadius: 10,
        justifyContent: 'flex-start',
        marginBottom: 20,
    },

    newsTitle: {
        fontSize: 20,
        marginBottom: 5,
    },

    newsText: {
        fontSize: 12,
    }
});

export default News;