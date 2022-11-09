import { IFoodPlaceCrtieria } from "../../types/IFoodPlaceCriteria";
import sendToast from "../../utils/toast";
import httpRequest from "../api";

const actions = {
    async getFoodPlace(data: IFoodPlaceCrtieria) {
        try {
            const endpoint = `/food-place?rating=${data.rating}&price=${data.price}&distance=${data.distance}`;
            const resp = await httpRequest.get(endpoint)
            return sendToast(resp.data['foodPlace'], 'success')
        }
        catch(err: any) {
            return sendToast(err.response.data.error, 'error')
        } 
    },

};

export default actions;