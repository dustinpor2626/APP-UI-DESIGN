import {createStackNavigator} from 'react-navigation-stack';
import {createAppContainer} from 'react-navigation';

import Home from './Screens/Home.js';
import Index from './Screens/Index.js';
import Register from './Screens/Register.js';
import Login from './Screens/Login.js';
import ServiceProvider from './Screens/Service_reg.js';
import BothRegister from './Screens/Both_reg.js';
import Registered from './Screens/Registered.js';


const AppNavigator = createStackNavigator({
home:Home,
index:Index,
register:Register,
login:Login,
serviceprovider:ServiceProvider,
bothregister:BothRegister,
registered:Registered,
},
{
  initialRouteName:'home',
  defaultNavigationOptions:{
    headerShown:false
  }
}
);

export default createAppContainer(AppNavigator);