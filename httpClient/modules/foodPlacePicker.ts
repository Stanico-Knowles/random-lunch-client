import { IFoodPlaceCrtieria } from "../../types/IFoodPlaceCriteria";
import sendToast from "../../utils/toast";
import httpRequest from "../api";
import { ToastTypes } from "../../enums/ToastTypes";

const actions = {
    async getFoodPlace(data: IFoodPlaceCrtieria) {
        try {
            const endpoint = `/food-place?rating=${data.rating}&price=${data.price}&distance=${data.distance}`;
            const resp = await httpRequest.get(endpoint)
            return sendToast(resp.data['foodPlace'], ToastTypes.SUCCESS)
        }
        catch(err: any) {
            return sendToast(err.response.data.error, ToastTypes.ERROR)
        } 
    },

};

export default actions;