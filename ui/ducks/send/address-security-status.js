export const QeditAddrSecStatus = {
  INITIAL: 'INITIAL',
  FETCHING: 'FETCHING',
  SECURE: 'SECURE',
  NOT_SECURE: 'NOT_SECURE',
  NO_INFORMATION: 'NO_INFORMATION',
};

export function qeditFetch(address) {
  return qeditFetchApiMock(address);
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
    }, 3000);
  });
}
