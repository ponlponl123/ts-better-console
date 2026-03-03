import { Card, CardOptions, SectionOptions } from "../src";

const titleFooterTemplate: CardOptions = {
  title: {
    content: "My Card Title" as string,
    style: { color: "cyan", styles: ["bold"] },
  } as SectionOptions,
  footer: {
    content: "v1.0.0",
    style: { color: "gray" },
  } as SectionOptions,
};

const card = new Card("Hello, World!", undefined, {
  ...titleFooterTemplate,
  body: {
    align: "left",
  },
  title: undefined,
  footer: undefined,
  align: "left",
}).render();
const card2 = new Card("Hello, World!", undefined, {
  ...titleFooterTemplate,
  body: {
    align: "center",
  },
  title: undefined,
  footer: undefined,
  align: "center",
}).render();
const card3 = new Card("Hello, World!", undefined, {
  ...titleFooterTemplate,
  body: {
    align: "right",
  },
  title: undefined,
  footer: undefined,
  align: "right",
}).render();
console.log(card);
console.log(card2);
console.log(card3);

// align content
const card4 = new Card("Hello, World!", undefined, {
  ...titleFooterTemplate,
  body: {
    align: "center",
  },
  title: undefined,
  footer: {
    ...titleFooterTemplate.footer,
    align: "right",
    content: (titleFooterTemplate.footer as SectionOptions).content,
  },
  align: "left",
}).render();
const card5 = new Card("Hello, World!", undefined, {
  ...titleFooterTemplate,
  body: {
    align: "center",
  },
  title: undefined,
  footer: {
    ...titleFooterTemplate.footer,
    align: "center",
    content: (titleFooterTemplate.footer as SectionOptions).content,
  },
  align: "center",
}).render();
const card6 = new Card("Hello, World!", undefined, {
  ...titleFooterTemplate,
  body: {
    align: "center",
  },
  title: undefined,
  footer: {
    ...titleFooterTemplate.footer,
    align: "left",
    content: (titleFooterTemplate.footer as SectionOptions).content,
  },
  align: "right",
}).render();
const card7 = new Card("Hello, World!", undefined, {
  ...titleFooterTemplate,
  body: {
    align: "right",
  },
  title: {
    ...titleFooterTemplate.title,
    align: "center",
    content: (titleFooterTemplate.title as SectionOptions).content,
  },
  footer: {
    ...titleFooterTemplate.footer,
    align: "left",
    content: (titleFooterTemplate.footer as SectionOptions).content,
  },
  align: "left",
}).render();
const card8 = new Card("Hello, World!", undefined, {
  ...titleFooterTemplate,
  body: {
    align: "right",
  },
  title: {
    ...titleFooterTemplate.title,
    align: "right",
    content: (titleFooterTemplate.title as SectionOptions).content,
  },
  footer: {
    ...titleFooterTemplate.footer,
    align: "right",
    content: (titleFooterTemplate.footer as SectionOptions).content,
  },
  align: "center",
}).render();
const card9 = new Card("Hello, World!", undefined, {
  ...titleFooterTemplate,
  body: {
    align: "right",
  },
  title: {
    ...titleFooterTemplate.title,
    align: "left",
    content: (titleFooterTemplate.title as SectionOptions).content,
  },
  footer: {
    ...titleFooterTemplate.footer,
    align: "center",
    content: (titleFooterTemplate.footer as SectionOptions).content,
  },
  align: "right",
}).render();
console.log(card4);
console.log(card5);
console.log(card6);
console.log(card7);
console.log(card8);
console.log(card9);

const card10 = new Card("Hello, World!", undefined, {
  ...titleFooterTemplate,
  body: {
    align: "center",
  },
  title: {
    ...titleFooterTemplate.title,
    align: "center",
    content: (titleFooterTemplate.title as SectionOptions).content,
  },
  footer: undefined,
  align: "left",
}).render();
const card11 = new Card("Hello, World!", undefined, {
  ...titleFooterTemplate,
  body: {
    align: "center",
  },
  title: {
    ...titleFooterTemplate.title,
    align: "left",
    content: (titleFooterTemplate.title as SectionOptions).content,
  },
  footer: undefined,
  align: "center",
}).render();
const card12 = new Card("Hello, World!", undefined, {
  ...titleFooterTemplate,
  body: {
    align: "center",
  },
  title: {
    ...titleFooterTemplate.title,
    align: "right",
    content: (titleFooterTemplate.title as SectionOptions).content,
  },
  footer: undefined,
  align: "right",
}).render();
console.log(card10);
console.log(card11);
console.log(card12);
