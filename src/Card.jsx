import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function BasicExample({src,model}) {
    
  return (
    
    <Card style={{ width: '18rem',height:'300px'}} className='rounded-4' >
       
      <Card.Img variant="top" src={src} className='rounded-4' />
      <Card.Body >
        <Card.Title className='fw-bolder'>{model}</Card.Title>
        
      
      </Card.Body>
    </Card>
  );
}


export default BasicExample;