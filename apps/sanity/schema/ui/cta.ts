import { defineField, defineType } from "sanity"

export default defineType({
  name: 'cta',
  type: 'object',
  title: 'Wezwanie do działania',
  icon: () => '🗣️',
  fields: [
    defineField({
      name: 'text',
      type: 'string',
      title: 'Tekst',
      validation: Rule => Rule.required(),
    }),
    defineField({
      name: 'href',
      type: 'string',
      title: 'Link',
      description: 'Link relatywny lub absolutny (wymagany protokół https://)',
      validation: Rule =>
        Rule.custom(value => {
          if (value && !value.startsWith('#') && !value.startsWith('/') && !value.startsWith('https://')) {
            return 'Nieprawidłowy adres URL.';
          }
          return true;
        }).required(),
    }),
  ],
  preview: {
    select: {
      title: 'text',
      subtitle: 'href',
    },
  },
});
