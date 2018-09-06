import {Component} from "react";
import {StyleSheet, Text, View, Platform} from "react-native";
import React from "react";
import theme from "./config/theme";

export default class HomePage extends Component {
    render() {
        return (
            <View style={styles.container}>
                <View style={styles.actionBar}>
                    <Text style={{color: theme.actionBar.fontColor, fontSize: theme.actionBar.fontSize}}>钱包</Text>
                    <Text style={{
                        color: theme.actionBar.fontColor,
                        fontSize: theme.actionBar.fontSize,
                        // alignSelf: 'end'
                    }}>钱包</Text>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        // justifyContent: 'center',
        // alignItems: 'center',
        backgroundColor: '#F5F5F5',
    },
    actionBar: {
        flexDirection: 'row',
        height: theme.actionBar.height,
        backgroundColor: theme.actionBar.backgroundColor,
        alignItems: 'center',
        justifyContent: 'center',
        paddingTop: (Platform.OS === 'ios') ? 20 : 0,
    },

});
