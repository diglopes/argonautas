const { Router } = require("express")
const IA = require("./scripts/AI")

const routes = Router()

routes.get("/estimarPraticagem", async (req, res) => {
    const { areaFundeio, idTrajeto } = req.query
    const tempoEstimado = await IA.run(areaFundeio, idTrajeto)
    res.status(200).json({ tempoEstimado })
})

module.exports = routes