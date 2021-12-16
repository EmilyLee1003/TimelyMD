import React from "react";
import ListGroup from "react-bootstrap/ListGroup";

function SavedList(props) {
  return (
    <div>
      <ListGroup as="ul">
        <ListGroup.Item as="li" onClick={props.onClick}>
          {props.list}
        </ListGroup.Item>
      </ListGroup>
    </div>
  );
}

export default SavedList;
