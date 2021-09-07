/* eslint-disable no-unused-vars */
import _ from 'lodash';
import './style.css';

const players = [
  {
    name: 'Player one',
    score: 100,
  },
  {
    name: 'Player two',
    score: 99,
  },
  {
    name: 'Player three',
    score: 98,
  },
  {
    name: 'Player four',
    score: 97,
  },
  {
    name: 'Player five',
    score: 96,
  },
  {
    name: 'Player six',
    score: 95,
  },
  {
    name: 'Player seven',
    score: 94,
  },
  {
    name: 'Player eight',
    score: 93,
  },
  {
    name: 'Player nine',
    score: 92,
  },
  {
    name: 'Player ten',
    score: 91,
  },
];

const render = () => {
  const table = document.getElementById('score-table');
  players.forEach((player, index) => {
    const { name, score } = player;
    table.innerHTML += `<tr id="user-${index}">
    <td id="name-${index}">${name}</td>
    <td id="score-${index}">${score}</td>
    </tr>`;
  });
};

render();