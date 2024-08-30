import { defineType, PortableTextInputProps } from "sanity";
import styled from 'styled-components';

const Container = styled.div`
  [data-testid='pt-editor'][data-fullscreen='false'] {
    height: auto;
    min-height: 88px;
    max-height: 377px;
    .pt-editable {
      padding-bottom: 12px;
    }
  }
`
export const MarkdownInput = (props: PortableTextInputProps) => {
  return (
    <Container>
      {props.renderDefault({
        initialActive: true,
        ...props,
      })}
    </Container>
  );
};

export default defineType({
  name: 'markdown',
  type: 'array',
  title: 'Markdown',
  components: {
    // @ts-ignore
    input: MarkdownInput
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
