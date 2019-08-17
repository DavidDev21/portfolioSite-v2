<template>
    <!-- Must be part of a container -->
    <!-- logo image must be in assets folder -->
    <v-layout row wrap justify-center>
        <v-flex>
            <!-- Experience Card -->
            <v-container class="experience_card_container px-4">
                <v-layout row wrap px-3>
                <!-- Company Logo -->
                <v-flex xs12 sm3 align-self-center pr-3>
                    <v-container>
                    <v-layout column align-center justify-center>
                    <v-img width="225px" height="225px" contain :src="require('@/assets/' + this.companyLogo)">
                    </v-img>
                    </v-layout>
                    </v-container>
                </v-flex>
                <!-- Experience Summary (right side of card) -->
                <v-flex xs12 sm9>
                    <v-container>
                    <v-layout row wrap mb-3>
                        <v-flex>
                        <h3 class="experience_header"><a class="cursor_pointer" target="_blank" :href="this.companyLink">{{this.companyName}}</a> {{this.header}}</h3>
                        </v-flex>
                    </v-layout>
                    <!-- Experience Description (Paragraph Format) -->
                    <v-layout row wrap>
                        <v-flex>
                            <p>{{this.description}}</p>
                        </v-flex>
                    </v-layout>
                    <!-- Experience Description (List Format / optional if have bullet points) -->
                    <v-layout row wrap v-if="listDescription !== undefined && listDescription.length > 0">
                        <v-flex>
                        <ul>
                            <li v-for="(item,index) in listDescription" :key="index">{{item}}</li>
                        </ul>
                        </v-flex>
                    </v-layout>
                    </v-container>
                </v-flex>
                </v-layout>
            </v-container>
        </v-flex>
    </v-layout>
</template>

<style scoped>
.cursor_pointer
{
  cursor: pointer;
}
a:link 
{
  text-decoration: none;
}
/* Experience section */
.experience_card_container
{
  background-color: white;
  border-radius: 2%;
}

.experience_header
{
  color: gray;
}

.experience_logo
{
    border-radius: 10%;
}
</style>

<script>
export default {
  methods: {
  },
  props: {
    companyName: String,
    companyLink: String,
    companyLogo: String,
    header: String,
    description: String,
    listDescription: Array,
    },
  data: () => ({
  }),
};
</script>