class HomeController {
    constructor(Post) {
        "ngInject";
        this.Post = Post;
        Post.getAllpublished()
            .then((result) => {
                this.posts = result.data

            });

    }
}

export default HomeController;
