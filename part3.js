// import React from "react";
// import { StyleSheet, Text, View, TextInput, Button, Image } from "react-native";

// export default function App() {
//   return (
//     <View style={styles.container}>
//       <View style={styles.textContainer}>
//         <Text style={styles.Login}>Login here</Text>
//         <Text style={styles.welcome}>welcome back you've been missed!</Text>
//       </View>
//       <View>
//         <View style={styles.inputContainer}>
//           <TextInput placeholder="Email" />
//         </View>
//         <View style={styles.inputContainer}>
//           <TextInput placeholder="Password" />
//         </View>
//       </View>
//       <View>
//         <Text style={styles.forgotText}>Forgot your Password?</Text>
//       </View>
//       <View style={styles.button}>
//         <Button title="Sign up" color="blue" />
//       </View>
//       <View style={styles.textContainer}>
//         <Text style={styles.textCreate}>Create new account</Text>
//       </View>
//       <View style={styles.textContainer}>
//         <Text style={styles.textOrContinue}>Or Continue with</Text>
//       </View>

//       <View style={styles.imageContainer}>
//         <Image
//           source={require("./assets/facebook_icon.jpg")}
//           style={styles.image}
//         />
//         <Image
//           source={require("./assets/twitter_icon.jpg")}
//           style={styles.image}
//         />
//         <Image
//           source={require("./assets/whatsapp_icon.jpg")}
//           style={styles.image}
//         />
//       </View>
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: "white",
//     marginTop: 100,
//     marginHorizontal: 30,
//   },
//   textContainer: {
//     alignItems: "center",
//     marginBottom: 70,
//   },
//   Login: {
//     fontWeight: "bold",
//     fontSize: 25,
//     color: "blue",
//     marginVertical: 30,
//   },
//   welcome: {
//     fontWeight: "bold",
//     fontSize: 18,
//   },
//   inputContainer: {
//     borderWidth: 2,
//     borderColor: "blue",
//     padding: 10,
//     borderRadius: 10,
//     marginBottom: 30,
//   },
//   forgotText: {
//     fontSize: 16,
//     textAlign: "right",
//     color: "blue",
//     marginBottom: 20,
//   },
//   button: {
//     marginHorizontal: 10,
//     marginBottom: 30,
//   },
//   textCreate: {
//     fontSize: 16,
//     fontWeight: "bold",
//   },
//   textOrContinue: {
//     color: "blue",
//     fontSize: 16,
//   },
//   imageContainer: {
//     flexDirection: "row",
//     gap: 20,
//     justifyContent: "center",
//   },
//   image: {
//     width: 50,
//     height: 50,
//   },
// });
import React from "react";
import { StyleSheet, View, Text, TextInput, Button, Image } from "react-native";

const App = () => {
  return (
    <View style={styles.page}>
      <View style={{ alignItems: "center" }}>
        <Text style={{ fontSize: 25, color: "blue", fontWeight: "bold" }}>
          Create Account
        </Text>
        <Text
          style={{
            fontSize: 14,
            color: "black",
            textAlign: "center",
            marginTop: 5,
          }}
        >
          Create an account so you can explore all the existing jobs
        </Text>
      </View>

      <View>
        <View style={styles.inputContainer}>
          <TextInput placeholder="Email" />
        </View>

        <View style={styles.inputContainer}>
          <TextInput placeholder="Password" />
        </View>

        <View style={styles.inputContainer}>
          <TextInput placeholder="Confirm Password" />
        </View>
      </View>
      <View style={styles.button}>
        <Button title="Signup" color="blue" />
      </View>
      <Text style={styles.middleText}>Already have an Account</Text>
      <Text style={styles.blueText}>Or continue width</Text>
      <View style={styles.imagesContainer}>
        <Image
          source={require("./assets/facebook_icon.jpg")}
          style={styles.images}
        />
        <Image
          source={require("./assets/whatsapp_icon.jpg")}
          style={styles.images}
        />
        <Image
          source={require("./assets/twitter_icon.jpg")}
          style={styles.images}
        />
      </View>
    </View>
  );
};

export default App;

const styles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: "white",
    marginHorizontal: 20,
    marginTop: 70,
  },
  inputContainer: {
    height: 45,
    width: "100%",
    borderWidth: 2,
    borderRadius: 8,
    borderColor: "blue",
    paddingHorizontal: 15,
    justifyContent: "center",
    marginBottom: 20,
  },
  button: {
    marginHorizontal: 30,
  },
  middleText: {
    textAlign: "center",
    fontSize: 14,
    marginVertical: 50,
  },
  blueText: {
    textAlign: "center",
    fontSize: 13,
    color: "blue",
    fontWeight: "bold",
  },
  images: {
    width: 50,
    height: 50,
  },
  imagesContainer: {
    marginTop: 100,
    flexDirection: "row",
    gap: 20,
    justifyContent: "center",
  },
});
