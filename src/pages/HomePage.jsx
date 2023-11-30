import HomeCarousel from "../components/HomeCarousel";
import Container from 'react-bootstrap/Container';

export default function HomePage(props){
    return (
        <div className="home-section">
            <h1>Welcome to TMDB!</h1>

            <Container>
                <HomeCarousel />
            </Container>
            
        </div>

        
    )
}