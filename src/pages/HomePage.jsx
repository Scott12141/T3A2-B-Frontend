import HomeCarousel from "../components/HomeCarousel";
import Container from 'react-bootstrap/Container';

export default function HomePage(props){
    return (
        <div className="home-section">

            <Container>
                <HomeCarousel />
            </Container>
            
        </div>

        
    )
}