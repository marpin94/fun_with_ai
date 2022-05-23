
import './App.css';
import Prompt from './components/Prompt';


function App() {
  return (
    <div className="App">
      <h1>Fun with AI</h1>
      <p>
      OpenAI has trained cutting-edge language models that are very good at understanding and generating text. You input some text as a prompt, and the API will return a text completion that attempts to match whatever instructions or context you gave it. You can try some of the suggested prompts below, to get started. Here is some more info on this <a href='https://beta.openai.com/docs/introduction'>API</a>
      </p>
      <Prompt />

    </div>
  );
}

export default App;
