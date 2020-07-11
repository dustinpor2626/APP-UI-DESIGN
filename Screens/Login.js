import React, {Component} from 'react';
import {View,Text, ImageBackground,ScrollView,Image,Dimensions} from 'react-native'
import { Tab, Tabs, Icon, Form, Item, Input, Label ,Button,ListItem,CheckBox,Body, } from 'native-base'; 
import { TouchableOpacity } from 'react-native-gesture-handler';

const height = Dimensions.get('window').height;
const width = Dimensions.get('window').width;

class Login extends Component
{


      

    render(){
        return(

        <View style={Styles.Container} >

                <View style={Styles.icon}>
                    <Image source={require('./img/tog.png')} style={{height:'100%',width:'100%'}} />
                </View>

                <Text style={Styles.create_text}>Welcome Back!</Text>

                <Item style={{width:0.8*width,marginTop:30}}>
                <Input placeholder="UserName" placeholderTextColor='gray' />
              <Input />
            </Item>

            <TouchableOpacity style={Styles.but}>
            <View >
                    <Text style={{fontSize:20}}>Login</Text>
                </View>
                </TouchableOpacity>

                <Text style={Styles.forgetpass_text}>Forget Password?</Text>

                <View style={Styles.signin_opt}>
                    <View style={[Styles.opts,{marginRight:10}]} >
                        <View style={{height:40,width:40,borderRadius:20,alignItems:'center',justifyContent:'center'}}>
                            <Icon name='logo-facebook' />
                        </View>
                        <Text style={{fontSize:20,color:'blue',marginLeft:7}}>Sign in</Text>
                    </View>


                    <View style={[Styles.opts,{marginLeft:10}]}>
                    <View style={{height:40,width:40,borderRadius:20,alignItems:'center',justifyContent:'center'}}>
                            <Icon name='logo-github' />
                        </View>
                        <Text style={{fontSize:20,color:'blue',marginLeft:7}}>Sign in</Text>
                    </View>
                </View>


                <View style={{flexDirection:'row',marginTop:40}}>
                <Text style={{paddingLeft:20,fontSize:17}}>Don't have an account ? </Text>
                    <Text style={{color:'orange',textDecorationLine:'underline',fontSize:18}}> Sign Up</Text>
                </View> 

            </View>

        );
    }
}


const Styles = ({


Container:{
    height:'100%',
    width:'100%',
    alignItems:'center',
},

icon:{
    height:70,
    width:0.5*width,
    marginTop:30,
    alignSelf:'center'
},

create_text:{
    fontSize:30,
    marginTop:10,
    color:'gray',
    alignSelf:'center'
},

but:{
    height:50,
    width:0.9 * width,
    backgroundColor:'orange',
    borderRadius:20,
    alignItems:'center',
    justifyContent:'center',
    alignSelf:'center',
    marginTop:50,
},

forgetpass_text:{
    color:'orange',
    textDecorationLine:'underline',
    fontSize:20,
    marginTop:30,
},

signin_opt:{
    height:0.1*height,
    width:'100%',
    justifyContent:'center',
    flexDirection:'row',
    marginTop:20
},

opts:{
    height:60,
    width:160,
    borderRadius:20,
    shadowColor: "#000",
    shadowOffset: {
        width: 0,
        height: 5,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    flexDirection:'row',
    alignItems:'center',
    paddingLeft:20,
    backgroundColor:'white'
},

})

export default Login;