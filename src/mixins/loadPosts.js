import axios from "axios";

export default {
    data() {
      return {
        items: [],
        errors: [],
        isPostsLoading: false,
        page: 1,
        page_size: 5,
      }
    },
    methods: {
        async loadPosts(url) {
            this.page += 1;
            try {
                const response = await axios.get(url, {
                  params: {
                    page: this.page,
                    page_size: this.page_size
                  }
                });
                this.items = [...this.items, ...response.data.results];
            }
            catch (e) {
              console.log(e);
            }
            finally {
              
            }
          }
    },
}