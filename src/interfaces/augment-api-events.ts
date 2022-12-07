// Auto-generated via `yarn polkadot-types-from-chain`, do not edit
/* eslint-disable */

// import type lookup before we augment - in some environments
// this is required to allow for ambient/previous definitions
import '@polkadot/api-base/types/events';

import type { ApiTypes, AugmentedEvent } from '@polkadot/api-base/types';
import type { Null, Option, Result, U8aFixed, bool, u128, u32, u64, u8 } from '@polkadot/types-codec';
import type { AccountId32, H256, Perbill, Weight } from '@polkadot/types/interfaces/runtime';
import type { FrameSupportTokensMiscBalanceStatus, FrameSupportWeightsDispatchInfo, OrmlTraitsAssetRegistryAssetMetadata, PalletIssuanceIssuanceInfo, PalletIssuanceTgeInfo, ParachainStakingCandidateBondRequest, ParachainStakingDelegationRequest, ParachainStakingDelegatorAdded, SpRuntimeDispatchError, XcmV1MultiAsset, XcmV1MultiLocation, XcmV1MultiassetMultiAssets, XcmV2Response, XcmV2TraitsError, XcmV2TraitsOutcome, XcmV2Xcm, XcmVersionedMultiAssets, XcmVersionedMultiLocation } from '@polkadot/types/lookup';

export type __AugmentedEvent<ApiType extends ApiTypes> = AugmentedEvent<ApiType>;

declare module '@polkadot/api-base/types/events' {
  interface AugmentedEvents<ApiType extends ApiTypes> {
    assetRegistry: {
      RegisteredAsset: AugmentedEvent<ApiType, [assetId: u32, metadata: OrmlTraitsAssetRegistryAssetMetadata], { assetId: u32, metadata: OrmlTraitsAssetRegistryAssetMetadata }>;
      UpdatedAsset: AugmentedEvent<ApiType, [assetId: u32, metadata: OrmlTraitsAssetRegistryAssetMetadata], { assetId: u32, metadata: OrmlTraitsAssetRegistryAssetMetadata }>;
      /**
       * Generic event
       **/
      [key: string]: AugmentedEvent<ApiType>;
    };
    bootstrap: {
      /**
       * account whitelisted
       **/
      AccountsWhitelisted: AugmentedEvent<ApiType, []>;
      /**
       * finalization process finished
       **/
      BootstrapFinalized: AugmentedEvent<ApiType, []>;
      /**
       * finalization process tarted
       **/
      BootstrapParitallyFinalized: AugmentedEvent<ApiType, []>;
      /**
       * Funds provisioned
       **/
      Provisioned: AugmentedEvent<ApiType, [u32, u128]>;
      /**
       * Rewards claimed
       **/
      RewardsClaimed: AugmentedEvent<ApiType, [u32, u128]>;
      /**
       * The activation of the rewards liquidity tokens failed
       **/
      RewardsLiquidityAcitvationFailed: AugmentedEvent<ApiType, [AccountId32, u32, u128]>;
      /**
       * Funds provisioned using vested tokens
       **/
      VestedProvisioned: AugmentedEvent<ApiType, [u32, u128]>;
      /**
       * Generic event
       **/
      [key: string]: AugmentedEvent<ApiType>;
    };
    council: {
      /**
       * A motion was approved by the required threshold.
       **/
      Approved: AugmentedEvent<ApiType, [proposalHash: H256], { proposalHash: H256 }>;
      /**
       * A proposal was closed because its threshold was reached or after its duration was up.
       **/
      Closed: AugmentedEvent<ApiType, [proposalHash: H256, yes: u32, no: u32], { proposalHash: H256, yes: u32, no: u32 }>;
      /**
       * A motion was not approved by the required threshold.
       **/
      Disapproved: AugmentedEvent<ApiType, [proposalHash: H256], { proposalHash: H256 }>;
      /**
       * A motion was executed; result will be `Ok` if it returned without error.
       **/
      Executed: AugmentedEvent<ApiType, [proposalHash: H256, result: Result<Null, SpRuntimeDispatchError>], { proposalHash: H256, result: Result<Null, SpRuntimeDispatchError> }>;
      /**
       * A single member did some action; result will be `Ok` if it returned without error.
       **/
      MemberExecuted: AugmentedEvent<ApiType, [proposalHash: H256, result: Result<Null, SpRuntimeDispatchError>], { proposalHash: H256, result: Result<Null, SpRuntimeDispatchError> }>;
      /**
       * A motion (given hash) has been proposed (by given account) with a threshold (given
       * `MemberCount`).
       **/
      Proposed: AugmentedEvent<ApiType, [account: AccountId32, proposalIndex: u32, proposalHash: H256, threshold: u32], { account: AccountId32, proposalIndex: u32, proposalHash: H256, threshold: u32 }>;
      /**
       * A motion (given hash) has been voted on by given account, leaving
       * a tally (yes votes and no votes given respectively as `MemberCount`).
       **/
      Voted: AugmentedEvent<ApiType, [account: AccountId32, proposalHash: H256, voted: bool, yes: u32, no: u32], { account: AccountId32, proposalHash: H256, voted: bool, yes: u32, no: u32 }>;
      /**
       * Generic event
       **/
      [key: string]: AugmentedEvent<ApiType>;
    };
    crowdloan: {
      /**
       * When initializing the reward vec an already initialized account was found
       **/
      InitializedAccountWithNotEnoughContribution: AugmentedEvent<ApiType, [AccountId32, Option<AccountId32>, u128]>;
      /**
       * When initializing the reward vec an already initialized account was found
       **/
      InitializedAlreadyInitializedAccount: AugmentedEvent<ApiType, [AccountId32, Option<AccountId32>, u128]>;
      /**
       * The initial payment of InitializationPayment % was paid
       **/
      InitialPaymentMade: AugmentedEvent<ApiType, [AccountId32, u128]>;
      /**
       * Someone has proven they made a contribution and associated a native identity with it.
       * Data is the relay account,  native account and the total amount of _rewards_ that will be paid
       **/
      NativeIdentityAssociated: AugmentedEvent<ApiType, [AccountId32, AccountId32, u128]>;
      /**
       * A contributor has updated the reward address.
       **/
      RewardAddressUpdated: AugmentedEvent<ApiType, [AccountId32, AccountId32]>;
      /**
       * A contributor has claimed some rewards.
       * Data is the account getting paid and the amount of rewards paid.
       **/
      RewardsPaid: AugmentedEvent<ApiType, [AccountId32, u128]>;
      /**
       * Generic event
       **/
      [key: string]: AugmentedEvent<ApiType>;
    };
    cumulusXcm: {
      /**
       * Downward message executed with the given outcome.
       * \[ id, outcome \]
       **/
      ExecutedDownward: AugmentedEvent<ApiType, [U8aFixed, XcmV2TraitsOutcome]>;
      /**
       * Downward message is invalid XCM.
       * \[ id \]
       **/
      InvalidFormat: AugmentedEvent<ApiType, [U8aFixed]>;
      /**
       * Downward message is unsupported version of XCM.
       * \[ id \]
       **/
      UnsupportedVersion: AugmentedEvent<ApiType, [U8aFixed]>;
      /**
       * Generic event
       **/
      [key: string]: AugmentedEvent<ApiType>;
    };
    dmpQueue: {
      /**
       * Downward message executed with the given outcome.
       **/
      ExecutedDownward: AugmentedEvent<ApiType, [messageId: U8aFixed, outcome: XcmV2TraitsOutcome], { messageId: U8aFixed, outcome: XcmV2TraitsOutcome }>;
      /**
       * Downward message is invalid XCM.
       **/
      InvalidFormat: AugmentedEvent<ApiType, [messageId: U8aFixed], { messageId: U8aFixed }>;
      /**
       * Downward message is overweight and was placed in the overweight queue.
       **/
      OverweightEnqueued: AugmentedEvent<ApiType, [messageId: U8aFixed, overweightIndex: u64, requiredWeight: Weight], { messageId: U8aFixed, overweightIndex: u64, requiredWeight: Weight }>;
      /**
       * Downward message from the overweight queue was executed.
       **/
      OverweightServiced: AugmentedEvent<ApiType, [overweightIndex: u64, weightUsed: Weight], { overweightIndex: u64, weightUsed: Weight }>;
      /**
       * Downward message is unsupported version of XCM.
       **/
      UnsupportedVersion: AugmentedEvent<ApiType, [messageId: U8aFixed], { messageId: U8aFixed }>;
      /**
       * The weight limit for handling downward messages was reached.
       **/
      WeightExhausted: AugmentedEvent<ApiType, [messageId: U8aFixed, remainingWeight: Weight, requiredWeight: Weight], { messageId: U8aFixed, remainingWeight: Weight, requiredWeight: Weight }>;
      /**
       * Generic event
       **/
      [key: string]: AugmentedEvent<ApiType>;
    };
    issuance: {
      /**
       * Issuance configuration has been finalized
       **/
      IssuanceConfigInitialized: AugmentedEvent<ApiType, [PalletIssuanceIssuanceInfo]>;
      /**
       * Issuance for upcoming session issued
       **/
      SessionIssuanceIssued: AugmentedEvent<ApiType, [u32, u128, u128]>;
      /**
       * Issuance for upcoming session calculated and recorded
       **/
      SessionIssuanceRecorded: AugmentedEvent<ApiType, [u32, u128, u128]>;
      /**
       * TGE has been finalized
       **/
      TGEFinalized: AugmentedEvent<ApiType, []>;
      /**
       * A TGE instance has failed
       **/
      TGEInstanceFailed: AugmentedEvent<ApiType, [PalletIssuanceTgeInfo]>;
      /**
       * A TGE instance has succeeded
       **/
      TGEInstanceSucceeded: AugmentedEvent<ApiType, [PalletIssuanceTgeInfo]>;
      /**
       * Generic event
       **/
      [key: string]: AugmentedEvent<ApiType>;
    };
    multiPurposeLiquidity: {
      TokensRelockedFromReserve: AugmentedEvent<ApiType, [AccountId32, u32, u128, u128]>;
      VestingTokensReserved: AugmentedEvent<ApiType, [AccountId32, u32, u128]>;
      /**
       * Generic event
       **/
      [key: string]: AugmentedEvent<ApiType>;
    };
    ormlXcm: {
      /**
       * XCM message sent. \[to, message\]
       **/
      Sent: AugmentedEvent<ApiType, [to: XcmV1MultiLocation, message: XcmV2Xcm], { to: XcmV1MultiLocation, message: XcmV2Xcm }>;
      /**
       * Generic event
       **/
      [key: string]: AugmentedEvent<ApiType>;
    };
    parachainStaking: {
      /**
       * Candidate, Cancelled Request
       **/
      CancelledCandidateBondChange: AugmentedEvent<ApiType, [AccountId32, ParachainStakingCandidateBondRequest]>;
      /**
       * Candidate
       **/
      CancelledCandidateExit: AugmentedEvent<ApiType, [AccountId32]>;
      /**
       * Delegator, Cancelled Request
       **/
      CancelledDelegationRequest: AugmentedEvent<ApiType, [AccountId32, ParachainStakingDelegationRequest]>;
      /**
       * Round Online, Candidate
       **/
      CandidateBackOnline: AugmentedEvent<ApiType, [u32, AccountId32]>;
      /**
       * Candidate, Amount, New Bond
       **/
      CandidateBondedLess: AugmentedEvent<ApiType, [AccountId32, u128, u128]>;
      /**
       * Candidate, Amount, New Bond Total
       **/
      CandidateBondedMore: AugmentedEvent<ApiType, [AccountId32, u128, u128]>;
      /**
       * Candidate, Amount To Decrease, Round at which request can be executed by caller
       **/
      CandidateBondLessRequested: AugmentedEvent<ApiType, [AccountId32, u128, u32]>;
      /**
       * Candidate, Amount To Increase, Round at which request can be executed by caller
       **/
      CandidateBondMoreRequested: AugmentedEvent<ApiType, [AccountId32, u128, u32]>;
      /**
       * Ex-Candidate, Amount Unlocked, New Total Amt Locked
       **/
      CandidateLeft: AugmentedEvent<ApiType, [AccountId32, u128, u128]>;
      /**
       * Round At Which Exit Is Allowed, Candidate, Scheduled Exit
       **/
      CandidateScheduledExit: AugmentedEvent<ApiType, [u32, AccountId32, u32]>;
      /**
       * Round Offline, Candidate
       **/
      CandidateWentOffline: AugmentedEvent<ApiType, [u32, AccountId32]>;
      /**
       * Round, Collator Account, Total Exposed Amount (includes all delegations)
       **/
      CollatorChosen: AugmentedEvent<ApiType, [u32, AccountId32, u128]>;
      /**
       * Set collator commission to this value [old, new]
       **/
      CollatorCommissionSet: AugmentedEvent<ApiType, [Perbill, Perbill]>;
      /**
       * Delegator, Amount Locked, Candidate, Delegator Position with New Total Counted if in Top
       **/
      Delegation: AugmentedEvent<ApiType, [AccountId32, u128, AccountId32, ParachainStakingDelegatorAdded]>;
      DelegationDecreased: AugmentedEvent<ApiType, [AccountId32, AccountId32, u128, bool]>;
      /**
       * Delegator, Candidate, Amount to be decreased, Round at which can be executed
       **/
      DelegationDecreaseScheduled: AugmentedEvent<ApiType, [AccountId32, AccountId32, u128, u32]>;
      DelegationIncreased: AugmentedEvent<ApiType, [AccountId32, AccountId32, u128, bool]>;
      /**
       * Delegator, Candidate, Amount to be increased, Round at which can be executed
       **/
      DelegationIncreaseScheduled: AugmentedEvent<ApiType, [AccountId32, AccountId32, u128, u32]>;
      /**
       * Round, Delegator, Candidate, Scheduled Exit
       **/
      DelegationRevocationScheduled: AugmentedEvent<ApiType, [u32, AccountId32, AccountId32, u32]>;
      /**
       * Delegator, Candidate, Amount Unstaked
       **/
      DelegationRevoked: AugmentedEvent<ApiType, [AccountId32, AccountId32, u128]>;
      /**
       * Delegator, Collator, Due reward (as per counted delegation for collator)
       **/
      DelegatorDueReward: AugmentedEvent<ApiType, [AccountId32, AccountId32, u128]>;
      /**
       * Delegator
       **/
      DelegatorExitCancelled: AugmentedEvent<ApiType, [AccountId32]>;
      /**
       * Round, Delegator, Scheduled Exit
       **/
      DelegatorExitScheduled: AugmentedEvent<ApiType, [u32, AccountId32, u32]>;
      /**
       * Delegator, Amount Unstaked
       **/
      DelegatorLeft: AugmentedEvent<ApiType, [AccountId32, u128]>;
      /**
       * Delegator, Candidate, Amount Unstaked, New Total Amt Staked for Candidate
       **/
      DelegatorLeftCandidate: AugmentedEvent<ApiType, [AccountId32, AccountId32, u128, u128]>;
      /**
       * Account, Amount Locked, New Total Amt Locked
       **/
      JoinedCollatorCandidates: AugmentedEvent<ApiType, [AccountId32, u128, u128]>;
      /**
       * Starting Block, Round, Number of Collators Selected, Total Balance
       **/
      NewRound: AugmentedEvent<ApiType, [u32, u32, u32, u128]>;
      /**
       * Paid the account (delegator or collator) the balance as liquid rewards
       **/
      Rewarded: AugmentedEvent<ApiType, [AccountId32, u128]>;
      /**
       * Staking expectations set
       **/
      StakeExpectationsSet: AugmentedEvent<ApiType, [u128, u128, u128]>;
      /**
       * Set total selected candidates to this value [old, new]
       **/
      TotalSelectedSet: AugmentedEvent<ApiType, [u32, u32]>;
      /**
       * Generic event
       **/
      [key: string]: AugmentedEvent<ApiType>;
    };
    parachainSystem: {
      /**
       * Downward messages were processed using the given weight.
       **/
      DownwardMessagesProcessed: AugmentedEvent<ApiType, [weightUsed: Weight, dmqHead: H256], { weightUsed: Weight, dmqHead: H256 }>;
      /**
       * Some downward messages have been received and will be processed.
       **/
      DownwardMessagesReceived: AugmentedEvent<ApiType, [count: u32], { count: u32 }>;
      /**
       * An upgrade has been authorized.
       **/
      UpgradeAuthorized: AugmentedEvent<ApiType, [codeHash: H256], { codeHash: H256 }>;
      /**
       * The validation function was applied as of the contained relay chain block number.
       **/
      ValidationFunctionApplied: AugmentedEvent<ApiType, [relayChainBlockNum: u32], { relayChainBlockNum: u32 }>;
      /**
       * The relay-chain aborted the upgrade process.
       **/
      ValidationFunctionDiscarded: AugmentedEvent<ApiType, []>;
      /**
       * The validation function has been scheduled to apply.
       **/
      ValidationFunctionStored: AugmentedEvent<ApiType, []>;
      /**
       * Generic event
       **/
      [key: string]: AugmentedEvent<ApiType>;
    };
    polkadotXcm: {
      /**
       * Some assets have been placed in an asset trap.
       * 
       * \[ hash, origin, assets \]
       **/
      AssetsTrapped: AugmentedEvent<ApiType, [H256, XcmV1MultiLocation, XcmVersionedMultiAssets]>;
      /**
       * Execution of an XCM message was attempted.
       * 
       * \[ outcome \]
       **/
      Attempted: AugmentedEvent<ApiType, [XcmV2TraitsOutcome]>;
      /**
       * Expected query response has been received but the origin location of the response does
       * not match that expected. The query remains registered for a later, valid, response to
       * be received and acted upon.
       * 
       * \[ origin location, id, expected location \]
       **/
      InvalidResponder: AugmentedEvent<ApiType, [XcmV1MultiLocation, u64, Option<XcmV1MultiLocation>]>;
      /**
       * Expected query response has been received but the expected origin location placed in
       * storage by this runtime previously cannot be decoded. The query remains registered.
       * 
       * This is unexpected (since a location placed in storage in a previously executing
       * runtime should be readable prior to query timeout) and dangerous since the possibly
       * valid response will be dropped. Manual governance intervention is probably going to be
       * needed.
       * 
       * \[ origin location, id \]
       **/
      InvalidResponderVersion: AugmentedEvent<ApiType, [XcmV1MultiLocation, u64]>;
      /**
       * Query response has been received and query is removed. The registered notification has
       * been dispatched and executed successfully.
       * 
       * \[ id, pallet index, call index \]
       **/
      Notified: AugmentedEvent<ApiType, [u64, u8, u8]>;
      /**
       * Query response has been received and query is removed. The dispatch was unable to be
       * decoded into a `Call`; this might be due to dispatch function having a signature which
       * is not `(origin, QueryId, Response)`.
       * 
       * \[ id, pallet index, call index \]
       **/
      NotifyDecodeFailed: AugmentedEvent<ApiType, [u64, u8, u8]>;
      /**
       * Query response has been received and query is removed. There was a general error with
       * dispatching the notification call.
       * 
       * \[ id, pallet index, call index \]
       **/
      NotifyDispatchError: AugmentedEvent<ApiType, [u64, u8, u8]>;
      /**
       * Query response has been received and query is removed. The registered notification could
       * not be dispatched because the dispatch weight is greater than the maximum weight
       * originally budgeted by this runtime for the query result.
       * 
       * \[ id, pallet index, call index, actual weight, max budgeted weight \]
       **/
      NotifyOverweight: AugmentedEvent<ApiType, [u64, u8, u8, Weight, Weight]>;
      /**
       * A given location which had a version change subscription was dropped owing to an error
       * migrating the location to our new XCM format.
       * 
       * \[ location, query ID \]
       **/
      NotifyTargetMigrationFail: AugmentedEvent<ApiType, [XcmVersionedMultiLocation, u64]>;
      /**
       * A given location which had a version change subscription was dropped owing to an error
       * sending the notification to it.
       * 
       * \[ location, query ID, error \]
       **/
      NotifyTargetSendFail: AugmentedEvent<ApiType, [XcmV1MultiLocation, u64, XcmV2TraitsError]>;
      /**
       * Query response has been received and is ready for taking with `take_response`. There is
       * no registered notification call.
       * 
       * \[ id, response \]
       **/
      ResponseReady: AugmentedEvent<ApiType, [u64, XcmV2Response]>;
      /**
       * Received query response has been read and removed.
       * 
       * \[ id \]
       **/
      ResponseTaken: AugmentedEvent<ApiType, [u64]>;
      /**
       * A XCM message was sent.
       * 
       * \[ origin, destination, message \]
       **/
      Sent: AugmentedEvent<ApiType, [XcmV1MultiLocation, XcmV1MultiLocation, XcmV2Xcm]>;
      /**
       * The supported version of a location has been changed. This might be through an
       * automatic notification or a manual intervention.
       * 
       * \[ location, XCM version \]
       **/
      SupportedVersionChanged: AugmentedEvent<ApiType, [XcmV1MultiLocation, u32]>;
      /**
       * Query response received which does not match a registered query. This may be because a
       * matching query was never registered, it may be because it is a duplicate response, or
       * because the query timed out.
       * 
       * \[ origin location, id \]
       **/
      UnexpectedResponse: AugmentedEvent<ApiType, [XcmV1MultiLocation, u64]>;
      /**
       * An XCM version change notification message has been attempted to be sent.
       * 
       * \[ destination, result \]
       **/
      VersionChangeNotified: AugmentedEvent<ApiType, [XcmV1MultiLocation, u32]>;
      /**
       * Generic event
       **/
      [key: string]: AugmentedEvent<ApiType>;
    };
    session: {
      /**
       * New session has happened. Note that the argument is the session index, not the
       * block number as the type might suggest.
       **/
      NewSession: AugmentedEvent<ApiType, [sessionIndex: u32], { sessionIndex: u32 }>;
      /**
       * Generic event
       **/
      [key: string]: AugmentedEvent<ApiType>;
    };
    sudo: {
      /**
       * The \[sudoer\] just switched identity; the old key is supplied if one existed.
       **/
      KeyChanged: AugmentedEvent<ApiType, [oldSudoer: Option<AccountId32>], { oldSudoer: Option<AccountId32> }>;
      /**
       * A sudo just took place. \[result\]
       **/
      Sudid: AugmentedEvent<ApiType, [sudoResult: Result<Null, SpRuntimeDispatchError>], { sudoResult: Result<Null, SpRuntimeDispatchError> }>;
      /**
       * A sudo just took place. \[result\]
       **/
      SudoAsDone: AugmentedEvent<ApiType, [sudoResult: Result<Null, SpRuntimeDispatchError>], { sudoResult: Result<Null, SpRuntimeDispatchError> }>;
      /**
       * Generic event
       **/
      [key: string]: AugmentedEvent<ApiType>;
    };
    sudoOrigin: {
      /**
       * A sudo just took place. \[result\]
       **/
      SuOriginDid: AugmentedEvent<ApiType, [Result<Null, SpRuntimeDispatchError>]>;
      /**
       * A sudo just took place. \[result\]
       **/
      SuOriginDoAsDone: AugmentedEvent<ApiType, [Result<Null, SpRuntimeDispatchError>]>;
      /**
       * Generic event
       **/
      [key: string]: AugmentedEvent<ApiType>;
    };
    system: {
      /**
       * `:code` was updated.
       **/
      CodeUpdated: AugmentedEvent<ApiType, []>;
      /**
       * An extrinsic failed.
       **/
      ExtrinsicFailed: AugmentedEvent<ApiType, [dispatchError: SpRuntimeDispatchError, dispatchInfo: FrameSupportWeightsDispatchInfo], { dispatchError: SpRuntimeDispatchError, dispatchInfo: FrameSupportWeightsDispatchInfo }>;
      /**
       * An extrinsic completed successfully.
       **/
      ExtrinsicSuccess: AugmentedEvent<ApiType, [dispatchInfo: FrameSupportWeightsDispatchInfo], { dispatchInfo: FrameSupportWeightsDispatchInfo }>;
      /**
       * An account was reaped.
       **/
      KilledAccount: AugmentedEvent<ApiType, [account: AccountId32], { account: AccountId32 }>;
      /**
       * A new account was created.
       **/
      NewAccount: AugmentedEvent<ApiType, [account: AccountId32], { account: AccountId32 }>;
      /**
       * On on-chain remark happened.
       **/
      Remarked: AugmentedEvent<ApiType, [sender: AccountId32, hash_: H256], { sender: AccountId32, hash_: H256 }>;
      /**
       * Generic event
       **/
      [key: string]: AugmentedEvent<ApiType>;
    };
    tokens: {
      /**
       * A balance was set by root.
       **/
      BalanceSet: AugmentedEvent<ApiType, [currencyId: u32, who: AccountId32, free: u128, reserved: u128], { currencyId: u32, who: AccountId32, free: u128, reserved: u128 }>;
      /**
       * An account was removed whose balance was non-zero but below
       * ExistentialDeposit, resulting in an outright loss.
       **/
      DustLost: AugmentedEvent<ApiType, [currencyId: u32, who: AccountId32, amount: u128], { currencyId: u32, who: AccountId32, amount: u128 }>;
      /**
       * An account was created with some free balance.
       **/
      Endowed: AugmentedEvent<ApiType, [currencyId: u32, who: AccountId32, amount: u128], { currencyId: u32, who: AccountId32, amount: u128 }>;
      /**
       * A token was issued.
       **/
      Issued: AugmentedEvent<ApiType, [u32, AccountId32, u128]>;
      /**
       * A token was minted.
       **/
      Minted: AugmentedEvent<ApiType, [u32, AccountId32, u128]>;
      /**
       * Some reserved balance was repatriated (moved from reserved to
       * another account).
       **/
      RepatriatedReserve: AugmentedEvent<ApiType, [currencyId: u32, from: AccountId32, to: AccountId32, amount: u128, status: FrameSupportTokensMiscBalanceStatus], { currencyId: u32, from: AccountId32, to: AccountId32, amount: u128, status: FrameSupportTokensMiscBalanceStatus }>;
      /**
       * Some balance was reserved (moved from free to reserved).
       **/
      Reserved: AugmentedEvent<ApiType, [currencyId: u32, who: AccountId32, amount: u128], { currencyId: u32, who: AccountId32, amount: u128 }>;
      /**
       * Transfer succeeded.
       **/
      Transfer: AugmentedEvent<ApiType, [currencyId: u32, from: AccountId32, to: AccountId32, amount: u128], { currencyId: u32, from: AccountId32, to: AccountId32, amount: u128 }>;
      /**
       * Some balance was unreserved (moved from reserved to free).
       **/
      Unreserved: AugmentedEvent<ApiType, [currencyId: u32, who: AccountId32, amount: u128], { currencyId: u32, who: AccountId32, amount: u128 }>;
      /**
       * Generic event
       **/
      [key: string]: AugmentedEvent<ApiType>;
    };
    transactionPayment: {
      /**
       * A transaction fee `actual_fee`, of which `tip` was added to the minimum inclusion fee,
       * has been paid by `who`.
       **/
      TransactionFeePaid: AugmentedEvent<ApiType, [who: AccountId32, actualFee: u128, tip: u128], { who: AccountId32, actualFee: u128, tip: u128 }>;
      /**
       * Generic event
       **/
      [key: string]: AugmentedEvent<ApiType>;
    };
    treasury: {
      /**
       * Some funds have been allocated.
       **/
      Awarded: AugmentedEvent<ApiType, [proposalIndex: u32, award: u128, account: AccountId32], { proposalIndex: u32, award: u128, account: AccountId32 }>;
      /**
       * Some of our funds have been burnt.
       **/
      Burnt: AugmentedEvent<ApiType, [burntFunds: u128], { burntFunds: u128 }>;
      /**
       * Some funds have been deposited.
       **/
      Deposit: AugmentedEvent<ApiType, [value: u128], { value: u128 }>;
      /**
       * New proposal.
       **/
      Proposed: AugmentedEvent<ApiType, [proposalIndex: u32], { proposalIndex: u32 }>;
      /**
       * A proposal was rejected; funds were slashed.
       **/
      Rejected: AugmentedEvent<ApiType, [proposalIndex: u32, slashed: u128], { proposalIndex: u32, slashed: u128 }>;
      /**
       * Spending has finished; this is the amount that rolls over until next spend.
       **/
      Rollover: AugmentedEvent<ApiType, [rolloverBalance: u128], { rolloverBalance: u128 }>;
      /**
       * A new spend proposal has been approved.
       **/
      SpendApproved: AugmentedEvent<ApiType, [proposalIndex: u32, amount: u128, beneficiary: AccountId32], { proposalIndex: u32, amount: u128, beneficiary: AccountId32 }>;
      /**
       * We have ended a spend period and will now allocate funds.
       **/
      Spending: AugmentedEvent<ApiType, [budgetRemaining: u128], { budgetRemaining: u128 }>;
      /**
       * Generic event
       **/
      [key: string]: AugmentedEvent<ApiType>;
    };
    unknownTokens: {
      /**
       * Deposit success.
       **/
      Deposited: AugmentedEvent<ApiType, [asset: XcmV1MultiAsset, who: XcmV1MultiLocation], { asset: XcmV1MultiAsset, who: XcmV1MultiLocation }>;
      /**
       * Withdraw success.
       **/
      Withdrawn: AugmentedEvent<ApiType, [asset: XcmV1MultiAsset, who: XcmV1MultiLocation], { asset: XcmV1MultiAsset, who: XcmV1MultiLocation }>;
      /**
       * Generic event
       **/
      [key: string]: AugmentedEvent<ApiType>;
    };
    utility: {
      /**
       * Batch of dispatches completed fully with no error.
       **/
      BatchCompleted: AugmentedEvent<ApiType, []>;
      /**
       * Batch of dispatches completed but has errors.
       **/
      BatchCompletedWithErrors: AugmentedEvent<ApiType, []>;
      /**
       * Batch of dispatches did not complete fully. Index of first failing dispatch given, as
       * well as the error.
       **/
      BatchInterrupted: AugmentedEvent<ApiType, [index: u32, error: SpRuntimeDispatchError], { index: u32, error: SpRuntimeDispatchError }>;
      /**
       * A call was dispatched.
       **/
      DispatchedAs: AugmentedEvent<ApiType, [result: Result<Null, SpRuntimeDispatchError>], { result: Result<Null, SpRuntimeDispatchError> }>;
      /**
       * A single item within a Batch of dispatches has completed with no error.
       **/
      ItemCompleted: AugmentedEvent<ApiType, []>;
      /**
       * A single item within a Batch of dispatches has completed with error.
       **/
      ItemFailed: AugmentedEvent<ApiType, [error: SpRuntimeDispatchError], { error: SpRuntimeDispatchError }>;
      /**
       * Generic event
       **/
      [key: string]: AugmentedEvent<ApiType>;
    };
    vesting: {
      /**
       * An \[account\] has become fully vested.
       **/
      VestingCompleted: AugmentedEvent<ApiType, [AccountId32, u32]>;
      /**
       * The amount vested has been updated. This could indicate a change in funds available.
       * The balance given is the amount which is left unvested (and thus locked).
       * \[account, unvested\]
       **/
      VestingUpdated: AugmentedEvent<ApiType, [AccountId32, u32, u128]>;
      /**
       * Generic event
       **/
      [key: string]: AugmentedEvent<ApiType>;
    };
    xcmpQueue: {
      /**
       * Bad XCM format used.
       **/
      BadFormat: AugmentedEvent<ApiType, [messageHash: Option<H256>], { messageHash: Option<H256> }>;
      /**
       * Bad XCM version used.
       **/
      BadVersion: AugmentedEvent<ApiType, [messageHash: Option<H256>], { messageHash: Option<H256> }>;
      /**
       * Some XCM failed.
       **/
      Fail: AugmentedEvent<ApiType, [messageHash: Option<H256>, error: XcmV2TraitsError, weight: Weight], { messageHash: Option<H256>, error: XcmV2TraitsError, weight: Weight }>;
      /**
       * An XCM exceeded the individual message weight budget.
       **/
      OverweightEnqueued: AugmentedEvent<ApiType, [sender: u32, sentAt: u32, index: u64, required: Weight], { sender: u32, sentAt: u32, index: u64, required: Weight }>;
      /**
       * An XCM from the overweight queue was executed with the given actual weight used.
       **/
      OverweightServiced: AugmentedEvent<ApiType, [index: u64, used: Weight], { index: u64, used: Weight }>;
      /**
       * Some XCM was executed ok.
       **/
      Success: AugmentedEvent<ApiType, [messageHash: Option<H256>, weight: Weight], { messageHash: Option<H256>, weight: Weight }>;
      /**
       * An upward message was sent to the relay chain.
       **/
      UpwardMessageSent: AugmentedEvent<ApiType, [messageHash: Option<H256>], { messageHash: Option<H256> }>;
      /**
       * An HRMP message was sent to a sibling parachain.
       **/
      XcmpMessageSent: AugmentedEvent<ApiType, [messageHash: Option<H256>], { messageHash: Option<H256> }>;
      /**
       * Generic event
       **/
      [key: string]: AugmentedEvent<ApiType>;
    };
    xTokens: {
      /**
       * Transferred `MultiAsset` with fee.
       **/
      TransferredMultiAssets: AugmentedEvent<ApiType, [sender: AccountId32, assets: XcmV1MultiassetMultiAssets, fee: XcmV1MultiAsset, dest: XcmV1MultiLocation], { sender: AccountId32, assets: XcmV1MultiassetMultiAssets, fee: XcmV1MultiAsset, dest: XcmV1MultiLocation }>;
      /**
       * Generic event
       **/
      [key: string]: AugmentedEvent<ApiType>;
    };
    xyk: {
      AssetsSwapped: AugmentedEvent<ApiType, [AccountId32, u32, u128, u32, u128]>;
      LiquidityActivated: AugmentedEvent<ApiType, [AccountId32, u32, u128]>;
      LiquidityBurned: AugmentedEvent<ApiType, [AccountId32, u32, u128, u32, u128, u32, u128]>;
      LiquidityDeactivated: AugmentedEvent<ApiType, [AccountId32, u32, u128]>;
      LiquidityMinted: AugmentedEvent<ApiType, [AccountId32, u32, u128, u32, u128, u32, u128]>;
      PoolCreated: AugmentedEvent<ApiType, [AccountId32, u32, u128, u32, u128]>;
      PoolPromotionUpdated: AugmentedEvent<ApiType, [u32, Option<u8>]>;
      RewardsClaimed: AugmentedEvent<ApiType, [AccountId32, u32, u128]>;
      /**
       * Generic event
       **/
      [key: string]: AugmentedEvent<ApiType>;
    };
  } // AugmentedEvents
} // declare module
