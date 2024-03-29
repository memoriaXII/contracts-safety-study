import type { SignerWithAddress } from "@nomicfoundation/hardhat-ethers/signers";
import { Address } from "hardhat-deploy/types";



import type { Exchange, Token } from "../../types";
import type { Lock } from "../../types/Lock";

type Fixture<T> = () => Promise<T>;

declare module "mocha" {
  export interface Context {
    contracts: Contracts;
    loadFixture: <T>(fixture: Fixture<T>) => Promise<T>;
    signers: Signers;
  }
}

export interface Contracts {
  lock: Lock;
  swap: Exchange;
  token: Token;
  signer: Address;
}

export interface Signers {
  deployer: SignerWithAddress;
  accounts: SignerWithAddress[];
}
