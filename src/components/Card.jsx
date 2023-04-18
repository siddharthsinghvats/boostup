
import {AiOutlineHeart} from 'react-icons/ai'
import {ImLocation} from 'react-icons/im'
const Card = ({card})=>{
    console.log(card);
    return (
        <>
            <div className="card">
                <div className="card-img">
                    <img src={card.image}/>
                </div>
                <div className="card-title">
                       {card.title}
                </div>
                <div className="card-desc">
                    {card.description}
                </div>
                <div className="card-btm">
                    <div className="locality">
                        <ImLocation style={{color:"blue"}}/> {card.locality}
                    </div>
                    <div className="likes">
                           <AiOutlineHeart style={{color:"red"}}/> {card.likes}
                    </div>
                </div>
            </div>
        </>
    )
}

export default Card;