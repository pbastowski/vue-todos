export function pluralize(length, singular = "item", plural = "items") {
    let text =
            length === 0 || length > 1
                ? plural
                : singular
    return length + ' ' + text
}
