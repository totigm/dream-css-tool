export function removeCSSComments(templateStringsArray) {
  const blockCommentRegex = /\/\*[\s\S]*?\*\//g;
  const lineCommentRegex = /\/\/.*/g;
  const leadingTrailingNewLineRegex = /^\n+|\n+$/g;

  const cleanedArray = templateStringsArray.map((element) =>
    element
      .replace(blockCommentRegex, '')
      .replace(lineCommentRegex, '')
      .replace(leadingTrailingNewLineRegex, '')
  );

  return cleanedArray;
}

export function interpolateProps(value, props) {
  const interpolatedValue =
    (typeof value === 'function' ? value(props) : value) || '';

  if (typeof interpolatedValue !== 'object') return interpolatedValue;

  const className = interpolatedValue?.props?.className;
  if (className) return '.' + className;

  return '';
}

export function formatCSSBlocks(css, className) {
  const subBlocksRegex = /&[^{]+{[^}]*}/g;
  const mainBlock = css.replace(subBlocksRegex, '').trim();

  const subBlocks = (css.match(subBlocksRegex) || [])
    .join('\n')
    .replaceAll('&', '.' + className)
    .trim();

  return `.${className} { ${mainBlock} }\n${subBlocks}`;
}

function normalizeCSS(css) {
  return css
    .replace(/\s+/g, ' ') // Reemplaza cualquier secuencia de espacios en blanco con un solo espacio
    .trim(); // Elimina espacios al inicio y al final
}

export function findExistingStyle(stylesArray, css) {
  return stylesArray.find((style) => {
    const cssContentRegex = /{\s*([^}]*)\s*}/;
    const match = style.css.match(cssContentRegex);

    const cssContent = match ? normalizeCSS(match[1]) : '';

    return cssContent === normalizeCSS(css);
  });
}
