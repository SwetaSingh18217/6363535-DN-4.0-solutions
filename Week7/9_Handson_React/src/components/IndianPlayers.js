import React from 'react';

const IndianPlayers = () => {
  const team = ['Virat', 'Rohit', 'Gill', 'Hardik', 'KL', 'Jadeja'];
  const [p1, p2, p3, p4, p5, p6] = team;

  const oddTeam = [p1, p3, p5];
  const evenTeam = [p2, p4, p6];

  const T20players = ['Pant', 'Surya'];
  const RanjiTrophy = ['Pujara', 'Rahane'];

  const mergedPlayers = [...T20players, ...RanjiTrophy];

  return (
    <div>
      <h2>Odd Team Players</h2>
      <ul>{oddTeam.map((p, i) => <li key={i}>{p}</li>)}</ul>

      <h2>Even Team Players</h2>
      <ul>{evenTeam.map((p, i) => <li key={i}>{p}</li>)}</ul>

      <h2>Merged Players</h2>
      <ul>{mergedPlayers.map((p, i) => <li key={i}>{p}</li>)}</ul>
    </div>
  );
};

export default IndianPlayers;
