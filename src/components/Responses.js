import React from 'react'
import ResponseCard from './ResponseCard'

const Responses = ({responses}) => {
  return (
    <div id = 'responses'>
      {responses &&
        responses.map(response => {
          return(
            <ResponseCard prompt = {response.prompt} responseText = {response.response} />
          )
        })
      }
    </div>
  )
}

export default Responses