import ReturnHomeButton from "../components/ReturnHome";
import MenuCard from "../components/MenuCard";
import BeerSize from "../components/BeerSize";
import WineList from "../components/WineList";
import DrinkTable from "../components/DrinkTable";

import beer from "../assets/beer.jpg"

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';



export const craftBeer = [
    {
        id: 20,
        name: "India Pale Ale (IPA)",
        description: "One of the most popular craft beers for more than a decade the IPA is characterised by floral, fruity, citrus-like, piney hop character, the IPA beer style is all about hop flavor, aroma and bitterness",
        imageUrl: beer,
        sixPack: "$22",
        sixPackValue: 22,
        slab: "$70",
        slabValue: 70
    },
    {
        id: 21,
        name: "Belgian Blonde Ale",
        description: "The Belgian-style blonde ale is typically easy-drinking, with a low but pleasing hop bitterness. This is a light- to medium-bodied ale, with a low malt aroma that has a spiced and fruity-ester character. This style is medium in sweetness and it is brilliantly clear. The overall impression is balance between light sweetness, spice and low to medium fruity ester flavors.",
        imageUrl: beer,
        sixPack: "$22",
        sixPackValue: 22,
        slab: "$70",
        slabValue: 70
    },
    {
        id: 22,
        name: "Belgian Witbier",
        description: "Belgian-style witbier is brewed using unmalted wheat, sometimes oats and malted barley. Witbiers are spiced with coriander and orange peel. “Wit” means white.",
        imageUrl: beer,
        sixPack: "$22",
        sixPackValue: 22,
        slab: "$70",
        slabValue: 70
    },
    {
        id: 23,
        name: "Draught",
        description: "Fresh, cold and straight out of the keg. A standard Australian draught beer.",
        imageUrl: beer,
        sixPack: "$20",
        sixPackValue: 20,
        slab: "$60",
        slabValue: 60
    },
    {
        id: 24,
        name: "English Bitter",
        description: "The English-style bitter is a very sessionable, lower-alcohol, malt-driven style. The light to medium bodied ordinary bitter is gold to copper in color, with a low residual malt sweetness.",
        imageUrl: beer,
        sixPack: "$20",
        sixPackValue: 20,
        slab: "$60",
        slabValue: 60
    },
    {
        id: 25,
        name: "English Brown-Ale",
        description: "A bona fide English beer classic, English-style brown ale is easily one of the most iconic beer styles. Toasty, robust and with a bit of chocolate maltiness, the English brown ale is a meal in a glass. A dry, roasted version that offers a toasted nut, chocolatey character indicative of brown ales.",
        imageUrl: beer,
        sixPack: "$25",
        sixPackValue: 25,
        slab: "$80",
        slabValue: 80
    },
    {
        id: 26,
        name: "German Hefeweizen",
        description: "The German-style hefeweizen offers a striking beer experience thanks to the use of distinctive wheat malt, unique yeast and uncharateristic appearance. Showcasing yeast-driven fruit and spice as well as bearing an eye-catching mystique.",
        imageUrl: beer,
        sixPack: "$22",
        sixPackValue: 22,
        slab: "$70",
        slabValue: 70
    },
    {
        id: 27,
        name: "German Pilsener",
        description: "A German-style pilsner is pale in color with a malty sweetness that can be perceived in aroma and flavor. Hop aroma and flavor are moderate and quite obvious.",
        imageUrl: beer,
        sixPack: "$22",
        sixPackValue: 22,
        slab: "$70",
        slabValue: 70
    },
    {
        id: 28,
        name: "Lager",
        description: "This Lager is characterized by malty aroma and slight malt sweetness. The malt aroma and flavor should have a notable degree of toasted and/or slightly roasted malt character.",
        imageUrl: beer,
        sixPack: "$20",
        sixPackValue: 20,
        slab: "$60",
        slabValue: 60
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
        imageUrl: beer
    },
    {
        id: 31,
        colour: "White Wine:",
        glass: "Glass - $9",
        bottle: "Bottle - $30",
        type1: "Chardonnay",
        type2: "Reisling",
        type3: "Pinot",
        imageUrl: beer
    },
    {
        id: 32,
        colour: "Sparkling Wine:",
        glass: "Glass - $12",
        bottle: "Bottle - $35",
        type1: "Champagne",
        type2: "Prosecco",
        type3: "Cava",
        imageUrl: beer
    }
]





export default function BeerPage(){
    return (
        <div className="drinks">   
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
                <h2>Other Drinks</h2>
            <div class="other-drinks">
                {/* <h2>Other Drinks</h2> */}

                    <DrinkTable />


                    {/* <strong><u>Soft drinks - $4</u></strong>
                    <ul id="remove">
                        <li>Coke</li>
                        <li>Fanta</li>
                        <li>Lemon Squash</li>
                        <li>Raspberry Lemonade</li>
                    </ul>
                    <strong><u>Coffee - $5</u></strong>
                    <ul id="remove">
                        <li>Latte</li>
                        <li>Cuppacino</li>
                        <li>Flat white</li>
                    </ul>
                    <p><strong><u>Tea - $5</u></strong></p>
                    <p><strong><u>Iced Coffee - $7</u></strong></p>
                    <p><strong><u>Iced Chocolate - $7</u></strong></p>
                    <strong><u>Milkshakes - $8</u></strong>
                    <ul id="remove">
                        <li>Chocolate</li>
                        <li>Strawberry</li>
                        <li>Banana</li>
                    </ul> */}

                
            </div>

            <ReturnHomeButton />
        </div>
    )
}