import {Component} from "react";
import {StyleSheet, Text, View} from "react-native";
import React from "react";

export default class ProfilePage extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.welcome}>
                    我
                </Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    },
    instructions: {
        textAlign: 'center',
        color: '#333333',
        marginBottom: 5,
    },
});
