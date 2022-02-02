export const QeditAddrSecStatus = {
  INITIAL: 'INITIAL',
  FETCHING: 'FETCHING',
  SECURE: 'SECURE',
  NOT_SECURE: 'NOT_SECURE',
  NO_INFORMATION: 'NO_INFORMATION',
};

export function qeditFetch(address) {
  return qeditFetchApi(address);
}

function qeditFetchApi(address) {
  return window
    .fetch(
      `https://metamask.qedit.io/default/metamask-query?accountId=${address}`,
      {
        method: 'GET',
        cache: 'no-cache',
        headers: {
          'Content-Type': 'application/json',
          'x-api-key': window.qedit.apiKey,
        },
      },
    )
    .then((response) => response.json())
    .then((response) => {
      switch (response.status) {
        case 'safe':
          return QeditAddrSecStatus.SECURE;
        case 'scam':
          return QeditAddrSecStatus.NOT_SECURE;
        default:
          return QeditAddrSecStatus.NO_INFORMATION;
      }
    });
}

function qeditFetchApiMock(address) {
  return new Promise((resolve) => {
    setTimeout(() => {
      switch (address.slice(-1)) {
        case '1':
          resolve(QeditAddrSecStatus.SECURE);
          break;
        case '2':
          resolve(QeditAddrSecStatus.NOT_SECURE);
          break;
        default:
          resolve(QeditAddrSecStatus.NO_INFORMATION);
          break;
      }
    }, 1500);
  });
}
