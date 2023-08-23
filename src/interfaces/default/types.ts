// Auto-generated via `yarn polkadot-types-from-defs`, do not edit
/* eslint-disable */

import type { Compact, Enum, Struct, U256, Vec, u32, u64 } from '@polkadot/types-codec';
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

/** @name NumberOrHex */
export interface NumberOrHex extends Enum {
  readonly isNumber: boolean;
  readonly asNumber: u64;
  readonly isHex: boolean;
  readonly asHex: U256;
  readonly type: 'Number' | 'Hex';
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

export type PHANTOM_DEFAULT = 'default';
