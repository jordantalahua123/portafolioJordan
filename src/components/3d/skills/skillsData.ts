export interface SkillItem {
    id: string
    label: string
    logo: string
    accentColor: string
}

export const skillsData: SkillItem[] = [
    { id: 'html',     label: 'HTML5',      logo: '/logos/html.svg',     accentColor: '#e34f26' },
    { id: 'css',      label: 'CSS3',       logo: '/logos/css.svg',      accentColor: '#1572b6' },
    { id: 'js',       label: 'JavaScript', logo: '/logos/js.svg',       accentColor: '#f7df1e' },
    { id: 'ts',       label: 'TypeScript', logo: '/logos/ts.svg',       accentColor: '#3178c6' },
    { id: 'react',    label: 'React',      logo: '/logos/react.svg',    accentColor: '#61dafb' },
    { id: 'redux',    label: 'Redux',      logo: '/logos/redux.svg',    accentColor: '#764abc' },
    { id: 'tailwind', label: 'Tailwind',   logo: '/logos/tailwind.svg', accentColor: '#38bdf8' },
    { id: 'nodejs',   label: 'Node.js',    logo: '/logos/nodejs.svg',   accentColor: '#83cd29' },
    { id: 'mongo',    label: 'MongoDB',    logo: '/logos/mongo.svg',    accentColor: '#4db33d' },
    { id: 'threejs',  label: 'Three.js',   logo: '/logos/threejs.svg',  accentColor: '#ffffff' },
    { id: 'git',      label: 'Git',        logo: '/logos/git.svg',      accentColor: '#f05032' },
    { id: 'figma',    label: 'Figma',      logo: '/logos/figma.svg',    accentColor: '#f24e1e' },
    { id: 'docker',   label: 'Docker',     logo: '/logos/docker.svg',   accentColor: '#2496ed' },
]

// Layout: 3 rows offset (4 / 5 / 4)
export const hexLayout = skillsData.map((skill, i) => {
    const rows = [
        { count: 4, y: 1.7  },
        { count: 5, y: 0    },
        { count: 4, y: -1.7 },
    ]
    let row = 0
    let col = i
    if (i < 4)        { row = 0; col = i }
    else if (i < 9)   { row = 1; col = i - 4 }
    else               { row = 2; col = i - 9 }

    const rowDef = rows[row]
    const totalWidth = (rowDef.count - 1) * 2.0
    const offsetX = row === 1 ? 0 : 0.95
    const x = col * 2.0 - totalWidth / 2 + (row % 2 === 0 ? 0 : 0)

    return {
        ...skill,
        position: [
            x + offsetX * (row === 0 ? -0.5 : row === 2 ? 0.5 : 0),
            rowDef.y,
            (Math.random() - 0.5) * 0.3,
        ] as [number, number, number],
        index: i,
    }
})
