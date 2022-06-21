const firebaseConfig = {
  apiKey: "AIzaSyB804BmxINjhT786JwbVL_zSrAdYwzhJtM",
  authDomain: "pupitaxi-5e99d.firebaseapp.com",
  projectId: "pupitaxi-5e99d",
  storageBucket: "pupitaxi-5e99d.appspot.com",
  messagingSenderId: "1082842219401",
  appId: "1:1082842219401:web:336969eb1c931251ad1758"
};

firebase.initializeApp(firebaseConfig);

const pupicarbd = firebase.database()ref("contactForm");

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
	}, 3000);

	document.getElementById("contactForm").reset();
}
	const saveMessages = (from-input,to-input,cuando,telefono) => {
		var newContactForm = pupicarbd.push();
		
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

