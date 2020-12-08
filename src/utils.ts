import { Wallet, ethers, utils, Contract } from 'ethers'

export const parseEther = utils.parseEther
export const fromEther = utils.formatEther

// eslint-disable-next-line @typescript-eslint/no-var-requires
export const getContractJSON = (contractName: string): any => require(`../abi/${contractName}.json`)

export const getContract = (wallet: ethers.Wallet) => (contractName: string, contractAddress: string): ethers.Contract => {
  const contractJson = getContractJSON(contractName)
  return new ethers.Contract(contractAddress, contractJson.abi, wallet)
}

export const wait = async <T>(tx: Promise<{wait: () => Promise<T>}>): Promise<T> => (await tx).wait()

