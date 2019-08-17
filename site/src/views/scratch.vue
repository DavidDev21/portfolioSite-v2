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