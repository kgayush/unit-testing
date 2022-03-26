module.exports = () => {
    return (req, res) => {
        res.status(200).send({
            status: 200,
            message: 'Welcome! You are authorized.'
        })
    }
}