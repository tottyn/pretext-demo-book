var ptx_lunr_search_style = "textbook";
var ptx_lunr_docs = [
{
  "id": "syllabusactual",
  "level": "1",
  "url": "syllabusactual.html",
  "type": "Section",
  "number": "",
  "title": "Syllabus",
  "body": " Syllabus        Course Information  This is the syllabus for STAT 203 - Statistics for the Natural Sciences for Fall 2026.   Instructor  Dr. Njesa Totty, HH 404C, ntotty@framingham.edu .    Student Hours  MWRF 9:45am-10:30am, or by appointment    Class meets  MWRF 10:30am-11:20am in HH 401    Course Description  A thorough introduction to the application of statistics to the sciences. Topics include a brief introduction to the appropriate descriptive statistics, relevant probability distributions, and a heavy focus on regression and hypothesis testing, including t-tests, chi-square tests for categorical data, and analysis of variance. Emphasis is placed on the analysis of data in order to apply an appropriate inferential test. Appropriate statistical software is employed.    Course Learning Outcomes     Turn research problems into statistical questions.    Identify the structure of a study and explain how this influences potential conclusions.    Construct graphics from data and describe what they reveal about the data.    Compute summary statistics and explain what they communicate about the data in plain language.    Select and apply an appropriate statistical method for a given dataset.    Communicate the results of a statistical analysis.    Use statistical software for data summarization and analysis.       Career Readiness  This course prepares you for your career by addressing the following National Association of Colleges and Employers (NACE) competencies:  Problem-Solving & Critical Thinking: Your will learn to translate research questions into statistical queries, analyze study designs, and select appropriate inferential tests, fostering analytical reasoning and decision-making essential for all careers.   Quantitative & Technical Skills: The course emphasizes computing summary statistics, constructing informative graphics, and using statistical software (RStudio), preparing you to handle and interpret complex data accurately.   Data Interpretation & Communication: You will practice explaining statistical results in plain language and constructing clear visualizations, enhancing written and verbal communication skills necessary for reporting and collaboration.   Teamwork & Professionalism: By working with data in realistic contexts, you will develop collaborative and ethical approaches to research, aligning with NACE competencies of teamwork, professionalism, and ethical responsibility.   Career Readiness & Lifelong Learning: Mastery of statistical tools, data interpretation, and software proficiency equips you to pursue further research, graduate studies, or technical roles, fostering adaptability and continuous learning in your career. For more information on NACE competencies visit: NACE Career Readiness Defined .    Prerequisite  A grade of C (2.00) or higher in MATH 123 Introduction to Functions or the eligibility to enroll in MATH 180 Precalculus.    Textbook and course materials  Course content and further reading will come from OpenIntro Statistics, 4th Edition by Diez, Çetinkaya-Rundel, and Barr. A PDF is available for free online .       Assessments and Grades     Assessment of Learning Targets      Final Exam      Assessment of Mathematical Engagement  Your level of effort and engagement will be assessed through your participation in class and completion of a variety of homework assignments.   Participation      Daily Prep Assignments      Practice Problems      Written Homework         Final Grades        Course Policies   Attendance      Late work      Classroom Decorum      Academic Integrity      Generative AI      Title IX and Equal Opportunity       Important Dates     Friday, Aug 25  Last day to add a class    Monday, Sep 4  Labor Day (no classes)    Monday, Sep 8  Last day to drop a class    Nov 26 - Nov 28  Thanksgiving break (no classes Wednesday, Thursday or Friday)    Friday, Dec 5  Last day to withdraw from class and receive a W    Thursday, Dec 11  Final Exam from 10:45am to 1:15pm      "
},
{
  "id": "sec-course-info-2",
  "level": "2",
  "url": "syllabusactual.html#sec-course-info-2",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "STAT 203 - Statistics for the Natural Sciences "
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
