import React from 'react';
import { useSelector } from 'react-redux';

const DisplayGame = () => {
    const game = useSelector(store => store.gameValue)
    // const player = useSelector(store=>store.player_name)
    return (
        <>
            <h1>Name of the game : {game.game_name}</h1>
            <h2>Name of the player:{game.player_name}</h2>

        </>);
};

export default DisplayGame;
