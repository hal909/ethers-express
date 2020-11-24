/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import { Contract, ContractFactory, Overrides } from "@ethersproject/contracts";

import type { OwnedUpgradeabilityProxy } from "./OwnedUpgradeabilityProxy";

export class OwnedUpgradeabilityProxyFactory extends ContractFactory {
  constructor(signer?: Signer) {
    super(_abi, _bytecode, signer);
  }

  deploy(overrides?: Overrides): Promise<OwnedUpgradeabilityProxy> {
    return super.deploy(overrides || {}) as Promise<OwnedUpgradeabilityProxy>;
  }
  getDeployTransaction(overrides?: Overrides): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  attach(address: string): OwnedUpgradeabilityProxy {
    return super.attach(address) as OwnedUpgradeabilityProxy;
  }
  connect(signer: Signer): OwnedUpgradeabilityProxyFactory {
    return super.connect(signer) as OwnedUpgradeabilityProxyFactory;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): OwnedUpgradeabilityProxy {
    return new Contract(
      address,
      _abi,
      signerOrProvider
    ) as OwnedUpgradeabilityProxy;
  }
}

const _abi = [
  {
    inputs: [],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "currentOwner",
        type: "address",
      },
      {
        indexed: false,
        internalType: "address",
        name: "pendingOwner",
        type: "address",
      },
    ],
    name: "NewPendingOwner",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "previousOwner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "ProxyOwnershipTransferred",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "implementation",
        type: "address",
      },
    ],
    name: "Upgraded",
    type: "event",
  },
  {
    stateMutability: "payable",
    type: "fallback",
  },
  {
    inputs: [],
    name: "claimProxyOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "implementation",
    outputs: [
      {
        internalType: "address",
        name: "impl",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "pendingProxyOwner",
    outputs: [
      {
        internalType: "address",
        name: "pendingOwner",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "proxyOwner",
    outputs: [
      {
        internalType: "address",
        name: "owner",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "transferProxyOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "implementation",
        type: "address",
      },
    ],
    name: "upgradeTo",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    stateMutability: "payable",
    type: "receive",
  },
];

const _bytecode =
  "0x608060405234801561001057600080fd5b50610023336001600160e01b0361002816565b61004c565b7f6279e8199720cf3557ecd8b58d667c8edc486bd1cf3ad59ea9ebdfcae0d0dfac55565b61062d8061005b6000396000f3fe6080604052600436106100695760003560e01c80635c60da1b116100435780635c60da1b146101135780639965b3d614610128578063f1739cae1461013d57610078565b8063025313a2146100805780630add8140146100be5780633659cfe6146100d357610078565b366100785761007661017d565b005b61007661017d565b34801561008c57600080fd5b506100956101c2565b6040805173ffffffffffffffffffffffffffffffffffffffff9092168252519081900360200190f35b3480156100ca57600080fd5b506100956101e7565b3480156100df57600080fd5b50610076600480360360208110156100f657600080fd5b503573ffffffffffffffffffffffffffffffffffffffff1661020c565b34801561011f57600080fd5b50610095610340565b34801561013457600080fd5b50610076610365565b34801561014957600080fd5b506100766004803603602081101561016057600080fd5b503573ffffffffffffffffffffffffffffffffffffffff1661048a565b6040517f6e41e0fbe643dfdb6043698bf865aada82dc46b953f754a3468eaa272a362dc790363d82373d3d368385545af43d6000833e8080156101be573d83f35b3d83fd5b7f6279e8199720cf3557ecd8b58d667c8edc486bd1cf3ad59ea9ebdfcae0d0dfac5490565b7f8ddbac328deee8d986ec3a7b933a196f96986cb4ee030d86cc56431c728b83f45490565b6102146101c2565b73ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff16146102ad57604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601060248201527f6f6e6c792050726f7879204f776e657200000000000000000000000000000000604482015290519081900360640190fd5b7f6e41e0fbe643dfdb6043698bf865aada82dc46b953f754a3468eaa272a362dc780549073ffffffffffffffffffffffffffffffffffffffff80831690841614156102f757600080fd5b82815560405173ffffffffffffffffffffffffffffffffffffffff8416907fbc7cd75a20ee27fd9adebab32041f755214dbc6bffa90cc0225b39da2e5c2d3b90600090a2505050565b7f6e41e0fbe643dfdb6043698bf865aada82dc46b953f754a3468eaa272a362dc75490565b61036d6101e7565b73ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff161461040657604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601860248201527f6f6e6c792070656e64696e672050726f7879204f776e65720000000000000000604482015290519081900360640190fd5b61040e6101e7565b73ffffffffffffffffffffffffffffffffffffffff1661042c6101c2565b73ffffffffffffffffffffffffffffffffffffffff167f5a3e66efaa1e445ebd894728a69d6959842ea1e97bd79b892797106e270efcd960405160405180910390a361047e6104796101e7565b6105af565b61048860006105d3565b565b6104926101c2565b73ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff161461052b57604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601060248201527f6f6e6c792050726f7879204f776e657200000000000000000000000000000000604482015290519081900360640190fd5b73ffffffffffffffffffffffffffffffffffffffff811661054b57600080fd5b610554816105d3565b7fb3d55174552271a4f1aaf36b72f50381e892171636b3fb5447fe00e995e7a37b61057d6101c2565b6040805173ffffffffffffffffffffffffffffffffffffffff928316815291841660208301528051918290030190a150565b7f6279e8199720cf3557ecd8b58d667c8edc486bd1cf3ad59ea9ebdfcae0d0dfac55565b7f8ddbac328deee8d986ec3a7b933a196f96986cb4ee030d86cc56431c728b83f45556fea26469706673582212206acd099dfc34ccee396084df959d0fdd422a2c554ac50708d35a07f9a50e18bd64736f6c634300060a0033";