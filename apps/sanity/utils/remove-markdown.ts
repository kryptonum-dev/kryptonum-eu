import { toPlainText } from "./to-plain-text";

export const removeMarkdown = (markdown: string): string => {
  if (!markdown) return '';
  if (typeof markdown !== 'string') markdown = toPlainText(markdown);
  return markdown.replace(/(\*{1,2})(.*?)\1/g, '$2');
};
