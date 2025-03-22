import { useState } from 'react'
import axios from 'axios'
import './App.css'

function App() {
  const [question, setQuestion] = useState("");
  const [Answer, setAnswer] = useState("");
async function generateAnswer (){
  setAnswer("Loading");
    const response = await axios({
      url : "https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=AIzaSyDdZRDeAecKOxMv7S7LLCWwr0LKBWPXyqY",
      method : "POST",
      data : {
        contents : [
          { parts: [{text : question}]},
        ],
      }
    })  
    setAnswer(response['data']['candidates'][0]['content']['parts'][0]['text']);
  }
  return (
    <>
  
      <div className='py-20 w-full'>
        <h1 className=''>AI Chatbot</h1>
        <textarea className="mt-5 w-11/12 p-10 h-30 rounded-[2vw] text-start bg-[#767677]" value={question} onChange={(e)=>setQuestion(e.target.value)}></textarea>
        <br/>
        <button className='mt-5' onClick={generateAnswer}>Generate Answer</button>
        </div>
        <div className=" p-auto border-rounded ">
        <pre className='text-start text-wrap'>{Answer}</pre>
      </div>
</>
  )
}

export default App
