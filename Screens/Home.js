import React, {Component} from 'react';
import {View,Text, ImageBackground,ScrollView,Dimensions,Image} from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler';

const height = Dimensions.get('screen').height;
const width = Dimensions.get('screen').width;


class Home extends Component
{

    state={
        color1:'white',
        color2:'white',
        color3:'white',
    }


    pressed = (num) => {
        if(num == 1){
        this.setState({color1:'white'});
        this.props.navigation.navigate('index',{name:'register'});
        }
        else if(num == 2){
        this.setState({color2:'white'});
        this.props.navigation.navigate('index',{name:'serviceprovider'});
        }
        else{
        this.setState({color3:'white'});
        this.props.navigation.navigate('index',{name:'bothregister'});
        }

    }

    render(){
        return(

        <View style={{height:'100%',width:'100%'}} >
            <ScrollView showsVerticalScrollIndicator={false}>
                <View style={Styles.Container}>
                <ImageBackground source={require('./img/background.png')} style={Styles.img_back} >

                        <View style={Styles.icon}>
                            <Image source={require('./img/tog.png')} style={{height:'100%',width:'100%'}} />
                        </View>

                        <TouchableOpacity style={[Styles.buttons,{marginTop:140,backgroundColor:this.state.color1}]}
                        onPressOut={() => this.pressed(1)} onPressIn={() => this.setState({color1:'orange'})}>
                        <View ><Text style={Styles.but_text}>User</Text></View>
                        </TouchableOpacity>

                        <TouchableOpacity style={[Styles.buttons,{marginTop:30,backgroundColor:this.state.color2}]}
                        onPressOut={() => this.pressed(2)} onPressIn={() => this.setState({color2:'orange'})}>
                        <View ><Text style={Styles.but_text}>Service Provider</Text></View>
                        </TouchableOpacity>


                        <TouchableOpacity style={[Styles.buttons,{marginTop:30,backgroundColor:this.state.color3}]}
                        onPressOut={() => this.pressed(3)} onPressIn={() => this.setState({color3:'orange'})}>
                        <View ><Text style={Styles.but_text}>Both</Text></View>
                        </TouchableOpacity>

                </ImageBackground>
                </View>

            </ScrollView>

            </View>

        );
    }
}


const Styles = ({



    Container:{
        height:1.4*height,
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
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 5,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
    },

    but_text:{
        fontSize:20,
    }

})

export default Home;