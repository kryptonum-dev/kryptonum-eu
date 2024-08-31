import { defineType } from "sanity";
import { CustomInput } from "./CustomInput";

export default defineType({
  name: 'PortableText',
  type: 'array',
  title: 'Portable Text',
  components: {
    // @ts-ignore
    input: CustomInput
  },
  of: [{
    type: 'block',
    styles: [{ title: 'Normal', value: 'normal' }],
    lists: [
      { title: 'Bullet', value: 'bullet' },
      { title: 'Numbered', value: 'number' }
    ],
    marks: {
      decorators: [
        { title: 'Strong', value: 'strong' },
        { title: 'Emphasis', value: 'em' }
      ],
    }
  }],
});
