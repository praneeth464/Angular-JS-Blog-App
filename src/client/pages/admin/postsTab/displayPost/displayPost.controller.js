class DisplayPostController {
    constructor(Msg, User, Post, $state) {
        "ngInject";
        this.Post = Post;
        this.Msg = Msg;
        this.User = User;
        this.getPosts()
        this.filteredItems = [];
        this.itemsPerPage = 5;
        this.currentPage = 1;
        this.maxSize = 3;
    }

    updatePost(id) {

        let post = this.Post.getOne(id);
        (post.published) ? this.Post.set("published", false): this.Post.set("published", true)
        this.Post.update(post).then(() => { this.getPosts() });
    }

    getPosts() {
        this.Post.getAll()
            .then((response) => {
                this.items = response;
                this.figureOutItemsToDisplay();
            })
    }

    addPost() {
        this.Msg.emit('addPost');
    }

    editPost(id) {
        this.Msg.emit('editPost', id);
    }

    deletePost(id) {
        this.Post.delete(id)
            .then((response) => {
                this.getPosts()
            })
    }

    pageChanged() {
        this.figureOutItemsToDisplay();
    }

    figureOutItemsToDisplay() {
        var begin = ((this.currentPage - 1) * this.itemsPerPage);
        var end = begin + this.itemsPerPage;
        this.filteredItems = this.items.slice(begin, end);

    };

}

export default DisplayPostController;
