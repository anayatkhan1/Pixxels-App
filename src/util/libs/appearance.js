export function getAppearance(folder, getDefault = true) {

    let content = global.localStorage.getItem('ponyHouse-appearance');

    try {
        content = JSON.parse(content) ?? {};
    } catch (err) {
        content = {};
    }

    if (getDefault) {

        content.showUserProfile = typeof content.showUserProfile === 'boolean' ? content.showUserProfile : true;
        content.showUserStatus = typeof content.showUserStatus === 'boolean' ? content.showUserStatus : true;
        content.showUserPresenceStatus = typeof content.showUserPresenceStatus === 'boolean' ? content.showUserPresenceStatus : true;

        content.isEmbedEnabled = typeof content.isEmbedEnabled === 'boolean' ? content.isEmbedEnabled : true;
        content.isUNhoverEnabled = typeof content.isUNhoverEnabled === 'boolean' ? content.isUNhoverEnabled : true;

    }

    if (typeof folder === 'string' && folder.length > 0) {
        if (typeof content[folder] !== 'undefined') return content[folder];
        return null;
    }

    return content;

};

export function setAppearance(folder, value) {
    const content = getAppearance(null, false);
    content[folder] = value;
    global.localStorage.setItem('ponyHouse-appearance', JSON.stringify(content));
};

const toggleAppearanceAction = (dataFolder, setToggle) => data => {

    setAppearance(dataFolder, data);
    setToggle((data === true));

};
export { toggleAppearanceAction };

global.appearanceApi = {
    getCfg: getAppearance,
    setCfg: setAppearance,
};