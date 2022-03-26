module.exports = () => {
    return (req, res) => {
        res.status(200).send({
            status: 200,
            message: 'Welcome! This is a public post.'
        })
    }
}