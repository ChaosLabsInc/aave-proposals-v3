// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import {AaveV3Optimism, AaveV3OptimismAssets} from 'aave-address-book/AaveV3Optimism.sol';
import {IDefaultInterestRateStrategy} from 'aave-address-book/AaveV3.sol';

import {AaveV3Optimism} from 'aave-address-book/AaveV3Optimism.sol';

import 'forge-std/Test.sol';
import {InterestStrategyValues} from 'aave-helpers/ProtocolV3TestBase.sol';
import {ProtocolV3TestBase, ReserveConfig} from 'aave-helpers/ProtocolV3TestBase.sol';
import {AaveV3Optimism_ChaosLabsRiskParameterUpdatesOPOnV3Optimism_20240516} from './AaveV3Optimism_ChaosLabsRiskParameterUpdatesOPOnV3Optimism_20240516.sol';

/**
 * @dev Test for AaveV3Optimism_ChaosLabsRiskParameterUpdatesOPOnV3Optimism_20240516
 * command: FOUNDRY_PROFILE=optimism forge test --match-path=src/20240516_AaveV3Optimism_ChaosLabsRiskParameterUpdatesOPOnV3Optimism/AaveV3Optimism_ChaosLabsRiskParameterUpdatesOPOnV3Optimism_20240516.t.sol -vv
 */
contract AaveV3Optimism_ChaosLabsRiskParameterUpdatesOPOnV3Optimism_20240516_Test is
  ProtocolV3TestBase
{
  AaveV3Optimism_ChaosLabsRiskParameterUpdatesOPOnV3Optimism_20240516 internal proposal;

  function setUp() public {
    vm.createSelectFork(vm.rpcUrl('optimism'), 118786899);
    proposal = new AaveV3Optimism_ChaosLabsRiskParameterUpdatesOPOnV3Optimism_20240516();
  }

  /**
   * @dev executes the generic test suite including e2e and config snapshots
   */
  function test_defaultProposalExecution() public {
    (ReserveConfig[] memory allConfigsBefore, ReserveConfig[] memory allConfigsAfter) = defaultTest(
      'AaveV3Optimism_ChaosLabsRiskParameterUpdatesOPOnV3Optimism_20240516',
      AaveV3Optimism.POOL,
      address(proposal)
    );

    address[] memory assetsChanged = new address[](1);
    assetsChanged[0] = AaveV3OptimismAssets.OP_UNDERLYING;

    _noReservesConfigsChangesApartFrom(allConfigsBefore, allConfigsAfter, assetsChanged);

    ReserveConfig memory config = _findReserveConfig(
      allConfigsAfter,
      AaveV3OptimismAssets.OP_UNDERLYING
    );
    assertEq(config.ltv, 50_00);
    assertEq(config.liquidationThreshold, 60_00);
  }
}
