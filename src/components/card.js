import React, { useState } from 'react'
import '../App.css'
import Recipe from './recipe';

function Card({name,imgUrl,otherResults}) {
  const [isModalOpen, setModalOpen]=useState(false);
  const [modalData, setModalData] = useState('');

  const openModal = (data) => {
    console.log("data",data)
    setModalData(data);
    setModalOpen(true);
  }
  const closeModal = () => {
    setModalOpen(false);
  };

  return (
    <div className='card'>
      <img src={imgUrl} alt="" width={300} height={300}/>
      <p>{name}</p>
      <a href="#recipe_modal"
      onClick={()=>openModal(otherResults)}
      >{`Recipe-->`}</a>

      {isModalOpen && 
      <Recipe onClose={closeModal} data={modalData}/>
    }
</div>
  )
}

export default Card
