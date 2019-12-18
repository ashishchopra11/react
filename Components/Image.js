import React,{ Component } from 'react';
import { Image } from 'react-native';

export default class Photo extends Component{
    render(){
        return(
            <Image source = {require('../Images/images1.jpg')} style={{width : 380,height : 500}}/>
        );
    }
}