const { exec } = require('child_process')
const { promisify } = require('util')
const execPromisified = promisify(exec)
const { resolve} = require("path")

async function run(areaFundeio, idTrajeto) {
    const path = resolve(__dirname, "ann_MPerceptron_Tprat_extimation_past_2.py")
    const res = await execPromisified(`python3 -W ignore ${path} ${areaFundeio} ${idTrajeto}`)
    return (Number(res.stdout))
}

module.exports = { run }