import { useEffect } from "react";
import "./Contact.scss"
import { FacebookIcon, WhatsAppIcon, LinkedInIcon, EmailIcon } from "../../components/appConsts/icons/Icons";

function Contact() {

    useEffect(()=>{
        window.scrollTo(0, 0)
    },[])

    return (
        <div id="contactContainer">
            <div id="contactTopContainer">
                <p className="contactTittle">Let's work together</p>
                <div className="contactSeparator"></div>
                <p className="contactTittle">Contact me</p>
            </div>
            <div id="SocialGrid">
                <a className="contactLink" href="mailto:Armando.hernandez.r@Hotmail.com" target="_blank" rel="noopener noreferrer">
                    <div className="socialContainer">
                        <EmailIcon className="contactIcon"></EmailIcon>
                        <p className="socialName">Email</p>
                    </div>
                </a>
                <a className="contactLink" href="https://www.linkedin.com/in/armando-hernandez-rivera-032054225/" target="_blank" rel="noopener noreferrer">
                    <div className="socialContainer">
                        <LinkedInIcon className="contactIcon"></LinkedInIcon>
                        <p className="socialName">LinkedIn</p>
                    </div>
                </a>
                <a className="contactLink" href="https://wa.me/524491881529" target="_blank" rel="noopener noreferrer">
                    <div className="socialContainer">
                        <WhatsAppIcon className="contactIcon"></WhatsAppIcon>
                        <p className="socialName">WhatsApp</p>
                    </div>
                </a>
                <a className="contactLink" href="https://www.facebook.com/Zarmby" target="_blank" rel="noopener noreferrer">
                    <div className="socialContainer">
                        <FacebookIcon className="contactIcon"></FacebookIcon>
                        <p className="socialName">Facebook</p>
                    </div>
                </a>
            </div>
        </div>
    );
}

export default Contact;