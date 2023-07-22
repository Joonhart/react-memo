import React from "react";
import { handleKeyDown } from "../utils/keyListener";

export default function MemoBody() {
  return (
    <textarea className="bg-slate-100 h-full w-full resize-none p-2"
        onKeyDown={handleKeyDown}>
      메모 바디
    </textarea>
  );
}
