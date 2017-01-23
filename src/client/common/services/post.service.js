class PostService {
    constructor($http, $q, Msg) {
        "ngInject";
        this.$http = $http;
        this.Msg = Msg;
        this.$q = $q;

        this._post = {};
        this._post._id = null;
        this._post.owner = null;
        this._post.title = null;
        this._post.published = false;
        this._post.description = null;

        this._postList = [];

        Msg.on('displayPosts', () => {
            this.clear();
        });
    }

    checkRequired() {
        let required = false;

        if (this._post.title === null) {
            this.Msg.emit('titleErr')
            required = true;
        } else {
            this.Msg.emit('cleartitleErr')
            required = false;
        }

        if (this._post.description === null) {
            this.Msg.emit('descriptionErr')
            required = true;
        } else {
            this.Msg.emit('cleardescriptionErr')
            required = false;
        }
        return (required) ? false : true;
    }

    get() {
        return this._post;
    }

    set(property, value) {
        this._post[property] = value;
    }

    setCurrent(obj) {
        this._post = angular.copy(obj);
    }

    clear() {
        this._post._id = null;
        this._post.owner = null;
        this._post.title = null;
        this._post.published = false;
        this._post.description = null;
    }

    getPostData(year, month, day, slug) {
        return this.$http.get('/api/post/' + year + "/" + month + "/" + day + "/" + slug);
    }

    getAllpublished() {
        return this.$http.get('/api/post/getall');
    }

    getAll() {
        if (this._postList.length !== 0) {
            return this.$q.resolve(this._postList);
        } else {
            return this.$http.post('/api/user/getallposts')
                .then((response) => {
                    this._postList = response.data
                    return response.data;
                })
        }

    }

    getOne(id) {
        for (var i = 0; i < this._postList.length; i++) {
            if (this._postList[i]._id === id) {
                this._post = this._postList[i];
                return this._postList[i]
            }
        }
    }

    save(post) {
        return this.$http.post('/api/post/create', post)
            .then((response) => {
                this._postList.push(response.data);
                this.clear();
            })
    }

    update(post) {
        return this.$http.put('/api/post/update', post)
            .then((response) => {
                for (var i = 0; i < this._postList.length; i++) {
                    if (this._postList[i]._id === response.data._id) {
                        let index = this._postList.indexOf(this._postList[i]);
                        this._postList[index] = response.data;
                    }
                }
                this.clear();
            })
    }

    delete(id) {
        return this.$http.delete('/api/post/delete' + id)
            .then((response) => {
                for (var i = 0; i < this._postList.length; i++) {
                    if (this._postList[i]._id === id) {
                        let index = this._postList.indexOf(this._postList[i]);
                        if (index > -1) {
                            this._postList.splice(index, 1);
                        }
                    }
                }
                this.clear();
            })
    }

}

let postModule = angular.module('posts', [])

.service('Post', PostService);

export default postModule;
