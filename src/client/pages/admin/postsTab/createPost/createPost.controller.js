class CreatePostController {
    constructor(Msg, Post, User) {
        "ngInject";
        this.Msg = Msg;
        this.Post = Post;
        this.User = User;
    }

    close() {
        this.Msg.emit('displayPosts');
    }

    save() {
        let post = this.Post.get();
        if (this.Post.checkRequired()) {
            if (post._id === null) {
                this.Post.save(post).then(() => { this.Msg.emit('displayPosts'); });
            } else {
                this.Post.update(post).then(() => { this.Msg.emit('displayPosts'); });
            }
        }
    }
}

export default CreatePostController;
