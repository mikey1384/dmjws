import React from 'react';
import Home from 'containers/Tabs/Home';
import Worlds from 'containers/Tabs/Worlds';
import Mobs from 'containers/Tabs/Mobs';
import Commands from 'containers/Tabs/Commands';
import Redstone from 'containers/Tabs/Redstone';
import Entity from 'containers/Tabs/Entity';
import References from 'containers/Tabs/References';
import {Route, IndexRoute} from 'react-router';
import App from 'containers/App';
import Wrapper from 'components/HigherOrder/Wrapper';

export const tabs = [
  {
    pathname: '',
    tabLabel: 'Home',
    component: Home
  },
  {
    pathname: 'worlds',
    tabLabel: 'Worlds',
    component: Worlds,
    assets: {
      images: [
        {
          title: 'Overworld',
          titleColor: 'green',
          description: 'The overworld is where we live and spawn in.',
          src: '/images/worlds/overworld.jpg'
        },
        {
          title: 'Nether',
          titleColor: 'red',
          description: 'The nether is a sort of hell, where strange monsters like Zombie pigmen, blazes, and ghasts spawn.',
          src: '/images/worlds/nether.png'
        },
        {
          title: 'End',
          titleColor: 'purple',
          description: 'The end is a sort of empty world where Endermen(see mobs for information) and the ender dragon lives.',
          src: '/images/worlds/end.png'
        }
      ]
    }
  },
  {
    pathname: 'mobs',
    tabLabel: 'Mobs',
    component: Mobs
  },
  {
    pathname: 'commands',
    tabLabel: 'Commands',
    component: Commands
  },
  {
    pathname: 'redstone',
    tabLabel: 'Redstone',
    component: Redstone
  },
  {
    pathname: 'entity',
    tabLabel: 'Entity & Enchant Ids',
    component: Entity
  },
  {
    pathname: 'references',
    tabLabel: 'References',
    component: References
  }
]

export const routes = (
  <Route
    name="app"
    component={App}
    path="/"
  >
    {tabs.map((tab, index) => {
      if (index === 0) return <IndexRoute key={index} component={Wrapper(tab.component, tab.assets)} />
      return <Route key={index} path={`/${tab.pathname}`} component={Wrapper(tab.component, tab.assets)} />
    })}
  </Route>
)
