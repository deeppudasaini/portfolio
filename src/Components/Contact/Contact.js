import { Bounce } from "react-reveal";
import {useState} from 'react';

export default function Contact() {
  const [fullname, setFullname] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  
  //   Form validation state
  const [errors, setErrors] = useState({});

  //   Setting button text on form submission
  const [buttonText, setButtonText] = useState("Send");

  // Setting success or failure messages states
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);
  const [showFailureMessage, setShowFailureMessage] = useState(false);

  // Validation check method
  const handleValidation = () => {
    let tempErrors = {};
    let isValid = true;

    if (fullname.length <= 0) {
      tempErrors["fullname"] = true;
      isValid = false;
    }
    if (email.length <= 0) {
      tempErrors["email"] = true;
      isValid = false;
    }
    
    if (message.length <= 0) {
      tempErrors["message"] = true;
      isValid = false;
    }

    setErrors({ ...tempErrors });
    console.log("errors", errors);
    return isValid;
  };

  

  const handleSubmit = async (e) => {
    e.preventDefault();

    let isValidForm = handleValidation();

//     if (isValidForm) {
      
      
//       const sgMail = require('@sendgrid/mail')
// sgMail.setApiKey(process.env.SENDGRID_API_KEY)
// const message ={
//   to: "iamdeep8888@gmail.com", 
//   from: "deeppudasaini7@gmail.com", 
//   subject: `Contact`,
//   html: `<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
//   <html lang="en">
//   <head>
//     <meta charset="utf-8">
  
//     <title>The HTML5 Herald</title>
//     <meta name="description" content="The HTML5 Herald">
//     <meta name="author" content="SitePoint">
//   <meta http-equiv="Content-Type" content="text/html charset=UTF-8" />
  
//     <link rel="stylesheet" href="css/styles.css?v=1.0">
  
//   </head>
  
//   <body>
//     <div class="img-container" style="display: flex;justify-content: center;align-items: center;border-radius: 5px;overflow: hidden; font-family: 'helvetica', 'ui-sans';">              
//           </div>
//           <div class="container" style="margin-left: 20px;margin-right: 20px;">
//           <h3>You've got a new mail from ${fullname}, their email is: ✉️${email} </h3>
//           <div style="font-size: 16px;">
//           <p>Message:</p>
//           <p>${message}</p>
//           <br>
//           </div>
          
//           <p class="footer" style="font-size: 16px;padding-bottom: 20px;border-bottom: 1px solid #D1D5DB;">Regards<br>Manu Arora<br>Software Developer<br>+91 9587738861</p>
//           <div class="footer-links" style="display: flex;justify-content: center;align-items: center;">
//             <a href="https://www.deeppudasaini.com.np/" style="text-decoration: none;margin: 8px;color: #9CA3AF;">Website</a>
//             <a href="https://github.com/deeppudasaini/" style="text-decoration: none;margin: 8px;color: #9CA3AF;">GitHub</a>
//             <a href="https://instagram.com/deeppudasaini07/" style="text-decoration: none;margin: 8px;color: #9CA3AF;">Instagram</a>
//             <a href="https://www.linkedin.com/in/deep-pudasaini-87bb921a0/" style="text-decoration: none;margin: 8px;color: #9CA3AF;">LinkedIn</a>
//             <a href="https://twitter.com/pudasaini_deep/" style="text-decoration: none;margin: 8px;color: #9CA3AF;">Twitter</a>
            
//           </div>
//           </div>
//   </body>
//   </html>`,
// };
// sgMail
//   .send(message)
//   .then(() => {
//     console.log('Email sent')
//   })
//   .catch((error) => {
//     if (error) {
//       console.log(error);
//       setShowSuccessMessage(false);
//       setShowFailureMessage(true);
//       setButtonText("Send");
//       return;
//     }
//     setShowSuccessMessage(true);
//     setShowFailureMessage(false);
//     setButtonText("Send");
  
//   })
// }
  }
  return (
    <div className="contact" id="contact">
      <Bounce left duration={2000}>
        <h1 className="experience-heading">Contact Me</h1>
        <div className="max-w-screen-xl mt-24 px-6 grid gap-8 grid-cols-1 md:grid-cols-2 md:px-12 lg:px-16 xl:px-32 py-16 mx-auto bg-gray-100 text-gray-900 rounded-lg shadow-lg flex my-3">
          <div className="flex flex-col justify-between flex-1">
            <div>
              <h2 className="text-4xl lg:text-5xl font-bold leading-tight">
                Lets talk about everything!
              </h2>
              <div className="text-gray-700 mt-8">
                Hate forms? Send me an{" "}
                <span className="underline">message</span> instead.
              </div>
            </div>
            <div className="mt-8 text-center">
              <img src="contact.svg" alt="contact" />
            </div>
          </div>
          <form onSubmit={handleSubmit} method='POST'>
          <div className="flex-2">
            <div>
              <span className="uppercase text-sm text-gray-600 font-bold">
                Full Name
              </span>
              <input
                className="w-full bg-gray-300 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
                type="text"
                value={fullname}
                placeholder=""
                name="fullname"
                onChange={(e)=>setFullname(e.target.value)}
              />
            </div>
            {errors?.fullname && (
            <p className="text-red-500">Fullname cannot be empty.</p>
          )}
            <div className="mt-8">
              <span className="uppercase text-sm text-gray-600 font-bold">
                Email
              </span>
              <input
                className="w-full bg-gray-300 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
                type="text"
                value={email}
                name="email"
                onChange={(e)=>setEmail(e.target.value)}
              />
            </div>
            {errors?.email && (
            <p className="text-red-500">Email cannot be empty.</p>
          )}
            <div className="mt-8">
              <span className="uppercase text-sm text-gray-600 font-bold">
                Message
              </span>
              <textarea className="w-full h-32 bg-gray-300 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline" 
              value={message}
              name="message"
              onChange={(e)=>setMessage(e.target.value)}
              ></textarea>
            </div>
            {errors?.message && (
            <p className="text-red-500">Message body cannot be empty.</p>
          )}
            <div className="mt-8">
              <button className="uppercase text-sm font-bold tracking-wide bg-indigo-500 text-gray-100 p-3 rounded-lg w-full focus:outline-none focus:shadow-outline">
              {buttonText}
              </button>
            </div>
          </div>
          <div className="text-left">
            {showSuccessMessage && (
              <p className="text-green-500 font-semibold text-sm my-2">
                Thankyou! Your Message has been delivered.
              </p>
            )}
            {showFailureMessage && (
              <p className="text-red-500">
                Oops! Something went wrong, please try again.
              </p>
            )}
          </div>
          </form>
        </div>
      </Bounce>
    </div>
  );
}
