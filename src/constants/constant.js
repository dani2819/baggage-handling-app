export const EVENT_CODES = {
  CHEKCED_IN: {
    message: "Baggage all set to go!",
    submessage: "Have a great trip!",
    type: "start"
  },
  LOADED: {
    message: "Baggage loaded in the plane.",
    submessage: "Have a great trip!",
    type: "progress"
  },
  UNLOADED: {
    message: "Baggage on its way to the belt.",
    submessage: "It will shortly be on the conayer belt C2",
    type: "progress"
  },
  CLAIMED: {
    message: "Baggage Claimed Successfully.",
    submessage: "Thank you for the trip.",
    type: "success"
  },
  DAMAGED: {
    message: "Baggage Damaged.",
    submessage:
      "We are sorry for the inconvinience, our agent will be in contact soon.",
    type: "fail"
  },
  MISSING: {
    message: "Baggage Missing",
    submessage:
      "We are sorry for the inconvinience, We'll update you as soon as we track your baggage.",
    type: "fail"
  }
};
