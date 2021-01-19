import couple from '../Assets/Img/Brand_img/couple.png';

const TEXT = `Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ad est tempore accusantium earum suscipit iure sed et cupiditate deserunt,
at fugit veritatis dignissimos laborum vero eveniet quasi, commodi adipisci iusto. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod at architecto
quae reiciendis doloribus officia maiores culpa, vitae perferendis quam dolor error incidunt eligendi porro obcaecati quisquam nemo tenetur autem.
Repudiandae beatae pariatur repellat corrupti, veritatis nihil maxime similique illum, est voluptatibus dolorum amet. Modi suscipit odio veniam, quos in perspiciatis fuga?
Quo, voluptatum excepturi suscipit vel eos omnis id?
Deleniti, nesciunt dolore, iusto quo, molestiae unde possimus inventore placeat quae natus mollitia id voluptates nihil odio cumque! Necessitatibus illum
dolorem reiciendis, deleniti incidunt sequi? Officia blanditiis sapiente veritatis saepe.
Earum, nesciunt dolor? Doloremque adipisci accusantium ipsum numquam ratione voluptate labore officia ea dignissimos obcaecati, molestias nihil
esse natus qui nulla quo itaque necessitatibus quos possimus! Porro quidem quam saepe!`;


let initialState = {
    image: couple,
    text: [
        { id: 1, paragraph: TEXT },
        { id: 2, paragraph: TEXT },
        { id: 3, paragraph: TEXT },
        { id: 4, paragraph: TEXT },
        { id: 5, paragraph: TEXT },
        { id: 6, paragraph: TEXT }
    ],
    videoUrl: 'https://www.youtube.com/watch?v=IUN664s7N-c',
};


const brandPageReducer = (state = initialState, action) =>{
    switch (action.type){
        default:
            return state;
    }
};



export default brandPageReducer;