// Component card that encompasses the main parts of each section of the website
// Props.children just means anything that goes within the <Card></Card>
function Card(props) {
  return <div className={props.className}>{props.children}</div>;
}

export default Card;
