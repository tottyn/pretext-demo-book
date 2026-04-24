var ptx_lunr_search_style = "textbook";
var ptx_lunr_docs = [
{
  "id": "syllabusactual",
  "level": "1",
  "url": "syllabusactual.html",
  "type": "Chapter",
  "number": "",
  "title": "Syllabus",
  "body": " Syllabus    Contact Information    Instructor  Njesa Totty    Email  ntotty@framingham.edu    Office  Hemenway Hall 404C    Office Hours  MW 10:30am–11:30am, R 12:00pm–1:00pm, or by appointment       Lecture Time and Location   MW 8:30am–10:20am in Hemenway Annex 329      Course Information   Course Description  A thorough introduction to the application of statistics to the sciences. Topics include descriptive statistics, probability distributions, and a strong emphasis on regression and hypothesis testing, including t-tests, chi-square tests, and analysis of variance. Emphasis is placed on analyzing data to select appropriate inferential methods. Statistical software is used throughout.    Prerequisites  A grade of C (2.00) or higher in MATH 123 Introduction to Functions or eligibility to enroll in MATH 180 Precalculus.      Course Learning Outcomes  By the end of the course, you will be able to:   Turn research problems into statistical questions.  Identify study structure and its impact on conclusions.  Construct and interpret graphical representations of data.  Compute and interpret summary statistics in plain language.  Select and apply appropriate statistical methods.  Communicate results of statistical analyses effectively.  Use statistical software for analysis and visualization.      Career Readiness  This course supports competencies identified by the National Association of Colleges and Employers (NACE):    Problem-Solving & Critical Thinking: Translate research questions into statistical analyses and make informed decisions.    Quantitative & Technical Skills: Develop skills in computing statistics, visualization, and software use.    Data Interpretation & Communication: Communicate statistical findings clearly in written and visual forms.    Teamwork & Professionalism: Engage in collaborative and ethical data practices.    Career Readiness & Lifelong Learning: Build adaptable skills for continued learning and professional growth.    For more information: NACE Career Readiness Competencies .     Textbook and Technology   Textbook  Course materials are based on OpenIntro Statistics, 4th Edition by Diez, Çetinkaya-Rundel, and Barr. A free PDF is available online .    Technology  RStudio: Used for data analysis, visualization, and modeling. Students will use the cloud version.  Laptop: A personal laptop is required. Loaners and discounts are available through the university.      Communication  Email is the preferred method of contact. Responses are typically provided within two business days. Students are also encouraged to attend office hours or schedule appointments.     Assessments and Grading Criteria  Your grade is based on the following components:    Lecture Activities (20%)  In-class activities including group work and presentations. Lowest two scores are dropped. Cannot be made up if missed.    Exams (16% each, 80% total)  Exams assess understanding of course material. One two-sided handwritten note sheet is allowed. Make-up exams must be completed within five business days with penalties for lateness.    Readings and Homework  Assigned for practice. Feedback available during office hours or by appointment.       Policies   Disability Services  Students requesting accommodations must provide documentation from the Office of Academic Support. Contact (508) 626-4906 or visit CASA .    Academic Integrity  Collaboration is encouraged, but submitted work must be your own. Unauthorized use of internet resources or AI tools is a violation of academic integrity.    Illness and Absences  Students should stay home when sick and follow public health guidance. Contact healthcare providers and follow university COVID-19 policies when applicable.    University Policies  All policies in the Student Handbook and Code of Conduct apply.    "
}
]

var ptx_lunr_idx = lunr(function () {
  this.ref('id')
  this.field('title')
  this.field('body')
  this.metadataWhitelist = ['position']

  ptx_lunr_docs.forEach(function (doc) {
    this.add(doc)
  }, this)
})
