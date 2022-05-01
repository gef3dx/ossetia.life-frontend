import axios from "axios";

export default {
    data() {
        return {
          items: [],
          errors: [],
          isPostsLoading: false,
          isMoreLoading: true,
          page: 1,
          page_size: 5,
        }
      },
    methods: {
        async fetchPost(url) {
            this.isPostsLoading = true;
            try {
                const response = await axios.get(url);
                this.items = response.data.results;
            }
            catch (e) {
              console.log(e);
            }
            finally {
              this.isPostsLoading = false;
            }
          }
    }
}