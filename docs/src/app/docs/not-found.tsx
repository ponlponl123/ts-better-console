import { ArrowLeftIcon, XIcon } from "@phosphor-icons/react/dist/ssr";
import Link from "next/link";

export default function DocsNotFound() {
  return (
    <div className="flex flex-1 h-full items-center justify-center">
      <div className="flex flex-col items-center gap-4">
        <XIcon weight="bold" size={48} />
        <h1 className="text-2xl font-bold">Page Not Found</h1>
        <p className="text-foreground/70">
          This documentation page does not exist.
        </p>
        <Link href="/docs">
          <button className="btn font-sans">
            <ArrowLeftIcon size={16} /> Back to Docs
          </button>
        </Link>
      </div>
    </div>
  );
}
