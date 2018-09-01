import React, {Component} from 'react';
import {Dimensions, Image, StyleSheet, TextInput, Text, View, TouchableOpacity} from 'react-native';

export default class RegisterPage extends Component {
    constructor(props) {
        super(props);
    }

    _back() {
        const {navigator} = this.props;
        navigator.pop();
    }

    render() {
        return (
            <View style={styles.register_container}>


                <Image
                    style={{
                        width: Dimensions.get('window').width,
                        height: 300,
                        position: 'absolute',
                        top: 0,
                        left: 0,
                    }}
                    source={require('./image/register_header.png')}/>


                <View style={{
                    position: 'absolute',
                    top: 10,
                    left: 0,
                    right: 0,
                    //backgroundColor: 'red',
                    flexDirection: 'row',

                }}>

                    <TouchableOpacity
                        onPress={this._back.bind(this)}>
                        <Image
                            style={styles.back_img}
                            source={require('./image/ic_back_white.png')}/>
                    </TouchableOpacity>

                    <Text style={{alignSelf: 'center', color: 'white', marginLeft: 120, fontSize: 18}}>注册</Text>
                </View>


                <View style={styles.centerContainer}>

                    <View
                        style={{height: 20}}
                    />

                    <View
                        style={styles.item}>
                        <Image
                            style={styles.item_img}
                            source={require('./image/ic_login_name.png')}/>

                        <TextInput
                            style={styles.item_input}
                            placeholder="用户名"
                            underlineColorAndroid='transparent'
                            onChangeText={(text) => this.setState({text})}
                        />
                    </View>

                    <View style={styles.line}/>

                    <View
                        style={styles.item}>
                        <Image
                            style={styles.item_img}
                            source={require('./image/ic_login_pwd.png')}/>

                        <TextInput
                            style={styles.item_input}
                            placeholder="登陆密码"
                            underlineColorAndroid='transparent'
                            onChangeText={(text) => this.setState({text})}
                        />
                    </View>

                    <View style={styles.line}/>


                    <View
                        style={styles.item}>
                        <Image
                            style={styles.item_img}
                            source={require('./image/ic_login_pwd.png')}/>

                        <TextInput
                            style={styles.item_input}
                            placeholder="确认密码"
                            underlineColorAndroid='transparent'
                            onChangeText={(text) => this.setState({text})}
                        />
                    </View>

                    <View style={styles.line}/>

                    <View
                        style={styles.item}>

                        <Text>+86</Text>

                        <Image
                            style={styles.item_img}
                            source={require('./image/ic_down.png')}/>

                        <TextInput
                            style={styles.item_input}
                            placeholder="手机号"
                            underlineColorAndroid='transparent'
                            onChangeText={(text) => this.setState({text})}
                        />
                    </View>

                    <View style={styles.line}/>

                    <View
                        style={styles.item}>
                        <Image
                            style={styles.item_img}
                            source={require('./image/ic_login_pwd.png')}/>

                        <TextInput
                            style={styles.item_input}
                            placeholder="验证码"
                            underlineColorAndroid='transparent'
                            onChangeText={(text) => this.setState({text})}
                        />

                        <View style={
                            {
                                flexDirection: 'row',
                                backgroundColor: '#498FDD',
                                // round: 13,
                                borderRadius: 3,
                                padding: 5,
                                alignItems: 'center',
                            }
                        }>
                            <Image
                                style={{
                                    width: 14,
                                    height: 12,
                                }}
                                source={require('./image/ic_send.png')}/>

                            <TouchableOpacity>
                                <Text style={{fontSize: 13, color: 'white', marginLeft: 3,}}>发送</Text>
                            </TouchableOpacity>

                        </View>
                    </View>

                    <View style={styles.line}/>

                    <View
                        style={styles.item}>

                        <Image
                            style={styles.item_img}
                            source={require('./image/register_email.png')}/>

                        <TextInput
                            style={styles.item_input}
                            placeholder="邮箱"
                            underlineColorAndroid='transparent'
                            onChangeText={(text) => this.setState({text})}
                        />

                        <Text style={{textColor: '#757575'}}>（选填）</Text>

                    </View>

                    <View style={styles.line}/>

                    <View
                        style={styles.item}>

                        <Image
                            style={styles.item_img}
                            source={require('./image/register_invite_code.png')}/>

                        <TextInput
                            style={styles.item_input}
                            placeholder="邀请码"
                            underlineColorAndroid='transparent'
                            onChangeText={(text) => this.setState({text})}
                        />

                        <Image
                            style={styles.item_img}
                            source={require('./image/register_edit.png')}/>
                    </View>

                    <View style={styles.line}/>


                    <View style={{
                        flexDirection: 'row',
                        backgroundColor: 'white',
                        alignItems: 'center',
                        justifyContent: 'center',
                        marginTop: 40,
                    }}>
                        <TouchableOpacity
                            style={styles.button}>
                            <Text
                                style={styles.btText}>注册</Text>
                        </TouchableOpacity>

                    </View>

                    <Text style={{
                        fontSize: 10,
                        //color: '#0E0E0E',
                        alignSelf: 'center',
                        // backgroundColor: 'red',
                        marginTop: 8,
                        textColor: '#0E0E0E',
                    }}>注册即表示同意MSC用户协议</Text>
                </View>
                <TouchableOpacity
                    onPress={this._back.bind(this)}>
                    <Text style={{
                        marginTop: 25,
                        fontSize: 13,
                        textColor: '#72768A',
                    }}>已有账号？直接登录</Text>
                </TouchableOpacity>

            </View>
        );
    }
}

const styles = StyleSheet.create({
    register_container: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
    },

    centerContainer: {
        width: Dimensions.get('window').width * 385.0 / 500.0,
        height: Dimensions.get('window').height * 454.0 / 667.0,
        backgroundColor: 'white',
        borderRadius: 3,
        // paddingBottom: 15,
        //alignItems: 'center',
        //justifyContent: 'center',

    },
    item: {
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
        //backgroundColor: 'red',
        marginLeft: 15,
        marginRight: 15,
        //height:30,
    },
    back_img: {
        width: 10,
        height: 18,
        alignItems: 'center',
        marginLeft: 15,
    },
    item_img: {
        width: 14,
        height: 16,
        alignItems: 'center',
    },
    item_input: {
        height: 40,
        //backgroundColor: 'blue',
        flex: 1,
        color: '#757575',
        fontSize: 13,
        marginLeft: 5,
        alignItems: 'center',

    },
    line: {
        height: 1,
        backgroundColor: '#DDE1E5',
        marginLeft: 15,
        marginRight: 15
    },
    button: {
        flex: 1,
        height: 34,
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