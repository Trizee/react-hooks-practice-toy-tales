import React,{useState} from "react";

function ToyCard({toyData,setToyData,renderDelete}) {

  const {name , image, likes,  id} = toyData
  const [newLikes, setNewLikes] = useState(likes)

  function addLike(){ 
    
    const likePatch = {likes: newLikes +1}
    fetch(`http://localhost:3001/toys/${id}`,{
      method: 'PATCH',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(likePatch)
    })
    .then(r => r.json())
    .then(data => setNewLikes(newLikes + 1))
  }

  function deleteToy(){
    fetch(`http://localhost:3001/toys/${id}`,{
      method: 'DELETE',
      headers: { 'Content-Type': 'application/json' },
  })
  .then(r => r.json())
  .then(data => renderDelete(id))
  }

  return (
    <div className="card">
      <h2>{name}</h2>
      <img
        src={image}
        alt={name}
        className="toy-avatar"
      />
      <p>{newLikes} Likes </p>
      <button className="like-btn" onClick={addLike} >Like {"<3"}</button>
      <button className="del-btn" onClick={deleteToy}>Donate to GoodWill</button>
    </div>
  );
}

export default ToyCard;
