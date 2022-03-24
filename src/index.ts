import {
  OverrideBundleDefinition,
  DefinitionRpc,
  DefinitionRpcSub
} from "@polkadot/types/types";
import type { RegistryTypes } from "@polkadot/types-codec/types";

import { typesFromDefinitions } from "./utils/typesFromDefinitions";
import * as definitions from "./interfaces/definitions";
import jsonrpc from "./rpc";

import "./interfaces/augment-api";
import "./interfaces/augment-api-consts";
import "./interfaces/augment-api-query";
import "./interfaces/augment-api-rpc";
import "./interfaces/augment-api-tx";
import "./interfaces/augment-types";

export const types: RegistryTypes = typesFromDefinitions(definitions);
export const rpc: Record<
  string,
  Record<string, DefinitionRpc | DefinitionRpcSub>
> = jsonrpc;

export const typesBundleForPolkadotApps: OverrideBundleDefinition = {
  types: [
    {
      minmax: [0, undefined],
      types
    }
  ],
  rpc
};
