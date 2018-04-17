export function filteredTasks(state) {
    return function(visibility) {
        if (visibility === 'all') return state.tasks
        if (visibility === 'active')
            return state.tasks.filter(task => !task.done)

        return state.tasks.filter(task => task.done)
    }
}

export function tasksRemaining(state) {
    return state.tasks.filter(task => !task.done).length
}
