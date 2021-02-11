const INITIAL_STATE ={
    sections: [
        {
          title: 'bender',
          imageUrl: 'https://i.ibb.co/nnxF6tL/bender.jpg',
          id: 1,
          linkUrl: 'shop/hats'
        },
        {
          title: 'fry',
          imageUrl: 'https://i.ibb.co/56pm0JN/fry3.png',
          id: 2,
          linkUrl: 'shop/jackets'
        },
        {
          title: 'leila',
          imageUrl: 'https://i.ibb.co/kmdj29w/leila.png',
          id: 3,
          linkUrl: 'shop/sneakers'
        },
        {
          title: 'zoidberg',
          imageUrl: 'https://i.ibb.co/bsvjT9h/wallup-net.jpg',
          size: 'large',
          id: 4,
          linkUrl: 'shop/womens'
        },
        {
          title: 'planet express ship',
          imageUrl: 'https://i.ibb.co/jW0PfPG/planetex.jpg',
          size: 'large',
          id: 5,
          linkUrl: 'shop/mens'
        } ]
};

const directoryReducer = (state = INITIAL_STATE, action) => {
    switch(action.type){
        default:
            return state;
    }
};

export default directoryReducer;