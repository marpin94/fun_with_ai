import React, { useState } from 'react'
import Responses from './Responses'
import { data } from '../data'


const {Configuration, OpenAIApi} = require("openai")


const Prompt = () => {

    const [promptText, setPromptText] = useState('')
    const [responses, setResponses] = useState([])
    const [loading, setLoading] = useState(false)

    class Response {
        constructor(prompt, response){
            this.prompt = prompt;
            this.response = response;
        }
    }


    const submitForm = (e) => {

        e.preventDefault()

        console.log(process.env.REACT_APP_API_KEY)

        setLoading(true)

        const config = new Configuration({
            apiKey:`${process.env.REACT_APP_API_KEY}`
        })
    
        const openai = new OpenAIApi(config)
    
        openai.createCompletion("text-curie-001", {
            prompt: `${promptText}`,
            temperature: 0.7,
            max_tokens: 64,
            top_p: 1,
            frequency_penalty: 0.0,
            presence_penalty: 0.0,
        })
        .then((response) => {
            const newResponse = new Response(promptText, response.data.choices[0].text)
            console.log(newResponse)

            setResponses(responses => [...responses, newResponse])

            setLoading(false)
        })
        .catch((err) => {
            console.log(err)
        })
        setPromptText('')   
    }

    return (
        <div>
            <div id='display'>
                <form onSubmit={submitForm} id='prompt-form'>
                    <textarea id='prompt' name='prompt' rows='10' cols='80' value={promptText} onChange = {(e) => setPromptText(e.target.value)} />
                    <br/>
                    <button type='submit' form = 'prompt-form' id='submit-form-btn'> Submit </button>
                </form>
                <div id='suggested-prompts'>
                    <h4>Suggested Prompts</h4>
                    <ul>
                        {data.map(item => {
                            return(
                                <li value={item} onClick = {e => setPromptText(item)}>
                                {item}
                                </li>   
                            )
                        })}
                    </ul>
                </div>
            </div>
                <Responses responses = {responses} />
                {loading ? <h4>Thinking . . . </h4> : ''}
        </div>
    )
}

export default Prompt