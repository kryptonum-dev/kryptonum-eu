// UI Components
import cta from '../schema/ui/cta';
import seo from '../schema/ui/seo';
import PortableText from '../schema/ui/PortableText';
import Heading from '../schema/ui/PortableText/Heading';

// Components
import Components from '../schema/ui/Components';

// Single Types
import { global } from '../schema/singleTypes/global';
import Index_Page from '../schema/singleTypes/Index_Page';

// Collections Types
import Faq_Collection from '../schema/collectionTypes/Faq_Collection';

const ui = [
  cta,
  seo,
  PortableText,
  Heading,
];

const components = [
  Components,
];

const collectionTypes = [
  Faq_Collection,
];

export const singleTypes = [
  global,
  Index_Page,
];

export const schemaTypes = [...ui, ...components, ...collectionTypes, ...singleTypes];
