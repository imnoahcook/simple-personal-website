import React from "react";

function App() {
  return (
    <div className="min-h-screen w-full bg-slate-900 flex items-center justify-center">
      <div className="flex flex-col space-y-3">
        <div>
          <p className="text-white font-bold text-3xl">Noah Cook</p>
          <p className="text-slate-400 font-mono">Software Engineer</p>
        </div>
        <ul className="text-emerald-400 text-lg">
          {[
            {
              text: "Instagram",
              link: "http://instagram.com/noah_cookey",
            },
            {
              text: " Github",
              link: "https://github.com/imnoahcook",
            },
            {
              text: "Linkedin",
              link: "https://www.linkedin.com/in/noahpcook/",
            },
          ].map(({ text, link }) => (
              <a target="_blank" href={link}>
            <li
              key={text}
              className="hover:bg-emerald-400 hover:text-emerald-900 font-mono"
            >
                {text}
            </li>
              </a>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
