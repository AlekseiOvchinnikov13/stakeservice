import IntroImg from './images/intro.png';
import StakeImg from './images/stake.png';

const stakingTutorialTitle = 'STAKING TUTORIAL';
const stakingMechanicsTitle = 'STAKING MECHANICS';
const rewardsCalculatorTitle = 'REWARDS CALCULATOR';
const rewardsCalculatorSubTitle = 'How many dollars do you want to put in for ';

const basicInfoProtocolCategoryTitile = 'Protocol Category';
const basicInfoStakingTypeTitile = 'Staking Type';
const basicInfoGovernanceTitile = 'Governance';
const basicInfoValidatorAddressTitile = 'Validator Address';

const introductoryArticleTitle = 'INTRODUCTORY ARTICLE';
const howToStakeArticleTitle = 'HOW TO STAKE';

const mediumSiteLabel = 'medium.com';
const mediumSiteLink = 'https://medium.com/stake-service';
const sourceButtonLabel = 'See Explained';

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
          title: basicInfoProtocolCategoryTitile,
          value: 'Layer 1'
        },
        {
          title: basicInfoStakingTypeTitile,
          value: 'PoH'
        },
        {
          title: basicInfoGovernanceTitile,
          value: 'Validator vote'
        },
        {
          title: basicInfoValidatorAddressTitile,
          value: '4dmBLJcchyfucSxkVmrymmsnVpZm3rBkp7kbF7qHTTYW',
          isAddress: true
        }
      ],
      stakingTutorialTitle: stakingTutorialTitle,
      stakingTutorialSubTitle: 'Your SOLs must be in a wallet or custodial account in order to use our staking services.',
      articleLinks: [
        {
          articleTitle: introductoryArticleTitle,
          postTitle: 'INTRODUCTION TO SOLANA',
          siteLink: mediumSiteLink,
          siteText: mediumSiteLabel,
          sourceLink: 'https://medium.com/stake-service/introduction-to-solana-f35e23a25a61',
          sourceText: sourceButtonLabel,
          img: IntroImg
        },
        {
          articleTitle:  howToStakeArticleTitle,
          articleSubtitle: 'via Solflare Wallet',
          postTitle: 'How to stake Solana tokens',
          siteLink: mediumSiteLink,
          siteText: mediumSiteLabel,
          sourceLink: 'https://medium.com/stake-service/how-to-stake-solana-tokens-7a6542fe4ec8',
          sourceText: sourceButtonLabel,
          img: StakeImg
        }
      ],
      stakingMechanicsTitle: stakingMechanicsTitle,
      rewardsCalculatorTitle: rewardsCalculatorTitle,
      rewardsCalculatorSubTitle: rewardsCalculatorSubTitle,
    }
  },
  {
    projectId: 'celo',
    data: {
      description1: 'Celo is&nbsp;global payments infrastructure built for mobile Thousands of&nbsp;organizations and individuals are developing, growing, and governing Celo, an&nbsp;open-source platform that enables anyone to&nbsp;build borderless applications.',
      description2: 'We&nbsp;believe that people live primarily in&nbsp;connection to&nbsp;one another. We&nbsp;recognize that individuals are healthier and happier when they are members of&nbsp;a&nbsp;strong social community with meaningful relationships&nbsp;&mdash; that&nbsp;is, when they are living within a&nbsp;healthy and happy whole. We&nbsp;embrace values that strengthen community.',
      stakingCommissionTitle: 'Staking Commission',
      stakingCommissionValue: '50&nbsp;%',
      totalStakeTitle: 'Our Total Stake:',
      totalStakeValue: '10974.72',
      delegatorsTitle: 'Delegators:',
      basicInfoList: [
        {
          title: basicInfoProtocolCategoryTitile,
          value: 'Layer 1'
        },
        {
          title: basicInfoStakingTypeTitile,
          value: 'PoS'
        },
        {
          title: basicInfoGovernanceTitile,
          value: '-'
        },
        {
          title: basicInfoValidatorAddressTitile,
          value: '0xb35Be22BccB0dB9dC62967dcF15fEB97C20f854e',
          isAddress: true
        }
      ],
      stakingTutorialTitle: stakingTutorialTitle,
      stakingTutorialSubTitle: 'Your CELOs must be in a wallet or custodial account in order to use our staking services.',
      articleLinks: [
        {
          articleTitle: introductoryArticleTitle,
          postTitle: 'Money can be beautiful',
          siteLink: mediumSiteLink,
          siteText: mediumSiteLabel,
          sourceLink: 'https://medium.com/stake-service/money-can-be-beautiful-37c42a8d535a',
          sourceText: sourceButtonLabel,
          img: IntroImg
        },
        {
          articleTitle: howToStakeArticleTitle,
          articleSubtitle: 'via desktop celo wallet',
          postTitle: 'Hey guys! Today, we’ll take a look at how you can use the Celo wallet to stake your own CELO tokens and start earning rewards.',
          siteLink: mediumSiteLink,
          siteText: mediumSiteLabel,
          sourceLink: 'https://medium.com/stake-service/hey-guys-today-well-take-a-look-at-how-you-can-use-the-cello-wallet-to-stake-your-own-cello-92730ac24aa5',
          sourceText: sourceButtonLabel,
          img: StakeImg
        }
      ],
      stakingMechanicsTitle: stakingMechanicsTitle,
      rewardsCalculatorTitle: rewardsCalculatorTitle,
      rewardsCalculatorSubTitle: rewardsCalculatorSubTitle,
    }
  },
  {
    projectId: 'the-graph',
    data: {
      description1: 'The Graph is&nbsp;an&nbsp;indexing protocol and a&nbsp;global API for organizing blockchain data. Easy access to&nbsp;them is&nbsp;provided by&nbsp;GraphQL. The main difference (from other PoS networks) of&nbsp;delegation to&nbsp;the Graph is&nbsp;that the indexers that GRT holders can delegate represent indexing and query processing services for open API subgraphs.',
      description2: 'Subgraphs can be&nbsp;queried by&nbsp;applications via GraphQL, and together with Indexers, Curators, and Delegates, they form a&nbsp;decentralized data marketplace for the Web3&nbsp;ecosystem.',
      stakingCommissionTitle: 'Staking Commission',
      stakingCommissionValue: '0&nbsp;%',
      totalStakeTitle: 'Our Total Stake:',
      totalStakeValue: '1605464.53',
      delegatorsTitle: 'Delegators:',
      delegatorsValue: '178',
      basicInfoList: [
        {
          title: basicInfoProtocolCategoryTitile,
          value: 'Middleware'
        },
        {
          title: basicInfoStakingTypeTitile,
          value: 'DPoS'
        },
        {
          title: basicInfoGovernanceTitile,
        },
        {
          title: basicInfoValidatorAddressTitile,
          value: '0x19fBac0891042bE71Ce60321a17720358575f580',
          isAddress: true
        }
      ],
      stakingTutorialTitle: stakingTutorialTitle,
      stakingTutorialSubTitle: 'Your GRTs must be in a wallet or custodial account in order to use our staking services.',
      articleLinks: [
        {
          articleTitle: introductoryArticleTitle,
          postTitle: 'INTRODUCTION TO THE GRAPH',
          siteLink: mediumSiteLink,
          siteText: mediumSiteLabel,
          sourceLink: 'https://medium.com/stake-service/introduction-to-the-graph-a5ec70c10d4a',
          sourceText: sourceButtonLabel,
          img: IntroImg
        },
        {
          articleTitle: howToStakeArticleTitle,
          siteLink: mediumSiteLink,
          siteText: mediumSiteLabel,
          img: StakeImg,
          isSoon: true
        }
      ],
      stakingMechanicsTitle: stakingMechanicsTitle,
      rewardsCalculatorTitle: rewardsCalculatorTitle,
      rewardsCalculatorSubTitle: rewardsCalculatorSubTitle,
    }
  },
  {
    projectId: 'oasis-network',
    data: {
      description1: 'By&nbsp;bringing privacy and scalability to&nbsp;DeFi, the Oasis Network expands DeFi beyond early adopters to&nbsp;a&nbsp;mass market. It&nbsp;enables private smart contracts, high scalability, and the ability to&nbsp;tokenize data.',
      description2: 'This unlocks new use cases like private lending, undercollateralized loans, and private automated market makers.',
      stakingCommissionTitle: 'Staking Commission',
      stakingCommissionValue: '18&nbsp;%',
      totalStakeTitle: 'Our Total Stake:',
      totalStakeValue: '5952992,37',
      delegatorsTitle: 'Delegators:',
      basicInfoList: [
        {
          title: basicInfoProtocolCategoryTitile,
          value: 'Layer 1'
        },
        {
          title: basicInfoStakingTypeTitile,
          value: 'PoS'
        },
        {
          title: basicInfoGovernanceTitile,
        },
        {
          title: basicInfoValidatorAddressTitile,
          value: 'oasis1qzt4fvcc6cw9af69tek9p3mfjwn3a5e5vcyrw7ac',
          isAddress: true
        }
      ],
      stakingTutorialTitle: stakingTutorialTitle,
      stakingTutorialSubTitle: 'Your ROSEs must be in a wallet or custodial account in order to use our staking services.',
      articleLinks: [
        {
          articleTitle: introductoryArticleTitle,
          postTitle: 'Introduction to Oasis',
          siteLink: mediumSiteLink,
          siteText: mediumSiteLabel,
          sourceLink: 'https://medium.com/stake-service/introduction-to-oasis-b589f52efe5f',
          sourceText: sourceButtonLabel,
          img: IntroImg
        },
        {
          articleTitle: howToStakeArticleTitle,
          articleSubtitle: 'via Bitpie wallet',
          postTitle: 'How to delegate ROSE tokens in the Bitpie wallet',
          siteLink: mediumSiteLink,
          siteText: mediumSiteLabel,
          sourceLink: 'https://medium.com/stake-service/howe-to-delegate-rose-tokens-ad58cd84e542',
          sourceText: sourceButtonLabel,
          img: StakeImg
        }
      ],
      stakingMechanicsTitle: stakingMechanicsTitle,
      rewardsCalculatorTitle: rewardsCalculatorTitle,
      rewardsCalculatorSubTitle: rewardsCalculatorSubTitle,
    }
  },
  {
    projectId: 'agoric',
    data: {
      description1: 'Agoric is&nbsp;an&nbsp;open-source development company launching an&nbsp;interoperable Proof-of-Stake chain and economy. Our JavaScript-native smart contract platform offers developers a&nbsp;safe, reusable library of&nbsp;DeFi components to&nbsp;rapidly build and deploy on-chain.',
      description2: '',
      stakingCommissionTitle: 'Staking Commission',
      stakingCommissionValue: '10&nbsp;%',
      totalStakeTitle: 'Our Total Stake:',
      totalStakeValue: '206448',
      delegatorsTitle: 'Delegators:',
      delegatorsValue: '484',
      basicInfoList: [
        {
          title: basicInfoProtocolCategoryTitile,
          value: 'Layer 1'
        },
        {
          title: basicInfoStakingTypeTitile,
          value: 'PoH'
        },
        {
          title: basicInfoGovernanceTitile,
          value: 'Validator vote'
        },
        {
          title: basicInfoValidatorAddressTitile,
          value: '4dmBLJcchyfucSxkVmrymmsnVpZm3rBkp7kbF7qHTTYW',
          isAddress: true
        }
      ],
      stakingTutorialTitle: stakingTutorialTitle,
      stakingTutorialSubTitle: 'Your SOLs must be in a wallet or custodial account in order to use our staking services.',
      articleLinks: [
        {
          articleTitle: introductoryArticleTitle,
          postTitle: 'INTRODUCTION TO SOLANA',
          siteLink: mediumSiteLink,
          siteText: mediumSiteLabel,
          sourceLink: 'https://medium.com/stake-service/introduction-to-solana-f35e23a25a61',
          sourceText: sourceButtonLabel,
          img: IntroImg
        },
        {
          articleTitle: howToStakeArticleTitle,
          articleSubtitle: 'via Solflare Wallet',
          postTitle: 'How to stake Solana tokens',
          siteLink: mediumSiteLink,
          siteText: mediumSiteLabel,
          sourceLink: 'https://medium.com/stake-service/how-to-stake-solana-tokens-7a6542fe4ec8',
          sourceText: sourceButtonLabel,
          img: StakeImg
        }
      ],
      stakingMechanicsTitle: stakingMechanicsTitle,
      rewardsCalculatorTitle: rewardsCalculatorTitle,
      rewardsCalculatorSubTitle: rewardsCalculatorSubTitle,
    }
  },
  {
    projectId: 'sentinel',
    data: {
      description1: 'The Sentinel Network ($DVPN) is&nbsp;a&nbsp;peer to&nbsp;peer bandwidth marketplace that enables Decentralized Virtual Private Network (dVPN) applications and services.',
      description2: 'Powered by&nbsp;the native $dVPN token along with Tendermint core &amp;&nbsp;Exidio.',
      stakingCommissionTitle: 'Staking Commission',
      stakingCommissionValue: '10&nbsp;%',
      totalStakeTitle: 'Our Total Stake:',
      totalStakeValue: '206448',
      delegatorsTitle: 'Delegators:',
      delegatorsValue: '484',
      basicInfoList: [
        {
          title: basicInfoProtocolCategoryTitile,
          value: 'Layer 1'
        },
        {
          title: basicInfoStakingTypeTitile,
          value: 'PoH'
        },
        {
          title: basicInfoGovernanceTitile,
          value: 'Validator vote'
        },
        {
          title: basicInfoValidatorAddressTitile,
          value: '4dmBLJcchyfucSxkVmrymmsnVpZm3rBkp7kbF7qHTTYW',
          isAddress: true
        }
      ],
      stakingTutorialTitle: stakingTutorialTitle,
      stakingTutorialSubTitle: 'Your SOLs must be in a wallet or custodial account in order to use our staking services.',
      articleLinks: [
        {
          articleTitle: introductoryArticleTitle,
          postTitle: 'INTRODUCTION TO SOLANA',
          siteLink: mediumSiteLink,
          siteText: mediumSiteLabel,
          sourceLink: 'https://medium.com/stake-service/introduction-to-solana-f35e23a25a61',
          sourceText: sourceButtonLabel,
          img: IntroImg
        },
        {
          articleTitle: howToStakeArticleTitle,
          articleSubtitle: 'via Solflare Wallet',
          postTitle: 'How to stake Solana tokens',
          siteLink: mediumSiteLink,
          siteText: mediumSiteLabel,
          sourceLink: 'https://medium.com/stake-service/how-to-stake-solana-tokens-7a6542fe4ec8',
          sourceText: sourceButtonLabel,
          img: StakeImg
        }
      ],
      stakingMechanicsTitle: stakingMechanicsTitle,
      rewardsCalculatorTitle: rewardsCalculatorTitle,
      rewardsCalculatorSubTitle: rewardsCalculatorSubTitle,
    }
  },
  {
    projectId: 'centrifuge',
    data: {
      description1: 'Centrifuge is&nbsp;a&nbsp;decentralized asset financing protocol. It&nbsp;connects decentralized finance (DeFi) with real-world assets (RWA) while trying to&nbsp;lower the cost of&nbsp;capital for small and mid-size enterprises (SMEs) and provide investors with a&nbsp;stable source of&nbsp;income. The main goal of&nbsp;the project is&nbsp;to&nbsp;generate profits that are not tied to&nbsp;volatile crypto assets; the developers are pursuing the task of&nbsp;transferring real monetary value from fiat to&nbsp;cryptocurrencies.',
      description2: 'Companies are using Centrifuge to&nbsp;access the liquidity that DeFi has to&nbsp;offer. They can tokenize real assets and use these tokens as&nbsp;collateral to&nbsp;access financing through Tinlake, a&nbsp;decentralized application (DApp) lending protocol. The Centrifuge blockchain is&nbsp;built on&nbsp;Polkadot (DOT) for speed and low fees, while its financial DApp Tinlake is&nbsp;built to&nbsp;access Ethereum (ETH) liquidity.',
      stakingCommissionTitle: 'Staking Commission',
      stakingCommissionValue: '10&nbsp;%',
      totalStakeTitle: 'Our Total Stake:',
      totalStakeValue: '206448',
      delegatorsTitle: 'Delegators:',
      delegatorsValue: '484',
      basicInfoList: [
        {
          title: basicInfoProtocolCategoryTitile,
          value: 'Layer 1'
        },
        {
          title: basicInfoStakingTypeTitile,
          value: 'PoH'
        },
        {
          title: basicInfoGovernanceTitile,
          value: 'Validator vote'
        },
        {
          title: basicInfoValidatorAddressTitile,
          value: '4dmBLJcchyfucSxkVmrymmsnVpZm3rBkp7kbF7qHTTYW',
          isAddress: true
        }
      ],
      stakingTutorialTitle: stakingTutorialTitle,
      stakingTutorialSubTitle: 'Your SOLs must be in a wallet or custodial account in order to use our staking services.',
      articleLinks: [
        {
          articleTitle: introductoryArticleTitle,
          postTitle: 'INTRODUCTION TO SOLANA',
          siteLink: mediumSiteLink,
          siteText: mediumSiteLabel,
          sourceLink: 'https://medium.com/stake-service/introduction-to-solana-f35e23a25a61',
          sourceText: sourceButtonLabel,
          img: IntroImg
        },
        {
          articleTitle: howToStakeArticleTitle,
          articleSubtitle: 'via Solflare Wallet',
          postTitle: 'How to stake Solana tokens',
          siteLink: mediumSiteLink,
          siteText: mediumSiteLabel,
          sourceLink: 'https://medium.com/stake-service/how-to-stake-solana-tokens-7a6542fe4ec8',
          sourceText: sourceButtonLabel,
          img: StakeImg
        }
      ],
      stakingMechanicsTitle: stakingMechanicsTitle,
      rewardsCalculatorTitle: rewardsCalculatorTitle,
      rewardsCalculatorSubTitle: rewardsCalculatorSubTitle,
    }
  },
  {
    projectId: 'cosmic-horizon',
    data: {
      description1: '',
      description2: '',
      stakingCommissionTitle: 'Staking Commission',
      stakingCommissionValue: '10&nbsp;%',
      totalStakeTitle: 'Our Total Stake:',
      totalStakeValue: '206448',
      delegatorsTitle: 'Delegators:',
      delegatorsValue: '484',
      basicInfoList: [
        {
          title: basicInfoProtocolCategoryTitile,
          value: 'Layer 1'
        },
        {
          title: basicInfoStakingTypeTitile,
          value: 'PoH'
        },
        {
          title: basicInfoGovernanceTitile,
          value: 'Validator vote'
        },
        {
          title: basicInfoValidatorAddressTitile,
          value: '4dmBLJcchyfucSxkVmrymmsnVpZm3rBkp7kbF7qHTTYW',
          isAddress: true
        }
      ],
      stakingTutorialTitle: stakingTutorialTitle,
      stakingTutorialSubTitle: 'Your SOLs must be in a wallet or custodial account in order to use our staking services.',
      articleLinks: [
        {
          articleTitle: introductoryArticleTitle,
          postTitle: 'INTRODUCTION TO SOLANA',
          siteLink: mediumSiteLink,
          siteText: mediumSiteLabel,
          sourceLink: 'https://medium.com/stake-service/introduction-to-solana-f35e23a25a61',
          sourceText: sourceButtonLabel,
          img: IntroImg
        },
        {
          articleTitle: howToStakeArticleTitle,
          articleSubtitle: 'via Solflare Wallet',
          postTitle: 'How to stake Solana tokens',
          siteLink: mediumSiteLink,
          siteText: mediumSiteLabel,
          sourceLink: 'https://medium.com/stake-service/how-to-stake-solana-tokens-7a6542fe4ec8',
          sourceText: sourceButtonLabel,
          img: StakeImg
        }
      ],
      stakingMechanicsTitle: stakingMechanicsTitle,
      rewardsCalculatorTitle: rewardsCalculatorTitle,
      rewardsCalculatorSubTitle: rewardsCalculatorSubTitle,
    }
  },
  {
    projectId: 'dock',
    data: {
      description1: 'Dock is&nbsp;a&nbsp;platform designed to&nbsp;provide a&nbsp;simple solution for businesses and developers to&nbsp;build, manage and present digital credentials that are instantly verifiable using blockchain technology.',
      description2: 'With a standalone blockchain and integrated payment and incentivisation token, a trusted network of validators, and seamless adoption and interoperability, Dock is part of a movement to solve universal problems with existing data and how it is captured, shared and controlled.',
      stakingCommissionTitle: 'Staking Commission',
      stakingCommissionValue: '10&nbsp;%',
      totalStakeTitle: 'Our Total Stake:',
      totalStakeValue: '206448',
      delegatorsTitle: 'Delegators:',
      delegatorsValue: '484',
      basicInfoList: [
        {
          title: basicInfoProtocolCategoryTitile,
          value: 'Layer 1'
        },
        {
          title: basicInfoStakingTypeTitile,
          value: 'PoH'
        },
        {
          title: basicInfoGovernanceTitile,
          value: 'Validator vote'
        },
        {
          title: basicInfoValidatorAddressTitile,
          value: '4dmBLJcchyfucSxkVmrymmsnVpZm3rBkp7kbF7qHTTYW',
          isAddress: true
        }
      ],
      stakingTutorialTitle: stakingTutorialTitle,
      stakingTutorialSubTitle: 'Your SOLs must be in a wallet or custodial account in order to use our staking services.',
      articleLinks: [
        {
          articleTitle: introductoryArticleTitle,
          postTitle: 'INTRODUCTION TO SOLANA',
          siteLink: mediumSiteLink,
          siteText: mediumSiteLabel,
          sourceLink: 'https://medium.com/stake-service/introduction-to-solana-f35e23a25a61',
          sourceText: sourceButtonLabel,
          img: IntroImg
        },
        {
          articleTitle: howToStakeArticleTitle,
          articleSubtitle: 'via Solflare Wallet',
          postTitle: 'How to stake Solana tokens',
          siteLink: mediumSiteLink,
          siteText: mediumSiteLabel,
          sourceLink: 'https://medium.com/stake-service/how-to-stake-solana-tokens-7a6542fe4ec8',
          sourceText: sourceButtonLabel,
          img: StakeImg
        }
      ],
      stakingMechanicsTitle: stakingMechanicsTitle,
      rewardsCalculatorTitle: rewardsCalculatorTitle,
      rewardsCalculatorSubTitle: rewardsCalculatorSubTitle,
    }
  },
  {
    projectId: 'regen',
    data: {
      description1: 'Platform for a&nbsp;Thriving Planet Regen Network aligns economics with ecology to&nbsp;drive regenerative land management. Regen Ledger is&nbsp;a&nbsp;public, proof of&nbsp;stake (PoS) blockchain developed with the Cosmos Software Development Kit (SDK) built for verification of&nbsp;claims, agreements &amp;&nbsp;data related to&nbsp;ecological state.',
      description2: 'Regen Ledger enables multiple registries to&nbsp;communicate and transact with each other producing a&nbsp;public ecological accounting system. Get involved with our community of&nbsp;developers.',
      stakingCommissionTitle: 'Staking Commission',
      stakingCommissionValue: '10&nbsp;%',
      totalStakeTitle: 'Our Total Stake:',
      totalStakeValue: '206448',
      delegatorsTitle: 'Delegators:',
      delegatorsValue: '484',
      basicInfoList: [
        {
          title: basicInfoProtocolCategoryTitile,
          value: 'Layer 1'
        },
        {
          title: basicInfoStakingTypeTitile,
          value: 'PoH'
        },
        {
          title: basicInfoGovernanceTitile,
          value: 'Validator vote'
        },
        {
          title: basicInfoValidatorAddressTitile,
          value: '4dmBLJcchyfucSxkVmrymmsnVpZm3rBkp7kbF7qHTTYW',
          isAddress: true
        }
      ],
      stakingTutorialTitle: stakingTutorialTitle,
      stakingTutorialSubTitle: 'Your SOLs must be in a wallet or custodial account in order to use our staking services.',
      articleLinks: [
        {
          articleTitle: introductoryArticleTitle,
          postTitle: 'INTRODUCTION TO SOLANA',
          siteLink: mediumSiteLink,
          siteText: mediumSiteLabel,
          sourceLink: 'https://medium.com/stake-service/introduction-to-solana-f35e23a25a61',
          sourceText: sourceButtonLabel,
          img: IntroImg
        },
        {
          articleTitle: howToStakeArticleTitle,
          articleSubtitle: 'via Solflare Wallet',
          postTitle: 'How to stake Solana tokens',
          siteLink: mediumSiteLink,
          siteText: mediumSiteLabel,
          sourceLink: 'https://medium.com/stake-service/how-to-stake-solana-tokens-7a6542fe4ec8',
          sourceText: sourceButtonLabel,
          img: StakeImg
        }
      ],
      stakingMechanicsTitle: stakingMechanicsTitle,
      rewardsCalculatorTitle: rewardsCalculatorTitle,
      rewardsCalculatorSubTitle: rewardsCalculatorSubTitle,
    }
  },
];