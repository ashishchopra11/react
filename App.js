import React,{ Component } from 'react';
import { Text, View } from 'react-native';
import Hello from './Components/helloWorld';
import Images from './Components/Image';
import Props from './Components/props';
import Blink1 from './Components/Blink';
import Div from './Components/View';

export default class App extends Component {
  render(){
    return (
      <View>
        <Div/>
        {/* <Blink1/> */}
        {/* <Props/> */}
     {/* <Hello/> */}
     {/* <Images/> */}
     </View>
    );
  }

}