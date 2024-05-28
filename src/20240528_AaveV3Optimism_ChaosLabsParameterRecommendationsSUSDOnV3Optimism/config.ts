import {ConfigFile} from '../../generator/types';
export const config: ConfigFile = {
  rootOptions: {
    pools: ['AaveV3Optimism'],
    title: 'Chaos Labs Parameter Recommendations sUSD on V3 Optimism',
    shortName: 'ChaosLabsParameterRecommendationsSUSDOnV3Optimism',
    date: '20240528',
    author: 'Chaos Labs',
    discussion:
      'https://governance.aave.com/t/arfc-chaos-labs-parameter-recommendations-susd-on-v3-optimism-05-232024/17779',
    snapshot: '',
    votingNetwork: 'POLYGON',
  },
  poolOptions: {
    AaveV3Optimism: {
      configs: {
        CAPS_UPDATE: [{asset: 'sUSD', supplyCap: '7000000', borrowCap: '5600000'}],
        COLLATERALS_UPDATE: [
          {
            asset: 'sUSD',
            ltv: '60',
            liqThreshold: '70',
            liqBonus: '',
            debtCeiling: '',
            liqProtocolFee: '',
          },
        ],
        EMODES_UPDATES: [
          {
            eModeCategory: 'AaveV3OptimismEModes.STABLECOINS',
            ltv: '90',
            liqThreshold: '93',
            liqBonus: '',
            priceSource: '',
            label: '',
          },
        ],
      },
      cache: {blockNumber: 120646741},
    },
  },
};
