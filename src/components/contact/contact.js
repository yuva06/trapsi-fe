import React, { useState } from "react";
import AOS from "aos";

const Contact = () => {
  const [success, setSuccess] = useState(false);
  const [btnText, setBtnText] = useState("Submit");
  const [vaalue, setVaalue] = useState([]);

  AOS.init({
    once: true,
    duration: 1200,
  });

  

  const handleSubmit = async (e) => {
    e.preventDefault();
    setBtnText("Submitting...");
    const {
      name,
      email,
      company,
      phone,
      brandName,
      brandIdentity,
      brandStrategies,
      Branding,
      brandPositioning,
      logoDesgin,
      UIUX,
      webDesgining,
      webDevelopment,
      eCommerce,
      adCampaign,
      subject,
    } = e.target.elements;
    const details = {
      name: name.value,
      email: email.value,
      company: company.value,
      phone: phone.value,
      brandName: brandName.checked,
      brandIdentity: brandIdentity.checked,
      brandStrategies: brandStrategies.checked,
      Branding: Branding.checked,
      brandPositioning: brandPositioning.checked,
      logoDesgin: logoDesgin.checked,
      UIUX: UIUX.checked,
      webDesgining: webDesgining.checked,
      webDevelopment: webDevelopment.checked,
      eCommerce: eCommerce.checked,
      adCampaign: adCampaign.checked,
      subject: subject.value,
    };

    console.log("check",Object.keys(details)[6]);
    console.log(Object.values(details)[4]+Object.values(details)[0]);
    for(let i=0;i<16;i++){
       if(Object.values(details)[i] === true){
         setVaalue(vaalue.push(Object.keys(details)[i]));
        //  console.log(value + Object.keys(details)[i]);

       }
    }
    let detial = {
      name: Object.values(details)[0],
      mobileno: Object.values(details)[3],
      email:  Object.values(details)[1],
      company:  Object.values(details)[2],
      intrest:  vaalue.join(),
      subject:  Object.values(details)[15],    
     };
    // console.log("data", detial);

    fetch(
      "https://trapsibytes.herokuapp.com/connect/ClientForm/",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(detial),
      }
    )
      .then((response) => response.json())
      .then((response) => {
        // alert("success");
        setBtnText("Submitted !");
        // console.log("data", detial);
      })
      .catch((err) => {});
    // console.log(vaalue);
  };

  return (
    <main>
      <section className="ContactSection" data-aos="fade-up">
        <div className="container">
          <div className="ContactSectionTitle h1-m">Let's Talk</div>
          <div className="row">
            <div className="col-md-3">
              <div className="contentContact">
                <div className="h1-m">Don't hesitate to say hai</div>
                <div className="p-m" data-aos="fade-right">
                  +91 - 96773 84133, <br /> +91 - 90957 03846
                </div>
                <div className="small-m" data-aos="fade-right">
                  premananth@trapsibytes.com, <br />
                  build@trapsibytes.com
                </div>
                <hr />
                <div className="h1-m">Follow us</div>
                <div className="p-m" data-aos="fade-right">
                  <a
                    href="https://www.facebook.com/trapsibytes"
                    rel="noreferrer"
                    target="_blank"
                  >
                    Facebook
                  </a>
                </div>
                <div className="p-m" data-aos="fade-right">
                  <a
                    href="https://www.instagram.com/trapsibytes"
                    rel="noreferrer"
                    target="_blank"
                  >
                    Instagram
                  </a>
                </div>
                <div className="p-m" data-aos="fade-right">
                  <a
                    href="https://www.behance.net/arulmurugan1"
                    rel="noreferrer"
                    target="_blank"
                  >
                    Behance
                  </a>
                </div>
                <div className="p-m" data-aos="fade-right">
                  <a
                    href="https://www.youtube.com/channel/UCZcd9LIvGq_jkl0fC7_rmnA"
                    rel="noreferrer"
                    target="_blank"
                  >
                    Youtube
                  </a>
                </div>
                <div className="p-m" data-aos="fade-right">
                  <a
                    href="https://www.linkedin.com/company/trapsi-bytes-official/"
                    rel="noreferrer"
                    target="_blank"
                  >
                    LinkedIn
                  </a>
                </div>
              </div>
            </div>
            <div className="col-md-9">
              <form
                name="contact"
                onSubmit={(e) => handleSubmit(e)}
                // method="POST"
                // action="/contact/?success=true"
                // data-netlify="true"
              >
               
                <div className="row">
                  <div className="col-md-6 col-12">
                    <div className="ContactFormInputGroup">
                      <div className="ContactFormInputlable">Name</div>
                      <input type="text" name="name" id="name" required />
                    </div>
                  </div>
                  <div className="col-md-6 col-12">
                    <div className="ContactFormInputGroup">
                      <div className="ContactFormInputlable">Company</div>
                      <input type="text" name="company" id="company" />
                    </div>
                  </div>
                  <div className="col-md-6 col-12">
                    <div className="ContactFormInputGroup">
                      <div className="ContactFormInputlable">E-mail</div>
                      <input type="email" name="email" id="email" />
                    </div>
                  </div>
                  <div className="col-md-6 col-12">
                    <div className="ContactFormInputGroup">
                      <div className="ContactFormInputlable">Phone no</div>
                      <input type="text" name="phone" id="phone" />
                    </div>
                  </div>
                  <div className="col-12">
                    <div className="ContactFormInputGroup">
                      <div className="ContactFormInputlable">
                        I'm Interested In: (Select all that apply)
                      </div>
                      <div className="ContactFormCheckBoxGroupMain">
                        <div className="ContactFormCheckBoxGroup">
                          <label>Brand Name</label>
                          <input
                            type="checkbox"
                            name="brandName"
                            id="brandName"
                          />
                          <span></span>
                        </div>
                        <div className="ContactFormCheckBoxGroup">
                          <label>Brand Identity</label>
                          <input
                            type="checkbox"
                            name="brandIdentity"
                            id="brandIdentity"
                          />
                          <span></span>
                        </div>
                        <div className="ContactFormCheckBoxGroup">
                          <label>Brand Strategies</label>
                          <input
                            type="checkbox"
                            name="brandStrategies"
                            id="brandStrategies"
                          />
                          <span></span>
                        </div>
                        {/* <div className="ContactFormCheckBoxGroup">
                          <label>Brand Name</label>
                          <input type="checkbox" id="brandName" />
                          <span></span>
                        </div> */}
                        <div className="ContactFormCheckBoxGroup">
                          <label>Branding</label>
                          <input
                            type="checkbox"
                            name="Branding"
                            id="Branding"
                          />
                          <span></span>
                        </div>
                        <div className="ContactFormCheckBoxGroup">
                          <label>Brand Positioning</label>
                          <input
                            type="checkbox"
                            name="brandPositioning"
                            id="brandPositioning"
                          />
                          <span></span>
                        </div>
                        <div className="ContactFormCheckBoxGroup">
                          <label>Logo Desgin</label>
                          <input
                            type="checkbox"
                            name="logoDesgin"
                            id="logoDesgin"
                          />
                          <span></span>
                        </div>
                        <div className="ContactFormCheckBoxGroup">
                          <label>UI / UX</label>
                          <input type="checkbox" name="UIUX" id="UIUX" />
                          <span></span>
                        </div>
                        <div className="ContactFormCheckBoxGroup">
                          <label>Web Desgining</label>
                          <input
                            type="checkbox"
                            name="webDesgining"
                            id="webDesgining"
                          />
                          <span></span>
                        </div>
                        <div className="ContactFormCheckBoxGroup">
                          <label>Web Development</label>
                          <input
                            type="checkbox"
                            name="webDevelopment"
                            id="webDevelopment"
                          />
                          <span></span>
                        </div>
                        <div className="ContactFormCheckBoxGroup">
                          <label>E Commerce</label>
                          <input
                            type="checkbox"
                            name="eCommerce"
                            id="eCommerce"
                          />
                          <span></span>
                        </div>
                        <div className="ContactFormCheckBoxGroup">
                          <label>Ad Campaign</label>
                          <input
                            type="checkbox"
                            name="adCampaign"
                            id="adCampaign"
                          />
                          <span></span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-12">
                    <div className="ContactFormInputGroup">
                      <div className="ContactFormInputlable">Subject</div>
                      <textarea type="text" name="subject" id="subject" />
                    </div>
                  </div>
                  <div className="col-12 submitBtn">
                    <button type="submit">{btnText}</button>
                    {success && (
                      <p style={{ color: "green", marginTop: "10px" }}>
                        Thanks for your message!{" "}
                      </p>
                    )}
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Contact;
