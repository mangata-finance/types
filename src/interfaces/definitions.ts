export default {
  types: {
    ShufflingSeed: {
      seed: "H256",
      proof: "H512"
    },
    Header: {
      parentHash: "Hash",
      number: "Compact<BlockNumber>",
      stateRoot: "Hash",
      extrinsicsRoot: "Hash",
      digest: "Digest",
      seed: "ShufflingSeed",
      count: "BlockNumber"
    },
    XYKRpcResult: {
      price: "Balance"
    },
    RPCAmountsResult: {
      firstAssetAmount: "Balance",
      secondAssetAmount: "Balance"
    },
    VestingInfo: {
      locked: "Balance",
      perBlock: "Balance",
      startingBlock: "BlockNumber"
    },
    TokenId: "u32",
    VestingInfosWithLockedAt: {
      vestingInfosWithLockedAt:
        "Vec<(VestingInfo<Balance, BlockNumber>, Balance)>"
    }
  }
};
