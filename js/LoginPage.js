import React, {Component} from 'react';
import {Dimensions, Image, StyleSheet, Text, TextInput, TouchableOpacity, View} from 'react-native';
import RegisterPage from "./RegisterPage";


export default class LoginPage extends Component {

    _register() {
        const {navigator} = this.props;
        navigator.push({
            component: RegisterPage,
        })
    }

    render() {
        return (
            <View
                style={styles.container}>

                <Image
                    style={{
                        width: Dimensions.get('window').width,
                        height: 300,
                        position: 'absolute',
                        top: 0,
                        left: 0,
                    }}
                    source={require('./image/ic_login_bg.png')}/>


                <View style={{
                    width: Dimensions.get('window').width * 385.0 / 500.0,
                    height: Dimensions.get('window').height * 496.0 / 859.0,
                    backgroundColor: 'white',
                    //alignItems: 'center',
                    justifyContent: 'center',
                }}>

                    <Image
                        style={{width: 73, height: 73, alignSelf: 'center', marginTop: 30, marginBottom: 20}}
                        source={require('./image/ic_login_logo.png')}/>

                    <View
                        style={styles.inputBox}>
                        <Image
                            style={styles.img}
                            source={require('./image/ic_login_name.png')}/>
                        <TextInput
                            style={styles.input} defaultValue={'用户名'} underlineColorAndroid='transparent'/>
                    </View>


                    <View style={{width: 225, height: 1, backgroundColor: '#DDE1E5', alignSelf: 'center'}}/>

                    <View
                        style={styles.inputBox}>
                        <Image
                            source={require('./image/ic_login_pwd.png')}
                            style={styles.img}/>
                        <TextInput
                            style={styles.input} defaultValue={'密码'} underlineColorAndroid='transparent'/>
                    </View>

                    <View style={{width: 225, height: 1, backgroundColor: '#DDE1E5', alignSelf: 'center'}}/>

                    <View style={{
                        flexDirection: 'row',
                        backgroundColor: 'white',
                        alignItems: 'center',
                        justifyContent: 'center',
                        marginTop: 20,
                    }}>
                        <TouchableOpacity
                            style={styles.button}>
                            <Text
                                style={styles.btText}>登入</Text>
                        </TouchableOpacity>

                    </View>

                    <View style={{
                        flexDirection: 'row',
                        marginTop: 15,
                        marginLeft: 17,
                        marginRight: 17,
                        flex: 1,
                        justifyContent: 'space-between',

                    }}>

                        <TouchableOpacity onPress={this._register.bind(this)}>
                            <Text>立即注册</Text>
                        </TouchableOpacity>
                        <Text>找回密码</Text>
                    </View>
                </View>

            </View>

        );
    }
}

const styles = StyleSheet.create({
    container: {
        // height: 496,
        // width: 320,
        // backgroundColor: 'yellow',
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 3,
    },
    img: {
        width: 14,
        height: 16,
    },
    input: {
        width: 200,
        // height: 23,
        color: '#757575',//输入框输入的文本为白色
        marginLeft: 5,

    },
    inputBox: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        width: 280,
        // height: 40,
        borderRadius: 8,
        backgroundColor: '#fff',
        //marginBottom: 8,
    },
    button: {
        flex: 1,
        height: 45,
        //width: 250,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 8,
        backgroundColor: '#498FDD',
        marginLeft: 17,
        marginRight: 17,
        paddingBottom: 14,
        paddingTop: 14,
    },
    btText: {
        color: 'white',
        fontSize: 18,
    }
});