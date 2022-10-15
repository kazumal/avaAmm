/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../common";
import type { AMM, AMMInterface } from "../../contracts/AMM";

const _abi = [
  {
    inputs: [
      {
        internalType: "contract IERC20",
        name: "_tokenX",
        type: "address",
      },
      {
        internalType: "contract IERC20",
        name: "_tokenY",
        type: "address",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    inputs: [],
    name: "PRECISION",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "contract IERC20",
        name: "_inToken",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "_amountIn",
        type: "uint256",
      },
    ],
    name: "getEquivalentToken",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "contract IERC20",
        name: "_outToken",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "_amountOut",
        type: "uint256",
      },
    ],
    name: "getSwapEstimateIn",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "contract IERC20",
        name: "_inToken",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "_amountIn",
        type: "uint256",
      },
    ],
    name: "getSwapEstimateOut",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "contract IERC20",
        name: "_token",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "_share",
        type: "uint256",
      },
    ],
    name: "getWithdrawEstimate",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "contract IERC20",
        name: "_tokenX",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "_amountX",
        type: "uint256",
      },
      {
        internalType: "contract IERC20",
        name: "_tokenY",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "_amountY",
        type: "uint256",
      },
    ],
    name: "provide",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    name: "share",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "contract IERC20",
        name: "_inToken",
        type: "address",
      },
      {
        internalType: "contract IERC20",
        name: "_outToken",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "_amountIn",
        type: "uint256",
      },
    ],
    name: "swap",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "contract IERC20",
        name: "",
        type: "address",
      },
    ],
    name: "totalAmount",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "totalShare",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_share",
        type: "uint256",
      },
    ],
    name: "withdraw",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
];

const _bytecode =
  "0x60806040523480156200001157600080fd5b50604051620026ef380380620026ef83398181016040528101906200003791906200013e565b816000806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555080600160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550505062000185565b600080fd5b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000620000f282620000c5565b9050919050565b60006200010682620000e5565b9050919050565b6200011881620000f9565b81146200012457600080fd5b50565b60008151905062000138816200010d565b92915050565b60008060408385031215620001585762000157620000c0565b5b6000620001688582860162000127565b92505060206200017b8582860162000127565b9150509250929050565b61255a80620001956000396000f3fe608060405234801561001057600080fd5b50600436106100a95760003560e01c806387b292f91161007157806387b292f91461018d578063a37230ae146101bd578063aaf5eb68146101ed578063bfa7d42f1461020b578063d72b9da21461023b578063df791e501461026b576100a9565b8063026c4207146100ae5780631877bb5c146100cc5780632e1a7d4d146100fc5780633279081a1461012d57806349b81b101461015d575b600080fd5b6100b661029b565b6040516100c39190611bca565b60405180910390f35b6100e660048036038101906100e19190611c48565b6102a1565b6040516100f39190611bca565b60405180910390f35b61011660048036038101906101119190611ca1565b6102b9565b604051610124929190611cce565b60405180910390f35b61014760048036038101906101429190611d35565b6106cf565b6040516101549190611bca565b60405180910390f35b61017760048036038101906101729190611d9c565b610d23565b6040516101849190611bca565b60405180910390f35b6101a760048036038101906101a29190611d9c565b610fb4565b6040516101b49190611bca565b60405180910390f35b6101d760048036038101906101d29190611d9c565b611187565b6040516101e49190611bca565b60405180910390f35b6101f5611360565b6040516102029190611bca565b60405180910390f35b61022560048036038101906102209190611d9c565b611367565b6040516102329190611bca565b60405180910390f35b61025560048036038101906102509190611ddc565b61157d565b6040516102629190611bca565b60405180910390f35b61028560048036038101906102809190611e09565b611595565b6040516102929190611bca565b60405180910390f35b60025481565b60036020528060005260406000206000915090505481565b600080600060025411610301576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016102f890611eb9565b60405180910390fd5b60008311610344576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161033b90611f25565b60405180910390fd5b600360003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020548311156103c6576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016103bd90611f91565b60405180910390fd5b60006103f260008054906101000a900473ffffffffffffffffffffffffffffffffffffffff1685610fb4565b90506000610422600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1686610fb4565b905084600360003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008282546104739190611fe0565b92505081905550846002600082825461048c9190611fe0565b9250508190555081600460008060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008282546105039190611fe0565b925050819055508060046000600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600082825461057b9190611fe0565b9250508190555060008054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1663a9059cbb33846040518363ffffffff1660e01b81526004016105dd929190612023565b6020604051808303816000875af11580156105fc573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906106209190612084565b50600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1663a9059cbb33836040518363ffffffff1660e01b815260040161067e929190612023565b6020604051808303816000875af115801561069d573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906106c19190612084565b508181935093505050915091565b6000848360008054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff16148061077a5750600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff16145b6107b9576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016107b0906120fd565b60405180910390fd5b60008054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff1614806108605750600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff16145b61089f576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610896906120fd565b60405180910390fd5b8073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff160361090d576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161090490612169565b60405180910390fd5b60008611610950576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610947906121d5565b60405180910390fd5b60008411610993576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161098a906121d5565b60405180910390fd5b600080600254036109b557620f424060646109ae91906121f5565b9050610ab5565b6000600460008a73ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000205488600254610a0591906121f5565b610a0f9190612266565b90506000600460008973ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000205487600254610a6191906121f5565b610a6b9190612266565b9050808214610aaf576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610aa690612309565b60405180910390fd5b81925050505b60008111610af8576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610aef9061239b565b60405180910390fd5b8773ffffffffffffffffffffffffffffffffffffffff166323b872dd33308a6040518463ffffffff1660e01b8152600401610b35939291906123bb565b6020604051808303816000875af1158015610b54573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610b789190612084565b508573ffffffffffffffffffffffffffffffffffffffff166323b872dd3330886040518463ffffffff1660e01b8152600401610bb6939291906123bb565b6020604051808303816000875af1158015610bd5573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610bf99190612084565b5086600460008a73ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206000828254610c4991906123f2565b9250508190555084600460008873ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206000828254610c9f91906123f2565b925050819055508060026000828254610cb891906123f2565b9250508190555080600360003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206000828254610d0e91906123f2565b92505081905550809350505050949350505050565b60008060025411610d69576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610d6090611eb9565b60405180910390fd5b8260008054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff161480610e115750600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff16145b610e50576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610e47906120fd565b60405180910390fd5b600460008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020548310610ed1576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610ec890612472565b60405180910390fd5b6000610edc85611a21565b9050600084600460008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020546103e8610f2e91906121f5565b610f3891906121f5565b9050600085600460008973ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054610f879190611fe0565b6103e5610f9491906121f5565b905060008183610fa49190612266565b9050809550505050505092915050565b60008060025411610ffa576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610ff190611eb9565b60405180910390fd5b8260008054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff1614806110a25750600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff16145b6110e1576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016110d8906120fd565b60405180910390fd5b600254831115611126576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161111d90612504565b60405180910390fd5b600254600460008673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020548461117491906121f5565b61117e9190612266565b91505092915050565b600080600254116111cd576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016111c490611eb9565b60405180910390fd5b8260008054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff1614806112755750600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff16145b6112b4576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016112ab906120fd565b60405180910390fd5b60006112bf85611a21565b9050600460008673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000205484600460008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000205461134c91906121f5565b6113569190612266565b9250505092915050565b620f424081565b600080600254116113ad576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016113a490611eb9565b60405180910390fd5b8260008054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff1614806114555750600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff16145b611494576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161148b906120fd565b60405180910390fd5b600061149f85611a21565b905060006103e5856114b191906121f5565b90506000600460008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020548261150091906121f5565b90506000826103e8600460008b73ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000205461155291906121f5565b61155c91906123f2565b90506000818361156c9190612266565b905080965050505050505092915050565b60046020528060005260406000206000915090505481565b600080600254116115db576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016115d290611eb9565b60405180910390fd5b838360008054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff1614806116845750600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff16145b6116c3576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016116ba906120fd565b60405180910390fd5b60008054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff16148061176a5750600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff16145b6117a9576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016117a0906120fd565b60405180910390fd5b8073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff1603611817576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161180e90612169565b60405180910390fd5b6000841161185a576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401611851906121d5565b60405180910390fd5b60006118668786611367565b90508673ffffffffffffffffffffffffffffffffffffffff166323b872dd3330886040518463ffffffff1660e01b81526004016118a5939291906123bb565b6020604051808303816000875af11580156118c4573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906118e89190612084565b5084600460008973ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600082825461193891906123f2565b9250508190555080600460008873ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600082825461198e9190611fe0565b925050819055508573ffffffffffffffffffffffffffffffffffffffff1663a9059cbb33836040518363ffffffff1660e01b81526004016119d0929190612023565b6020604051808303816000875af11580156119ef573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190611a139190612084565b508093505050509392505050565b60008160008054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff161480611acb5750600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff16145b611b0a576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401611b01906120fd565b60405180910390fd5b60008054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff1603611b8757600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff169150611bab565b60008054906101000a900473ffffffffffffffffffffffffffffffffffffffff1691505b50919050565b6000819050919050565b611bc481611bb1565b82525050565b6000602082019050611bdf6000830184611bbb565b92915050565b600080fd5b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000611c1582611bea565b9050919050565b611c2581611c0a565b8114611c3057600080fd5b50565b600081359050611c4281611c1c565b92915050565b600060208284031215611c5e57611c5d611be5565b5b6000611c6c84828501611c33565b91505092915050565b611c7e81611bb1565b8114611c8957600080fd5b50565b600081359050611c9b81611c75565b92915050565b600060208284031215611cb757611cb6611be5565b5b6000611cc584828501611c8c565b91505092915050565b6000604082019050611ce36000830185611bbb565b611cf06020830184611bbb565b9392505050565b6000611d0282611c0a565b9050919050565b611d1281611cf7565b8114611d1d57600080fd5b50565b600081359050611d2f81611d09565b92915050565b60008060008060808587031215611d4f57611d4e611be5565b5b6000611d5d87828801611d20565b9450506020611d6e87828801611c8c565b9350506040611d7f87828801611d20565b9250506060611d9087828801611c8c565b91505092959194509250565b60008060408385031215611db357611db2611be5565b5b6000611dc185828601611d20565b9250506020611dd285828601611c8c565b9150509250929050565b600060208284031215611df257611df1611be5565b5b6000611e0084828501611d20565b91505092915050565b600080600060608486031215611e2257611e21611be5565b5b6000611e3086828701611d20565b9350506020611e4186828701611d20565b9250506040611e5286828701611c8c565b9150509250925092565b600082825260208201905092915050565b7f5a65726f204c6971756964697479000000000000000000000000000000000000600082015250565b6000611ea3600e83611e5c565b9150611eae82611e6d565b602082019050919050565b60006020820190508181036000830152611ed281611e96565b9050919050565b7f73686172652063616e6e6f74206265207a65726f210000000000000000000000600082015250565b6000611f0f601583611e5c565b9150611f1a82611ed9565b602082019050919050565b60006020820190508181036000830152611f3e81611f02565b9050919050565b7f496e73756666696369656e742073686172650000000000000000000000000000600082015250565b6000611f7b601283611e5c565b9150611f8682611f45565b602082019050919050565b60006020820190508181036000830152611faa81611f6e565b9050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b6000611feb82611bb1565b9150611ff683611bb1565b925082820390508181111561200e5761200d611fb1565b5b92915050565b61201d81611c0a565b82525050565b60006040820190506120386000830185612014565b6120456020830184611bbb565b9392505050565b60008115159050919050565b6120618161204c565b811461206c57600080fd5b50565b60008151905061207e81612058565b92915050565b60006020828403121561209a57612099611be5565b5b60006120a88482850161206f565b91505092915050565b7f546f6b656e206973206e6f7420696e2074686520706f6f6c0000000000000000600082015250565b60006120e7601883611e5c565b91506120f2826120b1565b602082019050919050565b60006020820190508181036000830152612116816120da565b9050919050565b7f546f6b656e732073686f756c6420626520646966666572656e74210000000000600082015250565b6000612153601b83611e5c565b915061215e8261211d565b602082019050919050565b6000602082019050818103600083015261218281612146565b9050919050565b7f416d6f756e742063616e6e6f74206265207a65726f2100000000000000000000600082015250565b60006121bf601683611e5c565b91506121ca82612189565b602082019050919050565b600060208201905081810360008301526121ee816121b2565b9050919050565b600061220082611bb1565b915061220b83611bb1565b925082820261221981611bb1565b915082820484148315176122305761222f611fb1565b5b5092915050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601260045260246000fd5b600061227182611bb1565b915061227c83611bb1565b92508261228c5761228b612237565b5b828204905092915050565b7f4571756976616c656e742076616c7565206f6620746f6b656e73206e6f74207060008201527f726f76696465642e2e2e00000000000000000000000000000000000000000000602082015250565b60006122f3602a83611e5c565b91506122fe82612297565b604082019050919050565b60006020820190508181036000830152612322816122e6565b9050919050565b7f41737365742076616c7565206c657373207468616e207468726573686f6c642060008201527f666f7220636f6e747269627574696f6e21000000000000000000000000000000602082015250565b6000612385603183611e5c565b915061239082612329565b604082019050919050565b600060208201905081810360008301526123b481612378565b9050919050565b60006060820190506123d06000830186612014565b6123dd6020830185612014565b6123ea6040830184611bbb565b949350505050565b60006123fd82611bb1565b915061240883611bb1565b92508282019050808211156124205761241f611fb1565b5b92915050565b7f496e73756666696369656e7420706f6f6c2062616c616e636500000000000000600082015250565b600061245c601983611e5c565b915061246782612426565b602082019050919050565b6000602082019050818103600083015261248b8161244f565b9050919050565b7f53686172652073686f756c64206265206c657373207468616e20746f74616c5360008201527f6861726500000000000000000000000000000000000000000000000000000000602082015250565b60006124ee602483611e5c565b91506124f982612492565b604082019050919050565b6000602082019050818103600083015261251d816124e1565b905091905056fea26469706673582212201f1b5562cf0bd502178f68f7b170771f8c31e171f9ab7c1061640c4a3c99d70464736f6c63430008110033";

type AMMConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: AMMConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class AMM__factory extends ContractFactory {
  constructor(...args: AMMConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    _tokenX: PromiseOrValue<string>,
    _tokenY: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<AMM> {
    return super.deploy(_tokenX, _tokenY, overrides || {}) as Promise<AMM>;
  }
  override getDeployTransaction(
    _tokenX: PromiseOrValue<string>,
    _tokenY: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(_tokenX, _tokenY, overrides || {});
  }
  override attach(address: string): AMM {
    return super.attach(address) as AMM;
  }
  override connect(signer: Signer): AMM__factory {
    return super.connect(signer) as AMM__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): AMMInterface {
    return new utils.Interface(_abi) as AMMInterface;
  }
  static connect(address: string, signerOrProvider: Signer | Provider): AMM {
    return new Contract(address, _abi, signerOrProvider) as AMM;
  }
}
