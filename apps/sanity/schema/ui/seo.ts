import { defineField, defineType } from "sanity"

export default defineType({
  name: 'seo',
  title: 'SEO',
  type: 'object',
  validation: Rule => Rule.required(),
  fields: [
    defineField({
      name: 'title',
      type: 'string',
      title: 'Tytuł',
      description:
        'Tytuł strony, który jest ważny ze względów SEO. Pojawia się np. w pasku przeglądarki oraz w wyszukiwarkach internetowych.',
      validation: Rule => [
        Rule.max(70).warning('Pole nie powinno być dłuższe niż 70 znaków.'),
        Rule.required()
      ],
    }),
    defineField({
      name: 'description',
      type: 'text',
      title: 'Opis',
      rows: 4,
      description:
        'Opis strony, który jest ważny ze względów SEO. Pojawia się np. w wyszukiwarkach internetowych oraz podczas udostępniania strony na mediach społecznościowych.',
      validation: Rule => [
        Rule.max(165).warning('Pole nie powinno być dłuższe niż 165 znaków.'),
        Rule.required()
      ],
    }),
    defineField({
      name: 'img',
      type: 'image',
      title: 'Social Share Image (opcjonalne)',
      description: 'Social Share Image to zdjęcie, które pojawia się np. podczas udostępniania linku w mediach społecznościowych. Można nadpisać zdjęcie dla poszczególnej podstrony. Jeśli to pole pozostanie puste automatycznie wyświeli się zdjęcie zdefiniowane w ustawieniach globalnych.',
    }),
  ],
});
