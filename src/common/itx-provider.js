import {ethers} from 'ethers';
import env from './env';
 
export async function itxProvider() {
    const itx = new ethers.providers.InfuraProvider(
        env.ETHEREUM_NETWORK,
        env.INFURA_PROJECT_ID
    );
    async function getTransaction(relayTransactionHash){
      try {
        const data = await itx.getTransaction(relayTransactionHash); 
        if(data){
          return {
            error: false,
            transaction: data  
          }
        }
        return {
          error: true,
          message: "Not found Transaction"  
        };
      } catch (error) { 
        return {
          error: true,
          message: "Server Not found"  
        }
      }
      
    } 
    return {getTransaction};
}

