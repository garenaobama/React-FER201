import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function Product() {
  return (
    <Card className='col-12 col-md-6 col-xl-3'>
      <Card.Img variant="top" src="..\assets\images\product.jpg" />
      <Card.Body>
        <Card.Title>Yasuo</Card.Title>
        <Card.Text>
          Love is like a wind, always by my side
        </Card.Text>
        <Button variant="primary">Buy Now</Button>
      </Card.Body>
    </Card>
  );
}

export default Product;