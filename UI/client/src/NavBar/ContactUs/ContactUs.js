import React from 'react';

const ContactUs = () => {
    return (
        <div>
            <h2>Contact Form</h2>
                <div>
                    Name<br/>
                    <input type="text"
                            name="name"
                            placeholder="Name"
                            required=""/><br/>
                </div>
                <div>
                    Email<br/>
                    <input type="text"
                            name="email"
                            placeholder="Email"/><br/>
                </div>
                <div>
                    Phone<br/>
                    <input type="tel"
                            name="phone"
                            placeholder="Phone #"/><br/>
                </div>
                <div>
                    Subject<br/>
                    <input type="text"
                            name="Subject"
                            placeholder="subject"
                            required=""/><br/>
                </div>
                <div>
                    Message<br/>
                    <textarea type="text"
                            name="Message"
                            placeholder="Type your message here"
                            required=""/><br/>
                </div>
                <div>
                    <input type="Submit"/>
                </div>
        </div>
    );
};

export default ContactUs;