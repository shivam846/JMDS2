console.log("JS Loaded");

// Course Details Data
const courseDetails = {
    "B.Ed": "Duration: 2 Years | Eligibility: Graduation | Entrance Exam: State-Level Exams.",
    "D.El.Ed": "Duration: 2 Years | Eligibility: 10+2 | Focus: Primary Education.",
    "B.Tech": "Duration: 4 Years | Eligibility: 10+2 with PCM | Entrance Exams: JEE, State CETs.",
    "Polytechnic": "Duration: 3 Years | Eligibility: 10th Pass | Specializations Available.",
    "M.B.A": "Duration: 2 Years | Eligibility: Graduation | Entrance Exams: CAT, MAT, XAT.",
    "B.C.A": "Duration: 3 Years | Eligibility: 10+2 | Focus: IT & Computer Applications.",
    "BA.LLB": "Duration: 5 Years | Eligibility: 10+2 | Focus: Law & Legal Studies.",
    "Dresser": "Duration: 1 Year | Eligibility: 10th Pass | Medical Training Course.",
    "ANM": "Duration: 2 Years | Eligibility: 10+2 | Focus: Nursing & Midwifery.",
    "BAMS": "Duration: 5.5 Years | Eligibility: 10+2 with PCB | Focus: Ayurveda Medicine.",
    "B.Sc Biotech": "Duration: 3 Years | Eligibility: 10+2 with Science | Biotechnology Focus.",
    "B.Sc Biomedical": "Duration: 3 Years | Eligibility: 10+2 with Science | Biomedical Focus.",
    "B.Sc Nursing": "Duration: 4 Years | Eligibility: 10+2 with PCB | Focus: Nursing Science.",
    "G.N.M": "Duration: 3 Years | Eligibility: 10+2 | General Nursing Course.",
    "B.Pharmacy": "Duration: 4 Years | Eligibility: 10+2 with PCB | Focus: Pharmacy Studies.",
    "Hotel Management": "Duration: 3-4 Years | Eligibility: 10+2 | Focus: Hospitality Industry.",
    "B.Sc Agriculture": "Duration: 4 Years | Eligibility: 10+2 with PCB/PCM | Focus: Farming Sciences.",
    "Bachelor of Mass Media": "Duration: 3 Years | Eligibility: 10+2 | Focus: Journalism & Media.",
    "Bachelor of Journalism": "Duration: 3 Years | Eligibility: 10+2 | Focus: Journalism & Communication.",
    "BFA (Fashion Design)": "Duration: 4 Years | Eligibility: 10+2 | Focus: Fashion & Textile Design."
};

// Function to show modal with details
function showCourseDetails(courseName) {
    document.getElementById("course-title").innerText = courseName;
    document.getElementById("course-details").innerText = courseDetails[courseName] || "Details not available.";

    // Set inquiry link dynamically
    document.getElementById("inquiry-btn").onclick = function() {
        window.location.href = "https://docs.google.com/forms/d/e/1FAIpQLSd3iUCJ_ame5eg4T3Z-aTclx2cOmNsWMbNiC2HReHBLDd6X1w/viewform?usp=sharing"; // Replace with your form link
    };

    document.getElementById("course-modal").style.display = "flex";
}

// Function to filter courses based on search input
function filterCourses() {
    let input = document.getElementById("search").value.toLowerCase();
    let courses = document.querySelectorAll(".service");

    courses.forEach(course => {
        let courseName = course.getAttribute("data-name").toLowerCase();
        if (courseName.includes(input)) {
            course.style.display = "block";
        } else {
            course.style.display = "none";
        }
    });
}

// Add event listeners to all courses
document.querySelectorAll(".service").forEach(item => {
    item.addEventListener("click", function() {
        showCourseDetails(this.getAttribute("data-name"));
    });
});

// Close modal
document.getElementById("close-modal").addEventListener("click", function() {
    document.getElementById("course-modal").style.display = "none";
});
