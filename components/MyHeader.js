import React,{Component} from 'react';
import {Header,Icon} from 'react-native-elements';
import {View,Text,StyleSheet} from 'react-native';
const MyHeader= props=> {
    return(
     <Header 
     centerComponent={{text:props.title,style:{color:"orange",fontSize:20,fontWeight:"bold"}}}
     backgrounColor="yellow"
     />
    )
}
export default MyHeader