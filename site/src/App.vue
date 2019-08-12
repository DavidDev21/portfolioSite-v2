<template>
  <v-app>
    <!-- Not sure why it doesn't collapse properly at smaller screens
    <v-app-bar app>
      <v-toolbar-title class="headline text-uppercase nav_logo_btn" @click="scrollToSection('profile')">
        <span>David Zheng</span>
        <span class="font-weight-light"></span>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn
        text
        @click="scrollToSection('education')"
      >
        <span class="mr-2">Education</span>
      </v-btn>
      <v-btn
        text
        @click="scrollToSection('experience')"
      >
        <span class="mr-2">Experience</span>
      </v-btn>
      <v-btn
        text
        @click="scrollToSection('projects')"
      >
        <span class="mr-2">Projects</span>
      </v-btn>
      <v-btn
        text
        @click="scrollToSection('contact')"
      >
        <span class="mr-2">Contact</span>
      </v-btn>
    </v-app-bar>
    -->
    <v-content>
      <!-- Top most parallax -->
      <!-- Not sure why my container doesn't grow once pass 1680px width-->
      <!--
      <v-parallax class="parallax_image elevation--0" :src="require('@/assets/NYC_background.jpg')">
        <v-layout align-center justify-center row>
          <v-flex>
            <v-card class="mx-auto" min-height="300px" max-width="500px">
              <v-layout>
                <v-flex shrink>
                  <v-img
                    :src="require('@/assets/profile_picture.jpg')"
                    height="200"
                    width="200"
                  >
                  </v-img>
                </v-flex>
              </v-layout>
            </v-card>
          </v-flex>
        </v-layout>
      </v-parallax>
      -->
      <Main/>
    </v-content>
  </v-app>
</template>

<style scoped>
.nav_logo_btn:Hover
{
  cursor: pointer;
}
</style>
<script>
import Main from './views/Main';

export default {
  name: 'App',
  components: {
    Main,
  },
  methods: {
    scrollToSection: function(sectionID){
      let section = document.getElementById(sectionID);
      section.scrollIntoView({block: "start", behavior: "smooth"});
    }
  },
  data: () => ({
    //
  }),
};
</script>
