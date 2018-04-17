const STORAGE_KEY = 'vue-tasks'

export function saveTasks({ state: { tasks, newId }}) {
    window.localStorage[STORAGE_KEY] = JSON.stringify(({
        tasks,
        newId
    }))
}

export function loadTasks({ state, commit }) {
    let data = JSON.parse(
        window.localStorage[STORAGE_KEY]
        || '{"tasks":[], "newId": 0}'
    )
    state.tasks = data.tasks
    state.newId = data.newId
    return data
}

export function setAllDone({state}, done) {
    state.tasks = state.tasks.map(task => ({
        ...task,
        done,
    }))
}

export function clearCompleted({state}) {
    state.tasks = state.tasks.filter(task => !task.done)
}

export function getNewId({state}) {
    return state.newId++
}

export function deleteTask({state}, task) {
    state.tasks = state.tasks.filter(t =>
        t.id !== task.id
    )
}

export async function addTask({ state, dispatch }, title) {
    state.tasks.push({
        id:   await dispatch('getNewId'),
        title,
        done: false,
    })
}
