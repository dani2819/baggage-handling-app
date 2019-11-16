import React, { useEffect, useState } from "react";
import { mapTripWithMessages } from "../utils/utils";
import { WhiteSpace } from "antd-mobile";
import { Divider, Timeline, Icon, Card } from "antd";

const Trip = ({ changeTitle }) => {
  const [trip, setTrip] = useState(null);

  useEffect(() => {
    setTrip({
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
    });
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
  return (
    <div>
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
            <p>{`${event.timeStamp} - ${event.message} - ${event.locationName}`}</p>
            <WhiteSpace />
          </Timeline.Item>
        ))}
      </Timeline>{" "}
    </div>
  );
};

export default Trip;
