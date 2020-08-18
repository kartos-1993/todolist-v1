exports.today = () => {
    let today = new Date()

    let options = {
        weekday: 'long',
        day: 'numeric',
        month: 'long'
    }

    return today.toLocaleDateString("en-US", options)

}


exports.day = () => {
    let day = new Date()

    let options = {
        day: 'numeric'
    }

    return day.toLocaleDateString("en-US", options)

}