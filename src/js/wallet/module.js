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
            id: 'DSakmDaduNHXgAXKP4LM7358yZYduWg9VGALA9auDck8',
            displayName: 'Katalyst',
            shortName: 'KAT',
            precision: 8,
            verified: false
        }));
})();
