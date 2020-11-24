/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import {
  ethers,
  EventFilter,
  Signer,
  BigNumber,
  BigNumberish,
  PopulatedTransaction,
} from "ethers";
import {
  Contract,
  ContractTransaction,
  Overrides,
  CallOverrides,
} from "@ethersproject/contracts";
import { BytesLike } from "@ethersproject/bytes";
import { Listener, Provider } from "@ethersproject/providers";
import { FunctionFragment, EventFragment, Result } from "@ethersproject/abi";

interface MockRegistrySubscriberInterface extends ethers.utils.Interface {
  functions: {
    "getAttributeValue(address,bytes32)": FunctionFragment;
    "syncAttributeValue(address,bytes32,uint256)": FunctionFragment;
  };

  encodeFunctionData(
    functionFragment: "getAttributeValue",
    values: [string, BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "syncAttributeValue",
    values: [string, BytesLike, BigNumberish]
  ): string;

  decodeFunctionResult(
    functionFragment: "getAttributeValue",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "syncAttributeValue",
    data: BytesLike
  ): Result;

  events: {};
}

export class MockRegistrySubscriber extends Contract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  on(event: EventFilter | string, listener: Listener): this;
  once(event: EventFilter | string, listener: Listener): this;
  addListener(eventName: EventFilter | string, listener: Listener): this;
  removeAllListeners(eventName: EventFilter | string): this;
  removeListener(eventName: any, listener: Listener): this;

  interface: MockRegistrySubscriberInterface;

  functions: {
    getAttributeValue(
      _who: string,
      _attribute: BytesLike,
      overrides?: CallOverrides
    ): Promise<{
      0: BigNumber;
    }>;

    "getAttributeValue(address,bytes32)"(
      _who: string,
      _attribute: BytesLike,
      overrides?: CallOverrides
    ): Promise<{
      0: BigNumber;
    }>;

    syncAttributeValue(
      _who: string,
      _attribute: BytesLike,
      _value: BigNumberish,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    "syncAttributeValue(address,bytes32,uint256)"(
      _who: string,
      _attribute: BytesLike,
      _value: BigNumberish,
      overrides?: Overrides
    ): Promise<ContractTransaction>;
  };

  getAttributeValue(
    _who: string,
    _attribute: BytesLike,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  "getAttributeValue(address,bytes32)"(
    _who: string,
    _attribute: BytesLike,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  syncAttributeValue(
    _who: string,
    _attribute: BytesLike,
    _value: BigNumberish,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  "syncAttributeValue(address,bytes32,uint256)"(
    _who: string,
    _attribute: BytesLike,
    _value: BigNumberish,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  callStatic: {
    getAttributeValue(
      _who: string,
      _attribute: BytesLike,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "getAttributeValue(address,bytes32)"(
      _who: string,
      _attribute: BytesLike,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    syncAttributeValue(
      _who: string,
      _attribute: BytesLike,
      _value: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    "syncAttributeValue(address,bytes32,uint256)"(
      _who: string,
      _attribute: BytesLike,
      _value: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;
  };

  filters: {};

  estimateGas: {
    getAttributeValue(
      _who: string,
      _attribute: BytesLike,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "getAttributeValue(address,bytes32)"(
      _who: string,
      _attribute: BytesLike,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    syncAttributeValue(
      _who: string,
      _attribute: BytesLike,
      _value: BigNumberish,
      overrides?: Overrides
    ): Promise<BigNumber>;

    "syncAttributeValue(address,bytes32,uint256)"(
      _who: string,
      _attribute: BytesLike,
      _value: BigNumberish,
      overrides?: Overrides
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    getAttributeValue(
      _who: string,
      _attribute: BytesLike,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "getAttributeValue(address,bytes32)"(
      _who: string,
      _attribute: BytesLike,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    syncAttributeValue(
      _who: string,
      _attribute: BytesLike,
      _value: BigNumberish,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    "syncAttributeValue(address,bytes32,uint256)"(
      _who: string,
      _attribute: BytesLike,
      _value: BigNumberish,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;
  };
}