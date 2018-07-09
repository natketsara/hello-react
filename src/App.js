import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import { fetchData } from "./api.js";

import {
  Card,
  Button,
  CardImg,
  CardTitle,
  CardText,
  CardDeck,
  CardSubtitle,
  CardBody,
  Row,
  Col
} from "reactstrap";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      spaces: null
    };
  }

  componentDidMount = async () => {
    let data = await fetchData();
    this.setState({ spaces: data });
  };

  render() {
    return (
      <CardDeck>
        <Row>
          {this.state.spaces != null
            ? this.state.spaces.page.entities.map((data, index) => {
                return (
                  <Col sm="6">
                    <CreateCard
                      key={index}
                      image={data.imageUrl}
                      spaceName={data.spaceName}
                      venueName={data.venueName}
                      price={data.price}
                    />
                  </Col>
                );
              })
            : null}
        </Row>
      </CardDeck>
    );
  }
}

class CreateCard extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { image, spaceName, venueName, price } = this.props;
    return (
      <Card>
        <CardImg top width="20%" src={image} alt="Card image cap" />
        <CardBody>
          <CardTitle>{spaceName}</CardTitle>
          <CardSubtitle>{venueName}</CardSubtitle>
          <CardText>{price}/ชั่วโมง</CardText>
        </CardBody>
      </Card>
    );
  }
}

export default App;
