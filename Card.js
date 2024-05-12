import{useState} from 'react';


const Card = ({id, image, info, prise, name, removeTour}) => {
    const [readmore, setReadmore] = useState(false);
    const description = readmore ? info : `${ info.substring(0,200)}....`

    const readmoreHandler = () => {
           setReadmore(!readmore);
    }
 
    return (
        <div className="card">
            <img src={image} className="image"/>
 
         <div className="tour-info">
            <div className="tour-details">
               <h4 className="tour-prise">${prise}</h4>  
               <h4 className="tour-name">{name}</h4>      
            </div>

            <div className="description  ">
                {description}
                <span className="read-more" onClick={readmoreHandler}>
                    {readmore ? `show less`: `read more`}
                </span>
            </div>
        </div>  

            <div className="btn-red" onClick={() => removeTour(id)}>
                <button>Not Intersted</button>
            </div>
        </div>
    )
}

export default Card;