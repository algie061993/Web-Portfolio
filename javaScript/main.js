/* menu script */
// Function to load the sidebar menu from an external HTML file
// This function is called when the page loads to load the sidebar menu
function loadNavMenu() {
  fetch("/components/sideBarMenu/sideBarMenu.html")
    .then((response) => response.text())
    .then((data) => {
      document.getElementById("sidebar").innerHTML = data;
      // Open sidebar automatically on first load
      document.getElementById("sidebar").classList.add("active");
      document.getElementById("openSidebar").style.display = "none";
      /* Add close button event after sidebar is loaded */
      const closeBtn = document.getElementById("closeSidebar");
      if (closeBtn) {
        closeBtn.addEventListener("click", function () {
          document.getElementById("sidebar").classList.remove("active");
          document.getElementById("openSidebar").style.display = "block";
        });
      }
    });
}

/* Open sidebar and hide open button */
document.getElementById("openSidebar").addEventListener("click", function () {
  document.getElementById("sidebar").classList.add("active");
  this.style.display = "none";
});

loadNavMenu();

// Function to create and display cards dynamically
// This function is called when the page loads to display the certificates
function cards() {
  const cardsData = [
    {
      title: "JavaScript Essentials 1 Badge",
      content:
        "Completed a course on JavaScript fundamentals, covering basic syntax, data types, and control structures.",
      image: "/images/certificates/JavaScript_Essentials_1_Badge20240626.jpg",
    },
    {
      title: "AI Integration Certificate",
      content:
        "Explored the integration of AI technologies in software development, focusing on innovation and impact in various industries.",
      image: "/images/certificates/ai integration innovation and impact.jpg",
    },
    {
      title: "Information Management in the Digital Age",
      content:
        "Gained insights into managing information effectively in the digital era, including data organization, retrieval, and security.",
      image:
        "/images/certificates/information management in the digital age.jpg",
    },
    {
      title: "JVD Teachscape: Discover Innovation in the Cool Climes",
      content:
        "Participated in a program focused on innovative teaching practices and educational technology in diverse environments.",
      image: "/images/certificates/jvd techscape.jpg",
    },
    {
      title: "Basic Knowledge with the Research Trends",
      content:
        "Developed foundational knowledge in research methodologies and current trends in various fields of study.",
      image:
        "/images/certificates/basic knowledge with the research trebds.jpg",
    },
    {
      title: "Role in Digital Transformation",
      content:
        "Explored the critical role of digital transformation in modern organizations, focusing on strategies for successful implementation.",
      image:
        "/images/certificates/BITZ 2023 Session 2 Understanding the Innovators Role in Digital Transformation.jpg",
    },
  ];

  function createCard({ title, content, image }) {
    const card = document.createElement("div");
    card.className = "card";
    card.innerHTML = `
      ${image ? `<img class="card-img" src="${image}" alt="${title}">` : ""}
      <strong>${title}</strong>
      <p>${content}</p>
    `;
    return card;
  }

  const container = document.getElementById("card-list-container");
  if (!container) return; // Prevent error if not on certificate.html
  container.innerHTML = "";
  cardsData.forEach((data, i) => {
    const card = createCard(data);
    card.style.animationDelay = `${i * 0.15}s`;
    container.appendChild(card);
  });
}

cards();

// Dynamically create project cards
// This function is called when the page loads to display the projects
// It creates a list of project cards with titles, descriptions, images, GitHub links,

function projectCards() {
  const projectsData = [
    {
      title: "Capstone Project: Freight Management System Logistics 1",
      description:
        "Effortlessly manage your freight operations with our refined Freight Management System. Whether youre handling shipments, tracking deliveries, fuel, or vehicle parts stock, our platform ensures efficiency and cost-effectiveness.",
      image: "/images/thumbnails/capstone-thumbnail.jpg",
      github: "https://github.com/algie061993",
      video: "https://youtu.be/4mfk5RTE6zI",
    },
  ];

  function createProjectCard({ title, description, image, github, video }) {
    const card = document.createElement("div");
    card.className = "card";
    card.style.maxWidth = "250px";
    card.style.margin = "1.5em auto";
    card.innerHTML = `
    
      <strong>${title}</strong>
      <p>${description}</p>
      <p>
        <a href="${github}" target="_blank">
          <i class="fab fa-github"></i> View Source on GitHub
        </a>
      </p>
      <div style="margin: 1em 0">
        ${
          video.includes("youtube.com") || video.includes("youtu.be")
            ? `<iframe width="100%" height="180" src="${video.replace(
                /(?:https?:\/\/)?(?:www\.)?(?:youtube\.com\/watch\?v=|youtu\.be\/)([\w-]+)/,
                "https://www.youtube.com/embed/$1"
              )}" frameborder="0" allowfullscreen></iframe>`
            : `<a href="${video}" target="_blank">Watch Project Video</a>`
        }
      </div>
    `;
    return card;
  }

  const container = document.getElementById("project-list-container");
  if (!container) return; // Prevent error if not on projects.html
  container.innerHTML = "";
  projectsData.forEach((data, i) => {
    const card = createProjectCard(data);
    card.style.animationDelay = `${i * 0.15}s`;
    container.appendChild(card);
  });
}

projectCards();
