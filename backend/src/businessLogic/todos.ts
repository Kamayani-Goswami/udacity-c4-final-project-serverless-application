import * as uuid from 'uuid'
import { TodoItem } from '../models/TodoItem'
import { CreateTodoRequest } from '../requests/CreateTodoRequest'
import { TodoAccess } from '../dataLayer/TodosAccess'
import { parseUserId } from '../auth/utils'

const todoAccess = new TodoAccess()

export async function CreateTodo(createTodoRequest: CreateTodoRequest, jwtToken: string): Promise<TodoItem>{
    const todoId = uuid.v4()
    const userId = parseUserId(jwtToken)

    return await todoAccess.CreateTodo({
        userId: userId,
        todoId: todoId,
        createdAt: new Date().toISOString(),
        name: createTodoRequest.name,
        dueDate: createTodoRequest.dueDate,
        done: false
    })
}

export async function GenerateUploadUrl(todoId: string): Promise<string>{
    return await todoAccess.GenerateUploadUrl(todoId)
}