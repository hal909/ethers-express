
import * as Mars from 'ethereum-mars';

const AddressJSON = require('./Address.json')
const ArbitraryDistributorJSON = require('./ArbitraryDistributor.json')
const BurnableTokenWithBoundsJSON = require('./BurnableTokenWithBounds.json')
const ClaimableContractJSON = require('./ClaimableContract.json')
const ClaimableOwnableJSON = require('./ClaimableOwnable.json')
const ContextJSON = require('./Context.json')
const DelegateERC20JSON = require('./DelegateERC20.json')
const ERC20JSON = require('./ERC20.json')
const ERC20BurnableJSON = require('./ERC20Burnable.json')
const ERC20MockJSON = require('./ERC20Mock.json')
const ForceEtherJSON = require('./ForceEther.json')
const GasRefundJSON = require('./GasRefund.json')
const IArbitraryDistributorJSON = require('./IArbitraryDistributor.json')
const IBurnableERC20JSON = require('./IBurnableERC20.json')
const ICurveJSON = require('./ICurve.json')
const ICurveGaugeJSON = require('./ICurveGauge.json')
const ICurveMinterJSON = require('./ICurveMinter.json')
const ICurvePoolJSON = require('./ICurvePool.json')
const IDelegateERC20JSON = require('./IDelegateERC20.json')
const IERC20JSON = require('./IERC20.json')
const IHasOwnerJSON = require('./IHasOwner.json')
const IHookJSON = require('./IHook.json')
const ILoanFactoryJSON = require('./ILoanFactory.json')
const ILoanTokenJSON = require('./ILoanToken.json')
const IOwnableJSON = require('./IOwnable.json')
const IOwnedUpgradeabilityProxyJSON = require('./IOwnedUpgradeabilityProxy.json')
const IReclaimerTokenJSON = require('./IReclaimerToken.json')
const IRegistryJSON = require('./IRegistry.json')
const IRegistryCloneJSON = require('./IRegistryClone.json')
const ITrueCurrencyJSON = require('./ITrueCurrency.json')
const ITrueDistributorJSON = require('./ITrueDistributor.json')
const ITrueFarmJSON = require('./ITrueFarm.json')
const ITrueFiPoolJSON = require('./ITrueFiPool.json')
const ITrueLenderJSON = require('./ITrueLender.json')
const ITrueRatingAgencyJSON = require('./ITrueRatingAgency.json')
const IUniswapRouterJSON = require('./IUniswapRouter.json')
const IUniswapV2FactoryJSON = require('./IUniswapV2Factory.json')
const IYTokenJSON = require('./IYToken.json')
const InitializableJSON = require('./Initializable.json')
const LinearTrueDistributorJSON = require('./LinearTrueDistributor.json')
const LoanFactoryJSON = require('./LoanFactory.json')
const LoanTokenJSON = require('./LoanToken.json')
const MockCurveJSON = require('./MockCurve.json')
const MockCurveGaugeJSON = require('./MockCurveGauge.json')
const MockCurveMinterJSON = require('./MockCurveMinter.json')
const MockCurvePoolJSON = require('./MockCurvePool.json')
const MockDelegateERC20JSON = require('./MockDelegateERC20.json')
const MockERC20JSON = require('./MockERC20.json')
const MockERC20TokenJSON = require('./MockERC20Token.json')
const MockGasRefundTokenJSON = require('./MockGasRefundToken.json')
const MockHookJSON = require('./MockHook.json')
const MockRegistrySubscriberJSON = require('./MockRegistrySubscriber.json')
const MockTrueCurrencyJSON = require('./MockTrueCurrency.json')
const MockTrueCurrencyWithAutosweepJSON = require('./MockTrueCurrencyWithAutosweep.json')
const MockTrueCurrencyWithDelegateJSON = require('./MockTrueCurrencyWithDelegate.json')
const MockTrueCurrencyWithGasRefundJSON = require('./MockTrueCurrencyWithGasRefund.json')
const MockTrueCurrencyWithLegacyAutosweepJSON = require('./MockTrueCurrencyWithLegacyAutosweep.json')
const MockTrueLenderJSON = require('./MockTrueLender.json')
const MockTrustTokenJSON = require('./MockTrustToken.json')
const MockYTokenJSON = require('./MockYToken.json')
const OwnableJSON = require('./Ownable.json')
const OwnableMockJSON = require('./OwnableMock.json')
const OwnedUpgradeabilityProxyJSON = require('./OwnedUpgradeabilityProxy.json')
const PausedTrueGoldJSON = require('./PausedTrueGold.json')
const ProvisionalRegistryJSON = require('./ProvisionalRegistry.json')
const ProvisionalRegistryMockJSON = require('./ProvisionalRegistryMock.json')
const ProxyStorageJSON = require('./ProxyStorage.json')
const ReclaimableJSON = require('./Reclaimable.json')
const ReclaimerTokenJSON = require('./ReclaimerToken.json')
const ReentrancyGuardJSON = require('./ReentrancyGuard.json')
const RegistryJSON = require('./Registry.json')
const RegistryMockJSON = require('./RegistryMock.json')
const SafeMathJSON = require('./SafeMath.json')
const TimeLockRegistryJSON = require('./TimeLockRegistry.json')
const TimeLockedTokenJSON = require('./TimeLockedToken.json')
const TimeOwnedUpgradeabilityProxyJSON = require('./TimeOwnedUpgradeabilityProxy.json')
const TokenControllerJSON = require('./TokenController.json')
const TokenControllerMockJSON = require('./TokenControllerMock.json')
const TokenControllerPauseMockJSON = require('./TokenControllerPauseMock.json')
const TokenFaucetJSON = require('./TokenFaucet.json')
const TrueAUDJSON = require('./TrueAUD.json')
const TrueCADJSON = require('./TrueCAD.json')
const TrueCurrencyJSON = require('./TrueCurrency.json')
const TrueCurrencyWithGasRefundJSON = require('./TrueCurrencyWithGasRefund.json')
const TrueCurrencyWithLegacyAutosweepJSON = require('./TrueCurrencyWithLegacyAutosweep.json')
const TrueFarmJSON = require('./TrueFarm.json')
const TrueFiPoolJSON = require('./TrueFiPool.json')
const TrueGBPJSON = require('./TrueGBP.json')
const TrueGoldJSON = require('./TrueGold.json')
const TrueGoldControllerJSON = require('./TrueGoldController.json')
const TrueHKDJSON = require('./TrueHKD.json')
const TrueLenderJSON = require('./TrueLender.json')
const TrueMintableBurnableJSON = require('./TrueMintableBurnable.json')
const TrueRatingAgencyJSON = require('./TrueRatingAgency.json')
const TrueUSDJSON = require('./TrueUSD.json')
const TrustTokenJSON = require('./TrustToken.json')


export const Address = Mars.createArtifact({
  name: "Address",
  constructor: (): void => Mars.Result,
  methods: {
    
  },
  abi: AddressJSON.abi,
  bytecode: AddressJSON.bytecode,
});



export const ArbitraryDistributor = Mars.createArtifact({
  name: "ArbitraryDistributor",
  constructor: (): void => Mars.Result,
  methods: {
    amount: (): Mars.FutureNumber => Mars.Result,
    beneficiary: (): Mars.Future<string> => Mars.Result,
    distribute: (_amount: Mars.NumberLike): Mars.Transaction => Mars.Result,
    empty: (): Mars.Transaction => Mars.Result,
    initialize: (_beneficiary: Mars.AddressLike, _trustToken: Mars.AddressLike, _amount: Mars.NumberLike): Mars.Transaction => Mars.Result,
    owner: (): Mars.Future<string> => Mars.Result,
    remaining: (): Mars.FutureNumber => Mars.Result,
    renounceOwnership: (): Mars.Transaction => Mars.Result,
    transferOwnership: (newOwner: Mars.AddressLike): Mars.Transaction => Mars.Result,
    trustToken: (): Mars.Future<string> => Mars.Result
  },
  abi: ArbitraryDistributorJSON.abi,
  bytecode: ArbitraryDistributorJSON.bytecode,
});



export const BurnableTokenWithBounds = Mars.createArtifact({
  name: "BurnableTokenWithBounds",
  constructor: (): void => Mars.Result,
  methods: {
    allowance: (owner: Mars.AddressLike, spender: Mars.AddressLike): Mars.FutureNumber => Mars.Result,
    approve: (spender: Mars.AddressLike, amount: Mars.NumberLike): Mars.Transaction => Mars.Result,
    balanceOf: (account: Mars.AddressLike): Mars.FutureNumber => Mars.Result,
    burn: (amount: Mars.NumberLike): Mars.Transaction => Mars.Result,
    burnMax: (): Mars.FutureNumber => Mars.Result,
    burnMin: (): Mars.FutureNumber => Mars.Result,
    canBurn: (_: Mars.AddressLike): Mars.FutureBoolean => Mars.Result,
    claimOwnership: (): Mars.Transaction => Mars.Result,
    decimals: (): Mars.Transaction => Mars.Result,
    decreaseAllowance: (spender: Mars.AddressLike, subtractedValue: Mars.NumberLike): Mars.Transaction => Mars.Result,
    increaseAllowance: (spender: Mars.AddressLike, addedValue: Mars.NumberLike): Mars.Transaction => Mars.Result,
    name: (): Mars.Transaction => Mars.Result,
    owner: (): Mars.Future<string> => Mars.Result,
    pendingOwner: (): Mars.Future<string> => Mars.Result,
    reclaimEther: (_to: Mars.AddressLike): Mars.Transaction => Mars.Result,
    reclaimToken: (token: Mars.AddressLike, _to: Mars.AddressLike): Mars.Transaction => Mars.Result,
    setBurnBounds: (_min: Mars.NumberLike, _max: Mars.NumberLike): Mars.Transaction => Mars.Result,
    symbol: (): Mars.Transaction => Mars.Result,
    totalSupply: (): Mars.FutureNumber => Mars.Result,
    transfer: (recipient: Mars.AddressLike, amount: Mars.NumberLike): Mars.Transaction => Mars.Result,
    transferFrom: (sender: Mars.AddressLike, recipient: Mars.AddressLike, amount: Mars.NumberLike): Mars.Transaction => Mars.Result,
    transferOwnership: (newOwner: Mars.AddressLike): Mars.Transaction => Mars.Result
  },
  abi: BurnableTokenWithBoundsJSON.abi,
  bytecode: BurnableTokenWithBoundsJSON.bytecode,
});



export const ClaimableContract = Mars.createArtifact({
  name: "ClaimableContract",
  constructor: (): void => Mars.Result,
  methods: {
    allowance: (_: Mars.AddressLike, __: Mars.AddressLike): Mars.FutureNumber => Mars.Result,
    balanceOf: (_: Mars.AddressLike): Mars.FutureNumber => Mars.Result,
    claimOwnership: (): Mars.Transaction => Mars.Result,
    owner: (): Mars.Future<string> => Mars.Result,
    pendingOwner: (): Mars.Future<string> => Mars.Result,
    totalSupply: (): Mars.FutureNumber => Mars.Result,
    transferOwnership: (newOwner: Mars.AddressLike): Mars.Transaction => Mars.Result
  },
  abi: ClaimableContractJSON.abi,
  bytecode: ClaimableContractJSON.bytecode,
});



export const ClaimableOwnable = Mars.createArtifact({
  name: "ClaimableOwnable",
  constructor: (): void => Mars.Result,
  methods: {
    burnMax: (): Mars.FutureNumber => Mars.Result,
    burnMin: (): Mars.FutureNumber => Mars.Result,
    canBurn: (_: Mars.AddressLike): Mars.FutureBoolean => Mars.Result,
    claimOwnership: (): Mars.Transaction => Mars.Result,
    owner: (): Mars.Future<string> => Mars.Result,
    pendingOwner: (): Mars.Future<string> => Mars.Result,
    transferOwnership: (newOwner: Mars.AddressLike): Mars.Transaction => Mars.Result
  },
  abi: ClaimableOwnableJSON.abi,
  bytecode: ClaimableOwnableJSON.bytecode,
});



export const Context = Mars.createArtifact({
  name: "Context",
  constructor: (): void => Mars.Result,
  methods: {
    
  },
  abi: ContextJSON.abi,
  bytecode: ContextJSON.bytecode,
});



export const DelegateERC20 = Mars.createArtifact({
  name: "DelegateERC20",
  constructor: (): void => Mars.Result,
  methods: {
    allowance: (owner: Mars.AddressLike, spender: Mars.AddressLike): Mars.FutureNumber => Mars.Result,
    approve: (spender: Mars.AddressLike, amount: Mars.NumberLike): Mars.Transaction => Mars.Result,
    balanceOf: (account: Mars.AddressLike): Mars.FutureNumber => Mars.Result,
    burn: (amount: Mars.NumberLike): Mars.Transaction => Mars.Result,
    burnMax: (): Mars.FutureNumber => Mars.Result,
    burnMin: (): Mars.FutureNumber => Mars.Result,
    canBurn: (_: Mars.AddressLike): Mars.FutureBoolean => Mars.Result,
    claimOwnership: (): Mars.Transaction => Mars.Result,
    decimals: (): Mars.Transaction => Mars.Result,
    decreaseAllowance: (spender: Mars.AddressLike, subtractedValue: Mars.NumberLike): Mars.Transaction => Mars.Result,
    delegateAllowance: (owner: Mars.AddressLike, spender: Mars.AddressLike): Mars.FutureNumber => Mars.Result,
    delegateApprove: (spender: Mars.AddressLike, value: Mars.NumberLike, origSender: Mars.AddressLike): Mars.Transaction => Mars.Result,
    delegateBalanceOf: (who: Mars.AddressLike): Mars.FutureNumber => Mars.Result,
    delegateDecreaseApproval: (spender: Mars.AddressLike, subtractedValue: Mars.NumberLike, origSender: Mars.AddressLike): Mars.Transaction => Mars.Result,
    delegateIncreaseApproval: (spender: Mars.AddressLike, addedValue: Mars.NumberLike, origSender: Mars.AddressLike): Mars.Transaction => Mars.Result,
    delegateTotalSupply: (): Mars.FutureNumber => Mars.Result,
    delegateTransfer: (to: Mars.AddressLike, value: Mars.NumberLike, origSender: Mars.AddressLike): Mars.Transaction => Mars.Result,
    delegateTransferFrom: (from: Mars.AddressLike, to: Mars.AddressLike, value: Mars.NumberLike, origSender: Mars.AddressLike): Mars.Transaction => Mars.Result,
    increaseAllowance: (spender: Mars.AddressLike, addedValue: Mars.NumberLike): Mars.Transaction => Mars.Result,
    mint: (account: Mars.AddressLike, amount: Mars.NumberLike): Mars.Transaction => Mars.Result,
    name: (): Mars.Transaction => Mars.Result,
    owner: (): Mars.Future<string> => Mars.Result,
    pendingOwner: (): Mars.Future<string> => Mars.Result,
    reclaimEther: (_to: Mars.AddressLike): Mars.Transaction => Mars.Result,
    reclaimToken: (token: Mars.AddressLike, _to: Mars.AddressLike): Mars.Transaction => Mars.Result,
    setBlacklisted: (account: Mars.AddressLike, _isBlacklisted: Mars.BooleanLike): Mars.Transaction => Mars.Result,
    setBurnBounds: (_min: Mars.NumberLike, _max: Mars.NumberLike): Mars.Transaction => Mars.Result,
    setCanBurn: (account: Mars.AddressLike, _canBurn: Mars.BooleanLike): Mars.Transaction => Mars.Result,
    symbol: (): Mars.Transaction => Mars.Result,
    totalSupply: (): Mars.FutureNumber => Mars.Result,
    transfer: (recipient: Mars.AddressLike, amount: Mars.NumberLike): Mars.Transaction => Mars.Result,
    transferFrom: (sender: Mars.AddressLike, recipient: Mars.AddressLike, amount: Mars.NumberLike): Mars.Transaction => Mars.Result,
    transferOwnership: (newOwner: Mars.AddressLike): Mars.Transaction => Mars.Result
  },
  abi: DelegateERC20JSON.abi,
  bytecode: DelegateERC20JSON.bytecode,
});



export const ERC20 = Mars.createArtifact({
  name: "ERC20",
  constructor: (): void => Mars.Result,
  methods: {
    allowance: (_: Mars.AddressLike, __: Mars.AddressLike): Mars.FutureNumber => Mars.Result,
    approve: (spender: Mars.AddressLike, amount: Mars.NumberLike): Mars.Transaction => Mars.Result,
    balanceOf: (_: Mars.AddressLike): Mars.FutureNumber => Mars.Result,
    decimals: (): Mars.Transaction => Mars.Result,
    decreaseAllowance: (spender: Mars.AddressLike, subtractedValue: Mars.NumberLike): Mars.Transaction => Mars.Result,
    increaseAllowance: (spender: Mars.AddressLike, addedValue: Mars.NumberLike): Mars.Transaction => Mars.Result,
    name: (): Mars.Transaction => Mars.Result,
    symbol: (): Mars.Transaction => Mars.Result,
    totalSupply: (): Mars.FutureNumber => Mars.Result,
    transfer: (recipient: Mars.AddressLike, amount: Mars.NumberLike): Mars.Transaction => Mars.Result,
    transferFrom: (sender: Mars.AddressLike, recipient: Mars.AddressLike, amount: Mars.NumberLike): Mars.Transaction => Mars.Result
  },
  abi: ERC20JSON.abi,
  bytecode: ERC20JSON.bytecode,
});



export const ERC20Burnable = Mars.createArtifact({
  name: "ERC20Burnable",
  constructor: (): void => Mars.Result,
  methods: {
    allowance: (owner: Mars.AddressLike, spender: Mars.AddressLike): Mars.FutureNumber => Mars.Result,
    approve: (spender: Mars.AddressLike, amount: Mars.NumberLike): Mars.Transaction => Mars.Result,
    balanceOf: (account: Mars.AddressLike): Mars.FutureNumber => Mars.Result,
    burn: (amount: Mars.NumberLike): Mars.Transaction => Mars.Result,
    burnFrom: (account: Mars.AddressLike, amount: Mars.NumberLike): Mars.Transaction => Mars.Result,
    decimals: (): Mars.Transaction => Mars.Result,
    decreaseAllowance: (spender: Mars.AddressLike, subtractedValue: Mars.NumberLike): Mars.Transaction => Mars.Result,
    increaseAllowance: (spender: Mars.AddressLike, addedValue: Mars.NumberLike): Mars.Transaction => Mars.Result,
    name: (): Mars.Transaction => Mars.Result,
    symbol: (): Mars.Transaction => Mars.Result,
    totalSupply: (): Mars.FutureNumber => Mars.Result,
    transfer: (recipient: Mars.AddressLike, amount: Mars.NumberLike): Mars.Transaction => Mars.Result,
    transferFrom: (sender: Mars.AddressLike, recipient: Mars.AddressLike, amount: Mars.NumberLike): Mars.Transaction => Mars.Result
  },
  abi: ERC20BurnableJSON.abi,
  bytecode: ERC20BurnableJSON.bytecode,
});



export const ERC20Mock = Mars.createArtifact({
  name: "ERC20Mock",
  constructor: (initialAccount: Mars.AddressLike, initialBalance: Mars.NumberLike): void => Mars.Result,
  methods: {
    allowance: (owner: Mars.AddressLike, spender: Mars.AddressLike): Mars.FutureNumber => Mars.Result,
    approve: (spender: Mars.AddressLike, amount: Mars.NumberLike): Mars.Transaction => Mars.Result,
    approveInternal: (owner: Mars.AddressLike, spender: Mars.AddressLike, value: Mars.NumberLike): Mars.Transaction => Mars.Result,
    balanceOf: (account: Mars.AddressLike): Mars.FutureNumber => Mars.Result,
    burn: (account: Mars.AddressLike, amount: Mars.NumberLike): Mars.Transaction => Mars.Result,
    decimals: (): Mars.FutureNumber => Mars.Result,
    decreaseAllowance: (spender: Mars.AddressLike, subtractedValue: Mars.NumberLike): Mars.Transaction => Mars.Result,
    increaseAllowance: (spender: Mars.AddressLike, addedValue: Mars.NumberLike): Mars.Transaction => Mars.Result,
    mint: (account: Mars.AddressLike, amount: Mars.NumberLike): Mars.Transaction => Mars.Result,
    name: (): Mars.Future<string> => Mars.Result,
    symbol: (): Mars.Future<string> => Mars.Result,
    totalSupply: (): Mars.FutureNumber => Mars.Result,
    transfer: (recipient: Mars.AddressLike, amount: Mars.NumberLike): Mars.Transaction => Mars.Result,
    transferFrom: (sender: Mars.AddressLike, recipient: Mars.AddressLike, amount: Mars.NumberLike): Mars.Transaction => Mars.Result,
    transferInternal: (from: Mars.AddressLike, to: Mars.AddressLike, value: Mars.NumberLike): Mars.Transaction => Mars.Result
  },
  abi: ERC20MockJSON.abi,
  bytecode: ERC20MockJSON.bytecode,
});



export const ForceEther = Mars.createArtifact({
  name: "ForceEther",
  constructor: (): void => Mars.Result,
  methods: {
    destroyAndSend: (_recipient: Mars.AddressLike): Mars.Transaction => Mars.Result
  },
  abi: ForceEtherJSON.abi,
  bytecode: ForceEtherJSON.bytecode,
});



export const GasRefund = Mars.createArtifact({
  name: "GasRefund",
  constructor: (): void => Mars.Result,
  methods: {
    remainingGasRefundPool: (): Mars.FutureNumber => Mars.Result,
    remainingSheepRefundPool: (): Mars.FutureNumber => Mars.Result
  },
  abi: GasRefundJSON.abi,
  bytecode: GasRefundJSON.bytecode,
});



export const IArbitraryDistributor = Mars.createArtifact({
  name: "IArbitraryDistributor",
  constructor: (): void => Mars.Result,
  methods: {
    amount: (): Mars.Transaction => Mars.Result,
    distribute: (_amount: Mars.NumberLike): Mars.Transaction => Mars.Result,
    empty: (): Mars.Transaction => Mars.Result,
    remaining: (): Mars.Transaction => Mars.Result
  },
  abi: IArbitraryDistributorJSON.abi,
  bytecode: IArbitraryDistributorJSON.bytecode,
});



export const IBurnableERC20 = Mars.createArtifact({
  name: "IBurnableERC20",
  constructor: (): void => Mars.Result,
  methods: {
    allowance: (owner: Mars.AddressLike, spender: Mars.AddressLike): Mars.FutureNumber => Mars.Result,
    approve: (spender: Mars.AddressLike, amount: Mars.NumberLike): Mars.Transaction => Mars.Result,
    balanceOf: (account: Mars.AddressLike): Mars.FutureNumber => Mars.Result,
    burn: (amount: Mars.NumberLike): Mars.Transaction => Mars.Result,
    totalSupply: (): Mars.FutureNumber => Mars.Result,
    transfer: (recipient: Mars.AddressLike, amount: Mars.NumberLike): Mars.Transaction => Mars.Result,
    transferFrom: (sender: Mars.AddressLike, recipient: Mars.AddressLike, amount: Mars.NumberLike): Mars.Transaction => Mars.Result
  },
  abi: IBurnableERC20JSON.abi,
  bytecode: IBurnableERC20JSON.bytecode,
});



export const ICurve = Mars.createArtifact({
  name: "ICurve",
  constructor: (): void => Mars.Result,
  methods: {
    calc_token_amount: (amounts: Mars.NumberLike, deposit: Mars.BooleanLike): Mars.FutureNumber => Mars.Result,
    get_virtual_price: (): Mars.FutureNumber => Mars.Result
  },
  abi: ICurveJSON.abi,
  bytecode: ICurveJSON.bytecode,
});



export const ICurveGauge = Mars.createArtifact({
  name: "ICurveGauge",
  constructor: (): void => Mars.Result,
  methods: {
    balanceOf: (depositor: Mars.AddressLike): Mars.FutureNumber => Mars.Result,
    deposit: (amount: Mars.NumberLike): Mars.Transaction => Mars.Result,
    minter: (): Mars.Transaction => Mars.Result,
    withdraw: (amount: Mars.NumberLike): Mars.Transaction => Mars.Result
  },
  abi: ICurveGaugeJSON.abi,
  bytecode: ICurveGaugeJSON.bytecode,
});



export const ICurveMinter = Mars.createArtifact({
  name: "ICurveMinter",
  constructor: (): void => Mars.Result,
  methods: {
    mint: (gauge: Mars.AddressLike): Mars.Transaction => Mars.Result,
    token: (): Mars.Future<string> => Mars.Result
  },
  abi: ICurveMinterJSON.abi,
  bytecode: ICurveMinterJSON.bytecode,
});



export const ICurvePool = Mars.createArtifact({
  name: "ICurvePool",
  constructor: (): void => Mars.Result,
  methods: {
    add_liquidity: (amounts: Mars.NumberLike, min_mint_amount: Mars.NumberLike): Mars.Transaction => Mars.Result,
    calc_withdraw_one_coin: (_token_amount: Mars.NumberLike, i: Mars.NumberLike): Mars.FutureNumber => Mars.Result,
    coins: (id: Mars.NumberLike): Mars.Future<string> => Mars.Result,
    curve: (): Mars.Future<string> => Mars.Result,
    remove_liquidity_one_coin: (_token_amount: Mars.NumberLike, i: Mars.NumberLike, min_amount: Mars.NumberLike, donate_dust: Mars.BooleanLike): Mars.Transaction => Mars.Result,
    token: (): Mars.Future<string> => Mars.Result
  },
  abi: ICurvePoolJSON.abi,
  bytecode: ICurvePoolJSON.bytecode,
});



export const IDelegateERC20 = Mars.createArtifact({
  name: "IDelegateERC20",
  constructor: (): void => Mars.Result,
  methods: {
    delegateAllowance: (owner: Mars.AddressLike, spender: Mars.AddressLike): Mars.FutureNumber => Mars.Result,
    delegateApprove: (spender: Mars.AddressLike, value: Mars.NumberLike, origSender: Mars.AddressLike): Mars.Transaction => Mars.Result,
    delegateBalanceOf: (who: Mars.AddressLike): Mars.FutureNumber => Mars.Result,
    delegateDecreaseApproval: (spender: Mars.AddressLike, subtractedValue: Mars.NumberLike, origSender: Mars.AddressLike): Mars.Transaction => Mars.Result,
    delegateIncreaseApproval: (spender: Mars.AddressLike, addedValue: Mars.NumberLike, origSender: Mars.AddressLike): Mars.Transaction => Mars.Result,
    delegateTotalSupply: (): Mars.FutureNumber => Mars.Result,
    delegateTransfer: (to: Mars.AddressLike, value: Mars.NumberLike, origSender: Mars.AddressLike): Mars.Transaction => Mars.Result,
    delegateTransferFrom: (from: Mars.AddressLike, to: Mars.AddressLike, value: Mars.NumberLike, origSender: Mars.AddressLike): Mars.Transaction => Mars.Result
  },
  abi: IDelegateERC20JSON.abi,
  bytecode: IDelegateERC20JSON.bytecode,
});



export const IERC20 = Mars.createArtifact({
  name: "IERC20",
  constructor: (): void => Mars.Result,
  methods: {
    allowance: (owner: Mars.AddressLike, spender: Mars.AddressLike): Mars.FutureNumber => Mars.Result,
    approve: (spender: Mars.AddressLike, amount: Mars.NumberLike): Mars.Transaction => Mars.Result,
    balanceOf: (account: Mars.AddressLike): Mars.FutureNumber => Mars.Result,
    totalSupply: (): Mars.FutureNumber => Mars.Result,
    transfer: (recipient: Mars.AddressLike, amount: Mars.NumberLike): Mars.Transaction => Mars.Result,
    transferFrom: (sender: Mars.AddressLike, recipient: Mars.AddressLike, amount: Mars.NumberLike): Mars.Transaction => Mars.Result
  },
  abi: IERC20JSON.abi,
  bytecode: IERC20JSON.bytecode,
});



export const IHasOwner = Mars.createArtifact({
  name: "IHasOwner",
  constructor: (): void => Mars.Result,
  methods: {
    claimOwnership: (): Mars.Transaction => Mars.Result,
    transferOwnership: (newOwner: Mars.AddressLike): Mars.Transaction => Mars.Result
  },
  abi: IHasOwnerJSON.abi,
  bytecode: IHasOwnerJSON.bytecode,
});



export const IHook = Mars.createArtifact({
  name: "IHook",
  constructor: (): void => Mars.Result,
  methods: {
    hook: (): Mars.Transaction => Mars.Result
  },
  abi: IHookJSON.abi,
  bytecode: IHookJSON.bytecode,
});



export const ILoanFactory = Mars.createArtifact({
  name: "ILoanFactory",
  constructor: (): void => Mars.Result,
  methods: {
    createLoanToken: (_borrower: Mars.AddressLike, _amount: Mars.NumberLike, _term: Mars.NumberLike, _apy: Mars.NumberLike): Mars.Transaction => Mars.Result,
    isLoanToken: (_: Mars.AddressLike): Mars.FutureBoolean => Mars.Result
  },
  abi: ILoanFactoryJSON.abi,
  bytecode: ILoanFactoryJSON.bytecode,
});



export const ILoanToken = Mars.createArtifact({
  name: "ILoanToken",
  constructor: (): void => Mars.Result,
  methods: {
    allowTransfer: (account: Mars.AddressLike, _status: Mars.BooleanLike): Mars.Transaction => Mars.Result,
    allowance: (owner: Mars.AddressLike, spender: Mars.AddressLike): Mars.FutureNumber => Mars.Result,
    amount: (): Mars.FutureNumber => Mars.Result,
    approve: (spender: Mars.AddressLike, amount: Mars.NumberLike): Mars.Transaction => Mars.Result,
    apy: (): Mars.FutureNumber => Mars.Result,
    balance: (): Mars.FutureNumber => Mars.Result,
    balanceOf: (account: Mars.AddressLike): Mars.FutureNumber => Mars.Result,
    borrower: (): Mars.Future<string> => Mars.Result,
    borrowerFee: (): Mars.FutureNumber => Mars.Result,
    close: (): Mars.Transaction => Mars.Result,
    debt: (): Mars.FutureNumber => Mars.Result,
    fund: (): Mars.Transaction => Mars.Result,
    getParameters: (): Mars.FutureNumber => Mars.Result,
    isLoanToken: (): Mars.Transaction => Mars.Result,
    lender: (): Mars.Future<string> => Mars.Result,
    profit: (): Mars.FutureNumber => Mars.Result,
    receivedAmount: (): Mars.FutureNumber => Mars.Result,
    redeem: (_amount: Mars.NumberLike): Mars.Transaction => Mars.Result,
    repaid: (): Mars.FutureNumber => Mars.Result,
    repay: (_sender: Mars.AddressLike, _amount: Mars.NumberLike): Mars.Transaction => Mars.Result,
    start: (): Mars.FutureNumber => Mars.Result,
    status: (): Mars.FutureNumber => Mars.Result,
    term: (): Mars.FutureNumber => Mars.Result,
    totalSupply: (): Mars.FutureNumber => Mars.Result,
    transfer: (recipient: Mars.AddressLike, amount: Mars.NumberLike): Mars.Transaction => Mars.Result,
    transferFrom: (sender: Mars.AddressLike, recipient: Mars.AddressLike, amount: Mars.NumberLike): Mars.Transaction => Mars.Result,
    value: (_balance: Mars.NumberLike): Mars.FutureNumber => Mars.Result,
    withdraw: (_beneficiary: Mars.AddressLike): Mars.Transaction => Mars.Result
  },
  abi: ILoanTokenJSON.abi,
  bytecode: ILoanTokenJSON.bytecode,
});



export const IOwnable = Mars.createArtifact({
  name: "IOwnable",
  constructor: (): void => Mars.Result,
  methods: {
    transferOwnership: (newOwner: Mars.AddressLike): Mars.Transaction => Mars.Result
  },
  abi: IOwnableJSON.abi,
  bytecode: IOwnableJSON.bytecode,
});



export const IOwnedUpgradeabilityProxy = Mars.createArtifact({
  name: "IOwnedUpgradeabilityProxy",
  constructor: (): void => Mars.Result,
  methods: {
    claimProxyOwnership: (): Mars.Transaction => Mars.Result,
    implementation: (): Mars.Future<string> => Mars.Result,
    pendingProxyOwner: (): Mars.Future<string> => Mars.Result,
    proxyOwner: (): Mars.Future<string> => Mars.Result,
    transferProxyOwnership: (newOwner: Mars.AddressLike): Mars.Transaction => Mars.Result,
    upgradeTo: (implementation: Mars.AddressLike): Mars.Transaction => Mars.Result
  },
  abi: IOwnedUpgradeabilityProxyJSON.abi,
  bytecode: IOwnedUpgradeabilityProxyJSON.bytecode,
});



export const IReclaimerToken = Mars.createArtifact({
  name: "IReclaimerToken",
  constructor: (): void => Mars.Result,
  methods: {
    reclaimEther: (_to: Mars.AddressLike): Mars.Transaction => Mars.Result,
    reclaimToken: (token: Mars.AddressLike, _to: Mars.AddressLike): Mars.Transaction => Mars.Result
  },
  abi: IReclaimerTokenJSON.abi,
  bytecode: IReclaimerTokenJSON.bytecode,
});



export const IRegistry = Mars.createArtifact({
  name: "IRegistry",
  constructor: (): void => Mars.Result,
  methods: {
    claimOwnership: (): Mars.Transaction => Mars.Result,
    getAttribute: (_who: Mars.AddressLike, _attribute: Mars.BytesLike): Mars.FutureNumber => Mars.Result,
    getAttributeAdminAddr: (_who: Mars.AddressLike, _attribute: Mars.BytesLike): Mars.Future<string> => Mars.Result,
    getAttributeTimestamp: (_who: Mars.AddressLike, _attribute: Mars.BytesLike): Mars.FutureNumber => Mars.Result,
    getAttributeValue: (_who: Mars.AddressLike, _attribute: Mars.BytesLike): Mars.FutureNumber => Mars.Result,
    hasAttribute: (_who: Mars.AddressLike, _attribute: Mars.BytesLike): Mars.FutureBoolean => Mars.Result,
    reclaimEther: (_to: Mars.AddressLike): Mars.Transaction => Mars.Result,
    reclaimToken: (token: Mars.AddressLike, _to: Mars.AddressLike): Mars.Transaction => Mars.Result,
    setAttribute: (_who: Mars.AddressLike, _attribute: Mars.BytesLike, _value: Mars.NumberLike, _notes: Mars.BytesLike): Mars.Transaction => Mars.Result,
    setAttributeValue: (_who: Mars.AddressLike, _attribute: Mars.BytesLike, _value: Mars.NumberLike): Mars.Transaction => Mars.Result,
    subscribe: (_attribute: Mars.BytesLike, _syncer: Mars.AddressLike): Mars.Transaction => Mars.Result,
    subscriberCount: (_attribute: Mars.BytesLike): Mars.FutureNumber => Mars.Result,
    syncAttribute: (_attribute: Mars.BytesLike, _startIndex: Mars.NumberLike, _addresses: Mars.MaybeFuture<Mars.AddressLike[]>): Mars.Transaction => Mars.Result,
    transferOwnership: (newOwner: Mars.AddressLike): Mars.Transaction => Mars.Result,
    unsubscribe: (_attribute: Mars.BytesLike, _index: Mars.NumberLike): Mars.Transaction => Mars.Result
  },
  abi: IRegistryJSON.abi,
  bytecode: IRegistryJSON.bytecode,
});



export const IRegistryClone = Mars.createArtifact({
  name: "IRegistryClone",
  constructor: (): void => Mars.Result,
  methods: {
    syncAttributeValue: (_who: Mars.AddressLike, _attribute: Mars.BytesLike, _value: Mars.NumberLike): Mars.Transaction => Mars.Result
  },
  abi: IRegistryCloneJSON.abi,
  bytecode: IRegistryCloneJSON.bytecode,
});



export const ITrueCurrency = Mars.createArtifact({
  name: "ITrueCurrency",
  constructor: (): void => Mars.Result,
  methods: {
    allowance: (owner: Mars.AddressLike, spender: Mars.AddressLike): Mars.FutureNumber => Mars.Result,
    approve: (spender: Mars.AddressLike, amount: Mars.NumberLike): Mars.Transaction => Mars.Result,
    balanceOf: (account: Mars.AddressLike): Mars.FutureNumber => Mars.Result,
    claimOwnership: (): Mars.Transaction => Mars.Result,
    mint: (account: Mars.AddressLike, amount: Mars.NumberLike): Mars.Transaction => Mars.Result,
    reclaimEther: (_to: Mars.AddressLike): Mars.Transaction => Mars.Result,
    reclaimToken: (token: Mars.AddressLike, _to: Mars.AddressLike): Mars.Transaction => Mars.Result,
    refundGas: (amount: Mars.NumberLike): Mars.Transaction => Mars.Result,
    setBlacklisted: (account: Mars.AddressLike, _isBlacklisted: Mars.BooleanLike): Mars.Transaction => Mars.Result,
    setBurnBounds: (_min: Mars.NumberLike, _max: Mars.NumberLike): Mars.Transaction => Mars.Result,
    setCanBurn: (account: Mars.AddressLike, _canBurn: Mars.BooleanLike): Mars.Transaction => Mars.Result,
    totalSupply: (): Mars.FutureNumber => Mars.Result,
    transfer: (recipient: Mars.AddressLike, amount: Mars.NumberLike): Mars.Transaction => Mars.Result,
    transferFrom: (sender: Mars.AddressLike, recipient: Mars.AddressLike, amount: Mars.NumberLike): Mars.Transaction => Mars.Result,
    transferOwnership: (newOwner: Mars.AddressLike): Mars.Transaction => Mars.Result
  },
  abi: ITrueCurrencyJSON.abi,
  bytecode: ITrueCurrencyJSON.bytecode,
});



export const ITrueDistributor = Mars.createArtifact({
  name: "ITrueDistributor",
  constructor: (): void => Mars.Result,
  methods: {
    distribute: (): Mars.Transaction => Mars.Result,
    empty: (): Mars.Transaction => Mars.Result,
    farm: (): Mars.Future<string> => Mars.Result,
    nextDistribution: (): Mars.FutureNumber => Mars.Result,
    trustToken: (): Mars.Future<string> => Mars.Result
  },
  abi: ITrueDistributorJSON.abi,
  bytecode: ITrueDistributorJSON.bytecode,
});



export const ITrueFarm = Mars.createArtifact({
  name: "ITrueFarm",
  constructor: (): void => Mars.Result,
  methods: {
    claim: (): Mars.Transaction => Mars.Result,
    exit: (amount: Mars.NumberLike): Mars.Transaction => Mars.Result,
    name: (): Mars.Future<string> => Mars.Result,
    stake: (amount: Mars.NumberLike): Mars.Transaction => Mars.Result,
    stakingToken: (): Mars.Future<string> => Mars.Result,
    totalStaked: (): Mars.FutureNumber => Mars.Result,
    trueDistributor: (): Mars.Future<string> => Mars.Result,
    trustToken: (): Mars.Future<string> => Mars.Result,
    unstake: (amount: Mars.NumberLike): Mars.Transaction => Mars.Result
  },
  abi: ITrueFarmJSON.abi,
  bytecode: ITrueFarmJSON.bytecode,
});



export const ITrueFiPool = Mars.createArtifact({
  name: "ITrueFiPool",
  constructor: (): void => Mars.Result,
  methods: {
    allowance: (owner: Mars.AddressLike, spender: Mars.AddressLike): Mars.FutureNumber => Mars.Result,
    approve: (spender: Mars.AddressLike, amount: Mars.NumberLike): Mars.Transaction => Mars.Result,
    balanceOf: (account: Mars.AddressLike): Mars.FutureNumber => Mars.Result,
    borrow: (amount: Mars.NumberLike, amountWithoutFee: Mars.NumberLike): Mars.Transaction => Mars.Result,
    currencyToken: (): Mars.Future<string> => Mars.Result,
    exit: (amount: Mars.NumberLike): Mars.Transaction => Mars.Result,
    join: (amount: Mars.NumberLike): Mars.Transaction => Mars.Result,
    repay: (amount: Mars.NumberLike): Mars.Transaction => Mars.Result,
    totalSupply: (): Mars.FutureNumber => Mars.Result,
    transfer: (recipient: Mars.AddressLike, amount: Mars.NumberLike): Mars.Transaction => Mars.Result,
    transferFrom: (sender: Mars.AddressLike, recipient: Mars.AddressLike, amount: Mars.NumberLike): Mars.Transaction => Mars.Result
  },
  abi: ITrueFiPoolJSON.abi,
  bytecode: ITrueFiPoolJSON.bytecode,
});



export const ITrueLender = Mars.createArtifact({
  name: "ITrueLender",
  constructor: (): void => Mars.Result,
  methods: {
    distribute: (recipient: Mars.AddressLike, numerator: Mars.NumberLike, denominator: Mars.NumberLike): Mars.Transaction => Mars.Result,
    value: (): Mars.FutureNumber => Mars.Result
  },
  abi: ITrueLenderJSON.abi,
  bytecode: ITrueLenderJSON.bytecode,
});



export const ITrueRatingAgency = Mars.createArtifact({
  name: "ITrueRatingAgency",
  constructor: (): void => Mars.Result,
  methods: {
    claim: (id: Mars.AddressLike, voter: Mars.AddressLike): Mars.Transaction => Mars.Result,
    getResults: (id: Mars.AddressLike): Mars.FutureNumber => Mars.Result,
    no: (id: Mars.AddressLike, stake: Mars.NumberLike): Mars.Transaction => Mars.Result,
    retract: (id: Mars.AddressLike): Mars.Transaction => Mars.Result,
    submit: (id: Mars.AddressLike): Mars.Transaction => Mars.Result,
    withdraw: (id: Mars.AddressLike, stake: Mars.NumberLike): Mars.Transaction => Mars.Result,
    yes: (id: Mars.AddressLike, stake: Mars.NumberLike): Mars.Transaction => Mars.Result
  },
  abi: ITrueRatingAgencyJSON.abi,
  bytecode: ITrueRatingAgencyJSON.bytecode,
});



export const IUniswapRouter = Mars.createArtifact({
  name: "IUniswapRouter",
  constructor: (): void => Mars.Result,
  methods: {
    swapExactTokensForTokens: (amountIn: Mars.NumberLike, amountOutMin: Mars.NumberLike, path: Mars.MaybeFuture<Mars.AddressLike[]>, to: Mars.AddressLike, deadline: Mars.NumberLike): Mars.Transaction => Mars.Result
  },
  abi: IUniswapRouterJSON.abi,
  bytecode: IUniswapRouterJSON.bytecode,
});



export const IUniswapV2Factory = Mars.createArtifact({
  name: "IUniswapV2Factory",
  constructor: (): void => Mars.Result,
  methods: {
    allPairs: (_: Mars.NumberLike): Mars.Future<string> => Mars.Result,
    allPairsLength: (): Mars.FutureNumber => Mars.Result,
    createPair: (tokenA: Mars.AddressLike, tokenB: Mars.AddressLike): Mars.Transaction => Mars.Result,
    feeTo: (): Mars.Future<string> => Mars.Result,
    feeToSetter: (): Mars.Future<string> => Mars.Result,
    getPair: (tokenA: Mars.AddressLike, tokenB: Mars.AddressLike): Mars.Future<string> => Mars.Result
  },
  abi: IUniswapV2FactoryJSON.abi,
  bytecode: IUniswapV2FactoryJSON.bytecode,
});



export const IYToken = Mars.createArtifact({
  name: "IYToken",
  constructor: (): void => Mars.Result,
  methods: {
    allowance: (owner: Mars.AddressLike, spender: Mars.AddressLike): Mars.FutureNumber => Mars.Result,
    approve: (spender: Mars.AddressLike, amount: Mars.NumberLike): Mars.Transaction => Mars.Result,
    balanceOf: (account: Mars.AddressLike): Mars.FutureNumber => Mars.Result,
    getPricePerFullShare: (): Mars.FutureNumber => Mars.Result,
    totalSupply: (): Mars.FutureNumber => Mars.Result,
    transfer: (recipient: Mars.AddressLike, amount: Mars.NumberLike): Mars.Transaction => Mars.Result,
    transferFrom: (sender: Mars.AddressLike, recipient: Mars.AddressLike, amount: Mars.NumberLike): Mars.Transaction => Mars.Result
  },
  abi: IYTokenJSON.abi,
  bytecode: IYTokenJSON.bytecode,
});



export const Initializable = Mars.createArtifact({
  name: "Initializable",
  constructor: (): void => Mars.Result,
  methods: {
    
  },
  abi: InitializableJSON.abi,
  bytecode: InitializableJSON.bytecode,
});



export const LinearTrueDistributor = Mars.createArtifact({
  name: "LinearTrueDistributor",
  constructor: (): void => Mars.Result,
  methods: {
    distribute: (): Mars.Transaction => Mars.Result,
    distributed: (): Mars.FutureNumber => Mars.Result,
    distributionStart: (): Mars.FutureNumber => Mars.Result,
    duration: (): Mars.FutureNumber => Mars.Result,
    empty: (): Mars.Transaction => Mars.Result,
    farm: (): Mars.Future<string> => Mars.Result,
    initialize: (_distributionStart: Mars.NumberLike, _duration: Mars.NumberLike, _amount: Mars.NumberLike, _trustToken: Mars.AddressLike): Mars.Transaction => Mars.Result,
    lastDistribution: (): Mars.FutureNumber => Mars.Result,
    nextDistribution: (): Mars.FutureNumber => Mars.Result,
    owner: (): Mars.Future<string> => Mars.Result,
    renounceOwnership: (): Mars.Transaction => Mars.Result,
    setFarm: (newFarm: Mars.AddressLike): Mars.Transaction => Mars.Result,
    totalAmount: (): Mars.FutureNumber => Mars.Result,
    transferOwnership: (newOwner: Mars.AddressLike): Mars.Transaction => Mars.Result,
    trustToken: (): Mars.Future<string> => Mars.Result
  },
  abi: LinearTrueDistributorJSON.abi,
  bytecode: LinearTrueDistributorJSON.bytecode,
});



export const LoanFactory = Mars.createArtifact({
  name: "LoanFactory",
  constructor: (): void => Mars.Result,
  methods: {
    createLoanToken: (_borrower: Mars.AddressLike, _amount: Mars.NumberLike, _term: Mars.NumberLike, _apy: Mars.NumberLike): Mars.Transaction => Mars.Result,
    currencyToken: (): Mars.Future<string> => Mars.Result,
    initialize: (_currencyToken: Mars.AddressLike): Mars.Transaction => Mars.Result,
    isLoanToken: (_: Mars.AddressLike): Mars.FutureBoolean => Mars.Result
  },
  abi: LoanFactoryJSON.abi,
  bytecode: LoanFactoryJSON.bytecode,
});



export const LoanToken = Mars.createArtifact({
  name: "LoanToken",
  constructor: (_currencyToken: Mars.AddressLike, _borrower: Mars.AddressLike, _amount: Mars.NumberLike, _term: Mars.NumberLike, _apy: Mars.NumberLike): void => Mars.Result,
  methods: {
    allowTransfer: (account: Mars.AddressLike, _status: Mars.BooleanLike): Mars.Transaction => Mars.Result,
    allowance: (owner: Mars.AddressLike, spender: Mars.AddressLike): Mars.FutureNumber => Mars.Result,
    amount: (): Mars.FutureNumber => Mars.Result,
    approve: (spender: Mars.AddressLike, amount: Mars.NumberLike): Mars.Transaction => Mars.Result,
    apy: (): Mars.FutureNumber => Mars.Result,
    balance: (): Mars.FutureNumber => Mars.Result,
    balanceOf: (account: Mars.AddressLike): Mars.FutureNumber => Mars.Result,
    borrower: (): Mars.Future<string> => Mars.Result,
    borrowerFee: (): Mars.FutureNumber => Mars.Result,
    canTransfer: (_: Mars.AddressLike): Mars.FutureBoolean => Mars.Result,
    close: (): Mars.Transaction => Mars.Result,
    currencyToken: (): Mars.Future<string> => Mars.Result,
    debt: (): Mars.FutureNumber => Mars.Result,
    decimals: (): Mars.FutureNumber => Mars.Result,
    decreaseAllowance: (spender: Mars.AddressLike, subtractedValue: Mars.NumberLike): Mars.Transaction => Mars.Result,
    fund: (): Mars.Transaction => Mars.Result,
    getParameters: (): Mars.FutureNumber => Mars.Result,
    increaseAllowance: (spender: Mars.AddressLike, addedValue: Mars.NumberLike): Mars.Transaction => Mars.Result,
    isLoanToken: (): Mars.Transaction => Mars.Result,
    lender: (): Mars.Future<string> => Mars.Result,
    name: (): Mars.Future<string> => Mars.Result,
    profit: (): Mars.FutureNumber => Mars.Result,
    receivedAmount: (): Mars.FutureNumber => Mars.Result,
    redeem: (_amount: Mars.NumberLike): Mars.Transaction => Mars.Result,
    redeemed: (): Mars.FutureNumber => Mars.Result,
    repaid: (): Mars.FutureNumber => Mars.Result,
    repay: (_sender: Mars.AddressLike, _amount: Mars.NumberLike): Mars.Transaction => Mars.Result,
    start: (): Mars.FutureNumber => Mars.Result,
    status: (): Mars.FutureNumber => Mars.Result,
    symbol: (): Mars.Future<string> => Mars.Result,
    term: (): Mars.FutureNumber => Mars.Result,
    totalSupply: (): Mars.FutureNumber => Mars.Result,
    transfer: (recipient: Mars.AddressLike, amount: Mars.NumberLike): Mars.Transaction => Mars.Result,
    transferFrom: (sender: Mars.AddressLike, recipient: Mars.AddressLike, amount: Mars.NumberLike): Mars.Transaction => Mars.Result,
    value: (_balance: Mars.NumberLike): Mars.FutureNumber => Mars.Result,
    withdraw: (_beneficiary: Mars.AddressLike): Mars.Transaction => Mars.Result
  },
  abi: LoanTokenJSON.abi,
  bytecode: LoanTokenJSON.bytecode,
});



export const MockCurve = Mars.createArtifact({
  name: "MockCurve",
  constructor: (): void => Mars.Result,
  methods: {
    calc_token_amount: (amounts: Mars.NumberLike, _: Mars.BooleanLike): Mars.FutureNumber => Mars.Result,
    get_virtual_price: (): Mars.FutureNumber => Mars.Result,
    set_withdraw_price: (price: Mars.NumberLike): Mars.Transaction => Mars.Result,
    sharePrice: (): Mars.FutureNumber => Mars.Result
  },
  abi: MockCurveJSON.abi,
  bytecode: MockCurveJSON.bytecode,
});



export const MockCurveGauge = Mars.createArtifact({
  name: "MockCurveGauge",
  constructor: (): void => Mars.Result,
  methods: {
    balanceOf: (depositor: Mars.AddressLike): Mars.FutureNumber => Mars.Result,
    deposit: (amount: Mars.NumberLike): Mars.Transaction => Mars.Result,
    minter: (): Mars.Transaction => Mars.Result,
    withdraw: (amount: Mars.NumberLike): Mars.Transaction => Mars.Result
  },
  abi: MockCurveGaugeJSON.abi,
  bytecode: MockCurveGaugeJSON.bytecode,
});



export const MockCurveMinter = Mars.createArtifact({
  name: "MockCurveMinter",
  constructor: (): void => Mars.Result,
  methods: {
    mint: (gauge: Mars.AddressLike): Mars.Transaction => Mars.Result,
    token: (): Mars.Future<string> => Mars.Result
  },
  abi: MockCurveMinterJSON.abi,
  bytecode: MockCurveMinterJSON.bytecode,
});



export const MockCurvePool = Mars.createArtifact({
  name: "MockCurvePool",
  constructor: (): void => Mars.Result,
  methods: {
    add_liquidity: (amounts: Mars.NumberLike, _: Mars.NumberLike): Mars.Transaction => Mars.Result,
    calc_withdraw_one_coin: (_: Mars.NumberLike, __: Mars.NumberLike): Mars.FutureNumber => Mars.Result,
    coins: (_: Mars.NumberLike): Mars.Future<string> => Mars.Result,
    curve: (): Mars.Future<string> => Mars.Result,
    initialize: (_token: Mars.AddressLike): Mars.Transaction => Mars.Result,
    remove_liquidity_one_coin: (_token_amount: Mars.NumberLike, _: Mars.NumberLike, __: Mars.NumberLike, ___: Mars.BooleanLike): Mars.Transaction => Mars.Result,
    set_withdraw_price: (price: Mars.NumberLike): Mars.Transaction => Mars.Result,
    token: (): Mars.Future<string> => Mars.Result
  },
  abi: MockCurvePoolJSON.abi,
  bytecode: MockCurvePoolJSON.bytecode,
});



export const MockDelegateERC20 = Mars.createArtifact({
  name: "MockDelegateERC20",
  constructor: (): void => Mars.Result,
  methods: {
    allowance: (_owner: Mars.AddressLike, spender: Mars.AddressLike): Mars.FutureNumber => Mars.Result,
    approve: (spender: Mars.AddressLike, value: Mars.NumberLike): Mars.Transaction => Mars.Result,
    balanceOf: (who: Mars.AddressLike): Mars.FutureNumber => Mars.Result,
    burnMax: (): Mars.FutureNumber => Mars.Result,
    burnMin: (): Mars.FutureNumber => Mars.Result,
    canBurn: (_: Mars.AddressLike): Mars.FutureBoolean => Mars.Result,
    claimOwnership: (): Mars.Transaction => Mars.Result,
    decimals: (): Mars.Transaction => Mars.Result,
    decreaseAllowance: (spender: Mars.AddressLike, subtractedValue: Mars.NumberLike): Mars.Transaction => Mars.Result,
    decreaseApproval: (spender: Mars.AddressLike, subtractedValue: Mars.NumberLike): Mars.Transaction => Mars.Result,
    delegate: (): Mars.Future<string> => Mars.Result,
    delegateToNewContract: (newContract: Mars.AddressLike): Mars.Transaction => Mars.Result,
    increaseAllowance: (spender: Mars.AddressLike, addedValue: Mars.NumberLike): Mars.Transaction => Mars.Result,
    increaseApproval: (spender: Mars.AddressLike, addedValue: Mars.NumberLike): Mars.Transaction => Mars.Result,
    name: (): Mars.Transaction => Mars.Result,
    owner: (): Mars.Future<string> => Mars.Result,
    pendingOwner: (): Mars.Future<string> => Mars.Result,
    symbol: (): Mars.Transaction => Mars.Result,
    totalSupply: (): Mars.FutureNumber => Mars.Result,
    transfer: (to: Mars.AddressLike, value: Mars.NumberLike): Mars.Transaction => Mars.Result,
    transferFrom: (from: Mars.AddressLike, to: Mars.AddressLike, value: Mars.NumberLike): Mars.Transaction => Mars.Result,
    transferOwnership: (newOwner: Mars.AddressLike): Mars.Transaction => Mars.Result
  },
  abi: MockDelegateERC20JSON.abi,
  bytecode: MockDelegateERC20JSON.bytecode,
});



export const MockERC20 = Mars.createArtifact({
  name: "MockERC20",
  constructor: (name: Mars.StringLike, symbol: Mars.StringLike): void => Mars.Result,
  methods: {
    allowance: (owner: Mars.AddressLike, spender: Mars.AddressLike): Mars.FutureNumber => Mars.Result,
    approve: (spender: Mars.AddressLike, amount: Mars.NumberLike): Mars.Transaction => Mars.Result,
    balanceOf: (account: Mars.AddressLike): Mars.FutureNumber => Mars.Result,
    burn: (_value: Mars.NumberLike): Mars.Transaction => Mars.Result,
    decimals: (): Mars.FutureNumber => Mars.Result,
    decreaseAllowance: (spender: Mars.AddressLike, subtractedValue: Mars.NumberLike): Mars.Transaction => Mars.Result,
    increaseAllowance: (spender: Mars.AddressLike, addedValue: Mars.NumberLike): Mars.Transaction => Mars.Result,
    mint: (_to: Mars.AddressLike, _value: Mars.NumberLike): Mars.Transaction => Mars.Result,
    name: (): Mars.Future<string> => Mars.Result,
    symbol: (): Mars.Future<string> => Mars.Result,
    totalSupply: (): Mars.FutureNumber => Mars.Result,
    transfer: (recipient: Mars.AddressLike, amount: Mars.NumberLike): Mars.Transaction => Mars.Result,
    transferFrom: (sender: Mars.AddressLike, recipient: Mars.AddressLike, amount: Mars.NumberLike): Mars.Transaction => Mars.Result
  },
  abi: MockERC20JSON.abi,
  bytecode: MockERC20JSON.bytecode,
});



export const MockERC20Token = Mars.createArtifact({
  name: "MockERC20Token",
  constructor: (): void => Mars.Result,
  methods: {
    allowance: (_: Mars.AddressLike, __: Mars.AddressLike): Mars.FutureNumber => Mars.Result,
    approve: (spender: Mars.AddressLike, amount: Mars.NumberLike): Mars.Transaction => Mars.Result,
    balanceOf: (_: Mars.AddressLike): Mars.FutureNumber => Mars.Result,
    burn: (_value: Mars.NumberLike): Mars.Transaction => Mars.Result,
    decimals: (): Mars.Transaction => Mars.Result,
    decreaseAllowance: (spender: Mars.AddressLike, subtractedValue: Mars.NumberLike): Mars.Transaction => Mars.Result,
    increaseAllowance: (spender: Mars.AddressLike, addedValue: Mars.NumberLike): Mars.Transaction => Mars.Result,
    mint: (_to: Mars.AddressLike, _value: Mars.NumberLike): Mars.Transaction => Mars.Result,
    name: (): Mars.Transaction => Mars.Result,
    registry: (): Mars.Future<string> => Mars.Result,
    rounding: (): Mars.Transaction => Mars.Result,
    setRegistry: (_registry: Mars.AddressLike): Mars.Transaction => Mars.Result,
    symbol: (): Mars.Transaction => Mars.Result,
    totalSupply: (): Mars.FutureNumber => Mars.Result,
    transfer: (recipient: Mars.AddressLike, amount: Mars.NumberLike): Mars.Transaction => Mars.Result,
    transferFrom: (sender: Mars.AddressLike, recipient: Mars.AddressLike, amount: Mars.NumberLike): Mars.Transaction => Mars.Result
  },
  abi: MockERC20TokenJSON.abi,
  bytecode: MockERC20TokenJSON.bytecode,
});



export const MockGasRefundToken = Mars.createArtifact({
  name: "MockGasRefundToken",
  constructor: (): void => Mars.Result,
  methods: {
    allowance: (owner: Mars.AddressLike, spender: Mars.AddressLike): Mars.FutureNumber => Mars.Result,
    approve: (spender: Mars.AddressLike, amount: Mars.NumberLike): Mars.Transaction => Mars.Result,
    balanceOf: (account: Mars.AddressLike): Mars.FutureNumber => Mars.Result,
    burn: (amount: Mars.NumberLike): Mars.Transaction => Mars.Result,
    burnMax: (): Mars.FutureNumber => Mars.Result,
    burnMin: (): Mars.FutureNumber => Mars.Result,
    canBurn: (_: Mars.AddressLike): Mars.FutureBoolean => Mars.Result,
    claimOwnership: (): Mars.Transaction => Mars.Result,
    decimals: (): Mars.Transaction => Mars.Result,
    decreaseAllowance: (spender: Mars.AddressLike, subtractedValue: Mars.NumberLike): Mars.Transaction => Mars.Result,
    increaseAllowance: (spender: Mars.AddressLike, addedValue: Mars.NumberLike): Mars.Transaction => Mars.Result,
    initialize: (): Mars.Transaction => Mars.Result,
    mint: (account: Mars.AddressLike, amount: Mars.NumberLike): Mars.Transaction => Mars.Result,
    name: (): Mars.Transaction => Mars.Result,
    owner: (): Mars.Future<string> => Mars.Result,
    pendingOwner: (): Mars.Future<string> => Mars.Result,
    reclaimEther: (_to: Mars.AddressLike): Mars.Transaction => Mars.Result,
    reclaimToken: (token: Mars.AddressLike, _to: Mars.AddressLike): Mars.Transaction => Mars.Result,
    refundGas: (amount: Mars.NumberLike): Mars.Transaction => Mars.Result,
    remainingGasRefundPool: (): Mars.FutureNumber => Mars.Result,
    remainingSheepRefundPool: (): Mars.FutureNumber => Mars.Result,
    rounding: (): Mars.Transaction => Mars.Result,
    setBlacklisted: (account: Mars.AddressLike, _isBlacklisted: Mars.BooleanLike): Mars.Transaction => Mars.Result,
    setBurnBounds: (_min: Mars.NumberLike, _max: Mars.NumberLike): Mars.Transaction => Mars.Result,
    setCanBurn: (account: Mars.AddressLike, _canBurn: Mars.BooleanLike): Mars.Transaction => Mars.Result,
    sponsorGas: (amount: Mars.NumberLike): Mars.Transaction => Mars.Result,
    sponsorGas2: (amount: Mars.NumberLike): Mars.Transaction => Mars.Result,
    symbol: (): Mars.Transaction => Mars.Result,
    totalSupply: (): Mars.FutureNumber => Mars.Result,
    transfer: (recipient: Mars.AddressLike, amount: Mars.NumberLike): Mars.Transaction => Mars.Result,
    transferFrom: (sender: Mars.AddressLike, recipient: Mars.AddressLike, amount: Mars.NumberLike): Mars.Transaction => Mars.Result,
    transferOwnership: (newOwner: Mars.AddressLike): Mars.Transaction => Mars.Result
  },
  abi: MockGasRefundTokenJSON.abi,
  bytecode: MockGasRefundTokenJSON.bytecode,
});



export const MockHook = Mars.createArtifact({
  name: "MockHook",
  constructor: (): void => Mars.Result,
  methods: {
    hook: (): Mars.Transaction => Mars.Result
  },
  abi: MockHookJSON.abi,
  bytecode: MockHookJSON.bytecode,
});



export const MockRegistrySubscriber = Mars.createArtifact({
  name: "MockRegistrySubscriber",
  constructor: (): void => Mars.Result,
  methods: {
    getAttributeValue: (_who: Mars.AddressLike, _attribute: Mars.BytesLike): Mars.FutureNumber => Mars.Result,
    syncAttributeValue: (_who: Mars.AddressLike, _attribute: Mars.BytesLike, _value: Mars.NumberLike): Mars.Transaction => Mars.Result
  },
  abi: MockRegistrySubscriberJSON.abi,
  bytecode: MockRegistrySubscriberJSON.bytecode,
});



export const MockTrueCurrency = Mars.createArtifact({
  name: "MockTrueCurrency",
  constructor: (): void => Mars.Result,
  methods: {
    allowance: (owner: Mars.AddressLike, spender: Mars.AddressLike): Mars.FutureNumber => Mars.Result,
    approve: (spender: Mars.AddressLike, amount: Mars.NumberLike): Mars.Transaction => Mars.Result,
    balanceOf: (account: Mars.AddressLike): Mars.FutureNumber => Mars.Result,
    burn: (amount: Mars.NumberLike): Mars.Transaction => Mars.Result,
    burnMax: (): Mars.FutureNumber => Mars.Result,
    burnMin: (): Mars.FutureNumber => Mars.Result,
    canBurn: (_: Mars.AddressLike): Mars.FutureBoolean => Mars.Result,
    claimOwnership: (): Mars.Transaction => Mars.Result,
    decimals: (): Mars.Transaction => Mars.Result,
    decreaseAllowance: (spender: Mars.AddressLike, subtractedValue: Mars.NumberLike): Mars.Transaction => Mars.Result,
    increaseAllowance: (spender: Mars.AddressLike, addedValue: Mars.NumberLike): Mars.Transaction => Mars.Result,
    initialize: (): Mars.Transaction => Mars.Result,
    mint: (account: Mars.AddressLike, amount: Mars.NumberLike): Mars.Transaction => Mars.Result,
    name: (): Mars.Transaction => Mars.Result,
    owner: (): Mars.Future<string> => Mars.Result,
    pendingOwner: (): Mars.Future<string> => Mars.Result,
    reclaimEther: (_to: Mars.AddressLike): Mars.Transaction => Mars.Result,
    reclaimToken: (token: Mars.AddressLike, _to: Mars.AddressLike): Mars.Transaction => Mars.Result,
    rounding: (): Mars.Transaction => Mars.Result,
    setBlacklisted: (account: Mars.AddressLike, _isBlacklisted: Mars.BooleanLike): Mars.Transaction => Mars.Result,
    setBurnBounds: (_min: Mars.NumberLike, _max: Mars.NumberLike): Mars.Transaction => Mars.Result,
    setCanBurn: (account: Mars.AddressLike, _canBurn: Mars.BooleanLike): Mars.Transaction => Mars.Result,
    symbol: (): Mars.Transaction => Mars.Result,
    totalSupply: (): Mars.FutureNumber => Mars.Result,
    transfer: (recipient: Mars.AddressLike, amount: Mars.NumberLike): Mars.Transaction => Mars.Result,
    transferFrom: (sender: Mars.AddressLike, recipient: Mars.AddressLike, amount: Mars.NumberLike): Mars.Transaction => Mars.Result,
    transferOwnership: (newOwner: Mars.AddressLike): Mars.Transaction => Mars.Result
  },
  abi: MockTrueCurrencyJSON.abi,
  bytecode: MockTrueCurrencyJSON.bytecode,
});



export const MockTrueCurrencyWithAutosweep = Mars.createArtifact({
  name: "MockTrueCurrencyWithAutosweep",
  constructor: (): void => Mars.Result,
  methods: {
    allowance: (owner: Mars.AddressLike, spender: Mars.AddressLike): Mars.FutureNumber => Mars.Result,
    approve: (spender: Mars.AddressLike, amount: Mars.NumberLike): Mars.Transaction => Mars.Result,
    balanceOf: (account: Mars.AddressLike): Mars.FutureNumber => Mars.Result,
    burn: (amount: Mars.NumberLike): Mars.Transaction => Mars.Result,
    burnMax: (): Mars.FutureNumber => Mars.Result,
    burnMin: (): Mars.FutureNumber => Mars.Result,
    canBurn: (_: Mars.AddressLike): Mars.FutureBoolean => Mars.Result,
    claimOwnership: (): Mars.Transaction => Mars.Result,
    decimals: (): Mars.Transaction => Mars.Result,
    decreaseAllowance: (spender: Mars.AddressLike, subtractedValue: Mars.NumberLike): Mars.Transaction => Mars.Result,
    delegateAllowance: (owner: Mars.AddressLike, spender: Mars.AddressLike): Mars.FutureNumber => Mars.Result,
    delegateApprove: (spender: Mars.AddressLike, value: Mars.NumberLike, origSender: Mars.AddressLike): Mars.Transaction => Mars.Result,
    delegateBalanceOf: (who: Mars.AddressLike): Mars.FutureNumber => Mars.Result,
    delegateDecreaseApproval: (spender: Mars.AddressLike, subtractedValue: Mars.NumberLike, origSender: Mars.AddressLike): Mars.Transaction => Mars.Result,
    delegateIncreaseApproval: (spender: Mars.AddressLike, addedValue: Mars.NumberLike, origSender: Mars.AddressLike): Mars.Transaction => Mars.Result,
    delegateTotalSupply: (): Mars.FutureNumber => Mars.Result,
    delegateTransfer: (to: Mars.AddressLike, value: Mars.NumberLike, origSender: Mars.AddressLike): Mars.Transaction => Mars.Result,
    delegateTransferFrom: (from: Mars.AddressLike, to: Mars.AddressLike, value: Mars.NumberLike, origSender: Mars.AddressLike): Mars.Transaction => Mars.Result,
    increaseAllowance: (spender: Mars.AddressLike, addedValue: Mars.NumberLike): Mars.Transaction => Mars.Result,
    initialize: (): Mars.Transaction => Mars.Result,
    mint: (account: Mars.AddressLike, amount: Mars.NumberLike): Mars.Transaction => Mars.Result,
    name: (): Mars.Transaction => Mars.Result,
    owner: (): Mars.Future<string> => Mars.Result,
    pendingOwner: (): Mars.Future<string> => Mars.Result,
    reclaimEther: (_to: Mars.AddressLike): Mars.Transaction => Mars.Result,
    reclaimToken: (token: Mars.AddressLike, _to: Mars.AddressLike): Mars.Transaction => Mars.Result,
    rounding: (): Mars.Transaction => Mars.Result,
    setBlacklisted: (account: Mars.AddressLike, _isBlacklisted: Mars.BooleanLike): Mars.Transaction => Mars.Result,
    setBurnBounds: (_min: Mars.NumberLike, _max: Mars.NumberLike): Mars.Transaction => Mars.Result,
    setCanBurn: (account: Mars.AddressLike, _canBurn: Mars.BooleanLike): Mars.Transaction => Mars.Result,
    setDelegateAddress: (_delegateFrom: Mars.AddressLike): Mars.Transaction => Mars.Result,
    symbol: (): Mars.Transaction => Mars.Result,
    totalSupply: (): Mars.FutureNumber => Mars.Result,
    transfer: (recipient: Mars.AddressLike, amount: Mars.NumberLike): Mars.Transaction => Mars.Result,
    transferFrom: (sender: Mars.AddressLike, recipient: Mars.AddressLike, amount: Mars.NumberLike): Mars.Transaction => Mars.Result,
    transferOwnership: (newOwner: Mars.AddressLike): Mars.Transaction => Mars.Result
  },
  abi: MockTrueCurrencyWithAutosweepJSON.abi,
  bytecode: MockTrueCurrencyWithAutosweepJSON.bytecode,
});



export const MockTrueCurrencyWithDelegate = Mars.createArtifact({
  name: "MockTrueCurrencyWithDelegate",
  constructor: (): void => Mars.Result,
  methods: {
    allowance: (owner: Mars.AddressLike, spender: Mars.AddressLike): Mars.FutureNumber => Mars.Result,
    approve: (spender: Mars.AddressLike, amount: Mars.NumberLike): Mars.Transaction => Mars.Result,
    balanceOf: (account: Mars.AddressLike): Mars.FutureNumber => Mars.Result,
    burn: (amount: Mars.NumberLike): Mars.Transaction => Mars.Result,
    burnMax: (): Mars.FutureNumber => Mars.Result,
    burnMin: (): Mars.FutureNumber => Mars.Result,
    canBurn: (_: Mars.AddressLike): Mars.FutureBoolean => Mars.Result,
    claimOwnership: (): Mars.Transaction => Mars.Result,
    decimals: (): Mars.Transaction => Mars.Result,
    decreaseAllowance: (spender: Mars.AddressLike, subtractedValue: Mars.NumberLike): Mars.Transaction => Mars.Result,
    delegateAllowance: (owner: Mars.AddressLike, spender: Mars.AddressLike): Mars.FutureNumber => Mars.Result,
    delegateApprove: (spender: Mars.AddressLike, value: Mars.NumberLike, origSender: Mars.AddressLike): Mars.Transaction => Mars.Result,
    delegateBalanceOf: (who: Mars.AddressLike): Mars.FutureNumber => Mars.Result,
    delegateDecreaseApproval: (spender: Mars.AddressLike, subtractedValue: Mars.NumberLike, origSender: Mars.AddressLike): Mars.Transaction => Mars.Result,
    delegateIncreaseApproval: (spender: Mars.AddressLike, addedValue: Mars.NumberLike, origSender: Mars.AddressLike): Mars.Transaction => Mars.Result,
    delegateTotalSupply: (): Mars.FutureNumber => Mars.Result,
    delegateTransfer: (to: Mars.AddressLike, value: Mars.NumberLike, origSender: Mars.AddressLike): Mars.Transaction => Mars.Result,
    delegateTransferFrom: (from: Mars.AddressLike, to: Mars.AddressLike, value: Mars.NumberLike, origSender: Mars.AddressLike): Mars.Transaction => Mars.Result,
    increaseAllowance: (spender: Mars.AddressLike, addedValue: Mars.NumberLike): Mars.Transaction => Mars.Result,
    mint: (account: Mars.AddressLike, amount: Mars.NumberLike): Mars.Transaction => Mars.Result,
    name: (): Mars.Transaction => Mars.Result,
    owner: (): Mars.Future<string> => Mars.Result,
    pendingOwner: (): Mars.Future<string> => Mars.Result,
    reclaimEther: (_to: Mars.AddressLike): Mars.Transaction => Mars.Result,
    reclaimToken: (token: Mars.AddressLike, _to: Mars.AddressLike): Mars.Transaction => Mars.Result,
    setBlacklisted: (account: Mars.AddressLike, _isBlacklisted: Mars.BooleanLike): Mars.Transaction => Mars.Result,
    setBurnBounds: (_min: Mars.NumberLike, _max: Mars.NumberLike): Mars.Transaction => Mars.Result,
    setCanBurn: (account: Mars.AddressLike, _canBurn: Mars.BooleanLike): Mars.Transaction => Mars.Result,
    setDelegateAddress: (_delegateFrom: Mars.AddressLike): Mars.Transaction => Mars.Result,
    symbol: (): Mars.Transaction => Mars.Result,
    totalSupply: (): Mars.FutureNumber => Mars.Result,
    transfer: (recipient: Mars.AddressLike, amount: Mars.NumberLike): Mars.Transaction => Mars.Result,
    transferFrom: (sender: Mars.AddressLike, recipient: Mars.AddressLike, amount: Mars.NumberLike): Mars.Transaction => Mars.Result,
    transferOwnership: (newOwner: Mars.AddressLike): Mars.Transaction => Mars.Result
  },
  abi: MockTrueCurrencyWithDelegateJSON.abi,
  bytecode: MockTrueCurrencyWithDelegateJSON.bytecode,
});



export const MockTrueCurrencyWithGasRefund = Mars.createArtifact({
  name: "MockTrueCurrencyWithGasRefund",
  constructor: (): void => Mars.Result,
  methods: {
    allowance: (owner: Mars.AddressLike, spender: Mars.AddressLike): Mars.FutureNumber => Mars.Result,
    approve: (spender: Mars.AddressLike, amount: Mars.NumberLike): Mars.Transaction => Mars.Result,
    balanceOf: (account: Mars.AddressLike): Mars.FutureNumber => Mars.Result,
    burn: (amount: Mars.NumberLike): Mars.Transaction => Mars.Result,
    burnMax: (): Mars.FutureNumber => Mars.Result,
    burnMin: (): Mars.FutureNumber => Mars.Result,
    canBurn: (_: Mars.AddressLike): Mars.FutureBoolean => Mars.Result,
    claimOwnership: (): Mars.Transaction => Mars.Result,
    decimals: (): Mars.Transaction => Mars.Result,
    decreaseAllowance: (spender: Mars.AddressLike, subtractedValue: Mars.NumberLike): Mars.Transaction => Mars.Result,
    increaseAllowance: (spender: Mars.AddressLike, addedValue: Mars.NumberLike): Mars.Transaction => Mars.Result,
    initialize: (): Mars.Transaction => Mars.Result,
    mint: (account: Mars.AddressLike, amount: Mars.NumberLike): Mars.Transaction => Mars.Result,
    name: (): Mars.Transaction => Mars.Result,
    owner: (): Mars.Future<string> => Mars.Result,
    pendingOwner: (): Mars.Future<string> => Mars.Result,
    reclaimEther: (_to: Mars.AddressLike): Mars.Transaction => Mars.Result,
    reclaimToken: (token: Mars.AddressLike, _to: Mars.AddressLike): Mars.Transaction => Mars.Result,
    refundGas: (amount: Mars.NumberLike): Mars.Transaction => Mars.Result,
    remainingGasRefundPool: (): Mars.FutureNumber => Mars.Result,
    remainingSheepRefundPool: (): Mars.FutureNumber => Mars.Result,
    rounding: (): Mars.Transaction => Mars.Result,
    setBlacklisted: (account: Mars.AddressLike, _isBlacklisted: Mars.BooleanLike): Mars.Transaction => Mars.Result,
    setBurnBounds: (_min: Mars.NumberLike, _max: Mars.NumberLike): Mars.Transaction => Mars.Result,
    setCanBurn: (account: Mars.AddressLike, _canBurn: Mars.BooleanLike): Mars.Transaction => Mars.Result,
    symbol: (): Mars.Transaction => Mars.Result,
    totalSupply: (): Mars.FutureNumber => Mars.Result,
    transfer: (recipient: Mars.AddressLike, amount: Mars.NumberLike): Mars.Transaction => Mars.Result,
    transferFrom: (sender: Mars.AddressLike, recipient: Mars.AddressLike, amount: Mars.NumberLike): Mars.Transaction => Mars.Result,
    transferOwnership: (newOwner: Mars.AddressLike): Mars.Transaction => Mars.Result
  },
  abi: MockTrueCurrencyWithGasRefundJSON.abi,
  bytecode: MockTrueCurrencyWithGasRefundJSON.bytecode,
});



export const MockTrueCurrencyWithLegacyAutosweep = Mars.createArtifact({
  name: "MockTrueCurrencyWithLegacyAutosweep",
  constructor: (): void => Mars.Result,
  methods: {
    allowance: (owner: Mars.AddressLike, spender: Mars.AddressLike): Mars.FutureNumber => Mars.Result,
    approve: (spender: Mars.AddressLike, amount: Mars.NumberLike): Mars.Transaction => Mars.Result,
    balanceOf: (account: Mars.AddressLike): Mars.FutureNumber => Mars.Result,
    burn: (amount: Mars.NumberLike): Mars.Transaction => Mars.Result,
    burnMax: (): Mars.FutureNumber => Mars.Result,
    burnMin: (): Mars.FutureNumber => Mars.Result,
    canBurn: (_: Mars.AddressLike): Mars.FutureBoolean => Mars.Result,
    claimOwnership: (): Mars.Transaction => Mars.Result,
    decimals: (): Mars.Transaction => Mars.Result,
    decreaseAllowance: (spender: Mars.AddressLike, subtractedValue: Mars.NumberLike): Mars.Transaction => Mars.Result,
    delegateAllowance: (owner: Mars.AddressLike, spender: Mars.AddressLike): Mars.FutureNumber => Mars.Result,
    delegateApprove: (spender: Mars.AddressLike, value: Mars.NumberLike, origSender: Mars.AddressLike): Mars.Transaction => Mars.Result,
    delegateBalanceOf: (who: Mars.AddressLike): Mars.FutureNumber => Mars.Result,
    delegateDecreaseApproval: (spender: Mars.AddressLike, subtractedValue: Mars.NumberLike, origSender: Mars.AddressLike): Mars.Transaction => Mars.Result,
    delegateIncreaseApproval: (spender: Mars.AddressLike, addedValue: Mars.NumberLike, origSender: Mars.AddressLike): Mars.Transaction => Mars.Result,
    delegateTotalSupply: (): Mars.FutureNumber => Mars.Result,
    delegateTransfer: (to: Mars.AddressLike, value: Mars.NumberLike, origSender: Mars.AddressLike): Mars.Transaction => Mars.Result,
    delegateTransferFrom: (from: Mars.AddressLike, to: Mars.AddressLike, value: Mars.NumberLike, origSender: Mars.AddressLike): Mars.Transaction => Mars.Result,
    increaseAllowance: (spender: Mars.AddressLike, addedValue: Mars.NumberLike): Mars.Transaction => Mars.Result,
    mint: (account: Mars.AddressLike, amount: Mars.NumberLike): Mars.Transaction => Mars.Result,
    name: (): Mars.Transaction => Mars.Result,
    owner: (): Mars.Future<string> => Mars.Result,
    pendingOwner: (): Mars.Future<string> => Mars.Result,
    reclaimEther: (_to: Mars.AddressLike): Mars.Transaction => Mars.Result,
    reclaimToken: (token: Mars.AddressLike, _to: Mars.AddressLike): Mars.Transaction => Mars.Result,
    setBlacklisted: (account: Mars.AddressLike, _isBlacklisted: Mars.BooleanLike): Mars.Transaction => Mars.Result,
    setBurnBounds: (_min: Mars.NumberLike, _max: Mars.NumberLike): Mars.Transaction => Mars.Result,
    setCanBurn: (account: Mars.AddressLike, _canBurn: Mars.BooleanLike): Mars.Transaction => Mars.Result,
    setDelegateAddress: (_delegateFrom: Mars.AddressLike): Mars.Transaction => Mars.Result,
    symbol: (): Mars.Transaction => Mars.Result,
    totalSupply: (): Mars.FutureNumber => Mars.Result,
    transfer: (recipient: Mars.AddressLike, amount: Mars.NumberLike): Mars.Transaction => Mars.Result,
    transferFrom: (sender: Mars.AddressLike, recipient: Mars.AddressLike, amount: Mars.NumberLike): Mars.Transaction => Mars.Result,
    transferOwnership: (newOwner: Mars.AddressLike): Mars.Transaction => Mars.Result
  },
  abi: MockTrueCurrencyWithLegacyAutosweepJSON.abi,
  bytecode: MockTrueCurrencyWithLegacyAutosweepJSON.bytecode,
});



export const MockTrueLender = Mars.createArtifact({
  name: "MockTrueLender",
  constructor: (): void => Mars.Result,
  methods: {
    allow: (who: Mars.AddressLike, status: Mars.BooleanLike): Mars.Transaction => Mars.Result,
    allowedBorrowers: (_: Mars.AddressLike): Mars.FutureBoolean => Mars.Result,
    currencyToken: (): Mars.Future<string> => Mars.Result,
    distribute: (recipient: Mars.AddressLike, numerator: Mars.NumberLike, denominator: Mars.NumberLike): Mars.Transaction => Mars.Result,
    fund: (loanToken: Mars.AddressLike): Mars.Transaction => Mars.Result,
    initialize: (_pool: Mars.AddressLike, _ratingAgency: Mars.AddressLike): Mars.Transaction => Mars.Result,
    loanIsAttractiveEnough: (apy: Mars.NumberLike): Mars.FutureBoolean => Mars.Result,
    loanIsCredible: (apy: Mars.NumberLike, term: Mars.NumberLike, yesVotes: Mars.NumberLike, noVotes: Mars.NumberLike): Mars.FutureBoolean => Mars.Result,
    loanSizeWithinBounds: (amount: Mars.NumberLike): Mars.FutureBoolean => Mars.Result,
    loanTermWithinBounds: (term: Mars.NumberLike): Mars.FutureBoolean => Mars.Result,
    loans: (): Mars.Future<Mars.Future<string>[]> => Mars.Result,
    maxApy: (): Mars.FutureNumber => Mars.Result,
    maxSize: (): Mars.FutureNumber => Mars.Result,
    maxTerm: (): Mars.FutureNumber => Mars.Result,
    minApy: (): Mars.FutureNumber => Mars.Result,
    minSize: (): Mars.FutureNumber => Mars.Result,
    minTerm: (): Mars.FutureNumber => Mars.Result,
    owner: (): Mars.Future<string> => Mars.Result,
    participationFactor: (): Mars.FutureNumber => Mars.Result,
    pool: (): Mars.Future<string> => Mars.Result,
    ratingAgency: (): Mars.Future<string> => Mars.Result,
    reclaim: (loanToken: Mars.AddressLike): Mars.Transaction => Mars.Result,
    renounceOwnership: (): Mars.Transaction => Mars.Result,
    riskAversion: (): Mars.FutureNumber => Mars.Result,
    setApyLimits: (newMinApy: Mars.NumberLike, newMaxApy: Mars.NumberLike): Mars.Transaction => Mars.Result,
    setParticipationFactor: (newParticipationFactor: Mars.NumberLike): Mars.Transaction => Mars.Result,
    setPool: (newPool: Mars.AddressLike): Mars.Transaction => Mars.Result,
    setRiskAversion: (newRiskAversion: Mars.NumberLike): Mars.Transaction => Mars.Result,
    setSizeLimits: (min: Mars.NumberLike, max: Mars.NumberLike): Mars.Transaction => Mars.Result,
    setTermLimits: (min: Mars.NumberLike, max: Mars.NumberLike): Mars.Transaction => Mars.Result,
    setVotingPeriod: (newVotingPeriod: Mars.NumberLike): Mars.Transaction => Mars.Result,
    transferOwnership: (newOwner: Mars.AddressLike): Mars.Transaction => Mars.Result,
    value: (): Mars.FutureNumber => Mars.Result,
    votesThresholdReached: (amount: Mars.NumberLike, yesVotes: Mars.NumberLike): Mars.FutureBoolean => Mars.Result,
    votingLastedLongEnough: (start: Mars.NumberLike): Mars.FutureBoolean => Mars.Result,
    votingPeriod: (): Mars.FutureNumber => Mars.Result
  },
  abi: MockTrueLenderJSON.abi,
  bytecode: MockTrueLenderJSON.bytecode,
});



export const MockTrustToken = Mars.createArtifact({
  name: "MockTrustToken",
  constructor: (): void => Mars.Result,
  methods: {
    allowance: (_: Mars.AddressLike, __: Mars.AddressLike): Mars.FutureNumber => Mars.Result,
    approve: (spender: Mars.AddressLike, amount: Mars.NumberLike): Mars.Transaction => Mars.Result,
    balanceOf: (_: Mars.AddressLike): Mars.FutureNumber => Mars.Result,
    burn: (amount: Mars.NumberLike): Mars.Transaction => Mars.Result,
    claimOwnership: (): Mars.Transaction => Mars.Result,
    decimals: (): Mars.Transaction => Mars.Result,
    decreaseAllowance: (spender: Mars.AddressLike, subtractedValue: Mars.NumberLike): Mars.Transaction => Mars.Result,
    epochsPassed: (): Mars.FutureNumber => Mars.Result,
    faucet: (to: Mars.AddressLike, amount: Mars.NumberLike): Mars.Transaction => Mars.Result,
    finalEpoch: (): Mars.Transaction => Mars.Result,
    increaseAllowance: (spender: Mars.AddressLike, addedValue: Mars.NumberLike): Mars.Transaction => Mars.Result,
    initialize: (): Mars.Transaction => Mars.Result,
    latestEpoch: (): Mars.FutureNumber => Mars.Result,
    lockStart: (): Mars.Transaction => Mars.Result,
    lockedBalance: (account: Mars.AddressLike): Mars.FutureNumber => Mars.Result,
    mint: (_to: Mars.AddressLike, _amount: Mars.NumberLike): Mars.Transaction => Mars.Result,
    name: (): Mars.Transaction => Mars.Result,
    nextEpoch: (): Mars.FutureNumber => Mars.Result,
    owner: (): Mars.Future<string> => Mars.Result,
    ownerFaucet: (to: Mars.AddressLike, amount: Mars.NumberLike): Mars.Transaction => Mars.Result,
    pendingOwner: (): Mars.Future<string> => Mars.Result,
    registerLockup: (receiver: Mars.AddressLike, amount: Mars.NumberLike): Mars.Transaction => Mars.Result,
    rounding: (): Mars.Transaction => Mars.Result,
    setTimeLockRegistry: (newTimeLockRegistry: Mars.AddressLike): Mars.Transaction => Mars.Result,
    symbol: (): Mars.Transaction => Mars.Result,
    timeLockRegistry: (): Mars.Future<string> => Mars.Result,
    totalSupply: (): Mars.FutureNumber => Mars.Result,
    transfer: (recipient: Mars.AddressLike, amount: Mars.NumberLike): Mars.Transaction => Mars.Result,
    transferFrom: (sender: Mars.AddressLike, recipient: Mars.AddressLike, amount: Mars.NumberLike): Mars.Transaction => Mars.Result,
    transferOwnership: (newOwner: Mars.AddressLike): Mars.Transaction => Mars.Result,
    unlockedBalance: (account: Mars.AddressLike): Mars.FutureNumber => Mars.Result
  },
  abi: MockTrustTokenJSON.abi,
  bytecode: MockTrustTokenJSON.bytecode,
});



export const MockYToken = Mars.createArtifact({
  name: "MockYToken",
  constructor: (): void => Mars.Result,
  methods: {
    allowance: (_: Mars.AddressLike, __: Mars.AddressLike): Mars.FutureNumber => Mars.Result,
    approve: (spender: Mars.AddressLike, amount: Mars.NumberLike): Mars.Transaction => Mars.Result,
    balanceOf: (_: Mars.AddressLike): Mars.FutureNumber => Mars.Result,
    burn: (_value: Mars.NumberLike): Mars.Transaction => Mars.Result,
    decimals: (): Mars.Transaction => Mars.Result,
    decreaseAllowance: (spender: Mars.AddressLike, subtractedValue: Mars.NumberLike): Mars.Transaction => Mars.Result,
    getPricePerFullShare: (): Mars.Transaction => Mars.Result,
    increaseAllowance: (spender: Mars.AddressLike, addedValue: Mars.NumberLike): Mars.Transaction => Mars.Result,
    mint: (_to: Mars.AddressLike, _value: Mars.NumberLike): Mars.Transaction => Mars.Result,
    name: (): Mars.Transaction => Mars.Result,
    registry: (): Mars.Future<string> => Mars.Result,
    rounding: (): Mars.Transaction => Mars.Result,
    setRegistry: (_registry: Mars.AddressLike): Mars.Transaction => Mars.Result,
    symbol: (): Mars.Transaction => Mars.Result,
    totalSupply: (): Mars.FutureNumber => Mars.Result,
    transfer: (recipient: Mars.AddressLike, amount: Mars.NumberLike): Mars.Transaction => Mars.Result,
    transferFrom: (sender: Mars.AddressLike, recipient: Mars.AddressLike, amount: Mars.NumberLike): Mars.Transaction => Mars.Result
  },
  abi: MockYTokenJSON.abi,
  bytecode: MockYTokenJSON.bytecode,
});



export const Ownable = Mars.createArtifact({
  name: "Ownable",
  constructor: (): void => Mars.Result,
  methods: {
    owner: (): Mars.Future<string> => Mars.Result,
    renounceOwnership: (): Mars.Transaction => Mars.Result,
    transferOwnership: (newOwner: Mars.AddressLike): Mars.Transaction => Mars.Result
  },
  abi: OwnableJSON.abi,
  bytecode: OwnableJSON.bytecode,
});



export const OwnableMock = Mars.createArtifact({
  name: "OwnableMock",
  constructor: (): void => Mars.Result,
  methods: {
    owner: (): Mars.Future<string> => Mars.Result,
    renounceOwnership: (): Mars.Transaction => Mars.Result,
    transferOwnership: (newOwner: Mars.AddressLike): Mars.Transaction => Mars.Result
  },
  abi: OwnableMockJSON.abi,
  bytecode: OwnableMockJSON.bytecode,
});



export const OwnedUpgradeabilityProxy = Mars.createArtifact({
  name: "OwnedUpgradeabilityProxy",
  constructor: (): void => Mars.Result,
  methods: {
    claimProxyOwnership: (): Mars.Transaction => Mars.Result,
    implementation: (): Mars.Future<string> => Mars.Result,
    pendingProxyOwner: (): Mars.Future<string> => Mars.Result,
    proxyOwner: (): Mars.Future<string> => Mars.Result,
    transferProxyOwnership: (newOwner: Mars.AddressLike): Mars.Transaction => Mars.Result,
    upgradeTo: (implementation: Mars.AddressLike): Mars.Transaction => Mars.Result
  },
  abi: OwnedUpgradeabilityProxyJSON.abi,
  bytecode: OwnedUpgradeabilityProxyJSON.bytecode,
});



export const PausedTrueGold = Mars.createArtifact({
  name: "PausedTrueGold",
  constructor: (): void => Mars.Result,
  methods: {
    allowance: (owner: Mars.AddressLike, spender: Mars.AddressLike): Mars.FutureNumber => Mars.Result,
    approve: (_: Mars.AddressLike, __: Mars.NumberLike): Mars.Transaction => Mars.Result,
    balanceOf: (account: Mars.AddressLike): Mars.FutureNumber => Mars.Result,
    burn: (_: Mars.NumberLike): Mars.Transaction => Mars.Result,
    burnFrom: (_: Mars.AddressLike, __: Mars.NumberLike): Mars.Transaction => Mars.Result,
    burnMax: (): Mars.FutureNumber => Mars.Result,
    burnMin: (): Mars.FutureNumber => Mars.Result,
    decimals: (): Mars.Transaction => Mars.Result,
    decreaseAllowance: (_: Mars.AddressLike, __: Mars.NumberLike): Mars.Transaction => Mars.Result,
    increaseAllowance: (_: Mars.AddressLike, __: Mars.NumberLike): Mars.Transaction => Mars.Result,
    initialize: (minBurnAmount: Mars.NumberLike, maxBurnAmount: Mars.NumberLike): Mars.Transaction => Mars.Result,
    mint: (_: Mars.AddressLike, __: Mars.NumberLike): Mars.Transaction => Mars.Result,
    name: (): Mars.Transaction => Mars.Result,
    owner: (): Mars.Future<string> => Mars.Result,
    reclaimContract: (ownable: Mars.AddressLike): Mars.Transaction => Mars.Result,
    reclaimEther: (to: Mars.AddressLike): Mars.Transaction => Mars.Result,
    reclaimToken: (token: Mars.AddressLike, to: Mars.AddressLike): Mars.Transaction => Mars.Result,
    setBurnBounds: (minAmount: Mars.NumberLike, maxAmount: Mars.NumberLike): Mars.Transaction => Mars.Result,
    symbol: (): Mars.Transaction => Mars.Result,
    totalSupply: (): Mars.FutureNumber => Mars.Result,
    transfer: (_: Mars.AddressLike, __: Mars.NumberLike): Mars.Transaction => Mars.Result,
    transferFrom: (_: Mars.AddressLike, __: Mars.AddressLike, ___: Mars.NumberLike): Mars.Transaction => Mars.Result,
    transferOwnership: (newOwner: Mars.AddressLike): Mars.Transaction => Mars.Result
  },
  abi: PausedTrueGoldJSON.abi,
  bytecode: PausedTrueGoldJSON.bytecode,
});



export const ProvisionalRegistry = Mars.createArtifact({
  name: "ProvisionalRegistry",
  constructor: (): void => Mars.Result,
  methods: {
    claimOwnership: (): Mars.Transaction => Mars.Result,
    getAttribute: (_who: Mars.AddressLike, _attribute: Mars.BytesLike): Mars.FutureNumber => Mars.Result,
    getAttributeAdminAddr: (_who: Mars.AddressLike, _attribute: Mars.BytesLike): Mars.Future<string> => Mars.Result,
    getAttributeTimestamp: (_who: Mars.AddressLike, _attribute: Mars.BytesLike): Mars.FutureNumber => Mars.Result,
    getAttributeValue: (_who: Mars.AddressLike, _attribute: Mars.BytesLike): Mars.FutureNumber => Mars.Result,
    hasAttribute: (_who: Mars.AddressLike, _attribute: Mars.BytesLike): Mars.FutureBoolean => Mars.Result,
    owner: (): Mars.Future<string> => Mars.Result,
    pendingOwner: (): Mars.Future<string> => Mars.Result,
    reclaimEther: (_to: Mars.AddressLike): Mars.Transaction => Mars.Result,
    reclaimToken: (token: Mars.AddressLike, _to: Mars.AddressLike): Mars.Transaction => Mars.Result,
    requireCanBurn: (_from: Mars.AddressLike): void => Mars.Result,
    requireCanMint: (_to: Mars.AddressLike): Mars.Future<string> => Mars.Result,
    requireCanTransfer: (_from: Mars.AddressLike, _to: Mars.AddressLike): Mars.Future<string> => Mars.Result,
    requireCanTransferFrom: (_sender: Mars.AddressLike, _from: Mars.AddressLike, _to: Mars.AddressLike): Mars.Future<string> => Mars.Result,
    setAttribute: (_who: Mars.AddressLike, _attribute: Mars.BytesLike, _value: Mars.NumberLike, _notes: Mars.BytesLike): Mars.Transaction => Mars.Result,
    setAttributeValue: (_who: Mars.AddressLike, _attribute: Mars.BytesLike, _value: Mars.NumberLike): Mars.Transaction => Mars.Result,
    subscribe: (_attribute: Mars.BytesLike, _syncer: Mars.AddressLike): Mars.Transaction => Mars.Result,
    subscriberCount: (_attribute: Mars.BytesLike): Mars.FutureNumber => Mars.Result,
    syncAttribute: (_attribute: Mars.BytesLike, _startIndex: Mars.NumberLike, _addresses: Mars.MaybeFuture<Mars.AddressLike[]>): Mars.Transaction => Mars.Result,
    transferOwnership: (newOwner: Mars.AddressLike): Mars.Transaction => Mars.Result,
    unsubscribe: (_attribute: Mars.BytesLike, _index: Mars.NumberLike): Mars.Transaction => Mars.Result
  },
  abi: ProvisionalRegistryJSON.abi,
  bytecode: ProvisionalRegistryJSON.bytecode,
});



export const ProvisionalRegistryMock = Mars.createArtifact({
  name: "ProvisionalRegistryMock",
  constructor: (): void => Mars.Result,
  methods: {
    claimOwnership: (): Mars.Transaction => Mars.Result,
    getAttribute: (_who: Mars.AddressLike, _attribute: Mars.BytesLike): Mars.FutureNumber => Mars.Result,
    getAttributeAdminAddr: (_who: Mars.AddressLike, _attribute: Mars.BytesLike): Mars.Future<string> => Mars.Result,
    getAttributeTimestamp: (_who: Mars.AddressLike, _attribute: Mars.BytesLike): Mars.FutureNumber => Mars.Result,
    getAttributeValue: (_who: Mars.AddressLike, _attribute: Mars.BytesLike): Mars.FutureNumber => Mars.Result,
    hasAttribute: (_who: Mars.AddressLike, _attribute: Mars.BytesLike): Mars.FutureBoolean => Mars.Result,
    initialize: (): Mars.Transaction => Mars.Result,
    owner: (): Mars.Future<string> => Mars.Result,
    pendingOwner: (): Mars.Future<string> => Mars.Result,
    reclaimEther: (_to: Mars.AddressLike): Mars.Transaction => Mars.Result,
    reclaimToken: (token: Mars.AddressLike, _to: Mars.AddressLike): Mars.Transaction => Mars.Result,
    requireCanBurn: (_from: Mars.AddressLike): void => Mars.Result,
    requireCanMint: (_to: Mars.AddressLike): Mars.Future<string> => Mars.Result,
    requireCanTransfer: (_from: Mars.AddressLike, _to: Mars.AddressLike): Mars.Future<string> => Mars.Result,
    requireCanTransferFrom: (_sender: Mars.AddressLike, _from: Mars.AddressLike, _to: Mars.AddressLike): Mars.Future<string> => Mars.Result,
    setAttribute: (_who: Mars.AddressLike, _attribute: Mars.BytesLike, _value: Mars.NumberLike, _notes: Mars.BytesLike): Mars.Transaction => Mars.Result,
    setAttributeValue: (_who: Mars.AddressLike, _attribute: Mars.BytesLike, _value: Mars.NumberLike): Mars.Transaction => Mars.Result,
    subscribe: (_attribute: Mars.BytesLike, _syncer: Mars.AddressLike): Mars.Transaction => Mars.Result,
    subscriberCount: (_attribute: Mars.BytesLike): Mars.FutureNumber => Mars.Result,
    syncAttribute: (_attribute: Mars.BytesLike, _startIndex: Mars.NumberLike, _addresses: Mars.MaybeFuture<Mars.AddressLike[]>): Mars.Transaction => Mars.Result,
    transferOwnership: (newOwner: Mars.AddressLike): Mars.Transaction => Mars.Result,
    unsubscribe: (_attribute: Mars.BytesLike, _index: Mars.NumberLike): Mars.Transaction => Mars.Result
  },
  abi: ProvisionalRegistryMockJSON.abi,
  bytecode: ProvisionalRegistryMockJSON.bytecode,
});



export const ProxyStorage = Mars.createArtifact({
  name: "ProxyStorage",
  constructor: (): void => Mars.Result,
  methods: {
    allowance: (_: Mars.AddressLike, __: Mars.AddressLike): Mars.FutureNumber => Mars.Result,
    balanceOf: (_: Mars.AddressLike): Mars.FutureNumber => Mars.Result,
    totalSupply: (): Mars.FutureNumber => Mars.Result
  },
  abi: ProxyStorageJSON.abi,
  bytecode: ProxyStorageJSON.bytecode,
});



export const Reclaimable = Mars.createArtifact({
  name: "Reclaimable",
  constructor: (): void => Mars.Result,
  methods: {
    owner: (): Mars.Future<string> => Mars.Result,
    reclaimContract: (ownable: Mars.AddressLike): Mars.Transaction => Mars.Result,
    reclaimEther: (to: Mars.AddressLike): Mars.Transaction => Mars.Result,
    reclaimToken: (token: Mars.AddressLike, to: Mars.AddressLike): Mars.Transaction => Mars.Result,
    transferOwnership: (newOwner: Mars.AddressLike): Mars.Transaction => Mars.Result
  },
  abi: ReclaimableJSON.abi,
  bytecode: ReclaimableJSON.bytecode,
});



export const ReclaimerToken = Mars.createArtifact({
  name: "ReclaimerToken",
  constructor: (): void => Mars.Result,
  methods: {
    allowance: (owner: Mars.AddressLike, spender: Mars.AddressLike): Mars.FutureNumber => Mars.Result,
    approve: (spender: Mars.AddressLike, amount: Mars.NumberLike): Mars.Transaction => Mars.Result,
    balanceOf: (account: Mars.AddressLike): Mars.FutureNumber => Mars.Result,
    burnMax: (): Mars.FutureNumber => Mars.Result,
    burnMin: (): Mars.FutureNumber => Mars.Result,
    canBurn: (_: Mars.AddressLike): Mars.FutureBoolean => Mars.Result,
    claimOwnership: (): Mars.Transaction => Mars.Result,
    decimals: (): Mars.Transaction => Mars.Result,
    decreaseAllowance: (spender: Mars.AddressLike, subtractedValue: Mars.NumberLike): Mars.Transaction => Mars.Result,
    increaseAllowance: (spender: Mars.AddressLike, addedValue: Mars.NumberLike): Mars.Transaction => Mars.Result,
    name: (): Mars.Transaction => Mars.Result,
    owner: (): Mars.Future<string> => Mars.Result,
    pendingOwner: (): Mars.Future<string> => Mars.Result,
    reclaimEther: (_to: Mars.AddressLike): Mars.Transaction => Mars.Result,
    reclaimToken: (token: Mars.AddressLike, _to: Mars.AddressLike): Mars.Transaction => Mars.Result,
    symbol: (): Mars.Transaction => Mars.Result,
    totalSupply: (): Mars.FutureNumber => Mars.Result,
    transfer: (recipient: Mars.AddressLike, amount: Mars.NumberLike): Mars.Transaction => Mars.Result,
    transferFrom: (sender: Mars.AddressLike, recipient: Mars.AddressLike, amount: Mars.NumberLike): Mars.Transaction => Mars.Result,
    transferOwnership: (newOwner: Mars.AddressLike): Mars.Transaction => Mars.Result
  },
  abi: ReclaimerTokenJSON.abi,
  bytecode: ReclaimerTokenJSON.bytecode,
});



export const ReentrancyGuard = Mars.createArtifact({
  name: "ReentrancyGuard",
  constructor: (): void => Mars.Result,
  methods: {
    
  },
  abi: ReentrancyGuardJSON.abi,
  bytecode: ReentrancyGuardJSON.bytecode,
});



export const Registry = Mars.createArtifact({
  name: "Registry",
  constructor: (): void => Mars.Result,
  methods: {
    claimOwnership: (): Mars.Transaction => Mars.Result,
    getAttribute: (_who: Mars.AddressLike, _attribute: Mars.BytesLike): Mars.FutureNumber => Mars.Result,
    getAttributeAdminAddr: (_who: Mars.AddressLike, _attribute: Mars.BytesLike): Mars.Future<string> => Mars.Result,
    getAttributeTimestamp: (_who: Mars.AddressLike, _attribute: Mars.BytesLike): Mars.FutureNumber => Mars.Result,
    getAttributeValue: (_who: Mars.AddressLike, _attribute: Mars.BytesLike): Mars.FutureNumber => Mars.Result,
    hasAttribute: (_who: Mars.AddressLike, _attribute: Mars.BytesLike): Mars.FutureBoolean => Mars.Result,
    owner: (): Mars.Future<string> => Mars.Result,
    pendingOwner: (): Mars.Future<string> => Mars.Result,
    reclaimEther: (_to: Mars.AddressLike): Mars.Transaction => Mars.Result,
    reclaimToken: (token: Mars.AddressLike, _to: Mars.AddressLike): Mars.Transaction => Mars.Result,
    setAttribute: (_who: Mars.AddressLike, _attribute: Mars.BytesLike, _value: Mars.NumberLike, _notes: Mars.BytesLike): Mars.Transaction => Mars.Result,
    setAttributeValue: (_who: Mars.AddressLike, _attribute: Mars.BytesLike, _value: Mars.NumberLike): Mars.Transaction => Mars.Result,
    subscribe: (_attribute: Mars.BytesLike, _syncer: Mars.AddressLike): Mars.Transaction => Mars.Result,
    subscriberCount: (_attribute: Mars.BytesLike): Mars.FutureNumber => Mars.Result,
    syncAttribute: (_attribute: Mars.BytesLike, _startIndex: Mars.NumberLike, _addresses: Mars.MaybeFuture<Mars.AddressLike[]>): Mars.Transaction => Mars.Result,
    transferOwnership: (newOwner: Mars.AddressLike): Mars.Transaction => Mars.Result,
    unsubscribe: (_attribute: Mars.BytesLike, _index: Mars.NumberLike): Mars.Transaction => Mars.Result
  },
  abi: RegistryJSON.abi,
  bytecode: RegistryJSON.bytecode,
});



export const RegistryMock = Mars.createArtifact({
  name: "RegistryMock",
  constructor: (): void => Mars.Result,
  methods: {
    claimOwnership: (): Mars.Transaction => Mars.Result,
    getAttribute: (_who: Mars.AddressLike, _attribute: Mars.BytesLike): Mars.FutureNumber => Mars.Result,
    getAttributeAdminAddr: (_who: Mars.AddressLike, _attribute: Mars.BytesLike): Mars.Future<string> => Mars.Result,
    getAttributeTimestamp: (_who: Mars.AddressLike, _attribute: Mars.BytesLike): Mars.FutureNumber => Mars.Result,
    getAttributeValue: (_who: Mars.AddressLike, _attribute: Mars.BytesLike): Mars.FutureNumber => Mars.Result,
    hasAttribute: (_who: Mars.AddressLike, _attribute: Mars.BytesLike): Mars.FutureBoolean => Mars.Result,
    initialize: (): Mars.Transaction => Mars.Result,
    owner: (): Mars.Future<string> => Mars.Result,
    pendingOwner: (): Mars.Future<string> => Mars.Result,
    reclaimEther: (_to: Mars.AddressLike): Mars.Transaction => Mars.Result,
    reclaimToken: (token: Mars.AddressLike, _to: Mars.AddressLike): Mars.Transaction => Mars.Result,
    setAttribute: (_who: Mars.AddressLike, _attribute: Mars.BytesLike, _value: Mars.NumberLike, _notes: Mars.BytesLike): Mars.Transaction => Mars.Result,
    setAttributeValue: (_who: Mars.AddressLike, _attribute: Mars.BytesLike, _value: Mars.NumberLike): Mars.Transaction => Mars.Result,
    subscribe: (_attribute: Mars.BytesLike, _syncer: Mars.AddressLike): Mars.Transaction => Mars.Result,
    subscriberCount: (_attribute: Mars.BytesLike): Mars.FutureNumber => Mars.Result,
    syncAttribute: (_attribute: Mars.BytesLike, _startIndex: Mars.NumberLike, _addresses: Mars.MaybeFuture<Mars.AddressLike[]>): Mars.Transaction => Mars.Result,
    transferOwnership: (newOwner: Mars.AddressLike): Mars.Transaction => Mars.Result,
    unsubscribe: (_attribute: Mars.BytesLike, _index: Mars.NumberLike): Mars.Transaction => Mars.Result
  },
  abi: RegistryMockJSON.abi,
  bytecode: RegistryMockJSON.bytecode,
});



export const SafeMath = Mars.createArtifact({
  name: "SafeMath",
  constructor: (): void => Mars.Result,
  methods: {
    
  },
  abi: SafeMathJSON.abi,
  bytecode: SafeMathJSON.bytecode,
});



export const TimeLockRegistry = Mars.createArtifact({
  name: "TimeLockRegistry",
  constructor: (): void => Mars.Result,
  methods: {
    allowance: (_: Mars.AddressLike, __: Mars.AddressLike): Mars.FutureNumber => Mars.Result,
    balanceOf: (_: Mars.AddressLike): Mars.FutureNumber => Mars.Result,
    cancel: (receiver: Mars.AddressLike): Mars.Transaction => Mars.Result,
    claim: (): Mars.Transaction => Mars.Result,
    claimOwnership: (): Mars.Transaction => Mars.Result,
    initialize: (_token: Mars.AddressLike): Mars.Transaction => Mars.Result,
    owner: (): Mars.Future<string> => Mars.Result,
    pendingOwner: (): Mars.Future<string> => Mars.Result,
    register: (receiver: Mars.AddressLike, distribution: Mars.NumberLike): Mars.Transaction => Mars.Result,
    registeredDistributions: (_: Mars.AddressLike): Mars.FutureNumber => Mars.Result,
    token: (): Mars.Future<string> => Mars.Result,
    totalSupply: (): Mars.FutureNumber => Mars.Result,
    transferOwnership: (newOwner: Mars.AddressLike): Mars.Transaction => Mars.Result
  },
  abi: TimeLockRegistryJSON.abi,
  bytecode: TimeLockRegistryJSON.bytecode,
});



export const TimeLockedToken = Mars.createArtifact({
  name: "TimeLockedToken",
  constructor: (): void => Mars.Result,
  methods: {
    allowance: (_: Mars.AddressLike, __: Mars.AddressLike): Mars.FutureNumber => Mars.Result,
    approve: (spender: Mars.AddressLike, amount: Mars.NumberLike): Mars.Transaction => Mars.Result,
    balanceOf: (_: Mars.AddressLike): Mars.FutureNumber => Mars.Result,
    claimOwnership: (): Mars.Transaction => Mars.Result,
    decimals: (): Mars.Transaction => Mars.Result,
    decreaseAllowance: (spender: Mars.AddressLike, subtractedValue: Mars.NumberLike): Mars.Transaction => Mars.Result,
    epochsPassed: (): Mars.FutureNumber => Mars.Result,
    finalEpoch: (): Mars.Transaction => Mars.Result,
    increaseAllowance: (spender: Mars.AddressLike, addedValue: Mars.NumberLike): Mars.Transaction => Mars.Result,
    latestEpoch: (): Mars.FutureNumber => Mars.Result,
    lockStart: (): Mars.Transaction => Mars.Result,
    lockedBalance: (account: Mars.AddressLike): Mars.FutureNumber => Mars.Result,
    name: (): Mars.Transaction => Mars.Result,
    nextEpoch: (): Mars.FutureNumber => Mars.Result,
    owner: (): Mars.Future<string> => Mars.Result,
    pendingOwner: (): Mars.Future<string> => Mars.Result,
    registerLockup: (receiver: Mars.AddressLike, amount: Mars.NumberLike): Mars.Transaction => Mars.Result,
    setTimeLockRegistry: (newTimeLockRegistry: Mars.AddressLike): Mars.Transaction => Mars.Result,
    symbol: (): Mars.Transaction => Mars.Result,
    timeLockRegistry: (): Mars.Future<string> => Mars.Result,
    totalSupply: (): Mars.FutureNumber => Mars.Result,
    transfer: (recipient: Mars.AddressLike, amount: Mars.NumberLike): Mars.Transaction => Mars.Result,
    transferFrom: (sender: Mars.AddressLike, recipient: Mars.AddressLike, amount: Mars.NumberLike): Mars.Transaction => Mars.Result,
    transferOwnership: (newOwner: Mars.AddressLike): Mars.Transaction => Mars.Result,
    unlockedBalance: (account: Mars.AddressLike): Mars.FutureNumber => Mars.Result
  },
  abi: TimeLockedTokenJSON.abi,
  bytecode: TimeLockedTokenJSON.bytecode,
});



export const TimeOwnedUpgradeabilityProxy = Mars.createArtifact({
  name: "TimeOwnedUpgradeabilityProxy",
  constructor: (): void => Mars.Result,
  methods: {
    claimProxyOwnership: (): Mars.Transaction => Mars.Result,
    expiration: (): Mars.FutureNumber => Mars.Result,
    implementation: (): Mars.Future<string> => Mars.Result,
    pendingProxyOwner: (): Mars.Future<string> => Mars.Result,
    proxyOwner: (): Mars.Future<string> => Mars.Result,
    setExpiration: (newExpirationTime: Mars.NumberLike): Mars.Transaction => Mars.Result,
    transferProxyOwnership: (newOwner: Mars.AddressLike): Mars.Transaction => Mars.Result,
    upgradeTo: (implementation: Mars.AddressLike): Mars.Transaction => Mars.Result
  },
  abi: TimeOwnedUpgradeabilityProxyJSON.abi,
  bytecode: TimeOwnedUpgradeabilityProxyJSON.bytecode,
});



export const TokenController = Mars.createArtifact({
  name: "TokenController",
  constructor: (): void => Mars.Result,
  methods: {
    IS_MINT_PAUSER: (): Mars.FutureBytes => Mars.Result,
    IS_MINT_RATIFIER: (): Mars.FutureBytes => Mars.Result,
    IS_REDEMPTION_ADMIN: (): Mars.FutureBytes => Mars.Result,
    MULTISIG_MINT_SIGS: (): Mars.FutureNumber => Mars.Result,
    PAUSED_IMPLEMENTATION: (): Mars.Future<string> => Mars.Result,
    RATIFY_MINT_SIGS: (): Mars.FutureNumber => Mars.Result,
    canFinalize: (_index: Mars.NumberLike): Mars.FutureBoolean => Mars.Result,
    claimOwnership: (): Mars.Transaction => Mars.Result,
    claimTrueCurrencyProxyOwnership: (): Mars.Transaction => Mars.Result,
    finalizeMint: (_index: Mars.NumberLike): Mars.Transaction => Mars.Result,
    gasRefunder: (): Mars.Future<string> => Mars.Result,
    hasEnoughApproval: (_numberOfApproval: Mars.NumberLike, _value: Mars.NumberLike): Mars.FutureBoolean => Mars.Result,
    initialized: (): Mars.FutureBoolean => Mars.Result,
    instantMint: (_to: Mars.AddressLike, _value: Mars.NumberLike): Mars.Transaction => Mars.Result,
    instantMintLimit: (): Mars.FutureNumber => Mars.Result,
    instantMintPool: (): Mars.FutureNumber => Mars.Result,
    instantMintThreshold: (): Mars.FutureNumber => Mars.Result,
    invalidateAllPendingMints: (): Mars.Transaction => Mars.Result,
    issueClaimOwnership: (_other: Mars.AddressLike): Mars.Transaction => Mars.Result,
    mintKey: (): Mars.Future<string> => Mars.Result,
    mintOperationCount: (): Mars.FutureNumber => Mars.Result,
    mintOperations: (_: Mars.NumberLike): Mars.Future<string> => Mars.Result,
    mintPaused: (): Mars.FutureBoolean => Mars.Result,
    mintReqInvalidBeforeThisBlock: (): Mars.FutureNumber => Mars.Result,
    multiSigMintLimit: (): Mars.FutureNumber => Mars.Result,
    multiSigMintPool: (): Mars.FutureNumber => Mars.Result,
    multiSigMintThreshold: (): Mars.FutureNumber => Mars.Result,
    owner: (): Mars.Future<string> => Mars.Result,
    pauseMint: (_opIndex: Mars.NumberLike): Mars.Transaction => Mars.Result,
    pauseMints: (): Mars.Transaction => Mars.Result,
    pauseToken: (): Mars.Transaction => Mars.Result,
    pendingOwner: (): Mars.Future<string> => Mars.Result,
    ratifiedMintLimit: (): Mars.FutureNumber => Mars.Result,
    ratifiedMintPool: (): Mars.FutureNumber => Mars.Result,
    ratifiedMintThreshold: (): Mars.FutureNumber => Mars.Result,
    ratifiedPoolRefillApprovals: (_: Mars.NumberLike): Mars.Future<string> => Mars.Result,
    ratifyMint: (_index: Mars.NumberLike, _to: Mars.AddressLike, _value: Mars.NumberLike): Mars.Transaction => Mars.Result,
    reclaimEther: (_to: Mars.AddressLike): Mars.Transaction => Mars.Result,
    reclaimToken: (_token: Mars.AddressLike, _to: Mars.AddressLike): Mars.Transaction => Mars.Result,
    refillInstantMintPool: (): Mars.Transaction => Mars.Result,
    refillMultiSigMintPool: (): Mars.Transaction => Mars.Result,
    refillRatifiedMintPool: (): Mars.Transaction => Mars.Result,
    refundGasWithHook: (hookContract: Mars.AddressLike): Mars.Transaction => Mars.Result,
    registry: (): Mars.Future<string> => Mars.Result,
    registryAdmin: (): Mars.Future<string> => Mars.Result,
    requestMint: (_to: Mars.AddressLike, _value: Mars.NumberLike): Mars.Transaction => Mars.Result,
    requestReclaimEther: (): Mars.Transaction => Mars.Result,
    requestReclaimToken: (_token: Mars.AddressLike): Mars.Transaction => Mars.Result,
    revokeMint: (_index: Mars.NumberLike): Mars.Transaction => Mars.Result,
    setBlacklisted: (account: Mars.AddressLike, isBlacklisted: Mars.BooleanLike): Mars.Transaction => Mars.Result,
    setBurnBounds: (_min: Mars.NumberLike, _max: Mars.NumberLike): Mars.Transaction => Mars.Result,
    setCanBurn: (burner: Mars.AddressLike, canBurn: Mars.BooleanLike): Mars.Transaction => Mars.Result,
    setGasRefunder: (refunder: Mars.AddressLike): Mars.Transaction => Mars.Result,
    setMintLimits: (_instant: Mars.NumberLike, _ratified: Mars.NumberLike, _multiSig: Mars.NumberLike): Mars.Transaction => Mars.Result,
    setMintThresholds: (_instant: Mars.NumberLike, _ratified: Mars.NumberLike, _multiSig: Mars.NumberLike): Mars.Transaction => Mars.Result,
    setRegistry: (_registry: Mars.AddressLike): Mars.Transaction => Mars.Result,
    setRegistryAdmin: (admin: Mars.AddressLike): Mars.Transaction => Mars.Result,
    setToken: (_newContract: Mars.AddressLike): Mars.Transaction => Mars.Result,
    token: (): Mars.Future<string> => Mars.Result,
    transferChild: (_child: Mars.AddressLike, _newOwner: Mars.AddressLike): Mars.Transaction => Mars.Result,
    transferMintKey: (_newMintKey: Mars.AddressLike): Mars.Transaction => Mars.Result,
    transferOwnership: (newOwner: Mars.AddressLike): Mars.Transaction => Mars.Result,
    transferTrueCurrencyProxyOwnership: (_newOwner: Mars.AddressLike): Mars.Transaction => Mars.Result,
    unpauseMint: (_opIndex: Mars.NumberLike): Mars.Transaction => Mars.Result,
    unpauseMints: (): Mars.Transaction => Mars.Result,
    upgradeTrueCurrencyProxyImplTo: (_implementation: Mars.AddressLike): Mars.Transaction => Mars.Result
  },
  abi: TokenControllerJSON.abi,
  bytecode: TokenControllerJSON.bytecode,
});



export const TokenControllerMock = Mars.createArtifact({
  name: "TokenControllerMock",
  constructor: (): void => Mars.Result,
  methods: {
    IS_MINT_PAUSER: (): Mars.FutureBytes => Mars.Result,
    IS_MINT_RATIFIER: (): Mars.FutureBytes => Mars.Result,
    IS_REDEMPTION_ADMIN: (): Mars.FutureBytes => Mars.Result,
    MULTISIG_MINT_SIGS: (): Mars.FutureNumber => Mars.Result,
    PAUSED_IMPLEMENTATION: (): Mars.Future<string> => Mars.Result,
    RATIFY_MINT_SIGS: (): Mars.FutureNumber => Mars.Result,
    canFinalize: (_index: Mars.NumberLike): Mars.FutureBoolean => Mars.Result,
    claimOwnership: (): Mars.Transaction => Mars.Result,
    claimTrueCurrencyProxyOwnership: (): Mars.Transaction => Mars.Result,
    finalizeMint: (_index: Mars.NumberLike): Mars.Transaction => Mars.Result,
    gasRefunder: (): Mars.Future<string> => Mars.Result,
    hasEnoughApproval: (_numberOfApproval: Mars.NumberLike, _value: Mars.NumberLike): Mars.FutureBoolean => Mars.Result,
    initialize: (): Mars.Transaction => Mars.Result,
    initializeWithParams: (_token: Mars.AddressLike, _registry: Mars.AddressLike): Mars.Transaction => Mars.Result,
    initialized: (): Mars.FutureBoolean => Mars.Result,
    instantMint: (_to: Mars.AddressLike, _value: Mars.NumberLike): Mars.Transaction => Mars.Result,
    instantMintLimit: (): Mars.FutureNumber => Mars.Result,
    instantMintPool: (): Mars.FutureNumber => Mars.Result,
    instantMintThreshold: (): Mars.FutureNumber => Mars.Result,
    invalidateAllPendingMints: (): Mars.Transaction => Mars.Result,
    issueClaimOwnership: (_other: Mars.AddressLike): Mars.Transaction => Mars.Result,
    mintKey: (): Mars.Future<string> => Mars.Result,
    mintOperationCount: (): Mars.FutureNumber => Mars.Result,
    mintOperations: (_: Mars.NumberLike): Mars.Future<string> => Mars.Result,
    mintPaused: (): Mars.FutureBoolean => Mars.Result,
    mintReqInvalidBeforeThisBlock: (): Mars.FutureNumber => Mars.Result,
    multiSigMintLimit: (): Mars.FutureNumber => Mars.Result,
    multiSigMintPool: (): Mars.FutureNumber => Mars.Result,
    multiSigMintThreshold: (): Mars.FutureNumber => Mars.Result,
    owner: (): Mars.Future<string> => Mars.Result,
    pauseMint: (_opIndex: Mars.NumberLike): Mars.Transaction => Mars.Result,
    pauseMints: (): Mars.Transaction => Mars.Result,
    pauseToken: (): Mars.Transaction => Mars.Result,
    pendingOwner: (): Mars.Future<string> => Mars.Result,
    ratifiedMintLimit: (): Mars.FutureNumber => Mars.Result,
    ratifiedMintPool: (): Mars.FutureNumber => Mars.Result,
    ratifiedMintThreshold: (): Mars.FutureNumber => Mars.Result,
    ratifiedPoolRefillApprovals: (_: Mars.NumberLike): Mars.Future<string> => Mars.Result,
    ratifyMint: (_index: Mars.NumberLike, _to: Mars.AddressLike, _value: Mars.NumberLike): Mars.Transaction => Mars.Result,
    reclaimEther: (_to: Mars.AddressLike): Mars.Transaction => Mars.Result,
    reclaimToken: (_token: Mars.AddressLike, _to: Mars.AddressLike): Mars.Transaction => Mars.Result,
    refillInstantMintPool: (): Mars.Transaction => Mars.Result,
    refillMultiSigMintPool: (): Mars.Transaction => Mars.Result,
    refillRatifiedMintPool: (): Mars.Transaction => Mars.Result,
    refundGasWithHook: (hookContract: Mars.AddressLike): Mars.Transaction => Mars.Result,
    registry: (): Mars.Future<string> => Mars.Result,
    registryAdmin: (): Mars.Future<string> => Mars.Result,
    requestMint: (_to: Mars.AddressLike, _value: Mars.NumberLike): Mars.Transaction => Mars.Result,
    requestReclaimEther: (): Mars.Transaction => Mars.Result,
    requestReclaimToken: (_token: Mars.AddressLike): Mars.Transaction => Mars.Result,
    revokeMint: (_index: Mars.NumberLike): Mars.Transaction => Mars.Result,
    setBlacklisted: (account: Mars.AddressLike, isBlacklisted: Mars.BooleanLike): Mars.Transaction => Mars.Result,
    setBurnBounds: (_min: Mars.NumberLike, _max: Mars.NumberLike): Mars.Transaction => Mars.Result,
    setCanBurn: (burner: Mars.AddressLike, canBurn: Mars.BooleanLike): Mars.Transaction => Mars.Result,
    setGasRefunder: (refunder: Mars.AddressLike): Mars.Transaction => Mars.Result,
    setMintLimits: (_instant: Mars.NumberLike, _ratified: Mars.NumberLike, _multiSig: Mars.NumberLike): Mars.Transaction => Mars.Result,
    setMintThresholds: (_instant: Mars.NumberLike, _ratified: Mars.NumberLike, _multiSig: Mars.NumberLike): Mars.Transaction => Mars.Result,
    setRegistry: (_registry: Mars.AddressLike): Mars.Transaction => Mars.Result,
    setRegistryAdmin: (admin: Mars.AddressLike): Mars.Transaction => Mars.Result,
    setToken: (_newContract: Mars.AddressLike): Mars.Transaction => Mars.Result,
    token: (): Mars.Future<string> => Mars.Result,
    transferChild: (_child: Mars.AddressLike, _newOwner: Mars.AddressLike): Mars.Transaction => Mars.Result,
    transferMintKey: (_newMintKey: Mars.AddressLike): Mars.Transaction => Mars.Result,
    transferOwnership: (newOwner: Mars.AddressLike): Mars.Transaction => Mars.Result,
    transferTrueCurrencyProxyOwnership: (_newOwner: Mars.AddressLike): Mars.Transaction => Mars.Result,
    unpauseMint: (_opIndex: Mars.NumberLike): Mars.Transaction => Mars.Result,
    unpauseMints: (): Mars.Transaction => Mars.Result,
    upgradeTrueCurrencyProxyImplTo: (_implementation: Mars.AddressLike): Mars.Transaction => Mars.Result
  },
  abi: TokenControllerMockJSON.abi,
  bytecode: TokenControllerMockJSON.bytecode,
});



export const TokenControllerPauseMock = Mars.createArtifact({
  name: "TokenControllerPauseMock",
  constructor: (): void => Mars.Result,
  methods: {
    IS_MINT_PAUSER: (): Mars.FutureBytes => Mars.Result,
    IS_MINT_RATIFIER: (): Mars.FutureBytes => Mars.Result,
    IS_REDEMPTION_ADMIN: (): Mars.FutureBytes => Mars.Result,
    MULTISIG_MINT_SIGS: (): Mars.FutureNumber => Mars.Result,
    PAUSED_IMPLEMENTATION: (): Mars.Future<string> => Mars.Result,
    RATIFY_MINT_SIGS: (): Mars.FutureNumber => Mars.Result,
    canFinalize: (_index: Mars.NumberLike): Mars.FutureBoolean => Mars.Result,
    claimOwnership: (): Mars.Transaction => Mars.Result,
    claimTrueCurrencyProxyOwnership: (): Mars.Transaction => Mars.Result,
    finalizeMint: (_index: Mars.NumberLike): Mars.Transaction => Mars.Result,
    gasRefunder: (): Mars.Future<string> => Mars.Result,
    hasEnoughApproval: (_numberOfApproval: Mars.NumberLike, _value: Mars.NumberLike): Mars.FutureBoolean => Mars.Result,
    initialize: (): Mars.Transaction => Mars.Result,
    initializeWithParams: (_token: Mars.AddressLike, _registry: Mars.AddressLike): Mars.Transaction => Mars.Result,
    initialized: (): Mars.FutureBoolean => Mars.Result,
    instantMint: (_to: Mars.AddressLike, _value: Mars.NumberLike): Mars.Transaction => Mars.Result,
    instantMintLimit: (): Mars.FutureNumber => Mars.Result,
    instantMintPool: (): Mars.FutureNumber => Mars.Result,
    instantMintThreshold: (): Mars.FutureNumber => Mars.Result,
    invalidateAllPendingMints: (): Mars.Transaction => Mars.Result,
    issueClaimOwnership: (_other: Mars.AddressLike): Mars.Transaction => Mars.Result,
    mintKey: (): Mars.Future<string> => Mars.Result,
    mintOperationCount: (): Mars.FutureNumber => Mars.Result,
    mintOperations: (_: Mars.NumberLike): Mars.Future<string> => Mars.Result,
    mintPaused: (): Mars.FutureBoolean => Mars.Result,
    mintReqInvalidBeforeThisBlock: (): Mars.FutureNumber => Mars.Result,
    multiSigMintLimit: (): Mars.FutureNumber => Mars.Result,
    multiSigMintPool: (): Mars.FutureNumber => Mars.Result,
    multiSigMintThreshold: (): Mars.FutureNumber => Mars.Result,
    owner: (): Mars.Future<string> => Mars.Result,
    pauseMint: (_opIndex: Mars.NumberLike): Mars.Transaction => Mars.Result,
    pauseMints: (): Mars.Transaction => Mars.Result,
    pauseToken: (): Mars.Transaction => Mars.Result,
    pausedImplementation: (): Mars.Future<string> => Mars.Result,
    pendingOwner: (): Mars.Future<string> => Mars.Result,
    ratifiedMintLimit: (): Mars.FutureNumber => Mars.Result,
    ratifiedMintPool: (): Mars.FutureNumber => Mars.Result,
    ratifiedMintThreshold: (): Mars.FutureNumber => Mars.Result,
    ratifiedPoolRefillApprovals: (_: Mars.NumberLike): Mars.Future<string> => Mars.Result,
    ratifyMint: (_index: Mars.NumberLike, _to: Mars.AddressLike, _value: Mars.NumberLike): Mars.Transaction => Mars.Result,
    reclaimEther: (_to: Mars.AddressLike): Mars.Transaction => Mars.Result,
    reclaimToken: (_token: Mars.AddressLike, _to: Mars.AddressLike): Mars.Transaction => Mars.Result,
    refillInstantMintPool: (): Mars.Transaction => Mars.Result,
    refillMultiSigMintPool: (): Mars.Transaction => Mars.Result,
    refillRatifiedMintPool: (): Mars.Transaction => Mars.Result,
    refundGasWithHook: (hookContract: Mars.AddressLike): Mars.Transaction => Mars.Result,
    registry: (): Mars.Future<string> => Mars.Result,
    registryAdmin: (): Mars.Future<string> => Mars.Result,
    requestMint: (_to: Mars.AddressLike, _value: Mars.NumberLike): Mars.Transaction => Mars.Result,
    requestReclaimEther: (): Mars.Transaction => Mars.Result,
    requestReclaimToken: (_token: Mars.AddressLike): Mars.Transaction => Mars.Result,
    revokeMint: (_index: Mars.NumberLike): Mars.Transaction => Mars.Result,
    setBlacklisted: (account: Mars.AddressLike, isBlacklisted: Mars.BooleanLike): Mars.Transaction => Mars.Result,
    setBurnBounds: (_min: Mars.NumberLike, _max: Mars.NumberLike): Mars.Transaction => Mars.Result,
    setCanBurn: (burner: Mars.AddressLike, canBurn: Mars.BooleanLike): Mars.Transaction => Mars.Result,
    setGasRefunder: (refunder: Mars.AddressLike): Mars.Transaction => Mars.Result,
    setMintLimits: (_instant: Mars.NumberLike, _ratified: Mars.NumberLike, _multiSig: Mars.NumberLike): Mars.Transaction => Mars.Result,
    setMintThresholds: (_instant: Mars.NumberLike, _ratified: Mars.NumberLike, _multiSig: Mars.NumberLike): Mars.Transaction => Mars.Result,
    setPausedImplementation: (_pausedToken: Mars.AddressLike): Mars.Transaction => Mars.Result,
    setRegistry: (_registry: Mars.AddressLike): Mars.Transaction => Mars.Result,
    setRegistryAdmin: (admin: Mars.AddressLike): Mars.Transaction => Mars.Result,
    setToken: (_newContract: Mars.AddressLike): Mars.Transaction => Mars.Result,
    token: (): Mars.Future<string> => Mars.Result,
    transferChild: (_child: Mars.AddressLike, _newOwner: Mars.AddressLike): Mars.Transaction => Mars.Result,
    transferMintKey: (_newMintKey: Mars.AddressLike): Mars.Transaction => Mars.Result,
    transferOwnership: (newOwner: Mars.AddressLike): Mars.Transaction => Mars.Result,
    transferTrueCurrencyProxyOwnership: (_newOwner: Mars.AddressLike): Mars.Transaction => Mars.Result,
    unpauseMint: (_opIndex: Mars.NumberLike): Mars.Transaction => Mars.Result,
    unpauseMints: (): Mars.Transaction => Mars.Result,
    upgradeTrueCurrencyProxyImplTo: (_implementation: Mars.AddressLike): Mars.Transaction => Mars.Result
  },
  abi: TokenControllerPauseMockJSON.abi,
  bytecode: TokenControllerPauseMockJSON.bytecode,
});



export const TokenFaucet = Mars.createArtifact({
  name: "TokenFaucet",
  constructor: (): void => Mars.Result,
  methods: {
    IS_MINT_PAUSER: (): Mars.FutureBytes => Mars.Result,
    IS_MINT_RATIFIER: (): Mars.FutureBytes => Mars.Result,
    IS_REDEMPTION_ADMIN: (): Mars.FutureBytes => Mars.Result,
    MULTISIG_MINT_SIGS: (): Mars.FutureNumber => Mars.Result,
    PAUSED_IMPLEMENTATION: (): Mars.Future<string> => Mars.Result,
    RATIFY_MINT_SIGS: (): Mars.FutureNumber => Mars.Result,
    canFinalize: (_index: Mars.NumberLike): Mars.FutureBoolean => Mars.Result,
    claimOwnership: (): Mars.Transaction => Mars.Result,
    claimTrueCurrencyProxyOwnership: (): Mars.Transaction => Mars.Result,
    faucet: (_amount: Mars.NumberLike): Mars.Transaction => Mars.Result,
    finalizeMint: (_index: Mars.NumberLike): Mars.Transaction => Mars.Result,
    gasRefunder: (): Mars.Future<string> => Mars.Result,
    hasEnoughApproval: (_numberOfApproval: Mars.NumberLike, _value: Mars.NumberLike): Mars.FutureBoolean => Mars.Result,
    initialize: (): Mars.Transaction => Mars.Result,
    initializeWithParams: (_token: Mars.AddressLike, _registry: Mars.AddressLike): Mars.Transaction => Mars.Result,
    initialized: (): Mars.FutureBoolean => Mars.Result,
    instantMint: (_to: Mars.AddressLike, _value: Mars.NumberLike): Mars.Transaction => Mars.Result,
    instantMintLimit: (): Mars.FutureNumber => Mars.Result,
    instantMintPool: (): Mars.FutureNumber => Mars.Result,
    instantMintThreshold: (): Mars.FutureNumber => Mars.Result,
    invalidateAllPendingMints: (): Mars.Transaction => Mars.Result,
    issueClaimOwnership: (_other: Mars.AddressLike): Mars.Transaction => Mars.Result,
    mintKey: (): Mars.Future<string> => Mars.Result,
    mintOperationCount: (): Mars.FutureNumber => Mars.Result,
    mintOperations: (_: Mars.NumberLike): Mars.Future<string> => Mars.Result,
    mintPaused: (): Mars.FutureBoolean => Mars.Result,
    mintReqInvalidBeforeThisBlock: (): Mars.FutureNumber => Mars.Result,
    multiSigMintLimit: (): Mars.FutureNumber => Mars.Result,
    multiSigMintPool: (): Mars.FutureNumber => Mars.Result,
    multiSigMintThreshold: (): Mars.FutureNumber => Mars.Result,
    owner: (): Mars.Future<string> => Mars.Result,
    pauseMint: (_opIndex: Mars.NumberLike): Mars.Transaction => Mars.Result,
    pauseMints: (): Mars.Transaction => Mars.Result,
    pauseToken: (): Mars.Transaction => Mars.Result,
    pendingOwner: (): Mars.Future<string> => Mars.Result,
    ratifiedMintLimit: (): Mars.FutureNumber => Mars.Result,
    ratifiedMintPool: (): Mars.FutureNumber => Mars.Result,
    ratifiedMintThreshold: (): Mars.FutureNumber => Mars.Result,
    ratifiedPoolRefillApprovals: (_: Mars.NumberLike): Mars.Future<string> => Mars.Result,
    ratifyMint: (_index: Mars.NumberLike, _to: Mars.AddressLike, _value: Mars.NumberLike): Mars.Transaction => Mars.Result,
    reclaimEther: (_to: Mars.AddressLike): Mars.Transaction => Mars.Result,
    reclaimToken: (_token: Mars.AddressLike, _to: Mars.AddressLike): Mars.Transaction => Mars.Result,
    refillInstantMintPool: (): Mars.Transaction => Mars.Result,
    refillMultiSigMintPool: (): Mars.Transaction => Mars.Result,
    refillRatifiedMintPool: (): Mars.Transaction => Mars.Result,
    refundGasWithHook: (hookContract: Mars.AddressLike): Mars.Transaction => Mars.Result,
    registry: (): Mars.Future<string> => Mars.Result,
    registryAdmin: (): Mars.Future<string> => Mars.Result,
    requestMint: (_to: Mars.AddressLike, _value: Mars.NumberLike): Mars.Transaction => Mars.Result,
    requestReclaimEther: (): Mars.Transaction => Mars.Result,
    requestReclaimToken: (_token: Mars.AddressLike): Mars.Transaction => Mars.Result,
    revokeMint: (_index: Mars.NumberLike): Mars.Transaction => Mars.Result,
    setBlacklisted: (account: Mars.AddressLike, isBlacklisted: Mars.BooleanLike): Mars.Transaction => Mars.Result,
    setBurnBounds: (_min: Mars.NumberLike, _max: Mars.NumberLike): Mars.Transaction => Mars.Result,
    setCanBurn: (burner: Mars.AddressLike, canBurn: Mars.BooleanLike): Mars.Transaction => Mars.Result,
    setGasRefunder: (refunder: Mars.AddressLike): Mars.Transaction => Mars.Result,
    setMintLimits: (_instant: Mars.NumberLike, _ratified: Mars.NumberLike, _multiSig: Mars.NumberLike): Mars.Transaction => Mars.Result,
    setMintThresholds: (_instant: Mars.NumberLike, _ratified: Mars.NumberLike, _multiSig: Mars.NumberLike): Mars.Transaction => Mars.Result,
    setRegistry: (_registry: Mars.AddressLike): Mars.Transaction => Mars.Result,
    setRegistryAdmin: (admin: Mars.AddressLike): Mars.Transaction => Mars.Result,
    setToken: (_newContract: Mars.AddressLike): Mars.Transaction => Mars.Result,
    token: (): Mars.Future<string> => Mars.Result,
    transferChild: (_child: Mars.AddressLike, _newOwner: Mars.AddressLike): Mars.Transaction => Mars.Result,
    transferMintKey: (_newMintKey: Mars.AddressLike): Mars.Transaction => Mars.Result,
    transferOwnership: (newOwner: Mars.AddressLike): Mars.Transaction => Mars.Result,
    transferTrueCurrencyProxyOwnership: (_newOwner: Mars.AddressLike): Mars.Transaction => Mars.Result,
    unpauseMint: (_opIndex: Mars.NumberLike): Mars.Transaction => Mars.Result,
    unpauseMints: (): Mars.Transaction => Mars.Result,
    upgradeTrueCurrencyProxyImplTo: (_implementation: Mars.AddressLike): Mars.Transaction => Mars.Result
  },
  abi: TokenFaucetJSON.abi,
  bytecode: TokenFaucetJSON.bytecode,
});



export const TrueAUD = Mars.createArtifact({
  name: "TrueAUD",
  constructor: (): void => Mars.Result,
  methods: {
    allowance: (owner: Mars.AddressLike, spender: Mars.AddressLike): Mars.FutureNumber => Mars.Result,
    approve: (spender: Mars.AddressLike, amount: Mars.NumberLike): Mars.Transaction => Mars.Result,
    balanceOf: (account: Mars.AddressLike): Mars.FutureNumber => Mars.Result,
    burn: (amount: Mars.NumberLike): Mars.Transaction => Mars.Result,
    burnMax: (): Mars.FutureNumber => Mars.Result,
    burnMin: (): Mars.FutureNumber => Mars.Result,
    canBurn: (_: Mars.AddressLike): Mars.FutureBoolean => Mars.Result,
    claimOwnership: (): Mars.Transaction => Mars.Result,
    decimals: (): Mars.Transaction => Mars.Result,
    decreaseAllowance: (spender: Mars.AddressLike, subtractedValue: Mars.NumberLike): Mars.Transaction => Mars.Result,
    increaseAllowance: (spender: Mars.AddressLike, addedValue: Mars.NumberLike): Mars.Transaction => Mars.Result,
    mint: (account: Mars.AddressLike, amount: Mars.NumberLike): Mars.Transaction => Mars.Result,
    name: (): Mars.Transaction => Mars.Result,
    owner: (): Mars.Future<string> => Mars.Result,
    pendingOwner: (): Mars.Future<string> => Mars.Result,
    reclaimEther: (_to: Mars.AddressLike): Mars.Transaction => Mars.Result,
    reclaimToken: (token: Mars.AddressLike, _to: Mars.AddressLike): Mars.Transaction => Mars.Result,
    refundGas: (amount: Mars.NumberLike): Mars.Transaction => Mars.Result,
    remainingGasRefundPool: (): Mars.FutureNumber => Mars.Result,
    remainingSheepRefundPool: (): Mars.FutureNumber => Mars.Result,
    rounding: (): Mars.Transaction => Mars.Result,
    setBlacklisted: (account: Mars.AddressLike, _isBlacklisted: Mars.BooleanLike): Mars.Transaction => Mars.Result,
    setBurnBounds: (_min: Mars.NumberLike, _max: Mars.NumberLike): Mars.Transaction => Mars.Result,
    setCanBurn: (account: Mars.AddressLike, _canBurn: Mars.BooleanLike): Mars.Transaction => Mars.Result,
    symbol: (): Mars.Transaction => Mars.Result,
    totalSupply: (): Mars.FutureNumber => Mars.Result,
    transfer: (recipient: Mars.AddressLike, amount: Mars.NumberLike): Mars.Transaction => Mars.Result,
    transferFrom: (sender: Mars.AddressLike, recipient: Mars.AddressLike, amount: Mars.NumberLike): Mars.Transaction => Mars.Result,
    transferOwnership: (newOwner: Mars.AddressLike): Mars.Transaction => Mars.Result
  },
  abi: TrueAUDJSON.abi,
  bytecode: TrueAUDJSON.bytecode,
});



export const TrueCAD = Mars.createArtifact({
  name: "TrueCAD",
  constructor: (): void => Mars.Result,
  methods: {
    allowance: (owner: Mars.AddressLike, spender: Mars.AddressLike): Mars.FutureNumber => Mars.Result,
    approve: (spender: Mars.AddressLike, amount: Mars.NumberLike): Mars.Transaction => Mars.Result,
    balanceOf: (account: Mars.AddressLike): Mars.FutureNumber => Mars.Result,
    burn: (amount: Mars.NumberLike): Mars.Transaction => Mars.Result,
    burnMax: (): Mars.FutureNumber => Mars.Result,
    burnMin: (): Mars.FutureNumber => Mars.Result,
    canBurn: (_: Mars.AddressLike): Mars.FutureBoolean => Mars.Result,
    claimOwnership: (): Mars.Transaction => Mars.Result,
    decimals: (): Mars.Transaction => Mars.Result,
    decreaseAllowance: (spender: Mars.AddressLike, subtractedValue: Mars.NumberLike): Mars.Transaction => Mars.Result,
    increaseAllowance: (spender: Mars.AddressLike, addedValue: Mars.NumberLike): Mars.Transaction => Mars.Result,
    mint: (account: Mars.AddressLike, amount: Mars.NumberLike): Mars.Transaction => Mars.Result,
    name: (): Mars.Transaction => Mars.Result,
    owner: (): Mars.Future<string> => Mars.Result,
    pendingOwner: (): Mars.Future<string> => Mars.Result,
    reclaimEther: (_to: Mars.AddressLike): Mars.Transaction => Mars.Result,
    reclaimToken: (token: Mars.AddressLike, _to: Mars.AddressLike): Mars.Transaction => Mars.Result,
    refundGas: (amount: Mars.NumberLike): Mars.Transaction => Mars.Result,
    remainingGasRefundPool: (): Mars.FutureNumber => Mars.Result,
    remainingSheepRefundPool: (): Mars.FutureNumber => Mars.Result,
    rounding: (): Mars.Transaction => Mars.Result,
    setBlacklisted: (account: Mars.AddressLike, _isBlacklisted: Mars.BooleanLike): Mars.Transaction => Mars.Result,
    setBurnBounds: (_min: Mars.NumberLike, _max: Mars.NumberLike): Mars.Transaction => Mars.Result,
    setCanBurn: (account: Mars.AddressLike, _canBurn: Mars.BooleanLike): Mars.Transaction => Mars.Result,
    symbol: (): Mars.Transaction => Mars.Result,
    totalSupply: (): Mars.FutureNumber => Mars.Result,
    transfer: (recipient: Mars.AddressLike, amount: Mars.NumberLike): Mars.Transaction => Mars.Result,
    transferFrom: (sender: Mars.AddressLike, recipient: Mars.AddressLike, amount: Mars.NumberLike): Mars.Transaction => Mars.Result,
    transferOwnership: (newOwner: Mars.AddressLike): Mars.Transaction => Mars.Result
  },
  abi: TrueCADJSON.abi,
  bytecode: TrueCADJSON.bytecode,
});



export const TrueCurrency = Mars.createArtifact({
  name: "TrueCurrency",
  constructor: (): void => Mars.Result,
  methods: {
    allowance: (owner: Mars.AddressLike, spender: Mars.AddressLike): Mars.FutureNumber => Mars.Result,
    approve: (spender: Mars.AddressLike, amount: Mars.NumberLike): Mars.Transaction => Mars.Result,
    balanceOf: (account: Mars.AddressLike): Mars.FutureNumber => Mars.Result,
    burn: (amount: Mars.NumberLike): Mars.Transaction => Mars.Result,
    burnMax: (): Mars.FutureNumber => Mars.Result,
    burnMin: (): Mars.FutureNumber => Mars.Result,
    canBurn: (_: Mars.AddressLike): Mars.FutureBoolean => Mars.Result,
    claimOwnership: (): Mars.Transaction => Mars.Result,
    decimals: (): Mars.Transaction => Mars.Result,
    decreaseAllowance: (spender: Mars.AddressLike, subtractedValue: Mars.NumberLike): Mars.Transaction => Mars.Result,
    increaseAllowance: (spender: Mars.AddressLike, addedValue: Mars.NumberLike): Mars.Transaction => Mars.Result,
    mint: (account: Mars.AddressLike, amount: Mars.NumberLike): Mars.Transaction => Mars.Result,
    name: (): Mars.Transaction => Mars.Result,
    owner: (): Mars.Future<string> => Mars.Result,
    pendingOwner: (): Mars.Future<string> => Mars.Result,
    reclaimEther: (_to: Mars.AddressLike): Mars.Transaction => Mars.Result,
    reclaimToken: (token: Mars.AddressLike, _to: Mars.AddressLike): Mars.Transaction => Mars.Result,
    setBlacklisted: (account: Mars.AddressLike, _isBlacklisted: Mars.BooleanLike): Mars.Transaction => Mars.Result,
    setBurnBounds: (_min: Mars.NumberLike, _max: Mars.NumberLike): Mars.Transaction => Mars.Result,
    setCanBurn: (account: Mars.AddressLike, _canBurn: Mars.BooleanLike): Mars.Transaction => Mars.Result,
    symbol: (): Mars.Transaction => Mars.Result,
    totalSupply: (): Mars.FutureNumber => Mars.Result,
    transfer: (recipient: Mars.AddressLike, amount: Mars.NumberLike): Mars.Transaction => Mars.Result,
    transferFrom: (sender: Mars.AddressLike, recipient: Mars.AddressLike, amount: Mars.NumberLike): Mars.Transaction => Mars.Result,
    transferOwnership: (newOwner: Mars.AddressLike): Mars.Transaction => Mars.Result
  },
  abi: TrueCurrencyJSON.abi,
  bytecode: TrueCurrencyJSON.bytecode,
});



export const TrueCurrencyWithGasRefund = Mars.createArtifact({
  name: "TrueCurrencyWithGasRefund",
  constructor: (): void => Mars.Result,
  methods: {
    allowance: (owner: Mars.AddressLike, spender: Mars.AddressLike): Mars.FutureNumber => Mars.Result,
    approve: (spender: Mars.AddressLike, amount: Mars.NumberLike): Mars.Transaction => Mars.Result,
    balanceOf: (account: Mars.AddressLike): Mars.FutureNumber => Mars.Result,
    burn: (amount: Mars.NumberLike): Mars.Transaction => Mars.Result,
    burnMax: (): Mars.FutureNumber => Mars.Result,
    burnMin: (): Mars.FutureNumber => Mars.Result,
    canBurn: (_: Mars.AddressLike): Mars.FutureBoolean => Mars.Result,
    claimOwnership: (): Mars.Transaction => Mars.Result,
    decimals: (): Mars.Transaction => Mars.Result,
    decreaseAllowance: (spender: Mars.AddressLike, subtractedValue: Mars.NumberLike): Mars.Transaction => Mars.Result,
    increaseAllowance: (spender: Mars.AddressLike, addedValue: Mars.NumberLike): Mars.Transaction => Mars.Result,
    mint: (account: Mars.AddressLike, amount: Mars.NumberLike): Mars.Transaction => Mars.Result,
    name: (): Mars.Transaction => Mars.Result,
    owner: (): Mars.Future<string> => Mars.Result,
    pendingOwner: (): Mars.Future<string> => Mars.Result,
    reclaimEther: (_to: Mars.AddressLike): Mars.Transaction => Mars.Result,
    reclaimToken: (token: Mars.AddressLike, _to: Mars.AddressLike): Mars.Transaction => Mars.Result,
    refundGas: (amount: Mars.NumberLike): Mars.Transaction => Mars.Result,
    remainingGasRefundPool: (): Mars.FutureNumber => Mars.Result,
    remainingSheepRefundPool: (): Mars.FutureNumber => Mars.Result,
    setBlacklisted: (account: Mars.AddressLike, _isBlacklisted: Mars.BooleanLike): Mars.Transaction => Mars.Result,
    setBurnBounds: (_min: Mars.NumberLike, _max: Mars.NumberLike): Mars.Transaction => Mars.Result,
    setCanBurn: (account: Mars.AddressLike, _canBurn: Mars.BooleanLike): Mars.Transaction => Mars.Result,
    symbol: (): Mars.Transaction => Mars.Result,
    totalSupply: (): Mars.FutureNumber => Mars.Result,
    transfer: (recipient: Mars.AddressLike, amount: Mars.NumberLike): Mars.Transaction => Mars.Result,
    transferFrom: (sender: Mars.AddressLike, recipient: Mars.AddressLike, amount: Mars.NumberLike): Mars.Transaction => Mars.Result,
    transferOwnership: (newOwner: Mars.AddressLike): Mars.Transaction => Mars.Result
  },
  abi: TrueCurrencyWithGasRefundJSON.abi,
  bytecode: TrueCurrencyWithGasRefundJSON.bytecode,
});



export const TrueCurrencyWithLegacyAutosweep = Mars.createArtifact({
  name: "TrueCurrencyWithLegacyAutosweep",
  constructor: (): void => Mars.Result,
  methods: {
    allowance: (owner: Mars.AddressLike, spender: Mars.AddressLike): Mars.FutureNumber => Mars.Result,
    approve: (spender: Mars.AddressLike, amount: Mars.NumberLike): Mars.Transaction => Mars.Result,
    balanceOf: (account: Mars.AddressLike): Mars.FutureNumber => Mars.Result,
    burn: (amount: Mars.NumberLike): Mars.Transaction => Mars.Result,
    burnMax: (): Mars.FutureNumber => Mars.Result,
    burnMin: (): Mars.FutureNumber => Mars.Result,
    canBurn: (_: Mars.AddressLike): Mars.FutureBoolean => Mars.Result,
    claimOwnership: (): Mars.Transaction => Mars.Result,
    decimals: (): Mars.Transaction => Mars.Result,
    decreaseAllowance: (spender: Mars.AddressLike, subtractedValue: Mars.NumberLike): Mars.Transaction => Mars.Result,
    delegateAllowance: (owner: Mars.AddressLike, spender: Mars.AddressLike): Mars.FutureNumber => Mars.Result,
    delegateApprove: (spender: Mars.AddressLike, value: Mars.NumberLike, origSender: Mars.AddressLike): Mars.Transaction => Mars.Result,
    delegateBalanceOf: (who: Mars.AddressLike): Mars.FutureNumber => Mars.Result,
    delegateDecreaseApproval: (spender: Mars.AddressLike, subtractedValue: Mars.NumberLike, origSender: Mars.AddressLike): Mars.Transaction => Mars.Result,
    delegateIncreaseApproval: (spender: Mars.AddressLike, addedValue: Mars.NumberLike, origSender: Mars.AddressLike): Mars.Transaction => Mars.Result,
    delegateTotalSupply: (): Mars.FutureNumber => Mars.Result,
    delegateTransfer: (to: Mars.AddressLike, value: Mars.NumberLike, origSender: Mars.AddressLike): Mars.Transaction => Mars.Result,
    delegateTransferFrom: (from: Mars.AddressLike, to: Mars.AddressLike, value: Mars.NumberLike, origSender: Mars.AddressLike): Mars.Transaction => Mars.Result,
    increaseAllowance: (spender: Mars.AddressLike, addedValue: Mars.NumberLike): Mars.Transaction => Mars.Result,
    mint: (account: Mars.AddressLike, amount: Mars.NumberLike): Mars.Transaction => Mars.Result,
    name: (): Mars.Transaction => Mars.Result,
    owner: (): Mars.Future<string> => Mars.Result,
    pendingOwner: (): Mars.Future<string> => Mars.Result,
    reclaimEther: (_to: Mars.AddressLike): Mars.Transaction => Mars.Result,
    reclaimToken: (token: Mars.AddressLike, _to: Mars.AddressLike): Mars.Transaction => Mars.Result,
    setBlacklisted: (account: Mars.AddressLike, _isBlacklisted: Mars.BooleanLike): Mars.Transaction => Mars.Result,
    setBurnBounds: (_min: Mars.NumberLike, _max: Mars.NumberLike): Mars.Transaction => Mars.Result,
    setCanBurn: (account: Mars.AddressLike, _canBurn: Mars.BooleanLike): Mars.Transaction => Mars.Result,
    symbol: (): Mars.Transaction => Mars.Result,
    totalSupply: (): Mars.FutureNumber => Mars.Result,
    transfer: (recipient: Mars.AddressLike, amount: Mars.NumberLike): Mars.Transaction => Mars.Result,
    transferFrom: (sender: Mars.AddressLike, recipient: Mars.AddressLike, amount: Mars.NumberLike): Mars.Transaction => Mars.Result,
    transferOwnership: (newOwner: Mars.AddressLike): Mars.Transaction => Mars.Result
  },
  abi: TrueCurrencyWithLegacyAutosweepJSON.abi,
  bytecode: TrueCurrencyWithLegacyAutosweepJSON.bytecode,
});



export const TrueFarm = Mars.createArtifact({
  name: "TrueFarm",
  constructor: (): void => Mars.Result,
  methods: {
    claim: (): Mars.Transaction => Mars.Result,
    claimable: (account: Mars.AddressLike): Mars.FutureNumber => Mars.Result,
    claimableReward: (_: Mars.AddressLike): Mars.FutureNumber => Mars.Result,
    cumulativeRewardPerToken: (): Mars.FutureNumber => Mars.Result,
    exit: (amount: Mars.NumberLike): Mars.Transaction => Mars.Result,
    initialize: (_stakingToken: Mars.AddressLike, _trueDistributor: Mars.AddressLike, _name: Mars.StringLike): Mars.Transaction => Mars.Result,
    name: (): Mars.Future<string> => Mars.Result,
    previousCumulatedRewardPerToken: (_: Mars.AddressLike): Mars.FutureNumber => Mars.Result,
    stake: (amount: Mars.NumberLike): Mars.Transaction => Mars.Result,
    staked: (_: Mars.AddressLike): Mars.FutureNumber => Mars.Result,
    stakingToken: (): Mars.Future<string> => Mars.Result,
    totalClaimedRewards: (): Mars.FutureNumber => Mars.Result,
    totalFarmRewards: (): Mars.FutureNumber => Mars.Result,
    totalStaked: (): Mars.FutureNumber => Mars.Result,
    trueDistributor: (): Mars.Future<string> => Mars.Result,
    trustToken: (): Mars.Future<string> => Mars.Result,
    unstake: (amount: Mars.NumberLike): Mars.Transaction => Mars.Result
  },
  abi: TrueFarmJSON.abi,
  bytecode: TrueFarmJSON.bytecode,
});



export const TrueFiPool = Mars.createArtifact({
  name: "TrueFiPool",
  constructor: (): void => Mars.Result,
  methods: {
    _currencyToken: (): Mars.Future<string> => Mars.Result,
    _curveGauge: (): Mars.Future<string> => Mars.Result,
    _curvePool: (): Mars.Future<string> => Mars.Result,
    _lender: (): Mars.Future<string> => Mars.Result,
    _minter: (): Mars.Future<string> => Mars.Result,
    _uniRouter: (): Mars.Future<string> => Mars.Result,
    allowance: (owner: Mars.AddressLike, spender: Mars.AddressLike): Mars.FutureNumber => Mars.Result,
    approve: (spender: Mars.AddressLike, amount: Mars.NumberLike): Mars.Transaction => Mars.Result,
    balanceOf: (account: Mars.AddressLike): Mars.FutureNumber => Mars.Result,
    borrow: (expectedAmount: Mars.NumberLike, amountWithoutFee: Mars.NumberLike): Mars.Transaction => Mars.Result,
    calcTokenAmount: (currencyAmount: Mars.NumberLike): Mars.FutureNumber => Mars.Result,
    calcWithdrawOneCoin: (yAmount: Mars.NumberLike): Mars.FutureNumber => Mars.Result,
    claimableFees: (): Mars.FutureNumber => Mars.Result,
    collectCrv: (amountOutMin: Mars.NumberLike, path: Mars.MaybeFuture<Mars.AddressLike[]>): Mars.Transaction => Mars.Result,
    collectFees: (beneficiary: Mars.AddressLike): Mars.Transaction => Mars.Result,
    currencyToken: (): Mars.Future<string> => Mars.Result,
    decimals: (): Mars.FutureNumber => Mars.Result,
    decreaseAllowance: (spender: Mars.AddressLike, subtractedValue: Mars.NumberLike): Mars.Transaction => Mars.Result,
    exit: (amount: Mars.NumberLike): Mars.Transaction => Mars.Result,
    flush: (currencyAmount: Mars.NumberLike, minMintAmount: Mars.NumberLike): Mars.Transaction => Mars.Result,
    increaseAllowance: (spender: Mars.AddressLike, addedValue: Mars.NumberLike): Mars.Transaction => Mars.Result,
    initialize: (__curvePool: Mars.AddressLike, __curveGauge: Mars.AddressLike, __currencyToken: Mars.AddressLike, __lender: Mars.AddressLike, __uniRouter: Mars.AddressLike): Mars.Transaction => Mars.Result,
    join: (amount: Mars.NumberLike): Mars.Transaction => Mars.Result,
    joiningFee: (): Mars.FutureNumber => Mars.Result,
    name: (): Mars.Future<string> => Mars.Result,
    owner: (): Mars.Future<string> => Mars.Result,
    poolValue: (): Mars.FutureNumber => Mars.Result,
    pull: (yAmount: Mars.NumberLike, minCurrencyAmount: Mars.NumberLike): Mars.Transaction => Mars.Result,
    renounceOwnership: (): Mars.Transaction => Mars.Result,
    repay: (currencyAmount: Mars.NumberLike): Mars.Transaction => Mars.Result,
    setJoiningFee: (fee: Mars.NumberLike): Mars.Transaction => Mars.Result,
    symbol: (): Mars.Future<string> => Mars.Result,
    totalSupply: (): Mars.FutureNumber => Mars.Result,
    transfer: (recipient: Mars.AddressLike, amount: Mars.NumberLike): Mars.Transaction => Mars.Result,
    transferFrom: (sender: Mars.AddressLike, recipient: Mars.AddressLike, amount: Mars.NumberLike): Mars.Transaction => Mars.Result,
    transferOwnership: (newOwner: Mars.AddressLike): Mars.Transaction => Mars.Result,
    yTokenBalance: (): Mars.FutureNumber => Mars.Result
  },
  abi: TrueFiPoolJSON.abi,
  bytecode: TrueFiPoolJSON.bytecode,
});



export const TrueGBP = Mars.createArtifact({
  name: "TrueGBP",
  constructor: (): void => Mars.Result,
  methods: {
    allowance: (owner: Mars.AddressLike, spender: Mars.AddressLike): Mars.FutureNumber => Mars.Result,
    approve: (spender: Mars.AddressLike, amount: Mars.NumberLike): Mars.Transaction => Mars.Result,
    balanceOf: (account: Mars.AddressLike): Mars.FutureNumber => Mars.Result,
    burn: (amount: Mars.NumberLike): Mars.Transaction => Mars.Result,
    burnMax: (): Mars.FutureNumber => Mars.Result,
    burnMin: (): Mars.FutureNumber => Mars.Result,
    canBurn: (_: Mars.AddressLike): Mars.FutureBoolean => Mars.Result,
    claimOwnership: (): Mars.Transaction => Mars.Result,
    decimals: (): Mars.Transaction => Mars.Result,
    decreaseAllowance: (spender: Mars.AddressLike, subtractedValue: Mars.NumberLike): Mars.Transaction => Mars.Result,
    increaseAllowance: (spender: Mars.AddressLike, addedValue: Mars.NumberLike): Mars.Transaction => Mars.Result,
    mint: (account: Mars.AddressLike, amount: Mars.NumberLike): Mars.Transaction => Mars.Result,
    name: (): Mars.Transaction => Mars.Result,
    owner: (): Mars.Future<string> => Mars.Result,
    pendingOwner: (): Mars.Future<string> => Mars.Result,
    reclaimEther: (_to: Mars.AddressLike): Mars.Transaction => Mars.Result,
    reclaimToken: (token: Mars.AddressLike, _to: Mars.AddressLike): Mars.Transaction => Mars.Result,
    refundGas: (amount: Mars.NumberLike): Mars.Transaction => Mars.Result,
    remainingGasRefundPool: (): Mars.FutureNumber => Mars.Result,
    remainingSheepRefundPool: (): Mars.FutureNumber => Mars.Result,
    rounding: (): Mars.Transaction => Mars.Result,
    setBlacklisted: (account: Mars.AddressLike, _isBlacklisted: Mars.BooleanLike): Mars.Transaction => Mars.Result,
    setBurnBounds: (_min: Mars.NumberLike, _max: Mars.NumberLike): Mars.Transaction => Mars.Result,
    setCanBurn: (account: Mars.AddressLike, _canBurn: Mars.BooleanLike): Mars.Transaction => Mars.Result,
    symbol: (): Mars.Transaction => Mars.Result,
    totalSupply: (): Mars.FutureNumber => Mars.Result,
    transfer: (recipient: Mars.AddressLike, amount: Mars.NumberLike): Mars.Transaction => Mars.Result,
    transferFrom: (sender: Mars.AddressLike, recipient: Mars.AddressLike, amount: Mars.NumberLike): Mars.Transaction => Mars.Result,
    transferOwnership: (newOwner: Mars.AddressLike): Mars.Transaction => Mars.Result
  },
  abi: TrueGBPJSON.abi,
  bytecode: TrueGBPJSON.bytecode,
});



export const TrueGold = Mars.createArtifact({
  name: "TrueGold",
  constructor: (): void => Mars.Result,
  methods: {
    allowance: (owner: Mars.AddressLike, spender: Mars.AddressLike): Mars.FutureNumber => Mars.Result,
    approve: (spender: Mars.AddressLike, amount: Mars.NumberLike): Mars.Transaction => Mars.Result,
    balanceOf: (account: Mars.AddressLike): Mars.FutureNumber => Mars.Result,
    burn: (amount: Mars.NumberLike): Mars.Transaction => Mars.Result,
    burnFrom: (account: Mars.AddressLike, amount: Mars.NumberLike): Mars.Transaction => Mars.Result,
    burnMax: (): Mars.FutureNumber => Mars.Result,
    burnMin: (): Mars.FutureNumber => Mars.Result,
    decimals: (): Mars.Transaction => Mars.Result,
    decreaseAllowance: (spender: Mars.AddressLike, subtractedValue: Mars.NumberLike): Mars.Transaction => Mars.Result,
    increaseAllowance: (spender: Mars.AddressLike, addedValue: Mars.NumberLike): Mars.Transaction => Mars.Result,
    initialize: (minBurnAmount: Mars.NumberLike, maxBurnAmount: Mars.NumberLike): Mars.Transaction => Mars.Result,
    mint: (account: Mars.AddressLike, amount: Mars.NumberLike): Mars.Transaction => Mars.Result,
    name: (): Mars.Transaction => Mars.Result,
    owner: (): Mars.Future<string> => Mars.Result,
    reclaimContract: (ownable: Mars.AddressLike): Mars.Transaction => Mars.Result,
    reclaimEther: (to: Mars.AddressLike): Mars.Transaction => Mars.Result,
    reclaimToken: (token: Mars.AddressLike, to: Mars.AddressLike): Mars.Transaction => Mars.Result,
    setBurnBounds: (minAmount: Mars.NumberLike, maxAmount: Mars.NumberLike): Mars.Transaction => Mars.Result,
    symbol: (): Mars.Transaction => Mars.Result,
    totalSupply: (): Mars.FutureNumber => Mars.Result,
    transfer: (recipient: Mars.AddressLike, amount: Mars.NumberLike): Mars.Transaction => Mars.Result,
    transferFrom: (sender: Mars.AddressLike, recipient: Mars.AddressLike, amount: Mars.NumberLike): Mars.Transaction => Mars.Result,
    transferOwnership: (newOwner: Mars.AddressLike): Mars.Transaction => Mars.Result
  },
  abi: TrueGoldJSON.abi,
  bytecode: TrueGoldJSON.bytecode,
});



export const TrueGoldController = Mars.createArtifact({
  name: "TrueGoldController",
  constructor: (): void => Mars.Result,
  methods: {
    IS_MINT_PAUSER: (): Mars.FutureBytes => Mars.Result,
    IS_MINT_RATIFIER: (): Mars.FutureBytes => Mars.Result,
    MULTISIG_MINT_SIGS: (): Mars.FutureNumber => Mars.Result,
    PAUSED_IMPLEMENTATION: (): Mars.Future<string> => Mars.Result,
    RATIFY_MINT_SIGS: (): Mars.FutureNumber => Mars.Result,
    canFinalize: (_index: Mars.NumberLike): Mars.FutureBoolean => Mars.Result,
    claimOwnership: (): Mars.Transaction => Mars.Result,
    claimTokenProxyOwnership: (): Mars.Transaction => Mars.Result,
    fastPause: (): Mars.Future<string> => Mars.Result,
    finalizeMint: (_index: Mars.NumberLike): Mars.Transaction => Mars.Result,
    hasEnoughApproval: (_numberOfApproval: Mars.NumberLike, _value: Mars.NumberLike): Mars.FutureBoolean => Mars.Result,
    initialize: (): Mars.Transaction => Mars.Result,
    initialized: (): Mars.FutureBoolean => Mars.Result,
    instantMint: (_to: Mars.AddressLike, _value: Mars.NumberLike): Mars.Transaction => Mars.Result,
    instantMintLimit: (): Mars.FutureNumber => Mars.Result,
    instantMintPool: (): Mars.FutureNumber => Mars.Result,
    instantMintThreshold: (): Mars.FutureNumber => Mars.Result,
    invalidateAllPendingMints: (): Mars.Transaction => Mars.Result,
    mintKey: (): Mars.Future<string> => Mars.Result,
    mintOperationCount: (): Mars.FutureNumber => Mars.Result,
    mintOperations: (_: Mars.NumberLike): Mars.Future<string> => Mars.Result,
    mintPaused: (): Mars.FutureBoolean => Mars.Result,
    mintReqInvalidBeforeThisBlock: (): Mars.FutureNumber => Mars.Result,
    multiSigMintLimit: (): Mars.FutureNumber => Mars.Result,
    multiSigMintPool: (): Mars.FutureNumber => Mars.Result,
    multiSigMintThreshold: (): Mars.FutureNumber => Mars.Result,
    owner: (): Mars.Future<string> => Mars.Result,
    pauseMint: (_opIndex: Mars.NumberLike): Mars.Transaction => Mars.Result,
    pauseMints: (): Mars.Transaction => Mars.Result,
    pauseToken: (): Mars.Transaction => Mars.Result,
    pendingOwner: (): Mars.Future<string> => Mars.Result,
    ratifiedMintLimit: (): Mars.FutureNumber => Mars.Result,
    ratifiedMintPool: (): Mars.FutureNumber => Mars.Result,
    ratifiedMintThreshold: (): Mars.FutureNumber => Mars.Result,
    ratifiedPoolRefillApprovals: (_: Mars.NumberLike): Mars.Future<string> => Mars.Result,
    ratifyMint: (_index: Mars.NumberLike, _to: Mars.AddressLike, _value: Mars.NumberLike): Mars.Transaction => Mars.Result,
    reclaimEther: (_to: Mars.AddressLike): Mars.Transaction => Mars.Result,
    reclaimToken: (_token: Mars.AddressLike, _to: Mars.AddressLike): Mars.Transaction => Mars.Result,
    refillInstantMintPool: (): Mars.Transaction => Mars.Result,
    refillMultiSigMintPool: (): Mars.Transaction => Mars.Result,
    refillRatifiedMintPool: (): Mars.Transaction => Mars.Result,
    registry: (): Mars.Future<string> => Mars.Result,
    requestMint: (_to: Mars.AddressLike, _value: Mars.NumberLike): Mars.Transaction => Mars.Result,
    requestReclaimContract: (_other: Mars.AddressLike): Mars.Transaction => Mars.Result,
    requestReclaimEther: (): Mars.Transaction => Mars.Result,
    requestReclaimToken: (_token: Mars.AddressLike): Mars.Transaction => Mars.Result,
    revokeMint: (_index: Mars.NumberLike): Mars.Transaction => Mars.Result,
    setBurnBounds: (_min: Mars.NumberLike, _max: Mars.NumberLike): Mars.Transaction => Mars.Result,
    setFastPause: (_newFastPause: Mars.AddressLike): Mars.Transaction => Mars.Result,
    setMintLimits: (_instant: Mars.NumberLike, _ratified: Mars.NumberLike, _multiSig: Mars.NumberLike): Mars.Transaction => Mars.Result,
    setMintThresholds: (_instant: Mars.NumberLike, _ratified: Mars.NumberLike, _multiSig: Mars.NumberLike): Mars.Transaction => Mars.Result,
    setRegistry: (_registry: Mars.AddressLike): Mars.Transaction => Mars.Result,
    setToken: (_newContract: Mars.AddressLike): Mars.Transaction => Mars.Result,
    token: (): Mars.Future<string> => Mars.Result,
    transferChild: (_child: Mars.AddressLike, _newOwner: Mars.AddressLike): Mars.Transaction => Mars.Result,
    transferMintKey: (_newMintKey: Mars.AddressLike): Mars.Transaction => Mars.Result,
    transferOwnership: (newOwner: Mars.AddressLike): Mars.Transaction => Mars.Result,
    transferTokenProxyOwnership: (_newOwner: Mars.AddressLike): Mars.Transaction => Mars.Result,
    unpauseMint: (_opIndex: Mars.NumberLike): Mars.Transaction => Mars.Result,
    unpauseMints: (): Mars.Transaction => Mars.Result,
    upgradeTokenProxyImplTo: (_implementation: Mars.AddressLike): Mars.Transaction => Mars.Result
  },
  abi: TrueGoldControllerJSON.abi,
  bytecode: TrueGoldControllerJSON.bytecode,
});



export const TrueHKD = Mars.createArtifact({
  name: "TrueHKD",
  constructor: (): void => Mars.Result,
  methods: {
    allowance: (owner: Mars.AddressLike, spender: Mars.AddressLike): Mars.FutureNumber => Mars.Result,
    approve: (spender: Mars.AddressLike, amount: Mars.NumberLike): Mars.Transaction => Mars.Result,
    balanceOf: (account: Mars.AddressLike): Mars.FutureNumber => Mars.Result,
    burn: (amount: Mars.NumberLike): Mars.Transaction => Mars.Result,
    burnMax: (): Mars.FutureNumber => Mars.Result,
    burnMin: (): Mars.FutureNumber => Mars.Result,
    canBurn: (_: Mars.AddressLike): Mars.FutureBoolean => Mars.Result,
    claimOwnership: (): Mars.Transaction => Mars.Result,
    decimals: (): Mars.Transaction => Mars.Result,
    decreaseAllowance: (spender: Mars.AddressLike, subtractedValue: Mars.NumberLike): Mars.Transaction => Mars.Result,
    increaseAllowance: (spender: Mars.AddressLike, addedValue: Mars.NumberLike): Mars.Transaction => Mars.Result,
    mint: (account: Mars.AddressLike, amount: Mars.NumberLike): Mars.Transaction => Mars.Result,
    name: (): Mars.Transaction => Mars.Result,
    owner: (): Mars.Future<string> => Mars.Result,
    pendingOwner: (): Mars.Future<string> => Mars.Result,
    reclaimEther: (_to: Mars.AddressLike): Mars.Transaction => Mars.Result,
    reclaimToken: (token: Mars.AddressLike, _to: Mars.AddressLike): Mars.Transaction => Mars.Result,
    refundGas: (amount: Mars.NumberLike): Mars.Transaction => Mars.Result,
    remainingGasRefundPool: (): Mars.FutureNumber => Mars.Result,
    remainingSheepRefundPool: (): Mars.FutureNumber => Mars.Result,
    rounding: (): Mars.Transaction => Mars.Result,
    setBlacklisted: (account: Mars.AddressLike, _isBlacklisted: Mars.BooleanLike): Mars.Transaction => Mars.Result,
    setBurnBounds: (_min: Mars.NumberLike, _max: Mars.NumberLike): Mars.Transaction => Mars.Result,
    setCanBurn: (account: Mars.AddressLike, _canBurn: Mars.BooleanLike): Mars.Transaction => Mars.Result,
    symbol: (): Mars.Transaction => Mars.Result,
    totalSupply: (): Mars.FutureNumber => Mars.Result,
    transfer: (recipient: Mars.AddressLike, amount: Mars.NumberLike): Mars.Transaction => Mars.Result,
    transferFrom: (sender: Mars.AddressLike, recipient: Mars.AddressLike, amount: Mars.NumberLike): Mars.Transaction => Mars.Result,
    transferOwnership: (newOwner: Mars.AddressLike): Mars.Transaction => Mars.Result
  },
  abi: TrueHKDJSON.abi,
  bytecode: TrueHKDJSON.bytecode,
});



export const TrueLender = Mars.createArtifact({
  name: "TrueLender",
  constructor: (): void => Mars.Result,
  methods: {
    allow: (who: Mars.AddressLike, status: Mars.BooleanLike): Mars.Transaction => Mars.Result,
    allowedBorrowers: (_: Mars.AddressLike): Mars.FutureBoolean => Mars.Result,
    currencyToken: (): Mars.Future<string> => Mars.Result,
    distribute: (recipient: Mars.AddressLike, numerator: Mars.NumberLike, denominator: Mars.NumberLike): Mars.Transaction => Mars.Result,
    fund: (loanToken: Mars.AddressLike): Mars.Transaction => Mars.Result,
    initialize: (_pool: Mars.AddressLike, _ratingAgency: Mars.AddressLike): Mars.Transaction => Mars.Result,
    loanIsAttractiveEnough: (apy: Mars.NumberLike): Mars.FutureBoolean => Mars.Result,
    loanIsCredible: (apy: Mars.NumberLike, term: Mars.NumberLike, yesVotes: Mars.NumberLike, noVotes: Mars.NumberLike): Mars.FutureBoolean => Mars.Result,
    loanSizeWithinBounds: (amount: Mars.NumberLike): Mars.FutureBoolean => Mars.Result,
    loanTermWithinBounds: (term: Mars.NumberLike): Mars.FutureBoolean => Mars.Result,
    loans: (): Mars.Future<Mars.Future<string>[]> => Mars.Result,
    maxApy: (): Mars.FutureNumber => Mars.Result,
    maxSize: (): Mars.FutureNumber => Mars.Result,
    maxTerm: (): Mars.FutureNumber => Mars.Result,
    minApy: (): Mars.FutureNumber => Mars.Result,
    minSize: (): Mars.FutureNumber => Mars.Result,
    minTerm: (): Mars.FutureNumber => Mars.Result,
    owner: (): Mars.Future<string> => Mars.Result,
    participationFactor: (): Mars.FutureNumber => Mars.Result,
    pool: (): Mars.Future<string> => Mars.Result,
    ratingAgency: (): Mars.Future<string> => Mars.Result,
    reclaim: (loanToken: Mars.AddressLike): Mars.Transaction => Mars.Result,
    renounceOwnership: (): Mars.Transaction => Mars.Result,
    riskAversion: (): Mars.FutureNumber => Mars.Result,
    setApyLimits: (newMinApy: Mars.NumberLike, newMaxApy: Mars.NumberLike): Mars.Transaction => Mars.Result,
    setParticipationFactor: (newParticipationFactor: Mars.NumberLike): Mars.Transaction => Mars.Result,
    setRiskAversion: (newRiskAversion: Mars.NumberLike): Mars.Transaction => Mars.Result,
    setSizeLimits: (min: Mars.NumberLike, max: Mars.NumberLike): Mars.Transaction => Mars.Result,
    setTermLimits: (min: Mars.NumberLike, max: Mars.NumberLike): Mars.Transaction => Mars.Result,
    setVotingPeriod: (newVotingPeriod: Mars.NumberLike): Mars.Transaction => Mars.Result,
    transferOwnership: (newOwner: Mars.AddressLike): Mars.Transaction => Mars.Result,
    value: (): Mars.FutureNumber => Mars.Result,
    votesThresholdReached: (amount: Mars.NumberLike, yesVotes: Mars.NumberLike): Mars.FutureBoolean => Mars.Result,
    votingLastedLongEnough: (start: Mars.NumberLike): Mars.FutureBoolean => Mars.Result,
    votingPeriod: (): Mars.FutureNumber => Mars.Result
  },
  abi: TrueLenderJSON.abi,
  bytecode: TrueLenderJSON.bytecode,
});



export const TrueMintableBurnable = Mars.createArtifact({
  name: "TrueMintableBurnable",
  constructor: (): void => Mars.Result,
  methods: {
    allowance: (owner: Mars.AddressLike, spender: Mars.AddressLike): Mars.FutureNumber => Mars.Result,
    approve: (spender: Mars.AddressLike, amount: Mars.NumberLike): Mars.Transaction => Mars.Result,
    balanceOf: (account: Mars.AddressLike): Mars.FutureNumber => Mars.Result,
    burn: (amount: Mars.NumberLike): Mars.Transaction => Mars.Result,
    burnFrom: (account: Mars.AddressLike, amount: Mars.NumberLike): Mars.Transaction => Mars.Result,
    burnMax: (): Mars.FutureNumber => Mars.Result,
    burnMin: (): Mars.FutureNumber => Mars.Result,
    decimals: (): Mars.Transaction => Mars.Result,
    decreaseAllowance: (spender: Mars.AddressLike, subtractedValue: Mars.NumberLike): Mars.Transaction => Mars.Result,
    increaseAllowance: (spender: Mars.AddressLike, addedValue: Mars.NumberLike): Mars.Transaction => Mars.Result,
    mint: (account: Mars.AddressLike, amount: Mars.NumberLike): Mars.Transaction => Mars.Result,
    name: (): Mars.Transaction => Mars.Result,
    owner: (): Mars.Future<string> => Mars.Result,
    setBurnBounds: (minAmount: Mars.NumberLike, maxAmount: Mars.NumberLike): Mars.Transaction => Mars.Result,
    symbol: (): Mars.Transaction => Mars.Result,
    totalSupply: (): Mars.FutureNumber => Mars.Result,
    transfer: (recipient: Mars.AddressLike, amount: Mars.NumberLike): Mars.Transaction => Mars.Result,
    transferFrom: (sender: Mars.AddressLike, recipient: Mars.AddressLike, amount: Mars.NumberLike): Mars.Transaction => Mars.Result,
    transferOwnership: (newOwner: Mars.AddressLike): Mars.Transaction => Mars.Result
  },
  abi: TrueMintableBurnableJSON.abi,
  bytecode: TrueMintableBurnableJSON.bytecode,
});



export const TrueRatingAgency = Mars.createArtifact({
  name: "TrueRatingAgency",
  constructor: (): void => Mars.Result,
  methods: {
    allow: (who: Mars.AddressLike, status: Mars.BooleanLike): Mars.Transaction => Mars.Result,
    allowedSubmitters: (_: Mars.AddressLike): Mars.FutureBoolean => Mars.Result,
    burnFactor: (): Mars.FutureNumber => Mars.Result,
    claim: (id: Mars.AddressLike, voter: Mars.AddressLike): Mars.Transaction => Mars.Result,
    distributor: (): Mars.Future<string> => Mars.Result,
    factory: (): Mars.Future<string> => Mars.Result,
    getNoVote: (id: Mars.AddressLike, voter: Mars.AddressLike): Mars.FutureNumber => Mars.Result,
    getResults: (id: Mars.AddressLike): Mars.FutureNumber => Mars.Result,
    getTotalNoVotes: (id: Mars.AddressLike): Mars.FutureNumber => Mars.Result,
    getTotalYesVotes: (id: Mars.AddressLike): Mars.FutureNumber => Mars.Result,
    getVotingStart: (id: Mars.AddressLike): Mars.FutureNumber => Mars.Result,
    getYesVote: (id: Mars.AddressLike, voter: Mars.AddressLike): Mars.FutureNumber => Mars.Result,
    initialize: (_trustToken: Mars.AddressLike, _distributor: Mars.AddressLike, _factory: Mars.AddressLike): Mars.Transaction => Mars.Result,
    loans: (_: Mars.AddressLike): Mars.Future<string> => Mars.Result,
    lossFactor: (): Mars.FutureNumber => Mars.Result,
    no: (id: Mars.AddressLike, stake: Mars.NumberLike): Mars.Transaction => Mars.Result,
    owner: (): Mars.Future<string> => Mars.Result,
    renounceOwnership: (): Mars.Transaction => Mars.Result,
    retract: (id: Mars.AddressLike): Mars.Transaction => Mars.Result,
    setBurnFactor: (newBurnFactor: Mars.NumberLike): Mars.Transaction => Mars.Result,
    setLossFactor: (newLossFactor: Mars.NumberLike): Mars.Transaction => Mars.Result,
    status: (id: Mars.AddressLike): Mars.FutureNumber => Mars.Result,
    submit: (id: Mars.AddressLike): Mars.Transaction => Mars.Result,
    transferOwnership: (newOwner: Mars.AddressLike): Mars.Transaction => Mars.Result,
    trustToken: (): Mars.Future<string> => Mars.Result,
    withdraw: (id: Mars.AddressLike, stake: Mars.NumberLike): Mars.Transaction => Mars.Result,
    yes: (id: Mars.AddressLike, stake: Mars.NumberLike): Mars.Transaction => Mars.Result
  },
  abi: TrueRatingAgencyJSON.abi,
  bytecode: TrueRatingAgencyJSON.bytecode,
});



export const TrueUSD = Mars.createArtifact({
  name: "TrueUSD",
  constructor: (): void => Mars.Result,
  methods: {
    allowance: (owner: Mars.AddressLike, spender: Mars.AddressLike): Mars.FutureNumber => Mars.Result,
    approve: (spender: Mars.AddressLike, amount: Mars.NumberLike): Mars.Transaction => Mars.Result,
    balanceOf: (account: Mars.AddressLike): Mars.FutureNumber => Mars.Result,
    burn: (amount: Mars.NumberLike): Mars.Transaction => Mars.Result,
    burnMax: (): Mars.FutureNumber => Mars.Result,
    burnMin: (): Mars.FutureNumber => Mars.Result,
    canBurn: (_: Mars.AddressLike): Mars.FutureBoolean => Mars.Result,
    claimOwnership: (): Mars.Transaction => Mars.Result,
    decimals: (): Mars.Transaction => Mars.Result,
    decreaseAllowance: (spender: Mars.AddressLike, subtractedValue: Mars.NumberLike): Mars.Transaction => Mars.Result,
    delegateAllowance: (owner: Mars.AddressLike, spender: Mars.AddressLike): Mars.FutureNumber => Mars.Result,
    delegateApprove: (spender: Mars.AddressLike, value: Mars.NumberLike, origSender: Mars.AddressLike): Mars.Transaction => Mars.Result,
    delegateBalanceOf: (who: Mars.AddressLike): Mars.FutureNumber => Mars.Result,
    delegateDecreaseApproval: (spender: Mars.AddressLike, subtractedValue: Mars.NumberLike, origSender: Mars.AddressLike): Mars.Transaction => Mars.Result,
    delegateIncreaseApproval: (spender: Mars.AddressLike, addedValue: Mars.NumberLike, origSender: Mars.AddressLike): Mars.Transaction => Mars.Result,
    delegateTotalSupply: (): Mars.FutureNumber => Mars.Result,
    delegateTransfer: (to: Mars.AddressLike, value: Mars.NumberLike, origSender: Mars.AddressLike): Mars.Transaction => Mars.Result,
    delegateTransferFrom: (from: Mars.AddressLike, to: Mars.AddressLike, value: Mars.NumberLike, origSender: Mars.AddressLike): Mars.Transaction => Mars.Result,
    increaseAllowance: (spender: Mars.AddressLike, addedValue: Mars.NumberLike): Mars.Transaction => Mars.Result,
    mint: (account: Mars.AddressLike, amount: Mars.NumberLike): Mars.Transaction => Mars.Result,
    name: (): Mars.Transaction => Mars.Result,
    owner: (): Mars.Future<string> => Mars.Result,
    pendingOwner: (): Mars.Future<string> => Mars.Result,
    reclaimEther: (_to: Mars.AddressLike): Mars.Transaction => Mars.Result,
    reclaimToken: (token: Mars.AddressLike, _to: Mars.AddressLike): Mars.Transaction => Mars.Result,
    rounding: (): Mars.Transaction => Mars.Result,
    setBlacklisted: (account: Mars.AddressLike, _isBlacklisted: Mars.BooleanLike): Mars.Transaction => Mars.Result,
    setBurnBounds: (_min: Mars.NumberLike, _max: Mars.NumberLike): Mars.Transaction => Mars.Result,
    setCanBurn: (account: Mars.AddressLike, _canBurn: Mars.BooleanLike): Mars.Transaction => Mars.Result,
    symbol: (): Mars.Transaction => Mars.Result,
    totalSupply: (): Mars.FutureNumber => Mars.Result,
    transfer: (recipient: Mars.AddressLike, amount: Mars.NumberLike): Mars.Transaction => Mars.Result,
    transferFrom: (sender: Mars.AddressLike, recipient: Mars.AddressLike, amount: Mars.NumberLike): Mars.Transaction => Mars.Result,
    transferOwnership: (newOwner: Mars.AddressLike): Mars.Transaction => Mars.Result
  },
  abi: TrueUSDJSON.abi,
  bytecode: TrueUSDJSON.bytecode,
});



export const TrustToken = Mars.createArtifact({
  name: "TrustToken",
  constructor: (): void => Mars.Result,
  methods: {
    allowance: (_: Mars.AddressLike, __: Mars.AddressLike): Mars.FutureNumber => Mars.Result,
    approve: (spender: Mars.AddressLike, amount: Mars.NumberLike): Mars.Transaction => Mars.Result,
    balanceOf: (_: Mars.AddressLike): Mars.FutureNumber => Mars.Result,
    burn: (amount: Mars.NumberLike): Mars.Transaction => Mars.Result,
    claimOwnership: (): Mars.Transaction => Mars.Result,
    decimals: (): Mars.Transaction => Mars.Result,
    decreaseAllowance: (spender: Mars.AddressLike, subtractedValue: Mars.NumberLike): Mars.Transaction => Mars.Result,
    epochsPassed: (): Mars.FutureNumber => Mars.Result,
    finalEpoch: (): Mars.Transaction => Mars.Result,
    increaseAllowance: (spender: Mars.AddressLike, addedValue: Mars.NumberLike): Mars.Transaction => Mars.Result,
    initialize: (): Mars.Transaction => Mars.Result,
    latestEpoch: (): Mars.FutureNumber => Mars.Result,
    lockStart: (): Mars.Transaction => Mars.Result,
    lockedBalance: (account: Mars.AddressLike): Mars.FutureNumber => Mars.Result,
    mint: (_to: Mars.AddressLike, _amount: Mars.NumberLike): Mars.Transaction => Mars.Result,
    name: (): Mars.Transaction => Mars.Result,
    nextEpoch: (): Mars.FutureNumber => Mars.Result,
    owner: (): Mars.Future<string> => Mars.Result,
    pendingOwner: (): Mars.Future<string> => Mars.Result,
    registerLockup: (receiver: Mars.AddressLike, amount: Mars.NumberLike): Mars.Transaction => Mars.Result,
    rounding: (): Mars.Transaction => Mars.Result,
    setTimeLockRegistry: (newTimeLockRegistry: Mars.AddressLike): Mars.Transaction => Mars.Result,
    symbol: (): Mars.Transaction => Mars.Result,
    timeLockRegistry: (): Mars.Future<string> => Mars.Result,
    totalSupply: (): Mars.FutureNumber => Mars.Result,
    transfer: (recipient: Mars.AddressLike, amount: Mars.NumberLike): Mars.Transaction => Mars.Result,
    transferFrom: (sender: Mars.AddressLike, recipient: Mars.AddressLike, amount: Mars.NumberLike): Mars.Transaction => Mars.Result,
    transferOwnership: (newOwner: Mars.AddressLike): Mars.Transaction => Mars.Result,
    unlockedBalance: (account: Mars.AddressLike): Mars.FutureNumber => Mars.Result
  },
  abi: TrustTokenJSON.abi,
  bytecode: TrustTokenJSON.bytecode,
});

  