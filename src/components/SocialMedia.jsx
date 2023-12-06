import { Link } from "react-router-dom";


export default function SocialMedia(){
    return(
        <div className="social-medias">
            <Link target="_blank" rel="noopener noreferrer" to="https://www.facebook.com"> 
                <img src="https://images.unsplash.com/photo-1662070479020-73f77887c87c?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb&dl=mariia-shalabaieva-d64-ghA_rH4-unsplash.jpg" alt="facbook icon"></img> 
            </Link>
            <Link target="_blank" rel="noopener noreferrer" to="https://www.instagram.com">
                <img src="https://images.unsplash.com/photo-1611162616305-c69b3fa7fbe0?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb&dl=alexander-shatov-_tF3vug2FhQ-unsplash.jpg" alt="instgram icon"></img>
            </Link>
            <Link target="_blank" rel="noopener noreferrer" to="https://www.twitter.com">
                <img src="https://images.unsplash.com/photo-1611605698335-8b1569810432?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb&dl=alexander-shatov-k1xf2D7jWUs-unsplash.jpg" alt="twitter icon"></img>
            </Link>
        </div>
    )
};
