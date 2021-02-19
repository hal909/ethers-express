import { connect } from './providers'
import { contracts } from './constants'

const [network, provider, wallet, contractAt] = connect()


// calculate circulating supply
export const getCirculatingSupply = async () => {
    const burned = await getBurned()
    const teamCirculating = await getTeamCirculating()
    const futureTeamCirculating = await getFutureTeamCirculating()
    const incentiveCirculating = await getIncentiveCirculating()
    const companyCirculating = getCompanyCirculating()
    const preSale = await getPreSale()
    console.log('burned: '+burned)
    console.log('teamCirculating: '+teamCirculating)
    console.log('futureTeamCirculating: '+futureTeamCirculating)
    console.log('incentiveCirculating: '+incentiveCirculating)
    console.log('companyCirculating: '+companyCirculating)
    console.log('preSale: '+preSale)
    
    const circulatingSupply = -burned+teamCirculating+futureTeamCirculating+incentiveCirculating+companyCirculating+preSale
    return circulatingSupply
}

// calculate total supply through tru contract
const getTotalSupply = async () => {
    const TrustToken = contractAt('TrustToken', contracts.tru)
    const tru = await TrustToken.connect(wallet)
    const supply = await tru.totalSupply()/1e8
    return supply
}

// calculate burned as max supply - total supply
// burned from etherscan 
export const getBurned = async () => {
    const supply = await getTotalSupply()
    const MAX_SUPPLY = 1450000000
    const burned = MAX_SUPPLY - supply
    return burned
}

const getTeamCirculating = async () => {
    const TOTAL_TEAM = 268250000

    const truContract = contractAt('TrustToken', contracts.tru)
    const grantedButNotUnlocked = await truContract.balanceOf(contracts.grantedButNotUnlocked)/1e8
    const options = await truContract.balanceOf(contracts.options)/1e8
    const teamCirculating = TOTAL_TEAM-grantedButNotUnlocked-options    

    return teamCirculating
}

const getFutureTeamCirculating = async () => {
    const TOTAL_FUTURE_TEAM = 65250000

    const truContract = contractAt('TrustToken', contracts.tru)
    const futureTeam = await truContract.balanceOf(contracts.futureTeam)/1e8
    const futureTeamCirculating = TOTAL_FUTURE_TEAM-futureTeam
    return futureTeamCirculating
}

const getIncentiveCirculating = async() => {
    const TOTAL_INCENTIVE = 565500000

    const truContract = contractAt('TrustToken', contracts.tru)
    const BAL_BAL_TRU = await truContract.balanceOf(contracts.balBalTruDistributor)/1e8
    const UNI_ETH_TRU = await truContract.balanceOf(contracts.uniEthTruDistributor)/1e8
    const UNI_TUSD_LP = await truContract.balanceOf(contracts.uniTusdTfiDistributor)/1e8
    const TrueFi_LP = await truContract.balanceOf(contracts.tfiLpDistributor)/1e8
    const TRU_Voters = await truContract.balanceOf(contracts.creditMarketDistributor)/1e8
    const NXM = await truContract.balanceOf(contracts.nxmDistributor)/1e8
    const MULTISIG = await truContract.balanceOf(contracts.multisig)/1e8
    const STAKING_DISTRIBUTOR = await truContract.balanceOf(contracts.stakingDistributor)/1e8
    const STK_TRU_DISTRIBUTOR = await truContract.balanceOf(contracts.stkTruDistributor)/1e8
    
    const incentiveCirculating = TOTAL_INCENTIVE-BAL_BAL_TRU-UNI_ETH_TRU-UNI_TUSD_LP-TrueFi_LP-TRU_Voters-NXM-MULTISIG-STAKING_DISTRIBUTOR-STK_TRU_DISTRIBUTOR
    return incentiveCirculating
}
const getCompanyCirculating = () => {
    const TOTAL_COMPANY = 163082598
    const FIRST_RELEASE_DATE = Date.parse('21 Nov 2020 00:00:00 GMT')
    const numberOfRelease = Math.ceil((Date.now()-FIRST_RELEASE_DATE)/(1000*60*60*24*30*12))
    const company = TOTAL_COMPANY * numberOfRelease/3
    return company
}

const getPreSale = async () => {
    const TOTAL_PRESALE = 387917402
    
    const truContract = contractAt('TrustToken', contracts.tru)
    const toBeDistributed = await truContract.balanceOf(contracts.preSaleToBeDist)/1e8
    const alreadyDist = TOTAL_PRESALE-toBeDistributed

    const FIRST_RELEASE_DATE = Date.parse('21 Nov 2020 00:00:00 GMT')
    const numberOfRelease = Math.ceil((Date.now()-FIRST_RELEASE_DATE)/(1000*60*60*24*30*3))
    const preSale = alreadyDist * numberOfRelease/8

    return preSale
}


