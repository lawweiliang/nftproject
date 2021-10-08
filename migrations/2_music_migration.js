
const globalVar = require('../global_variable/global_variable.js');
const musicNftContract = artifacts.require('MusicNft');

exports.module = (deployer, network, [alice, bob]) => {
  deployer.deploy(musicNftContract);

  musicNftInstance = musicNftContract.deployed();
  musicNftInstance.awardItem(alice, globalVar[network].tokenLinkArgumon);
}