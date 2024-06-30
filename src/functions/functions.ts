const joinClassName = (...classNames: Array<string>) => {
    return classNames.filter(Boolean).join(' ')
}

const generateUId = () => {
    const length = 8 // length of UID
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'
    return Array.from({ length }, () => characters.charAt(Math.floor(Math.random() * characters.length))).join('')
}

export {
    joinClassName,
    generateUId,
}