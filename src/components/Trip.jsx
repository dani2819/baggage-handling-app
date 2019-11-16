import React, { useEffect, useState } from "react";
import { mapTripWithMessages } from "../utils/utils";
import { WhiteSpace } from "antd-mobile";
import { Divider, Timeline, Icon, Card, Button } from "antd";
import { getBaggageData } from "../services/userApi";
import "../styles/Trip.less";

const Trip = ({ changeTitle, match }) => {
  const [trip, setTrip] = useState(null);

  useEffect(() => {
    const getTrip = async () => {
      const trip = await getBaggageData(match.params.id);
      setTrip(trip.data.data);
      console.log(trip.data.data);
    };
    getTrip();
    //changeTitle(`${trip.source} - ${trip.destination}`);
  }, []);

  useEffect(() => {
    changeTitle("Trip");
  }, []);
  if (!trip) {
    return "Loading...";
  }
  const mappedTrip = mapTripWithMessages(trip);
  console.log(mappedTrip);
  const { latestEvent } = mappedTrip;
  const mapsSrc = `https://maps.google.com/maps?q=${latestEvent.location}&t=&z=13&ie=UTF8&iwloc=&output=embed`;
  return (
    <div>
      <iframe width="100%" src={mapsSrc} scrolling="no"></iframe>
      <Divider />
      <WhiteSpace />
      <Card>
        <Card.Meta
          title={latestEvent.message}
          description={latestEvent.submessage}
        />
      </Card>
      <WhiteSpace />
      <Divider />
      <h1>Baggage History</h1>
      <WhiteSpace />
      <Timeline>
        {mappedTrip.events.map(event => (
          <Timeline.Item
            dot={
              <Icon
                type={event.type == "fail" ? "clock-circle-o" : "check-circle"}
                style={{ fontSize: "16px" }}
              />
            }
          >
            <p>{`${event.timeStamp} - ${event.location} - ${event.message}`}</p>
            <WhiteSpace />
          </Timeline.Item>
        ))}
      </Timeline>{" "}
      <br />
      <br />
      <br />
      <div className="report-luggage">
        <h3>Report Luggage</h3>
        <Button type="danger">Broken</Button>{" "}
        <Button type="danger">Missing</Button>
      </div>
    </div>
  );
};

export default Trip;
