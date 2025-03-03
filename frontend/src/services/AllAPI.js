import { serverURL } from "./BaseURL"
import { commonAPI } from "./CommonAPI"

export const getAllTodos=async () => {
    return await commonAPI('GET',`${serverURL}/tasks`,"")
}

export const addTodo=async (reqBody) => {
    return await commonAPI('POST',`${serverURL}/tasks`,reqBody)
}

export const deleteTask=async (id) => {
    return await commonAPI('DELETE',`${serverURL}/tasks/${id}`,{});
}

export const updateTaskApi=async (id,reqBody) => {
    return await commonAPI('PUT',`${serverURL}/tasks/${id}`,reqBody);
}