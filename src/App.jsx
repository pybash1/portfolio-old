import Navbar from './components/Navbar.jsx';
import './App.css';
import { useEffect, useState } from "react";
import { Deta } from 'deta';

function App() {
  document.title ="PyBash's Portfolio";

  let deta = Deta(import.meta.env.VITE_DETA_KEY);
  let analytics = deta.Base("analytics");
  let portfolioContact = deta.Base("portfolio-contact");

  useEffect(() => {
    let prevf = analytics.get("pjzkqjv6bxlp");
    prevf.then(res => analytics.put({"website":"portfolio", "visitors":res.visitors+1}, "pjzkqjv6bxlp"));
  }, []);

  const [fname, setFname] = useState("");
  const [lname, setLname] = useState("");
  const [email, setEmail] = useState("");
  const [msg  , setMsg  ] = useState("");

  const [error  , setError  ] = useState("");
  const [success, setSuccess] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    if (fname === "" || lname === "" || email === "" || msg === "" || fname === null || lname === null || email === null || msg === null) {
      setError("Feilds cannot be empty!");
    } else {
      setError("");
      portfolioContact.insert({"fname":fname, "lname":lname, "email":email, "msg":msg});
      setSuccess("Successfully sent the message!");
    }
  }

  return (
    <div className="bg-gray-800 h-full font-['Poppins'] font-normal cursor-[url('demo.cur')]">
      <Navbar />
      <br />
      <br />
      <div className="flex flex-col items-center">
        <div className="font-extrabold text-5xl text-white">
          I'm <strong className="transition ease-in-out underline underline-offset-8 decoration-8 decoration-[#3BB1FF] hover:decoration-[#3064FF] text-transparent bg-clip-text bg-gradient-to-r from-[#3BB1FF] to-[#3064FF] hover:bg-gradient-to-l">PyBash</strong>!
        </div>
        &nbsp;
        <div className="font-semibold text-lg text-gray-400 w-1/2 text-center">
          I am a Python ethusaist and specialise in backend development. I am also learning React for frontend right now. And, I am based in India.
        </div>
        &nbsp;
        <a href="https://github.com/pybash1" className="text-white border-[#3BB1FF] border-2 p-4 rounded-xl hover:bg-[#3BB1FF] transition ease-in-out">Checkout My Github!</a>
        &nbsp;
        <div className="py-12"></div>
        <div id="about" className="text-white text-4xl font-bold">
          About Me
        </div>
        &nbsp;
        <div className="text-gray-200 text-center w-1/2">
          Hello! My name is PyBash and I love to create the logic behind websites of the Internet. When I started off with programming 3 years ago, I wasn't aware of Web Development, but as time went by I learnt more about it, and I soon figured that frontend and design isn't for me.
          I had always wondered how websites work under the hood, fast-forward to today, and I am the one building them! As told earlier, I am a Python ethusiast, so I build most of my project backends using <a href="https://fastapi.tiangolo.com" className="transition ease-in-out underline underline-offset-4 decoration-2 hover:text-[#3BB1FF]">FastAPI</a> and/or <a href="https://flask.palletsprojects.com" className="transition ease-in-out underline underline-offset-4 decoration-2 hover:text-[#3BB1FF]">Flask</a>.
          <br /><br />
          I recently also started learning frontend again, and consider this website a demo! I am not great at design but I am trying my best with <a href="https://reactjs.org" className="transition ease-in-out underline underline-offset-4 decoration-2 hover:text-[#3BB1FF]">React</a> and <a href="https://tailwindcss.com" className="transition ease-in-out underline underline-offset-4 decoration-2 hover:text-[#3BB1FF]">TailwindCSS</a>.
          <br /><br />
          Fun fact, I use <a href="https://neovim.io" className="transition ease-in-out underline underline-offset-4 decoration-2 hover:text-[#3BB1FF]">Neovim</a> as my code editor!
        </div>
        &nbsp;
        <div className="text-white text-xl font-medium">My Tech Stack</div>
        <div className="text-white text-lg"> 
          <ul>
            <li className="inline-block px-2 border-r-[3px]">Python</li>
            <li className="inline-block px-2 border-r-[3px]">NodeJS</li>
            <li className="inline-block px-2 border-r-[3px]">Flask</li>
            <li className="inline-block px-2 border-r-[3px]">FastAPI</li>
            <li className="inline-block px-2 border-r-[3px]">React</li>
            <li className="inline-block px-2 border-r-[3px]">JavaScript</li>
            <li className="inline-block px-2">Svelte</li>
          </ul>
        </div>
        &nbsp;
        <div className="py-12"></div>
        <div id="projects" className="text-white text-4xl font-bold">
          My Projects
        </div>
        &nbsp;
        <div className="grid grid-cols-3 gap-4">
          <div className="max-w-sm w-full">
            <div className="bg-[#3BB1FF] rounded-xl p-4 flex flex-col justify-between leading-normal">
              <div className="mb-8">
                <p className="text-sm text-gray-600 flex items-center">
                  <svg className="fill-current text-gray-600 w-3 h-3 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                    <path d="M4 8V6a6 6 0 1 1 12 0v2h1a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2v-8c0-1.1.9-2 2-2h1zm5 6.73V17h2v-2.27a2 2 0 1 0-2 0zM7 6v2h6V6a3 3 0 0 0-6 0z" />
                  </svg>
                  Organisation
                </p>
                <a href="https://github.com/Cotidie-project/backend" className="text-gray-900 font-bold text-xl mb-2">Cotidie-project/backend</a>
                <p className="text-gray-700 text-base">API of project for the April, 2022 Timathon Code Jam. A daily automatic planner with a gamified experience.</p>
              </div>
              <div className="flex items-center">
                <div className="text-sm">
                  <p className="text-gray-900 leading-none">Cotidie-project</p>
                  <p className="text-gray-600">18th April, 2022</p>
                </div>
              </div>
            </div>
          </div>
          <div className="max-w-sm w-full">
            <div className="bg-[#3BB1FF] rounded-xl p-4 flex flex-col justify-between leading-normal">
              <div className="mb-8">
                <p className="text-sm text-gray-600 flex items-center">
                  <svg className="fill-current text-gray-600 w-3 h-3 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                    <path d="M4 8V6a6 6 0 1 1 12 0v2h1a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2v-8c0-1.1.9-2 2-2h1zm5 6.73V17h2v-2.27a2 2 0 1 0-2 0zM7 6v2h6V6a3 3 0 0 0-6 0z" />
                  </svg>
                  Archived
                </p>
                <a href="https://github.com/pybash1/py_everything" className="text-gray-900 font-bold text-xl mb-2">pybash1/py_everything</a>
                <p className="text-gray-700 text-base">A python library that has it all! Simple yet highly used and effective tools and functions along with 2 CLIs.</p>
              </div>
              <div className="flex items-center">
                <div className="text-sm">
                  <p className="text-gray-900 leading-none">pybash1</p>
                  <p className="text-gray-600">28th August, 2021</p>
                </div>
              </div>
            </div>
          </div>
          <div className="max-w-sm w-full">
            <div className="bg-[#3BB1FF] rounded-xl p-4 flex flex-col justify-between leading-normal">
              <div className="mb-8">
                <p className="text-sm text-gray-600 flex items-center">
                  <svg className="fill-current text-gray-600 w-3 h-3 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                    <path d="M4 8V6a6 6 0 1 1 12 0v2h1a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2v-8c0-1.1.9-2 2-2h1zm5 6.73V17h2v-2.27a2 2 0 1 0-2 0zM7 6v2h6V6a3 3 0 0 0-6 0z" />
                  </svg>
                  Organisation
                </p>
                <a href="https://github.com/CutCode-org/CutCode-Svelte" className="text-gray-900 font-bold text-xl mb-2">CutCode-org/CutCode-Svelte</a>
                <p className="text-gray-700 text-base">CutCode's Website rewritten, improved and updated in 100% Svelte, TailwindCSS and DaisyUI. </p>
              </div>
              <div className="flex items-center">
                <div className="text-sm">
                  <p className="text-gray-900 leading-none">CutCode-org</p>
                  <p className="text-gray-600">18th April, 2022</p>
                </div>
              </div>
            </div>
          </div>
          <div className="max-w-sm w-full">
            <div className="bg-[#3BB1FF] rounded-xl p-4 flex flex-col justify-between leading-normal">
              <div className="mb-8">
                <p className="text-sm text-gray-600 flex items-center">
                  <svg className="fill-current text-gray-600 w-3 h-3 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                    <path d="M4 8V6a6 6 0 1 1 12 0v2h1a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2v-8c0-1.1.9-2 2-2h1zm5 6.73V17h2v-2.27a2 2 0 1 0-2 0zM7 6v2h6V6a3 3 0 0 0-6 0z" />
                  </svg>
                  Private
                </p>
                <a className="text-gray-900 font-bold text-xl mb-2">pybash1/pyshell</a>
                <p className="text-gray-700 text-base">A cross-platform shell written in 100% pure python. Support for Shell scripting language and operators coming soon!</p>
              </div>
              <div className="flex items-center">
                <div className="text-sm">
                  <p className="text-gray-900 leading-none">pybash1</p>
                  <p className="text-gray-600">Unrealeased</p>
                </div>
              </div>
            </div>
          </div>
          <div></div>
          <div className="max-w-sm w-full">
            <div className="bg-[#3BB1FF] rounded-xl p-4 flex flex-col justify-between leading-normal">
              <div className="mb-8">
                <p className="text-sm text-gray-600 flex items-center">
                  <svg className="fill-current text-gray-600 w-3 h-3 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                    <path d="M4 8V6a6 6 0 1 1 12 0v2h1a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2v-8c0-1.1.9-2 2-2h1zm5 6.73V17h2v-2.27a2 2 0 1 0-2 0zM7 6v2h6V6a3 3 0 0 0-6 0z" />
                  </svg>
                  Private
                </p>
                <a className="text-gray-900 font-bold text-xl mb-2">pybash1/schooldo</a>
                <p className="text-gray-700 text-base">SchoolDo is an all in one task, homework and schedule management system built for students of all ages.</p>
              </div>
              <div className="flex items-center">
                <div className="text-sm">
                  <p className="text-gray-900 leading-none">pybash1</p>
                  <p className="text-gray-600">Unrealeased</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        &nbsp;
        <div className="py-12"></div>
        <div id="contact" className="text-white text-4xl font-bold">
          Contact
        </div>
        &nbsp;
        <div className="">
          {error != "" ? <div id="alert-2" class="flex p-4 mb-4 bg-red-100 rounded-lg dark:bg-red-200" role="alert">
            <svg class="flex-shrink-0 w-5 h-5 text-red-700 dark:text-red-800" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clip-rule="evenodd"></path></svg>
            <div class="ml-3 text-sm font-medium text-red-700 dark:text-red-800">
              {error}
            </div>
          </div> : null}
          {success != "" ? <div id="alert-3" class="flex p-4 mb-4 bg-green-100 rounded-lg dark:bg-green-200" role="alert">
            <svg class="flex-shrink-0 w-5 h-5 text-green-700 dark:text-green-800" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clip-rule="evenodd"></path></svg>
            <div class="ml-3 text-sm font-medium text-green-700 dark:text-green-800">
              {success}
            </div>
          </div> : null}
          <form className="w-full max-w-lg" onSubmit={handleSubmit}>
            <div className="flex flex-wrap -mx-3 mb-6">
              <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                <label className="block uppercase tracking-wide text-gray-200 text-xs font-bold mb-2" for="grid-first-name">
                  First Name
                </label>
                <input className="appearance-none block w-full bg-[#3BB1FF] text-gray-200 rounded py-3 px-4 mb-3 leading-tight" id="grid-first-name" type="text" placeholder="Jane" value={fname} onChange={(e) => setFname(e.target.value)} />
              </div>
              <div className="w-full md:w-1/2 px-3">
                <label className="block uppercase tracking-wide text-gray-200 text-xs font-bold mb-2" for="grid-last-name">
                  Last Name
                </label>
                <input className="appearance-none block w-full bg-[#3BB1FF] text-gray-200 rounded py-3 px-4 leading-tight" id="grid-last-name" type="text" placeholder="Doe" value={lname} onChange={(e) => setLname(e.target.value)} />
              </div>
            </div>
            <div className="flex flex-wrap -mx-3 mb-6">
              <div className="w-full px-3">
                <label className="block uppercase tracking-wide text-gray-200 text-xs font-bold mb-2" for="grid-password">
                  E-mail
                </label>
                <input className="appearance-none block w-full bg-[#3BB1FF] text-gray-200 rounded py-3 px-4 mb-3 leading-tight" id="email" type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
              </div>
            </div>
            <div className="flex flex-wrap -mx-3 mb-6">
              <div className="w-full px-3">
                <label className="block uppercase tracking-wide text-gray-200 text-xs font-bold mb-2" for="grid-password">
                  Message
                </label>
                <textarea className="no-resize appearance-none block w-full bg-[#3BB1FF] text-gray-200 rounded py-3 px-4 mb-3 leading-tight h-48 resize-none" id="message" value={msg} onChange={(e) => setMsg(e.target.value)}></textarea>
                <p className="text-gray-600 text-xs italic">This data is recorded</p>
              </div>
            </div>
            <div className="md:flex md:items-center">
              <div className="md:w-1/3">
                <button className="transition ease-in-out shadow bg-[#3BB1FF] hover:bg-[#3064FF] focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded" type="submit">
                  Send
                </button>
              </div>
              <div className="md:w-2/3"></div>
            </div>
          </form>
        </div>
      </div>
      &nbsp;
    </div>
  )
}

export default App;
