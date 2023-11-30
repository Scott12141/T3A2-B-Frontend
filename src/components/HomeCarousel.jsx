import Carousel from 'react-bootstrap/Carousel';


function HomeCarousel() {
    return (
        <Carousel data-bs-theme="dark">
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="https://images.unsplash.com/photo-1606380588857-be5f032aeeee?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb&dl=libby-penner-tk2oBayHYwg-unsplash.jpg"
              alt="Christmas Special"
            />
            <Carousel.Caption>
              <h5>Christmas Special</h5>
              <p>Check out our Christmas day <a href="/dining">special menu</a>, that is for designed for groups of 4 plus  </p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="holder.js/800x400?text=Second slide&bg=eee"
              alt="Second slide"
            />
            <Carousel.Caption>
              <h5>Second slide label</h5>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="holder.js/800x400?text=Third slide&bg=e5e5e5"
              alt="Third slide"
            />
            <Carousel.Caption>
              <h5>Third slide label</h5>
              <p>
                Praesent commodo cursus magna, vel scelerisque nisl consectetur.
              </p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      );
    }

export default HomeCarousel;