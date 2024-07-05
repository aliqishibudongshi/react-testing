import { rest } from 'msw' 
export const handlers = [  
    // Intercept "GET https://example.com/user" requests...  
    rest.get('https://jsonplaceholder.typicode.com/users', (req, res, ctx) => {    
        // ...and respond to them using this JSON response.    
        return res(
            ctx.status(200),
            ctx.json([
                {name: '小明'},
                {name: '小红'},
                {name: '小文'},
            ])
        );
    })
];
