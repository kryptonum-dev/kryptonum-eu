import { definePlugin } from 'sanity'
import { DOMAIN } from './global/constants';

export default definePlugin({
  name: 'Production URL',
  document: {
    productionUrl: async (_, { document }) => {
      const slug = document?.slug as { current: string };
      if (slug?.current) return `${DOMAIN}${slug.current}`;
      return;
    }
  }
})
