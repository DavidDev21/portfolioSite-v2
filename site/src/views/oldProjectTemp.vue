              <v-layout row wrap align-start justify-space-around>
                <!-- Project #1 -->
                <v-flex xs12 sm4 md4 ma-5>
                  <v-container class="project_card text-black">
                    <!-- project title -->
                    <v-layout row wrap text-center justify-center>
                      <a class="cursor_pointer" target="_blank" href="https://github.com/DavidDev21/Shuffle">
                        <v-flex xs12>
                          <h2>Shuffle</h2>
                        </v-flex>
                      </a>
                    </v-layout>
                    <div class="horizontal_divider"></div>
                    <!-- project image / video (optional) -->
                    <v-layout column wrap align-center>
                      <a class="cursor_pointer py-3" target="_blank" href="https://github.com/DavidDev21/Shuffle">
                      <v-flex my-3 xs12 shrink>
                        <v-img :src="require('@/assets/shuffleLogo.png')" max-width=200 max-height=100>
                        </v-img>
                      </v-flex>
                      </a>
                    </v-layout>
                    <!-- project description -->
                    <v-layout column wrap align-center>
                      <v-flex xs12 px-3 my-2>
                        <p>Shuffle is a job searching platform aimed at streamlining the job application for talented applicants.
                          It allows users to have more time looking at companies and less time filling out an application.
                          This project was part of a two semester long course (Software Engineering CS4513/4523) where students
                          went through the full software development life cycle and learnt about different project management tools and methods used
                          by technology companies.
                        </p>
                      </v-flex>
                    </v-layout>
                    <!-- project date -->
                    <v-layout column wrap align-center>
                      <v-flex xs12>
                        <p>Project Date: <strong>Sept 2018 - May 2019</strong>
                        </p>
                      </v-flex>
                    </v-layout>
                    <!-- project link -->
                  </v-container>
                </v-flex>
                <!-- Project #2 -->
                <v-flex xs12 sm4 md4 ma-5>
                    <v-container class="project_card text-black">
                    <!-- project title -->
                    <v-layout row wrap text-center justify-center>
                      <a class="cursor_pointer" target="_blank" href="https://github.com/DavidDev21/GPlatform">
                        <v-flex xs12>
                          <h2>GPlatform</h2>
                        </v-flex>
                      </a>
                    </v-layout>
                    <div class="horizontal_divider"></div>
                    <!-- project image / video (optional) -->
                    <v-layout column wrap align-center>
                      <v-flex my-3 xs12 shrink>
                          <video class="project_video" controls autoplay muted loop>
                            <source :src="require('@/assets/gplatform_video.mp4')" type="video/mp4">
                            Your browser doesn't support the Video Tag
                          </video>
                      </v-flex>
                    </v-layout>
                    <!-- project description -->
                    <v-layout column wrap align-center>
                      <v-flex xs12 px-3 my-2>
                        <p>
                          GPlatform is a 2D platformer game where the player tries to survive from falling spikes for as long as possible.
                          The game was made using the Unity Engine as part of a self-exploration and learning project for myself.
                          The project helped me learn about the interdisciplinary skills required to make a proper game, ranging from
                          music production, coding, and graphic design. Although the game itself is a simple concept, it taught me more about
                          process and the importance of staying organized throughout a project.
                        </p>
                      </v-flex>
                    </v-layout>
                    <!-- project link -->
                    <!-- project date -->
                    <v-layout column wrap align-center>
                      <v-flex xs12>
                        <p>Project Date: <strong>Dec 2017 - Jan 2018</strong>
                        </p>
                      </v-flex>
                    </v-layout>
                  </v-container>
                </v-flex>
              </v-layout>