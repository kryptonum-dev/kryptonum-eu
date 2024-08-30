import cta from './ui/cta';
import seo from './ui/seo';
import markdown from './ui/Markdown';
import { global } from './singleTypes/global';
import Index_Page from './singleTypes/Index_Page';
import Faq_Collection from './collectionTypes/Faq_Collection';

const ui = [
  cta,
  seo,
  markdown,
];

const collectionTypes = [
  Faq_Collection,
];

const singleTypes = [
  global,
  Index_Page,
];

export const schemaTypes = [...ui, ...collectionTypes, ...singleTypes];
