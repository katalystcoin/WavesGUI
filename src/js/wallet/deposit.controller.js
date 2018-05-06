(function () {
    'use strict';

    var DEFAULT_ERROR_MESSAGE = 'Connection is lost';

    function WavesWalletDepositController($scope, events, coinomatService, dialogService, notificationService,
                                          applicationContext, bitcoinUriService, utilsService, $element) {

        // var ctrl = this;
        // var currencyId = Currency[$element.data('currency')].id;
        //
        // ctrl.btc = {
        //     bitcoinAddress: '',
        //     bitcoinAmount: '',
        //     bitcoinUri: '',
        //     minimumAmount: 0.001
        // };
        //
        // ctrl.eth = {
        //     ethereumAddress: '',
        //     minimumAmount: 0.001
        // };
        //
        // ctrl.ltc = {
        //     litecoinAddress: '',
        //     minimumAmount: 0.001
        // };
        //
        // ctrl.zec = {
        //     zcashAddress: '',
        //     minimumAmount: 0.001
        // };
        //
        // ctrl.bch = {
        //     cashAddress: '',
        //     minimumAmount: 0.001
        // };
        //
        // ctrl.fiat = {
        //     verificationLink: 'https://go.idnow.de/coinomat/userdata/' + applicationContext.account.address,
        //     email: 'support@coinomat.com'
        // };
        //
        // ctrl.refreshBTCUri = function () {
        //     var params = null;
        //     if (ctrl.btc.bitcoinAmount >= ctrl.btc.minimumAmount) {
        //         params = {
        //             amount: ctrl.btc.bitcoinAmount
        //         };
        //     }
        //     ctrl.btc.bitcoinUri = bitcoinUriService.generate(ctrl.btc.bitcoinAddress, params);
        // };
        //
        // $scope.$on(events.WALLET_DEPOSIT + currencyId, function (event, eventData) {
        //     // Show deposit popups only on mainnet
        //     $scope.home.featureUnderDevelopment();
        // });
        //
        // function catchErrorMessage(e) {
        //     if (e && e.message) {
        //         notificationService.error(e.message);
        //     } else {
        //         notificationService.error(DEFAULT_ERROR_MESSAGE);
        //     }
        // }
    }

    WavesWalletDepositController.$inject = [
        '$scope', 'wallet.events', 'coinomatService', 'dialogService', 'notificationService',
        'applicationContext', 'bitcoinUriService', 'utilsService', '$element'
    ];

    angular
        .module('app.wallet')
        .controller('walletDepositController', WavesWalletDepositController);
})();
