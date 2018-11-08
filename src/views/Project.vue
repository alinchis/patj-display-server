<template>
  <v-container id="inspire">
    <!-- side drawer -->
    <v-navigation-drawer
      v-model="drawer"
      fixed
      left
      app
      mini-variant
    >
      <v-list dense>
        <v-list-tile @click="" ripple>
          <v-list-tile-action>
            <v-icon>home</v-icon>
          </v-list-tile-action>
        </v-list-tile>
        <v-list-tile @click="" ripple>
          <v-list-tile-action>
            <v-icon>get_app</v-icon>
          </v-list-tile-action>
        </v-list-tile>
        <v-list-tile @click="" ripple>
          <v-list-tile-action>
            <v-icon>assessment</v-icon>
          </v-list-tile-action>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>

    <!-- top toolbar -->
    <v-toolbar color="cyan" dark fixed absolute app>
      <v-toolbar-side-icon @click.stop="drawer = !drawer"></v-toolbar-side-icon>
      <v-toolbar-title>PATJ Manager</v-toolbar-title>
      <v-spacer></v-spacer>
    </v-toolbar>

    <!-- main content -->
    <v-content>
      <v-container fluid fill-height>
        <v-layout justify-center align-center>
          <v-flex text-xs-center>

            <!-- UAT list -->
            <v-data-table
              :headers="headers"
              :items="currentUATlist"
              hide-actions
              class="elevation-1"
            >
              <template slot="items" slot-scope="props">
                <td class="text-xs-left">{{ props.item.siruta }}</td>
                <td class="text-xs-left">{{ props.item.name }}</td>
              </template>
            </v-data-table>

          </v-flex>
        </v-layout>
      </v-container>
    </v-content>

    <!-- footer -->
    <v-footer color="cyan" app>
      <span class="white--text">&copy; 2018</span>
      <v-spacer></v-spacer>
      <v-breadcrumbs :items="breadcrumbsList" divider=">"></v-breadcrumbs>
    <v-spacer></v-spacer>
    </v-footer>

  </v-container>
</template>

<script>
  export default {
    data: () => ({
      drawer: null,
      headers: [
        { text: 'SIRUTA', value: 'siruta', align: 'left' },
        { text: 'UAT', value: 'name', align: 'left' }
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
      }
    }
  }
</script>

<style scoped>
div.container {
  max-width: 400px;
}
</style>
