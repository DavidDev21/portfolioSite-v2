<template>
  <div>
    <v-container class="container_style" fluid>
      <!-- Profile Card Section / Top Intro Section-->
      <v-layout row wrap>
        <v-parallax class="parallax_image elevation--0" :src="require('@/assets/NYC_background.jpg')">
          <v-layout align-center justify-center row>
            <v-flex>
              <v-card class="mx-auto profile_card" min-height="300px" max-width="725px">
                <v-layout row wrap align-center justify-center>
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
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus ultricies ante quis odio faucibus, ac convallis nunc tempor. Aenean vestibulum consequat magna, at ultrices quam sagittis a. Nam tempor varius ante ut hendrerit. Donec interdum blandit diam, sed vestibulum lorem facilisis eget. Donec porta diam dui, at lacinia magna tempus id. Suspendisse gravida porttitor elit, et tincidunt odio varius sed. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nunc ut nisi a velit tempus iaculis. Mauris laoreet dapibus pellentesque. In auctor
                    </p>
                  </v-flex>
                </v-layout>
              </v-card>
            </v-flex>
          </v-layout>
        </v-parallax>
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

.divider_line
{
  border-left: 1.5px solid gray;
  opacity: .5;
  height: 250px;
}

.profile_img
{
  border-radius: 10%;
}

.profile_content
{
  opacity: 1;
}
.profile_card
{
  border-radius: 5%;
  opacity: .85;
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
