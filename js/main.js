/* eslint-disable comma-dangle */
/* eslint-disable indent */
/* eslint-disable no-plusplus */

// mobile-menu

const hamburger = document.querySelector(".menu");
const links = document.querySelectorAll(".mobile-menu a");
hamburger.addEventListener("click", () => {
  if (hamburger.classList.contains("active")) {
    hamburger.classList.remove("active");
    document.querySelector(".mobile-menu").style.display = "none";
  } else {
    hamburger.classList.add("active");
    document.querySelector(".mobile-menu").style.display = "block";
  }
});

links.forEach((a) => {
  a.addEventListener("click", () => {
    hamburger.classList.remove("active");
    document.querySelector(".mobile-menu").style.display = "none";
  });
});

// popupwindow

const cardObject = [
  {
    id: 1,
    title: "ZipLining in 1000 Viviendas",
    subTitle: "",
    imageMobile: "./img/Snapshoot-Portfolio.png",
    imageDesktop: "./img/card-Portfolio.png",
    details: ["Exciting, Incredible and tall heights", "VR and 1 Person"],
    description:
      "You can have a great experience making ziplining in 1000 viviendas towers while neighbors hit you with tomatoes and lettuces.",
    langs: ["Doraemon", "Copyright", "Reserve"],
    gitLink: "https://www.youtube.com/watch?v=KJnbTQqzsag&t",
    srcLink: "https://www.youtube.com/watch?v=KJnbTQqzsag&t",
  },
  {
    id: 2,
    title: "San roque's festival",
    subTitle: "",
    imageMobile:
      "https://www.bing.com/images/blob?bcid=RIDIxX9YfgYFOg",
    imageDesktop:
      "https://www.bing.com/images/blob?bcid=RIDIxX9YfgYFOg",
    details: ["Exciting", "Happy", "Only VR"],
    description:
      "At the San Roque festival you can have a fun and hectic adventure in which you will have things like a dance simulator, you can drink all kinds of drinks and even a fight. (Everything is safe and at no time do you have any risk)",
    langs: ["Doraemon", "Copyright", "Reserve"],
    gitLink: "https://www.youtube.com/watch?v=wohwc9MQt6A",
    srcLink: "https://www.youtube.com/watch?v=wohwc9MQt6A",
  },
  {
    id: 3,
    title: "Torremanzana's municipal pool",
    subTitle: "",
    imageMobile:
      "https://onda15.es/wp-content/uploads/2022/06/img-20220623-wa0012.jpg",
    imageDesktop:
      "https://onda15.es/wp-content/uploads/2022/06/img-20220623-wa0012.jpg",
    details: ["Chill", "Relaxing","Multiplayer","Only VR"],
    description:
      "In the municipal swimming pool of Torremanzanas you can have a great time pretending that you are in a heated pool, yakuzzi or simply swimming with your friends or having water fights!",
    langs: ["Doraemon", "Copyright", "Reserve"],
    gitLink: "https://www.youtube.com/watch?v=wohwc9MQt6A",
    srcLink: "https://www.youtube.com/watch?v=wohwc9MQt6A",
  },
  {
    id: 4,
    title: "Rafting in Villaverde mojinas",
    subTitle: "",
    imageMobile:
      "https://www.bing.com/images/blob?bcid=RLHkokvFqwYFqxcxoNWLuD9SqbotqVTdP2U",

    imageDesktop:
      "https://www.bing.com/images/blob?bcid=RLHkokvFqwYFqxcxoNWLuD9SqbotqVTdP2U",
    details: ["Chill", "Exciting","Amazing", "Multiplayer", "VR And 1 Person"],
    description:
      "In the Villaverde Mojines river you can go rafting with your friends and have fun adventures while you go down the river, be careful as you could fall!",
    langs: ["Doraemon", "Copyright", "Reserve"],
    gitLink: "https://www.youtube.com/watch?v=wohwc9MQt6A",
    srcLink: "https://www.youtube.com/watch?v=wohwc9MQt6A",
  },
];

for (let i = 0; i < cardObject.length; i++) {
  const element = cardObject[i];

  document.querySelector(
    ".main-section"
  ).innerHTML += `<section class="tonic-section" id="tonic">
        <ul class="images">
          <li>
            <img
              src="${element.imageDesktop}"
              alt="nature card"
              class="desktop-images"
            />
          </li>
          <li>
            <img
              src="${element.imageMobile}"
              alt="tarnner christensen from high school dropout to product designer at facebook"
              class="mobile-images"
            />
          </li>
        </ul>

        <div class="tonic">
          <h3>${element.title}</h3>
          <div class="date">
            <h3>${element.subTitle}</h3>
                ${element.details
                  .map(
                    (
                      x
                    ) => ` <img src="img/Counter.png" alt="" class="counter" />
            <p>${x}</p>`
                  )
                  .join("")}           
          </div>
          <p class="daily">
           ${element.description}
          </p>      
          
          <div>           
            ${element.langs
              .map((x) => `<button type="button">${x}</button>`)
              .join("")}           
          </div>
          <button id='${element.id}' class="see-project">Play VR Experience</button>
        </div>
      </section>`;
}

document.querySelectorAll(".see-project").forEach((btn) => {
  btn.addEventListener("click", () => {
    const id = Number(btn.id);
    const project = cardObject.find((p) => p.id === id);

    document.querySelector(".pop").innerHTML = `
      
    <section class="modal-wrapper">
      <div class="modal">
        <div class="modal-title">
          <h2>${project.title}</h2>
          <div class='close-modal'>
          <span class="iconify" data-icon="ep:close-bold"></span>
          </div>
        </div>
        <div class="date">
            <h3>${project.subTitle}</h3>
                ${project.details
                  .map(
                    (
                      x
                    ) => ` <img src="img/Counter.png" alt="" class="counter" />
            <p>${x}</p>`
                  )
                  .join("")}           
          </div>
        <img src="${project.imageDesktop}"/>
        <div class="modal-content">
          <p>
            ${project.description}
          </p>
          <div>
             <div>           
            ${project.langs
              .map((x) => `<button type="button">${x}</button>`)
              .join("")}           
          </div>
            <div class="modal-btns">
              <a href="${project.gitLink}" class="btn github-link">
                See live
                <span class="iconify iconbtnlink" data-icon="line-md:external-link-rounded"></span>                                                                                    
              </a>
              <a href="${project.srcLink}" class="btn source-link">
                See source                                  
                
                <span class="iconify iconbtn" data-icon="teenyicons:github-solid"></span>                        
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>  

    `;
    document.querySelector(".close-modal").addEventListener("click", () => {
      document.querySelector(".modal-wrapper").remove();
    });
  });
});

// validation
const form = document.querySelector("#contact form");
const { email } = form.elements;

function showMsg(input, msg) {
  const small = document.createElement("small");
  small.classList.add("error");
  small.textContent = msg;
  input = document.getElementById("#getBtn");
  form.insertBefore(small, input);
}

function resetMsg() {
  document.querySelectorAll("small").forEach((s) => s.remove());
}

form.addEventListener("submit", (e) => {
  e.preventDefault();
  resetMsg();
  if (email.value !== email.value.toLowerCase()) {
    showMsg(email, "Please enter your email in lowercase");
    return false;
  }
  form.submit();
  return true;
});
