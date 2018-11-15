<template>
  <v-app id="inspire" dark>
    <!-- side drawer -->
    <v-navigation-drawer
      v-model="drawer"
      fixed
      clipped
      permanent
      stateless
      app
    >
      <!-- Search field -->
      <v-card-text>
        <v-autocomplete
          v-model="search_model"
          :items="searchUATlist"
          :label="`Căutare`"
          persistent-hint
          :search-input.sync="testSearch"
        >
        </v-autocomplete>
      </v-card-text>

      <!-- UAT list -->
      <v-data-table
        v-model="table_model"
        :headers="headers"
        item-key="code_siruta"
        :items="currentUATlist"
        :selected="clearSearch"
        hide-actions
        class="elevation-1"
        align-left
      >
        <template slot="items" slot-scope="props">
          <tr :active="props.selected"
            @click="itemSelect(props.index); props.selected = {}; props.selected = !props.selected"
          >
            <td class="text-xs-left">{{ props.item.code_siruta }}</td>
            <td class="text-xs-left">{{ props.item.name_ro }}</td>
          </tr>
        </template>
      </v-data-table>

    </v-navigation-drawer>

    <!-- top toolbar -->
    <v-toolbar fixed app clipped-left>
      <v-icon @click="gotoHome">home</v-icon>
      <v-toolbar-title>PATJ Manager</v-toolbar-title>
      <v-spacer></v-spacer>
    </v-toolbar>

    <!-- main content -->
    <v-content>
      <v-container id="pdf_container" fluid>
        <object id="pdf_object" data="http://www.inkwelleditorial.com/pdfSample.pdf#zoom=100" type="application/pdf">
          alt : <a href="">test.pdf</a>
        </object>
      </v-container>
    </v-content>

    <!-- footer -->
    <v-footer app>
      <span class="gray--text">&copy; 2018</span>
      <v-spacer></v-spacer>
      <v-breadcrumbs :items="breadcrumbsList" divider=">"></v-breadcrumbs>
    <v-spacer></v-spacer>
    </v-footer>

  </v-app>
</template>

<script>
export default {
  data: () => ({
    drawer: true,
    search_model: null,
    table_model: [],
    headers: [
      { text: 'SIRUTA', value: 'siruta', align: 'left', sortable: false },
      { text: 'UAT', value: 'name', align: 'left', sortable: false }
    ]
  }),

  props: {
    source: String
  },

  computed: {
    breadcrumbsList () {
      return [
        {
          text: 'Home',
          disabled: false,
          href: '/'
        },
        {
          text: this.currentCountyName,
          disabled: true,
          href: ''
        }
      ]
    },
    currentSelection () {
      return this.$store.state.current_selection
    },
    currentCountyName () {
      return this.currentSelection.county_name_ro
    },
    currentUATlist () {
      return this.$store.state.counties[this.currentSelection.county_index].uat
    },
    searchUATlist () {
      let list = this.$store.state.counties[this.currentSelection.county_index].uat
      return list.map((x) => { return x.name_ro })
    }
  },

  methods: {
    testSearch (index) {
      console.log('@search: Searched item: ')
    },
    itemSelect (index) {
      console.log('@search: selected item at index: ', index)
      // notify selected item to the store
      this.$store.dispatch('ACT_SET_CURRENT_UAT', index)
      // reset Search selection
      this.model = null
    },
    clearSearch () {
      console.log('@uat_list: clear search')
      this.model = null
    },
    gotoHome () {
      this.$router.push({ name: 'home'})
    }
  },

  mounted() {
    // hide space before search field
  }
}

</script>

<style scoped>

div#pdf_container {
  height: 100%;
  margin: 0;
  padding: 0;
}

object#pdf_object {
  height: 100%;
  width: 100%;
  margin: 0;
}

</style>
