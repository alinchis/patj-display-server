import state from './state'

export default {

// get an array with
get_auto_codes: function ( state , getters) {
  console.log('@store: get_auto_codes')
  return state.counties.map(a => a.code_auto)
}

}
