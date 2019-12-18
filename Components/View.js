import React,{ Component } from 'react';
import { StyleSheet, View } from 'react-native';

export default class FixedDimension extends Component {
    render() {
        return (
            <View>
                <View style={{width: 50, height: 50,backgroundColor: 'red'}}></View>
                <View style={styles.smallBox}/>
                <View style={styles.bigBox}/>

            </View>

        )
    }
}
const styles = StyleSheet.create({
    smallBox:{
        width: 100,
        height:100,
        backgroundColor: 'yellow',
    },
    bigBox: {
        width: 150,
        height: 150,
        backgroundColor: 'blue',
    },
});
