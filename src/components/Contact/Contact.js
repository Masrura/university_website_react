import React from 'react';
import './Contact.css'

const Contact = () => {
    return (
        <div className="row">
            <div className="col-12 ">
                <img className="contact-us-img" src="contact.png" alt="" />
            </div>
            <div className="row">
                <div className="col-6 offset-3">
                    <section className="mb-4">
                        <h2 className="h1-responsive font-weight-bold text-center my-4">Contact us</h2>

                        <p className="text-center w-responsive mx-auto mb-5">Do you have any questions? Please do not hesitate to contact us directly. Our team will come back to you within
                            a matter of hours to help you.</p>

                        <div className="row">
                            <div className="col-md-10 offset-md-1 mb-md-0 mb-5">
                                <form id="contact-form" name="contact-form">
                                    <div className="row">
                                        <div className="col-md-6">
                                            <div className="md-form mb-0">
                                                <input type="text" placeholder="Name" id="name" name="name" className="form-control" />
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="md-form mb-0">
                                                <input type="text" id="email" placeholder="Email" name="email" className="form-control" />
                                            </div>
                                        </div>
                                    </div>

                                    <div className="row">
                                        <div className="col-md-12">
                                            <div className="md-form mb-0">
                                                <input type="text" id="subject" placeholder="Subject" name="subject" className="form-control" />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-md-12">
                                            <div className="md-form">
                                                <textarea type="text" id="message" placeholder="Your Message"  name="message" rows="2" className="form-control md-textarea"></textarea>
                                            </div>

                                        </div>
                                    </div>
                                </form>
                                <div className="text-center text-md-left">
                                    <button className="btn-primary">Send</button>
                                </div>
                                <div className="status"></div>
                            </div>
                        </div>

                    </section>

                </div>
            </div>
        </div>
    );
};

export default Contact;