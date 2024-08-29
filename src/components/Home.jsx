import React from 'react'
import {useNavigate} from 'react-router-dom'

function Home() {
  const navigate = useNavigate();
  return (
    <>
        <div>Home</div>
        <div>
          <button onClick={() => {
            navigate('/Mission')

          }}>Missiona Git</button>
        </div>
    </>
  )
}

export default Home