class PostTitleController {
    constructor(Post, Msg) {
        "ngInject";
        this.Post = Post.get();
        this.post = Post;
        this.class = "panel-default";

        this.Post._id !== null ? this.title = this.Post.title : null;

        Msg.on('titleErr', () => {
            this.class = "panel-danger";
        });

        Msg.on('cleartitleErr', () => {
            this.class = "panel-default";
        });

    }

    titleUpdate() {
        this.title === "" ? this.post.set("title", null) : this.post.set("title", this.title);

    }

}

export default PostTitleController;
