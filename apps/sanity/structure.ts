import type { StructureResolver, StructureBuilder } from 'sanity/structure'
import { schemaTypes } from "./schema";

export const singletonActions = new Set(["publish", "discardChanges", "restore"]);
export const singletonTypes = new Set(["global"]);

export const createSingleton = (S: StructureBuilder, name: string) => {
  const { title, icon } = schemaTypes.find(item => item.name === name) as { title: string, icon: React.ReactNode };
  return S.listItem()
    .id(name)
    .title(title)
    .icon(icon)
    .child(S.document().title(title).schemaType(name).documentId(name));
};

export const structure: StructureResolver = (S) =>
  S.list()
    .id('root')
    .title('Zawartość')
    .items([
      createSingleton(S, "global"),
      S.divider(),
      createSingleton(S, "Index_Page"),
      S.divider(),
      S.documentTypeListItem("Faq_Collection"),
    ])
