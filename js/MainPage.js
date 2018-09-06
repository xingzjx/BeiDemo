/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, {Component} from 'react';
import {Image, StyleSheet} from 'react-native';
import TabNavigator from 'react-native-tab-navigator';
import HomePage from "./HomePage";
import ProfilePage from "./ProfilePage";
import ShopPage from "./ShopPage";
import SocialPage from "./SocialPage";
import TradePage from "./TradePage";


export default class MainPage extends Component {
    state = {
        selectedTab: 'home'
    };

    render() {
        return (
            <TabNavigator style={styles.container}>
                <TabNavigator.Item
                    selected={this.state.selectedTab === 'home'}
                    title="钱包"
                    selectedTitleStyle={{color: "#3496f0"}}
                    renderIcon={() => <Image source={require('./image/home_wallet_hollow.png')}
                                             style={{width: 25, height: 25}}/>}
                    renderSelectedIcon={() => <Image source={require('./image/home_wallet_solid.png')}
                                                     style={{width: 25, height: 25}}/>}
                    onPress={() => this.setState({selectedTab: 'home'})}>
                    <HomePage/>
                </TabNavigator.Item>
                <TabNavigator.Item
                    selected={this.state.selectedTab === 'shop'}
                    title="商城"
                    selectedTitleStyle={{color: "#3496f0"}}
                    renderIcon={() => <Image source={require('./image/home_store_hollow.png')}
                                             style={{width: 25, height: 25}}/>}
                    renderSelectedIcon={() => <Image source={require('./image/home_store_solid.png')}
                                                     style={{width: 25, height: 25}}/>}
                    onPress={() => this.setState({selectedTab: 'shop'})}>
                    <ShopPage/>
                </TabNavigator.Item>
                <TabNavigator.Item
                    selected={this.state.selectedTab === 'trade'}
                    title="交易"
                    selectedTitleStyle={{color: "#3496f0"}}
                    renderIcon={() => <Image source={require('./image/home_transfer_hollow.png')}
                                             style={{width: 25, height: 25}}/>}
                    renderSelectedIcon={() => <Image source={require('./image/home_transfer_solid.png')}
                                                     style={{width: 25, height: 25}}/>}
                    onPress={() => this.setState({selectedTab: 'trade'})}>
                    <TradePage/>
                </TabNavigator.Item>
                <TabNavigator.Item
                    selected={this.state.selectedTab === 'social'}
                    title="社交"
                    selectedTitleStyle={{color: "#3496f0"}}
                    renderIcon={() => <Image source={require('./image/home_msg_hollow.png')}
                                             style={{width: 25, height: 25}}/>}
                    renderSelectedIcon={() => <Image source={require('./image/home_msg_solid.png')}
                                                     style={{width: 25, height: 25}}/>}
                    onPress={() => this.setState({selectedTab: 'social'})}>
                    <SocialPage/>
                </TabNavigator.Item>
                <TabNavigator.Item
                    selected={this.state.selectedTab === 'profile'}
                    title="我"
                    selectedTitleStyle={{color: "#3496f0"}}
                    renderIcon={() => <Image source={require('./image/home_me_hollow.png')}
                                             style={{width: 25, height: 25}}/>}
                    renderSelectedIcon={() => <Image source={require('./image/home_me_solid.png')}
                                                     style={{width: 25, height: 25}}/>}
                    onPress={() => this.setState({selectedTab: 'profile'})}>
                    <ProfilePage/>
                </TabNavigator.Item>
            </TabNavigator>
        );
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
