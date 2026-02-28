import { ArrowLeftIcon, XIcon } from "@phosphor-icons/react/dist/ssr";
import Link from "next/link";

function NotFound() {
  return (
    <div className="flex min-h-[calc(100vh-5rem)] items-center justify-center font-sans">
      <main className="flex min-h-[calc(100vh-5rem)] w-full max-w-6xl flex-col items-center justify-between py-32 px-16 sm:items-start">
        <XIcon weight="bold" size={48} />
        <div>
          <h1 className="text-4xl font-bold">404 - Not Found</h1>
          <p className="text-lg mt-4">
            The page you are looking for does not exist.
          </p>
        </div>
        <div className="flex items-center gap-4">
          <Link href="/">
            <button className="btn font-sans">
              <ArrowLeftIcon size={16} /> Go Home
            </button>
          </Link>
        </div>
      </main>
    </div>
  );
}

export default NotFound;
