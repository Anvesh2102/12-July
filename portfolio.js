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
// logo.style.padding="15px";
// logo.style.fontFamily=""
nav.appendChild(logo);
logo.style.width="150px";
document.body.style.backgroundColor="grey";
document.body.style.margin=0;
// document.body.style.padding=0;


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

// let info=document.querySelectorAll(".info");
// array.forEach(info => {
//     style.padding="20px"
// });

let bg=document.createElement("div");
bg.id="bg";
document.body.appendChild(bg);
bg.style.margin=0;


document.body.style.backgroundImage="url('uchiha.png')";
document.body.style.backgroundRepeat="no-repeat";
document.body.style.backgroundSize="cover";
document.body.style.position="fixed";


let intro=document.createElement("h1");
intro.className="detail";
intro.textContent="Hello, Iam Anvesh Kumar Anthati";
bg.appendChild(intro);

let info=document.createElement("pre");
info.className="detail";
info.id="info"
info.innerHTML=`Welcome to my portfolio. 
Iam passionate about building meaningful digital experiences that combine creativity with functionality. 
With a strong background in Full Stack Development. 
I've worked on projects like AJIO coning, building games like tic-tac-toa, card games.`
bg.appendChild(info);

let foot=document.createElement("footer");
