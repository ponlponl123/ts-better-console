import React from "react";
import { twMerge } from "tailwind-merge";

function Image(props: React.ImgHTMLAttributes<HTMLImageElement>) {
  return (
    <div className="rounded-2xl p-2 overflow-hidden border-2 border-foreground/10">
      <img {...props} className={twMerge("rounded-xl", props.className)} />
    </div>
  );
}

export default Image;
