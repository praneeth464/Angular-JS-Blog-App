class PostController {
    constructor(Post, $stateParams) {
        "ngInject";
        Post.getPostData($stateParams.year, $stateParams.month, $stateParams.day, $stateParams.slug)
            .then((response) => {
                this.post = response.data[0];
            })
    }
}

export default PostController;
