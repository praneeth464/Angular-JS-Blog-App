class LoginModalController {

    constructor(User, $state, $uibModalInstance) {
        "ngInject";
        this.User = User;
        this.$state = $state;
        this.$uibModalInstance = $uibModalInstance;
    }

    submit(username, password) {
        this.User.login(username, password)
            .then((response) => {
                this.$uibModalInstance.close(response.data.token);

            }, (response) => {
                //handle error
            })
    }

    close() {
        this.$uibModalInstance.dismiss();
    }

}

export default LoginModalController;
