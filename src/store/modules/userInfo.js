export default {
  namespaced: true,
  state: {
    toKen:
      'dkl;jmasjkdfkl;ajsjflaksjfklasfjaklsjfkasjgklasjgkaghsnjkasgnaskgnlaskgklasgjklsalkj',
    userName: 'Tom',
  },
  mutations: {
    setUserInfoState(context, { key, value }) {
      context[key] = value
      // context[key] = value
    },
  },
  actions: {},
  getters: {},
}
