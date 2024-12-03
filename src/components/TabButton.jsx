export default function TabButton(props) {
    function handleClick() {
        console.log("Hello world");
    }
    return (
        <button className={props.isSelected ? "active" : undefined} 
        onClick={props.onSelect == undefined ? handleClick : props.onSelect}>
            {props.children}
        </button>
    )
}