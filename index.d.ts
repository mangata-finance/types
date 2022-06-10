import { Observable, IExtrinsic, RegistryTypes, DefinitionRpc, DefinitionRpcSub, OverrideBundleDefinition } from '@polkadot/types/types';
import { ApiOptions } from '@polkadot/api/types';
import { ApiTypes } from '@polkadot/api-base/types';
import { u128, u32, Bytes, U8aFixed, u16, u64, u8, Vec, Option, U256, Result, Null, bool, BTreeMap, Compact, Text, HashMap, U64, Json, BitVec, Bool, i128, I128, i16, I16, i256, I256, i32, I32, i64, I64, i8, I8, Raw, Type, U128, U16, u256, U32, U8, usize, USize } from '@polkadot/types-codec';
import { Codec, ITuple, AnyNumber } from '@polkadot/types-codec/types';
import { AccountId32, Perbill, Percent, Permill, H160, H256, Call, MultiAddress, Hash, SignedBlock, BlockNumber, Header, StorageData, AccountId, Justification, H64, KeyValue, Index, AccountId20, AccountIdOf, AccountIndex, Address, AssetId, Balance, BalanceOf, Block, BlockNumberFor, BlockNumberOf, CallHash, CallHashOf, ChangesTrieConfiguration, ChangesTrieSignal, CodecHash, Consensus, ConsensusEngineId, CrateVersion, Digest, DigestItem, EncodedJustification, ExtrinsicsWeight, Fixed128, Fixed64, FixedI128, FixedI64, FixedU128, FixedU64, H1024, H128, H2048, H32, H512, HeaderPartial, I32F32, IndicesLookupSource, Justifications, KeyTypeId, LockIdentifier, LookupSource, LookupTarget, ModuleId, Moment, MultiSigner, OpaqueCall, Origin, OriginCaller, PalletId, PalletsOrigin, PalletVersion, Pays, Perquintill, PerU16, Phantom, PhantomData, PreRuntime, Releases, RuntimeDbWeight, Seal, SealV0, SignedBlockWithJustification, SignedBlockWithJustifications, Slot, StorageProof, TransactionInfo, TransactionPriority, TransactionStorageProof, U32F32, ValidatorId, ValidatorIdOf, Weight, WeightMultiplier } from '@polkadot/types/interfaces/runtime';
import { FrameSystemLimitsBlockLength, FrameSystemLimitsBlockWeights, FrameSupportWeightsRuntimeDbWeight, SpVersionRuntimeVersion, FrameSupportWeightsWeightToFeeCoefficient, FrameSupportPalletId, XcmV1MultiLocation, PalletAssetsInfoAssetInfo, ArtemisCoreApp, SpRuntimeDispatchError, XcmV2TraitsOutcome, PalletIssuanceIssuanceInfo, PalletIssuanceTgeInfo, XcmV2Xcm, ParachainStakingCandidateBondRequest, ParachainStakingDelegationRequest, ParachainStakingDelegatorAdded, XcmVersionedMultiAssets, XcmVersionedMultiLocation, XcmV2TraitsError, XcmV2Response, FrameSupportWeightsDispatchInfo, FrameSupportTokensMiscBalanceStatus, XcmV1MultiAsset, XcmV1MultiassetMultiAssets, SpConsensusAuraSr25519AppSr25519Public, PalletAuthorshipUncleEntryItem, PalletBootstrapBootstrapPhase, PalletCollectiveVotes, PalletCrowdloanRewardsRewardInfo, CumulusPalletDmpQueueConfigData, CumulusPalletDmpQueuePageIndexData, PalletElectionsPhragmenSeatHolder, PalletElectionsPhragmenVoter, ParachainStakingCollatorSnapshot, ParachainStakingBond, ParachainStakingCollatorCandidate, ParachainStakingDelegator, ParachainStakingRoundInfo, PolkadotPrimitivesV1AbridgedHostConfiguration, PolkadotCorePrimitivesOutboundHrmpMessage, CumulusPalletParachainSystemRelayStateSnapshotMessagingStateSnapshot, PolkadotPrimitivesV1UpgradeRestriction, PolkadotPrimitivesV1PersistedValidationData, PalletXcmVersionMigrationStage, PalletXcmQueryStatus, SpCoreCryptoKeyTypeId, MangataKusamaRuntimeSessionKeys, FrameSystemAccountInfo, FrameSupportWeightsPerDispatchClassU64, SpRuntimeDigest, FrameSystemEventRecord, FrameSystemPhase, FrameSystemLastRuntimeUpgradeInfo, OrmlTokensAccountData, OrmlTokensBalanceLock, PalletTransactionPaymentReleases, PalletTreasuryProposal, PalletVestingMangataReleases, PalletVestingMangataVestingInfo, CumulusPalletXcmpQueueInboundChannelDetails, CumulusPalletXcmpQueueOutboundChannelDetails, CumulusPalletXcmpQueueQueueConfigData, SpRuntimeHeaderVerHeader, ArtemisCoreMessage, SpRuntimeMultiSignature, PalletElectionsPhragmenRenouncing, XcmVersionedXcm, ParachainStakingPairedOrLiquidityToken, CumulusPrimitivesParachainInherentParachainInherentData, XcmV2WeightLimit, MangataKusamaRuntimeOriginCaller, XcmVersionedMultiAsset } from '@polkadot/types/lookup';
import { AugmentedRpc } from '@polkadot/rpc-core/types';
import { StorageKey, Metadata, Data } from '@polkadot/types';
import { ExtrinsicOrHash, ExtrinsicStatus } from '@polkadot/types/interfaces/author';
import { EpochAuthorship, AllowedSlots, BabeAuthorityWeight, BabeBlockWeight, BabeEpochConfiguration, BabeEquivocationProof, BabeWeight, MaybeRandomness, MaybeVrf, NextConfigDescriptor, NextConfigDescriptorV1, Randomness, RawBabePreDigest, RawBabePreDigestCompat, RawBabePreDigestPrimary, RawBabePreDigestPrimaryTo159, RawBabePreDigestSecondaryPlain, RawBabePreDigestSecondaryTo159, RawBabePreDigestSecondaryVRF, RawBabePreDigestTo159, SlotNumber, VrfData, VrfOutput, VrfProof } from '@polkadot/types/interfaces/babe';
import { BeefySignedCommitment, BeefyCommitment, BeefyId, BeefyNextAuthoritySet, BeefyPayload, MmrRootHash, ValidatorSetId } from '@polkadot/types/interfaces/beefy';
import { BlockHash } from '@polkadot/types/interfaces/chain';
import { PrefixedStorageKey } from '@polkadot/types/interfaces/childstate';
import { AuthorityId, RawVRFOutput } from '@polkadot/types/interfaces/consensus';
import { ContractCallRequest, ContractExecResult, InstantiateRequest, ContractInstantiateResult, CodeUploadRequest, CodeUploadResult, AliveContractInfo, CodeHash, CodeSource, CodeUploadResultValue, ContractCallFlags, ContractExecResultErr, ContractExecResultErrModule, ContractExecResultOk, ContractExecResultResult, ContractExecResultSuccessTo255, ContractExecResultSuccessTo260, ContractExecResultTo255, ContractExecResultTo260, ContractExecResultTo267, ContractInfo, ContractInstantiateResultTo267, ContractInstantiateResultTo299, ContractReturnFlags, ContractStorageKey, DeletedContract, ExecReturnValue, Gas, HostFnWeights, HostFnWeightsTo264, InstantiateRequestV1, InstantiateRequestV2, InstantiateReturnValue, InstantiateReturnValueOk, InstantiateReturnValueTo267, InstructionWeights, Limits, LimitsTo264, PrefabWasmModule, RentProjection, Schedule, ScheduleTo212, ScheduleTo258, ScheduleTo264, SeedOf, StorageDeposit, TombstoneContractInfo, TrieId } from '@polkadot/types/interfaces/contracts';
import { CreatedBlock, ImportedAux } from '@polkadot/types/interfaces/engine';
import { EthCallRequest, EthRichBlock, EthFilterChanges, EthLog, EthFilter, EthAccount, EthTransaction, EthReceipt, EthWork, EthTransactionRequest, EthSubKind, EthSubParams, EthSyncStatus, BlockV0, BlockV1, BlockV2, EIP1559Transaction, EIP2930Transaction, EthAccessList, EthAccessListItem, EthAddress, EthBlock, EthBloom, EthereumAccountId, EthereumAddress, EthereumLookupSource, EthereumSignature, EthFilterAddress, EthFilterTopic, EthFilterTopicEntry, EthFilterTopicInner, EthHeader, EthRichHeader, EthStorageProof, EthSubResult, EthSyncInfo, EthTransactionAction, EthTransactionCondition, EthTransactionSignature, EthTransactionStatus, LegacyTransaction, TransactionV0, TransactionV1, TransactionV2 } from '@polkadot/types/interfaces/eth';
import { Extrinsic, AnySignature, EcdsaSignature, Ed25519Signature, Era, ExtrinsicEra, ExtrinsicPayload, ExtrinsicPayloadUnknown, ExtrinsicPayloadV4, ExtrinsicSignature, ExtrinsicSignatureV4, ExtrinsicUnknown, ExtrinsicV4, ImmortalEra, MortalEra, MultiSignature, Signature, SignerPayload, Sr25519Signature } from '@polkadot/types/interfaces/extrinsics';
import { EncodedFinalityProofs, ReportedRoundStates, JustificationNotification, AuthorityIndex, AuthorityList, AuthoritySet, AuthoritySetChange, AuthoritySetChanges, AuthorityWeight, DelayKind, DelayKindBest, ForkTreePendingChange, ForkTreePendingChangeNode, GrandpaCommit, GrandpaEquivocation, GrandpaEquivocationProof, GrandpaEquivocationValue, GrandpaJustification, GrandpaPrecommit, GrandpaPrevote, GrandpaSignedPrecommit, KeyOwnerProof, NextAuthority, PendingChange, PendingPause, PendingResume, Precommits, Prevotes, RoundState, SetId, StoredPendingChange, StoredState } from '@polkadot/types/interfaces/grandpa';
import { MmrLeafProof } from '@polkadot/types/interfaces/mmr';
import { StorageKind } from '@polkadot/types/interfaces/offchain';
import { FeeDetails, RuntimeDispatchInfo, InclusionFee } from '@polkadot/types/interfaces/payment';
import { RpcMethods } from '@polkadot/types/interfaces/rpc';
import { ReadProof, RuntimeVersion, TraceBlockResponse, MigrationStatusResult, ApiId, BlockTrace, BlockTraceEvent, BlockTraceEventData, BlockTraceSpan, KeyValueOption, RuntimeVersionApi, RuntimeVersionPartial, SpecVersion, StorageChangeSet, TraceError } from '@polkadot/types/interfaces/state';
import { ChainType, ApplyExtrinsicResult, Health, NetworkState, NodeRole, PeerInfo, ChainProperties, SyncState, AccountInfo, AccountInfoWithDualRefCount, AccountInfoWithProviders, AccountInfoWithRefCount, AccountInfoWithRefCountU8, AccountInfoWithTripleRefCount, ArithmeticError, BlockLength, BlockWeights, ConsumedWeight, DigestOf, DispatchClass, DispatchError, DispatchErrorModule, DispatchErrorTo198, DispatchInfo, DispatchInfoTo190, DispatchInfoTo244, DispatchOutcome, DispatchResult, DispatchResultOf, DispatchResultTo198, Event, EventId, EventIndex, EventRecord, InvalidTransaction, Key, LastRuntimeUpgradeInfo, NetworkStatePeerset, NetworkStatePeersetInfo, NotConnectedPeer, Peer, PeerEndpoint, PeerEndpointAddr, PeerPing, PerDispatchClassU32, PerDispatchClassWeight, PerDispatchClassWeightsPerClass, Phase, RawOrigin, RefCount, RefCountTo259, SystemOrigin, TokenError, TransactionValidityError, UnknownTransaction, WeightPerClass } from '@polkadot/types/interfaces/system';
import { RPCAmountsResult, RpcResult, RpcRewardsResult, ShufflingSeed, TokenId } from '@mangata-finance/interfaces/default';
import { AssetApproval, AssetApprovalKey, AssetBalance, AssetDestroyWitness, AssetDetails, AssetMetadata, TAssetBalance, TAssetDepositBalance } from '@polkadot/types/interfaces/assets';
import { BlockAttestations, IncludedBlocks, MoreAttestations } from '@polkadot/types/interfaces/attestations';
import { RawAuraPreDigest } from '@polkadot/types/interfaces/aura';
import { UncleEntryItem } from '@polkadot/types/interfaces/authorship';
import { AccountData, BalanceLock, BalanceLockTo212, BalanceStatus, Reasons, ReserveData, ReserveIdentifier, VestingSchedule, WithdrawReasons } from '@polkadot/types/interfaces/balances';
import { BridgedBlockHash, BridgedBlockNumber, BridgedHeader, BridgeMessageId, CallOrigin, ChainId, DeliveredMessages, DispatchFeePayment, InboundLaneData, InboundRelayer, InitializationData, LaneId, MessageData, MessageKey, MessageNonce, MessagesDeliveryProofOf, MessagesProofOf, OperatingMode, OutboundLaneData, OutboundMessageFee, OutboundPayload, Parameter, RelayerId, UnrewardedRelayer, UnrewardedRelayersState } from '@polkadot/types/interfaces/bridges';
import { StatementKind } from '@polkadot/types/interfaces/claims';
import { CollectiveOrigin, MemberCount, ProposalIndex, Votes, VotesTo230 } from '@polkadot/types/interfaces/collective';
import { ContractConstructorSpecLatest, ContractConstructorSpecV0, ContractConstructorSpecV1, ContractConstructorSpecV2, ContractConstructorSpecV3, ContractContractSpecV0, ContractContractSpecV1, ContractContractSpecV2, ContractContractSpecV3, ContractCryptoHasher, ContractDiscriminant, ContractDisplayName, ContractEventParamSpecLatest, ContractEventParamSpecV0, ContractEventParamSpecV2, ContractEventSpecLatest, ContractEventSpecV0, ContractEventSpecV1, ContractEventSpecV2, ContractLayoutArray, ContractLayoutCell, ContractLayoutEnum, ContractLayoutHash, ContractLayoutHashingStrategy, ContractLayoutKey, ContractLayoutStruct, ContractLayoutStructField, ContractMessageParamSpecLatest, ContractMessageParamSpecV0, ContractMessageParamSpecV2, ContractMessageSpecLatest, ContractMessageSpecV0, ContractMessageSpecV1, ContractMessageSpecV2, ContractMetadata, ContractMetadataLatest, ContractMetadataV0, ContractMetadataV1, ContractMetadataV2, ContractMetadataV3, ContractProject, ContractProjectContract, ContractProjectInfo, ContractProjectSource, ContractProjectV0, ContractSelector, ContractStorageLayout, ContractTypeSpec } from '@polkadot/types/interfaces/contractsAbi';
import { FundIndex, FundInfo, LastContribution, TrieIndex } from '@polkadot/types/interfaces/crowdloan';
import { ConfigData, MessageId, OverweightIndex, PageCounter, PageIndexData } from '@polkadot/types/interfaces/cumulus';
import { AccountVote, AccountVoteSplit, AccountVoteStandard, Conviction, Delegations, PreimageStatus, PreimageStatusAvailable, PriorLock, PropIndex, Proposal, ProxyState, ReferendumIndex, ReferendumInfo, ReferendumInfoFinished, ReferendumInfoTo239, ReferendumStatus, Tally, Voting, VotingDelegating, VotingDirect, VotingDirectVote } from '@polkadot/types/interfaces/democracy';
import { ApprovalFlag, DefunctVoter, Renouncing, SetIndex, Vote, VoteIndex, VoterInfo, VoteThreshold } from '@polkadot/types/interfaces/elections';
import { EvmAccount, EvmLog, EvmVicinity, ExitError, ExitFatal, ExitReason, ExitRevert, ExitSucceed } from '@polkadot/types/interfaces/evm';
import { AssetOptions, Owner, PermissionLatest, PermissionsV1, PermissionVersions } from '@polkadot/types/interfaces/genericAsset';
import { ActiveGilt, ActiveGiltsTotal, ActiveIndex, GiltBid } from '@polkadot/types/interfaces/gilt';
import { IdentityFields, IdentityInfo, IdentityInfoAdditional, IdentityInfoTo198, IdentityJudgement, RegistrarIndex, RegistrarInfo, Registration, RegistrationJudgement, RegistrationTo198 } from '@polkadot/types/interfaces/identity';
import { AuthIndex, AuthoritySignature, Heartbeat, HeartbeatTo244, OpaqueMultiaddr, OpaqueNetworkState, OpaquePeerId } from '@polkadot/types/interfaces/imOnline';
import { CallIndex, LotteryConfig } from '@polkadot/types/interfaces/lottery';
import { ErrorMetadataLatest, ErrorMetadataV10, ErrorMetadataV11, ErrorMetadataV12, ErrorMetadataV13, ErrorMetadataV14, ErrorMetadataV9, EventMetadataLatest, EventMetadataV10, EventMetadataV11, EventMetadataV12, EventMetadataV13, EventMetadataV14, EventMetadataV9, ExtrinsicMetadataLatest, ExtrinsicMetadataV11, ExtrinsicMetadataV12, ExtrinsicMetadataV13, ExtrinsicMetadataV14, FunctionArgumentMetadataLatest, FunctionArgumentMetadataV10, FunctionArgumentMetadataV11, FunctionArgumentMetadataV12, FunctionArgumentMetadataV13, FunctionArgumentMetadataV14, FunctionArgumentMetadataV9, FunctionMetadataLatest, FunctionMetadataV10, FunctionMetadataV11, FunctionMetadataV12, FunctionMetadataV13, FunctionMetadataV14, FunctionMetadataV9, MetadataAll, MetadataLatest, MetadataV10, MetadataV11, MetadataV12, MetadataV13, MetadataV14, MetadataV9, ModuleConstantMetadataV10, ModuleConstantMetadataV11, ModuleConstantMetadataV12, ModuleConstantMetadataV13, ModuleConstantMetadataV9, ModuleMetadataV10, ModuleMetadataV11, ModuleMetadataV12, ModuleMetadataV13, ModuleMetadataV9, PalletCallMetadataLatest, PalletCallMetadataV14, PalletConstantMetadataLatest, PalletConstantMetadataV14, PalletErrorMetadataLatest, PalletErrorMetadataV14, PalletEventMetadataLatest, PalletEventMetadataV14, PalletMetadataLatest, PalletMetadataV14, PalletStorageMetadataLatest, PalletStorageMetadataV14, PortableType, PortableTypeV14, SignedExtensionMetadataLatest, SignedExtensionMetadataV14, StorageEntryMetadataLatest, StorageEntryMetadataV10, StorageEntryMetadataV11, StorageEntryMetadataV12, StorageEntryMetadataV13, StorageEntryMetadataV14, StorageEntryMetadataV9, StorageEntryModifierLatest, StorageEntryModifierV10, StorageEntryModifierV11, StorageEntryModifierV12, StorageEntryModifierV13, StorageEntryModifierV14, StorageEntryModifierV9, StorageEntryTypeLatest, StorageEntryTypeV10, StorageEntryTypeV11, StorageEntryTypeV12, StorageEntryTypeV13, StorageEntryTypeV14, StorageEntryTypeV9, StorageHasher, StorageHasherV10, StorageHasherV11, StorageHasherV12, StorageHasherV13, StorageHasherV14, StorageHasherV9, StorageMetadataV10, StorageMetadataV11, StorageMetadataV12, StorageMetadataV13, StorageMetadataV9 } from '@polkadot/types/interfaces/metadata';
import { DeferredOffenceOf, Kind, OffenceDetails, Offender, OpaqueTimeSlot, Reporter, ReportIdOf } from '@polkadot/types/interfaces/offences';
import { AbridgedCandidateReceipt, AbridgedHostConfiguration, AbridgedHrmpChannel, AssignmentId, AssignmentKind, AttestedCandidate, AuctionIndex, AuthorityDiscoveryId, AvailabilityBitfield, AvailabilityBitfieldRecord, BackedCandidate, Bidder, BufferedSessionChange, CandidateCommitments, CandidateDescriptor, CandidateHash, CandidateInfo, CandidatePendingAvailability, CandidateReceipt, CollatorId, CollatorSignature, CommittedCandidateReceipt, CoreAssignment, CoreIndex, CoreOccupied, DisputeLocation, DisputeResult, DisputeState, DisputeStatement, DisputeStatementSet, DoubleVoteReport, DownwardMessage, ExplicitDisputeStatement, GlobalValidationData, GlobalValidationSchedule, GroupIndex, HeadData, HostConfiguration, HrmpChannel, HrmpChannelId, HrmpOpenChannelRequest, InboundDownwardMessage, InboundHrmpMessage, InboundHrmpMessages, IncomingParachain, IncomingParachainDeploy, IncomingParachainFixed, InvalidDisputeStatementKind, LeasePeriod, LeasePeriodOf, LocalValidationData, MessageIngestionType, MessageQueueChain, MessagingStateSnapshot, MessagingStateSnapshotEgressEntry, MultiDisputeStatementSet, NewBidder, OutboundHrmpMessage, ParachainDispatchOrigin, ParachainInherentData, ParachainProposal, ParachainsInherentData, ParaGenesisArgs, ParaId, ParaInfo, ParaLifecycle, ParaPastCodeMeta, ParaScheduling, ParathreadClaim, ParathreadClaimQueue, ParathreadEntry, ParaValidatorIndex, PersistedValidationData, QueuedParathread, RegisteredParachainInfo, RelayBlockNumber, RelayChainBlockNumber, RelayChainHash, RelayHash, Remark, ReplacementTimes, Retriable, Scheduling, ServiceQuality, SessionInfo, SessionInfoValidatorGroup, SignedAvailabilityBitfield, SignedAvailabilityBitfields, SigningContext, SlotRange, SlotRange10, Statement, SubId, SystemInherentData, TransientValidationData, UpgradeGoAhead, UpgradeRestriction, UpwardMessage, ValidationCode, ValidationCodeHash, ValidationData, ValidationDataType, ValidationFunctionParams, ValidatorSignature, ValidDisputeStatementKind, ValidityAttestation, VecInboundHrmpMessage, WinnersData, WinnersData10, WinnersDataTuple, WinnersDataTuple10, WinningData, WinningData10, WinningDataEntry } from '@polkadot/types/interfaces/parachains';
import { Approvals } from '@polkadot/types/interfaces/poll';
import { ProxyAnnouncement, ProxyDefinition, ProxyType } from '@polkadot/types/interfaces/proxy';
import { AccountStatus, AccountValidity } from '@polkadot/types/interfaces/purchase';
import { ActiveRecovery, RecoveryConfig } from '@polkadot/types/interfaces/recovery';
import { Si0Field, Si0LookupTypeId, Si0Path, Si0Type, Si0TypeDef, Si0TypeDefArray, Si0TypeDefBitSequence, Si0TypeDefCompact, Si0TypeDefComposite, Si0TypeDefPhantom, Si0TypeDefPrimitive, Si0TypeDefSequence, Si0TypeDefTuple, Si0TypeDefVariant, Si0TypeParameter, Si0Variant, Si1Field, Si1LookupTypeId, Si1Path, Si1Type, Si1TypeDef, Si1TypeDefArray, Si1TypeDefBitSequence, Si1TypeDefCompact, Si1TypeDefComposite, Si1TypeDefPrimitive, Si1TypeDefSequence, Si1TypeDefTuple, Si1TypeDefVariant, Si1TypeParameter, Si1Variant, SiField, SiLookupTypeId, SiPath, SiType, SiTypeDef, SiTypeDefArray, SiTypeDefBitSequence, SiTypeDefCompact, SiTypeDefComposite, SiTypeDefPrimitive, SiTypeDefSequence, SiTypeDefTuple, SiTypeDefVariant, SiTypeParameter, SiVariant } from '@polkadot/types/interfaces/scaleInfo';
import { Period, Priority, Scheduled, ScheduledTo254, SchedulePeriod, SchedulePriority, TaskAddress } from '@polkadot/types/interfaces/scheduler';
import { BeefyKey, FullIdentification, IdentificationTuple, Keys, MembershipProof, SessionIndex, SessionKeys1, SessionKeys10, SessionKeys10B, SessionKeys2, SessionKeys3, SessionKeys4, SessionKeys5, SessionKeys6, SessionKeys6B, SessionKeys7, SessionKeys7B, SessionKeys8, SessionKeys8B, SessionKeys9, SessionKeys9B, ValidatorCount } from '@polkadot/types/interfaces/session';
import { Bid, BidKind, SocietyJudgement, SocietyVote, StrikeCount, VouchingStatus } from '@polkadot/types/interfaces/society';
import { ActiveEraInfo, CompactAssignments, CompactAssignmentsTo257, CompactAssignmentsTo265, CompactAssignmentsWith16, CompactAssignmentsWith24, CompactScore, CompactScoreCompact, ElectionCompute, ElectionPhase, ElectionResult, ElectionScore, ElectionSize, ElectionStatus, EraIndex, EraPoints, EraRewardPoints, EraRewards, Exposure, ExtendedBalance, Forcing, IndividualExposure, KeyType, MomentOf, Nominations, NominatorIndex, NominatorIndexCompact, OffchainAccuracy, OffchainAccuracyCompact, PhragmenScore, Points, RawSolution, RawSolutionTo265, RawSolutionWith16, RawSolutionWith24, ReadySolution, RewardDestination, RewardPoint, RoundSnapshot, SeatHolder, SignedSubmission, SignedSubmissionOf, SignedSubmissionTo276, SlashingSpans, SlashingSpansTo204, SlashJournalEntry, SolutionOrSnapshotSize, SolutionSupport, SolutionSupports, SpanIndex, SpanRecord, StakingLedger, StakingLedgerTo223, StakingLedgerTo240, SubmissionIndicesOf, Supports, UnappliedSlash, UnappliedSlashOther, UnlockChunk, ValidatorIndex, ValidatorIndexCompact, ValidatorPrefs, ValidatorPrefsTo145, ValidatorPrefsTo196, ValidatorPrefsWithBlocked, ValidatorPrefsWithCommission, Voter, VoteWeight } from '@polkadot/types/interfaces/staking';
import { WeightToFeeCoefficient } from '@polkadot/types/interfaces/support';
import { Bounty, BountyIndex, BountyStatus, BountyStatusActive, BountyStatusCuratorProposed, BountyStatusPendingPayout, OpenTip, OpenTipFinderTo225, OpenTipTip, OpenTipTo225, TreasuryProposal } from '@polkadot/types/interfaces/treasury';
import { Multiplier } from '@polkadot/types/interfaces/txpayment';
import { ClassDetails, ClassId, ClassMetadata, DepositBalance, DepositBalanceOf, DestroyWitness, InstanceDetails, InstanceId, InstanceMetadata } from '@polkadot/types/interfaces/uniques';
import { Multisig, Timepoint } from '@polkadot/types/interfaces/utility';
import { VestingInfo } from '@polkadot/types/interfaces/vesting';
import { AssetInstance, AssetInstanceV0, AssetInstanceV1, AssetInstanceV2, BodyId, BodyPart, DoubleEncodedCall, Fungibility, FungibilityV0, FungibilityV1, FungibilityV2, InboundStatus, InstructionV2, InteriorMultiLocation, Junction, Junctions, JunctionsV1, JunctionsV2, JunctionV0, JunctionV1, JunctionV2, MultiAsset, MultiAssetFilter, MultiAssetFilterV1, MultiAssetFilterV2, MultiAssets, MultiAssetsV1, MultiAssetsV2, MultiAssetV0, MultiAssetV1, MultiAssetV2, MultiLocation, MultiLocationV0, MultiLocationV1, MultiLocationV2, NetworkId, OriginKindV0, OriginKindV1, OriginKindV2, OutboundStatus, Outcome, QueryId, QueryStatus, QueueConfigData, Response, ResponseV0, ResponseV1, ResponseV2, ResponseV2Error, ResponseV2Result, VersionedMultiAsset, VersionedMultiAssets, VersionedMultiLocation, VersionedResponse, VersionedXcm, VersionMigrationStage, WeightLimitV2, WildFungibility, WildFungibilityV0, WildFungibilityV1, WildFungibilityV2, WildMultiAsset, WildMultiAssetV1, WildMultiAssetV2, Xcm, XcmAssetId, XcmError, XcmErrorV0, XcmErrorV1, XcmErrorV2, XcmOrder, XcmOrderV0, XcmOrderV1, XcmOrderV2, XcmOrigin, XcmOriginKind, XcmpMessageFormat, XcmV0, XcmV1, XcmV2, XcmVersion } from '@polkadot/types/interfaces/xcm';

declare module '@polkadot/api-base/types/consts' {
    interface AugmentedConsts<ApiType extends ApiTypes> {
        assetRegistry: {
            treasuryAddress: AccountId32 & AugmentedConst<ApiType>;
            /**
             * Generic const
             **/
            [key: string]: Codec;
        };
        assetsInfo: {
            relayNativeTokensValueScaleFactor: u128 & AugmentedConst<ApiType>;
            /**
             * Generic const
             **/
            [key: string]: Codec;
        };
        authorship: {
            /**
             * The number of blocks back we should accept uncles.
             * This means that we will deal with uncle-parents that are
             * `UncleGenerations + 1` before `now`.
             **/
            uncleGenerations: u32 & AugmentedConst<ApiType>;
            /**
             * Generic const
             **/
            [key: string]: Codec;
        };
        bootstrap: {
            ksmTokenId: u32 & AugmentedConst<ApiType>;
            mgaTokenId: u32 & AugmentedConst<ApiType>;
            /**
             * Generic const
             **/
            [key: string]: Codec;
        };
        crowdloan: {
            /**
             * Percentage to be payed at initialization
             **/
            initializationPayment: Perbill & AugmentedConst<ApiType>;
            maxInitContributors: u32 & AugmentedConst<ApiType>;
            /**
             * MGA token Id
             **/
            nativeTokenId: u32 & AugmentedConst<ApiType>;
            /**
             * A fraction representing the percentage of proofs
             * that need to be presented to change a reward address through the relay keys
             **/
            rewardAddressRelayVoteThreshold: Perbill & AugmentedConst<ApiType>;
            /**
             * Network Identifier to be appended into the signatures for reward address change/association
             * Prevents replay attacks from one network to the other
             **/
            signatureNetworkIdentifier: Bytes & AugmentedConst<ApiType>;
            /**
             * Generic const
             **/
            [key: string]: Codec;
        };
        elections: {
            /**
             * How much should be locked up in order to submit one's candidacy.
             **/
            candidacyBond: u128 & AugmentedConst<ApiType>;
            /**
             * Number of members to elect.
             **/
            desiredMembers: u32 & AugmentedConst<ApiType>;
            /**
             * Number of runners_up to keep.
             **/
            desiredRunnersUp: u32 & AugmentedConst<ApiType>;
            /**
             * Identifier for the elections-phragmen pallet's lock
             **/
            palletId: U8aFixed & AugmentedConst<ApiType>;
            /**
             * How long each seat is kept. This defines the next block number at which an election
             * round will happen. If set to zero, no elections are ever triggered and the module will
             * be in passive mode.
             **/
            termDuration: u32 & AugmentedConst<ApiType>;
            /**
             * Base deposit associated with voting.
             *
             * This should be sensibly high to economically ensure the pallet cannot be attacked by
             * creating a gigantic number of votes.
             **/
            votingBondBase: u128 & AugmentedConst<ApiType>;
            /**
             * The amount of bond that need to be locked for each vote (32 bytes).
             **/
            votingBondFactor: u128 & AugmentedConst<ApiType>;
            /**
             * Generic const
             **/
            [key: string]: Codec;
        };
        issuance: {
            /**
             * Number of blocks per session/round
             **/
            blocksPerRound: u32 & AugmentedConst<ApiType>;
            /**
             * Number of sessions to store issuance history for
             **/
            historyLimit: u32 & AugmentedConst<ApiType>;
            /**
             * The maximum amount of Mangata tokens
             **/
            immediateTGEReleasePercent: Percent & AugmentedConst<ApiType>;
            /**
             * The maximum amount of Mangata tokens
             **/
            issuanceCap: u128 & AugmentedConst<ApiType>;
            /**
             * The number of blocks the issuance is linear
             **/
            linearIssuanceBlocks: u32 & AugmentedConst<ApiType>;
            /**
             * The account id that holds the liquidity mining issuance
             **/
            liquidityMiningIssuanceVault: AccountId32 & AugmentedConst<ApiType>;
            /**
             * The split of issuance for liquidity mining rewards
             **/
            liquidityMiningSplit: Perbill & AugmentedConst<ApiType>;
            /**
             * The account id that holds the staking issuance
             **/
            stakingIssuanceVault: AccountId32 & AugmentedConst<ApiType>;
            /**
             * The split of issuance for staking rewards
             **/
            stakingSplit: Perbill & AugmentedConst<ApiType>;
            /**
             * The block at which the tge tokens begin to vest
             **/
            tgeReleaseBegin: u32 & AugmentedConst<ApiType>;
            /**
             * The number of blocks the tge tokens vest for
             **/
            tgeReleasePeriod: u32 & AugmentedConst<ApiType>;
            /**
             * The total mga allocated for crowdloans
             **/
            totalCrowdloanAllocation: u128 & AugmentedConst<ApiType>;
            /**
             * Generic const
             **/
            [key: string]: Codec;
        };
        parachainStaking: {
            /**
             * Default number of blocks per round at genesis
             **/
            blocksPerRound: u32 & AugmentedConst<ApiType>;
            /**
             * Number of rounds that candidate requests to adjust self-bond must wait to be executable
             **/
            candidateBondDelay: u32 & AugmentedConst<ApiType>;
            /**
             * Default commission due to collators, is `CollatorCommission` storage value in genesis
             **/
            defaultCollatorCommission: Perbill & AugmentedConst<ApiType>;
            /**
             * Number of rounds that delegation {more, less} requests must wait before executable
             **/
            delegationBondDelay: u32 & AugmentedConst<ApiType>;
            /**
             * Number of rounds that candidates remain bonded before exit request is executable
             **/
            leaveCandidatesDelay: u32 & AugmentedConst<ApiType>;
            /**
             * Number of rounds that delegators remain bonded before exit request is executable
             **/
            leaveDelegatorsDelay: u32 & AugmentedConst<ApiType>;
            /**
             * Maximum collator candidates allowed
             **/
            maxCollatorCandidates: u32 & AugmentedConst<ApiType>;
            /**
             * Maximum delegations per delegator
             **/
            maxDelegationsPerDelegator: u32 & AugmentedConst<ApiType>;
            /**
             * Maximum delegators counted per candidate
             **/
            maxDelegatorsPerCandidate: u32 & AugmentedConst<ApiType>;
            /**
             * Maximum delegators allowed per candidate
             **/
            maxTotalDelegatorsPerCandidate: u32 & AugmentedConst<ApiType>;
            /**
             * Minimum stake required for any account to be a collator candidate
             **/
            minCandidateStk: u128 & AugmentedConst<ApiType>;
            /**
             * Minimum stake required for any candidate to be in `SelectedCandidates` for the round
             **/
            minCollatorStk: u128 & AugmentedConst<ApiType>;
            /**
             * Minimum stake for any registered on-chain account to delegate
             **/
            minDelegation: u128 & AugmentedConst<ApiType>;
            /**
             * Minimum number of selected candidates every round
             **/
            minSelectedCandidates: u32 & AugmentedConst<ApiType>;
            /**
             * The native token used for payouts
             **/
            nativeTokenId: u32 & AugmentedConst<ApiType>;
            /**
             * Number of rounds that delegations remain bonded before revocation request is executable
             **/
            revokeDelegationDelay: u32 & AugmentedConst<ApiType>;
            /**
             * Number of rounds after which block authors are rewarded
             **/
            rewardPaymentDelay: u32 & AugmentedConst<ApiType>;
            /**
             * The account id that holds the liquidity mining issuance
             **/
            stakingIssuanceVault: AccountId32 & AugmentedConst<ApiType>;
            /**
             * Generic const
             **/
            [key: string]: Codec;
        };
        system: {
            /**
             * Maximum number of block number to block hash mappings to keep (oldest pruned first).
             **/
            blockHashCount: u32 & AugmentedConst<ApiType>;
            /**
             * The maximum length of a block (in bytes).
             **/
            blockLength: FrameSystemLimitsBlockLength & AugmentedConst<ApiType>;
            /**
             * Block & extrinsics weights: base values and limits.
             **/
            blockWeights: FrameSystemLimitsBlockWeights & AugmentedConst<ApiType>;
            /**
             * The weight of runtime database operations the runtime can invoke.
             **/
            dbWeight: FrameSupportWeightsRuntimeDbWeight & AugmentedConst<ApiType>;
            /**
             * The designated SS85 prefix of this chain.
             *
             * This replaces the "ss58Format" property declared in the chain spec. Reason is
             * that the runtime should know about the prefix in order to make use of it as
             * an identifier of the chain.
             **/
            ss58Prefix: u16 & AugmentedConst<ApiType>;
            /**
             * Get the chain's current version.
             **/
            version: SpVersionRuntimeVersion & AugmentedConst<ApiType>;
            /**
             * Generic const
             **/
            [key: string]: Codec;
        };
        timestamp: {
            /**
             * The minimum period between blocks. Beware that this is different to the *expected*
             * period that the block production apparatus provides. Your chosen consensus system will
             * generally work with this to determine a sensible block time. e.g. For Aura, it will be
             * double this period on default settings.
             **/
            minimumPeriod: u64 & AugmentedConst<ApiType>;
            /**
             * Generic const
             **/
            [key: string]: Codec;
        };
        tokens: {
            maxLocks: u32 & AugmentedConst<ApiType>;
            /**
             * Generic const
             **/
            [key: string]: Codec;
        };
        transactionPayment: {
            /**
             * A fee mulitplier for `Operational` extrinsics to compute "virtual tip" to boost their
             * `priority`
             *
             * This value is multipled by the `final_fee` to obtain a "virtual tip" that is later
             * added to a tip component in regular `priority` calculations.
             * It means that a `Normal` transaction can front-run a similarly-sized `Operational`
             * extrinsic (with no tip), by including a tip value greater than the virtual tip.
             *
             * ```rust,ignore
             * // For `Normal`
             * let priority = priority_calc(tip);
             *
             * // For `Operational`
             * let virtual_tip = (inclusion_fee + tip) * OperationalFeeMultiplier;
             * let priority = priority_calc(tip + virtual_tip);
             * ```
             *
             * Note that since we use `final_fee` the multiplier applies also to the regular `tip`
             * sent with the transaction. So, not only does the transaction get a priority bump based
             * on the `inclusion_fee`, but we also amplify the impact of tips applied to `Operational`
             * transactions.
             **/
            operationalFeeMultiplier: u8 & AugmentedConst<ApiType>;
            /**
             * The fee to be paid for making a transaction; the per-byte portion.
             **/
            transactionByteFee: u128 & AugmentedConst<ApiType>;
            /**
             * The polynomial that is applied in order to derive fee from weight.
             **/
            weightToFee: Vec<FrameSupportWeightsWeightToFeeCoefficient> & AugmentedConst<ApiType>;
            /**
             * Generic const
             **/
            [key: string]: Codec;
        };
        treasury: {
            /**
             * Percentage of spare funds (if any) that are burnt per spend period.
             **/
            burn: Permill & AugmentedConst<ApiType>;
            /**
             * The maximum number of approvals that can wait in the spending queue.
             **/
            maxApprovals: u32 & AugmentedConst<ApiType>;
            /**
             * The treasury's pallet id, used for deriving its sovereign account ID.
             **/
            palletId: FrameSupportPalletId & AugmentedConst<ApiType>;
            /**
             * Fraction of a proposal's value that should be bonded in order to place the proposal.
             * An accepted proposal gets these back. A rejected proposal does not.
             **/
            proposalBond: Permill & AugmentedConst<ApiType>;
            /**
             * Maximum amount of funds that should be placed in a deposit for making a proposal.
             **/
            proposalBondMaximum: Option<u128> & AugmentedConst<ApiType>;
            /**
             * Minimum amount of funds that should be placed in a deposit for making a proposal.
             **/
            proposalBondMinimum: u128 & AugmentedConst<ApiType>;
            /**
             * Period between successive spends.
             **/
            spendPeriod: u32 & AugmentedConst<ApiType>;
            /**
             * Generic const
             **/
            [key: string]: Codec;
        };
        utility: {
            /**
             * The limit on the number of batched calls.
             **/
            batchedCallsLimit: u32 & AugmentedConst<ApiType>;
            /**
             * Generic const
             **/
            [key: string]: Codec;
        };
        vesting: {
            maxVestingSchedules: u32 & AugmentedConst<ApiType>;
            /**
             * The minimum amount transferred to call `vested_transfer`.
             **/
            minVestedTransfer: u128 & AugmentedConst<ApiType>;
            /**
             * Generic const
             **/
            [key: string]: Codec;
        };
        xTokens: {
            /**
             * Base XCM weight.
             *
             * The actually weight for an XCM message is `T::BaseXcmWeight +
             * T::Weigher::weight(&msg)`.
             **/
            baseXcmWeight: u64 & AugmentedConst<ApiType>;
            /**
             * Self chain location.
             **/
            selfLocation: XcmV1MultiLocation & AugmentedConst<ApiType>;
            /**
             * Generic const
             **/
            [key: string]: Codec;
        };
        xyk: {
            buyAndBurnFeePercentage: u128 & AugmentedConst<ApiType>;
            /**
             * The account id that holds the liquidity mining issuance
             **/
            liquidityMiningIssuanceVault: AccountId32 & AugmentedConst<ApiType>;
            poolFeePercentage: u128 & AugmentedConst<ApiType>;
            rewardsDistributionPeriod: u32 & AugmentedConst<ApiType>;
            treasuryFeePercentage: u128 & AugmentedConst<ApiType>;
            /**
             * Generic const
             **/
            [key: string]: Codec;
        };
    }
}

declare module '@polkadot/api-base/types/errors' {
    interface AugmentedErrors<ApiType extends ApiTypes> {
        assetRegistry: {
            /**
             * AssetId exists
             **/
            AssetIdExisted: AugmentedError<ApiType>;
            /**
             * AssetId not exists
             **/
            AssetIdNotExists: AugmentedError<ApiType>;
            /**
             * The given location could not be used (e.g. because it cannot be expressed in the
             * desired version of XCM).
             **/
            BadLocation: AugmentedError<ApiType>;
            /**
             * MultiLocation existed
             **/
            MultiLocationExisted: AugmentedError<ApiType>;
            /**
             * Creating a token for the foreign asset failed
             **/
            TokenCreationFailed: AugmentedError<ApiType>;
            /**
             * Generic error
             **/
            [key: string]: AugmentedError<ApiType>;
        };
        assetsInfo: {
            /**
             * Asset does not exist
             **/
            AssetNotExist: AugmentedError<ApiType>;
            /**
             * A decimals point value is out of range
             **/
            DecimalsOutOfRange: AugmentedError<ApiType>;
            /**
             * A description is too long.
             **/
            TooLongDescription: AugmentedError<ApiType>;
            /**
             * A name is too long.
             **/
            TooLongName: AugmentedError<ApiType>;
            /**
             * A symbol is too long.
             **/
            TooLongSymbol: AugmentedError<ApiType>;
            /**
             * A description is too short.
             **/
            TooShortDescription: AugmentedError<ApiType>;
            /**
             * A name is too short.
             **/
            TooShortName: AugmentedError<ApiType>;
            /**
             * A symbol is too short.
             **/
            TooShortSymbol: AugmentedError<ApiType>;
            /**
             * Generic error
             **/
            [key: string]: AugmentedError<ApiType>;
        };
        authorship: {
            /**
             * The uncle is genesis.
             **/
            GenesisUncle: AugmentedError<ApiType>;
            /**
             * The uncle parent not in the chain.
             **/
            InvalidUncleParent: AugmentedError<ApiType>;
            /**
             * The uncle isn't recent enough to be included.
             **/
            OldUncle: AugmentedError<ApiType>;
            /**
             * The uncle is too high in chain.
             **/
            TooHighUncle: AugmentedError<ApiType>;
            /**
             * Too many uncles.
             **/
            TooManyUncles: AugmentedError<ApiType>;
            /**
             * The uncle is already included.
             **/
            UncleAlreadyIncluded: AugmentedError<ApiType>;
            /**
             * Uncles already set in the block.
             **/
            UnclesAlreadySet: AugmentedError<ApiType>;
            /**
             * Generic error
             **/
            [key: string]: AugmentedError<ApiType>;
        };
        bootstrap: {
            /**
             * Bootstrate event already started
             **/
            AlreadyStarted: AugmentedError<ApiType>;
            /**
             * Bootstrap cant be scheduled in past
             **/
            BootstrapStartInThePast: AugmentedError<ApiType>;
            /**
             * First provision must be in MGA/MGX
             **/
            FirstProvisionInMga: AugmentedError<ApiType>;
            /**
             * Math problem
             **/
            MathOverflow: AugmentedError<ApiType>;
            /**
             * Not enought funds for provisio
             **/
            NotEnoughAssets: AugmentedError<ApiType>;
            /**
             * Not enought funds for provisio (vested)
             **/
            NotEnoughVestedAssets: AugmentedError<ApiType>;
            /**
             * Cannot claim rewards before bootstrap finish
             **/
            NotFinishedYet: AugmentedError<ApiType>;
            /**
             * no rewards to claim
             **/
            NothingToClaim: AugmentedError<ApiType>;
            /**
             * Bootstarap phases cannot lasts 0 blocks
             **/
            PhaseLengthCannotBeZero: AugmentedError<ApiType>;
            /**
             * Bootstraped pool already exists
             **/
            PoolAlreadyExists: AugmentedError<ApiType>;
            /**
             * User cannot participate at this moment
             **/
            Unauthorized: AugmentedError<ApiType>;
            /**
             * Only MGA & KSM can be used for provisions
             **/
            UnsupportedTokenId: AugmentedError<ApiType>;
            /**
             * Valuation ratio exceeded
             **/
            ValuationRatio: AugmentedError<ApiType>;
            /**
             * no rewards to claim
             **/
            WrongRatio: AugmentedError<ApiType>;
            /**
             * Generic error
             **/
            [key: string]: AugmentedError<ApiType>;
        };
        bridge: {
            /**
             * Target application not found.
             **/
            AppNotFound: AugmentedError<ApiType>;
            /**
             * Updated AppId is the same as current
             **/
            DifferentAppIdRequired: AugmentedError<ApiType>;
            /**
             * Generic error
             **/
            [key: string]: AugmentedError<ApiType>;
        };
        bridgedAsset: {
            /**
             * Free balance got underflowed after burning.
             **/
            FreeBurningUnderflow: AugmentedError<ApiType>;
            /**
             * Free balance got overflowed after minting.
             **/
            FreeMintingOverflow: AugmentedError<ApiType>;
            /**
             * Free balance got overflowed after transfer.
             **/
            FreeTransferOverflow: AugmentedError<ApiType>;
            InsufficientBalance: AugmentedError<ApiType>;
            /**
             * Total issuance got underflowed after burning.
             **/
            TotalBurningUnderflow: AugmentedError<ApiType>;
            /**
             * Total issuance got overflowed after minting.
             **/
            TotalMintingOverflow: AugmentedError<ApiType>;
            /**
             * Generic error
             **/
            [key: string]: AugmentedError<ApiType>;
        };
        council: {
            /**
             * Members are already initialized!
             **/
            AlreadyInitialized: AugmentedError<ApiType>;
            /**
             * Duplicate proposals not allowed
             **/
            DuplicateProposal: AugmentedError<ApiType>;
            /**
             * Duplicate vote ignored
             **/
            DuplicateVote: AugmentedError<ApiType>;
            /**
             * Account is not a member
             **/
            NotMember: AugmentedError<ApiType>;
            /**
             * Proposal must exist
             **/
            ProposalMissing: AugmentedError<ApiType>;
            /**
             * The close call was made too early, before the end of the voting.
             **/
            TooEarly: AugmentedError<ApiType>;
            /**
             * There can only be a maximum of `MaxProposals` active proposals.
             **/
            TooManyProposals: AugmentedError<ApiType>;
            /**
             * Mismatched index
             **/
            WrongIndex: AugmentedError<ApiType>;
            /**
             * The given length bound for the proposal was too low.
             **/
            WrongProposalLength: AugmentedError<ApiType>;
            /**
             * The given weight bound for the proposal was too low.
             **/
            WrongProposalWeight: AugmentedError<ApiType>;
            /**
             * Generic error
             **/
            [key: string]: AugmentedError<ApiType>;
        };
        crowdloan: {
            /**
             * User trying to associate a native identity with a relay chain identity for posterior
             * reward claiming provided an already associated relay chain identity
             **/
            AlreadyAssociated: AugmentedError<ApiType>;
            /**
             * Trying to introduce a batch that goes beyond the limits of the funds
             **/
            BatchBeyondFundPot: AugmentedError<ApiType>;
            /**
             * The mint operation during claim has resulted in err.
             * This is expected when claiming less than existential desposit on a non-existent account
             * Please consider waiting until the EndVestingBlock to attempt this
             **/
            ClaimingLessThanED: AugmentedError<ApiType>;
            /**
             * First claim already done
             **/
            FirstClaimAlreadyDone: AugmentedError<ApiType>;
            /**
             * User submitted an unsifficient number of proofs to change the reward address
             **/
            InsufficientNumberOfValidProofs: AugmentedError<ApiType>;
            /**
             * User trying to associate a native identity with a relay chain identity for posterior
             * reward claiming provided a wrong signature
             **/
            InvalidClaimSignature: AugmentedError<ApiType>;
            /**
             * User trying to claim the first free reward provided the wrong signature
             **/
            InvalidFreeClaimSignature: AugmentedError<ApiType>;
            /**
             * User trying to claim an award did not have an claim associated with it. This may mean
             * they did not contribute to the crowdloan, or they have not yet associated a native id
             * with their contribution
             **/
            NoAssociatedClaim: AugmentedError<ApiType>;
            /**
             * User provided a signature from a non-contributor relay account
             **/
            NonContributedAddressProvided: AugmentedError<ApiType>;
            /**
             * The contribution is not high enough to be eligible for rewards
             **/
            RewardNotHighEnough: AugmentedError<ApiType>;
            /**
             * User trying to claim rewards has already claimed all rewards associated with its
             * identity and contribution
             **/
            RewardsAlreadyClaimed: AugmentedError<ApiType>;
            /**
             * Rewards should match funds of the pallet
             **/
            RewardsDoNotMatchFund: AugmentedError<ApiType>;
            /**
             * Reward vec has already been initialized
             **/
            RewardVecAlreadyInitialized: AugmentedError<ApiType>;
            /**
             * Reward vec has not yet been fully initialized
             **/
            RewardVecNotFullyInitializedYet: AugmentedError<ApiType>;
            /**
             * Initialize_reward_vec received too many contributors
             **/
            TooManyContributors: AugmentedError<ApiType>;
            /**
             * Provided vesting period is not valid
             **/
            VestingPeriodNonValid: AugmentedError<ApiType>;
            /**
             * Generic error
             **/
            [key: string]: AugmentedError<ApiType>;
        };
        cumulusXcm: {
            /**
             * Generic error
             **/
            [key: string]: AugmentedError<ApiType>;
        };
        dmpQueue: {
            /**
             * The amount of weight given is possibly not enough for executing the message.
             **/
            OverLimit: AugmentedError<ApiType>;
            /**
             * The message index given is unknown.
             **/
            Unknown: AugmentedError<ApiType>;
            /**
             * Generic error
             **/
            [key: string]: AugmentedError<ApiType>;
        };
        elections: {
            /**
             * Duplicated candidate submission.
             **/
            DuplicatedCandidate: AugmentedError<ApiType>;
            /**
             * Candidate does not have enough funds.
             **/
            InsufficientCandidateFunds: AugmentedError<ApiType>;
            /**
             * The renouncing origin presented a wrong `Renouncing` parameter.
             **/
            InvalidRenouncing: AugmentedError<ApiType>;
            /**
             * Prediction regarding replacement after member removal is wrong.
             **/
            InvalidReplacement: AugmentedError<ApiType>;
            /**
             * The provided count of number of votes is incorrect.
             **/
            InvalidVoteCount: AugmentedError<ApiType>;
            /**
             * The provided count of number of candidates is incorrect.
             **/
            InvalidWitnessData: AugmentedError<ApiType>;
            /**
             * Cannot vote with stake less than minimum balance.
             **/
            LowBalance: AugmentedError<ApiType>;
            /**
             * Cannot vote more than maximum allowed.
             **/
            MaximumVotesExceeded: AugmentedError<ApiType>;
            /**
             * Member cannot re-submit candidacy.
             **/
            MemberSubmit: AugmentedError<ApiType>;
            /**
             * Must be a voter.
             **/
            MustBeVoter: AugmentedError<ApiType>;
            /**
             * Not a member.
             **/
            NotMember: AugmentedError<ApiType>;
            /**
             * Must vote for at least one candidate.
             **/
            NoVotes: AugmentedError<ApiType>;
            /**
             * Cannot report self.
             **/
            ReportSelf: AugmentedError<ApiType>;
            /**
             * Runner cannot re-submit candidacy.
             **/
            RunnerUpSubmit: AugmentedError<ApiType>;
            /**
             * Cannot vote more than candidates.
             **/
            TooManyVotes: AugmentedError<ApiType>;
            /**
             * Voter can not pay voting bond.
             **/
            UnableToPayBond: AugmentedError<ApiType>;
            /**
             * Cannot vote when no candidates or members exist.
             **/
            UnableToVote: AugmentedError<ApiType>;
            /**
             * Generic error
             **/
            [key: string]: AugmentedError<ApiType>;
        };
        erc20: {
            /**
             * Asset could not be burned
             **/
            BurnFailure: AugmentedError<ApiType>;
            /**
             * Asset ID is invalid.
             **/
            InvalidAssetId: AugmentedError<ApiType>;
            /**
             * The submitted payload could not be decoded.
             **/
            InvalidPayload: AugmentedError<ApiType>;
            /**
             * The recipient address is null/default value
             **/
            NullRecipient: AugmentedError<ApiType>;
            /**
             * Token creation failed
             **/
            TokenCreationFailed: AugmentedError<ApiType>;
            /**
             * Passed amount is too big
             **/
            TooBigAmount: AugmentedError<ApiType>;
            /**
             * Generic error
             **/
            [key: string]: AugmentedError<ApiType>;
        };
        eth: {
            /**
             * Asset could not be burned
             **/
            BurnFailure: AugmentedError<ApiType>;
            /**
             * The submitted payload could not be decoded.
             **/
            InvalidPayload: AugmentedError<ApiType>;
            /**
             * Token creation failed
             **/
            TokenCreationFailed: AugmentedError<ApiType>;
            /**
             * Passed amount is too big
             **/
            TooBigAmount: AugmentedError<ApiType>;
            /**
             * Generic error
             **/
            [key: string]: AugmentedError<ApiType>;
        };
        issuance: {
            /**
             * The issuance config has already been initialized
             **/
            IssuanceConfigAlreadyInitialized: AugmentedError<ApiType>;
            /**
             * The issuance config is invalid
             **/
            IssuanceConfigInvalid: AugmentedError<ApiType>;
            /**
             * The issuance config has not been initialized
             **/
            IssuanceConfigNotInitialized: AugmentedError<ApiType>;
            /**
             * An underflow or an overflow has occured
             **/
            MathError: AugmentedError<ApiType>;
            /**
             * The TGE is already finalized
             **/
            TGEIsAlreadyFinalized: AugmentedError<ApiType>;
            /**
             * TGE must be finalized before issuance config is inti
             **/
            TGENotFinalized: AugmentedError<ApiType>;
            /**
             * Generic error
             **/
            [key: string]: AugmentedError<ApiType>;
        };
        ormlXcm: {
            /**
             * The version of the `Versioned` value used is not able to be
             * interpreted.
             **/
            BadVersion: AugmentedError<ApiType>;
            /**
             * The message and destination was recognized as being reachable but
             * the operation could not be completed.
             **/
            SendFailure: AugmentedError<ApiType>;
            /**
             * The message and destination combination was not recognized as being
             * reachable.
             **/
            Unreachable: AugmentedError<ApiType>;
            /**
             * Generic error
             **/
            [key: string]: AugmentedError<ApiType>;
        };
        parachainStaking: {
            AlreadyActive: AugmentedError<ApiType>;
            AlreadyDelegatedCandidate: AugmentedError<ApiType>;
            AlreadyOffline: AugmentedError<ApiType>;
            CandidateAlreadyLeaving: AugmentedError<ApiType>;
            CandidateBondBelowMin: AugmentedError<ApiType>;
            CandidateCannotLeaveYet: AugmentedError<ApiType>;
            CandidateDNE: AugmentedError<ApiType>;
            CandidateExists: AugmentedError<ApiType>;
            CandidateNotLeaving: AugmentedError<ApiType>;
            CannotDelegateIfLeaving: AugmentedError<ApiType>;
            CannotGoOnlineIfLeaving: AugmentedError<ApiType>;
            CannotSetBelowMin: AugmentedError<ApiType>;
            DelegationBelowMin: AugmentedError<ApiType>;
            DelegationDNE: AugmentedError<ApiType>;
            DelegatorAlreadyLeaving: AugmentedError<ApiType>;
            DelegatorCannotLeaveYet: AugmentedError<ApiType>;
            DelegatorDNE: AugmentedError<ApiType>;
            DelegatorDNEInDelegatorSet: AugmentedError<ApiType>;
            DelegatorDNEinTopNorBottom: AugmentedError<ApiType>;
            DelegatorExists: AugmentedError<ApiType>;
            DelegatorNotLeaving: AugmentedError<ApiType>;
            ExceedMaxCollatorCandidates: AugmentedError<ApiType>;
            ExceedMaxDelegationsPerDelegator: AugmentedError<ApiType>;
            ExceedMaxTotalDelegatorsPerCandidate: AugmentedError<ApiType>;
            InsufficientBalance: AugmentedError<ApiType>;
            InvalidSchedule: AugmentedError<ApiType>;
            MathError: AugmentedError<ApiType>;
            NoWritingSameValue: AugmentedError<ApiType>;
            PendingCandidateRequestAlreadyExists: AugmentedError<ApiType>;
            PendingCandidateRequestNotDueYet: AugmentedError<ApiType>;
            PendingCandidateRequestsDNE: AugmentedError<ApiType>;
            PendingDelegationRequestAlreadyExists: AugmentedError<ApiType>;
            PendingDelegationRequestDNE: AugmentedError<ApiType>;
            PendingDelegationRequestNotDueYet: AugmentedError<ApiType>;
            StakingLiquidityTokenAlreadyListed: AugmentedError<ApiType>;
            StakingLiquidityTokenNotListed: AugmentedError<ApiType>;
            TooLowCandidateCountToLeaveCandidates: AugmentedError<ApiType>;
            TooLowCandidateCountWeightHintCancelLeaveCandidates: AugmentedError<ApiType>;
            TooLowCandidateCountWeightHintJoinCandidates: AugmentedError<ApiType>;
            TooLowCandidateDelegationCountToDelegate: AugmentedError<ApiType>;
            TooLowCurrentStakingLiquidityTokensCount: AugmentedError<ApiType>;
            TooLowDelegationCountToDelegate: AugmentedError<ApiType>;
            TooLowDelegationCountToLeaveDelegators: AugmentedError<ApiType>;
            /**
             * Generic error
             **/
            [key: string]: AugmentedError<ApiType>;
        };
        parachainSystem: {
            /**
             * The inherent which supplies the host configuration did not run this block
             **/
            HostConfigurationNotAvailable: AugmentedError<ApiType>;
            /**
             * No code upgrade has been authorized.
             **/
            NothingAuthorized: AugmentedError<ApiType>;
            /**
             * No validation function upgrade is currently scheduled.
             **/
            NotScheduled: AugmentedError<ApiType>;
            /**
             * Attempt to upgrade validation function while existing upgrade pending
             **/
            OverlappingUpgrades: AugmentedError<ApiType>;
            /**
             * Polkadot currently prohibits this parachain from upgrading its validation function
             **/
            ProhibitedByPolkadot: AugmentedError<ApiType>;
            /**
             * The supplied validation function has compiled into a blob larger than Polkadot is
             * willing to run
             **/
            TooBig: AugmentedError<ApiType>;
            /**
             * The given code upgrade has not been authorized.
             **/
            Unauthorized: AugmentedError<ApiType>;
            /**
             * The inherent which supplies the validation data did not run this block
             **/
            ValidationDataNotAvailable: AugmentedError<ApiType>;
            /**
             * Generic error
             **/
            [key: string]: AugmentedError<ApiType>;
        };
        polkadotXcm: {
            /**
             * The location is invalid since it already has a subscription from us.
             **/
            AlreadySubscribed: AugmentedError<ApiType>;
            /**
             * The given location could not be used (e.g. because it cannot be expressed in the
             * desired version of XCM).
             **/
            BadLocation: AugmentedError<ApiType>;
            /**
             * The version of the `Versioned` value used is not able to be interpreted.
             **/
            BadVersion: AugmentedError<ApiType>;
            /**
             * Could not re-anchor the assets to declare the fees for the destination chain.
             **/
            CannotReanchor: AugmentedError<ApiType>;
            /**
             * The destination `MultiLocation` provided cannot be inverted.
             **/
            DestinationNotInvertible: AugmentedError<ApiType>;
            /**
             * The assets to be sent are empty.
             **/
            Empty: AugmentedError<ApiType>;
            /**
             * The message execution fails the filter.
             **/
            Filtered: AugmentedError<ApiType>;
            /**
             * Origin is invalid for sending.
             **/
            InvalidOrigin: AugmentedError<ApiType>;
            /**
             * The referenced subscription could not be found.
             **/
            NoSubscription: AugmentedError<ApiType>;
            /**
             * There was some other issue (i.e. not to do with routing) in sending the message. Perhaps
             * a lack of space for buffering the message.
             **/
            SendFailure: AugmentedError<ApiType>;
            /**
             * Too many assets have been attempted for transfer.
             **/
            TooManyAssets: AugmentedError<ApiType>;
            /**
             * The desired destination was unreachable, generally because there is a no way of routing
             * to it.
             **/
            Unreachable: AugmentedError<ApiType>;
            /**
             * The message's weight could not be determined.
             **/
            UnweighableMessage: AugmentedError<ApiType>;
            /**
             * Generic error
             **/
            [key: string]: AugmentedError<ApiType>;
        };
        session: {
            /**
             * Registered duplicate key.
             **/
            DuplicatedKey: AugmentedError<ApiType>;
            /**
             * Invalid ownership proof.
             **/
            InvalidProof: AugmentedError<ApiType>;
            /**
             * Key setting account is not live, so it's impossible to associate keys.
             **/
            NoAccount: AugmentedError<ApiType>;
            /**
             * No associated validator ID for account.
             **/
            NoAssociatedValidatorId: AugmentedError<ApiType>;
            /**
             * No keys are associated with this account.
             **/
            NoKeys: AugmentedError<ApiType>;
            /**
             * Generic error
             **/
            [key: string]: AugmentedError<ApiType>;
        };
        sudo: {
            /**
             * Sender must be the Sudo account
             **/
            RequireSudo: AugmentedError<ApiType>;
            /**
             * Generic error
             **/
            [key: string]: AugmentedError<ApiType>;
        };
        sudoOrigin: {
            /**
             * Generic error
             **/
            [key: string]: AugmentedError<ApiType>;
        };
        system: {
            /**
             * The origin filter prevent the call to be dispatched.
             **/
            CallFiltered: AugmentedError<ApiType>;
            /**
             * Failed to extract the runtime version from the new runtime.
             *
             * Either calling `Core_version` or decoding `RuntimeVersion` failed.
             **/
            FailedToExtractRuntimeVersion: AugmentedError<ApiType>;
            /**
             * The name of specification does not match between the current runtime
             * and the new runtime.
             **/
            InvalidSpecName: AugmentedError<ApiType>;
            /**
             * Suicide called when the account has non-default composite data.
             **/
            NonDefaultComposite: AugmentedError<ApiType>;
            /**
             * There is a non-zero reference count preventing the account from being purged.
             **/
            NonZeroRefCount: AugmentedError<ApiType>;
            /**
             * The specification version is not allowed to decrease between the current runtime
             * and the new runtime.
             **/
            SpecVersionNeedsToIncrease: AugmentedError<ApiType>;
            /**
             * Generic error
             **/
            [key: string]: AugmentedError<ApiType>;
        };
        tokens: {
            /**
             * Cannot convert Amount into Balance type
             **/
            AmountIntoBalanceFailed: AugmentedError<ApiType>;
            /**
             * The balance is too low
             **/
            BalanceTooLow: AugmentedError<ApiType>;
            /**
             * Beneficiary account must pre-exist
             **/
            DeadAccount: AugmentedError<ApiType>;
            /**
             * Value too low to create account due to existential deposit
             **/
            ExistentialDeposit: AugmentedError<ApiType>;
            /**
             * Transfer/payment would kill account
             **/
            KeepAlive: AugmentedError<ApiType>;
            /**
             * Failed because liquidity restrictions due to locking
             **/
            LiquidityRestrictions: AugmentedError<ApiType>;
            /**
             * Failed because the maximum locks was exceeded
             **/
            MaxLocksExceeded: AugmentedError<ApiType>;
            /**
             * Failed because token with given id does not exits
             **/
            TokenIdNotExists: AugmentedError<ApiType>;
            /**
             * Generic error
             **/
            [key: string]: AugmentedError<ApiType>;
        };
        treasury: {
            /**
             * Proposer's balance is too low.
             **/
            InsufficientProposersBalance: AugmentedError<ApiType>;
            /**
             * No proposal or bounty at that index.
             **/
            InvalidIndex: AugmentedError<ApiType>;
            /**
             * Too many approvals in the queue.
             **/
            TooManyApprovals: AugmentedError<ApiType>;
            /**
             * Generic error
             **/
            [key: string]: AugmentedError<ApiType>;
        };
        unknownTokens: {
            /**
             * The operation will cause balance to overflow.
             **/
            BalanceOverflow: AugmentedError<ApiType>;
            /**
             * The balance is too low.
             **/
            BalanceTooLow: AugmentedError<ApiType>;
            /**
             * Unhandled asset.
             **/
            UnhandledAsset: AugmentedError<ApiType>;
            /**
             * Generic error
             **/
            [key: string]: AugmentedError<ApiType>;
        };
        utility: {
            /**
             * Too many calls batched.
             **/
            TooManyCalls: AugmentedError<ApiType>;
            /**
             * Generic error
             **/
            [key: string]: AugmentedError<ApiType>;
        };
        verifier: {
            /**
             * The message failed verification.
             **/
            Invalid: AugmentedError<ApiType>;
            /**
             * Verification scheme is not supported.
             **/
            NotSupported: AugmentedError<ApiType>;
            /**
             * Generic error
             **/
            [key: string]: AugmentedError<ApiType>;
        };
        vesting: {
            /**
             * Amount being transferred is too low to create a vesting schedule.
             **/
            AmountLow: AugmentedError<ApiType>;
            /**
             * The account already has `MaxVestingSchedules` count of schedules and thus
             * cannot add another one. Consider merging existing schedules in order to add another.
             **/
            AtMaxVestingSchedules: AugmentedError<ApiType>;
            /**
             * Failed to create a new schedule because some parameter was invalid.
             **/
            InvalidScheduleParams: AugmentedError<ApiType>;
            /**
             * An overflow or underflow has occured
             **/
            MathError: AugmentedError<ApiType>;
            /**
             * No suitable schedule found
             * Perhaps the user could merge vesting schedules and try again
             **/
            NoSuitableScheduleFound: AugmentedError<ApiType>;
            /**
             * The account given is not vesting.
             **/
            NotVesting: AugmentedError<ApiType>;
            /**
             * An index was out of bounds of the vesting schedules.
             **/
            ScheduleIndexOutOfBounds: AugmentedError<ApiType>;
            /**
             * Generic error
             **/
            [key: string]: AugmentedError<ApiType>;
        };
        xcmpQueue: {
            /**
             * Bad overweight index.
             **/
            BadOverweightIndex: AugmentedError<ApiType>;
            /**
             * Bad XCM data.
             **/
            BadXcm: AugmentedError<ApiType>;
            /**
             * Bad XCM origin.
             **/
            BadXcmOrigin: AugmentedError<ApiType>;
            /**
             * Failed to send XCM message.
             **/
            FailedToSend: AugmentedError<ApiType>;
            /**
             * Provided weight is possibly not enough to execute the message.
             **/
            WeightOverLimit: AugmentedError<ApiType>;
            /**
             * Generic error
             **/
            [key: string]: AugmentedError<ApiType>;
        };
        xTokens: {
            /**
             * Asset has no reserve location.
             **/
            AssetHasNoReserve: AugmentedError<ApiType>;
            /**
             * The specified index does not exist in a MultiAssets struct
             **/
            AssetIndexNonExistent: AugmentedError<ApiType>;
            /**
             * The version of the `Versioned` value used is not able to be
             * interpreted.
             **/
            BadVersion: AugmentedError<ApiType>;
            /**
             * Could not re-anchor the assets to declare the fees for the
             * destination chain.
             **/
            CannotReanchor: AugmentedError<ApiType>;
            /**
             * The destination `MultiLocation` provided cannot be inverted.
             **/
            DestinationNotInvertible: AugmentedError<ApiType>;
            /**
             * We tried sending distinct asset and fee but they have different
             * reserve chains
             **/
            DistinctReserveForAssetAndFee: AugmentedError<ApiType>;
            /**
             * The fee amount was zero when the fee specification extrinsic is
             * being used.
             **/
            FeeCannotBeZero: AugmentedError<ApiType>;
            /**
             * Could not get ancestry of asset reserve location.
             **/
            InvalidAncestry: AugmentedError<ApiType>;
            /**
             * Invalid transfer destination.
             **/
            InvalidDest: AugmentedError<ApiType>;
            /**
             * Not cross-chain transfer.
             **/
            NotCrossChainTransfer: AugmentedError<ApiType>;
            /**
             * Currency is not cross-chain transferable.
             **/
            NotCrossChainTransferableCurrency: AugmentedError<ApiType>;
            /**
             * Not fungible asset.
             **/
            NotFungible: AugmentedError<ApiType>;
            /**
             * The number of assets to be sent is over the maximum
             **/
            TooManyAssetsBeingSent: AugmentedError<ApiType>;
            /**
             * The message's weight could not be determined.
             **/
            UnweighableMessage: AugmentedError<ApiType>;
            /**
             * XCM execution failed.
             **/
            XcmExecutionFailed: AugmentedError<ApiType>;
            /**
             * Generic error
             **/
            [key: string]: AugmentedError<ApiType>;
        };
        xyk: {
            /**
             * Asset already exists
             **/
            AssetAlreadyExists: AugmentedError<ApiType>;
            /**
             * Asset does not exists
             **/
            AssetDoesNotExists: AugmentedError<ApiType>;
            /**
             * Division by zero
             **/
            DivisionByZero: AugmentedError<ApiType>;
            /**
             * Asset id is blacklisted
             **/
            FunctionNotAvailableForThisToken: AugmentedError<ApiType>;
            /**
             * Insufficient input amount
             **/
            InsufficientInputAmount: AugmentedError<ApiType>;
            /**
             * Insufficient output amount
             **/
            InsufficientOutputAmount: AugmentedError<ApiType>;
            /**
             * Liquidity token creation failed
             **/
            LiquidityTokenCreationFailed: AugmentedError<ApiType>;
            /**
             * Math overflow
             **/
            MathOverflow: AugmentedError<ApiType>;
            /**
             * No such liquidity asset exists
             **/
            NoSuchLiquidityAsset: AugmentedError<ApiType>;
            /**
             * No such pool exists
             **/
            NoSuchPool: AugmentedError<ApiType>;
            /**
             * Not a promoted pool
             **/
            NotAPromotedPool: AugmentedError<ApiType>;
            /**
             * Not enought assets
             **/
            NotEnoughAssets: AugmentedError<ApiType>;
            /**
             * Not enought reserve
             **/
            NotEnoughReserve: AugmentedError<ApiType>;
            /**
             * Not enought rewards earned
             **/
            NotEnoughtRewardsEarned: AugmentedError<ApiType>;
            /**
             * Unexpected failure
             **/
            NotMangataLiquidityAsset: AugmentedError<ApiType>;
            /**
             * Past time calculation
             **/
            PastTimeCalculation: AugmentedError<ApiType>;
            /**
             * Pool already Exists
             **/
            PoolAlreadyExists: AugmentedError<ApiType>;
            /**
             * Pool already promoted
             **/
            PoolAlreadyPromoted: AugmentedError<ApiType>;
            /**
             * Asset ids cannot be the same
             **/
            SameAsset: AugmentedError<ApiType>;
            /**
             * Second asset amount exceeded expectations
             **/
            SecondAssetAmountExceededExpectations: AugmentedError<ApiType>;
            /**
             * Sold Amount too low
             **/
            SoldAmountTooLow: AugmentedError<ApiType>;
            /**
             * Unexpected failure
             **/
            UnexpectedFailure: AugmentedError<ApiType>;
            /**
             * Zero amount is not supported
             **/
            ZeroAmount: AugmentedError<ApiType>;
            /**
             * Generic error
             **/
            [key: string]: AugmentedError<ApiType>;
        };
    }
}

declare module '@polkadot/api-base/types/events' {
    interface AugmentedEvents<ApiType extends ApiTypes> {
        assetRegistry: {
            /**
             * The asset registered.
             **/
            AssetRegistered: AugmentedEvent<ApiType, [u32, XcmV1MultiLocation]>;
            /**
             * The asset updated.
             **/
            AssetUpdated: AugmentedEvent<ApiType, [u32, XcmV1MultiLocation]>;
            /**
             * Generic event
             **/
            [key: string]: AugmentedEvent<ApiType>;
        };
        assetsInfo: {
            /**
             * Asset info stored. [assetId, info]
             **/
            InfoStored: AugmentedEvent<ApiType, [u32, PalletAssetsInfoAssetInfo]>;
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
             * Funds provisioned
             **/
            Provisioned: AugmentedEvent<ApiType, [u32, u128]>;
            /**
             * Rewards claimed
             **/
            RewardsClaimed: AugmentedEvent<ApiType, [u32, u128]>;
            /**
             * Funds provisioned using vested tokens
             **/
            VestedProvisioned: AugmentedEvent<ApiType, [u32, u128]>;
            /**
             * Generic event
             **/
            [key: string]: AugmentedEvent<ApiType>;
        };
        bridge: {
            /**
             * An AppRegistry entry has been updated
             **/
            AppUpdated: AugmentedEvent<ApiType, [ArtemisCoreApp, U8aFixed]>;
            /**
             * Generic event
             **/
            [key: string]: AugmentedEvent<ApiType>;
        };
        bridgedAsset: {
            Burned: AugmentedEvent<ApiType, [H160, AccountId32, U256]>;
            Minted: AugmentedEvent<ApiType, [H160, AccountId32, U256]>;
            Transferred: AugmentedEvent<ApiType, [H160, AccountId32, AccountId32, U256]>;
            /**
             * Generic event
             **/
            [key: string]: AugmentedEvent<ApiType>;
        };
        council: {
            /**
             * A motion was approved by the required threshold.
             **/
            Approved: AugmentedEvent<ApiType, [H256]>;
            /**
             * A proposal was closed because its threshold was reached or after its duration was up.
             **/
            Closed: AugmentedEvent<ApiType, [H256, u32, u32]>;
            /**
             * A motion was not approved by the required threshold.
             **/
            Disapproved: AugmentedEvent<ApiType, [H256]>;
            /**
             * A motion was executed; result will be `Ok` if it returned without error.
             **/
            Executed: AugmentedEvent<ApiType, [H256, Result<Null, SpRuntimeDispatchError>]>;
            /**
             * A single member did some action; result will be `Ok` if it returned without error.
             **/
            MemberExecuted: AugmentedEvent<ApiType, [H256, Result<Null, SpRuntimeDispatchError>]>;
            /**
             * A motion (given hash) has been proposed (by given account) with a threshold (given
             * `MemberCount`).
             **/
            Proposed: AugmentedEvent<ApiType, [AccountId32, u32, H256, u32]>;
            /**
             * A motion (given hash) has been voted on by given account, leaving
             * a tally (yes votes and no votes given respectively as `MemberCount`).
             **/
            Voted: AugmentedEvent<ApiType, [AccountId32, H256, bool, u32, u32]>;
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
             * \[ id, outcome \]
             **/
            ExecutedDownward: AugmentedEvent<ApiType, [U8aFixed, XcmV2TraitsOutcome]>;
            /**
             * Downward message is invalid XCM.
             * \[ id \]
             **/
            InvalidFormat: AugmentedEvent<ApiType, [U8aFixed]>;
            /**
             * Downward message is overweight and was placed in the overweight queue.
             * \[ id, index, required \]
             **/
            OverweightEnqueued: AugmentedEvent<ApiType, [U8aFixed, u64, u64]>;
            /**
             * Downward message from the overweight queue was executed.
             * \[ index, used \]
             **/
            OverweightServiced: AugmentedEvent<ApiType, [u64, u64]>;
            /**
             * Downward message is unsupported version of XCM.
             * \[ id \]
             **/
            UnsupportedVersion: AugmentedEvent<ApiType, [U8aFixed]>;
            /**
             * The weight limit for handling downward messages was reached.
             * \[ id, remaining, required \]
             **/
            WeightExhausted: AugmentedEvent<ApiType, [U8aFixed, u64, u64]>;
            /**
             * Generic event
             **/
            [key: string]: AugmentedEvent<ApiType>;
        };
        elections: {
            /**
             * A candidate was slashed by amount due to failing to obtain a seat as member or
             * runner-up.
             *
             * Note that old members and runners-up are also candidates.
             **/
            CandidateSlashed: AugmentedEvent<ApiType, [AccountId32, u128]>;
            /**
             * Internal error happened while trying to perform election.
             **/
            ElectionError: AugmentedEvent<ApiType, []>;
            /**
             * No (or not enough) candidates existed for this round. This is different from
             * `NewTerm(\[\])`. See the description of `NewTerm`.
             **/
            EmptyTerm: AugmentedEvent<ApiType, []>;
            /**
             * A member has been removed. This should always be followed by either `NewTerm` or
             * `EmptyTerm`.
             **/
            MemberKicked: AugmentedEvent<ApiType, [AccountId32]>;
            /**
             * A new term with new_members. This indicates that enough candidates existed to run
             * the election, not that enough have has been elected. The inner value must be examined
             * for this purpose. A `NewTerm(\[\])` indicates that some candidates got their bond
             * slashed and none were elected, whilst `EmptyTerm` means that no candidates existed to
             * begin with.
             **/
            NewTerm: AugmentedEvent<ApiType, [Vec<ITuple<[AccountId32, u128]>>]>;
            /**
             * Someone has renounced their candidacy.
             **/
            Renounced: AugmentedEvent<ApiType, [AccountId32]>;
            /**
             * A seat holder was slashed by amount by being forcefully removed from the set.
             **/
            SeatHolderSlashed: AugmentedEvent<ApiType, [AccountId32, u128]>;
            /**
             * Generic event
             **/
            [key: string]: AugmentedEvent<ApiType>;
        };
        erc20: {
            /**
             * Signal a cross-chain transfer.
             **/
            Transfer: AugmentedEvent<ApiType, [H160, AccountId32, H160, U256]>;
            /**
             * Generic event
             **/
            [key: string]: AugmentedEvent<ApiType>;
        };
        eth: {
            /**
             * Signal a cross-chain transfer.
             **/
            Transfer: AugmentedEvent<ApiType, [AccountId32, H160, U256]>;
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
        ormlXcm: {
            /**
             * XCM message sent. \[to, message\]
             **/
            Sent: AugmentedEvent<ApiType, [XcmV1MultiLocation, XcmV2Xcm]>;
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
             * \[ weight_used, result_mqc_head \]
             **/
            DownwardMessagesProcessed: AugmentedEvent<ApiType, [u64, H256]>;
            /**
             * Some downward messages have been received and will be processed.
             * \[ count \]
             **/
            DownwardMessagesReceived: AugmentedEvent<ApiType, [u32]>;
            /**
             * An upgrade has been authorized.
             **/
            UpgradeAuthorized: AugmentedEvent<ApiType, [H256]>;
            /**
             * The validation function was applied as of the contained relay chain block number.
             **/
            ValidationFunctionApplied: AugmentedEvent<ApiType, [u32]>;
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
            NotifyOverweight: AugmentedEvent<ApiType, [u64, u8, u8, u64, u64]>;
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
            NewSession: AugmentedEvent<ApiType, [u32]>;
            /**
             * Generic event
             **/
            [key: string]: AugmentedEvent<ApiType>;
        };
        sudo: {
            /**
             * The \[sudoer\] just switched identity; the old key is supplied if one existed.
             **/
            KeyChanged: AugmentedEvent<ApiType, [Option<AccountId32>]>;
            /**
             * A sudo just took place. \[result\]
             **/
            Sudid: AugmentedEvent<ApiType, [Result<Null, SpRuntimeDispatchError>]>;
            /**
             * A sudo just took place. \[result\]
             **/
            SudoAsDone: AugmentedEvent<ApiType, [Result<Null, SpRuntimeDispatchError>]>;
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
            ExtrinsicFailed: AugmentedEvent<ApiType, [SpRuntimeDispatchError, FrameSupportWeightsDispatchInfo]>;
            /**
             * An extrinsic completed successfully.
             **/
            ExtrinsicSuccess: AugmentedEvent<ApiType, [FrameSupportWeightsDispatchInfo]>;
            /**
             * An account was reaped.
             **/
            KilledAccount: AugmentedEvent<ApiType, [AccountId32]>;
            /**
             * A new account was created.
             **/
            NewAccount: AugmentedEvent<ApiType, [AccountId32]>;
            /**
             * On on-chain remark happened.
             **/
            Remarked: AugmentedEvent<ApiType, [AccountId32, H256]>;
            /**
             * Generic event
             **/
            [key: string]: AugmentedEvent<ApiType>;
        };
        tokens: {
            /**
             * A balance was set by root.
             **/
            BalanceSet: AugmentedEvent<ApiType, [u32, AccountId32, u128, u128]>;
            /**
             * An account was removed whose balance was non-zero but below
             * ExistentialDeposit, resulting in an outright loss.
             **/
            DustLost: AugmentedEvent<ApiType, [u32, AccountId32, u128]>;
            /**
             * An account was created with some free balance.
             **/
            Endowed: AugmentedEvent<ApiType, [u32, AccountId32, u128]>;
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
            RepatriatedReserve: AugmentedEvent<ApiType, [u32, AccountId32, AccountId32, u128, FrameSupportTokensMiscBalanceStatus]>;
            /**
             * Some balance was reserved (moved from free to reserved).
             **/
            Reserved: AugmentedEvent<ApiType, [u32, AccountId32, u128]>;
            /**
             * Transfer succeeded.
             **/
            Transfer: AugmentedEvent<ApiType, [u32, AccountId32, AccountId32, u128]>;
            /**
             * Some balance was unreserved (moved from reserved to free).
             **/
            Unreserved: AugmentedEvent<ApiType, [u32, AccountId32, u128]>;
            /**
             * Generic event
             **/
            [key: string]: AugmentedEvent<ApiType>;
        };
        treasury: {
            /**
             * Some funds have been allocated.
             **/
            Awarded: AugmentedEvent<ApiType, [u32, u128, AccountId32]>;
            /**
             * Some of our funds have been burnt.
             **/
            Burnt: AugmentedEvent<ApiType, [u128]>;
            /**
             * Some funds have been deposited.
             **/
            Deposit: AugmentedEvent<ApiType, [u128]>;
            /**
             * New proposal.
             **/
            Proposed: AugmentedEvent<ApiType, [u32]>;
            /**
             * A proposal was rejected; funds were slashed.
             **/
            Rejected: AugmentedEvent<ApiType, [u32, u128]>;
            /**
             * Spending has finished; this is the amount that rolls over until next spend.
             **/
            Rollover: AugmentedEvent<ApiType, [u128]>;
            /**
             * We have ended a spend period and will now allocate funds.
             **/
            Spending: AugmentedEvent<ApiType, [u128]>;
            /**
             * Generic event
             **/
            [key: string]: AugmentedEvent<ApiType>;
        };
        unknownTokens: {
            /**
             * Deposit success.
             **/
            Deposited: AugmentedEvent<ApiType, [XcmV1MultiAsset, XcmV1MultiLocation]>;
            /**
             * Withdraw success.
             **/
            Withdrawn: AugmentedEvent<ApiType, [XcmV1MultiAsset, XcmV1MultiLocation]>;
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
             * Batch of dispatches did not complete fully. Index of first failing dispatch given, as
             * well as the error.
             **/
            BatchInterrupted: AugmentedEvent<ApiType, [u32, SpRuntimeDispatchError]>;
            /**
             * A call was dispatched.
             **/
            DispatchedAs: AugmentedEvent<ApiType, [Result<Null, SpRuntimeDispatchError>]>;
            /**
             * A single item within a Batch of dispatches has completed with no error.
             **/
            ItemCompleted: AugmentedEvent<ApiType, []>;
            /**
             * Generic event
             **/
            [key: string]: AugmentedEvent<ApiType>;
        };
        verifier: {
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
            BadFormat: AugmentedEvent<ApiType, [Option<H256>]>;
            /**
             * Bad XCM version used.
             **/
            BadVersion: AugmentedEvent<ApiType, [Option<H256>]>;
            /**
             * Some XCM failed.
             **/
            Fail: AugmentedEvent<ApiType, [Option<H256>, XcmV2TraitsError]>;
            /**
             * An XCM exceeded the individual message weight budget.
             **/
            OverweightEnqueued: AugmentedEvent<ApiType, [u32, u32, u64, u64]>;
            /**
             * An XCM from the overweight queue was executed with the given actual weight used.
             **/
            OverweightServiced: AugmentedEvent<ApiType, [u64, u64]>;
            /**
             * Some XCM was executed ok.
             **/
            Success: AugmentedEvent<ApiType, [Option<H256>]>;
            /**
             * An upward message was sent to the relay chain.
             **/
            UpwardMessageSent: AugmentedEvent<ApiType, [Option<H256>]>;
            /**
             * An HRMP message was sent to a sibling parachain.
             **/
            XcmpMessageSent: AugmentedEvent<ApiType, [Option<H256>]>;
            /**
             * Generic event
             **/
            [key: string]: AugmentedEvent<ApiType>;
        };
        xTokens: {
            /**
             * Transferred.
             **/
            Transferred: AugmentedEvent<ApiType, [AccountId32, u32, u128, XcmV1MultiLocation]>;
            /**
             * Transferred `MultiAsset`.
             **/
            TransferredMultiAsset: AugmentedEvent<ApiType, [AccountId32, XcmV1MultiAsset, XcmV1MultiLocation]>;
            /**
             * Transferred `MultiAsset` with fee.
             **/
            TransferredMultiAssets: AugmentedEvent<ApiType, [AccountId32, XcmV1MultiassetMultiAssets, XcmV1MultiLocation]>;
            /**
             * Transferred `MultiAsset` with fee.
             **/
            TransferredMultiAssetWithFee: AugmentedEvent<ApiType, [AccountId32, XcmV1MultiAsset, XcmV1MultiAsset, XcmV1MultiLocation]>;
            /**
             * Transferred `MultiAsset` with fee.
             **/
            TransferredMultiCurrencies: AugmentedEvent<ApiType, [AccountId32, Vec<ITuple<[u32, u128]>>, XcmV1MultiLocation]>;
            /**
             * Transferred with fee.
             **/
            TransferredWithFee: AugmentedEvent<ApiType, [AccountId32, u32, u128, u128, XcmV1MultiLocation]>;
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
            PoolPromoted: AugmentedEvent<ApiType, [u32]>;
            RewardsClaimed: AugmentedEvent<ApiType, [AccountId32, u32, u128]>;
            /**
             * Generic event
             **/
            [key: string]: AugmentedEvent<ApiType>;
        };
    }
}

declare module '@polkadot/api-base/types/storage' {
    interface AugmentedQueries<ApiType extends ApiTypes> {
        assetRegistry: {
            /**
             * The storages for MultiLocations.
             *
             * AssetLocations: map TokenId => Option<MultiLocation>
             **/
            assetLocations: AugmentedQuery<ApiType, (arg: u32 | AnyNumber | Uint8Array) => Observable<Option<XcmV1MultiLocation>>, [u32]> & QueryableStorageEntry<ApiType, [u32]>;
            /**
             * The storages for CurrencyIds.
             *
             * LocationToCurrencyIds: map MultiLocation => Option<TokenId>
             **/
            locationToCurrencyIds: AugmentedQuery<ApiType, (arg: XcmV1MultiLocation | {
                parents?: any;
                interior?: any;
            } | string | Uint8Array) => Observable<Option<u32>>, [XcmV1MultiLocation]> & QueryableStorageEntry<ApiType, [XcmV1MultiLocation]>;
            /**
             * Generic query
             **/
            [key: string]: QueryableStorageEntry<ApiType>;
        };
        assetsInfo: {
            assetsInfo: AugmentedQuery<ApiType, (arg: u32 | AnyNumber | Uint8Array) => Observable<PalletAssetsInfoAssetInfo>, [u32]> & QueryableStorageEntry<ApiType, [u32]>;
            /**
             * Generic query
             **/
            [key: string]: QueryableStorageEntry<ApiType>;
        };
        aura: {
            /**
             * The current authority set.
             **/
            authorities: AugmentedQuery<ApiType, () => Observable<Vec<SpConsensusAuraSr25519AppSr25519Public>>, []> & QueryableStorageEntry<ApiType, []>;
            /**
             * The current slot of this block.
             *
             * This will be set in `on_initialize`.
             **/
            currentSlot: AugmentedQuery<ApiType, () => Observable<u64>, []> & QueryableStorageEntry<ApiType, []>;
            /**
             * Generic query
             **/
            [key: string]: QueryableStorageEntry<ApiType>;
        };
        auraExt: {
            /**
             * Serves as cache for the authorities.
             *
             * The authorities in AuRa are overwritten in `on_initialize` when we switch to a new session,
             * but we require the old authorities to verify the seal when validating a PoV. This will always
             * be updated to the latest AuRa authorities in `on_finalize`.
             **/
            authorities: AugmentedQuery<ApiType, () => Observable<Vec<SpConsensusAuraSr25519AppSr25519Public>>, []> & QueryableStorageEntry<ApiType, []>;
            /**
             * Generic query
             **/
            [key: string]: QueryableStorageEntry<ApiType>;
        };
        authorship: {
            /**
             * Author of current block.
             **/
            author: AugmentedQuery<ApiType, () => Observable<Option<AccountId32>>, []> & QueryableStorageEntry<ApiType, []>;
            /**
             * Whether uncles were already set in this block.
             **/
            didSetUncles: AugmentedQuery<ApiType, () => Observable<bool>, []> & QueryableStorageEntry<ApiType, []>;
            /**
             * Uncles
             **/
            uncles: AugmentedQuery<ApiType, () => Observable<Vec<PalletAuthorshipUncleEntryItem>>, []> & QueryableStorageEntry<ApiType, []>;
            /**
             * Generic query
             **/
            [key: string]: QueryableStorageEntry<ApiType>;
        };
        bootstrap: {
            bootstrapSchedule: AugmentedQuery<ApiType, () => Observable<Option<ITuple<[u32, u32, u32, ITuple<[u128, u128]>]>>>, []> & QueryableStorageEntry<ApiType, []>;
            claimedRewards: AugmentedQuery<ApiType, (arg1: AccountId32 | string | Uint8Array, arg2: u32 | AnyNumber | Uint8Array) => Observable<u128>, [AccountId32, u32]> & QueryableStorageEntry<ApiType, [AccountId32, u32]>;
            mintedLiquidity: AugmentedQuery<ApiType, () => Observable<ITuple<[u32, u128]>>, []> & QueryableStorageEntry<ApiType, []>;
            phase: AugmentedQuery<ApiType, () => Observable<PalletBootstrapBootstrapPhase>, []> & QueryableStorageEntry<ApiType, []>;
            provisions: AugmentedQuery<ApiType, (arg1: AccountId32 | string | Uint8Array, arg2: u32 | AnyNumber | Uint8Array) => Observable<u128>, [AccountId32, u32]> & QueryableStorageEntry<ApiType, [AccountId32, u32]>;
            valuations: AugmentedQuery<ApiType, () => Observable<ITuple<[u128, u128]>>, []> & QueryableStorageEntry<ApiType, []>;
            vestedProvisions: AugmentedQuery<ApiType, (arg1: AccountId32 | string | Uint8Array, arg2: u32 | AnyNumber | Uint8Array) => Observable<ITuple<[u128, u128]>>, [AccountId32, u32]> & QueryableStorageEntry<ApiType, [AccountId32, u32]>;
            whitelistedAccount: AugmentedQuery<ApiType, (arg: AccountId32 | string | Uint8Array) => Observable<Null>, [AccountId32]> & QueryableStorageEntry<ApiType, [AccountId32]>;
            /**
             * Generic query
             **/
            [key: string]: QueryableStorageEntry<ApiType>;
        };
        bridge: {
            appRegistry: AugmentedQuery<ApiType, (arg: U8aFixed | string | Uint8Array) => Observable<Option<ArtemisCoreApp>>, [U8aFixed]> & QueryableStorageEntry<ApiType, [U8aFixed]>;
            /**
             * Generic query
             **/
            [key: string]: QueryableStorageEntry<ApiType>;
        };
        bridgedAsset: {
            bridgedAsset: AugmentedQuery<ApiType, (arg: u32 | AnyNumber | Uint8Array) => Observable<H160>, [u32]> & QueryableStorageEntry<ApiType, [u32]>;
            nativeAsset: AugmentedQuery<ApiType, (arg: H160 | string | Uint8Array) => Observable<u32>, [H160]> & QueryableStorageEntry<ApiType, [H160]>;
            /**
             * Generic query
             **/
            [key: string]: QueryableStorageEntry<ApiType>;
        };
        council: {
            /**
             * The current members of the collective. This is stored sorted (just by value).
             **/
            members: AugmentedQuery<ApiType, () => Observable<Vec<AccountId32>>, []> & QueryableStorageEntry<ApiType, []>;
            /**
             * The prime member that helps determine the default vote behavior in case of absentations.
             **/
            prime: AugmentedQuery<ApiType, () => Observable<Option<AccountId32>>, []> & QueryableStorageEntry<ApiType, []>;
            /**
             * Proposals so far.
             **/
            proposalCount: AugmentedQuery<ApiType, () => Observable<u32>, []> & QueryableStorageEntry<ApiType, []>;
            /**
             * Actual proposal for a given hash, if it's current.
             **/
            proposalOf: AugmentedQuery<ApiType, (arg: H256 | string | Uint8Array) => Observable<Option<Call>>, [H256]> & QueryableStorageEntry<ApiType, [H256]>;
            /**
             * The hashes of the active proposals.
             **/
            proposals: AugmentedQuery<ApiType, () => Observable<Vec<H256>>, []> & QueryableStorageEntry<ApiType, []>;
            /**
             * Votes on a given proposal, if it is ongoing.
             **/
            voting: AugmentedQuery<ApiType, (arg: H256 | string | Uint8Array) => Observable<Option<PalletCollectiveVotes>>, [H256]> & QueryableStorageEntry<ApiType, [H256]>;
            /**
             * Generic query
             **/
            [key: string]: QueryableStorageEntry<ApiType>;
        };
        crowdloan: {
            accountsPayable: AugmentedQuery<ApiType, (arg: AccountId32 | string | Uint8Array) => Observable<Option<PalletCrowdloanRewardsRewardInfo>>, [AccountId32]> & QueryableStorageEntry<ApiType, [AccountId32]>;
            claimedRelayChainIds: AugmentedQuery<ApiType, (arg: AccountId32 | string | Uint8Array) => Observable<Option<Null>>, [AccountId32]> & QueryableStorageEntry<ApiType, [AccountId32]>;
            crowdloanAllocation: AugmentedQuery<ApiType, () => Observable<u128>, []> & QueryableStorageEntry<ApiType, []>;
            /**
             * Vesting block height at the initialization of the pallet
             **/
            endRelayBlock: AugmentedQuery<ApiType, () => Observable<u32>, []> & QueryableStorageEntry<ApiType, []>;
            initialized: AugmentedQuery<ApiType, () => Observable<bool>, []> & QueryableStorageEntry<ApiType, []>;
            /**
             * Total initialized amount so far. We store this to make pallet funds == contributors reward
             * check easier and more efficient
             **/
            initializedRewardAmount: AugmentedQuery<ApiType, () => Observable<u128>, []> & QueryableStorageEntry<ApiType, []>;
            /**
             * Vesting block height at the initialization of the pallet
             **/
            initRelayBlock: AugmentedQuery<ApiType, () => Observable<u32>, []> & QueryableStorageEntry<ApiType, []>;
            /**
             * Total number of contributors to aid hinting benchmarking
             **/
            totalContributors: AugmentedQuery<ApiType, () => Observable<u32>, []> & QueryableStorageEntry<ApiType, []>;
            unassociatedContributions: AugmentedQuery<ApiType, (arg: AccountId32 | string | Uint8Array) => Observable<Option<PalletCrowdloanRewardsRewardInfo>>, [AccountId32]> & QueryableStorageEntry<ApiType, [AccountId32]>;
            /**
             * Generic query
             **/
            [key: string]: QueryableStorageEntry<ApiType>;
        };
        dmpQueue: {
            /**
             * The configuration.
             **/
            configuration: AugmentedQuery<ApiType, () => Observable<CumulusPalletDmpQueueConfigData>, []> & QueryableStorageEntry<ApiType, []>;
            /**
             * The overweight messages.
             **/
            overweight: AugmentedQuery<ApiType, (arg: u64 | AnyNumber | Uint8Array) => Observable<Option<ITuple<[u32, Bytes]>>>, [u64]> & QueryableStorageEntry<ApiType, [u64]>;
            /**
             * The page index.
             **/
            pageIndex: AugmentedQuery<ApiType, () => Observable<CumulusPalletDmpQueuePageIndexData>, []> & QueryableStorageEntry<ApiType, []>;
            /**
             * The queue pages.
             **/
            pages: AugmentedQuery<ApiType, (arg: u32 | AnyNumber | Uint8Array) => Observable<Vec<ITuple<[u32, Bytes]>>>, [u32]> & QueryableStorageEntry<ApiType, [u32]>;
            /**
             * Generic query
             **/
            [key: string]: QueryableStorageEntry<ApiType>;
        };
        elections: {
            /**
             * The present candidate list. A current member or runner-up can never enter this vector
             * and is always implicitly assumed to be a candidate.
             *
             * Second element is the deposit.
             *
             * Invariant: Always sorted based on account id.
             **/
            candidates: AugmentedQuery<ApiType, () => Observable<Vec<ITuple<[AccountId32, u128]>>>, []> & QueryableStorageEntry<ApiType, []>;
            /**
             * The total number of vote rounds that have happened, excluding the upcoming one.
             **/
            electionRounds: AugmentedQuery<ApiType, () => Observable<u32>, []> & QueryableStorageEntry<ApiType, []>;
            /**
             * The current elected members.
             *
             * Invariant: Always sorted based on account id.
             **/
            members: AugmentedQuery<ApiType, () => Observable<Vec<PalletElectionsPhragmenSeatHolder>>, []> & QueryableStorageEntry<ApiType, []>;
            /**
             * The current reserved runners-up.
             *
             * Invariant: Always sorted based on rank (worse to best). Upon removal of a member, the
             * last (i.e. _best_) runner-up will be replaced.
             **/
            runnersUp: AugmentedQuery<ApiType, () => Observable<Vec<PalletElectionsPhragmenSeatHolder>>, []> & QueryableStorageEntry<ApiType, []>;
            /**
             * Votes and locked stake of a particular voter.
             *
             * TWOX-NOTE: SAFE as `AccountId` is a crypto hash.
             **/
            voting: AugmentedQuery<ApiType, (arg: AccountId32 | string | Uint8Array) => Observable<PalletElectionsPhragmenVoter>, [AccountId32]> & QueryableStorageEntry<ApiType, [AccountId32]>;
            /**
             * Generic query
             **/
            [key: string]: QueryableStorageEntry<ApiType>;
        };
        erc20: {
            /**
             * Generic query
             **/
            [key: string]: QueryableStorageEntry<ApiType>;
        };
        eth: {
            /**
             * Generic query
             **/
            [key: string]: QueryableStorageEntry<ApiType>;
        };
        issuance: {
            issuanceConfigStore: AugmentedQuery<ApiType, () => Observable<Option<PalletIssuanceIssuanceInfo>>, []> & QueryableStorageEntry<ApiType, []>;
            isTGEFinalized: AugmentedQuery<ApiType, () => Observable<bool>, []> & QueryableStorageEntry<ApiType, []>;
            promotedPoolsRewards: AugmentedQuery<ApiType, (arg: u32 | AnyNumber | Uint8Array) => Observable<u128>, [u32]> & QueryableStorageEntry<ApiType, [u32]>;
            sessionIssuance: AugmentedQuery<ApiType, (arg: u32 | AnyNumber | Uint8Array) => Observable<Option<ITuple<[u128, u128]>>>, [u32]> & QueryableStorageEntry<ApiType, [u32]>;
            tgeTotal: AugmentedQuery<ApiType, () => Observable<u128>, []> & QueryableStorageEntry<ApiType, []>;
            /**
             * Generic query
             **/
            [key: string]: QueryableStorageEntry<ApiType>;
        };
        parachainInfo: {
            parachainId: AugmentedQuery<ApiType, () => Observable<u32>, []> & QueryableStorageEntry<ApiType, []>;
            /**
             * Generic query
             **/
            [key: string]: QueryableStorageEntry<ApiType>;
        };
        parachainStaking: {
            /**
             * Snapshot of collator delegation stake at the start of the round
             **/
            atStake: AugmentedQuery<ApiType, (arg1: u32 | AnyNumber | Uint8Array, arg2: AccountId32 | string | Uint8Array) => Observable<ParachainStakingCollatorSnapshot>, [u32, AccountId32]> & QueryableStorageEntry<ApiType, [u32, AccountId32]>;
            /**
             * Points for each collator per round
             **/
            awardedPts: AugmentedQuery<ApiType, (arg1: u32 | AnyNumber | Uint8Array, arg2: AccountId32 | string | Uint8Array) => Observable<u32>, [u32, AccountId32]> & QueryableStorageEntry<ApiType, [u32, AccountId32]>;
            /**
             * The pool of collator candidates, each with their total backing stake
             **/
            candidatePool: AugmentedQuery<ApiType, () => Observable<Vec<ParachainStakingBond>>, []> & QueryableStorageEntry<ApiType, []>;
            /**
             * Get collator candidate state associated with an account if account is a candidate else None
             **/
            candidateState: AugmentedQuery<ApiType, (arg: AccountId32 | string | Uint8Array) => Observable<Option<ParachainStakingCollatorCandidate>>, [AccountId32]> & QueryableStorageEntry<ApiType, [AccountId32]>;
            /**
             * Commission percent taken off of rewards for all collators
             **/
            collatorCommission: AugmentedQuery<ApiType, () => Observable<Perbill>, []> & QueryableStorageEntry<ApiType, []>;
            /**
             * Get delegator state associated with an account if account is delegating else None
             **/
            delegatorState: AugmentedQuery<ApiType, (arg: AccountId32 | string | Uint8Array) => Observable<Option<ParachainStakingDelegator>>, [AccountId32]> & QueryableStorageEntry<ApiType, [AccountId32]>;
            /**
             * Total points awarded to collators for block production in the round
             **/
            points: AugmentedQuery<ApiType, (arg: u32 | AnyNumber | Uint8Array) => Observable<u32>, [u32]> & QueryableStorageEntry<ApiType, [u32]>;
            /**
             * Current round index and next round scheduled transition
             **/
            round: AugmentedQuery<ApiType, () => Observable<ParachainStakingRoundInfo>, []> & QueryableStorageEntry<ApiType, []>;
            /**
             * The collator candidates selected for the current round
             **/
            selectedCandidates: AugmentedQuery<ApiType, () => Observable<Vec<AccountId32>>, []> & QueryableStorageEntry<ApiType, []>;
            /**
             * Points for each collator per round
             **/
            stakingLiquidityTokens: AugmentedQuery<ApiType, () => Observable<BTreeMap<u32, Option<ITuple<[u128, u128]>>>>, []> & QueryableStorageEntry<ApiType, []>;
            /**
             * Total capital locked by this staking pallet
             **/
            total: AugmentedQuery<ApiType, (arg: u32 | AnyNumber | Uint8Array) => Observable<u128>, [u32]> & QueryableStorageEntry<ApiType, [u32]>;
            /**
             * The total candidates selected every round
             **/
            totalSelected: AugmentedQuery<ApiType, () => Observable<u32>, []> & QueryableStorageEntry<ApiType, []>;
            /**
             * Generic query
             **/
            [key: string]: QueryableStorageEntry<ApiType>;
        };
        parachainSystem: {
            /**
             * The number of HRMP messages we observed in `on_initialize` and thus used that number for
             * announcing the weight of `on_initialize` and `on_finalize`.
             **/
            announcedHrmpMessagesPerCandidate: AugmentedQuery<ApiType, () => Observable<u32>, []> & QueryableStorageEntry<ApiType, []>;
            /**
             * The next authorized upgrade, if there is one.
             **/
            authorizedUpgrade: AugmentedQuery<ApiType, () => Observable<Option<H256>>, []> & QueryableStorageEntry<ApiType, []>;
            /**
             * A custom head data that should be returned as result of `validate_block`.
             *
             * See [`Pallet::set_custom_validation_head_data`] for more information.
             **/
            customValidationHeadData: AugmentedQuery<ApiType, () => Observable<Option<Bytes>>, []> & QueryableStorageEntry<ApiType, []>;
            /**
             * Were the validation data set to notify the relay chain?
             **/
            didSetValidationCode: AugmentedQuery<ApiType, () => Observable<bool>, []> & QueryableStorageEntry<ApiType, []>;
            /**
             * The parachain host configuration that was obtained from the relay parent.
             *
             * This field is meant to be updated each block with the validation data inherent. Therefore,
             * before processing of the inherent, e.g. in `on_initialize` this data may be stale.
             *
             * This data is also absent from the genesis.
             **/
            hostConfiguration: AugmentedQuery<ApiType, () => Observable<Option<PolkadotPrimitivesV1AbridgedHostConfiguration>>, []> & QueryableStorageEntry<ApiType, []>;
            /**
             * HRMP messages that were sent in a block.
             *
             * This will be cleared in `on_initialize` of each new block.
             **/
            hrmpOutboundMessages: AugmentedQuery<ApiType, () => Observable<Vec<PolkadotCorePrimitivesOutboundHrmpMessage>>, []> & QueryableStorageEntry<ApiType, []>;
            /**
             * HRMP watermark that was set in a block.
             *
             * This will be cleared in `on_initialize` of each new block.
             **/
            hrmpWatermark: AugmentedQuery<ApiType, () => Observable<u32>, []> & QueryableStorageEntry<ApiType, []>;
            /**
             * The last downward message queue chain head we have observed.
             *
             * This value is loaded before and saved after processing inbound downward messages carried
             * by the system inherent.
             **/
            lastDmqMqcHead: AugmentedQuery<ApiType, () => Observable<H256>, []> & QueryableStorageEntry<ApiType, []>;
            /**
             * The message queue chain heads we have observed per each channel incoming channel.
             *
             * This value is loaded before and saved after processing inbound downward messages carried
             * by the system inherent.
             **/
            lastHrmpMqcHeads: AugmentedQuery<ApiType, () => Observable<BTreeMap<u32, H256>>, []> & QueryableStorageEntry<ApiType, []>;
            /**
             * Validation code that is set by the parachain and is to be communicated to collator and
             * consequently the relay-chain.
             *
             * This will be cleared in `on_initialize` of each new block if no other pallet already set
             * the value.
             **/
            newValidationCode: AugmentedQuery<ApiType, () => Observable<Option<Bytes>>, []> & QueryableStorageEntry<ApiType, []>;
            /**
             * Upward messages that are still pending and not yet send to the relay chain.
             **/
            pendingUpwardMessages: AugmentedQuery<ApiType, () => Observable<Vec<Bytes>>, []> & QueryableStorageEntry<ApiType, []>;
            /**
             * In case of a scheduled upgrade, this storage field contains the validation code to be applied.
             *
             * As soon as the relay chain gives us the go-ahead signal, we will overwrite the [`:code`][well_known_keys::CODE]
             * which will result the next block process with the new validation code. This concludes the upgrade process.
             *
             * [well_known_keys::CODE]: sp_core::storage::well_known_keys::CODE
             **/
            pendingValidationCode: AugmentedQuery<ApiType, () => Observable<Bytes>, []> & QueryableStorageEntry<ApiType, []>;
            /**
             * Number of downward messages processed in a block.
             *
             * This will be cleared in `on_initialize` of each new block.
             **/
            processedDownwardMessages: AugmentedQuery<ApiType, () => Observable<u32>, []> & QueryableStorageEntry<ApiType, []>;
            /**
             * The snapshot of some state related to messaging relevant to the current parachain as per
             * the relay parent.
             *
             * This field is meant to be updated each block with the validation data inherent. Therefore,
             * before processing of the inherent, e.g. in `on_initialize` this data may be stale.
             *
             * This data is also absent from the genesis.
             **/
            relevantMessagingState: AugmentedQuery<ApiType, () => Observable<Option<CumulusPalletParachainSystemRelayStateSnapshotMessagingStateSnapshot>>, []> & QueryableStorageEntry<ApiType, []>;
            /**
             * The weight we reserve at the beginning of the block for processing DMP messages. This
             * overrides the amount set in the Config trait.
             **/
            reservedDmpWeightOverride: AugmentedQuery<ApiType, () => Observable<Option<u64>>, []> & QueryableStorageEntry<ApiType, []>;
            /**
             * The weight we reserve at the beginning of the block for processing XCMP messages. This
             * overrides the amount set in the Config trait.
             **/
            reservedXcmpWeightOverride: AugmentedQuery<ApiType, () => Observable<Option<u64>>, []> & QueryableStorageEntry<ApiType, []>;
            /**
             * An option which indicates if the relay-chain restricts signalling a validation code upgrade.
             * In other words, if this is `Some` and [`NewValidationCode`] is `Some` then the produced
             * candidate will be invalid.
             *
             * This storage item is a mirror of the corresponding value for the current parachain from the
             * relay-chain. This value is ephemeral which means it doesn't hit the storage. This value is
             * set after the inherent.
             **/
            upgradeRestrictionSignal: AugmentedQuery<ApiType, () => Observable<Option<PolkadotPrimitivesV1UpgradeRestriction>>, []> & QueryableStorageEntry<ApiType, []>;
            /**
             * Upward messages that were sent in a block.
             *
             * This will be cleared in `on_initialize` of each new block.
             **/
            upwardMessages: AugmentedQuery<ApiType, () => Observable<Vec<Bytes>>, []> & QueryableStorageEntry<ApiType, []>;
            /**
             * The [`PersistedValidationData`] set for this block.
             * This value is expected to be set only once per block and it's never stored
             * in the trie.
             **/
            validationData: AugmentedQuery<ApiType, () => Observable<Option<PolkadotPrimitivesV1PersistedValidationData>>, []> & QueryableStorageEntry<ApiType, []>;
            /**
             * Generic query
             **/
            [key: string]: QueryableStorageEntry<ApiType>;
        };
        polkadotXcm: {
            /**
             * The existing asset traps.
             *
             * Key is the blake2 256 hash of (origin, versioned `MultiAssets`) pair. Value is the number of
             * times this pair has been trapped (usually just 1 if it exists at all).
             **/
            assetTraps: AugmentedQuery<ApiType, (arg: H256 | string | Uint8Array) => Observable<u32>, [H256]> & QueryableStorageEntry<ApiType, [H256]>;
            /**
             * The current migration's stage, if any.
             **/
            currentMigration: AugmentedQuery<ApiType, () => Observable<Option<PalletXcmVersionMigrationStage>>, []> & QueryableStorageEntry<ApiType, []>;
            /**
             * The ongoing queries.
             **/
            queries: AugmentedQuery<ApiType, (arg: u64 | AnyNumber | Uint8Array) => Observable<Option<PalletXcmQueryStatus>>, [u64]> & QueryableStorageEntry<ApiType, [u64]>;
            /**
             * The latest available query index.
             **/
            queryCounter: AugmentedQuery<ApiType, () => Observable<u64>, []> & QueryableStorageEntry<ApiType, []>;
            /**
             * Default version to encode XCM when latest version of destination is unknown. If `None`,
             * then the destinations whose XCM version is unknown are considered unreachable.
             **/
            safeXcmVersion: AugmentedQuery<ApiType, () => Observable<Option<u32>>, []> & QueryableStorageEntry<ApiType, []>;
            /**
             * The Latest versions that we know various locations support.
             **/
            supportedVersion: AugmentedQuery<ApiType, (arg1: u32 | AnyNumber | Uint8Array, arg2: XcmVersionedMultiLocation | {
                V0: any;
            } | {
                V1: any;
            } | string | Uint8Array) => Observable<Option<u32>>, [u32, XcmVersionedMultiLocation]> & QueryableStorageEntry<ApiType, [u32, XcmVersionedMultiLocation]>;
            /**
             * Destinations whose latest XCM version we would like to know. Duplicates not allowed, and
             * the `u32` counter is the number of times that a send to the destination has been attempted,
             * which is used as a prioritization.
             **/
            versionDiscoveryQueue: AugmentedQuery<ApiType, () => Observable<Vec<ITuple<[XcmVersionedMultiLocation, u32]>>>, []> & QueryableStorageEntry<ApiType, []>;
            /**
             * All locations that we have requested version notifications from.
             **/
            versionNotifiers: AugmentedQuery<ApiType, (arg1: u32 | AnyNumber | Uint8Array, arg2: XcmVersionedMultiLocation | {
                V0: any;
            } | {
                V1: any;
            } | string | Uint8Array) => Observable<Option<u64>>, [u32, XcmVersionedMultiLocation]> & QueryableStorageEntry<ApiType, [u32, XcmVersionedMultiLocation]>;
            /**
             * The target locations that are subscribed to our version changes, as well as the most recent
             * of our versions we informed them of.
             **/
            versionNotifyTargets: AugmentedQuery<ApiType, (arg1: u32 | AnyNumber | Uint8Array, arg2: XcmVersionedMultiLocation | {
                V0: any;
            } | {
                V1: any;
            } | string | Uint8Array) => Observable<Option<ITuple<[u64, u64, u32]>>>, [u32, XcmVersionedMultiLocation]> & QueryableStorageEntry<ApiType, [u32, XcmVersionedMultiLocation]>;
            /**
             * Generic query
             **/
            [key: string]: QueryableStorageEntry<ApiType>;
        };
        session: {
            /**
             * Current index of the session.
             **/
            currentIndex: AugmentedQuery<ApiType, () => Observable<u32>, []> & QueryableStorageEntry<ApiType, []>;
            /**
             * Indices of disabled validators.
             *
             * The vec is always kept sorted so that we can find whether a given validator is
             * disabled using binary search. It gets cleared when `on_session_ending` returns
             * a new set of identities.
             **/
            disabledValidators: AugmentedQuery<ApiType, () => Observable<Vec<u32>>, []> & QueryableStorageEntry<ApiType, []>;
            /**
             * The owner of a key. The key is the `KeyTypeId` + the encoded key.
             **/
            keyOwner: AugmentedQuery<ApiType, (arg: ITuple<[SpCoreCryptoKeyTypeId, Bytes]> | [SpCoreCryptoKeyTypeId | string | Uint8Array, Bytes | string | Uint8Array]) => Observable<Option<AccountId32>>, [ITuple<[SpCoreCryptoKeyTypeId, Bytes]>]> & QueryableStorageEntry<ApiType, [ITuple<[SpCoreCryptoKeyTypeId, Bytes]>]>;
            /**
             * The next session keys for a validator.
             **/
            nextKeys: AugmentedQuery<ApiType, (arg: AccountId32 | string | Uint8Array) => Observable<Option<MangataKusamaRuntimeSessionKeys>>, [AccountId32]> & QueryableStorageEntry<ApiType, [AccountId32]>;
            /**
             * True if the underlying economic identities or weighting behind the validators
             * has changed in the queued validator set.
             **/
            queuedChanged: AugmentedQuery<ApiType, () => Observable<bool>, []> & QueryableStorageEntry<ApiType, []>;
            /**
             * The queued keys for the next session. When the next session begins, these keys
             * will be used to determine the validator's session keys.
             **/
            queuedKeys: AugmentedQuery<ApiType, () => Observable<Vec<ITuple<[AccountId32, MangataKusamaRuntimeSessionKeys]>>>, []> & QueryableStorageEntry<ApiType, []>;
            /**
             * The current set of validators.
             **/
            validators: AugmentedQuery<ApiType, () => Observable<Vec<AccountId32>>, []> & QueryableStorageEntry<ApiType, []>;
            /**
             * Generic query
             **/
            [key: string]: QueryableStorageEntry<ApiType>;
        };
        sudo: {
            /**
             * The `AccountId` of the sudo key.
             **/
            key: AugmentedQuery<ApiType, () => Observable<Option<AccountId32>>, []> & QueryableStorageEntry<ApiType, []>;
            /**
             * Generic query
             **/
            [key: string]: QueryableStorageEntry<ApiType>;
        };
        system: {
            /**
             * The full account information for a particular account ID.
             **/
            account: AugmentedQuery<ApiType, (arg: AccountId32 | string | Uint8Array) => Observable<FrameSystemAccountInfo>, [AccountId32]> & QueryableStorageEntry<ApiType, [AccountId32]>;
            /**
             * Total length (in bytes) for all extrinsics put together, for the current block.
             **/
            allExtrinsicsLen: AugmentedQuery<ApiType, () => Observable<Option<u32>>, []> & QueryableStorageEntry<ApiType, []>;
            /**
             * Map of block numbers to block hashes.
             **/
            blockHash: AugmentedQuery<ApiType, (arg: u32 | AnyNumber | Uint8Array) => Observable<H256>, [u32]> & QueryableStorageEntry<ApiType, [u32]>;
            /**
             * Map of block numbers to block hashes.
             **/
            blockSeed: AugmentedQuery<ApiType, () => Observable<H256>, []> & QueryableStorageEntry<ApiType, []>;
            /**
             * The current weight for the block.
             **/
            blockWeight: AugmentedQuery<ApiType, () => Observable<FrameSupportWeightsPerDispatchClassU64>, []> & QueryableStorageEntry<ApiType, []>;
            /**
             * Digest of the current block, also part of the block header.
             **/
            digest: AugmentedQuery<ApiType, () => Observable<SpRuntimeDigest>, []> & QueryableStorageEntry<ApiType, []>;
            /**
             * The number of events in the `Events<T>` list.
             **/
            eventCount: AugmentedQuery<ApiType, () => Observable<u32>, []> & QueryableStorageEntry<ApiType, []>;
            /**
             * Events deposited for the current block.
             *
             * NOTE: This storage item is explicitly unbounded since it is never intended to be read
             * from within the runtime.
             **/
            events: AugmentedQuery<ApiType, () => Observable<Vec<FrameSystemEventRecord>>, []> & QueryableStorageEntry<ApiType, []>;
            /**
             * Mapping between a topic (represented by T::Hash) and a vector of indexes
             * of events in the `<Events<T>>` list.
             *
             * All topic vectors have deterministic storage locations depending on the topic. This
             * allows light-clients to leverage the changes trie storage tracking mechanism and
             * in case of changes fetch the list of events of interest.
             *
             * The value has the type `(T::BlockNumber, EventIndex)` because if we used only just
             * the `EventIndex` then in case if the topic has the same contents on the next block
             * no notification will be triggered thus the event might be lost.
             **/
            eventTopics: AugmentedQuery<ApiType, (arg: H256 | string | Uint8Array) => Observable<Vec<ITuple<[u32, u32]>>>, [H256]> & QueryableStorageEntry<ApiType, [H256]>;
            /**
             * The execution phase of the block.
             **/
            executionPhase: AugmentedQuery<ApiType, () => Observable<Option<FrameSystemPhase>>, []> & QueryableStorageEntry<ApiType, []>;
            /**
             * Total extrinsics count for the current block.
             **/
            extrinsicCount: AugmentedQuery<ApiType, () => Observable<Option<u32>>, []> & QueryableStorageEntry<ApiType, []>;
            /**
             * Extrinsics data for the current block (maps an extrinsic's index to its data).
             **/
            extrinsicData: AugmentedQuery<ApiType, (arg: u32 | AnyNumber | Uint8Array) => Observable<Bytes>, [u32]> & QueryableStorageEntry<ApiType, [u32]>;
            /**
             * Stores the `spec_version` and `spec_name` of when the last runtime upgrade happened.
             **/
            lastRuntimeUpgrade: AugmentedQuery<ApiType, () => Observable<Option<FrameSystemLastRuntimeUpgradeInfo>>, []> & QueryableStorageEntry<ApiType, []>;
            /**
             * The current block number being processed. Set by `execute_block`.
             **/
            number: AugmentedQuery<ApiType, () => Observable<u32>, []> & QueryableStorageEntry<ApiType, []>;
            /**
             * Hash of the previous block.
             **/
            parentHash: AugmentedQuery<ApiType, () => Observable<H256>, []> & QueryableStorageEntry<ApiType, []>;
            /**
             * True if we have upgraded so that AccountInfo contains three types of `RefCount`. False
             * (default) if not.
             **/
            upgradedToTripleRefCount: AugmentedQuery<ApiType, () => Observable<bool>, []> & QueryableStorageEntry<ApiType, []>;
            /**
             * True if we have upgraded so that `type RefCount` is `u32`. False (default) if not.
             **/
            upgradedToU32RefCount: AugmentedQuery<ApiType, () => Observable<bool>, []> & QueryableStorageEntry<ApiType, []>;
            /**
             * Generic query
             **/
            [key: string]: QueryableStorageEntry<ApiType>;
        };
        timestamp: {
            /**
             * Did the timestamp get updated in this block?
             **/
            didUpdate: AugmentedQuery<ApiType, () => Observable<bool>, []> & QueryableStorageEntry<ApiType, []>;
            /**
             * Current time for the current block.
             **/
            now: AugmentedQuery<ApiType, () => Observable<u64>, []> & QueryableStorageEntry<ApiType, []>;
            /**
             * Generic query
             **/
            [key: string]: QueryableStorageEntry<ApiType>;
        };
        tokens: {
            /**
             * The balance of a token type under an account.
             *
             * NOTE: If the total is ever zero, decrease account ref account.
             *
             * NOTE: This is only used in the case that this module is used to store
             * balances.
             **/
            accounts: AugmentedQuery<ApiType, (arg1: AccountId32 | string | Uint8Array, arg2: u32 | AnyNumber | Uint8Array) => Observable<OrmlTokensAccountData>, [AccountId32, u32]> & QueryableStorageEntry<ApiType, [AccountId32, u32]>;
            /**
             * Any liquidity locks of a token type under an account.
             * NOTE: Should only be accessed when setting, changing and freeing a lock.
             **/
            locks: AugmentedQuery<ApiType, (arg1: AccountId32 | string | Uint8Array, arg2: u32 | AnyNumber | Uint8Array) => Observable<Vec<OrmlTokensBalanceLock>>, [AccountId32, u32]> & QueryableStorageEntry<ApiType, [AccountId32, u32]>;
            nextCurrencyId: AugmentedQuery<ApiType, () => Observable<u32>, []> & QueryableStorageEntry<ApiType, []>;
            /**
             * The total issuance of a token type.
             **/
            totalIssuance: AugmentedQuery<ApiType, (arg: u32 | AnyNumber | Uint8Array) => Observable<u128>, [u32]> & QueryableStorageEntry<ApiType, [u32]>;
            /**
             * Generic query
             **/
            [key: string]: QueryableStorageEntry<ApiType>;
        };
        transactionPayment: {
            nextFeeMultiplier: AugmentedQuery<ApiType, () => Observable<u128>, []> & QueryableStorageEntry<ApiType, []>;
            storageVersion: AugmentedQuery<ApiType, () => Observable<PalletTransactionPaymentReleases>, []> & QueryableStorageEntry<ApiType, []>;
            /**
             * Generic query
             **/
            [key: string]: QueryableStorageEntry<ApiType>;
        };
        treasury: {
            /**
             * Proposal indices that have been approved but not yet awarded.
             **/
            approvals: AugmentedQuery<ApiType, () => Observable<Vec<u32>>, []> & QueryableStorageEntry<ApiType, []>;
            /**
             * Number of proposals that have been made.
             **/
            proposalCount: AugmentedQuery<ApiType, () => Observable<u32>, []> & QueryableStorageEntry<ApiType, []>;
            /**
             * Proposals that have been made.
             **/
            proposals: AugmentedQuery<ApiType, (arg: u32 | AnyNumber | Uint8Array) => Observable<Option<PalletTreasuryProposal>>, [u32]> & QueryableStorageEntry<ApiType, [u32]>;
            /**
             * Generic query
             **/
            [key: string]: QueryableStorageEntry<ApiType>;
        };
        unknownTokens: {
            /**
             * Abstract fungible balances under a given location and a abstract
             * fungible id.
             *
             * double_map: who, asset_id => u128
             **/
            abstractFungibleBalances: AugmentedQuery<ApiType, (arg1: XcmV1MultiLocation | {
                parents?: any;
                interior?: any;
            } | string | Uint8Array, arg2: Bytes | string | Uint8Array) => Observable<u128>, [XcmV1MultiLocation, Bytes]> & QueryableStorageEntry<ApiType, [XcmV1MultiLocation, Bytes]>;
            /**
             * Concrete fungible balances under a given location and a concrete
             * fungible id.
             *
             * double_map: who, asset_id => u128
             **/
            concreteFungibleBalances: AugmentedQuery<ApiType, (arg1: XcmV1MultiLocation | {
                parents?: any;
                interior?: any;
            } | string | Uint8Array, arg2: XcmV1MultiLocation | {
                parents?: any;
                interior?: any;
            } | string | Uint8Array) => Observable<u128>, [XcmV1MultiLocation, XcmV1MultiLocation]> & QueryableStorageEntry<ApiType, [XcmV1MultiLocation, XcmV1MultiLocation]>;
            /**
             * Generic query
             **/
            [key: string]: QueryableStorageEntry<ApiType>;
        };
        verifier: {
            /**
             * The trusted [`AccountId`] of the external relayer service.
             **/
            relayKey: AugmentedQuery<ApiType, () => Observable<AccountId32>, []> & QueryableStorageEntry<ApiType, []>;
            /**
             * Hashes of previously seen messages. Used to implement replay protection.
             **/
            verifiedPayloads: AugmentedQuery<ApiType, (arg: H256 | string | Uint8Array) => Observable<Null>, [H256]> & QueryableStorageEntry<ApiType, [H256]>;
            /**
             * Generic query
             **/
            [key: string]: QueryableStorageEntry<ApiType>;
        };
        vesting: {
            /**
             * Storage version of the pallet.
             *
             * New networks start with latest version, as determined by the genesis build.
             **/
            storageVersion: AugmentedQuery<ApiType, () => Observable<PalletVestingMangataReleases>, []> & QueryableStorageEntry<ApiType, []>;
            /**
             * Information regarding the vesting of a given account.
             **/
            vesting: AugmentedQuery<ApiType, (arg1: AccountId32 | string | Uint8Array, arg2: u32 | AnyNumber | Uint8Array) => Observable<Option<Vec<PalletVestingMangataVestingInfo>>>, [AccountId32, u32]> & QueryableStorageEntry<ApiType, [AccountId32, u32]>;
            /**
             * Generic query
             **/
            [key: string]: QueryableStorageEntry<ApiType>;
        };
        xcmpQueue: {
            /**
             * Inbound aggregate XCMP messages. It can only be one per ParaId/block.
             **/
            inboundXcmpMessages: AugmentedQuery<ApiType, (arg1: u32 | AnyNumber | Uint8Array, arg2: u32 | AnyNumber | Uint8Array) => Observable<Bytes>, [u32, u32]> & QueryableStorageEntry<ApiType, [u32, u32]>;
            /**
             * Status of the inbound XCMP channels.
             **/
            inboundXcmpStatus: AugmentedQuery<ApiType, () => Observable<Vec<CumulusPalletXcmpQueueInboundChannelDetails>>, []> & QueryableStorageEntry<ApiType, []>;
            /**
             * The messages outbound in a given XCMP channel.
             **/
            outboundXcmpMessages: AugmentedQuery<ApiType, (arg1: u32 | AnyNumber | Uint8Array, arg2: u16 | AnyNumber | Uint8Array) => Observable<Bytes>, [u32, u16]> & QueryableStorageEntry<ApiType, [u32, u16]>;
            /**
             * The non-empty XCMP channels in order of becoming non-empty, and the index of the first
             * and last outbound message. If the two indices are equal, then it indicates an empty
             * queue and there must be a non-`Ok` `OutboundStatus`. We assume queues grow no greater
             * than 65535 items. Queue indices for normal messages begin at one; zero is reserved in
             * case of the need to send a high-priority signal message this block.
             * The bool is true if there is a signal message waiting to be sent.
             **/
            outboundXcmpStatus: AugmentedQuery<ApiType, () => Observable<Vec<CumulusPalletXcmpQueueOutboundChannelDetails>>, []> & QueryableStorageEntry<ApiType, []>;
            /**
             * The messages that exceeded max individual message weight budget.
             *
             * These message stay in this storage map until they are manually dispatched via
             * `service_overweight`.
             **/
            overweight: AugmentedQuery<ApiType, (arg: u64 | AnyNumber | Uint8Array) => Observable<Option<ITuple<[u32, u32, Bytes]>>>, [u64]> & QueryableStorageEntry<ApiType, [u64]>;
            /**
             * The number of overweight messages ever recorded in `Overweight`. Also doubles as the next
             * available free overweight index.
             **/
            overweightCount: AugmentedQuery<ApiType, () => Observable<u64>, []> & QueryableStorageEntry<ApiType, []>;
            /**
             * The configuration which controls the dynamics of the outbound queue.
             **/
            queueConfig: AugmentedQuery<ApiType, () => Observable<CumulusPalletXcmpQueueQueueConfigData>, []> & QueryableStorageEntry<ApiType, []>;
            /**
             * Any signal messages waiting to be sent.
             **/
            signalMessages: AugmentedQuery<ApiType, (arg: u32 | AnyNumber | Uint8Array) => Observable<Bytes>, [u32]> & QueryableStorageEntry<ApiType, [u32]>;
            /**
             * Generic query
             **/
            [key: string]: QueryableStorageEntry<ApiType>;
        };
        xTokens: {
            /**
             * Generic query
             **/
            [key: string]: QueryableStorageEntry<ApiType>;
        };
        xyk: {
            liquidityAssets: AugmentedQuery<ApiType, (arg: ITuple<[u32, u32]> | [u32 | AnyNumber | Uint8Array, u32 | AnyNumber | Uint8Array]) => Observable<Option<u32>>, [ITuple<[u32, u32]>]> & QueryableStorageEntry<ApiType, [ITuple<[u32, u32]>]>;
            liquidityMiningActivePool: AugmentedQuery<ApiType, (arg: u32 | AnyNumber | Uint8Array) => Observable<u128>, [u32]> & QueryableStorageEntry<ApiType, [u32]>;
            liquidityMiningActiveUser: AugmentedQuery<ApiType, (arg: ITuple<[AccountId32, u32]> | [AccountId32 | string | Uint8Array, u32 | AnyNumber | Uint8Array]) => Observable<u128>, [ITuple<[AccountId32, u32]>]> & QueryableStorageEntry<ApiType, [ITuple<[AccountId32, u32]>]>;
            liquidityMiningPool: AugmentedQuery<ApiType, (arg: u32 | AnyNumber | Uint8Array) => Observable<ITuple<[u32, U256, U256]>>, [u32]> & QueryableStorageEntry<ApiType, [u32]>;
            liquidityMiningUser: AugmentedQuery<ApiType, (arg: ITuple<[AccountId32, u32]> | [AccountId32 | string | Uint8Array, u32 | AnyNumber | Uint8Array]) => Observable<ITuple<[u32, U256, U256]>>, [ITuple<[AccountId32, u32]>]> & QueryableStorageEntry<ApiType, [ITuple<[AccountId32, u32]>]>;
            liquidityMiningUserClaimed: AugmentedQuery<ApiType, (arg: ITuple<[AccountId32, u32]> | [AccountId32 | string | Uint8Array, u32 | AnyNumber | Uint8Array]) => Observable<u128>, [ITuple<[AccountId32, u32]>]> & QueryableStorageEntry<ApiType, [ITuple<[AccountId32, u32]>]>;
            liquidityMiningUserToBeClaimed: AugmentedQuery<ApiType, (arg: ITuple<[AccountId32, u32]> | [AccountId32 | string | Uint8Array, u32 | AnyNumber | Uint8Array]) => Observable<u128>, [ITuple<[AccountId32, u32]>]> & QueryableStorageEntry<ApiType, [ITuple<[AccountId32, u32]>]>;
            liquidityPools: AugmentedQuery<ApiType, (arg: u32 | AnyNumber | Uint8Array) => Observable<Option<ITuple<[u32, u32]>>>, [u32]> & QueryableStorageEntry<ApiType, [u32]>;
            pools: AugmentedQuery<ApiType, (arg: ITuple<[u32, u32]> | [u32 | AnyNumber | Uint8Array, u32 | AnyNumber | Uint8Array]) => Observable<ITuple<[u128, u128]>>, [ITuple<[u32, u32]>]> & QueryableStorageEntry<ApiType, [ITuple<[u32, u32]>]>;
            /**
             * Generic query
             **/
            [key: string]: QueryableStorageEntry<ApiType>;
        };
    }
}

declare module '@polkadot/api-base/types/submittable' {
    interface AugmentedSubmittables<ApiType extends ApiTypes> {
        assetRegistry: {
            registerAsset: AugmentedSubmittable<(location: XcmVersionedMultiLocation | {
                V0: any;
            } | {
                V1: any;
            } | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [XcmVersionedMultiLocation]>;
            updateAsset: AugmentedSubmittable<(assetId: u32 | AnyNumber | Uint8Array, location: XcmVersionedMultiLocation | {
                V0: any;
            } | {
                V1: any;
            } | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [u32, XcmVersionedMultiLocation]>;
            /**
             * Generic tx
             **/
            [key: string]: SubmittableExtrinsicFunction<ApiType>;
        };
        assetsInfo: {
            setInfo: AugmentedSubmittable<(asset: u32 | AnyNumber | Uint8Array, name: Option<Bytes> | null | object | string | Uint8Array, symbol: Option<Bytes> | null | object | string | Uint8Array, description: Option<Bytes> | null | object | string | Uint8Array, decimals: Option<u32> | null | object | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [u32, Option<Bytes>, Option<Bytes>, Option<Bytes>, Option<u32>]>;
            /**
             * Generic tx
             **/
            [key: string]: SubmittableExtrinsicFunction<ApiType>;
        };
        authorship: {
            /**
             * Provide a set of uncles.
             **/
            setUncles: AugmentedSubmittable<(newUncles: Vec<SpRuntimeHeaderVerHeader> | (SpRuntimeHeaderVerHeader | {
                parentHash?: any;
                number?: any;
                stateRoot?: any;
                extrinsicsRoot?: any;
                digest?: any;
                seed?: any;
                count?: any;
            } | string | Uint8Array)[]) => SubmittableExtrinsic<ApiType>, [Vec<SpRuntimeHeaderVerHeader>]>;
            /**
             * Generic tx
             **/
            [key: string]: SubmittableExtrinsicFunction<ApiType>;
        };
        bootstrap: {
            /**
             * claim liquidity tokens from pool created as a result of bootstrap event finish
             **/
            claimRewards: AugmentedSubmittable<() => SubmittableExtrinsic<ApiType>, []>;
            /**
             * provisions non-vested/non-locked tokens into the boostrstrap
             **/
            provision: AugmentedSubmittable<(tokenId: u32 | AnyNumber | Uint8Array, amount: u128 | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [u32, u128]>;
            /**
             * provisions vested/locked tokens into the boostrstrap
             **/
            provisionVested: AugmentedSubmittable<(tokenId: u32 | AnyNumber | Uint8Array, amount: u128 | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [u32, u128]>;
            /**
             * schedules start of an bootstrap event where
             * - ido_start - number of block when bootstrap event should be started
             * - whitelist_phase_length - length of whitelist phase in blocks.
             * - public_phase_length - length of public phase in blocks
             * - max_ksm_to_mgx_ratio - maximum tokens ratio that is held by the pallet during bootstrap event
             *
             * max_ksm_to_mgx_ratio[0]       KSM VALUATION
             * ----------------------- < ---------------------
             * max_ksm_to_mgx_ratio[1]       MGX VALUATION
             *
             * bootstrap phases:
             * - BeforeStart - blocks 0..ido_start
             * - WhitelistPhase - blocks ido_start..(ido_start + whitelist_phase_length)
             * - PublicPhase - blocks (ido_start + whitelist_phase_length)..(ido_start + whitelist_phase_length  + public_phase_lenght)
             **/
            startIdo: AugmentedSubmittable<(idoStart: u32 | AnyNumber | Uint8Array, whitelistPhaseLength: u32 | AnyNumber | Uint8Array, publicPhaseLenght: u32 | AnyNumber | Uint8Array, maxKsmToMgxRatio: ITuple<[u128, u128]> | [u128 | AnyNumber | Uint8Array, u128 | AnyNumber | Uint8Array]) => SubmittableExtrinsic<ApiType>, [u32, u32, u32, ITuple<[u128, u128]>]>;
            /**
             * provides a list of whitelisted accounts, list is extended with every call
             **/
            whitelistAccounts: AugmentedSubmittable<(accounts: Vec<AccountId32> | (AccountId32 | string | Uint8Array)[]) => SubmittableExtrinsic<ApiType>, [Vec<AccountId32>]>;
            /**
             * Generic tx
             **/
            [key: string]: SubmittableExtrinsicFunction<ApiType>;
        };
        bridge: {
            /**
             * Submit `message` for dispatch to a target application identified by `app_id`.
             **/
            submit: AugmentedSubmittable<(appId: U8aFixed | string | Uint8Array, message: ArtemisCoreMessage | {
                payload?: any;
                verification?: any;
            } | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [U8aFixed, ArtemisCoreMessage]>;
            /**
             * Updates an app registry entry. Can use provided current_app_id_option to reduce DB reads.
             **/
            updateRegistry: AugmentedSubmittable<(app: ArtemisCoreApp | 'ETH' | 'ERC20' | number | Uint8Array, currentAppIdOption: Option<U8aFixed> | null | object | string | Uint8Array, updatedAppId: U8aFixed | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [ArtemisCoreApp, Option<U8aFixed>, U8aFixed]>;
            /**
             * Generic tx
             **/
            [key: string]: SubmittableExtrinsicFunction<ApiType>;
        };
        bridgedAsset: {
            /**
             * Transfer some free balance to another account.
             **/
            transfer: AugmentedSubmittable<(assetId: H160 | string | Uint8Array, to: AccountId32 | string | Uint8Array, amount: U256 | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [H160, AccountId32, U256]>;
            /**
             * Generic tx
             **/
            [key: string]: SubmittableExtrinsicFunction<ApiType>;
        };
        council: {
            /**
             * Close a vote that is either approved, disapproved or whose voting period has ended.
             *
             * May be called by any signed account in order to finish voting and close the proposal.
             *
             * If called before the end of the voting period it will only close the vote if it is
             * has enough votes to be approved or disapproved.
             *
             * If called after the end of the voting period abstentions are counted as rejections
             * unless there is a prime member set and the prime member cast an approval.
             *
             * If the close operation completes successfully with disapproval, the transaction fee will
             * be waived. Otherwise execution of the approved operation will be charged to the caller.
             *
             * + `proposal_weight_bound`: The maximum amount of weight consumed by executing the closed
             * proposal.
             * + `length_bound`: The upper bound for the length of the proposal in storage. Checked via
             * `storage::read` so it is `size_of::<u32>() == 4` larger than the pure length.
             *
             * # <weight>
             * ## Weight
             * - `O(B + M + P1 + P2)` where:
             * - `B` is `proposal` size in bytes (length-fee-bounded)
             * - `M` is members-count (code- and governance-bounded)
             * - `P1` is the complexity of `proposal` preimage.
             * - `P2` is proposal-count (code-bounded)
             * - DB:
             * - 2 storage reads (`Members`: codec `O(M)`, `Prime`: codec `O(1)`)
             * - 3 mutations (`Voting`: codec `O(M)`, `ProposalOf`: codec `O(B)`, `Proposals`: codec
             * `O(P2)`)
             * - any mutations done while executing `proposal` (`P1`)
             * - up to 3 events
             * # </weight>
             **/
            close: AugmentedSubmittable<(proposalHash: H256 | string | Uint8Array, index: Compact<u32> | AnyNumber | Uint8Array, proposalWeightBound: Compact<u64> | AnyNumber | Uint8Array, lengthBound: Compact<u32> | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [H256, Compact<u32>, Compact<u64>, Compact<u32>]>;
            /**
             * Disapprove a proposal, close, and remove it from the system, regardless of its current
             * state.
             *
             * Must be called by the Root origin.
             *
             * Parameters:
             * * `proposal_hash`: The hash of the proposal that should be disapproved.
             *
             * # <weight>
             * Complexity: O(P) where P is the number of max proposals
             * DB Weight:
             * * Reads: Proposals
             * * Writes: Voting, Proposals, ProposalOf
             * # </weight>
             **/
            disapproveProposal: AugmentedSubmittable<(proposalHash: H256 | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [H256]>;
            /**
             * Dispatch a proposal from a member using the `Member` origin.
             *
             * Origin must be a member of the collective.
             *
             * # <weight>
             * ## Weight
             * - `O(M + P)` where `M` members-count (code-bounded) and `P` complexity of dispatching
             * `proposal`
             * - DB: 1 read (codec `O(M)`) + DB access of `proposal`
             * - 1 event
             * # </weight>
             **/
            execute: AugmentedSubmittable<(proposal: Call | {
                callIndex?: any;
                args?: any;
            } | string | Uint8Array, lengthBound: Compact<u32> | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [Call, Compact<u32>]>;
            /**
             * Add a new proposal to either be voted on or executed directly.
             *
             * Requires the sender to be member.
             *
             * `threshold` determines whether `proposal` is executed directly (`threshold < 2`)
             * or put up for voting.
             *
             * # <weight>
             * ## Weight
             * - `O(B + M + P1)` or `O(B + M + P2)` where:
             * - `B` is `proposal` size in bytes (length-fee-bounded)
             * - `M` is members-count (code- and governance-bounded)
             * - branching is influenced by `threshold` where:
             * - `P1` is proposal execution complexity (`threshold < 2`)
             * - `P2` is proposals-count (code-bounded) (`threshold >= 2`)
             * - DB:
             * - 1 storage read `is_member` (codec `O(M)`)
             * - 1 storage read `ProposalOf::contains_key` (codec `O(1)`)
             * - DB accesses influenced by `threshold`:
             * - EITHER storage accesses done by `proposal` (`threshold < 2`)
             * - OR proposal insertion (`threshold <= 2`)
             * - 1 storage mutation `Proposals` (codec `O(P2)`)
             * - 1 storage mutation `ProposalCount` (codec `O(1)`)
             * - 1 storage write `ProposalOf` (codec `O(B)`)
             * - 1 storage write `Voting` (codec `O(M)`)
             * - 1 event
             * # </weight>
             **/
            propose: AugmentedSubmittable<(threshold: Compact<u32> | AnyNumber | Uint8Array, proposal: Call | {
                callIndex?: any;
                args?: any;
            } | string | Uint8Array, lengthBound: Compact<u32> | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [Compact<u32>, Call, Compact<u32>]>;
            /**
             * Set the collective's membership.
             *
             * - `new_members`: The new member list. Be nice to the chain and provide it sorted.
             * - `prime`: The prime member whose vote sets the default.
             * - `old_count`: The upper bound for the previous number of members in storage. Used for
             * weight estimation.
             *
             * Requires root origin.
             *
             * NOTE: Does not enforce the expected `MaxMembers` limit on the amount of members, but
             * the weight estimations rely on it to estimate dispatchable weight.
             *
             * # WARNING:
             *
             * The `pallet-collective` can also be managed by logic outside of the pallet through the
             * implementation of the trait [`ChangeMembers`].
             * Any call to `set_members` must be careful that the member set doesn't get out of sync
             * with other logic managing the member set.
             *
             * # <weight>
             * ## Weight
             * - `O(MP + N)` where:
             * - `M` old-members-count (code- and governance-bounded)
             * - `N` new-members-count (code- and governance-bounded)
             * - `P` proposals-count (code-bounded)
             * - DB:
             * - 1 storage mutation (codec `O(M)` read, `O(N)` write) for reading and writing the
             * members
             * - 1 storage read (codec `O(P)`) for reading the proposals
             * - `P` storage mutations (codec `O(M)`) for updating the votes for each proposal
             * - 1 storage write (codec `O(1)`) for deleting the old `prime` and setting the new one
             * # </weight>
             **/
            setMembers: AugmentedSubmittable<(newMembers: Vec<AccountId32> | (AccountId32 | string | Uint8Array)[], prime: Option<AccountId32> | null | object | string | Uint8Array, oldCount: u32 | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [Vec<AccountId32>, Option<AccountId32>, u32]>;
            /**
             * Add an aye or nay vote for the sender to the given proposal.
             *
             * Requires the sender to be a member.
             *
             * Transaction fees will be waived if the member is voting on any particular proposal
             * for the first time and the call is successful. Subsequent vote changes will charge a
             * fee.
             * # <weight>
             * ## Weight
             * - `O(M)` where `M` is members-count (code- and governance-bounded)
             * - DB:
             * - 1 storage read `Members` (codec `O(M)`)
             * - 1 storage mutation `Voting` (codec `O(M)`)
             * - 1 event
             * # </weight>
             **/
            vote: AugmentedSubmittable<(proposal: H256 | string | Uint8Array, index: Compact<u32> | AnyNumber | Uint8Array, approve: bool | boolean | Uint8Array) => SubmittableExtrinsic<ApiType>, [H256, Compact<u32>, bool]>;
            /**
             * Generic tx
             **/
            [key: string]: SubmittableExtrinsicFunction<ApiType>;
        };
        crowdloan: {
            /**
             * Associate a native rewards_destination identity with a crowdloan contribution.
             *
             * The caller needs to provide the unassociated relay account and a proof to succeed
             * with the association
             * The proof is nothing but a signature over the reward_address using the relay keys
             **/
            associateNativeIdentity: AugmentedSubmittable<(rewardAccount: AccountId32 | string | Uint8Array, relayAccount: AccountId32 | string | Uint8Array, proof: SpRuntimeMultiSignature | {
                Ed25519: any;
            } | {
                Sr25519: any;
            } | {
                Ecdsa: any;
            } | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [AccountId32, AccountId32, SpRuntimeMultiSignature]>;
            /**
             * Change reward account by submitting proofs from relay accounts
             *
             * The number of valid proofs needs to be bigger than 'RewardAddressRelayVoteThreshold'
             * The account to be changed needs to be submitted as 'previous_account'
             * Origin must be RewardAddressChangeOrigin
             **/
            changeAssociationWithRelayKeys: AugmentedSubmittable<(rewardAccount: AccountId32 | string | Uint8Array, previousAccount: AccountId32 | string | Uint8Array, proofs: Vec<ITuple<[AccountId32, SpRuntimeMultiSignature]>> | ([AccountId32 | string | Uint8Array, SpRuntimeMultiSignature | {
                Ed25519: any;
            } | {
                Sr25519: any;
            } | {
                Ecdsa: any;
            } | string | Uint8Array])[]) => SubmittableExtrinsic<ApiType>, [AccountId32, AccountId32, Vec<ITuple<[AccountId32, SpRuntimeMultiSignature]>>]>;
            /**
             * Collect whatever portion of your reward are currently vested.
             **/
            claim: AugmentedSubmittable<() => SubmittableExtrinsic<ApiType>, []>;
            /**
             * This extrinsic completes the initialization if some checks are fullfiled. These checks are:
             * -The reward contribution money matches the crowdloan pot
             * -The end vesting block is higher than the init vesting block
             * -The initialization has not complete yet
             **/
            completeInitialization: AugmentedSubmittable<(leaseEndingBlock: u32 | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [u32]>;
            /**
             * Initialize the reward distribution storage. It shortcuts whenever an error is found
             * This does not enforce any checks other than making sure we dont go over funds
             * complete_initialization should perform any additional
             **/
            initializeRewardVec: AugmentedSubmittable<(rewards: Vec<ITuple<[AccountId32, Option<AccountId32>, u128]>> | ([AccountId32 | string | Uint8Array, Option<AccountId32> | null | object | string | Uint8Array, u128 | AnyNumber | Uint8Array])[]) => SubmittableExtrinsic<ApiType>, [Vec<ITuple<[AccountId32, Option<AccountId32>, u128]>>]>;
            /**
             * Initialize the reward distribution storage. It shortcuts whenever an error is found
             * This does not enforce any checks other than making sure we dont go over funds
             * complete_initialization should perform any additional
             **/
            setCrowdloanAllocation: AugmentedSubmittable<(crowdloanAllocationAmount: u128 | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [u128]>;
            /**
             * Update reward address, proving that the caller owns the current native key
             **/
            updateRewardAddress: AugmentedSubmittable<(newRewardAccount: AccountId32 | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [AccountId32]>;
            /**
             * Generic tx
             **/
            [key: string]: SubmittableExtrinsicFunction<ApiType>;
        };
        dmpQueue: {
            /**
             * Service a single overweight message.
             *
             * - `origin`: Must pass `ExecuteOverweightOrigin`.
             * - `index`: The index of the overweight message to service.
             * - `weight_limit`: The amount of weight that message execution may take.
             *
             * Errors:
             * - `Unknown`: Message of `index` is unknown.
             * - `OverLimit`: Message execution may use greater than `weight_limit`.
             *
             * Events:
             * - `OverweightServiced`: On success.
             **/
            serviceOverweight: AugmentedSubmittable<(index: u64 | AnyNumber | Uint8Array, weightLimit: u64 | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [u64, u64]>;
            /**
             * Generic tx
             **/
            [key: string]: SubmittableExtrinsicFunction<ApiType>;
        };
        elections: {
            /**
             * Clean all voters who are defunct (i.e. they do not serve any purpose at all). The
             * deposit of the removed voters are returned.
             *
             * This is an root function to be used only for cleaning the state.
             *
             * The dispatch origin of this call must be root.
             *
             * # <weight>
             * The total number of voters and those that are defunct must be provided as witness data.
             * # </weight>
             **/
            cleanDefunctVoters: AugmentedSubmittable<(numVoters: u32 | AnyNumber | Uint8Array, numDefunct: u32 | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [u32, u32]>;
            /**
             * Remove a particular member from the set. This is effective immediately and the bond of
             * the outgoing member is slashed.
             *
             * If a runner-up is available, then the best runner-up will be removed and replaces the
             * outgoing member. Otherwise, a new phragmen election is started.
             *
             * The dispatch origin of this call must be root.
             *
             * Note that this does not affect the designated block number of the next election.
             *
             * # <weight>
             * If we have a replacement, we use a small weight. Else, since this is a root call and
             * will go into phragmen, we assume full block for now.
             * # </weight>
             **/
            removeMember: AugmentedSubmittable<(who: MultiAddress | {
                Id: any;
            } | {
                Index: any;
            } | {
                Raw: any;
            } | {
                Address32: any;
            } | {
                Address20: any;
            } | string | Uint8Array, hasReplacement: bool | boolean | Uint8Array) => SubmittableExtrinsic<ApiType>, [MultiAddress, bool]>;
            /**
             * Remove `origin` as a voter.
             *
             * This removes the lock and returns the deposit.
             *
             * The dispatch origin of this call must be signed and be a voter.
             **/
            removeVoter: AugmentedSubmittable<() => SubmittableExtrinsic<ApiType>, []>;
            /**
             * Renounce one's intention to be a candidate for the next election round. 3 potential
             * outcomes exist:
             *
             * - `origin` is a candidate and not elected in any set. In this case, the deposit is
             * unreserved, returned and origin is removed as a candidate.
             * - `origin` is a current runner-up. In this case, the deposit is unreserved, returned and
             * origin is removed as a runner-up.
             * - `origin` is a current member. In this case, the deposit is unreserved and origin is
             * removed as a member, consequently not being a candidate for the next round anymore.
             * Similar to [`remove_member`](Self::remove_member), if replacement runners exists, they
             * are immediately used. If the prime is renouncing, then no prime will exist until the
             * next round.
             *
             * The dispatch origin of this call must be signed, and have one of the above roles.
             *
             * # <weight>
             * The type of renouncing must be provided as witness data.
             * # </weight>
             **/
            renounceCandidacy: AugmentedSubmittable<(renouncing: PalletElectionsPhragmenRenouncing | {
                Member: any;
            } | {
                RunnerUp: any;
            } | {
                Candidate: any;
            } | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [PalletElectionsPhragmenRenouncing]>;
            /**
             * Submit oneself for candidacy. A fixed amount of deposit is recorded.
             *
             * All candidates are wiped at the end of the term. They either become a member/runner-up,
             * or leave the system while their deposit is slashed.
             *
             * The dispatch origin of this call must be signed.
             *
             * ### Warning
             *
             * Even if a candidate ends up being a member, they must call [`Call::renounce_candidacy`]
             * to get their deposit back. Losing the spot in an election will always lead to a slash.
             *
             * # <weight>
             * The number of current candidates must be provided as witness data.
             * # </weight>
             **/
            submitCandidacy: AugmentedSubmittable<(candidateCount: Compact<u32> | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [Compact<u32>]>;
            /**
             * Vote for a set of candidates for the upcoming round of election. This can be called to
             * set the initial votes, or update already existing votes.
             *
             * Upon initial voting, `value` units of `who`'s balance is locked and a deposit amount is
             * reserved. The deposit is based on the number of votes and can be updated over time.
             *
             * The `votes` should:
             * - not be empty.
             * - be less than the number of possible candidates. Note that all current members and
             * runners-up are also automatically candidates for the next round.
             *
             * If `value` is more than `who`'s free balance, then the maximum of the two is used.
             *
             * The dispatch origin of this call must be signed.
             *
             * ### Warning
             *
             * It is the responsibility of the caller to **NOT** place all of their balance into the
             * lock and keep some for further operations.
             *
             * # <weight>
             * We assume the maximum weight among all 3 cases: vote_equal, vote_more and vote_less.
             * # </weight>
             **/
            vote: AugmentedSubmittable<(votes: Vec<AccountId32> | (AccountId32 | string | Uint8Array)[], value: Compact<u128> | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [Vec<AccountId32>, Compact<u128>]>;
            /**
             * Generic tx
             **/
            [key: string]: SubmittableExtrinsicFunction<ApiType>;
        };
        erc20: {
            /**
             * Burn an ERC20 token balance
             **/
            burn: AugmentedSubmittable<(assetId: H160 | string | Uint8Array, recipient: H160 | string | Uint8Array, inputAmount: U256 | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [H160, H160, U256]>;
            /**
             * Generic tx
             **/
            [key: string]: SubmittableExtrinsicFunction<ApiType>;
        };
        eth: {
            burn: AugmentedSubmittable<(recipient: H160 | string | Uint8Array, inputAmount: U256 | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [H160, U256]>;
            /**
             * Generic tx
             **/
            [key: string]: SubmittableExtrinsicFunction<ApiType>;
        };
        issuance: {
            executeTge: AugmentedSubmittable<(tgeInfos: Vec<PalletIssuanceTgeInfo> | (PalletIssuanceTgeInfo | {
                who?: any;
                amount?: any;
            } | string | Uint8Array)[]) => SubmittableExtrinsic<ApiType>, [Vec<PalletIssuanceTgeInfo>]>;
            finalizeTge: AugmentedSubmittable<() => SubmittableExtrinsic<ApiType>, []>;
            initIssuanceConfig: AugmentedSubmittable<() => SubmittableExtrinsic<ApiType>, []>;
            /**
             * Generic tx
             **/
            [key: string]: SubmittableExtrinsicFunction<ApiType>;
        };
        ormlXcm: {
            /**
             * Send an XCM message as parachain sovereign.
             **/
            sendAsSovereign: AugmentedSubmittable<(dest: XcmVersionedMultiLocation | {
                V0: any;
            } | {
                V1: any;
            } | string | Uint8Array, message: XcmVersionedXcm | {
                V0: any;
            } | {
                V1: any;
            } | {
                V2: any;
            } | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [XcmVersionedMultiLocation, XcmVersionedXcm]>;
            /**
             * Generic tx
             **/
            [key: string]: SubmittableExtrinsicFunction<ApiType>;
        };
        parachainStaking: {
            addStakingLiquidityToken: AugmentedSubmittable<(pairedOrLiquidityToken: ParachainStakingPairedOrLiquidityToken | {
                Paired: any;
            } | {
                Liquidity: any;
            } | string | Uint8Array, currentLiquidityTokens: u32 | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [ParachainStakingPairedOrLiquidityToken, u32]>;
            /**
             * Cancel pending request to adjust the collator candidate self bond
             **/
            cancelCandidateBondRequest: AugmentedSubmittable<() => SubmittableExtrinsic<ApiType>, []>;
            /**
             * Cancel request to change an existing delegation.
             **/
            cancelDelegationRequest: AugmentedSubmittable<(candidate: AccountId32 | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [AccountId32]>;
            /**
             * Cancel open request to leave candidates
             * - only callable by collator account
             * - result upon successful call is the candidate is active in the candidate pool
             **/
            cancelLeaveCandidates: AugmentedSubmittable<(candidateCount: u32 | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [u32]>;
            /**
             * Cancel a pending request to exit the set of delegators. Success clears the pending exit
             * request (thereby resetting the delay upon another `leave_delegators` call).
             **/
            cancelLeaveDelegators: AugmentedSubmittable<() => SubmittableExtrinsic<ApiType>, []>;
            /**
             * If caller is not a delegator and not a collator, then join the set of delegators
             * If caller is a delegator, then makes delegation to change their delegation state
             **/
            delegate: AugmentedSubmittable<(collator: AccountId32 | string | Uint8Array, amount: u128 | AnyNumber | Uint8Array, candidateDelegationCount: u32 | AnyNumber | Uint8Array, delegationCount: u32 | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [AccountId32, u128, u32, u32]>;
            /**
             * Execute pending request to adjust the collator candidate self bond
             **/
            executeCandidateBondRequest: AugmentedSubmittable<(candidate: AccountId32 | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [AccountId32]>;
            /**
             * Execute pending request to change an existing delegation
             **/
            executeDelegationRequest: AugmentedSubmittable<(delegator: AccountId32 | string | Uint8Array, candidate: AccountId32 | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [AccountId32, AccountId32]>;
            /**
             * Execute leave candidates request
             **/
            executeLeaveCandidates: AugmentedSubmittable<(candidate: AccountId32 | string | Uint8Array, candidateDelegationCount: u32 | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [AccountId32, u32]>;
            /**
             * Execute the right to exit the set of delegators and revoke all ongoing delegations.
             **/
            executeLeaveDelegators: AugmentedSubmittable<(delegator: AccountId32 | string | Uint8Array, delegationCount: u32 | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [AccountId32, u32]>;
            /**
             * Temporarily leave the set of collator candidates without unbonding
             **/
            goOffline: AugmentedSubmittable<() => SubmittableExtrinsic<ApiType>, []>;
            /**
             * Rejoin the set of collator candidates if previously had called `go_offline`
             **/
            goOnline: AugmentedSubmittable<() => SubmittableExtrinsic<ApiType>, []>;
            /**
             * Join the set of collator candidates
             **/
            joinCandidates: AugmentedSubmittable<(bond: u128 | AnyNumber | Uint8Array, liquidityToken: u32 | AnyNumber | Uint8Array, candidateCount: u32 | AnyNumber | Uint8Array, liquidityTokenCount: u32 | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [u128, u32, u32, u32]>;
            removeStakingLiquidityToken: AugmentedSubmittable<(pairedOrLiquidityToken: ParachainStakingPairedOrLiquidityToken | {
                Paired: any;
            } | {
                Liquidity: any;
            } | string | Uint8Array, currentLiquidityTokens: u32 | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [ParachainStakingPairedOrLiquidityToken, u32]>;
            /**
             * Request by collator candidate to decrease self bond by `less`
             **/
            scheduleCandidateBondLess: AugmentedSubmittable<(less: u128 | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [u128]>;
            /**
             * Request by collator candidate to increase self bond by `more`
             **/
            scheduleCandidateBondMore: AugmentedSubmittable<(more: u128 | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [u128]>;
            /**
             * Request bond less for delegators wrt a specific collator candidate.
             **/
            scheduleDelegatorBondLess: AugmentedSubmittable<(candidate: AccountId32 | string | Uint8Array, less: u128 | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [AccountId32, u128]>;
            /**
             * Request to bond more for delegators wrt a specific collator candidate.
             **/
            scheduleDelegatorBondMore: AugmentedSubmittable<(candidate: AccountId32 | string | Uint8Array, more: u128 | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [AccountId32, u128]>;
            /**
             * Request to leave the set of candidates. If successful, the account is immediately
             * removed from the candidate pool to prevent selection as a collator.
             **/
            scheduleLeaveCandidates: AugmentedSubmittable<(candidateCount: u32 | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [u32]>;
            /**
             * Request to leave the set of delegators. If successful, the caller is scheduled
             * to be allowed to exit. Success forbids future delegator actions until the request is
             * invoked or cancelled.
             **/
            scheduleLeaveDelegators: AugmentedSubmittable<() => SubmittableExtrinsic<ApiType>, []>;
            /**
             * Request to revoke an existing delegation. If successful, the delegation is scheduled
             * to be allowed to be revoked via the `execute_delegation_request` extrinsic.
             **/
            scheduleRevokeDelegation: AugmentedSubmittable<(collator: AccountId32 | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [AccountId32]>;
            /**
             * Set the commission for all collators
             **/
            setCollatorCommission: AugmentedSubmittable<(updated: Perbill | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [Perbill]>;
            /**
             * Set the total number of collator candidates selected per round
             * - changes are not applied until the start of the next round
             **/
            setTotalSelected: AugmentedSubmittable<(updated: u32 | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [u32]>;
            /**
             * Generic tx
             **/
            [key: string]: SubmittableExtrinsicFunction<ApiType>;
        };
        parachainSystem: {
            authorizeUpgrade: AugmentedSubmittable<(codeHash: H256 | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [H256]>;
            enactAuthorizedUpgrade: AugmentedSubmittable<(code: Bytes | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [Bytes]>;
            /**
             * Set the current validation data.
             *
             * This should be invoked exactly once per block. It will panic at the finalization
             * phase if the call was not invoked.
             *
             * The dispatch origin for this call must be `Inherent`
             *
             * As a side effect, this function upgrades the current validation function
             * if the appropriate time has come.
             **/
            setValidationData: AugmentedSubmittable<(data: CumulusPrimitivesParachainInherentParachainInherentData | {
                validationData?: any;
                relayChainState?: any;
                downwardMessages?: any;
                horizontalMessages?: any;
            } | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [CumulusPrimitivesParachainInherentParachainInherentData]>;
            sudoSendUpwardMessage: AugmentedSubmittable<(message: Bytes | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [Bytes]>;
            /**
             * Generic tx
             **/
            [key: string]: SubmittableExtrinsicFunction<ApiType>;
        };
        polkadotXcm: {
            /**
             * Execute an XCM message from a local, signed, origin.
             *
             * An event is deposited indicating whether `msg` could be executed completely or only
             * partially.
             *
             * No more than `max_weight` will be used in its attempted execution. If this is less than the
             * maximum amount of weight that the message could take to be executed, then no execution
             * attempt will be made.
             *
             * NOTE: A successful return to this does *not* imply that the `msg` was executed successfully
             * to completion; only that *some* of it was executed.
             **/
            execute: AugmentedSubmittable<(message: XcmVersionedXcm | {
                V0: any;
            } | {
                V1: any;
            } | {
                V2: any;
            } | string | Uint8Array, maxWeight: u64 | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [XcmVersionedXcm, u64]>;
            /**
             * Set a safe XCM version (the version that XCM should be encoded with if the most recent
             * version a destination can accept is unknown).
             *
             * - `origin`: Must be Root.
             * - `maybe_xcm_version`: The default XCM encoding version, or `None` to disable.
             **/
            forceDefaultXcmVersion: AugmentedSubmittable<(maybeXcmVersion: Option<u32> | null | object | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [Option<u32>]>;
            /**
             * Ask a location to notify us regarding their XCM version and any changes to it.
             *
             * - `origin`: Must be Root.
             * - `location`: The location to which we should subscribe for XCM version notifications.
             **/
            forceSubscribeVersionNotify: AugmentedSubmittable<(location: XcmVersionedMultiLocation | {
                V0: any;
            } | {
                V1: any;
            } | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [XcmVersionedMultiLocation]>;
            /**
             * Require that a particular destination should no longer notify us regarding any XCM
             * version changes.
             *
             * - `origin`: Must be Root.
             * - `location`: The location to which we are currently subscribed for XCM version
             * notifications which we no longer desire.
             **/
            forceUnsubscribeVersionNotify: AugmentedSubmittable<(location: XcmVersionedMultiLocation | {
                V0: any;
            } | {
                V1: any;
            } | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [XcmVersionedMultiLocation]>;
            /**
             * Extoll that a particular destination can be communicated with through a particular
             * version of XCM.
             *
             * - `origin`: Must be Root.
             * - `location`: The destination that is being described.
             * - `xcm_version`: The latest version of XCM that `location` supports.
             **/
            forceXcmVersion: AugmentedSubmittable<(location: XcmV1MultiLocation | {
                parents?: any;
                interior?: any;
            } | string | Uint8Array, xcmVersion: u32 | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [XcmV1MultiLocation, u32]>;
            /**
             * Transfer some assets from the local chain to the sovereign account of a destination chain and forward
             * a notification XCM.
             *
             * Fee payment on the destination side is made from the first asset listed in the `assets` vector.
             *
             * - `origin`: Must be capable of withdrawing the `assets` and executing XCM.
             * - `dest`: Destination context for the assets. Will typically be `X2(Parent, Parachain(..))` to send
             * from parachain to parachain, or `X1(Parachain(..))` to send from relay to parachain.
             * - `beneficiary`: A beneficiary location for the assets in the context of `dest`. Will generally be
             * an `AccountId32` value.
             * - `assets`: The assets to be withdrawn. This should include the assets used to pay the fee on the
             * `dest` side.
             * - `fee_asset_item`: The index into `assets` of the item which should be used to pay
             * fees.
             * - `weight_limit`: The remote-side weight limit, if any, for the XCM fee purchase.
             **/
            limitedReserveTransferAssets: AugmentedSubmittable<(dest: XcmVersionedMultiLocation | {
                V0: any;
            } | {
                V1: any;
            } | string | Uint8Array, beneficiary: XcmVersionedMultiLocation | {
                V0: any;
            } | {
                V1: any;
            } | string | Uint8Array, assets: XcmVersionedMultiAssets | {
                V0: any;
            } | {
                V1: any;
            } | string | Uint8Array, feeAssetItem: u32 | AnyNumber | Uint8Array, weightLimit: XcmV2WeightLimit | {
                Unlimited: any;
            } | {
                Limited: any;
            } | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [XcmVersionedMultiLocation, XcmVersionedMultiLocation, XcmVersionedMultiAssets, u32, XcmV2WeightLimit]>;
            /**
             * Teleport some assets from the local chain to some destination chain.
             *
             * Fee payment on the destination side is made from the first asset listed in the `assets` vector.
             *
             * - `origin`: Must be capable of withdrawing the `assets` and executing XCM.
             * - `dest`: Destination context for the assets. Will typically be `X2(Parent, Parachain(..))` to send
             * from parachain to parachain, or `X1(Parachain(..))` to send from relay to parachain.
             * - `beneficiary`: A beneficiary location for the assets in the context of `dest`. Will generally be
             * an `AccountId32` value.
             * - `assets`: The assets to be withdrawn. The first item should be the currency used to to pay the fee on the
             * `dest` side. May not be empty.
             * - `fee_asset_item`: The index into `assets` of the item which should be used to pay
             * fees.
             * - `weight_limit`: The remote-side weight limit, if any, for the XCM fee purchase.
             **/
            limitedTeleportAssets: AugmentedSubmittable<(dest: XcmVersionedMultiLocation | {
                V0: any;
            } | {
                V1: any;
            } | string | Uint8Array, beneficiary: XcmVersionedMultiLocation | {
                V0: any;
            } | {
                V1: any;
            } | string | Uint8Array, assets: XcmVersionedMultiAssets | {
                V0: any;
            } | {
                V1: any;
            } | string | Uint8Array, feeAssetItem: u32 | AnyNumber | Uint8Array, weightLimit: XcmV2WeightLimit | {
                Unlimited: any;
            } | {
                Limited: any;
            } | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [XcmVersionedMultiLocation, XcmVersionedMultiLocation, XcmVersionedMultiAssets, u32, XcmV2WeightLimit]>;
            /**
             * Transfer some assets from the local chain to the sovereign account of a destination chain and forward
             * a notification XCM.
             *
             * Fee payment on the destination side is made from the first asset listed in the `assets` vector and
             * fee-weight is calculated locally and thus remote weights are assumed to be equal to
             * local weights.
             *
             * - `origin`: Must be capable of withdrawing the `assets` and executing XCM.
             * - `dest`: Destination context for the assets. Will typically be `X2(Parent, Parachain(..))` to send
             * from parachain to parachain, or `X1(Parachain(..))` to send from relay to parachain.
             * - `beneficiary`: A beneficiary location for the assets in the context of `dest`. Will generally be
             * an `AccountId32` value.
             * - `assets`: The assets to be withdrawn. This should include the assets used to pay the fee on the
             * `dest` side.
             * - `fee_asset_item`: The index into `assets` of the item which should be used to pay
             * fees.
             **/
            reserveTransferAssets: AugmentedSubmittable<(dest: XcmVersionedMultiLocation | {
                V0: any;
            } | {
                V1: any;
            } | string | Uint8Array, beneficiary: XcmVersionedMultiLocation | {
                V0: any;
            } | {
                V1: any;
            } | string | Uint8Array, assets: XcmVersionedMultiAssets | {
                V0: any;
            } | {
                V1: any;
            } | string | Uint8Array, feeAssetItem: u32 | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [XcmVersionedMultiLocation, XcmVersionedMultiLocation, XcmVersionedMultiAssets, u32]>;
            send: AugmentedSubmittable<(dest: XcmVersionedMultiLocation | {
                V0: any;
            } | {
                V1: any;
            } | string | Uint8Array, message: XcmVersionedXcm | {
                V0: any;
            } | {
                V1: any;
            } | {
                V2: any;
            } | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [XcmVersionedMultiLocation, XcmVersionedXcm]>;
            /**
             * Teleport some assets from the local chain to some destination chain.
             *
             * Fee payment on the destination side is made from the first asset listed in the `assets` vector and
             * fee-weight is calculated locally and thus remote weights are assumed to be equal to
             * local weights.
             *
             * - `origin`: Must be capable of withdrawing the `assets` and executing XCM.
             * - `dest`: Destination context for the assets. Will typically be `X2(Parent, Parachain(..))` to send
             * from parachain to parachain, or `X1(Parachain(..))` to send from relay to parachain.
             * - `beneficiary`: A beneficiary location for the assets in the context of `dest`. Will generally be
             * an `AccountId32` value.
             * - `assets`: The assets to be withdrawn. The first item should be the currency used to to pay the fee on the
             * `dest` side. May not be empty.
             * - `fee_asset_item`: The index into `assets` of the item which should be used to pay
             * fees.
             **/
            teleportAssets: AugmentedSubmittable<(dest: XcmVersionedMultiLocation | {
                V0: any;
            } | {
                V1: any;
            } | string | Uint8Array, beneficiary: XcmVersionedMultiLocation | {
                V0: any;
            } | {
                V1: any;
            } | string | Uint8Array, assets: XcmVersionedMultiAssets | {
                V0: any;
            } | {
                V1: any;
            } | string | Uint8Array, feeAssetItem: u32 | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [XcmVersionedMultiLocation, XcmVersionedMultiLocation, XcmVersionedMultiAssets, u32]>;
            /**
             * Generic tx
             **/
            [key: string]: SubmittableExtrinsicFunction<ApiType>;
        };
        session: {
            /**
             * Removes any session key(s) of the function caller.
             *
             * This doesn't take effect until the next session.
             *
             * The dispatch origin of this function must be Signed and the account must be either be
             * convertible to a validator ID using the chain's typical addressing system (this usually
             * means being a controller account) or directly convertible into a validator ID (which
             * usually means being a stash account).
             *
             * # <weight>
             * - Complexity: `O(1)` in number of key types. Actual cost depends on the number of length
             * of `T::Keys::key_ids()` which is fixed.
             * - DbReads: `T::ValidatorIdOf`, `NextKeys`, `origin account`
             * - DbWrites: `NextKeys`, `origin account`
             * - DbWrites per key id: `KeyOwner`
             * # </weight>
             **/
            purgeKeys: AugmentedSubmittable<() => SubmittableExtrinsic<ApiType>, []>;
            /**
             * Sets the session key(s) of the function caller to `keys`.
             * Allows an account to set its session key prior to becoming a validator.
             * This doesn't take effect until the next session.
             *
             * The dispatch origin of this function must be signed.
             *
             * # <weight>
             * - Complexity: `O(1)`. Actual cost depends on the number of length of
             * `T::Keys::key_ids()` which is fixed.
             * - DbReads: `origin account`, `T::ValidatorIdOf`, `NextKeys`
             * - DbWrites: `origin account`, `NextKeys`
             * - DbReads per key id: `KeyOwner`
             * - DbWrites per key id: `KeyOwner`
             * # </weight>
             **/
            setKeys: AugmentedSubmittable<(keys: MangataKusamaRuntimeSessionKeys | {
                aura?: any;
            } | string | Uint8Array, proof: Bytes | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [MangataKusamaRuntimeSessionKeys, Bytes]>;
            /**
             * Generic tx
             **/
            [key: string]: SubmittableExtrinsicFunction<ApiType>;
        };
        sudo: {
            /**
             * Authenticates the current sudo key and sets the given AccountId (`new`) as the new sudo
             * key.
             *
             * The dispatch origin for this call must be _Signed_.
             *
             * # <weight>
             * - O(1).
             * - Limited storage reads.
             * - One DB change.
             * # </weight>
             **/
            setKey: AugmentedSubmittable<(updated: MultiAddress | {
                Id: any;
            } | {
                Index: any;
            } | {
                Raw: any;
            } | {
                Address32: any;
            } | {
                Address20: any;
            } | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [MultiAddress]>;
            /**
             * Authenticates the sudo key and dispatches a function call with `Root` origin.
             *
             * The dispatch origin for this call must be _Signed_.
             *
             * # <weight>
             * - O(1).
             * - Limited storage reads.
             * - One DB write (event).
             * - Weight of derivative `call` execution + 10,000.
             * # </weight>
             **/
            sudo: AugmentedSubmittable<(call: Call | {
                callIndex?: any;
                args?: any;
            } | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [Call]>;
            /**
             * Authenticates the sudo key and dispatches a function call with `Signed` origin from
             * a given account.
             *
             * The dispatch origin for this call must be _Signed_.
             *
             * # <weight>
             * - O(1).
             * - Limited storage reads.
             * - One DB write (event).
             * - Weight of derivative `call` execution + 10,000.
             * # </weight>
             **/
            sudoAs: AugmentedSubmittable<(who: MultiAddress | {
                Id: any;
            } | {
                Index: any;
            } | {
                Raw: any;
            } | {
                Address32: any;
            } | {
                Address20: any;
            } | string | Uint8Array, call: Call | {
                callIndex?: any;
                args?: any;
            } | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [MultiAddress, Call]>;
            /**
             * Authenticates the sudo key and dispatches a function call with `Root` origin.
             * This function does not check the weight of the call, and instead allows the
             * Sudo user to specify the weight of the call.
             *
             * The dispatch origin for this call must be _Signed_.
             *
             * # <weight>
             * - O(1).
             * - The weight of this call is defined by the caller.
             * # </weight>
             **/
            sudoUncheckedWeight: AugmentedSubmittable<(call: Call | {
                callIndex?: any;
                args?: any;
            } | string | Uint8Array, weight: u64 | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [Call, u64]>;
            /**
             * Generic tx
             **/
            [key: string]: SubmittableExtrinsicFunction<ApiType>;
        };
        sudoOrigin: {
            /**
             * Authenticates the SudoOrigin and dispatches a function call with `Root` origin.
             *
             * # <weight>
             * - O(1).
             * - Limited storage reads.
             * - One DB write (event).
             * - Weight of derivative `call` execution + 10,000.
             * # </weight>
             **/
            sudo: AugmentedSubmittable<(call: Call | {
                callIndex?: any;
                args?: any;
            } | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [Call]>;
            /**
             * Authenticates the SudoOrigin and dispatches a function call with `Signed` origin from
             * a given account.
             *
             * # <weight>
             * - O(1).
             * - Limited storage reads.
             * - One DB write (event).
             * - Weight of derivative `call` execution + 10,000.
             * # </weight>
             **/
            sudoAs: AugmentedSubmittable<(who: MultiAddress | {
                Id: any;
            } | {
                Index: any;
            } | {
                Raw: any;
            } | {
                Address32: any;
            } | {
                Address20: any;
            } | string | Uint8Array, call: Call | {
                callIndex?: any;
                args?: any;
            } | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [MultiAddress, Call]>;
            /**
             * Authenticates the SudoOrigin and dispatches a function call with `Root` origin.
             * This function does not check the weight of the call, and instead allows the
             * SudoOrigin to specify the weight of the call.
             *
             * # <weight>
             * - O(1).
             * - The weight of this call is defined by the caller.
             * # </weight>
             **/
            sudoUncheckedWeight: AugmentedSubmittable<(call: Call | {
                callIndex?: any;
                args?: any;
            } | string | Uint8Array, weight: u64 | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [Call, u64]>;
            /**
             * Generic tx
             **/
            [key: string]: SubmittableExtrinsicFunction<ApiType>;
        };
        system: {
            /**
             * A dispatch that will fill the block weight up to the given ratio.
             **/
            fillBlock: AugmentedSubmittable<(ratio: Perbill | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [Perbill]>;
            /**
             * Kill all storage items with a key that starts with the given prefix.
             *
             * **NOTE:** We rely on the Root origin to provide us the number of subkeys under
             * the prefix we are removing to accurately calculate the weight of this function.
             **/
            killPrefix: AugmentedSubmittable<(prefix: Bytes | string | Uint8Array, subkeys: u32 | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [Bytes, u32]>;
            /**
             * Kill some items from storage.
             **/
            killStorage: AugmentedSubmittable<(keys: Vec<Bytes> | (Bytes | string | Uint8Array)[]) => SubmittableExtrinsic<ApiType>, [Vec<Bytes>]>;
            /**
             * Make some on-chain remark.
             *
             * # <weight>
             * - `O(1)`
             * # </weight>
             **/
            remark: AugmentedSubmittable<(remark: Bytes | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [Bytes]>;
            /**
             * Make some on-chain remark and emit event.
             *
             * # <weight>
             * - `O(b)` where b is the length of the remark.
             * - 1 event.
             * # </weight>
             **/
            remarkWithEvent: AugmentedSubmittable<(remark: Bytes | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [Bytes]>;
            /**
             * Set the new runtime code.
             *
             * # <weight>
             * - `O(C + S)` where `C` length of `code` and `S` complexity of `can_set_code`
             * - 1 call to `can_set_code`: `O(S)` (calls `sp_io::misc::runtime_version` which is
             * expensive).
             * - 1 storage write (codec `O(C)`).
             * - 1 digest item.
             * - 1 event.
             * The weight of this function is dependent on the runtime, but generally this is very
             * expensive. We will treat this as a full block.
             * # </weight>
             **/
            setCode: AugmentedSubmittable<(code: Bytes | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [Bytes]>;
            /**
             * Set the new runtime code without doing any checks of the given `code`.
             *
             * # <weight>
             * - `O(C)` where `C` length of `code`
             * - 1 storage write (codec `O(C)`).
             * - 1 digest item.
             * - 1 event.
             * The weight of this function is dependent on the runtime. We will treat this as a full
             * block. # </weight>
             **/
            setCodeWithoutChecks: AugmentedSubmittable<(code: Bytes | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [Bytes]>;
            /**
             * Set the number of pages in the WebAssembly environment's heap.
             **/
            setHeapPages: AugmentedSubmittable<(pages: u64 | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [u64]>;
            /**
             * Set some items of storage.
             **/
            setStorage: AugmentedSubmittable<(items: Vec<ITuple<[Bytes, Bytes]>> | ([Bytes | string | Uint8Array, Bytes | string | Uint8Array])[]) => SubmittableExtrinsic<ApiType>, [Vec<ITuple<[Bytes, Bytes]>>]>;
            /**
             * Generic tx
             **/
            [key: string]: SubmittableExtrinsicFunction<ApiType>;
        };
        timestamp: {
            /**
             * Set the current time.
             *
             * This call should be invoked exactly once per block. It will panic at the finalization
             * phase, if this call hasn't been invoked by that time.
             *
             * The timestamp should be greater than the previous one by the amount specified by
             * `MinimumPeriod`.
             *
             * The dispatch origin for this call must be `Inherent`.
             *
             * # <weight>
             * - `O(1)` (Note that implementations of `OnTimestampSet` must also be `O(1)`)
             * - 1 storage read and 1 storage mutation (codec `O(1)`). (because of `DidUpdate::take` in
             * `on_finalize`)
             * - 1 event handler `on_timestamp_set`. Must be `O(1)`.
             * # </weight>
             **/
            set: AugmentedSubmittable<(now: Compact<u64> | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [Compact<u64>]>;
            /**
             * Generic tx
             **/
            [key: string]: SubmittableExtrinsicFunction<ApiType>;
        };
        tokens: {
            create: AugmentedSubmittable<(who: MultiAddress | {
                Id: any;
            } | {
                Index: any;
            } | {
                Raw: any;
            } | {
                Address32: any;
            } | {
                Address20: any;
            } | string | Uint8Array, amount: Compact<u128> | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [MultiAddress, Compact<u128>]>;
            /**
             * Exactly as `transfer`, except the origin must be root and the source
             * account may be specified.
             *
             * The dispatch origin for this call must be _Root_.
             *
             * - `source`: The sender of the transfer.
             * - `dest`: The recipient of the transfer.
             * - `currency_id`: currency type.
             * - `amount`: free balance amount to tranfer.
             **/
            forceTransfer: AugmentedSubmittable<(source: MultiAddress | {
                Id: any;
            } | {
                Index: any;
            } | {
                Raw: any;
            } | {
                Address32: any;
            } | {
                Address20: any;
            } | string | Uint8Array, dest: MultiAddress | {
                Id: any;
            } | {
                Index: any;
            } | {
                Raw: any;
            } | {
                Address32: any;
            } | {
                Address20: any;
            } | string | Uint8Array, currencyId: u32 | AnyNumber | Uint8Array, amount: Compact<u128> | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [MultiAddress, MultiAddress, u32, Compact<u128>]>;
            mint: AugmentedSubmittable<(currencyId: u32 | AnyNumber | Uint8Array, who: MultiAddress | {
                Id: any;
            } | {
                Index: any;
            } | {
                Raw: any;
            } | {
                Address32: any;
            } | {
                Address20: any;
            } | string | Uint8Array, amount: Compact<u128> | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [u32, MultiAddress, Compact<u128>]>;
            /**
             * Set the balances of a given account.
             *
             * This will alter `FreeBalance` and `ReservedBalance` in storage. it
             * will also decrease the total issuance of the system
             * (`TotalIssuance`). If the new free or reserved balance is below the
             * existential deposit, it will reap the `AccountInfo`.
             *
             * The dispatch origin for this call is `root`.
             **/
            setBalance: AugmentedSubmittable<(who: MultiAddress | {
                Id: any;
            } | {
                Index: any;
            } | {
                Raw: any;
            } | {
                Address32: any;
            } | {
                Address20: any;
            } | string | Uint8Array, currencyId: u32 | AnyNumber | Uint8Array, newFree: Compact<u128> | AnyNumber | Uint8Array, newReserved: Compact<u128> | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [MultiAddress, u32, Compact<u128>, Compact<u128>]>;
            /**
             * Transfer some liquid free balance to another account.
             *
             * `transfer` will set the `FreeBalance` of the sender and receiver.
             * It will decrease the total issuance of the system by the
             * `TransferFee`. If the sender's account is below the existential
             * deposit as a result of the transfer, the account will be reaped.
             *
             * The dispatch origin for this call must be `Signed` by the
             * transactor.
             *
             * - `dest`: The recipient of the transfer.
             * - `currency_id`: currency type.
             * - `amount`: free balance amount to tranfer.
             **/
            transfer: AugmentedSubmittable<(dest: MultiAddress | {
                Id: any;
            } | {
                Index: any;
            } | {
                Raw: any;
            } | {
                Address32: any;
            } | {
                Address20: any;
            } | string | Uint8Array, currencyId: u32 | AnyNumber | Uint8Array, amount: Compact<u128> | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [MultiAddress, u32, Compact<u128>]>;
            /**
             * Transfer all remaining balance to the given account.
             *
             * NOTE: This function only attempts to transfer _transferable_
             * balances. This means that any locked, reserved, or existential
             * deposits (when `keep_alive` is `true`), will not be transferred by
             * this function. To ensure that this function results in a killed
             * account, you might need to prepare the account by removing any
             * reference counters, storage deposits, etc...
             *
             * The dispatch origin for this call must be `Signed` by the
             * transactor.
             *
             * - `dest`: The recipient of the transfer.
             * - `currency_id`: currency type.
             * - `keep_alive`: A boolean to determine if the `transfer_all`
             * operation should send all of the funds the account has, causing
             * the sender account to be killed (false), or transfer everything
             * except at least the existential deposit, which will guarantee to
             * keep the sender account alive (true).
             **/
            transferAll: AugmentedSubmittable<(dest: MultiAddress | {
                Id: any;
            } | {
                Index: any;
            } | {
                Raw: any;
            } | {
                Address32: any;
            } | {
                Address20: any;
            } | string | Uint8Array, currencyId: u32 | AnyNumber | Uint8Array, keepAlive: bool | boolean | Uint8Array) => SubmittableExtrinsic<ApiType>, [MultiAddress, u32, bool]>;
            /**
             * Same as the [`transfer`] call, but with a check that the transfer
             * will not kill the origin account.
             *
             * 99% of the time you want [`transfer`] instead.
             *
             * The dispatch origin for this call must be `Signed` by the
             * transactor.
             *
             * - `dest`: The recipient of the transfer.
             * - `currency_id`: currency type.
             * - `amount`: free balance amount to tranfer.
             **/
            transferKeepAlive: AugmentedSubmittable<(dest: MultiAddress | {
                Id: any;
            } | {
                Index: any;
            } | {
                Raw: any;
            } | {
                Address32: any;
            } | {
                Address20: any;
            } | string | Uint8Array, currencyId: u32 | AnyNumber | Uint8Array, amount: Compact<u128> | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [MultiAddress, u32, Compact<u128>]>;
            /**
             * Generic tx
             **/
            [key: string]: SubmittableExtrinsicFunction<ApiType>;
        };
        treasury: {
            /**
             * Approve a proposal. At a later time, the proposal will be allocated to the beneficiary
             * and the original deposit will be returned.
             *
             * May only be called from `T::ApproveOrigin`.
             *
             * # <weight>
             * - Complexity: O(1).
             * - DbReads: `Proposals`, `Approvals`
             * - DbWrite: `Approvals`
             * # </weight>
             **/
            approveProposal: AugmentedSubmittable<(proposalId: Compact<u32> | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [Compact<u32>]>;
            /**
             * Put forward a suggestion for spending. A deposit proportional to the value
             * is reserved and slashed if the proposal is rejected. It is returned once the
             * proposal is awarded.
             *
             * # <weight>
             * - Complexity: O(1)
             * - DbReads: `ProposalCount`, `origin account`
             * - DbWrites: `ProposalCount`, `Proposals`, `origin account`
             * # </weight>
             **/
            proposeSpend: AugmentedSubmittable<(value: Compact<u128> | AnyNumber | Uint8Array, beneficiary: MultiAddress | {
                Id: any;
            } | {
                Index: any;
            } | {
                Raw: any;
            } | {
                Address32: any;
            } | {
                Address20: any;
            } | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [Compact<u128>, MultiAddress]>;
            /**
             * Reject a proposed spend. The original deposit will be slashed.
             *
             * May only be called from `T::RejectOrigin`.
             *
             * # <weight>
             * - Complexity: O(1)
             * - DbReads: `Proposals`, `rejected proposer account`
             * - DbWrites: `Proposals`, `rejected proposer account`
             * # </weight>
             **/
            rejectProposal: AugmentedSubmittable<(proposalId: Compact<u32> | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [Compact<u32>]>;
            /**
             * Generic tx
             **/
            [key: string]: SubmittableExtrinsicFunction<ApiType>;
        };
        utility: {
            /**
             * Send a call through an indexed pseudonym of the sender.
             *
             * Filter from origin are passed along. The call will be dispatched with an origin which
             * use the same filter as the origin of this call.
             *
             * NOTE: If you need to ensure that any account-based filtering is not honored (i.e.
             * because you expect `proxy` to have been used prior in the call stack and you do not want
             * the call restrictions to apply to any sub-accounts), then use `as_multi_threshold_1`
             * in the Multisig pallet instead.
             *
             * NOTE: Prior to version *12, this was called `as_limited_sub`.
             *
             * The dispatch origin for this call must be _Signed_.
             **/
            asDerivative: AugmentedSubmittable<(index: u16 | AnyNumber | Uint8Array, call: Call | {
                callIndex?: any;
                args?: any;
            } | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [u16, Call]>;
            /**
             * Send a batch of dispatch calls.
             *
             * May be called from any origin.
             *
             * - `calls`: The calls to be dispatched from the same origin. The number of call must not
             * exceed the constant: `batched_calls_limit` (available in constant metadata).
             *
             * If origin is root then call are dispatch without checking origin filter. (This includes
             * bypassing `frame_system::Config::BaseCallFilter`).
             *
             * # <weight>
             * - Complexity: O(C) where C is the number of calls to be batched.
             * # </weight>
             *
             * This will return `Ok` in all circumstances. To determine the success of the batch, an
             * event is deposited. If a call failed and the batch was interrupted, then the
             * `BatchInterrupted` event is deposited, along with the number of successful calls made
             * and the error of the failed call. If all were successful, then the `BatchCompleted`
             * event is deposited.
             **/
            batch: AugmentedSubmittable<(calls: Vec<Call> | (Call | {
                callIndex?: any;
                args?: any;
            } | string | Uint8Array)[]) => SubmittableExtrinsic<ApiType>, [Vec<Call>]>;
            /**
             * Send a batch of dispatch calls and atomically execute them.
             * The whole transaction will rollback and fail if any of the calls failed.
             *
             * May be called from any origin.
             *
             * - `calls`: The calls to be dispatched from the same origin. The number of call must not
             * exceed the constant: `batched_calls_limit` (available in constant metadata).
             *
             * If origin is root then call are dispatch without checking origin filter. (This includes
             * bypassing `frame_system::Config::BaseCallFilter`).
             *
             * # <weight>
             * - Complexity: O(C) where C is the number of calls to be batched.
             * # </weight>
             **/
            batchAll: AugmentedSubmittable<(calls: Vec<Call> | (Call | {
                callIndex?: any;
                args?: any;
            } | string | Uint8Array)[]) => SubmittableExtrinsic<ApiType>, [Vec<Call>]>;
            /**
             * Dispatches a function call with a provided origin.
             *
             * The dispatch origin for this call must be _Root_.
             *
             * # <weight>
             * - O(1).
             * - Limited storage reads.
             * - One DB write (event).
             * - Weight of derivative `call` execution + T::WeightInfo::dispatch_as().
             * # </weight>
             **/
            dispatchAs: AugmentedSubmittable<(asOrigin: MangataKusamaRuntimeOriginCaller | {
                system: any;
            } | {
                Void: any;
            } | {
                PolkadotXcm: any;
            } | {
                CumulusXcm: any;
            } | {
                Council: any;
            } | string | Uint8Array, call: Call | {
                callIndex?: any;
                args?: any;
            } | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [MangataKusamaRuntimeOriginCaller, Call]>;
            /**
             * Generic tx
             **/
            [key: string]: SubmittableExtrinsicFunction<ApiType>;
        };
        verifier: {
            /**
             * Generic tx
             **/
            [key: string]: SubmittableExtrinsicFunction<ApiType>;
        };
        vesting: {
            /**
             * Force a vested transfer.
             *
             * The dispatch origin for this call must be _Root_.
             *
             * - `source`: The account whose funds should be transferred.
             * - `target`: The account that should be transferred the vested funds.
             * - `schedule`: The vesting schedule attached to the transfer.
             *
             * Emits `VestingCreated`.
             *
             * NOTE: This will unlock all schedules through the current block.
             *
             * # <weight>
             * - `O(1)`.
             * - DbWeight: 4 Reads, 4 Writes
             * - Reads: Vesting Storage, Balances Locks, Target Account, Source Account
             * - Writes: Vesting Storage, Balances Locks, Target Account, Source Account
             * # </weight>
             **/
            forceVestedTransfer: AugmentedSubmittable<(tokenId: u32 | AnyNumber | Uint8Array, source: MultiAddress | {
                Id: any;
            } | {
                Index: any;
            } | {
                Raw: any;
            } | {
                Address32: any;
            } | {
                Address20: any;
            } | string | Uint8Array, target: MultiAddress | {
                Id: any;
            } | {
                Index: any;
            } | {
                Raw: any;
            } | {
                Address32: any;
            } | {
                Address20: any;
            } | string | Uint8Array, schedule: PalletVestingMangataVestingInfo | {
                locked?: any;
                perBlock?: any;
                startingBlock?: any;
            } | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [u32, MultiAddress, MultiAddress, PalletVestingMangataVestingInfo]>;
            /**
             * Merge two vesting schedules together, creating a new vesting schedule that unlocks over
             * the highest possible start and end blocks. If both schedules have already started the
             * current block will be used as the schedule start; with the caveat that if one schedule
             * is finished by the current block, the other will be treated as the new merged schedule,
             * unmodified.
             *
             * NOTE: If `schedule1_index == schedule2_index` this is a no-op.
             * NOTE: This will unlock all schedules through the current block prior to merging.
             * NOTE: If both schedules have ended by the current block, no new schedule will be created
             * and both will be removed.
             *
             * Merged schedule attributes:
             * - `starting_block`: `MAX(schedule1.starting_block, scheduled2.starting_block,
             * current_block)`.
             * - `ending_block`: `MAX(schedule1.ending_block, schedule2.ending_block)`.
             * - `locked`: `schedule1.locked_at(current_block) + schedule2.locked_at(current_block)`.
             *
             * The dispatch origin for this call must be _Signed_.
             *
             * - `schedule1_index`: index of the first schedule to merge.
             * - `schedule2_index`: index of the second schedule to merge.
             **/
            mergeSchedules: AugmentedSubmittable<(tokenId: u32 | AnyNumber | Uint8Array, schedule1Index: u32 | AnyNumber | Uint8Array, schedule2Index: u32 | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [u32, u32, u32]>;
            /**
             * Unlock any vested funds of the sender account.
             *
             * The dispatch origin for this call must be _Signed_ and the sender must have funds still
             * locked under this pallet.
             *
             * Emits either `VestingCompleted` or `VestingUpdated`.
             *
             * # <weight>
             * - `O(1)`.
             * - DbWeight: 2 Reads, 2 Writes
             * - Reads: Vesting Storage, Balances Locks, [Sender Account]
             * - Writes: Vesting Storage, Balances Locks, [Sender Account]
             * # </weight>
             **/
            vest: AugmentedSubmittable<(tokenId: u32 | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [u32]>;
            /**
             * Unlock any vested funds of a `target` account.
             *
             * The dispatch origin for this call must be _Signed_.
             *
             * - `target`: The account whose vested funds should be unlocked. Must have funds still
             * locked under this pallet.
             *
             * Emits either `VestingCompleted` or `VestingUpdated`.
             *
             * # <weight>
             * - `O(1)`.
             * - DbWeight: 3 Reads, 3 Writes
             * - Reads: Vesting Storage, Balances Locks, Target Account
             * - Writes: Vesting Storage, Balances Locks, Target Account
             * # </weight>
             **/
            vestOther: AugmentedSubmittable<(tokenId: u32 | AnyNumber | Uint8Array, target: MultiAddress | {
                Id: any;
            } | {
                Index: any;
            } | {
                Raw: any;
            } | {
                Address32: any;
            } | {
                Address20: any;
            } | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [u32, MultiAddress]>;
            /**
             * Generic tx
             **/
            [key: string]: SubmittableExtrinsicFunction<ApiType>;
        };
        xcmpQueue: {
            /**
             * Services a single overweight XCM.
             *
             * - `origin`: Must pass `ExecuteOverweightOrigin`.
             * - `index`: The index of the overweight XCM to service
             * - `weight_limit`: The amount of weight that XCM execution may take.
             *
             * Errors:
             * - `BadOverweightIndex`: XCM under `index` is not found in the `Overweight` storage map.
             * - `BadXcm`: XCM under `index` cannot be properly decoded into a valid XCM format.
             * - `WeightOverLimit`: XCM execution may use greater `weight_limit`.
             *
             * Events:
             * - `OverweightServiced`: On success.
             **/
            serviceOverweight: AugmentedSubmittable<(index: u64 | AnyNumber | Uint8Array, weightLimit: u64 | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [u64, u64]>;
            /**
             * Generic tx
             **/
            [key: string]: SubmittableExtrinsicFunction<ApiType>;
        };
        xTokens: {
            /**
             * Transfer native currencies.
             *
             * `dest_weight` is the weight for XCM execution on the dest chain, and
             * it would be charged from the transferred assets. If set below
             * requirements, the execution may fail and assets wouldn't be
             * received.
             *
             * It's a no-op if any error on local XCM execution or message sending.
             * Note sending assets out per se doesn't guarantee they would be
             * received. Receiving depends on if the XCM message could be delivered
             * by the network, and if the receiving chain would handle
             * messages correctly.
             **/
            transfer: AugmentedSubmittable<(currencyId: u32 | AnyNumber | Uint8Array, amount: u128 | AnyNumber | Uint8Array, dest: XcmVersionedMultiLocation | {
                V0: any;
            } | {
                V1: any;
            } | string | Uint8Array, destWeight: u64 | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [u32, u128, XcmVersionedMultiLocation, u64]>;
            /**
             * Transfer `MultiAsset`.
             *
             * `dest_weight` is the weight for XCM execution on the dest chain, and
             * it would be charged from the transferred assets. If set below
             * requirements, the execution may fail and assets wouldn't be
             * received.
             *
             * It's a no-op if any error on local XCM execution or message sending.
             * Note sending assets out per se doesn't guarantee they would be
             * received. Receiving depends on if the XCM message could be delivered
             * by the network, and if the receiving chain would handle
             * messages correctly.
             **/
            transferMultiasset: AugmentedSubmittable<(asset: XcmVersionedMultiAsset | {
                V0: any;
            } | {
                V1: any;
            } | string | Uint8Array, dest: XcmVersionedMultiLocation | {
                V0: any;
            } | {
                V1: any;
            } | string | Uint8Array, destWeight: u64 | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [XcmVersionedMultiAsset, XcmVersionedMultiLocation, u64]>;
            /**
             * Transfer several `MultiAsset` specifying the item to be used as fee
             *
             * `dest_weight` is the weight for XCM execution on the dest chain, and
             * it would be charged from the transferred assets. If set below
             * requirements, the execution may fail and assets wouldn't be
             * received.
             *
             * `fee_item` is index of the MultiAssets that we want to use for
             * payment
             *
             * It's a no-op if any error on local XCM execution or message sending.
             * Note sending assets out per se doesn't guarantee they would be
             * received. Receiving depends on if the XCM message could be delivered
             * by the network, and if the receiving chain would handle
             * messages correctly.
             **/
            transferMultiassets: AugmentedSubmittable<(assets: XcmVersionedMultiAssets | {
                V0: any;
            } | {
                V1: any;
            } | string | Uint8Array, feeItem: u32 | AnyNumber | Uint8Array, dest: XcmVersionedMultiLocation | {
                V0: any;
            } | {
                V1: any;
            } | string | Uint8Array, destWeight: u64 | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [XcmVersionedMultiAssets, u32, XcmVersionedMultiLocation, u64]>;
            /**
             * Transfer `MultiAsset` specifying the fee and amount as separate.
             *
             * `dest_weight` is the weight for XCM execution on the dest chain, and
             * it would be charged from the transferred assets. If set below
             * requirements, the execution may fail and assets wouldn't be
             * received.
             *
             * `fee` is the multiasset to be spent to pay for execution in
             * destination chain. Both fee and amount will be subtracted form the
             * callers balance For now we only accept fee and asset having the same
             * `MultiLocation` id.
             *
             * If `fee` is not high enough to cover for the execution costs in the
             * destination chain, then the assets will be trapped in the
             * destination chain
             *
             * It's a no-op if any error on local XCM execution or message sending.
             * Note sending assets out per se doesn't guarantee they would be
             * received. Receiving depends on if the XCM message could be delivered
             * by the network, and if the receiving chain would handle
             * messages correctly.
             **/
            transferMultiassetWithFee: AugmentedSubmittable<(asset: XcmVersionedMultiAsset | {
                V0: any;
            } | {
                V1: any;
            } | string | Uint8Array, fee: XcmVersionedMultiAsset | {
                V0: any;
            } | {
                V1: any;
            } | string | Uint8Array, dest: XcmVersionedMultiLocation | {
                V0: any;
            } | {
                V1: any;
            } | string | Uint8Array, destWeight: u64 | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [XcmVersionedMultiAsset, XcmVersionedMultiAsset, XcmVersionedMultiLocation, u64]>;
            /**
             * Transfer several currencies specifying the item to be used as fee
             *
             * `dest_weight` is the weight for XCM execution on the dest chain, and
             * it would be charged from the transferred assets. If set below
             * requirements, the execution may fail and assets wouldn't be
             * received.
             *
             * `fee_item` is index of the currencies tuple that we want to use for
             * payment
             *
             * It's a no-op if any error on local XCM execution or message sending.
             * Note sending assets out per se doesn't guarantee they would be
             * received. Receiving depends on if the XCM message could be delivered
             * by the network, and if the receiving chain would handle
             * messages correctly.
             **/
            transferMulticurrencies: AugmentedSubmittable<(currencies: Vec<ITuple<[u32, u128]>> | ([u32 | AnyNumber | Uint8Array, u128 | AnyNumber | Uint8Array])[], feeItem: u32 | AnyNumber | Uint8Array, dest: XcmVersionedMultiLocation | {
                V0: any;
            } | {
                V1: any;
            } | string | Uint8Array, destWeight: u64 | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [Vec<ITuple<[u32, u128]>>, u32, XcmVersionedMultiLocation, u64]>;
            /**
             * Transfer native currencies specifying the fee and amount as
             * separate.
             *
             * `dest_weight` is the weight for XCM execution on the dest chain, and
             * it would be charged from the transferred assets. If set below
             * requirements, the execution may fail and assets wouldn't be
             * received.
             *
             * `fee` is the amount to be spent to pay for execution in destination
             * chain. Both fee and amount will be subtracted form the callers
             * balance.
             *
             * If `fee` is not high enough to cover for the execution costs in the
             * destination chain, then the assets will be trapped in the
             * destination chain
             *
             * It's a no-op if any error on local XCM execution or message sending.
             * Note sending assets out per se doesn't guarantee they would be
             * received. Receiving depends on if the XCM message could be delivered
             * by the network, and if the receiving chain would handle
             * messages correctly.
             **/
            transferWithFee: AugmentedSubmittable<(currencyId: u32 | AnyNumber | Uint8Array, amount: u128 | AnyNumber | Uint8Array, fee: u128 | AnyNumber | Uint8Array, dest: XcmVersionedMultiLocation | {
                V0: any;
            } | {
                V1: any;
            } | string | Uint8Array, destWeight: u64 | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [u32, u128, u128, XcmVersionedMultiLocation, u64]>;
            /**
             * Generic tx
             **/
            [key: string]: SubmittableExtrinsicFunction<ApiType>;
        };
        xyk: {
            activateLiquidity: AugmentedSubmittable<(liquidityTokenId: u32 | AnyNumber | Uint8Array, amount: u128 | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [u32, u128]>;
            burnLiquidity: AugmentedSubmittable<(firstAssetId: u32 | AnyNumber | Uint8Array, secondAssetId: u32 | AnyNumber | Uint8Array, liquidityAssetAmount: u128 | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [u32, u32, u128]>;
            buyAsset: AugmentedSubmittable<(soldAssetId: u32 | AnyNumber | Uint8Array, boughtAssetId: u32 | AnyNumber | Uint8Array, boughtAssetAmount: u128 | AnyNumber | Uint8Array, maxAmountIn: u128 | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [u32, u32, u128, u128]>;
            claimRewards: AugmentedSubmittable<(liquidityTokenId: u32 | AnyNumber | Uint8Array, amount: u128 | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [u32, u128]>;
            createPool: AugmentedSubmittable<(firstAssetId: u32 | AnyNumber | Uint8Array, firstAssetAmount: u128 | AnyNumber | Uint8Array, secondAssetId: u32 | AnyNumber | Uint8Array, secondAssetAmount: u128 | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [u32, u128, u32, u128]>;
            deactivateLiquidity: AugmentedSubmittable<(liquidityTokenId: u32 | AnyNumber | Uint8Array, amount: u128 | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [u32, u128]>;
            mintLiquidity: AugmentedSubmittable<(firstAssetId: u32 | AnyNumber | Uint8Array, secondAssetId: u32 | AnyNumber | Uint8Array, firstAssetAmount: u128 | AnyNumber | Uint8Array, expectedSecondAssetAmount: u128 | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [u32, u32, u128, u128]>;
            mintLiquidityUsingVestingNativeTokens: AugmentedSubmittable<(vestingNativeAssetAmount: u128 | AnyNumber | Uint8Array, secondAssetId: u32 | AnyNumber | Uint8Array, expectedSecondAssetAmount: u128 | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [u128, u32, u128]>;
            promotePool: AugmentedSubmittable<(liquidityTokenId: u32 | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [u32]>;
            sellAsset: AugmentedSubmittable<(soldAssetId: u32 | AnyNumber | Uint8Array, boughtAssetId: u32 | AnyNumber | Uint8Array, soldAssetAmount: u128 | AnyNumber | Uint8Array, minAmountOut: u128 | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [u32, u32, u128, u128]>;
            /**
             * Generic tx
             **/
            [key: string]: SubmittableExtrinsicFunction<ApiType>;
        };
    }
}

declare module '@polkadot/rpc-core/types/jsonrpc' {
    interface RpcInterface {
        author: {
            /**
             * Returns true if the keystore has private keys for the given public key and key type.
             **/
            hasKey: AugmentedRpc<(publicKey: Bytes | string | Uint8Array, keyType: Text | string) => Observable<bool>>;
            /**
             * Returns true if the keystore has private keys for the given session public keys.
             **/
            hasSessionKeys: AugmentedRpc<(sessionKeys: Bytes | string | Uint8Array) => Observable<bool>>;
            /**
             * Insert a key into the keystore.
             **/
            insertKey: AugmentedRpc<(keyType: Text | string, suri: Text | string, publicKey: Bytes | string | Uint8Array) => Observable<Bytes>>;
            /**
             * Returns all pending extrinsics, potentially grouped by sender
             **/
            pendingExtrinsics: AugmentedRpc<() => Observable<Vec<Extrinsic>>>;
            /**
             * Remove given extrinsic from the pool and temporarily ban it to prevent reimporting
             **/
            removeExtrinsic: AugmentedRpc<(bytesOrHash: Vec<ExtrinsicOrHash> | (ExtrinsicOrHash | {
                Hash: any;
            } | {
                Extrinsic: any;
            } | string | Uint8Array)[]) => Observable<Vec<Hash>>>;
            /**
             * Generate new session keys and returns the corresponding public keys
             **/
            rotateKeys: AugmentedRpc<() => Observable<Bytes>>;
            /**
             * Submit and subscribe to watch an extrinsic until unsubscribed
             **/
            submitAndWatchExtrinsic: AugmentedRpc<(extrinsic: IExtrinsic) => Observable<ExtrinsicStatus>>;
            /**
             * Submit a fully formatted extrinsic for block inclusion
             **/
            submitExtrinsic: AugmentedRpc<(extrinsic: IExtrinsic) => Observable<Hash>>;
        };
        babe: {
            /**
             * Returns data about which slots (primary or secondary) can be claimed in the current epoch with the keys in the keystore
             **/
            epochAuthorship: AugmentedRpc<() => Observable<HashMap<AuthorityId, EpochAuthorship>>>;
        };
        beefy: {
            /**
             * Returns hash of the latest BEEFY finalized block as seen by this client.
             **/
            getFinalizedHead: AugmentedRpc<() => Observable<H256>>;
            /**
             * Returns the block most recently finalized by BEEFY, alongside side its justification.
             **/
            subscribeJustifications: AugmentedRpc<() => Observable<BeefySignedCommitment>>;
        };
        chain: {
            /**
             * Get header and body of a relay chain block
             **/
            getBlock: AugmentedRpc<(hash?: BlockHash | string | Uint8Array) => Observable<SignedBlock>>;
            /**
             * Get the block hash for a specific block
             **/
            getBlockHash: AugmentedRpc<(blockNumber?: BlockNumber | AnyNumber | Uint8Array) => Observable<BlockHash>>;
            /**
             * Get hash of the last finalized block in the canon chain
             **/
            getFinalizedHead: AugmentedRpc<() => Observable<BlockHash>>;
            /**
             * Retrieves the header for a specific block
             **/
            getHeader: AugmentedRpc<(hash?: BlockHash | string | Uint8Array) => Observable<Header>>;
            /**
             * Retrieves the newest header via subscription
             **/
            subscribeAllHeads: AugmentedRpc<() => Observable<Header>>;
            /**
             * Retrieves the best finalized header via subscription
             **/
            subscribeFinalizedHeads: AugmentedRpc<() => Observable<Header>>;
            /**
             * Retrieves the best header via subscription
             **/
            subscribeNewHeads: AugmentedRpc<() => Observable<Header>>;
        };
        childstate: {
            /**
             * Returns the keys with prefix from a child storage, leave empty to get all the keys
             **/
            getKeys: AugmentedRpc<(childKey: PrefixedStorageKey | string | Uint8Array, prefix: StorageKey | string | Uint8Array | any, at?: Hash | string | Uint8Array) => Observable<Vec<StorageKey>>>;
            /**
             * Returns the keys with prefix from a child storage with pagination support
             **/
            getKeysPaged: AugmentedRpc<(childKey: PrefixedStorageKey | string | Uint8Array, prefix: StorageKey | string | Uint8Array | any, count: u32 | AnyNumber | Uint8Array, startKey?: StorageKey | string | Uint8Array | any, at?: Hash | string | Uint8Array) => Observable<Vec<StorageKey>>>;
            /**
             * Returns a child storage entry at a specific block state
             **/
            getStorage: AugmentedRpc<(childKey: PrefixedStorageKey | string | Uint8Array, key: StorageKey | string | Uint8Array | any, at?: Hash | string | Uint8Array) => Observable<Option<StorageData>>>;
            /**
             * Returns child storage entries for multiple keys at a specific block state
             **/
            getStorageEntries: AugmentedRpc<(childKey: PrefixedStorageKey | string | Uint8Array, keys: Vec<StorageKey> | (StorageKey | string | Uint8Array | any)[], at?: Hash | string | Uint8Array) => Observable<Vec<Option<StorageData>>>>;
            /**
             * Returns the hash of a child storage entry at a block state
             **/
            getStorageHash: AugmentedRpc<(childKey: PrefixedStorageKey | string | Uint8Array, key: StorageKey | string | Uint8Array | any, at?: Hash | string | Uint8Array) => Observable<Option<Hash>>>;
            /**
             * Returns the size of a child storage entry at a block state
             **/
            getStorageSize: AugmentedRpc<(childKey: PrefixedStorageKey | string | Uint8Array, key: StorageKey | string | Uint8Array | any, at?: Hash | string | Uint8Array) => Observable<Option<u64>>>;
        };
        contracts: {
            /**
             * Executes a call to a contract
             **/
            call: AugmentedRpc<(callRequest: ContractCallRequest | {
                origin?: any;
                dest?: any;
                value?: any;
                gasLimit?: any;
                storageDepositLimit?: any;
                inputData?: any;
            } | string | Uint8Array, at?: BlockHash | string | Uint8Array) => Observable<ContractExecResult>>;
            /**
             * Returns the value under a specified storage key in a contract
             **/
            getStorage: AugmentedRpc<(address: AccountId | string | Uint8Array, key: H256 | string | Uint8Array, at?: BlockHash | string | Uint8Array) => Observable<Option<Bytes>>>;
            /**
             * Instantiate a new contract
             **/
            instantiate: AugmentedRpc<(request: InstantiateRequest | {
                origin?: any;
                value?: any;
                gasLimit?: any;
                storageDepositLimit?: any;
                code?: any;
                data?: any;
                salt?: any;
            } | string | Uint8Array, at?: BlockHash | string | Uint8Array) => Observable<ContractInstantiateResult>>;
            /**
             * Returns the projected time a given contract will be able to sustain paying its rent
             **/
            rentProjection: AugmentedRpc<(address: AccountId | string | Uint8Array, at?: BlockHash | string | Uint8Array) => Observable<Option<BlockNumber>>>;
            /**
             * Upload new code without instantiating a contract from it
             **/
            uploadCode: AugmentedRpc<(uploadRequest: CodeUploadRequest | {
                origin?: any;
                code?: any;
                storageDepositLimit?: any;
            } | string | Uint8Array, at?: BlockHash | string | Uint8Array) => Observable<CodeUploadResult>>;
        };
        engine: {
            /**
             * Instructs the manual-seal authorship task to create a new block
             **/
            createBlock: AugmentedRpc<(createEmpty: bool | boolean | Uint8Array, finalize: bool | boolean | Uint8Array, parentHash?: BlockHash | string | Uint8Array) => Observable<CreatedBlock>>;
            /**
             * Instructs the manual-seal authorship task to finalize a block
             **/
            finalizeBlock: AugmentedRpc<(hash: BlockHash | string | Uint8Array, justification?: Justification) => Observable<bool>>;
        };
        eth: {
            /**
             * Returns accounts list.
             **/
            accounts: AugmentedRpc<() => Observable<Vec<H160>>>;
            /**
             * Returns the blockNumber
             **/
            blockNumber: AugmentedRpc<() => Observable<U256>>;
            /**
             * Call contract, returning the output data.
             **/
            call: AugmentedRpc<(request: EthCallRequest | {
                from?: any;
                to?: any;
                gasPrice?: any;
                gas?: any;
                value?: any;
                data?: any;
                nonce?: any;
            } | string | Uint8Array, number?: BlockNumber | AnyNumber | Uint8Array) => Observable<Bytes>>;
            /**
             * Returns the chain ID used for transaction signing at the current best block. None is returned if not available.
             **/
            chainId: AugmentedRpc<() => Observable<U64>>;
            /**
             * Returns block author.
             **/
            coinbase: AugmentedRpc<() => Observable<H160>>;
            /**
             * Estimate gas needed for execution of given contract.
             **/
            estimateGas: AugmentedRpc<(request: EthCallRequest | {
                from?: any;
                to?: any;
                gasPrice?: any;
                gas?: any;
                value?: any;
                data?: any;
                nonce?: any;
            } | string | Uint8Array, number?: BlockNumber | AnyNumber | Uint8Array) => Observable<U256>>;
            /**
             * Returns current gas price.
             **/
            gasPrice: AugmentedRpc<() => Observable<U256>>;
            /**
             * Returns balance of the given account.
             **/
            getBalance: AugmentedRpc<(address: H160 | string | Uint8Array, number?: BlockNumber | AnyNumber | Uint8Array) => Observable<U256>>;
            /**
             * Returns block with given hash.
             **/
            getBlockByHash: AugmentedRpc<(hash: H256 | string | Uint8Array, full: bool | boolean | Uint8Array) => Observable<Option<EthRichBlock>>>;
            /**
             * Returns block with given number.
             **/
            getBlockByNumber: AugmentedRpc<(block: BlockNumber | AnyNumber | Uint8Array, full: bool | boolean | Uint8Array) => Observable<Option<EthRichBlock>>>;
            /**
             * Returns the number of transactions in a block with given hash.
             **/
            getBlockTransactionCountByHash: AugmentedRpc<(hash: H256 | string | Uint8Array) => Observable<U256>>;
            /**
             * Returns the number of transactions in a block with given block number.
             **/
            getBlockTransactionCountByNumber: AugmentedRpc<(block: BlockNumber | AnyNumber | Uint8Array) => Observable<U256>>;
            /**
             * Returns the code at given address at given time (block number).
             **/
            getCode: AugmentedRpc<(address: H160 | string | Uint8Array, number?: BlockNumber | AnyNumber | Uint8Array) => Observable<Bytes>>;
            /**
             * Returns filter changes since last poll.
             **/
            getFilterChanges: AugmentedRpc<(index: U256 | AnyNumber | Uint8Array) => Observable<EthFilterChanges>>;
            /**
             * Returns all logs matching given filter (in a range 'from' - 'to').
             **/
            getFilterLogs: AugmentedRpc<(index: U256 | AnyNumber | Uint8Array) => Observable<Vec<EthLog>>>;
            /**
             * Returns logs matching given filter object.
             **/
            getLogs: AugmentedRpc<(filter: EthFilter | {
                fromBlock?: any;
                toBlock?: any;
                blockHash?: any;
                address?: any;
                topics?: any;
            } | string | Uint8Array) => Observable<Vec<EthLog>>>;
            /**
             * Returns proof for account and storage.
             **/
            getProof: AugmentedRpc<(address: H160 | string | Uint8Array, storageKeys: Vec<H256> | (H256 | string | Uint8Array)[], number: BlockNumber | AnyNumber | Uint8Array) => Observable<EthAccount>>;
            /**
             * Returns content of the storage at given address.
             **/
            getStorageAt: AugmentedRpc<(address: H160 | string | Uint8Array, index: U256 | AnyNumber | Uint8Array, number?: BlockNumber | AnyNumber | Uint8Array) => Observable<H256>>;
            /**
             * Returns transaction at given block hash and index.
             **/
            getTransactionByBlockHashAndIndex: AugmentedRpc<(hash: H256 | string | Uint8Array, index: U256 | AnyNumber | Uint8Array) => Observable<EthTransaction>>;
            /**
             * Returns transaction by given block number and index.
             **/
            getTransactionByBlockNumberAndIndex: AugmentedRpc<(number: BlockNumber | AnyNumber | Uint8Array, index: U256 | AnyNumber | Uint8Array) => Observable<EthTransaction>>;
            /**
             * Get transaction by its hash.
             **/
            getTransactionByHash: AugmentedRpc<(hash: H256 | string | Uint8Array) => Observable<EthTransaction>>;
            /**
             * Returns the number of transactions sent from given address at given time (block number).
             **/
            getTransactionCount: AugmentedRpc<(hash: H256 | string | Uint8Array, number?: BlockNumber | AnyNumber | Uint8Array) => Observable<U256>>;
            /**
             * Returns transaction receipt by transaction hash.
             **/
            getTransactionReceipt: AugmentedRpc<(hash: H256 | string | Uint8Array) => Observable<EthReceipt>>;
            /**
             * Returns an uncles at given block and index.
             **/
            getUncleByBlockHashAndIndex: AugmentedRpc<(hash: H256 | string | Uint8Array, index: U256 | AnyNumber | Uint8Array) => Observable<EthRichBlock>>;
            /**
             * Returns an uncles at given block and index.
             **/
            getUncleByBlockNumberAndIndex: AugmentedRpc<(number: BlockNumber | AnyNumber | Uint8Array, index: U256 | AnyNumber | Uint8Array) => Observable<EthRichBlock>>;
            /**
             * Returns the number of uncles in a block with given hash.
             **/
            getUncleCountByBlockHash: AugmentedRpc<(hash: H256 | string | Uint8Array) => Observable<U256>>;
            /**
             * Returns the number of uncles in a block with given block number.
             **/
            getUncleCountByBlockNumber: AugmentedRpc<(number: BlockNumber | AnyNumber | Uint8Array) => Observable<U256>>;
            /**
             * Returns the hash of the current block, the seedHash, and the boundary condition to be met.
             **/
            getWork: AugmentedRpc<() => Observable<EthWork>>;
            /**
             * Returns the number of hashes per second that the node is mining with.
             **/
            hashrate: AugmentedRpc<() => Observable<U256>>;
            /**
             * Returns true if client is actively mining new blocks.
             **/
            mining: AugmentedRpc<() => Observable<bool>>;
            /**
             * Returns id of new block filter.
             **/
            newBlockFilter: AugmentedRpc<() => Observable<U256>>;
            /**
             * Returns id of new filter.
             **/
            newFilter: AugmentedRpc<(filter: EthFilter | {
                fromBlock?: any;
                toBlock?: any;
                blockHash?: any;
                address?: any;
                topics?: any;
            } | string | Uint8Array) => Observable<U256>>;
            /**
             * Returns id of new block filter.
             **/
            newPendingTransactionFilter: AugmentedRpc<() => Observable<U256>>;
            /**
             * Returns protocol version encoded as a string (quotes are necessary).
             **/
            protocolVersion: AugmentedRpc<() => Observable<u64>>;
            /**
             * Sends signed transaction, returning its hash.
             **/
            sendRawTransaction: AugmentedRpc<(bytes: Bytes | string | Uint8Array) => Observable<H256>>;
            /**
             * Sends transaction; will block waiting for signer to return the transaction hash
             **/
            sendTransaction: AugmentedRpc<(tx: EthTransactionRequest | {
                from?: any;
                to?: any;
                gasPrice?: any;
                gas?: any;
                value?: any;
                data?: any;
                nonce?: any;
            } | string | Uint8Array) => Observable<H256>>;
            /**
             * Used for submitting mining hashrate.
             **/
            submitHashrate: AugmentedRpc<(index: U256 | AnyNumber | Uint8Array, hash: H256 | string | Uint8Array) => Observable<bool>>;
            /**
             * Used for submitting a proof-of-work solution.
             **/
            submitWork: AugmentedRpc<(nonce: H64 | string | Uint8Array, headerHash: H256 | string | Uint8Array, mixDigest: H256 | string | Uint8Array) => Observable<bool>>;
            /**
             * Subscribe to Eth subscription.
             **/
            subscribe: AugmentedRpc<(kind: EthSubKind | 'newHeads' | 'logs' | 'newPendingTransactions' | 'syncing' | number | Uint8Array, params?: EthSubParams | {
                None: any;
            } | {
                Logs: any;
            } | string | Uint8Array) => Observable<Null>>;
            /**
             * Returns an object with data about the sync status or false.
             **/
            syncing: AugmentedRpc<() => Observable<EthSyncStatus>>;
            /**
             * Uninstalls filter.
             **/
            uninstallFilter: AugmentedRpc<(index: U256 | AnyNumber | Uint8Array) => Observable<bool>>;
        };
        grandpa: {
            /**
             * Prove finality for the given block number, returning the Justification for the last block in the set.
             **/
            proveFinality: AugmentedRpc<(blockNumber: BlockNumber | AnyNumber | Uint8Array) => Observable<Option<EncodedFinalityProofs>>>;
            /**
             * Returns the state of the current best round state as well as the ongoing background rounds
             **/
            roundState: AugmentedRpc<() => Observable<ReportedRoundStates>>;
            /**
             * Subscribes to grandpa justifications
             **/
            subscribeJustifications: AugmentedRpc<() => Observable<JustificationNotification>>;
        };
        mmr: {
            /**
             * Generate MMR proof for given leaf index.
             **/
            generateProof: AugmentedRpc<(leafIndex: u64 | AnyNumber | Uint8Array, at?: BlockHash | string | Uint8Array) => Observable<MmrLeafProof>>;
        };
        net: {
            /**
             * Returns true if client is actively listening for network connections. Otherwise false.
             **/
            listening: AugmentedRpc<() => Observable<bool>>;
            /**
             * Returns number of peers connected to node.
             **/
            peerCount: AugmentedRpc<() => Observable<Text>>;
            /**
             * Returns protocol version.
             **/
            version: AugmentedRpc<() => Observable<Text>>;
        };
        offchain: {
            /**
             * Get offchain local storage under given key and prefix
             **/
            localStorageGet: AugmentedRpc<(kind: StorageKind | 'PERSISTENT' | 'LOCAL' | number | Uint8Array, key: Bytes | string | Uint8Array) => Observable<Option<Bytes>>>;
            /**
             * Set offchain local storage under given key and prefix
             **/
            localStorageSet: AugmentedRpc<(kind: StorageKind | 'PERSISTENT' | 'LOCAL' | number | Uint8Array, key: Bytes | string | Uint8Array, value: Bytes | string | Uint8Array) => Observable<Null>>;
        };
        payment: {
            /**
             * Query the detailed fee of a given encoded extrinsic
             **/
            queryFeeDetails: AugmentedRpc<(extrinsic: Bytes | string | Uint8Array, at?: BlockHash | string | Uint8Array) => Observable<FeeDetails>>;
            /**
             * Retrieves the fee information for an encoded extrinsic
             **/
            queryInfo: AugmentedRpc<(extrinsic: Bytes | string | Uint8Array, at?: BlockHash | string | Uint8Array) => Observable<RuntimeDispatchInfo>>;
        };
        rpc: {
            /**
             * Retrieves the list of RPC methods that are exposed by the node
             **/
            methods: AugmentedRpc<() => Observable<RpcMethods>>;
        };
        state: {
            /**
             * Perform a call to a builtin on the chain
             **/
            call: AugmentedRpc<(method: Text | string, data: Bytes | string | Uint8Array, at?: BlockHash | string | Uint8Array) => Observable<Bytes>>;
            /**
             * Retrieves the keys with prefix of a specific child storage
             **/
            getChildKeys: AugmentedRpc<(childStorageKey: StorageKey | string | Uint8Array | any, childDefinition: StorageKey | string | Uint8Array | any, childType: u32 | AnyNumber | Uint8Array, key: StorageKey | string | Uint8Array | any, at?: BlockHash | string | Uint8Array) => Observable<Vec<StorageKey>>>;
            /**
             * Returns proof of storage for child key entries at a specific block state.
             **/
            getChildReadProof: AugmentedRpc<(childStorageKey: PrefixedStorageKey | string | Uint8Array, keys: Vec<StorageKey> | (StorageKey | string | Uint8Array | any)[], at?: BlockHash | string | Uint8Array) => Observable<ReadProof>>;
            /**
             * Retrieves the child storage for a key
             **/
            getChildStorage: AugmentedRpc<(childStorageKey: StorageKey | string | Uint8Array | any, childDefinition: StorageKey | string | Uint8Array | any, childType: u32 | AnyNumber | Uint8Array, key: StorageKey | string | Uint8Array | any, at?: BlockHash | string | Uint8Array) => Observable<StorageData>>;
            /**
             * Retrieves the child storage hash
             **/
            getChildStorageHash: AugmentedRpc<(childStorageKey: StorageKey | string | Uint8Array | any, childDefinition: StorageKey | string | Uint8Array | any, childType: u32 | AnyNumber | Uint8Array, key: StorageKey | string | Uint8Array | any, at?: BlockHash | string | Uint8Array) => Observable<Hash>>;
            /**
             * Retrieves the child storage size
             **/
            getChildStorageSize: AugmentedRpc<(childStorageKey: StorageKey | string | Uint8Array | any, childDefinition: StorageKey | string | Uint8Array | any, childType: u32 | AnyNumber | Uint8Array, key: StorageKey | string | Uint8Array | any, at?: BlockHash | string | Uint8Array) => Observable<u64>>;
            /**
             * Retrieves the keys with a certain prefix
             **/
            getKeys: AugmentedRpc<(key: StorageKey | string | Uint8Array | any, at?: BlockHash | string | Uint8Array) => Observable<Vec<StorageKey>>>;
            /**
             * Returns the keys with prefix with pagination support.
             **/
            getKeysPaged: AugmentedRpc<(key: StorageKey | string | Uint8Array | any, count: u32 | AnyNumber | Uint8Array, startKey?: StorageKey | string | Uint8Array | any, at?: BlockHash | string | Uint8Array) => Observable<Vec<StorageKey>>>;
            /**
             * Returns the runtime metadata
             **/
            getMetadata: AugmentedRpc<(at?: BlockHash | string | Uint8Array) => Observable<Metadata>>;
            /**
             * Returns the keys with prefix, leave empty to get all the keys (deprecated: Use getKeysPaged)
             **/
            getPairs: AugmentedRpc<(prefix: StorageKey | string | Uint8Array | any, at?: BlockHash | string | Uint8Array) => Observable<Vec<KeyValue>>>;
            /**
             * Returns proof of storage entries at a specific block state
             **/
            getReadProof: AugmentedRpc<(keys: Vec<StorageKey> | (StorageKey | string | Uint8Array | any)[], at?: BlockHash | string | Uint8Array) => Observable<ReadProof>>;
            /**
             * Get the runtime version
             **/
            getRuntimeVersion: AugmentedRpc<(at?: BlockHash | string | Uint8Array) => Observable<RuntimeVersion>>;
            /**
             * Retrieves the storage for a key
             **/
            getStorage: AugmentedRpc<(<T = Codec>(key: StorageKey | string | Uint8Array | any, block?: Hash | Uint8Array | string) => Observable<T>)>;
            /**
             * Retrieves the storage hash
             **/
            getStorageHash: AugmentedRpc<(key: StorageKey | string | Uint8Array | any, at?: BlockHash | string | Uint8Array) => Observable<Hash>>;
            /**
             * Retrieves the storage size
             **/
            getStorageSize: AugmentedRpc<(key: StorageKey | string | Uint8Array | any, at?: BlockHash | string | Uint8Array) => Observable<u64>>;
            /**
             * Query historical storage entries (by key) starting from a start block
             **/
            queryStorage: AugmentedRpc<(<T = Codec[]>(keys: Vec<StorageKey> | (StorageKey | string | Uint8Array | any)[], fromBlock?: Hash | Uint8Array | string, toBlock?: Hash | Uint8Array | string) => Observable<[Hash, T][]>)>;
            /**
             * Query storage entries (by key) starting at block hash given as the second parameter
             **/
            queryStorageAt: AugmentedRpc<(<T = Codec[]>(keys: Vec<StorageKey> | (StorageKey | string | Uint8Array | any)[], at?: Hash | Uint8Array | string) => Observable<T>)>;
            /**
             * Retrieves the runtime version via subscription
             **/
            subscribeRuntimeVersion: AugmentedRpc<() => Observable<RuntimeVersion>>;
            /**
             * Subscribes to storage changes for the provided keys
             **/
            subscribeStorage: AugmentedRpc<(<T = Codec[]>(keys?: Vec<StorageKey> | (StorageKey | string | Uint8Array | any)[]) => Observable<T>)>;
            /**
             * Provides a way to trace the re-execution of a single block
             **/
            traceBlock: AugmentedRpc<(block: Hash | string | Uint8Array, targets: Option<Text> | null | object | string | Uint8Array, storageKeys: Option<Text> | null | object | string | Uint8Array, methods: Option<Text> | null | object | string | Uint8Array) => Observable<TraceBlockResponse>>;
            /**
             * Check current migration state
             **/
            trieMigrationStatus: AugmentedRpc<(at?: BlockHash | string | Uint8Array) => Observable<MigrationStatusResult>>;
        };
        syncstate: {
            /**
             * Returns the json-serialized chainspec running the node, with a sync state.
             **/
            genSyncSpec: AugmentedRpc<(raw: bool | boolean | Uint8Array) => Observable<Json>>;
        };
        system: {
            /**
             * Retrieves the next accountIndex as available on the node
             **/
            accountNextIndex: AugmentedRpc<(accountId: AccountId | string | Uint8Array) => Observable<Index>>;
            /**
             * Adds the supplied directives to the current log filter
             **/
            addLogFilter: AugmentedRpc<(directives: Text | string) => Observable<Null>>;
            /**
             * Adds a reserved peer
             **/
            addReservedPeer: AugmentedRpc<(peer: Text | string) => Observable<Text>>;
            /**
             * Retrieves the chain
             **/
            chain: AugmentedRpc<() => Observable<Text>>;
            /**
             * Retrieves the chain type
             **/
            chainType: AugmentedRpc<() => Observable<ChainType>>;
            /**
             * Dry run an extrinsic at a given block
             **/
            dryRun: AugmentedRpc<(extrinsic: Bytes | string | Uint8Array, at?: BlockHash | string | Uint8Array) => Observable<ApplyExtrinsicResult>>;
            /**
             * Return health status of the node
             **/
            health: AugmentedRpc<() => Observable<Health>>;
            /**
             * The addresses include a trailing /p2p/ with the local PeerId, and are thus suitable to be passed to addReservedPeer or as a bootnode address for example
             **/
            localListenAddresses: AugmentedRpc<() => Observable<Vec<Text>>>;
            /**
             * Returns the base58-encoded PeerId of the node
             **/
            localPeerId: AugmentedRpc<() => Observable<Text>>;
            /**
             * Retrieves the node name
             **/
            name: AugmentedRpc<() => Observable<Text>>;
            /**
             * Returns current state of the network
             **/
            networkState: AugmentedRpc<() => Observable<NetworkState>>;
            /**
             * Returns the roles the node is running as
             **/
            nodeRoles: AugmentedRpc<() => Observable<Vec<NodeRole>>>;
            /**
             * Returns the currently connected peers
             **/
            peers: AugmentedRpc<() => Observable<Vec<PeerInfo>>>;
            /**
             * Get a custom set of properties as a JSON object, defined in the chain spec
             **/
            properties: AugmentedRpc<() => Observable<ChainProperties>>;
            /**
             * Remove a reserved peer
             **/
            removeReservedPeer: AugmentedRpc<(peerId: Text | string) => Observable<Text>>;
            /**
             * Returns the list of reserved peers
             **/
            reservedPeers: AugmentedRpc<() => Observable<Vec<Text>>>;
            /**
             * Resets the log filter to Substrate defaults
             **/
            resetLogFilter: AugmentedRpc<() => Observable<Null>>;
            /**
             * Returns the state of the syncing of the node
             **/
            syncState: AugmentedRpc<() => Observable<SyncState>>;
            /**
             * Retrieves the version of the node
             **/
            version: AugmentedRpc<() => Observable<Text>>;
        };
        web3: {
            /**
             * Returns current client version.
             **/
            clientVersion: AugmentedRpc<() => Observable<Text>>;
            /**
             * Returns sha3 of the given data
             **/
            sha3: AugmentedRpc<(data: Bytes | string | Uint8Array) => Observable<H256>>;
        };
    }
}

declare module '@polkadot/types/types/registry' {
    interface InterfaceTypes {
        AbridgedCandidateReceipt: AbridgedCandidateReceipt;
        AbridgedHostConfiguration: AbridgedHostConfiguration;
        AbridgedHrmpChannel: AbridgedHrmpChannel;
        AccountData: AccountData;
        AccountId: AccountId;
        AccountId20: AccountId20;
        AccountId32: AccountId32;
        AccountIdOf: AccountIdOf;
        AccountIndex: AccountIndex;
        AccountInfo: AccountInfo;
        AccountInfoWithDualRefCount: AccountInfoWithDualRefCount;
        AccountInfoWithProviders: AccountInfoWithProviders;
        AccountInfoWithRefCount: AccountInfoWithRefCount;
        AccountInfoWithRefCountU8: AccountInfoWithRefCountU8;
        AccountInfoWithTripleRefCount: AccountInfoWithTripleRefCount;
        AccountStatus: AccountStatus;
        AccountValidity: AccountValidity;
        AccountVote: AccountVote;
        AccountVoteSplit: AccountVoteSplit;
        AccountVoteStandard: AccountVoteStandard;
        ActiveEraInfo: ActiveEraInfo;
        ActiveGilt: ActiveGilt;
        ActiveGiltsTotal: ActiveGiltsTotal;
        ActiveIndex: ActiveIndex;
        ActiveRecovery: ActiveRecovery;
        Address: Address;
        AliveContractInfo: AliveContractInfo;
        AllowedSlots: AllowedSlots;
        AnySignature: AnySignature;
        ApiId: ApiId;
        ApplyExtrinsicResult: ApplyExtrinsicResult;
        ApprovalFlag: ApprovalFlag;
        Approvals: Approvals;
        ArithmeticError: ArithmeticError;
        AssetApproval: AssetApproval;
        AssetApprovalKey: AssetApprovalKey;
        AssetBalance: AssetBalance;
        AssetDestroyWitness: AssetDestroyWitness;
        AssetDetails: AssetDetails;
        AssetId: AssetId;
        AssetInstance: AssetInstance;
        AssetInstanceV0: AssetInstanceV0;
        AssetInstanceV1: AssetInstanceV1;
        AssetInstanceV2: AssetInstanceV2;
        AssetMetadata: AssetMetadata;
        AssetOptions: AssetOptions;
        AssignmentId: AssignmentId;
        AssignmentKind: AssignmentKind;
        AttestedCandidate: AttestedCandidate;
        AuctionIndex: AuctionIndex;
        AuthIndex: AuthIndex;
        AuthorityDiscoveryId: AuthorityDiscoveryId;
        AuthorityId: AuthorityId;
        AuthorityIndex: AuthorityIndex;
        AuthorityList: AuthorityList;
        AuthoritySet: AuthoritySet;
        AuthoritySetChange: AuthoritySetChange;
        AuthoritySetChanges: AuthoritySetChanges;
        AuthoritySignature: AuthoritySignature;
        AuthorityWeight: AuthorityWeight;
        AvailabilityBitfield: AvailabilityBitfield;
        AvailabilityBitfieldRecord: AvailabilityBitfieldRecord;
        BabeAuthorityWeight: BabeAuthorityWeight;
        BabeBlockWeight: BabeBlockWeight;
        BabeEpochConfiguration: BabeEpochConfiguration;
        BabeEquivocationProof: BabeEquivocationProof;
        BabeWeight: BabeWeight;
        BackedCandidate: BackedCandidate;
        Balance: Balance;
        BalanceLock: BalanceLock;
        BalanceLockTo212: BalanceLockTo212;
        BalanceOf: BalanceOf;
        BalanceStatus: BalanceStatus;
        BeefyCommitment: BeefyCommitment;
        BeefyId: BeefyId;
        BeefyKey: BeefyKey;
        BeefyNextAuthoritySet: BeefyNextAuthoritySet;
        BeefyPayload: BeefyPayload;
        BeefySignedCommitment: BeefySignedCommitment;
        Bid: Bid;
        Bidder: Bidder;
        BidKind: BidKind;
        BitVec: BitVec;
        Block: Block;
        BlockAttestations: BlockAttestations;
        BlockHash: BlockHash;
        BlockLength: BlockLength;
        BlockNumber: BlockNumber;
        BlockNumberFor: BlockNumberFor;
        BlockNumberOf: BlockNumberOf;
        BlockTrace: BlockTrace;
        BlockTraceEvent: BlockTraceEvent;
        BlockTraceEventData: BlockTraceEventData;
        BlockTraceSpan: BlockTraceSpan;
        BlockV0: BlockV0;
        BlockV1: BlockV1;
        BlockV2: BlockV2;
        BlockWeights: BlockWeights;
        BodyId: BodyId;
        BodyPart: BodyPart;
        bool: bool;
        Bool: Bool;
        Bounty: Bounty;
        BountyIndex: BountyIndex;
        BountyStatus: BountyStatus;
        BountyStatusActive: BountyStatusActive;
        BountyStatusCuratorProposed: BountyStatusCuratorProposed;
        BountyStatusPendingPayout: BountyStatusPendingPayout;
        BridgedBlockHash: BridgedBlockHash;
        BridgedBlockNumber: BridgedBlockNumber;
        BridgedHeader: BridgedHeader;
        BridgeMessageId: BridgeMessageId;
        BufferedSessionChange: BufferedSessionChange;
        Bytes: Bytes;
        Call: Call;
        CallHash: CallHash;
        CallHashOf: CallHashOf;
        CallIndex: CallIndex;
        CallOrigin: CallOrigin;
        CandidateCommitments: CandidateCommitments;
        CandidateDescriptor: CandidateDescriptor;
        CandidateHash: CandidateHash;
        CandidateInfo: CandidateInfo;
        CandidatePendingAvailability: CandidatePendingAvailability;
        CandidateReceipt: CandidateReceipt;
        ChainId: ChainId;
        ChainProperties: ChainProperties;
        ChainType: ChainType;
        ChangesTrieConfiguration: ChangesTrieConfiguration;
        ChangesTrieSignal: ChangesTrieSignal;
        ClassDetails: ClassDetails;
        ClassId: ClassId;
        ClassMetadata: ClassMetadata;
        CodecHash: CodecHash;
        CodeHash: CodeHash;
        CodeSource: CodeSource;
        CodeUploadRequest: CodeUploadRequest;
        CodeUploadResult: CodeUploadResult;
        CodeUploadResultValue: CodeUploadResultValue;
        CollatorId: CollatorId;
        CollatorSignature: CollatorSignature;
        CollectiveOrigin: CollectiveOrigin;
        CommittedCandidateReceipt: CommittedCandidateReceipt;
        CompactAssignments: CompactAssignments;
        CompactAssignmentsTo257: CompactAssignmentsTo257;
        CompactAssignmentsTo265: CompactAssignmentsTo265;
        CompactAssignmentsWith16: CompactAssignmentsWith16;
        CompactAssignmentsWith24: CompactAssignmentsWith24;
        CompactScore: CompactScore;
        CompactScoreCompact: CompactScoreCompact;
        ConfigData: ConfigData;
        Consensus: Consensus;
        ConsensusEngineId: ConsensusEngineId;
        ConsumedWeight: ConsumedWeight;
        ContractCallFlags: ContractCallFlags;
        ContractCallRequest: ContractCallRequest;
        ContractConstructorSpecLatest: ContractConstructorSpecLatest;
        ContractConstructorSpecV0: ContractConstructorSpecV0;
        ContractConstructorSpecV1: ContractConstructorSpecV1;
        ContractConstructorSpecV2: ContractConstructorSpecV2;
        ContractConstructorSpecV3: ContractConstructorSpecV3;
        ContractContractSpecV0: ContractContractSpecV0;
        ContractContractSpecV1: ContractContractSpecV1;
        ContractContractSpecV2: ContractContractSpecV2;
        ContractContractSpecV3: ContractContractSpecV3;
        ContractCryptoHasher: ContractCryptoHasher;
        ContractDiscriminant: ContractDiscriminant;
        ContractDisplayName: ContractDisplayName;
        ContractEventParamSpecLatest: ContractEventParamSpecLatest;
        ContractEventParamSpecV0: ContractEventParamSpecV0;
        ContractEventParamSpecV2: ContractEventParamSpecV2;
        ContractEventSpecLatest: ContractEventSpecLatest;
        ContractEventSpecV0: ContractEventSpecV0;
        ContractEventSpecV1: ContractEventSpecV1;
        ContractEventSpecV2: ContractEventSpecV2;
        ContractExecResult: ContractExecResult;
        ContractExecResultErr: ContractExecResultErr;
        ContractExecResultErrModule: ContractExecResultErrModule;
        ContractExecResultOk: ContractExecResultOk;
        ContractExecResultResult: ContractExecResultResult;
        ContractExecResultSuccessTo255: ContractExecResultSuccessTo255;
        ContractExecResultSuccessTo260: ContractExecResultSuccessTo260;
        ContractExecResultTo255: ContractExecResultTo255;
        ContractExecResultTo260: ContractExecResultTo260;
        ContractExecResultTo267: ContractExecResultTo267;
        ContractInfo: ContractInfo;
        ContractInstantiateResult: ContractInstantiateResult;
        ContractInstantiateResultTo267: ContractInstantiateResultTo267;
        ContractInstantiateResultTo299: ContractInstantiateResultTo299;
        ContractLayoutArray: ContractLayoutArray;
        ContractLayoutCell: ContractLayoutCell;
        ContractLayoutEnum: ContractLayoutEnum;
        ContractLayoutHash: ContractLayoutHash;
        ContractLayoutHashingStrategy: ContractLayoutHashingStrategy;
        ContractLayoutKey: ContractLayoutKey;
        ContractLayoutStruct: ContractLayoutStruct;
        ContractLayoutStructField: ContractLayoutStructField;
        ContractMessageParamSpecLatest: ContractMessageParamSpecLatest;
        ContractMessageParamSpecV0: ContractMessageParamSpecV0;
        ContractMessageParamSpecV2: ContractMessageParamSpecV2;
        ContractMessageSpecLatest: ContractMessageSpecLatest;
        ContractMessageSpecV0: ContractMessageSpecV0;
        ContractMessageSpecV1: ContractMessageSpecV1;
        ContractMessageSpecV2: ContractMessageSpecV2;
        ContractMetadata: ContractMetadata;
        ContractMetadataLatest: ContractMetadataLatest;
        ContractMetadataV0: ContractMetadataV0;
        ContractMetadataV1: ContractMetadataV1;
        ContractMetadataV2: ContractMetadataV2;
        ContractMetadataV3: ContractMetadataV3;
        ContractProject: ContractProject;
        ContractProjectContract: ContractProjectContract;
        ContractProjectInfo: ContractProjectInfo;
        ContractProjectSource: ContractProjectSource;
        ContractProjectV0: ContractProjectV0;
        ContractReturnFlags: ContractReturnFlags;
        ContractSelector: ContractSelector;
        ContractStorageKey: ContractStorageKey;
        ContractStorageLayout: ContractStorageLayout;
        ContractTypeSpec: ContractTypeSpec;
        Conviction: Conviction;
        CoreAssignment: CoreAssignment;
        CoreIndex: CoreIndex;
        CoreOccupied: CoreOccupied;
        CrateVersion: CrateVersion;
        CreatedBlock: CreatedBlock;
        Data: Data;
        DeferredOffenceOf: DeferredOffenceOf;
        DefunctVoter: DefunctVoter;
        DelayKind: DelayKind;
        DelayKindBest: DelayKindBest;
        Delegations: Delegations;
        DeletedContract: DeletedContract;
        DeliveredMessages: DeliveredMessages;
        DepositBalance: DepositBalance;
        DepositBalanceOf: DepositBalanceOf;
        DestroyWitness: DestroyWitness;
        Digest: Digest;
        DigestItem: DigestItem;
        DigestOf: DigestOf;
        DispatchClass: DispatchClass;
        DispatchError: DispatchError;
        DispatchErrorModule: DispatchErrorModule;
        DispatchErrorTo198: DispatchErrorTo198;
        DispatchFeePayment: DispatchFeePayment;
        DispatchInfo: DispatchInfo;
        DispatchInfoTo190: DispatchInfoTo190;
        DispatchInfoTo244: DispatchInfoTo244;
        DispatchOutcome: DispatchOutcome;
        DispatchResult: DispatchResult;
        DispatchResultOf: DispatchResultOf;
        DispatchResultTo198: DispatchResultTo198;
        DisputeLocation: DisputeLocation;
        DisputeResult: DisputeResult;
        DisputeState: DisputeState;
        DisputeStatement: DisputeStatement;
        DisputeStatementSet: DisputeStatementSet;
        DoubleEncodedCall: DoubleEncodedCall;
        DoubleVoteReport: DoubleVoteReport;
        DownwardMessage: DownwardMessage;
        EcdsaSignature: EcdsaSignature;
        Ed25519Signature: Ed25519Signature;
        EIP1559Transaction: EIP1559Transaction;
        EIP2930Transaction: EIP2930Transaction;
        ElectionCompute: ElectionCompute;
        ElectionPhase: ElectionPhase;
        ElectionResult: ElectionResult;
        ElectionScore: ElectionScore;
        ElectionSize: ElectionSize;
        ElectionStatus: ElectionStatus;
        EncodedFinalityProofs: EncodedFinalityProofs;
        EncodedJustification: EncodedJustification;
        EpochAuthorship: EpochAuthorship;
        Era: Era;
        EraIndex: EraIndex;
        EraPoints: EraPoints;
        EraRewardPoints: EraRewardPoints;
        EraRewards: EraRewards;
        ErrorMetadataLatest: ErrorMetadataLatest;
        ErrorMetadataV10: ErrorMetadataV10;
        ErrorMetadataV11: ErrorMetadataV11;
        ErrorMetadataV12: ErrorMetadataV12;
        ErrorMetadataV13: ErrorMetadataV13;
        ErrorMetadataV14: ErrorMetadataV14;
        ErrorMetadataV9: ErrorMetadataV9;
        EthAccessList: EthAccessList;
        EthAccessListItem: EthAccessListItem;
        EthAccount: EthAccount;
        EthAddress: EthAddress;
        EthBlock: EthBlock;
        EthBloom: EthBloom;
        EthCallRequest: EthCallRequest;
        EthereumAccountId: EthereumAccountId;
        EthereumAddress: EthereumAddress;
        EthereumLookupSource: EthereumLookupSource;
        EthereumSignature: EthereumSignature;
        EthFilter: EthFilter;
        EthFilterAddress: EthFilterAddress;
        EthFilterChanges: EthFilterChanges;
        EthFilterTopic: EthFilterTopic;
        EthFilterTopicEntry: EthFilterTopicEntry;
        EthFilterTopicInner: EthFilterTopicInner;
        EthHeader: EthHeader;
        EthLog: EthLog;
        EthReceipt: EthReceipt;
        EthRichBlock: EthRichBlock;
        EthRichHeader: EthRichHeader;
        EthStorageProof: EthStorageProof;
        EthSubKind: EthSubKind;
        EthSubParams: EthSubParams;
        EthSubResult: EthSubResult;
        EthSyncInfo: EthSyncInfo;
        EthSyncStatus: EthSyncStatus;
        EthTransaction: EthTransaction;
        EthTransactionAction: EthTransactionAction;
        EthTransactionCondition: EthTransactionCondition;
        EthTransactionRequest: EthTransactionRequest;
        EthTransactionSignature: EthTransactionSignature;
        EthTransactionStatus: EthTransactionStatus;
        EthWork: EthWork;
        Event: Event;
        EventId: EventId;
        EventIndex: EventIndex;
        EventMetadataLatest: EventMetadataLatest;
        EventMetadataV10: EventMetadataV10;
        EventMetadataV11: EventMetadataV11;
        EventMetadataV12: EventMetadataV12;
        EventMetadataV13: EventMetadataV13;
        EventMetadataV14: EventMetadataV14;
        EventMetadataV9: EventMetadataV9;
        EventRecord: EventRecord;
        EvmAccount: EvmAccount;
        EvmLog: EvmLog;
        EvmVicinity: EvmVicinity;
        ExecReturnValue: ExecReturnValue;
        ExitError: ExitError;
        ExitFatal: ExitFatal;
        ExitReason: ExitReason;
        ExitRevert: ExitRevert;
        ExitSucceed: ExitSucceed;
        ExplicitDisputeStatement: ExplicitDisputeStatement;
        Exposure: Exposure;
        ExtendedBalance: ExtendedBalance;
        Extrinsic: Extrinsic;
        ExtrinsicEra: ExtrinsicEra;
        ExtrinsicMetadataLatest: ExtrinsicMetadataLatest;
        ExtrinsicMetadataV11: ExtrinsicMetadataV11;
        ExtrinsicMetadataV12: ExtrinsicMetadataV12;
        ExtrinsicMetadataV13: ExtrinsicMetadataV13;
        ExtrinsicMetadataV14: ExtrinsicMetadataV14;
        ExtrinsicOrHash: ExtrinsicOrHash;
        ExtrinsicPayload: ExtrinsicPayload;
        ExtrinsicPayloadUnknown: ExtrinsicPayloadUnknown;
        ExtrinsicPayloadV4: ExtrinsicPayloadV4;
        ExtrinsicSignature: ExtrinsicSignature;
        ExtrinsicSignatureV4: ExtrinsicSignatureV4;
        ExtrinsicStatus: ExtrinsicStatus;
        ExtrinsicsWeight: ExtrinsicsWeight;
        ExtrinsicUnknown: ExtrinsicUnknown;
        ExtrinsicV4: ExtrinsicV4;
        FeeDetails: FeeDetails;
        Fixed128: Fixed128;
        Fixed64: Fixed64;
        FixedI128: FixedI128;
        FixedI64: FixedI64;
        FixedU128: FixedU128;
        FixedU64: FixedU64;
        Forcing: Forcing;
        ForkTreePendingChange: ForkTreePendingChange;
        ForkTreePendingChangeNode: ForkTreePendingChangeNode;
        FullIdentification: FullIdentification;
        FunctionArgumentMetadataLatest: FunctionArgumentMetadataLatest;
        FunctionArgumentMetadataV10: FunctionArgumentMetadataV10;
        FunctionArgumentMetadataV11: FunctionArgumentMetadataV11;
        FunctionArgumentMetadataV12: FunctionArgumentMetadataV12;
        FunctionArgumentMetadataV13: FunctionArgumentMetadataV13;
        FunctionArgumentMetadataV14: FunctionArgumentMetadataV14;
        FunctionArgumentMetadataV9: FunctionArgumentMetadataV9;
        FunctionMetadataLatest: FunctionMetadataLatest;
        FunctionMetadataV10: FunctionMetadataV10;
        FunctionMetadataV11: FunctionMetadataV11;
        FunctionMetadataV12: FunctionMetadataV12;
        FunctionMetadataV13: FunctionMetadataV13;
        FunctionMetadataV14: FunctionMetadataV14;
        FunctionMetadataV9: FunctionMetadataV9;
        FundIndex: FundIndex;
        FundInfo: FundInfo;
        Fungibility: Fungibility;
        FungibilityV0: FungibilityV0;
        FungibilityV1: FungibilityV1;
        FungibilityV2: FungibilityV2;
        Gas: Gas;
        GiltBid: GiltBid;
        GlobalValidationData: GlobalValidationData;
        GlobalValidationSchedule: GlobalValidationSchedule;
        GrandpaCommit: GrandpaCommit;
        GrandpaEquivocation: GrandpaEquivocation;
        GrandpaEquivocationProof: GrandpaEquivocationProof;
        GrandpaEquivocationValue: GrandpaEquivocationValue;
        GrandpaJustification: GrandpaJustification;
        GrandpaPrecommit: GrandpaPrecommit;
        GrandpaPrevote: GrandpaPrevote;
        GrandpaSignedPrecommit: GrandpaSignedPrecommit;
        GroupIndex: GroupIndex;
        H1024: H1024;
        H128: H128;
        H160: H160;
        H2048: H2048;
        H256: H256;
        H32: H32;
        H512: H512;
        H64: H64;
        Hash: Hash;
        HeadData: HeadData;
        Header: Header;
        HeaderPartial: HeaderPartial;
        Health: Health;
        Heartbeat: Heartbeat;
        HeartbeatTo244: HeartbeatTo244;
        HostConfiguration: HostConfiguration;
        HostFnWeights: HostFnWeights;
        HostFnWeightsTo264: HostFnWeightsTo264;
        HrmpChannel: HrmpChannel;
        HrmpChannelId: HrmpChannelId;
        HrmpOpenChannelRequest: HrmpOpenChannelRequest;
        i128: i128;
        I128: I128;
        i16: i16;
        I16: I16;
        i256: i256;
        I256: I256;
        i32: i32;
        I32: I32;
        I32F32: I32F32;
        i64: i64;
        I64: I64;
        i8: i8;
        I8: I8;
        IdentificationTuple: IdentificationTuple;
        IdentityFields: IdentityFields;
        IdentityInfo: IdentityInfo;
        IdentityInfoAdditional: IdentityInfoAdditional;
        IdentityInfoTo198: IdentityInfoTo198;
        IdentityJudgement: IdentityJudgement;
        ImmortalEra: ImmortalEra;
        ImportedAux: ImportedAux;
        InboundDownwardMessage: InboundDownwardMessage;
        InboundHrmpMessage: InboundHrmpMessage;
        InboundHrmpMessages: InboundHrmpMessages;
        InboundLaneData: InboundLaneData;
        InboundRelayer: InboundRelayer;
        InboundStatus: InboundStatus;
        IncludedBlocks: IncludedBlocks;
        InclusionFee: InclusionFee;
        IncomingParachain: IncomingParachain;
        IncomingParachainDeploy: IncomingParachainDeploy;
        IncomingParachainFixed: IncomingParachainFixed;
        Index: Index;
        IndicesLookupSource: IndicesLookupSource;
        IndividualExposure: IndividualExposure;
        InitializationData: InitializationData;
        InstanceDetails: InstanceDetails;
        InstanceId: InstanceId;
        InstanceMetadata: InstanceMetadata;
        InstantiateRequest: InstantiateRequest;
        InstantiateRequestV1: InstantiateRequestV1;
        InstantiateRequestV2: InstantiateRequestV2;
        InstantiateReturnValue: InstantiateReturnValue;
        InstantiateReturnValueOk: InstantiateReturnValueOk;
        InstantiateReturnValueTo267: InstantiateReturnValueTo267;
        InstructionV2: InstructionV2;
        InstructionWeights: InstructionWeights;
        InteriorMultiLocation: InteriorMultiLocation;
        InvalidDisputeStatementKind: InvalidDisputeStatementKind;
        InvalidTransaction: InvalidTransaction;
        Json: Json;
        Junction: Junction;
        Junctions: Junctions;
        JunctionsV1: JunctionsV1;
        JunctionsV2: JunctionsV2;
        JunctionV0: JunctionV0;
        JunctionV1: JunctionV1;
        JunctionV2: JunctionV2;
        Justification: Justification;
        JustificationNotification: JustificationNotification;
        Justifications: Justifications;
        Key: Key;
        KeyOwnerProof: KeyOwnerProof;
        Keys: Keys;
        KeyType: KeyType;
        KeyTypeId: KeyTypeId;
        KeyValue: KeyValue;
        KeyValueOption: KeyValueOption;
        Kind: Kind;
        LaneId: LaneId;
        LastContribution: LastContribution;
        LastRuntimeUpgradeInfo: LastRuntimeUpgradeInfo;
        LeasePeriod: LeasePeriod;
        LeasePeriodOf: LeasePeriodOf;
        LegacyTransaction: LegacyTransaction;
        Limits: Limits;
        LimitsTo264: LimitsTo264;
        LocalValidationData: LocalValidationData;
        LockIdentifier: LockIdentifier;
        LookupSource: LookupSource;
        LookupTarget: LookupTarget;
        LotteryConfig: LotteryConfig;
        MaybeRandomness: MaybeRandomness;
        MaybeVrf: MaybeVrf;
        MemberCount: MemberCount;
        MembershipProof: MembershipProof;
        MessageData: MessageData;
        MessageId: MessageId;
        MessageIngestionType: MessageIngestionType;
        MessageKey: MessageKey;
        MessageNonce: MessageNonce;
        MessageQueueChain: MessageQueueChain;
        MessagesDeliveryProofOf: MessagesDeliveryProofOf;
        MessagesProofOf: MessagesProofOf;
        MessagingStateSnapshot: MessagingStateSnapshot;
        MessagingStateSnapshotEgressEntry: MessagingStateSnapshotEgressEntry;
        MetadataAll: MetadataAll;
        MetadataLatest: MetadataLatest;
        MetadataV10: MetadataV10;
        MetadataV11: MetadataV11;
        MetadataV12: MetadataV12;
        MetadataV13: MetadataV13;
        MetadataV14: MetadataV14;
        MetadataV9: MetadataV9;
        MigrationStatusResult: MigrationStatusResult;
        MmrLeafProof: MmrLeafProof;
        MmrRootHash: MmrRootHash;
        ModuleConstantMetadataV10: ModuleConstantMetadataV10;
        ModuleConstantMetadataV11: ModuleConstantMetadataV11;
        ModuleConstantMetadataV12: ModuleConstantMetadataV12;
        ModuleConstantMetadataV13: ModuleConstantMetadataV13;
        ModuleConstantMetadataV9: ModuleConstantMetadataV9;
        ModuleId: ModuleId;
        ModuleMetadataV10: ModuleMetadataV10;
        ModuleMetadataV11: ModuleMetadataV11;
        ModuleMetadataV12: ModuleMetadataV12;
        ModuleMetadataV13: ModuleMetadataV13;
        ModuleMetadataV9: ModuleMetadataV9;
        Moment: Moment;
        MomentOf: MomentOf;
        MoreAttestations: MoreAttestations;
        MortalEra: MortalEra;
        MultiAddress: MultiAddress;
        MultiAsset: MultiAsset;
        MultiAssetFilter: MultiAssetFilter;
        MultiAssetFilterV1: MultiAssetFilterV1;
        MultiAssetFilterV2: MultiAssetFilterV2;
        MultiAssets: MultiAssets;
        MultiAssetsV1: MultiAssetsV1;
        MultiAssetsV2: MultiAssetsV2;
        MultiAssetV0: MultiAssetV0;
        MultiAssetV1: MultiAssetV1;
        MultiAssetV2: MultiAssetV2;
        MultiDisputeStatementSet: MultiDisputeStatementSet;
        MultiLocation: MultiLocation;
        MultiLocationV0: MultiLocationV0;
        MultiLocationV1: MultiLocationV1;
        MultiLocationV2: MultiLocationV2;
        Multiplier: Multiplier;
        Multisig: Multisig;
        MultiSignature: MultiSignature;
        MultiSigner: MultiSigner;
        NetworkId: NetworkId;
        NetworkState: NetworkState;
        NetworkStatePeerset: NetworkStatePeerset;
        NetworkStatePeersetInfo: NetworkStatePeersetInfo;
        NewBidder: NewBidder;
        NextAuthority: NextAuthority;
        NextConfigDescriptor: NextConfigDescriptor;
        NextConfigDescriptorV1: NextConfigDescriptorV1;
        NodeRole: NodeRole;
        Nominations: Nominations;
        NominatorIndex: NominatorIndex;
        NominatorIndexCompact: NominatorIndexCompact;
        NotConnectedPeer: NotConnectedPeer;
        Null: Null;
        OffchainAccuracy: OffchainAccuracy;
        OffchainAccuracyCompact: OffchainAccuracyCompact;
        OffenceDetails: OffenceDetails;
        Offender: Offender;
        OpaqueCall: OpaqueCall;
        OpaqueMultiaddr: OpaqueMultiaddr;
        OpaqueNetworkState: OpaqueNetworkState;
        OpaquePeerId: OpaquePeerId;
        OpaqueTimeSlot: OpaqueTimeSlot;
        OpenTip: OpenTip;
        OpenTipFinderTo225: OpenTipFinderTo225;
        OpenTipTip: OpenTipTip;
        OpenTipTo225: OpenTipTo225;
        OperatingMode: OperatingMode;
        Origin: Origin;
        OriginCaller: OriginCaller;
        OriginKindV0: OriginKindV0;
        OriginKindV1: OriginKindV1;
        OriginKindV2: OriginKindV2;
        OutboundHrmpMessage: OutboundHrmpMessage;
        OutboundLaneData: OutboundLaneData;
        OutboundMessageFee: OutboundMessageFee;
        OutboundPayload: OutboundPayload;
        OutboundStatus: OutboundStatus;
        Outcome: Outcome;
        OverweightIndex: OverweightIndex;
        Owner: Owner;
        PageCounter: PageCounter;
        PageIndexData: PageIndexData;
        PalletCallMetadataLatest: PalletCallMetadataLatest;
        PalletCallMetadataV14: PalletCallMetadataV14;
        PalletConstantMetadataLatest: PalletConstantMetadataLatest;
        PalletConstantMetadataV14: PalletConstantMetadataV14;
        PalletErrorMetadataLatest: PalletErrorMetadataLatest;
        PalletErrorMetadataV14: PalletErrorMetadataV14;
        PalletEventMetadataLatest: PalletEventMetadataLatest;
        PalletEventMetadataV14: PalletEventMetadataV14;
        PalletId: PalletId;
        PalletMetadataLatest: PalletMetadataLatest;
        PalletMetadataV14: PalletMetadataV14;
        PalletsOrigin: PalletsOrigin;
        PalletStorageMetadataLatest: PalletStorageMetadataLatest;
        PalletStorageMetadataV14: PalletStorageMetadataV14;
        PalletVersion: PalletVersion;
        ParachainDispatchOrigin: ParachainDispatchOrigin;
        ParachainInherentData: ParachainInherentData;
        ParachainProposal: ParachainProposal;
        ParachainsInherentData: ParachainsInherentData;
        ParaGenesisArgs: ParaGenesisArgs;
        ParaId: ParaId;
        ParaInfo: ParaInfo;
        ParaLifecycle: ParaLifecycle;
        Parameter: Parameter;
        ParaPastCodeMeta: ParaPastCodeMeta;
        ParaScheduling: ParaScheduling;
        ParathreadClaim: ParathreadClaim;
        ParathreadClaimQueue: ParathreadClaimQueue;
        ParathreadEntry: ParathreadEntry;
        ParaValidatorIndex: ParaValidatorIndex;
        Pays: Pays;
        Peer: Peer;
        PeerEndpoint: PeerEndpoint;
        PeerEndpointAddr: PeerEndpointAddr;
        PeerInfo: PeerInfo;
        PeerPing: PeerPing;
        PendingChange: PendingChange;
        PendingPause: PendingPause;
        PendingResume: PendingResume;
        Perbill: Perbill;
        Percent: Percent;
        PerDispatchClassU32: PerDispatchClassU32;
        PerDispatchClassWeight: PerDispatchClassWeight;
        PerDispatchClassWeightsPerClass: PerDispatchClassWeightsPerClass;
        Period: Period;
        Permill: Permill;
        PermissionLatest: PermissionLatest;
        PermissionsV1: PermissionsV1;
        PermissionVersions: PermissionVersions;
        Perquintill: Perquintill;
        PersistedValidationData: PersistedValidationData;
        PerU16: PerU16;
        Phantom: Phantom;
        PhantomData: PhantomData;
        Phase: Phase;
        PhragmenScore: PhragmenScore;
        Points: Points;
        PortableType: PortableType;
        PortableTypeV14: PortableTypeV14;
        Precommits: Precommits;
        PrefabWasmModule: PrefabWasmModule;
        PrefixedStorageKey: PrefixedStorageKey;
        PreimageStatus: PreimageStatus;
        PreimageStatusAvailable: PreimageStatusAvailable;
        PreRuntime: PreRuntime;
        Prevotes: Prevotes;
        Priority: Priority;
        PriorLock: PriorLock;
        PropIndex: PropIndex;
        Proposal: Proposal;
        ProposalIndex: ProposalIndex;
        ProxyAnnouncement: ProxyAnnouncement;
        ProxyDefinition: ProxyDefinition;
        ProxyState: ProxyState;
        ProxyType: ProxyType;
        QueryId: QueryId;
        QueryStatus: QueryStatus;
        QueueConfigData: QueueConfigData;
        QueuedParathread: QueuedParathread;
        Randomness: Randomness;
        Raw: Raw;
        RawAuraPreDigest: RawAuraPreDigest;
        RawBabePreDigest: RawBabePreDigest;
        RawBabePreDigestCompat: RawBabePreDigestCompat;
        RawBabePreDigestPrimary: RawBabePreDigestPrimary;
        RawBabePreDigestPrimaryTo159: RawBabePreDigestPrimaryTo159;
        RawBabePreDigestSecondaryPlain: RawBabePreDigestSecondaryPlain;
        RawBabePreDigestSecondaryTo159: RawBabePreDigestSecondaryTo159;
        RawBabePreDigestSecondaryVRF: RawBabePreDigestSecondaryVRF;
        RawBabePreDigestTo159: RawBabePreDigestTo159;
        RawOrigin: RawOrigin;
        RawSolution: RawSolution;
        RawSolutionTo265: RawSolutionTo265;
        RawSolutionWith16: RawSolutionWith16;
        RawSolutionWith24: RawSolutionWith24;
        RawVRFOutput: RawVRFOutput;
        ReadProof: ReadProof;
        ReadySolution: ReadySolution;
        Reasons: Reasons;
        RecoveryConfig: RecoveryConfig;
        RefCount: RefCount;
        RefCountTo259: RefCountTo259;
        ReferendumIndex: ReferendumIndex;
        ReferendumInfo: ReferendumInfo;
        ReferendumInfoFinished: ReferendumInfoFinished;
        ReferendumInfoTo239: ReferendumInfoTo239;
        ReferendumStatus: ReferendumStatus;
        RegisteredParachainInfo: RegisteredParachainInfo;
        RegistrarIndex: RegistrarIndex;
        RegistrarInfo: RegistrarInfo;
        Registration: Registration;
        RegistrationJudgement: RegistrationJudgement;
        RegistrationTo198: RegistrationTo198;
        RelayBlockNumber: RelayBlockNumber;
        RelayChainBlockNumber: RelayChainBlockNumber;
        RelayChainHash: RelayChainHash;
        RelayerId: RelayerId;
        RelayHash: RelayHash;
        Releases: Releases;
        Remark: Remark;
        Renouncing: Renouncing;
        RentProjection: RentProjection;
        ReplacementTimes: ReplacementTimes;
        ReportedRoundStates: ReportedRoundStates;
        Reporter: Reporter;
        ReportIdOf: ReportIdOf;
        ReserveData: ReserveData;
        ReserveIdentifier: ReserveIdentifier;
        Response: Response;
        ResponseV0: ResponseV0;
        ResponseV1: ResponseV1;
        ResponseV2: ResponseV2;
        ResponseV2Error: ResponseV2Error;
        ResponseV2Result: ResponseV2Result;
        Retriable: Retriable;
        RewardDestination: RewardDestination;
        RewardPoint: RewardPoint;
        RoundSnapshot: RoundSnapshot;
        RoundState: RoundState;
        RPCAmountsResult: RPCAmountsResult;
        RpcMethods: RpcMethods;
        RpcResult: RpcResult;
        RpcRewardsResult: RpcRewardsResult;
        RuntimeDbWeight: RuntimeDbWeight;
        RuntimeDispatchInfo: RuntimeDispatchInfo;
        RuntimeVersion: RuntimeVersion;
        RuntimeVersionApi: RuntimeVersionApi;
        RuntimeVersionPartial: RuntimeVersionPartial;
        Schedule: Schedule;
        Scheduled: Scheduled;
        ScheduledTo254: ScheduledTo254;
        SchedulePeriod: SchedulePeriod;
        SchedulePriority: SchedulePriority;
        ScheduleTo212: ScheduleTo212;
        ScheduleTo258: ScheduleTo258;
        ScheduleTo264: ScheduleTo264;
        Scheduling: Scheduling;
        Seal: Seal;
        SealV0: SealV0;
        SeatHolder: SeatHolder;
        SeedOf: SeedOf;
        ServiceQuality: ServiceQuality;
        SessionIndex: SessionIndex;
        SessionInfo: SessionInfo;
        SessionInfoValidatorGroup: SessionInfoValidatorGroup;
        SessionKeys1: SessionKeys1;
        SessionKeys10: SessionKeys10;
        SessionKeys10B: SessionKeys10B;
        SessionKeys2: SessionKeys2;
        SessionKeys3: SessionKeys3;
        SessionKeys4: SessionKeys4;
        SessionKeys5: SessionKeys5;
        SessionKeys6: SessionKeys6;
        SessionKeys6B: SessionKeys6B;
        SessionKeys7: SessionKeys7;
        SessionKeys7B: SessionKeys7B;
        SessionKeys8: SessionKeys8;
        SessionKeys8B: SessionKeys8B;
        SessionKeys9: SessionKeys9;
        SessionKeys9B: SessionKeys9B;
        SetId: SetId;
        SetIndex: SetIndex;
        ShufflingSeed: ShufflingSeed;
        Si0Field: Si0Field;
        Si0LookupTypeId: Si0LookupTypeId;
        Si0Path: Si0Path;
        Si0Type: Si0Type;
        Si0TypeDef: Si0TypeDef;
        Si0TypeDefArray: Si0TypeDefArray;
        Si0TypeDefBitSequence: Si0TypeDefBitSequence;
        Si0TypeDefCompact: Si0TypeDefCompact;
        Si0TypeDefComposite: Si0TypeDefComposite;
        Si0TypeDefPhantom: Si0TypeDefPhantom;
        Si0TypeDefPrimitive: Si0TypeDefPrimitive;
        Si0TypeDefSequence: Si0TypeDefSequence;
        Si0TypeDefTuple: Si0TypeDefTuple;
        Si0TypeDefVariant: Si0TypeDefVariant;
        Si0TypeParameter: Si0TypeParameter;
        Si0Variant: Si0Variant;
        Si1Field: Si1Field;
        Si1LookupTypeId: Si1LookupTypeId;
        Si1Path: Si1Path;
        Si1Type: Si1Type;
        Si1TypeDef: Si1TypeDef;
        Si1TypeDefArray: Si1TypeDefArray;
        Si1TypeDefBitSequence: Si1TypeDefBitSequence;
        Si1TypeDefCompact: Si1TypeDefCompact;
        Si1TypeDefComposite: Si1TypeDefComposite;
        Si1TypeDefPrimitive: Si1TypeDefPrimitive;
        Si1TypeDefSequence: Si1TypeDefSequence;
        Si1TypeDefTuple: Si1TypeDefTuple;
        Si1TypeDefVariant: Si1TypeDefVariant;
        Si1TypeParameter: Si1TypeParameter;
        Si1Variant: Si1Variant;
        SiField: SiField;
        Signature: Signature;
        SignedAvailabilityBitfield: SignedAvailabilityBitfield;
        SignedAvailabilityBitfields: SignedAvailabilityBitfields;
        SignedBlock: SignedBlock;
        SignedBlockWithJustification: SignedBlockWithJustification;
        SignedBlockWithJustifications: SignedBlockWithJustifications;
        SignedExtensionMetadataLatest: SignedExtensionMetadataLatest;
        SignedExtensionMetadataV14: SignedExtensionMetadataV14;
        SignedSubmission: SignedSubmission;
        SignedSubmissionOf: SignedSubmissionOf;
        SignedSubmissionTo276: SignedSubmissionTo276;
        SignerPayload: SignerPayload;
        SigningContext: SigningContext;
        SiLookupTypeId: SiLookupTypeId;
        SiPath: SiPath;
        SiType: SiType;
        SiTypeDef: SiTypeDef;
        SiTypeDefArray: SiTypeDefArray;
        SiTypeDefBitSequence: SiTypeDefBitSequence;
        SiTypeDefCompact: SiTypeDefCompact;
        SiTypeDefComposite: SiTypeDefComposite;
        SiTypeDefPrimitive: SiTypeDefPrimitive;
        SiTypeDefSequence: SiTypeDefSequence;
        SiTypeDefTuple: SiTypeDefTuple;
        SiTypeDefVariant: SiTypeDefVariant;
        SiTypeParameter: SiTypeParameter;
        SiVariant: SiVariant;
        SlashingSpans: SlashingSpans;
        SlashingSpansTo204: SlashingSpansTo204;
        SlashJournalEntry: SlashJournalEntry;
        Slot: Slot;
        SlotNumber: SlotNumber;
        SlotRange: SlotRange;
        SlotRange10: SlotRange10;
        SocietyJudgement: SocietyJudgement;
        SocietyVote: SocietyVote;
        SolutionOrSnapshotSize: SolutionOrSnapshotSize;
        SolutionSupport: SolutionSupport;
        SolutionSupports: SolutionSupports;
        SpanIndex: SpanIndex;
        SpanRecord: SpanRecord;
        SpecVersion: SpecVersion;
        Sr25519Signature: Sr25519Signature;
        StakingLedger: StakingLedger;
        StakingLedgerTo223: StakingLedgerTo223;
        StakingLedgerTo240: StakingLedgerTo240;
        Statement: Statement;
        StatementKind: StatementKind;
        StorageChangeSet: StorageChangeSet;
        StorageData: StorageData;
        StorageDeposit: StorageDeposit;
        StorageEntryMetadataLatest: StorageEntryMetadataLatest;
        StorageEntryMetadataV10: StorageEntryMetadataV10;
        StorageEntryMetadataV11: StorageEntryMetadataV11;
        StorageEntryMetadataV12: StorageEntryMetadataV12;
        StorageEntryMetadataV13: StorageEntryMetadataV13;
        StorageEntryMetadataV14: StorageEntryMetadataV14;
        StorageEntryMetadataV9: StorageEntryMetadataV9;
        StorageEntryModifierLatest: StorageEntryModifierLatest;
        StorageEntryModifierV10: StorageEntryModifierV10;
        StorageEntryModifierV11: StorageEntryModifierV11;
        StorageEntryModifierV12: StorageEntryModifierV12;
        StorageEntryModifierV13: StorageEntryModifierV13;
        StorageEntryModifierV14: StorageEntryModifierV14;
        StorageEntryModifierV9: StorageEntryModifierV9;
        StorageEntryTypeLatest: StorageEntryTypeLatest;
        StorageEntryTypeV10: StorageEntryTypeV10;
        StorageEntryTypeV11: StorageEntryTypeV11;
        StorageEntryTypeV12: StorageEntryTypeV12;
        StorageEntryTypeV13: StorageEntryTypeV13;
        StorageEntryTypeV14: StorageEntryTypeV14;
        StorageEntryTypeV9: StorageEntryTypeV9;
        StorageHasher: StorageHasher;
        StorageHasherV10: StorageHasherV10;
        StorageHasherV11: StorageHasherV11;
        StorageHasherV12: StorageHasherV12;
        StorageHasherV13: StorageHasherV13;
        StorageHasherV14: StorageHasherV14;
        StorageHasherV9: StorageHasherV9;
        StorageKey: StorageKey;
        StorageKind: StorageKind;
        StorageMetadataV10: StorageMetadataV10;
        StorageMetadataV11: StorageMetadataV11;
        StorageMetadataV12: StorageMetadataV12;
        StorageMetadataV13: StorageMetadataV13;
        StorageMetadataV9: StorageMetadataV9;
        StorageProof: StorageProof;
        StoredPendingChange: StoredPendingChange;
        StoredState: StoredState;
        StrikeCount: StrikeCount;
        SubId: SubId;
        SubmissionIndicesOf: SubmissionIndicesOf;
        Supports: Supports;
        SyncState: SyncState;
        SystemInherentData: SystemInherentData;
        SystemOrigin: SystemOrigin;
        Tally: Tally;
        TaskAddress: TaskAddress;
        TAssetBalance: TAssetBalance;
        TAssetDepositBalance: TAssetDepositBalance;
        Text: Text;
        Timepoint: Timepoint;
        TokenError: TokenError;
        TokenId: TokenId;
        TombstoneContractInfo: TombstoneContractInfo;
        TraceBlockResponse: TraceBlockResponse;
        TraceError: TraceError;
        TransactionInfo: TransactionInfo;
        TransactionPriority: TransactionPriority;
        TransactionStorageProof: TransactionStorageProof;
        TransactionV0: TransactionV0;
        TransactionV1: TransactionV1;
        TransactionV2: TransactionV2;
        TransactionValidityError: TransactionValidityError;
        TransientValidationData: TransientValidationData;
        TreasuryProposal: TreasuryProposal;
        TrieId: TrieId;
        TrieIndex: TrieIndex;
        Type: Type;
        u128: u128;
        U128: U128;
        u16: u16;
        U16: U16;
        u256: u256;
        U256: U256;
        u32: u32;
        U32: U32;
        U32F32: U32F32;
        u64: u64;
        U64: U64;
        u8: u8;
        U8: U8;
        UnappliedSlash: UnappliedSlash;
        UnappliedSlashOther: UnappliedSlashOther;
        UncleEntryItem: UncleEntryItem;
        UnknownTransaction: UnknownTransaction;
        UnlockChunk: UnlockChunk;
        UnrewardedRelayer: UnrewardedRelayer;
        UnrewardedRelayersState: UnrewardedRelayersState;
        UpgradeGoAhead: UpgradeGoAhead;
        UpgradeRestriction: UpgradeRestriction;
        UpwardMessage: UpwardMessage;
        usize: usize;
        USize: USize;
        ValidationCode: ValidationCode;
        ValidationCodeHash: ValidationCodeHash;
        ValidationData: ValidationData;
        ValidationDataType: ValidationDataType;
        ValidationFunctionParams: ValidationFunctionParams;
        ValidatorCount: ValidatorCount;
        ValidatorId: ValidatorId;
        ValidatorIdOf: ValidatorIdOf;
        ValidatorIndex: ValidatorIndex;
        ValidatorIndexCompact: ValidatorIndexCompact;
        ValidatorPrefs: ValidatorPrefs;
        ValidatorPrefsTo145: ValidatorPrefsTo145;
        ValidatorPrefsTo196: ValidatorPrefsTo196;
        ValidatorPrefsWithBlocked: ValidatorPrefsWithBlocked;
        ValidatorPrefsWithCommission: ValidatorPrefsWithCommission;
        ValidatorSetId: ValidatorSetId;
        ValidatorSignature: ValidatorSignature;
        ValidDisputeStatementKind: ValidDisputeStatementKind;
        ValidityAttestation: ValidityAttestation;
        VecInboundHrmpMessage: VecInboundHrmpMessage;
        VersionedMultiAsset: VersionedMultiAsset;
        VersionedMultiAssets: VersionedMultiAssets;
        VersionedMultiLocation: VersionedMultiLocation;
        VersionedResponse: VersionedResponse;
        VersionedXcm: VersionedXcm;
        VersionMigrationStage: VersionMigrationStage;
        VestingInfo: VestingInfo;
        VestingSchedule: VestingSchedule;
        Vote: Vote;
        VoteIndex: VoteIndex;
        Voter: Voter;
        VoterInfo: VoterInfo;
        Votes: Votes;
        VotesTo230: VotesTo230;
        VoteThreshold: VoteThreshold;
        VoteWeight: VoteWeight;
        Voting: Voting;
        VotingDelegating: VotingDelegating;
        VotingDirect: VotingDirect;
        VotingDirectVote: VotingDirectVote;
        VouchingStatus: VouchingStatus;
        VrfData: VrfData;
        VrfOutput: VrfOutput;
        VrfProof: VrfProof;
        Weight: Weight;
        WeightLimitV2: WeightLimitV2;
        WeightMultiplier: WeightMultiplier;
        WeightPerClass: WeightPerClass;
        WeightToFeeCoefficient: WeightToFeeCoefficient;
        WildFungibility: WildFungibility;
        WildFungibilityV0: WildFungibilityV0;
        WildFungibilityV1: WildFungibilityV1;
        WildFungibilityV2: WildFungibilityV2;
        WildMultiAsset: WildMultiAsset;
        WildMultiAssetV1: WildMultiAssetV1;
        WildMultiAssetV2: WildMultiAssetV2;
        WinnersData: WinnersData;
        WinnersData10: WinnersData10;
        WinnersDataTuple: WinnersDataTuple;
        WinnersDataTuple10: WinnersDataTuple10;
        WinningData: WinningData;
        WinningData10: WinningData10;
        WinningDataEntry: WinningDataEntry;
        WithdrawReasons: WithdrawReasons;
        Xcm: Xcm;
        XcmAssetId: XcmAssetId;
        XcmError: XcmError;
        XcmErrorV0: XcmErrorV0;
        XcmErrorV1: XcmErrorV1;
        XcmErrorV2: XcmErrorV2;
        XcmOrder: XcmOrder;
        XcmOrderV0: XcmOrderV0;
        XcmOrderV1: XcmOrderV1;
        XcmOrderV2: XcmOrderV2;
        XcmOrigin: XcmOrigin;
        XcmOriginKind: XcmOriginKind;
        XcmpMessageFormat: XcmpMessageFormat;
        XcmV0: XcmV0;
        XcmV1: XcmV1;
        XcmV2: XcmV2;
        XcmVersion: XcmVersion;
    }
}

declare const mTypes: RegistryTypes;
declare const mRpc: Record<string, Record<string, DefinitionRpc | DefinitionRpcSub>>;
declare const typesBundleForPolkadotApps: OverrideBundleDefinition;
declare const defaultOptions: ApiOptions;
declare const options: ({ types, rpc, ...otherOptions }?: ApiOptions) => ApiOptions;

export { defaultOptions, mRpc, mTypes, options, typesBundleForPolkadotApps };
