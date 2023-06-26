var __defProp = Object.defineProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};

// src/interfaces/definitions.ts
var definitions_exports = {};
__export(definitions_exports, {
  default: () => definitions_default
});
var definitions_default = {
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
      vestingInfosWithLockedAt: "Vec<(VestingInfo<Balance, BlockNumber>, Balance)>"
    }
  }
};

// src/interfaces/augment-types.ts
import "@polkadot/types/types/registry";

// src/index.ts
var mTypes = Object.values(definitions_exports).reduce(
  (res, { types }) => ({
    ...res,
    ...types
  }),
  {}
);
var mRpc = {
  xyk: {
    calculate_buy_price: {
      description: "",
      params: [
        {
          name: "input_reserve",
          type: "Balance"
        },
        {
          name: "output_reserve",
          type: "Balance"
        },
        {
          name: "sell_amount",
          type: "Balance"
        }
      ],
      type: "XYKRpcResult<Balance>"
    },
    calculate_sell_price: {
      description: "",
      params: [
        {
          name: "input_reserve",
          type: "Balance"
        },
        {
          name: "output_reserve",
          type: "Balance"
        },
        {
          name: "sell_amount",
          type: "Balance"
        }
      ],
      type: "XYKRpcResult<Balance>"
    },
    get_burn_amount: {
      description: "",
      params: [
        {
          name: "first_asset_id",
          type: "TokenId"
        },
        {
          name: "second_asset_id",
          type: "TokenId"
        },
        {
          name: "liquidity_asset_amount",
          type: "Balance"
        }
      ],
      type: "RPCAmountsResult<Balance>"
    },
    calculate_sell_price_id: {
      description: "",
      params: [
        {
          name: "sold_token_id",
          type: "TokenId"
        },
        {
          name: "bought_token_id",
          type: "TokenId"
        },
        {
          name: "sell_amount",
          type: "Balance"
        }
      ],
      type: "XYKRpcResult<Balance>"
    },
    calculate_buy_price_id: {
      description: "",
      params: [
        {
          name: "sold_token_id",
          type: "TokenId"
        },
        {
          name: "bought_token_id",
          type: "TokenId"
        },
        {
          name: "buy_amount",
          type: "Balance"
        }
      ],
      type: "XYKRpcResult<Balance>"
    },
    calculate_rewards_amount: {
      description: "",
      params: [
        {
          name: "user",
          type: "AccountId"
        },
        {
          name: "liquidity_asset_id",
          type: "TokenId"
        }
      ],
      type: "XYKRpcResult<Balance>"
    },
    calculate_balanced_sell_amount: {
      description: "",
      params: [
        {
          name: "total_amount",
          type: "Balance"
        },
        {
          name: "reserve_amount",
          type: "Balance"
        }
      ],
      type: "XYKRpcResult<Balance>"
    },
    get_max_instant_unreserve_amount: {
      description: "",
      params: [
        {
          name: "user",
          type: "AccountId"
        },
        {
          name: "liquidity_asset_id",
          type: "TokenId"
        }
      ],
      type: "Balance"
    },
    get_max_instant_burn_amount: {
      description: "",
      params: [
        {
          name: "user",
          type: "AccountId"
        },
        {
          name: "liquidity_asset_id",
          type: "TokenId"
        }
      ],
      type: "Balance"
    },
    get_vesting_locked_at: {
      description: "",
      params: [
        {
          name: "who",
          type: "AccountId"
        },
        {
          name: "token_id",
          type: "TokenId"
        }
      ],
      type: "VestingInfosWithLockedAt<Balance, BlockNumber>"
    },
    is_sell_asset_lock_free: {
      description: "",
      params: [
        {
          name: "path",
          type: "Vec<TokendId>"
        },
        {
          name: "input_amount",
          type: "Balance"
        }
      ],
      type: "RpcResult<Option<bool>>"
    },
    is_buy_asset_lock_free: {
      description: "",
      params: [
        {
          name: "path",
          type: "Vec<TokendId>"
        },
        {
          name: "input_amount",
          type: "Balance"
        }
      ],
      type: "RpcResult<Option<bool>>"
    }
  }
};
var typesBundleForPolkadotApps = {
  types: [
    {
      minmax: [0, void 0],
      types: mTypes
    }
  ],
  rpc: mRpc
};
var defaultOptions = {
  types: mTypes,
  rpc: mRpc
};
var options = ({
  types = {},
  rpc = {},
  ...otherOptions
} = {}) => ({
  types: {
    ...mTypes,
    ...types
  },
  rpc: {
    ...mRpc,
    ...rpc
  },
  ...otherOptions
});
export {
  defaultOptions,
  mRpc,
  mTypes,
  options,
  typesBundleForPolkadotApps
};
