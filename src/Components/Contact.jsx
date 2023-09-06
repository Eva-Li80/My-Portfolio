import React from "react";


const Contact = () => {
  return (
    <div
      id="contact"
      className= "test bg-[#163057] w-full h-screen flex flex-col justify-center items-center p-8 relative"
    >
      <form method="POST" action="https://getform.io/f/acd0686b-0d7a-452f-9d0e-67d81b10af4b" className=" flex flex-col max-w-[600px] w-full">
        <div className=" pb-2">
          <p className=" text-4xl font-bold inline border-b-4 border-pink-600 text-gray-300">
            Kontakt
          </p>
          <p className="text-gray-300 py-4 text-sm">
            {" "}
            // Fyll i och skicka in formuläret eller sänd ett email - 
             evaliboden@gmail.com
          </p>
        </div>
        <input
          className="bg-[#ccd6f6] p-2"
          type="text"
          placeholder="Your name"
          name="name"
        />
        <input
          className="my-4 p-2 bg-[#ccd6f6]"
          type="email"
          placeholder="Your email"
          name="email"
        />
        <textarea
          className="bg-[#ccd6f6] p-2"
          name="message"
          rows="10"
          id=""
          placeholder="Send me a Message.."
        ></textarea>
        <button className="text-white border-2 hover:bg-pink-600 hover:border-pink-600 px-4 py-3 my-8 mx-auto flex items-center">Skicka</button>
      </form>

     
    </div>
  );
};

export default Contact;
