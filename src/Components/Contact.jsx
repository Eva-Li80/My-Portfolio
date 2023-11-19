import React from "react";

const Contact = () => {
  return (
    <div
      id="contact"
      className="bg-gradient-to-r from-[#fff] via-[#edebe7] to-[#79b8a4] w-full h-screen flex flex-col justify-center items-center p-8 relative"
    >
      <form
        method="POST"
        action="https://getform.io/f/acd0686b-0d7a-452f-9d0e-67d81b10af4b"
        className=" flex flex-col max-w-[600px] w-full"
      >
        <div className=" pb-2">
          <p className=" text-4xl font-bold inline border-b-2  text-[#3c3c3c] border-[#d36d81]">
            Kontakt
          </p>
          <p className="text-gray-1600 py-4 text-m">
            Fyll i och skicka in formuläret eller sänd ett email -
            evaliboden@gmail.com
          </p>
        </div>
        <input
          className="bg-[#fff] p-2"
          type="text"
          placeholder="Your name"
          name="name"
        />
        <input
          className="my-4 p-2 bg-[#fff]"
          type="email"
          placeholder="Your email"
          name="email"
        />
        <textarea
          className="bg-[#fff] p-2"
          name="message"
          rows="10"
          id=""
          placeholder="Send me a Message.."
        ></textarea>
        <button className="text-black border-2 hover:bg-[#d36d81] hover:border-[#d36d81] px-4 py-3 my-8 mx-auto flex items-center">
          Skicka
        </button>
      </form>
    </div>
  );
};

export default Contact;
