const typesFromDefinitions = (definitions) => {
    return Object.values(definitions).reduce((res, { types }) => ({
        ...res,
        ...types
    }), {});
};

var definitions = {
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
        RpcResult: {
            price: "Balance"
        },
        RPCAmountsResult: {
            firstAssetAmount: "Balance",
            secondAssetAmount: "Balance"
        },
        TokenId: "u32",
        RpcRewardsResult: {
            notYetClaimed: "Balance",
            toBeClaimed: "Balance"
        }
    }
};

var definitions$1 = /*#__PURE__*/Object.freeze({
    __proto__: null,
    'default': definitions
});

const jsonrpc = {
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
            type: "RpcResult<Balance>"
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
            type: "RpcResult<Balance>"
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
            type: "RpcResult<Balance>"
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
            type: "RpcResult<Balance>"
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
            type: "RpcRewardsResult<Balance>"
        }
    }
};

const mTypes = typesFromDefinitions(definitions$1);
const mRpc = jsonrpc;
const typesBundleForPolkadotApps = {
    types: [
        {
            minmax: [0, undefined],
            types: mTypes
        }
    ],
    rpc: mRpc
};
const defaultOptions = {
    types: mTypes,
    rpc: mRpc
};
const options = ({ types = {}, rpc = {}, ...otherOptions } = {}) => ({
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

export { defaultOptions, mRpc, mTypes, options, typesBundleForPolkadotApps };
