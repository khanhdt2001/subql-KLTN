import { Approval, Transfer } from "../types";
import {
  TransferLog,
} from "../types/abi-interfaces/Erc721Abi";


export async function handleMintNft(log:TransferLog) : Promise<void> {

  const record = Transfer.create({
    id: log.transactionHash,
    from: log.args?.from ?? "",
    to: log.args?.to ?? "",
    value: log.args?.tokenId ?? BigInt(0),
  })
  
}