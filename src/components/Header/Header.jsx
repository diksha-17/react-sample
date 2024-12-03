import reactImg from '../../assets/react-core-concepts.png'
import './Header.css'

const descriptions = ["Fundamental", "Core", "Crucial"]
function getRandomInt(max) {
  const randomInt = Math.floor(Math.random() * max)
  console.log("randomInt: ", randomInt)
  return randomInt
}


export default function Header() {
    const description = descriptions[getRandomInt(descriptions.length)]
    return (
      
      <header>
        <img src={reactImg} alt="Stylized atom" />
        <h1>React Essentials</h1>
        <p>
          {description} React concepts you will need for almost any app you are
          going to build!
        </p>
      </header>
    );
  }