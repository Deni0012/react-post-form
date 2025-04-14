import { useState } from 'react'
import axios from 'axios';


function App() {

  const [formPosts, setFormPosts] = useState({
    author: '',
    title: '',
    body: '',
    public: false
  })

  function handleFormPosts(event) {
    const value =
      event.target.type === 'checkbox' ?
        event.target.checked : event.target.value;

    setFormData((formPosts) => ({
      ...formPosts,
      [event.target.name]: value,
    }));
  };

  function savePost(event) {
    event.preventDefault();

    console.log(formPosts);

  }


  return (
    <>

    </>
  )
}

export default App;
