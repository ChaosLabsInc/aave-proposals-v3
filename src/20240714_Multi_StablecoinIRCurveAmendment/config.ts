import {ConfigFile} from '../../generator/types';
export const config: ConfigFile = {
  rootOptions: {
    author: 'Aave Chan Initiative',
    pools: [
      'AaveV2Ethereum',
      'AaveV3Ethereum',
      'AaveV3Polygon',
      'AaveV3Avalanche',
      'AaveV3Optimism',
      'AaveV3Arbitrum',
      'AaveV3Base',
      'AaveV3Gnosis',
      'AaveV3Scroll',
      'AaveV3BNB',
    ],
    title: 'Stablecoin IR Curve Amendment',
    shortName: 'StablecoinIRCurveAmendment',
    date: '20240714',
    discussion:
      'https://governance.aave.com/t/arfc-stablecoin-ir-curve-amendment-on-aave-v2-and-v3-07-14-24/18252',
    snapshot: 'Direct-to-AIP',
    votingNetwork: 'POLYGON',
  },
  poolOptions: {
    AaveV2Ethereum: {
      configs: {
        RATE_UPDATE_V2: [
          {
            asset: 'USDT',
            params: {
              optimalUtilizationRate: '',
              baseVariableBorrowRate: '',
              variableRateSlope1: '6.5',
              variableRateSlope2: '',
              stableRateSlope1: '',
              stableRateSlope2: '',
            },
          },
          {
            asset: 'DAI',
            params: {
              optimalUtilizationRate: '',
              baseVariableBorrowRate: '',
              variableRateSlope1: '6.5',
              variableRateSlope2: '',
              stableRateSlope1: '',
              stableRateSlope2: '',
            },
          },
          {
            asset: 'USDC',
            params: {
              optimalUtilizationRate: '',
              baseVariableBorrowRate: '',
              variableRateSlope1: '6.5',
              variableRateSlope2: '',
              stableRateSlope1: '',
              stableRateSlope2: '',
            },
          },
        ],
      },
      cache: {blockNumber: 20306796},
    },
    AaveV3Ethereum: {
      configs: {
        RATE_UPDATE_V3: [
          {
            asset: 'USDC',
            params: {
              optimalUtilizationRate: '',
              baseVariableBorrowRate: '',
              variableRateSlope1: '6.5',
              variableRateSlope2: '',
              stableRateSlope1: '',
              stableRateSlope2: '',
              baseStableRateOffset: '',
              stableRateExcessOffset: '',
              optimalStableToTotalDebtRatio: '',
            },
          },
          {
            asset: 'DAI',
            params: {
              optimalUtilizationRate: '',
              baseVariableBorrowRate: '',
              variableRateSlope1: '6.5',
              variableRateSlope2: '',
              stableRateSlope1: '',
              stableRateSlope2: '',
              baseStableRateOffset: '',
              stableRateExcessOffset: '',
              optimalStableToTotalDebtRatio: '',
            },
          },
          {
            asset: 'USDT',
            params: {
              optimalUtilizationRate: '',
              baseVariableBorrowRate: '',
              variableRateSlope1: '6.5',
              variableRateSlope2: '',
              stableRateSlope1: '',
              stableRateSlope2: '',
              baseStableRateOffset: '',
              stableRateExcessOffset: '',
              optimalStableToTotalDebtRatio: '',
            },
          },
          {
            asset: 'LUSD',
            params: {
              optimalUtilizationRate: '',
              baseVariableBorrowRate: '',
              variableRateSlope1: '6.5',
              variableRateSlope2: '',
              stableRateSlope1: '',
              stableRateSlope2: '',
              baseStableRateOffset: '',
              stableRateExcessOffset: '',
              optimalStableToTotalDebtRatio: '',
            },
          },
          {
            asset: 'FRAX',
            params: {
              optimalUtilizationRate: '',
              baseVariableBorrowRate: '',
              variableRateSlope1: '6.5',
              variableRateSlope2: '',
              stableRateSlope1: '',
              stableRateSlope2: '',
              baseStableRateOffset: '',
              stableRateExcessOffset: '',
              optimalStableToTotalDebtRatio: '',
            },
          },
          {
            asset: 'crvUSD',
            params: {
              optimalUtilizationRate: '',
              baseVariableBorrowRate: '',
              variableRateSlope1: '6.5',
              variableRateSlope2: '',
              stableRateSlope1: '',
              stableRateSlope2: '',
              baseStableRateOffset: '',
              stableRateExcessOffset: '',
              optimalStableToTotalDebtRatio: '',
            },
          },
          {
            asset: 'PYUSD',
            params: {
              optimalUtilizationRate: '',
              baseVariableBorrowRate: '',
              variableRateSlope1: '6.5',
              variableRateSlope2: '',
              stableRateSlope1: '',
              stableRateSlope2: '',
              baseStableRateOffset: '',
              stableRateExcessOffset: '',
              optimalStableToTotalDebtRatio: '',
            },
          },
        ],
      },
      cache: {blockNumber: 20306814},
    },
    AaveV3Polygon: {
      configs: {
        RATE_UPDATE_V3: [
          {
            asset: 'DAI',
            params: {
              optimalUtilizationRate: '',
              baseVariableBorrowRate: '',
              variableRateSlope1: '6.5',
              variableRateSlope2: '',
              stableRateSlope1: '',
              stableRateSlope2: '',
              baseStableRateOffset: '',
              stableRateExcessOffset: '',
              optimalStableToTotalDebtRatio: '',
            },
          },
          {
            asset: 'USDT',
            params: {
              optimalUtilizationRate: '',
              baseVariableBorrowRate: '',
              variableRateSlope1: '6.5',
              variableRateSlope2: '',
              stableRateSlope1: '',
              stableRateSlope2: '',
              baseStableRateOffset: '',
              stableRateExcessOffset: '',
              optimalStableToTotalDebtRatio: '',
            },
          },
          {
            asset: 'EURS',
            params: {
              optimalUtilizationRate: '',
              baseVariableBorrowRate: '',
              variableRateSlope1: '6.5',
              variableRateSlope2: '',
              stableRateSlope1: '',
              stableRateSlope2: '',
              baseStableRateOffset: '',
              stableRateExcessOffset: '',
              optimalStableToTotalDebtRatio: '',
            },
          },
          {
            asset: 'jEUR',
            params: {
              optimalUtilizationRate: '',
              baseVariableBorrowRate: '',
              variableRateSlope1: '6.5',
              variableRateSlope2: '',
              stableRateSlope1: '',
              stableRateSlope2: '',
              baseStableRateOffset: '',
              stableRateExcessOffset: '',
              optimalStableToTotalDebtRatio: '',
            },
          },
          {
            asset: 'EURA',
            params: {
              optimalUtilizationRate: '',
              baseVariableBorrowRate: '',
              variableRateSlope1: '6.5',
              variableRateSlope2: '',
              stableRateSlope1: '',
              stableRateSlope2: '',
              baseStableRateOffset: '',
              stableRateExcessOffset: '',
              optimalStableToTotalDebtRatio: '',
            },
          },
          {
            asset: 'USDCn',
            params: {
              optimalUtilizationRate: '',
              baseVariableBorrowRate: '',
              variableRateSlope1: '6.5',
              variableRateSlope2: '',
              stableRateSlope1: '',
              stableRateSlope2: '',
              baseStableRateOffset: '',
              stableRateExcessOffset: '',
              optimalStableToTotalDebtRatio: '',
            },
          },
        ],
      },
      cache: {blockNumber: 59361291},
    },
    AaveV3Avalanche: {
      configs: {
        RATE_UPDATE_V3: [
          {
            asset: 'DAIe',
            params: {
              optimalUtilizationRate: '',
              baseVariableBorrowRate: '',
              variableRateSlope1: '6.5',
              variableRateSlope2: '',
              stableRateSlope1: '',
              stableRateSlope2: '',
              baseStableRateOffset: '',
              stableRateExcessOffset: '',
              optimalStableToTotalDebtRatio: '',
            },
          },
          {
            asset: 'USDC',
            params: {
              optimalUtilizationRate: '',
              baseVariableBorrowRate: '',
              variableRateSlope1: '6.5',
              variableRateSlope2: '',
              stableRateSlope1: '',
              stableRateSlope2: '',
              baseStableRateOffset: '',
              stableRateExcessOffset: '',
              optimalStableToTotalDebtRatio: '',
            },
          },
          {
            asset: 'USDt',
            params: {
              optimalUtilizationRate: '',
              baseVariableBorrowRate: '',
              variableRateSlope1: '6.5',
              variableRateSlope2: '',
              stableRateSlope1: '',
              stableRateSlope2: '',
              baseStableRateOffset: '',
              stableRateExcessOffset: '',
              optimalStableToTotalDebtRatio: '',
            },
          },
          {
            asset: 'FRAX',
            params: {
              optimalUtilizationRate: '',
              baseVariableBorrowRate: '',
              variableRateSlope1: '6.5',
              variableRateSlope2: '',
              stableRateSlope1: '',
              stableRateSlope2: '',
              baseStableRateOffset: '',
              stableRateExcessOffset: '',
              optimalStableToTotalDebtRatio: '',
            },
          },
        ],
      },
      cache: {blockNumber: 47969289},
    },
    AaveV3Optimism: {
      configs: {
        RATE_UPDATE_V3: [
          {
            asset: 'DAI',
            params: {
              optimalUtilizationRate: '',
              baseVariableBorrowRate: '',
              variableRateSlope1: '6.5',
              variableRateSlope2: '',
              stableRateSlope1: '',
              stableRateSlope2: '',
              baseStableRateOffset: '',
              stableRateExcessOffset: '',
              optimalStableToTotalDebtRatio: '',
            },
          },
          {
            asset: 'USDC',
            params: {
              optimalUtilizationRate: '',
              baseVariableBorrowRate: '',
              variableRateSlope1: '6.5',
              variableRateSlope2: '',
              stableRateSlope1: '',
              stableRateSlope2: '',
              baseStableRateOffset: '',
              stableRateExcessOffset: '',
              optimalStableToTotalDebtRatio: '',
            },
          },
          {
            asset: 'USDT',
            params: {
              optimalUtilizationRate: '',
              baseVariableBorrowRate: '',
              variableRateSlope1: '6.5',
              variableRateSlope2: '',
              stableRateSlope1: '',
              stableRateSlope2: '',
              baseStableRateOffset: '',
              stableRateExcessOffset: '',
              optimalStableToTotalDebtRatio: '',
            },
          },
          {
            asset: 'sUSD',
            params: {
              optimalUtilizationRate: '',
              baseVariableBorrowRate: '',
              variableRateSlope1: '6.5',
              variableRateSlope2: '',
              stableRateSlope1: '',
              stableRateSlope2: '',
              baseStableRateOffset: '',
              stableRateExcessOffset: '',
              optimalStableToTotalDebtRatio: '',
            },
          },
          {
            asset: 'LUSD',
            params: {
              optimalUtilizationRate: '',
              baseVariableBorrowRate: '',
              variableRateSlope1: '6.5',
              variableRateSlope2: '',
              stableRateSlope1: '',
              stableRateSlope2: '',
              baseStableRateOffset: '',
              stableRateExcessOffset: '',
              optimalStableToTotalDebtRatio: '',
            },
          },
          {
            asset: 'MAI',
            params: {
              optimalUtilizationRate: '',
              baseVariableBorrowRate: '',
              variableRateSlope1: '6.5',
              variableRateSlope2: '',
              stableRateSlope1: '',
              stableRateSlope2: '',
              baseStableRateOffset: '',
              stableRateExcessOffset: '',
              optimalStableToTotalDebtRatio: '',
            },
          },
        ],
      },
      cache: {blockNumber: 122693669},
    },
    AaveV3Arbitrum: {
      configs: {
        RATE_UPDATE_V3: [
          {
            asset: 'DAI',
            params: {
              optimalUtilizationRate: '',
              baseVariableBorrowRate: '',
              variableRateSlope1: '6.5',
              variableRateSlope2: '',
              stableRateSlope1: '',
              stableRateSlope2: '',
              baseStableRateOffset: '',
              stableRateExcessOffset: '',
              optimalStableToTotalDebtRatio: '',
            },
          },
          {
            asset: 'USDC',
            params: {
              optimalUtilizationRate: '',
              baseVariableBorrowRate: '',
              variableRateSlope1: '6.5',
              variableRateSlope2: '',
              stableRateSlope1: '',
              stableRateSlope2: '',
              baseStableRateOffset: '',
              stableRateExcessOffset: '',
              optimalStableToTotalDebtRatio: '',
            },
          },
          {
            asset: 'USDT',
            params: {
              optimalUtilizationRate: '',
              baseVariableBorrowRate: '',
              variableRateSlope1: '6.5',
              variableRateSlope2: '',
              stableRateSlope1: '',
              stableRateSlope2: '',
              baseStableRateOffset: '',
              stableRateExcessOffset: '',
              optimalStableToTotalDebtRatio: '',
            },
          },
          {
            asset: 'EURS',
            params: {
              optimalUtilizationRate: '',
              baseVariableBorrowRate: '',
              variableRateSlope1: '6.5',
              variableRateSlope2: '',
              stableRateSlope1: '',
              stableRateSlope2: '',
              baseStableRateOffset: '',
              stableRateExcessOffset: '',
              optimalStableToTotalDebtRatio: '',
            },
          },
          {
            asset: 'LUSD',
            params: {
              optimalUtilizationRate: '',
              baseVariableBorrowRate: '',
              variableRateSlope1: '6.5',
              variableRateSlope2: '',
              stableRateSlope1: '',
              stableRateSlope2: '',
              baseStableRateOffset: '',
              stableRateExcessOffset: '',
              optimalStableToTotalDebtRatio: '',
            },
          },
          {
            asset: 'FRAX',
            params: {
              optimalUtilizationRate: '',
              baseVariableBorrowRate: '',
              variableRateSlope1: '6.5',
              variableRateSlope2: '',
              stableRateSlope1: '',
              stableRateSlope2: '',
              baseStableRateOffset: '',
              stableRateExcessOffset: '',
              optimalStableToTotalDebtRatio: '',
            },
          },
        ],
      },
      cache: {blockNumber: 232223154},
    },
    AaveV3Base: {
      configs: {
        RATE_UPDATE_V3: [
          {
            asset: 'USDC',
            params: {
              optimalUtilizationRate: '',
              baseVariableBorrowRate: '',
              variableRateSlope1: '6.5',
              variableRateSlope2: '',
              stableRateSlope1: '',
              stableRateSlope2: '',
              baseStableRateOffset: '',
              stableRateExcessOffset: '',
              optimalStableToTotalDebtRatio: '',
            },
          },
        ],
      },
      cache: {blockNumber: 17098886},
    },
    AaveV3Gnosis: {
      configs: {
        RATE_UPDATE_V3: [
          {
            asset: 'USDC',
            params: {
              optimalUtilizationRate: '',
              baseVariableBorrowRate: '',
              variableRateSlope1: '6.5',
              variableRateSlope2: '',
              stableRateSlope1: '',
              stableRateSlope2: '',
              baseStableRateOffset: '',
              stableRateExcessOffset: '',
              optimalStableToTotalDebtRatio: '',
            },
          },
          {
            asset: 'WXDAI',
            params: {
              optimalUtilizationRate: '',
              baseVariableBorrowRate: '',
              variableRateSlope1: '6.5',
              variableRateSlope2: '',
              stableRateSlope1: '',
              stableRateSlope2: '',
              baseStableRateOffset: '',
              stableRateExcessOffset: '',
              optimalStableToTotalDebtRatio: '',
            },
          },
          {
            asset: 'EURe',
            params: {
              optimalUtilizationRate: '',
              baseVariableBorrowRate: '',
              variableRateSlope1: '6.5',
              variableRateSlope2: '',
              stableRateSlope1: '',
              stableRateSlope2: '',
              baseStableRateOffset: '',
              stableRateExcessOffset: '',
              optimalStableToTotalDebtRatio: '',
            },
          },
        ],
      },
      cache: {blockNumber: 34967085},
    },
    AaveV3Scroll: {
      configs: {
        RATE_UPDATE_V3: [
          {
            asset: 'USDC',
            params: {
              optimalUtilizationRate: '',
              baseVariableBorrowRate: '',
              variableRateSlope1: '6.5',
              variableRateSlope2: '',
              stableRateSlope1: '',
              stableRateSlope2: '',
              baseStableRateOffset: '',
              stableRateExcessOffset: '',
              optimalStableToTotalDebtRatio: '',
            },
          },
        ],
      },
      cache: {blockNumber: 7431090},
    },
    AaveV3BNB: {
      configs: {
        RATE_UPDATE_V3: [
          {
            asset: 'USDC',
            params: {
              optimalUtilizationRate: '',
              baseVariableBorrowRate: '',
              variableRateSlope1: '6.5',
              variableRateSlope2: '',
              stableRateSlope1: '',
              stableRateSlope2: '',
              baseStableRateOffset: '',
              stableRateExcessOffset: '',
              optimalStableToTotalDebtRatio: '',
            },
          },
          {
            asset: 'USDT',
            params: {
              optimalUtilizationRate: '',
              baseVariableBorrowRate: '',
              variableRateSlope1: '6.5',
              variableRateSlope2: '',
              stableRateSlope1: '',
              stableRateSlope2: '',
              baseStableRateOffset: '',
              stableRateExcessOffset: '',
              optimalStableToTotalDebtRatio: '',
            },
          },
          {
            asset: 'FDUSD',
            params: {
              optimalUtilizationRate: '',
              baseVariableBorrowRate: '',
              variableRateSlope1: '6.5',
              variableRateSlope2: '',
              stableRateSlope1: '',
              stableRateSlope2: '',
              baseStableRateOffset: '',
              stableRateExcessOffset: '',
              optimalStableToTotalDebtRatio: '',
            },
          },
        ],
      },
      cache: {blockNumber: 40474721},
    },
  },
};
