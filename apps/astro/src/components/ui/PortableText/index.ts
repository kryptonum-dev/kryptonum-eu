import type { PortableTextProps } from 'astro-portabletext/types';

export { default } from './index.astro';
export type PortableTextValue = PortableTextProps['value']
export const PortableTextQuery = (name: string) => `
  ${name}[] {
    ...,
    markDefs[] {
      _type == "link" => {
        _type,
        _key,
        type,
        "href": select(type == "internal" => internal -> slug.current, type == "external" => external, "#"),
      },
    },
  },
`
