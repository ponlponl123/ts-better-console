function link(text: string, url: string) {
  const ESC = "\u001b";
  const OSC = `${ESC}]`;
  const BEL = "\u0007";
  const SEP = ";";

  return `${OSC}8${SEP}${SEP}${url}${BEL}${text}${OSC}8${SEP}${SEP}${BEL}`;
}

export { link };
