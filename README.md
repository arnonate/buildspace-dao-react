# buildspace x thirdweb - Build your own DAO with just Javascript

### **Welcome 👋**
To get started with this course, clone this repo and follow these commands:

1. Run `npm install` at the root of your directory
2. Run `npm start` to start the project
3. Start coding!

### **Questions?**
Have some questions make sure you head over to your [buildspace Dashboard](https://app.buildspace.so/projects/COb520aae3-7925-42f4-a5e7-eaf718933766) and link your Discord account so you can get access to helpful channels and your instructor!

## Links

https://besu.hyperledger.org/en/stable/Concepts/NetworkID-And-ChainID/

https://thirdweb.com/

https://thirdweb.com/start

https://app.uniswap.org/#/swap

# Contracts

App Address: `0xE6EB057646F59CE209aFd9cF1b3fA71444c7bdc7`

Bundle Drop: `0xaC9A37439d62bA8B64DFbBA3861D4Ff221Ac4bf3`

Token Module: `0x46A96a66E6c89309b19234327aA839907EbeA814`

Voting Module: `0x2af867d27622a80b4473dFccaAC36686a7772697`

```
bundleDrop metadata: {
  metadata: {
    name: 'TokienDAO Membership',
    description: 'A DAO for fans of Tolkien.',
    image: 'https://cloudflare-ipfs.com/ipfs/bafybeibjkklzhztq7ga6r4qzzuekak7l7ehykg6mucssj7hmftv3iw62aq',
    primary_sale_recipient_address: '0x0000000000000000000000000000000000000000',
    uri: 'ipfs://bafkreicybvgq33dgsveyupjzqieuyxrffgvxcrtfhq4yvscvuu25k4eqle'
  },
  address: '0xaC9A37439d62bA8B64DFbBA3861D4Ff221Ac4bf3',
  type: 11
}
```

ERC1155
```
This standard outlines a smart contract interface that can represent any number of fungible and non-fungible token types. Existing standards such as ERC-20 require deployment of separate contracts per token type. The ERC-721 standard’s token ID is a single non-fungible index and the group of these non-fungibles is deployed as a single contract with settings for the entire collection. In contrast, the ERC-1155 Multi Token Standard allows for each token ID to represent a new configurable token type, which may have its own metadata, supply and other attributes.
```

Because it's ERC-1155 everyone is an owner of the same NFT. This is pretty cool and it's also more gas efficient. Minting an ERC721 costs 96,073 gas. Minting an ERC1155 costs 51,935 gas. Why? Because everyone is sharing the same NFT data. We don't have to copy new data for each user.