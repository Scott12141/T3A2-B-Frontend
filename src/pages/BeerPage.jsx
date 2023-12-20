import ReturnHomeButton from "../components/ReturnHome";
import MakeBookingButton from "../components/MakeBooking";
import MenuCard from "../components/MenuCard";
import BeerSize from "../components/BeerSize";
import WineList from "../components/WineList";



import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

let beer = "https://images.unsplash.com/photo-1644085159560-8b6745fc8b60?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb&dl=jan-gunnar-nygard-6C6PNsRxqMg-unsplash.jpg"

export const craftBeer = [
    {
        id: 20,
        name: "India Pale Ale (IPA)",
        description: "One of the most popular craft beers for more than a decade the IPA is characterised by floral, fruity, citrus-like, piney hop character, the IPA beer style is all about hop flavor, aroma and bitterness",
        imageUrl: beer,
    },
    {
        id: 21,
        name: "Belgian Blonde Ale",
        description: "The Belgian-style blonde ale is typically easy-drinking, with a low but pleasing hop bitterness. This is a light- to medium-bodied ale, with a low malt aroma that has a spiced and fruity-ester character. This style is medium in sweetness and it is brilliantly clear. The overall impression is balance between light sweetness, spice and low to medium fruity ester flavors.",
        imageUrl: beer,
    },
    {
        id: 22,
        name: "Belgian Witbier",
        description: "Belgian-style witbier is brewed using unmalted wheat, sometimes oats and malted barley. Witbiers are spiced with coriander and orange peel. “Wit” means white.",
        imageUrl: beer,
    },
    {
        id: 23,
        name: "Draught",
        description: "Fresh, cold and straight out of the keg. A standard Australian draught beer.",
        imageUrl: beer,
    },
    {
        id: 24,
        name: "English Bitter",
        description: "The English-style bitter is a very sessionable, lower-alcohol, malt-driven style. The light to medium bodied ordinary bitter is gold to copper in color, with a low residual malt sweetness.",
        imageUrl: beer,
    },
    {
        id: 25,
        name: "English Brown-Ale",
        description: "A bona fide English beer classic, English-style brown ale is easily one of the most iconic beer styles. Toasty, robust and with a bit of chocolate maltiness, the English brown ale is a meal in a glass. A dry, roasted version that offers a toasted nut, chocolatey character indicative of brown ales.",
        imageUrl: beer,
    },
    {
        id: 26,
        name: "German Hefeweizen",
        description: "The German-style hefeweizen offers a striking beer experience thanks to the use of distinctive wheat malt, unique yeast and uncharateristic appearance. Showcasing yeast-driven fruit and spice as well as bearing an eye-catching mystique.",
        imageUrl: beer,
    },
    {
        id: 27,
        name: "German Pilsener",
        description: "A German-style pilsner is pale in color with a malty sweetness that can be perceived in aroma and flavor. Hop aroma and flavor are moderate and quite obvious.",
        imageUrl: beer,
    },
    {
        id: 28,
        name: "Lager",
        description: "This Lager is characterized by malty aroma and slight malt sweetness. The malt aroma and flavor should have a notable degree of toasted and/or slightly roasted malt character.",
        imageUrl: beer,
    }
]
const wineList = [
    {
        id: 30,
        colour: "Red Wine:",
        glass: "Glass - $15",
        bottle: "Bottle - $40",
        type1: "Shiraz",
        type2: "Cabernet",
        type3: "Merlot",
        imageUrl: ["https://images.pexels.com/photos/2702805/pexels-photo-2702805.jpeg?cs=srgb&dl=pexels-bernyce-hollingworth-2702805.jpg"]
    },
    {
        id: 31,
        colour: "White Wine:",
        glass: "Glass - $9",
        bottle: "Bottle - $30",
        type1: "Chardonnay",
        type2: "Reisling",
        type3: "Pinot",
        imageUrl: ["https://images.pexels.com/photos/3171735/pexels-photo-3171735.jpeg?cs=srgb&dl=pexels-cottonbro-studio-3171735.jpg"]
    },
    {
        id: 32,
        colour: "Sparkling Wine:",
        glass: "Glass - $12",
        bottle: "Bottle - $35",
        type1: "Champagne",
        type2: "Prosecco",
        type3: "Cava",
        imageUrl: ["https://images.unsplash.com/photo-1613477581402-306fa9dc6b95?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb&dl=oliver-sherwin-f54dnkSRSMc-unsplash.jpg"]
    }
]





export default function BeerPage(){
    return (
        <div className="home-section">   
            <h1>Beverage List</h1>
               
            <Container fluid className="mx-auto">
                <h2><u>Craft Beer</u></h2> 
                <Row >
                    {craftBeer.map(result => {
                        return <Col className="my-2">
                        <MenuCard key={result.id} 
                        name={result.name} 
                        description={result.description} 
                        imageUrl={result.imageUrl} />
                        </Col>
                })} 
                {
                    <Col className="my-2"><BeerSize /></Col>
                }
                </Row>
            </Container>
        
            <Container fluid className="mx-auto">
                <h2><u>Wine List</u></h2> 
                <Row >
                    {wineList.map(result => {
                        return <Col className="my-2">
                        <WineList key={result.id} 
                        colour={result.colour} 
                        glass={result.glass}
                        bottle={result.bottle}
                        type1={result.type1}
                        type2={result.type2}
                        type3={result.type3}
                        imageUrl={result.imageUrl} />
                        </Col>
                })}
                </Row>
            </Container>
            
            <div className="NavHomeBook">
                <ReturnHomeButton />
                <MakeBookingButton />
            </div>

            
        </div>
    )
}