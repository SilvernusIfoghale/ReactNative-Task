import React from 'react';
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  TextInput,
  View,
} from 'react-native';

export default function Facebook() {
  return (
    <View style={styles.container}>
      <View style={styles.titleView}>
        <Text style={styles.titleText}>Join Facebook</Text>
      </View>
      <View>
        <Text style={styles.mainText}>What's your name?</Text>
        <Text style={styles.subText}>Enter the name you use in real life.</Text>
      </View>
      <View style={styles.formView}>
        <View style={styles.viewContainer}>
          <Text style={styles.formText}>First name</Text>
          <TextInput style={styles.input} />
        </View>
        <View style={styles.viewContainer}>
          <Text style={styles.formText}>Last name</Text>
          <TextInput style={styles.input} />
        </View>
      </View>
      <View>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Next</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.footer}>
        <Text style={styles.footerText}>Already have an account?</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    padding: 45,
  },
  titleView: {
    marginVertical: 30,
    paddingVertical: 10,
    borderBottomColor: 'black',
    borderBottomWidth: 1,
  },
  titleText: {
    textAlign: 'center',
    fontSize: 28,
    fontWeight: 'bold',
  },
  mainText: {
    fontSize: 40,
    marginVertical: 10,
    textAlign: 'center',
    fontWeight: 'bold',
  },
  subText: {
    textAlign: 'center',
    fontSize: 28,
    color: 'silver',
    fontWeight: 'bold',
    marginBottom: 25,
  },
  formView: {
    flexDirection: 'row',
  },
  viewContainer: {
    padding: 10,
    width: '50%',
  },
  input: {
    alignItems: 'center',
    borderWidth: 2,
    borderColor: 'silver',
    borderRadius: 5,
    width: '100%',
    padding: 10,
    marginBottom: 30,
  },
  formText: {
    fontSize: 23,
    fontWeight: 'bold',
  },
  button: {
    backgroundColor: 'blue',
    padding: 11,
    borderRadius: 10,
    marginHorizontal: 20,
  },
  buttonText: {
    fontSize: 28,
    fontWeight: 'bold',
    textAlign: 'center',
    color: 'white',
  },
  footer: {
    height: '60%',
    alignItems: 'flex-end',
    justifyContent: 'flex-end',
  },
  footerText: {
    color: 'blue',
    fontSize: 20,
    textAlign: 'center',
  },
});
