// src/index.ts
import { mTypes, mRpc } from "@mangata-finance/type-definitions";

// src/interfaces/augment-types.ts
import "@polkadot/types/types/registry";

// src/interfaces/types-lookup.ts
import "@polkadot/types/lookup";

// src/index.ts
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
  options
};
