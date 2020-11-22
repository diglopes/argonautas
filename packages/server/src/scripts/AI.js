const { exec } = require('child_process')
const { promisify } = require('util')
const execPromisified = promisify(exec)
const path = 

async function run(areaFundeio, idTrajeto) {
    const res = await execPromisified(`python3 -W ignore /home/ubuntu/ann_MPerceptron_Tprat_extimation_past_2.py ${areaFundeio} ${idTrajeto}`)
    console.log(Number(Number(res.stdout)));
}

module.exports = { run }