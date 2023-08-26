import { httpService } from './http-service'

export const authService = {
validateCoupon
}

async function validateCoupon() {
    try{
        const isValid = await httpService.post('validate-code')
        return isValid
    }catch(err){
        console.log('error occurd while validating code', err)
    }
}