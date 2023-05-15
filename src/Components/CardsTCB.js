import { Link } from "react-router-dom";
import "./CardsTCB.css"

function Cards(props)
{
    return (
        <div className="flex-row-evenly Main-Bg">
            {
                props.cardTitles.map((val,ind)=>(
                    <Card title={val} cardDesc={props.cardDescs[ind]}/>
                ))
            }
        </div>
    )
}


function Card(props)
{
    return (
        <div className={"Card flex-column-evenly "+props.title}>
            <span className="Card-Title">{props.title}</span>
            <div className="Card-Desc">{props.cardDesc}</div>
            <Link className="Button" to={`/${props.title}`}>Explore</Link>
        </div>
    )
}

export default Cards