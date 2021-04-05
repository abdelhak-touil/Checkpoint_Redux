import React from "react";
import { Container, Row } from "reactstrap";
import UserCard from "./UserCard";
import { list } from "../const/Const";
import { Redirect } from "react-router-dom";
function UsersList({ isLogin }) {
  return (
    <>
      {!isLogin ? (
        <Redirect to="/" />
      ) : (
        <Container>
          <Row>
            {list.map((user, i) => (
              <UserCard key={i} user={user} />
            ))}
          </Row>
        </Container>
      )}
    </>
  );
}

export default UsersList;
