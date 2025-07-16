let nav=document.createElement("nav");
nav.id="navigation";
nav.style.margin="0px";
nav.style.padding="0px";
nav.style.backgroundColor="rgb(0,0,0,0.35)";
nav.style.boxShadow="0px 3px 5px rgba(0, 0, 0, 0.5)";
nav.style.position="fixed";
document.body.appendChild(nav);


let logo=document.createElement("h1");
logo.innerHTML="ANVESH";
logo.id="logo";
logo.style.margin=0;
nav.appendChild(logo);
logo.style.width="150px";
document.body.style.backgroundColor="grey";
document.body.style.margin=0;


let home=document.createElement("a");
home.id="home";
home.textContent="HOME";
home.href="Portfolio.html"
home.style.textDecoration="none"
home.style.color="Silver"
nav.appendChild(home);


let edu=document.createElement("a");
edu.textContent="EDUCATION";
edu.href="Education.html"
edu.style.textDecoration="none"
edu.style.color="Silver"
nav.appendChild(edu);


let cer=document.createElement("a");
cer.textContent="CERTIFICATIONS";
cer.href="Certificate.html"
cer.style.textDecoration="none"
cer.style.color="Silver"
nav.appendChild(cer);


let pro=document.createElement("a");
pro.textContent="PROJECTS";
pro.href="Projects.html"
pro.style.textDecoration="none"
pro.style.color="Silver"
nav.appendChild(pro);


let contact=document.createElement("a");
contact.textContent="CONTACT";
contact.href="Contact.html"
contact.style.textDecoration="none"
contact.style.color="Silver"
nav.appendChild(contact);


pro.className="info"
home.className="info";
edu.className="info";
cer.className="info";
contact.className="info";
nav.style.display="inline-block";


let bg=document.createElement("div");
bg.id="bg";
document.body.appendChild(bg);
bg.style.margin=0;


document.body.style.backgroundImage="url('uchiha.png')";
document.body.style.backgroundRepeat="no-repeat";
document.body.style.backgroundSize="cover";
document.body.style.position="fixed";





let foot=document.createElement("footer");
