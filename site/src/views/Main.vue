<template>
  <div>
    <v-parallax class="parallax_image elevation--0" :src="require('@/assets/NYC_background.jpg')">
      <v-layout align-center justify-center row>
        <v-flex>
          <v-card class="mx-auto" min-height="300px" max-width="900px">
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
    <v-container class="container_style">
      <!-- Profile Card Section / Top Intro Section-->
      <v-layout row wrap>
          <v-flex>
              <h4 class="test">WHAT HAPPENS TO THE CONTAINER</h4>
          </v-flex>
      <!-- Then follows Education-->

      <!-- Experience -->

      <!-- Projects -->
      </v-layout>
    </v-container>
  </div>
</template>

<style scoped>
.test
{
  background: red;
}
.parallax_image
{
  width: 100%;
  height: 100%;
  opacity: .85;
}

.container_style
{
}
</style>
<script>
export default {
  data: () => ({
  }),
};
</script>
