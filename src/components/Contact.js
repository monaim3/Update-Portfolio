"use client";
import { Phone, Mail, Send, Map, MapPin } from "lucide-react";
import { useRef } from "react";
import emailjs from '@emailjs/browser';import { toast, ToastContainer } from "react-toastify";
;
export default function Contact() {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();
     emailjs.sendForm('service_2byfh77', 'template_00bawh3', form.current, {
        publicKey: 'user_cpHL9AMxxDTd04TMbXUql',
      })
      .then(() => {
          console.log('SUCCESS!');
          toast('Message Sent Successfully', {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: false,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light"
            });
            form.current.reset(); 
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
  };
  return (
    <main style={{
        backgroundImage: 'linear-gradient(120deg, #151414 0%, #151414 50%, #6C0E2A 100%)',
    }}>
      <ToastContainer></ToastContainer>
      <div className="container mx-auto px-4 py-12 grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Contact Form */}
        <div className="bg-black/30 backdrop-blur-sm p-8 rounded-lg">
          <h2 className="text-4xl font-bold text-white mb-8 border-b border-white/20 pb-4">
            Get In Touch
          </h2>
          <form className="space-y-6" ref={form} onSubmit={sendEmail}>
            <input
              type="text"
              placeholder="Name"
              name="user_name"
              className="w-full bg-transparent border border-white/20 rounded px-4 py-3 text-white placeholder-white/60 focus:outline-none focus:border-white/40"
            />
            <input
              type="email"
              placeholder="Enter Email"
              name="user_email"
              className="w-full bg-transparent border border-white/20 rounded px-4 py-3 text-white placeholder-white/60 focus:outline-none focus:border-white/40"
            />
            <textarea
              placeholder="Message"
              rows="6"
              name="message"
              className="w-full bg-transparent border border-white/20 rounded px-4 py-3 text-white placeholder-white/60 focus:outline-none focus:border-white/40 resize-none"
            ></textarea>
                  <input className="w-full primary-color text-white py-3 rounded font-semibold hover:primary-color transition-colors" type="submit" value="Send" />

          </form>
        </div>

        {/* Contact Information */}
        <div className="bg-black/30 backdrop-blur-sm p-8 rounded-lg text-white space-y-8">

            <div className=" flex flex-col justify-center items-center">
            <Phone className="w-12 h-12 text-primary" />
              <h3 className="text-2xl font-semibold mb-1">Phone :</h3>
              <p>01783850584</p>
            </div>
         
            <div className=" flex flex-col justify-center items-center">
            <MapPin className="w-12 h-12 text-primary " />
              <h3 className="text-2xl font-semibold mb-1">Address :</h3>
              <p>Rampura,Dhaka</p>
            </div>
    
            <div className="flex flex-col items-center justify-center">
            <Mail className="w-12 h-12 text-primary" />
              <h3 className="text-2xl font-semibold mb-1">Email:</h3>
              <p>Monaimmukul75@gmail.com</p>
            </div>
        
        </div>
      </div>
    </main>
  );
}