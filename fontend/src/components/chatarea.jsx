import "../App.css"
import React, { useState, useEffect } from "react";
import axios from "axios";

var id_ref = 0;

const Chatarea = () => {
  const [isLoading, setLoading] = useState(false)
  const [result, setResult] = useState([]);
  const [maxId, setMaxId] = useState(0);
  const [post, setPost] = useState({
    id: maxId,
    name:"user",
    message:"",
  });
const handleInput = (event) => {
  setPost({...post, [event.target.name]: event.target.value, id: maxId});
};

function handleSubmit(event) {
  event.preventDefault();
  setResult(prevResult => [...prevResult, post]);
  setMaxId(maxId + 1);
  setLoading(true);
  axios
    .post("https://islamicgpt.onrender.com/ask", post)
    .then((response) => {
      if (!Array.isArray(response.data)) {
        setResult(prevResult => [...prevResult, response.data]);
      } else {
        console.log("API response is not an array");
      }
    })
    .catch((error) => {
      console.log(error)
      setResult(prevResult => [...prevResult, error]);
    })
    .finally(() => {
      setLoading(false);
      setPost({ ...post, message: '' });
      console.log(post)
      console.log(result)
      id_ref += 1;
    })
}

const clearConversation = () => {
  setResult([]);
  setMaxId(0);
};

useEffect(() => {
  if (result.length > 0) {
    setMaxId(Math.max(...result.map(message => message.id)));
  }
}, [result]);

    return (
      <div className="d-flex justify-content-center align-items-center vh-100 flex-column min-vh-100">
      <div className="bg-light w-100 h-100 d-flex flex-column position-relative">
        <div className="container chat-container overflow-auto p-4 flex-grow-1">
          <div className="d-flex flex-column">
          {result.length > 0 ? (
            result.map((message) => (
        <div
        key={message.id}
        style={{borderRadius: "15px"}}
          className={`p-3 ${message.name === 'bot' ? 'bg-white' : 'bg-dark text-white'} mb-3 ${message.name === 'bot' ? 'align-self-start' : 'align-self-end'}`}
        >
          <p className="mb-0 container">{message.name === "bot" ? (result.length > 0 ? (message.message) : ("Sorry, something went wrong!")) : (message.message)}</p>
        </div>
      ))
    ) : (
      <p>Feel Free To Ask Any Questions...</p>
    )}
    {isLoading && <div style={{borderRadius: "15px"}} className="p-3 bg-white mb-3 align-self-start"><div class="spinner-grow spinner-grow-sm text-dark" role="status"></div></div>}
      </div>
        </div>
        <form onSubmit={handleSubmit} className="container input-container p-4 d-flex position-sticky bottom-0 bg-light">
          <input
            type="text"
            name="message"
            value={post.message}
            className="form-control py-3 me-2 flex-grow-1"
            placeholder="Type your message..."
            onChange={handleInput}
          />
          <button type="submit" className="btn btn-dark p-3"><i className="fa-solid fa-paper-plane"></i></button>
          {result.length > 0 ? (<button type="button" className="btn btn-danger p-3 mx-1" onClick={clearConversation}><i className="fa-solid fa-trash-can"></i></button>) : (null)}
        </form>
      </div>
    </div>
    );
};

export default Chatarea;