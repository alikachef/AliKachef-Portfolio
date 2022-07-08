import React, { useRef } from "react";
import GoogleMapReact from 'google-map-react';
import './contactMe.css'
import { ChatAltIcon } from "@heroicons/react/solid";
import emailjs from 'emailjs-com';
import 'bootstrap/dist/css/bootstrap.min.css';

const AnyReactComponent = ({ text }) => <div>{text}</div>;

export default function ContactMe() {
    const defaultProps = {
        center: {
            lat: 1,
            lng: 1
        },
        zoom: 1
    };


    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_wgcsj8p', 'template_g60n1cw', form.current, 'Plxy_f_F3rfKXzJ6S')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });

        e.target.reset();
    };


    return (
        // Important! Always set the container height explicitly
        <div className="container-map">
            <div className="contactmeh">
            <ChatAltIcon className="char"></ChatAltIcon>
            <h1>Contact Me</h1>
            </div>
            <div className="googlemap">
                
                <iframe
                    width="100%"
                    height="100%"
                    title="map"
                    className="absolute inset-0"
                    frameBorder={0}
                    marginHeight={50}
                    marginWidth={0}
                    style={{ filter: "opacity(0.7)" }}
                    src="https://www.google.com/maps/embed/v1/place?q=midlothian,+va&key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8"
                />

                <div className="contactme">
                    <h1>Hire Me</h1>
                    <p>Need to get in touch with me? Fill out the form and an email will be send directly to me. Or you can reach me through my email kachefali@gamil.com</p>
                    <form ref={form} onSubmit={sendEmail}>
                        <div class="form-group">
                            <label for="exampleFormControlInput1">From Name</label>
                            <input name="from_name" type="name" class="form-control" id="exampleFormControlInput1" placeholder="System Builders" />
                        </div>
                        <div class="form-group">
                            <label className="label1" for="exampleFormControlInput1">Reply-To Email address</label>
                            <input name="reply_to" type="email" class="form-control" id="exampleFormControlInput1" placeholder="name@example.com" />
                        </div>
                        <div class="form-group">
                            <label for="exampleFormControlTextarea1">Message</label>
                            <textarea name="message" class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                        </div>
                        <div className="send">
                            <input className="btn btn-primary" type="submit" value="Send" />
                        </div>
                    </form>
                </div>
            </div>

        </div>
    );
}