// Scholarships Data
const scholarships = [
  { title: "De La Salle-College of Saint Benilde Scholarships 2026 (Philippines)", category: "bachelor", link: "https://www.benilde.edu.ph/admissions/scholarships-and-grants/" },
  { title: "University Japan ADB Scholarship 2026 (Masters)", category: "masters", link: "https://www.st.keio.ac.jp/en/admissions/adb.html" },
  { title: "Government of Ireland PhD Scholarships 2026", category: "phd", link: "https://www.researchireland.ie/wp-content/uploads/2025/09/Government-of-Ireland-Postgraduate-Scholarship-2026_Call-Document.pdf" },
  { title: "University of Auckland Doctoral Scholarships", category: "doctoral", link: "https://www.auckland.ac.nz/en/study/scholarships-and-awards/scholarship-types/postgraduate-scholarships/doctoral-scholarships.html" }
];

const listContainer = document.getElementById("scholarshipList");

function renderScholarships(list) {
  listContainer.innerHTML = "";
  list.forEach(s => {
    const card = document.createElement("a");
    card.className = "card";
    card.href = s.link;
    card.target = "_blank";
    card.innerText = s.title;
    listContainer.appendChild(card);
  });
}

// Default render (latest on top)
renderScholarships(scholarships.reverse());

// Filter form
document.getElementById("filterForm").addEventListener("submit", e => {
  e.preventDefault();
  const category = document.getElementById("categorySelect").value;
  if (category === "") {
    renderScholarships(scholarships);
  } else {
    const filtered = scholarships.filter(s => s.category === category);
    renderScholarships(filtered);
  }
});

// Subscribe form redirect
document.getElementById("subscribeForm").addEventListener("submit", e => {
  e.preventDefault();
  window.location.href = "subscribe/thanks.html";
});
