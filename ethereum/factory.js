import web3 from './web3';
import CampaignFactory from './build/CampaignFactory.json';

const instance = new web3.eth.Contract(
  JSON.parse(CampaignFactory.interface),
  '0x7cf89247b47974230841bC4AcA9Bcc53b6e65194'
);

export default instance;
