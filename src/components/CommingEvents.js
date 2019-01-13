import React, { Component } from "react";
import SingleEvent from "./SingleEvent";

class CommingEvents extends Component {
  constructor(props) {
    super(props);
    this.state = {
      aEvents: [
        {
          title: "Una noche de navidad!",
          id: "una-noche-de-navidad",
          imageUrl:
            "https://static.wixstatic.com/media/b93c26360b3b49f59d94079ecaa9dc6f.jpg/v1/fit/w_681,h_454,al_c,q_80/file.webp",
          date: "Oct 15, 2018"
        },
        {
          title: "TestTitle2",
          id: "test-title-2",
          imageUrl:
            "https://static.wixstatic.com/media/3e3391443ed346b7ae6740fdcd37aa68.jpg/v1/fit/w_681,h_454,al_c,q_80/file.webp",
          date: "Oct 15, 2018"
        },
        {
          title: "TestTitle3",
          id: "test-title-3",
          imageUrl:
            "https://static.wixstatic.com/media/24352a95df9d4d0393d5115facf22c28.jpg/v1/fit/w_682,h_454,al_c,q_80/file.webp",
          date: "Oct 15, 2018"
        }
        // {
        //   title: "TestTitle2",
        //   imageUrl:
        //     "https://static.wixstatic.com/media/24352a95df9d4d0393d5115facf22c28.jpg/v1/fit/w_682,h_454,al_c,q_80/file.webp",
        //   date: "Oct 15, 2018"
        // }
      ]
    };
  }

  render() {
    return (
      <div className="container">
        <h1>Comming Events</h1>
        <div className="commingEvents">
          {this.state.aEvents.map(singleEvent => (
            <SingleEvent key={singleEvent.id} {...singleEvent} />
          ))}
        </div>
      </div>
    );
  }
}

export default CommingEvents;
