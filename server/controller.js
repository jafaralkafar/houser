module.exports = {
    getAll: (req, res) => {
        const db = req.app.get('db')
        db.get_all().then(response=>{
            res.status(200).send(response)
        }).catch(err => res.status(500).send(console.log(err)))
    },
    createHouse: (req, res) => {
        const db = req.app.get('db')
        db.create_house(req.body).then(response => {
            res.send(response)
        }).catch(err => res.status(500).send(console.log(err)))
    },
    updateHouse: (req, res) => {
        const db = req.app.get('db')
        let {id} = req.params
        let house = req.body
        house.id = id
        db.edit_house(house).then(response => {
            res.send(response)
        }).catch(err => res.status(500).send(console.log(err)))
    },
    deleteHouse: (req, res) => {
        const db = req.app.get('db')
        let {id} = req.params
        db.delete_house(id).then(response => {
            res.send(response)
        }).catch(err => res.status(500).send(console.log(err)))
    }
}