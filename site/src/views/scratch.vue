 <!-- This is a proto experience_card must be placed inside a container-->
             <!-- Ladder Ropes -->
            <v-layout row wrap justify-center>
              <v-flex xs4 class="vertical_border">
              </v-flex>
            </v-layout>
 <!-- Experience #1 -->
            <v-layout row wrap justify-center>
              <v-flex>
                <!-- Experience Card -->
                <v-container class="experience_card_container px-4">
                  <v-layout row wrap px-3>
                    <!-- Company Logo -->
                    <v-flex xs3 align-self-center>
                      <v-img class="experience_logo" :src="require('@/assets/bnymellon_logo.png')">
                      </v-img>
                    </v-flex>
                    <!-- Experience Summary (right side of card) -->
                    <v-flex xs9>
                      <v-container>
                        <v-layout row wrap mb-3>
                          <v-flex>
                            <h3 class="experience_header"><a class="cursor_pointer" target="_blank" href="https://www.bnymellon.com/">BNY Mellon</a> | Summer Tech Analyst | Summer 2019</h3>
                          </v-flex>
                        </v-layout>
                        <!-- Experience Description (Paragraph Format) -->
                        <v-layout row wrap>
                          <v-flex>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse commodo, ligula in hendrerit tincidunt, urna felis fringilla est, pharetra porta lacus augue et nunc. Nulla placerat iaculis nisi, at commodo nunc aliquam efficitur. Praesent id lobortis sapien, vel cursus justo. Nam a felis ipsum. Fusce lobortis auctor posuere. Sed eget nibh neque. Pellentesque non lorem varius, rutrum quam non, faucibus lorem. Proin semper justo ipsum, a elementum est ultricies id. Sed sed sodales quam. Etiam sapien nunc, lobortis nec bibendum vitae, commodo nec nisi. Phasellus tempus elit vitae ante pretium aliquet. Sed auctor sit amet metus vel auctor. Mauris ligula nulla, lacinia eu fermentum non, gravida vitae felis. Curabitur condimentum sapien in augue dignissim, nec vehicula mi tincidunt. Suspendisse sit amet porta leo.</p>
                          </v-flex>
                        </v-layout>
                        <!-- Experience Description (List Format / optional if have bullet points) -->
                        <v-layout row wrap>
                          <v-flex>
                            <ul>
                              <li></li>
                            </ul>
                          </v-flex>
                        </v-layout>
                      </v-container>
                    </v-flex>
                  </v-layout>
                </v-container>
              </v-flex>
            </v-layout>



<!-- Profile Card -->
          <v-container>
          <v-layout align-center justify-center row>
            <v-flex>
              <!-- Profile Card -->
              <v-container class="profile_card">
                <v-layout class="text-black profile_content" pa-4 row wrap justify-center align-center>
                  <v-flex xs12 sm3 align-self-center pr-3>
                    <v-img
                      class="profile_img"
                      :src="require('@/assets/profile_picture.jpg')"
                      max-height="210px"
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