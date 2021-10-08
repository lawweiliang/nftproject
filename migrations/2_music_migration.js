
const globalVar = require('../global_variable/global_variable.js');
const musicNftContract = artifacts.require('MusicNft');


module.exports = async (deployer, network, [alice, bob]) => {
  await deployer.deploy(musicNftContract);
  musicNftInstance = await musicNftContract.deployed();
  await musicNftInstance.awardItem(alice, globalVar.tokenLink.argumon);
}

