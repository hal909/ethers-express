/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import { Contract, ContractFactory, Overrides } from "@ethersproject/contracts";

import type { MockRegistrySubscriber } from "./MockRegistrySubscriber";

export class MockRegistrySubscriberFactory extends ContractFactory {
  constructor(signer?: Signer) {
    super(_abi, _bytecode, signer);
  }

  deploy(overrides?: Overrides): Promise<MockRegistrySubscriber> {
    return super.deploy(overrides || {}) as Promise<MockRegistrySubscriber>;
  }
  getDeployTransaction(overrides?: Overrides): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  attach(address: string): MockRegistrySubscriber {
    return super.attach(address) as MockRegistrySubscriber;
  }
  connect(signer: Signer): MockRegistrySubscriberFactory {
    return super.connect(signer) as MockRegistrySubscriberFactory;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): MockRegistrySubscriber {
    return new Contract(
      address,
      _abi,
      signerOrProvider
    ) as MockRegistrySubscriber;
  }
}

const _abi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "_who",
        type: "address",
      },
      {
        internalType: "bytes32",
        name: "_attribute",
        type: "bytes32",
      },
    ],
    name: "getAttributeValue",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_who",
        type: "address",
      },
      {
        internalType: "bytes32",
        name: "_attribute",
        type: "bytes32",
      },
      {
        internalType: "uint256",
        name: "_value",
        type: "uint256",
      },
    ],
    name: "syncAttributeValue",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];

const _bytecode =
  "0x608060405234801561001057600080fd5b50610161806100206000396000f3fe608060405234801561001057600080fd5b50600436106100365760003560e01c8063e23c50631461003b578063f5be438914610086575b600080fd5b6100746004803603604081101561005157600080fd5b5073ffffffffffffffffffffffffffffffffffffffff81351690602001356100c7565b60408051918252519081900360200190f35b6100c56004803603606081101561009c57600080fd5b5073ffffffffffffffffffffffffffffffffffffffff81351690602081013590604001356100fa565b005b73ffffffffffffffffffffffffffffffffffffffff91909116600090815260208181526040808320938352929052205490565b73ffffffffffffffffffffffffffffffffffffffff909216600090815260208181526040808320938352929052205556fea26469706673582212204b4743ccaaf4e8a76db860c349d41ca034c99a6edf127a9fadd7ad49ec0bfd9164736f6c634300060a0033";