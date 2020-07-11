import React, {Component} from 'react';
import {View,Text, ImageBackground,ScrollView,Image,Dimensions,Picker} from 'react-native'
import { Tab, Tabs, Icon, Form, Item, Input, Label ,Button,ListItem,CheckBox,Body, } from 'native-base'; 
import { TouchableOpacity } from 'react-native-gesture-handler';

const height = Dimensions.get('window').height;
const width = Dimensions.get('window').width;

class BothRegister extends Component
{

        state={
            check:'',
        }

    render(){
        return(

        <View style={{height:'100%',width:'100%'}} >
            <ScrollView showsVerticalScrollIndicator={false}>
                <View style={Styles.icon}>
                    <Image source={require('./img/tog.png')} style={{height:'100%',width:'100%'}} />
                </View>
                <Text style={Styles.create_text}>Create Account </Text>

                <View style={{height:150,width:0.5*width,alignSelf:'center',flexDirection:'row',marginTop:10}}>
                    <Image source={require('./img/k.png')} style={{height:'100%',width:'100%',resizeMode:'stretch'}} />
                </View>


                <Form style={Styles.form}>
            <Item floatingLabel>
              <Label>User Name</Label>
              <Input />
            </Item>
            <Item floatingLabel>
              <Label>Your email address</Label>
              <Input />
            </Item>
            <Item floatingLabel last>
              <Icon name={this.state.pass_icon} onPress={() => this.hidePass()} />
              <Label>Password</Label>
              <Input  secureTextEntry = {this.state.hide_password}/>
            </Item>
            <Item floatingLabel last>
              <Icon name={this.state.pass_icon} onPress={() => this.hidePass()} />
              <Label>Confirm Password</Label>
              <Input  secureTextEntry = {this.state.hide_password}/>
            </Item>
            <Item floatingLabel last>
              <Icon name={this.state.pass_icon} onPress={() => this.hidePass()} />
              <Label>Pincode</Label>
              <Input  secureTextEntry = {this.state.hide_password}/>
            </Item>
        
            
            <View style={Styles.terms}>

            <CheckBox checked={this.state.check} color="green" onPress={() => this.setState({check:!this.state.check})}/>
            <Text style={{paddingLeft:20}}>I Agree to the </Text>
            <Text style={{color:'orange',textDecorationLine:'underline'}}>terms and Conditions</Text>
            <Text > of Together</Text>

            </View>

            <TouchableOpacity onPress={() => this.props.navigation.navigate('registered')}><View style={Styles.but}>
            <Text style={{fontSize:20}}>Register</Text>
            </View>
            </TouchableOpacity>

          </Form>

</ScrollView>
            </View>

        );
    }
}


const Styles = ({

img_back:{
    height:'100%',
    width:'100%',

},


but_text:{
    fontSize:20,
},

icon:{
    height:70,
    width:0.5*width,
    marginTop:20,
    alignSelf:'center'
},

create_text:{
    fontSize:20,
    marginTop:10,
    color:'gray',
    alignSelf:'center'
},

form:{
    width:0.9 * width,
    alignSelf:'center',
},

terms:{
    width:width,
    height:30,
    flexDirection:'row',
    justifyContent:'center',
    alignItems:'center',
    marginTop:30,
    marginLeft:-30,
},

but:{
    height:50,
    width:'60%',
    backgroundColor:'orange',
    borderRadius:18,
    alignItems:'center',
    justifyContent:'center',
    alignSelf:'center',
    marginTop:60,
    marginBottom:30,
},

})

export default BothRegister;