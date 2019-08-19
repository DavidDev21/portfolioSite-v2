<template>
    <!-- Project Card used to display a project -->
    <v-container class="project_card text-black">
        <!-- project title -->
        <v-layout row wrap text-center justify-center>
            <a class="cursor_pointer" target="_blank" :href="this.projectLink">
            <v-flex xs12>
                <h2>{{this.projectTitle}}</h2>
            </v-flex>
            </a>
        </v-layout>
        <div class="horizontal_divider"></div>
        <!-- project image / video (optional) -->
        <v-layout v-if="this.imgPath !== undefined" column wrap align-center>
            <a class="cursor_pointer py-3" target="_blank" :href="this.projectLink">
            <v-flex my-3 xs12 shrink>
            <v-img :src="require('@/assets/' + this.imgPath)" max-width=200 max-height=100>
            </v-img>
            </v-flex>
            </a>
        </v-layout>
        <!-- videoPath must be an path within the asset folder -->
        <v-layout v-if="this.videoPath !== undefined" column wrap align-center>
            <v-flex my-3 xs12 shrink>
                <video class="project_video" controls autoplay muted loop>
                <source :src="require('@/assets/' + this.videoPath)" :type="this.videoType">
                Your browser doesn't support the Video Tag
                </video>
            </v-flex>
        </v-layout>
        <!-- project description -->
        <v-layout column wrap align-center>
            <v-flex xs12 px-3 my-2>
            <p>
                {{this.projectDescription}}
            </p>
            </v-flex>
        </v-layout>
        <!-- project date -->
        <v-layout column wrap align-center>
            <v-flex xs12>
            <p>Project Date: <strong>{{this.projectDate}}</strong>
            </p>
            </v-flex>
        </v-layout>
    </v-container>
</template>

<style scoped>
.horizontal_divider
{
  border-bottom: 1px solid black;
  width: 75%;
  margin: 0 auto;
}
.cursor_pointer
{
  cursor: pointer;
}

a:link 
{
  text-decoration: none;
}

a:Hover
{
  text-decoration: underline;
}

.text-black
{
  color:black;
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
</style>

<script>
export default {
  methods: {
  },
  props: {
    projectTitle: String,
    projectDescription: String,
    projectLink: {type: String, default: "https://github.com/DavidDev21"},
    projectDate: String,
    imgPath: String,
    videoPath: String,
    videoType: String
    },
  data: () => ({
  }),
};
</script>