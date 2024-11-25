import { useRef, useState } from "react";
import "./App.css";
import Header from "./components/Header";
function App() {
  const [text, setText] = useState("");
  const [html, setHtml] = useState();
  const timer = useRef(null);
  const handleChange = (text) => {
    setText(text);
    const optimised = debounce(fetchHtml);
    optimised(text);
  };
  const debounce = (fn) => {
    let timer;
    return function (...args) {
      if (timer) clearTimeout(timer);
      let context = this;
      timer = setTimeout(() => {
        timer = null;
        fn.apply(context, args);
      }, 500);
    };
  };

  const fetchHtml = async (text) => {
    const res = await fetch("http://localhost:3000/api/markdown/gethtml", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ markdown: text }),
    });

    const data = await res.text();
    setHtml(data);
  };
  return (
    <>
      <Header />
      <div className="container">
        <div className="form">
          <form>
            <textarea
              className="text-area"
              onChange={(e) => handleChange(e.target.value)}
            />
          </form>
        </div>
        <div className="html-page" dangerouslySetInnerHTML={{ __html: html }} />
      </div>
    </>
  );
}

export default App;
