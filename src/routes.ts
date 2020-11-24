import { 
    getTotalSupply,
    getBurned,
    getCirculatingSupply
} from './supply'

const createRoute = (call: Function) => async (req, res) => {
    try {
        const value = await call()
        res.send(value.toString())
    }
    catch (error) {
        console.log(error)
    }
}
    
export const totalSupply = createRoute(getTotalSupply)
export const burned = createRoute(getBurned)
export const circulatingSupply = createRoute(getCirculatingSupply)