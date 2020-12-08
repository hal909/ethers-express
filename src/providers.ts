import { ethers, providers, utils, Wallet } from 'ethers'
import { getContract } from './utils'

const connect = (): [string, providers.Provider, Wallet, any] => {
  // get network from args
  const network = 'mainnet'

  // set provider from infura & network
  const provider = new providers.InfuraProvider(
    network, 'e33335b99d78415b82f8b9bc5fdc44c0')

  // use private key for wallet
  const wallet = new ethers.Wallet(process.env.PRIVATE_KEY, provider)

  const contractAt = getContract(wallet)

  return [network, provider, wallet, contractAt]
}

export { connect }