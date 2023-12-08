import React from "react";

import dynamic from "next/dynamic";
import { Suspense } from "react";

const EditorComp = dynamic(() => import("@/app/_components/MarkDown"), { ssr: false });


export default function Home() {
  return (
    <div>
      <Suspense fallback={null}>
        <EditorComp  />
      </Suspense>
    </div>
  );
}
