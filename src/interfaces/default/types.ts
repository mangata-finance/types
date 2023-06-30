// Auto-generated via `yarn polkadot-types-from-defs`, do not edit
/* eslint-disable */

import type { Compact, Struct, Vec, u32 } from '@polkadot/types-codec';
import type { ITuple } from '@polkadot/types-codec/types';
import type { Balance, BlockNumber, Digest, H256, H512, Hash } from '@polkadot/types/interfaces/runtime';

/** @name Header */
export interface Header extends Struct {
  readonly parentHash: Hash;
  readonly number: Compact<BlockNumber>;
  readonly stateRoot: Hash;
  readonly extrinsicsRoot: Hash;
  readonly digest: Digest;
  readonly seed: ShufflingSeed;
  readonly count: BlockNumber;
}

/** @name RPCAmountsResult */
export interface RPCAmountsResult extends Struct {
  readonly firstAssetAmount: Balance;
  readonly secondAssetAmount: Balance;
}

/** @name ShufflingSeed */
export interface ShufflingSeed extends Struct {
  readonly seed: H256;
  readonly proof: H512;
}

/** @name TokenId */
export interface TokenId extends u32 {}

/** @name VestingInfo */
export interface VestingInfo extends Struct {
  readonly locked: Balance;
  readonly perBlock: Balance;
  readonly startingBlock: BlockNumber;
}

/** @name VestingInfosWithLockedAt */
export interface VestingInfosWithLockedAt extends Struct {
  readonly vestingInfosWithLockedAt: Vec<ITuple<[VestingInfo, Balance]>>;
}

/** @name XYKRpcResult */
export interface XYKRpcResult extends Struct {
  readonly price: Balance;
}

export type PHANTOM_DEFAULT = 'default';