import React,{ Component } from 'react';
import { StyleSheet, Text , View } from 'react-native';
const styles = StyleSheet.create({
    red: {
        color : 'red',
        fontWeight: 'bold',
        fontSize: 30,
    },
    blue: {
        color : 'blue',
    },
});

class Greeting extends Component{
    render(){
        return (
            <View style={{alignItems: 'center'}}>
    <Text style={styles.red}>Hello {this.props.name}! Your age is {this.props.age}</Text>
    <Text style={styles.blue}>Hello {this.props.name}! Your age is {this.props.age}</Text>
    

            </View>
        );
    }
}
export default class LotsOfGreetings extends Component {
    render(){
        return (
            <View style={{alignItems:'center',top : 150}}>
                <Greeting name='Chandan' age = {22} ></Greeting>
                <Greeting name='Rawat' age = {22}></Greeting>
                <Greeting name='Bhujel' age = {22}></Greeting>
            </View>
        );
    }
}