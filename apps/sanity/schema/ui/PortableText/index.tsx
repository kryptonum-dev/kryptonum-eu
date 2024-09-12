import { defineField, defineType, useClient } from "sanity";
import { CustomInput } from "./CustomInput";
import { isValidUrl } from "../../../utils/is-valid-url";
import { InternalLinkableTypes } from "../../../structure/internal-linkable-types";

export default defineType({
  name: 'PortableText',
  type: 'array',
  title: 'Portable Text',
  components: {
    // @ts-ignore
    input: CustomInput
  },
  of: [{
    type: 'block',
    styles: [{ title: 'Normal', value: 'normal' }],
    lists: [
      { title: 'Bullet', value: 'bullet' },
      { title: 'Numbered', value: 'number' }
    ],
    marks: {
      decorators: [
        { title: 'Strong', value: 'strong' },
        { title: 'Emphasis', value: 'em' }
      ],
      annotations: [
        defineField({
          name: 'link',
          type: 'object',
          title: 'Link',
          icon: () => '🔗',
          fields: [
            defineField({
              name: 'type',
              type: 'string',
              title: 'Type',
              description: 'Choose "External" for links to websites outside your domain, or "Internal" for links to pages within your site.',
              options: {
                list: ['external', 'internal'],
                layout: 'radio',
                direction: 'horizontal',
              },
              initialValue: 'external',
            }),
            defineField({
              name: 'external',
              type: 'string',
              title: 'URL',
              description: 'Specify the full URL. Ensure it starts with "https://" and is a valid URL.',
              hidden: ({ parent }) => parent?.type !== 'external',
              validation: (Rule) => [
                Rule.custom((value, { parent }) => {
                  const type = (parent as { type?: string })?.type;
                  if (type === 'external') {
                    if (!value) return "URL is required";
                    if (!value.startsWith('https://')) {
                      return 'External link must start with the "https://" protocol';
                    }
                    if (!isValidUrl(value)) return 'Invalid URL';
                  }
                  return true;
                }),
              ],
            }),
            defineField({
              name: 'internal',
              type: 'reference',
              title: 'Internal reference to page',
              description: 'Select an internal page to link to.',
              to: InternalLinkableTypes,
              options: {
                disableNew: true,
                filter: 'defined(slug.current)',
              },
              hidden: ({ parent }) => parent?.type !== 'internal',
              validation: (rule) => [
                rule.custom((value, { parent }) => {
                  const type = (parent as { type?: string })?.type;
                  if (type === 'internal' && !value?._ref) return "You have to choose internal page to link to.";
                  return true;
                }),
              ],
            }),
          ]
        }),
      ]
    }
  }],
});
