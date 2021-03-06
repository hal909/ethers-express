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

interface ICurvePoolInterface extends ethers.utils.Interface {
  functions: {
    "add_liquidity(uint256[4],uint256)": FunctionFragment;
    "calc_withdraw_one_coin(uint256,int128)": FunctionFragment;
    "coins(int128)": FunctionFragment;
    "curve()": FunctionFragment;
    "remove_liquidity_one_coin(uint256,int128,uint256,bool)": FunctionFragment;
    "token()": FunctionFragment;
  };

  encodeFunctionData(
    functionFragment: "add_liquidity",
    values: [
      [BigNumberish, BigNumberish, BigNumberish, BigNumberish],
      BigNumberish
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "calc_withdraw_one_coin",
    values: [BigNumberish, BigNumberish]
  ): string;
  encodeFunctionData(functionFragment: "coins", values: [BigNumberish]): string;
  encodeFunctionData(functionFragment: "curve", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "remove_liquidity_one_coin",
    values: [BigNumberish, BigNumberish, BigNumberish, boolean]
  ): string;
  encodeFunctionData(functionFragment: "token", values?: undefined): string;

  decodeFunctionResult(
    functionFragment: "add_liquidity",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "calc_withdraw_one_coin",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "coins", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "curve", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "remove_liquidity_one_coin",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "token", data: BytesLike): Result;

  events: {};
}

export class ICurvePool extends Contract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  on(event: EventFilter | string, listener: Listener): this;
  once(event: EventFilter | string, listener: Listener): this;
  addListener(eventName: EventFilter | string, listener: Listener): this;
  removeAllListeners(eventName: EventFilter | string): this;
  removeListener(eventName: any, listener: Listener): this;

  interface: ICurvePoolInterface;

  functions: {
    add_liquidity(
      amounts: [BigNumberish, BigNumberish, BigNumberish, BigNumberish],
      min_mint_amount: BigNumberish,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    "add_liquidity(uint256[4],uint256)"(
      amounts: [BigNumberish, BigNumberish, BigNumberish, BigNumberish],
      min_mint_amount: BigNumberish,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    calc_withdraw_one_coin(
      _token_amount: BigNumberish,
      i: BigNumberish,
      overrides?: CallOverrides
    ): Promise<{
      0: BigNumber;
    }>;

    "calc_withdraw_one_coin(uint256,int128)"(
      _token_amount: BigNumberish,
      i: BigNumberish,
      overrides?: CallOverrides
    ): Promise<{
      0: BigNumber;
    }>;

    coins(
      id: BigNumberish,
      overrides?: CallOverrides
    ): Promise<{
      0: string;
    }>;

    "coins(int128)"(
      id: BigNumberish,
      overrides?: CallOverrides
    ): Promise<{
      0: string;
    }>;

    curve(
      overrides?: CallOverrides
    ): Promise<{
      0: string;
    }>;

    "curve()"(
      overrides?: CallOverrides
    ): Promise<{
      0: string;
    }>;

    remove_liquidity_one_coin(
      _token_amount: BigNumberish,
      i: BigNumberish,
      min_amount: BigNumberish,
      donate_dust: boolean,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    "remove_liquidity_one_coin(uint256,int128,uint256,bool)"(
      _token_amount: BigNumberish,
      i: BigNumberish,
      min_amount: BigNumberish,
      donate_dust: boolean,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    token(
      overrides?: CallOverrides
    ): Promise<{
      0: string;
    }>;

    "token()"(
      overrides?: CallOverrides
    ): Promise<{
      0: string;
    }>;
  };

  add_liquidity(
    amounts: [BigNumberish, BigNumberish, BigNumberish, BigNumberish],
    min_mint_amount: BigNumberish,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  "add_liquidity(uint256[4],uint256)"(
    amounts: [BigNumberish, BigNumberish, BigNumberish, BigNumberish],
    min_mint_amount: BigNumberish,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  calc_withdraw_one_coin(
    _token_amount: BigNumberish,
    i: BigNumberish,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  "calc_withdraw_one_coin(uint256,int128)"(
    _token_amount: BigNumberish,
    i: BigNumberish,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  coins(id: BigNumberish, overrides?: CallOverrides): Promise<string>;

  "coins(int128)"(id: BigNumberish, overrides?: CallOverrides): Promise<string>;

  curve(overrides?: CallOverrides): Promise<string>;

  "curve()"(overrides?: CallOverrides): Promise<string>;

  remove_liquidity_one_coin(
    _token_amount: BigNumberish,
    i: BigNumberish,
    min_amount: BigNumberish,
    donate_dust: boolean,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  "remove_liquidity_one_coin(uint256,int128,uint256,bool)"(
    _token_amount: BigNumberish,
    i: BigNumberish,
    min_amount: BigNumberish,
    donate_dust: boolean,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  token(overrides?: CallOverrides): Promise<string>;

  "token()"(overrides?: CallOverrides): Promise<string>;

  callStatic: {
    add_liquidity(
      amounts: [BigNumberish, BigNumberish, BigNumberish, BigNumberish],
      min_mint_amount: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    "add_liquidity(uint256[4],uint256)"(
      amounts: [BigNumberish, BigNumberish, BigNumberish, BigNumberish],
      min_mint_amount: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    calc_withdraw_one_coin(
      _token_amount: BigNumberish,
      i: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "calc_withdraw_one_coin(uint256,int128)"(
      _token_amount: BigNumberish,
      i: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    coins(id: BigNumberish, overrides?: CallOverrides): Promise<string>;

    "coins(int128)"(
      id: BigNumberish,
      overrides?: CallOverrides
    ): Promise<string>;

    curve(overrides?: CallOverrides): Promise<string>;

    "curve()"(overrides?: CallOverrides): Promise<string>;

    remove_liquidity_one_coin(
      _token_amount: BigNumberish,
      i: BigNumberish,
      min_amount: BigNumberish,
      donate_dust: boolean,
      overrides?: CallOverrides
    ): Promise<void>;

    "remove_liquidity_one_coin(uint256,int128,uint256,bool)"(
      _token_amount: BigNumberish,
      i: BigNumberish,
      min_amount: BigNumberish,
      donate_dust: boolean,
      overrides?: CallOverrides
    ): Promise<void>;

    token(overrides?: CallOverrides): Promise<string>;

    "token()"(overrides?: CallOverrides): Promise<string>;
  };

  filters: {};

  estimateGas: {
    add_liquidity(
      amounts: [BigNumberish, BigNumberish, BigNumberish, BigNumberish],
      min_mint_amount: BigNumberish,
      overrides?: Overrides
    ): Promise<BigNumber>;

    "add_liquidity(uint256[4],uint256)"(
      amounts: [BigNumberish, BigNumberish, BigNumberish, BigNumberish],
      min_mint_amount: BigNumberish,
      overrides?: Overrides
    ): Promise<BigNumber>;

    calc_withdraw_one_coin(
      _token_amount: BigNumberish,
      i: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "calc_withdraw_one_coin(uint256,int128)"(
      _token_amount: BigNumberish,
      i: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    coins(id: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;

    "coins(int128)"(
      id: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    curve(overrides?: CallOverrides): Promise<BigNumber>;

    "curve()"(overrides?: CallOverrides): Promise<BigNumber>;

    remove_liquidity_one_coin(
      _token_amount: BigNumberish,
      i: BigNumberish,
      min_amount: BigNumberish,
      donate_dust: boolean,
      overrides?: Overrides
    ): Promise<BigNumber>;

    "remove_liquidity_one_coin(uint256,int128,uint256,bool)"(
      _token_amount: BigNumberish,
      i: BigNumberish,
      min_amount: BigNumberish,
      donate_dust: boolean,
      overrides?: Overrides
    ): Promise<BigNumber>;

    token(overrides?: CallOverrides): Promise<BigNumber>;

    "token()"(overrides?: CallOverrides): Promise<BigNumber>;
  };

  populateTransaction: {
    add_liquidity(
      amounts: [BigNumberish, BigNumberish, BigNumberish, BigNumberish],
      min_mint_amount: BigNumberish,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    "add_liquidity(uint256[4],uint256)"(
      amounts: [BigNumberish, BigNumberish, BigNumberish, BigNumberish],
      min_mint_amount: BigNumberish,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    calc_withdraw_one_coin(
      _token_amount: BigNumberish,
      i: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "calc_withdraw_one_coin(uint256,int128)"(
      _token_amount: BigNumberish,
      i: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    coins(
      id: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "coins(int128)"(
      id: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    curve(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "curve()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    remove_liquidity_one_coin(
      _token_amount: BigNumberish,
      i: BigNumberish,
      min_amount: BigNumberish,
      donate_dust: boolean,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    "remove_liquidity_one_coin(uint256,int128,uint256,bool)"(
      _token_amount: BigNumberish,
      i: BigNumberish,
      min_amount: BigNumberish,
      donate_dust: boolean,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    token(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "token()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;
  };
}
