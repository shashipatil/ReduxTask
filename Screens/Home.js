import React from 'react';
import { StyleSheet, Text, View, FlatList } from 'react-native';
import { connect } from 'react-redux';

 class EmployeeList extends React.Component {

  FlatListItemSeparator = () => {
    return (
      <View
        style={{
          height: 1,
          width: "100%",
          backgroundColor: "#000",
        }}
      />
    );
  }

  render() {
    
    return (
      <View style={styles.container}>
       <FlatList
          data={this.props.reducer.user}
          showsVerticalScrollIndicator={false}
          ItemSeparatorComponent = { this.FlatListItemSeparator }
          renderItem={({item}) =>
          <View style={styles.flatview}>
            <Text style={styles.name}>Name:{item.name}</Text>
            <Text style={styles.email}>Gender:{item.gender}</Text>
            <Text style={styles.email}>Email:{item.email}</Text>
            <Text style={styles.email}>Age:{item.age}</Text>
            <Text style={styles.email}>Phone no:{item.phoneNo}</Text>
          </View>
          }
          keyExtractor={item => item.email}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 50,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  h2text: {
    marginTop: 10,
    fontFamily: 'Helvetica',
    fontSize: 36,
    fontWeight: 'bold',
  },
  flatview: {
    flex: 1,
    justifyContent: 'center',
    paddingTop: 10,
    borderRadius: 2,
  },
  name: {
    fontFamily: 'Verdana',
    fontSize: 18
  },
  email: {
    color: 'black'
  }
});

const mapStateToProps = (state) => {
  const { reducer } = state
  return { reducer }
};

export default connect(mapStateToProps)(EmployeeList);