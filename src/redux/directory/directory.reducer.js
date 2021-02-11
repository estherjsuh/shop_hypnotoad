const INITIAL_STATE ={
    sections: [
        {
          title: 'bender',
          imageUrl: 'https://i.ibb.co/nnxF6tL/bender.jpg',
          id: 1,
          linkUrl: 'shop/bender'
        },
        {
          title: 'fry',
          imageUrl: 'https://i.ibb.co/56pm0JN/fry3.png',
          id: 2,
          linkUrl: 'shop/fry'
        },
        {
          title: 'leela',
          imageUrl: 'https://i.ibb.co/kmdj29w/leila.png',
          id: 3,
          linkUrl: 'shop/leela'
        },
        {
          title: 'zoidberg',
          imageUrl: 'https://i.ibb.co/bsvjT9h/wallup-net.jpg',
          size: 'large',
          id: 4,
          linkUrl: 'shop/zoidberg'
        },
        {
          title: 'planetexpress',
          imageUrl: 'https://i.ibb.co/jW0PfPG/planetex.jpg',
          size: 'large',
          id: 5,
          linkUrl: 'shop/planetexpress'
        } ]
};

const directoryReducer = (state = INITIAL_STATE, action) => {
    switch(action.type){
        default:
            return state;
    }
};

export default directoryReducer;