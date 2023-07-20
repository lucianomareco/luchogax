import { networks } from './Networks'
import { assetsConfig } from './Assets'
import { pondsConfig } from './Pond'

export const config = {
  network: networks.testnet,
  assetList: assetsConfig.testnet,
  pond: pondsConfig.testnet,
  scale: 1000,
  fee: 5
}
