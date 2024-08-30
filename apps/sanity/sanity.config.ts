import { defineConfig } from 'sanity'
import { structureTool } from 'sanity/structure'
import { media } from 'sanity-plugin-media'
import { visionTool } from '@sanity/vision'
import { schemaTypes } from './schemaTypes'

export default defineConfig({
  name: 'default',
  title: 'kryptonum-eu',

  projectId: 'iu4zjh9q',
  dataset: 'production',

  plugins: [
    structureTool(),
    media(),
    visionTool(),
  ],

  schema: {
    types: schemaTypes,
  },
})
