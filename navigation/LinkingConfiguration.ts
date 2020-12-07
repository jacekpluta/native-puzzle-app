<<<<<<< HEAD
import * as Linking from "expo-linking";

export default {
  prefixes: [Linking.makeUrl("/")],
=======
import * as Linking from 'expo-linking';

export default {
  prefixes: [Linking.makeUrl('/')],
>>>>>>> 3566f30ea85a8a827cda644e8ee9b34df28219c4
  config: {
    screens: {
      Root: {
        screens: {
<<<<<<< HEAD
          Login: {
            screens: {
              LoginScreen: "one",
            },
          },
          Register: {
            screens: {
              RegisterScreen: "two",
=======
          TabOne: {
            screens: {
              TabOneScreen: 'one',
            },
          },
          TabTwo: {
            screens: {
              TabTwoScreen: 'two',
>>>>>>> 3566f30ea85a8a827cda644e8ee9b34df28219c4
            },
          },
        },
      },
<<<<<<< HEAD
      NotFound: "*",
=======
      NotFound: '*',
>>>>>>> 3566f30ea85a8a827cda644e8ee9b34df28219c4
    },
  },
};
