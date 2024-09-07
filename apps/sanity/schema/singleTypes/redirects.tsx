import { defineField, defineType } from 'sanity';
import { Box, Text, Tooltip } from '@sanity/ui';

export default defineType({
  name: 'redirects',
  type: 'document',
  title: 'Redirects',
  description: 'Redirects are used to redirect users to a different page. This is useful for SEO purposes.',
  icon: () => '🔀',
  fields: [
    defineField({
      name: 'redirects',
      type: 'array',
      of: [
        defineField({
          name: 'redirect',
          type: 'object',
          fields: [
            defineField({
              name: 'source',
              type: 'slug',
              validation: Rule => Rule.required().custom(value => {
                if (!value || !value.current) return "The value can't be blank";
                if (!value.current.startsWith("/")) {
                  return "The path must start with a /";
                }
                return true;
              })
            }),
            defineField({
              name: 'destination',
              type: 'slug',
              validation: Rule => Rule.required().custom((value) => {
                if (!value || !value.current) return "The value can't be blank";
                if (value.current.startsWith("/")) {
                  return true;
                }
                if (value.current.startsWith("https://")) {
                  try {
                    new URL(value.current);
                    return true;
                  } catch (error) {
                    return "Invalid URL format";
                  }
                }
                return "The path must be a relative path (starts with /) or a valid external URL (starts with https://)";
              })
            }),
            defineField({
              name: 'isPermanent',
              type: 'boolean',
              initialValue: true,
            }),
          ],
          preview: {
            select: {
              source: 'source.current',
              destination: 'destination.current',
              isPermanent: 'isPermanent',
            },
            prepare({ source, destination, isPermanent }) {
              return {
                title: `Source: ${source}`,
                subtitle: `Destination: ${destination}`,
                media: () => <Tooltip
                  content={
                    <Box padding={1}>
                      <Text size={1}>
                        {isPermanent ? '🔒 Permanent' : '🔄 Temporary'}
                      </Text>
                    </Box>
                  }
                  placement="top"
                  portal
                >
                  <span>
                    {isPermanent ? '🔒' : '🔄'}
                  </span>
                </Tooltip>
              }
            }
          },
        })
      ]
    })
  ],
  preview: {
    prepare: () => ({
      title: 'Redirects',
    })
  }
})

