import { defineField, defineType } from "sanity";
import { removeMarkdown } from "../../utils/remove-markdown";

const title = 'Zbiór elementów FAQ';
const icon = () => '❓';

export default defineType({
  name: 'Faq_Collection',
  type: 'document',
  title,
  icon,
  fields: [
    defineField({
      name: 'question',
      type: 'markdown',
      title: 'Pytanie',
      validation: Rule => Rule.required(),
    }),
    defineField({
      name: 'answer',
      type: 'markdown',
      title: 'Odpowiedź',
      validation: Rule => Rule.required(),
    }),
  ],
  preview: {
    select: {
      title: 'question',
      subtitle: 'answer',
    },
    prepare: ({ title, subtitle }) => ({
      title: removeMarkdown(title),
      subtitle: removeMarkdown(subtitle),
      icon,
    }),
  },
});
