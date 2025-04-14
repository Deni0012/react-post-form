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

    setFormPosts((formPosts) => ({
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
      <div className='container'>
        <form onSubmit={savePost}>
          <div className="mb-3">
            <label className="form-label">Autore</label>
            <input type="text"
              name='author'
              value={formPosts.author}
              onChange={handleFormPosts}
              placeholder='Inserisci autore'
              className="form-control" />
          </div>

          <div className="mb-3">
            <label className="form-label">Titolo</label>
            <input type="text"
              name='title'
              value={formPosts.title}
              onChange={handleFormPosts}
              placeholder='Inserisci titolo'
              className="form-control" />
          </div>

          <div className="mb-3">
            <label className="form-label">Testo</label>
            <input type="text"
              name='body'
              value={formPosts.body}
              onChange={handleFormPosts}
              placeholder='Inserisci testo'
              className="form-control" />
          </div>

          <div className="mb-3 form-check">
            <input type="checkbox"
              name='public'
              checked={formPosts.public}
              onChange={handleFormPosts}
              id='public'
              className="form-check-input" />
            <label className="form-check-label">Disponibile</label>
          </div>
          <button type="submit" className="btn btn-primary">Invia</button>
        </form>
      </div>


    </>
  )
}

export default App;
