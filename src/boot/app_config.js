import { createManager } from '@vue-youtube/core';

export default ({ app }) => {
  app.use(createManager());
};
