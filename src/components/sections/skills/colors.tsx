export const sceneColors = {
    light: {
        // Colores del cielo
        sky: {
            primary: '#87CEEB',    // Azul cielo base
            secondary: '#B0E0E6',  // Azul cielo medio
            horizon: '#F0F8FF',    // Color del horizonte
        },
        
        // Colores del terreno
        terrain: {
            base: '#d7ccc8',       // Color base del desierto
            dunes: '#bcaaa4',      // Color de las dunas
            highlights: '#efebe9',  // Color de las crestas
            pyramids: '#8d6e63',   // Color de las pirámides
        },

        // Colores del auto
        car: {
            body: '#e53935',       // Rojo brillante para el cuerpo
            cabin: '#2196f3',      // Azul brillante para la cabina
            wheels: '#212121',     // Negro para las ruedas
            details: '#ffd700',    // Dorado para detalles
        },

        // Iluminación
        lighting: {
            ambient: '#fff8e1',    // Luz ambiental cálida
            directional: '#ffd54f', // Luz directa amarilla
            point: '#ffecb3',      // Luz puntual cálida
            intensity: {
                ambient: 0.7,
                directional: 1.2,
                point: 0.5,
            }
        },

        // Efectos y partículas
        effects: {
            dust: '#f5e6d3',       // Polvo del desierto
            shadows: '#2c1810',    // Color de sombras
            fog: '#fff8e1',        // Niebla del desierto
        }
    },

    dark: {
        // Colores del cielo nocturno
        sky: {
            primary: '#1a237e',    // Azul noche profundo
            secondary: '#303f9f',  // Azul noche medio
            horizon: '#3949ab',    // Color del horizonte nocturno
        },

        // Colores del terreno nocturno - MEJORADOS PARA MAYOR VISIBILIDAD
        terrain: {
            base: '#d7ccc8',       // Color base del desierto
            dunes: '#bcaaa4',      // Color de las dunas
            highlights: '#efebe9',  // Color de las crestas
            pyramids: '#8d6e63',   // Color de las pirámides
        },


        // Colores del auto en modo nocturno
        car: {
            body: '#f44336',       // Rojo más oscuro
            cabin: '#90caf9',      // Azul más claro para visibilidad
            wheels: '#424242',     // Gris oscuro
            details: '#ffd700',    // Mantener dorado para contraste
        },

        // Iluminación nocturna - AUMENTADA PARA MEJOR VISIBILIDAD
        lighting: {
            ambient: '#4527a0',    // Luz ambiental nocturna
            directional: '#7e57c2', // Luz directa violeta
            point: '#5e35b1',      // Luz puntual violeta
            intensity: {
                ambient: 0.5,      // Aumentada de 0.5 a 0.7
                directional: 0.5,  // Aumentada de 0.8 a 1.0
                point: 0.3,        // Aumentada de 0.3 a 0.5
            }
        },

        // Efectos y partículas nocturnas
        effects: {
            dust: '#4a4a4a',       // Polvo nocturno
            shadows: '#000000',    // Sombras más oscuras
            fog: '#1a1a1a',        // Niebla nocturna
        }
    }
}; 