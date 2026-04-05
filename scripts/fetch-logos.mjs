import https from 'node:https'
import http from 'node:http'
import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const outputDir = path.join(__dirname, '..', 'public', 'logos')

if (!fs.existsSync(outputDir)) {
    fs.mkdirSync(outputDir, { recursive: true })
}

const logos = [
    { name: 'html',     url: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg' },
    { name: 'css',      url: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg' },
    { name: 'js',       url: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg' },
    { name: 'ts',       url: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg' },
    { name: 'react',    url: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg' },
    { name: 'redux',    url: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redux/redux-original.svg' },
    { name: 'tailwind', url: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg' },
    { name: 'nodejs',   url: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg' },
    { name: 'mongo',    url: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg' },
    { name: 'threejs',  url: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/threejs/threejs-original.svg' },
    { name: 'git',      url: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg' },
    { name: 'figma',    url: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg' },
    { name: 'docker',   url: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg' },
]

function download(url, dest) {
    return new Promise((resolve, reject) => {
        const file = fs.createWriteStream(dest)
        const protocol = url.startsWith('https') ? https : http
        const req = protocol.get(url, (response) => {
            if (response.statusCode === 301 || response.statusCode === 302) {
                file.close()
                try { fs.unlinkSync(dest) } catch (_) {}
                download(response.headers.location, dest).then(resolve).catch(reject)
                return
            }
            if (response.statusCode !== 200) {
                file.close()
                try { fs.unlinkSync(dest) } catch (_) {}
                reject(new Error(`HTTP ${response.statusCode}`))
                return
            }
            response.pipe(file)
            file.on('finish', () => { file.close(); resolve() })
        })
        req.on('error', (err) => {
            try { fs.unlinkSync(dest) } catch (_) {}
            reject(err)
        })
    })
}

async function main() {
    console.log('Downloading tech logos from Devicon CDN...\n')
    let ok = 0
    for (const logo of logos) {
        const dest = path.join(outputDir, `${logo.name}.svg`)
        try {
            await download(logo.url, dest)
            console.log(`  ✓ ${logo.name}.svg`)
            ok++
        } catch (err) {
            console.error(`  ✗ ${logo.name}: ${err.message}`)
        }
    }
    console.log(`\nDone: ${ok}/${logos.length} logos downloaded to public/logos/`)
}

main()
