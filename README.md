# Qedit - MetaMask Browser Extension

Requirements:
- [Node.js](https://nodejs.org) version 14
- [Yarn](https://yarnpkg.com/en/docs/install)

Local setup:
- Install dependencies: `yarn setup` (not the usual install command)
- Copy the `.metamaskrc.dist` file to `.metamaskrc`
  - Replace the `INFURA_PROJECT_ID` value with your own personal [Infura Project ID](https://infura.io/docs).
  - If debugging MetaMetrics, you'll need to add a value for `SEGMENT_WRITE_KEY` [Segment write key](https://segment.com/docs/connections/find-writekey/).
- Run `git update-index --skip-worktree qedit.env.js` to prevent env file from being tracked by git
- Add api key to `qedit.env.js`
- Run `yarn start`

Original Metamask [README.md](./README-Metamask.md) file
