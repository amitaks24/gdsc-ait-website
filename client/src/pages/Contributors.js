import React from "react";
import ContributorGrid from "./ContributorGrid";

function Contributors() {
  //----------------------TEST TEAM DATA-------------------------
  let members = {
    data: [
      {
        name: "Shekhar Kumar",
        info: "",
        imgUrl:
          "https://cdn-icons-png.flaticon.com/512/168/168726.png",
      },
      {
        name: "Yash Chaudhary",
        info: "",
        imgUrl:
          "https://cdn-icons-png.flaticon.com/512/168/168726.png",
      },
      {
        name: "Abhishek Kumar Meel",
        info: "",
        imgUrl:
          "https://cdn-icons-png.flaticon.com/512/168/168726.png",
      },
      {
        name: "Chandresh Singh",
        info: "",
        imgUrl:
          "https://cdn-icons-png.flaticon.com/512/168/168726.png",
      },
      {
        name: "Monu Yadav",
        info: "",
        imgUrl:
          "https://cdn-icons-png.flaticon.com/512/168/168726.png",
      },
      {
        name: "Bhavana",
        info: "",
        imgUrl:
          "https://cdn-icons-png.flaticon.com/512/168/168726.png",
      },
      {
        name: "Tarun",
        info: "",
        imgUrl:
          "https://avatars.githubusercontent.com/u/32845547",
      },
      {
        name: "Prince Harshwardhan",
        info: "",
        imgUrl:
          "https://avatars.githubusercontent.com/u/76548962",
      },
      {
        name: "Mahesh",
        info: "Happy to start HacktoberFest'21",
        imgUrl:
          "https://cdn-icons-png.flaticon.com/512/168/168726.png",
      },
      {
        name: "Abhinab ",
        info: "God here!!",
        imgUrl:
          "https://avatars.githubusercontent.com/u/73732246",
      },
      {
        name: "Swaraj",
        info: "Hello there!!",
        imgUrl:
          "https://avatars.githubusercontent.com/u/76423625?v=4",
      },
      {
        name: "Mohit",
        info: "Hello there!!",
        imgUrl:
          "https://avatars.githubusercontent.com/u/90604050?v=4",
      },
      {
        name: "Amit Kumar Sharma",
        info: "Hello there!!",
        imgUrl:
          "https://avatars.githubusercontent.com/u/80998579?v=4",
      }
    ],
  };
  //----------------------TEST TEAM DATA-------------------------

  return (
    <div className="team">
      <h1 className="headings">Contributors</h1>
      <div className="member">
        {members.data.map((member, ind) => {
          return (
            <ContributorGrid
              key={ind}
              name={member.name}
              imgUrl={member.imgUrl}
            />
          );
        })}
      </div>
    </div>
  );
}

export default Contributors;
