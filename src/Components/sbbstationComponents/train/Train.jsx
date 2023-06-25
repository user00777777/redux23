import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

export default function Train(props) {
  const navigate = useNavigate();
  const { id } = useParams();
  const [post, setPost] = useState(null);
  const [gettext, setTexts] = useState({});
  const [text, setText] = useState('');
console.log(props);

  // useEffect(() => {
  //   fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
  //     .then((res) => res.json())
  //     .then((data) => setPost(data));
  // }, [id]);
  useEffect(() => {
    fetch(`https://reqres.in/api/users`)
      .then((res) => res.json())
      .then((data) => setTexts(data));
  }, [id]);


console.log(gettext);

  const goBack = () => navigate(-1);
  const goHome = () => navigate('/tpLog', { replace: true });

  return (
    <div>
      {post && (
        <>
          <h1>{post.name}</h1>
          {/* <h1>{post.username}</h1>
          <h1>{post.address.city}</h1> */}
          <button onClick={goBack}>Go back</button>
          {/* Bad approach */}
          <button onClick={goHome}>Go home</button>
         
          {/* <Link to={`/posts/${id}/edit`}>Edit this post</Link> */}
        </>
      )}
{gettext&&(<>

<h1>{gettext.createAt}</h1>
</>)}


    </div>
  );
}
