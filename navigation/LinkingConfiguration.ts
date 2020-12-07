import * as Linking from "expo-linking";

export default {
  prefixes: [Linking.makeUrl("/")],
  config: {
    screens: {
      Root: {
        screens: {
          TabOne: {
            screens: {
              LoginScreen: "one",
            },
          },
          TabTwo: {
            screens: {
              RegisterScreen: "two",
            },
          },
        },
      },
      NotFound: "*",
    },
  },
};
