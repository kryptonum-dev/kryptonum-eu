import { defineConfig } from 'sanity'
import { structure, singletonActions, singletonTypes } from './structure'
import { schemaTypes } from './schema'
import { structureTool } from 'sanity/structure'
import { media } from 'sanity-plugin-media'
import { visionTool } from '@sanity/vision'

export default defineConfig({
  name: 'default',
  title: 'kryptonum-eu',

  projectId: 'iu4zjh9q',
  dataset: 'production',

  plugins: [
    structureTool({ structure }),
    media(),
    visionTool(),
  ],

  schema: {
    types: schemaTypes,
    templates: (templates) =>
      templates.filter(({ schemaType }) => !singletonTypes.has(schemaType)),
  },

  document: {
    actions: (input, context) =>
      singletonTypes.has(context.schemaType)
        ? input.filter(({ action }) => action && singletonActions.has(action))
        : input,
  },
})
