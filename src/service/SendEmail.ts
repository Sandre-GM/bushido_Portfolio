import { toast } from "react-toastify";
import { Contact } from "../types";
import emailjs from '@emailjs/browser'

export const sendEmail = (data: Contact) => {
    try {
        const serviceID = import.meta.env.VITE_SERVICE_ID;
        const templateID = import.meta.env.VITE_TEMPLATE_ID;
        const Api_Key = import.meta.env.VITE_API_KEY;

        const templateParams = {
            "name": data.name,
            "email": data.email,
            "message": data.message,
            "subject": data.subject
        }


        emailjs.send(serviceID, templateID, templateParams, Api_Key)
            .then(result => console.log(result.text))
            .catch(error => console.log(error.text));

        toast.success('Successfully sent')
    } catch (error) {
        console.log(error);
        toast.error('Could not send, try again later')
    }
};