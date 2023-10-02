import tinyAPI from '../../src/util/mods';
import renderUd from './tab';

export default function startMod() {

    // Insert Render UD
    tinyAPI.on('profileTabs', (data, actions) => {
        actions.ud = renderUd;
    });

    // Spawn UD Menu
    tinyAPI.on('profileTabsSpawnAfter', (data, menuItem) => {
        menuItem('UD', 'ud');
    });

};