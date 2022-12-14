import { plannerInstace } from "./instances"


class ApiPlanner {
    getItem = async () => {
       try {
            const response = await plannerInstace('/findAllForecastPlanerItems')
            return response.data

       } catch (err) {
        console.log(err)
       }     
    }

    deleteItem = async (id) => {
        try {
            await plannerInstace(`/deleteForecastPlannerItemById?itemId=${id}`)
        } catch (err) {
            console.log(err)
        }
    }

    addItem = async (send, start, end) => {
        try {
            await plannerInstace(`/addNewForecastPlannerItem?dateOfSend=${send}&forecastStart=${start}&forecastEnd=${end}`)
        } catch (err) {
            console.log(err)
        }
    }
}

export const apiPlanner = new ApiPlanner ()