import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack'
import LoginScreen from './Screens/Login';
import EmployeeList from './Screens/Home';
const NavigationStack = createStackNavigator({
    LoginScreen: { screen: LoginScreen },
    EmployeeList: { screen: EmployeeList},
});

const Container = createAppContainer(NavigationStack)
export default Container;