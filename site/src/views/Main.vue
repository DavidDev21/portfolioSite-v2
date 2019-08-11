<template>
  <div>
    <v-container class="container_style" fluid pt-0>
      <!-- Profile Card Section / Top Intro Section-->
      <v-layout row wrap>
        <v-parallax class="parallax_image lower_opacity elevation--0" :src="require('@/assets/NYC_background.jpg')">
          <v-layout align-center justify-center row>
            <v-flex>
              <!-- Profile Card -->
              <v-container class="mx-auto profile_card">
                <v-layout class="text-black profile_content" pa-0 row wrap justify-center align-center>
                  <v-flex md3 shrink class="mr-4">
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
                  <v-flex md7 ml-4 my-5>
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
                          <v-btn class="mr-3 btn_hover" color="primary" target="_blank" href="@/assets/David_Zheng_Resume.pdf" download>Resume <v-icon right>fas fa-download</v-icon></v-btn>
                      </v-layout>
                    </v-container>
                  </v-flex>
                </v-layout>
              </v-container>
            </v-flex>
          </v-layout>
        </v-parallax>
      </v-layout>

      <!-- Then follows Education-->
      <v-layout class="education_section" row wrap justify-center pb-5>
        <v-container pa-5 class="education_container">
          <v-layout row wrap>
            <v-flex mb-3 pa-4>
              <h2 class="text-white">Education</h2>
            </v-flex>
          </v-layout>
          <v-layout row wrap justify-space-around>
            <!-- School Logo -->
            <v-flex align-self-center sm2>   
              <v-img
                class="profile_img"
                :src="require('@/assets/nyu.png')"
                max-height="270px"
                max-width="270px"
              >
              </v-img>
            </v-flex>
            <v-flex sm9>
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
      <!-- Experience -->

      <!-- Projects -->
    </v-container>
  </div>
</template>

<style scoped>
.test
{
  background: #8F1AF1;
  width: 100%;
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
.divider_line
{
  border-left: 1.5px solid gray;
  height: 175px;
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
</style>

<script>
export default {
  data: () => ({
  }),
};
</script>
