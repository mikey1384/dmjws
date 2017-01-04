const defaultState = {
  table: {
    columns: ['#', 'Source'],
    rows: [
      [
        '1',
        '<a target="_blank" href="http://minecraft.gamepedia.com/Minecraft_Wiki">http://minecraft.gamepedia.com/Minecraft_Wiki</a>'
      ]
    ]
  }
}

export default function reducers(state = defaultState, action) {
  switch (action.type) {
    default: return state;
  }
}
