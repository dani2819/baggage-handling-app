import React, { useEffect, useState } from "react";

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
        eventCode: "BAGGAGE_DROPPED",
        locationName: "Helsinki"
      },
      events: [
        {
          eventType: "CHECKED_IN",
          locationName: "Istanbul",
          timeStamp: "2019-01-01"
        }
      ]
    });
  }, []);

  useEffect(() => {
    changeTitle("Trip");
  }, [changeTitle]);

  if (!trip) {
    return "Loading...";
  }

  return <div>{trip.events[0].eventType}</div>;
};

export default Trip;
