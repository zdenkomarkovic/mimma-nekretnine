// Helper funkcija za konverziju PortableText u plain text
export function portableTextToPlainText(blocks: any[] | undefined): string {
  if (!blocks || !Array.isArray(blocks)) {
    return '';
  }

  return blocks
    .filter((block) => block._type === 'block')
    .map((block) => {
      if (!block.children) return '';
      return block.children
        .filter((child: any) => child._type === 'span')
        .map((child: any) => child.text)
        .join('');
    })
    .join(' ')
    .trim();
}
