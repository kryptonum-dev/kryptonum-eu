// Single Types
import global from '../schema/singleTypes/global';
import redirects from '../schema/singleTypes/redirects';
import Index_Page from '../schema/singleTypes/Index_Page';

const singleTypes = [
  global,
  redirects,
  Index_Page,
];

// Collections Types
import BlogPost_Collection from '../schema/collectionTypes/BlogPost_Collection';
import BlogCategory_Collection from '../schema/collectionTypes/BlogCategory_Collection';
import TeamMember_Collection from '../schema/collectionTypes/TeamMember_Collection';
import Review_Collection from '../schema/collectionTypes/Review_Collection';
import CaseStudy_Collection from '../schema/collectionTypes/CaseStudy_Collection';
import Faq_Collection from '../schema/collectionTypes/Faq_Collection';

const collectionTypes = [
  BlogPost_Collection,
  BlogCategory_Collection,
  TeamMember_Collection,
  Review_Collection,
  CaseStudy_Collection,
  Faq_Collection,
];

// Components
import Components from '../schema/Components';

const components = [
  Components,
];

// UI Components
import cta from '../schema/ui/cta';
import seo from '../schema/ui/seo';
import PortableText from '../schema/ui/portable-text';
import Heading from '../schema/ui/portable-text/Heading';

const ui = [
  cta,
  seo,
  PortableText,
  Heading,
];

export const schemaTypes = [...singleTypes, ...collectionTypes, ...components, ...ui];

export const singletonActions = new Set(["publish", "discardChanges", "restore"]);
export const singletonTypes = new Set(singleTypes.map(type => type.name as string));
