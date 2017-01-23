class NavbarController {
    constructor($state, LoginModal, Token, User) {
        "ngInject";
        this.LoginModal = LoginModal;
        this.$state = $state;
        this.Token = Token;

    }

    loggedIn() {
        return this.Token.check() ? true : false
    }

    name() {
        return this.user = this.Token.getName();
    }

    signin() {
        this.LoginModal()
            .then(() => {
                return;
            })
            .catch(() => {
                return this.$state.go('home');
            });
    }

    logout() {
        this.Token.clear();
        this.$state.go('home');
    }
}

export default NavbarController;
