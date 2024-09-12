import type { StructureResolver } from 'sanity/structure'
import { createSingleton } from './create-singleton';

export const structure: StructureResolver = (S) =>
  S.list()
    .id('root')
    .title('Zawartość')
    .items([
      createSingleton(S, "global"),
      createSingleton(S, "redirects"),
      S.divider(),
      createSingleton(S, "Index_Page"),
      S.divider(),
      S.documentTypeListItem("Faq_Collection"),
    ])
