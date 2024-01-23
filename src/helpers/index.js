export function removeCSSComments(templateStringsArray) {
  const blockCommentRegex = /\/\*[\s\S]*?\*\//g;
  const lineCommentRegex = /\/\/.*/g;
  const leadingTrailingNewLineRegex = /^\n+|\n+$/g;

  const cleanedArray = templateStringsArray.map((element) => {
    return element
      .replace(blockCommentRegex, '')
      .replace(lineCommentRegex, '')
      .replace(leadingTrailingNewLineRegex, '');
  });

  return cleanedArray;
}
