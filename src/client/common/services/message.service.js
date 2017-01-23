class msgService {
    constructor($rootScope) {
        "ngInject";
        this.$rootScope = $rootScope;
    }

    emit(msg, data) {
        data = data || {};
        this.$rootScope.$emit(msg, data);
    }

    on(msg, func, scope) {
        let unbind = this.$rootScope.$on(msg, func);
        if (scope) {
            scope.$on('$destroy', unbind);
        }
        return unbind;
    }

}

let msgModule = angular.module('msg', [])

.service('Msg', msgService);

export default msgModule;
