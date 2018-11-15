<template>
<div class="container">
    <div class="row at-row flex-center">
      <div
        class=""
        v-for="(item, index) in this.currentProjects"
        :key="item.id"
      >

        <at-card
          class="at-card"
          style="width: 200px;"
          :body-style="{ padding: 0 }"
          @click.native="selectCard(item.code_auto, index)"
        >
          <div>
            <img style="width: 100%" :src="getImage(index)">
            <div style="padding: 14px;">
              <p>{{item.name_ro}}</p>
            </div>
          </div>
        </at-card>

      </div>
    </div>
</div>
</template>

<script>
export default {
  data() {
    return {
    }
  },
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


<style lang="scss" scoped>

.at-card {
  cursor: pointer;
}

#card_title {
  font-size: 20px;
}

.image {
  max-width: 100%;
  display: block;
}

</style>
