const defaultState = {
  sections: [
    {
      title: 'Overworld Monsters',
      titleColor: '#000000',
      thumbs: [
        {
          title: 'Zombie',
          description: 'Zombies are one of the most rarest mobs in Minecraft. They spawn in caves and at night. They have 20 health(10 hearts, just like us)(when they don`t have armour) and give damage 2 HP(1 heart) in easy, 1.5 hearts in normal, and 2 hearts in hard. (easy, normal, and hard is the difficulty). Watch out for chicken jockeys- they`re REALLY fast!!!',
          src: '/images/mobs/zombie.png',
          topMargin: true
        },
        {
          title: 'Skeleton',
          description: 'Skeletons are also common mobs that spawn in the Overworld, and sometimes the Nether. DO NOT confuse with the wither skeleton-totally different.',
          src: '/images/mobs/skeleton.png',
          topMargin: true
        },
        {
          title: 'Creeper',
          description: 'Creepers are greenish mobs that blow up. When you hear a hissing sound behnd you, run!! That`s a creeper getting ready to blow up.',
          src: '/images/mobs/creeper.png',
          topMargin: true
        },
        {
          title: 'Spider',
          description: 'Spiders are mobs that give you damage by hitting you. Luckily, they only have 16 HP(8 hearts), so they are relatively easy to kill. Just don`t get them bunched up-that`s hard. Meanwhile, cave spiders are a lot more dangerous because they usually spawn in groups and give you poison effects.',
          src: '/images/mobs/spider.png',
          topMargin: true
        },
        {
          title: 'Endermen',
          description: 'Endermen are mobs that can teleport, which is pretty annonying. They have 40 HP(20 hearts) and attack if you attack first or look at its head. They can also carry blocks( And no, they can`t carry your bed away, so don`t worry about that.)Note: Endermen hate water. If you have cheats enabled, run home, close your door, and type \'/weather rain\' or \'/weather thunder\'in the command. Endermen will flee.',
          src: '/images/mobs/endermen.png',
          topMargin: true
        },
        {
          title: 'Witch',
          description: '마녀는 포션을 던지고 마셔서 자신을 보호하는 몹입니다. ',
          src: '/images/mobs/witch.png'
        }
      ]
    },
    {
      title: 'Nether monsters',
      titleColor: 'red',
      thumbs: [
        {
          title: 'Blaze',
          description: '블레이즈는 불을 던지고 접촉해서 데미지를 주는 몬스터입니다.',
          src: '/images/mobs/blaze.png',
          topMargin: true
        },
        {
          title: 'Ghast',
          description: '가스트는 아주 크고 \'네모난\' 몬스터입니다. 둥둥 떠다니면서 우리를 보면 화염구를 내뱉죠. 가스트는 화염구를 활로 쏴서 가스트에게 돌려보내서 죽일 수 있습니다. 그리고, 낚싯대(?)로 끌어와서 때려 죽일수도 있죠.',
          src: '/images/mobs/ghast.gif',
          topMargin: true
        },
        {
          title: 'Zombie Pigmen',
          description: 'Zombie pigmen are monsters that are normally neutral if you don`t hit them. However, if you do hit them, every single neighboring pigmen will run over and crowd around to kill you. They give 2.5 hearts(5 HP)damage alone, so watch out!!',
          src: '/images/mobs/pigmen.png',
          topMargin: true
        },
        {
          title: 'Wither Skeletons',
          description: 'Wither skeletons are black skeletons holding swords. They give you the wither affect(making you hearts go black).',
          src: '/images/mobs/witherskeleton.png',
          topMargin: true
        }
      ]
    }
  ]
}

export default function reducers(state = defaultState, action) {
  switch (action.type) {
    default: return state;
  }
}
