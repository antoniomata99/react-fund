describe('Pruebas en <DemoComponent />', () => { 
    test('Esta prueba no debe de fallar', () => {
        /* 
            1. Inicialización
            const message1 = 'Hola Mundo';
    
            2. Estimulo (que es lo que aplicamos al sujeto de pruebas)
            const message2 = message1.trim(); // eliminar espacios blancos
    
            3. Observar el comportamiento... esperado
            expect( message1 ).toBe(message2); se está diciendo con el toBe que message1 es igual a message2
    
        */
    
        // 1. Inicialización
        const message1 = 'Hola Mundo       ';
    
        // 2. estímulo
        const message2 = message1.trim();
    
        // 3. Observar 
    
        expect ( message1 ).toBe( message2 );
    })
 })
