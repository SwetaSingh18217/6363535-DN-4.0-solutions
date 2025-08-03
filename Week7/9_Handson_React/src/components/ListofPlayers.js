import React from 'react';

const ListofPlayers = () => {
  const players = [
    { name: 'Virat Kohli', score: 85 },
    { name: 'Rohit Sharma', score: 65 },
    { name: 'Shubman Gill', score: 72 },
    { name: 'Hardik Pandya', score: 68 },
    { name: 'KL Rahul', score: 90 },
    { name: 'Ravindra Jadeja', score: 60 },
    { name: 'Jasprit Bumrah', score: 78 },
    { name: 'Mohammed Shami', score: 55 },
    { name: 'Yuzvendra Chahal', score: 71 },
    { name: 'Rishabh Pant', score: 88 },
    { name: 'Suryakumar Yadav', score: 66 }
  ];

  const lowScorers = players.filter(p => p.score < 70);

  return (
    <div>
      <h2>All Players</h2>
      <ul>
        {players.map((p, index) => (
          <li key={index}>{p.name} - {p.score}</li>
        ))}
      </ul>

      <h2>Players with score below 70</h2>
      <ul>
        {lowScorers.map((p, index) => (
          <li key={index}>{p.name} - {p.score}</li>
        ))}
      </ul>
    </div>
  );
};

export default ListofPlayers;
