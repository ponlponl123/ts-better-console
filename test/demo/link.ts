import betterConsole, { link } from "../../src";

betterConsole.log(link("Visit GitHub", "https://github.com"));

// Combine with styled text
betterConsole.log("Check out", link("the docs", "https://example.com/docs"));
