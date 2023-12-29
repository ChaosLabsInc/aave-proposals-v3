import {ConfigFile} from '../../generator/types';
export const config: ConfigFile = {
  rootOptions: {
    configFile: 'src/20231221_Multi_ChaosLabsRiskParameterUpdatesWBTCEOnV2AndV3Avalanche/config.ts',
    author: 'Chaos Labs - Eyal Ovadya',
    pools: ['AaveV2Avalanche', 'AaveV3Avalanche'],
    title: 'Chaos Labs Risk Parameter Updates - WBTC.e on V2 and V3 Avalanche',
    discussion:
      'https://governance.aave.com/t/arfc-chaos-labs-risk-parameter-updates-wbtc-e-on-v2-and-v3-avalanche/15824',
    snapshot:
      'https://governance.aave.com/t/arfc-chaos-labs-risk-parameter-updates-wbtc-e-on-v2-and-v3-avalanche/15824',
    shortName: 'ChaosLabsRiskParameterUpdatesWBTCEOnV2AndV3Avalanche',
    date: '20231221',
  },
  poolOptions: {
    AaveV2Avalanche: {configs: {OTHERS: {}}, cache: {blockNumber: 39322994}},
    AaveV3Avalanche: {
      configs: {
        COLLATERALS_UPDATE: [
          {
            asset: 'WBTCe',
            ltv: '0',
            liqThreshold: '70',
            liqBonus: '',
            debtCeiling: '',
            liqProtocolFee: '',
          },
        ],
        OTHERS: {},
      },
      cache: {blockNumber: 39323028},
    },
  },
};
