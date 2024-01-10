import React from 'react'


function Newsapp({data}) {


  return (
    <div className='top'>

        
       
        <div className='cards'>
        {
            data.map( (element)=> (
                <div className='card'>
                    <img src={element.urlToImage} alt="" className='img' />
                    <p className='para'>{element.description}</p>
                </div>
            ) )
        }
      </div>
    </div>
  )
}

export default Newsapp;
