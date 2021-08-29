import {
  getStorybookUI,
  configure,
  addDecorator,
} from "@storybook/react-native";
import {
  register as registerKnobs,
  withKnobs,
} from "@storybook/addon-ondevice-knobs";
import { register as registerActions } from "@storybook/addon-ondevice-actions";
import { loadStories } from "./storyLoader";

registerKnobs();
registerActions();

// import AsyncStorage from "@react-native-community/async-storage";

addDecorator(withKnobs);

// import stories
configure(() => {
  loadStories();
}, module);

const StorybookUIRoot = getStorybookUI({
  asyncStorage: null,
  host: "192.168.1.129", // replace this with your local ip address
  port: "7007",
});

export default StorybookUIRoot;
