import React, {Component} from 'react';
import {View,Text, ImageBackground,ScrollView,Image,Dimensions} from 'react-native'
import { Tab, Tabs, Icon, Form, Item, Input, Label ,Button,ListItem,CheckBox,Body, } from 'native-base'; 
import { TouchableOpacity, TextInput } from 'react-native-gesture-handler';
import Modal from 'react-native-modalbox';

const height = Dimensions.get('window').height;
const width = Dimensions.get('window').width;

class Register extends Component
{

    state={
        hide_password:true,
        pass_icon:'eye-off',
        signin_icon:'eye-off',
        signin_password:true,
        check:false,
        visibility:false,
    }

    hidePass(){
        if(!this.state.hide_password)
        {
          this.setState({hide_password:true});
          this.setState({pass_icon:'eye-off'});
        }else{
          this.setState({hide_password:false});
          this.setState({pass_icon:'eye'});
        }
      }
      

    render(){
        return(

        <View style={Styles.Container} >


<Modal
        isOpen={this.state.visibility}
        coverScreen={true}
        swipeToClose={false}
        position={'center'}
        style={Styles.modal}
      >
          <View style={Styles.modal_icon}>
              <Image source={require('./img/call.png')}  style={{height:'100%',width:'100%'}} />
              </View>
          <Text style={{marginTop:15,fontSize:17}}>Verify Your Mobile Number </Text>
          <Text style={{alignSelf:'flex-start',color:'gray',fontSize:19,marginTop:20,marginLeft:40}} >Mobile Number</Text>

          <View style={{flexDirection:'row',alignSelf:'flex-start',paddingLeft:50,marginTop:20}}>
                <TextInput placeholder="+91" style={[Styles.text_input,{width:40}]}></TextInput>
                <TextInput  style={[Styles.text_input,{width:180,marginLeft:20}]}></TextInput>
          </View>

            <View style={{flexDirection:'row',alignSelf:'flex-start',paddingLeft:15,marginTop:25}}>

                         <TouchableOpacity style={[Styles.modal_but,{backgroundColor:'silver'}]} onPress={() => alert('hii')}>
                        <View>
                        <Text style={{fontSize:20}}>Cancel</Text>
                        </View></TouchableOpacity> 

                        <TouchableOpacity style={[Styles.modal_but,{backgroundColor:'orange'}]}>
                        <View >
                            <Text style={{fontSize:20,color:'white'}}>Submit</Text>
                        </View></TouchableOpacity>
          </View>

      </Modal>


            <ScrollView showsVerticalScrollIndicator={false}>
                <View style={Styles.icon}>
                    <Image source={require('./img/tog.png')} style={{height:'100%',width:'100%'}} />
                </View>
                <Text style={Styles.create_text}>Create Account </Text>
 
                <View style={Styles.form}>

            <Tabs tabBarUnderlineStyle={{ backgroundColor: 'orange' }} >
                <Tab heading="Using E-mail" tabStyle={{ backgroundColor: '#2f2483' }} activeTabStyle={{ backgroundColor: '#2f2483' }}>

                <Form>
            <Item floatingLabel>
              <Label>User Name</Label>
              <Input />
            </Item>
            <Item floatingLabel>
              <Label>E-mail Id</Label>
              <Input />
            </Item>
            <Item floatingLabel last>
              <Icon name={this.state.pass_icon} onPress={() => this.hidePass()} />
              <Label>Password</Label>
              <Input  secureTextEntry = {this.state.hide_password}/>
            </Item>
            <Item floatingLabel>
              <Label>Confirm Password</Label>
              <Input secureTextEntry = {this.state.hide_password}/>
            </Item>
            
            <View style={Styles.terms}>

            <CheckBox checked={this.state.check} color="green" onPress={() => this.setState({check:!this.state.check})}/>
            <Text style={{paddingLeft:10}}>I Agree to the </Text>
            <Text style={{color:'orange',textDecorationLine:'underline'}}>terms and Conditions</Text>
            <Text > of Together</Text>

            </View>

            <TouchableOpacity onPress={() => this.props.navigation.navigate('registered')}><View style={Styles.but}>
            <Text style={{fontSize:20}}>Register</Text>
            </View>
            </TouchableOpacity>

          </Form>


                </Tab>

                <Tab heading="Using Mobile Number" tabStyle={{ backgroundColor: '#2f2483' }}  activeTabStyle={{ backgroundColor: '#2f2483' }}> 

         <Form>
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
            <Item floatingLabel>
              <Label>Confirm Password</Label>
              <Input secureTextEntry = {this.state.hide_password}/>
            </Item>
            


            <View style={Styles.terms}>

            <CheckBox checked={this.state.check} color="green" onPress={() => this.setState({check:!this.state.check})}/>
            <Text style={{paddingLeft:10}}>I Agree to the </Text>
            <Text style={{color:'orange',textDecorationLine:'underline'}}>terms and Conditions</Text>
            <Text > of Together</Text>

            </View>

            <TouchableOpacity onPress={() => this.setState({visibility:true})}><View style={Styles.but}>
            <Text style={{fontSize:20}}>Register</Text>
            </View>
            </TouchableOpacity> 

          </Form>                       
         </Tab>

             </Tabs>
                </View>


                </ScrollView>
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
    marginTop:20,
},

terms:{
    width:width,
    height:30,
    flexDirection:'row',
    justifyContent:'center',
    alignItems:'center',
    marginTop:20,
},

but:{
    height:56,
    width:'60%',
    backgroundColor:'orange',
    borderRadius:28,
    alignItems:'center',
    justifyContent:'center',
    alignSelf:'center',
    marginTop:40,
},

modal:{
    height:0.5*height,
    width:0.9*width,
    alignItems:'center',
    borderRadius:5,
  },

  modal_icon:{
      height:60,
      width:80,
      marginTop:20,
  },

  text_input:{
    height:40,
    borderWidth:1,
    borderRadius:10,
    alignItems:'center',
    justifyContent:'center',
    alignSelf:'flex-start',
  },

  modal_but:{
    height:40,
    width:0.35*width,
    borderRadius:28,
    alignItems:'center',
    justifyContent:'center',
    alignSelf:'center',
    margin:10,
  }

})

export default Register;