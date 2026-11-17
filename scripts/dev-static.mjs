/**
 * Fallback dev loop for folders Vite's dev server cannot serve from — here,
 * a path containing "#" (see vite.config.js).
 *
 * Runs `vite build --watch` next to `vite preview`, so edits are rebuilt and
 * served automatically. No HMR: refresh the browser after a save.
 */
import { spawn } from 'node:child_process'
import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

const root = path.dirname(path.dirname(fileURLToPath(import.meta.url)))
const vite = path.join(root, 'node_modules', 'vite', 'bin', 'vite.js')

const run = (args, label) => {
  const child = spawn(process.execPath, [vite, ...args], {
    cwd: root,
    stdio: ['ignore', 'pipe', 'pipe'],
  })
  const tag = (chunk) =>
    String(chunk)
      .split('\n')
      .filter((l) => l.trim())
      .forEach((l) => console.log(`[${label}] ${l}`))
  child.stdout.on('data', tag)
  child.stderr.on('data', tag)
  return child
}

const builder = run(['build', '--watch'], 'build')

// Wait for the first bundle before starting the static server.
const indexFile = path.join(root, 'dist', 'index.html')
let server

const waitForBuild = setInterval(() => {
  if (!fs.existsSync(indexFile)) return
  clearInterval(waitForBuild)
  server = run(['preview', '--port', '5173'], 'serve')
  console.log('\n  Belloso Cafe → http://localhost:5173  (refresh after edits)\n')
}, 400)

const shutdown = () => {
  clearInterval(waitForBuild)
  builder.kill()
  server?.kill()
  process.exit(0)
}

process.on('SIGINT', shutdown)
process.on('SIGTERM', shutdown)
