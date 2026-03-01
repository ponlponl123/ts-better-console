"use client";
import React from "react";
import { twMerge } from "tailwind-merge";
import { CopyIcon } from "@phosphor-icons/react/dist/ssr";

function Code({
  codesnippets,
  classNames,
}: {
  classNames?: {
    container?: string;
    tabButton?: { active?: string; inactive?: string };
    content?: { active?: string; inactive?: string };
  };
  codesnippets: {
    title: string;
    icon?: React.ReactNode;
    code: React.ReactNode;
    snippet?: string;
  }[];
}) {
  const [selectedTab, setSelectedTab] = React.useState(0);
  const [copied, setCopied] = React.useState(false);

  const handleCopy = () => {
    const target =
      codesnippets[selectedTab].snippet || codesnippets[selectedTab].code;
    navigator.clipboard.writeText(target?.toString() || "").then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  };

  return (
    <div
      className={twMerge(
        "space-y-8 w-full border border-foreground/10 bg-background/10 backdrop-blur-sm backdrop-saturate-150 my-6",
        classNames?.container,
      )}
    >
      <div className="flex items-center justify-between border-b border-foreground/10 p-2 m-0!">
        <div
          className="flex-1 min-w-0 overflow-x-auto flex items-center gap-1"
          style={{
            scrollbarWidth: "thin",
          }}
        >
          {codesnippets.map((snippet, index) => (
            <button
              key={index}
              className={twMerge(
                "btn",
                selectedTab === index
                  ? "shadow-[inset_0_-8px_10px_-8px_rgba(59,130,246,1)] border-b-blue-500!"
                  : "",
                classNames?.tabButton?.active,
                selectedTab !== index ? classNames?.tabButton?.inactive : "",
              )}
              onClick={() => setSelectedTab(index)}
            >
              {snippet.icon}
              <span className="text-sm font-medium text-foreground/90 whitespace-nowrap">
                {snippet.title}
              </span>
            </button>
          ))}
        </div>
        <div>
          <button
            className={twMerge(
              "btn p-2! gap-1!",
              classNames?.tabButton?.active,
            )}
            onClick={handleCopy}
          >
            <CopyIcon size={16} />
            <span className="text-sm text-foreground/90 ml-1">
              {copied ? "Copied!" : "Copy"}
            </span>
          </button>
        </div>
      </div>
      <div
        className={twMerge(
          "p-4 w-full overflow-x-auto",
          classNames?.content?.active,
        )}
        style={{
          scrollbarWidth: "thin",
        }}
      >
        <pre
          className={twMerge(
            "text-sm text-foreground/90 whitespace-pre bg-transparent! p-0! m-0!",
            classNames?.content?.inactive,
          )}
        >
          {codesnippets[selectedTab].code}
        </pre>
      </div>
    </div>
  );
}

export default Code;
