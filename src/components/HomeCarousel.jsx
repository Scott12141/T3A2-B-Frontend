import Carousel from 'react-bootstrap/Carousel';
import { Link } from 'react-router-dom';

function HomeCarousel() {
    return (
        <Carousel data-bs-theme="dark">
          <Carousel.Item >
            <img 
              className="d-block w-100"
              src="https://images.unsplash.com/photo-1606380588857-be5f032aeeee?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb&dl=libby-penner-tk2oBayHYwg-unsplash.jpg"
              alt="Christmas Special"
            />
            <Carousel.Caption style={{ color: 'yellow'}}>
              <h5>Christmas Special</h5>
              <p>Check out our Christmas day <Link to="/dining">special menu</Link>, that is for designed for groups of 4 plus as a set menu with a main of your choice.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="https://images.unsplash.com/photo-1436018626274-89acd1d6ec9d?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb&dl=taylor-davidson-iwWJFIlnDm4-unsplash.jpg"
              alt="Taylor made Thursdays"
            />
            <Carousel.Caption style={{ color: 'red'}}>
              <h5>Taylor made Thursdays!</h5>
              <p>Every Thursday night at Taylor Made Dining & Brewery, we will be running the promotion for Taylor Made Thursdays. All meals on the dining menu will be 25% off the rrp. <Link to="/bookings">Make sure to book asap</Link> as tables go quickly for this amazing offer!</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img style={{height: '75%'}}
              className="d-block w-100"
              src="https://images.unsplash.com/photo-1636735117050-4ca3b871cc5e?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb&dl=bohdan-stocek-iBoQPGoUx8Q-unsplash.jpg"
              alt="IPA Beer"
            />
            <Carousel.Caption style={{ color: 'white'}}>
              <h5>All new Taylor Made IPA.</h5>
              <p> Come and try the latest craft beer brewed at <Link to="/beer">Taylor Made Dining and Brewery</Link>, The Taylor made IPA. This beer is all about the hop flavour, aroma and bitterness from our hops, grown and curated on site in our Taylor Made hop garden. </p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      );
    }

export default HomeCarousel;