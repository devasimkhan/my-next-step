

const addRating = async(req, res) => {
    res.send("ADD Rating")
}


const getRating = async(req, res) => {
    res.send("ADD Rating....")
}



const ratingControllers = {
    addRating ,getRating
}

export default ratingControllers