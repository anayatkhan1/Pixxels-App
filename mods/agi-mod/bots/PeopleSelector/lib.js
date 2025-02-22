import { serverDomain } from '@mods/agi-mod/socket';

export function duplicatorAgent(userId, botId) {
  return new Promise((resolve, reject) => {
    fetch(`https://bots.${serverDomain}/agent/duplicate`, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
      },
      body: JSON.stringify({
        username: userId,
        agent_id: botId,
      }),
    })
      .then((res) => res.json())
      .then(resolve)
      .catch(reject);
  });
}
