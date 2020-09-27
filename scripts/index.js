const { exec } = require('child_process')
;(async () => {
  const [, , scriptName, ...props] = process.argv
  exec(`node --loader ts-node/esm.mjs scripts/${scriptName}.ts ${props.join(' ')}`, (err, stdout, stderr) => {
    if (err) {
      console.log(`(script_err ${scriptName}) ${stderr}`)
      return
    }
    console.log(`(script_log ${scriptName}) ${stdout}`)
  })
})()
