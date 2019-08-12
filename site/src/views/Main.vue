<template>
  <div>
    <v-container class="container_style" fluid pt-0>
      <!-- Profile Card Section / Top Intro Section-->
      <v-layout id="profile" class="profile_section" align-center row wrap>
        <v-flex>
        <!--<v-parallax class="parallax_image lower_opacity" :src="require('@/assets/NYC_background.jpg')">-->
          <v-container>
          <v-layout align-center justify-center row>
            <v-flex>
              <!-- Profile Card -->
              <v-container class="mx-auto profile_card">
                <v-layout class="text-black profile_content" pa-0 row wrap justify-center align-center>
                  <v-flex sm3 md3 shrink class="mr-4">
                    <v-img
                      class="profile_img"
                      :src="require('@/assets/profile_picture.jpg')"
                      max-height="200px"
                      width="225px"
                    >
                    </v-img>
                  </v-flex>
                  
                  <div class="divider_line">
                  </div>
                  <v-flex sm7 md7 ml-4 my-5>
                    <!-- Right side of the profile card-->
                    <v-container>
                      <!-- Profile description -->
                      <v-layout row wrap>
                        <v-flex>
                          <h3 style="margin-bottom:3px;">Hi, my name is David Zheng</h3>
                          <p>
                            I am a senior at NYU Tandon studying Computer Science. I started coding since high school
                            on the robotics team and always loved creating solutions towards challenging problems. Computer Science 
                            has taught me to tackle difficult problems through logical and creative thinking. Perspective and persistent 
                            are important when solutions aren't obvious. I'm a quick learner and enthusiastic about tackling difficult problems
                            and growing as an individual. 
                          </p>
                        </v-flex>
                      </v-layout>
                      <!-- Profile links-->
                      <v-layout mt-3 row wrap justify-center>
                          <v-btn class="mr-3 btn_hover" color="primary" target="_blank" href="https://github.com/DavidDev21">Github <v-icon right>fab fa-github</v-icon></v-btn>
                          <v-btn class="mr-3 btn_hover" color="primary" target="_blank" href="https://www.linkedin.com/in/david-zheng-977746b2/">LinkedIn <v-icon right>fab fa-linkedin</v-icon></v-btn>
                          <v-btn class="mr-3 btn_hover" color="primary" href="David_Zheng_Resume_Clean.pdf" download="David Zheng Resume">Resume <v-icon right>fas fa-download</v-icon></v-btn>
                      </v-layout>
                    </v-container>
                  </v-flex>
                </v-layout>
              </v-container>
            </v-flex>
          </v-layout>
          </v-container>
        <!--</v-parallax>-->
        </v-flex>
      </v-layout>

      <!-- Then follows Education-->
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

      <!-- Projects -->
      <v-layout id="project" class="project_section" row wrap justify-center pb-5>
        <v-flex>
            <v-container class="project_container mt-5">
              <v-layout row wrap mb-5>
                <v-flex>
                  <h1 class="text-black text-center">Projects</h1>
                </v-flex>
              </v-layout>
              <v-layout row wrap align-start justify-space-around>
                <v-flex xs12 sm4 md4 mb-5>
                  <v-container class="project_card text-black">
                    <!-- project title -->
                    <v-layout row wrap text-center>
                      <v-flex xs12>
                        <h2>Shuffle</h2>
                      </v-flex>
                    </v-layout>
                    <div class="horizontal_divider"></div>
                    <!-- project image / video (optional) -->
                    <v-layout row wrap text-center>
                      <v-flex xs12>
                        <v-img>
                        </v-img>
                      </v-flex>
                    </v-layout>
                    <!-- project description -->
                    <!-- project link -->
                  </v-container>
                </v-flex>
                <v-flex class="test" xs12 sm4 md4>
                  asdasdsa
                </v-flex>
              </v-layout>
            </v-container>
        </v-flex>
      </v-layout>
      <!-- Projects -->
    </v-container>
  </div>
</template>

<style scoped>
/* Large */
@media only screen and (min-width: 960px)
{
  .divider_line
  {
    border-left: 1.5px solid gray;
    height: 175px;
  }
}
/* Medium */
@media only screen and (min-width: 601px) and (max-width: 959px) {
  .parallax_image {
    height: 700px !important;
    width: 100%;
  }
  .profile_card
  {
    max-width: 700px !important;
  }
  .divider_line
  {
    border-left: 1.5px solid gray;
    height: 300px;
  }
}

/* Small */
@media only screen and (max-width: 600px) {
  .parallax_image {
    height: 800px !important;
    width: 100%;
  }
  .profile_section
  {
    height: 800px !important;
  }
  .profile_card
  {
    max-width: 325px !important;
  }
}

.test
{
  background: #8F1AF1;
  width: 100%;
}

.horizontal_divider
{
  border-bottom: 1px solid black;
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

.profile_img
{
  border-radius: 8%;
}

.profile_content
{
  padding-top: 6%;
  padding-bottom: 6%;
}
.profile_card
{
  border-radius: 5%;
  background-color: rgba(255,255,255,0.7);
  max-width: 820px;
  min-height: 300px;
}
.parallax_image
{
  width: 100%;
  height: 100%;
}

/* Button Hover */
.btn_hover:Hover
{
  background-color:lightblue !important;
  transform: scale(1.09);
}
.container_style
{
}

/* Profile Section */
.profile_section
{
  background-image: url("../assets/NYC_background.jpg");
  background-size: cover;
  background-attachment: fixed;
  height: 650px;
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
  height: 500px;
}

.project_container
{
}

.project_card
{
  border-radius: 5%;
  background-color: rgba(255,255,255,.9);
}
</style>

<script>
export default {
  methods: {
    downloadResume: function() {
      
    }
  },
  data: () => ({
  }),
};
</script>
