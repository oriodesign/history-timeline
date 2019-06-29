import React, { useState } from 'react';

export function Editor() {

    const [result, setResult] = useState("");
    function parse(e) {
        const text = e.target.value;
        const lines = text.split("\n").map(l => l.trim()).filter(l => l !== "");
        const parsed = lines.map(l => {
          const fromMatch = l.match(/from:[ ]*(.*?) /g);
          const tillMatch = l.match(/till:[ ]*(.*?) /g);
          const textMatch = l.match(/text:[ ]*"?\[\[(.*?)\|/g) || l.match(/text:[ ]*"?\[\[(.*?)\]\]"?/g);
          console.log(fromMatch, tillMatch, textMatch);
          const from = fromMatch ? fromMatch[0].replace("from:", "").trim() : "";
          const till = tillMatch ? tillMatch[0].replace("till:", "").trim() : [];
          const text = textMatch ? textMatch[0]
            .replace("text:", "")
            .replace("", "")
            .replace("|", "")
            .replace("[[", "")
            .replace("]]", "") : [];
          return `period("${text}", [${from}, ${till}], "")`;
        }).join(",\n");
        setResult(parsed);
      }

     return <div className="editor">
        <textarea onChange={parse}></textarea>
        <pre className="result">{result}</pre>
     </div> 
}