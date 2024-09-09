import { BrowserRouter } from 'react-router-dom';
import { 
  createRoot, 
  // hydrateRoot 
} from 'react-dom/client';
import { MyProjectWeb } from "./my-project-web.js";
import { AcmeApolloProvider } from './apollo-provider.js';

/**
 * comment this in for server-side rendering (ssr) and comment 
 * out of the root.render() invocation below.
*/
// hydrateRoot(
//   document.getElementById("root") as HTMLElement,
//   <BrowserRouter>
//     <MyProjectWeb />
//   </BrowserRouter>
// );

if (import.meta.hot) {
  import.meta.hot.accept();
}

/**
 * mounting for client side rendering.
 */
const container = document.getElementById('root');
const root = createRoot(container!);

root.render(
  <BrowserRouter>
    <AcmeApolloProvider>
      <MyProjectWeb />
    </AcmeApolloProvider>
  </BrowserRouter>
);
