import type { StructureResolver, StructureBuilder } from 'sanity/structure'
import { Iframe, type IframeProps } from 'sanity-plugin-iframe-pane'
import { schemaTypes, singleTypes } from "./schema-types";
import { PREVIEW_DEPLOYMENT_DOMAIN } from '../constants';
import { slugList } from './slug-list';

export const singletonActions = new Set(["publish", "discardChanges", "restore"]);
export const singletonTypes = new Set(singleTypes.map(type => type.name as string));

const Preview = ({ document, documentId }: { document: IframeProps['document'], documentId: string }) => {
  const slug = slugList[documentId as keyof typeof slugList];
  if (!slug) return <div style={{ padding: '1rem' }}>🛑 Preview not available: The slug is missing</div>;
  return <Iframe
    document={document}
    options={{
      url: `${PREVIEW_DEPLOYMENT_DOMAIN}${slug}`,
      reload: { button: true }
    }} />
}

const typesToExcludePreview = ['global', 'redirects'];

export const createSingleton = (S: StructureBuilder, name: string) => {
  const { title, icon } = schemaTypes.find(item => item.name === name) as { title: string, icon: React.ReactNode };
  return S.listItem()
    .id(name)
    .title(title)
    .icon(icon)
    .child(documentId =>
      S.document()
        .documentId(documentId)
        .schemaType(name)
        .title(title)
        .views([
          S.view.form().title('Editor').icon(() => '🖋️'),
          ...(!typesToExcludePreview.includes(name) ? [
            S.view
              .component(Preview)
              .title('Preview')
              .icon(() => '👀')
          ] : []),
        ])
    )
};

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
