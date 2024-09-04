import { defineField, defineType } from "sanity"
import { slugList } from "../../structure/slug-list";

const name = 'Index_Page';
const title = 'Homepage';
const slug = slugList[name];

export default defineType({
  name: name,
  type: 'document',
  title: title,
  icon: () => '🏠',
  fields: [
    defineField({
      name: 'components',
      type: 'components',
      title: 'Page Components',
    }),
    defineField({
      name: 'seo',
      type: 'seo',
      title: 'SEO',
      group: 'seo',
    }),
  ],
  groups: [
    {
      name: 'seo',
      title: 'SEO',
    },
  ],
  preview: {
    prepare: () => ({
      title: title,
      subtitle: slug
    })
  }
});
