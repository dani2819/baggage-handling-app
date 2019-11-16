import React, { useEffect, useState } from "react";
import { mapTripWithMessages } from "../utils/utils";
import { WhiteSpace } from "antd-mobile";
import moment from "moment";
import { Divider, Timeline, Icon, Card, Button, Avatar } from "antd";
import { getBaggageData } from "../services/userApi";
import "../styles/Trip.less";

const Trip = ({ changeTitle, match }) => {
  const [trip, setTrip] = useState(null);

  useEffect(() => {
    const getTrip = async () => {
      const trip = await getBaggageData(match.params.id);
      setTrip(trip.data.data);
    };

    getTrip();
  }, []);

  useEffect(() => {
    changeTitle("Trip");
  }, []);
  if (!trip) {
    return "Loading...";
  }
  const mappedTrip = mapTripWithMessages(trip);
  const { latestEvent } = mappedTrip;
  const mapsSrc = `https://maps.google.com/maps?q=${latestEvent.location}&t=&z=13&ie=UTF8&iwloc=&output=embed`;
  return (
    <div>
      <iframe width="100%" src={mapsSrc} scrolling="no"></iframe>
      <Divider style={{ margin: "10px 0px" }} />
      <Card>
        <Card.Meta
          avatar={
            <Avatar src="https://media.istockphoto.com/photos/traveler-with-suitcase-in-airport-conceptyoung-girl-walking-with-picture-id874914576?k=6&m=874914576&s=612x612&w=0&h=uwjSxiRdodA1-ZM_pb-m_pk_t7eDHHUcRAiImjQxfL4=" />
          }
          title={latestEvent.message}
          description={latestEvent.submessage}
        />
      </Card>
      <Divider style={{ margin: "10px 0px" }} />
      <h2>Baggage History</h2>
      <WhiteSpace />
      <Timeline style={{ fontWeight: "bold" }}>
        {mappedTrip.events.map(event => (
          <Timeline.Item
            dot={
              <Icon
                type={event.type == "fail" ? "clock-circle-o" : "check-circle"}
                style={{ fontSize: "16px" }}
              />
            }
          >
            <p>{`${moment(event.timestamp).format(`h:mm A`)} - ${
              event.location
            } - ${event.message}`}</p>
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
