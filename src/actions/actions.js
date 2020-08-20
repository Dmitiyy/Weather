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

const val = (value) => {
    return {
        type:'VAL',
        payValue: value
    }
}

export {col, rec, err, val};