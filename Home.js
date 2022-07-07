import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import { Card, Button } from 'react-native-elements';
import Icons from './Icons.js';
import Bar  from './Bar.js';

const getEmail = async (props) => {
  const email = await fetch('https://dev.stedi.me/validate'+ props.userToken)
  return email
}
const Home = () => {
  return (
    <View>
      <Bar loggedInUser='poteramalcolm@gmail.com' />
      <Icons />
    </View>
  );
};

export default Home;
