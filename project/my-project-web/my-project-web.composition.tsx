import { MockProvider } from '@acme/acme.testing.mock-provider';
import { MyProjectWeb } from "./my-project-web.js";
    
export const MyProjectWebBasic = () => {
  return (
    // create an env to apply providers on all of your compositions
    // learn more: https://bit.dev/docs/react-env/component-previews
    <MockProvider noTheme>
      <MyProjectWeb />
    </MockProvider>
  );
}
