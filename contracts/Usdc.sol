// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.9;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

contract Usdc is ERC20{
    constructor() ERC20("USDC", "USDC") {}
}