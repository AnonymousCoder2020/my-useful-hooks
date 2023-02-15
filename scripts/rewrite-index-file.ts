import glob from 'glob'
import { promisify } from 'util'
import fs from 'fs/promises'
;(async () => {
  const hookNames: string[] = []
  ;(await promisify(glob)('./src/*.ts')).forEach((path: string) => {
    const hookName = path.match(/\.\/src\/([^\/]+)\.ts/)?.[1]
    if (!hookName || hookName === 'index') return
    hookNames.push(hookName)
  })
  console.log(hookNames.join(','))
  const indexFileValue = hookNames.map(hookName => `export { default as ${hookName} } from './${hookName}'`).join('\n')
  try {
    await fs.writeFile('./src/index.ts', indexFileValue)
  } catch (err) {
    console.warn(err)
  }
})()
