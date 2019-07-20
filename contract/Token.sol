pragma solidity ^0.5.0;

contract Token {
   address public owner;
   string public token_name;
   string public token_symbol;
   uint public total_supply ;

   mapping(address => uint) public  balance;

   modifier isOwner(){
       require(msg.sender == owner);
       _;
   } 
   
   modifier notNull(address x){
       require(x != address(0x0));
       _;
   }

   constructor(string memory name, string memory symbol) public{
       owner = msg.sender;
       token_name = name;
       token_symbol =symbol;

   }

   function _mint(address x, uint amount) external isOwner notNull(x){
       
       uint _temp =  balance[x];
       uint _supply = total_supply;
       balance[x] = _temp + amount;
       total_supply = _supply + amount;
   }
   
   function _burn(address x, uint amount) external isOwner notNull(x){
       require(balance[x] >= amount);
       uint _temp = balance[x];
       uint _supply = total_supply;
       balance[x] = _temp - amount;
       total_supply = _supply - amount;   
       
   }
   
   function transfer(address recipient, uint amount) external notNull(recipient){
       require(balance[msg.sender] >= amount);
       uint _recipient_amount = balance[recipient];
       uint _sender_amount = balance[msg.sender];
       balance[msg.sender] = _sender_amount - amount;
       balance[recipient] = _recipient_amount + amount;
   }

}