import { Text, View } from "react-native";
import React from 'react';
import {Image, StyleSheet} from 'react-native';
 
export default function Index() {
  const styles = StyleSheet.create({
    container: {
      flex: 1,
    },
    tinyLogo: {
      width: 500,
      height: 500,
    },
    logo: {
      width: 666,
      height: 500,
    },
  });
 
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text>Marley.</Text>
       <Image
        style={styles.logo}
        source={{
          uri: 'https://img.quizur.com/f/img602d1981bcc459.22896781.jpg?lastEdited=1613568387',
        }}
      />
     
    </View>
  );
}
 
 