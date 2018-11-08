<template>
  <v-item-group>
    <v-container grid-list-md>
      <v-layout align-center justify-center row>
        <v-flex
          v-for="(item, index) in this.currentProjects"
          :key="item.id"
          xs12
          md4
        >
          <v-hover>
            <v-card
              slot-scope="{ hover }"
              :class="`elevation-${hover ? 12 : 2}`"
              class="mx-auto"
              ripple
              @click.native="selectCard(item.code_auto, index)"
            >
              <v-img :src="getImage(index)"></v-img>
              <v-card-title primary-title>
                <div>
                  <div class="headline">{{item.name_ro}}</div>
                </div>
              </v-card-title>

            </v-card>
          </v-hover>
        </v-flex>
      </v-layout>
    </v-container>
  </v-item-group>
</template>

<script>
  export default {
    components: {
    },
    computed: {
      currentProjects () {
        return this.$store.state.counties
      }
    },
    methods: {
      selectCard (value, index) {
        console.log(`@home: SELECT County card: ${value}, ${index}`)
        this.$store.dispatch('ACT_SET_CURRENT_COUNTY', index)
        this.$router.push({ name: 'project', params: { id: value }})
      },
      getImage (index) {
        console.log(`@home: GET stema index: ${index}`)
        return this.$store.state.counties[index].logo
      }
    }
  }
</script>

<style>

</style>
