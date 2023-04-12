import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import AuthService from "../service/auth";
import { useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";

function Profile() {
  const { username } = useParams();
  const { user } = useSelector((state) => state.auth);
  const getUser = async () => {
    try {
      const response = await AuthService.user(username);
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  };
  getUser();
  return (
    <Card style={{ width: "26rem", margin: "10px auto" }}>
      <Card.Img
        variant="top"
        src={user?.image}
        style={{ width: "100%", height: "240px", margin: "1px auto" }}
      />
      <Card.Body>
        <Card.Title>Author Profile</Card.Title>
        <Card.Text>{user?.bio}</Card.Text>
      </Card.Body>
      <ListGroup className="list-group-flush">
        <ListGroup.Item>{user?.username}</ListGroup.Item>
        <ListGroup.Item>{user?.email}</ListGroup.Item>
      </ListGroup>
      <Card.Body></Card.Body>
    </Card>
  );
}

export default Profile;
