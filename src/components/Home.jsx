import React from "react";
import { Icon } from "antd";
import { Button, WhiteSpace } from "antd-mobile";
import { getUserBaggageData } from "../services/userApi";
import { Card, Timeline } from "antd";
import moment from "moment";

import "../styles/Home.less";

const FloatingButton = props => (
  <Button type="primary" className="floating-btn" onClick={props.onBtnClick}>
    <Icon type="camera" twoToneColor={true} /> {"  "}
    Track a new baggage
  </Button>
);

class Home extends React.Component {
  state = { trips: null };
  onFloatingBtnClicked(e) {
    e.preventDefault();
    return this.props.history.push("/qr-reader");
  }
  async componentDidMount() {
    this.props.changeTitle("Your Trips");
    const baggageData = await getUserBaggageData(
      localStorage.getItem("fbToken");
    );
    this.setState({ trips: baggageData.data.data });
  }

  changeRoute = url => this.props.history.push(url);

  render() {
    const { trips } = this.state;

    if (!trips) {
      return <p>Loading...</p>;
    }

    return (
      <>
        <FloatingButton onBtnClick={this.onFloatingBtnClicked.bind(this)} />
        <WhiteSpace />
        <div className="trips">
          <Timeline>
            {trips &&
              trips.map(trip => (
                <Timeline.Item>
                  <Card
                    className="trip"
                    onClick={() => {
                      this.changeRoute("/trip/" + trip.baggageId);
                    }}
                  >
                    <h1>{`${trip.source} - ${trip.destination}`}</h1>
                    <p>{`${moment(trip.date).format("MMM Do YY, h:mm A")}`}</p>
                  </Card>
                </Timeline.Item>
              ))}
            {!trips && (
              <>
                <br />
                <br />
                <h2>Sorry no trips available, start by adding a Trip!</h2>
              </>
            )}
          </Timeline>
        </div>
      </>
    );
  }
}

export default Home;
