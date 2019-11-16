import React from "react";
import { Icon } from "antd";
import { Button, WhiteSpace } from "antd-mobile";
import { Card, Timeline } from "antd";

import "../styles/Home.less";

const FloatingButton = props => (
  <Button type="primary" className="floating-btn" onClick={props.onBtnClick}>
    <Icon type="camera" twoToneColor={true} /> {"  "}
    Track a new baggage
  </Button>
);
class Home extends React.Component {
  state = {
    trips: [
      {
        baggageId: "asdasdasd",
        source: "HKI",
        destination: "KHI",
        date: "November, 16, 2019",
        status: {
          // This is the last event
          eventCode: "BAGGAGE_DROPPED",
          locationName: "Helsinki"
        }
      },
      {
        baggageId: "asdasdasd",
        source: "HKI",
        destination: "KHI",
        date: "November, 16, 2019",
        status: {
          // This is the last event
          eventCode: "BAGGAGE_DROPPED",
          locationName: "Helsinki"
        }
      },
      {
        baggageId: "asdasdasd",
        source: "HKI",
        destination: "KHI",
        date: "November, 16, 2019",
        status: {
          // This is the last event
          eventCode: "BAGGAGE_DROPPED",
          locationName: "Helsinki"
        }
      }
    ]
  };
  onFloatingBtnClicked(e) {
    e.preventDefault();
    return this.props.history.push("/qr-reader");
  }
  componentDidMount() {
    this.props.changeTitle("Your Trips");
  }

  changeRoute = url => this.props.history.push(url);

  render() {
    const { trips } = this.state;
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
                    <p>{`${trip.date}`}</p>
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
