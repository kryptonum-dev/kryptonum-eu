import { defineType } from "sanity";
import SimpleCtaSection from "./components/SimpleCtaSection";
import Faq from "./components/Faq";
import TagsSection from "./components/TagsSection";
import MarqueePillSection from "./components/MarqueePillSection";
import HeaderGridIcons from "./components/HeaderGridIcons";
import SimpleHeaderWithImage from "./components/SimpleHeaderWithImage";
import SplitScreenCtaSection from "./components/SplitScreenCtaSection";
import OverlappingCircles from "./components/OverlappingCircles";
import PillCtaSection from "./components/PillCtaSection";
import StackImagesWithCtaAndAvatars from "./components/StackImagesWithCtaAndAvatars";
import ImageAndNumberedList from "./components/ImageAndNumberedList";
import SkillsAndLinks from "./components/SkillsAndLinks";
import ContactInfo from "./components/ContactInfo";
import SimpleTextSection from "./components/SimpleTextSection";
import AvailabilityStatus from "./components/AvailabilityStatus";
import GroupedElements from "./components/GroupedElements";
import SimpleCtaColumnWithMedia from "./components/SimpleCtaColumnWithMedia";
import TeamSpotlight from "./components/TeamSpotlight";
import PerformanceHighlights from "./components/PerformanceHighlights";
import RichListAndCtaBox from "./components/RichListAndCtaBox";
import NarrowHeaderAndMedia from "./components/NarrowHeaderAndMedia";

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
    SplitScreenCtaSection,
    OverlappingCircles,
    PillCtaSection,
    StackImagesWithCtaAndAvatars,
    ImageAndNumberedList,
    SkillsAndLinks,
    ContactInfo,
    SimpleTextSection,
    AvailabilityStatus,
    GroupedElements,
    SimpleCtaColumnWithMedia,
    TeamSpotlight,
    PerformanceHighlights,
    RichListAndCtaBox,
    NarrowHeaderAndMedia,
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
