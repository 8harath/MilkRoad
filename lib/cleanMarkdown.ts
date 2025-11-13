export function cleanMarkdownContent(content: string): string {
  let cleaned = content;

  // Remove orphaned social media link markers (lines with just "]" or "](url)")
  cleaned = cleaned.replace(/^\]\s*$/gm, '');
  cleaned = cleaned.replace(/^\]\([^)]+\)\s*$/gm, '');

  // Remove empty link patterns at the start of paragraphs
  cleaned = cleaned.replace(/^\s*\]\([^)]*\)\[/gm, '');

  // Remove orphaned link brackets
  cleaned = cleaned.replace(/\]\(\s*\)\[/g, '');

  // Clean up multiple consecutive empty lines (more than 2)
  cleaned = cleaned.replace(/\n{4,}/g, '\n\n\n');

  return cleaned;
}
