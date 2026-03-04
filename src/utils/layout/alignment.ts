import type { Alignment } from "../../types";
import type { Align } from "../../types/layout.types";

/**
 * Normalizes alignment aliases to the canonical two-value form.
 * `"start"` becomes `"left"`, `"end"` becomes `"right"`,
 * and anything else passes through unchanged.
 *
 * Mostly useful internally so components can accept both `"start"`/`"end"`
 * and `"left"`/`"right"` without caring which one the caller used.
 *
 * Aliased as `aa` in the main export.
 */
function aliasAlignment(align: Align): Alignment {
  if (align === "left") return "left";
  if (align === "right") return "right";
  if (align === "start") return "left";
  if (align === "end") return "right";
  return align;
}

export { aliasAlignment };
