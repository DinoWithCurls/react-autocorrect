import React, {useState, useEffect} from 'react'

const correctWordDict = {
  helo: "hello",
  wrld: "world",
  smpl: "sample",
  crse: "curse",
  corespondence:"correspondence",
  alfabet: "alphabet",
  cal: "call",
  asinment: "assignment",
  brek: "break"
}

const App = () => {
  const [text, setText] = useState("");
  useEffect(() => {
    let lowertext = text.toLowerCase();
    if (lowertext[lowertext.length - 1] === " ") {
      let words = lowertext.split(" ");
      words.pop();
      let word = words[words.length - 1];
      if (word in correctWordDict) {
        let correctedData = lowertext.replace(word, correctWordDict[word]);
        setText(correctedData);
      }
      else {
        console.log('no replacement found')
      }
    }
 }, [text]);
  return (
    <div className='flex justify-center items-center flex-col bg-slate-300 w-screen h-screen'>
      <h1>AutoCorrect Functionality Example</h1>
      <div>
        <input className='outline-none h-10 p-2' onChange={(e) => setText(e.target.value)} value={text} />
      </div>
    </div>
  )
}
export default App;
