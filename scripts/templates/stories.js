module.exports = ({packageName}) => {
    return `import { storiesOf } from "@storybook/vue3";
import ${packageName} from "./index";

storiesOf("${packageName}", module).add("${packageName}!", () => ({
  components: { ${packageName} },
  template: \`
      <${packageName} />
    \`,
}));

    `;
} 