class AccountTabController {
    constructor(Msg, User) {
        "ngInject";
        this.Msg = Msg;
        this.User = User;

        this.User.getAccount()
            .then((response) => {
                this.name = response.name;
                this.email = response.email;
            })

    }

    save() {
        this.User.saveAccount()
            .then((response) => {
                this.close();
            }, () => {

            })
    }

    close() {
        this.Msg.emit('displayPosts');
    }

    nameChange() {
        this.User.set('name', this.name)

    }

    emailChange(elem) {

        this.User.isEmailUnique(this.email)
            .then((data) => {
                this.User.set('email', this.email)
                elem.form.$setValidity('unique', false);
            })
            .catch(() => {

                elem.form.$setValidity('unique', true);
            });

    }

    passwordChange() {
        this.User.set('password', this.password)

    }
}

export default AccountTabController;
