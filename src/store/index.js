import { createStore } from "vuex";

export default createStore({
  state: {
    mostPopular: [
      {
        title: "Laskar Pelangi",
        file: "laskar-pelangi.jpeg",
      },
      {
        title: "Pulang",
        file: "pulang.jpg",
      },
      {
        title: "Pulang",
        file: "pulang.jpg",
      },
    ],
    dummyCategories: [
      {
        name: "Karya Sastra",
      },
      {
        name: "Jurnal",
      },
      {
        name: "Novel",
      },
      {
        name: "Biografi",
      },
    ],
    dummyBooks: [
      {
        title: "Laskar Pelangi",
        file: "laskar-pelangi.jpeg",
      },
    ],
    teamProfile: [
      {
        name: "Wahyu Cahyanto Bayu Agung",
        image: "wahyu.jpg",
        role: "Team Lead & Programmer",
      },
      {
        name: "Safiendra Hastungkoro",
        image: "hendra.jpeg",
        role: "UI/UX Designer",
      },
      {
        name: "Windy Wulandari",
        image: "windy.jpeg",
        role: "Document Manager",
      },
    ],
  },
  getters: {
    getBookFiles(state) {
      return state.mostPopular.filter((book) => book.file);
    },
    getCategoriesName(state) {
      return state.dummyCategories.filter((categories) => categories.name);
    },
    getDummyBooks(state) {
      return state.dummyBooks.filter((book) => book.file);
    },
    getTeamProfile(state) {
      return state.teamProfile;
    },
  },
  mutations: {},
  actions: {},
  modules: {},
});
