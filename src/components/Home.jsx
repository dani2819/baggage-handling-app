import React from "react";
import { Icon } from "antd";
import { Button, WhiteSpace } from "antd-mobile";
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
        source: "Helsinki",
        destination: "Karachi",
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
  render() {
    const { trips } = this.state;
    return (
      <>
        <FloatingButton onBtnClick={this.onFloatingBtnClicked.bind(this)} />
        <WhiteSpace />
        <div className="trips">
          {trips && trips.map(trip => <div className="trip"></div>)}
          {trips && (
            <>
              <br />
              <br />
              <h2>Sorry no trips available, start by adding a Trip!</h2>
            </>
          )}
        </div>
      </>
    );
  }
}

export default Home;
