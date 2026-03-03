import type { Alignment } from "../../types";
import type { Align } from "../../types/layout.types";

function aliasAlignment(align: Align): Alignment {
  if (align === "left") return "left";
  if (align === "right") return "right";
  if (align === "start") return "left";
  if (align === "end") return "right";
  return align;
}

export { aliasAlignment };
