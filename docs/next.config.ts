import type { NextConfig } from "next";
import packageJson from "../package.json";

const isProd = process.env.NODE_ENV === "production";

const nextConfig: NextConfig = {
  output: "export",
  basePath: isProd ? "/ts-better-console" : "",
  env: {
    NEXT_PUBLIC_VERSION: packageJson.version,
  },
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
