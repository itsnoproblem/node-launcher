export const mainnet = `
network:
# Enter your public IP here
  externalHost:
  externalPort: {{PEER_PORT}}
  bootstrapNodes:
    - /dns4/bootnode-0.mainnet.iotex.one/tcp/4689/p2p/12D3KooWPfQDF8ASjd4r7jS9e7F1wn6zod7Mf4ERr8etoY6ctQp5
    - /dns4/bootnode-1.mainnet.iotex.one/tcp/4689/p2p/12D3KooWN4TQ1CWRA7yvJdQCdti1qARLXXu2UEHJfycn3XbnAnRh
    - /dns4/bootnode-2.mainnet.iotex.one/tcp/4689/p2p/12D3KooWSiktocuUke16bPoW9zrLawEBaEc1UriaPRwm82xbr2BQ
    - /dns4/bootnode-3.mainnet.iotex.one/tcp/4689/p2p/12D3KooWEsmwaorbZX3HRCnhkMPjMAHzwu3om1pdGrtVm2QaM35n
    - /dns4/bootnode-4.mainnet.iotex.one/tcp/4689/p2p/12D3KooWHRcgNim4Nau73EEu7aKJZRZPZ21vQ7BE3fG6vENXkduB
    - /dns4/bootnode-5.mainnet.iotex.one/tcp/4689/p2p/12D3KooWGeHkVDQQFxXpTX1WpPhuuuWYTxPYDUTmaLWWSYx5rmUY

chain:
  # If you are a delegate, make sure producerPrivKey is the key for the operator address you have registered.
  # producerPrivKey:
  chainDBPath: "/var/data/chain.db"
  trieDBPath: "/var/data/trie.db"
  trieDBPatchFile: ""
  indexDBPath: "/var/data/index.db"
  bloomfilterIndexDBPath: "/var/data/bloomfilter.index.db"
  candidateIndexDBPath: "/var/data/candidate.index.db"
  stakingIndexDBPath: "/var/data/staking.index.db"
  maxCacheSize: 1000
  committee:
    gravityChainAPIs:
      # please change the infura key to your key (e.g., https://mainnet.infura.io/v3/YOUR_KEY)
      # - https://mainnet.infura.io/v3/498aed8a973f42a596d8e12b16dd42c7
      - https://eth-trace.gateway.pokt.network/v1/lb/622f3828b2feb20039807a2e
    numOfRetries: 20
    paginationSize: 255
    cacheSize: 1000
  gravityChainDB:
    dbPath: "/var/data/poll.db"
    numRetries: 8

actPool:
  minGasPrice: "1000000000000"

api:
  gasStation:
    defaultGas: 1000000000000

consensus:
  scheme: ROLLDPOS
  rollDPoS:
    fsm:
      unmatchedEventTTL: 3s
      unmatchedEventInterval: 100ms
      acceptBlockTTL: 4s
      acceptProposalEndorsementTTL: 2s
      acceptLockEndorsementTTL: 2s
    delay: 10s
    consensusDBPath: "/var/data/consensus.db"

blockSync:
  interval: 10s
  bufferSize: 400
  maxRepeat: 3
  repeatDecayStep: 3

log:
  zap:
    level: info
    encoding: json
    disableStacktrace: true
    outputPaths: ["stderr", "stdout"]
    errorOutputPaths: ["stderr"]
  stderrRedirectFile: /var/log/s.log
  stdLogRedirect: true
`;

export const testnet = `
network:
# your public IP here
  externalHost:
  externalPort: {{PEER_PORT}}
  bootstrapNodes:
    - /dns4/bootnode-0.testnet.iotex.one/tcp/4689/ipfs/12D3KooWFnaTYuLo8Mkbm3wzaWHtUuaxBRe24Uiopu15Wr5EhD3o
    - /dns4/bootnode-1.testnet.iotex.one/tcp/4689/ipfs/12D3KooWS7hkdFozeUqriUxv7zw8Y6NCeV8E5HUbgmVkGJUv4jHS

chain:
  # producerPrivKey:
  id: 2
  evmNetworkID: 4690
  chainDBPath: "/var/data/chain.db"
  trieDBPath: "/var/data/trie.db"
  trieDBPatchFile: ""
  indexDBPath: "/var/data/index.db"
  bloomfilterIndexDBPath: "/var/data/bloomfilter.index.db"
  candidateIndexDBPath: "/var/data/candidate.index.db"
  stakingIndexDBPath: "/var/data/staking.index.db"
  maxCacheSize: 1000
  committee:
    gravityChainAPIs:
      - https://eth-trace.gateway.pokt.network/v1/lb/622f3828b2feb20039807a2e
    numOfRetries: 20
    paginationSize: 255
    cacheSize: 1000
  gravityChainDB:
    dbPath: "/var/data/poll.db"
    numRetries: 8

actPool:
  minGasPrice: "1000000000000"

consensus:
  scheme: ROLLDPOS
  rollDPoS:
    fsm:
      unmatchedEventTTL: 3s
      unmatchedEventInterval: 100ms
      acceptBlockTTL: 4s
      acceptProposalEndorsementTTL: 2s
      acceptLockEndorsementTTL: 2s
    delay: 10s
    consensusDBPath: "/var/data/consensus.db"

blockSync:
  interval: 10s
  bufferSize: 400
  maxRepeat: 3
  repeatDecayStep: 3

log:
  zap:
    level: info
    encoding: json
    disableStacktrace: true
    outputPaths: ["stderr", "stdout"]
    errorOutputPaths: ["stderr"]
  stderrRedirectFile: /var/log/s.log
  stdLogRedirect: true
`;
