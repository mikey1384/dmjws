const defaultState = {
  sections: [
    {
      title: 'World MAP',
      titleColor: 'green',
      description: 'The overworld is where we live and spawn in.',
      imageSrc: '/images/worlds/overworld.jpg'
    },
    {
      title: 'Space',
      titleColor: 'red',
      description: 'The space is a very dangerous place.',
      imageSrc: '/images/worlds/nether.png'
    },
    {
      title: 'other planets',
      titleColor: 'purple',
      description: 'other planets are the end of the world!',
      imageSrc: '/images/worlds/end.png'
    }
  ]
}

export default function reducers(state = defaultState, action) {
  switch (action.type) {
    default: return state;
  }
}
