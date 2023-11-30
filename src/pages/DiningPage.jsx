import MenuCard from "../components/MenuCard";
import ReturnHomeButton from "../components/ReturnHome";
import MenuCardPizza from "../components/MenuCardPizza";
import ChristmasSpecial from "../components/Christmas";

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import onionrings from "../assets/onionrings.jpg";
import loaf from "../assets/loaf.jpg";
import salad from "../assets/salad.jpg";




// Entree 
const entree = [
    {
        id: 1,
        name: "Beer battered onion rings $17.50",
        description: "Served with BBQ aioli",
        imageUrl: onionrings
    },
    {
        id: 2,
        name: "Warm cob loaf $12.50",
        description: "Served with olive oil and balsamic vinegar",
        imageUrl: loaf
    },
    {
        id: 3,
        name: "Pumpkin, beetroot and goats cheese salad $20",
        description: "Roasted pumpkin, beetroot, marinated goats cheese, baby spinach and toasted walnuts",
        imageUrl: salad
    },
    {
        id: 4,
        name: "Oven roasted stuffed mushrooms $20",
        description: " Fetta cheese, basil pesto, topped with pangrattato",
        imageUrl: onionrings
    },
]
// Main
const main = [
    {
        id: 5,
        name: "Crispy Pork Belly $35",
        description: "Smoked aplle sauce, seasonal greens and jus",
        imageUrl: onionrings
    },
    {
        id: 6,
        name: "Rib-eye Steak $40",
        description: "With red wine jus, kipfler potatoes and sauteed garlic greens",
        imageUrl: loaf
    },
    {
        id: 7,
        name: "Crispy Skin Salmon $35",
        description: "On smashed potatoes with a burnt butter caper reduction",
        imageUrl: salad
    },
    {
        id: 8,
        name: "Chicken Breast $35",
        description: "Stuffed with Fetta and sun dried tomato on garlic mash",
        imageUrl: onionrings
    },
]
// Dessert
const dessert = [
    {
        id: 9,
        name: "Chocolate Fondant $20",
        description: "Served with whipped vanilla cream",
        imageUrl: onionrings
    },
    {
        id: 10,
        name: "Apple & Rhubarb crumble $20",
        description: "Served with vanilla bean icecream",
        imageUrl: onionrings
    },
    {
        id: 11,
        name: "Panna Cotta $20",
        description: "Served with a berry compote",
        imageUrl: onionrings
    },
    {
        id: 12,
        name: "Basque Cheesecake $20",
        description: "Served with an assortment of fresh berries",
        imageUrl: onionrings
    },
]


export default function DiningPage(){
    
    return (

        <div>
            <h1>The Dining Menu</h1>

            <Container fluid className="mx-auto">
                <ChristmasSpecial />
            </Container>
            

            

            {/* Entree */}
            <Container fluid className="mx-auto">
                <h2><u>Entrees</u></h2>
                <Row >
                    {entree.map(result => {
                        return <Col className="my-2">
                        <MenuCard key={result.id} 
                        name={result.name} 
                        description={result.description} 
                        imageUrl={result.imageUrl} />
                        </Col>
                })}
                </Row>
                
            </Container>

            {/* Main */}
            <Container fluid className="mx-auto">
                <h2><u>Mains</u></h2>
                <Row >
                    {main.map(result => {
                        return <Col className="my-2">
                        <MenuCard key={result.id} 
                        name={result.name} 
                        description={result.description} 
                        imageUrl={result.imageUrl} />
                        </Col>
                    })}
                    {
                    <Col className="my-2"><MenuCardPizza /></Col>
                    }

                    
                </Row>
            </Container>

            {/* Dessert */}
            <Container fluid className="mx-auto">
                <h2><u>Desserts</u></h2>
                <Row >
                    {dessert.map(result => {
                        return <Col className="my-2">
                        <MenuCard key={result.id} 
                        name={result.name} 
                        description={result.description} 
                        imageUrl={result.imageUrl} />
                        </Col>
                })}
                </Row>
            </Container>

            <ReturnHomeButton />
        </div>
    )
}