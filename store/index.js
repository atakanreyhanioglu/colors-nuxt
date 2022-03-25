export const state = () => ({
  data: {
    palette: [],
    dominant: []
  },
  message: ''
})

export const mutations = {
  palette(state, value) {
    state.data.palette = value.palette;
    state.data.dominant = value.dominant;
    state.message = value.message
  }
}
