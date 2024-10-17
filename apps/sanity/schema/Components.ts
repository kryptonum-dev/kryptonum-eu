import { defineType } from "sanity";
import SimpleCtaSection from "./components/SimpleCtaSection";
import Faq from "./components/Faq";
import TagsSection from "./components/TagsSection";
import MarqueePillSection from "./components/MarqueePillSection";
import HeaderGridIcons from "./components/HeaderGridIcons";
import SimpleHeaderWithImage from "./components/SimpleHeaderWithImage";

export default defineType({
  name: 'components',
  type: 'array',
  title: 'Components',
  of: [
    SimpleCtaSection,
    Faq,
    TagsSection,
    MarqueePillSection,
    HeaderGridIcons,
    SimpleHeaderWithImage,
  ],
  options: {
    insertMenu: {
      filter: true,
      showIcons: true,
      views: [
        { name: 'grid', previewImageUrl: (schemaTypeName) => `/static/${schemaTypeName}.webp` },
        { name: 'list' },
      ]
    }
  }
});
