export const state = () => ({
  palette: [],
  dominant: []
})

export const mutations = {
  palette(state, value) {
    state.palette = value;
  },
  dominant(state, value) {
    state.dominant = value
  }
}
