import React, {Component} from 'react';
import {View,Text, ImageBackground,ScrollView,Image,Dimensions,Picker} from 'react-native'
import { Tab, Tabs, Icon, Form, Item, Input, Label ,Button,ListItem,CheckBox,Body, } from 'native-base'; 
import { TouchableOpacity } from 'react-native-gesture-handler';

const height = Dimensions.get('window').height;
const width = Dimensions.get('window').width;

class ServiceProvider extends Component
{
    state={
        first:'',
        second:'',
        check:false,
    }

    render(){
        return(

        <View style={{height:'100%',width:'100%'}} >
                <View style={Styles.icon}>
                    <Image source={require('./img/tog.png')} style={{height:'100%',width:'100%'}} />
                </View>
                <Text style={Styles.create_text}>Create Account </Text>

                <View style={{height:50,width:0.9*width,alignSelf:'center',flexDirection:'row',marginTop:30}}>

                <Picker
            selectedValue = {this.state.first}
            style={{height:50,width:100,marginLeft:30}}
            onValueChange = {(text) => this.setState({first:text})}
          >
            <Picker.Item label="India" value='india' />
            <Picker.Item label="USA" value='usa' />
            <Picker.Item label="Canada" value='canada' />
          </Picker>


          <Picker
            selectedValue = {this.state.second}
            style={{height:50,width:100,marginLeft:60}}
            onValueChange = {(text) => this.setState({second:text})}
          >
            <Picker.Item label="English" value='english' />
            <Picker.Item label="Spanish" value='spanish' />
            <Picker.Item label="Hindi" value='hindi' />
          </Picker>

                </View>


                <Form style={Styles.form}>
            <Item floatingLabel>
              <Label>User Name</Label>
              <Input />
            </Item>
            <Item floatingLabel>
              <Label>Mobile Number</Label>
              <Input />
            </Item>
            <Item floatingLabel last>
              <Icon name={this.state.pass_icon} onPress={() => this.hidePass()} />
              <Label>Password</Label>
              <Input  secureTextEntry = {this.state.hide_password}/>
            </Item>
        
            
            <View style={Styles.terms}>

            <CheckBox checked={this.state.check} color="green" onPress={() => this.setState({check:!this.state.check})}/>
            <Text style={{paddingLeft:20}}>I Agree to the </Text>
            <Text style={{color:'orange',textDecorationLine:'underline'}}>terms and Conditions</Text>
            <Text > of Together</Text>

            </View>

            <TouchableOpacity onPress={() => this.props.navigation.navigate('registered')}><View style={Styles.but}>
            <Text style={{fontSize:20}}>Sign up</Text>
            </View>
            </TouchableOpacity>

          </Form>


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
    height:0.8 * height,
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
    borderRadius:28,
    alignItems:'center',
    justifyContent:'center',
    alignSelf:'center',
    marginTop:60,
},

})

export default ServiceProvider;