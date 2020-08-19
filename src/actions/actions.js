const col = (name, temp, desc) => {
    return {
        type: 'COL',
        payName: name,
        payTemp: temp,
        payDesc: desc
    }
}

const rec = () => {
    return {
        type: 'REC'
    }
}

const err = () => {
    return {
        type: 'ERR'
    }
}

export {col, rec, err};