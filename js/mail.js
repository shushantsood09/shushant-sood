// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDc2GiG-aYfq4DSFS7hMQL1dMTPP59Vp9o",
  authDomain: "portfoliocontactform-57528.firebaseapp.com",
  databaseURL: "https://portfoliocontactform-57528-default-rtdb.firebaseio.com",
  projectId: "portfoliocontactform-57528",
  storageBucket: "portfoliocontactform-57528.appspot.com",
  messagingSenderId: "137619647908",
  appId: "1:137619647908:web:17ff50162d5ade68a52531",
};

//   Initialize Firebase
firebase.initializeApp(firebaseConfig);

//   Reference of database

const contactFormDB = firebase.database().ref("contactForm");

document.getElementById("contactForm").addEventListener("submit", submitForm);

function submitForm(e) {
  e.preventDefault();
  var fullName = getElementByVal("fullName");
  var email = getElementByVal("email");
  var contact = getElementByVal("contact");
  var subject = getElementByVal("subject");
  var message = getElementByVal("message");

  saveMessages(fullName, email, contact, subject, message);

  // // enable alert message

  // document.querySelector(".alert").style.display = "block";

  // // remove the alert
  // setTimeout(() => {
  //   document.querySelector(".alert").style.display = "none";
  // }, 3000);

  // // reset the form

  // document.getElementById("contactForm").reset();
}

const saveMessages = (fullName, email, contact, subject, message) => {
  var newContactForm = contactFormDB.push();

  newContactForm.set({
    fullName: fullName,
    emailId: email,
    phoneNumber: contact,
    emailSubject: subject,
    messageContent: message,
  });
};

const getElementByVal = (id) => {
  return document.getElementById(id).value;
};

// Send Email Info

function sendEmail() {
  var params = {
    fullName: document.getElementById("fullName").value,
    email: document.getElementById("email").value,
    contact: document.getElementById("contact").value,
    subject: document.getElementById("subject").value,
    message: document.getElementById("message").value,
  };

  const serviceID = "service_933iewb";
  const templateID = "template_v3vjksn";
  emailjs
    .send(serviceID, templateID, params)
    .then((res) => {
      // reset the form

      document.getElementById("contactForm").reset();

      // console response
      console.log(res);

      // enable alert message

      document.querySelector(".alert").style.display = "block";

      // remove the alert
      setTimeout(() => {
        document.querySelector(".alert").style.display = "none";
      }, 3000);
    })
    .catch((err) => console.log(err));
  // Email.send({
  //   Host: "smtp.gmail.com",
  //   Username: "shushant89012@gmail.com",
  //   Password: "wfhgxcwgqmoffqur",
  //   To: "shushantsood89012@gmail.com",
  //   From: "shushant89012@gmail.com",
  //   Subject: `${fullName} sent contact message!`,
  //   Body: `Name: ${fullName} <br/> Email: ${email} <br/> Phone Number : ${contact} <br/> Email Subject : ${subject}
  //   <br/> Message: ${message}`,
  // }).then((message) => {
  //   alert("mail sent successfully!");

  //   console.log(message);
  // });
}
