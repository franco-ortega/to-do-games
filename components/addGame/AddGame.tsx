import { timeSpan } from '@/utils/enums';
import { GamesToPlay, TimeSpanOptions } from '@/utils/types';
import React, { useState } from 'react';

type Props = {
  setGamesToPlay: React.Dispatch<React.SetStateAction<GamesToPlay>>;
};

export default function AddGame({ setGamesToPlay }: Props) {
  const [game, setGame] = useState('');
  const [timeSpanOption, setTimeSpanOption] = useState('' as TimeSpanOptions);

  const addGame: React.FormEventHandler = (
    e: React.FormEvent<HTMLInputElement>
  ) => {
    e.preventDefault();

    setGamesToPlay((prevState) => {
      return {
        ...prevState,
        [timeSpanOption]: [
          ...prevState[timeSpanOption],
          [game, { isPlayed: false }],
        ],
      };
    });

    setGame('');
  };

  return (
    <section>
      <h3>Add a Game</h3>
      <form onSubmit={addGame}>
        <p>
          <label htmlFor='add-game'>
            Game:{' '}
            <input
              type='text'
              id='add-game'
              value={game}
              onChange={(e) => setGame(e.target.value)}
            />
          </label>
        </p>
        <p>
          <label htmlFor='time-span-options'>
            <select
              id='time-span-options'
              name='time-span-options'
              onChange={(e) =>
                setTimeSpanOption(
                  e.target.value.toLowerCase() as TimeSpanOptions
                )
              }
            >
              <option value={''}>When Will You Play?</option>
              <option value={timeSpan.week}>This Week</option>
              <option value={timeSpan.month}>This Month</option>
              <option value={timeSpan.year}>This Year</option>
            </select>
          </label>
        </p>
        <button disabled={!game || !timeSpanOption}>Add Game</button>
      </form>
    </section>
  );
}
