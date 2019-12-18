import React, { Component } from 'react';
import { Text, View } from 'react-native';

class Blink extends Component {

    componentDidMount(){
        setInterval(() => (
            this.setState(previousState => (
                { isShowingText: !previousState.isShowingText}
            ))
        ),1000);
    }
    state = {isShowingText:true };
    render(){
        if(!this.state.isShowingText) {
            return null;
        }

        return(
        <Text>{this.props.text}</Text>
        );
    }
}
export default class BlinkApp extends Component {
    render() {
        return (
            <View>
                <Blink text = 'I love to Blink' />
                <Blink text = 'I love to Blink' />
                <Blink text = 'I love to Blink and Blink' />
                <Blink text = 'I love to Blink and Blinking is my birthright' />
            </View>
        );
    }
}