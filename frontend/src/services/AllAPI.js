import { serverURL } from "./BaseURL"
import { commonAPI } from "./CommonAPI"

export const getAllTodos=async () => {
    return await commonAPI('GET',`${serverURL}/tasks`,"")
}

export const addTodo=async (reqBody) => {
    return await commonAPI('POST',`${serverURL}/tasks`,reqBody)
}