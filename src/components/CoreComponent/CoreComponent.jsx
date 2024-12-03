export default function CoreComponent(nilesh){
    return (
      <li>
        <img src={nilesh.image} alt = '' />
        <h3>{nilesh.title}</h3>
        <p>{nilesh.description}</p>
      </li>
    );
  }