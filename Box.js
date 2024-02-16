import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function Box() {
  return (
    <View style={styles.container}>
      <View style={styles.boxcontainer}>
        <View style={styles.box1}></View>
        <View style={styles.box1}></View>
        <View style={styles.box1}></View>
      </View>
      <View style={styles.boxcontainer}>
        <View style={styles.box1}></View>
        <View style={styles.box1}></View>
        <View style={styles.box1}></View>
        <View style={styles.box1}></View>
      </View>
      <View style={styles.boxcontainer}>
        <View style={styles.box1}></View>
        <View style={styles.box1}></View>
        <View style={styles.box1}></View>
        <View style={styles.box1}></View>
        <View style={styles.box1}></View>
      </View>
      <View style={styles.boxcontainer}>
        <View style={styles.box1}></View>
        <View style={styles.box1}></View>
        <View style={styles.box1}></View>
      </View>
      <View style={styles.boxcontainer}>
        <View style={styles.box1}></View>
        <View style={styles.box1}></View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 50,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
  },
  boxcontainer: {
    flexDirection: 'row',
    gap: 20,
    marginBottom: 30,
  },
  box1: {
    backgroundColor: 'red',
    height: 80,
    width: 80,
    borderRadius: 50,
  },
});
