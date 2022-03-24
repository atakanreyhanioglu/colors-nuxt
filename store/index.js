export const state = () => ({
  data: {
    palette: [],
    dominant: []
  }
})

export const mutations = {
  palette(state, value) {
    state.data.palette = value.palette;
    state.data.dominant = value.dominant;
  }
}
