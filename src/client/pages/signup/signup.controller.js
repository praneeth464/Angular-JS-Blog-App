class SignupController {
    constructor(User, $state, Token) {
        "ngInject";

        this.Token = Token;
        this.$state = $state;
        this.User = User;
        this.username = ""
        this.password = ""
        this.email = ""
    }

    signup() {
        this.User.signup(this.username, this.password, this.email)

        .then(response => {
            this.Token.set(response.data.token);
            this.$state.go('home');
        }, () => {
            //handle error
        });
    }
}

export default SignupController;
