import state from './state'

export default {

// set the current county
ACT_SET_CURRENT_COUNTY: function ({ commit, state }, table_id) {
  console.log('@store: SET_CURRENT_COUNTY = ', table_id)
  commit('MUT_SET_CURRENT_COUNTY', table_id)
}

}
