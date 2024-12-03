// functions that start with use keyword in react are react hooks
import { useState, Fragment } from "react";
import { CORE_CONCEPTS, EXAMPLES } from "./data";
import Header from "./components/Header/Header.jsx";
import CoreComponent from "./components/CoreComponent/CoreComponent.jsx";
import TabButton from "./components/TabButton.jsx";

// functions are executed only once by react whenever it is encountered
function App() {
  // value inside useState is the default value for the variable selectedTopic
  // setSelectedTopic will schedule the update of the variable and variable value will be reflected 
  // only once the App() function is re-executed
  const [selectedTopic, setSelectedTopic] = useState()
  function handleSelect(selectedButton) {
    setSelectedTopic(selectedButton)
  }

  let tabContent = <p>Please select a topic</p>
  if(selectedTopic) {
    tabContent = (<div id="tab-content">
      <h3>{EXAMPLES[selectedTopic].title}</h3>
      <p>{EXAMPLES[selectedTopic].description}</p>
      <pre>
        <code>
          {EXAMPLES[selectedTopic].code}
        </code>
      </pre>
    </div>)
  }
  
  return (
    <>
    {/* <Fragment> */}
    {/* <div> */}
      <Header />
      <main>
        <section id="core-concepts">
          <ul>
            {/* key attribute should be defined in custom component for the uniqueness - it is used by react application */}
            {CORE_CONCEPTS.map((conceptItem) => 
            <CoreComponent key={conceptItem.title} {...conceptItem} />)}
            {/* <CoreComponent {...CORE_CONCEPTS[0]} />
            <CoreComponent {...CORE_CONCEPTS[1]} />
            <CoreComponent {...CORE_CONCEPTS[2]} />
            <CoreComponent {...CORE_CONCEPTS[3]} /> */}

            {/* <CoreComponent title="Components" description="I am core building block" 
          image={compImg}
          />
          <CoreComponent title="Props" />
          <CoreComponent /> */}
          </ul>
        </section>
        {/* <h2>Time to get started!</h2> */}
        <section id="examples">
          <h2>Examples</h2>
          <menu>
            {/* we dont pass the function with parantheses as when the code is compiled 
            it will execute the function , that's why only function name is passes as value
            If we define the function inside another function then we can give parantheses since
            the outer function will be define when the code line is processed and the inner 
            function wont get executed */}
            <TabButton 
            isSelected={selectedTopic === 'components'}
            onSelect={() => handleSelect('components')}>
              Components</TabButton>
            <TabButton 
            isSelected={selectedTopic === 'props'}
            onSelect={() => handleSelect('props')}>
              Props</TabButton>
            <TabButton 
            isSelected={selectedTopic === 'jsx'}
            onSelect={() => handleSelect('jsx')}>
              JSX</TabButton>
            <TabButton 
            isSelected={selectedTopic === 'state'}
            onSelect={() => handleSelect('state')}>
              State</TabButton>
          </menu>

          {/* dynamic rendering of the content using ternary expression */}
          {/* {!selectedTopic ? <p>Please select a topic</p> : null}
          {selectedTopic ? (<div id="tab-content">
            <h3>{EXAMPLES[selectedTopic].title}</h3>
            <p>{EXAMPLES[selectedTopic].description}</p>
            <pre>
              <code>
                {EXAMPLES[selectedTopic].code}
              </code>
            </pre>
          </div>) : null} */}

          {/* dynamic rendering of content combining ternary expressions into one */}
          {/* {!selectedTopic ? (<p>Please select a topic</p>) : (<div id="tab-content">
            <h3>{EXAMPLES[selectedTopic].title}</h3>
            <p>{EXAMPLES[selectedTopic].description}</p>
            <pre>
              <code>
                {EXAMPLES[selectedTopic].code}
              </code>
            </pre>
          </div>)} */}
          {tabContent}
        </section>
      </main>
    {/* </div> */}
    {/* </Fragment> */}
    </>
  );
}

export default App;
