
export interface SignupDto {
    resCode: string;
    dataRes: SignupDataResResult;
}

export interface SignupDataResResult {
    result: string;
}


export interface LoginDto {
    resCode: string;
    dataRes: LoginDataResResult;
}

export interface LoginDataResResult {
    result: string;
}


export interface MyPageDto {
    resCode: string;
    dataRes: MyPageDataResResult;
}

export interface MyPageDataResResult
{ 
    name: string;
    profileImage: string | null;
    account: Array<MyPageDataResAccount>;
}

export interface MyPageDataResAccount
{ 
    address: string;
    network: string;
    nonce: string;
    balance: string;
    transactions: Array<MyPageDataResAccountTransaction>;
}

export interface MyPageDataResAccountTransaction
{
    from: string;
    to: string;
    value: string;
    gas: string;
    gasPrice: string;
    blockNumber: string;
    nonce: string;
    txHash: string;
    usage: string;
    status: string;
    created: Date;
}