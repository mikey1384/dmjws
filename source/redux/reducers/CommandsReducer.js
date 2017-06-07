const defaultState = {
  table: {
    columns: ['title', 'video', 'description'],
    rows: [
      ['1', '게임모드 (크리에티브, 서바이벌, 어드벤처, 관전) 중 하나로 바꾼다.'],
      ['2', '/spawnpoint', '스폰포인트 ()'],
      ['3', '/help [CommandName]', 'Provides more information on the given command.'],
      ['4', '/give', 'Gives you a specific item(including things not in your inventory)']
    ]
  }
};

export default function reducers(state = defaultState, action) {
  switch (action.type) {
    default: return state;
  }
}
