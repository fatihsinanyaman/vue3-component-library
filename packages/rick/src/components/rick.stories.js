import { storiesOf } from "@storybook/vue3";
import Rick from "./index";

storiesOf("Rick", module).add("Rick Sanchez!", () => ({
  components: { Rick },
  template: `
      <rick />
    `,
}));
