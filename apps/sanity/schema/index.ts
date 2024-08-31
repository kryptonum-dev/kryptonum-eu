import cta from './ui/cta';
import seo from './ui/seo';
import PortableText from './ui/PortableText';
import Heading from './ui/PortableText/Heading';
import { global } from './singleTypes/global';
import Index_Page from './singleTypes/Index_Page';
import Faq_Collection from './collectionTypes/Faq_Collection';

const ui = [
  cta,
  seo,
  PortableText,
  Heading,
];

const collectionTypes = [
  Faq_Collection,
];

const singleTypes = [
  global,
  Index_Page,
];

export const schemaTypes = [...ui, ...collectionTypes, ...singleTypes];
