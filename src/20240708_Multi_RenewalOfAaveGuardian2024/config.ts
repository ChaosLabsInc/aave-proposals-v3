import {ConfigFile} from '../../generator/types';
export const config: ConfigFile = {
  rootOptions: {
    author: 'BGD Labs @bgdlabs',
    pools: [
      'AaveV2Ethereum',
      'AaveV2EthereumAMM',
      'AaveV2Polygon',
      'AaveV2Avalanche',
      'AaveV3Ethereum',
      'AaveV3Polygon',
      'AaveV3Avalanche',
      'AaveV3Optimism',
      'AaveV3Arbitrum',
      'AaveV3Metis',
      'AaveV3Base',
      'AaveV3Gnosis',
      'AaveV3Scroll',
      'AaveV3BNB',
    ],
    title: 'Renewal of Aave Guardian 2024',
    shortName: 'RenewalOfAaveGuardian2024',
    date: '20240708',
    discussion: 'https://governance.aave.com/t/arfc-renewal-of-aave-guardian-2024/17523',
    snapshot:
      'https://snapshot.org/#/aave.eth/proposal/0x003ce30676805f71e5b356745fb3f01e5f82b8d1655750aaef46c7ed4a0a3578',
    votingNetwork: 'POLYGON',
  },
  poolOptions: {
    AaveV2Ethereum: {configs: {OTHERS: {}}, cache: {blockNumber: 20263579}},
    AaveV2EthereumAMM: {configs: {OTHERS: {}}, cache: {blockNumber: 20263579}},
    AaveV2Polygon: {configs: {OTHERS: {}}, cache: {blockNumber: 59118568}},
    AaveV2Avalanche: {configs: {OTHERS: {}}, cache: {blockNumber: 47718398}},
    AaveV3Ethereum: {configs: {OTHERS: {}}, cache: {blockNumber: 20263580}},
    AaveV3Polygon: {configs: {OTHERS: {}}, cache: {blockNumber: 59118571}},
    AaveV3Avalanche: {configs: {OTHERS: {}}, cache: {blockNumber: 47718399}},
    AaveV3Optimism: {configs: {OTHERS: {}}, cache: {blockNumber: 122432287}},
    AaveV3Arbitrum: {configs: {OTHERS: {}}, cache: {blockNumber: 230134750}},
    AaveV3Metis: {configs: {OTHERS: {}}, cache: {blockNumber: 17597358}},
    AaveV3Base: {configs: {OTHERS: {}}, cache: {blockNumber: 16837004}},
    AaveV3Gnosis: {configs: {OTHERS: {}}, cache: {blockNumber: 34865326}},
    AaveV3Scroll: {configs: {OTHERS: {}}, cache: {blockNumber: 7253105}},
    AaveV3BNB: {configs: {OTHERS: {}}, cache: {blockNumber: 40300607}},
  },
};
