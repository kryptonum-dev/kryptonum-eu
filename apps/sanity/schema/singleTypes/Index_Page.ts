import { defineField, defineType } from "sanity"

export default defineType({
  name: 'Index_Page',
  type: 'document',
  title: 'Strona główna',
  icon: () => '🏠',
  fields: [
    // defineField({
    //   name: 'content',
    //   type: 'content',
    //   title: 'Komponenty podstrony',
    //   options: { collapsible: true },
    // }),
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
});
