import type { StructureBuilder } from 'sanity/structure'
import { Iframe, type IframeProps } from 'sanity-plugin-iframe-pane'
import { schemaTypes } from "./schema-types";
import { PREVIEW_DEPLOYMENT_DOMAIN } from '../constants';

const Preview = ({ document }: { document: IframeProps['document'] }) => {
  const slug = (document.displayed.slug as { current?: string })?.current;
  if (!slug) return <div style={{ padding: '1rem' }}>🛑 Preview not available: The slug is missing</div>;
  return <Iframe
    document={document}
    options={{
      url: `${PREVIEW_DEPLOYMENT_DOMAIN}${slug}`,
      reload: { button: true }
    }} />
}

const TYPES_TO_EXCLUDE_PREVIEWS = ['global', 'redirects'];

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
          ...(!TYPES_TO_EXCLUDE_PREVIEWS.includes(name) ? [
            S.view
              .component(Preview)
              .title('Preview')
              .icon(() => '👀')
          ] : []),
        ])
    )
};
