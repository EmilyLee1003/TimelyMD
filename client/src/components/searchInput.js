import React from "react";
import InputGroup from "react-bootstrap/InputGroup";
import FormControl from "react-bootstrap/FormControl";
import Button from "react-bootstrap/Button";
import "bootstrap/dist/css/bootstrap.min.css";

function SearchInput(props) {
  return (
    <div>
      <label>
        <InputGroup className="mb-3">
          <FormControl
            placeholder="City Name"
            aria-label="City Name"
            aria-describedby="basic-addon2"
            onChange={props.onChange}
          />
          <Button
            variant="outline-secondary"
            id="button-addon2"
            onClick={props.onClick}
          >
            Search
          </Button>
        </InputGroup>
      </label>
    </div>
  );
}

export default SearchInput;
