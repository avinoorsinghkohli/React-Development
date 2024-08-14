import CoreConcepts from './components/CoreConcepts/CoreConcepts.jsx'
import Header from './components/Header/Header.jsx';
import Examples from './components/Examples.jsx';

function App() {
  return (
    <div>
      <Header />
      <main>
      <CoreConcepts></CoreConcepts>
      <Examples></Examples>
        <h2>Time to get started!</h2>
      </main>
    </div>
  );
}

//can use <> <\> for wrapping multiple elements to return
//also use fragment in the react library
export default App;
