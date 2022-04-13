import IntroImg from './images/intro.png';
import StakeImg from './images/stake.png';

export const ProjectsData = [
  {
    projectId: 'solana',
    data: {
      description1: 'Solana is&nbsp;a&nbsp;high-performance cryptocurrency blockchain that supports smart contracts and decentralized applications. Its feature is&nbsp;the use of&nbsp;a&nbsp;special PoS consensus mechanism, called Proof-of-History, with time-stamped transactions in&nbsp;order to&nbsp;achieve maximum efficiency.',
      description2: 'Solana solves one of&nbsp;the main problems-slow transactions and high costs (which are found in&nbsp;layer-1&nbsp;analogues, for example, Bitcoin and Ethereum). Solana is&nbsp;capable of&nbsp;processing about 50,000 transactions per second. Also an&nbsp;important area of&nbsp;activity of&nbsp;the Solana Foundation is&nbsp;to&nbsp;ensure greater access to&nbsp;decentralized finance.',
      stakingCommissionTitle: 'Staking Commission',
      stakingCommissionValue: '10&nbsp;%',
      totalStakeTitle: 'Our Total Stake:',
      totalStakeValue: '206448',
      delegatorsTitle: 'Delegators:',
      delegatorsValue: '484',
      basicInfoList: [
        {
          title: 'Protocol Category',
          value: 'Layer 1'
        },
        {
          title: 'Staking Type',
          value: 'PoH'
        },
        {
          title: 'Governance',
          value: 'Validator vote'
        },
        {
          title: 'Validator Address',
          value: '4dmBLJcchyfucSxkVmrymmsnVpZm3rBkp7kbF7qHTTYW',
          isAddress: true
        }
      ],
      stakingTutorialTitle: 'SOLANA STAKING TUTORIAL',
      stakingTutorialSubTitle: 'Your SOLs must be in a wallet or custodial account in order to use our staking services.',
      articleLinks: [
        {
          articleTitle: 'INTRODUCTORY ARTICLE',
          postTitle: 'INTRODUCTION TO SOLANA',
          siteLink: 'https://medium.com/stake-service',
          siteText: 'medium.com',
          sourceLink: 'https://medium.com/stake-service/introduction-to-solana-f35e23a25a61',
          sourceText: 'See Explained',
          img: IntroImg
        },
        {
          articleTitle: 'HOW TO STAKE SOLANA',
          articleSubtitle: 'via Solflare Wallet',
          postTitle: 'How to stake Solana tokens',
          siteLink: 'https://medium.com/stake-service',
          siteText: 'medium.com',
          sourceLink: 'https://medium.com/stake-service/how-to-stake-solana-tokens-7a6542fe4ec8',
          sourceText: 'See Explained',
          img: StakeImg
        }
      ],
      stakingMechanicsTitle: 'SOLANA STAKING MECHANICS',

      rewardsCalculatorTitle: 'SOLANA REWARDS CALCULATOR',
      rewardsCalculatorSubTitle: 'How many dollars do you want to put in for solana?',
    }
  },
  {
    projectId: 'celo',
    data: {}
  },
  {
    projectId: 'the-graph',
    data: {}
  },
  {
    projectId: 'oasis-network',
    data: {}
  },
  {
    projectId: 'agoric',
    data: {}
  },
  {
    projectId: 'sentinel',
    data: {}
  },
  {
    projectId: 'centrifuge',
    data: {}
  },
  {
    projectId: 'cosmic-horizon',
    data: {}
  },
  {
    projectId: 'dock',
    data: {}
  },
];