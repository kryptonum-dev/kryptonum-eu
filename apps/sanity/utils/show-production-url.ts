import { definePlugin } from 'sanity'
import { DOMAIN } from '../constants';
import { slugList } from '../structure/slug-list';

export const showProductionUrl = definePlugin({
  name: 'Production URL',
  document: {
    productionUrl: async (_, { document: { _type } }) => {
      const slug = slugList[_type as keyof typeof slugList];
      if (!slug) return;
      return `${DOMAIN}${slug}`;
    }
  }
})
