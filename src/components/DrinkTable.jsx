// import Table from 'react-bootstrap/Table';

import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';


function DrinkTable() {
  return (
    <Card className="other-drink">
      <ListGroup variant="flush">
        <ListGroup.Item><strong>Soft Drinks - $4</strong></ListGroup.Item>
        <ListGroup.Item>Coke</ListGroup.Item>
        <ListGroup.Item>Pepsi</ListGroup.Item>
        <ListGroup.Item>Lemonade</ListGroup.Item>
        <ListGroup.Item>Fanta</ListGroup.Item>
        <ListGroup.Item>Lemon Squash</ListGroup.Item>
        <ListGroup.Item>Raspberry Lemonade</ListGroup.Item>
      </ListGroup>
      <ListGroup variant="flush">
        <ListGroup.Item><strong>Diet Soft Drinks - $4</strong></ListGroup.Item>
        <ListGroup.Item>Coke Zero</ListGroup.Item>
        <ListGroup.Item>Pepsi Max</ListGroup.Item>
        <ListGroup.Item>Diet Lemonade</ListGroup.Item>
        <ListGroup.Item>Diet Fanta</ListGroup.Item>
        <ListGroup.Item>Diet Lemon Squash</ListGroup.Item>
      </ListGroup>
      <ListGroup variant="flush">
        <ListGroup.Item><strong>Coffee - $5</strong></ListGroup.Item>
        <ListGroup.Item>Latte</ListGroup.Item>
        <ListGroup.Item>Cappacino</ListGroup.Item>
        <ListGroup.Item>Flat white</ListGroup.Item>
      </ListGroup>
      <ListGroup variant="flush">
        <ListGroup.Item><strong>Milkshakes - $8</strong></ListGroup.Item>
        <ListGroup.Item>Chocolate</ListGroup.Item>
        <ListGroup.Item>Strawberry</ListGroup.Item>
        <ListGroup.Item>Banana</ListGroup.Item>
      </ListGroup>
      <ListGroup variant="flush">
        <ListGroup.Item><strong>Misc.</strong></ListGroup.Item>
        <ListGroup.Item>Tea - $5</ListGroup.Item>
        <ListGroup.Item>Iced Coffee - $8</ListGroup.Item>
        <ListGroup.Item>Iced Chocolate - $8</ListGroup.Item>
      </ListGroup>
    </Card>
  );
}

export default DrinkTable;











// function DrinkTable() {
//   return (
//     <div>
//       <Table responsive>
//         <thead>
//           <tr>
//             <th>Soft Drinks - $4</th>
//             <th>Diet Soft Drinks - $4</th>
//             <th>Coffee - $5</th>
//             <th>Milkshakes - $8</th>
//             <th>Misc.</th>
//           </tr>
//         </thead>
//         <tbody>
//           <tr>
//             <td>Coke</td>
//             <td>Coke Zero</td>
//             <td>Latte</td>
//             <td>Table cell</td>
//             <td>Table cell</td>
//           </tr>
//           <tr>
//             <td>2</td>
//             <td>Table cell</td>
//             <td>Table cell</td>
//             <td>Table cell</td>
//             <td>Table cell</td>
//           </tr>
//           <tr>
//             <td>3</td>
//             <td>Table cell</td>
//             <td>Table cell</td>
//             <td>Table cell</td>
//             <td>Table cell</td>
//           </tr>
//         </tbody>
//       </Table>
//     </div>
// );
// }

// export default DrinkTable;