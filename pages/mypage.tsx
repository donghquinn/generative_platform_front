import { useRecoilState } from "recoil";
import { signinUserEmailRecoil, signinUserUuidRecoil } from "../src/recoil/login.recoil";
import { getMyPageInfo } from "../src/user/mypage.lib";
import { useRouter } from "next/router";
import { use, useState } from "react";
import { MyPageDataResAccount, MyPageDataResAccountTransaction } from "../src/types/user.type";
import { logoutRequest } from "../src/user/logout.lib";
import { Grid, Table } from "@mantine/core";

const MyPageHome = () =>
{
    const [ uuid, setUuid ] = useRecoilState( signinUserUuidRecoil );
    const router = useRouter();
    
    if ( uuid.length < 1 )
    {
        alert( "Login First Please." );
        router.push( "/login" );
    }

    const [ resCode, setResCode ] = useState( "200" );
  const [ globalEmail, setGlobalEmail ] = useRecoilState( signinUserEmailRecoil );

    const [ address, setAddress ] = useState( "" );
    const [ networkInfo, setNetworkInfo ] = useState( "" );
    const [ name, setName ] = useState( "" );
    const [ profileImage, setProfileImage ] = useState("");

    const [ accountInfo, setAccount ] = useState<Array<MyPageDataResAccount>>();
    // const [ txInfo, setTx ] = useState<Array<MyPageDataResAccountTransaction>>();
  const accountRows = (
    <Table.Tr>
          <Table.Th>Address</Table.Th>
          <Table.Th>Network</Table.Th>
        <Table.Th>Balance</Table.Th>
        <Table.Th>Nonce</Table.Th>
    </Table.Tr>
  )

    const txRows = (
    <Table.Tr>
        <Table.Th>Transaction Hash</Table.Th>
        <Table.Th>From</Table.Th>
        <Table.Th>To</Table.Th>
        <Table.Th>Value</Table.Th>
        <Table.Th>Block Number</Table.Th>
        <Table.Th>Gas</Table.Th>
        <Table.Th>Gas Price</Table.Th>
        <Table.Th>Status</Table.Th>
        <Table.Th>Date</Table.Th>
    </Table.Tr>
    )

    const requestMyPage = async () => {
        const response = await getMyPageInfo( globalEmail );

        setResCode( response.resCode );

        if ( resCode !== "200" ) {
            alert( "Failed to load my page info. please Login Again." );
            await logoutRequest( uuid );
            setUuid( "" );
        }
        if ( resCode === "200" ) {
            const { account, name, profileImage } = response.dataRes;
            setProfileImage( profileImage );
            setName( name );

            setAccount( response.dataRes.account );
        }
    }

    return (
        <div>
            <div>
                <Table>
                    <Table.Thead>{accountRows}</Table.Thead>
                    <Table.Tbody>
                        {accountInfo.map( ( item ) => {
                            return (
                                <Table.Tr key={item.address}>
                                    <Table.Td>{item.address}</Table.Td>
                                    <Table.Td>{item.network}</Table.Td>
                                    <Table.Td>{item.balance}</Table.Td>
                                    <Table.Td>{item.nonce}</Table.Td>
                                </Table.Tr>
                            )
                        })}
                    </Table.Tbody>
                </Table>
            </div>

     <Grid grow>
        <Grid.Col span="auto">
            {accountInfo.map( ( item ) => {
                return (
                    <div key={item.address}>
                        <Table>
                            <Table.Thead>{txRows}</Table.Thead>
                            <Table.Tbody>
                                {item.transactions.map( ( tx ) =>{
                                    return (
                                        <Table.Tr key={tx.txHash}>
                                            <Table.Td>{tx.txHash}</Table.Td>
                                            <Table.Td>{tx.from}</Table.Td>
                                            <Table.Td>{tx.to}</Table.Td>
                                            <Table.Td>{tx.value}</Table.Td>
                                            <Table.Td>{tx.blockNumber}</Table.Td>
                                            <Table.Td>{tx.gas}</Table.Td>
                                            <Table.Td>{tx.gasPrice}</Table.Td>
                                            <Table.Td>{tx.status}</Table.Td>
                                            <Table.Td>{tx.created.toString()}</Table.Td>
                                        </Table.Tr>
                                    )
                                })}
                            </Table.Tbody>
                        </Table>
                    </div>
                )
            })}
            </Grid.Col>
        </Grid>
    </div>
    )
};

export default MyPageHome;