import React from "react";
import { Table, Button } from "reactstrap";
import {
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  CardSubtitle,
} from "reactstrap";
import APIURL from "../helpers/environment";
import gold from "../images/gold.jpg";

const FishTable = (props) => {
  const deleteFish = (fished) => {
    fetch(`${APIURL}api/fished/delete/${fished.id}`, {
      method: "DELETE",
      headers: new Headers({
        "Content-Type": "application/json",
        Authorization: props.token,
      }),
    }).then(() => props.fetchFishPost());
  };

  const fishMapper = () => {
    return props.fished.map(function (fished, index) {
      return (
        <div key={index} className="cards">
          <Card>
            <CardImg
              style={{ width: 750, height: 350 }}
              src={fished.photo ? fished.photo : gold}
              alt="fish"
            />
            <CardBody
              style={{ width: 750, height: 250, backgroundColor: "white" }}
            >
              <CardTitle>{fished.createdAt}</CardTitle>
              <CardSubtitle></CardSubtitle>

              <CardText>
                Species: {fished.species}
                <br></br>
                Size: {fished.size} inches
                <br></br>
                Fly: {fished.fly}
                <br></br>
                Location: {fished.location}
                <br></br>
                <br></br>
                <Button
                  style={{ background: "green", width: "30%", margin: "5%" }}
                  onClick={() => {
                    props.editUpdateFish(fished);
                    props.updateOn();
                  }}
                >
                  Update
                </Button>
                <Button
                  style={{ background: "red", width: "30%", margin: "5%" }}
                  onClick={() => {
                    deleteFish(fished);
                  }}
                >
                  Delete
                </Button>
                {/* </div> */}
              </CardText>
            </CardBody>
          </Card>
          <br></br>
        </div>
      );
    });
  };

  return <div className="title">{fishMapper()}</div>;
};

export default FishTable;
