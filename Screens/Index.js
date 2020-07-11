import React, {Component} from 'react';
import {View,Text, ImageBackground,ScrollView,Image,Dimensions} from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler';

const height = Dimensions.get('window').height;


class Index extends Component
{

    render(){
        return(

        <View style={{height:'100%',width:'100%'}} >
            <ImageBackground source={require('./img/home.png')} style={Styles.img_back}>

            <View style={{height:'100%',width:'100%',justifyContent:'center'}}>

                <TouchableOpacity style={[Styles.but,{marginTop:height - 200}]}
                onPress={() => this.props.navigation.navigate(this.props.navigation.state.params.name)}>
                <View ><Text style={Styles.but_text}>Register</Text></View>
                </TouchableOpacity>


                <TouchableOpacity style={[Styles.but,{marginTop:30}]} onPress={() => this.props.navigation.navigate('login')}>
                <View ><Text style={Styles.but_text}>Log in</Text></View>
                </TouchableOpacity>

         </View>
            </ImageBackground>
            </View>

        );
    }
}


const Styles = ({

img_back:{
    height:'100%',
    width:'100%',

},

but:{
    height:56,
    width:'60%',
    backgroundColor:'white',
    borderRadius:28,
    alignItems:'center',
    justifyContent:'center',
    alignSelf:'center',
},

but_text:{
    fontSize:20,
}


})

export default Index;