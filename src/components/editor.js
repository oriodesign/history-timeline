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

      function parseHtml(e) {

        const nameIndex = 1;
        const fromIndex = 4;
        const tillIndex = 3;

        const el = document.createElement("div");
        el.innerHTML = e.target.value;
        const trs = Array.from(el.querySelectorAll("tr"));
        const parsed = trs.map(t => {
          if (t.children.length >= 5) {
            
            if (t.children[nameIndex].nodeName === "TH") {
              return;
            }

            const nameElement = t.querySelectorAll("a")[1];


            const text = nameElement.innerText.trim().replace("\n", "");
            // const fromDate = t.children[fromIndex].innerText.replace("\n", "");
            const [fromDate, tillDate] = t.children[fromIndex].innerText.split("–")
            console.log(fromDate, tillDate);
            const from = new Date(fromDate);
            //const tillDate = t.children[tillIndex].innerText.replace("\n", "");
            const till = new Date(tillDate);

            const attr = nameElement ? nameElement.attributes : null;
            const wiki = attr && attr.href ? attr.href.value.replace("/wiki/", ""): "";
            return `ruler("${text}", [${from.getFullYear()}, ${till.getFullYear()}], "${wiki}")`;
          }
          
        }).filter(r => !!r).join(",\n");

        setResult(parsed);
      }

     return <div className="editor">
        <textarea placeholder="Wikipedia Timline" onChange={parse}></textarea>
        <textarea onChange={parseHtml} placeholder="Wikipedia HTML" />
        <pre className="result">{result}</pre>
     </div> 
}