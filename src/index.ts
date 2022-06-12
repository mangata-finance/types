import {
  OverrideBundleDefinition,
  DefinitionRpc,
  DefinitionRpcSub
} from "@polkadot/types/types";
import { ApiOptions } from "@polkadot/api/types";

import { typesFromDefinitions } from "./utils/typesFromDefinitions";
import * as definitions from "./interfaces/definitions";
import jsonrpc from "./rpc";

import "./interfaces/augment-api";
import "./interfaces/augment-api-consts";
import "./interfaces/augment-api-query";
import "./interfaces/augment-api-rpc";
import "./interfaces/augment-api-tx";
import "./interfaces/augment-types";

export const mTypes = typesFromDefinitions(definitions);
export const mRpc: Record<
  string,
  Record<string, DefinitionRpc | DefinitionRpcSub>
> = jsonrpc;

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
