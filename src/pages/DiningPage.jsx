import MenuCard from "../components/MenuCard";
import ReturnHomeButton from "../components/ReturnHome";
import MenuCardPizza from "../components/MenuCardPizza";
import ChristmasSpecial from "../components/Christmas";

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import MakeBookingButton from "../components/MakeBooking";
import BeerButton from "../components/BeerButton";


// Entree 
const entree = [
    {   
        id: 1,
        name: "Beer battered onion rings $17.50",
        description: "Served with BBQ aioli",
        imageUrl: ["https://images.unsplash.com/photo-1639024471283-03518883512d?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb&dl=esperanza-doronila-4FO9vox0T7M-unsplash.jpg"]
    },
    {
        id: 2,
        name: "Warm cob loaf $12.50",
        description: "Served with olive oil and balsamic vinegar",
        imageUrl: ["https://images.unsplash.com/photo-1600398138360-ae1ac2285bc3?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb&dl=christina-rumpf-akUGEvlqPrg-unsplash.jpg"]
    },
    {
        id: 3,
        name: "Pumpkin, beetroot and goats cheese salad $20",
        description: "Roasted pumpkin, beetroot, marinated goats cheese, baby spinach and toasted walnuts",
        imageUrl: ["https://images.unsplash.com/photo-1505253716362-afaea1d3d1af?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb&dl=taylor-kiser-EvoIiaIVRzU-unsplash.jpg"]
    },
    {
        id: 4,
        name: "Oven roasted stuffed mushrooms $20",
        description: " Fetta cheese, basil pesto, topped with pangrattato",
        imageUrl: ["https://images.pexels.com/photos/5950438/pexels-photo-5950438.jpeg?cs=srgb&dl=pexels-alleksana-5950438.jpg"]
    },
]
// Main
const main = [
    {
        id: 5,
        name: "Crispy Pork Belly $35",
        description: "Smoked aplle sauce, seasonal greens and jus",
        imageUrl: ["https://images.pexels.com/photos/8408373/pexels-photo-8408373.jpeg?cs=srgb&dl=pexels-amanda-lim-8408373.jpg"]
    },
    {
        id: 6,
        name: "Rib-eye Steak $40",
        description: "With red wine jus, kipfler potatoes and sauteed garlic greens",
        imageUrl: ["https://images.pexels.com/photos/18372173/pexels-photo-18372173.jpeg?cs=srgb&dl=pexels-sara-free-18372173.jpg"]
    },
    {
        id: 7,
        name: "Crispy Skin Salmon $35",
        description: "On smashed potatoes with a burnt butter caper reduction",
        imageUrl: ["https://images.pexels.com/photos/3296418/pexels-photo-3296418.jpeg?cs=srgb&dl=pexels-cottonbro-studio-3296418.jpg"]
    },
    {
        id: 8,
        name: "Chicken Breast $35",
        description: "Stuffed with Fetta and sun dried tomato on garlic mash",
        imageUrl: ["https://images.unsplash.com/photo-1642689690500-f429a042cad1?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb&dl=elena-leya-iVOjxsSxqnk-unsplash.jpg"]
    },
]
// Dessert
const dessert = [
    {
        id: 9,
        name: "Chocolate Fondant $20",
        description: "Served with whipped vanilla cream",
        imageUrl: ["https://images.unsplash.com/photo-1505252929202-c4f39cda4d49?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb&dl=taylor-kiser-1su-ueyLoe0-unsplash.jpg"]
    },
    {
        id: 10,
        name: "Apple & Rhubarb crumble $20",
        description: "Served with vanilla bean icecream",
        imageUrl: ["https://images.unsplash.com/photo-1622219787416-19c131b9a983?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb&dl=karolina-kolodziejczak-Q6ZysQ2aSWc-unsplash.jpg"]
    },
    {
        id: 11,
        name: "Panna Cotta $20",
        description: "Served with a berry compote",
        imageUrl: ["https://images.pexels.com/photos/12356497/pexels-photo-12356497.jpeg?cs=srgb&dl=pexels-dan-voican-12356497.jpg"]
    },
    {
        id: 12,
        name: "Basque Cheesecake $20",
        description: "Served with an assortment of fresh berries",
        imageUrl: ["https://images.pexels.com/photos/6607325/pexels-photo-6607325.jpeg?cs=srgb&dl=pexels-geraud-pfeiffer-6607325.jpg"]
    },
]


export default function DiningPage(){
    
    return (

        <div className="home-section">
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
            
            <div className="NavHomeBook">
                <ReturnHomeButton />
                <MakeBookingButton />
                <BeerButton />
            </div>
            
        </div>
    )
}