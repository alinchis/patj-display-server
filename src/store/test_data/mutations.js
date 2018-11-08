
export default {

// commit the current county
MUT_SET_CURRENT_COUNTY: ( state, table_id) => {
  console.log('@store: MUT_CURRENT_COUNTY = ', table_id)
  state.current_selection.county_index = table_id
  state.current_selection.county_code_auto = state.counties[table_id].code_auto
  state.current_selection.county_name_ro = state.counties[table_id].name_ro
}

}
