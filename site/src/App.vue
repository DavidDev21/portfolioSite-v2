<template>
  <v-app>
    <v-app-bar app>
      <v-toolbar-title class="headline text-uppercase">
        <span>This is niceeeeee</span>
        <span class="font-weight-light">MATERIAL DESIGN</span>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn
        text
        href="https://github.com/vuetifyjs/vuetify/releases/latest"
        target="_blank"
      >
        <span class="mr-2">Latest Release</span>
      </v-btn>
    </v-app-bar>

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

<script>
import Main from './views/Main';

export default {
  name: 'App',
  components: {
    Main,
  },
  data: () => ({
    //
  }),
};
</script>
