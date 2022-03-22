// organize imports in alphabet order to sparse the conflict when adding a new chain
import {
  Localhost,
  Hardhat,
  Arbitrum,
  ArbitrumRinkeby,
  Avalanche,
  Aurora,
  AuroraTestnet,
  BSC,
  BSCTestnet,
  Cronos,
  CronosTestnet,
  Fantom,
  Harmony,
  Mainnet,
  Ropsten,
  Rinkeby,
  Gnosis,
  Goerli,
  Kovan,
  Stardust,
  Moonriver,
  MoonbaseAlpha,
  Moonbeam,
  Palm,
  PalmTestnet,
  Polygon,
  Mumbai,
  OasisEmerald,
  Songbird,
  Theta,
  ThetaTestnet,
  ThunderCore,
  ThunderCoreTestnet,
  OptimismKovan,
  Optimism,
} from '../model'

// rough alphabet order (put network from the same chain together)
export const DEFAULT_SUPPORTED_CHAINS = [
  Localhost,
  Hardhat,
  Avalanche,
  Arbitrum,
  ArbitrumRinkeby,
  Aurora,
  AuroraTestnet,
  Mainnet,
  Ropsten,
  Rinkeby,
  Goerli,
  Kovan,
  BSC,
  BSCTestnet,
  Cronos,
  CronosTestnet,
  Fantom,
  Gnosis,
  Harmony,
  Stardust,
  Moonriver,
  MoonbaseAlpha,
  Moonbeam,
  Palm,
  PalmTestnet,
  Polygon,
  Mumbai,
  OasisEmerald,
  Songbird,
  Theta,
  ThetaTestnet,
  ThunderCore,
  ThunderCoreTestnet,
  OptimismKovan,
  Optimism,
]

export enum ChainId {
  Mainnet = 1,
  Ropsten = 3,
  Rinkeby = 4,
  Goerli = 5,
  ThunderCoreTestnet = 18,
  Cronos = 25,
  CronosTestnet = 338,
  Kovan = 42,
  BSC = 56,
  BSCTestnet = 97,
  xDai = 100,
  Gnosis = 100,
  ThunderCore = 108,
  Polygon = 137,
  Theta = 361,
  ThetaTestnet = 365,
  Moonriver = 1285,
  Moonbeam = 1284,
  Mumbai = 80001,
  Harmony = 1666600000,
  Palm = 11297108109,
  PalmTestnet = 11297108099,
  Localhost = 1337,
  Hardhat = 31337,
  Fantom = 250,
  Avalanche = 43114,
  Songbird = 19,
  MoonbaseAlpha = 1287,
  OasisEmerald = 42262,
  Stardust = 588,
  OptimismKovan = 69,
  Optimism = 10,
  Arbitrum = 42161,
  ArbitrumRinkeby = 421611,
  Aurora = 1313161554,
  AuroraTestnet = 1313161555,
}
