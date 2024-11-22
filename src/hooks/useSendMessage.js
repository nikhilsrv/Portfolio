import { useState } from "react";
import { app } from "../firebaseConfig.js";
import { getDatabase, ref, set, push } from "firebase/database";
import emailjs from "@emailjs/browser"
import toast from "react-hot-toast";


const sendEmail = async (email,name) => {
    toast.success("Your message has been sent successfully");
    try
     {
        const response = await emailjs.send(
        import.meta.env.VITE_SERVICE_ID,
        import.meta.env.VITE_TEMPLATE_ID,
        {
          name: name,
          email: email,
        },{
        publicKey:import.meta.env.VITE_PUBLIC_KEY}
      );
     // console.log("SUCCESS!", response.status, response.text);
     }  
     catch (error) {
     // console.log(error);
     }
};


export const useSendMessage = () => {
  const [loading, setloading] = useState(false);

  const sendMessage = async ({ name, email, message }) => {

      if (name?.length === 0 || message?.length === 0 || email?.length === 0)
      {   
      toast.error("No field can be empty !")
      return;
      }

      var validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/; 

      if (!email.match(validRegex))
      {  
      toast.error("Emailid is not valid")
      return;
      }
     
      setloading(true)
      const db = getDatabase(app);
      const newDocRef = push(ref(db, "messages"));
      set(newDocRef, {
        name: name,
        email: email,
        message: message,
      })
      .then(() => sendEmail(email,name))
      .catch(() => toast.error("There was an error sending message,try again later!")).finally(()=>setloading(false));
    
  };

  return { sendMessage, loading };
};
