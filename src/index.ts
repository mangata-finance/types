import { ApiOptions } from "@polkadot/api/types";
import type { RegistryTypes } from "@polkadot/types/types";
import { mTypes, mRpc } from "@mangata-finance/type-definitions";

import "./interfaces/augment-api";
import "./interfaces/augment-types";
import "./interfaces/types-lookup.js";

import * as lookupTypes from "./interfaces/lookup";

export const options = ({
  types = {},
  rpc = {},
  ...otherOptions
}: ApiOptions = {}): ApiOptions => ({
  types: {
    ...mTypes,
    ...(lookupTypes as unknown as RegistryTypes),
    ...types
  },
  rpc: {
    ...mRpc,
    ...rpc
  },
  ...otherOptions
});
