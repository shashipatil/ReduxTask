import React from 'react';
import { View, Text, TouchableOpacity, TextInput, StyleSheet } from 'react-native';
import { connect } from 'react-redux';

 class Login extends React.Component {
  state = {
    email: '',
    password: '',
    errorText: ''
 }

 handleEmail = (text) => {
    this.setState({ email: text })
    this.setState({ errorText: '' })
 }

 handlePassword = (text) => {
    this.setState({ password: text })
    this.setState({ errorText: '' })
 }

 login = (email, pass) => {
  if(email=== '')
  {
   this.setState({ errorText: 'email cannot be empty' })
  }

  else if(pass=== '')
  {
   this.setState({ errorText: 'password cannot be empty' })
  }

  else if(email== this.props.reducer.login.username && pass=== this.props.reducer.login.password){
    this.props.navigation.navigate('EmployeeList');
  } else {
   this.setState({ errorText: 'email or password not correct' })
    }
 } 

  render() {
    return (
      <View style = {styles.container}>
        <Text style={{fontSize:20,marginTop:20, textAlign:'center'}}>Redux Example</Text>
        <View style={{marginTop:80}}>
        <Text style={{color:'red',textAlign:'left', margin: 15}}>{this.state.errorText}</Text>
            <TextInput style = {styles.input}
               underlineColorAndroid = "transparent"
               placeholder = "Email"
               placeholderTextColor = "#9a73ef"
               autoCapitalize = "none"
               onChangeText = {this.handleEmail}/>
            
            <TextInput style = {styles.input}
               underlineColorAndroid = "transparent"
               placeholder = "Password"
               placeholderTextColor = "#9a73ef"
               autoCapitalize = "none"
               secureTextEntry={true}
               onChangeText = {this.handlePassword}/>
            
            <TouchableOpacity
               style = {styles.submitButton}
               onPress = {
                  () => this.login(this.state.email, this.state.password)
               }>
               <Text style = {styles.submitButtonText}> Login </Text>
            </TouchableOpacity>
            </View>
         </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 23
 },
 input: {
    margin: 15,
    height: 40,
    borderColor: '#7a42f4',
    borderWidth: 1
 },
 submitButton: {
    backgroundColor: '#7a42f4',
    padding: 10,
    margin: 15,
    height: 40,
 },
 submitButtonText:{
    color: 'white',
    textAlign: 'center',
 }
});

const mapStateToProps = (state) => {
  const { reducer } = state
  return { reducer }
};

export default connect(mapStateToProps)(Login);