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

interface ReclaimableInterface extends ethers.utils.Interface {
  functions: {
    "owner()": FunctionFragment;
    "reclaimContract(address)": FunctionFragment;
    "reclaimEther(address)": FunctionFragment;
    "reclaimToken(address,address)": FunctionFragment;
    "transferOwnership(address)": FunctionFragment;
  };

  encodeFunctionData(functionFragment: "owner", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "reclaimContract",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "reclaimEther",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "reclaimToken",
    values: [string, string]
  ): string;
  encodeFunctionData(
    functionFragment: "transferOwnership",
    values: [string]
  ): string;

  decodeFunctionResult(functionFragment: "owner", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "reclaimContract",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "reclaimEther",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "reclaimToken",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "transferOwnership",
    data: BytesLike
  ): Result;

  events: {
    "OwnershipTransferred(address,address)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "OwnershipTransferred"): EventFragment;
}

export class Reclaimable extends Contract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  on(event: EventFilter | string, listener: Listener): this;
  once(event: EventFilter | string, listener: Listener): this;
  addListener(eventName: EventFilter | string, listener: Listener): this;
  removeAllListeners(eventName: EventFilter | string): this;
  removeListener(eventName: any, listener: Listener): this;

  interface: ReclaimableInterface;

  functions: {
    owner(
      overrides?: CallOverrides
    ): Promise<{
      0: string;
    }>;

    "owner()"(
      overrides?: CallOverrides
    ): Promise<{
      0: string;
    }>;

    reclaimContract(
      ownable: string,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    "reclaimContract(address)"(
      ownable: string,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    reclaimEther(
      to: string,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    "reclaimEther(address)"(
      to: string,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    reclaimToken(
      token: string,
      to: string,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    "reclaimToken(address,address)"(
      token: string,
      to: string,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    transferOwnership(
      newOwner: string,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    "transferOwnership(address)"(
      newOwner: string,
      overrides?: Overrides
    ): Promise<ContractTransaction>;
  };

  owner(overrides?: CallOverrides): Promise<string>;

  "owner()"(overrides?: CallOverrides): Promise<string>;

  reclaimContract(
    ownable: string,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  "reclaimContract(address)"(
    ownable: string,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  reclaimEther(to: string, overrides?: Overrides): Promise<ContractTransaction>;

  "reclaimEther(address)"(
    to: string,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  reclaimToken(
    token: string,
    to: string,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  "reclaimToken(address,address)"(
    token: string,
    to: string,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  transferOwnership(
    newOwner: string,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  "transferOwnership(address)"(
    newOwner: string,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  callStatic: {
    owner(overrides?: CallOverrides): Promise<string>;

    "owner()"(overrides?: CallOverrides): Promise<string>;

    reclaimContract(ownable: string, overrides?: CallOverrides): Promise<void>;

    "reclaimContract(address)"(
      ownable: string,
      overrides?: CallOverrides
    ): Promise<void>;

    reclaimEther(to: string, overrides?: CallOverrides): Promise<void>;

    "reclaimEther(address)"(
      to: string,
      overrides?: CallOverrides
    ): Promise<void>;

    reclaimToken(
      token: string,
      to: string,
      overrides?: CallOverrides
    ): Promise<void>;

    "reclaimToken(address,address)"(
      token: string,
      to: string,
      overrides?: CallOverrides
    ): Promise<void>;

    transferOwnership(
      newOwner: string,
      overrides?: CallOverrides
    ): Promise<void>;

    "transferOwnership(address)"(
      newOwner: string,
      overrides?: CallOverrides
    ): Promise<void>;
  };

  filters: {
    OwnershipTransferred(
      previousOwner: string | null,
      newOwner: string | null
    ): EventFilter;
  };

  estimateGas: {
    owner(overrides?: CallOverrides): Promise<BigNumber>;

    "owner()"(overrides?: CallOverrides): Promise<BigNumber>;

    reclaimContract(ownable: string, overrides?: Overrides): Promise<BigNumber>;

    "reclaimContract(address)"(
      ownable: string,
      overrides?: Overrides
    ): Promise<BigNumber>;

    reclaimEther(to: string, overrides?: Overrides): Promise<BigNumber>;

    "reclaimEther(address)"(
      to: string,
      overrides?: Overrides
    ): Promise<BigNumber>;

    reclaimToken(
      token: string,
      to: string,
      overrides?: Overrides
    ): Promise<BigNumber>;

    "reclaimToken(address,address)"(
      token: string,
      to: string,
      overrides?: Overrides
    ): Promise<BigNumber>;

    transferOwnership(
      newOwner: string,
      overrides?: Overrides
    ): Promise<BigNumber>;

    "transferOwnership(address)"(
      newOwner: string,
      overrides?: Overrides
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    owner(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "owner()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    reclaimContract(
      ownable: string,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    "reclaimContract(address)"(
      ownable: string,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    reclaimEther(
      to: string,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    "reclaimEther(address)"(
      to: string,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    reclaimToken(
      token: string,
      to: string,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    "reclaimToken(address,address)"(
      token: string,
      to: string,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    transferOwnership(
      newOwner: string,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    "transferOwnership(address)"(
      newOwner: string,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;
  };
}