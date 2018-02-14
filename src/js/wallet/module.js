(function() {
    'use strict';

    angular.module('app.wallet', ['app.shared'])
        .constant('wallet.events', {
            WALLET_SEND: 'wallet-send',
            WALLET_WITHDRAW: 'wallet-withdraw',
            WALLET_DEPOSIT: 'wallet-deposit',
            WALLET_CARD_DEPOSIT: 'wallet-card-deposit'
        })
        .constant('currency.KAT', Currency.create({
            id: 'replace-with-katalyst-id',
            displayName: 'Katalyst',
            shortName: 'KAT',
            precision: 8,
            verified: false
        }));
})();
