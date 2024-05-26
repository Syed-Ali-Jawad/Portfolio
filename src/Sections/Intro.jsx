import { useState, useEffect } from "react";

export default function Intro() {
  const [greetings, setGreetings] = useState("Hi There!!!");

  const greetingsText = [
    "I am Ali Jawad",
    "A frontend react developer",
    "Wanna know more?",
    "Lets connect",
    null,
  ];

  useEffect(() => {
    let index = 0;
    let interval = setInterval(() => {
      if (index < greetingsText.length) {
        setGreetings(greetingsText[index]), (index += 1);
      } else clearInterval(interval);
    }, 2500);
  }, []);

  return (
    <section class="intro">
      <img
        class="profile-image"
        src="https://media.licdn.com/dms/image/D4D03AQH-ycmTZYjKJA/profile-displayphoto-shrink_200_200/0/1709841205577?e=1721865600&v=beta&t=zZT_jmlcZtjZr7aGfnXFNetQMvP_MtW9kcsJGuARawg"
      />
      {greetings ? (
        <div className="greetings-message">
          <h3>{greetings}</h3>
          {/* <h2 class="greeting-text">Hi there, I am Ali Jawad</h2>
        <p class="greeting-text">A front-end developer</p> */}
        </div>
      ) : (
        <div className="greeting-final-text">
          <h2>Hi there, I am Ali Jawad</h2>
          <p>A frontend react developer</p>
        </div>
      )}
    </section>
  );
}
