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
          isVideo: false,
        }
      },
    methods: {
        async singlePost(url) {
            this.isPostsLoading = true;
            try {
                const response = await axios.get(url);
                this.items = response.data;
                if (this.items.video === "False") {
                  this.isVideo = false;
                } else {
                  this.isVideo = true;
                }
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