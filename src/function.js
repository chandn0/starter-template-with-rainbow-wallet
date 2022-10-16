import useContractRead from "wagmi";
import { useContractWrite, usePrepareContractWrite } from 'wagmi'
import {
    CONTRACT_ABI,
    CONTRACT_ADDRESS,
} from "./constants";

export const Read = async () => {

    const { data, isError, isLoading } = useContractRead({
        address: CONTRACT_ADDRESS,
        abi: CONTRACT_ABI,
        functionName: 'getHunger',
    })

};

export const Write = async () => {
    const { config } = usePrepareContractWrite({
        address: CONTRACT_ADDRESS,
        abi: CONTRACT_ABI,
        functionName: 'feed',
        args: [],
    })
    const { data, isLoading, isSuccess, write } = useContractWrite(config)

}
