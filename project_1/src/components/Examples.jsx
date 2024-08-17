import {EXAMPLES} from '../data.js'
import TabButton from './TabButton.jsx';
import {useState} from 'react'

export default function(){
    const [selectedTopic, setSelectedTopic] = useState()

    function handleSelect(selectedButton){
      setSelectedTopic(selectedButton);
      console.log(selectedTopic);
    }
    let tabSet = <p>Please Select a button</p>;
    if(selectedTopic){
      tabSet = <div id="tab-content">
      <h3>{EXAMPLES[selectedTopic].title}</h3>
      <p>{EXAMPLES[selectedTopic].description}</p>
      <pre>
        <code>
        {EXAMPLES[selectedTopic].code}
        </code>
      </pre>
    </div>
    }
return (

    <section id="examples">
    <h2>Examples</h2>
    <menu>
    <TabButton isSelected = {selectedTopic == "components"} onClick={() => handleSelect("components")}>Components</TabButton>
    <TabButton isSelected = {selectedTopic == "jsx"} onClick={() => handleSelect("jsx")}>JSX</TabButton>
    <TabButton isSelected = {selectedTopic == "props"} onClick={() => handleSelect("props")}>Props</TabButton>
    <TabButton isSelected = {selectedTopic == "state"} onClick={() => handleSelect("state")}>State</TabButton>
    </menu>
    {/* {!selectedTopic && <p>Please Select a button</p>}
    {selectedTopic && (<div id="tab-content">
    <h3>{EXAMPLES[selectedTopic].title}</h3>
    <p>{EXAMPLES[selectedTopic].description}</p>
    <pre>
        <code>
        {EXAMPLES[selectedTopic].code}
        </code>
    </pre>
    </div>
    )} */}
    {tabSet}
    </section>
)
};
