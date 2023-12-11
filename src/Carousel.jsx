import Carousel from 'react-bootstrap/Carousel';

import { MouseParallax } from 'react-just-parallax';

function UncontrolledExample() {
  return (
    <Carousel fade>
      <Carousel.Item interval={1000}> 
      <div className='wrapper'>
  <MouseParallax enableOnTouchDevice >
       <img className="d-block w-100" src={"https://www.lexusindia.co.in/content/dam/lexus-v3-blueprint/models/sedan/ls/mlp/my23/masthead/lexus-ls-mlp-masthead-d.jpg"} alt="First slide"/>
        <Carousel.Caption>
          <h3>Lexus</h3>
         
        </Carousel.Caption>
        </MouseParallax>
</div>
      </Carousel.Item>
      <Carousel.Item interval={500}>
      <div className='wrapper'>
  <MouseParallax enableOnTouchDevice >
      <img className="d-block w-100" src={"https://www.lexusindia.co.in/content/dam/lexus-v3-india/model-pages/ls/mlp/my23/gallery/lexus-mlp-ls-gallery-new-ext-07-d-1920x800.jpg"} alt="Second slide"/>
        <Carousel.Caption>
        <h3>Lexus</h3>
        </Carousel.Caption>
        </MouseParallax>
</div>
      </Carousel.Item>
      <Carousel.Item interval={500}>
      <div className='wrapper'>
  <MouseParallax enableOnTouchDevice >
      <img className="d-block w-100" src={"https://www.lexusindia.co.in/content/dam/lexus-v3-blueprint/models/sedan/ls/mlp/my21/gallery/lexus-mlp-ls-gallery-ext-06-d.jpg"} alt="Third slide"/>
        <Carousel.Caption>
        <h3>Lexus</h3>
        </Carousel.Caption>
        </MouseParallax>
</div>
      </Carousel.Item>
      
    </Carousel>
  );
}

export default UncontrolledExample;