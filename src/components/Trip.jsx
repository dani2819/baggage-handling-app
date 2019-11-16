import React, { useEffect, useState } from "react";
import { mapTripWithMessages } from "../utils/utils";
import { WhiteSpace } from "antd-mobile";
import { Divider, Timeline, Icon, Card } from "antd";

const Trip = ({ changeTitle }) => {
  const [trip, setTrip] = useState(null);

  useEffect(() => {
    const trip = {
      baggageId: "asdasdasd",
      source: "HKI",
      destination: "KHI",
      date: "November, 16, 2019",
      status: {
        // This is the last event
        eventType: "CHECKED_IN",
        locationName: "Helsinki",
        timeStamp: "2019-01-01"
      },
      events: [
        {
          eventType: "CHECKED_IN",
          locationName: "Istanbul",
          timeStamp: "2019-01-01"
        },
        {
          eventType: "LOADED",
          locationName: "Istanbul",
          timeStamp: "2019-01-01"
        }
      ]
    };
    setTrip(trip);
    changeTitle(`${trip.source} - ${trip.destination}`);
  }, []);

  useEffect(() => {
    changeTitle("Trip");
  }, []);

  if (!trip) {
    return "Loading...";
  }
  const mappedTrip = mapTripWithMessages(trip);
  console.log(mappedTrip);
  const { status } = mappedTrip;
  const mapsSrc = `https://maps.google.com/maps?q=${status.locationName}&t=&z=13&ie=UTF8&iwloc=&output=embed`;
  return (
    <div>
      <iframe width="100%" src={mapsSrc} scrolling="no"></iframe>
      <Divider />
      <WhiteSpace />
      <Card>
        <Card.Meta title={status.message} description={status.submessage} />
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
            <p>{`${event.timeStamp} - ${event.locationName} - ${event.message}`}</p>
            <WhiteSpace />
          </Timeline.Item>
        ))}
      </Timeline>{" "}
    </div>
  );
};

export default Trip;
