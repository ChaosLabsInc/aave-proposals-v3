// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import {AaveV2Ethereum} from 'aave-address-book/AaveV2Ethereum.sol';

import 'forge-std/Test.sol';
import {ProtocolV2TestBase, ReserveConfig} from 'aave-helpers/ProtocolV2TestBase.sol';
import {AaveV2Ethereum_StablecoinIRCurvesUpdates_20231221} from './AaveV2Ethereum_StablecoinIRCurvesUpdates_20231221.sol';

/**
 * @dev Test for AaveV2Ethereum_StablecoinIRCurvesUpdates_20231221
 * command: make test-contract filter=AaveV2Ethereum_StablecoinIRCurvesUpdates_20231221
 */
contract AaveV2Ethereum_StablecoinIRCurvesUpdates_20231221_Test is ProtocolV2TestBase {
  AaveV2Ethereum_StablecoinIRCurvesUpdates_20231221 internal proposal;

  function setUp() public {
    vm.createSelectFork(vm.rpcUrl('mainnet'), 18833180);
    proposal = new AaveV2Ethereum_StablecoinIRCurvesUpdates_20231221();
  }

  /**
   * @dev executes the generic test suite including e2e and config snapshots
   */
  function test_defaultProposalExecution() public {
    defaultTest(
      'AaveV2Ethereum_StablecoinIRCurvesUpdates_20231221',
      AaveV2Ethereum.POOL,
      address(proposal)
    );
  }
}
