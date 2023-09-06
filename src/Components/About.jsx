import React from "react";

const About = () => {
  return (
    <div id="about" className="fix w-full h-screen bg-[#0a192f] text-gray-300 ">
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
        <div className="max-w-[1000px] w-full px-4 grid grid-cols-2 gap-8">
          <div className="sm:text-right pb-2 pl-4">
            <p className="text-4xl font-bold inline border-b-4 border-pink-600 ">
              Om mig
            </p>
          </div>
          <div></div>
        </div>
        <div className="max-w-[1000] w-full grid sm-grid-cols-2 gap-8 px-4">
          <div className="sm:text-center text-2xl font-bold">
            <p  style={{fontSize: 18}}>Hej, kul att du vill läsa lite mer om vem jag är 😊</p>
          </div>
          <div style={{fontSize:17}}>
            <article>
              {" "}
              Jag är en positiv, målmedveten och driven person på 43 år. I mitt
              förra yrke som uppdragschef blev jag van vid att ha många bollar i
              luften. Jag arbetade mycket med problemlösning, vilket är roligt
              då man dagligen får hålla på med det som systemutvecklare. Att
              vara lyhörd, prioritera rätt och fatta snabba beslut var något som
              även ingick.
              <p>
                Jag valde för två år sedan att läsa till systemutvecklare och i
                juni i år tog jag examen. Jag känner att det ska bli mycket
                spännande och roligt att komma ut i arbetslivet igen men nu som
                ny examinerad systemutvecklare 🙂
              </p>
              <p>
                Jag har arbetat mycket med människor och med det
                krävs en stor ödmjukhet, flexibilitet och balans. Just i
                ledarrollen var stötta personal på ett motiverande sätt viktigt
                för mig. Utmaningar ser jag som spännande och det ger
                utveckling. Jag är även utbildad stödpedagog och att se
                situationer ur olika perspektiv är för mig en självklarhet för
                att få bästa möjliga resultat. Ni kan hitta mitt cv lite längre
                ner på sidan där ni kan se mer om mina tidigare erfarenheter och
                kompetenser.
              </p>
            </article>

            <article>
              <p>
                Jag bor med min man och våra barn i centrala Borås. Förrutom
                programmeringen har jag ett stort intresse för hälsa och
                träning. På fritden tycker jag om att röra mig, promenader och
                springa står högst upp. Även att umgås med familj och vänner.
              </p>
              <p>
                Jag tror att de flesta som känner mig skulle säga att jag är en
                omtänksam, kärleksfull person,som bryr sig om andra. Är nyfiken,
                driven och inte rädd för att testa mig fram och prova på olika
                saker.
              </p>
            </article>
            <div style={{marginTop: 10, fontSize:16}}>
              <p> Eva-Li Nätynki Bodén</p>
              <p>Mail: evaliboden@gmail.com</p>
              <p>Mob: 0703-97449</p>{" "}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
