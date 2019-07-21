module.exports = {
  contractName: 'Token',
  abi: [
    {
      constant: true,
      inputs: [],
      name: 'token_symbol',
      outputs: [
        {
          name: '',
          type: 'string'
        }
      ],
      payable: false,
      stateMutability: 'view',
      type: 'function',
      signature: '0x1f772a34'
    },
    {
      constant: true,
      inputs: [],
      name: 'total_supply',
      outputs: [
        {
          name: '',
          type: 'uint256'
        }
      ],
      payable: false,
      stateMutability: 'view',
      type: 'function',
      signature: '0x3940e9ee'
    },
    {
      constant: true,
      inputs: [],
      name: 'owner',
      outputs: [
        {
          name: '',
          type: 'address'
        }
      ],
      payable: false,
      stateMutability: 'view',
      type: 'function',
      signature: '0x8da5cb5b'
    },
    {
      constant: true,
      inputs: [],
      name: 'token_name',
      outputs: [
        {
          name: '',
          type: 'string'
        }
      ],
      payable: false,
      stateMutability: 'view',
      type: 'function',
      signature: '0x947a3168'
    },
    {
      constant: true,
      inputs: [
        {
          name: '',
          type: 'address'
        }
      ],
      name: 'balance',
      outputs: [
        {
          name: '',
          type: 'uint256'
        }
      ],
      payable: false,
      stateMutability: 'view',
      type: 'function',
      signature: '0xe3d670d7'
    },
    {
      inputs: [
        {
          name: 'name',
          type: 'string'
        },
        {
          name: 'symbol',
          type: 'string'
        }
      ],
      payable: false,
      stateMutability: 'nonpayable',
      type: 'constructor',
      signature: 'constructor'
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: true,
          name: '_from',
          type: 'address'
        },
        {
          indexed: true,
          name: '_to',
          type: 'address'
        },
        {
          indexed: false,
          name: '_value',
          type: 'uint256'
        }
      ],
      name: 'Transaction',
      type: 'event',
      signature:
        '0x7db7852b30fc413c4a90995f03d9f21e64c45d0ddc8324a8ce4c730a051cbf82'
    },
    {
      constant: false,
      inputs: [
        {
          name: 'x',
          type: 'address'
        },
        {
          name: 'amount',
          type: 'uint256'
        }
      ],
      name: '_mint',
      outputs: [],
      payable: false,
      stateMutability: 'nonpayable',
      type: 'function',
      signature: '0x4e6ec247'
    },
    {
      constant: false,
      inputs: [
        {
          name: 'x',
          type: 'address'
        },
        {
          name: 'amount',
          type: 'uint256'
        }
      ],
      name: '_burn',
      outputs: [],
      payable: false,
      stateMutability: 'nonpayable',
      type: 'function',
      signature: '0x6161eb18'
    },
    {
      constant: false,
      inputs: [
        {
          name: 'recipient',
          type: 'address'
        },
        {
          name: 'amount',
          type: 'uint256'
        }
      ],
      name: 'transfer',
      outputs: [],
      payable: false,
      stateMutability: 'nonpayable',
      type: 'function',
      signature: '0xa9059cbb'
    }
  ],
  bytecode:
    '0x60806040523480156200001157600080fd5b5060405162000d0338038062000d03833981018060405260408110156200003757600080fd5b8101908080516401000000008111156200005057600080fd5b828101905060208101848111156200006757600080fd5b81518560018202830111640100000000821117156200008557600080fd5b50509291906020018051640100000000811115620000a257600080fd5b82810190506020810184811115620000b957600080fd5b8151856001820283011164010000000082111715620000d757600080fd5b5050929190505050336000806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555081600190805190602001906200013792919062000159565b5080600290805190602001906200015092919062000159565b50505062000208565b828054600181600116156101000203166002900490600052602060002090601f016020900481019282601f106200019c57805160ff1916838001178555620001cd565b82800160010185558215620001cd579182015b82811115620001cc578251825591602001919060010190620001af565b5b509050620001dc9190620001e0565b5090565b6200020591905b8082111562000201576000816000905550600101620001e7565b5090565b90565b610aeb80620002186000396000f3fe60806040526004361061008e576000357c0100000000000000000000000000000000000000000000000000000000900463ffffffff1680631f772a34146100935780633940e9ee146101235780634e6ec2471461014e5780636161eb18146101a95780638da5cb5b14610204578063947a31681461025b578063a9059cbb146102eb578063e3d670d714610346575b600080fd5b34801561009f57600080fd5b506100a86103ab565b6040518080602001828103825283818151815260200191508051906020019080838360005b838110156100e85780820151818401526020810190506100cd565b50505050905090810190601f1680156101155780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b34801561012f57600080fd5b50610138610449565b6040518082815260200191505060405180910390f35b34801561015a57600080fd5b506101a76004803603604081101561017157600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff1690602001909291908035906020019092919050505061044f565b005b3480156101b557600080fd5b50610202600480360360408110156101cc57600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190803590602001909291905050506105ed565b005b34801561021057600080fd5b506102196107d9565b604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b34801561026757600080fd5b506102706107fe565b6040518080602001828103825283818151815260200191508051906020019080838360005b838110156102b0578082015181840152602081019050610295565b50505050905090810190601f1680156102dd5780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b3480156102f757600080fd5b506103446004803603604081101561030e57600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff1690602001909291908035906020019092919050505061089c565b005b34801561035257600080fd5b506103956004803603602081101561036957600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190505050610aa7565b6040518082815260200191505060405180910390f35b60028054600181600116156101000203166002900480601f0160208091040260200160405190810160405280929190818152602001828054600181600116156101000203166002900480156104415780601f1061041657610100808354040283529160200191610441565b820191906000526020600020905b81548152906001019060200180831161042457829003601f168201915b505050505081565b60035481565b6000809054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff161415156104aa57600080fd5b81600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff16141515156104e757600080fd5b6000600460008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054905060006003549050838201600460008773ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055508381016003819055508473ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff167f7db7852b30fc413c4a90995f03d9f21e64c45d0ddc8324a8ce4c730a051cbf82866040518082815260200191505060405180910390a35050505050565b6000809054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff1614151561064857600080fd5b81600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff161415151561068557600080fd5b81600460008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054101515156106d357600080fd5b6000600460008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054905060006003549050838203600460008773ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055508381036003819055508473ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff167f7db7852b30fc413c4a90995f03d9f21e64c45d0ddc8324a8ce4c730a051cbf82866040518082815260200191505060405180910390a35050505050565b6000809054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b60018054600181600116156101000203166002900480601f0160208091040260200160405190810160405280929190818152602001828054600181600116156101000203166002900480156108945780601f1061086957610100808354040283529160200191610894565b820191906000526020600020905b81548152906001019060200180831161087757829003601f168201915b505050505081565b81600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff16141515156108d957600080fd5b81600460003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020541015151561092757600080fd5b6000600460008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000205490506000600460003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020549050838103600460003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002081905550838201600460008773ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055508473ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff167f7db7852b30fc413c4a90995f03d9f21e64c45d0ddc8324a8ce4c730a051cbf82866040518082815260200191505060405180910390a35050505050565b6004602052806000526040600020600091509050548156fea165627a7a72305820a5268a62a550df2427a8698b95b310f46e30e1567e7402de9eec511d718a26a50029',
  deployedBytecode:
    '0x60806040526004361061008e576000357c0100000000000000000000000000000000000000000000000000000000900463ffffffff1680631f772a34146100935780633940e9ee146101235780634e6ec2471461014e5780636161eb18146101a95780638da5cb5b14610204578063947a31681461025b578063a9059cbb146102eb578063e3d670d714610346575b600080fd5b34801561009f57600080fd5b506100a86103ab565b6040518080602001828103825283818151815260200191508051906020019080838360005b838110156100e85780820151818401526020810190506100cd565b50505050905090810190601f1680156101155780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b34801561012f57600080fd5b50610138610449565b6040518082815260200191505060405180910390f35b34801561015a57600080fd5b506101a76004803603604081101561017157600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff1690602001909291908035906020019092919050505061044f565b005b3480156101b557600080fd5b50610202600480360360408110156101cc57600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190803590602001909291905050506105ed565b005b34801561021057600080fd5b506102196107d9565b604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b34801561026757600080fd5b506102706107fe565b6040518080602001828103825283818151815260200191508051906020019080838360005b838110156102b0578082015181840152602081019050610295565b50505050905090810190601f1680156102dd5780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b3480156102f757600080fd5b506103446004803603604081101561030e57600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff1690602001909291908035906020019092919050505061089c565b005b34801561035257600080fd5b506103956004803603602081101561036957600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190505050610aa7565b6040518082815260200191505060405180910390f35b60028054600181600116156101000203166002900480601f0160208091040260200160405190810160405280929190818152602001828054600181600116156101000203166002900480156104415780601f1061041657610100808354040283529160200191610441565b820191906000526020600020905b81548152906001019060200180831161042457829003601f168201915b505050505081565b60035481565b6000809054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff161415156104aa57600080fd5b81600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff16141515156104e757600080fd5b6000600460008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054905060006003549050838201600460008773ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055508381016003819055508473ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff167f7db7852b30fc413c4a90995f03d9f21e64c45d0ddc8324a8ce4c730a051cbf82866040518082815260200191505060405180910390a35050505050565b6000809054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff1614151561064857600080fd5b81600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff161415151561068557600080fd5b81600460008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054101515156106d357600080fd5b6000600460008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054905060006003549050838203600460008773ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055508381036003819055508473ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff167f7db7852b30fc413c4a90995f03d9f21e64c45d0ddc8324a8ce4c730a051cbf82866040518082815260200191505060405180910390a35050505050565b6000809054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b60018054600181600116156101000203166002900480601f0160208091040260200160405190810160405280929190818152602001828054600181600116156101000203166002900480156108945780601f1061086957610100808354040283529160200191610894565b820191906000526020600020905b81548152906001019060200180831161087757829003601f168201915b505050505081565b81600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff16141515156108d957600080fd5b81600460003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020541015151561092757600080fd5b6000600460008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000205490506000600460003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020549050838103600460003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002081905550838201600460008773ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055508473ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff167f7db7852b30fc413c4a90995f03d9f21e64c45d0ddc8324a8ce4c730a051cbf82866040518082815260200191505060405180910390a35050505050565b6004602052806000526040600020600091509050548156fea165627a7a72305820a5268a62a550df2427a8698b95b310f46e30e1567e7402de9eec511d718a26a50029',
  sourceMap:
    '25:1612:1:-;;;486:149;8:9:-1;5:2;;;30:1;27;20:12;5:2;486:149:1;;;;;;;;;;;;;;;13:2:-1;8:3;5:11;2:2;;;29:1;26;19:12;2:2;486:149:1;;;;;;19:11:-1;14:3;11:20;8:2;;;44:1;41;34:12;8:2;71:11;66:3;62:21;55:28;;123:4;118:3;114:14;159:9;141:16;138:31;135:2;;;182:1;179;172:12;135:2;219:3;213:10;330:9;325:1;311:12;307:20;289:16;285:43;282:58;261:11;247:12;244:29;233:115;230:2;;;361:1;358;351:12;230:2;0:372;;486:149:1;;;;;;;19:11:-1;14:3;11:20;8:2;;;44:1;41;34:12;8:2;71:11;66:3;62:21;55:28;;123:4;118:3;114:14;159:9;141:16;138:31;135:2;;;182:1;179;172:12;135:2;219:3;213:10;330:9;325:1;311:12;307:20;289:16;285:43;282:58;261:11;247:12;244:29;233:115;230:2;;;361:1;358;351:12;230:2;0:372;;486:149:1;;;;;;563:10;555:5;;:18;;;;;;;;;;;;;;;;;;595:4;582:10;:17;;;;;;;;;;;;:::i;:::-;;622:6;608:12;:20;;;;;;;;;;;;:::i;:::-;;486:149;;25:1612;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;;:::o;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;:::o;:::-;;;;;;;',
  deployedSourceMap:
    '25:1612:1:-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;99:26;;8:9:-1;5:2;;;30:1;27;20:12;5:2;99:26:1;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;23:1:-1;8:100;33:3;30:1;27:10;8:100;;;99:1;94:3;90:11;84:18;80:1;75:3;71:11;64:39;52:2;49:1;45:10;40:15;;8:100;;;12:14;99:26:1;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;130:24;;8:9:-1;5:2;;;30:1;27;20:12;5:2;130:24:1;;;;;;;;;;;;;;;;;;;;;;;640:271;;8:9:-1;5:2;;;30:1;27;20:12;5:2;640:271:1;;;;;;13:2:-1;8:3;5:11;2:2;;;29:1;26;19:12;2:2;640:271:1;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;919:311;;8:9:-1;5:2;;;30:1;27;20:12;5:2;919:311:1;;;;;;13:2:-1;8:3;5:11;2:2;;;29:1;26;19:12;2:2;919:311:1;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;45:20;;8:9:-1;5:2;;;30:1;27;20:12;5:2;45:20:1;;;;;;;;;;;;;;;;;;;;;;;;;;;70:24;;8:9:-1;5:2;;;30:1;27;20:12;5:2;70:24:1;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;23:1:-1;8:100;33:3;30:1;27:10;8:100;;;99:1;94:3;90:11;84:18;80:1;75:3;71:11;64:39;52:2;49:1;45:10;40:15;;8:100;;;12:14;70:24:1;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;1238:396;;8:9:-1;5:2;;;30:1;27;20:12;5:2;1238:396:1;;;;;;13:2:-1;8:3;5:11;2:2;;;29:1;26;19:12;2:2;1238:396:1;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;161:40;;8:9:-1;5:2;;;30:1;27;20:12;5:2;161:40:1;;;;;;13:2:-1;8:3;5:11;2:2;;;29:1;26;19:12;2:2;161:40:1;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;99:26;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::o;130:24::-;;;;:::o;640:271::-;372:5;;;;;;;;;;;358:19;;:10;:19;;;350:28;;;;;;;;704:1;460:3;447:17;;:1;:17;;;;439:26;;;;;;;;723:10;737:7;:10;745:1;737:10;;;;;;;;;;;;;;;;723:24;;756:12;771;;756:27;;813:6;805:5;:14;792:7;:10;800:1;792:10;;;;;;;;;;;;;;;:27;;;;853:6;843:7;:16;828:12;:31;;;;896:1;873:32;;885:10;873:32;;;898:6;873:32;;;;;;;;;;;;;;;;;;474:1;;387;640:271;;:::o;919:311::-;372:5;;;;;;;;;;;358:19;;:10;:19;;;350:28;;;;;;;;983:1;460:3;447:17;;:1;:17;;;;439:26;;;;;;;;1016:6;1002:7;:10;1010:1;1002:10;;;;;;;;;;;;;;;;:20;;994:29;;;;;;;;1032:10;1045:7;:10;1053:1;1045:10;;;;;;;;;;;;;;;;1032:23;;1064:12;1079;;1064:27;;1121:6;1113:5;:14;1100:7;:10;1108:1;1100:10;;;;;;;;;;;;;;;:27;;;;1161:6;1151:7;:16;1136:12;:31;;;;1207:1;1184:32;;1196:10;1184:32;;;1209:6;1184:32;;;;;;;;;;;;;;;;;;474:1;;387;919:311;;:::o;45:20::-;;;;;;;;;;;;;:::o;70:24::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::o;1238:396::-;1305:9;460:3;447:17;;:1;:17;;;;439:26;;;;;;;;1355:6;1332:7;:19;1340:10;1332:19;;;;;;;;;;;;;;;;:29;;1324:38;;;;;;;;1371:22;1396:7;:18;1404:9;1396:18;;;;;;;;;;;;;;;;1371:43;;1423:19;1445:7;:19;1453:10;1445:19;;;;;;;;;;;;;;;;1423:41;;1512:6;1495:14;:23;1473:7;:19;1481:10;1473:19;;;;;;;;;;;;;;;:45;;;;1568:6;1548:17;:26;1527:7;:18;1535:9;1527:18;;;;;;;;;;;;;;;:47;;;;1611:9;1588:40;;1600:10;1588:40;;;1621:6;1588:40;;;;;;;;;;;;;;;;;;474:1;;1238:396;;;:::o;161:40::-;;;;;;;;;;;;;;;;;:::o',
  source:
    'pragma solidity ^0.5.0;\n\ncontract Token {\n   address public owner;\n   string public token_name;\n   string public token_symbol;\n   uint public total_supply ;\n\n   mapping(address => uint) public  balance;\n   \n      event Transaction(\n        address indexed _from,\n        address indexed _to,\n        uint _value\n    );\n\n   modifier isOwner(){\n       require(msg.sender == owner);\n       _;\n   } \n   \n   modifier notNull(address x){\n       require(x != address(0x0));\n       _;\n   }\n\n   constructor(string memory name, string memory symbol) public{\n       owner = msg.sender;\n       token_name = name;\n       token_symbol =symbol;\n\n   }\n\n   function _mint(address x, uint amount) external isOwner notNull(x){\n       \n       uint _temp =  balance[x];\n       uint _supply = total_supply;\n       balance[x] = _temp + amount;\n       total_supply = _supply + amount;\n       emit Transaction(msg.sender,x,amount);\n   }\n   \n   function _burn(address x, uint amount) external isOwner notNull(x){\n       require(balance[x] >= amount);\n       uint _temp = balance[x];\n       uint _supply = total_supply;\n       balance[x] = _temp - amount;\n       total_supply = _supply - amount;   \n       emit Transaction(msg.sender,x,amount);\n       \n   }\n   \n   function transfer(address recipient, uint amount) external notNull(recipient){\n       require(balance[msg.sender] >= amount);\n       uint _recipient_amount = balance[recipient];\n       uint _sender_amount = balance[msg.sender];\n       balance[msg.sender] = _sender_amount - amount;\n       balance[recipient] = _recipient_amount + amount;\n       emit Transaction(msg.sender,recipient,amount);\n   }\n\n}',
  sourcePath: '/Users/james/Desktop/chairity_token/contracts/Token.sol',
  ast: {
    absolutePath: '/Users/james/Desktop/chairity_token/contracts/Token.sol',
    exportedSymbols: {
      Token: [278]
    },
    id: 279,
    nodeType: 'SourceUnit',
    nodes: [
      {
        id: 58,
        literals: ['solidity', '^', '0.5', '.0'],
        nodeType: 'PragmaDirective',
        src: '0:23:1'
      },
      {
        baseContracts: [],
        contractDependencies: [],
        contractKind: 'contract',
        documentation: null,
        fullyImplemented: true,
        id: 278,
        linearizedBaseContracts: [278],
        name: 'Token',
        nodeType: 'ContractDefinition',
        nodes: [
          {
            constant: false,
            id: 60,
            name: 'owner',
            nodeType: 'VariableDeclaration',
            scope: 278,
            src: '45:20:1',
            stateVariable: true,
            storageLocation: 'default',
            typeDescriptions: {
              typeIdentifier: 't_address',
              typeString: 'address'
            },
            typeName: {
              id: 59,
              name: 'address',
              nodeType: 'ElementaryTypeName',
              src: '45:7:1',
              stateMutability: 'nonpayable',
              typeDescriptions: {
                typeIdentifier: 't_address',
                typeString: 'address'
              }
            },
            value: null,
            visibility: 'public'
          },
          {
            constant: false,
            id: 62,
            name: 'token_name',
            nodeType: 'VariableDeclaration',
            scope: 278,
            src: '70:24:1',
            stateVariable: true,
            storageLocation: 'default',
            typeDescriptions: {
              typeIdentifier: 't_string_storage',
              typeString: 'string'
            },
            typeName: {
              id: 61,
              name: 'string',
              nodeType: 'ElementaryTypeName',
              src: '70:6:1',
              typeDescriptions: {
                typeIdentifier: 't_string_storage_ptr',
                typeString: 'string'
              }
            },
            value: null,
            visibility: 'public'
          },
          {
            constant: false,
            id: 64,
            name: 'token_symbol',
            nodeType: 'VariableDeclaration',
            scope: 278,
            src: '99:26:1',
            stateVariable: true,
            storageLocation: 'default',
            typeDescriptions: {
              typeIdentifier: 't_string_storage',
              typeString: 'string'
            },
            typeName: {
              id: 63,
              name: 'string',
              nodeType: 'ElementaryTypeName',
              src: '99:6:1',
              typeDescriptions: {
                typeIdentifier: 't_string_storage_ptr',
                typeString: 'string'
              }
            },
            value: null,
            visibility: 'public'
          },
          {
            constant: false,
            id: 66,
            name: 'total_supply',
            nodeType: 'VariableDeclaration',
            scope: 278,
            src: '130:24:1',
            stateVariable: true,
            storageLocation: 'default',
            typeDescriptions: {
              typeIdentifier: 't_uint256',
              typeString: 'uint256'
            },
            typeName: {
              id: 65,
              name: 'uint',
              nodeType: 'ElementaryTypeName',
              src: '130:4:1',
              typeDescriptions: {
                typeIdentifier: 't_uint256',
                typeString: 'uint256'
              }
            },
            value: null,
            visibility: 'public'
          },
          {
            constant: false,
            id: 70,
            name: 'balance',
            nodeType: 'VariableDeclaration',
            scope: 278,
            src: '161:40:1',
            stateVariable: true,
            storageLocation: 'default',
            typeDescriptions: {
              typeIdentifier: 't_mapping$_t_address_$_t_uint256_$',
              typeString: 'mapping(address => uint256)'
            },
            typeName: {
              id: 69,
              keyType: {
                id: 67,
                name: 'address',
                nodeType: 'ElementaryTypeName',
                src: '169:7:1',
                typeDescriptions: {
                  typeIdentifier: 't_address',
                  typeString: 'address'
                }
              },
              nodeType: 'Mapping',
              src: '161:24:1',
              typeDescriptions: {
                typeIdentifier: 't_mapping$_t_address_$_t_uint256_$',
                typeString: 'mapping(address => uint256)'
              },
              valueType: {
                id: 68,
                name: 'uint',
                nodeType: 'ElementaryTypeName',
                src: '180:4:1',
                typeDescriptions: {
                  typeIdentifier: 't_uint256',
                  typeString: 'uint256'
                }
              }
            },
            value: null,
            visibility: 'public'
          },
          {
            anonymous: false,
            documentation: null,
            id: 78,
            name: 'Transaction',
            nodeType: 'EventDefinition',
            parameters: {
              id: 77,
              nodeType: 'ParameterList',
              parameters: [
                {
                  constant: false,
                  id: 72,
                  indexed: true,
                  name: '_from',
                  nodeType: 'VariableDeclaration',
                  scope: 78,
                  src: '240:21:1',
                  stateVariable: false,
                  storageLocation: 'default',
                  typeDescriptions: {
                    typeIdentifier: 't_address',
                    typeString: 'address'
                  },
                  typeName: {
                    id: 71,
                    name: 'address',
                    nodeType: 'ElementaryTypeName',
                    src: '240:7:1',
                    stateMutability: 'nonpayable',
                    typeDescriptions: {
                      typeIdentifier: 't_address',
                      typeString: 'address'
                    }
                  },
                  value: null,
                  visibility: 'internal'
                },
                {
                  constant: false,
                  id: 74,
                  indexed: true,
                  name: '_to',
                  nodeType: 'VariableDeclaration',
                  scope: 78,
                  src: '271:19:1',
                  stateVariable: false,
                  storageLocation: 'default',
                  typeDescriptions: {
                    typeIdentifier: 't_address',
                    typeString: 'address'
                  },
                  typeName: {
                    id: 73,
                    name: 'address',
                    nodeType: 'ElementaryTypeName',
                    src: '271:7:1',
                    stateMutability: 'nonpayable',
                    typeDescriptions: {
                      typeIdentifier: 't_address',
                      typeString: 'address'
                    }
                  },
                  value: null,
                  visibility: 'internal'
                },
                {
                  constant: false,
                  id: 76,
                  indexed: false,
                  name: '_value',
                  nodeType: 'VariableDeclaration',
                  scope: 78,
                  src: '300:11:1',
                  stateVariable: false,
                  storageLocation: 'default',
                  typeDescriptions: {
                    typeIdentifier: 't_uint256',
                    typeString: 'uint256'
                  },
                  typeName: {
                    id: 75,
                    name: 'uint',
                    nodeType: 'ElementaryTypeName',
                    src: '300:4:1',
                    typeDescriptions: {
                      typeIdentifier: 't_uint256',
                      typeString: 'uint256'
                    }
                  },
                  value: null,
                  visibility: 'internal'
                }
              ],
              src: '230:87:1'
            },
            src: '213:105:1'
          },
          {
            body: {
              id: 88,
              nodeType: 'Block',
              src: '341:53:1',
              statements: [
                {
                  expression: {
                    argumentTypes: null,
                    arguments: [
                      {
                        argumentTypes: null,
                        commonType: {
                          typeIdentifier: 't_address',
                          typeString: 'address'
                        },
                        id: 84,
                        isConstant: false,
                        isLValue: false,
                        isPure: false,
                        lValueRequested: false,
                        leftExpression: {
                          argumentTypes: null,
                          expression: {
                            argumentTypes: null,
                            id: 81,
                            name: 'msg',
                            nodeType: 'Identifier',
                            overloadedDeclarations: [],
                            referencedDeclaration: 293,
                            src: '358:3:1',
                            typeDescriptions: {
                              typeIdentifier: 't_magic_message',
                              typeString: 'msg'
                            }
                          },
                          id: 82,
                          isConstant: false,
                          isLValue: false,
                          isPure: false,
                          lValueRequested: false,
                          memberName: 'sender',
                          nodeType: 'MemberAccess',
                          referencedDeclaration: null,
                          src: '358:10:1',
                          typeDescriptions: {
                            typeIdentifier: 't_address_payable',
                            typeString: 'address payable'
                          }
                        },
                        nodeType: 'BinaryOperation',
                        operator: '==',
                        rightExpression: {
                          argumentTypes: null,
                          id: 83,
                          name: 'owner',
                          nodeType: 'Identifier',
                          overloadedDeclarations: [],
                          referencedDeclaration: 60,
                          src: '372:5:1',
                          typeDescriptions: {
                            typeIdentifier: 't_address',
                            typeString: 'address'
                          }
                        },
                        src: '358:19:1',
                        typeDescriptions: {
                          typeIdentifier: 't_bool',
                          typeString: 'bool'
                        }
                      }
                    ],
                    expression: {
                      argumentTypes: [
                        {
                          typeIdentifier: 't_bool',
                          typeString: 'bool'
                        }
                      ],
                      id: 80,
                      name: 'require',
                      nodeType: 'Identifier',
                      overloadedDeclarations: [296, 297],
                      referencedDeclaration: 296,
                      src: '350:7:1',
                      typeDescriptions: {
                        typeIdentifier:
                          't_function_require_pure$_t_bool_$returns$__$',
                        typeString: 'function (bool) pure'
                      }
                    },
                    id: 85,
                    isConstant: false,
                    isLValue: false,
                    isPure: false,
                    kind: 'functionCall',
                    lValueRequested: false,
                    names: [],
                    nodeType: 'FunctionCall',
                    src: '350:28:1',
                    typeDescriptions: {
                      typeIdentifier: 't_tuple$__$',
                      typeString: 'tuple()'
                    }
                  },
                  id: 86,
                  nodeType: 'ExpressionStatement',
                  src: '350:28:1'
                },
                {
                  id: 87,
                  nodeType: 'PlaceholderStatement',
                  src: '387:1:1'
                }
              ]
            },
            documentation: null,
            id: 89,
            name: 'isOwner',
            nodeType: 'ModifierDefinition',
            parameters: {
              id: 79,
              nodeType: 'ParameterList',
              parameters: [],
              src: '339:2:1'
            },
            src: '323:71:1',
            visibility: 'internal'
          },
          {
            body: {
              id: 102,
              nodeType: 'Block',
              src: '430:51:1',
              statements: [
                {
                  expression: {
                    argumentTypes: null,
                    arguments: [
                      {
                        argumentTypes: null,
                        commonType: {
                          typeIdentifier: 't_address',
                          typeString: 'address'
                        },
                        id: 98,
                        isConstant: false,
                        isLValue: false,
                        isPure: false,
                        lValueRequested: false,
                        leftExpression: {
                          argumentTypes: null,
                          id: 94,
                          name: 'x',
                          nodeType: 'Identifier',
                          overloadedDeclarations: [],
                          referencedDeclaration: 91,
                          src: '447:1:1',
                          typeDescriptions: {
                            typeIdentifier: 't_address',
                            typeString: 'address'
                          }
                        },
                        nodeType: 'BinaryOperation',
                        operator: '!=',
                        rightExpression: {
                          argumentTypes: null,
                          arguments: [
                            {
                              argumentTypes: null,
                              hexValue: '307830',
                              id: 96,
                              isConstant: false,
                              isLValue: false,
                              isPure: true,
                              kind: 'number',
                              lValueRequested: false,
                              nodeType: 'Literal',
                              src: '460:3:1',
                              subdenomination: null,
                              typeDescriptions: {
                                typeIdentifier: 't_rational_0_by_1',
                                typeString: 'int_const 0'
                              },
                              value: '0x0'
                            }
                          ],
                          expression: {
                            argumentTypes: [
                              {
                                typeIdentifier: 't_rational_0_by_1',
                                typeString: 'int_const 0'
                              }
                            ],
                            id: 95,
                            isConstant: false,
                            isLValue: false,
                            isPure: true,
                            lValueRequested: false,
                            nodeType: 'ElementaryTypeNameExpression',
                            src: '452:7:1',
                            typeDescriptions: {
                              typeIdentifier: 't_type$_t_address_$',
                              typeString: 'type(address)'
                            },
                            typeName: 'address'
                          },
                          id: 97,
                          isConstant: false,
                          isLValue: false,
                          isPure: true,
                          kind: 'typeConversion',
                          lValueRequested: false,
                          names: [],
                          nodeType: 'FunctionCall',
                          src: '452:12:1',
                          typeDescriptions: {
                            typeIdentifier: 't_address_payable',
                            typeString: 'address payable'
                          }
                        },
                        src: '447:17:1',
                        typeDescriptions: {
                          typeIdentifier: 't_bool',
                          typeString: 'bool'
                        }
                      }
                    ],
                    expression: {
                      argumentTypes: [
                        {
                          typeIdentifier: 't_bool',
                          typeString: 'bool'
                        }
                      ],
                      id: 93,
                      name: 'require',
                      nodeType: 'Identifier',
                      overloadedDeclarations: [296, 297],
                      referencedDeclaration: 296,
                      src: '439:7:1',
                      typeDescriptions: {
                        typeIdentifier:
                          't_function_require_pure$_t_bool_$returns$__$',
                        typeString: 'function (bool) pure'
                      }
                    },
                    id: 99,
                    isConstant: false,
                    isLValue: false,
                    isPure: false,
                    kind: 'functionCall',
                    lValueRequested: false,
                    names: [],
                    nodeType: 'FunctionCall',
                    src: '439:26:1',
                    typeDescriptions: {
                      typeIdentifier: 't_tuple$__$',
                      typeString: 'tuple()'
                    }
                  },
                  id: 100,
                  nodeType: 'ExpressionStatement',
                  src: '439:26:1'
                },
                {
                  id: 101,
                  nodeType: 'PlaceholderStatement',
                  src: '474:1:1'
                }
              ]
            },
            documentation: null,
            id: 103,
            name: 'notNull',
            nodeType: 'ModifierDefinition',
            parameters: {
              id: 92,
              nodeType: 'ParameterList',
              parameters: [
                {
                  constant: false,
                  id: 91,
                  name: 'x',
                  nodeType: 'VariableDeclaration',
                  scope: 103,
                  src: '420:9:1',
                  stateVariable: false,
                  storageLocation: 'default',
                  typeDescriptions: {
                    typeIdentifier: 't_address',
                    typeString: 'address'
                  },
                  typeName: {
                    id: 90,
                    name: 'address',
                    nodeType: 'ElementaryTypeName',
                    src: '420:7:1',
                    stateMutability: 'nonpayable',
                    typeDescriptions: {
                      typeIdentifier: 't_address',
                      typeString: 'address'
                    }
                  },
                  value: null,
                  visibility: 'internal'
                }
              ],
              src: '419:11:1'
            },
            src: '403:78:1',
            visibility: 'internal'
          },
          {
            body: {
              id: 123,
              nodeType: 'Block',
              src: '546:89:1',
              statements: [
                {
                  expression: {
                    argumentTypes: null,
                    id: 113,
                    isConstant: false,
                    isLValue: false,
                    isPure: false,
                    lValueRequested: false,
                    leftHandSide: {
                      argumentTypes: null,
                      id: 110,
                      name: 'owner',
                      nodeType: 'Identifier',
                      overloadedDeclarations: [],
                      referencedDeclaration: 60,
                      src: '555:5:1',
                      typeDescriptions: {
                        typeIdentifier: 't_address',
                        typeString: 'address'
                      }
                    },
                    nodeType: 'Assignment',
                    operator: '=',
                    rightHandSide: {
                      argumentTypes: null,
                      expression: {
                        argumentTypes: null,
                        id: 111,
                        name: 'msg',
                        nodeType: 'Identifier',
                        overloadedDeclarations: [],
                        referencedDeclaration: 293,
                        src: '563:3:1',
                        typeDescriptions: {
                          typeIdentifier: 't_magic_message',
                          typeString: 'msg'
                        }
                      },
                      id: 112,
                      isConstant: false,
                      isLValue: false,
                      isPure: false,
                      lValueRequested: false,
                      memberName: 'sender',
                      nodeType: 'MemberAccess',
                      referencedDeclaration: null,
                      src: '563:10:1',
                      typeDescriptions: {
                        typeIdentifier: 't_address_payable',
                        typeString: 'address payable'
                      }
                    },
                    src: '555:18:1',
                    typeDescriptions: {
                      typeIdentifier: 't_address',
                      typeString: 'address'
                    }
                  },
                  id: 114,
                  nodeType: 'ExpressionStatement',
                  src: '555:18:1'
                },
                {
                  expression: {
                    argumentTypes: null,
                    id: 117,
                    isConstant: false,
                    isLValue: false,
                    isPure: false,
                    lValueRequested: false,
                    leftHandSide: {
                      argumentTypes: null,
                      id: 115,
                      name: 'token_name',
                      nodeType: 'Identifier',
                      overloadedDeclarations: [],
                      referencedDeclaration: 62,
                      src: '582:10:1',
                      typeDescriptions: {
                        typeIdentifier: 't_string_storage',
                        typeString: 'string storage ref'
                      }
                    },
                    nodeType: 'Assignment',
                    operator: '=',
                    rightHandSide: {
                      argumentTypes: null,
                      id: 116,
                      name: 'name',
                      nodeType: 'Identifier',
                      overloadedDeclarations: [],
                      referencedDeclaration: 105,
                      src: '595:4:1',
                      typeDescriptions: {
                        typeIdentifier: 't_string_memory_ptr',
                        typeString: 'string memory'
                      }
                    },
                    src: '582:17:1',
                    typeDescriptions: {
                      typeIdentifier: 't_string_storage',
                      typeString: 'string storage ref'
                    }
                  },
                  id: 118,
                  nodeType: 'ExpressionStatement',
                  src: '582:17:1'
                },
                {
                  expression: {
                    argumentTypes: null,
                    id: 121,
                    isConstant: false,
                    isLValue: false,
                    isPure: false,
                    lValueRequested: false,
                    leftHandSide: {
                      argumentTypes: null,
                      id: 119,
                      name: 'token_symbol',
                      nodeType: 'Identifier',
                      overloadedDeclarations: [],
                      referencedDeclaration: 64,
                      src: '608:12:1',
                      typeDescriptions: {
                        typeIdentifier: 't_string_storage',
                        typeString: 'string storage ref'
                      }
                    },
                    nodeType: 'Assignment',
                    operator: '=',
                    rightHandSide: {
                      argumentTypes: null,
                      id: 120,
                      name: 'symbol',
                      nodeType: 'Identifier',
                      overloadedDeclarations: [],
                      referencedDeclaration: 107,
                      src: '622:6:1',
                      typeDescriptions: {
                        typeIdentifier: 't_string_memory_ptr',
                        typeString: 'string memory'
                      }
                    },
                    src: '608:20:1',
                    typeDescriptions: {
                      typeIdentifier: 't_string_storage',
                      typeString: 'string storage ref'
                    }
                  },
                  id: 122,
                  nodeType: 'ExpressionStatement',
                  src: '608:20:1'
                }
              ]
            },
            documentation: null,
            id: 124,
            implemented: true,
            kind: 'constructor',
            modifiers: [],
            name: '',
            nodeType: 'FunctionDefinition',
            parameters: {
              id: 108,
              nodeType: 'ParameterList',
              parameters: [
                {
                  constant: false,
                  id: 105,
                  name: 'name',
                  nodeType: 'VariableDeclaration',
                  scope: 124,
                  src: '498:18:1',
                  stateVariable: false,
                  storageLocation: 'memory',
                  typeDescriptions: {
                    typeIdentifier: 't_string_memory_ptr',
                    typeString: 'string'
                  },
                  typeName: {
                    id: 104,
                    name: 'string',
                    nodeType: 'ElementaryTypeName',
                    src: '498:6:1',
                    typeDescriptions: {
                      typeIdentifier: 't_string_storage_ptr',
                      typeString: 'string'
                    }
                  },
                  value: null,
                  visibility: 'internal'
                },
                {
                  constant: false,
                  id: 107,
                  name: 'symbol',
                  nodeType: 'VariableDeclaration',
                  scope: 124,
                  src: '518:20:1',
                  stateVariable: false,
                  storageLocation: 'memory',
                  typeDescriptions: {
                    typeIdentifier: 't_string_memory_ptr',
                    typeString: 'string'
                  },
                  typeName: {
                    id: 106,
                    name: 'string',
                    nodeType: 'ElementaryTypeName',
                    src: '518:6:1',
                    typeDescriptions: {
                      typeIdentifier: 't_string_storage_ptr',
                      typeString: 'string'
                    }
                  },
                  value: null,
                  visibility: 'internal'
                }
              ],
              src: '497:42:1'
            },
            returnParameters: {
              id: 109,
              nodeType: 'ParameterList',
              parameters: [],
              src: '546:0:1'
            },
            scope: 278,
            src: '486:149:1',
            stateMutability: 'nonpayable',
            superFunction: null,
            visibility: 'public'
          },
          {
            body: {
              id: 167,
              nodeType: 'Block',
              src: '706:205:1',
              statements: [
                {
                  assignments: [137],
                  declarations: [
                    {
                      constant: false,
                      id: 137,
                      name: '_temp',
                      nodeType: 'VariableDeclaration',
                      scope: 167,
                      src: '723:10:1',
                      stateVariable: false,
                      storageLocation: 'default',
                      typeDescriptions: {
                        typeIdentifier: 't_uint256',
                        typeString: 'uint256'
                      },
                      typeName: {
                        id: 136,
                        name: 'uint',
                        nodeType: 'ElementaryTypeName',
                        src: '723:4:1',
                        typeDescriptions: {
                          typeIdentifier: 't_uint256',
                          typeString: 'uint256'
                        }
                      },
                      value: null,
                      visibility: 'internal'
                    }
                  ],
                  id: 141,
                  initialValue: {
                    argumentTypes: null,
                    baseExpression: {
                      argumentTypes: null,
                      id: 138,
                      name: 'balance',
                      nodeType: 'Identifier',
                      overloadedDeclarations: [],
                      referencedDeclaration: 70,
                      src: '737:7:1',
                      typeDescriptions: {
                        typeIdentifier: 't_mapping$_t_address_$_t_uint256_$',
                        typeString: 'mapping(address => uint256)'
                      }
                    },
                    id: 140,
                    indexExpression: {
                      argumentTypes: null,
                      id: 139,
                      name: 'x',
                      nodeType: 'Identifier',
                      overloadedDeclarations: [],
                      referencedDeclaration: 126,
                      src: '745:1:1',
                      typeDescriptions: {
                        typeIdentifier: 't_address',
                        typeString: 'address'
                      }
                    },
                    isConstant: false,
                    isLValue: true,
                    isPure: false,
                    lValueRequested: false,
                    nodeType: 'IndexAccess',
                    src: '737:10:1',
                    typeDescriptions: {
                      typeIdentifier: 't_uint256',
                      typeString: 'uint256'
                    }
                  },
                  nodeType: 'VariableDeclarationStatement',
                  src: '723:24:1'
                },
                {
                  assignments: [143],
                  declarations: [
                    {
                      constant: false,
                      id: 143,
                      name: '_supply',
                      nodeType: 'VariableDeclaration',
                      scope: 167,
                      src: '756:12:1',
                      stateVariable: false,
                      storageLocation: 'default',
                      typeDescriptions: {
                        typeIdentifier: 't_uint256',
                        typeString: 'uint256'
                      },
                      typeName: {
                        id: 142,
                        name: 'uint',
                        nodeType: 'ElementaryTypeName',
                        src: '756:4:1',
                        typeDescriptions: {
                          typeIdentifier: 't_uint256',
                          typeString: 'uint256'
                        }
                      },
                      value: null,
                      visibility: 'internal'
                    }
                  ],
                  id: 145,
                  initialValue: {
                    argumentTypes: null,
                    id: 144,
                    name: 'total_supply',
                    nodeType: 'Identifier',
                    overloadedDeclarations: [],
                    referencedDeclaration: 66,
                    src: '771:12:1',
                    typeDescriptions: {
                      typeIdentifier: 't_uint256',
                      typeString: 'uint256'
                    }
                  },
                  nodeType: 'VariableDeclarationStatement',
                  src: '756:27:1'
                },
                {
                  expression: {
                    argumentTypes: null,
                    id: 152,
                    isConstant: false,
                    isLValue: false,
                    isPure: false,
                    lValueRequested: false,
                    leftHandSide: {
                      argumentTypes: null,
                      baseExpression: {
                        argumentTypes: null,
                        id: 146,
                        name: 'balance',
                        nodeType: 'Identifier',
                        overloadedDeclarations: [],
                        referencedDeclaration: 70,
                        src: '792:7:1',
                        typeDescriptions: {
                          typeIdentifier: 't_mapping$_t_address_$_t_uint256_$',
                          typeString: 'mapping(address => uint256)'
                        }
                      },
                      id: 148,
                      indexExpression: {
                        argumentTypes: null,
                        id: 147,
                        name: 'x',
                        nodeType: 'Identifier',
                        overloadedDeclarations: [],
                        referencedDeclaration: 126,
                        src: '800:1:1',
                        typeDescriptions: {
                          typeIdentifier: 't_address',
                          typeString: 'address'
                        }
                      },
                      isConstant: false,
                      isLValue: true,
                      isPure: false,
                      lValueRequested: true,
                      nodeType: 'IndexAccess',
                      src: '792:10:1',
                      typeDescriptions: {
                        typeIdentifier: 't_uint256',
                        typeString: 'uint256'
                      }
                    },
                    nodeType: 'Assignment',
                    operator: '=',
                    rightHandSide: {
                      argumentTypes: null,
                      commonType: {
                        typeIdentifier: 't_uint256',
                        typeString: 'uint256'
                      },
                      id: 151,
                      isConstant: false,
                      isLValue: false,
                      isPure: false,
                      lValueRequested: false,
                      leftExpression: {
                        argumentTypes: null,
                        id: 149,
                        name: '_temp',
                        nodeType: 'Identifier',
                        overloadedDeclarations: [],
                        referencedDeclaration: 137,
                        src: '805:5:1',
                        typeDescriptions: {
                          typeIdentifier: 't_uint256',
                          typeString: 'uint256'
                        }
                      },
                      nodeType: 'BinaryOperation',
                      operator: '+',
                      rightExpression: {
                        argumentTypes: null,
                        id: 150,
                        name: 'amount',
                        nodeType: 'Identifier',
                        overloadedDeclarations: [],
                        referencedDeclaration: 128,
                        src: '813:6:1',
                        typeDescriptions: {
                          typeIdentifier: 't_uint256',
                          typeString: 'uint256'
                        }
                      },
                      src: '805:14:1',
                      typeDescriptions: {
                        typeIdentifier: 't_uint256',
                        typeString: 'uint256'
                      }
                    },
                    src: '792:27:1',
                    typeDescriptions: {
                      typeIdentifier: 't_uint256',
                      typeString: 'uint256'
                    }
                  },
                  id: 153,
                  nodeType: 'ExpressionStatement',
                  src: '792:27:1'
                },
                {
                  expression: {
                    argumentTypes: null,
                    id: 158,
                    isConstant: false,
                    isLValue: false,
                    isPure: false,
                    lValueRequested: false,
                    leftHandSide: {
                      argumentTypes: null,
                      id: 154,
                      name: 'total_supply',
                      nodeType: 'Identifier',
                      overloadedDeclarations: [],
                      referencedDeclaration: 66,
                      src: '828:12:1',
                      typeDescriptions: {
                        typeIdentifier: 't_uint256',
                        typeString: 'uint256'
                      }
                    },
                    nodeType: 'Assignment',
                    operator: '=',
                    rightHandSide: {
                      argumentTypes: null,
                      commonType: {
                        typeIdentifier: 't_uint256',
                        typeString: 'uint256'
                      },
                      id: 157,
                      isConstant: false,
                      isLValue: false,
                      isPure: false,
                      lValueRequested: false,
                      leftExpression: {
                        argumentTypes: null,
                        id: 155,
                        name: '_supply',
                        nodeType: 'Identifier',
                        overloadedDeclarations: [],
                        referencedDeclaration: 143,
                        src: '843:7:1',
                        typeDescriptions: {
                          typeIdentifier: 't_uint256',
                          typeString: 'uint256'
                        }
                      },
                      nodeType: 'BinaryOperation',
                      operator: '+',
                      rightExpression: {
                        argumentTypes: null,
                        id: 156,
                        name: 'amount',
                        nodeType: 'Identifier',
                        overloadedDeclarations: [],
                        referencedDeclaration: 128,
                        src: '853:6:1',
                        typeDescriptions: {
                          typeIdentifier: 't_uint256',
                          typeString: 'uint256'
                        }
                      },
                      src: '843:16:1',
                      typeDescriptions: {
                        typeIdentifier: 't_uint256',
                        typeString: 'uint256'
                      }
                    },
                    src: '828:31:1',
                    typeDescriptions: {
                      typeIdentifier: 't_uint256',
                      typeString: 'uint256'
                    }
                  },
                  id: 159,
                  nodeType: 'ExpressionStatement',
                  src: '828:31:1'
                },
                {
                  eventCall: {
                    argumentTypes: null,
                    arguments: [
                      {
                        argumentTypes: null,
                        expression: {
                          argumentTypes: null,
                          id: 161,
                          name: 'msg',
                          nodeType: 'Identifier',
                          overloadedDeclarations: [],
                          referencedDeclaration: 293,
                          src: '885:3:1',
                          typeDescriptions: {
                            typeIdentifier: 't_magic_message',
                            typeString: 'msg'
                          }
                        },
                        id: 162,
                        isConstant: false,
                        isLValue: false,
                        isPure: false,
                        lValueRequested: false,
                        memberName: 'sender',
                        nodeType: 'MemberAccess',
                        referencedDeclaration: null,
                        src: '885:10:1',
                        typeDescriptions: {
                          typeIdentifier: 't_address_payable',
                          typeString: 'address payable'
                        }
                      },
                      {
                        argumentTypes: null,
                        id: 163,
                        name: 'x',
                        nodeType: 'Identifier',
                        overloadedDeclarations: [],
                        referencedDeclaration: 126,
                        src: '896:1:1',
                        typeDescriptions: {
                          typeIdentifier: 't_address',
                          typeString: 'address'
                        }
                      },
                      {
                        argumentTypes: null,
                        id: 164,
                        name: 'amount',
                        nodeType: 'Identifier',
                        overloadedDeclarations: [],
                        referencedDeclaration: 128,
                        src: '898:6:1',
                        typeDescriptions: {
                          typeIdentifier: 't_uint256',
                          typeString: 'uint256'
                        }
                      }
                    ],
                    expression: {
                      argumentTypes: [
                        {
                          typeIdentifier: 't_address_payable',
                          typeString: 'address payable'
                        },
                        {
                          typeIdentifier: 't_address',
                          typeString: 'address'
                        },
                        {
                          typeIdentifier: 't_uint256',
                          typeString: 'uint256'
                        }
                      ],
                      id: 160,
                      name: 'Transaction',
                      nodeType: 'Identifier',
                      overloadedDeclarations: [],
                      referencedDeclaration: 78,
                      src: '873:11:1',
                      typeDescriptions: {
                        typeIdentifier:
                          't_function_event_nonpayable$_t_address_$_t_address_$_t_uint256_$returns$__$',
                        typeString: 'function (address,address,uint256)'
                      }
                    },
                    id: 165,
                    isConstant: false,
                    isLValue: false,
                    isPure: false,
                    kind: 'functionCall',
                    lValueRequested: false,
                    names: [],
                    nodeType: 'FunctionCall',
                    src: '873:32:1',
                    typeDescriptions: {
                      typeIdentifier: 't_tuple$__$',
                      typeString: 'tuple()'
                    }
                  },
                  id: 166,
                  nodeType: 'EmitStatement',
                  src: '868:37:1'
                }
              ]
            },
            documentation: null,
            id: 168,
            implemented: true,
            kind: 'function',
            modifiers: [
              {
                arguments: null,
                id: 131,
                modifierName: {
                  argumentTypes: null,
                  id: 130,
                  name: 'isOwner',
                  nodeType: 'Identifier',
                  overloadedDeclarations: [],
                  referencedDeclaration: 89,
                  src: '688:7:1',
                  typeDescriptions: {
                    typeIdentifier: 't_modifier$__$',
                    typeString: 'modifier ()'
                  }
                },
                nodeType: 'ModifierInvocation',
                src: '688:7:1'
              },
              {
                arguments: [
                  {
                    argumentTypes: null,
                    id: 133,
                    name: 'x',
                    nodeType: 'Identifier',
                    overloadedDeclarations: [],
                    referencedDeclaration: 126,
                    src: '704:1:1',
                    typeDescriptions: {
                      typeIdentifier: 't_address',
                      typeString: 'address'
                    }
                  }
                ],
                id: 134,
                modifierName: {
                  argumentTypes: null,
                  id: 132,
                  name: 'notNull',
                  nodeType: 'Identifier',
                  overloadedDeclarations: [],
                  referencedDeclaration: 103,
                  src: '696:7:1',
                  typeDescriptions: {
                    typeIdentifier: 't_modifier$_t_address_$',
                    typeString: 'modifier (address)'
                  }
                },
                nodeType: 'ModifierInvocation',
                src: '696:10:1'
              }
            ],
            name: '_mint',
            nodeType: 'FunctionDefinition',
            parameters: {
              id: 129,
              nodeType: 'ParameterList',
              parameters: [
                {
                  constant: false,
                  id: 126,
                  name: 'x',
                  nodeType: 'VariableDeclaration',
                  scope: 168,
                  src: '655:9:1',
                  stateVariable: false,
                  storageLocation: 'default',
                  typeDescriptions: {
                    typeIdentifier: 't_address',
                    typeString: 'address'
                  },
                  typeName: {
                    id: 125,
                    name: 'address',
                    nodeType: 'ElementaryTypeName',
                    src: '655:7:1',
                    stateMutability: 'nonpayable',
                    typeDescriptions: {
                      typeIdentifier: 't_address',
                      typeString: 'address'
                    }
                  },
                  value: null,
                  visibility: 'internal'
                },
                {
                  constant: false,
                  id: 128,
                  name: 'amount',
                  nodeType: 'VariableDeclaration',
                  scope: 168,
                  src: '666:11:1',
                  stateVariable: false,
                  storageLocation: 'default',
                  typeDescriptions: {
                    typeIdentifier: 't_uint256',
                    typeString: 'uint256'
                  },
                  typeName: {
                    id: 127,
                    name: 'uint',
                    nodeType: 'ElementaryTypeName',
                    src: '666:4:1',
                    typeDescriptions: {
                      typeIdentifier: 't_uint256',
                      typeString: 'uint256'
                    }
                  },
                  value: null,
                  visibility: 'internal'
                }
              ],
              src: '654:24:1'
            },
            returnParameters: {
              id: 135,
              nodeType: 'ParameterList',
              parameters: [],
              src: '706:0:1'
            },
            scope: 278,
            src: '640:271:1',
            stateMutability: 'nonpayable',
            superFunction: null,
            visibility: 'external'
          },
          {
            body: {
              id: 219,
              nodeType: 'Block',
              src: '985:245:1',
              statements: [
                {
                  expression: {
                    argumentTypes: null,
                    arguments: [
                      {
                        argumentTypes: null,
                        commonType: {
                          typeIdentifier: 't_uint256',
                          typeString: 'uint256'
                        },
                        id: 185,
                        isConstant: false,
                        isLValue: false,
                        isPure: false,
                        lValueRequested: false,
                        leftExpression: {
                          argumentTypes: null,
                          baseExpression: {
                            argumentTypes: null,
                            id: 181,
                            name: 'balance',
                            nodeType: 'Identifier',
                            overloadedDeclarations: [],
                            referencedDeclaration: 70,
                            src: '1002:7:1',
                            typeDescriptions: {
                              typeIdentifier:
                                't_mapping$_t_address_$_t_uint256_$',
                              typeString: 'mapping(address => uint256)'
                            }
                          },
                          id: 183,
                          indexExpression: {
                            argumentTypes: null,
                            id: 182,
                            name: 'x',
                            nodeType: 'Identifier',
                            overloadedDeclarations: [],
                            referencedDeclaration: 170,
                            src: '1010:1:1',
                            typeDescriptions: {
                              typeIdentifier: 't_address',
                              typeString: 'address'
                            }
                          },
                          isConstant: false,
                          isLValue: true,
                          isPure: false,
                          lValueRequested: false,
                          nodeType: 'IndexAccess',
                          src: '1002:10:1',
                          typeDescriptions: {
                            typeIdentifier: 't_uint256',
                            typeString: 'uint256'
                          }
                        },
                        nodeType: 'BinaryOperation',
                        operator: '>=',
                        rightExpression: {
                          argumentTypes: null,
                          id: 184,
                          name: 'amount',
                          nodeType: 'Identifier',
                          overloadedDeclarations: [],
                          referencedDeclaration: 172,
                          src: '1016:6:1',
                          typeDescriptions: {
                            typeIdentifier: 't_uint256',
                            typeString: 'uint256'
                          }
                        },
                        src: '1002:20:1',
                        typeDescriptions: {
                          typeIdentifier: 't_bool',
                          typeString: 'bool'
                        }
                      }
                    ],
                    expression: {
                      argumentTypes: [
                        {
                          typeIdentifier: 't_bool',
                          typeString: 'bool'
                        }
                      ],
                      id: 180,
                      name: 'require',
                      nodeType: 'Identifier',
                      overloadedDeclarations: [296, 297],
                      referencedDeclaration: 296,
                      src: '994:7:1',
                      typeDescriptions: {
                        typeIdentifier:
                          't_function_require_pure$_t_bool_$returns$__$',
                        typeString: 'function (bool) pure'
                      }
                    },
                    id: 186,
                    isConstant: false,
                    isLValue: false,
                    isPure: false,
                    kind: 'functionCall',
                    lValueRequested: false,
                    names: [],
                    nodeType: 'FunctionCall',
                    src: '994:29:1',
                    typeDescriptions: {
                      typeIdentifier: 't_tuple$__$',
                      typeString: 'tuple()'
                    }
                  },
                  id: 187,
                  nodeType: 'ExpressionStatement',
                  src: '994:29:1'
                },
                {
                  assignments: [189],
                  declarations: [
                    {
                      constant: false,
                      id: 189,
                      name: '_temp',
                      nodeType: 'VariableDeclaration',
                      scope: 219,
                      src: '1032:10:1',
                      stateVariable: false,
                      storageLocation: 'default',
                      typeDescriptions: {
                        typeIdentifier: 't_uint256',
                        typeString: 'uint256'
                      },
                      typeName: {
                        id: 188,
                        name: 'uint',
                        nodeType: 'ElementaryTypeName',
                        src: '1032:4:1',
                        typeDescriptions: {
                          typeIdentifier: 't_uint256',
                          typeString: 'uint256'
                        }
                      },
                      value: null,
                      visibility: 'internal'
                    }
                  ],
                  id: 193,
                  initialValue: {
                    argumentTypes: null,
                    baseExpression: {
                      argumentTypes: null,
                      id: 190,
                      name: 'balance',
                      nodeType: 'Identifier',
                      overloadedDeclarations: [],
                      referencedDeclaration: 70,
                      src: '1045:7:1',
                      typeDescriptions: {
                        typeIdentifier: 't_mapping$_t_address_$_t_uint256_$',
                        typeString: 'mapping(address => uint256)'
                      }
                    },
                    id: 192,
                    indexExpression: {
                      argumentTypes: null,
                      id: 191,
                      name: 'x',
                      nodeType: 'Identifier',
                      overloadedDeclarations: [],
                      referencedDeclaration: 170,
                      src: '1053:1:1',
                      typeDescriptions: {
                        typeIdentifier: 't_address',
                        typeString: 'address'
                      }
                    },
                    isConstant: false,
                    isLValue: true,
                    isPure: false,
                    lValueRequested: false,
                    nodeType: 'IndexAccess',
                    src: '1045:10:1',
                    typeDescriptions: {
                      typeIdentifier: 't_uint256',
                      typeString: 'uint256'
                    }
                  },
                  nodeType: 'VariableDeclarationStatement',
                  src: '1032:23:1'
                },
                {
                  assignments: [195],
                  declarations: [
                    {
                      constant: false,
                      id: 195,
                      name: '_supply',
                      nodeType: 'VariableDeclaration',
                      scope: 219,
                      src: '1064:12:1',
                      stateVariable: false,
                      storageLocation: 'default',
                      typeDescriptions: {
                        typeIdentifier: 't_uint256',
                        typeString: 'uint256'
                      },
                      typeName: {
                        id: 194,
                        name: 'uint',
                        nodeType: 'ElementaryTypeName',
                        src: '1064:4:1',
                        typeDescriptions: {
                          typeIdentifier: 't_uint256',
                          typeString: 'uint256'
                        }
                      },
                      value: null,
                      visibility: 'internal'
                    }
                  ],
                  id: 197,
                  initialValue: {
                    argumentTypes: null,
                    id: 196,
                    name: 'total_supply',
                    nodeType: 'Identifier',
                    overloadedDeclarations: [],
                    referencedDeclaration: 66,
                    src: '1079:12:1',
                    typeDescriptions: {
                      typeIdentifier: 't_uint256',
                      typeString: 'uint256'
                    }
                  },
                  nodeType: 'VariableDeclarationStatement',
                  src: '1064:27:1'
                },
                {
                  expression: {
                    argumentTypes: null,
                    id: 204,
                    isConstant: false,
                    isLValue: false,
                    isPure: false,
                    lValueRequested: false,
                    leftHandSide: {
                      argumentTypes: null,
                      baseExpression: {
                        argumentTypes: null,
                        id: 198,
                        name: 'balance',
                        nodeType: 'Identifier',
                        overloadedDeclarations: [],
                        referencedDeclaration: 70,
                        src: '1100:7:1',
                        typeDescriptions: {
                          typeIdentifier: 't_mapping$_t_address_$_t_uint256_$',
                          typeString: 'mapping(address => uint256)'
                        }
                      },
                      id: 200,
                      indexExpression: {
                        argumentTypes: null,
                        id: 199,
                        name: 'x',
                        nodeType: 'Identifier',
                        overloadedDeclarations: [],
                        referencedDeclaration: 170,
                        src: '1108:1:1',
                        typeDescriptions: {
                          typeIdentifier: 't_address',
                          typeString: 'address'
                        }
                      },
                      isConstant: false,
                      isLValue: true,
                      isPure: false,
                      lValueRequested: true,
                      nodeType: 'IndexAccess',
                      src: '1100:10:1',
                      typeDescriptions: {
                        typeIdentifier: 't_uint256',
                        typeString: 'uint256'
                      }
                    },
                    nodeType: 'Assignment',
                    operator: '=',
                    rightHandSide: {
                      argumentTypes: null,
                      commonType: {
                        typeIdentifier: 't_uint256',
                        typeString: 'uint256'
                      },
                      id: 203,
                      isConstant: false,
                      isLValue: false,
                      isPure: false,
                      lValueRequested: false,
                      leftExpression: {
                        argumentTypes: null,
                        id: 201,
                        name: '_temp',
                        nodeType: 'Identifier',
                        overloadedDeclarations: [],
                        referencedDeclaration: 189,
                        src: '1113:5:1',
                        typeDescriptions: {
                          typeIdentifier: 't_uint256',
                          typeString: 'uint256'
                        }
                      },
                      nodeType: 'BinaryOperation',
                      operator: '-',
                      rightExpression: {
                        argumentTypes: null,
                        id: 202,
                        name: 'amount',
                        nodeType: 'Identifier',
                        overloadedDeclarations: [],
                        referencedDeclaration: 172,
                        src: '1121:6:1',
                        typeDescriptions: {
                          typeIdentifier: 't_uint256',
                          typeString: 'uint256'
                        }
                      },
                      src: '1113:14:1',
                      typeDescriptions: {
                        typeIdentifier: 't_uint256',
                        typeString: 'uint256'
                      }
                    },
                    src: '1100:27:1',
                    typeDescriptions: {
                      typeIdentifier: 't_uint256',
                      typeString: 'uint256'
                    }
                  },
                  id: 205,
                  nodeType: 'ExpressionStatement',
                  src: '1100:27:1'
                },
                {
                  expression: {
                    argumentTypes: null,
                    id: 210,
                    isConstant: false,
                    isLValue: false,
                    isPure: false,
                    lValueRequested: false,
                    leftHandSide: {
                      argumentTypes: null,
                      id: 206,
                      name: 'total_supply',
                      nodeType: 'Identifier',
                      overloadedDeclarations: [],
                      referencedDeclaration: 66,
                      src: '1136:12:1',
                      typeDescriptions: {
                        typeIdentifier: 't_uint256',
                        typeString: 'uint256'
                      }
                    },
                    nodeType: 'Assignment',
                    operator: '=',
                    rightHandSide: {
                      argumentTypes: null,
                      commonType: {
                        typeIdentifier: 't_uint256',
                        typeString: 'uint256'
                      },
                      id: 209,
                      isConstant: false,
                      isLValue: false,
                      isPure: false,
                      lValueRequested: false,
                      leftExpression: {
                        argumentTypes: null,
                        id: 207,
                        name: '_supply',
                        nodeType: 'Identifier',
                        overloadedDeclarations: [],
                        referencedDeclaration: 195,
                        src: '1151:7:1',
                        typeDescriptions: {
                          typeIdentifier: 't_uint256',
                          typeString: 'uint256'
                        }
                      },
                      nodeType: 'BinaryOperation',
                      operator: '-',
                      rightExpression: {
                        argumentTypes: null,
                        id: 208,
                        name: 'amount',
                        nodeType: 'Identifier',
                        overloadedDeclarations: [],
                        referencedDeclaration: 172,
                        src: '1161:6:1',
                        typeDescriptions: {
                          typeIdentifier: 't_uint256',
                          typeString: 'uint256'
                        }
                      },
                      src: '1151:16:1',
                      typeDescriptions: {
                        typeIdentifier: 't_uint256',
                        typeString: 'uint256'
                      }
                    },
                    src: '1136:31:1',
                    typeDescriptions: {
                      typeIdentifier: 't_uint256',
                      typeString: 'uint256'
                    }
                  },
                  id: 211,
                  nodeType: 'ExpressionStatement',
                  src: '1136:31:1'
                },
                {
                  eventCall: {
                    argumentTypes: null,
                    arguments: [
                      {
                        argumentTypes: null,
                        expression: {
                          argumentTypes: null,
                          id: 213,
                          name: 'msg',
                          nodeType: 'Identifier',
                          overloadedDeclarations: [],
                          referencedDeclaration: 293,
                          src: '1196:3:1',
                          typeDescriptions: {
                            typeIdentifier: 't_magic_message',
                            typeString: 'msg'
                          }
                        },
                        id: 214,
                        isConstant: false,
                        isLValue: false,
                        isPure: false,
                        lValueRequested: false,
                        memberName: 'sender',
                        nodeType: 'MemberAccess',
                        referencedDeclaration: null,
                        src: '1196:10:1',
                        typeDescriptions: {
                          typeIdentifier: 't_address_payable',
                          typeString: 'address payable'
                        }
                      },
                      {
                        argumentTypes: null,
                        id: 215,
                        name: 'x',
                        nodeType: 'Identifier',
                        overloadedDeclarations: [],
                        referencedDeclaration: 170,
                        src: '1207:1:1',
                        typeDescriptions: {
                          typeIdentifier: 't_address',
                          typeString: 'address'
                        }
                      },
                      {
                        argumentTypes: null,
                        id: 216,
                        name: 'amount',
                        nodeType: 'Identifier',
                        overloadedDeclarations: [],
                        referencedDeclaration: 172,
                        src: '1209:6:1',
                        typeDescriptions: {
                          typeIdentifier: 't_uint256',
                          typeString: 'uint256'
                        }
                      }
                    ],
                    expression: {
                      argumentTypes: [
                        {
                          typeIdentifier: 't_address_payable',
                          typeString: 'address payable'
                        },
                        {
                          typeIdentifier: 't_address',
                          typeString: 'address'
                        },
                        {
                          typeIdentifier: 't_uint256',
                          typeString: 'uint256'
                        }
                      ],
                      id: 212,
                      name: 'Transaction',
                      nodeType: 'Identifier',
                      overloadedDeclarations: [],
                      referencedDeclaration: 78,
                      src: '1184:11:1',
                      typeDescriptions: {
                        typeIdentifier:
                          't_function_event_nonpayable$_t_address_$_t_address_$_t_uint256_$returns$__$',
                        typeString: 'function (address,address,uint256)'
                      }
                    },
                    id: 217,
                    isConstant: false,
                    isLValue: false,
                    isPure: false,
                    kind: 'functionCall',
                    lValueRequested: false,
                    names: [],
                    nodeType: 'FunctionCall',
                    src: '1184:32:1',
                    typeDescriptions: {
                      typeIdentifier: 't_tuple$__$',
                      typeString: 'tuple()'
                    }
                  },
                  id: 218,
                  nodeType: 'EmitStatement',
                  src: '1179:37:1'
                }
              ]
            },
            documentation: null,
            id: 220,
            implemented: true,
            kind: 'function',
            modifiers: [
              {
                arguments: null,
                id: 175,
                modifierName: {
                  argumentTypes: null,
                  id: 174,
                  name: 'isOwner',
                  nodeType: 'Identifier',
                  overloadedDeclarations: [],
                  referencedDeclaration: 89,
                  src: '967:7:1',
                  typeDescriptions: {
                    typeIdentifier: 't_modifier$__$',
                    typeString: 'modifier ()'
                  }
                },
                nodeType: 'ModifierInvocation',
                src: '967:7:1'
              },
              {
                arguments: [
                  {
                    argumentTypes: null,
                    id: 177,
                    name: 'x',
                    nodeType: 'Identifier',
                    overloadedDeclarations: [],
                    referencedDeclaration: 170,
                    src: '983:1:1',
                    typeDescriptions: {
                      typeIdentifier: 't_address',
                      typeString: 'address'
                    }
                  }
                ],
                id: 178,
                modifierName: {
                  argumentTypes: null,
                  id: 176,
                  name: 'notNull',
                  nodeType: 'Identifier',
                  overloadedDeclarations: [],
                  referencedDeclaration: 103,
                  src: '975:7:1',
                  typeDescriptions: {
                    typeIdentifier: 't_modifier$_t_address_$',
                    typeString: 'modifier (address)'
                  }
                },
                nodeType: 'ModifierInvocation',
                src: '975:10:1'
              }
            ],
            name: '_burn',
            nodeType: 'FunctionDefinition',
            parameters: {
              id: 173,
              nodeType: 'ParameterList',
              parameters: [
                {
                  constant: false,
                  id: 170,
                  name: 'x',
                  nodeType: 'VariableDeclaration',
                  scope: 220,
                  src: '934:9:1',
                  stateVariable: false,
                  storageLocation: 'default',
                  typeDescriptions: {
                    typeIdentifier: 't_address',
                    typeString: 'address'
                  },
                  typeName: {
                    id: 169,
                    name: 'address',
                    nodeType: 'ElementaryTypeName',
                    src: '934:7:1',
                    stateMutability: 'nonpayable',
                    typeDescriptions: {
                      typeIdentifier: 't_address',
                      typeString: 'address'
                    }
                  },
                  value: null,
                  visibility: 'internal'
                },
                {
                  constant: false,
                  id: 172,
                  name: 'amount',
                  nodeType: 'VariableDeclaration',
                  scope: 220,
                  src: '945:11:1',
                  stateVariable: false,
                  storageLocation: 'default',
                  typeDescriptions: {
                    typeIdentifier: 't_uint256',
                    typeString: 'uint256'
                  },
                  typeName: {
                    id: 171,
                    name: 'uint',
                    nodeType: 'ElementaryTypeName',
                    src: '945:4:1',
                    typeDescriptions: {
                      typeIdentifier: 't_uint256',
                      typeString: 'uint256'
                    }
                  },
                  value: null,
                  visibility: 'internal'
                }
              ],
              src: '933:24:1'
            },
            returnParameters: {
              id: 179,
              nodeType: 'ParameterList',
              parameters: [],
              src: '985:0:1'
            },
            scope: 278,
            src: '919:311:1',
            stateMutability: 'nonpayable',
            superFunction: null,
            visibility: 'external'
          },
          {
            body: {
              id: 276,
              nodeType: 'Block',
              src: '1315:319:1',
              statements: [
                {
                  expression: {
                    argumentTypes: null,
                    arguments: [
                      {
                        argumentTypes: null,
                        commonType: {
                          typeIdentifier: 't_uint256',
                          typeString: 'uint256'
                        },
                        id: 236,
                        isConstant: false,
                        isLValue: false,
                        isPure: false,
                        lValueRequested: false,
                        leftExpression: {
                          argumentTypes: null,
                          baseExpression: {
                            argumentTypes: null,
                            id: 231,
                            name: 'balance',
                            nodeType: 'Identifier',
                            overloadedDeclarations: [],
                            referencedDeclaration: 70,
                            src: '1332:7:1',
                            typeDescriptions: {
                              typeIdentifier:
                                't_mapping$_t_address_$_t_uint256_$',
                              typeString: 'mapping(address => uint256)'
                            }
                          },
                          id: 234,
                          indexExpression: {
                            argumentTypes: null,
                            expression: {
                              argumentTypes: null,
                              id: 232,
                              name: 'msg',
                              nodeType: 'Identifier',
                              overloadedDeclarations: [],
                              referencedDeclaration: 293,
                              src: '1340:3:1',
                              typeDescriptions: {
                                typeIdentifier: 't_magic_message',
                                typeString: 'msg'
                              }
                            },
                            id: 233,
                            isConstant: false,
                            isLValue: false,
                            isPure: false,
                            lValueRequested: false,
                            memberName: 'sender',
                            nodeType: 'MemberAccess',
                            referencedDeclaration: null,
                            src: '1340:10:1',
                            typeDescriptions: {
                              typeIdentifier: 't_address_payable',
                              typeString: 'address payable'
                            }
                          },
                          isConstant: false,
                          isLValue: true,
                          isPure: false,
                          lValueRequested: false,
                          nodeType: 'IndexAccess',
                          src: '1332:19:1',
                          typeDescriptions: {
                            typeIdentifier: 't_uint256',
                            typeString: 'uint256'
                          }
                        },
                        nodeType: 'BinaryOperation',
                        operator: '>=',
                        rightExpression: {
                          argumentTypes: null,
                          id: 235,
                          name: 'amount',
                          nodeType: 'Identifier',
                          overloadedDeclarations: [],
                          referencedDeclaration: 224,
                          src: '1355:6:1',
                          typeDescriptions: {
                            typeIdentifier: 't_uint256',
                            typeString: 'uint256'
                          }
                        },
                        src: '1332:29:1',
                        typeDescriptions: {
                          typeIdentifier: 't_bool',
                          typeString: 'bool'
                        }
                      }
                    ],
                    expression: {
                      argumentTypes: [
                        {
                          typeIdentifier: 't_bool',
                          typeString: 'bool'
                        }
                      ],
                      id: 230,
                      name: 'require',
                      nodeType: 'Identifier',
                      overloadedDeclarations: [296, 297],
                      referencedDeclaration: 296,
                      src: '1324:7:1',
                      typeDescriptions: {
                        typeIdentifier:
                          't_function_require_pure$_t_bool_$returns$__$',
                        typeString: 'function (bool) pure'
                      }
                    },
                    id: 237,
                    isConstant: false,
                    isLValue: false,
                    isPure: false,
                    kind: 'functionCall',
                    lValueRequested: false,
                    names: [],
                    nodeType: 'FunctionCall',
                    src: '1324:38:1',
                    typeDescriptions: {
                      typeIdentifier: 't_tuple$__$',
                      typeString: 'tuple()'
                    }
                  },
                  id: 238,
                  nodeType: 'ExpressionStatement',
                  src: '1324:38:1'
                },
                {
                  assignments: [240],
                  declarations: [
                    {
                      constant: false,
                      id: 240,
                      name: '_recipient_amount',
                      nodeType: 'VariableDeclaration',
                      scope: 276,
                      src: '1371:22:1',
                      stateVariable: false,
                      storageLocation: 'default',
                      typeDescriptions: {
                        typeIdentifier: 't_uint256',
                        typeString: 'uint256'
                      },
                      typeName: {
                        id: 239,
                        name: 'uint',
                        nodeType: 'ElementaryTypeName',
                        src: '1371:4:1',
                        typeDescriptions: {
                          typeIdentifier: 't_uint256',
                          typeString: 'uint256'
                        }
                      },
                      value: null,
                      visibility: 'internal'
                    }
                  ],
                  id: 244,
                  initialValue: {
                    argumentTypes: null,
                    baseExpression: {
                      argumentTypes: null,
                      id: 241,
                      name: 'balance',
                      nodeType: 'Identifier',
                      overloadedDeclarations: [],
                      referencedDeclaration: 70,
                      src: '1396:7:1',
                      typeDescriptions: {
                        typeIdentifier: 't_mapping$_t_address_$_t_uint256_$',
                        typeString: 'mapping(address => uint256)'
                      }
                    },
                    id: 243,
                    indexExpression: {
                      argumentTypes: null,
                      id: 242,
                      name: 'recipient',
                      nodeType: 'Identifier',
                      overloadedDeclarations: [],
                      referencedDeclaration: 222,
                      src: '1404:9:1',
                      typeDescriptions: {
                        typeIdentifier: 't_address',
                        typeString: 'address'
                      }
                    },
                    isConstant: false,
                    isLValue: true,
                    isPure: false,
                    lValueRequested: false,
                    nodeType: 'IndexAccess',
                    src: '1396:18:1',
                    typeDescriptions: {
                      typeIdentifier: 't_uint256',
                      typeString: 'uint256'
                    }
                  },
                  nodeType: 'VariableDeclarationStatement',
                  src: '1371:43:1'
                },
                {
                  assignments: [246],
                  declarations: [
                    {
                      constant: false,
                      id: 246,
                      name: '_sender_amount',
                      nodeType: 'VariableDeclaration',
                      scope: 276,
                      src: '1423:19:1',
                      stateVariable: false,
                      storageLocation: 'default',
                      typeDescriptions: {
                        typeIdentifier: 't_uint256',
                        typeString: 'uint256'
                      },
                      typeName: {
                        id: 245,
                        name: 'uint',
                        nodeType: 'ElementaryTypeName',
                        src: '1423:4:1',
                        typeDescriptions: {
                          typeIdentifier: 't_uint256',
                          typeString: 'uint256'
                        }
                      },
                      value: null,
                      visibility: 'internal'
                    }
                  ],
                  id: 251,
                  initialValue: {
                    argumentTypes: null,
                    baseExpression: {
                      argumentTypes: null,
                      id: 247,
                      name: 'balance',
                      nodeType: 'Identifier',
                      overloadedDeclarations: [],
                      referencedDeclaration: 70,
                      src: '1445:7:1',
                      typeDescriptions: {
                        typeIdentifier: 't_mapping$_t_address_$_t_uint256_$',
                        typeString: 'mapping(address => uint256)'
                      }
                    },
                    id: 250,
                    indexExpression: {
                      argumentTypes: null,
                      expression: {
                        argumentTypes: null,
                        id: 248,
                        name: 'msg',
                        nodeType: 'Identifier',
                        overloadedDeclarations: [],
                        referencedDeclaration: 293,
                        src: '1453:3:1',
                        typeDescriptions: {
                          typeIdentifier: 't_magic_message',
                          typeString: 'msg'
                        }
                      },
                      id: 249,
                      isConstant: false,
                      isLValue: false,
                      isPure: false,
                      lValueRequested: false,
                      memberName: 'sender',
                      nodeType: 'MemberAccess',
                      referencedDeclaration: null,
                      src: '1453:10:1',
                      typeDescriptions: {
                        typeIdentifier: 't_address_payable',
                        typeString: 'address payable'
                      }
                    },
                    isConstant: false,
                    isLValue: true,
                    isPure: false,
                    lValueRequested: false,
                    nodeType: 'IndexAccess',
                    src: '1445:19:1',
                    typeDescriptions: {
                      typeIdentifier: 't_uint256',
                      typeString: 'uint256'
                    }
                  },
                  nodeType: 'VariableDeclarationStatement',
                  src: '1423:41:1'
                },
                {
                  expression: {
                    argumentTypes: null,
                    id: 259,
                    isConstant: false,
                    isLValue: false,
                    isPure: false,
                    lValueRequested: false,
                    leftHandSide: {
                      argumentTypes: null,
                      baseExpression: {
                        argumentTypes: null,
                        id: 252,
                        name: 'balance',
                        nodeType: 'Identifier',
                        overloadedDeclarations: [],
                        referencedDeclaration: 70,
                        src: '1473:7:1',
                        typeDescriptions: {
                          typeIdentifier: 't_mapping$_t_address_$_t_uint256_$',
                          typeString: 'mapping(address => uint256)'
                        }
                      },
                      id: 255,
                      indexExpression: {
                        argumentTypes: null,
                        expression: {
                          argumentTypes: null,
                          id: 253,
                          name: 'msg',
                          nodeType: 'Identifier',
                          overloadedDeclarations: [],
                          referencedDeclaration: 293,
                          src: '1481:3:1',
                          typeDescriptions: {
                            typeIdentifier: 't_magic_message',
                            typeString: 'msg'
                          }
                        },
                        id: 254,
                        isConstant: false,
                        isLValue: false,
                        isPure: false,
                        lValueRequested: false,
                        memberName: 'sender',
                        nodeType: 'MemberAccess',
                        referencedDeclaration: null,
                        src: '1481:10:1',
                        typeDescriptions: {
                          typeIdentifier: 't_address_payable',
                          typeString: 'address payable'
                        }
                      },
                      isConstant: false,
                      isLValue: true,
                      isPure: false,
                      lValueRequested: true,
                      nodeType: 'IndexAccess',
                      src: '1473:19:1',
                      typeDescriptions: {
                        typeIdentifier: 't_uint256',
                        typeString: 'uint256'
                      }
                    },
                    nodeType: 'Assignment',
                    operator: '=',
                    rightHandSide: {
                      argumentTypes: null,
                      commonType: {
                        typeIdentifier: 't_uint256',
                        typeString: 'uint256'
                      },
                      id: 258,
                      isConstant: false,
                      isLValue: false,
                      isPure: false,
                      lValueRequested: false,
                      leftExpression: {
                        argumentTypes: null,
                        id: 256,
                        name: '_sender_amount',
                        nodeType: 'Identifier',
                        overloadedDeclarations: [],
                        referencedDeclaration: 246,
                        src: '1495:14:1',
                        typeDescriptions: {
                          typeIdentifier: 't_uint256',
                          typeString: 'uint256'
                        }
                      },
                      nodeType: 'BinaryOperation',
                      operator: '-',
                      rightExpression: {
                        argumentTypes: null,
                        id: 257,
                        name: 'amount',
                        nodeType: 'Identifier',
                        overloadedDeclarations: [],
                        referencedDeclaration: 224,
                        src: '1512:6:1',
                        typeDescriptions: {
                          typeIdentifier: 't_uint256',
                          typeString: 'uint256'
                        }
                      },
                      src: '1495:23:1',
                      typeDescriptions: {
                        typeIdentifier: 't_uint256',
                        typeString: 'uint256'
                      }
                    },
                    src: '1473:45:1',
                    typeDescriptions: {
                      typeIdentifier: 't_uint256',
                      typeString: 'uint256'
                    }
                  },
                  id: 260,
                  nodeType: 'ExpressionStatement',
                  src: '1473:45:1'
                },
                {
                  expression: {
                    argumentTypes: null,
                    id: 267,
                    isConstant: false,
                    isLValue: false,
                    isPure: false,
                    lValueRequested: false,
                    leftHandSide: {
                      argumentTypes: null,
                      baseExpression: {
                        argumentTypes: null,
                        id: 261,
                        name: 'balance',
                        nodeType: 'Identifier',
                        overloadedDeclarations: [],
                        referencedDeclaration: 70,
                        src: '1527:7:1',
                        typeDescriptions: {
                          typeIdentifier: 't_mapping$_t_address_$_t_uint256_$',
                          typeString: 'mapping(address => uint256)'
                        }
                      },
                      id: 263,
                      indexExpression: {
                        argumentTypes: null,
                        id: 262,
                        name: 'recipient',
                        nodeType: 'Identifier',
                        overloadedDeclarations: [],
                        referencedDeclaration: 222,
                        src: '1535:9:1',
                        typeDescriptions: {
                          typeIdentifier: 't_address',
                          typeString: 'address'
                        }
                      },
                      isConstant: false,
                      isLValue: true,
                      isPure: false,
                      lValueRequested: true,
                      nodeType: 'IndexAccess',
                      src: '1527:18:1',
                      typeDescriptions: {
                        typeIdentifier: 't_uint256',
                        typeString: 'uint256'
                      }
                    },
                    nodeType: 'Assignment',
                    operator: '=',
                    rightHandSide: {
                      argumentTypes: null,
                      commonType: {
                        typeIdentifier: 't_uint256',
                        typeString: 'uint256'
                      },
                      id: 266,
                      isConstant: false,
                      isLValue: false,
                      isPure: false,
                      lValueRequested: false,
                      leftExpression: {
                        argumentTypes: null,
                        id: 264,
                        name: '_recipient_amount',
                        nodeType: 'Identifier',
                        overloadedDeclarations: [],
                        referencedDeclaration: 240,
                        src: '1548:17:1',
                        typeDescriptions: {
                          typeIdentifier: 't_uint256',
                          typeString: 'uint256'
                        }
                      },
                      nodeType: 'BinaryOperation',
                      operator: '+',
                      rightExpression: {
                        argumentTypes: null,
                        id: 265,
                        name: 'amount',
                        nodeType: 'Identifier',
                        overloadedDeclarations: [],
                        referencedDeclaration: 224,
                        src: '1568:6:1',
                        typeDescriptions: {
                          typeIdentifier: 't_uint256',
                          typeString: 'uint256'
                        }
                      },
                      src: '1548:26:1',
                      typeDescriptions: {
                        typeIdentifier: 't_uint256',
                        typeString: 'uint256'
                      }
                    },
                    src: '1527:47:1',
                    typeDescriptions: {
                      typeIdentifier: 't_uint256',
                      typeString: 'uint256'
                    }
                  },
                  id: 268,
                  nodeType: 'ExpressionStatement',
                  src: '1527:47:1'
                },
                {
                  eventCall: {
                    argumentTypes: null,
                    arguments: [
                      {
                        argumentTypes: null,
                        expression: {
                          argumentTypes: null,
                          id: 270,
                          name: 'msg',
                          nodeType: 'Identifier',
                          overloadedDeclarations: [],
                          referencedDeclaration: 293,
                          src: '1600:3:1',
                          typeDescriptions: {
                            typeIdentifier: 't_magic_message',
                            typeString: 'msg'
                          }
                        },
                        id: 271,
                        isConstant: false,
                        isLValue: false,
                        isPure: false,
                        lValueRequested: false,
                        memberName: 'sender',
                        nodeType: 'MemberAccess',
                        referencedDeclaration: null,
                        src: '1600:10:1',
                        typeDescriptions: {
                          typeIdentifier: 't_address_payable',
                          typeString: 'address payable'
                        }
                      },
                      {
                        argumentTypes: null,
                        id: 272,
                        name: 'recipient',
                        nodeType: 'Identifier',
                        overloadedDeclarations: [],
                        referencedDeclaration: 222,
                        src: '1611:9:1',
                        typeDescriptions: {
                          typeIdentifier: 't_address',
                          typeString: 'address'
                        }
                      },
                      {
                        argumentTypes: null,
                        id: 273,
                        name: 'amount',
                        nodeType: 'Identifier',
                        overloadedDeclarations: [],
                        referencedDeclaration: 224,
                        src: '1621:6:1',
                        typeDescriptions: {
                          typeIdentifier: 't_uint256',
                          typeString: 'uint256'
                        }
                      }
                    ],
                    expression: {
                      argumentTypes: [
                        {
                          typeIdentifier: 't_address_payable',
                          typeString: 'address payable'
                        },
                        {
                          typeIdentifier: 't_address',
                          typeString: 'address'
                        },
                        {
                          typeIdentifier: 't_uint256',
                          typeString: 'uint256'
                        }
                      ],
                      id: 269,
                      name: 'Transaction',
                      nodeType: 'Identifier',
                      overloadedDeclarations: [],
                      referencedDeclaration: 78,
                      src: '1588:11:1',
                      typeDescriptions: {
                        typeIdentifier:
                          't_function_event_nonpayable$_t_address_$_t_address_$_t_uint256_$returns$__$',
                        typeString: 'function (address,address,uint256)'
                      }
                    },
                    id: 274,
                    isConstant: false,
                    isLValue: false,
                    isPure: false,
                    kind: 'functionCall',
                    lValueRequested: false,
                    names: [],
                    nodeType: 'FunctionCall',
                    src: '1588:40:1',
                    typeDescriptions: {
                      typeIdentifier: 't_tuple$__$',
                      typeString: 'tuple()'
                    }
                  },
                  id: 275,
                  nodeType: 'EmitStatement',
                  src: '1583:45:1'
                }
              ]
            },
            documentation: null,
            id: 277,
            implemented: true,
            kind: 'function',
            modifiers: [
              {
                arguments: [
                  {
                    argumentTypes: null,
                    id: 227,
                    name: 'recipient',
                    nodeType: 'Identifier',
                    overloadedDeclarations: [],
                    referencedDeclaration: 222,
                    src: '1305:9:1',
                    typeDescriptions: {
                      typeIdentifier: 't_address',
                      typeString: 'address'
                    }
                  }
                ],
                id: 228,
                modifierName: {
                  argumentTypes: null,
                  id: 226,
                  name: 'notNull',
                  nodeType: 'Identifier',
                  overloadedDeclarations: [],
                  referencedDeclaration: 103,
                  src: '1297:7:1',
                  typeDescriptions: {
                    typeIdentifier: 't_modifier$_t_address_$',
                    typeString: 'modifier (address)'
                  }
                },
                nodeType: 'ModifierInvocation',
                src: '1297:18:1'
              }
            ],
            name: 'transfer',
            nodeType: 'FunctionDefinition',
            parameters: {
              id: 225,
              nodeType: 'ParameterList',
              parameters: [
                {
                  constant: false,
                  id: 222,
                  name: 'recipient',
                  nodeType: 'VariableDeclaration',
                  scope: 277,
                  src: '1256:17:1',
                  stateVariable: false,
                  storageLocation: 'default',
                  typeDescriptions: {
                    typeIdentifier: 't_address',
                    typeString: 'address'
                  },
                  typeName: {
                    id: 221,
                    name: 'address',
                    nodeType: 'ElementaryTypeName',
                    src: '1256:7:1',
                    stateMutability: 'nonpayable',
                    typeDescriptions: {
                      typeIdentifier: 't_address',
                      typeString: 'address'
                    }
                  },
                  value: null,
                  visibility: 'internal'
                },
                {
                  constant: false,
                  id: 224,
                  name: 'amount',
                  nodeType: 'VariableDeclaration',
                  scope: 277,
                  src: '1275:11:1',
                  stateVariable: false,
                  storageLocation: 'default',
                  typeDescriptions: {
                    typeIdentifier: 't_uint256',
                    typeString: 'uint256'
                  },
                  typeName: {
                    id: 223,
                    name: 'uint',
                    nodeType: 'ElementaryTypeName',
                    src: '1275:4:1',
                    typeDescriptions: {
                      typeIdentifier: 't_uint256',
                      typeString: 'uint256'
                    }
                  },
                  value: null,
                  visibility: 'internal'
                }
              ],
              src: '1255:32:1'
            },
            returnParameters: {
              id: 229,
              nodeType: 'ParameterList',
              parameters: [],
              src: '1315:0:1'
            },
            scope: 278,
            src: '1238:396:1',
            stateMutability: 'nonpayable',
            superFunction: null,
            visibility: 'external'
          }
        ],
        scope: 279,
        src: '25:1612:1'
      }
    ],
    src: '0:1637:1'
  },
  legacyAST: {
    absolutePath: '/Users/james/Desktop/chairity_token/contracts/Token.sol',
    exportedSymbols: {
      Token: [278]
    },
    id: 279,
    nodeType: 'SourceUnit',
    nodes: [
      {
        id: 58,
        literals: ['solidity', '^', '0.5', '.0'],
        nodeType: 'PragmaDirective',
        src: '0:23:1'
      },
      {
        baseContracts: [],
        contractDependencies: [],
        contractKind: 'contract',
        documentation: null,
        fullyImplemented: true,
        id: 278,
        linearizedBaseContracts: [278],
        name: 'Token',
        nodeType: 'ContractDefinition',
        nodes: [
          {
            constant: false,
            id: 60,
            name: 'owner',
            nodeType: 'VariableDeclaration',
            scope: 278,
            src: '45:20:1',
            stateVariable: true,
            storageLocation: 'default',
            typeDescriptions: {
              typeIdentifier: 't_address',
              typeString: 'address'
            },
            typeName: {
              id: 59,
              name: 'address',
              nodeType: 'ElementaryTypeName',
              src: '45:7:1',
              stateMutability: 'nonpayable',
              typeDescriptions: {
                typeIdentifier: 't_address',
                typeString: 'address'
              }
            },
            value: null,
            visibility: 'public'
          },
          {
            constant: false,
            id: 62,
            name: 'token_name',
            nodeType: 'VariableDeclaration',
            scope: 278,
            src: '70:24:1',
            stateVariable: true,
            storageLocation: 'default',
            typeDescriptions: {
              typeIdentifier: 't_string_storage',
              typeString: 'string'
            },
            typeName: {
              id: 61,
              name: 'string',
              nodeType: 'ElementaryTypeName',
              src: '70:6:1',
              typeDescriptions: {
                typeIdentifier: 't_string_storage_ptr',
                typeString: 'string'
              }
            },
            value: null,
            visibility: 'public'
          },
          {
            constant: false,
            id: 64,
            name: 'token_symbol',
            nodeType: 'VariableDeclaration',
            scope: 278,
            src: '99:26:1',
            stateVariable: true,
            storageLocation: 'default',
            typeDescriptions: {
              typeIdentifier: 't_string_storage',
              typeString: 'string'
            },
            typeName: {
              id: 63,
              name: 'string',
              nodeType: 'ElementaryTypeName',
              src: '99:6:1',
              typeDescriptions: {
                typeIdentifier: 't_string_storage_ptr',
                typeString: 'string'
              }
            },
            value: null,
            visibility: 'public'
          },
          {
            constant: false,
            id: 66,
            name: 'total_supply',
            nodeType: 'VariableDeclaration',
            scope: 278,
            src: '130:24:1',
            stateVariable: true,
            storageLocation: 'default',
            typeDescriptions: {
              typeIdentifier: 't_uint256',
              typeString: 'uint256'
            },
            typeName: {
              id: 65,
              name: 'uint',
              nodeType: 'ElementaryTypeName',
              src: '130:4:1',
              typeDescriptions: {
                typeIdentifier: 't_uint256',
                typeString: 'uint256'
              }
            },
            value: null,
            visibility: 'public'
          },
          {
            constant: false,
            id: 70,
            name: 'balance',
            nodeType: 'VariableDeclaration',
            scope: 278,
            src: '161:40:1',
            stateVariable: true,
            storageLocation: 'default',
            typeDescriptions: {
              typeIdentifier: 't_mapping$_t_address_$_t_uint256_$',
              typeString: 'mapping(address => uint256)'
            },
            typeName: {
              id: 69,
              keyType: {
                id: 67,
                name: 'address',
                nodeType: 'ElementaryTypeName',
                src: '169:7:1',
                typeDescriptions: {
                  typeIdentifier: 't_address',
                  typeString: 'address'
                }
              },
              nodeType: 'Mapping',
              src: '161:24:1',
              typeDescriptions: {
                typeIdentifier: 't_mapping$_t_address_$_t_uint256_$',
                typeString: 'mapping(address => uint256)'
              },
              valueType: {
                id: 68,
                name: 'uint',
                nodeType: 'ElementaryTypeName',
                src: '180:4:1',
                typeDescriptions: {
                  typeIdentifier: 't_uint256',
                  typeString: 'uint256'
                }
              }
            },
            value: null,
            visibility: 'public'
          },
          {
            anonymous: false,
            documentation: null,
            id: 78,
            name: 'Transaction',
            nodeType: 'EventDefinition',
            parameters: {
              id: 77,
              nodeType: 'ParameterList',
              parameters: [
                {
                  constant: false,
                  id: 72,
                  indexed: true,
                  name: '_from',
                  nodeType: 'VariableDeclaration',
                  scope: 78,
                  src: '240:21:1',
                  stateVariable: false,
                  storageLocation: 'default',
                  typeDescriptions: {
                    typeIdentifier: 't_address',
                    typeString: 'address'
                  },
                  typeName: {
                    id: 71,
                    name: 'address',
                    nodeType: 'ElementaryTypeName',
                    src: '240:7:1',
                    stateMutability: 'nonpayable',
                    typeDescriptions: {
                      typeIdentifier: 't_address',
                      typeString: 'address'
                    }
                  },
                  value: null,
                  visibility: 'internal'
                },
                {
                  constant: false,
                  id: 74,
                  indexed: true,
                  name: '_to',
                  nodeType: 'VariableDeclaration',
                  scope: 78,
                  src: '271:19:1',
                  stateVariable: false,
                  storageLocation: 'default',
                  typeDescriptions: {
                    typeIdentifier: 't_address',
                    typeString: 'address'
                  },
                  typeName: {
                    id: 73,
                    name: 'address',
                    nodeType: 'ElementaryTypeName',
                    src: '271:7:1',
                    stateMutability: 'nonpayable',
                    typeDescriptions: {
                      typeIdentifier: 't_address',
                      typeString: 'address'
                    }
                  },
                  value: null,
                  visibility: 'internal'
                },
                {
                  constant: false,
                  id: 76,
                  indexed: false,
                  name: '_value',
                  nodeType: 'VariableDeclaration',
                  scope: 78,
                  src: '300:11:1',
                  stateVariable: false,
                  storageLocation: 'default',
                  typeDescriptions: {
                    typeIdentifier: 't_uint256',
                    typeString: 'uint256'
                  },
                  typeName: {
                    id: 75,
                    name: 'uint',
                    nodeType: 'ElementaryTypeName',
                    src: '300:4:1',
                    typeDescriptions: {
                      typeIdentifier: 't_uint256',
                      typeString: 'uint256'
                    }
                  },
                  value: null,
                  visibility: 'internal'
                }
              ],
              src: '230:87:1'
            },
            src: '213:105:1'
          },
          {
            body: {
              id: 88,
              nodeType: 'Block',
              src: '341:53:1',
              statements: [
                {
                  expression: {
                    argumentTypes: null,
                    arguments: [
                      {
                        argumentTypes: null,
                        commonType: {
                          typeIdentifier: 't_address',
                          typeString: 'address'
                        },
                        id: 84,
                        isConstant: false,
                        isLValue: false,
                        isPure: false,
                        lValueRequested: false,
                        leftExpression: {
                          argumentTypes: null,
                          expression: {
                            argumentTypes: null,
                            id: 81,
                            name: 'msg',
                            nodeType: 'Identifier',
                            overloadedDeclarations: [],
                            referencedDeclaration: 293,
                            src: '358:3:1',
                            typeDescriptions: {
                              typeIdentifier: 't_magic_message',
                              typeString: 'msg'
                            }
                          },
                          id: 82,
                          isConstant: false,
                          isLValue: false,
                          isPure: false,
                          lValueRequested: false,
                          memberName: 'sender',
                          nodeType: 'MemberAccess',
                          referencedDeclaration: null,
                          src: '358:10:1',
                          typeDescriptions: {
                            typeIdentifier: 't_address_payable',
                            typeString: 'address payable'
                          }
                        },
                        nodeType: 'BinaryOperation',
                        operator: '==',
                        rightExpression: {
                          argumentTypes: null,
                          id: 83,
                          name: 'owner',
                          nodeType: 'Identifier',
                          overloadedDeclarations: [],
                          referencedDeclaration: 60,
                          src: '372:5:1',
                          typeDescriptions: {
                            typeIdentifier: 't_address',
                            typeString: 'address'
                          }
                        },
                        src: '358:19:1',
                        typeDescriptions: {
                          typeIdentifier: 't_bool',
                          typeString: 'bool'
                        }
                      }
                    ],
                    expression: {
                      argumentTypes: [
                        {
                          typeIdentifier: 't_bool',
                          typeString: 'bool'
                        }
                      ],
                      id: 80,
                      name: 'require',
                      nodeType: 'Identifier',
                      overloadedDeclarations: [296, 297],
                      referencedDeclaration: 296,
                      src: '350:7:1',
                      typeDescriptions: {
                        typeIdentifier:
                          't_function_require_pure$_t_bool_$returns$__$',
                        typeString: 'function (bool) pure'
                      }
                    },
                    id: 85,
                    isConstant: false,
                    isLValue: false,
                    isPure: false,
                    kind: 'functionCall',
                    lValueRequested: false,
                    names: [],
                    nodeType: 'FunctionCall',
                    src: '350:28:1',
                    typeDescriptions: {
                      typeIdentifier: 't_tuple$__$',
                      typeString: 'tuple()'
                    }
                  },
                  id: 86,
                  nodeType: 'ExpressionStatement',
                  src: '350:28:1'
                },
                {
                  id: 87,
                  nodeType: 'PlaceholderStatement',
                  src: '387:1:1'
                }
              ]
            },
            documentation: null,
            id: 89,
            name: 'isOwner',
            nodeType: 'ModifierDefinition',
            parameters: {
              id: 79,
              nodeType: 'ParameterList',
              parameters: [],
              src: '339:2:1'
            },
            src: '323:71:1',
            visibility: 'internal'
          },
          {
            body: {
              id: 102,
              nodeType: 'Block',
              src: '430:51:1',
              statements: [
                {
                  expression: {
                    argumentTypes: null,
                    arguments: [
                      {
                        argumentTypes: null,
                        commonType: {
                          typeIdentifier: 't_address',
                          typeString: 'address'
                        },
                        id: 98,
                        isConstant: false,
                        isLValue: false,
                        isPure: false,
                        lValueRequested: false,
                        leftExpression: {
                          argumentTypes: null,
                          id: 94,
                          name: 'x',
                          nodeType: 'Identifier',
                          overloadedDeclarations: [],
                          referencedDeclaration: 91,
                          src: '447:1:1',
                          typeDescriptions: {
                            typeIdentifier: 't_address',
                            typeString: 'address'
                          }
                        },
                        nodeType: 'BinaryOperation',
                        operator: '!=',
                        rightExpression: {
                          argumentTypes: null,
                          arguments: [
                            {
                              argumentTypes: null,
                              hexValue: '307830',
                              id: 96,
                              isConstant: false,
                              isLValue: false,
                              isPure: true,
                              kind: 'number',
                              lValueRequested: false,
                              nodeType: 'Literal',
                              src: '460:3:1',
                              subdenomination: null,
                              typeDescriptions: {
                                typeIdentifier: 't_rational_0_by_1',
                                typeString: 'int_const 0'
                              },
                              value: '0x0'
                            }
                          ],
                          expression: {
                            argumentTypes: [
                              {
                                typeIdentifier: 't_rational_0_by_1',
                                typeString: 'int_const 0'
                              }
                            ],
                            id: 95,
                            isConstant: false,
                            isLValue: false,
                            isPure: true,
                            lValueRequested: false,
                            nodeType: 'ElementaryTypeNameExpression',
                            src: '452:7:1',
                            typeDescriptions: {
                              typeIdentifier: 't_type$_t_address_$',
                              typeString: 'type(address)'
                            },
                            typeName: 'address'
                          },
                          id: 97,
                          isConstant: false,
                          isLValue: false,
                          isPure: true,
                          kind: 'typeConversion',
                          lValueRequested: false,
                          names: [],
                          nodeType: 'FunctionCall',
                          src: '452:12:1',
                          typeDescriptions: {
                            typeIdentifier: 't_address_payable',
                            typeString: 'address payable'
                          }
                        },
                        src: '447:17:1',
                        typeDescriptions: {
                          typeIdentifier: 't_bool',
                          typeString: 'bool'
                        }
                      }
                    ],
                    expression: {
                      argumentTypes: [
                        {
                          typeIdentifier: 't_bool',
                          typeString: 'bool'
                        }
                      ],
                      id: 93,
                      name: 'require',
                      nodeType: 'Identifier',
                      overloadedDeclarations: [296, 297],
                      referencedDeclaration: 296,
                      src: '439:7:1',
                      typeDescriptions: {
                        typeIdentifier:
                          't_function_require_pure$_t_bool_$returns$__$',
                        typeString: 'function (bool) pure'
                      }
                    },
                    id: 99,
                    isConstant: false,
                    isLValue: false,
                    isPure: false,
                    kind: 'functionCall',
                    lValueRequested: false,
                    names: [],
                    nodeType: 'FunctionCall',
                    src: '439:26:1',
                    typeDescriptions: {
                      typeIdentifier: 't_tuple$__$',
                      typeString: 'tuple()'
                    }
                  },
                  id: 100,
                  nodeType: 'ExpressionStatement',
                  src: '439:26:1'
                },
                {
                  id: 101,
                  nodeType: 'PlaceholderStatement',
                  src: '474:1:1'
                }
              ]
            },
            documentation: null,
            id: 103,
            name: 'notNull',
            nodeType: 'ModifierDefinition',
            parameters: {
              id: 92,
              nodeType: 'ParameterList',
              parameters: [
                {
                  constant: false,
                  id: 91,
                  name: 'x',
                  nodeType: 'VariableDeclaration',
                  scope: 103,
                  src: '420:9:1',
                  stateVariable: false,
                  storageLocation: 'default',
                  typeDescriptions: {
                    typeIdentifier: 't_address',
                    typeString: 'address'
                  },
                  typeName: {
                    id: 90,
                    name: 'address',
                    nodeType: 'ElementaryTypeName',
                    src: '420:7:1',
                    stateMutability: 'nonpayable',
                    typeDescriptions: {
                      typeIdentifier: 't_address',
                      typeString: 'address'
                    }
                  },
                  value: null,
                  visibility: 'internal'
                }
              ],
              src: '419:11:1'
            },
            src: '403:78:1',
            visibility: 'internal'
          },
          {
            body: {
              id: 123,
              nodeType: 'Block',
              src: '546:89:1',
              statements: [
                {
                  expression: {
                    argumentTypes: null,
                    id: 113,
                    isConstant: false,
                    isLValue: false,
                    isPure: false,
                    lValueRequested: false,
                    leftHandSide: {
                      argumentTypes: null,
                      id: 110,
                      name: 'owner',
                      nodeType: 'Identifier',
                      overloadedDeclarations: [],
                      referencedDeclaration: 60,
                      src: '555:5:1',
                      typeDescriptions: {
                        typeIdentifier: 't_address',
                        typeString: 'address'
                      }
                    },
                    nodeType: 'Assignment',
                    operator: '=',
                    rightHandSide: {
                      argumentTypes: null,
                      expression: {
                        argumentTypes: null,
                        id: 111,
                        name: 'msg',
                        nodeType: 'Identifier',
                        overloadedDeclarations: [],
                        referencedDeclaration: 293,
                        src: '563:3:1',
                        typeDescriptions: {
                          typeIdentifier: 't_magic_message',
                          typeString: 'msg'
                        }
                      },
                      id: 112,
                      isConstant: false,
                      isLValue: false,
                      isPure: false,
                      lValueRequested: false,
                      memberName: 'sender',
                      nodeType: 'MemberAccess',
                      referencedDeclaration: null,
                      src: '563:10:1',
                      typeDescriptions: {
                        typeIdentifier: 't_address_payable',
                        typeString: 'address payable'
                      }
                    },
                    src: '555:18:1',
                    typeDescriptions: {
                      typeIdentifier: 't_address',
                      typeString: 'address'
                    }
                  },
                  id: 114,
                  nodeType: 'ExpressionStatement',
                  src: '555:18:1'
                },
                {
                  expression: {
                    argumentTypes: null,
                    id: 117,
                    isConstant: false,
                    isLValue: false,
                    isPure: false,
                    lValueRequested: false,
                    leftHandSide: {
                      argumentTypes: null,
                      id: 115,
                      name: 'token_name',
                      nodeType: 'Identifier',
                      overloadedDeclarations: [],
                      referencedDeclaration: 62,
                      src: '582:10:1',
                      typeDescriptions: {
                        typeIdentifier: 't_string_storage',
                        typeString: 'string storage ref'
                      }
                    },
                    nodeType: 'Assignment',
                    operator: '=',
                    rightHandSide: {
                      argumentTypes: null,
                      id: 116,
                      name: 'name',
                      nodeType: 'Identifier',
                      overloadedDeclarations: [],
                      referencedDeclaration: 105,
                      src: '595:4:1',
                      typeDescriptions: {
                        typeIdentifier: 't_string_memory_ptr',
                        typeString: 'string memory'
                      }
                    },
                    src: '582:17:1',
                    typeDescriptions: {
                      typeIdentifier: 't_string_storage',
                      typeString: 'string storage ref'
                    }
                  },
                  id: 118,
                  nodeType: 'ExpressionStatement',
                  src: '582:17:1'
                },
                {
                  expression: {
                    argumentTypes: null,
                    id: 121,
                    isConstant: false,
                    isLValue: false,
                    isPure: false,
                    lValueRequested: false,
                    leftHandSide: {
                      argumentTypes: null,
                      id: 119,
                      name: 'token_symbol',
                      nodeType: 'Identifier',
                      overloadedDeclarations: [],
                      referencedDeclaration: 64,
                      src: '608:12:1',
                      typeDescriptions: {
                        typeIdentifier: 't_string_storage',
                        typeString: 'string storage ref'
                      }
                    },
                    nodeType: 'Assignment',
                    operator: '=',
                    rightHandSide: {
                      argumentTypes: null,
                      id: 120,
                      name: 'symbol',
                      nodeType: 'Identifier',
                      overloadedDeclarations: [],
                      referencedDeclaration: 107,
                      src: '622:6:1',
                      typeDescriptions: {
                        typeIdentifier: 't_string_memory_ptr',
                        typeString: 'string memory'
                      }
                    },
                    src: '608:20:1',
                    typeDescriptions: {
                      typeIdentifier: 't_string_storage',
                      typeString: 'string storage ref'
                    }
                  },
                  id: 122,
                  nodeType: 'ExpressionStatement',
                  src: '608:20:1'
                }
              ]
            },
            documentation: null,
            id: 124,
            implemented: true,
            kind: 'constructor',
            modifiers: [],
            name: '',
            nodeType: 'FunctionDefinition',
            parameters: {
              id: 108,
              nodeType: 'ParameterList',
              parameters: [
                {
                  constant: false,
                  id: 105,
                  name: 'name',
                  nodeType: 'VariableDeclaration',
                  scope: 124,
                  src: '498:18:1',
                  stateVariable: false,
                  storageLocation: 'memory',
                  typeDescriptions: {
                    typeIdentifier: 't_string_memory_ptr',
                    typeString: 'string'
                  },
                  typeName: {
                    id: 104,
                    name: 'string',
                    nodeType: 'ElementaryTypeName',
                    src: '498:6:1',
                    typeDescriptions: {
                      typeIdentifier: 't_string_storage_ptr',
                      typeString: 'string'
                    }
                  },
                  value: null,
                  visibility: 'internal'
                },
                {
                  constant: false,
                  id: 107,
                  name: 'symbol',
                  nodeType: 'VariableDeclaration',
                  scope: 124,
                  src: '518:20:1',
                  stateVariable: false,
                  storageLocation: 'memory',
                  typeDescriptions: {
                    typeIdentifier: 't_string_memory_ptr',
                    typeString: 'string'
                  },
                  typeName: {
                    id: 106,
                    name: 'string',
                    nodeType: 'ElementaryTypeName',
                    src: '518:6:1',
                    typeDescriptions: {
                      typeIdentifier: 't_string_storage_ptr',
                      typeString: 'string'
                    }
                  },
                  value: null,
                  visibility: 'internal'
                }
              ],
              src: '497:42:1'
            },
            returnParameters: {
              id: 109,
              nodeType: 'ParameterList',
              parameters: [],
              src: '546:0:1'
            },
            scope: 278,
            src: '486:149:1',
            stateMutability: 'nonpayable',
            superFunction: null,
            visibility: 'public'
          },
          {
            body: {
              id: 167,
              nodeType: 'Block',
              src: '706:205:1',
              statements: [
                {
                  assignments: [137],
                  declarations: [
                    {
                      constant: false,
                      id: 137,
                      name: '_temp',
                      nodeType: 'VariableDeclaration',
                      scope: 167,
                      src: '723:10:1',
                      stateVariable: false,
                      storageLocation: 'default',
                      typeDescriptions: {
                        typeIdentifier: 't_uint256',
                        typeString: 'uint256'
                      },
                      typeName: {
                        id: 136,
                        name: 'uint',
                        nodeType: 'ElementaryTypeName',
                        src: '723:4:1',
                        typeDescriptions: {
                          typeIdentifier: 't_uint256',
                          typeString: 'uint256'
                        }
                      },
                      value: null,
                      visibility: 'internal'
                    }
                  ],
                  id: 141,
                  initialValue: {
                    argumentTypes: null,
                    baseExpression: {
                      argumentTypes: null,
                      id: 138,
                      name: 'balance',
                      nodeType: 'Identifier',
                      overloadedDeclarations: [],
                      referencedDeclaration: 70,
                      src: '737:7:1',
                      typeDescriptions: {
                        typeIdentifier: 't_mapping$_t_address_$_t_uint256_$',
                        typeString: 'mapping(address => uint256)'
                      }
                    },
                    id: 140,
                    indexExpression: {
                      argumentTypes: null,
                      id: 139,
                      name: 'x',
                      nodeType: 'Identifier',
                      overloadedDeclarations: [],
                      referencedDeclaration: 126,
                      src: '745:1:1',
                      typeDescriptions: {
                        typeIdentifier: 't_address',
                        typeString: 'address'
                      }
                    },
                    isConstant: false,
                    isLValue: true,
                    isPure: false,
                    lValueRequested: false,
                    nodeType: 'IndexAccess',
                    src: '737:10:1',
                    typeDescriptions: {
                      typeIdentifier: 't_uint256',
                      typeString: 'uint256'
                    }
                  },
                  nodeType: 'VariableDeclarationStatement',
                  src: '723:24:1'
                },
                {
                  assignments: [143],
                  declarations: [
                    {
                      constant: false,
                      id: 143,
                      name: '_supply',
                      nodeType: 'VariableDeclaration',
                      scope: 167,
                      src: '756:12:1',
                      stateVariable: false,
                      storageLocation: 'default',
                      typeDescriptions: {
                        typeIdentifier: 't_uint256',
                        typeString: 'uint256'
                      },
                      typeName: {
                        id: 142,
                        name: 'uint',
                        nodeType: 'ElementaryTypeName',
                        src: '756:4:1',
                        typeDescriptions: {
                          typeIdentifier: 't_uint256',
                          typeString: 'uint256'
                        }
                      },
                      value: null,
                      visibility: 'internal'
                    }
                  ],
                  id: 145,
                  initialValue: {
                    argumentTypes: null,
                    id: 144,
                    name: 'total_supply',
                    nodeType: 'Identifier',
                    overloadedDeclarations: [],
                    referencedDeclaration: 66,
                    src: '771:12:1',
                    typeDescriptions: {
                      typeIdentifier: 't_uint256',
                      typeString: 'uint256'
                    }
                  },
                  nodeType: 'VariableDeclarationStatement',
                  src: '756:27:1'
                },
                {
                  expression: {
                    argumentTypes: null,
                    id: 152,
                    isConstant: false,
                    isLValue: false,
                    isPure: false,
                    lValueRequested: false,
                    leftHandSide: {
                      argumentTypes: null,
                      baseExpression: {
                        argumentTypes: null,
                        id: 146,
                        name: 'balance',
                        nodeType: 'Identifier',
                        overloadedDeclarations: [],
                        referencedDeclaration: 70,
                        src: '792:7:1',
                        typeDescriptions: {
                          typeIdentifier: 't_mapping$_t_address_$_t_uint256_$',
                          typeString: 'mapping(address => uint256)'
                        }
                      },
                      id: 148,
                      indexExpression: {
                        argumentTypes: null,
                        id: 147,
                        name: 'x',
                        nodeType: 'Identifier',
                        overloadedDeclarations: [],
                        referencedDeclaration: 126,
                        src: '800:1:1',
                        typeDescriptions: {
                          typeIdentifier: 't_address',
                          typeString: 'address'
                        }
                      },
                      isConstant: false,
                      isLValue: true,
                      isPure: false,
                      lValueRequested: true,
                      nodeType: 'IndexAccess',
                      src: '792:10:1',
                      typeDescriptions: {
                        typeIdentifier: 't_uint256',
                        typeString: 'uint256'
                      }
                    },
                    nodeType: 'Assignment',
                    operator: '=',
                    rightHandSide: {
                      argumentTypes: null,
                      commonType: {
                        typeIdentifier: 't_uint256',
                        typeString: 'uint256'
                      },
                      id: 151,
                      isConstant: false,
                      isLValue: false,
                      isPure: false,
                      lValueRequested: false,
                      leftExpression: {
                        argumentTypes: null,
                        id: 149,
                        name: '_temp',
                        nodeType: 'Identifier',
                        overloadedDeclarations: [],
                        referencedDeclaration: 137,
                        src: '805:5:1',
                        typeDescriptions: {
                          typeIdentifier: 't_uint256',
                          typeString: 'uint256'
                        }
                      },
                      nodeType: 'BinaryOperation',
                      operator: '+',
                      rightExpression: {
                        argumentTypes: null,
                        id: 150,
                        name: 'amount',
                        nodeType: 'Identifier',
                        overloadedDeclarations: [],
                        referencedDeclaration: 128,
                        src: '813:6:1',
                        typeDescriptions: {
                          typeIdentifier: 't_uint256',
                          typeString: 'uint256'
                        }
                      },
                      src: '805:14:1',
                      typeDescriptions: {
                        typeIdentifier: 't_uint256',
                        typeString: 'uint256'
                      }
                    },
                    src: '792:27:1',
                    typeDescriptions: {
                      typeIdentifier: 't_uint256',
                      typeString: 'uint256'
                    }
                  },
                  id: 153,
                  nodeType: 'ExpressionStatement',
                  src: '792:27:1'
                },
                {
                  expression: {
                    argumentTypes: null,
                    id: 158,
                    isConstant: false,
                    isLValue: false,
                    isPure: false,
                    lValueRequested: false,
                    leftHandSide: {
                      argumentTypes: null,
                      id: 154,
                      name: 'total_supply',
                      nodeType: 'Identifier',
                      overloadedDeclarations: [],
                      referencedDeclaration: 66,
                      src: '828:12:1',
                      typeDescriptions: {
                        typeIdentifier: 't_uint256',
                        typeString: 'uint256'
                      }
                    },
                    nodeType: 'Assignment',
                    operator: '=',
                    rightHandSide: {
                      argumentTypes: null,
                      commonType: {
                        typeIdentifier: 't_uint256',
                        typeString: 'uint256'
                      },
                      id: 157,
                      isConstant: false,
                      isLValue: false,
                      isPure: false,
                      lValueRequested: false,
                      leftExpression: {
                        argumentTypes: null,
                        id: 155,
                        name: '_supply',
                        nodeType: 'Identifier',
                        overloadedDeclarations: [],
                        referencedDeclaration: 143,
                        src: '843:7:1',
                        typeDescriptions: {
                          typeIdentifier: 't_uint256',
                          typeString: 'uint256'
                        }
                      },
                      nodeType: 'BinaryOperation',
                      operator: '+',
                      rightExpression: {
                        argumentTypes: null,
                        id: 156,
                        name: 'amount',
                        nodeType: 'Identifier',
                        overloadedDeclarations: [],
                        referencedDeclaration: 128,
                        src: '853:6:1',
                        typeDescriptions: {
                          typeIdentifier: 't_uint256',
                          typeString: 'uint256'
                        }
                      },
                      src: '843:16:1',
                      typeDescriptions: {
                        typeIdentifier: 't_uint256',
                        typeString: 'uint256'
                      }
                    },
                    src: '828:31:1',
                    typeDescriptions: {
                      typeIdentifier: 't_uint256',
                      typeString: 'uint256'
                    }
                  },
                  id: 159,
                  nodeType: 'ExpressionStatement',
                  src: '828:31:1'
                },
                {
                  eventCall: {
                    argumentTypes: null,
                    arguments: [
                      {
                        argumentTypes: null,
                        expression: {
                          argumentTypes: null,
                          id: 161,
                          name: 'msg',
                          nodeType: 'Identifier',
                          overloadedDeclarations: [],
                          referencedDeclaration: 293,
                          src: '885:3:1',
                          typeDescriptions: {
                            typeIdentifier: 't_magic_message',
                            typeString: 'msg'
                          }
                        },
                        id: 162,
                        isConstant: false,
                        isLValue: false,
                        isPure: false,
                        lValueRequested: false,
                        memberName: 'sender',
                        nodeType: 'MemberAccess',
                        referencedDeclaration: null,
                        src: '885:10:1',
                        typeDescriptions: {
                          typeIdentifier: 't_address_payable',
                          typeString: 'address payable'
                        }
                      },
                      {
                        argumentTypes: null,
                        id: 163,
                        name: 'x',
                        nodeType: 'Identifier',
                        overloadedDeclarations: [],
                        referencedDeclaration: 126,
                        src: '896:1:1',
                        typeDescriptions: {
                          typeIdentifier: 't_address',
                          typeString: 'address'
                        }
                      },
                      {
                        argumentTypes: null,
                        id: 164,
                        name: 'amount',
                        nodeType: 'Identifier',
                        overloadedDeclarations: [],
                        referencedDeclaration: 128,
                        src: '898:6:1',
                        typeDescriptions: {
                          typeIdentifier: 't_uint256',
                          typeString: 'uint256'
                        }
                      }
                    ],
                    expression: {
                      argumentTypes: [
                        {
                          typeIdentifier: 't_address_payable',
                          typeString: 'address payable'
                        },
                        {
                          typeIdentifier: 't_address',
                          typeString: 'address'
                        },
                        {
                          typeIdentifier: 't_uint256',
                          typeString: 'uint256'
                        }
                      ],
                      id: 160,
                      name: 'Transaction',
                      nodeType: 'Identifier',
                      overloadedDeclarations: [],
                      referencedDeclaration: 78,
                      src: '873:11:1',
                      typeDescriptions: {
                        typeIdentifier:
                          't_function_event_nonpayable$_t_address_$_t_address_$_t_uint256_$returns$__$',
                        typeString: 'function (address,address,uint256)'
                      }
                    },
                    id: 165,
                    isConstant: false,
                    isLValue: false,
                    isPure: false,
                    kind: 'functionCall',
                    lValueRequested: false,
                    names: [],
                    nodeType: 'FunctionCall',
                    src: '873:32:1',
                    typeDescriptions: {
                      typeIdentifier: 't_tuple$__$',
                      typeString: 'tuple()'
                    }
                  },
                  id: 166,
                  nodeType: 'EmitStatement',
                  src: '868:37:1'
                }
              ]
            },
            documentation: null,
            id: 168,
            implemented: true,
            kind: 'function',
            modifiers: [
              {
                arguments: null,
                id: 131,
                modifierName: {
                  argumentTypes: null,
                  id: 130,
                  name: 'isOwner',
                  nodeType: 'Identifier',
                  overloadedDeclarations: [],
                  referencedDeclaration: 89,
                  src: '688:7:1',
                  typeDescriptions: {
                    typeIdentifier: 't_modifier$__$',
                    typeString: 'modifier ()'
                  }
                },
                nodeType: 'ModifierInvocation',
                src: '688:7:1'
              },
              {
                arguments: [
                  {
                    argumentTypes: null,
                    id: 133,
                    name: 'x',
                    nodeType: 'Identifier',
                    overloadedDeclarations: [],
                    referencedDeclaration: 126,
                    src: '704:1:1',
                    typeDescriptions: {
                      typeIdentifier: 't_address',
                      typeString: 'address'
                    }
                  }
                ],
                id: 134,
                modifierName: {
                  argumentTypes: null,
                  id: 132,
                  name: 'notNull',
                  nodeType: 'Identifier',
                  overloadedDeclarations: [],
                  referencedDeclaration: 103,
                  src: '696:7:1',
                  typeDescriptions: {
                    typeIdentifier: 't_modifier$_t_address_$',
                    typeString: 'modifier (address)'
                  }
                },
                nodeType: 'ModifierInvocation',
                src: '696:10:1'
              }
            ],
            name: '_mint',
            nodeType: 'FunctionDefinition',
            parameters: {
              id: 129,
              nodeType: 'ParameterList',
              parameters: [
                {
                  constant: false,
                  id: 126,
                  name: 'x',
                  nodeType: 'VariableDeclaration',
                  scope: 168,
                  src: '655:9:1',
                  stateVariable: false,
                  storageLocation: 'default',
                  typeDescriptions: {
                    typeIdentifier: 't_address',
                    typeString: 'address'
                  },
                  typeName: {
                    id: 125,
                    name: 'address',
                    nodeType: 'ElementaryTypeName',
                    src: '655:7:1',
                    stateMutability: 'nonpayable',
                    typeDescriptions: {
                      typeIdentifier: 't_address',
                      typeString: 'address'
                    }
                  },
                  value: null,
                  visibility: 'internal'
                },
                {
                  constant: false,
                  id: 128,
                  name: 'amount',
                  nodeType: 'VariableDeclaration',
                  scope: 168,
                  src: '666:11:1',
                  stateVariable: false,
                  storageLocation: 'default',
                  typeDescriptions: {
                    typeIdentifier: 't_uint256',
                    typeString: 'uint256'
                  },
                  typeName: {
                    id: 127,
                    name: 'uint',
                    nodeType: 'ElementaryTypeName',
                    src: '666:4:1',
                    typeDescriptions: {
                      typeIdentifier: 't_uint256',
                      typeString: 'uint256'
                    }
                  },
                  value: null,
                  visibility: 'internal'
                }
              ],
              src: '654:24:1'
            },
            returnParameters: {
              id: 135,
              nodeType: 'ParameterList',
              parameters: [],
              src: '706:0:1'
            },
            scope: 278,
            src: '640:271:1',
            stateMutability: 'nonpayable',
            superFunction: null,
            visibility: 'external'
          },
          {
            body: {
              id: 219,
              nodeType: 'Block',
              src: '985:245:1',
              statements: [
                {
                  expression: {
                    argumentTypes: null,
                    arguments: [
                      {
                        argumentTypes: null,
                        commonType: {
                          typeIdentifier: 't_uint256',
                          typeString: 'uint256'
                        },
                        id: 185,
                        isConstant: false,
                        isLValue: false,
                        isPure: false,
                        lValueRequested: false,
                        leftExpression: {
                          argumentTypes: null,
                          baseExpression: {
                            argumentTypes: null,
                            id: 181,
                            name: 'balance',
                            nodeType: 'Identifier',
                            overloadedDeclarations: [],
                            referencedDeclaration: 70,
                            src: '1002:7:1',
                            typeDescriptions: {
                              typeIdentifier:
                                't_mapping$_t_address_$_t_uint256_$',
                              typeString: 'mapping(address => uint256)'
                            }
                          },
                          id: 183,
                          indexExpression: {
                            argumentTypes: null,
                            id: 182,
                            name: 'x',
                            nodeType: 'Identifier',
                            overloadedDeclarations: [],
                            referencedDeclaration: 170,
                            src: '1010:1:1',
                            typeDescriptions: {
                              typeIdentifier: 't_address',
                              typeString: 'address'
                            }
                          },
                          isConstant: false,
                          isLValue: true,
                          isPure: false,
                          lValueRequested: false,
                          nodeType: 'IndexAccess',
                          src: '1002:10:1',
                          typeDescriptions: {
                            typeIdentifier: 't_uint256',
                            typeString: 'uint256'
                          }
                        },
                        nodeType: 'BinaryOperation',
                        operator: '>=',
                        rightExpression: {
                          argumentTypes: null,
                          id: 184,
                          name: 'amount',
                          nodeType: 'Identifier',
                          overloadedDeclarations: [],
                          referencedDeclaration: 172,
                          src: '1016:6:1',
                          typeDescriptions: {
                            typeIdentifier: 't_uint256',
                            typeString: 'uint256'
                          }
                        },
                        src: '1002:20:1',
                        typeDescriptions: {
                          typeIdentifier: 't_bool',
                          typeString: 'bool'
                        }
                      }
                    ],
                    expression: {
                      argumentTypes: [
                        {
                          typeIdentifier: 't_bool',
                          typeString: 'bool'
                        }
                      ],
                      id: 180,
                      name: 'require',
                      nodeType: 'Identifier',
                      overloadedDeclarations: [296, 297],
                      referencedDeclaration: 296,
                      src: '994:7:1',
                      typeDescriptions: {
                        typeIdentifier:
                          't_function_require_pure$_t_bool_$returns$__$',
                        typeString: 'function (bool) pure'
                      }
                    },
                    id: 186,
                    isConstant: false,
                    isLValue: false,
                    isPure: false,
                    kind: 'functionCall',
                    lValueRequested: false,
                    names: [],
                    nodeType: 'FunctionCall',
                    src: '994:29:1',
                    typeDescriptions: {
                      typeIdentifier: 't_tuple$__$',
                      typeString: 'tuple()'
                    }
                  },
                  id: 187,
                  nodeType: 'ExpressionStatement',
                  src: '994:29:1'
                },
                {
                  assignments: [189],
                  declarations: [
                    {
                      constant: false,
                      id: 189,
                      name: '_temp',
                      nodeType: 'VariableDeclaration',
                      scope: 219,
                      src: '1032:10:1',
                      stateVariable: false,
                      storageLocation: 'default',
                      typeDescriptions: {
                        typeIdentifier: 't_uint256',
                        typeString: 'uint256'
                      },
                      typeName: {
                        id: 188,
                        name: 'uint',
                        nodeType: 'ElementaryTypeName',
                        src: '1032:4:1',
                        typeDescriptions: {
                          typeIdentifier: 't_uint256',
                          typeString: 'uint256'
                        }
                      },
                      value: null,
                      visibility: 'internal'
                    }
                  ],
                  id: 193,
                  initialValue: {
                    argumentTypes: null,
                    baseExpression: {
                      argumentTypes: null,
                      id: 190,
                      name: 'balance',
                      nodeType: 'Identifier',
                      overloadedDeclarations: [],
                      referencedDeclaration: 70,
                      src: '1045:7:1',
                      typeDescriptions: {
                        typeIdentifier: 't_mapping$_t_address_$_t_uint256_$',
                        typeString: 'mapping(address => uint256)'
                      }
                    },
                    id: 192,
                    indexExpression: {
                      argumentTypes: null,
                      id: 191,
                      name: 'x',
                      nodeType: 'Identifier',
                      overloadedDeclarations: [],
                      referencedDeclaration: 170,
                      src: '1053:1:1',
                      typeDescriptions: {
                        typeIdentifier: 't_address',
                        typeString: 'address'
                      }
                    },
                    isConstant: false,
                    isLValue: true,
                    isPure: false,
                    lValueRequested: false,
                    nodeType: 'IndexAccess',
                    src: '1045:10:1',
                    typeDescriptions: {
                      typeIdentifier: 't_uint256',
                      typeString: 'uint256'
                    }
                  },
                  nodeType: 'VariableDeclarationStatement',
                  src: '1032:23:1'
                },
                {
                  assignments: [195],
                  declarations: [
                    {
                      constant: false,
                      id: 195,
                      name: '_supply',
                      nodeType: 'VariableDeclaration',
                      scope: 219,
                      src: '1064:12:1',
                      stateVariable: false,
                      storageLocation: 'default',
                      typeDescriptions: {
                        typeIdentifier: 't_uint256',
                        typeString: 'uint256'
                      },
                      typeName: {
                        id: 194,
                        name: 'uint',
                        nodeType: 'ElementaryTypeName',
                        src: '1064:4:1',
                        typeDescriptions: {
                          typeIdentifier: 't_uint256',
                          typeString: 'uint256'
                        }
                      },
                      value: null,
                      visibility: 'internal'
                    }
                  ],
                  id: 197,
                  initialValue: {
                    argumentTypes: null,
                    id: 196,
                    name: 'total_supply',
                    nodeType: 'Identifier',
                    overloadedDeclarations: [],
                    referencedDeclaration: 66,
                    src: '1079:12:1',
                    typeDescriptions: {
                      typeIdentifier: 't_uint256',
                      typeString: 'uint256'
                    }
                  },
                  nodeType: 'VariableDeclarationStatement',
                  src: '1064:27:1'
                },
                {
                  expression: {
                    argumentTypes: null,
                    id: 204,
                    isConstant: false,
                    isLValue: false,
                    isPure: false,
                    lValueRequested: false,
                    leftHandSide: {
                      argumentTypes: null,
                      baseExpression: {
                        argumentTypes: null,
                        id: 198,
                        name: 'balance',
                        nodeType: 'Identifier',
                        overloadedDeclarations: [],
                        referencedDeclaration: 70,
                        src: '1100:7:1',
                        typeDescriptions: {
                          typeIdentifier: 't_mapping$_t_address_$_t_uint256_$',
                          typeString: 'mapping(address => uint256)'
                        }
                      },
                      id: 200,
                      indexExpression: {
                        argumentTypes: null,
                        id: 199,
                        name: 'x',
                        nodeType: 'Identifier',
                        overloadedDeclarations: [],
                        referencedDeclaration: 170,
                        src: '1108:1:1',
                        typeDescriptions: {
                          typeIdentifier: 't_address',
                          typeString: 'address'
                        }
                      },
                      isConstant: false,
                      isLValue: true,
                      isPure: false,
                      lValueRequested: true,
                      nodeType: 'IndexAccess',
                      src: '1100:10:1',
                      typeDescriptions: {
                        typeIdentifier: 't_uint256',
                        typeString: 'uint256'
                      }
                    },
                    nodeType: 'Assignment',
                    operator: '=',
                    rightHandSide: {
                      argumentTypes: null,
                      commonType: {
                        typeIdentifier: 't_uint256',
                        typeString: 'uint256'
                      },
                      id: 203,
                      isConstant: false,
                      isLValue: false,
                      isPure: false,
                      lValueRequested: false,
                      leftExpression: {
                        argumentTypes: null,
                        id: 201,
                        name: '_temp',
                        nodeType: 'Identifier',
                        overloadedDeclarations: [],
                        referencedDeclaration: 189,
                        src: '1113:5:1',
                        typeDescriptions: {
                          typeIdentifier: 't_uint256',
                          typeString: 'uint256'
                        }
                      },
                      nodeType: 'BinaryOperation',
                      operator: '-',
                      rightExpression: {
                        argumentTypes: null,
                        id: 202,
                        name: 'amount',
                        nodeType: 'Identifier',
                        overloadedDeclarations: [],
                        referencedDeclaration: 172,
                        src: '1121:6:1',
                        typeDescriptions: {
                          typeIdentifier: 't_uint256',
                          typeString: 'uint256'
                        }
                      },
                      src: '1113:14:1',
                      typeDescriptions: {
                        typeIdentifier: 't_uint256',
                        typeString: 'uint256'
                      }
                    },
                    src: '1100:27:1',
                    typeDescriptions: {
                      typeIdentifier: 't_uint256',
                      typeString: 'uint256'
                    }
                  },
                  id: 205,
                  nodeType: 'ExpressionStatement',
                  src: '1100:27:1'
                },
                {
                  expression: {
                    argumentTypes: null,
                    id: 210,
                    isConstant: false,
                    isLValue: false,
                    isPure: false,
                    lValueRequested: false,
                    leftHandSide: {
                      argumentTypes: null,
                      id: 206,
                      name: 'total_supply',
                      nodeType: 'Identifier',
                      overloadedDeclarations: [],
                      referencedDeclaration: 66,
                      src: '1136:12:1',
                      typeDescriptions: {
                        typeIdentifier: 't_uint256',
                        typeString: 'uint256'
                      }
                    },
                    nodeType: 'Assignment',
                    operator: '=',
                    rightHandSide: {
                      argumentTypes: null,
                      commonType: {
                        typeIdentifier: 't_uint256',
                        typeString: 'uint256'
                      },
                      id: 209,
                      isConstant: false,
                      isLValue: false,
                      isPure: false,
                      lValueRequested: false,
                      leftExpression: {
                        argumentTypes: null,
                        id: 207,
                        name: '_supply',
                        nodeType: 'Identifier',
                        overloadedDeclarations: [],
                        referencedDeclaration: 195,
                        src: '1151:7:1',
                        typeDescriptions: {
                          typeIdentifier: 't_uint256',
                          typeString: 'uint256'
                        }
                      },
                      nodeType: 'BinaryOperation',
                      operator: '-',
                      rightExpression: {
                        argumentTypes: null,
                        id: 208,
                        name: 'amount',
                        nodeType: 'Identifier',
                        overloadedDeclarations: [],
                        referencedDeclaration: 172,
                        src: '1161:6:1',
                        typeDescriptions: {
                          typeIdentifier: 't_uint256',
                          typeString: 'uint256'
                        }
                      },
                      src: '1151:16:1',
                      typeDescriptions: {
                        typeIdentifier: 't_uint256',
                        typeString: 'uint256'
                      }
                    },
                    src: '1136:31:1',
                    typeDescriptions: {
                      typeIdentifier: 't_uint256',
                      typeString: 'uint256'
                    }
                  },
                  id: 211,
                  nodeType: 'ExpressionStatement',
                  src: '1136:31:1'
                },
                {
                  eventCall: {
                    argumentTypes: null,
                    arguments: [
                      {
                        argumentTypes: null,
                        expression: {
                          argumentTypes: null,
                          id: 213,
                          name: 'msg',
                          nodeType: 'Identifier',
                          overloadedDeclarations: [],
                          referencedDeclaration: 293,
                          src: '1196:3:1',
                          typeDescriptions: {
                            typeIdentifier: 't_magic_message',
                            typeString: 'msg'
                          }
                        },
                        id: 214,
                        isConstant: false,
                        isLValue: false,
                        isPure: false,
                        lValueRequested: false,
                        memberName: 'sender',
                        nodeType: 'MemberAccess',
                        referencedDeclaration: null,
                        src: '1196:10:1',
                        typeDescriptions: {
                          typeIdentifier: 't_address_payable',
                          typeString: 'address payable'
                        }
                      },
                      {
                        argumentTypes: null,
                        id: 215,
                        name: 'x',
                        nodeType: 'Identifier',
                        overloadedDeclarations: [],
                        referencedDeclaration: 170,
                        src: '1207:1:1',
                        typeDescriptions: {
                          typeIdentifier: 't_address',
                          typeString: 'address'
                        }
                      },
                      {
                        argumentTypes: null,
                        id: 216,
                        name: 'amount',
                        nodeType: 'Identifier',
                        overloadedDeclarations: [],
                        referencedDeclaration: 172,
                        src: '1209:6:1',
                        typeDescriptions: {
                          typeIdentifier: 't_uint256',
                          typeString: 'uint256'
                        }
                      }
                    ],
                    expression: {
                      argumentTypes: [
                        {
                          typeIdentifier: 't_address_payable',
                          typeString: 'address payable'
                        },
                        {
                          typeIdentifier: 't_address',
                          typeString: 'address'
                        },
                        {
                          typeIdentifier: 't_uint256',
                          typeString: 'uint256'
                        }
                      ],
                      id: 212,
                      name: 'Transaction',
                      nodeType: 'Identifier',
                      overloadedDeclarations: [],
                      referencedDeclaration: 78,
                      src: '1184:11:1',
                      typeDescriptions: {
                        typeIdentifier:
                          't_function_event_nonpayable$_t_address_$_t_address_$_t_uint256_$returns$__$',
                        typeString: 'function (address,address,uint256)'
                      }
                    },
                    id: 217,
                    isConstant: false,
                    isLValue: false,
                    isPure: false,
                    kind: 'functionCall',
                    lValueRequested: false,
                    names: [],
                    nodeType: 'FunctionCall',
                    src: '1184:32:1',
                    typeDescriptions: {
                      typeIdentifier: 't_tuple$__$',
                      typeString: 'tuple()'
                    }
                  },
                  id: 218,
                  nodeType: 'EmitStatement',
                  src: '1179:37:1'
                }
              ]
            },
            documentation: null,
            id: 220,
            implemented: true,
            kind: 'function',
            modifiers: [
              {
                arguments: null,
                id: 175,
                modifierName: {
                  argumentTypes: null,
                  id: 174,
                  name: 'isOwner',
                  nodeType: 'Identifier',
                  overloadedDeclarations: [],
                  referencedDeclaration: 89,
                  src: '967:7:1',
                  typeDescriptions: {
                    typeIdentifier: 't_modifier$__$',
                    typeString: 'modifier ()'
                  }
                },
                nodeType: 'ModifierInvocation',
                src: '967:7:1'
              },
              {
                arguments: [
                  {
                    argumentTypes: null,
                    id: 177,
                    name: 'x',
                    nodeType: 'Identifier',
                    overloadedDeclarations: [],
                    referencedDeclaration: 170,
                    src: '983:1:1',
                    typeDescriptions: {
                      typeIdentifier: 't_address',
                      typeString: 'address'
                    }
                  }
                ],
                id: 178,
                modifierName: {
                  argumentTypes: null,
                  id: 176,
                  name: 'notNull',
                  nodeType: 'Identifier',
                  overloadedDeclarations: [],
                  referencedDeclaration: 103,
                  src: '975:7:1',
                  typeDescriptions: {
                    typeIdentifier: 't_modifier$_t_address_$',
                    typeString: 'modifier (address)'
                  }
                },
                nodeType: 'ModifierInvocation',
                src: '975:10:1'
              }
            ],
            name: '_burn',
            nodeType: 'FunctionDefinition',
            parameters: {
              id: 173,
              nodeType: 'ParameterList',
              parameters: [
                {
                  constant: false,
                  id: 170,
                  name: 'x',
                  nodeType: 'VariableDeclaration',
                  scope: 220,
                  src: '934:9:1',
                  stateVariable: false,
                  storageLocation: 'default',
                  typeDescriptions: {
                    typeIdentifier: 't_address',
                    typeString: 'address'
                  },
                  typeName: {
                    id: 169,
                    name: 'address',
                    nodeType: 'ElementaryTypeName',
                    src: '934:7:1',
                    stateMutability: 'nonpayable',
                    typeDescriptions: {
                      typeIdentifier: 't_address',
                      typeString: 'address'
                    }
                  },
                  value: null,
                  visibility: 'internal'
                },
                {
                  constant: false,
                  id: 172,
                  name: 'amount',
                  nodeType: 'VariableDeclaration',
                  scope: 220,
                  src: '945:11:1',
                  stateVariable: false,
                  storageLocation: 'default',
                  typeDescriptions: {
                    typeIdentifier: 't_uint256',
                    typeString: 'uint256'
                  },
                  typeName: {
                    id: 171,
                    name: 'uint',
                    nodeType: 'ElementaryTypeName',
                    src: '945:4:1',
                    typeDescriptions: {
                      typeIdentifier: 't_uint256',
                      typeString: 'uint256'
                    }
                  },
                  value: null,
                  visibility: 'internal'
                }
              ],
              src: '933:24:1'
            },
            returnParameters: {
              id: 179,
              nodeType: 'ParameterList',
              parameters: [],
              src: '985:0:1'
            },
            scope: 278,
            src: '919:311:1',
            stateMutability: 'nonpayable',
            superFunction: null,
            visibility: 'external'
          },
          {
            body: {
              id: 276,
              nodeType: 'Block',
              src: '1315:319:1',
              statements: [
                {
                  expression: {
                    argumentTypes: null,
                    arguments: [
                      {
                        argumentTypes: null,
                        commonType: {
                          typeIdentifier: 't_uint256',
                          typeString: 'uint256'
                        },
                        id: 236,
                        isConstant: false,
                        isLValue: false,
                        isPure: false,
                        lValueRequested: false,
                        leftExpression: {
                          argumentTypes: null,
                          baseExpression: {
                            argumentTypes: null,
                            id: 231,
                            name: 'balance',
                            nodeType: 'Identifier',
                            overloadedDeclarations: [],
                            referencedDeclaration: 70,
                            src: '1332:7:1',
                            typeDescriptions: {
                              typeIdentifier:
                                't_mapping$_t_address_$_t_uint256_$',
                              typeString: 'mapping(address => uint256)'
                            }
                          },
                          id: 234,
                          indexExpression: {
                            argumentTypes: null,
                            expression: {
                              argumentTypes: null,
                              id: 232,
                              name: 'msg',
                              nodeType: 'Identifier',
                              overloadedDeclarations: [],
                              referencedDeclaration: 293,
                              src: '1340:3:1',
                              typeDescriptions: {
                                typeIdentifier: 't_magic_message',
                                typeString: 'msg'
                              }
                            },
                            id: 233,
                            isConstant: false,
                            isLValue: false,
                            isPure: false,
                            lValueRequested: false,
                            memberName: 'sender',
                            nodeType: 'MemberAccess',
                            referencedDeclaration: null,
                            src: '1340:10:1',
                            typeDescriptions: {
                              typeIdentifier: 't_address_payable',
                              typeString: 'address payable'
                            }
                          },
                          isConstant: false,
                          isLValue: true,
                          isPure: false,
                          lValueRequested: false,
                          nodeType: 'IndexAccess',
                          src: '1332:19:1',
                          typeDescriptions: {
                            typeIdentifier: 't_uint256',
                            typeString: 'uint256'
                          }
                        },
                        nodeType: 'BinaryOperation',
                        operator: '>=',
                        rightExpression: {
                          argumentTypes: null,
                          id: 235,
                          name: 'amount',
                          nodeType: 'Identifier',
                          overloadedDeclarations: [],
                          referencedDeclaration: 224,
                          src: '1355:6:1',
                          typeDescriptions: {
                            typeIdentifier: 't_uint256',
                            typeString: 'uint256'
                          }
                        },
                        src: '1332:29:1',
                        typeDescriptions: {
                          typeIdentifier: 't_bool',
                          typeString: 'bool'
                        }
                      }
                    ],
                    expression: {
                      argumentTypes: [
                        {
                          typeIdentifier: 't_bool',
                          typeString: 'bool'
                        }
                      ],
                      id: 230,
                      name: 'require',
                      nodeType: 'Identifier',
                      overloadedDeclarations: [296, 297],
                      referencedDeclaration: 296,
                      src: '1324:7:1',
                      typeDescriptions: {
                        typeIdentifier:
                          't_function_require_pure$_t_bool_$returns$__$',
                        typeString: 'function (bool) pure'
                      }
                    },
                    id: 237,
                    isConstant: false,
                    isLValue: false,
                    isPure: false,
                    kind: 'functionCall',
                    lValueRequested: false,
                    names: [],
                    nodeType: 'FunctionCall',
                    src: '1324:38:1',
                    typeDescriptions: {
                      typeIdentifier: 't_tuple$__$',
                      typeString: 'tuple()'
                    }
                  },
                  id: 238,
                  nodeType: 'ExpressionStatement',
                  src: '1324:38:1'
                },
                {
                  assignments: [240],
                  declarations: [
                    {
                      constant: false,
                      id: 240,
                      name: '_recipient_amount',
                      nodeType: 'VariableDeclaration',
                      scope: 276,
                      src: '1371:22:1',
                      stateVariable: false,
                      storageLocation: 'default',
                      typeDescriptions: {
                        typeIdentifier: 't_uint256',
                        typeString: 'uint256'
                      },
                      typeName: {
                        id: 239,
                        name: 'uint',
                        nodeType: 'ElementaryTypeName',
                        src: '1371:4:1',
                        typeDescriptions: {
                          typeIdentifier: 't_uint256',
                          typeString: 'uint256'
                        }
                      },
                      value: null,
                      visibility: 'internal'
                    }
                  ],
                  id: 244,
                  initialValue: {
                    argumentTypes: null,
                    baseExpression: {
                      argumentTypes: null,
                      id: 241,
                      name: 'balance',
                      nodeType: 'Identifier',
                      overloadedDeclarations: [],
                      referencedDeclaration: 70,
                      src: '1396:7:1',
                      typeDescriptions: {
                        typeIdentifier: 't_mapping$_t_address_$_t_uint256_$',
                        typeString: 'mapping(address => uint256)'
                      }
                    },
                    id: 243,
                    indexExpression: {
                      argumentTypes: null,
                      id: 242,
                      name: 'recipient',
                      nodeType: 'Identifier',
                      overloadedDeclarations: [],
                      referencedDeclaration: 222,
                      src: '1404:9:1',
                      typeDescriptions: {
                        typeIdentifier: 't_address',
                        typeString: 'address'
                      }
                    },
                    isConstant: false,
                    isLValue: true,
                    isPure: false,
                    lValueRequested: false,
                    nodeType: 'IndexAccess',
                    src: '1396:18:1',
                    typeDescriptions: {
                      typeIdentifier: 't_uint256',
                      typeString: 'uint256'
                    }
                  },
                  nodeType: 'VariableDeclarationStatement',
                  src: '1371:43:1'
                },
                {
                  assignments: [246],
                  declarations: [
                    {
                      constant: false,
                      id: 246,
                      name: '_sender_amount',
                      nodeType: 'VariableDeclaration',
                      scope: 276,
                      src: '1423:19:1',
                      stateVariable: false,
                      storageLocation: 'default',
                      typeDescriptions: {
                        typeIdentifier: 't_uint256',
                        typeString: 'uint256'
                      },
                      typeName: {
                        id: 245,
                        name: 'uint',
                        nodeType: 'ElementaryTypeName',
                        src: '1423:4:1',
                        typeDescriptions: {
                          typeIdentifier: 't_uint256',
                          typeString: 'uint256'
                        }
                      },
                      value: null,
                      visibility: 'internal'
                    }
                  ],
                  id: 251,
                  initialValue: {
                    argumentTypes: null,
                    baseExpression: {
                      argumentTypes: null,
                      id: 247,
                      name: 'balance',
                      nodeType: 'Identifier',
                      overloadedDeclarations: [],
                      referencedDeclaration: 70,
                      src: '1445:7:1',
                      typeDescriptions: {
                        typeIdentifier: 't_mapping$_t_address_$_t_uint256_$',
                        typeString: 'mapping(address => uint256)'
                      }
                    },
                    id: 250,
                    indexExpression: {
                      argumentTypes: null,
                      expression: {
                        argumentTypes: null,
                        id: 248,
                        name: 'msg',
                        nodeType: 'Identifier',
                        overloadedDeclarations: [],
                        referencedDeclaration: 293,
                        src: '1453:3:1',
                        typeDescriptions: {
                          typeIdentifier: 't_magic_message',
                          typeString: 'msg'
                        }
                      },
                      id: 249,
                      isConstant: false,
                      isLValue: false,
                      isPure: false,
                      lValueRequested: false,
                      memberName: 'sender',
                      nodeType: 'MemberAccess',
                      referencedDeclaration: null,
                      src: '1453:10:1',
                      typeDescriptions: {
                        typeIdentifier: 't_address_payable',
                        typeString: 'address payable'
                      }
                    },
                    isConstant: false,
                    isLValue: true,
                    isPure: false,
                    lValueRequested: false,
                    nodeType: 'IndexAccess',
                    src: '1445:19:1',
                    typeDescriptions: {
                      typeIdentifier: 't_uint256',
                      typeString: 'uint256'
                    }
                  },
                  nodeType: 'VariableDeclarationStatement',
                  src: '1423:41:1'
                },
                {
                  expression: {
                    argumentTypes: null,
                    id: 259,
                    isConstant: false,
                    isLValue: false,
                    isPure: false,
                    lValueRequested: false,
                    leftHandSide: {
                      argumentTypes: null,
                      baseExpression: {
                        argumentTypes: null,
                        id: 252,
                        name: 'balance',
                        nodeType: 'Identifier',
                        overloadedDeclarations: [],
                        referencedDeclaration: 70,
                        src: '1473:7:1',
                        typeDescriptions: {
                          typeIdentifier: 't_mapping$_t_address_$_t_uint256_$',
                          typeString: 'mapping(address => uint256)'
                        }
                      },
                      id: 255,
                      indexExpression: {
                        argumentTypes: null,
                        expression: {
                          argumentTypes: null,
                          id: 253,
                          name: 'msg',
                          nodeType: 'Identifier',
                          overloadedDeclarations: [],
                          referencedDeclaration: 293,
                          src: '1481:3:1',
                          typeDescriptions: {
                            typeIdentifier: 't_magic_message',
                            typeString: 'msg'
                          }
                        },
                        id: 254,
                        isConstant: false,
                        isLValue: false,
                        isPure: false,
                        lValueRequested: false,
                        memberName: 'sender',
                        nodeType: 'MemberAccess',
                        referencedDeclaration: null,
                        src: '1481:10:1',
                        typeDescriptions: {
                          typeIdentifier: 't_address_payable',
                          typeString: 'address payable'
                        }
                      },
                      isConstant: false,
                      isLValue: true,
                      isPure: false,
                      lValueRequested: true,
                      nodeType: 'IndexAccess',
                      src: '1473:19:1',
                      typeDescriptions: {
                        typeIdentifier: 't_uint256',
                        typeString: 'uint256'
                      }
                    },
                    nodeType: 'Assignment',
                    operator: '=',
                    rightHandSide: {
                      argumentTypes: null,
                      commonType: {
                        typeIdentifier: 't_uint256',
                        typeString: 'uint256'
                      },
                      id: 258,
                      isConstant: false,
                      isLValue: false,
                      isPure: false,
                      lValueRequested: false,
                      leftExpression: {
                        argumentTypes: null,
                        id: 256,
                        name: '_sender_amount',
                        nodeType: 'Identifier',
                        overloadedDeclarations: [],
                        referencedDeclaration: 246,
                        src: '1495:14:1',
                        typeDescriptions: {
                          typeIdentifier: 't_uint256',
                          typeString: 'uint256'
                        }
                      },
                      nodeType: 'BinaryOperation',
                      operator: '-',
                      rightExpression: {
                        argumentTypes: null,
                        id: 257,
                        name: 'amount',
                        nodeType: 'Identifier',
                        overloadedDeclarations: [],
                        referencedDeclaration: 224,
                        src: '1512:6:1',
                        typeDescriptions: {
                          typeIdentifier: 't_uint256',
                          typeString: 'uint256'
                        }
                      },
                      src: '1495:23:1',
                      typeDescriptions: {
                        typeIdentifier: 't_uint256',
                        typeString: 'uint256'
                      }
                    },
                    src: '1473:45:1',
                    typeDescriptions: {
                      typeIdentifier: 't_uint256',
                      typeString: 'uint256'
                    }
                  },
                  id: 260,
                  nodeType: 'ExpressionStatement',
                  src: '1473:45:1'
                },
                {
                  expression: {
                    argumentTypes: null,
                    id: 267,
                    isConstant: false,
                    isLValue: false,
                    isPure: false,
                    lValueRequested: false,
                    leftHandSide: {
                      argumentTypes: null,
                      baseExpression: {
                        argumentTypes: null,
                        id: 261,
                        name: 'balance',
                        nodeType: 'Identifier',
                        overloadedDeclarations: [],
                        referencedDeclaration: 70,
                        src: '1527:7:1',
                        typeDescriptions: {
                          typeIdentifier: 't_mapping$_t_address_$_t_uint256_$',
                          typeString: 'mapping(address => uint256)'
                        }
                      },
                      id: 263,
                      indexExpression: {
                        argumentTypes: null,
                        id: 262,
                        name: 'recipient',
                        nodeType: 'Identifier',
                        overloadedDeclarations: [],
                        referencedDeclaration: 222,
                        src: '1535:9:1',
                        typeDescriptions: {
                          typeIdentifier: 't_address',
                          typeString: 'address'
                        }
                      },
                      isConstant: false,
                      isLValue: true,
                      isPure: false,
                      lValueRequested: true,
                      nodeType: 'IndexAccess',
                      src: '1527:18:1',
                      typeDescriptions: {
                        typeIdentifier: 't_uint256',
                        typeString: 'uint256'
                      }
                    },
                    nodeType: 'Assignment',
                    operator: '=',
                    rightHandSide: {
                      argumentTypes: null,
                      commonType: {
                        typeIdentifier: 't_uint256',
                        typeString: 'uint256'
                      },
                      id: 266,
                      isConstant: false,
                      isLValue: false,
                      isPure: false,
                      lValueRequested: false,
                      leftExpression: {
                        argumentTypes: null,
                        id: 264,
                        name: '_recipient_amount',
                        nodeType: 'Identifier',
                        overloadedDeclarations: [],
                        referencedDeclaration: 240,
                        src: '1548:17:1',
                        typeDescriptions: {
                          typeIdentifier: 't_uint256',
                          typeString: 'uint256'
                        }
                      },
                      nodeType: 'BinaryOperation',
                      operator: '+',
                      rightExpression: {
                        argumentTypes: null,
                        id: 265,
                        name: 'amount',
                        nodeType: 'Identifier',
                        overloadedDeclarations: [],
                        referencedDeclaration: 224,
                        src: '1568:6:1',
                        typeDescriptions: {
                          typeIdentifier: 't_uint256',
                          typeString: 'uint256'
                        }
                      },
                      src: '1548:26:1',
                      typeDescriptions: {
                        typeIdentifier: 't_uint256',
                        typeString: 'uint256'
                      }
                    },
                    src: '1527:47:1',
                    typeDescriptions: {
                      typeIdentifier: 't_uint256',
                      typeString: 'uint256'
                    }
                  },
                  id: 268,
                  nodeType: 'ExpressionStatement',
                  src: '1527:47:1'
                },
                {
                  eventCall: {
                    argumentTypes: null,
                    arguments: [
                      {
                        argumentTypes: null,
                        expression: {
                          argumentTypes: null,
                          id: 270,
                          name: 'msg',
                          nodeType: 'Identifier',
                          overloadedDeclarations: [],
                          referencedDeclaration: 293,
                          src: '1600:3:1',
                          typeDescriptions: {
                            typeIdentifier: 't_magic_message',
                            typeString: 'msg'
                          }
                        },
                        id: 271,
                        isConstant: false,
                        isLValue: false,
                        isPure: false,
                        lValueRequested: false,
                        memberName: 'sender',
                        nodeType: 'MemberAccess',
                        referencedDeclaration: null,
                        src: '1600:10:1',
                        typeDescriptions: {
                          typeIdentifier: 't_address_payable',
                          typeString: 'address payable'
                        }
                      },
                      {
                        argumentTypes: null,
                        id: 272,
                        name: 'recipient',
                        nodeType: 'Identifier',
                        overloadedDeclarations: [],
                        referencedDeclaration: 222,
                        src: '1611:9:1',
                        typeDescriptions: {
                          typeIdentifier: 't_address',
                          typeString: 'address'
                        }
                      },
                      {
                        argumentTypes: null,
                        id: 273,
                        name: 'amount',
                        nodeType: 'Identifier',
                        overloadedDeclarations: [],
                        referencedDeclaration: 224,
                        src: '1621:6:1',
                        typeDescriptions: {
                          typeIdentifier: 't_uint256',
                          typeString: 'uint256'
                        }
                      }
                    ],
                    expression: {
                      argumentTypes: [
                        {
                          typeIdentifier: 't_address_payable',
                          typeString: 'address payable'
                        },
                        {
                          typeIdentifier: 't_address',
                          typeString: 'address'
                        },
                        {
                          typeIdentifier: 't_uint256',
                          typeString: 'uint256'
                        }
                      ],
                      id: 269,
                      name: 'Transaction',
                      nodeType: 'Identifier',
                      overloadedDeclarations: [],
                      referencedDeclaration: 78,
                      src: '1588:11:1',
                      typeDescriptions: {
                        typeIdentifier:
                          't_function_event_nonpayable$_t_address_$_t_address_$_t_uint256_$returns$__$',
                        typeString: 'function (address,address,uint256)'
                      }
                    },
                    id: 274,
                    isConstant: false,
                    isLValue: false,
                    isPure: false,
                    kind: 'functionCall',
                    lValueRequested: false,
                    names: [],
                    nodeType: 'FunctionCall',
                    src: '1588:40:1',
                    typeDescriptions: {
                      typeIdentifier: 't_tuple$__$',
                      typeString: 'tuple()'
                    }
                  },
                  id: 275,
                  nodeType: 'EmitStatement',
                  src: '1583:45:1'
                }
              ]
            },
            documentation: null,
            id: 277,
            implemented: true,
            kind: 'function',
            modifiers: [
              {
                arguments: [
                  {
                    argumentTypes: null,
                    id: 227,
                    name: 'recipient',
                    nodeType: 'Identifier',
                    overloadedDeclarations: [],
                    referencedDeclaration: 222,
                    src: '1305:9:1',
                    typeDescriptions: {
                      typeIdentifier: 't_address',
                      typeString: 'address'
                    }
                  }
                ],
                id: 228,
                modifierName: {
                  argumentTypes: null,
                  id: 226,
                  name: 'notNull',
                  nodeType: 'Identifier',
                  overloadedDeclarations: [],
                  referencedDeclaration: 103,
                  src: '1297:7:1',
                  typeDescriptions: {
                    typeIdentifier: 't_modifier$_t_address_$',
                    typeString: 'modifier (address)'
                  }
                },
                nodeType: 'ModifierInvocation',
                src: '1297:18:1'
              }
            ],
            name: 'transfer',
            nodeType: 'FunctionDefinition',
            parameters: {
              id: 225,
              nodeType: 'ParameterList',
              parameters: [
                {
                  constant: false,
                  id: 222,
                  name: 'recipient',
                  nodeType: 'VariableDeclaration',
                  scope: 277,
                  src: '1256:17:1',
                  stateVariable: false,
                  storageLocation: 'default',
                  typeDescriptions: {
                    typeIdentifier: 't_address',
                    typeString: 'address'
                  },
                  typeName: {
                    id: 221,
                    name: 'address',
                    nodeType: 'ElementaryTypeName',
                    src: '1256:7:1',
                    stateMutability: 'nonpayable',
                    typeDescriptions: {
                      typeIdentifier: 't_address',
                      typeString: 'address'
                    }
                  },
                  value: null,
                  visibility: 'internal'
                },
                {
                  constant: false,
                  id: 224,
                  name: 'amount',
                  nodeType: 'VariableDeclaration',
                  scope: 277,
                  src: '1275:11:1',
                  stateVariable: false,
                  storageLocation: 'default',
                  typeDescriptions: {
                    typeIdentifier: 't_uint256',
                    typeString: 'uint256'
                  },
                  typeName: {
                    id: 223,
                    name: 'uint',
                    nodeType: 'ElementaryTypeName',
                    src: '1275:4:1',
                    typeDescriptions: {
                      typeIdentifier: 't_uint256',
                      typeString: 'uint256'
                    }
                  },
                  value: null,
                  visibility: 'internal'
                }
              ],
              src: '1255:32:1'
            },
            returnParameters: {
              id: 229,
              nodeType: 'ParameterList',
              parameters: [],
              src: '1315:0:1'
            },
            scope: 278,
            src: '1238:396:1',
            stateMutability: 'nonpayable',
            superFunction: null,
            visibility: 'external'
          }
        ],
        scope: 279,
        src: '25:1612:1'
      }
    ],
    src: '0:1637:1'
  },
  compiler: {
    name: 'solc',
    version: '0.5.0+commit.1d4f565a.Emscripten.clang'
  },
  networks: {
    '4': {
      events: {},
      links: {},
      address: '0x1523a50c9a42dd1E8812022686Ed873F0e795372',
      transactionHash:
        '0x9be90c633ba0b256e36483b0506eb82f658c01e73cc879022e5a8d3fd453d7b6'
    },
    '5777': {
      events: {},
      links: {},
      address: '0xf0c5Cd36f566e80c5980f7b73cAE13fCd56e54aa',
      transactionHash:
        '0x0a9363390ec807795c1db28ad55d24a18b150a7015e2517d4cdceaafe02f6525'
    },
    '1563648603705': {
      events: {},
      links: {},
      address: '0x8a7eDa0413759c9ADEf84bf52813f4610aa448E3',
      transactionHash:
        '0xa6dbdbee819917534dfe02eaf4a117703bdb4c796bb699080795d2a3a5f0c546'
    }
  },
  schemaVersion: '3.0.2',
  updatedAt: '2019-07-21T14:08:38.448Z',
  devdoc: {
    methods: {}
  },
  userdoc: {
    methods: {}
  }
};
