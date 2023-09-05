import React from "react";
import Title from "../component/Title.jsx";
import "../style/contact.css";
import IconItem from "../component/IconItem.jsx";
const data = [
  {
    link: "https://www.linkedin.com/in/osama-maree-7996b3239/",
    icon: <i class="fa-brands fa-linkedin" style={{ color: "#0077b5" }}></i>,
  },
  {
    link: "https://www.facebook.com/profile.php?id=100070606794397",
    icon: (
      <i class="fa-brands fa-square-facebook" style={{ color: "#4267B2" }}></i>
    ),
  },
  {
    link: "https://www.instagram.com/osama._.mahmoud/?__coig_restricted=1",
    icon: (
      <i class="fa-brands fa-square-instagram" style={{ color: "#833AB4" }}></i>
    ),
  },
  {
    link: "https://wa.me/972566066174",
    icon: (
      <i
        class="fa-brands fa-square-whatsapp"
        target="_blank"
        style={{ color: "#25D366" }}
      ></i>
    ),
  },
  {
    link: "https://github.com/osama-maree",
    icon: <i class="fa-brands fa-square-github" style={{ color: "#000" }}></i>,
  },
];
const inputs = [
  { type: "text", name: "Name", placeholder: "Name" },
  { type: "email", email: "Email", placeholder: "Email" },
];
function Input(props) {
  return (
    <>
      <input
        name={props.name}
        placeholder={props.placeholder}
        type={props.type}
        required
      />
    </>
  );
}
const Contact = () => {
  return (
    <div class="contact p-75 bg-first-color" id="contact">
      <div class="container">
        <Title title={"contact me"} />

        <div class="grid">
          <div class="left">
            <img src="/assets/about.png" alt="" />
          </div>
          <div class="right">
            <div class="form">
              <h3 style={{ textAlign: "center", color: "#266dd3" }}>
                Don't hesitate to contact me now &#128515;
              </h3>
              <form
                action="https://formsubmit.co/osamamarei2001@gmail.com"
                method="POST"
              >
                {inputs.map((inp, i) => (
                  <Input
                    placeholder={inp.placeholder}
                    name={inp.name}
                    type={inp.type}
                    key={i}
                  />
                ))}
                <textarea
                  name="Message"
                  id=""
                  cols="30"
                  rows="10"
                  style={{ color: "gray" }}
                  placeholder="Please write about project"
                ></textarea>
                <button type="submit">Submit</button>
              </form>
            </div>
            <h3>
              Trust in my abilities and reach out to me <br /> don't waste time
              &#9203;
            </h3>
            <div class="iconsWebsites">
              <div class="leftIcon">&#128073;</div>
              <div class="rightIcon">
                {data.map((item, inx) => (
                  <IconItem key={inx} link={item.link} icon={item.icon} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
