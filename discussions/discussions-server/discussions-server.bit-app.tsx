import { NodeApp } from '@bitdev/node.node-app';

export default NodeApp.from({
  name: 'discussions-server',
  artifactName: 'discussion-service',
  mainPath: import.meta.resolve('./discussions-server.app-root.js'),
});
