import { httpService } from './http-service'

export const paypalService = {
createPayPalOrder
}

async function createPayPalOrder() {
    try{
        const orderUrl = await httpService.post('pay')
        return orderUrl
    }catch(err){
        console.log('Cannot create order', err)
    }
}