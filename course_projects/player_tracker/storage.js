import fs from 'fs';
import { Player } from './Player.js';

export function loadPlayer() {
    try {
        const data = fs.readFileSync('player.json', 'utf-8');
        const obj = JSON.parse(data);

        if(!data) return null;

        return Player.fromJSON(obj);
    } 
    catch (err) {
        console.error(err);
    }
}

export function savePlayer(player) {
    try {
        fs.writeFileSync('player.json', JSON.stringify(player, null, 2));
    }
    catch (err) {
        console.error(err);
    }
}