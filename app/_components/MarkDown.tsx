"use client";

import React, { FC, useState } from "react";
import {
  DiffSourceToggleWrapper,
  MDXEditor,
  MDXEditorMethods,
  headingsPlugin,
  diffSourcePlugin,
  BlockTypeSelect,
  CodeToggle,
  InsertSandpack,
  SandpackConfig,
  InsertCodeBlock,
  sandpackPlugin,
  codeBlockPlugin,
  codeMirrorPlugin,
} from "@mdxeditor/editor";
import { UndoRedo } from "@mdxeditor/editor/plugins/toolbar/components/UndoRedo";
import { BoldItalicUnderlineToggles } from "@mdxeditor/editor/plugins/toolbar/components/BoldItalicUnderlineToggles";
import { toolbarPlugin } from "@mdxeditor/editor/plugins/toolbar";

import { Button } from "antd";
import { marked } from "marked";
import "@mdxeditor/editor/style.css";

const markdown = `
# Hello world!
`;

const createReactApp = `
export default function App() {
  return (
    <>
      <h1>Hello world</h1>
    </>

  )
}
`;
const simpleSandpackConfig: SandpackConfig = {
  defaultPreset: "react",
  presets: [
    {
      label: "React",
      name: "react",
      meta: "live react",
      sandpackTemplate: "react",
      sandpackTheme: "light",
      snippetFileName: "/App.js",
      snippetLanguage: "jsx",
      initialSnippetContent: createReactApp,
    },
  ],
};

const Editor: FC = () => {
  const ref = React.useRef<MDXEditorMethods>(null);
  const [isTest, setIsTest] = useState<any>(null);
  return (
    <React.Fragment>
      <MDXEditor
        ref={ref}
        markdown={markdown}
        plugins={[
          codeBlockPlugin({ defaultCodeBlockLanguage: "js" }),
          sandpackPlugin({ sandpackConfig: simpleSandpackConfig }),
          codeMirrorPlugin({ codeBlockLanguages: { js: "Javascript", css: "CSS" } }),
          diffSourcePlugin({ diffMarkdown: markdown, viewMode: "rich-text" }),
          toolbarPlugin({
            toolbarContents: () => (
              <DiffSourceToggleWrapper>
                <UndoRedo />
                <BlockTypeSelect />
                <BoldItalicUnderlineToggles />
                <CodeToggle />
                <InsertCodeBlock />
                <InsertSandpack />
              </DiffSourceToggleWrapper>
            ),
          }),
          headingsPlugin(),
        ]}
      />
      <Button type="primary" onClick={() => console.log(ref.current?.getMarkdown())}>
        查看
      </Button>
      <Button
        type="primary"
        onClick={() => {
          const result = marked(ref.current?.getMarkdown() as any);
          console.log(result);

          setIsTest(result);
        }}
      >
        測試編譯
      </Button>
      <div dangerouslySetInnerHTML={{ __html: isTest }}></div>
    </React.Fragment>
  );
};

export default Editor;
