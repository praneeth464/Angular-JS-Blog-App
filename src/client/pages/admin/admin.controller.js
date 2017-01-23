class AdminController {
    constructor(Msg, User, Post) {
        "ngInject";

        this.Msg = Msg;
        this.postOption = "display";

        this.activeTabs = [true, false];

        this.Msg.on('addPost', () => {
            this.postOption = "create";
        });

        this.Msg.on('editPost', (event, id) => {

            Post.setCurrent(Post.getOne(id))
            this.postOption = "create";
        });

        this.Msg.on('displayPosts', () => {
            this.postOption = "display";
            this.activeTabs = [true, false];
        });
    }

}

export default AdminController;
