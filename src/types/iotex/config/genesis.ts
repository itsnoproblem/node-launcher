export const mainnet = `
account:
  initBalances:
    io1uqhmnttmv0pg8prugxxn7d8ex9angrvfjfthxa: "9800000000000000000000000000"
    # The balances on following test accounts will be burned into the all-zero address.
    # Check https://github.com/iotexproject/iotex-bootstrap/blob/master/postmortem/1.md for more details.
    io1v3gkc49d5vwtdfdka2ekjl3h468egun8e43r7z: "100000000000000000000000000"
    io1vrl48nsdm8jaujccd9cx4ve23cskr0ys6urx92: "100000000000000000000000000"
    io1llupp3n8q5x8usnr5w08j6hc6hn55x64l46rr7: "100000000000000000000000000"
    io1ns7y0pxmklk8ceattty6n7makpw76u770u5avy: "100000000000000000000000000"
    io1xuavja5dwde8pvy4yms06yyncad4yavghjhwra: "100000000000000000000000000"
    io1cdqx6p5rquudxuewflfndpcl0l8t5aezen9slr: "100000000000000000000000000"
    io1hh97f273nhxcq8ajzcpujtt7p9pqyndfmavn9r: "100000000000000000000000000"
    io1yhvu38epz5vmkjaclp45a7t08r27slmcc0zjzh: "100000000000000000000000000"
    io1cl6rl2ev5dfa988qmgzg2x4hfazmp9vn2g66ng: "100000000000000000000000000"
    io1skmqp33qme8knyw0fzgt9takwrc2nvz4sevk5c: "100000000000000000000000000"
    io1fxzh50pa6qc6x5cprgmgw4qrp5vw97zk5pxt3q: "100000000000000000000000000"
    io1jh0ekmccywfkmj7e8qsuzsupnlk3w5337hjjg2: "100000000000000000000000000"
    io1juvx5g063eu4ts832nukp4vgcwk2gnc5cu9ayd: "100000000000000000000000000"
    io19d0p3ah4g8ww9d7kcxfq87yxe7fnr8rpth5shj: "100000000000000000000000000"
    io1ed52svvdun2qv8sf2m0xnynuxfaulv6jlww7ur: "100000000000000000000000000"
    io158hyzrmf4a8xll7gfc8xnwlv70jgp44tzy5nvd: "100000000000000000000000000"
    io19kshh892255x4h5ularvr3q3al2v8cgl80fqrt: "100000000000000000000000000"
    io1ph0u2psnd7muq5xv9623rmxdsxc4uapxhzpg02: "100000000000000000000000000"
    io1znka733xefxjjw2wqddegplwtefun0mfdmz7dw: "100000000000000000000000000"
    io13sj9mzpewn25ymheukte4v39hvjdtrfp00mlyv: "100000000000000000000000000"
    io14gnqxf9dpkn05g337rl7eyt2nxasphf5m6n0rd: "100000000000000000000000000"
    io1l3wc0smczyay8xq747e2hw63mzg3ctp6uf8wsg: "100000000000000000000000000"
    io1q4tdrahguffdu4e9j9aj4f38p2nee0r9vlhx7s: "100000000000000000000000000"
    io1k9y4a9juk45zaqwvjmhtz6yjc68twqds4qcvzv: "100000000000000000000000000"
    io15flratm0nhh5xpxz2lznrrpmnwteyd86hxdtj0: "100000000000000000000000000"
    io1eq4ehs6xx6zj9gcsax7h3qydwlxut9xcfcjras: "100000000000000000000000000"
    io10a298zmzvrt4guq79a9f4x7qedj59y7ery84he: "100000000000000000000000000"
blockchain:
  actionGasLimit: 5000000
  blockGasLimit: 20000000
  blockInterval: 10s
  numCandidateDelegates: 36
  numDelegates: 24
  numSubEpochs: 15
  timeBasedRotation: true
  timestamp: 1553558500
poll:
  delegates: []
  enableGravityChainVoting: true
  gravityChainHeightInterval: 100
  gravityChainStartHeight: 7614500
  registerContractAddress: 0x95724986563028deb58f15c5fac19fa09304f32d
  scoreThreshold: "2000000000000000000000000"
  selfStakingThreshold: "1200000000000000000000000"
  stakingContractAddress: 0x87c9dbff0016af23f5b1ab9b8e072124ab729193
  voteThreshold: "100000000000000000000"
  nativeStakingContractAddress: io1xpq62aw85uqzrccg9y5hnryv8ld2nkpycc3gza
rewarding:
  blockReward: "16000000000000000000"
  epochReward: "12500000000000000000000"
  exemptAddrsFromEpochReward:
    - io15fqav3tugm96ge7anckx0k4gukz5m4mqf0jpv3
    - io1x9kjkr0qv2fa7j4t2as8lrj223xxsqt4tl7xp7
    - io1ar5l5s268rtgzshltnqv88mua06ucm58dx678y
    - io1xsx5n94kg2zv64r7tm8vyz9mh86amfak9ka9xx
    - io1vtm2zgn830pn6auc2cvnchgwdaefa9gr4z0s86
    - io159fv8mu9d5djk8u2t0flgw4yqmt6fg98uqjka8
    - io1c3r4th3zrk4uhv83a9gr4gvn3y6pzaj6mc84ea
    - io14vmhs9c75r2ptxdaqrtk0dz7skct30pxmt69d9
    - io1gf08snppu2a2wfd50pjas2j6q2kcxjzqph3pep
    - io1u5ff879gg2dw9vfpxr2tsmuaz07e2rea6gvl7s
    - io1du4eq4f88n4wyc026l3gamjwetlgsg4jz7j884
    - io12yxdwewry70gr9fs6fphyfaky9c7gurmzk8f4f
    - io1lx53nfgq2dnzrz5ecz2ecs7vvl6qll0mkn970w
    - io1u5xy0ecnrjrdkzyctfqh37lgr5pcfzphgqrdwt
    - io1aj8arp07xw6s9rgh42af5xf98csyuehnnwlk52
    - io18gdmv5g0xhkuj2cdyvp8076uwhl7h3gesmzh8u
    - io1td5fvamm3qf22r5h93gay6ggqdh9z0edeqx63u
    - io1qs785af9k9xf3xgd6vut7um9zcthtrvsn2xap2
    - io127ftn4ry6wgxdrw4hcd6gdwqlq70ujk98dvtw5
    - io1wv5m0xyermvr2n0wjx2cjsqwyk863drdl5qfyn
    - io1v0q5g2f8z6l3v25krl677chdx7g5pwt9kvqfpc
    - io1xsdegzr2hdj5sv5ad4nr0yfgpsd98e40u6svem
    - io1fks575kklxafq4fwjccmz5d3pmq5ynxk5h6h0v
    - io15npzu93ug8r3zdeysppnyrcdu2xssz0lcam9l9
    - io1gh7xfrsnj6p5uqgjpk9xq6jg9na28aewgp7a9v
    - io1nyjs526mnqcsx4twa7nptkg08eclsw5c2dywp4
    - io1jafqlvntcxgyp6e0uxctt3tljzc3vyv5hg4ukh
    - io1z7mjef7w528nasnsafan0rp6yuvkvq405l6r8j
    - io1cup9k8hl8fp40vrj29ex8djc346780dk223end
    - io1scs89jur7qklzh5vfrmha3c40u8yajjx6kvzg9
    - io10kyvvzu08pjeylymq4umknjal25ea3ptfknrpf
    - io18mvepyxkcd5jkyplfqn27ydkpsendrey3xe2l8
    - io1nz40npqa3yvek4zdasmqaetl2j4h6urejfkera
    - io1m7p9yrejngxyvxhvn7p9g9uwlvd7uuamg8wcjd
    - io1cwwm08dwv9phh3wt5vsdhu9gcypw9q2sc7pl9s
    - io14aj46jjmtt83vts9syhrs9st80czumg40cjasl
  foundationBonus: "80000000000000000000"
  foundationBonusLastEpoch: 8760
  initBalance: "200000000000000000000000000"
  numDelegatesForEpochReward: 100
  numDelegatesForFoundationBonus: 36
  productivityThreshold: 85
`;

export const testnet = `
account:
  initBalances:
    io10t7juxazfteqzjsd6qjk7tkgmngj2tm7n4fvrd: "1000000000000000000000000000"
    io120au9ra0nffdle04jx2g5gccn6gq8qd4fy03l4: "7000000000000000000000000000"
    io1yrzvkucxpytn4fru35lc8r8jk4jtue4syg8d4h: "800000000000000000000000000"
blockchain:
  actionGasLimit: 5000000
  aleutianHeight: 1
  beringHeight: 1
  blockGasLimit: 20000000
  blockInterval: 10s
  cookHeight: 1801
  dardanellesHeight: 100081
  daytonaBlockHeight: 1713601
  easterHeight: 2696401
  fbkMigrationHeight: 3250081
  fairbankHeight: 3252241
  greenlandHeight: 4794481
  hawaiiHeight: 8613361
  icelandHeight: 9291601
  jutlandHeight: 10649521
  kamchatkaHeight: 10928881
  lordHoweHeight: 11052721
  numCandidateDelegates: 36
  numDelegates: 24
  numSubEpochs: 15
  pacificHeight: 1
  timeBasedRotation: true
  timestamp: 1571036400
poll:
  delegates: []
  enableGravityChainVoting: true
  gravityChainHeightInterval: 100
  gravityChainStartHeight: 8740900
  gravityChainCeilingHeight: 10022000
  nativeStakingContractAddress: io1w97pslyg7qdayp8mfnffxkjkpapaf83wmmll2l
  registerContractAddress: 0x92adef0e5e0c2b4f64a1ac79823f7ad3bc1662c4
  scoreThreshold: "2000000000000000000000000"
  selfStakingThreshold: "1200000000000000000000000"
  stakingContractAddress: 0x3bbe2346c40d34fc3f66ab059f75a6caece2c3b3
  voteThreshold: "100000000000000000000"
staking:
  withdrawWaitingPeriod: "336h"
rewarding:
  aleutianEpochReward: "15000000000000000000000"
  blockReward: "16000000000000000000"
  epochReward: "12500000000000000000000"
  exemptAddrsFromEpochReward:
  - io1rm223d7jyflpg0cvkja4zmgnjz8hrrdgm09pu0
  - io1dg65erd07hrvyme0493f2kqj2utuvpyf6jeuhd
  - io1343pwahz73s7vzd3l8jxxrjwcugxae2nx58zwf
  - io15ccuntztkkuu0xnfhqf2qt8y28kpu0mnr65050
  - io1se72frs5kn0j6gh0g3fk2usngu48sh2wjt4qgq
  - io1az8tln8432h42vf54e0c0fmaqcytwm2nk82g95
  - io1vdw0q7dv82g3jhmapvze99fdxeyztjrxdp7wse
  - io1qendhfjmpmug6ywde0590lakvxp3ph869ehlyp
  - io1jhcm9au9u77l27pgkqe6kqdf58dh64d0k5kf2x
  - io1y4punwfvhxzee08a034922vwr48wz0p6ruy0ke
  - io1c5a8kv4nljt4dy2mnxk23rj0255a9x4uvn4x5m
  - io13n3382cjhaawmqfk4vmvvgllnryw4tf56qdtks
  - io1gakgrsnsxmg9ed0tlcc2ukxzxdg6v8z2glw82e
  - io1dh8uwmva79vhk8mec998f7qgfud7jyz9v8lede
  - io1m8rge0h4xvmfzkc4yup766slcvn5cwymqeenpe
  - io1etc9ffzsg7lvph3j4ncczg08llvame8k3asyzc
  - io1959ykdhkene09at5nfl42a7xjwf5wgplpg7eh9
  - io1j07xpufsj03sc0dg020jahacx2pnt6m8cdl6qt
  - io1s3z2pr47u47p69zn7phshgenckw6tr70tex80k
  - io1e5uh4sfkgemds4fannncujcdylerdynddj3f43
  - io1eckfc699y4shqkc9ms8ts9sa254e5vtqyazkar
  - io14jp9s6mp85g2x00spq66cmdds4qe2ge5r0p72d
  - io1pgth3m3e4klanwdrfrgk6yelw03ws64ml8c22y
  - io1gn450vcrjkh7r35gcjyt93tp3u2dadz3k07wzw
  foundationBonus: "80000000000000000000"
  foundationBonusLastEpoch: 8760
  initBalance: "1200000000000000000000000000"
  numDelegatesForEpochReward: 100
  numDelegatesForFoundationBonus: 36
  productivityThreshold: 85
`;
