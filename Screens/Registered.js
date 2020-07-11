import React, {Component} from 'react';
import {View,Text, ImageBackground,ScrollView,Dimensions,Image} from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler';

const height = Dimensions.get('screen').height;
const width = Dimensions.get('screen').width;


class Registered extends Component
{


    render(){
        return(

        <View style={{height:'100%',width:'100%'}} >
            <ScrollView showsVerticalScrollIndicator={false}>
                <View style={Styles.Container}>
                <Image source={require('./img/bac.png')} style={Styles.img_back} />
                </View>

                <TouchableOpacity style={[Styles.buttons]}>
                        <View ><Text style={Styles.but_text}>Enable Sharing</Text></View>
                        </TouchableOpacity>

                        <TouchableOpacity style={[Styles.buttons,{marginTop:40,marginBottom:20}]}>
                        <View ><Text style={Styles.but_text}>Get Started</Text></View>
                        </TouchableOpacity>

            </ScrollView>

            </View>

        );
    }
}


const Styles = ({

    Container:{
        height:height,
        width:'100%',
    },

    img_back:{
        height:'100%',
        width:'100%',
        alignItems:'center',
    },

    icon:{
        height:'7%',
        width:'50%',
        marginTop:60,
    },

    buttons:{
        height:60,
        width:210,
        borderRadius:30,
        alignItems:'center',
        justifyContent:'center',
        alignSelf:'center',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 5,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
        backgroundColor:'white',
    },

    but_text:{
        fontSize:20,
    }

})

export default Registered;