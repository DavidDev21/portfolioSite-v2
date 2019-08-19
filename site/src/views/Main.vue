<template>
  <div>
    <v-container class="container_style" fluid py-0>
      <!-- Profile Card Section / Top Intro Section-->
      <v-layout id="profile" class="profile_section" justify-center align-center row wrap py-5>
        <v-flex xs10 sm10 md8>
                  <!-- Profile Card -->
                  <v-container class="profile_card px-4">
                      <v-layout row wrap px-3>
                      <!-- Company Logo -->
                      <!-- sm3 -->
                      <v-flex class="border-right" xs12 md3 align-self-center pr-3>
                          <v-container>
                              <v-layout column align-center justify-center>
                                  <v-flex align-self-center>
                                    <v-img class="profile_img" width="225px" max-height="225px" contain :src="require('@/assets/profile_picture.jpg')">
                                    </v-img>
                                  </v-flex>
                              </v-layout>
                          </v-container>
                      </v-flex>
                      <!-- Profile Summary (right side of card) -->
                      <!-- sm9 -->
                      <v-flex xs12 md9 pl-3>
                          <v-container>
                          <v-layout row wrap mb-1>
                              <v-flex>
                              <h3 class="">Hi, my name is David Zheng</h3>
                              </v-flex>
                          </v-layout>
                          <!-- Profile Description (Paragraph Format) -->
                          <v-layout row wrap>
                              <v-flex>
                                  <p>I am a senior at NYU Tandon studying Computer Science. I started coding since high school
                                    on the robotics team and always loved creating solutions towards challenging problems. Computer Science 
                                    has taught me to tackle difficult problems through logical and creative thinking. Perspective and persistent 
                                    are important when solutions aren't obvious. I'm a quick learner and enthusiastic about tackling difficult problems
                                    and growing as an individual. </p>
                              </v-flex>
                          </v-layout>
                          <v-layout class="flex_column" row wrap justify-center align-center text-center>
                            <v-flex xs4 sm3 mb-3>
                              <v-btn class="btn_hover" color="primary" target="_blank" href="https://github.com/DavidDev21">Github <v-icon right>fab fa-github</v-icon></v-btn>
                            </v-flex>
                            <v-flex xs4 sm3 mb-3>
                              <v-btn class="btn_hover" color="primary" target="_blank" href="https://www.linkedin.com/in/david-zheng-977746b2/">LinkedIn <v-icon right>fab fa-linkedin</v-icon></v-btn>
                            </v-flex>
                            <v-flex xs4 sm3 mb-3>
                              <v-btn class="btn_hover" color="primary" href="David_Zheng_Resume_Clean.pdf" download="David Zheng Resume">Resume <v-icon right>fas fa-download</v-icon></v-btn>
                            </v-flex>
                          </v-layout>
                          </v-container>
                      </v-flex>
                      </v-layout>
                  </v-container>
        </v-flex>
      </v-layout>
      <!-- Experience Section -->
      <v-layout id="experience" class="primary" row wrap justify-center py-5>
        <v-flex class="" xs10 sm9>
          <v-container py-5 mb-5>
            <!-- Section Header -->
            <v-layout row wrap text-center justify-center>
              <v-flex>
                <h1 class="text-white">Experiences</h1>
                <div class="horizontal_divider_thick"></div>
              </v-flex>
            </v-layout>


            <!-- Experiences -->
            <div v-for="(item,index) in experiences" :key="index">
              <!-- Ladder Ropes -->
              <v-layout row wrap justify-center>
                <v-flex xs4 class="vertical_border">
                </v-flex>
              </v-layout>
              <experienceCard :companyLogo="item.companyLogo"
                              :companyName="item.companyName"
                              :companyLink="item.companyLink"
                              :header="item.header"
                              :description="item.description"
                              :listDescription="item.listDescription"></experienceCard>
            </div>
          </v-container>
        </v-flex>
      </v-layout>
      <!-- End of experience section -->
      <!-- Projects Section -->
      <!-- Two projects per row max -->
      <v-layout id="project" class="project_section" row wrap justify-center pb-5>
        <v-flex>
            <v-container class="project_container mt-5">
              <!-- Section Header -->
              <v-layout row wrap mb-5>
                <v-flex>
                  <h1 class="text-black text-center">Projects</h1>
                </v-flex>
              </v-layout>
              <!-- Projects -->
              <!-- Layout will wrap to next row if there is no space -->
              <v-layout row wrap align-start justify-space-around>
                <v-flex xs12 sm4 md4 ma-5 v-for="(item,index) in projects" :key="index">
                  <!-- All props must be defined somehow (no defaults) -->
                  <!-- Any undefined imgPath or video will not be render -->
                  <!-- videoType can be left as undefined since it just specifies the MIME type -->
                  <projectCard 
                              :projectTitle="item.projectTitle"
                              :projectDescription="item.projectDescription"
                              :projectLink="item.projectLink"
                              :projectDate="item.projectDate"
                              :imgPath="item.imgPath"
                              :videoPath="item.videoPath"
                              :videoType="item.videoType"></projectCard>
                </v-flex>
              </v-layout>
            </v-container>
        </v-flex>
      </v-layout>
      <!-- End of Project Section -->
      <!-- Education Section -->
      <v-layout id="education" class="education_section" row wrap justify-center pb-5>
        <v-container pa-5 mb-5 class="education_container">
          <v-layout row wrap>
            <v-flex mb-3 pa-4>
              <h1 class="text-white">Education</h1>
            </v-flex>
          </v-layout>
          <v-layout row wrap justify-space-around>
            <!-- School Logo -->
            <v-flex align-self-center md2 mt-2 mb-4>
              <v-container pa-0>
                <v-layout justify-center>
                  <v-flex shrink>
                    <v-img
                      class="profile_img"
                      :src="require('@/assets/nyu.png')"
                      max-height="270px"
                      max-width="270px"
                    >
                    </v-img>
                  </v-flex>
                </v-layout>
              </v-container>
            </v-flex>
            <v-flex md9>
              <!-- Education description -->
              <v-container class="education_content text-white">
                <v-layout row wrap pa-3>
                  <v-flex>
                    <h3>NYU Tandon School of Engineering | B.S Computer Science | 2016 - 2020</h3>
                  </v-flex>
                </v-layout>
                <v-layout row wrap px-5>
                  <v-flex>
                    <ul>
                      <li><strong>Relevant Coursework: </strong> Data Structures &amp; Algorithms,
                          Databases, Computer Networking, Operating Systems, Software Engineering, OOP
                      </li>
                      <li><strong>Awards: </strong> Pearl Junior Brownstein Award, Dean's List 2016-2019</li>
                      <li><strong>GPA: </strong> 3.9</li>
                    </ul>
                  </v-flex>
                </v-layout>
              </v-container>
            </v-flex>
          </v-layout>
        </v-container>
      </v-layout>
      <!-- End of Education Section -->
      <!-- Contact Me Section -->
      <v-layout id="contact" class="contact_section" row wrap justify-center align-center>
        <v-flex xs11 sm9>
          <v-container>
            <v-layout class="text-white" row wrap justify-center align-center text-center pb-5 mb-5>
              <v-flex xs12>
                <h1>You reached the end! Feel free to learn more or reach out to me!</h1>
              </v-flex>
            </v-layout>
            <v-layout row wrap justify-center>
              <v-flex xs3 sm2 text-center>
                <v-btn class="btn_hover" color="primary" target="_blank" href="https://github.com/DavidDev21"><v-icon>fab fa-github</v-icon></v-btn>
              </v-flex>
              <v-flex xs3 sm2 text-center>
                <v-btn class="btn_hover" color="primary" target="_blank" href="https://www.linkedin.com/in/david-zheng-977746b2/"><v-icon>fab fa-linkedin</v-icon></v-btn>
              </v-flex>
              <v-flex xs3 sm2 text-center>
                <v-btn class="btn_hover" color="primary" target="_blank" href="David_Zheng_Resume_Clean.pdf" download="David Zheng Resume"><v-icon>fas fa-download</v-icon></v-btn>
              </v-flex>
              <v-flex xs3 sm2 text-center>
                <v-btn class="btn_hover" color="primary" target="_blank" href="mailto:david.zheng@nyu.edu"><v-icon>fas fa-envelope</v-icon></v-btn>
              </v-flex>
            </v-layout>
          </v-container>
        </v-flex>
      </v-layout>
      <!-- End of Contact Me Section -->
    </v-container>
    <!-- End of main container -->
  </div>
</template>

<style scoped>
/* Large */
@media only screen and (min-width: 960px)
{
  .divider_line_right
  {
    border-right: 1.5px solid gray;
    height: 175px;
  }
  .border-right
  {
    border-right: 1px solid grey;
  }
}
/* Medium */
@media only screen and (min-width: 601px) and (max-width: 959px) {
  .divider_line_right
  {
    border-right: 1.5px solid gray;
    height: 300px;
  }
}

/* Small */
@media only screen and (max-width: 600px) {
  .flex_column
  {
    flex-direction: column !important;
  }
}

.test
{
  background: #8F1AF1;
  width: 100%;
}

a:link 
{
  text-decoration: none;
}

a:Hover
{
  text-decoration: underline;
}
.cursor_pointer
{
  cursor: pointer;
}

.horizontal_divider
{
  border-bottom: 1px solid black;
  width: 75%;
  margin: 0 auto;
}

.horizontal_divider_thick
{
  border-bottom: 3px solid black;
  width: 75%;
  margin: 0 auto;
}
.text-black
{
  color:black;
}
.text-blue
{
  color: #3b8ad8;
}
.text-white
{
  color: white;
}

.lower_opacity
{
  opacity: 0.85;
}

.vertical_border
{
  border-left: 10px solid #8F1AF1;
  border-right: 10px solid #8F1AF1;
  height: 100px;
}
/* Button Hover */
.btn_hover:Hover
{
  background-color:lightblue !important;
  transform: scale(1.09);
}
/* Profile Section */
.profile_img
{
  border-radius: 8%;
}

.profile_section
{
  height: 100vh;
}
.profile_card
{
  border-radius: 5%;
  background-color: rgba(255,255,255,0.7);
}

/* Profile Section */
.profile_section
{
  background-image: url("../assets/NYC_background.jpg");
  background-size: cover;
  background-attachment: fixed;
}


/* Education Section styles*/
.education_section
{
  background: #3b8ad8;
}
.education_container
{
  margin: 0px 12%;
}
.education_content{
  background-color: rgba(87,6,140,.35);
}

/* Project Styles*/
.project_section
{
  background-image: url("../assets/table_bg.jpg");
  background-size: cover;
  background-attachment: fixed;
}

.project_container
{
}

.project_video
{
  max-width: 100%;
  max-height: 100%;
}
.project_card
{
  border-radius: 5%;
  background-color: rgba(255,255,255,.9);
}

/* Experience section */
.experience_card_container
{
  background-color: white;
  border-radius: 2%;
}

.experience_header
{
  color: gray;
}

/* Contact Section */
.contact_section
{
  background-image: url("../assets/computer_bg.jpg");
  background-size: cover;
  background-attachment: fixed;
  height: 100vh;
}
</style>

<script>
import experienceCard from "@/components/experienceCard";
import projectCard from "@/components/projectCard";

export default {
  components: {
    experienceCard,
    projectCard
  },
  methods: {
    downloadResume: function() {
      
    }
  },
  data: () => ({
    projects: [{projectTitle: "Shuffle",
                projectDescription: `Shuffle is a job searching platform aimed at streamlining the job application for talented applicants.
                          It allows users to have more time looking at companies and less time filling out an application.
                          This project was part of a two semester long course (Software Engineering CS4513/4523) where students
                          went through the full software development life cycle and learnt about different project management tools and methods used
                          by technology companies.`,
                projectLink: "https://github.com/DavidDev21/Shuffle",
                projectDate: "Sept 2018 - May 2019",
                imgPath: "shuffleLogo.png",
                videoPath: undefined,
                videoType: "video/mp4"},
                {projectTitle: "GPlatform",
                projectDescription: `GPlatform is a 2D platformer game where the player tries to survive from falling spikes for as long as possible.
                          The game was made using the Unity Engine as part of a self-exploration and learning project for myself.
                          The project helped me learn about the interdisciplinary skills required to make a proper game, ranging from
                          music production, coding, and graphic design. Although the game itself is a simple concept, it taught me more about
                          process and the importance of staying organized throughout a project.`,
                projectLink: "https://github.com/DavidDev21/GPlatform",
                projectDate: "Dec 2017 - Jan 2018",
                imgPath: undefined,
                videoPath: "gplatform_video.mp4",
                videoType: "video/mp4"}],
    experiences: [{companyName: "BNY Mellon",
                  companyLink: "https://www.bnymellon.com/",
                  companyLogo: "bnymellon_logo.png",
                  header: "| Summer Technology Analyst | Summer 2019",
                  description: `BNY Mellon is a investment company and the #1 custodian bank in the world.
                                I worked on the Treasury Modeling Platform team, developing automation scripts and creating
                                data visualizations. I used Big Data frameworks and visualization tools
                                such as Hadoop and PowerBI. My experience taught me how to navigate within an large existing codebase and be
                                able to contribute meaningful work that has value for the team.`,
                  listDescription: ["Created 5 PowerBI reports to make data more accessible for our end-users",
                                    "Developed bash scripts to automate metadata refresh for impala tables",
                                    "Converted an existing hive table to be in parquet format and compressed with snappy."]},
                  {companyName: "Chairseven",
                  companyLink: "http://www.chairseven.com/",
                  companyLogo: "chairseven_logo.jpg",
                  header: "| QA Intern | Summer 2018",
                  description: `Chairseven is an enterprise software and digital content agency. 
                                It builds custom software and technology solutions for its clients, but also
                                acts as a consultant to determine the best tools that best satisfies the needs of the client.
                                During my time, the team worked on web interactives for a publishing company. I learned what it is like
                                to work in a small team and be able to wear multiple hats.`,
                  listDescription: ["Performed QA Testing on new features completed by developers",
                                    "Modified codebase and completed Gitlab tickets for feature changes and bug fixes",
                                    "Communicated with developers on bugs and issues found during QA Testing"]},
                  {companyName: "Fullstack Modular",
                  companyLink: "https://www.fullstackmodular.com/about-us/",
                  companyLogo: "fullstack_modular_logo.png",
                  header: "| IT Intern | Summer 2017",
                  description: `Fullstack Modular is a construction company that builds new buildings using modular construction.
                                The goal is to create buildings are that cheaper, better, and stronger. I worked on various internal proof
                                of concept projects to improve efficiency within the company, both as an individual and with a group of interns.
                                The experience showed me how technology can be impactful to many different industries and fields beyond the tech sector.`,
                  listDescription: ["Colloborated on a internal web platform as a central source of information for all employees (Used Drupal)",
                                    "Developed and deployed a C# Winform application to automate folder structure creation for new projects"]},
                  ]
  }),
};
</script>
