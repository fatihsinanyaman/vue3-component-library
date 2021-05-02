import { storiesOf } from "@storybook/vue3";
import Sandbox from "./index";

var items = [
  ["Yair Lamb", "yair.lamb@email.com"],
  ["Leonardo Payne", "leonardo.payne@email.com"],
  ["Carl Henson", "carl.henson@email.com"],
  ["Jensen Combs", "jensen.combs@email.com"],
  ["Amiah Burton", "amiah.burton@email.com"],
  ["Yaretzi Mayo", "yaretzi.mayo@email.com"],
  ["Kamren Huffman", "kamren.huffman@email.com"],
];

storiesOf("Sandbox", module).add("with 7 items", () => ({
  components: { Sandbox },
  template: `
      <sandbox />
    `,
  data: () => ({
    items,
  }),
}));
