import rctImg from '../../assets/react-core-concepts.png'
import './Header.css'
const reactDescription = ["Core","Description","Important"];
function genRandomInt(max){
  return Math.floor(Math.random() * (max + 1));
}
export default function Header() {
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