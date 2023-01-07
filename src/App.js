import "./styles.css";
import { useState } from "react";
const destinationList = {
  Australia: [
    {
      name: "Sky diving in Goldcoast",
      rating: "4/5",
      description: "Skydive from 12000 feet with best skyline in the world",
      location: "Goldcoast"
    },
    {
      name: "Skuba Diving in Great Barrier Reef",
      rating: "3.5/5",
      description:
        "Deep dive into the ocean, and closest to the reef on could ever be.",
      location: "Hamiltion Island"
    },
    {
      name: "Driving By 12 Apostles",
      rating: "5/5",
      description: "Hire a car of choice and drive through the scenic apostles",
      location: "Melbourne"
    }
  ],

  Macau: [
    {
      name: "Free fall Adventure",
      rating: "5/5",
      description: "The most thrilling experience, must try!!",
      location: "Macau Tower, Macau"
    },
    {
      name: "Movie Experience",
      rating: "3.5/5",
      description:
        "The best 6-D experience one could ever have. Just pray you don't watch anything related with raining.",
      location: "Venitian Resorts"
    },
    {
      name: "Hiking",
      rating: "4/5",
      description:
        "One of the green lung spaces in Macau is the Guia Hill Municipal Park. This is where you find the World Heritage Guia Fortress attractions. ",
      location: "Guia Hill"
    }
  ],

  Dubai: [
    {
      name: "Snow Experience",
      rating: "4/5",
      description:
        "Very Chilly experience, enjoy -4 degree celcius experience in the middle of desert",
      location: "Mall of Emerites"
    },
    {
      name: "Visit to aquarium",
      rating: "3/5",
      description:
        "One of the largest indoor acquarium. How did they fit a shark indoors?",
      location: "Dubai Mall"
    },
    {
      name: "Helicoper Ride",
      rating: "5/5",
      description: "Best View of Dubai, one could ever get",
      location: "Palm Jumeriah"
    }
  ]
};
export default function App() {
  const [city, setCity] = useState("Dubai");
  const cityClickHandler = (cityName) => {
    setCity(cityName);
  };
  return (
    <div className="App">
      <h1>🌉Destination Checklist🌉</h1>
      <p>
        Recently I visited to below destinations and I have listed favourite
        activites are below
      </p>
      <div>
        {Object.keys(destinationList).map((destination) => (
          <button
            className="btn"
            onClick={() => {
              cityClickHandler(destination);
            }}
          >
            {destination}
          </button>
        ))}
      </div>
      <hr />
      {/* Deltails of selected destination */}
      <div style={{ textAlign: "left" }}>
        <ul style={{ paddingInlineStart: "0" }}>
          {destinationList[city].map((destination) => (
            <li
              key={destination.name}
              style={{
                listStyle: "none",
                padding: "1rem",
                border: "1px solid #000",
                width: "50%",
                margin: "1rem 0rem",
                borderRadius: "0.5rem"
              }}
            >
              {" "}
              <div style={{ fontSize: "larger", marginBotton: "1em" }}>
                {" "}
                {destination.name}{" "}
              </div>
              <div style={{ fontSize: "smaller" }}>
                {" "}
                {destination.location}{" "}
              </div>
              <div style={{ marginBotton: "1em" }}>
                {" "}
                {destination.description}{" "}
              </div>
              <div style={{ fontSize: "smaller" }}> {destination.rating} </div>
            </li>
          ))}
        </ul>
      </div>
      <hr />
      <div className="footer">
        I had awesome experiences at this places. Enjoy life!!
      </div>
    </div>
  );
}
