import React, { useState } from 'react';

function callAPI(message) {
    const [data, setData] = useState(null);
    const [postData, setPostData] = useState(null);

    const handleGetRequest = () => {
    fetch('http://127.0.0.1:8000/')
      .then(response => response.json())
      .then(data => setData(data))
      .catch(error => console.error('Error:', error));
  };

    const handlePostRequest = () => {
    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({message: "hi"}),
    };

    fetch('http://127.0.0.1:8000/ask', requestOptions)
      .then(response => response.json())
      .then(data => setPostData(data))
      .catch(error => console.error('Error:', error));
  };
};

export default callAPI;