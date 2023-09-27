import React from "react";
import "./stylemob.css"

const About = () => {
  return (
    <div id="about" className="fix w-full h-screen bg-gradient-to-r from-[#fbfaf9] via-[#eeeae2] to-[white] text-[#000] ">
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
        <div className="max-w-[1000px] w-full px-4 grid grid-cols-2 gap-8">
          <div className="sm:text-right pb-2 pl-4">
            <p className="om text-4xl sm:text-xl font-bold inline border-b-2 text-[#525151] border-[#d36d81]">
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
              Jag är en positiv, målmedveten, ödmjuk och driven person på 43 år. I mitt
              förra yrke som uppdragschef blev jag van vid att ha många bollar i
              luften. Jag arbetade mycket med problemlösning, vilket är roligt
              då man dagligen får göra det som systemutvecklare. 
              <p>
                För två år sedan skolade jag om mig till systemutvecklare och i
                juni i år tog jag examen. Jag tyckte speciellt front-end lockade mig, 
                därav läser jag front-end utveckling nu. Men jag är öppen för arbete!
              </p>
              <p>
                Jag har arbetat mycket med människor och med det krävs en stor
                ödmjukhet, flexibilitet och balans. 
                Utmaningar ser jag som spännande och det ger utveckling. Jag är
                även utbildad stödpedagog och att se situationer ur olika
                perspektiv är för mig en självklarhet för att få bästa möjliga
                resultat. Ni kan hitta mitt cv lite längre ner på sidan där ni
                kan se mer om mina tidigare erfarenheter och kompetenser.
              </p>
            </article>

            <article>
              <p>
                Jag bor med min man och våra barn i centrala Borås. Förutom
                programmering har jag ett stort intresse för hälsa och
                träning. På fritiden tycker jag om att röra mig, promenader och
                springa står högt upp. Även att umgås med familj och vänner.
              </p>
              <p>
                Jag tror att de flesta som känner mig skulle säga att jag är en
                omtänksam, kärleksfull person, som bryr sig om andra. Är nyfiken,
                driven och inte rädd för att testa mig fram och prova på olika
                saker.
              </p>
            </article>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
