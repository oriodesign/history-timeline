import React, { useState } from 'react';

export function Editor() {

    const [result, setResult] = useState("");
    const [nameIndex, setNameIndex] = useState(0);
    const [wikiIndex, setWikiIndex] = useState(0);
    const [fromIndex, setFromIndex] = useState(1);
    const [tillIndex, setTillIndex] = useState(2);

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

      function findName(row, nameIndex) {
        const nameElement = row.querySelectorAll("a")[nameIndex];
        const text = nameElement ? nameElement.innerText
          .trim()
          .replace("\n", "") : "";

        return text;
      }

      function findFrom(row, fromIndex) {
        const fromDate = row.children[fromIndex].innerText
          .replace("\n", "");

          const from = new Date(fromDate);
          return from.getFullYear();
      }

      function findTill(row, tillIndex) {
        const tillDate = row.children[tillIndex].innerText
          .replace("\n", "");
        const till = new Date(tillDate);

        return till.getFullYear();
      }

      function findWiki(row, wikiIndex) {
        const nameElement = row.querySelectorAll("a")[wikiIndex];
        const attr = nameElement ? nameElement.attributes : null;
        const wiki = attr && attr.href ? attr.href.value.replace("/wiki/", ""): "";

        return wiki;
      }

      function parseHtml(e) {

        const el = document.createElement("div");
        el.innerHTML = e.target.value;
        const trs = Array.from(el.querySelectorAll("tr"));
        const parsed = trs.map(t => {
          if (t.children.length >= 4) {
            
            if (t.children[nameIndex].nodeName === "TH") {
              return;
            }

            let name = findName(t, nameIndex);
            let from = findFrom(t, fromIndex);
            let till = findTill(t, tillIndex);
            let wiki = findWiki(t, wikiIndex);

            
            // const [fromDate, tillDate] = t.children[fromIndex].innerText.replace("BC", "").trim().split("–")
            // const match = t.children[nameIndex].innerText.match(/\d+–\d+/);
            // console.log(t.children[nameIndex].innerText);
            // [from, till] = match ? match[0].split("–") : [0, 0];
            

            if (!from || !till || !name) {
              return;
            }

            
            return `ruler("${name}", [${from}, ${till}], "${wiki}")`;
          }
          
        }).filter(r => !!r).join(",\n");

        setResult(parsed);
      }

     return <div className="editor">
        <textarea placeholder="Wikipedia Timline" onChange={parse}></textarea>

        <label>Name Index</label>
        <input onChange={e => setNameIndex(e.target.value)} value={nameIndex} />

        <label>From Index</label>
        <input onChange={e => setFromIndex(e.target.value)} value={fromIndex} />

        <label>Till Index</label>
        <input onChange={e => setTillIndex(e.target.value)} value={tillIndex} />

        <label>Wiki Index</label>
        <input onChange={e => setWikiIndex(e.target.value)} value={wikiIndex} />

        <textarea onChange={parseHtml} placeholder="Wikipedia HTML" />
        <pre className="result">{result}</pre>
     </div> 
}
