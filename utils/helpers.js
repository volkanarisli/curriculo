export const classNames = (...classes) => {
    return classes.filter(Boolean).join(' ')
}

export const isEmptyObject = (obj) => {
    return obj && !(obj
        && Object.keys(obj).length === 0
        && Object.getPrototypeOf(obj) === Object.prototype)
}

