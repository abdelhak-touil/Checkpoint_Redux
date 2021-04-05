import React from "react";
import { Redirect, useParams } from "react-router-dom";
import { Container, Jumbotron, Row } from "reactstrap";
import { list } from "../const/Const";
function Profile({ isLogin }) {
  // console.log(props);
  // const userId = props.match.params.userId;
  const { userId } = useParams();
  const user = list.find((user) => user.id === Number(userId));
  // console.log(user);
  return (
    <>
      {!isLogin ? (
        <Redirect to="/" />
      ) : (
        <Container>
          <Jumbotron>
            <Row className="d-flex justify-content-center align-items-center">
              <p
                style={{
                  width: "100px",
                  height: "100px",
                  fontSize: "1.5em",
                }}
                className="d-flex justify-content-center align-items-center mr-auto border rounded-circle text-light bg-info text-md"
              >
                {/* check if the user and the user.name  is truthy  */}
                {user.name[0]}
              </p>
              {/* check if the user and the user.name  is truthy  */}

              <h1 className="display-3 col">{user.name}</h1>
              {/* check if the user and the user.name  is truthy  */}

              <p className="lead text-center col">
                {/* check if the user and the user.address  is truthy   */}
                {user.address.street},{user.address.suite},{user.address.city}
                {/* access to the nested object element  with es11 style user?.address?.street   => value of street */}
              </p>
            </Row>
          </Jumbotron>
        </Container>
      )}
    </>
  );
}

export default Profile;
