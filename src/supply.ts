import { ethers, utils, BigNumber, Contract } from 'ethers'
import { connect } from './providers'
import { getContract, fromTrustToken } from './utils'
import { contracts, wallets } from './constants'

const [network, provider, wallet, contractAt] = connect()
const TrustToken = contractAt('TrustToken', contracts.tru)

const MAX_SUPPLY: BigNumber = BigNumber.from('145000000000000000')

// calculate total supply through tru contract
export const getTotalSupply = async () => {
    
    const tru = await TrustToken.connect(wallet)
    const supply = await tru.totalSupply()
    return supply
}

// calculate burned as max supply - total supply
export const getBurned = async () => {
    const supply = await getTotalSupply()
    const burned = MAX_SUPPLY.sub(supply)
    return burned
}

// calculate circulating supply
export const getCirculatingSupply = async () => {
    let distributed: BigNumber = BigNumber.from('0')
    let unlocked: BigNumber = BigNumber.from('0')
    let unclaimed: BigNumber = BigNumber.from('0')

    const tru = await TrustToken.connect(wallet)

    // calculate amount distributed for linear distributors
    const linearDistributors = [
        contracts.tfiLpDistributor,
        contracts.uniTusdTfiDistributor,
        contracts.uniEthTruDistributor,
        contracts.balBalTruDistributor,
    ]

    for(let i = 0; i < linearDistributors.length; i++) {
        let LinearTrueDistributor = contractAt('LinearTrueDistributor', linearDistributors[i])
        let distributor = await LinearTrueDistributor.connect(wallet)
        let amountDistributed = await distributor.distributed()
        distributed = distributed.add(amountDistributed)
    }

    return distributed
}