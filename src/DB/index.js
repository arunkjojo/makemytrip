// // SearchIcons //

export const Icons = [
  {
    id: 1,
    name: "Flight",
    icon: "-4px -39px",
    activeIcon: "-4px 0",
    path: "/flight",
  },
  {
    id: 2,
    name: "Hostels",
    icon: "-50px -37px",
    activeIcon: "-50px 1px",
    path: "/hostel",
  },
  {
    id: 3,
    name: "Home Stay",
    icon: "-105px -153px",
    activeIcon: "-105px -193px",
    path: "/home-stay",
  },
  {
    id: 4,
    name: "Holiday Packages",
    icon: "-70px -235px",
    activeIcon: "-14px -235px",
    path: "/holiday-pack",
  },
  {
    id: 5,
    name: "Train",
    icon: "-179px -37px",
    activeIcon: "-179px 1px",
    path: "/train",
  },
  {
    id: 6,
    name: "Bus",
    icon: "-115px -38px",
    activeIcon: "-114px 1px",
    path: "/bus",
  },
  {
    id: 7,
    name: "Cabs",
    icon: "-147px -39px",
    activeIcon: "-147px 1px",
    path: "/cabs",
  },
  {
    id: 8,
    name: "Visa",
    icon: "-153px -154px",
    activeIcon: "-153px -197px",
    path: "/visa",
  },
  {
    id: 9,
    name: "Charted Flight",
    icon: "-122px -72px",
    activeIcon: "-73px -72px",
    path: "/charted-flight",
  },
  {
    id: 10,
    name: "Activities",
    icon: "-207px -72px",
    activeIcon: "-164px -72px",
    path: "/activities",
  },
];

// // SearchTrip //

export const tripLabel = ["ONEWAY", "ROUND TRIP", "MULTI CITY"];

// // SearchFare //

export const Fare = [
  {
    id: 1,
    name: "Regular",
  },
  {
    id: 2,
    name: "Armed Force",
    newItem: true,
    description: {
      label: "Armed Forces Fares",
      message:
        "Applicable for serving and retired personnel of Armed Forces and Paramilitary Forces, their recognised dependants like spouses and children, and war widows. It is mandatory to show a valid ID or dependant card at the airport, without which boarding might be denied.",
    },
  },
  {
    id: 3,
    name: "Student",
    description: {
      label: "Student Fares",
      message:
        "Only students above 12 years of age are eligible for special fares and/or additional baggage allowances. Carrying valid student ID cards and student visas (where applicable) is mandatory, else the passenger may be denied boarding or asked to pay for extra baggage.",
    },
  },
  {
    id: 4,
    name: "Senior Citizen",
    description: {
      label: "Senior Citizen Fares",
      message:
        "Only senior citizens above the age of 60 years can avail this special fare. It is mandatory to produce proof of Date of Birth at the airport, without which prevailing fares will be charged.",
    },
  },
  {
    id: 5,
    name: "Double Seat",
    description: {
      label: "Fly Safer with Double Seat",
      message:
        "Double Seat service is available only for domestic one-way economy flights. You can continue to book at the regular fare or change your search parameter(s) to avail of this service.",
    },
  },
];

export const Trend = ["Pune --> Delhi", "Bangalore --> Chennai"];
// // LocationWidget //

export const locationData = [
  {
    id: "recent_data",
    itemName: "Recent Search",
    data: [
      {
        id: "r1",
        name: "Delhi",
        contry: "India",
        code: "DEL",
        description: "Delhi Airport",
      },
      {
        id: "r2",
        name: "Mumbai",
        contry: "India",
        code: "BOM",
        description: "Chhatrapati Shivaji International Airport",
      },
    ],
  },
  {
    id: "popular_data",
    itemName: "Popular City",
    data: [
      {
        id: "p1",
        name: "Delhi",
        contry: "India",
        code: "DEL",
        description: "Delhi Airport",
      },
      {
        id: "p2",
        name: "Mumbai",
        contry: "India",
        code: "BOM",
        description: "Chhatrapati Shivaji International Airport",
      },
      {
        id: "p3",
        name: "Mumbai",
        contry: "India",
        code: "BOM",
        description: "Chhatrapati Shivaji International Airport",
      },
      {
        id: "p4",
        name: "Delhi",
        contry: "India",
        code: "DEL",
        description: "Delhi Airport",
      },
      {
        id: "p5",
        name: "Mumbai",
        contry: "India",
        code: "BOM",
        description: "Chhatrapati Shivaji International Airport",
      },
      {
        id: "p6",
        name: "Bangalore",
        contry: "India",
        code: "BEN",
        description: "Bangalore Airport",
      },
      {
        id: "p7",
        name: "Kolkatha",
        contry: "India",
        code: "KOL",
        description: "Kolkatha International Airport",
      },
      {
        id: "p8",
        name: "Chennai",
        contry: "India",
        code: "CHE",
        description: "Chennai Airport",
      },
    ],
  },
];

// // TravellerClassList //

export const TravellerData = [
  "Economy/Premium Economy",
  "Premium Economy",
  "Business",
];

export const suggection_flight = [
  {
    id: "suggection_flight",
    itemName: "SUGGESTIONS",
    data: [
      {
        id: "f1",
        description: "Indira Gandhi International Airport",
        name: "New Delhi",
        country: "India",
        countryCode: "IN",
        code: "DEL",
        icon: "https://imgak.mmtcdn.com/flights/assets/media/dt/common/icons/ic-flight-onward.png",
      },
      {
        id: "f2",
        description: "Jolly Grant Airport",
        name: "Dehradun",
        country: "India",
        countryCode: "IN",
        code: "DED",
        icon: "https://imgak.mmtcdn.com/flights/assets/media/dt/common/icons/ic-flight-onward.png",
      },
      {
        id: "f3",
        description: "Mohanbari Airport",
        name: "Dibrugarh",
        country: "India",
        countryCode: "IN",
        code: "DIB",
        icon: "https://imgak.mmtcdn.com/flights/assets/media/dt/common/icons/ic-flight-onward.png",
      },
      {
        id: "f4",
        description: "Dimapur Airport",
        name: "Dimapur",
        country: "India",
        countryCode: "IN",
        code: "DMU",
        icon: "https://imgak.mmtcdn.com/flights/assets/media/dt/common/icons/ic-flight-onward.png",
      },
      {
        id: "f5",
        description: "Darbhanga Airport",
        name: "Darbhanga",
        country: "India",
        countryCode: "IN",
        code: "DBR",
        icon: "https://imgak.mmtcdn.com/flights/assets/media/dt/common/icons/ic-flight-onward.png",
      },
      {
        id: "f6",
        description: "Indira Gandhi International Airport",
        name: "New Delhi",
        country: "India",
        countryCode: "IN",
        code: "DEL",
        icon: "https://imgak.mmtcdn.com/flights/assets/media/dt/common/icons/ic-flight-onward.png",
      },
      {
        id: "f7",
        description: "Sardar Vallabhbhai Patel International Airport",
        name: "Ahmedabad",
        country: "India",
        countryCode: "IN",
        code: "AMD",
        icon: "https://imgak.mmtcdn.com/flights/assets/media/dt/common/icons/ic-flight-onward.png",
      },
      {
        id: "f8",
        description: "Sri Guru Ram Dass Jee International Airport",
        name: "Amritsar",
        country: "India",
        countryCode: "IN",
        code: "ATQ",
        icon: "https://imgak.mmtcdn.com/flights/assets/media/dt/common/icons/ic-flight-onward.png",
      },
      {
        id: "f9",
        description: "Lengpui Airport",
        name: "Aizawl",
        country: "India",
        countryCode: "IN",
        code: "AJL",
        icon: "https://imgak.mmtcdn.com/flights/assets/media/dt/common/icons/ic-flight-onward.png",
      },
      {
        id: "f10",
        description: "Adampur Airport",
        name: "Adampur",
        country: "India",
        countryCode: "IN",
        code: "AIP",
        icon: "https://imgak.mmtcdn.com/flights/assets/media/dt/common/icons/ic-flight-onward.png",
      }
    ]
  }
];