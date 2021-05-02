import { storiesOf } from "@storybook/vue3";
import Morty from "./index";

storiesOf("Morty", module).add("Morty!", () => ({
  components: { Morty },
  template: `
      <morty />
    `,
}));

    