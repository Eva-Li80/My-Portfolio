import React from "react";
import "./stylemob.css";

const About = () => {
  return (
    <div
      id="about"
      className="fix w-full h-screen bg-gradient-to-r from-[#fbfaf9] via-[#eeeae2] to-[white] text-[#000] "
    >
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
        <div className="max-w-[1000px] w-full px-4 grid grid-cols-2 gap-8">
          <div className="sm:text-right pb-2 pl-4">
            <p className="om text-4xl sm:text-4xl font-bold inline border-b-2 text-[#af2743] border-[#d36d81]">
              Om mig
            </p>
          </div>
        </div>
        <div className="max-w-[1000] w-full grid sm-grid-cols-2 gap-8 px-4">
          <div className="sm:text-center text-xl sm:text-2xl font-bold">
            <p style={{ fontSize: 18 }}>
              Hej, kul att du vill läsa lite mer om vem jag är 😊
            </p>
          </div>
          <div style={{ fontSize: 16 }}>
            <article>
              {" "}
              Jag är en positiv, målmedveten, ödmjuk och driven person på 43 år.
              I mitt förra yrke som uppdragschef blev jag van vid att ha många
              bollar i luften. Jag arbetade mycket med problemlösning, vilket är
              roligt då man dagligen får göra det som utvecklare.
              <p>
                Jag är en systemutvecklare som tog examen våren 2023 men insåg
                att frontend-utveckling fascinerade mig djupt under min
                utbildning. Därför har jag valt att vidareutbilda mig på
                Yrkeshögskolan Borås inom Frontend-utveckling för att fördjupa
                mina kunskaper och färdigheter inom detta område.
                <p>
                  Min utbildning som systemutvecklare har gett mig en solid
                  grund inom olika teknologier och områden, så som Agil
                  utveckling, Databaser, C# .NET, Applikationsutveckling,
                  Webbutveckling, och jag har även haft möjlighet att praktisera
                  genom Lia.
                </p>
                <p>
                  Just nu fokuserar jag på att fördjupa min kunskap inom
                  frontend-teknologier såsom HTML, CSS, Javascript, Typescript,
                  React, UX-design, projektmetodik och versionshantering bl.a.
                  Jag är öppen för arbetsmöjligheter inom frontend-utveckling
                  och ser fram emot att kombinera min erfarenhet som
                  systemutvecklare med min nya kompetens inom frontend.
                </p>
              </p>
            </article>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
