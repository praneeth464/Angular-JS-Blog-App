class PostDescriptionController {
    constructor(Post, Msg) {
        "ngInject";
        this.Post = Post.get();
        this.post = Post;
        this.class = "panel-default";

        this.Post._id !== null ? this.description = this.Post.description : null;

        Msg.on('descriptionErr', () => {
            this.class = "panel-danger";
        });

        Msg.on('cleardescriptionErr', () => {
            this.class = "panel-default";
        });

    }

    descriptionUpdate() {
        this.description === "" ? this.post.set("description", null) : this.post.set("description", this.description);
    }
}

export default PostDescriptionController;
