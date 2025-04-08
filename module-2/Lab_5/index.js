document.addEventListener("DOMContentLoaded", () => {
  const contentDiv = document.getElementById("personal");
  contentDiv.innerHTML = personalInfo; // Default content
});

const personalInfo = `
  <p class="info">Personal Info</p>
  <p id="contact">Phone</p>
  <p class="style">337-298-1234</p>
  <p id="contact">Email:</p>
  <p class="style">lsavoie11@gmail.com</p>
`;

const skills = `
<p class="info">Skills</p>
<ul>
  <li>JavaScript</li>
  <li>HTML</li>
  <li>CSS</li>
  <li>React</li>
  <li>TypeScript</li>
  <li>Python</li>
  <li>C++</li>
  <li>Rust</li>
</ul>
`;

function toggleContent() {
  const contentDiv = document.getElementById("personal");
  const button = document.getElementById("button");

  if (contentDiv.innerHTML.trim() === personalInfo.trim()) {
    contentDiv.innerHTML = skills;
    button.textContent = "Show Personal Info";
  } else {
    contentDiv.innerHTML = personalInfo;
    button.textContent = "Skill Reveal";
  }
}
