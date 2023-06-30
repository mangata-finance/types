import { ApiOptions } from "@polkadot/api/types";
import type { RegistryTypes } from "@polkadot/types/types";

import { mTypes, mRpc } from "@mangata-finance/type-definitions";

import "@polkadot/types/lookup";

import "./interfaces/augment-api";
import "./interfaces/augment-api-consts";
import "./interfaces/augment-api-errors";
import "./interfaces/augment-api-events";
import "./interfaces/augment-api-query";
import "./interfaces/augment-api-rpc";
import "./interfaces/augment-api-tx";
import "./interfaces/augment-types";
import "./interfaces/augment-api-runtime";

import * as lookupTypes from "./interfaces/lookup";

const options = ({
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

export { options, lookupTypes };
