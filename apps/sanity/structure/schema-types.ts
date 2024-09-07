// UI Components
import cta from '../schema/ui/cta';
import seo from '../schema/ui/seo';
import PortableText from '../schema/ui/PortableText';
import Heading from '../schema/ui/PortableText/Heading';

// Components
import Components from '../schema/ui/Components';

// Single Types
import global from '../schema/singleTypes/global';
import redirects from '../schema/singleTypes/redirects';
import Index_Page from '../schema/singleTypes/Index_Page';

// Collections Types
import Faq_Collection from '../schema/collectionTypes/Faq_Collection';

export const singleTypes = [
  global,
  redirects,
  Index_Page,
];
const collectionTypes = [
  Faq_Collection,
];
const components = [
  Components,
];
const ui = [
  cta,
  seo,
  PortableText,
  Heading,
];

export const schemaTypes = [...singleTypes, ...collectionTypes, ...components, ...ui];
