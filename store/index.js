export const state = () => ({
  blogPosts: [],
  homeContent: [],
  aboutContent: []
});

export const mutations = {
  setBlogPosts(state, list) {
    state.blogPosts = list;
  },
  setHomePage(state, list) {
    state.homeContent = list;
  },
  setAboutPage(state, list) {
    state.aboutContent = list;
  }
};

export const actions = {
  async nuxtServerInit({ commit }) {
    // -- Files --
    let blogFiles = await require.context(
      "~/assets/content/blog/",
      false,
      /\.json$/
    );
    let homeFiles = await require.context(
      "~/assets/content/home/",
      false,
      /\.json$/
    );
    let aboutFiles = await require.context(
      "~/assets/content/about/",
      false,
      /\.json$/
    );
    // -- looping files--
    let blogPosts = blogFiles.keys().map(key => {
      let res = blogFiles(key);
      res.slug = key.slice(2, -5);
      return res;
    });
    let homeContent = homeFiles.keys().map(key => {
      let res = homeFiles(key);
      res.slug = key.slice(2, -5);
      return res;
    });
    let aboutContent = aboutFiles.keys().map(key => {
      let res = aboutFiles(key);
      res.slug = key.slice(2, -5);
      return res;
    });

    // -- commiting files ---
    await commit("setBlogPosts", blogPosts);
    await commit("setHomePage", homeContent);
    await commit("setAboutPage", aboutContent);
  }
};
