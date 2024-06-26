import {ConfigFile} from '../../generator/types';
export const config: ConfigFile = {
  rootOptions: {
    pools: ['AaveV2Ethereum', 'AaveV2Avalanche'],
    title: 'Reserve Factor Upgrades',
    shortName: 'ReserveFactorUpgrades',
    date: '20240524',
    author: 'karpatkey_TokenLogic',
    discussion: 'https://governance.aave.com/t/arfc-ethereum-v2-reserve-factor-adjustment/16764/10',
    snapshot:
      'https://snapshot.org/#/aave.eth/proposal/0x26a03c08359c340f63b78b0c3e96d37aa0adeda65814643b0886d4719048ea7e',
    votingNetwork: 'POLYGON',
  },
  poolOptions: {
    AaveV2Ethereum: {configs: {OTHERS: {}}, cache: {blockNumber: 19937538}},
    AaveV2Avalanche: {configs: {OTHERS: {}}, cache: {blockNumber: 45827928}},
  },
};
