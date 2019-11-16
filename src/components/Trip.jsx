import React, { useEffect, useState } from "react";
import { mapTripWithMessages } from "../utils/utils";
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
  return <div> {trip.baggageId}</div>;
};

export default Trip;
