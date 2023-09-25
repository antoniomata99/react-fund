import { getHeroeById, getHeroesByOwner } from "../../src/base-pruebas/08-imp-exp";
import heroes from "../../src/data/heroes";


describe('Pruebas en 08-imp-exp', () => { 
    test('getHeroeById debe de retornar un héroe por ID', () => { 
        
        const id = 1;
        const hero = getHeroeById(id);
        
        expect( hero ).toEqual({ id: 1, name: 'Batman', owner: 'DC' })

    });
    
    test('getHeroeById debe de retornar undefined si no existe el ID', () => { 
        
        const id = 100;
        const hero = getHeroeById(id);

        // expect(hero).toBe(undefined);
        expect(hero).toBeFalsy();
    });

    test('getHeroesByOwner debe de retornar un arreglo con los héroes de DC', () => { 
        const owner = 'DC';
        const hero = getHeroesByOwner(owner);

        // console.log(heroes);

        expect( hero ).toHaveLength(3);
        expect (hero).toEqual(    [
            { id: 1, name: 'Batman', owner: 'DC' },
            { id: 3, name: 'Superman', owner: 'DC' },
            { id: 4, name: 'Flash', owner: 'DC' }
          ])
    })

    test('getHeroesByOwner debe de retornar un arreglo con los héroes de Marvel', () => {
        
        const owner = 'Marvel'
        const hero = getHeroesByOwner(owner);

        const heroesLength = hero.length;

        expect(heroesLength).toBe(2);
        expect(hero).toEqual(heroes.filter((heroe) => heroe.owner === owner ));

    })

 })