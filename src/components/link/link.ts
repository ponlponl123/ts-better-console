/**
 * Makes clickable hyperlinks in terminals that support OSC 8 (most modern ones do).
 *
 * The user sees `text` but clicking it (or Ctrl+clicking in some terminals)
 * opens `url`. Falls back to plain text in terminals that don't support it.
 *
 * @example
 * ```ts
 * console.log(link("Open docs", "https://example.com"));
 * ```
 */
function link(text: string, url: string) {
  const ESC = "\u001b";
  const OSC = `${ESC}]`;
  const BEL = "\u0007";
  const SEP = ";";

  return `${OSC}8${SEP}${SEP}${url}${BEL}${text}${OSC}8${SEP}${SEP}${BEL}`;
}

export { link };
