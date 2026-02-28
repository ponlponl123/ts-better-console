import Link from "next/link";
import { HeartIcon } from "@phosphor-icons/react/dist/ssr";

function Footer() {
  return (
    <footer className="apply-transition">
      <div className="w-full max-w-6xl px-4 py-8 mx-auto text-center flex max-md:flex-col items-center justify-center text-sm text-gray-600 gap-2">
        <div className="flex items-center gap-1">
          <Link
            href="https://github.com/ponlponl123/ts-better-console"
            target="_blank"
            className="hover:text-foreground"
          >
            ts-better-console
          </Link>
          <span>is under MIT License</span>
        </div>
        <span className="max-md:hidden">•</span>
        <div className="flex items-center gap-1">
          Made with{" "}
          <HeartIcon
            alt="❤️"
            weight="fill"
            size={16}
            className="inline-block"
          />{" "}
          by{" "}
          <Link
            href="https://github.com/ponlponl123"
            target="_blank"
            className="hover:text-foreground"
          >
            ponlponl123
          </Link>
        </div>
        <span className="max-md:hidden">•</span>
        <Link
          href="https://buymeacoffee.com/ponlponl123"
          target="_blank"
          className="hover:text-foreground"
        >
          Buy me a coffee
        </Link>
      </div>
    </footer>
  );
}

export default Footer;
