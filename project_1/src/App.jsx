import rctImg from './assets/react-core-concepts.png'
import componentImg from './assets/components.png'
const reactDescription = ["Core","Description","Important"];
function genRandomInt(max){
  return Math.floor(Math.random() * (max + 1));
}
function Header() {
  const val = reactDescription[genRandomInt(2)];
  return (<header>
    <img src = {rctImg} alt="Stylized atom" />
    <h1>React Essentials</h1>
    <p>
      {val} React concepts you will need for almost any app you are
      going to build!
    </p>
  </header>);
}
function CoreConcepts(props){
  return (
    <li>
      <img src= {props.img} alt={props.title} />
      <h3>{props.title}</h3>
      <p>{props.description}</p>
    </li>
  );
}
function App() {
  return (
    <div>
      <Header />
      <main>
        <section id="core-concepts">
          <h2>Core concepts</h2>
          <ul>
            <CoreConcepts 
            title = "Components"
            description = "The core of UI building block"
            image = {componentImg}/>
            <CoreConcepts />
            <CoreConcepts />
            <CoreConcepts />
          </ul>
        </section>
        <h2>Time to get started!</h2>
      </main>
    </div>
  );
}

export default App;
