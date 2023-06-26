import { OverrideBundleDefinition } from "@polkadot/types/types";
import { ApiOptions } from "@polkadot/api/types";

import * as definitions from "./interfaces/definitions";

import "./interfaces/augment-api";
import "./interfaces/augment-api-consts";
import "./interfaces/augment-api-errors";
import "./interfaces/augment-api-events";
import "./interfaces/augment-api-query";
import "./interfaces/augment-api-rpc";
import "./interfaces/augment-api-tx";
import "./interfaces/augment-types";
import "./interfaces/augment-api-runtime";

export const mTypes = Object.values(definitions).reduce(
  (res: Record<string, any>, { types }): Record<string, any> => ({
    ...res,
    ...types
  }),
  {}
);

export const mRpc = {
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

export const typesBundleForPolkadotApps: OverrideBundleDefinition = {
  types: [
    {
      minmax: [0, undefined],
      types: mTypes
    }
  ],
  rpc: mRpc
};

export const defaultOptions: ApiOptions = {
  types: mTypes,
  rpc: mRpc
};

export const options = ({
  types = {},
  rpc = {},
  ...otherOptions
}: ApiOptions = {}): ApiOptions => ({
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
