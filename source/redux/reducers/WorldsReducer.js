const defaultState = {
  sections: [
    {
      title: 'Overworld',
      titleColor: 'green',
      description: 'The overworld is where we live and spawn in.',
      imageSrc: '/images/worlds/overworld.jpg'
    },
    {
      title: 'Nether',
      titleColor: 'red',
      description: 'The nether is a sort of hell, where strange monsters like Zombie pigmen, blazes, and ghasts spawn.',
      imageSrc: '/images/worlds/nether.png'
    },
    {
      title: 'End',
      titleColor: 'purple',
      description: 'The end is a sort of empty world where Endermen(see mobs for information) and the ender dragon lives.',
      imageSrc: '/images/worlds/end.png'
    }
  ]
}

export default function reducers(state = defaultState, action) {
  switch (action.type) {
    default: return state;
  }
}
