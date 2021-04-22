// SPDX-Liscense-Identifier: GPL-3.0
pragma solidity ^0.5.16;

contract Token {

    uint private _totalSupply;

    //userId --> $$$
    mapping(address => uint) balances;

    constructor() public {
        _totalSupply = 10000000000000;
        balances[tx.origin] = 10000000000000;
    }

    function name() public view returns(string memory) {
        return "TokenTest";
    }

    function symbol() public view returns(string memory) {
        return "TT";
    }

    function decimals() public view returns(uint8) {
        return 2;
    }

    function totalSupply() public view returns(uint) {
        return _totalSupply;
    }

    function balanceOf(address _owner) public returns(uint) {
        return balances[_owner];
    }

    function transfer(address _to, uint _value) public returns(bool success) {
        uint senderBalance = balances[msg.sender];
        require(senderBalance > _value, "YOUR BROKE, error message for 'senderBalance > _value'");

        balances[msg.sender] = senderBalance - _value;
        balances[_to] += _value;
        return true;
    }

    function transferFrom(address _from, address _to, uint _value) public returns(bool success){
        return false;
    }

    function approve(address _spender, uint _value) public returns(bool success) {
        return false;
    }

    function allowance(address _owner, address _spender) public view returns(uint remaining) {
        return 0;
    }


    }