  const firebaseConfig = {
    apiKey: "AIzaSyCBEOy-PeuhyNYNSOxTzNbHhFvs7Xd2jDo",
    authDomain: "pupicarbd.firebaseapp.com",
    databaseURL: "https://pupicarbd-default-rtdb.firebaseio.com",
    projectId: "pupicarbd",
    storageBucket: "pupicarbd.appspot.com",
    messagingSenderId: "976254780940",
    appId: "1:976254780940:web:109828ab0ed3100bc51029"
  };

firebase.initializeApp(firebaseConfig);

const contactFormDB = firebase.database()ref("contactForm");

document.getElementById("contactForm").addEventListener("submit",submitForm);


function submitForm(e) {
	e.preventDefault();

	var recogida = getElementVal("from-input");
	var dejar = getElementVal("to-input");
	var cuando = getElementVal("cuando");
	var telefono = getElementVal("telefono");
	
	saveMessages = (from-input,to-input,cuando,telefono);
	document.querySelector(".alert").style.display = "block";

	setTime(() => {
	document.querySelector(".alert").style.display = "none";
	},3000);

	document.getElementById("contactForm").reset();
}
	const saveMessages = (from-input,to-input,cuando,telefono) => {
		var newContactForm = contactFormDB.push();
		
		newContactForm.set({
			from-input: from-input,
			to-input: to-input,
			cuando: cuando,
			telefono: telefono,
		});
};

const getElementVal = (id) => {
return document.getElementById(id).value;
};

