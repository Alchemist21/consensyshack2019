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
    '0x608060405234801561001057600080fd5b50604051610bba380380610bba8339810180604052604081101561003357600080fd5b81019080805164010000000081111561004b57600080fd5b8281019050602081018481111561006157600080fd5b815185600182028301116401000000008211171561007e57600080fd5b5050929190602001805164010000000081111561009a57600080fd5b828101905060208101848111156100b057600080fd5b81518560018202830111640100000000821117156100cd57600080fd5b5050929190505050336000806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550816001908051906020019061012b92919061014a565b50806002908051906020019061014292919061014a565b5050506101ef565b828054600181600116156101000203166002900490600052602060002090601f016020900481019282601f1061018b57805160ff19168380011785556101b9565b828001600101855582156101b9579182015b828111156101b857825182559160200191906001019061019d565b5b5090506101c691906101ca565b5090565b6101ec91905b808211156101e85760008160009055506001016101d0565b5090565b90565b6109bc806101fe6000396000f3fe60806040526004361061008e576000357c0100000000000000000000000000000000000000000000000000000000900463ffffffff1680631f772a34146100935780633940e9ee146101235780634e6ec2471461014e5780636161eb18146101a95780638da5cb5b14610204578063947a31681461025b578063a9059cbb146102eb578063e3d670d714610346575b600080fd5b34801561009f57600080fd5b506100a86103ab565b6040518080602001828103825283818151815260200191508051906020019080838360005b838110156100e85780820151818401526020810190506100cd565b50505050905090810190601f1680156101155780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b34801561012f57600080fd5b50610138610449565b6040518082815260200191505060405180910390f35b34801561015a57600080fd5b506101a76004803603604081101561017157600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff1690602001909291908035906020019092919050505061044f565b005b3480156101b557600080fd5b50610202600480360360408110156101cc57600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff16906020019092919080359060200190929190505050610588565b005b34801561021057600080fd5b5061021961070f565b604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b34801561026757600080fd5b50610270610734565b6040518080602001828103825283818151815260200191508051906020019080838360005b838110156102b0578082015181840152602081019050610295565b50505050905090810190601f1680156102dd5780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b3480156102f757600080fd5b506103446004803603604081101561030e57600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190803590602001909291905050506107d2565b005b34801561035257600080fd5b506103956004803603602081101561036957600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190505050610978565b6040518082815260200191505060405180910390f35b60028054600181600116156101000203166002900480601f0160208091040260200160405190810160405280929190818152602001828054600181600116156101000203166002900480156104415780601f1061041657610100808354040283529160200191610441565b820191906000526020600020905b81548152906001019060200180831161042457829003601f168201915b505050505081565b60035481565b6000809054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff161415156104aa57600080fd5b81600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff16141515156104e757600080fd5b6000600460008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054905060006003549050838201600460008773ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055508381016003819055505050505050565b6000809054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff161415156105e357600080fd5b81600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff161415151561062057600080fd5b81600460008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020541015151561066e57600080fd5b6000600460008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054905060006003549050838203600460008773ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055508381036003819055505050505050565b6000809054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b60018054600181600116156101000203166002900480601f0160208091040260200160405190810160405280929190818152602001828054600181600116156101000203166002900480156107ca5780601f1061079f576101008083540402835291602001916107ca565b820191906000526020600020905b8154815290600101906020018083116107ad57829003601f168201915b505050505081565b81600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff161415151561080f57600080fd5b81600460003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020541015151561085d57600080fd5b6000600460008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000205490506000600460003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020549050838103600460003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002081905550838201600460008773ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055505050505050565b6004602052806000526040600020600091509050548156fea165627a7a723058205ab718b30de1afd63b50146be5ff42a3839abdbfe8cf66df859c81ed0c7fa2020029',
  deployedBytecode:
    '0x60806040526004361061008e576000357c0100000000000000000000000000000000000000000000000000000000900463ffffffff1680631f772a34146100935780633940e9ee146101235780634e6ec2471461014e5780636161eb18146101a95780638da5cb5b14610204578063947a31681461025b578063a9059cbb146102eb578063e3d670d714610346575b600080fd5b34801561009f57600080fd5b506100a86103ab565b6040518080602001828103825283818151815260200191508051906020019080838360005b838110156100e85780820151818401526020810190506100cd565b50505050905090810190601f1680156101155780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b34801561012f57600080fd5b50610138610449565b6040518082815260200191505060405180910390f35b34801561015a57600080fd5b506101a76004803603604081101561017157600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff1690602001909291908035906020019092919050505061044f565b005b3480156101b557600080fd5b50610202600480360360408110156101cc57600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff16906020019092919080359060200190929190505050610588565b005b34801561021057600080fd5b5061021961070f565b604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b34801561026757600080fd5b50610270610734565b6040518080602001828103825283818151815260200191508051906020019080838360005b838110156102b0578082015181840152602081019050610295565b50505050905090810190601f1680156102dd5780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b3480156102f757600080fd5b506103446004803603604081101561030e57600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190803590602001909291905050506107d2565b005b34801561035257600080fd5b506103956004803603602081101561036957600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190505050610978565b6040518082815260200191505060405180910390f35b60028054600181600116156101000203166002900480601f0160208091040260200160405190810160405280929190818152602001828054600181600116156101000203166002900480156104415780601f1061041657610100808354040283529160200191610441565b820191906000526020600020905b81548152906001019060200180831161042457829003601f168201915b505050505081565b60035481565b6000809054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff161415156104aa57600080fd5b81600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff16141515156104e757600080fd5b6000600460008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054905060006003549050838201600460008773ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055508381016003819055505050505050565b6000809054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff161415156105e357600080fd5b81600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff161415151561062057600080fd5b81600460008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020541015151561066e57600080fd5b6000600460008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054905060006003549050838203600460008773ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055508381036003819055505050505050565b6000809054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b60018054600181600116156101000203166002900480601f0160208091040260200160405190810160405280929190818152602001828054600181600116156101000203166002900480156107ca5780601f1061079f576101008083540402835291602001916107ca565b820191906000526020600020905b8154815290600101906020018083116107ad57829003601f168201915b505050505081565b81600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff161415151561080f57600080fd5b81600460003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020541015151561085d57600080fd5b6000600460008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000205490506000600460003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020549050838103600460003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002081905550838201600460008773ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055505050505050565b6004602052806000526040600020600091509050548156fea165627a7a723058205ab718b30de1afd63b50146be5ff42a3839abdbfe8cf66df859c81ed0c7fa2020029',
  sourceMap:
    '25:1350:1:-;;;370:149;8:9:-1;5:2;;;30:1;27;20:12;5:2;370:149:1;;;;;;;;;;;;;;;13:2:-1;8:3;5:11;2:2;;;29:1;26;19:12;2:2;370:149:1;;;;;;19:11:-1;14:3;11:20;8:2;;;44:1;41;34:12;8:2;71:11;66:3;62:21;55:28;;123:4;118:3;114:14;159:9;141:16;138:31;135:2;;;182:1;179;172:12;135:2;219:3;213:10;330:9;325:1;311:12;307:20;289:16;285:43;282:58;261:11;247:12;244:29;233:115;230:2;;;361:1;358;351:12;230:2;0:372;;370:149:1;;;;;;;19:11:-1;14:3;11:20;8:2;;;44:1;41;34:12;8:2;71:11;66:3;62:21;55:28;;123:4;118:3;114:14;159:9;141:16;138:31;135:2;;;182:1;179;172:12;135:2;219:3;213:10;330:9;325:1;311:12;307:20;289:16;285:43;282:58;261:11;247:12;244:29;233:115;230:2;;;361:1;358;351:12;230:2;0:372;;370:149:1;;;;;;447:10;439:5;;:18;;;;;;;;;;;;;;;;;;479:4;466:10;:17;;;;;;;;;;;;:::i;:::-;;506:6;492:12;:20;;;;;;;;;;;;:::i;:::-;;370:149;;25:1350;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;;:::o;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;:::o;:::-;;;;;;;',
  deployedSourceMap:
    '25:1350:1:-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;99:26;;8:9:-1;5:2;;;30:1;27;20:12;5:2;99:26:1;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;23:1:-1;8:100;33:3;30:1;27:10;8:100;;;99:1;94:3;90:11;84:18;80:1;75:3;71:11;64:39;52:2;49:1;45:10;40:15;;8:100;;;12:14;99:26:1;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;130:24;;8:9:-1;5:2;;;30:1;27;20:12;5:2;130:24:1;;;;;;;;;;;;;;;;;;;;;;;524:225;;8:9:-1;5:2;;;30:1;27;20:12;5:2;524:225:1;;;;;;13:2:-1;8:3;5:11;2:2;;;29:1;26;19:12;2:2;524:225:1;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;757:265;;8:9:-1;5:2;;;30:1;27;20:12;5:2;757:265:1;;;;;;13:2:-1;8:3;5:11;2:2;;;29:1;26;19:12;2:2;757:265:1;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;45:20;;8:9:-1;5:2;;;30:1;27;20:12;5:2;45:20:1;;;;;;;;;;;;;;;;;;;;;;;;;;;70:24;;8:9:-1;5:2;;;30:1;27;20:12;5:2;70:24:1;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;23:1:-1;8:100;33:3;30:1;27:10;8:100;;;99:1;94:3;90:11;84:18;80:1;75:3;71:11;64:39;52:2;49:1;45:10;40:15;;8:100;;;12:14;70:24:1;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;1030:342;;8:9:-1;5:2;;;30:1;27;20:12;5:2;1030:342:1;;;;;;13:2:-1;8:3;5:11;2:2;;;29:1;26;19:12;2:2;1030:342:1;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;161:40;;8:9:-1;5:2;;;30:1;27;20:12;5:2;161:40:1;;;;;;13:2:-1;8:3;5:11;2:2;;;29:1;26;19:12;2:2;161:40:1;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;99:26;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::o;130:24::-;;;;:::o;524:225::-;256:5;;;;;;;;;;;242:19;;:10;:19;;;234:28;;;;;;;;588:1;344:3;331:17;;:1;:17;;;;323:26;;;;;;;;607:10;621:7;:10;629:1;621:10;;;;;;;;;;;;;;;;607:24;;640:12;655;;640:27;;697:6;689:5;:14;676:7;:10;684:1;676:10;;;;;;;;;;;;;;;:27;;;;737:6;727:7;:16;712:12;:31;;;;358:1;;271;524:225;;:::o;757:265::-;256:5;;;;;;;;;;;242:19;;:10;:19;;;234:28;;;;;;;;821:1;344:3;331:17;;:1;:17;;;;323:26;;;;;;;;854:6;840:7;:10;848:1;840:10;;;;;;;;;;;;;;;;:20;;832:29;;;;;;;;870:10;883:7;:10;891:1;883:10;;;;;;;;;;;;;;;;870:23;;902:12;917;;902:27;;959:6;951:5;:14;938:7;:10;946:1;938:10;;;;;;;;;;;;;;;:27;;;;999:6;989:7;:16;974:12;:31;;;;358:1;;271;757:265;;:::o;45:20::-;;;;;;;;;;;;;:::o;70:24::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::o;1030:342::-;1097:9;344:3;331:17;;:1;:17;;;;323:26;;;;;;;;1147:6;1124:7;:19;1132:10;1124:19;;;;;;;;;;;;;;;;:29;;1116:38;;;;;;;;1163:22;1188:7;:18;1196:9;1188:18;;;;;;;;;;;;;;;;1163:43;;1215:19;1237:7;:19;1245:10;1237:19;;;;;;;;;;;;;;;;1215:41;;1304:6;1287:14;:23;1265:7;:19;1273:10;1265:19;;;;;;;;;;;;;;;:45;;;;1360:6;1340:17;:26;1319:7;:18;1327:9;1319:18;;;;;;;;;;;;;;;:47;;;;358:1;;1030:342;;;:::o;161:40::-;;;;;;;;;;;;;;;;;:::o',
  source:
    'pragma solidity ^0.5.0;\n\ncontract Token {\n   address public owner;\n   string public token_name;\n   string public token_symbol;\n   uint public total_supply ;\n\n   mapping(address => uint) public  balance;\n\n   modifier isOwner(){\n       require(msg.sender == owner);\n       _;\n   } \n   \n   modifier notNull(address x){\n       require(x != address(0x0));\n       _;\n   }\n\n   constructor(string memory name, string memory symbol) public{\n       owner = msg.sender;\n       token_name = name;\n       token_symbol =symbol;\n\n   }\n\n   function _mint(address x, uint amount) external isOwner notNull(x){\n       \n       uint _temp =  balance[x];\n       uint _supply = total_supply;\n       balance[x] = _temp + amount;\n       total_supply = _supply + amount;\n   }\n   \n   function _burn(address x, uint amount) external isOwner notNull(x){\n       require(balance[x] >= amount);\n       uint _temp = balance[x];\n       uint _supply = total_supply;\n       balance[x] = _temp - amount;\n       total_supply = _supply - amount;   \n       \n   }\n   \n   function transfer(address recipient, uint amount) external notNull(recipient){\n       require(balance[msg.sender] >= amount);\n       uint _recipient_amount = balance[recipient];\n       uint _sender_amount = balance[msg.sender];\n       balance[msg.sender] = _sender_amount - amount;\n       balance[recipient] = _recipient_amount + amount;\n   }\n\n}',
  sourcePath: '/Users/james/Desktop/chairity_token/contracts/Token.sol',
  ast: {
    absolutePath: '/Users/james/Desktop/chairity_token/contracts/Token.sol',
    exportedSymbols: {
      Token: [249]
    },
    id: 250,
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
        id: 249,
        linearizedBaseContracts: [249],
        name: 'Token',
        nodeType: 'ContractDefinition',
        nodes: [
          {
            constant: false,
            id: 60,
            name: 'owner',
            nodeType: 'VariableDeclaration',
            scope: 249,
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
            scope: 249,
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
            scope: 249,
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
            scope: 249,
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
            scope: 249,
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
            body: {
              id: 80,
              nodeType: 'Block',
              src: '225:53:1',
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
                        id: 76,
                        isConstant: false,
                        isLValue: false,
                        isPure: false,
                        lValueRequested: false,
                        leftExpression: {
                          argumentTypes: null,
                          expression: {
                            argumentTypes: null,
                            id: 73,
                            name: 'msg',
                            nodeType: 'Identifier',
                            overloadedDeclarations: [],
                            referencedDeclaration: 264,
                            src: '242:3:1',
                            typeDescriptions: {
                              typeIdentifier: 't_magic_message',
                              typeString: 'msg'
                            }
                          },
                          id: 74,
                          isConstant: false,
                          isLValue: false,
                          isPure: false,
                          lValueRequested: false,
                          memberName: 'sender',
                          nodeType: 'MemberAccess',
                          referencedDeclaration: null,
                          src: '242:10:1',
                          typeDescriptions: {
                            typeIdentifier: 't_address_payable',
                            typeString: 'address payable'
                          }
                        },
                        nodeType: 'BinaryOperation',
                        operator: '==',
                        rightExpression: {
                          argumentTypes: null,
                          id: 75,
                          name: 'owner',
                          nodeType: 'Identifier',
                          overloadedDeclarations: [],
                          referencedDeclaration: 60,
                          src: '256:5:1',
                          typeDescriptions: {
                            typeIdentifier: 't_address',
                            typeString: 'address'
                          }
                        },
                        src: '242:19:1',
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
                      id: 72,
                      name: 'require',
                      nodeType: 'Identifier',
                      overloadedDeclarations: [267, 268],
                      referencedDeclaration: 267,
                      src: '234:7:1',
                      typeDescriptions: {
                        typeIdentifier:
                          't_function_require_pure$_t_bool_$returns$__$',
                        typeString: 'function (bool) pure'
                      }
                    },
                    id: 77,
                    isConstant: false,
                    isLValue: false,
                    isPure: false,
                    kind: 'functionCall',
                    lValueRequested: false,
                    names: [],
                    nodeType: 'FunctionCall',
                    src: '234:28:1',
                    typeDescriptions: {
                      typeIdentifier: 't_tuple$__$',
                      typeString: 'tuple()'
                    }
                  },
                  id: 78,
                  nodeType: 'ExpressionStatement',
                  src: '234:28:1'
                },
                {
                  id: 79,
                  nodeType: 'PlaceholderStatement',
                  src: '271:1:1'
                }
              ]
            },
            documentation: null,
            id: 81,
            name: 'isOwner',
            nodeType: 'ModifierDefinition',
            parameters: {
              id: 71,
              nodeType: 'ParameterList',
              parameters: [],
              src: '223:2:1'
            },
            src: '207:71:1',
            visibility: 'internal'
          },
          {
            body: {
              id: 94,
              nodeType: 'Block',
              src: '314:51:1',
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
                        id: 90,
                        isConstant: false,
                        isLValue: false,
                        isPure: false,
                        lValueRequested: false,
                        leftExpression: {
                          argumentTypes: null,
                          id: 86,
                          name: 'x',
                          nodeType: 'Identifier',
                          overloadedDeclarations: [],
                          referencedDeclaration: 83,
                          src: '331:1:1',
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
                              id: 88,
                              isConstant: false,
                              isLValue: false,
                              isPure: true,
                              kind: 'number',
                              lValueRequested: false,
                              nodeType: 'Literal',
                              src: '344:3:1',
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
                            id: 87,
                            isConstant: false,
                            isLValue: false,
                            isPure: true,
                            lValueRequested: false,
                            nodeType: 'ElementaryTypeNameExpression',
                            src: '336:7:1',
                            typeDescriptions: {
                              typeIdentifier: 't_type$_t_address_$',
                              typeString: 'type(address)'
                            },
                            typeName: 'address'
                          },
                          id: 89,
                          isConstant: false,
                          isLValue: false,
                          isPure: true,
                          kind: 'typeConversion',
                          lValueRequested: false,
                          names: [],
                          nodeType: 'FunctionCall',
                          src: '336:12:1',
                          typeDescriptions: {
                            typeIdentifier: 't_address_payable',
                            typeString: 'address payable'
                          }
                        },
                        src: '331:17:1',
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
                      id: 85,
                      name: 'require',
                      nodeType: 'Identifier',
                      overloadedDeclarations: [267, 268],
                      referencedDeclaration: 267,
                      src: '323:7:1',
                      typeDescriptions: {
                        typeIdentifier:
                          't_function_require_pure$_t_bool_$returns$__$',
                        typeString: 'function (bool) pure'
                      }
                    },
                    id: 91,
                    isConstant: false,
                    isLValue: false,
                    isPure: false,
                    kind: 'functionCall',
                    lValueRequested: false,
                    names: [],
                    nodeType: 'FunctionCall',
                    src: '323:26:1',
                    typeDescriptions: {
                      typeIdentifier: 't_tuple$__$',
                      typeString: 'tuple()'
                    }
                  },
                  id: 92,
                  nodeType: 'ExpressionStatement',
                  src: '323:26:1'
                },
                {
                  id: 93,
                  nodeType: 'PlaceholderStatement',
                  src: '358:1:1'
                }
              ]
            },
            documentation: null,
            id: 95,
            name: 'notNull',
            nodeType: 'ModifierDefinition',
            parameters: {
              id: 84,
              nodeType: 'ParameterList',
              parameters: [
                {
                  constant: false,
                  id: 83,
                  name: 'x',
                  nodeType: 'VariableDeclaration',
                  scope: 95,
                  src: '304:9:1',
                  stateVariable: false,
                  storageLocation: 'default',
                  typeDescriptions: {
                    typeIdentifier: 't_address',
                    typeString: 'address'
                  },
                  typeName: {
                    id: 82,
                    name: 'address',
                    nodeType: 'ElementaryTypeName',
                    src: '304:7:1',
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
              src: '303:11:1'
            },
            src: '287:78:1',
            visibility: 'internal'
          },
          {
            body: {
              id: 115,
              nodeType: 'Block',
              src: '430:89:1',
              statements: [
                {
                  expression: {
                    argumentTypes: null,
                    id: 105,
                    isConstant: false,
                    isLValue: false,
                    isPure: false,
                    lValueRequested: false,
                    leftHandSide: {
                      argumentTypes: null,
                      id: 102,
                      name: 'owner',
                      nodeType: 'Identifier',
                      overloadedDeclarations: [],
                      referencedDeclaration: 60,
                      src: '439:5:1',
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
                        id: 103,
                        name: 'msg',
                        nodeType: 'Identifier',
                        overloadedDeclarations: [],
                        referencedDeclaration: 264,
                        src: '447:3:1',
                        typeDescriptions: {
                          typeIdentifier: 't_magic_message',
                          typeString: 'msg'
                        }
                      },
                      id: 104,
                      isConstant: false,
                      isLValue: false,
                      isPure: false,
                      lValueRequested: false,
                      memberName: 'sender',
                      nodeType: 'MemberAccess',
                      referencedDeclaration: null,
                      src: '447:10:1',
                      typeDescriptions: {
                        typeIdentifier: 't_address_payable',
                        typeString: 'address payable'
                      }
                    },
                    src: '439:18:1',
                    typeDescriptions: {
                      typeIdentifier: 't_address',
                      typeString: 'address'
                    }
                  },
                  id: 106,
                  nodeType: 'ExpressionStatement',
                  src: '439:18:1'
                },
                {
                  expression: {
                    argumentTypes: null,
                    id: 109,
                    isConstant: false,
                    isLValue: false,
                    isPure: false,
                    lValueRequested: false,
                    leftHandSide: {
                      argumentTypes: null,
                      id: 107,
                      name: 'token_name',
                      nodeType: 'Identifier',
                      overloadedDeclarations: [],
                      referencedDeclaration: 62,
                      src: '466:10:1',
                      typeDescriptions: {
                        typeIdentifier: 't_string_storage',
                        typeString: 'string storage ref'
                      }
                    },
                    nodeType: 'Assignment',
                    operator: '=',
                    rightHandSide: {
                      argumentTypes: null,
                      id: 108,
                      name: 'name',
                      nodeType: 'Identifier',
                      overloadedDeclarations: [],
                      referencedDeclaration: 97,
                      src: '479:4:1',
                      typeDescriptions: {
                        typeIdentifier: 't_string_memory_ptr',
                        typeString: 'string memory'
                      }
                    },
                    src: '466:17:1',
                    typeDescriptions: {
                      typeIdentifier: 't_string_storage',
                      typeString: 'string storage ref'
                    }
                  },
                  id: 110,
                  nodeType: 'ExpressionStatement',
                  src: '466:17:1'
                },
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
                      id: 111,
                      name: 'token_symbol',
                      nodeType: 'Identifier',
                      overloadedDeclarations: [],
                      referencedDeclaration: 64,
                      src: '492:12:1',
                      typeDescriptions: {
                        typeIdentifier: 't_string_storage',
                        typeString: 'string storage ref'
                      }
                    },
                    nodeType: 'Assignment',
                    operator: '=',
                    rightHandSide: {
                      argumentTypes: null,
                      id: 112,
                      name: 'symbol',
                      nodeType: 'Identifier',
                      overloadedDeclarations: [],
                      referencedDeclaration: 99,
                      src: '506:6:1',
                      typeDescriptions: {
                        typeIdentifier: 't_string_memory_ptr',
                        typeString: 'string memory'
                      }
                    },
                    src: '492:20:1',
                    typeDescriptions: {
                      typeIdentifier: 't_string_storage',
                      typeString: 'string storage ref'
                    }
                  },
                  id: 114,
                  nodeType: 'ExpressionStatement',
                  src: '492:20:1'
                }
              ]
            },
            documentation: null,
            id: 116,
            implemented: true,
            kind: 'constructor',
            modifiers: [],
            name: '',
            nodeType: 'FunctionDefinition',
            parameters: {
              id: 100,
              nodeType: 'ParameterList',
              parameters: [
                {
                  constant: false,
                  id: 97,
                  name: 'name',
                  nodeType: 'VariableDeclaration',
                  scope: 116,
                  src: '382:18:1',
                  stateVariable: false,
                  storageLocation: 'memory',
                  typeDescriptions: {
                    typeIdentifier: 't_string_memory_ptr',
                    typeString: 'string'
                  },
                  typeName: {
                    id: 96,
                    name: 'string',
                    nodeType: 'ElementaryTypeName',
                    src: '382:6:1',
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
                  id: 99,
                  name: 'symbol',
                  nodeType: 'VariableDeclaration',
                  scope: 116,
                  src: '402:20:1',
                  stateVariable: false,
                  storageLocation: 'memory',
                  typeDescriptions: {
                    typeIdentifier: 't_string_memory_ptr',
                    typeString: 'string'
                  },
                  typeName: {
                    id: 98,
                    name: 'string',
                    nodeType: 'ElementaryTypeName',
                    src: '402:6:1',
                    typeDescriptions: {
                      typeIdentifier: 't_string_storage_ptr',
                      typeString: 'string'
                    }
                  },
                  value: null,
                  visibility: 'internal'
                }
              ],
              src: '381:42:1'
            },
            returnParameters: {
              id: 101,
              nodeType: 'ParameterList',
              parameters: [],
              src: '430:0:1'
            },
            scope: 249,
            src: '370:149:1',
            stateMutability: 'nonpayable',
            superFunction: null,
            visibility: 'public'
          },
          {
            body: {
              id: 152,
              nodeType: 'Block',
              src: '590:159:1',
              statements: [
                {
                  assignments: [129],
                  declarations: [
                    {
                      constant: false,
                      id: 129,
                      name: '_temp',
                      nodeType: 'VariableDeclaration',
                      scope: 152,
                      src: '607:10:1',
                      stateVariable: false,
                      storageLocation: 'default',
                      typeDescriptions: {
                        typeIdentifier: 't_uint256',
                        typeString: 'uint256'
                      },
                      typeName: {
                        id: 128,
                        name: 'uint',
                        nodeType: 'ElementaryTypeName',
                        src: '607:4:1',
                        typeDescriptions: {
                          typeIdentifier: 't_uint256',
                          typeString: 'uint256'
                        }
                      },
                      value: null,
                      visibility: 'internal'
                    }
                  ],
                  id: 133,
                  initialValue: {
                    argumentTypes: null,
                    baseExpression: {
                      argumentTypes: null,
                      id: 130,
                      name: 'balance',
                      nodeType: 'Identifier',
                      overloadedDeclarations: [],
                      referencedDeclaration: 70,
                      src: '621:7:1',
                      typeDescriptions: {
                        typeIdentifier: 't_mapping$_t_address_$_t_uint256_$',
                        typeString: 'mapping(address => uint256)'
                      }
                    },
                    id: 132,
                    indexExpression: {
                      argumentTypes: null,
                      id: 131,
                      name: 'x',
                      nodeType: 'Identifier',
                      overloadedDeclarations: [],
                      referencedDeclaration: 118,
                      src: '629:1:1',
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
                    src: '621:10:1',
                    typeDescriptions: {
                      typeIdentifier: 't_uint256',
                      typeString: 'uint256'
                    }
                  },
                  nodeType: 'VariableDeclarationStatement',
                  src: '607:24:1'
                },
                {
                  assignments: [135],
                  declarations: [
                    {
                      constant: false,
                      id: 135,
                      name: '_supply',
                      nodeType: 'VariableDeclaration',
                      scope: 152,
                      src: '640:12:1',
                      stateVariable: false,
                      storageLocation: 'default',
                      typeDescriptions: {
                        typeIdentifier: 't_uint256',
                        typeString: 'uint256'
                      },
                      typeName: {
                        id: 134,
                        name: 'uint',
                        nodeType: 'ElementaryTypeName',
                        src: '640:4:1',
                        typeDescriptions: {
                          typeIdentifier: 't_uint256',
                          typeString: 'uint256'
                        }
                      },
                      value: null,
                      visibility: 'internal'
                    }
                  ],
                  id: 137,
                  initialValue: {
                    argumentTypes: null,
                    id: 136,
                    name: 'total_supply',
                    nodeType: 'Identifier',
                    overloadedDeclarations: [],
                    referencedDeclaration: 66,
                    src: '655:12:1',
                    typeDescriptions: {
                      typeIdentifier: 't_uint256',
                      typeString: 'uint256'
                    }
                  },
                  nodeType: 'VariableDeclarationStatement',
                  src: '640:27:1'
                },
                {
                  expression: {
                    argumentTypes: null,
                    id: 144,
                    isConstant: false,
                    isLValue: false,
                    isPure: false,
                    lValueRequested: false,
                    leftHandSide: {
                      argumentTypes: null,
                      baseExpression: {
                        argumentTypes: null,
                        id: 138,
                        name: 'balance',
                        nodeType: 'Identifier',
                        overloadedDeclarations: [],
                        referencedDeclaration: 70,
                        src: '676:7:1',
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
                        referencedDeclaration: 118,
                        src: '684:1:1',
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
                      src: '676:10:1',
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
                      id: 143,
                      isConstant: false,
                      isLValue: false,
                      isPure: false,
                      lValueRequested: false,
                      leftExpression: {
                        argumentTypes: null,
                        id: 141,
                        name: '_temp',
                        nodeType: 'Identifier',
                        overloadedDeclarations: [],
                        referencedDeclaration: 129,
                        src: '689:5:1',
                        typeDescriptions: {
                          typeIdentifier: 't_uint256',
                          typeString: 'uint256'
                        }
                      },
                      nodeType: 'BinaryOperation',
                      operator: '+',
                      rightExpression: {
                        argumentTypes: null,
                        id: 142,
                        name: 'amount',
                        nodeType: 'Identifier',
                        overloadedDeclarations: [],
                        referencedDeclaration: 120,
                        src: '697:6:1',
                        typeDescriptions: {
                          typeIdentifier: 't_uint256',
                          typeString: 'uint256'
                        }
                      },
                      src: '689:14:1',
                      typeDescriptions: {
                        typeIdentifier: 't_uint256',
                        typeString: 'uint256'
                      }
                    },
                    src: '676:27:1',
                    typeDescriptions: {
                      typeIdentifier: 't_uint256',
                      typeString: 'uint256'
                    }
                  },
                  id: 145,
                  nodeType: 'ExpressionStatement',
                  src: '676:27:1'
                },
                {
                  expression: {
                    argumentTypes: null,
                    id: 150,
                    isConstant: false,
                    isLValue: false,
                    isPure: false,
                    lValueRequested: false,
                    leftHandSide: {
                      argumentTypes: null,
                      id: 146,
                      name: 'total_supply',
                      nodeType: 'Identifier',
                      overloadedDeclarations: [],
                      referencedDeclaration: 66,
                      src: '712:12:1',
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
                      id: 149,
                      isConstant: false,
                      isLValue: false,
                      isPure: false,
                      lValueRequested: false,
                      leftExpression: {
                        argumentTypes: null,
                        id: 147,
                        name: '_supply',
                        nodeType: 'Identifier',
                        overloadedDeclarations: [],
                        referencedDeclaration: 135,
                        src: '727:7:1',
                        typeDescriptions: {
                          typeIdentifier: 't_uint256',
                          typeString: 'uint256'
                        }
                      },
                      nodeType: 'BinaryOperation',
                      operator: '+',
                      rightExpression: {
                        argumentTypes: null,
                        id: 148,
                        name: 'amount',
                        nodeType: 'Identifier',
                        overloadedDeclarations: [],
                        referencedDeclaration: 120,
                        src: '737:6:1',
                        typeDescriptions: {
                          typeIdentifier: 't_uint256',
                          typeString: 'uint256'
                        }
                      },
                      src: '727:16:1',
                      typeDescriptions: {
                        typeIdentifier: 't_uint256',
                        typeString: 'uint256'
                      }
                    },
                    src: '712:31:1',
                    typeDescriptions: {
                      typeIdentifier: 't_uint256',
                      typeString: 'uint256'
                    }
                  },
                  id: 151,
                  nodeType: 'ExpressionStatement',
                  src: '712:31:1'
                }
              ]
            },
            documentation: null,
            id: 153,
            implemented: true,
            kind: 'function',
            modifiers: [
              {
                arguments: null,
                id: 123,
                modifierName: {
                  argumentTypes: null,
                  id: 122,
                  name: 'isOwner',
                  nodeType: 'Identifier',
                  overloadedDeclarations: [],
                  referencedDeclaration: 81,
                  src: '572:7:1',
                  typeDescriptions: {
                    typeIdentifier: 't_modifier$__$',
                    typeString: 'modifier ()'
                  }
                },
                nodeType: 'ModifierInvocation',
                src: '572:7:1'
              },
              {
                arguments: [
                  {
                    argumentTypes: null,
                    id: 125,
                    name: 'x',
                    nodeType: 'Identifier',
                    overloadedDeclarations: [],
                    referencedDeclaration: 118,
                    src: '588:1:1',
                    typeDescriptions: {
                      typeIdentifier: 't_address',
                      typeString: 'address'
                    }
                  }
                ],
                id: 126,
                modifierName: {
                  argumentTypes: null,
                  id: 124,
                  name: 'notNull',
                  nodeType: 'Identifier',
                  overloadedDeclarations: [],
                  referencedDeclaration: 95,
                  src: '580:7:1',
                  typeDescriptions: {
                    typeIdentifier: 't_modifier$_t_address_$',
                    typeString: 'modifier (address)'
                  }
                },
                nodeType: 'ModifierInvocation',
                src: '580:10:1'
              }
            ],
            name: '_mint',
            nodeType: 'FunctionDefinition',
            parameters: {
              id: 121,
              nodeType: 'ParameterList',
              parameters: [
                {
                  constant: false,
                  id: 118,
                  name: 'x',
                  nodeType: 'VariableDeclaration',
                  scope: 153,
                  src: '539:9:1',
                  stateVariable: false,
                  storageLocation: 'default',
                  typeDescriptions: {
                    typeIdentifier: 't_address',
                    typeString: 'address'
                  },
                  typeName: {
                    id: 117,
                    name: 'address',
                    nodeType: 'ElementaryTypeName',
                    src: '539:7:1',
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
                  id: 120,
                  name: 'amount',
                  nodeType: 'VariableDeclaration',
                  scope: 153,
                  src: '550:11:1',
                  stateVariable: false,
                  storageLocation: 'default',
                  typeDescriptions: {
                    typeIdentifier: 't_uint256',
                    typeString: 'uint256'
                  },
                  typeName: {
                    id: 119,
                    name: 'uint',
                    nodeType: 'ElementaryTypeName',
                    src: '550:4:1',
                    typeDescriptions: {
                      typeIdentifier: 't_uint256',
                      typeString: 'uint256'
                    }
                  },
                  value: null,
                  visibility: 'internal'
                }
              ],
              src: '538:24:1'
            },
            returnParameters: {
              id: 127,
              nodeType: 'ParameterList',
              parameters: [],
              src: '590:0:1'
            },
            scope: 249,
            src: '524:225:1',
            stateMutability: 'nonpayable',
            superFunction: null,
            visibility: 'external'
          },
          {
            body: {
              id: 197,
              nodeType: 'Block',
              src: '823:199:1',
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
                        id: 170,
                        isConstant: false,
                        isLValue: false,
                        isPure: false,
                        lValueRequested: false,
                        leftExpression: {
                          argumentTypes: null,
                          baseExpression: {
                            argumentTypes: null,
                            id: 166,
                            name: 'balance',
                            nodeType: 'Identifier',
                            overloadedDeclarations: [],
                            referencedDeclaration: 70,
                            src: '840:7:1',
                            typeDescriptions: {
                              typeIdentifier:
                                't_mapping$_t_address_$_t_uint256_$',
                              typeString: 'mapping(address => uint256)'
                            }
                          },
                          id: 168,
                          indexExpression: {
                            argumentTypes: null,
                            id: 167,
                            name: 'x',
                            nodeType: 'Identifier',
                            overloadedDeclarations: [],
                            referencedDeclaration: 155,
                            src: '848:1:1',
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
                          src: '840:10:1',
                          typeDescriptions: {
                            typeIdentifier: 't_uint256',
                            typeString: 'uint256'
                          }
                        },
                        nodeType: 'BinaryOperation',
                        operator: '>=',
                        rightExpression: {
                          argumentTypes: null,
                          id: 169,
                          name: 'amount',
                          nodeType: 'Identifier',
                          overloadedDeclarations: [],
                          referencedDeclaration: 157,
                          src: '854:6:1',
                          typeDescriptions: {
                            typeIdentifier: 't_uint256',
                            typeString: 'uint256'
                          }
                        },
                        src: '840:20:1',
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
                      id: 165,
                      name: 'require',
                      nodeType: 'Identifier',
                      overloadedDeclarations: [267, 268],
                      referencedDeclaration: 267,
                      src: '832:7:1',
                      typeDescriptions: {
                        typeIdentifier:
                          't_function_require_pure$_t_bool_$returns$__$',
                        typeString: 'function (bool) pure'
                      }
                    },
                    id: 171,
                    isConstant: false,
                    isLValue: false,
                    isPure: false,
                    kind: 'functionCall',
                    lValueRequested: false,
                    names: [],
                    nodeType: 'FunctionCall',
                    src: '832:29:1',
                    typeDescriptions: {
                      typeIdentifier: 't_tuple$__$',
                      typeString: 'tuple()'
                    }
                  },
                  id: 172,
                  nodeType: 'ExpressionStatement',
                  src: '832:29:1'
                },
                {
                  assignments: [174],
                  declarations: [
                    {
                      constant: false,
                      id: 174,
                      name: '_temp',
                      nodeType: 'VariableDeclaration',
                      scope: 197,
                      src: '870:10:1',
                      stateVariable: false,
                      storageLocation: 'default',
                      typeDescriptions: {
                        typeIdentifier: 't_uint256',
                        typeString: 'uint256'
                      },
                      typeName: {
                        id: 173,
                        name: 'uint',
                        nodeType: 'ElementaryTypeName',
                        src: '870:4:1',
                        typeDescriptions: {
                          typeIdentifier: 't_uint256',
                          typeString: 'uint256'
                        }
                      },
                      value: null,
                      visibility: 'internal'
                    }
                  ],
                  id: 178,
                  initialValue: {
                    argumentTypes: null,
                    baseExpression: {
                      argumentTypes: null,
                      id: 175,
                      name: 'balance',
                      nodeType: 'Identifier',
                      overloadedDeclarations: [],
                      referencedDeclaration: 70,
                      src: '883:7:1',
                      typeDescriptions: {
                        typeIdentifier: 't_mapping$_t_address_$_t_uint256_$',
                        typeString: 'mapping(address => uint256)'
                      }
                    },
                    id: 177,
                    indexExpression: {
                      argumentTypes: null,
                      id: 176,
                      name: 'x',
                      nodeType: 'Identifier',
                      overloadedDeclarations: [],
                      referencedDeclaration: 155,
                      src: '891:1:1',
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
                    src: '883:10:1',
                    typeDescriptions: {
                      typeIdentifier: 't_uint256',
                      typeString: 'uint256'
                    }
                  },
                  nodeType: 'VariableDeclarationStatement',
                  src: '870:23:1'
                },
                {
                  assignments: [180],
                  declarations: [
                    {
                      constant: false,
                      id: 180,
                      name: '_supply',
                      nodeType: 'VariableDeclaration',
                      scope: 197,
                      src: '902:12:1',
                      stateVariable: false,
                      storageLocation: 'default',
                      typeDescriptions: {
                        typeIdentifier: 't_uint256',
                        typeString: 'uint256'
                      },
                      typeName: {
                        id: 179,
                        name: 'uint',
                        nodeType: 'ElementaryTypeName',
                        src: '902:4:1',
                        typeDescriptions: {
                          typeIdentifier: 't_uint256',
                          typeString: 'uint256'
                        }
                      },
                      value: null,
                      visibility: 'internal'
                    }
                  ],
                  id: 182,
                  initialValue: {
                    argumentTypes: null,
                    id: 181,
                    name: 'total_supply',
                    nodeType: 'Identifier',
                    overloadedDeclarations: [],
                    referencedDeclaration: 66,
                    src: '917:12:1',
                    typeDescriptions: {
                      typeIdentifier: 't_uint256',
                      typeString: 'uint256'
                    }
                  },
                  nodeType: 'VariableDeclarationStatement',
                  src: '902:27:1'
                },
                {
                  expression: {
                    argumentTypes: null,
                    id: 189,
                    isConstant: false,
                    isLValue: false,
                    isPure: false,
                    lValueRequested: false,
                    leftHandSide: {
                      argumentTypes: null,
                      baseExpression: {
                        argumentTypes: null,
                        id: 183,
                        name: 'balance',
                        nodeType: 'Identifier',
                        overloadedDeclarations: [],
                        referencedDeclaration: 70,
                        src: '938:7:1',
                        typeDescriptions: {
                          typeIdentifier: 't_mapping$_t_address_$_t_uint256_$',
                          typeString: 'mapping(address => uint256)'
                        }
                      },
                      id: 185,
                      indexExpression: {
                        argumentTypes: null,
                        id: 184,
                        name: 'x',
                        nodeType: 'Identifier',
                        overloadedDeclarations: [],
                        referencedDeclaration: 155,
                        src: '946:1:1',
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
                      src: '938:10:1',
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
                      id: 188,
                      isConstant: false,
                      isLValue: false,
                      isPure: false,
                      lValueRequested: false,
                      leftExpression: {
                        argumentTypes: null,
                        id: 186,
                        name: '_temp',
                        nodeType: 'Identifier',
                        overloadedDeclarations: [],
                        referencedDeclaration: 174,
                        src: '951:5:1',
                        typeDescriptions: {
                          typeIdentifier: 't_uint256',
                          typeString: 'uint256'
                        }
                      },
                      nodeType: 'BinaryOperation',
                      operator: '-',
                      rightExpression: {
                        argumentTypes: null,
                        id: 187,
                        name: 'amount',
                        nodeType: 'Identifier',
                        overloadedDeclarations: [],
                        referencedDeclaration: 157,
                        src: '959:6:1',
                        typeDescriptions: {
                          typeIdentifier: 't_uint256',
                          typeString: 'uint256'
                        }
                      },
                      src: '951:14:1',
                      typeDescriptions: {
                        typeIdentifier: 't_uint256',
                        typeString: 'uint256'
                      }
                    },
                    src: '938:27:1',
                    typeDescriptions: {
                      typeIdentifier: 't_uint256',
                      typeString: 'uint256'
                    }
                  },
                  id: 190,
                  nodeType: 'ExpressionStatement',
                  src: '938:27:1'
                },
                {
                  expression: {
                    argumentTypes: null,
                    id: 195,
                    isConstant: false,
                    isLValue: false,
                    isPure: false,
                    lValueRequested: false,
                    leftHandSide: {
                      argumentTypes: null,
                      id: 191,
                      name: 'total_supply',
                      nodeType: 'Identifier',
                      overloadedDeclarations: [],
                      referencedDeclaration: 66,
                      src: '974:12:1',
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
                      id: 194,
                      isConstant: false,
                      isLValue: false,
                      isPure: false,
                      lValueRequested: false,
                      leftExpression: {
                        argumentTypes: null,
                        id: 192,
                        name: '_supply',
                        nodeType: 'Identifier',
                        overloadedDeclarations: [],
                        referencedDeclaration: 180,
                        src: '989:7:1',
                        typeDescriptions: {
                          typeIdentifier: 't_uint256',
                          typeString: 'uint256'
                        }
                      },
                      nodeType: 'BinaryOperation',
                      operator: '-',
                      rightExpression: {
                        argumentTypes: null,
                        id: 193,
                        name: 'amount',
                        nodeType: 'Identifier',
                        overloadedDeclarations: [],
                        referencedDeclaration: 157,
                        src: '999:6:1',
                        typeDescriptions: {
                          typeIdentifier: 't_uint256',
                          typeString: 'uint256'
                        }
                      },
                      src: '989:16:1',
                      typeDescriptions: {
                        typeIdentifier: 't_uint256',
                        typeString: 'uint256'
                      }
                    },
                    src: '974:31:1',
                    typeDescriptions: {
                      typeIdentifier: 't_uint256',
                      typeString: 'uint256'
                    }
                  },
                  id: 196,
                  nodeType: 'ExpressionStatement',
                  src: '974:31:1'
                }
              ]
            },
            documentation: null,
            id: 198,
            implemented: true,
            kind: 'function',
            modifiers: [
              {
                arguments: null,
                id: 160,
                modifierName: {
                  argumentTypes: null,
                  id: 159,
                  name: 'isOwner',
                  nodeType: 'Identifier',
                  overloadedDeclarations: [],
                  referencedDeclaration: 81,
                  src: '805:7:1',
                  typeDescriptions: {
                    typeIdentifier: 't_modifier$__$',
                    typeString: 'modifier ()'
                  }
                },
                nodeType: 'ModifierInvocation',
                src: '805:7:1'
              },
              {
                arguments: [
                  {
                    argumentTypes: null,
                    id: 162,
                    name: 'x',
                    nodeType: 'Identifier',
                    overloadedDeclarations: [],
                    referencedDeclaration: 155,
                    src: '821:1:1',
                    typeDescriptions: {
                      typeIdentifier: 't_address',
                      typeString: 'address'
                    }
                  }
                ],
                id: 163,
                modifierName: {
                  argumentTypes: null,
                  id: 161,
                  name: 'notNull',
                  nodeType: 'Identifier',
                  overloadedDeclarations: [],
                  referencedDeclaration: 95,
                  src: '813:7:1',
                  typeDescriptions: {
                    typeIdentifier: 't_modifier$_t_address_$',
                    typeString: 'modifier (address)'
                  }
                },
                nodeType: 'ModifierInvocation',
                src: '813:10:1'
              }
            ],
            name: '_burn',
            nodeType: 'FunctionDefinition',
            parameters: {
              id: 158,
              nodeType: 'ParameterList',
              parameters: [
                {
                  constant: false,
                  id: 155,
                  name: 'x',
                  nodeType: 'VariableDeclaration',
                  scope: 198,
                  src: '772:9:1',
                  stateVariable: false,
                  storageLocation: 'default',
                  typeDescriptions: {
                    typeIdentifier: 't_address',
                    typeString: 'address'
                  },
                  typeName: {
                    id: 154,
                    name: 'address',
                    nodeType: 'ElementaryTypeName',
                    src: '772:7:1',
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
                  id: 157,
                  name: 'amount',
                  nodeType: 'VariableDeclaration',
                  scope: 198,
                  src: '783:11:1',
                  stateVariable: false,
                  storageLocation: 'default',
                  typeDescriptions: {
                    typeIdentifier: 't_uint256',
                    typeString: 'uint256'
                  },
                  typeName: {
                    id: 156,
                    name: 'uint',
                    nodeType: 'ElementaryTypeName',
                    src: '783:4:1',
                    typeDescriptions: {
                      typeIdentifier: 't_uint256',
                      typeString: 'uint256'
                    }
                  },
                  value: null,
                  visibility: 'internal'
                }
              ],
              src: '771:24:1'
            },
            returnParameters: {
              id: 164,
              nodeType: 'ParameterList',
              parameters: [],
              src: '823:0:1'
            },
            scope: 249,
            src: '757:265:1',
            stateMutability: 'nonpayable',
            superFunction: null,
            visibility: 'external'
          },
          {
            body: {
              id: 247,
              nodeType: 'Block',
              src: '1107:265:1',
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
                        id: 214,
                        isConstant: false,
                        isLValue: false,
                        isPure: false,
                        lValueRequested: false,
                        leftExpression: {
                          argumentTypes: null,
                          baseExpression: {
                            argumentTypes: null,
                            id: 209,
                            name: 'balance',
                            nodeType: 'Identifier',
                            overloadedDeclarations: [],
                            referencedDeclaration: 70,
                            src: '1124:7:1',
                            typeDescriptions: {
                              typeIdentifier:
                                't_mapping$_t_address_$_t_uint256_$',
                              typeString: 'mapping(address => uint256)'
                            }
                          },
                          id: 212,
                          indexExpression: {
                            argumentTypes: null,
                            expression: {
                              argumentTypes: null,
                              id: 210,
                              name: 'msg',
                              nodeType: 'Identifier',
                              overloadedDeclarations: [],
                              referencedDeclaration: 264,
                              src: '1132:3:1',
                              typeDescriptions: {
                                typeIdentifier: 't_magic_message',
                                typeString: 'msg'
                              }
                            },
                            id: 211,
                            isConstant: false,
                            isLValue: false,
                            isPure: false,
                            lValueRequested: false,
                            memberName: 'sender',
                            nodeType: 'MemberAccess',
                            referencedDeclaration: null,
                            src: '1132:10:1',
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
                          src: '1124:19:1',
                          typeDescriptions: {
                            typeIdentifier: 't_uint256',
                            typeString: 'uint256'
                          }
                        },
                        nodeType: 'BinaryOperation',
                        operator: '>=',
                        rightExpression: {
                          argumentTypes: null,
                          id: 213,
                          name: 'amount',
                          nodeType: 'Identifier',
                          overloadedDeclarations: [],
                          referencedDeclaration: 202,
                          src: '1147:6:1',
                          typeDescriptions: {
                            typeIdentifier: 't_uint256',
                            typeString: 'uint256'
                          }
                        },
                        src: '1124:29:1',
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
                      id: 208,
                      name: 'require',
                      nodeType: 'Identifier',
                      overloadedDeclarations: [267, 268],
                      referencedDeclaration: 267,
                      src: '1116:7:1',
                      typeDescriptions: {
                        typeIdentifier:
                          't_function_require_pure$_t_bool_$returns$__$',
                        typeString: 'function (bool) pure'
                      }
                    },
                    id: 215,
                    isConstant: false,
                    isLValue: false,
                    isPure: false,
                    kind: 'functionCall',
                    lValueRequested: false,
                    names: [],
                    nodeType: 'FunctionCall',
                    src: '1116:38:1',
                    typeDescriptions: {
                      typeIdentifier: 't_tuple$__$',
                      typeString: 'tuple()'
                    }
                  },
                  id: 216,
                  nodeType: 'ExpressionStatement',
                  src: '1116:38:1'
                },
                {
                  assignments: [218],
                  declarations: [
                    {
                      constant: false,
                      id: 218,
                      name: '_recipient_amount',
                      nodeType: 'VariableDeclaration',
                      scope: 247,
                      src: '1163:22:1',
                      stateVariable: false,
                      storageLocation: 'default',
                      typeDescriptions: {
                        typeIdentifier: 't_uint256',
                        typeString: 'uint256'
                      },
                      typeName: {
                        id: 217,
                        name: 'uint',
                        nodeType: 'ElementaryTypeName',
                        src: '1163:4:1',
                        typeDescriptions: {
                          typeIdentifier: 't_uint256',
                          typeString: 'uint256'
                        }
                      },
                      value: null,
                      visibility: 'internal'
                    }
                  ],
                  id: 222,
                  initialValue: {
                    argumentTypes: null,
                    baseExpression: {
                      argumentTypes: null,
                      id: 219,
                      name: 'balance',
                      nodeType: 'Identifier',
                      overloadedDeclarations: [],
                      referencedDeclaration: 70,
                      src: '1188:7:1',
                      typeDescriptions: {
                        typeIdentifier: 't_mapping$_t_address_$_t_uint256_$',
                        typeString: 'mapping(address => uint256)'
                      }
                    },
                    id: 221,
                    indexExpression: {
                      argumentTypes: null,
                      id: 220,
                      name: 'recipient',
                      nodeType: 'Identifier',
                      overloadedDeclarations: [],
                      referencedDeclaration: 200,
                      src: '1196:9:1',
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
                    src: '1188:18:1',
                    typeDescriptions: {
                      typeIdentifier: 't_uint256',
                      typeString: 'uint256'
                    }
                  },
                  nodeType: 'VariableDeclarationStatement',
                  src: '1163:43:1'
                },
                {
                  assignments: [224],
                  declarations: [
                    {
                      constant: false,
                      id: 224,
                      name: '_sender_amount',
                      nodeType: 'VariableDeclaration',
                      scope: 247,
                      src: '1215:19:1',
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
                        src: '1215:4:1',
                        typeDescriptions: {
                          typeIdentifier: 't_uint256',
                          typeString: 'uint256'
                        }
                      },
                      value: null,
                      visibility: 'internal'
                    }
                  ],
                  id: 229,
                  initialValue: {
                    argumentTypes: null,
                    baseExpression: {
                      argumentTypes: null,
                      id: 225,
                      name: 'balance',
                      nodeType: 'Identifier',
                      overloadedDeclarations: [],
                      referencedDeclaration: 70,
                      src: '1237:7:1',
                      typeDescriptions: {
                        typeIdentifier: 't_mapping$_t_address_$_t_uint256_$',
                        typeString: 'mapping(address => uint256)'
                      }
                    },
                    id: 228,
                    indexExpression: {
                      argumentTypes: null,
                      expression: {
                        argumentTypes: null,
                        id: 226,
                        name: 'msg',
                        nodeType: 'Identifier',
                        overloadedDeclarations: [],
                        referencedDeclaration: 264,
                        src: '1245:3:1',
                        typeDescriptions: {
                          typeIdentifier: 't_magic_message',
                          typeString: 'msg'
                        }
                      },
                      id: 227,
                      isConstant: false,
                      isLValue: false,
                      isPure: false,
                      lValueRequested: false,
                      memberName: 'sender',
                      nodeType: 'MemberAccess',
                      referencedDeclaration: null,
                      src: '1245:10:1',
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
                    src: '1237:19:1',
                    typeDescriptions: {
                      typeIdentifier: 't_uint256',
                      typeString: 'uint256'
                    }
                  },
                  nodeType: 'VariableDeclarationStatement',
                  src: '1215:41:1'
                },
                {
                  expression: {
                    argumentTypes: null,
                    id: 237,
                    isConstant: false,
                    isLValue: false,
                    isPure: false,
                    lValueRequested: false,
                    leftHandSide: {
                      argumentTypes: null,
                      baseExpression: {
                        argumentTypes: null,
                        id: 230,
                        name: 'balance',
                        nodeType: 'Identifier',
                        overloadedDeclarations: [],
                        referencedDeclaration: 70,
                        src: '1265:7:1',
                        typeDescriptions: {
                          typeIdentifier: 't_mapping$_t_address_$_t_uint256_$',
                          typeString: 'mapping(address => uint256)'
                        }
                      },
                      id: 233,
                      indexExpression: {
                        argumentTypes: null,
                        expression: {
                          argumentTypes: null,
                          id: 231,
                          name: 'msg',
                          nodeType: 'Identifier',
                          overloadedDeclarations: [],
                          referencedDeclaration: 264,
                          src: '1273:3:1',
                          typeDescriptions: {
                            typeIdentifier: 't_magic_message',
                            typeString: 'msg'
                          }
                        },
                        id: 232,
                        isConstant: false,
                        isLValue: false,
                        isPure: false,
                        lValueRequested: false,
                        memberName: 'sender',
                        nodeType: 'MemberAccess',
                        referencedDeclaration: null,
                        src: '1273:10:1',
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
                      src: '1265:19:1',
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
                      id: 236,
                      isConstant: false,
                      isLValue: false,
                      isPure: false,
                      lValueRequested: false,
                      leftExpression: {
                        argumentTypes: null,
                        id: 234,
                        name: '_sender_amount',
                        nodeType: 'Identifier',
                        overloadedDeclarations: [],
                        referencedDeclaration: 224,
                        src: '1287:14:1',
                        typeDescriptions: {
                          typeIdentifier: 't_uint256',
                          typeString: 'uint256'
                        }
                      },
                      nodeType: 'BinaryOperation',
                      operator: '-',
                      rightExpression: {
                        argumentTypes: null,
                        id: 235,
                        name: 'amount',
                        nodeType: 'Identifier',
                        overloadedDeclarations: [],
                        referencedDeclaration: 202,
                        src: '1304:6:1',
                        typeDescriptions: {
                          typeIdentifier: 't_uint256',
                          typeString: 'uint256'
                        }
                      },
                      src: '1287:23:1',
                      typeDescriptions: {
                        typeIdentifier: 't_uint256',
                        typeString: 'uint256'
                      }
                    },
                    src: '1265:45:1',
                    typeDescriptions: {
                      typeIdentifier: 't_uint256',
                      typeString: 'uint256'
                    }
                  },
                  id: 238,
                  nodeType: 'ExpressionStatement',
                  src: '1265:45:1'
                },
                {
                  expression: {
                    argumentTypes: null,
                    id: 245,
                    isConstant: false,
                    isLValue: false,
                    isPure: false,
                    lValueRequested: false,
                    leftHandSide: {
                      argumentTypes: null,
                      baseExpression: {
                        argumentTypes: null,
                        id: 239,
                        name: 'balance',
                        nodeType: 'Identifier',
                        overloadedDeclarations: [],
                        referencedDeclaration: 70,
                        src: '1319:7:1',
                        typeDescriptions: {
                          typeIdentifier: 't_mapping$_t_address_$_t_uint256_$',
                          typeString: 'mapping(address => uint256)'
                        }
                      },
                      id: 241,
                      indexExpression: {
                        argumentTypes: null,
                        id: 240,
                        name: 'recipient',
                        nodeType: 'Identifier',
                        overloadedDeclarations: [],
                        referencedDeclaration: 200,
                        src: '1327:9:1',
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
                      src: '1319:18:1',
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
                      id: 244,
                      isConstant: false,
                      isLValue: false,
                      isPure: false,
                      lValueRequested: false,
                      leftExpression: {
                        argumentTypes: null,
                        id: 242,
                        name: '_recipient_amount',
                        nodeType: 'Identifier',
                        overloadedDeclarations: [],
                        referencedDeclaration: 218,
                        src: '1340:17:1',
                        typeDescriptions: {
                          typeIdentifier: 't_uint256',
                          typeString: 'uint256'
                        }
                      },
                      nodeType: 'BinaryOperation',
                      operator: '+',
                      rightExpression: {
                        argumentTypes: null,
                        id: 243,
                        name: 'amount',
                        nodeType: 'Identifier',
                        overloadedDeclarations: [],
                        referencedDeclaration: 202,
                        src: '1360:6:1',
                        typeDescriptions: {
                          typeIdentifier: 't_uint256',
                          typeString: 'uint256'
                        }
                      },
                      src: '1340:26:1',
                      typeDescriptions: {
                        typeIdentifier: 't_uint256',
                        typeString: 'uint256'
                      }
                    },
                    src: '1319:47:1',
                    typeDescriptions: {
                      typeIdentifier: 't_uint256',
                      typeString: 'uint256'
                    }
                  },
                  id: 246,
                  nodeType: 'ExpressionStatement',
                  src: '1319:47:1'
                }
              ]
            },
            documentation: null,
            id: 248,
            implemented: true,
            kind: 'function',
            modifiers: [
              {
                arguments: [
                  {
                    argumentTypes: null,
                    id: 205,
                    name: 'recipient',
                    nodeType: 'Identifier',
                    overloadedDeclarations: [],
                    referencedDeclaration: 200,
                    src: '1097:9:1',
                    typeDescriptions: {
                      typeIdentifier: 't_address',
                      typeString: 'address'
                    }
                  }
                ],
                id: 206,
                modifierName: {
                  argumentTypes: null,
                  id: 204,
                  name: 'notNull',
                  nodeType: 'Identifier',
                  overloadedDeclarations: [],
                  referencedDeclaration: 95,
                  src: '1089:7:1',
                  typeDescriptions: {
                    typeIdentifier: 't_modifier$_t_address_$',
                    typeString: 'modifier (address)'
                  }
                },
                nodeType: 'ModifierInvocation',
                src: '1089:18:1'
              }
            ],
            name: 'transfer',
            nodeType: 'FunctionDefinition',
            parameters: {
              id: 203,
              nodeType: 'ParameterList',
              parameters: [
                {
                  constant: false,
                  id: 200,
                  name: 'recipient',
                  nodeType: 'VariableDeclaration',
                  scope: 248,
                  src: '1048:17:1',
                  stateVariable: false,
                  storageLocation: 'default',
                  typeDescriptions: {
                    typeIdentifier: 't_address',
                    typeString: 'address'
                  },
                  typeName: {
                    id: 199,
                    name: 'address',
                    nodeType: 'ElementaryTypeName',
                    src: '1048:7:1',
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
                  id: 202,
                  name: 'amount',
                  nodeType: 'VariableDeclaration',
                  scope: 248,
                  src: '1067:11:1',
                  stateVariable: false,
                  storageLocation: 'default',
                  typeDescriptions: {
                    typeIdentifier: 't_uint256',
                    typeString: 'uint256'
                  },
                  typeName: {
                    id: 201,
                    name: 'uint',
                    nodeType: 'ElementaryTypeName',
                    src: '1067:4:1',
                    typeDescriptions: {
                      typeIdentifier: 't_uint256',
                      typeString: 'uint256'
                    }
                  },
                  value: null,
                  visibility: 'internal'
                }
              ],
              src: '1047:32:1'
            },
            returnParameters: {
              id: 207,
              nodeType: 'ParameterList',
              parameters: [],
              src: '1107:0:1'
            },
            scope: 249,
            src: '1030:342:1',
            stateMutability: 'nonpayable',
            superFunction: null,
            visibility: 'external'
          }
        ],
        scope: 250,
        src: '25:1350:1'
      }
    ],
    src: '0:1375:1'
  },
  legacyAST: {
    absolutePath: '/Users/james/Desktop/chairity_token/contracts/Token.sol',
    exportedSymbols: {
      Token: [249]
    },
    id: 250,
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
        id: 249,
        linearizedBaseContracts: [249],
        name: 'Token',
        nodeType: 'ContractDefinition',
        nodes: [
          {
            constant: false,
            id: 60,
            name: 'owner',
            nodeType: 'VariableDeclaration',
            scope: 249,
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
            scope: 249,
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
            scope: 249,
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
            scope: 249,
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
            scope: 249,
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
            body: {
              id: 80,
              nodeType: 'Block',
              src: '225:53:1',
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
                        id: 76,
                        isConstant: false,
                        isLValue: false,
                        isPure: false,
                        lValueRequested: false,
                        leftExpression: {
                          argumentTypes: null,
                          expression: {
                            argumentTypes: null,
                            id: 73,
                            name: 'msg',
                            nodeType: 'Identifier',
                            overloadedDeclarations: [],
                            referencedDeclaration: 264,
                            src: '242:3:1',
                            typeDescriptions: {
                              typeIdentifier: 't_magic_message',
                              typeString: 'msg'
                            }
                          },
                          id: 74,
                          isConstant: false,
                          isLValue: false,
                          isPure: false,
                          lValueRequested: false,
                          memberName: 'sender',
                          nodeType: 'MemberAccess',
                          referencedDeclaration: null,
                          src: '242:10:1',
                          typeDescriptions: {
                            typeIdentifier: 't_address_payable',
                            typeString: 'address payable'
                          }
                        },
                        nodeType: 'BinaryOperation',
                        operator: '==',
                        rightExpression: {
                          argumentTypes: null,
                          id: 75,
                          name: 'owner',
                          nodeType: 'Identifier',
                          overloadedDeclarations: [],
                          referencedDeclaration: 60,
                          src: '256:5:1',
                          typeDescriptions: {
                            typeIdentifier: 't_address',
                            typeString: 'address'
                          }
                        },
                        src: '242:19:1',
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
                      id: 72,
                      name: 'require',
                      nodeType: 'Identifier',
                      overloadedDeclarations: [267, 268],
                      referencedDeclaration: 267,
                      src: '234:7:1',
                      typeDescriptions: {
                        typeIdentifier:
                          't_function_require_pure$_t_bool_$returns$__$',
                        typeString: 'function (bool) pure'
                      }
                    },
                    id: 77,
                    isConstant: false,
                    isLValue: false,
                    isPure: false,
                    kind: 'functionCall',
                    lValueRequested: false,
                    names: [],
                    nodeType: 'FunctionCall',
                    src: '234:28:1',
                    typeDescriptions: {
                      typeIdentifier: 't_tuple$__$',
                      typeString: 'tuple()'
                    }
                  },
                  id: 78,
                  nodeType: 'ExpressionStatement',
                  src: '234:28:1'
                },
                {
                  id: 79,
                  nodeType: 'PlaceholderStatement',
                  src: '271:1:1'
                }
              ]
            },
            documentation: null,
            id: 81,
            name: 'isOwner',
            nodeType: 'ModifierDefinition',
            parameters: {
              id: 71,
              nodeType: 'ParameterList',
              parameters: [],
              src: '223:2:1'
            },
            src: '207:71:1',
            visibility: 'internal'
          },
          {
            body: {
              id: 94,
              nodeType: 'Block',
              src: '314:51:1',
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
                        id: 90,
                        isConstant: false,
                        isLValue: false,
                        isPure: false,
                        lValueRequested: false,
                        leftExpression: {
                          argumentTypes: null,
                          id: 86,
                          name: 'x',
                          nodeType: 'Identifier',
                          overloadedDeclarations: [],
                          referencedDeclaration: 83,
                          src: '331:1:1',
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
                              id: 88,
                              isConstant: false,
                              isLValue: false,
                              isPure: true,
                              kind: 'number',
                              lValueRequested: false,
                              nodeType: 'Literal',
                              src: '344:3:1',
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
                            id: 87,
                            isConstant: false,
                            isLValue: false,
                            isPure: true,
                            lValueRequested: false,
                            nodeType: 'ElementaryTypeNameExpression',
                            src: '336:7:1',
                            typeDescriptions: {
                              typeIdentifier: 't_type$_t_address_$',
                              typeString: 'type(address)'
                            },
                            typeName: 'address'
                          },
                          id: 89,
                          isConstant: false,
                          isLValue: false,
                          isPure: true,
                          kind: 'typeConversion',
                          lValueRequested: false,
                          names: [],
                          nodeType: 'FunctionCall',
                          src: '336:12:1',
                          typeDescriptions: {
                            typeIdentifier: 't_address_payable',
                            typeString: 'address payable'
                          }
                        },
                        src: '331:17:1',
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
                      id: 85,
                      name: 'require',
                      nodeType: 'Identifier',
                      overloadedDeclarations: [267, 268],
                      referencedDeclaration: 267,
                      src: '323:7:1',
                      typeDescriptions: {
                        typeIdentifier:
                          't_function_require_pure$_t_bool_$returns$__$',
                        typeString: 'function (bool) pure'
                      }
                    },
                    id: 91,
                    isConstant: false,
                    isLValue: false,
                    isPure: false,
                    kind: 'functionCall',
                    lValueRequested: false,
                    names: [],
                    nodeType: 'FunctionCall',
                    src: '323:26:1',
                    typeDescriptions: {
                      typeIdentifier: 't_tuple$__$',
                      typeString: 'tuple()'
                    }
                  },
                  id: 92,
                  nodeType: 'ExpressionStatement',
                  src: '323:26:1'
                },
                {
                  id: 93,
                  nodeType: 'PlaceholderStatement',
                  src: '358:1:1'
                }
              ]
            },
            documentation: null,
            id: 95,
            name: 'notNull',
            nodeType: 'ModifierDefinition',
            parameters: {
              id: 84,
              nodeType: 'ParameterList',
              parameters: [
                {
                  constant: false,
                  id: 83,
                  name: 'x',
                  nodeType: 'VariableDeclaration',
                  scope: 95,
                  src: '304:9:1',
                  stateVariable: false,
                  storageLocation: 'default',
                  typeDescriptions: {
                    typeIdentifier: 't_address',
                    typeString: 'address'
                  },
                  typeName: {
                    id: 82,
                    name: 'address',
                    nodeType: 'ElementaryTypeName',
                    src: '304:7:1',
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
              src: '303:11:1'
            },
            src: '287:78:1',
            visibility: 'internal'
          },
          {
            body: {
              id: 115,
              nodeType: 'Block',
              src: '430:89:1',
              statements: [
                {
                  expression: {
                    argumentTypes: null,
                    id: 105,
                    isConstant: false,
                    isLValue: false,
                    isPure: false,
                    lValueRequested: false,
                    leftHandSide: {
                      argumentTypes: null,
                      id: 102,
                      name: 'owner',
                      nodeType: 'Identifier',
                      overloadedDeclarations: [],
                      referencedDeclaration: 60,
                      src: '439:5:1',
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
                        id: 103,
                        name: 'msg',
                        nodeType: 'Identifier',
                        overloadedDeclarations: [],
                        referencedDeclaration: 264,
                        src: '447:3:1',
                        typeDescriptions: {
                          typeIdentifier: 't_magic_message',
                          typeString: 'msg'
                        }
                      },
                      id: 104,
                      isConstant: false,
                      isLValue: false,
                      isPure: false,
                      lValueRequested: false,
                      memberName: 'sender',
                      nodeType: 'MemberAccess',
                      referencedDeclaration: null,
                      src: '447:10:1',
                      typeDescriptions: {
                        typeIdentifier: 't_address_payable',
                        typeString: 'address payable'
                      }
                    },
                    src: '439:18:1',
                    typeDescriptions: {
                      typeIdentifier: 't_address',
                      typeString: 'address'
                    }
                  },
                  id: 106,
                  nodeType: 'ExpressionStatement',
                  src: '439:18:1'
                },
                {
                  expression: {
                    argumentTypes: null,
                    id: 109,
                    isConstant: false,
                    isLValue: false,
                    isPure: false,
                    lValueRequested: false,
                    leftHandSide: {
                      argumentTypes: null,
                      id: 107,
                      name: 'token_name',
                      nodeType: 'Identifier',
                      overloadedDeclarations: [],
                      referencedDeclaration: 62,
                      src: '466:10:1',
                      typeDescriptions: {
                        typeIdentifier: 't_string_storage',
                        typeString: 'string storage ref'
                      }
                    },
                    nodeType: 'Assignment',
                    operator: '=',
                    rightHandSide: {
                      argumentTypes: null,
                      id: 108,
                      name: 'name',
                      nodeType: 'Identifier',
                      overloadedDeclarations: [],
                      referencedDeclaration: 97,
                      src: '479:4:1',
                      typeDescriptions: {
                        typeIdentifier: 't_string_memory_ptr',
                        typeString: 'string memory'
                      }
                    },
                    src: '466:17:1',
                    typeDescriptions: {
                      typeIdentifier: 't_string_storage',
                      typeString: 'string storage ref'
                    }
                  },
                  id: 110,
                  nodeType: 'ExpressionStatement',
                  src: '466:17:1'
                },
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
                      id: 111,
                      name: 'token_symbol',
                      nodeType: 'Identifier',
                      overloadedDeclarations: [],
                      referencedDeclaration: 64,
                      src: '492:12:1',
                      typeDescriptions: {
                        typeIdentifier: 't_string_storage',
                        typeString: 'string storage ref'
                      }
                    },
                    nodeType: 'Assignment',
                    operator: '=',
                    rightHandSide: {
                      argumentTypes: null,
                      id: 112,
                      name: 'symbol',
                      nodeType: 'Identifier',
                      overloadedDeclarations: [],
                      referencedDeclaration: 99,
                      src: '506:6:1',
                      typeDescriptions: {
                        typeIdentifier: 't_string_memory_ptr',
                        typeString: 'string memory'
                      }
                    },
                    src: '492:20:1',
                    typeDescriptions: {
                      typeIdentifier: 't_string_storage',
                      typeString: 'string storage ref'
                    }
                  },
                  id: 114,
                  nodeType: 'ExpressionStatement',
                  src: '492:20:1'
                }
              ]
            },
            documentation: null,
            id: 116,
            implemented: true,
            kind: 'constructor',
            modifiers: [],
            name: '',
            nodeType: 'FunctionDefinition',
            parameters: {
              id: 100,
              nodeType: 'ParameterList',
              parameters: [
                {
                  constant: false,
                  id: 97,
                  name: 'name',
                  nodeType: 'VariableDeclaration',
                  scope: 116,
                  src: '382:18:1',
                  stateVariable: false,
                  storageLocation: 'memory',
                  typeDescriptions: {
                    typeIdentifier: 't_string_memory_ptr',
                    typeString: 'string'
                  },
                  typeName: {
                    id: 96,
                    name: 'string',
                    nodeType: 'ElementaryTypeName',
                    src: '382:6:1',
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
                  id: 99,
                  name: 'symbol',
                  nodeType: 'VariableDeclaration',
                  scope: 116,
                  src: '402:20:1',
                  stateVariable: false,
                  storageLocation: 'memory',
                  typeDescriptions: {
                    typeIdentifier: 't_string_memory_ptr',
                    typeString: 'string'
                  },
                  typeName: {
                    id: 98,
                    name: 'string',
                    nodeType: 'ElementaryTypeName',
                    src: '402:6:1',
                    typeDescriptions: {
                      typeIdentifier: 't_string_storage_ptr',
                      typeString: 'string'
                    }
                  },
                  value: null,
                  visibility: 'internal'
                }
              ],
              src: '381:42:1'
            },
            returnParameters: {
              id: 101,
              nodeType: 'ParameterList',
              parameters: [],
              src: '430:0:1'
            },
            scope: 249,
            src: '370:149:1',
            stateMutability: 'nonpayable',
            superFunction: null,
            visibility: 'public'
          },
          {
            body: {
              id: 152,
              nodeType: 'Block',
              src: '590:159:1',
              statements: [
                {
                  assignments: [129],
                  declarations: [
                    {
                      constant: false,
                      id: 129,
                      name: '_temp',
                      nodeType: 'VariableDeclaration',
                      scope: 152,
                      src: '607:10:1',
                      stateVariable: false,
                      storageLocation: 'default',
                      typeDescriptions: {
                        typeIdentifier: 't_uint256',
                        typeString: 'uint256'
                      },
                      typeName: {
                        id: 128,
                        name: 'uint',
                        nodeType: 'ElementaryTypeName',
                        src: '607:4:1',
                        typeDescriptions: {
                          typeIdentifier: 't_uint256',
                          typeString: 'uint256'
                        }
                      },
                      value: null,
                      visibility: 'internal'
                    }
                  ],
                  id: 133,
                  initialValue: {
                    argumentTypes: null,
                    baseExpression: {
                      argumentTypes: null,
                      id: 130,
                      name: 'balance',
                      nodeType: 'Identifier',
                      overloadedDeclarations: [],
                      referencedDeclaration: 70,
                      src: '621:7:1',
                      typeDescriptions: {
                        typeIdentifier: 't_mapping$_t_address_$_t_uint256_$',
                        typeString: 'mapping(address => uint256)'
                      }
                    },
                    id: 132,
                    indexExpression: {
                      argumentTypes: null,
                      id: 131,
                      name: 'x',
                      nodeType: 'Identifier',
                      overloadedDeclarations: [],
                      referencedDeclaration: 118,
                      src: '629:1:1',
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
                    src: '621:10:1',
                    typeDescriptions: {
                      typeIdentifier: 't_uint256',
                      typeString: 'uint256'
                    }
                  },
                  nodeType: 'VariableDeclarationStatement',
                  src: '607:24:1'
                },
                {
                  assignments: [135],
                  declarations: [
                    {
                      constant: false,
                      id: 135,
                      name: '_supply',
                      nodeType: 'VariableDeclaration',
                      scope: 152,
                      src: '640:12:1',
                      stateVariable: false,
                      storageLocation: 'default',
                      typeDescriptions: {
                        typeIdentifier: 't_uint256',
                        typeString: 'uint256'
                      },
                      typeName: {
                        id: 134,
                        name: 'uint',
                        nodeType: 'ElementaryTypeName',
                        src: '640:4:1',
                        typeDescriptions: {
                          typeIdentifier: 't_uint256',
                          typeString: 'uint256'
                        }
                      },
                      value: null,
                      visibility: 'internal'
                    }
                  ],
                  id: 137,
                  initialValue: {
                    argumentTypes: null,
                    id: 136,
                    name: 'total_supply',
                    nodeType: 'Identifier',
                    overloadedDeclarations: [],
                    referencedDeclaration: 66,
                    src: '655:12:1',
                    typeDescriptions: {
                      typeIdentifier: 't_uint256',
                      typeString: 'uint256'
                    }
                  },
                  nodeType: 'VariableDeclarationStatement',
                  src: '640:27:1'
                },
                {
                  expression: {
                    argumentTypes: null,
                    id: 144,
                    isConstant: false,
                    isLValue: false,
                    isPure: false,
                    lValueRequested: false,
                    leftHandSide: {
                      argumentTypes: null,
                      baseExpression: {
                        argumentTypes: null,
                        id: 138,
                        name: 'balance',
                        nodeType: 'Identifier',
                        overloadedDeclarations: [],
                        referencedDeclaration: 70,
                        src: '676:7:1',
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
                        referencedDeclaration: 118,
                        src: '684:1:1',
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
                      src: '676:10:1',
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
                      id: 143,
                      isConstant: false,
                      isLValue: false,
                      isPure: false,
                      lValueRequested: false,
                      leftExpression: {
                        argumentTypes: null,
                        id: 141,
                        name: '_temp',
                        nodeType: 'Identifier',
                        overloadedDeclarations: [],
                        referencedDeclaration: 129,
                        src: '689:5:1',
                        typeDescriptions: {
                          typeIdentifier: 't_uint256',
                          typeString: 'uint256'
                        }
                      },
                      nodeType: 'BinaryOperation',
                      operator: '+',
                      rightExpression: {
                        argumentTypes: null,
                        id: 142,
                        name: 'amount',
                        nodeType: 'Identifier',
                        overloadedDeclarations: [],
                        referencedDeclaration: 120,
                        src: '697:6:1',
                        typeDescriptions: {
                          typeIdentifier: 't_uint256',
                          typeString: 'uint256'
                        }
                      },
                      src: '689:14:1',
                      typeDescriptions: {
                        typeIdentifier: 't_uint256',
                        typeString: 'uint256'
                      }
                    },
                    src: '676:27:1',
                    typeDescriptions: {
                      typeIdentifier: 't_uint256',
                      typeString: 'uint256'
                    }
                  },
                  id: 145,
                  nodeType: 'ExpressionStatement',
                  src: '676:27:1'
                },
                {
                  expression: {
                    argumentTypes: null,
                    id: 150,
                    isConstant: false,
                    isLValue: false,
                    isPure: false,
                    lValueRequested: false,
                    leftHandSide: {
                      argumentTypes: null,
                      id: 146,
                      name: 'total_supply',
                      nodeType: 'Identifier',
                      overloadedDeclarations: [],
                      referencedDeclaration: 66,
                      src: '712:12:1',
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
                      id: 149,
                      isConstant: false,
                      isLValue: false,
                      isPure: false,
                      lValueRequested: false,
                      leftExpression: {
                        argumentTypes: null,
                        id: 147,
                        name: '_supply',
                        nodeType: 'Identifier',
                        overloadedDeclarations: [],
                        referencedDeclaration: 135,
                        src: '727:7:1',
                        typeDescriptions: {
                          typeIdentifier: 't_uint256',
                          typeString: 'uint256'
                        }
                      },
                      nodeType: 'BinaryOperation',
                      operator: '+',
                      rightExpression: {
                        argumentTypes: null,
                        id: 148,
                        name: 'amount',
                        nodeType: 'Identifier',
                        overloadedDeclarations: [],
                        referencedDeclaration: 120,
                        src: '737:6:1',
                        typeDescriptions: {
                          typeIdentifier: 't_uint256',
                          typeString: 'uint256'
                        }
                      },
                      src: '727:16:1',
                      typeDescriptions: {
                        typeIdentifier: 't_uint256',
                        typeString: 'uint256'
                      }
                    },
                    src: '712:31:1',
                    typeDescriptions: {
                      typeIdentifier: 't_uint256',
                      typeString: 'uint256'
                    }
                  },
                  id: 151,
                  nodeType: 'ExpressionStatement',
                  src: '712:31:1'
                }
              ]
            },
            documentation: null,
            id: 153,
            implemented: true,
            kind: 'function',
            modifiers: [
              {
                arguments: null,
                id: 123,
                modifierName: {
                  argumentTypes: null,
                  id: 122,
                  name: 'isOwner',
                  nodeType: 'Identifier',
                  overloadedDeclarations: [],
                  referencedDeclaration: 81,
                  src: '572:7:1',
                  typeDescriptions: {
                    typeIdentifier: 't_modifier$__$',
                    typeString: 'modifier ()'
                  }
                },
                nodeType: 'ModifierInvocation',
                src: '572:7:1'
              },
              {
                arguments: [
                  {
                    argumentTypes: null,
                    id: 125,
                    name: 'x',
                    nodeType: 'Identifier',
                    overloadedDeclarations: [],
                    referencedDeclaration: 118,
                    src: '588:1:1',
                    typeDescriptions: {
                      typeIdentifier: 't_address',
                      typeString: 'address'
                    }
                  }
                ],
                id: 126,
                modifierName: {
                  argumentTypes: null,
                  id: 124,
                  name: 'notNull',
                  nodeType: 'Identifier',
                  overloadedDeclarations: [],
                  referencedDeclaration: 95,
                  src: '580:7:1',
                  typeDescriptions: {
                    typeIdentifier: 't_modifier$_t_address_$',
                    typeString: 'modifier (address)'
                  }
                },
                nodeType: 'ModifierInvocation',
                src: '580:10:1'
              }
            ],
            name: '_mint',
            nodeType: 'FunctionDefinition',
            parameters: {
              id: 121,
              nodeType: 'ParameterList',
              parameters: [
                {
                  constant: false,
                  id: 118,
                  name: 'x',
                  nodeType: 'VariableDeclaration',
                  scope: 153,
                  src: '539:9:1',
                  stateVariable: false,
                  storageLocation: 'default',
                  typeDescriptions: {
                    typeIdentifier: 't_address',
                    typeString: 'address'
                  },
                  typeName: {
                    id: 117,
                    name: 'address',
                    nodeType: 'ElementaryTypeName',
                    src: '539:7:1',
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
                  id: 120,
                  name: 'amount',
                  nodeType: 'VariableDeclaration',
                  scope: 153,
                  src: '550:11:1',
                  stateVariable: false,
                  storageLocation: 'default',
                  typeDescriptions: {
                    typeIdentifier: 't_uint256',
                    typeString: 'uint256'
                  },
                  typeName: {
                    id: 119,
                    name: 'uint',
                    nodeType: 'ElementaryTypeName',
                    src: '550:4:1',
                    typeDescriptions: {
                      typeIdentifier: 't_uint256',
                      typeString: 'uint256'
                    }
                  },
                  value: null,
                  visibility: 'internal'
                }
              ],
              src: '538:24:1'
            },
            returnParameters: {
              id: 127,
              nodeType: 'ParameterList',
              parameters: [],
              src: '590:0:1'
            },
            scope: 249,
            src: '524:225:1',
            stateMutability: 'nonpayable',
            superFunction: null,
            visibility: 'external'
          },
          {
            body: {
              id: 197,
              nodeType: 'Block',
              src: '823:199:1',
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
                        id: 170,
                        isConstant: false,
                        isLValue: false,
                        isPure: false,
                        lValueRequested: false,
                        leftExpression: {
                          argumentTypes: null,
                          baseExpression: {
                            argumentTypes: null,
                            id: 166,
                            name: 'balance',
                            nodeType: 'Identifier',
                            overloadedDeclarations: [],
                            referencedDeclaration: 70,
                            src: '840:7:1',
                            typeDescriptions: {
                              typeIdentifier:
                                't_mapping$_t_address_$_t_uint256_$',
                              typeString: 'mapping(address => uint256)'
                            }
                          },
                          id: 168,
                          indexExpression: {
                            argumentTypes: null,
                            id: 167,
                            name: 'x',
                            nodeType: 'Identifier',
                            overloadedDeclarations: [],
                            referencedDeclaration: 155,
                            src: '848:1:1',
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
                          src: '840:10:1',
                          typeDescriptions: {
                            typeIdentifier: 't_uint256',
                            typeString: 'uint256'
                          }
                        },
                        nodeType: 'BinaryOperation',
                        operator: '>=',
                        rightExpression: {
                          argumentTypes: null,
                          id: 169,
                          name: 'amount',
                          nodeType: 'Identifier',
                          overloadedDeclarations: [],
                          referencedDeclaration: 157,
                          src: '854:6:1',
                          typeDescriptions: {
                            typeIdentifier: 't_uint256',
                            typeString: 'uint256'
                          }
                        },
                        src: '840:20:1',
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
                      id: 165,
                      name: 'require',
                      nodeType: 'Identifier',
                      overloadedDeclarations: [267, 268],
                      referencedDeclaration: 267,
                      src: '832:7:1',
                      typeDescriptions: {
                        typeIdentifier:
                          't_function_require_pure$_t_bool_$returns$__$',
                        typeString: 'function (bool) pure'
                      }
                    },
                    id: 171,
                    isConstant: false,
                    isLValue: false,
                    isPure: false,
                    kind: 'functionCall',
                    lValueRequested: false,
                    names: [],
                    nodeType: 'FunctionCall',
                    src: '832:29:1',
                    typeDescriptions: {
                      typeIdentifier: 't_tuple$__$',
                      typeString: 'tuple()'
                    }
                  },
                  id: 172,
                  nodeType: 'ExpressionStatement',
                  src: '832:29:1'
                },
                {
                  assignments: [174],
                  declarations: [
                    {
                      constant: false,
                      id: 174,
                      name: '_temp',
                      nodeType: 'VariableDeclaration',
                      scope: 197,
                      src: '870:10:1',
                      stateVariable: false,
                      storageLocation: 'default',
                      typeDescriptions: {
                        typeIdentifier: 't_uint256',
                        typeString: 'uint256'
                      },
                      typeName: {
                        id: 173,
                        name: 'uint',
                        nodeType: 'ElementaryTypeName',
                        src: '870:4:1',
                        typeDescriptions: {
                          typeIdentifier: 't_uint256',
                          typeString: 'uint256'
                        }
                      },
                      value: null,
                      visibility: 'internal'
                    }
                  ],
                  id: 178,
                  initialValue: {
                    argumentTypes: null,
                    baseExpression: {
                      argumentTypes: null,
                      id: 175,
                      name: 'balance',
                      nodeType: 'Identifier',
                      overloadedDeclarations: [],
                      referencedDeclaration: 70,
                      src: '883:7:1',
                      typeDescriptions: {
                        typeIdentifier: 't_mapping$_t_address_$_t_uint256_$',
                        typeString: 'mapping(address => uint256)'
                      }
                    },
                    id: 177,
                    indexExpression: {
                      argumentTypes: null,
                      id: 176,
                      name: 'x',
                      nodeType: 'Identifier',
                      overloadedDeclarations: [],
                      referencedDeclaration: 155,
                      src: '891:1:1',
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
                    src: '883:10:1',
                    typeDescriptions: {
                      typeIdentifier: 't_uint256',
                      typeString: 'uint256'
                    }
                  },
                  nodeType: 'VariableDeclarationStatement',
                  src: '870:23:1'
                },
                {
                  assignments: [180],
                  declarations: [
                    {
                      constant: false,
                      id: 180,
                      name: '_supply',
                      nodeType: 'VariableDeclaration',
                      scope: 197,
                      src: '902:12:1',
                      stateVariable: false,
                      storageLocation: 'default',
                      typeDescriptions: {
                        typeIdentifier: 't_uint256',
                        typeString: 'uint256'
                      },
                      typeName: {
                        id: 179,
                        name: 'uint',
                        nodeType: 'ElementaryTypeName',
                        src: '902:4:1',
                        typeDescriptions: {
                          typeIdentifier: 't_uint256',
                          typeString: 'uint256'
                        }
                      },
                      value: null,
                      visibility: 'internal'
                    }
                  ],
                  id: 182,
                  initialValue: {
                    argumentTypes: null,
                    id: 181,
                    name: 'total_supply',
                    nodeType: 'Identifier',
                    overloadedDeclarations: [],
                    referencedDeclaration: 66,
                    src: '917:12:1',
                    typeDescriptions: {
                      typeIdentifier: 't_uint256',
                      typeString: 'uint256'
                    }
                  },
                  nodeType: 'VariableDeclarationStatement',
                  src: '902:27:1'
                },
                {
                  expression: {
                    argumentTypes: null,
                    id: 189,
                    isConstant: false,
                    isLValue: false,
                    isPure: false,
                    lValueRequested: false,
                    leftHandSide: {
                      argumentTypes: null,
                      baseExpression: {
                        argumentTypes: null,
                        id: 183,
                        name: 'balance',
                        nodeType: 'Identifier',
                        overloadedDeclarations: [],
                        referencedDeclaration: 70,
                        src: '938:7:1',
                        typeDescriptions: {
                          typeIdentifier: 't_mapping$_t_address_$_t_uint256_$',
                          typeString: 'mapping(address => uint256)'
                        }
                      },
                      id: 185,
                      indexExpression: {
                        argumentTypes: null,
                        id: 184,
                        name: 'x',
                        nodeType: 'Identifier',
                        overloadedDeclarations: [],
                        referencedDeclaration: 155,
                        src: '946:1:1',
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
                      src: '938:10:1',
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
                      id: 188,
                      isConstant: false,
                      isLValue: false,
                      isPure: false,
                      lValueRequested: false,
                      leftExpression: {
                        argumentTypes: null,
                        id: 186,
                        name: '_temp',
                        nodeType: 'Identifier',
                        overloadedDeclarations: [],
                        referencedDeclaration: 174,
                        src: '951:5:1',
                        typeDescriptions: {
                          typeIdentifier: 't_uint256',
                          typeString: 'uint256'
                        }
                      },
                      nodeType: 'BinaryOperation',
                      operator: '-',
                      rightExpression: {
                        argumentTypes: null,
                        id: 187,
                        name: 'amount',
                        nodeType: 'Identifier',
                        overloadedDeclarations: [],
                        referencedDeclaration: 157,
                        src: '959:6:1',
                        typeDescriptions: {
                          typeIdentifier: 't_uint256',
                          typeString: 'uint256'
                        }
                      },
                      src: '951:14:1',
                      typeDescriptions: {
                        typeIdentifier: 't_uint256',
                        typeString: 'uint256'
                      }
                    },
                    src: '938:27:1',
                    typeDescriptions: {
                      typeIdentifier: 't_uint256',
                      typeString: 'uint256'
                    }
                  },
                  id: 190,
                  nodeType: 'ExpressionStatement',
                  src: '938:27:1'
                },
                {
                  expression: {
                    argumentTypes: null,
                    id: 195,
                    isConstant: false,
                    isLValue: false,
                    isPure: false,
                    lValueRequested: false,
                    leftHandSide: {
                      argumentTypes: null,
                      id: 191,
                      name: 'total_supply',
                      nodeType: 'Identifier',
                      overloadedDeclarations: [],
                      referencedDeclaration: 66,
                      src: '974:12:1',
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
                      id: 194,
                      isConstant: false,
                      isLValue: false,
                      isPure: false,
                      lValueRequested: false,
                      leftExpression: {
                        argumentTypes: null,
                        id: 192,
                        name: '_supply',
                        nodeType: 'Identifier',
                        overloadedDeclarations: [],
                        referencedDeclaration: 180,
                        src: '989:7:1',
                        typeDescriptions: {
                          typeIdentifier: 't_uint256',
                          typeString: 'uint256'
                        }
                      },
                      nodeType: 'BinaryOperation',
                      operator: '-',
                      rightExpression: {
                        argumentTypes: null,
                        id: 193,
                        name: 'amount',
                        nodeType: 'Identifier',
                        overloadedDeclarations: [],
                        referencedDeclaration: 157,
                        src: '999:6:1',
                        typeDescriptions: {
                          typeIdentifier: 't_uint256',
                          typeString: 'uint256'
                        }
                      },
                      src: '989:16:1',
                      typeDescriptions: {
                        typeIdentifier: 't_uint256',
                        typeString: 'uint256'
                      }
                    },
                    src: '974:31:1',
                    typeDescriptions: {
                      typeIdentifier: 't_uint256',
                      typeString: 'uint256'
                    }
                  },
                  id: 196,
                  nodeType: 'ExpressionStatement',
                  src: '974:31:1'
                }
              ]
            },
            documentation: null,
            id: 198,
            implemented: true,
            kind: 'function',
            modifiers: [
              {
                arguments: null,
                id: 160,
                modifierName: {
                  argumentTypes: null,
                  id: 159,
                  name: 'isOwner',
                  nodeType: 'Identifier',
                  overloadedDeclarations: [],
                  referencedDeclaration: 81,
                  src: '805:7:1',
                  typeDescriptions: {
                    typeIdentifier: 't_modifier$__$',
                    typeString: 'modifier ()'
                  }
                },
                nodeType: 'ModifierInvocation',
                src: '805:7:1'
              },
              {
                arguments: [
                  {
                    argumentTypes: null,
                    id: 162,
                    name: 'x',
                    nodeType: 'Identifier',
                    overloadedDeclarations: [],
                    referencedDeclaration: 155,
                    src: '821:1:1',
                    typeDescriptions: {
                      typeIdentifier: 't_address',
                      typeString: 'address'
                    }
                  }
                ],
                id: 163,
                modifierName: {
                  argumentTypes: null,
                  id: 161,
                  name: 'notNull',
                  nodeType: 'Identifier',
                  overloadedDeclarations: [],
                  referencedDeclaration: 95,
                  src: '813:7:1',
                  typeDescriptions: {
                    typeIdentifier: 't_modifier$_t_address_$',
                    typeString: 'modifier (address)'
                  }
                },
                nodeType: 'ModifierInvocation',
                src: '813:10:1'
              }
            ],
            name: '_burn',
            nodeType: 'FunctionDefinition',
            parameters: {
              id: 158,
              nodeType: 'ParameterList',
              parameters: [
                {
                  constant: false,
                  id: 155,
                  name: 'x',
                  nodeType: 'VariableDeclaration',
                  scope: 198,
                  src: '772:9:1',
                  stateVariable: false,
                  storageLocation: 'default',
                  typeDescriptions: {
                    typeIdentifier: 't_address',
                    typeString: 'address'
                  },
                  typeName: {
                    id: 154,
                    name: 'address',
                    nodeType: 'ElementaryTypeName',
                    src: '772:7:1',
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
                  id: 157,
                  name: 'amount',
                  nodeType: 'VariableDeclaration',
                  scope: 198,
                  src: '783:11:1',
                  stateVariable: false,
                  storageLocation: 'default',
                  typeDescriptions: {
                    typeIdentifier: 't_uint256',
                    typeString: 'uint256'
                  },
                  typeName: {
                    id: 156,
                    name: 'uint',
                    nodeType: 'ElementaryTypeName',
                    src: '783:4:1',
                    typeDescriptions: {
                      typeIdentifier: 't_uint256',
                      typeString: 'uint256'
                    }
                  },
                  value: null,
                  visibility: 'internal'
                }
              ],
              src: '771:24:1'
            },
            returnParameters: {
              id: 164,
              nodeType: 'ParameterList',
              parameters: [],
              src: '823:0:1'
            },
            scope: 249,
            src: '757:265:1',
            stateMutability: 'nonpayable',
            superFunction: null,
            visibility: 'external'
          },
          {
            body: {
              id: 247,
              nodeType: 'Block',
              src: '1107:265:1',
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
                        id: 214,
                        isConstant: false,
                        isLValue: false,
                        isPure: false,
                        lValueRequested: false,
                        leftExpression: {
                          argumentTypes: null,
                          baseExpression: {
                            argumentTypes: null,
                            id: 209,
                            name: 'balance',
                            nodeType: 'Identifier',
                            overloadedDeclarations: [],
                            referencedDeclaration: 70,
                            src: '1124:7:1',
                            typeDescriptions: {
                              typeIdentifier:
                                't_mapping$_t_address_$_t_uint256_$',
                              typeString: 'mapping(address => uint256)'
                            }
                          },
                          id: 212,
                          indexExpression: {
                            argumentTypes: null,
                            expression: {
                              argumentTypes: null,
                              id: 210,
                              name: 'msg',
                              nodeType: 'Identifier',
                              overloadedDeclarations: [],
                              referencedDeclaration: 264,
                              src: '1132:3:1',
                              typeDescriptions: {
                                typeIdentifier: 't_magic_message',
                                typeString: 'msg'
                              }
                            },
                            id: 211,
                            isConstant: false,
                            isLValue: false,
                            isPure: false,
                            lValueRequested: false,
                            memberName: 'sender',
                            nodeType: 'MemberAccess',
                            referencedDeclaration: null,
                            src: '1132:10:1',
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
                          src: '1124:19:1',
                          typeDescriptions: {
                            typeIdentifier: 't_uint256',
                            typeString: 'uint256'
                          }
                        },
                        nodeType: 'BinaryOperation',
                        operator: '>=',
                        rightExpression: {
                          argumentTypes: null,
                          id: 213,
                          name: 'amount',
                          nodeType: 'Identifier',
                          overloadedDeclarations: [],
                          referencedDeclaration: 202,
                          src: '1147:6:1',
                          typeDescriptions: {
                            typeIdentifier: 't_uint256',
                            typeString: 'uint256'
                          }
                        },
                        src: '1124:29:1',
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
                      id: 208,
                      name: 'require',
                      nodeType: 'Identifier',
                      overloadedDeclarations: [267, 268],
                      referencedDeclaration: 267,
                      src: '1116:7:1',
                      typeDescriptions: {
                        typeIdentifier:
                          't_function_require_pure$_t_bool_$returns$__$',
                        typeString: 'function (bool) pure'
                      }
                    },
                    id: 215,
                    isConstant: false,
                    isLValue: false,
                    isPure: false,
                    kind: 'functionCall',
                    lValueRequested: false,
                    names: [],
                    nodeType: 'FunctionCall',
                    src: '1116:38:1',
                    typeDescriptions: {
                      typeIdentifier: 't_tuple$__$',
                      typeString: 'tuple()'
                    }
                  },
                  id: 216,
                  nodeType: 'ExpressionStatement',
                  src: '1116:38:1'
                },
                {
                  assignments: [218],
                  declarations: [
                    {
                      constant: false,
                      id: 218,
                      name: '_recipient_amount',
                      nodeType: 'VariableDeclaration',
                      scope: 247,
                      src: '1163:22:1',
                      stateVariable: false,
                      storageLocation: 'default',
                      typeDescriptions: {
                        typeIdentifier: 't_uint256',
                        typeString: 'uint256'
                      },
                      typeName: {
                        id: 217,
                        name: 'uint',
                        nodeType: 'ElementaryTypeName',
                        src: '1163:4:1',
                        typeDescriptions: {
                          typeIdentifier: 't_uint256',
                          typeString: 'uint256'
                        }
                      },
                      value: null,
                      visibility: 'internal'
                    }
                  ],
                  id: 222,
                  initialValue: {
                    argumentTypes: null,
                    baseExpression: {
                      argumentTypes: null,
                      id: 219,
                      name: 'balance',
                      nodeType: 'Identifier',
                      overloadedDeclarations: [],
                      referencedDeclaration: 70,
                      src: '1188:7:1',
                      typeDescriptions: {
                        typeIdentifier: 't_mapping$_t_address_$_t_uint256_$',
                        typeString: 'mapping(address => uint256)'
                      }
                    },
                    id: 221,
                    indexExpression: {
                      argumentTypes: null,
                      id: 220,
                      name: 'recipient',
                      nodeType: 'Identifier',
                      overloadedDeclarations: [],
                      referencedDeclaration: 200,
                      src: '1196:9:1',
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
                    src: '1188:18:1',
                    typeDescriptions: {
                      typeIdentifier: 't_uint256',
                      typeString: 'uint256'
                    }
                  },
                  nodeType: 'VariableDeclarationStatement',
                  src: '1163:43:1'
                },
                {
                  assignments: [224],
                  declarations: [
                    {
                      constant: false,
                      id: 224,
                      name: '_sender_amount',
                      nodeType: 'VariableDeclaration',
                      scope: 247,
                      src: '1215:19:1',
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
                        src: '1215:4:1',
                        typeDescriptions: {
                          typeIdentifier: 't_uint256',
                          typeString: 'uint256'
                        }
                      },
                      value: null,
                      visibility: 'internal'
                    }
                  ],
                  id: 229,
                  initialValue: {
                    argumentTypes: null,
                    baseExpression: {
                      argumentTypes: null,
                      id: 225,
                      name: 'balance',
                      nodeType: 'Identifier',
                      overloadedDeclarations: [],
                      referencedDeclaration: 70,
                      src: '1237:7:1',
                      typeDescriptions: {
                        typeIdentifier: 't_mapping$_t_address_$_t_uint256_$',
                        typeString: 'mapping(address => uint256)'
                      }
                    },
                    id: 228,
                    indexExpression: {
                      argumentTypes: null,
                      expression: {
                        argumentTypes: null,
                        id: 226,
                        name: 'msg',
                        nodeType: 'Identifier',
                        overloadedDeclarations: [],
                        referencedDeclaration: 264,
                        src: '1245:3:1',
                        typeDescriptions: {
                          typeIdentifier: 't_magic_message',
                          typeString: 'msg'
                        }
                      },
                      id: 227,
                      isConstant: false,
                      isLValue: false,
                      isPure: false,
                      lValueRequested: false,
                      memberName: 'sender',
                      nodeType: 'MemberAccess',
                      referencedDeclaration: null,
                      src: '1245:10:1',
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
                    src: '1237:19:1',
                    typeDescriptions: {
                      typeIdentifier: 't_uint256',
                      typeString: 'uint256'
                    }
                  },
                  nodeType: 'VariableDeclarationStatement',
                  src: '1215:41:1'
                },
                {
                  expression: {
                    argumentTypes: null,
                    id: 237,
                    isConstant: false,
                    isLValue: false,
                    isPure: false,
                    lValueRequested: false,
                    leftHandSide: {
                      argumentTypes: null,
                      baseExpression: {
                        argumentTypes: null,
                        id: 230,
                        name: 'balance',
                        nodeType: 'Identifier',
                        overloadedDeclarations: [],
                        referencedDeclaration: 70,
                        src: '1265:7:1',
                        typeDescriptions: {
                          typeIdentifier: 't_mapping$_t_address_$_t_uint256_$',
                          typeString: 'mapping(address => uint256)'
                        }
                      },
                      id: 233,
                      indexExpression: {
                        argumentTypes: null,
                        expression: {
                          argumentTypes: null,
                          id: 231,
                          name: 'msg',
                          nodeType: 'Identifier',
                          overloadedDeclarations: [],
                          referencedDeclaration: 264,
                          src: '1273:3:1',
                          typeDescriptions: {
                            typeIdentifier: 't_magic_message',
                            typeString: 'msg'
                          }
                        },
                        id: 232,
                        isConstant: false,
                        isLValue: false,
                        isPure: false,
                        lValueRequested: false,
                        memberName: 'sender',
                        nodeType: 'MemberAccess',
                        referencedDeclaration: null,
                        src: '1273:10:1',
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
                      src: '1265:19:1',
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
                      id: 236,
                      isConstant: false,
                      isLValue: false,
                      isPure: false,
                      lValueRequested: false,
                      leftExpression: {
                        argumentTypes: null,
                        id: 234,
                        name: '_sender_amount',
                        nodeType: 'Identifier',
                        overloadedDeclarations: [],
                        referencedDeclaration: 224,
                        src: '1287:14:1',
                        typeDescriptions: {
                          typeIdentifier: 't_uint256',
                          typeString: 'uint256'
                        }
                      },
                      nodeType: 'BinaryOperation',
                      operator: '-',
                      rightExpression: {
                        argumentTypes: null,
                        id: 235,
                        name: 'amount',
                        nodeType: 'Identifier',
                        overloadedDeclarations: [],
                        referencedDeclaration: 202,
                        src: '1304:6:1',
                        typeDescriptions: {
                          typeIdentifier: 't_uint256',
                          typeString: 'uint256'
                        }
                      },
                      src: '1287:23:1',
                      typeDescriptions: {
                        typeIdentifier: 't_uint256',
                        typeString: 'uint256'
                      }
                    },
                    src: '1265:45:1',
                    typeDescriptions: {
                      typeIdentifier: 't_uint256',
                      typeString: 'uint256'
                    }
                  },
                  id: 238,
                  nodeType: 'ExpressionStatement',
                  src: '1265:45:1'
                },
                {
                  expression: {
                    argumentTypes: null,
                    id: 245,
                    isConstant: false,
                    isLValue: false,
                    isPure: false,
                    lValueRequested: false,
                    leftHandSide: {
                      argumentTypes: null,
                      baseExpression: {
                        argumentTypes: null,
                        id: 239,
                        name: 'balance',
                        nodeType: 'Identifier',
                        overloadedDeclarations: [],
                        referencedDeclaration: 70,
                        src: '1319:7:1',
                        typeDescriptions: {
                          typeIdentifier: 't_mapping$_t_address_$_t_uint256_$',
                          typeString: 'mapping(address => uint256)'
                        }
                      },
                      id: 241,
                      indexExpression: {
                        argumentTypes: null,
                        id: 240,
                        name: 'recipient',
                        nodeType: 'Identifier',
                        overloadedDeclarations: [],
                        referencedDeclaration: 200,
                        src: '1327:9:1',
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
                      src: '1319:18:1',
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
                      id: 244,
                      isConstant: false,
                      isLValue: false,
                      isPure: false,
                      lValueRequested: false,
                      leftExpression: {
                        argumentTypes: null,
                        id: 242,
                        name: '_recipient_amount',
                        nodeType: 'Identifier',
                        overloadedDeclarations: [],
                        referencedDeclaration: 218,
                        src: '1340:17:1',
                        typeDescriptions: {
                          typeIdentifier: 't_uint256',
                          typeString: 'uint256'
                        }
                      },
                      nodeType: 'BinaryOperation',
                      operator: '+',
                      rightExpression: {
                        argumentTypes: null,
                        id: 243,
                        name: 'amount',
                        nodeType: 'Identifier',
                        overloadedDeclarations: [],
                        referencedDeclaration: 202,
                        src: '1360:6:1',
                        typeDescriptions: {
                          typeIdentifier: 't_uint256',
                          typeString: 'uint256'
                        }
                      },
                      src: '1340:26:1',
                      typeDescriptions: {
                        typeIdentifier: 't_uint256',
                        typeString: 'uint256'
                      }
                    },
                    src: '1319:47:1',
                    typeDescriptions: {
                      typeIdentifier: 't_uint256',
                      typeString: 'uint256'
                    }
                  },
                  id: 246,
                  nodeType: 'ExpressionStatement',
                  src: '1319:47:1'
                }
              ]
            },
            documentation: null,
            id: 248,
            implemented: true,
            kind: 'function',
            modifiers: [
              {
                arguments: [
                  {
                    argumentTypes: null,
                    id: 205,
                    name: 'recipient',
                    nodeType: 'Identifier',
                    overloadedDeclarations: [],
                    referencedDeclaration: 200,
                    src: '1097:9:1',
                    typeDescriptions: {
                      typeIdentifier: 't_address',
                      typeString: 'address'
                    }
                  }
                ],
                id: 206,
                modifierName: {
                  argumentTypes: null,
                  id: 204,
                  name: 'notNull',
                  nodeType: 'Identifier',
                  overloadedDeclarations: [],
                  referencedDeclaration: 95,
                  src: '1089:7:1',
                  typeDescriptions: {
                    typeIdentifier: 't_modifier$_t_address_$',
                    typeString: 'modifier (address)'
                  }
                },
                nodeType: 'ModifierInvocation',
                src: '1089:18:1'
              }
            ],
            name: 'transfer',
            nodeType: 'FunctionDefinition',
            parameters: {
              id: 203,
              nodeType: 'ParameterList',
              parameters: [
                {
                  constant: false,
                  id: 200,
                  name: 'recipient',
                  nodeType: 'VariableDeclaration',
                  scope: 248,
                  src: '1048:17:1',
                  stateVariable: false,
                  storageLocation: 'default',
                  typeDescriptions: {
                    typeIdentifier: 't_address',
                    typeString: 'address'
                  },
                  typeName: {
                    id: 199,
                    name: 'address',
                    nodeType: 'ElementaryTypeName',
                    src: '1048:7:1',
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
                  id: 202,
                  name: 'amount',
                  nodeType: 'VariableDeclaration',
                  scope: 248,
                  src: '1067:11:1',
                  stateVariable: false,
                  storageLocation: 'default',
                  typeDescriptions: {
                    typeIdentifier: 't_uint256',
                    typeString: 'uint256'
                  },
                  typeName: {
                    id: 201,
                    name: 'uint',
                    nodeType: 'ElementaryTypeName',
                    src: '1067:4:1',
                    typeDescriptions: {
                      typeIdentifier: 't_uint256',
                      typeString: 'uint256'
                    }
                  },
                  value: null,
                  visibility: 'internal'
                }
              ],
              src: '1047:32:1'
            },
            returnParameters: {
              id: 207,
              nodeType: 'ParameterList',
              parameters: [],
              src: '1107:0:1'
            },
            scope: 249,
            src: '1030:342:1',
            stateMutability: 'nonpayable',
            superFunction: null,
            visibility: 'external'
          }
        ],
        scope: 250,
        src: '25:1350:1'
      }
    ],
    src: '0:1375:1'
  },
  compiler: {
    name: 'solc',
    version: '0.5.0+commit.1d4f565a.Emscripten.clang'
  },
  networks: {
    '4': {
      events: {},
      links: {},
      address: '0x274b3d251C78f9199C950E21df2BD459694d880b',
      transactionHash:
        '0x35f71401297b2da77b8f944f258e24b794f16cb38c2a71b3aa0f3f6920f9942c'
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
  updatedAt: '2019-07-20T23:42:36.566Z',
  devdoc: {
    methods: {}
  },
  userdoc: {
    methods: {}
  }
};
