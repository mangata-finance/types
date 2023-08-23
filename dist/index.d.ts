import { ApiTypes, AugmentedConst, AugmentedError, AugmentedEvent, AugmentedQuery, QueryableStorageEntry, AugmentedSubmittable, SubmittableExtrinsic, SubmittableExtrinsicFunction, AugmentedCall, DecoratedCallBase } from '@polkadot/api-base/types';
import { u32, u8, Bytes, u128, u16, u64, Option, Result, Null, Vec, bool, U8aFixed, BTreeMap, Compact, Text, HashMap, U256, U64, f64, Json, Enum, Struct, BitVec, Bool, f32, F32, F64, i128, I128, i16, I16, i256, I256, i32, I32, i64, I64, i8, I8, isize, ISize, OptionBool, Raw, Type, U128, U16, u256, U32, U8, usize, USize, BTreeSet, Set } from '@polkadot/types-codec';
import { Codec, AnyNumber, ITuple, IMethod } from '@polkadot/types-codec/types';
import { Perbill, Percent, AccountId32, Permill, H256, Call, MultiAddress, Hash, SignedBlock, BlockNumber, Header, StorageData, AccountId, Justification, H160, H64, KeyValue, Index, SlotDuration, Block, KeyTypeId, H512, Balance, AccountId20, AccountId33, AccountIdOf, AccountIndex, Address, AssetId, BalanceOf, BlockNumberFor, BlockNumberOf, CallHash, CallHashOf, ChangesTrieConfiguration, ChangesTrieSignal, CodecHash, Consensus, ConsensusEngineId, CrateVersion, Digest, DigestItem, EncodedJustification, ExtrinsicsWeight, Fixed128, Fixed64, FixedI128, FixedI64, FixedU128, FixedU64, H1024, H128, H2048, H32, HeaderPartial, I32F32, IndicesLookupSource, Justifications, LockIdentifier, LookupSource, LookupTarget, ModuleId, Moment, MultiSigner, OpaqueCall, Origin, OriginCaller, PalletId, PalletsOrigin, PalletVersion, Pays, Perquintill, PerU16, Phantom, PhantomData, PreRuntime, Releases, RuntimeCall, RuntimeDbWeight, RuntimeEvent, Seal, SealV0, SignedBlockWithJustification, SignedBlockWithJustifications, Slot, StorageInfo, StorageProof, TransactionInfo, TransactionLongevity, TransactionPriority, TransactionStorageProof, TransactionTag, U32F32, ValidatorId, ValidatorIdOf, Weight, WeightMultiplier, WeightV0, WeightV1, WeightV2 } from '@polkadot/types/interfaces/runtime';
import { FrameSupportPalletId, FrameSystemLimitsBlockLength, FrameSystemLimitsBlockWeights, SpWeightsRuntimeDbWeight, SpVersionRuntimeVersion, SpWeightsWeightV2Weight, XcmV3MultiLocation, OrmlTraitsAssetRegistryAssetMetadata, SpRuntimeDispatchError, XcmV3TraitsOutcome, PalletIssuanceIssuanceInfo, PalletIssuanceTgeInfo, XcmV3Xcm, ParachainStakingCandidateBondRequest, ParachainStakingDelegationRequest, ParachainStakingPayoutRounds, ParachainStakingDelegatorAdded, XcmVersionedMultiAssets, XcmV3MultiassetMultiAssets, XcmVersionedMultiLocation, XcmV3TraitsError, XcmV3Response, CommonRuntimeConfigPalletProxyProxyType, FrameSupportDispatchDispatchInfo, FrameSupportTokensMiscBalanceStatus, XcmV3MultiAsset, SpRuntimeModuleError, SpConsensusAuraSr25519AppSr25519Public, PalletBootstrapBootstrapPhase, PalletCollectiveMangataVotes, PalletCrowdloanRewardsRewardInfo, CumulusPalletDmpQueueConfigData, CumulusPalletDmpQueuePageIndexData, PalletFeeLockAccountFeeLockDataInfo, PalletFeeLockFeeLockMetadataInfo, PalletIdentityRegistration, PalletIdentityRegistrarInfo, PalletMaintenanceMaintenanceStatusInfo, PalletMultipurposeLiquidityRelockStatusInfo, PalletMultipurposeLiquidityReserveStatusInfo, ParachainStakingAggregatorMetadataType, ParachainStakingCollatorSnapshot, ParachainStakingBond, ParachainStakingCollatorCandidate, ParachainStakingDelegator, ParachainStakingRoundInfo, ParachainStakingRoundCollatorRewardInfoType, CumulusPalletParachainSystemCodeUpgradeAuthorization, PolkadotPrimitivesV2AbridgedHostConfiguration, PolkadotCorePrimitivesOutboundHrmpMessage, SpTrieStorageProof, CumulusPalletParachainSystemRelayStateSnapshotMessagingStateSnapshot, PolkadotPrimitivesV2UpgradeRestriction, PolkadotPrimitivesV2PersistedValidationData, PalletXcmVersionMigrationStage, PalletXcmQueryStatus, XcmVersionedAssetId, PalletXcmRemoteLockedFungibleRecord, PalletProofOfStakePromotedPools, PalletProofOfStakeRewardInfo, PalletProxyAnnouncement, PalletProxyProxyDefinition, SpCoreCryptoKeyTypeId, MangataRococoRuntimeSessionKeys, FrameSystemAccountInfo, FrameSupportDispatchPerDispatchClassWeight, SpRuntimeDigest, FrameSystemEventRecord, FrameSystemPhase, FrameSystemLastRuntimeUpgradeInfo, OrmlTokensAccountData, OrmlTokensBalanceLock, OrmlTokensReserveData, PalletTransactionPaymentMangataReleases, PalletTreasuryProposal, PalletVestingMangataReleases, PalletVestingMangataVestingInfo, CumulusPalletXcmpQueueInboundChannelDetails, CumulusPalletXcmpQueueOutboundChannelDetails, CumulusPalletXcmpQueueQueueConfigData, MangataTypesAssetsCustomMetadata, SpRuntimeMultiSignature, PalletIdentityJudgement, PalletIdentityBitFlags, PalletIdentityIdentityInfo, XcmVersionedXcm, ParachainStakingPairedOrLiquidityToken, ParachainStakingMetadataUpdateAction, MangataTypesMultipurposeLiquidityBondKind, CumulusPrimitivesParachainInherentParachainInherentData, XcmV3WeightLimit, MangataTypesMultipurposeLiquidityActivateKind, MangataRococoRuntimeOriginCaller, XcmVersionedMultiAsset } from '@polkadot/types/lookup';
import { Data, StorageKey, Metadata } from '@polkadot/types';
import { Observable, IExtrinsic } from '@polkadot/types/types';
import { AugmentedRpc } from '@polkadot/rpc-core/types';
import { ExtrinsicOrHash, ExtrinsicStatus } from '@polkadot/types/interfaces/author';
import { EpochAuthorship, AllowedSlots, BabeAuthorityWeight, BabeBlockWeight, BabeEpochConfiguration, BabeEquivocationProof, BabeGenesisConfiguration, BabeGenesisConfigurationV1, BabeWeight, Epoch, MaybeRandomness, MaybeVrf, NextConfigDescriptor, NextConfigDescriptorV1, OpaqueKeyOwnershipProof, Randomness, RawBabePreDigest, RawBabePreDigestCompat, RawBabePreDigestPrimary, RawBabePreDigestPrimaryTo159, RawBabePreDigestSecondaryPlain, RawBabePreDigestSecondaryTo159, RawBabePreDigestSecondaryVRF, RawBabePreDigestTo159, SlotNumber, VrfData, VrfOutput, VrfProof } from '@polkadot/types/interfaces/babe';
import { BeefySignedCommitment, BeefyAuthoritySet, BeefyCommitment, BeefyEquivocationProof, BeefyId, BeefyNextAuthoritySet, BeefyPayload, BeefyPayloadId, BeefyVoteMessage, MmrRootHash, ValidatorSet, ValidatorSetId } from '@polkadot/types/interfaces/beefy';
import { BlockHash } from '@polkadot/types/interfaces/chain';
import { PrefixedStorageKey } from '@polkadot/types/interfaces/childstate';
import { AuthorityId, RawVRFOutput } from '@polkadot/types/interfaces/consensus';
import { ContractCallRequest, ContractExecResult, InstantiateRequestV1, ContractInstantiateResult, CodeUploadRequest, CodeUploadResult, AliveContractInfo, CodeHash, CodeSource, CodeUploadResultValue, ContractCallFlags, ContractExecResultOk, ContractExecResultResult, ContractExecResultSuccessTo255, ContractExecResultSuccessTo260, ContractExecResultTo255, ContractExecResultTo260, ContractExecResultTo267, ContractExecResultU64, ContractInfo, ContractInstantiateResultTo267, ContractInstantiateResultTo299, ContractInstantiateResultU64, ContractReturnFlags, ContractStorageKey, DeletedContract, ExecReturnValue, Gas, HostFnWeights, HostFnWeightsTo264, InstantiateRequest, InstantiateRequestV2, InstantiateReturnValue, InstantiateReturnValueOk, InstantiateReturnValueTo267, InstructionWeights, Limits, LimitsTo264, PrefabWasmModule, RentProjection, Schedule, ScheduleTo212, ScheduleTo258, ScheduleTo264, SeedOf, StorageDeposit, TombstoneContractInfo, TrieId } from '@polkadot/types/interfaces/contracts';
import { BlockStats } from '@polkadot/types/interfaces/dev';
import { CreatedBlock, ImportedAux } from '@polkadot/types/interfaces/engine';
import { EthCallRequest, EthFeeHistory, EthRichBlock, EthFilterChanges, EthLog, EthFilter, EthAccount, EthTransaction, EthReceipt, EthWork, EthTransactionRequest, EthSubKind, EthSubParams, EthSyncStatus, BlockV0, BlockV1, BlockV2, EIP1559Transaction, EIP2930Transaction, EthAccessList, EthAccessListItem, EthAddress, EthBlock, EthBloom, EthereumAccountId, EthereumAddress, EthereumLookupSource, EthereumSignature, EthFilterAddress, EthFilterTopic, EthFilterTopicEntry, EthFilterTopicInner, EthHeader, EthReceiptV0, EthReceiptV3, EthRichHeader, EthStorageProof, EthSubResult, EthSyncInfo, EthTransactionAction, EthTransactionCondition, EthTransactionSignature, EthTransactionStatus, LegacyTransaction, TransactionV0, TransactionV1, TransactionV2 } from '@polkadot/types/interfaces/eth';
import { Extrinsic, AnySignature, EcdsaSignature, Ed25519Signature, Era, ExtrinsicEra, ExtrinsicPayload, ExtrinsicPayloadUnknown, ExtrinsicPayloadV4, ExtrinsicSignature, ExtrinsicSignatureV4, ExtrinsicUnknown, ExtrinsicV4, ImmortalEra, MortalEra, MultiSignature, Signature, SignerPayload, Sr25519Signature } from '@polkadot/types/interfaces/extrinsics';
import { EncodedFinalityProofs, ReportedRoundStates, JustificationNotification, AuthorityIndex, AuthorityList, AuthoritySet, AuthoritySetChange, AuthoritySetChanges, AuthorityWeight, DelayKind, DelayKindBest, ForkTreePendingChange, ForkTreePendingChangeNode, GrandpaCommit, GrandpaEquivocation, GrandpaEquivocationProof, GrandpaEquivocationValue, GrandpaJustification, GrandpaPrecommit, GrandpaPrevote, GrandpaSignedPrecommit, KeyOwnerProof, NextAuthority, PendingChange, PendingPause, PendingResume, Precommits, Prevotes, RoundState, SetId, StoredPendingChange, StoredState } from '@polkadot/types/interfaces/grandpa';
import { MmrLeafBatchProof, MmrHash, MmrBatchProof, MmrEncodableOpaqueLeaf, MmrError, MmrLeafIndex, MmrLeafProof, MmrNodeIndex, MmrProof } from '@polkadot/types/interfaces/mmr';
import { StorageKind } from '@polkadot/types/interfaces/offchain';
import { FeeDetails, RuntimeDispatchInfoV1, RuntimeDispatchInfo, InclusionFee, RuntimeDispatchInfoV2 } from '@polkadot/types/interfaces/payment';
import { RpcMethods } from '@polkadot/types/interfaces/rpc';
import { ReadProof, RuntimeVersion, TraceBlockResponse, MigrationStatusResult, ApiId, BlockTrace, BlockTraceEvent, BlockTraceEventData, BlockTraceSpan, KeyValueOption, RuntimeVersionApi, RuntimeVersionPartial, RuntimeVersionPre3, RuntimeVersionPre4, SpecVersion, StorageChangeSet, TraceError } from '@polkadot/types/interfaces/state';
import { ChainType, ApplyExtrinsicResult, Health, NetworkState, NodeRole, PeerInfo, ChainProperties, SyncState, AccountInfo, AccountInfoWithDualRefCount, AccountInfoWithProviders, AccountInfoWithRefCount, AccountInfoWithRefCountU8, AccountInfoWithTripleRefCount, ApplyExtrinsicResultPre6, ArithmeticError, BlockLength, BlockWeights, ConsumedWeight, DigestOf, DispatchClass, DispatchError, DispatchErrorModule, DispatchErrorModulePre6, DispatchErrorModuleU8, DispatchErrorModuleU8a, DispatchErrorPre6, DispatchErrorPre6First, DispatchErrorTo198, DispatchInfo, DispatchInfoTo190, DispatchInfoTo244, DispatchOutcome, DispatchOutcomePre6, DispatchResult, DispatchResultOf, DispatchResultTo198, Event, EventId, EventIndex, EventRecord, InvalidTransaction, Key, LastRuntimeUpgradeInfo, NetworkStatePeerset, NetworkStatePeersetInfo, NotConnectedPeer, Peer, PeerEndpoint, PeerEndpointAddr, PeerPing, PerDispatchClassU32, PerDispatchClassWeight, PerDispatchClassWeightsPerClass, Phase, RawOrigin, RefCount, RefCountTo259, SystemOrigin, TokenError, TransactionalError, TransactionValidityError, UnknownTransaction, WeightPerClass } from '@polkadot/types/interfaces/system';
import { InherentData, CheckInherentsResult, InherentIdentifier } from '@polkadot/types/interfaces/blockbuilder';
import { CollationInfo, CollationInfoV1, ConfigData, MessageId, OverweightIndex, PageCounter, PageIndexData } from '@polkadot/types/interfaces/cumulus';
import { OpaqueMetadata, ErrorMetadataLatest, ErrorMetadataV10, ErrorMetadataV11, ErrorMetadataV12, ErrorMetadataV13, ErrorMetadataV14, ErrorMetadataV9, EventMetadataLatest, EventMetadataV10, EventMetadataV11, EventMetadataV12, EventMetadataV13, EventMetadataV14, EventMetadataV9, ExtrinsicMetadataLatest, ExtrinsicMetadataV11, ExtrinsicMetadataV12, ExtrinsicMetadataV13, ExtrinsicMetadataV14, FunctionArgumentMetadataLatest, FunctionArgumentMetadataV10, FunctionArgumentMetadataV11, FunctionArgumentMetadataV12, FunctionArgumentMetadataV13, FunctionArgumentMetadataV14, FunctionArgumentMetadataV9, FunctionMetadataLatest, FunctionMetadataV10, FunctionMetadataV11, FunctionMetadataV12, FunctionMetadataV13, FunctionMetadataV14, FunctionMetadataV9, MetadataAll, MetadataLatest, MetadataV10, MetadataV11, MetadataV12, MetadataV13, MetadataV14, MetadataV15, MetadataV9, ModuleConstantMetadataV10, ModuleConstantMetadataV11, ModuleConstantMetadataV12, ModuleConstantMetadataV13, ModuleConstantMetadataV9, ModuleMetadataV10, ModuleMetadataV11, ModuleMetadataV12, ModuleMetadataV13, ModuleMetadataV9, PalletCallMetadataLatest, PalletCallMetadataV14, PalletConstantMetadataLatest, PalletConstantMetadataV14, PalletErrorMetadataLatest, PalletErrorMetadataV14, PalletEventMetadataLatest, PalletEventMetadataV14, PalletMetadataLatest, PalletMetadataV14, PalletMetadataV15, PalletStorageMetadataLatest, PalletStorageMetadataV14, PortableType, PortableTypeV14, RuntimeApiMetadataLatest, RuntimeApiMetadataV15, RuntimeApiMethodMetadataV15, RuntimeApiMethodParamMetadataV15, SignedExtensionMetadataLatest, SignedExtensionMetadataV14, StorageEntryMetadataLatest, StorageEntryMetadataV10, StorageEntryMetadataV11, StorageEntryMetadataV12, StorageEntryMetadataV13, StorageEntryMetadataV14, StorageEntryMetadataV9, StorageEntryModifierLatest, StorageEntryModifierV10, StorageEntryModifierV11, StorageEntryModifierV12, StorageEntryModifierV13, StorageEntryModifierV14, StorageEntryModifierV9, StorageEntryTypeLatest, StorageEntryTypeV10, StorageEntryTypeV11, StorageEntryTypeV12, StorageEntryTypeV13, StorageEntryTypeV14, StorageEntryTypeV9, StorageHasher, StorageHasherV10, StorageHasherV11, StorageHasherV12, StorageHasherV13, StorageHasherV14, StorageHasherV9, StorageMetadataV10, StorageMetadataV11, StorageMetadataV12, StorageMetadataV13, StorageMetadataV9 } from '@polkadot/types/interfaces/metadata';
import { TransactionSource, TransactionValidity, ValidTransaction } from '@polkadot/types/interfaces/txqueue';
import { AssetApproval, AssetApprovalKey, AssetBalance, AssetDestroyWitness, AssetDetails, AssetMetadata, TAssetBalance, TAssetDepositBalance } from '@polkadot/types/interfaces/assets';
import { BlockAttestations, IncludedBlocks, MoreAttestations } from '@polkadot/types/interfaces/attestations';
import { RawAuraPreDigest } from '@polkadot/types/interfaces/aura';
import { UncleEntryItem } from '@polkadot/types/interfaces/authorship';
import { AccountData, BalanceLock, BalanceLockTo212, BalanceStatus, Reasons, ReserveData, ReserveIdentifier, VestingSchedule, WithdrawReasons } from '@polkadot/types/interfaces/balances';
import { BenchmarkBatch, BenchmarkConfig, BenchmarkList, BenchmarkMetadata, BenchmarkParameter, BenchmarkResult } from '@polkadot/types/interfaces/benchmark';
import { BridgedBlockHash, BridgedBlockNumber, BridgedHeader, BridgeMessageId, CallOrigin, ChainId, DeliveredMessages, DispatchFeePayment, InboundLaneData, InboundRelayer, InitializationData, LaneId, MessageData, MessageKey, MessageNonce, MessagesDeliveryProofOf, MessagesProofOf, OperatingMode, OutboundLaneData, OutboundMessageFee, OutboundPayload, Parameter, RelayerId, UnrewardedRelayer, UnrewardedRelayersState } from '@polkadot/types/interfaces/bridges';
import { StatementKind } from '@polkadot/types/interfaces/claims';
import { CollectiveOrigin, MemberCount, ProposalIndex, Votes, VotesTo230 } from '@polkadot/types/interfaces/collective';
import { ContractConstructorSpecLatest, ContractConstructorSpecV0, ContractConstructorSpecV1, ContractConstructorSpecV2, ContractConstructorSpecV3, ContractConstructorSpecV4, ContractContractSpecV0, ContractContractSpecV1, ContractContractSpecV2, ContractContractSpecV3, ContractContractSpecV4, ContractCryptoHasher, ContractDiscriminant, ContractDisplayName, ContractEnvironmentV4, ContractEventParamSpecLatest, ContractEventParamSpecV0, ContractEventParamSpecV2, ContractEventSpecLatest, ContractEventSpecV0, ContractEventSpecV1, ContractEventSpecV2, ContractLayoutArray, ContractLayoutCell, ContractLayoutEnum, ContractLayoutHash, ContractLayoutHashingStrategy, ContractLayoutKey, ContractLayoutStruct, ContractLayoutStructField, ContractMessageParamSpecLatest, ContractMessageParamSpecV0, ContractMessageParamSpecV2, ContractMessageSpecLatest, ContractMessageSpecV0, ContractMessageSpecV1, ContractMessageSpecV2, ContractMessageSpecV3, ContractMetadata, ContractMetadataLatest, ContractMetadataV0, ContractMetadataV1, ContractMetadataV2, ContractMetadataV3, ContractMetadataV4, ContractProject, ContractProjectContract, ContractProjectInfo, ContractProjectSource, ContractProjectV0, ContractSelector, ContractStorageLayout, ContractTypeSpec } from '@polkadot/types/interfaces/contractsAbi';
import { FundIndex, FundInfo, LastContribution, TrieIndex } from '@polkadot/types/interfaces/crowdloan';
import { AccountVote, AccountVoteSplit, AccountVoteStandard, Conviction, Delegations, PreimageStatus, PreimageStatusAvailable, PriorLock, PropIndex, Proposal, ProxyState, ReferendumIndex, ReferendumInfo, ReferendumInfoFinished, ReferendumInfoTo239, ReferendumStatus, Tally, Voting, VotingDelegating, VotingDirect, VotingDirectVote } from '@polkadot/types/interfaces/democracy';
import { ApprovalFlag, DefunctVoter, Renouncing, SetIndex, Vote, VoteIndex, VoterInfo, VoteThreshold } from '@polkadot/types/interfaces/elections';
import { EvmAccount, EvmCallInfo, EvmCreateInfo, EvmLog, EvmVicinity, ExitError, ExitFatal, ExitReason, ExitRevert, ExitSucceed } from '@polkadot/types/interfaces/evm';
import { FungiblesAccessError } from '@polkadot/types/interfaces/fungibles';
import { AssetOptions, Owner, PermissionLatest, PermissionsV1, PermissionVersions } from '@polkadot/types/interfaces/genericAsset';
import { ActiveGilt, ActiveGiltsTotal, ActiveIndex, GiltBid } from '@polkadot/types/interfaces/gilt';
import { IdentityFields, IdentityInfo, IdentityInfoAdditional, IdentityInfoTo198, IdentityJudgement, RegistrarIndex, RegistrarInfo, Registration, RegistrationJudgement, RegistrationTo198 } from '@polkadot/types/interfaces/identity';
import { AuthIndex, AuthoritySignature, Heartbeat, HeartbeatTo244, OpaqueMultiaddr, OpaqueNetworkState, OpaquePeerId } from '@polkadot/types/interfaces/imOnline';
import { CallIndex, LotteryConfig } from '@polkadot/types/interfaces/lottery';
import { NftCollectionId, NftItemId } from '@polkadot/types/interfaces/nfts';
import { NpApiError, NpPoolId } from '@polkadot/types/interfaces/nompools';
import { DeferredOffenceOf, Kind, OffenceDetails, Offender, OpaqueTimeSlot, Reporter, ReportIdOf } from '@polkadot/types/interfaces/offences';
import { AbridgedCandidateReceipt, AbridgedHostConfiguration, AbridgedHrmpChannel, AssignmentId, AssignmentKind, AttestedCandidate, AuctionIndex, AuthorityDiscoveryId, AvailabilityBitfield, AvailabilityBitfieldRecord, BackedCandidate, Bidder, BufferedSessionChange, CandidateCommitments, CandidateDescriptor, CandidateEvent, CandidateHash, CandidateInfo, CandidatePendingAvailability, CandidateReceipt, CollatorId, CollatorSignature, CommittedCandidateReceipt, CoreAssignment, CoreIndex, CoreOccupied, CoreState, DisputeLocation, DisputeResult, DisputeState, DisputeStatement, DisputeStatementSet, DoubleVoteReport, DownwardMessage, ExecutorParam, ExecutorParams, ExecutorParamsHash, ExplicitDisputeStatement, GlobalValidationData, GlobalValidationSchedule, GroupIndex, GroupRotationInfo, HeadData, HostConfiguration, HrmpChannel, HrmpChannelId, HrmpOpenChannelRequest, InboundDownwardMessage, InboundHrmpMessage, InboundHrmpMessages, IncomingParachain, IncomingParachainDeploy, IncomingParachainFixed, InvalidDisputeStatementKind, LeasePeriod, LeasePeriodOf, LocalValidationData, MessageIngestionType, MessageQueueChain, MessagingStateSnapshot, MessagingStateSnapshotEgressEntry, MultiDisputeStatementSet, NewBidder, OccupiedCore, OccupiedCoreAssumption, OldV1SessionInfo, OutboundHrmpMessage, ParachainDispatchOrigin, ParachainInherentData, ParachainProposal, ParachainsInherentData, ParaGenesisArgs, ParaId, ParaInfo, ParaLifecycle, ParaPastCodeMeta, ParaScheduling, ParathreadClaim, ParathreadClaimQueue, ParathreadEntry, ParaValidatorIndex, PersistedValidationData, PvfCheckStatement, PvfExecTimeoutKind, PvfPrepTimeoutKind, QueuedParathread, RegisteredParachainInfo, RelayBlockNumber, RelayChainBlockNumber, RelayChainHash, RelayHash, Remark, ReplacementTimes, Retriable, ScheduledCore, Scheduling, ScrapedOnChainVotes, ServiceQuality, SessionInfo, SessionInfoValidatorGroup, SignedAvailabilityBitfield, SignedAvailabilityBitfields, SigningContext, SlotRange, SlotRange10, Statement, SubId, SystemInherentData, TransientValidationData, UpgradeGoAhead, UpgradeRestriction, UpwardMessage, ValidationCode, ValidationCodeHash, ValidationData, ValidationDataType, ValidationFunctionParams, ValidatorSignature, ValidDisputeStatementKind, ValidityAttestation, VecInboundHrmpMessage, WinnersData, WinnersData10, WinnersDataTuple, WinnersDataTuple10, WinningData, WinningData10, WinningDataEntry } from '@polkadot/types/interfaces/parachains';
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
import { VestingInfo as VestingInfo$1 } from '@polkadot/types/interfaces/vesting';
import { AssetInstance, AssetInstanceV0, AssetInstanceV1, AssetInstanceV2, BodyId, BodyPart, DoubleEncodedCall, Fungibility, FungibilityV0, FungibilityV1, FungibilityV2, InboundStatus, InstructionV2, InteriorMultiLocation, Junction, Junctions, JunctionsV1, JunctionsV2, JunctionV0, JunctionV1, JunctionV2, MultiAsset, MultiAssetFilter, MultiAssetFilterV1, MultiAssetFilterV2, MultiAssets, MultiAssetsV1, MultiAssetsV2, MultiAssetV0, MultiAssetV1, MultiAssetV2, MultiLocation, MultiLocationV0, MultiLocationV1, MultiLocationV2, NetworkId, OriginKindV0, OriginKindV1, OriginKindV2, OutboundStatus, Outcome, QueryId, QueryStatus, QueueConfigData, Response, ResponseV0, ResponseV1, ResponseV2, ResponseV2Error, ResponseV2Result, VersionedMultiAsset, VersionedMultiAssets, VersionedMultiLocation, VersionedResponse, VersionedXcm, VersionMigrationStage, WeightLimitV2, WildFungibility, WildFungibilityV0, WildFungibilityV1, WildFungibilityV2, WildMultiAsset, WildMultiAssetV1, WildMultiAssetV2, Xcm, XcmAssetId, XcmError, XcmErrorV0, XcmErrorV1, XcmErrorV2, XcmOrder, XcmOrderV0, XcmOrderV1, XcmOrderV2, XcmOrigin, XcmOriginKind, XcmpMessageFormat, XcmV0, XcmV1, XcmV2, XcmVersion } from '@polkadot/types/interfaces/xcm';

declare module '@polkadot/api-base/types/consts' {
    interface AugmentedConsts<ApiType extends ApiTypes> {
        bootstrap: {
            bootstrapUpdateBuffer: u32 & AugmentedConst<ApiType>;
            defaultBootstrapPromotedPoolWeight: u8 & AugmentedConst<ApiType>;
            treasuryPalletId: FrameSupportPalletId & AugmentedConst<ApiType>;
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
        feeLock: {
            maxCuratedTokens: u32 & AugmentedConst<ApiType>;
            nativeTokenId: u32 & AugmentedConst<ApiType>;
            /**
             * Generic const
             **/
            [key: string]: Codec;
        };
        identity: {
            /**
             * The amount held on deposit for a registered identity
             **/
            basicDeposit: u128 & AugmentedConst<ApiType>;
            /**
             * The amount held on deposit per additional field for a registered identity.
             **/
            fieldDeposit: u128 & AugmentedConst<ApiType>;
            /**
             * Maximum number of additional fields that may be stored in an ID. Needed to bound the I/O
             * required to access an identity, but can be pretty high.
             **/
            maxAdditionalFields: u32 & AugmentedConst<ApiType>;
            /**
             * Maxmimum number of registrars allowed in the system. Needed to bound the complexity
             * of, e.g., updating judgements.
             **/
            maxRegistrars: u32 & AugmentedConst<ApiType>;
            /**
             * The maximum number of sub-accounts allowed per identified account.
             **/
            maxSubAccounts: u32 & AugmentedConst<ApiType>;
            /**
             * The amount held on deposit for a registered subaccount. This should account for the fact
             * that one storage item's value will increase by the size of an account ID, and there will
             * be another trie item whose value is the size of an account ID plus 32 bytes.
             **/
            subAccountDeposit: u128 & AugmentedConst<ApiType>;
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
            defaultPayoutLimit: u32 & AugmentedConst<ApiType>;
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
        proofOfStake: {
            /**
             * The account id that holds the liquidity mining issuance
             **/
            liquidityMiningIssuanceVault: AccountId32 & AugmentedConst<ApiType>;
            rewardsDistributionPeriod: u32 & AugmentedConst<ApiType>;
            /**
             * Generic const
             **/
            [key: string]: Codec;
        };
        proxy: {
            /**
             * The base amount of currency needed to reserve for creating an announcement.
             *
             * This is held when a new storage item holding a `Balance` is created (typically 16
             * bytes).
             **/
            announcementDepositBase: u128 & AugmentedConst<ApiType>;
            /**
             * The amount of currency needed per announcement made.
             *
             * This is held for adding an `AccountId`, `Hash` and `BlockNumber` (typically 68 bytes)
             * into a pre-existing storage value.
             **/
            announcementDepositFactor: u128 & AugmentedConst<ApiType>;
            /**
             * The maximum amount of time-delayed announcements that are allowed to be pending.
             **/
            maxPending: u32 & AugmentedConst<ApiType>;
            /**
             * The maximum amount of proxies allowed for a single account.
             **/
            maxProxies: u32 & AugmentedConst<ApiType>;
            /**
             * The base amount of currency needed to reserve for creating a proxy.
             *
             * This is held for an additional storage item whose value size is
             * `sizeof(Balance)` bytes and whose key size is `sizeof(AccountId)` bytes.
             **/
            proxyDepositBase: u128 & AugmentedConst<ApiType>;
            /**
             * The amount of currency needed per proxy added.
             *
             * This is held for adding 32 bytes plus an instance of `ProxyType` more into a
             * pre-existing storage value. Thus, when configuring `ProxyDepositFactor` one should take
             * into account `32 + proxy_type.encode().len()` bytes of data.
             **/
            proxyDepositFactor: u128 & AugmentedConst<ApiType>;
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
            dbWeight: SpWeightsRuntimeDbWeight & AugmentedConst<ApiType>;
            /**
             * The designated SS58 prefix of this chain.
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
             * The maximum number of named reserves that can exist on an account.
             **/
            maxReserves: u32 & AugmentedConst<ApiType>;
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
             *
             * NOTE: This parameter is also used within the Bounties Pallet extension if enabled.
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
            baseXcmWeight: SpWeightsWeightV2Weight & AugmentedConst<ApiType>;
            /**
             * Self chain location.
             **/
            selfLocation: XcmV3MultiLocation & AugmentedConst<ApiType>;
            /**
             * Generic const
             **/
            [key: string]: Codec;
        };
        xyk: {
            buyAndBurnFeePercentage: u128 & AugmentedConst<ApiType>;
            poolFeePercentage: u128 & AugmentedConst<ApiType>;
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
             * Asset was not found.
             **/
            AssetNotFound: AugmentedError<ApiType>;
            /**
             * The version of the `VersionedMultiLocation` value used is not able
             * to be interpreted.
             **/
            BadVersion: AugmentedError<ApiType>;
            /**
             * Another asset was already register with this asset id.
             **/
            ConflictingAssetId: AugmentedError<ApiType>;
            /**
             * Another asset was already register with this location.
             **/
            ConflictingLocation: AugmentedError<ApiType>;
            /**
             * The asset id is invalid.
             **/
            InvalidAssetId: AugmentedError<ApiType>;
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
             * Bootstrap already Finished
             **/
            BootstrapFinished: AugmentedError<ApiType>;
            /**
             * Bootstrap must be pre finalized before it can be finalized
             **/
            BootstrapMustBePreFinalized: AugmentedError<ApiType>;
            /**
             * no rewards to claim
             **/
            BootstrapNotReadyToBeFinished: AugmentedError<ApiType>;
            /**
             * Bootstrap not scheduled
             **/
            BootstrapNotSchduled: AugmentedError<ApiType>;
            /**
             * Bootstrap cant be scheduled in past
             **/
            BootstrapStartInThePast: AugmentedError<ApiType>;
            /**
             * First provision must be in non restricted token
             **/
            FirstProvisionInSecondTokenId: AugmentedError<ApiType>;
            /**
             * Math problem
             **/
            MathOverflow: AugmentedError<ApiType>;
            /**
             * Not enough funds for provision
             **/
            NotEnoughAssets: AugmentedError<ApiType>;
            /**
             * Not enough funds for provision (vested)
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
             * Bootstrap provisioning blocked by maintenance mode
             **/
            ProvisioningBlockedByMaintenanceMode: AugmentedError<ApiType>;
            /**
             * Tokens used in bootstrap cannot be the same
             **/
            SameToken: AugmentedError<ApiType>;
            /**
             * Token does not exists
             **/
            TokenIdDoesNotExists: AugmentedError<ApiType>;
            /**
             * Token activations failed
             **/
            TokensActivationFailed: AugmentedError<ApiType>;
            /**
             * Bootstrap can only be updated or cancelled
             * BootstrapUpdateBuffer blocks or more before bootstrap start
             **/
            TooLateToUpdateBootstrap: AugmentedError<ApiType>;
            /**
             * User cannot participate at this moment
             **/
            Unauthorized: AugmentedError<ApiType>;
            /**
             * Only scheduled token pair can be used for provisions
             **/
            UnsupportedTokenId: AugmentedError<ApiType>;
            /**
             * Valuation ratio exceeded
             **/
            ValuationRatio: AugmentedError<ApiType>;
            /**
             * wrong ratio
             **/
            WrongRatio: AugmentedError<ApiType>;
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
             * Requires foundation account or root
             **/
            NotFoundationAccountOrRoot: AugmentedError<ApiType>;
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
             * To early to close the proposal, can only close ProposalCloseDelay blocks after proposal
             * was proposed unless by a foundation account
             **/
            TooEarlyToCloseByNonFoundationAccount: AugmentedError<ApiType>;
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
             * Math overflow
             **/
            MathOverflow: AugmentedError<ApiType>;
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
             * Period not set
             **/
            PeriodNotSet: AugmentedError<ApiType>;
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
             * Dmp message processing is blocked by maintenance mode
             **/
            DmpMsgProcessingBlockedByMaintenanceMode: AugmentedError<ApiType>;
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
        feeLock: {
            /**
             * The lock cannot be unlocked yet
             **/
            CantUnlockFeeYet: AugmentedError<ApiType>;
            /**
             * Locks were incorrectly initialized
             **/
            FeeLocksIncorrectlyInitialzed: AugmentedError<ApiType>;
            /**
             * Locks have not been initialzed
             **/
            FeeLocksNotInitialized: AugmentedError<ApiType>;
            /**
             * Lock metadata is invalid
             **/
            InvalidFeeLockMetadata: AugmentedError<ApiType>;
            /**
             * The limit on the maximum curated tokens for which there is a swap threshold is exceeded
             **/
            MaxCuratedTokensLimitExceeded: AugmentedError<ApiType>;
            /**
             * No tokens of the user are fee-locked
             **/
            NotFeeLocked: AugmentedError<ApiType>;
            /**
             * An unexpected failure has occured
             **/
            UnexpectedFailure: AugmentedError<ApiType>;
            /**
             * Generic error
             **/
            [key: string]: AugmentedError<ApiType>;
        };
        identity: {
            /**
             * Account ID is already named.
             **/
            AlreadyClaimed: AugmentedError<ApiType>;
            /**
             * Empty index.
             **/
            EmptyIndex: AugmentedError<ApiType>;
            /**
             * Fee is changed.
             **/
            FeeChanged: AugmentedError<ApiType>;
            /**
             * The index is invalid.
             **/
            InvalidIndex: AugmentedError<ApiType>;
            /**
             * Invalid judgement.
             **/
            InvalidJudgement: AugmentedError<ApiType>;
            /**
             * The target is invalid.
             **/
            InvalidTarget: AugmentedError<ApiType>;
            /**
             * The provided judgement was for a different identity.
             **/
            JudgementForDifferentIdentity: AugmentedError<ApiType>;
            /**
             * Judgement given.
             **/
            JudgementGiven: AugmentedError<ApiType>;
            /**
             * Error that occurs when there is an issue paying for judgement.
             **/
            JudgementPaymentFailed: AugmentedError<ApiType>;
            /**
             * No identity found.
             **/
            NoIdentity: AugmentedError<ApiType>;
            /**
             * Account isn't found.
             **/
            NotFound: AugmentedError<ApiType>;
            /**
             * Account isn't named.
             **/
            NotNamed: AugmentedError<ApiType>;
            /**
             * Sub-account isn't owned by sender.
             **/
            NotOwned: AugmentedError<ApiType>;
            /**
             * Sender is not a sub-account.
             **/
            NotSub: AugmentedError<ApiType>;
            /**
             * Sticky judgement.
             **/
            StickyJudgement: AugmentedError<ApiType>;
            /**
             * Too many additional fields.
             **/
            TooManyFields: AugmentedError<ApiType>;
            /**
             * Maximum amount of registrars reached. Cannot add any more.
             **/
            TooManyRegistrars: AugmentedError<ApiType>;
            /**
             * Too many subs-accounts.
             **/
            TooManySubAccounts: AugmentedError<ApiType>;
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
             * unknown pool
             **/
            UnknownPool: AugmentedError<ApiType>;
            /**
             * Generic error
             **/
            [key: string]: AugmentedError<ApiType>;
        };
        maintenance: {
            /**
             * Already in maintenance mode
             **/
            AlreadyInMaintenanceMode: AugmentedError<ApiType>;
            /**
             * Already not upgradable in maintenance mode
             **/
            AlreadyNotUpgradableInMaintenanceMode: AugmentedError<ApiType>;
            /**
             * Already upgradable in maintenance mode
             **/
            AlreadyUpgradableInMaintenanceMode: AugmentedError<ApiType>;
            /**
             * Timeouts were incorrectly initialized
             **/
            NotFoundationAccount: AugmentedError<ApiType>;
            /**
             * Not in maintenance mode
             **/
            NotInMaintenanceMode: AugmentedError<ApiType>;
            /**
             * Generic error
             **/
            [key: string]: AugmentedError<ApiType>;
        };
        multiPurposeLiquidity: {
            /**
             * Math error
             **/
            MathError: AugmentedError<ApiType>;
            /**
             * The token is not a liquidity token
             **/
            NotALiquidityToken: AugmentedError<ApiType>;
            /**
             * Not enough tokens
             **/
            NotEnoughTokens: AugmentedError<ApiType>;
            /**
             * Not enough unspend reserves
             **/
            NotEnoughUnspentReserves: AugmentedError<ApiType>;
            /**
             * The limit on the maximum number of relocks was exceeded
             **/
            RelockCountLimitExceeded: AugmentedError<ApiType>;
            /**
             * Provided index for relock is out of bounds
             **/
            RelockInstanceIndexOOB: AugmentedError<ApiType>;
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
            AggregatorDNE: AugmentedError<ApiType>;
            AggregatorExists: AugmentedError<ApiType>;
            AggregatorLiquidityTokenTaken: AugmentedError<ApiType>;
            AlreadyActive: AugmentedError<ApiType>;
            AlreadyDelegatedCandidate: AugmentedError<ApiType>;
            AlreadyOffline: AugmentedError<ApiType>;
            CandidateAlreadyApprovedByAggregator: AugmentedError<ApiType>;
            CandidateAlreadyLeaving: AugmentedError<ApiType>;
            CandidateBondBelowMin: AugmentedError<ApiType>;
            CandidateCannotLeaveYet: AugmentedError<ApiType>;
            CandidateDNE: AugmentedError<ApiType>;
            CandidateExists: AugmentedError<ApiType>;
            CandidateNotAggregating: AugmentedError<ApiType>;
            CandidateNotAggregatingUnderAggregator: AugmentedError<ApiType>;
            CandidateNotApprovedByAggregator: AugmentedError<ApiType>;
            CandidateNotLeaving: AugmentedError<ApiType>;
            CannotDelegateIfLeaving: AugmentedError<ApiType>;
            CannotGoOnlineIfLeaving: AugmentedError<ApiType>;
            CannotSetBelowMin: AugmentedError<ApiType>;
            CollatorRoundRewardsDNE: AugmentedError<ApiType>;
            DelegationBelowMin: AugmentedError<ApiType>;
            DelegationDNE: AugmentedError<ApiType>;
            DelegatorAlreadyLeaving: AugmentedError<ApiType>;
            DelegatorCannotLeaveYet: AugmentedError<ApiType>;
            DelegatorDNE: AugmentedError<ApiType>;
            DelegatorDNEInDelegatorSet: AugmentedError<ApiType>;
            DelegatorDNEinTopNorBottom: AugmentedError<ApiType>;
            DelegatorExists: AugmentedError<ApiType>;
            DelegatorNotLeaving: AugmentedError<ApiType>;
            DelegatorRewardsDNE: AugmentedError<ApiType>;
            ExceedMaxCollatorCandidates: AugmentedError<ApiType>;
            ExceedMaxDelegationsPerDelegator: AugmentedError<ApiType>;
            ExceedMaxTotalDelegatorsPerCandidate: AugmentedError<ApiType>;
            IncorrectRewardDelegatorCount: AugmentedError<ApiType>;
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
            TargettedAggregatorSameAsCurrent: AugmentedError<ApiType>;
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
             * The inherent which supplies the host configuration did not run this block.
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
             * Attempt to upgrade validation function while existing upgrade pending.
             **/
            OverlappingUpgrades: AugmentedError<ApiType>;
            /**
             * Polkadot currently prohibits this parachain from upgrading its validation function.
             **/
            ProhibitedByPolkadot: AugmentedError<ApiType>;
            /**
             * The supplied validation function has compiled into a blob larger than Polkadot is
             * willing to run.
             **/
            TooBig: AugmentedError<ApiType>;
            /**
             * The given code upgrade has not been authorized.
             **/
            Unauthorized: AugmentedError<ApiType>;
            /**
             * Upgrades are blocked due to maintenance mode
             **/
            UpgradeBlockedByMaintenanceMode: AugmentedError<ApiType>;
            /**
             * The inherent which supplies the validation data did not run this block.
             **/
            ValidationDataNotAvailable: AugmentedError<ApiType>;
            /**
             * Generic error
             **/
            [key: string]: AugmentedError<ApiType>;
        };
        polkadotXcm: {
            /**
             * The given account is not an identifiable sovereign account for any location.
             **/
            AccountNotSovereign: AugmentedError<ApiType>;
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
             * The operation required fees to be paid which the initiator could not meet.
             **/
            FeesNotMet: AugmentedError<ApiType>;
            /**
             * The message execution fails the filter.
             **/
            Filtered: AugmentedError<ApiType>;
            /**
             * The unlock operation cannot succeed because there are still users of the lock.
             **/
            InUse: AugmentedError<ApiType>;
            /**
             * Invalid asset for the operation.
             **/
            InvalidAsset: AugmentedError<ApiType>;
            /**
             * Origin is invalid for sending.
             **/
            InvalidOrigin: AugmentedError<ApiType>;
            /**
             * A remote lock with the corresponding data could not be found.
             **/
            LockNotFound: AugmentedError<ApiType>;
            /**
             * The owner does not own (all) of the asset that they wish to do the operation on.
             **/
            LowBalance: AugmentedError<ApiType>;
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
             * The asset owner has too many locks on the asset.
             **/
            TooManyLocks: AugmentedError<ApiType>;
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
        proofOfStake: {
            CalculateRewardsAllMathError: AugmentedError<ApiType>;
            CalculateRewardsMathError: AugmentedError<ApiType>;
            DeprecatedExtrinsic: AugmentedError<ApiType>;
            LiquidityCheckpointMathError: AugmentedError<ApiType>;
            MathError: AugmentedError<ApiType>;
            /**
             * Math overflow
             **/
            MathOverflow: AugmentedError<ApiType>;
            MissingRewardsInfoError: AugmentedError<ApiType>;
            /**
             * Not a promoted pool
             **/
            NotAPromotedPool: AugmentedError<ApiType>;
            /**
             * Not enought assets
             **/
            NotEnoughAssets: AugmentedError<ApiType>;
            /**
             * Not enough rewards earned
             **/
            NotEnoughRewardsEarned: AugmentedError<ApiType>;
            /**
             * Past time calculation
             **/
            PastTimeCalculation: AugmentedError<ApiType>;
            /**
             * Generic error
             **/
            [key: string]: AugmentedError<ApiType>;
        };
        proxy: {
            /**
             * Account is already a proxy.
             **/
            Duplicate: AugmentedError<ApiType>;
            /**
             * Call may not be made by proxy because it may escalate its privileges.
             **/
            NoPermission: AugmentedError<ApiType>;
            /**
             * Cannot add self as proxy.
             **/
            NoSelfProxy: AugmentedError<ApiType>;
            /**
             * Proxy registration not found.
             **/
            NotFound: AugmentedError<ApiType>;
            /**
             * Sender is not a proxy of the account to be proxied.
             **/
            NotProxy: AugmentedError<ApiType>;
            /**
             * There are too many proxies registered or too many announcements pending.
             **/
            TooMany: AugmentedError<ApiType>;
            /**
             * Announcement, if made at all, was made too recently.
             **/
            Unannounced: AugmentedError<ApiType>;
            /**
             * A call which is incompatible with the proxy type's filter was attempted.
             **/
            Unproxyable: AugmentedError<ApiType>;
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
             * the storage queue is empty and cannot accept any new txs
             **/
            StorageQueueFull: AugmentedError<ApiType>;
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
            TooManyReserves: AugmentedError<ApiType>;
            /**
             * Generic error
             **/
            [key: string]: AugmentedError<ApiType>;
        };
        treasury: {
            /**
             * The spend origin is valid but the amount it is allowed to spend is lower than the
             * amount to be spent.
             **/
            InsufficientPermission: AugmentedError<ApiType>;
            /**
             * Proposer's balance is too low.
             **/
            InsufficientProposersBalance: AugmentedError<ApiType>;
            /**
             * No proposal or bounty at that index.
             **/
            InvalidIndex: AugmentedError<ApiType>;
            /**
             * Proposal has not been approved.
             **/
            ProposalNotApproved: AugmentedError<ApiType>;
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
             * The provided vesting index exceeds the current number of vesting schedules
             **/
            InvalidVestingIndex: AugmentedError<ApiType>;
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
             * Sudo is not allowed to unlock tokens
             **/
            SudoUnlockIsDisallowed: AugmentedError<ApiType>;
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
             * Xcm message processing is blocked by maintenance mode
             **/
            XcmMsgProcessingBlockedByMaintenanceMode: AugmentedError<ApiType>;
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
             * The specified index does not exist in a MultiAssets struct.
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
             * reserve chains.
             **/
            DistinctReserveForAssetAndFee: AugmentedError<ApiType>;
            /**
             * Fee is not enough.
             **/
            FeeNotEnough: AugmentedError<ApiType>;
            /**
             * Could not get ancestry of asset reserve location.
             **/
            InvalidAncestry: AugmentedError<ApiType>;
            /**
             * The MultiAsset is invalid.
             **/
            InvalidAsset: AugmentedError<ApiType>;
            /**
             * Invalid transfer destination.
             **/
            InvalidDest: AugmentedError<ApiType>;
            /**
             * MinXcmFee not registered for certain reserve location
             **/
            MinXcmFeeNotDefined: AugmentedError<ApiType>;
            /**
             * Not cross-chain transfer.
             **/
            NotCrossChainTransfer: AugmentedError<ApiType>;
            /**
             * Currency is not cross-chain transferable.
             **/
            NotCrossChainTransferableCurrency: AugmentedError<ApiType>;
            /**
             * Not supported MultiLocation
             **/
            NotSupportedMultiLocation: AugmentedError<ApiType>;
            /**
             * The number of assets to be sent is over the maximum.
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
             * The transfering asset amount is zero.
             **/
            ZeroAmount: AugmentedError<ApiType>;
            /**
             * The fee is zero.
             **/
            ZeroFee: AugmentedError<ApiType>;
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
            CalculateCumulativeWorkMaxRatioMathError: AugmentedError<ApiType>;
            CalculateRewardsAllMathError: AugmentedError<ApiType>;
            CalculateRewardsMathError: AugmentedError<ApiType>;
            /**
             * Pool considting of passed tokens id is blacklisted
             **/
            DisallowedPool: AugmentedError<ApiType>;
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
            LiquidityCheckpointMathError: AugmentedError<ApiType>;
            /**
             * Liquidity token creation failed
             **/
            LiquidityTokenCreationFailed: AugmentedError<ApiType>;
            /**
             * Math overflow
             **/
            MathOverflow: AugmentedError<ApiType>;
            MultiBuyAssetCantHaveSamePoolAtomicSwaps: AugmentedError<ApiType>;
            MultiSwapCantHaveSameTokenConsequetively: AugmentedError<ApiType>;
            MultiswapShouldBeAtleastTwoHops: AugmentedError<ApiType>;
            NoRights: AugmentedError<ApiType>;
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
             * Not enough rewards earned
             **/
            NotEnoughRewardsEarned: AugmentedError<ApiType>;
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
             * Trading blocked by maintenance mode
             **/
            TradingBlockedByMaintenanceMode: AugmentedError<ApiType>;
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
            RegisteredAsset: AugmentedEvent<ApiType, [assetId: u32, metadata: OrmlTraitsAssetRegistryAssetMetadata], {
                assetId: u32;
                metadata: OrmlTraitsAssetRegistryAssetMetadata;
            }>;
            UpdatedAsset: AugmentedEvent<ApiType, [assetId: u32, metadata: OrmlTraitsAssetRegistryAssetMetadata], {
                assetId: u32;
                metadata: OrmlTraitsAssetRegistryAssetMetadata;
            }>;
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
             * bootstrap pre finalization has completed partially
             **/
            BootstrapParitallyPreFinalized: AugmentedEvent<ApiType, []>;
            /**
             * bootstrap pre finalization has completed, and the bootstrap can now be finalized
             **/
            BootstrapReadyToBeFinalized: AugmentedEvent<ApiType, []>;
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
            Approved: AugmentedEvent<ApiType, [proposalHash: H256], {
                proposalHash: H256;
            }>;
            /**
             * A proposal was closed because its threshold was reached or after its duration was up.
             **/
            Closed: AugmentedEvent<ApiType, [proposalHash: H256, yes: u32, no: u32], {
                proposalHash: H256;
                yes: u32;
                no: u32;
            }>;
            /**
             * A motion was not approved by the required threshold.
             **/
            Disapproved: AugmentedEvent<ApiType, [proposalHash: H256], {
                proposalHash: H256;
            }>;
            /**
             * A motion was executed; result will be `Ok` if it returned without error.
             **/
            Executed: AugmentedEvent<ApiType, [proposalHash: H256, result: Result<Null, SpRuntimeDispatchError>], {
                proposalHash: H256;
                result: Result<Null, SpRuntimeDispatchError>;
            }>;
            /**
             * A single member did some action; result will be `Ok` if it returned without error.
             **/
            MemberExecuted: AugmentedEvent<ApiType, [proposalHash: H256, result: Result<Null, SpRuntimeDispatchError>], {
                proposalHash: H256;
                result: Result<Null, SpRuntimeDispatchError>;
            }>;
            /**
             * The members have been changed
             **/
            MembersChanged: AugmentedEvent<ApiType, [newMembers: Vec<AccountId32>], {
                newMembers: Vec<AccountId32>;
            }>;
            /**
             * The Prime member has been set
             **/
            PrimeSet: AugmentedEvent<ApiType, [newPrime: Option<AccountId32>], {
                newPrime: Option<AccountId32>;
            }>;
            /**
             * A motion (given hash) has been proposed (by given account) with a threshold (given
             * `MemberCount`).
             **/
            Proposed: AugmentedEvent<ApiType, [account: AccountId32, proposalIndex: u32, proposalHash: H256, threshold: u32], {
                account: AccountId32;
                proposalIndex: u32;
                proposalHash: H256;
                threshold: u32;
            }>;
            /**
             * A motion (given hash) has been voted on by given account, leaving
             * a tally (yes votes and no votes given respectively as `MemberCount`).
             **/
            Voted: AugmentedEvent<ApiType, [account: AccountId32, proposalHash: H256, voted: bool, yes: u32, no: u32], {
                account: AccountId32;
                proposalHash: H256;
                voted: bool;
                yes: u32;
                no: u32;
            }>;
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
            ExecutedDownward: AugmentedEvent<ApiType, [U8aFixed, XcmV3TraitsOutcome]>;
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
            ExecutedDownward: AugmentedEvent<ApiType, [messageId: U8aFixed, outcome: XcmV3TraitsOutcome], {
                messageId: U8aFixed;
                outcome: XcmV3TraitsOutcome;
            }>;
            /**
             * Downward message is invalid XCM.
             **/
            InvalidFormat: AugmentedEvent<ApiType, [messageId: U8aFixed], {
                messageId: U8aFixed;
            }>;
            /**
             * The maximum number of downward messages was.
             **/
            MaxMessagesExhausted: AugmentedEvent<ApiType, [messageId: U8aFixed], {
                messageId: U8aFixed;
            }>;
            /**
             * Downward message is overweight and was placed in the overweight queue.
             **/
            OverweightEnqueued: AugmentedEvent<ApiType, [messageId: U8aFixed, overweightIndex: u64, requiredWeight: SpWeightsWeightV2Weight], {
                messageId: U8aFixed;
                overweightIndex: u64;
                requiredWeight: SpWeightsWeightV2Weight;
            }>;
            /**
             * Downward message from the overweight queue was executed.
             **/
            OverweightServiced: AugmentedEvent<ApiType, [overweightIndex: u64, weightUsed: SpWeightsWeightV2Weight], {
                overweightIndex: u64;
                weightUsed: SpWeightsWeightV2Weight;
            }>;
            /**
             * Downward message is unsupported version of XCM.
             **/
            UnsupportedVersion: AugmentedEvent<ApiType, [messageId: U8aFixed], {
                messageId: U8aFixed;
            }>;
            /**
             * The weight limit for handling downward messages was reached.
             **/
            WeightExhausted: AugmentedEvent<ApiType, [messageId: U8aFixed, remainingWeight: SpWeightsWeightV2Weight, requiredWeight: SpWeightsWeightV2Weight], {
                messageId: U8aFixed;
                remainingWeight: SpWeightsWeightV2Weight;
                requiredWeight: SpWeightsWeightV2Weight;
            }>;
            /**
             * Generic event
             **/
            [key: string]: AugmentedEvent<ApiType>;
        };
        feeLock: {
            FeeLocked: AugmentedEvent<ApiType, [who: AccountId32, lockAmount: u128, totalLocked: u128], {
                who: AccountId32;
                lockAmount: u128;
                totalLocked: u128;
            }>;
            FeeLockMetadataUpdated: AugmentedEvent<ApiType, []>;
            FeeLockUnlocked: AugmentedEvent<ApiType, [AccountId32, u128]>;
            /**
             * Generic event
             **/
            [key: string]: AugmentedEvent<ApiType>;
        };
        identity: {
            /**
             * A name was cleared, and the given balance returned.
             **/
            IdentityCleared: AugmentedEvent<ApiType, [who: AccountId32, deposit: u128], {
                who: AccountId32;
                deposit: u128;
            }>;
            /**
             * A name was removed and the given balance slashed.
             **/
            IdentityKilled: AugmentedEvent<ApiType, [who: AccountId32, deposit: u128], {
                who: AccountId32;
                deposit: u128;
            }>;
            /**
             * A name was set or reset (which will remove all judgements).
             **/
            IdentitySet: AugmentedEvent<ApiType, [who: AccountId32], {
                who: AccountId32;
            }>;
            /**
             * A judgement was given by a registrar.
             **/
            JudgementGiven: AugmentedEvent<ApiType, [target: AccountId32, registrarIndex: u32], {
                target: AccountId32;
                registrarIndex: u32;
            }>;
            /**
             * A judgement was asked from a registrar.
             **/
            JudgementRequested: AugmentedEvent<ApiType, [who: AccountId32, registrarIndex: u32], {
                who: AccountId32;
                registrarIndex: u32;
            }>;
            /**
             * A judgement request was retracted.
             **/
            JudgementUnrequested: AugmentedEvent<ApiType, [who: AccountId32, registrarIndex: u32], {
                who: AccountId32;
                registrarIndex: u32;
            }>;
            /**
             * A registrar was added.
             **/
            RegistrarAdded: AugmentedEvent<ApiType, [registrarIndex: u32], {
                registrarIndex: u32;
            }>;
            /**
             * A sub-identity was added to an identity and the deposit paid.
             **/
            SubIdentityAdded: AugmentedEvent<ApiType, [sub: AccountId32, main: AccountId32, deposit: u128], {
                sub: AccountId32;
                main: AccountId32;
                deposit: u128;
            }>;
            /**
             * A sub-identity was removed from an identity and the deposit freed.
             **/
            SubIdentityRemoved: AugmentedEvent<ApiType, [sub: AccountId32, main: AccountId32, deposit: u128], {
                sub: AccountId32;
                main: AccountId32;
                deposit: u128;
            }>;
            /**
             * A sub-identity was cleared, and the given deposit repatriated from the
             * main identity account to the sub-identity account.
             **/
            SubIdentityRevoked: AugmentedEvent<ApiType, [sub: AccountId32, main: AccountId32, deposit: u128], {
                sub: AccountId32;
                main: AccountId32;
                deposit: u128;
            }>;
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
        maintenance: {
            /**
             * Maintenance mode has been switched off
             **/
            MaintenanceModeSwitchedOff: AugmentedEvent<ApiType, [AccountId32]>;
            /**
             * Maintenance mode has been switched on
             **/
            MaintenanceModeSwitchedOn: AugmentedEvent<ApiType, [AccountId32]>;
            /**
             * Upgradablilty in maintenance mode has been switched off
             **/
            UpgradabilityInMaintenanceModeSwitchedOff: AugmentedEvent<ApiType, [AccountId32]>;
            /**
             * Upgradablilty in maintenance mode has been switched on
             **/
            UpgradabilityInMaintenanceModeSwitchedOn: AugmentedEvent<ApiType, [AccountId32]>;
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
            Sent: AugmentedEvent<ApiType, [to: XcmV3MultiLocation, message: XcmV3Xcm], {
                to: XcmV3MultiLocation;
                message: XcmV3Xcm;
            }>;
            /**
             * Generic event
             **/
            [key: string]: AugmentedEvent<ApiType>;
        };
        parachainStaking: {
            /**
             * An agggregator's metadata has been updated
             **/
            AggregatorMetadataUpdated: AugmentedEvent<ApiType, [AccountId32]>;
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
             * A candidate updated aggregator
             **/
            CandidateAggregatorUpdated: AugmentedEvent<ApiType, [AccountId32, Option<AccountId32>]>;
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
             * Notify about reward periods that has been paid (collator, payout rounds, any rewards left)
             **/
            CollatorRewardsDistributed: AugmentedEvent<ApiType, [AccountId32, ParachainStakingPayoutRounds]>;
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
             * Session index, Delegator, Collator, Due reward (as per counted delegation for collator)
             **/
            DelegatorDueReward: AugmentedEvent<ApiType, [u32, AccountId32, AccountId32, u128]>;
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
            Rewarded: AugmentedEvent<ApiType, [u32, AccountId32, u128]>;
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
            DownwardMessagesProcessed: AugmentedEvent<ApiType, [weightUsed: SpWeightsWeightV2Weight, dmqHead: H256], {
                weightUsed: SpWeightsWeightV2Weight;
                dmqHead: H256;
            }>;
            /**
             * Some downward messages have been received and will be processed.
             **/
            DownwardMessagesReceived: AugmentedEvent<ApiType, [count: u32], {
                count: u32;
            }>;
            /**
             * An upgrade has been authorized.
             **/
            UpgradeAuthorized: AugmentedEvent<ApiType, [codeHash: H256], {
                codeHash: H256;
            }>;
            /**
             * An upward message was sent to the relay chain.
             **/
            UpwardMessageSent: AugmentedEvent<ApiType, [messageHash: Option<U8aFixed>], {
                messageHash: Option<U8aFixed>;
            }>;
            /**
             * The validation function was applied as of the contained relay chain block number.
             **/
            ValidationFunctionApplied: AugmentedEvent<ApiType, [relayChainBlockNum: u32], {
                relayChainBlockNum: u32;
            }>;
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
             * Some assets have been claimed from an asset trap
             *
             * \[ hash, origin, assets \]
             **/
            AssetsClaimed: AugmentedEvent<ApiType, [H256, XcmV3MultiLocation, XcmVersionedMultiAssets]>;
            /**
             * Some assets have been placed in an asset trap.
             *
             * \[ hash, origin, assets \]
             **/
            AssetsTrapped: AugmentedEvent<ApiType, [H256, XcmV3MultiLocation, XcmVersionedMultiAssets]>;
            /**
             * Execution of an XCM message was attempted.
             *
             * \[ outcome \]
             **/
            Attempted: AugmentedEvent<ApiType, [XcmV3TraitsOutcome]>;
            /**
             * Fees were paid from a location for an operation (often for using `SendXcm`).
             *
             * \[ paying location, fees \]
             **/
            FeesPaid: AugmentedEvent<ApiType, [XcmV3MultiLocation, XcmV3MultiassetMultiAssets]>;
            /**
             * Expected query response has been received but the querier location of the response does
             * not match the expected. The query remains registered for a later, valid, response to
             * be received and acted upon.
             *
             * \[ origin location, id, expected querier, maybe actual querier \]
             **/
            InvalidQuerier: AugmentedEvent<ApiType, [XcmV3MultiLocation, u64, XcmV3MultiLocation, Option<XcmV3MultiLocation>]>;
            /**
             * Expected query response has been received but the expected querier location placed in
             * storage by this runtime previously cannot be decoded. The query remains registered.
             *
             * This is unexpected (since a location placed in storage in a previously executing
             * runtime should be readable prior to query timeout) and dangerous since the possibly
             * valid response will be dropped. Manual governance intervention is probably going to be
             * needed.
             *
             * \[ origin location, id \]
             **/
            InvalidQuerierVersion: AugmentedEvent<ApiType, [XcmV3MultiLocation, u64]>;
            /**
             * Expected query response has been received but the origin location of the response does
             * not match that expected. The query remains registered for a later, valid, response to
             * be received and acted upon.
             *
             * \[ origin location, id, expected location \]
             **/
            InvalidResponder: AugmentedEvent<ApiType, [XcmV3MultiLocation, u64, Option<XcmV3MultiLocation>]>;
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
            InvalidResponderVersion: AugmentedEvent<ApiType, [XcmV3MultiLocation, u64]>;
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
            NotifyOverweight: AugmentedEvent<ApiType, [u64, u8, u8, SpWeightsWeightV2Weight, SpWeightsWeightV2Weight]>;
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
            NotifyTargetSendFail: AugmentedEvent<ApiType, [XcmV3MultiLocation, u64, XcmV3TraitsError]>;
            /**
             * Query response has been received and is ready for taking with `take_response`. There is
             * no registered notification call.
             *
             * \[ id, response \]
             **/
            ResponseReady: AugmentedEvent<ApiType, [u64, XcmV3Response]>;
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
            Sent: AugmentedEvent<ApiType, [XcmV3MultiLocation, XcmV3MultiLocation, XcmV3Xcm]>;
            /**
             * The supported version of a location has been changed. This might be through an
             * automatic notification or a manual intervention.
             *
             * \[ location, XCM version \]
             **/
            SupportedVersionChanged: AugmentedEvent<ApiType, [XcmV3MultiLocation, u32]>;
            /**
             * Query response received which does not match a registered query. This may be because a
             * matching query was never registered, it may be because it is a duplicate response, or
             * because the query timed out.
             *
             * \[ origin location, id \]
             **/
            UnexpectedResponse: AugmentedEvent<ApiType, [XcmV3MultiLocation, u64]>;
            /**
             * An XCM version change notification message has been attempted to be sent.
             *
             * The cost of sending it (borne by the chain) is included.
             *
             * \[ destination, result, cost \]
             **/
            VersionChangeNotified: AugmentedEvent<ApiType, [XcmV3MultiLocation, u32, XcmV3MultiassetMultiAssets]>;
            /**
             * We have requested that a remote chain sends us XCM version change notifications.
             *
             * \[ destination location, cost \]
             **/
            VersionNotifyRequested: AugmentedEvent<ApiType, [XcmV3MultiLocation, XcmV3MultiassetMultiAssets]>;
            /**
             * A remote has requested XCM version change notification from us and we have honored it.
             * A version information message is sent to them and its cost is included.
             *
             * \[ destination location, cost \]
             **/
            VersionNotifyStarted: AugmentedEvent<ApiType, [XcmV3MultiLocation, XcmV3MultiassetMultiAssets]>;
            /**
             * We have requested that a remote chain stops sending us XCM version change notifications.
             *
             * \[ destination location, cost \]
             **/
            VersionNotifyUnrequested: AugmentedEvent<ApiType, [XcmV3MultiLocation, XcmV3MultiassetMultiAssets]>;
            /**
             * Generic event
             **/
            [key: string]: AugmentedEvent<ApiType>;
        };
        proofOfStake: {
            LiquidityActivated: AugmentedEvent<ApiType, [AccountId32, u32, u128]>;
            LiquidityDeactivated: AugmentedEvent<ApiType, [AccountId32, u32, u128]>;
            PoolPromotionUpdated: AugmentedEvent<ApiType, [u32, Option<u8>]>;
            RewardsClaimed: AugmentedEvent<ApiType, [AccountId32, u32, u128]>;
            /**
             * Generic event
             **/
            [key: string]: AugmentedEvent<ApiType>;
        };
        proxy: {
            /**
             * An announcement was placed to make a call in the future.
             **/
            Announced: AugmentedEvent<ApiType, [real: AccountId32, proxy: AccountId32, callHash: H256], {
                real: AccountId32;
                proxy: AccountId32;
                callHash: H256;
            }>;
            /**
             * A proxy was added.
             **/
            ProxyAdded: AugmentedEvent<ApiType, [delegator: AccountId32, delegatee: AccountId32, proxyType: CommonRuntimeConfigPalletProxyProxyType, delay: u32], {
                delegator: AccountId32;
                delegatee: AccountId32;
                proxyType: CommonRuntimeConfigPalletProxyProxyType;
                delay: u32;
            }>;
            /**
             * A proxy was executed correctly, with the given.
             **/
            ProxyExecuted: AugmentedEvent<ApiType, [result: Result<Null, SpRuntimeDispatchError>], {
                result: Result<Null, SpRuntimeDispatchError>;
            }>;
            /**
             * A proxy was removed.
             **/
            ProxyRemoved: AugmentedEvent<ApiType, [delegator: AccountId32, delegatee: AccountId32, proxyType: CommonRuntimeConfigPalletProxyProxyType, delay: u32], {
                delegator: AccountId32;
                delegatee: AccountId32;
                proxyType: CommonRuntimeConfigPalletProxyProxyType;
                delay: u32;
            }>;
            /**
             * A pure account has been created by new proxy with given
             * disambiguation index and proxy type.
             **/
            PureCreated: AugmentedEvent<ApiType, [pure: AccountId32, who: AccountId32, proxyType: CommonRuntimeConfigPalletProxyProxyType, disambiguationIndex: u16], {
                pure: AccountId32;
                who: AccountId32;
                proxyType: CommonRuntimeConfigPalletProxyProxyType;
                disambiguationIndex: u16;
            }>;
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
            NewSession: AugmentedEvent<ApiType, [sessionIndex: u32], {
                sessionIndex: u32;
            }>;
            /**
             * Generic event
             **/
            [key: string]: AugmentedEvent<ApiType>;
        };
        sudo: {
            /**
             * The \[sudoer\] just switched identity; the old key is supplied if one existed.
             **/
            KeyChanged: AugmentedEvent<ApiType, [oldSudoer: Option<AccountId32>], {
                oldSudoer: Option<AccountId32>;
            }>;
            /**
             * A sudo just took place. \[result\]
             **/
            Sudid: AugmentedEvent<ApiType, [sudoResult: Result<Null, SpRuntimeDispatchError>], {
                sudoResult: Result<Null, SpRuntimeDispatchError>;
            }>;
            /**
             * A sudo just took place. \[result\]
             **/
            SudoAsDone: AugmentedEvent<ApiType, [sudoResult: Result<Null, SpRuntimeDispatchError>], {
                sudoResult: Result<Null, SpRuntimeDispatchError>;
            }>;
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
            ExtrinsicFailed: AugmentedEvent<ApiType, [dispatchError: SpRuntimeDispatchError, dispatchInfo: FrameSupportDispatchDispatchInfo], {
                dispatchError: SpRuntimeDispatchError;
                dispatchInfo: FrameSupportDispatchDispatchInfo;
            }>;
            /**
             * An extrinsic completed successfully.
             **/
            ExtrinsicSuccess: AugmentedEvent<ApiType, [dispatchInfo: FrameSupportDispatchDispatchInfo], {
                dispatchInfo: FrameSupportDispatchDispatchInfo;
            }>;
            /**
             * An account was reaped.
             **/
            KilledAccount: AugmentedEvent<ApiType, [account: AccountId32], {
                account: AccountId32;
            }>;
            /**
             * A new account was created.
             **/
            NewAccount: AugmentedEvent<ApiType, [account: AccountId32], {
                account: AccountId32;
            }>;
            /**
             * On on-chain remark happened.
             **/
            Remarked: AugmentedEvent<ApiType, [sender: AccountId32, hash_: H256], {
                sender: AccountId32;
                hash_: H256;
            }>;
            /**
             * On stored txs
             **/
            TxsEnqueued: AugmentedEvent<ApiType, [count: u64], {
                count: u64;
            }>;
            /**
             * Generic event
             **/
            [key: string]: AugmentedEvent<ApiType>;
        };
        tokens: {
            /**
             * A balance was set by root.
             **/
            BalanceSet: AugmentedEvent<ApiType, [currencyId: u32, who: AccountId32, free: u128, reserved: u128], {
                currencyId: u32;
                who: AccountId32;
                free: u128;
                reserved: u128;
            }>;
            /**
             * Deposited some balance into an account
             **/
            Deposited: AugmentedEvent<ApiType, [currencyId: u32, who: AccountId32, amount: u128], {
                currencyId: u32;
                who: AccountId32;
                amount: u128;
            }>;
            /**
             * An account was removed whose balance was non-zero but below
             * ExistentialDeposit, resulting in an outright loss.
             **/
            DustLost: AugmentedEvent<ApiType, [currencyId: u32, who: AccountId32, amount: u128], {
                currencyId: u32;
                who: AccountId32;
                amount: u128;
            }>;
            /**
             * An account was created with some free balance.
             **/
            Endowed: AugmentedEvent<ApiType, [currencyId: u32, who: AccountId32, amount: u128], {
                currencyId: u32;
                who: AccountId32;
                amount: u128;
            }>;
            /**
             * A token was issued.
             **/
            Issued: AugmentedEvent<ApiType, [u32, AccountId32, u128]>;
            /**
             * Some free balance was locked.
             **/
            Locked: AugmentedEvent<ApiType, [currencyId: u32, who: AccountId32, amount: u128], {
                currencyId: u32;
                who: AccountId32;
                amount: u128;
            }>;
            /**
             * Some locked funds were unlocked
             **/
            LockRemoved: AugmentedEvent<ApiType, [lockId: U8aFixed, currencyId: u32, who: AccountId32], {
                lockId: U8aFixed;
                currencyId: u32;
                who: AccountId32;
            }>;
            /**
             * Some funds are locked
             **/
            LockSet: AugmentedEvent<ApiType, [lockId: U8aFixed, currencyId: u32, who: AccountId32, amount: u128], {
                lockId: U8aFixed;
                currencyId: u32;
                who: AccountId32;
                amount: u128;
            }>;
            /**
             * A token was minted.
             **/
            Minted: AugmentedEvent<ApiType, [u32, AccountId32, u128]>;
            /**
             * Some balance was reserved (moved from free to reserved).
             **/
            Reserved: AugmentedEvent<ApiType, [currencyId: u32, who: AccountId32, amount: u128], {
                currencyId: u32;
                who: AccountId32;
                amount: u128;
            }>;
            /**
             * Some reserved balance was repatriated (moved from reserved to
             * another account).
             **/
            ReserveRepatriated: AugmentedEvent<ApiType, [currencyId: u32, from: AccountId32, to: AccountId32, amount: u128, status: FrameSupportTokensMiscBalanceStatus], {
                currencyId: u32;
                from: AccountId32;
                to: AccountId32;
                amount: u128;
                status: FrameSupportTokensMiscBalanceStatus;
            }>;
            /**
             * Some balances were slashed (e.g. due to mis-behavior)
             **/
            Slashed: AugmentedEvent<ApiType, [currencyId: u32, who: AccountId32, freeAmount: u128, reservedAmount: u128], {
                currencyId: u32;
                who: AccountId32;
                freeAmount: u128;
                reservedAmount: u128;
            }>;
            /**
             * The total issuance of an currency has been set
             **/
            TotalIssuanceSet: AugmentedEvent<ApiType, [currencyId: u32, amount: u128], {
                currencyId: u32;
                amount: u128;
            }>;
            /**
             * Transfer succeeded.
             **/
            Transfer: AugmentedEvent<ApiType, [currencyId: u32, from: AccountId32, to: AccountId32, amount: u128], {
                currencyId: u32;
                from: AccountId32;
                to: AccountId32;
                amount: u128;
            }>;
            /**
             * Some locked balance was freed.
             **/
            Unlocked: AugmentedEvent<ApiType, [currencyId: u32, who: AccountId32, amount: u128], {
                currencyId: u32;
                who: AccountId32;
                amount: u128;
            }>;
            /**
             * Some balance was unreserved (moved from reserved to free).
             **/
            Unreserved: AugmentedEvent<ApiType, [currencyId: u32, who: AccountId32, amount: u128], {
                currencyId: u32;
                who: AccountId32;
                amount: u128;
            }>;
            /**
             * Some balances were withdrawn (e.g. pay for transaction fee)
             **/
            Withdrawn: AugmentedEvent<ApiType, [currencyId: u32, who: AccountId32, amount: u128], {
                currencyId: u32;
                who: AccountId32;
                amount: u128;
            }>;
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
            TransactionFeePaid: AugmentedEvent<ApiType, [who: AccountId32, actualFee: u128, tip: u128], {
                who: AccountId32;
                actualFee: u128;
                tip: u128;
            }>;
            /**
             * Generic event
             **/
            [key: string]: AugmentedEvent<ApiType>;
        };
        treasury: {
            /**
             * Some funds have been allocated.
             **/
            Awarded: AugmentedEvent<ApiType, [proposalIndex: u32, award: u128, account: AccountId32], {
                proposalIndex: u32;
                award: u128;
                account: AccountId32;
            }>;
            /**
             * Some of our funds have been burnt.
             **/
            Burnt: AugmentedEvent<ApiType, [burntFunds: u128], {
                burntFunds: u128;
            }>;
            /**
             * Some funds have been deposited.
             **/
            Deposit: AugmentedEvent<ApiType, [value: u128], {
                value: u128;
            }>;
            /**
             * New proposal.
             **/
            Proposed: AugmentedEvent<ApiType, [proposalIndex: u32], {
                proposalIndex: u32;
            }>;
            /**
             * A proposal was rejected; funds were slashed.
             **/
            Rejected: AugmentedEvent<ApiType, [proposalIndex: u32, slashed: u128], {
                proposalIndex: u32;
                slashed: u128;
            }>;
            /**
             * Spending has finished; this is the amount that rolls over until next spend.
             **/
            Rollover: AugmentedEvent<ApiType, [rolloverBalance: u128], {
                rolloverBalance: u128;
            }>;
            /**
             * A new spend proposal has been approved.
             **/
            SpendApproved: AugmentedEvent<ApiType, [proposalIndex: u32, amount: u128, beneficiary: AccountId32], {
                proposalIndex: u32;
                amount: u128;
                beneficiary: AccountId32;
            }>;
            /**
             * We have ended a spend period and will now allocate funds.
             **/
            Spending: AugmentedEvent<ApiType, [budgetRemaining: u128], {
                budgetRemaining: u128;
            }>;
            /**
             * The inactive funds of the pallet have been updated.
             **/
            UpdatedInactive: AugmentedEvent<ApiType, [reactivated: u128, deactivated: u128], {
                reactivated: u128;
                deactivated: u128;
            }>;
            /**
             * Generic event
             **/
            [key: string]: AugmentedEvent<ApiType>;
        };
        unknownTokens: {
            /**
             * Deposit success.
             **/
            Deposited: AugmentedEvent<ApiType, [asset: XcmV3MultiAsset, who: XcmV3MultiLocation], {
                asset: XcmV3MultiAsset;
                who: XcmV3MultiLocation;
            }>;
            /**
             * Withdraw success.
             **/
            Withdrawn: AugmentedEvent<ApiType, [asset: XcmV3MultiAsset, who: XcmV3MultiLocation], {
                asset: XcmV3MultiAsset;
                who: XcmV3MultiLocation;
            }>;
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
            BatchInterrupted: AugmentedEvent<ApiType, [index: u32, error: SpRuntimeDispatchError], {
                index: u32;
                error: SpRuntimeDispatchError;
            }>;
            /**
             * A call was dispatched.
             **/
            DispatchedAs: AugmentedEvent<ApiType, [result: Result<Null, SpRuntimeDispatchError>], {
                result: Result<Null, SpRuntimeDispatchError>;
            }>;
            /**
             * A single item within a Batch of dispatches has completed with no error.
             **/
            ItemCompleted: AugmentedEvent<ApiType, []>;
            /**
             * A single item within a Batch of dispatches has completed with error.
             **/
            ItemFailed: AugmentedEvent<ApiType, [error: SpRuntimeDispatchError], {
                error: SpRuntimeDispatchError;
            }>;
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
            BadFormat: AugmentedEvent<ApiType, [messageHash: Option<U8aFixed>], {
                messageHash: Option<U8aFixed>;
            }>;
            /**
             * Bad XCM version used.
             **/
            BadVersion: AugmentedEvent<ApiType, [messageHash: Option<U8aFixed>], {
                messageHash: Option<U8aFixed>;
            }>;
            /**
             * Some XCM failed.
             **/
            Fail: AugmentedEvent<ApiType, [messageHash: Option<U8aFixed>, error: XcmV3TraitsError, weight: SpWeightsWeightV2Weight], {
                messageHash: Option<U8aFixed>;
                error: XcmV3TraitsError;
                weight: SpWeightsWeightV2Weight;
            }>;
            /**
             * An XCM exceeded the individual message weight budget.
             **/
            OverweightEnqueued: AugmentedEvent<ApiType, [sender: u32, sentAt: u32, index: u64, required: SpWeightsWeightV2Weight], {
                sender: u32;
                sentAt: u32;
                index: u64;
                required: SpWeightsWeightV2Weight;
            }>;
            /**
             * An XCM from the overweight queue was executed with the given actual weight used.
             **/
            OverweightServiced: AugmentedEvent<ApiType, [index: u64, used: SpWeightsWeightV2Weight], {
                index: u64;
                used: SpWeightsWeightV2Weight;
            }>;
            /**
             * Some XCM was executed ok.
             **/
            Success: AugmentedEvent<ApiType, [messageHash: Option<U8aFixed>, weight: SpWeightsWeightV2Weight], {
                messageHash: Option<U8aFixed>;
                weight: SpWeightsWeightV2Weight;
            }>;
            /**
             * An HRMP message was sent to a sibling parachain.
             **/
            XcmpMessageSent: AugmentedEvent<ApiType, [messageHash: Option<U8aFixed>], {
                messageHash: Option<U8aFixed>;
            }>;
            /**
             * Generic event
             **/
            [key: string]: AugmentedEvent<ApiType>;
        };
        xTokens: {
            /**
             * Transferred `MultiAsset` with fee.
             **/
            TransferredMultiAssets: AugmentedEvent<ApiType, [sender: AccountId32, assets: XcmV3MultiassetMultiAssets, fee: XcmV3MultiAsset, dest: XcmV3MultiLocation], {
                sender: AccountId32;
                assets: XcmV3MultiassetMultiAssets;
                fee: XcmV3MultiAsset;
                dest: XcmV3MultiLocation;
            }>;
            /**
             * Generic event
             **/
            [key: string]: AugmentedEvent<ApiType>;
        };
        xyk: {
            AssetsSwapped: AugmentedEvent<ApiType, [AccountId32, Vec<u32>, u128, u128]>;
            BuyAssetFailedDueToSlippage: AugmentedEvent<ApiType, [AccountId32, u32, u128, u32, u128, u128]>;
            LiquidityActivated: AugmentedEvent<ApiType, [AccountId32, u32, u128]>;
            LiquidityBurned: AugmentedEvent<ApiType, [AccountId32, u32, u128, u32, u128, u32, u128]>;
            LiquidityDeactivated: AugmentedEvent<ApiType, [AccountId32, u32, u128]>;
            LiquidityMinted: AugmentedEvent<ApiType, [AccountId32, u32, u128, u32, u128, u32, u128]>;
            MultiSwapAssetFailedOnAtomicSwap: AugmentedEvent<ApiType, [AccountId32, Vec<u32>, u128, SpRuntimeModuleError]>;
            PoolCreated: AugmentedEvent<ApiType, [AccountId32, u32, u128, u32, u128]>;
            PoolPromotionUpdated: AugmentedEvent<ApiType, [u32, Option<u8>]>;
            RewardsClaimed: AugmentedEvent<ApiType, [AccountId32, u32, u128]>;
            SellAssetFailedDueToSlippage: AugmentedEvent<ApiType, [AccountId32, u32, u128, u32, u128, u128]>;
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
             * Maps a multilocation to an asset id - useful when processing xcm
             * messages.
             **/
            locationToAssetId: AugmentedQuery<ApiType, (arg: XcmV3MultiLocation | {
                parents?: any;
                interior?: any;
            } | string | Uint8Array) => Observable<Option<u32>>, [XcmV3MultiLocation]> & QueryableStorageEntry<ApiType, [XcmV3MultiLocation]>;
            /**
             * The metadata of an asset, indexed by asset id.
             **/
            metadata: AugmentedQuery<ApiType, (arg: u32 | AnyNumber | Uint8Array) => Observable<Option<OrmlTraitsAssetRegistryAssetMetadata>>, [u32]> & QueryableStorageEntry<ApiType, [u32]>;
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
             * Generic query
             **/
            [key: string]: QueryableStorageEntry<ApiType>;
        };
        bootstrap: {
            /**
             * Currently bootstraped pair of tokens representaed as [ `first_token_id`, `second_token_id`]
             **/
            activePair: AugmentedQuery<ApiType, () => Observable<Option<ITuple<[u32, u32]>>>, []> & QueryableStorageEntry<ApiType, []>;
            archivedBootstrap: AugmentedQuery<ApiType, () => Observable<Vec<ITuple<[u32, u32, u32, ITuple<[u128, u128]>]>>>, []> & QueryableStorageEntry<ApiType, []>;
            /**
             * Active bootstrap parameters
             **/
            bootstrapSchedule: AugmentedQuery<ApiType, () => Observable<Option<ITuple<[u32, u32, u32, ITuple<[u128, u128]>]>>>, []> & QueryableStorageEntry<ApiType, []>;
            /**
             * Maps ([`frame_system::Config::AccountId`], [`TokenId`] ) -> [`Balance`] - where [`TokeinId`] is id of the token that user participated with. This storage item is used to identify how much liquidity tokens has been claim by the user. If user participated with 2 tokens there are two entries associated with given account (`Address`, `first_token_id`) and (`Address`, `second_token_id`)
             **/
            claimedRewards: AugmentedQuery<ApiType, (arg1: AccountId32 | string | Uint8Array, arg2: u32 | AnyNumber | Uint8Array) => Observable<u128>, [AccountId32, u32]> & QueryableStorageEntry<ApiType, [AccountId32, u32]>;
            mintedLiquidity: AugmentedQuery<ApiType, () => Observable<ITuple<[u32, u128]>>, []> & QueryableStorageEntry<ApiType, []>;
            /**
             * Current state of bootstrap as [`BootstrapPhase`]
             **/
            phase: AugmentedQuery<ApiType, () => Observable<PalletBootstrapBootstrapPhase>, []> & QueryableStorageEntry<ApiType, []>;
            /**
             * Wheter to automatically promote the pool after [`BootstrapPhase::PublicPhase`] or not.
             **/
            promoteBootstrapPool: AugmentedQuery<ApiType, () => Observable<bool>, []> & QueryableStorageEntry<ApiType, []>;
            /**
             * List of accouts that provisioned funds to bootstrap and has not claimed liquidity tokens yet
             **/
            provisionAccounts: AugmentedQuery<ApiType, (arg: AccountId32 | string | Uint8Array) => Observable<Option<Null>>, [AccountId32]> & QueryableStorageEntry<ApiType, [AccountId32]>;
            /**
             * maps ([`frame_system::Config::AccountId`], [`TokenId`]) -> [`Balance`] - identifies how much tokens did account provisioned in active bootstrap
             **/
            provisions: AugmentedQuery<ApiType, (arg1: AccountId32 | string | Uint8Array, arg2: u32 | AnyNumber | Uint8Array) => Observable<u128>, [AccountId32, u32]> & QueryableStorageEntry<ApiType, [AccountId32, u32]>;
            /**
             * Total sum of provisions of `first` and `second` token in active bootstrap
             **/
            valuations: AugmentedQuery<ApiType, () => Observable<ITuple<[u128, u128]>>, []> & QueryableStorageEntry<ApiType, []>;
            /**
             * maps ([`frame_system::Config::AccountId`], [`TokenId`]) -> [`Balance`] - identifies how much vested tokens did account provisioned in active bootstrap
             **/
            vestedProvisions: AugmentedQuery<ApiType, (arg1: AccountId32 | string | Uint8Array, arg2: u32 | AnyNumber | Uint8Array) => Observable<ITuple<[u128, u128, u128]>>, [AccountId32, u32]> & QueryableStorageEntry<ApiType, [AccountId32, u32]>;
            /**
             * list ([`Vec<AccountId>`]) of whitelisted accounts allowed to participate in [`BootstrapPhase::Whitelist`] phase
             **/
            whitelistedAccount: AugmentedQuery<ApiType, (arg: AccountId32 | string | Uint8Array) => Observable<Null>, [AccountId32]> & QueryableStorageEntry<ApiType, [AccountId32]>;
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
             * Block when the proposal was proposed.
             **/
            proposalProposedTime: AugmentedQuery<ApiType, (arg: H256 | string | Uint8Array) => Observable<Option<u32>>, [H256]> & QueryableStorageEntry<ApiType, [H256]>;
            /**
             * The hashes of the active proposals.
             **/
            proposals: AugmentedQuery<ApiType, () => Observable<Vec<H256>>, []> & QueryableStorageEntry<ApiType, []>;
            /**
             * Votes on a given proposal, if it is ongoing.
             **/
            voting: AugmentedQuery<ApiType, (arg: H256 | string | Uint8Array) => Observable<Option<PalletCollectiveMangataVotes>>, [H256]> & QueryableStorageEntry<ApiType, [H256]>;
            /**
             * Generic query
             **/
            [key: string]: QueryableStorageEntry<ApiType>;
        };
        crowdloan: {
            accountsPayable: AugmentedQuery<ApiType, (arg1: u32 | AnyNumber | Uint8Array, arg2: AccountId32 | string | Uint8Array) => Observable<Option<PalletCrowdloanRewardsRewardInfo>>, [u32, AccountId32]> & QueryableStorageEntry<ApiType, [u32, AccountId32]>;
            claimedRelayChainIds: AugmentedQuery<ApiType, (arg1: u32 | AnyNumber | Uint8Array, arg2: AccountId32 | string | Uint8Array) => Observable<Option<Null>>, [u32, AccountId32]> & QueryableStorageEntry<ApiType, [u32, AccountId32]>;
            crowdloanAllocation: AugmentedQuery<ApiType, (arg: u32 | AnyNumber | Uint8Array) => Observable<u128>, [u32]> & QueryableStorageEntry<ApiType, [u32]>;
            /**
             * Id of current crowdloan rewards distribution, automatically incremented by
             * [`Pallet::<T>::complete_initialization`]
             **/
            crowdloanId: AugmentedQuery<ApiType, () => Observable<u32>, []> & QueryableStorageEntry<ApiType, []>;
            crowdloanPeriod: AugmentedQuery<ApiType, (arg: u32 | AnyNumber | Uint8Array) => Observable<Option<ITuple<[u32, u32]>>>, [u32]> & QueryableStorageEntry<ApiType, [u32]>;
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
            unassociatedContributions: AugmentedQuery<ApiType, (arg1: u32 | AnyNumber | Uint8Array, arg2: AccountId32 | string | Uint8Array) => Observable<Option<PalletCrowdloanRewardsRewardInfo>>, [u32, AccountId32]> & QueryableStorageEntry<ApiType, [u32, AccountId32]>;
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
             * Counter for the related counted storage map
             **/
            counterForOverweight: AugmentedQuery<ApiType, () => Observable<u32>, []> & QueryableStorageEntry<ApiType, []>;
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
        feeLock: {
            accountFeeLockData: AugmentedQuery<ApiType, (arg: AccountId32 | string | Uint8Array) => Observable<PalletFeeLockAccountFeeLockDataInfo>, [AccountId32]> & QueryableStorageEntry<ApiType, [AccountId32]>;
            feeLockMetadata: AugmentedQuery<ApiType, () => Observable<Option<PalletFeeLockFeeLockMetadataInfo>>, []> & QueryableStorageEntry<ApiType, []>;
            feeLockMetadataQeueuePosition: AugmentedQuery<ApiType, (arg: AccountId32 | string | Uint8Array) => Observable<Option<u128>>, [AccountId32]> & QueryableStorageEntry<ApiType, [AccountId32]>;
            unlockQueue: AugmentedQuery<ApiType, (arg: u128 | AnyNumber | Uint8Array) => Observable<Option<AccountId32>>, [u128]> & QueryableStorageEntry<ApiType, [u128]>;
            unlockQueueBegin: AugmentedQuery<ApiType, () => Observable<u128>, []> & QueryableStorageEntry<ApiType, []>;
            unlockQueueEnd: AugmentedQuery<ApiType, () => Observable<u128>, []> & QueryableStorageEntry<ApiType, []>;
            /**
             * Generic query
             **/
            [key: string]: QueryableStorageEntry<ApiType>;
        };
        identity: {
            /**
             * Information that is pertinent to identify the entity behind an account.
             *
             * TWOX-NOTE: OK ― `AccountId` is a secure hash.
             **/
            identityOf: AugmentedQuery<ApiType, (arg: AccountId32 | string | Uint8Array) => Observable<Option<PalletIdentityRegistration>>, [AccountId32]> & QueryableStorageEntry<ApiType, [AccountId32]>;
            /**
             * The set of registrars. Not expected to get very big as can only be added through a
             * special origin (likely a council motion).
             *
             * The index into this can be cast to `RegistrarIndex` to get a valid value.
             **/
            registrars: AugmentedQuery<ApiType, () => Observable<Vec<Option<PalletIdentityRegistrarInfo>>>, []> & QueryableStorageEntry<ApiType, []>;
            /**
             * Alternative "sub" identities of this account.
             *
             * The first item is the deposit, the second is a vector of the accounts.
             *
             * TWOX-NOTE: OK ― `AccountId` is a secure hash.
             **/
            subsOf: AugmentedQuery<ApiType, (arg: AccountId32 | string | Uint8Array) => Observable<ITuple<[u128, Vec<AccountId32>]>>, [AccountId32]> & QueryableStorageEntry<ApiType, [AccountId32]>;
            /**
             * The super-identity of an alternative "sub" identity together with its name, within that
             * context. If the account is not some other account's sub-identity, then just `None`.
             **/
            superOf: AugmentedQuery<ApiType, (arg: AccountId32 | string | Uint8Array) => Observable<Option<ITuple<[AccountId32, Data]>>>, [AccountId32]> & QueryableStorageEntry<ApiType, [AccountId32]>;
            /**
             * Generic query
             **/
            [key: string]: QueryableStorageEntry<ApiType>;
        };
        issuance: {
            issuanceConfigStore: AugmentedQuery<ApiType, () => Observable<Option<PalletIssuanceIssuanceInfo>>, []> & QueryableStorageEntry<ApiType, []>;
            isTGEFinalized: AugmentedQuery<ApiType, () => Observable<bool>, []> & QueryableStorageEntry<ApiType, []>;
            sessionIssuance: AugmentedQuery<ApiType, (arg: u32 | AnyNumber | Uint8Array) => Observable<Option<ITuple<[u128, u128]>>>, [u32]> & QueryableStorageEntry<ApiType, [u32]>;
            tgeTotal: AugmentedQuery<ApiType, () => Observable<u128>, []> & QueryableStorageEntry<ApiType, []>;
            /**
             * Generic query
             **/
            [key: string]: QueryableStorageEntry<ApiType>;
        };
        maintenance: {
            maintenanceStatus: AugmentedQuery<ApiType, () => Observable<PalletMaintenanceMaintenanceStatusInfo>, []> & QueryableStorageEntry<ApiType, []>;
            /**
             * Generic query
             **/
            [key: string]: QueryableStorageEntry<ApiType>;
        };
        multiPurposeLiquidity: {
            relockStatus: AugmentedQuery<ApiType, (arg1: AccountId32 | string | Uint8Array, arg2: u32 | AnyNumber | Uint8Array) => Observable<Vec<PalletMultipurposeLiquidityRelockStatusInfo>>, [AccountId32, u32]> & QueryableStorageEntry<ApiType, [AccountId32, u32]>;
            reserveStatus: AugmentedQuery<ApiType, (arg1: AccountId32 | string | Uint8Array, arg2: u32 | AnyNumber | Uint8Array) => Observable<PalletMultipurposeLiquidityReserveStatusInfo>, [AccountId32, u32]> & QueryableStorageEntry<ApiType, [AccountId32, u32]>;
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
             * Stores information about approved candidates for aggregation
             **/
            aggregatorMetadata: AugmentedQuery<ApiType, (arg: AccountId32 | string | Uint8Array) => Observable<Option<ParachainStakingAggregatorMetadataType>>, [AccountId32]> & QueryableStorageEntry<ApiType, [AccountId32]>;
            /**
             * Snapshot of collator delegation stake at the start of the round
             **/
            atStake: AugmentedQuery<ApiType, (arg1: u32 | AnyNumber | Uint8Array, arg2: AccountId32 | string | Uint8Array) => Observable<ParachainStakingCollatorSnapshot>, [u32, AccountId32]> & QueryableStorageEntry<ApiType, [u32, AccountId32]>;
            /**
             * Points for each collator per round
             **/
            awardedPts: AugmentedQuery<ApiType, (arg1: u32 | AnyNumber | Uint8Array, arg2: AccountId32 | string | Uint8Array) => Observable<u32>, [u32, AccountId32]> & QueryableStorageEntry<ApiType, [u32, AccountId32]>;
            /**
             * Maps collator to its aggregator
             **/
            candidateAggregator: AugmentedQuery<ApiType, () => Observable<BTreeMap<AccountId32, AccountId32>>, []> & QueryableStorageEntry<ApiType, []>;
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
             * Stored once per session, maps aggregator to list of assosiated candidates
             **/
            roundAggregatorInfo: AugmentedQuery<ApiType, (arg: u32 | AnyNumber | Uint8Array) => Observable<Option<BTreeMap<AccountId32, BTreeMap<AccountId32, u128>>>>, [u32]> & QueryableStorageEntry<ApiType, [u32]>;
            /**
             * Stores information about rewards per each session
             **/
            roundCollatorRewardInfo: AugmentedQuery<ApiType, (arg1: AccountId32 | string | Uint8Array, arg2: u32 | AnyNumber | Uint8Array) => Observable<Option<ParachainStakingRoundCollatorRewardInfoType>>, [AccountId32, u32]> & QueryableStorageEntry<ApiType, [AccountId32, u32]>;
            /**
             * The collator candidates selected for the current round
             * Block authors selection algorithm details [`Pallet::select_top_candidates`]
             **/
            selectedCandidates: AugmentedQuery<ApiType, () => Observable<Vec<AccountId32>>, []> & QueryableStorageEntry<ApiType, []>;
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
            authorizedUpgrade: AugmentedQuery<ApiType, () => Observable<Option<CumulusPalletParachainSystemCodeUpgradeAuthorization>>, []> & QueryableStorageEntry<ApiType, []>;
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
            hostConfiguration: AugmentedQuery<ApiType, () => Observable<Option<PolkadotPrimitivesV2AbridgedHostConfiguration>>, []> & QueryableStorageEntry<ApiType, []>;
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
             * The relay chain block number associated with the last parachain block.
             **/
            lastRelayChainBlockNumber: AugmentedQuery<ApiType, () => Observable<u32>, []> & QueryableStorageEntry<ApiType, []>;
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
             * The state proof for the last relay parent block.
             *
             * This field is meant to be updated each block with the validation data inherent. Therefore,
             * before processing of the inherent, e.g. in `on_initialize` this data may be stale.
             *
             * This data is also absent from the genesis.
             **/
            relayStateProof: AugmentedQuery<ApiType, () => Observable<Option<SpTrieStorageProof>>, []> & QueryableStorageEntry<ApiType, []>;
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
            reservedDmpWeightOverride: AugmentedQuery<ApiType, () => Observable<Option<SpWeightsWeightV2Weight>>, []> & QueryableStorageEntry<ApiType, []>;
            /**
             * The weight we reserve at the beginning of the block for processing XCMP messages. This
             * overrides the amount set in the Config trait.
             **/
            reservedXcmpWeightOverride: AugmentedQuery<ApiType, () => Observable<Option<SpWeightsWeightV2Weight>>, []> & QueryableStorageEntry<ApiType, []>;
            /**
             * An option which indicates if the relay-chain restricts signalling a validation code upgrade.
             * In other words, if this is `Some` and [`NewValidationCode`] is `Some` then the produced
             * candidate will be invalid.
             *
             * This storage item is a mirror of the corresponding value for the current parachain from the
             * relay-chain. This value is ephemeral which means it doesn't hit the storage. This value is
             * set after the inherent.
             **/
            upgradeRestrictionSignal: AugmentedQuery<ApiType, () => Observable<Option<PolkadotPrimitivesV2UpgradeRestriction>>, []> & QueryableStorageEntry<ApiType, []>;
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
            validationData: AugmentedQuery<ApiType, () => Observable<Option<PolkadotPrimitivesV2PersistedValidationData>>, []> & QueryableStorageEntry<ApiType, []>;
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
             * Fungible assets which we know are locked on this chain.
             **/
            lockedFungibles: AugmentedQuery<ApiType, (arg: AccountId32 | string | Uint8Array) => Observable<Option<Vec<ITuple<[u128, XcmVersionedMultiLocation]>>>>, [AccountId32]> & QueryableStorageEntry<ApiType, [AccountId32]>;
            /**
             * The ongoing queries.
             **/
            queries: AugmentedQuery<ApiType, (arg: u64 | AnyNumber | Uint8Array) => Observable<Option<PalletXcmQueryStatus>>, [u64]> & QueryableStorageEntry<ApiType, [u64]>;
            /**
             * The latest available query index.
             **/
            queryCounter: AugmentedQuery<ApiType, () => Observable<u64>, []> & QueryableStorageEntry<ApiType, []>;
            /**
             * Fungible assets which we know are locked on a remote chain.
             **/
            remoteLockedFungibles: AugmentedQuery<ApiType, (arg1: u32 | AnyNumber | Uint8Array, arg2: AccountId32 | string | Uint8Array, arg3: XcmVersionedAssetId | {
                V3: any;
            } | string | Uint8Array) => Observable<Option<PalletXcmRemoteLockedFungibleRecord>>, [u32, AccountId32, XcmVersionedAssetId]> & QueryableStorageEntry<ApiType, [u32, AccountId32, XcmVersionedAssetId]>;
            /**
             * Default version to encode XCM when latest version of destination is unknown. If `None`,
             * then the destinations whose XCM version is unknown are considered unreachable.
             **/
            safeXcmVersion: AugmentedQuery<ApiType, () => Observable<Option<u32>>, []> & QueryableStorageEntry<ApiType, []>;
            /**
             * The Latest versions that we know various locations support.
             **/
            supportedVersion: AugmentedQuery<ApiType, (arg1: u32 | AnyNumber | Uint8Array, arg2: XcmVersionedMultiLocation | {
                V2: any;
            } | {
                V3: any;
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
                V2: any;
            } | {
                V3: any;
            } | string | Uint8Array) => Observable<Option<u64>>, [u32, XcmVersionedMultiLocation]> & QueryableStorageEntry<ApiType, [u32, XcmVersionedMultiLocation]>;
            /**
             * The target locations that are subscribed to our version changes, as well as the most recent
             * of our versions we informed them of.
             **/
            versionNotifyTargets: AugmentedQuery<ApiType, (arg1: u32 | AnyNumber | Uint8Array, arg2: XcmVersionedMultiLocation | {
                V2: any;
            } | {
                V3: any;
            } | string | Uint8Array) => Observable<Option<ITuple<[u64, SpWeightsWeightV2Weight, u32]>>>, [u32, XcmVersionedMultiLocation]> & QueryableStorageEntry<ApiType, [u32, XcmVersionedMultiLocation]>;
            /**
             * Generic query
             **/
            [key: string]: QueryableStorageEntry<ApiType>;
        };
        proofOfStake: {
            /**
             * Stores information about pool weight and accumulated rewards. The accumulated
             * rewards amount is the number of rewards that can be claimed per liquidity
             * token. Here is tracked the number of rewards per liquidity token relationship.
             * Expect larger values when the number of liquidity tokens are smaller.
             **/
            promotedPoolRewards: AugmentedQuery<ApiType, () => Observable<BTreeMap<u32, PalletProofOfStakePromotedPools>>, []> & QueryableStorageEntry<ApiType, []>;
            rewardsInfo: AugmentedQuery<ApiType, (arg1: AccountId32 | string | Uint8Array, arg2: u32 | AnyNumber | Uint8Array) => Observable<PalletProofOfStakeRewardInfo>, [AccountId32, u32]> & QueryableStorageEntry<ApiType, [AccountId32, u32]>;
            totalActivatedLiquidity: AugmentedQuery<ApiType, (arg: u32 | AnyNumber | Uint8Array) => Observable<u128>, [u32]> & QueryableStorageEntry<ApiType, [u32]>;
            /**
             * Generic query
             **/
            [key: string]: QueryableStorageEntry<ApiType>;
        };
        proxy: {
            /**
             * The announcements made by the proxy (key).
             **/
            announcements: AugmentedQuery<ApiType, (arg: AccountId32 | string | Uint8Array) => Observable<ITuple<[Vec<PalletProxyAnnouncement>, u128]>>, [AccountId32]> & QueryableStorageEntry<ApiType, [AccountId32]>;
            /**
             * The set of account proxies. Maps the account which has delegated to the accounts
             * which are being delegated to, together with the amount held on deposit.
             **/
            proxies: AugmentedQuery<ApiType, (arg: AccountId32 | string | Uint8Array) => Observable<ITuple<[Vec<PalletProxyProxyDefinition>, u128]>>, [AccountId32]> & QueryableStorageEntry<ApiType, [AccountId32]>;
            /**
             * Generic query
             **/
            [key: string]: QueryableStorageEntry<ApiType>;
        };
        rootTesting: {
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
            nextKeys: AugmentedQuery<ApiType, (arg: AccountId32 | string | Uint8Array) => Observable<Option<MangataRococoRuntimeSessionKeys>>, [AccountId32]> & QueryableStorageEntry<ApiType, [AccountId32]>;
            /**
             * True if the underlying economic identities or weighting behind the validators
             * has changed in the queued validator set.
             **/
            queuedChanged: AugmentedQuery<ApiType, () => Observable<bool>, []> & QueryableStorageEntry<ApiType, []>;
            /**
             * The queued keys for the next session. When the next session begins, these keys
             * will be used to determine the validator's session keys.
             **/
            queuedKeys: AugmentedQuery<ApiType, () => Observable<Vec<ITuple<[AccountId32, MangataRococoRuntimeSessionKeys]>>>, []> & QueryableStorageEntry<ApiType, []>;
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
             * Map of block numbers to block shuffling seeds
             **/
            blockSeed: AugmentedQuery<ApiType, () => Observable<H256>, []> & QueryableStorageEntry<ApiType, []>;
            /**
             * The current weight for the block.
             **/
            blockWeight: AugmentedQuery<ApiType, () => Observable<FrameSupportDispatchPerDispatchClassWeight>, []> & QueryableStorageEntry<ApiType, []>;
            /**
             * Map of block numbers to block shuffling seeds
             **/
            didStoreTxs: AugmentedQuery<ApiType, () => Observable<bool>, []> & QueryableStorageEntry<ApiType, []>;
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
             * NOTE: The item is unbound and should therefore never be read on chain.
             * It could otherwise inflate the PoV size of a block.
             *
             * Events have a large in-memory size. Box the events to not go out-of-memory
             * just in case someone still reads them from within the runtime.
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
             * Storage queue is used for storing transactions in blockchain itself.
             * Main reason for that storage entry is fact that upon VER block `N` execution it is
             * required to fetch & executed transactions from previous block (`N-1`) but due to origin
             * substrate design blocks & extrinsics are stored in rocksDB database that is not accessible
             * from runtime part of the node (see [Substrate architecture](https://storage.googleapis.com/mangata-docs-node/frame_executive/struct.Executive.html)) what makes it impossible to properly implement block
             * execution logic. As an solution blockchain runtime storage was selected as buffer for txs
             * waiting for execution. Main advantage of such approach is fact that storage state is public
             * so its impossible to manipulate data stored in there. Storage queue is implemented as double
             * buffered queue - to solve problem of rare occasions where due to different reasons some txs
             * that were included in block `N` are not able to be executed in a following block `N+1` (good
             * example is new session hook/event that by design consumes whole block capacity).
             *
             *
             * # Overhead
             * Its worth to notice that storage queue adds only single storage write, as list of all txs
             * is stored as single value (encoded list of txs) maped to single key (block number)
             *
             * # Storage Qeueue interaction
             * There are two ways to interact with storage queue:
             * - enqueuing new txs using [`Pallet::enqueue_txs`] inherent
             * - poping txs from the queue using [`Pallet::pop_txs`] that is exposed throught RuntimeApi
             * call
             **/
            storageQueue: AugmentedQuery<ApiType, () => Observable<Vec<ITuple<[u32, Option<u32>, Vec<ITuple<[Option<AccountId32>, Bytes]>>]>>>, []> & QueryableStorageEntry<ApiType, []>;
            /**
             * Map of block numbers to block shuffling seeds
             **/
            txPrevalidation: AugmentedQuery<ApiType, () => Observable<bool>, []> & QueryableStorageEntry<ApiType, []>;
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
             * Named reserves on some account balances.
             **/
            reserves: AugmentedQuery<ApiType, (arg1: AccountId32 | string | Uint8Array, arg2: u32 | AnyNumber | Uint8Array) => Observable<Vec<OrmlTokensReserveData>>, [AccountId32, u32]> & QueryableStorageEntry<ApiType, [AccountId32, u32]>;
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
            storageVersion: AugmentedQuery<ApiType, () => Observable<PalletTransactionPaymentMangataReleases>, []> & QueryableStorageEntry<ApiType, []>;
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
             * The amount which has been reported as inactive to Currency.
             **/
            deactivated: AugmentedQuery<ApiType, () => Observable<u128>, []> & QueryableStorageEntry<ApiType, []>;
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
            abstractFungibleBalances: AugmentedQuery<ApiType, (arg1: XcmV3MultiLocation | {
                parents?: any;
                interior?: any;
            } | string | Uint8Array, arg2: Bytes | string | Uint8Array) => Observable<u128>, [XcmV3MultiLocation, Bytes]> & QueryableStorageEntry<ApiType, [XcmV3MultiLocation, Bytes]>;
            /**
             * Concrete fungible balances under a given location and a concrete
             * fungible id.
             *
             * double_map: who, asset_id => u128
             **/
            concreteFungibleBalances: AugmentedQuery<ApiType, (arg1: XcmV3MultiLocation | {
                parents?: any;
                interior?: any;
            } | string | Uint8Array, arg2: XcmV3MultiLocation | {
                parents?: any;
                interior?: any;
            } | string | Uint8Array) => Observable<u128>, [XcmV3MultiLocation, XcmV3MultiLocation]> & QueryableStorageEntry<ApiType, [XcmV3MultiLocation, XcmV3MultiLocation]>;
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
             * Counter for the related counted storage map
             **/
            counterForOverweight: AugmentedQuery<ApiType, () => Observable<u32>, []> & QueryableStorageEntry<ApiType, []>;
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
             * Whether or not the XCMP queue is suspended from executing incoming XCMs or not.
             **/
            queueSuspended: AugmentedQuery<ApiType, () => Observable<bool>, []> & QueryableStorageEntry<ApiType, []>;
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
            registerAsset: AugmentedSubmittable<(metadata: OrmlTraitsAssetRegistryAssetMetadata | {
                decimals?: any;
                name?: any;
                symbol?: any;
                existentialDeposit?: any;
                location?: any;
                additional?: any;
            } | string | Uint8Array, assetId: Option<u32> | null | Uint8Array | u32 | AnyNumber) => SubmittableExtrinsic<ApiType>, [OrmlTraitsAssetRegistryAssetMetadata, Option<u32>]>;
            updateAsset: AugmentedSubmittable<(assetId: u32 | AnyNumber | Uint8Array, decimals: Option<u32> | null | Uint8Array | u32 | AnyNumber, name: Option<Bytes> | null | Uint8Array | Bytes | string, symbol: Option<Bytes> | null | Uint8Array | Bytes | string, existentialDeposit: Option<u128> | null | Uint8Array | u128 | AnyNumber, location: Option<Option<XcmVersionedMultiLocation>> | null | Uint8Array | Option<XcmVersionedMultiLocation> | XcmVersionedMultiLocation | {
                V2: any;
            } | {
                V3: any;
            } | string, additional: Option<MangataTypesAssetsCustomMetadata> | null | Uint8Array | MangataTypesAssetsCustomMetadata | {
                xcm?: any;
                xyk?: any;
            } | string) => SubmittableExtrinsic<ApiType>, [u32, Option<u32>, Option<Bytes>, Option<Bytes>, Option<u128>, Option<Option<XcmVersionedMultiLocation>>, Option<MangataTypesAssetsCustomMetadata>]>;
            /**
             * Generic tx
             **/
            [key: string]: SubmittableExtrinsicFunction<ApiType>;
        };
        bootstrap: {
            /**
             * Used to cancel active bootstrap. Can only be called before bootstrap is actually started
             **/
            cancelBootstrap: AugmentedSubmittable<() => SubmittableExtrinsic<ApiType>, []>;
            /**
             * When bootstrap is in [`BootstrapPhase::Finished`] state user can claim his part of liquidity tokens comparing to `claim_liquidity_tokens` when calling `claim_and_activate_liquidity_tokens` tokens will be automatically activated.
             **/
            claimAndActivateLiquidityTokens: AugmentedSubmittable<() => SubmittableExtrinsic<ApiType>, []>;
            /**
             * When bootstrap is in [`BootstrapPhase::Finished`] state user can claim his part of liquidity tokens.
             **/
            claimLiquidityTokens: AugmentedSubmittable<() => SubmittableExtrinsic<ApiType>, []>;
            /**
             * Allows claiming rewards for some account that haven't done that yet. The only difference between
             * calling [`Pallet::claim_liquidity_tokens_for_account`] by some other account and calling [`Pallet::claim_liquidity_tokens`] directly by that account is account that will be charged for transaction fee.
             * # Args:
             * - `other` - account in behalf of which liquidity tokens should be claimed
             **/
            claimLiquidityTokensForAccount: AugmentedSubmittable<(account: AccountId32 | string | Uint8Array, activateRewards: bool | boolean | Uint8Array) => SubmittableExtrinsic<ApiType>, [AccountId32, bool]>;
            /**
             * Used to complete resetting Bootstrap state and prepare it for running another bootstrap.
             * It should be called after pre_finalize has produced the [`Event::BootstrapReadyToBeFinalized`] event.
             **/
            finalize: AugmentedSubmittable<() => SubmittableExtrinsic<ApiType>, []>;
            /**
             * Used to reset Bootstrap state of large storages and prepare it for running another bootstrap.
             * It should be called multiple times until it produces [`Event::BootstrapReadyToBeFinalized`] event.
             *
             * **!!! Cleaning up storage is complex operation and pruning all storage items related to particular
             * bootstrap might not fit in a single block. As a result tx can be rejected !!!**
             **/
            preFinalize: AugmentedSubmittable<() => SubmittableExtrinsic<ApiType>, []>;
            /**
             * Allows for provisioning one of the tokens from currently bootstrapped pair. Can only be called during:
             * - [`BootstrapPhase::Whitelist`]
             * - [`BootstrapPhase::Public`]
             *
             * phases.
             *
             * # Args:
             * - `token_id` - id of the token to provision (should be one of the currently bootstraped pair([`ActivePair`]))
             * - `amount` - amount of the token to provision
             **/
            provision: AugmentedSubmittable<(tokenId: u32 | AnyNumber | Uint8Array, amount: u128 | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [u32, u128]>;
            /**
             * Used for starting/scheduling new bootstrap
             *
             * # Args:
             * - `first_token_id` - first token of the tokens pair
             * - `second_token_id`: second token of the tokens pair
             * - `ido_start` - number of block when bootstrap will be started (people will be allowed to participate)
             * - `whitelist_phase_length`: - length of whitelist phase
             * - `public_phase_lenght`- length of public phase
             * - `promote_bootstrap_pool`- whether liquidity pool created by bootstrap should be promoted
             * - `max_first_to_second_ratio` - represented as (numerator,denominator) - Ratio may be used to limit participations of second token id. Ratio between first and second token needs to be held during whole bootstrap. Whenever user tries to participate (using [`Pallet::provision`] extrinsic) the following conditions is check.
             * ```ignore
             * all previous first participations + first token participations             ratio numerator
             * ----------------------------------------------------------------------- <= ------------------
             * all previous second token participations + second token participations     ratio denominator
             * ```
             * and if it evaluates to `false` extrinsic will fail.
             *
             * **Because of above equation only participations with first token of a bootstrap pair are limited!**
             *
             * # Examples
             * Consider:
             *
             * - user willing to participate 1000 of first token, when:
             * - ratio set during bootstrap schedule is is set to (1/2)
             * - sum of first token participations - 10_000
             * - sum of second token participations - 20_000
             *
             * participation extrinsic will **fail** because ratio condition **is not met**
             * ```ignore
             * 10_000 + 10_000      1
             * --------------- <=  ---
             * 20_000           2
             * ```
             *
             * - user willing to participate 1000 of first token, when:
             * - ratio set during bootstrap schedule is is set to (1/2)
             * - sum of first token participations - 10_000
             * - sum of second token participations - 40_000
             *
             * participation extrinsic will **succeed** because ratio condition **is met**
             * ```ignore
             * 10_000 + 10_000      1
             * --------------- <=  ---
             * 40_000           2
             * ```
             *
             *
             * **If one doesn't want to limit participations in any way, ratio should be set to (u128::MAX,0) - then ratio requirements are always met**
             *
             * ```ignore
             * all previous first participations + first token participations                u128::MAX
             * ----------------------------------------------------------------------- <= ------------------
             * all previous second token participations + second token participations            1
             * ```
             **/
            scheduleBootstrap: AugmentedSubmittable<(firstTokenId: u32 | AnyNumber | Uint8Array, secondTokenId: u32 | AnyNumber | Uint8Array, idoStart: u32 | AnyNumber | Uint8Array, whitelistPhaseLength: Option<u32> | null | Uint8Array | u32 | AnyNumber, publicPhaseLenght: u32 | AnyNumber | Uint8Array, maxFirstToSecondRatio: Option<ITuple<[u128, u128]>> | null | Uint8Array | ITuple<[u128, u128]> | [u128 | AnyNumber | Uint8Array, u128 | AnyNumber | Uint8Array], promoteBootstrapPool: bool | boolean | Uint8Array) => SubmittableExtrinsic<ApiType>, [u32, u32, u32, Option<u32>, u32, Option<ITuple<[u128, u128]>>, bool]>;
            updatePromoteBootstrapPool: AugmentedSubmittable<(promoteBootstrapPool: bool | boolean | Uint8Array) => SubmittableExtrinsic<ApiType>, [bool]>;
            /**
             * Allows for whitelisting accounts, so they can participate in during whitelist phase. The list of
             * account is extended with every subsequent call
             **/
            whitelistAccounts: AugmentedSubmittable<(accounts: Vec<AccountId32> | (AccountId32 | string | Uint8Array)[]) => SubmittableExtrinsic<ApiType>, [Vec<AccountId32>]>;
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
            close: AugmentedSubmittable<(proposalHash: H256 | string | Uint8Array, index: Compact<u32> | AnyNumber | Uint8Array, proposalWeightBound: SpWeightsWeightV2Weight | {
                refTime?: any;
                proofSize?: any;
            } | string | Uint8Array, lengthBound: Compact<u32> | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [H256, Compact<u32>, SpWeightsWeightV2Weight, Compact<u32>]>;
            /**
             * Disapprove a proposal, close, and remove it from the system, regardless of its current
             * state.
             *
             * Must be called by the Root origin or a foundation account.
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
            execute: AugmentedSubmittable<(proposal: Call | IMethod | string | Uint8Array, lengthBound: Compact<u32> | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [Call, Compact<u32>]>;
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
            propose: AugmentedSubmittable<(threshold: Compact<u32> | AnyNumber | Uint8Array, proposal: Call | IMethod | string | Uint8Array, lengthBound: Compact<u32> | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [Compact<u32>, Call, Compact<u32>]>;
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
            setMembers: AugmentedSubmittable<(newMembers: Vec<AccountId32> | (AccountId32 | string | Uint8Array)[], prime: Option<AccountId32> | null | Uint8Array | AccountId32 | string, oldCount: u32 | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [Vec<AccountId32>, Option<AccountId32>, u32]>;
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
             * Collect rewards from particular crowdloan.
             * If crowdloan_id is not set current [`CrowdloanId`] id will be used.
             * Caller is instantly rewarded with [`InitializationPayment`] % of available rewards,
             * remaining funds are locked according to schedule(using `pallet_mangata_vesting` configured
             * by [`Pallet::<T>::complete_initialization`] call.
             **/
            claim: AugmentedSubmittable<(crowdloanId: Option<u32> | null | Uint8Array | u32 | AnyNumber) => SubmittableExtrinsic<ApiType>, [Option<u32>]>;
            /**
             * This extrinsic completes the initialization if some checks are fullfiled. These checks are:
             * -The reward contribution money matches the crowdloan pot
             * -The end vesting block is higher than the init vesting block
             * -The initialization has not complete yet
             **/
            completeInitialization: AugmentedSubmittable<(leaseStartBlock: u32 | AnyNumber | Uint8Array, leaseEndingBlock: u32 | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [u32, u32]>;
            /**
             * Initialize the reward distribution storage. It shortcuts whenever an error is found
             * This does not enforce any checks other than making sure we dont go over funds
             * complete_initialization should perform any additional
             **/
            initializeRewardVec: AugmentedSubmittable<(rewards: Vec<ITuple<[AccountId32, Option<AccountId32>, u128]>> | ([AccountId32 | string | Uint8Array, Option<AccountId32> | null | Uint8Array | AccountId32 | string, u128 | AnyNumber | Uint8Array])[]) => SubmittableExtrinsic<ApiType>, [Vec<ITuple<[AccountId32, Option<AccountId32>, u128]>>]>;
            /**
             * Initialize the reward distribution storage. It shortcuts whenever an error is found
             * Sets crowdloan allocation for:
             * - current round of crowdloan - if it has not been completed (`[Pallet::<T>::complete_initialization]`)
             * - following round of crowdloan rewards payment if previous one has been already
             * completed
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
             **/
            serviceOverweight: AugmentedSubmittable<(index: u64 | AnyNumber | Uint8Array, weightLimit: SpWeightsWeightV2Weight | {
                refTime?: any;
                proofSize?: any;
            } | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [u64, SpWeightsWeightV2Weight]>;
            /**
             * Generic tx
             **/
            [key: string]: SubmittableExtrinsicFunction<ApiType>;
        };
        feeLock: {
            unlockFee: AugmentedSubmittable<() => SubmittableExtrinsic<ApiType>, []>;
            updateFeeLockMetadata: AugmentedSubmittable<(periodLength: Option<u32> | null | Uint8Array | u32 | AnyNumber, feeLockAmount: Option<u128> | null | Uint8Array | u128 | AnyNumber, swapValueThreshold: Option<u128> | null | Uint8Array | u128 | AnyNumber, shouldBeWhitelisted: Option<Vec<ITuple<[u32, bool]>>> | null | Uint8Array | Vec<ITuple<[u32, bool]>> | ([u32 | AnyNumber | Uint8Array, bool | boolean | Uint8Array])[]) => SubmittableExtrinsic<ApiType>, [Option<u32>, Option<u128>, Option<u128>, Option<Vec<ITuple<[u32, bool]>>>]>;
            /**
             * Generic tx
             **/
            [key: string]: SubmittableExtrinsicFunction<ApiType>;
        };
        identity: {
            /**
             * Add a registrar to the system.
             *
             * The dispatch origin for this call must be `T::RegistrarOrigin`.
             *
             * - `account`: the account of the registrar.
             *
             * Emits `RegistrarAdded` if successful.
             *
             * ## Complexity
             * - `O(R)` where `R` registrar-count (governance-bounded and code-bounded).
             **/
            addRegistrar: AugmentedSubmittable<(account: MultiAddress | {
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
             * Add the given account to the sender's subs.
             *
             * Payment: Balance reserved by a previous `set_subs` call for one sub will be repatriated
             * to the sender.
             *
             * The dispatch origin for this call must be _Signed_ and the sender must have a registered
             * sub identity of `sub`.
             **/
            addSub: AugmentedSubmittable<(sub: MultiAddress | {
                Id: any;
            } | {
                Index: any;
            } | {
                Raw: any;
            } | {
                Address32: any;
            } | {
                Address20: any;
            } | string | Uint8Array, data: Data | {
                None: any;
            } | {
                Raw: any;
            } | {
                BlakeTwo256: any;
            } | {
                Sha256: any;
            } | {
                Keccak256: any;
            } | {
                ShaThree256: any;
            } | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [MultiAddress, Data]>;
            /**
             * Cancel a previous request.
             *
             * Payment: A previously reserved deposit is returned on success.
             *
             * The dispatch origin for this call must be _Signed_ and the sender must have a
             * registered identity.
             *
             * - `reg_index`: The index of the registrar whose judgement is no longer requested.
             *
             * Emits `JudgementUnrequested` if successful.
             *
             * ## Complexity
             * - `O(R + X)`.
             * - where `R` registrar-count (governance-bounded).
             * - where `X` additional-field-count (deposit-bounded and code-bounded).
             **/
            cancelRequest: AugmentedSubmittable<(regIndex: u32 | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [u32]>;
            /**
             * Clear an account's identity info and all sub-accounts and return all deposits.
             *
             * Payment: All reserved balances on the account are returned.
             *
             * The dispatch origin for this call must be _Signed_ and the sender must have a registered
             * identity.
             *
             * Emits `IdentityCleared` if successful.
             *
             * ## Complexity
             * - `O(R + S + X)`
             * - where `R` registrar-count (governance-bounded).
             * - where `S` subs-count (hard- and deposit-bounded).
             * - where `X` additional-field-count (deposit-bounded and code-bounded).
             **/
            clearIdentity: AugmentedSubmittable<() => SubmittableExtrinsic<ApiType>, []>;
            /**
             * Remove an account's identity and sub-account information and slash the deposits.
             *
             * Payment: Reserved balances from `set_subs` and `set_identity` are slashed and handled by
             * `Slash`. Verification request deposits are not returned; they should be cancelled
             * manually using `cancel_request`.
             *
             * The dispatch origin for this call must match `T::ForceOrigin`.
             *
             * - `target`: the account whose identity the judgement is upon. This must be an account
             * with a registered identity.
             *
             * Emits `IdentityKilled` if successful.
             *
             * ## Complexity
             * - `O(R + S + X)`
             * - where `R` registrar-count (governance-bounded).
             * - where `S` subs-count (hard- and deposit-bounded).
             * - where `X` additional-field-count (deposit-bounded and code-bounded).
             **/
            killIdentity: AugmentedSubmittable<(target: MultiAddress | {
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
             * Provide a judgement for an account's identity.
             *
             * The dispatch origin for this call must be _Signed_ and the sender must be the account
             * of the registrar whose index is `reg_index`.
             *
             * - `reg_index`: the index of the registrar whose judgement is being made.
             * - `target`: the account whose identity the judgement is upon. This must be an account
             * with a registered identity.
             * - `judgement`: the judgement of the registrar of index `reg_index` about `target`.
             * - `identity`: The hash of the [`IdentityInfo`] for that the judgement is provided.
             *
             * Emits `JudgementGiven` if successful.
             *
             * ## Complexity
             * - `O(R + X)`.
             * - where `R` registrar-count (governance-bounded).
             * - where `X` additional-field-count (deposit-bounded and code-bounded).
             **/
            provideJudgement: AugmentedSubmittable<(regIndex: Compact<u32> | AnyNumber | Uint8Array, target: MultiAddress | {
                Id: any;
            } | {
                Index: any;
            } | {
                Raw: any;
            } | {
                Address32: any;
            } | {
                Address20: any;
            } | string | Uint8Array, judgement: PalletIdentityJudgement | {
                Unknown: any;
            } | {
                FeePaid: any;
            } | {
                Reasonable: any;
            } | {
                KnownGood: any;
            } | {
                OutOfDate: any;
            } | {
                LowQuality: any;
            } | {
                Erroneous: any;
            } | string | Uint8Array, identity: H256 | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [Compact<u32>, MultiAddress, PalletIdentityJudgement, H256]>;
            /**
             * Remove the sender as a sub-account.
             *
             * Payment: Balance reserved by a previous `set_subs` call for one sub will be repatriated
             * to the sender (*not* the original depositor).
             *
             * The dispatch origin for this call must be _Signed_ and the sender must have a registered
             * super-identity.
             *
             * NOTE: This should not normally be used, but is provided in the case that the non-
             * controller of an account is maliciously registered as a sub-account.
             **/
            quitSub: AugmentedSubmittable<() => SubmittableExtrinsic<ApiType>, []>;
            /**
             * Remove the given account from the sender's subs.
             *
             * Payment: Balance reserved by a previous `set_subs` call for one sub will be repatriated
             * to the sender.
             *
             * The dispatch origin for this call must be _Signed_ and the sender must have a registered
             * sub identity of `sub`.
             **/
            removeSub: AugmentedSubmittable<(sub: MultiAddress | {
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
             * Alter the associated name of the given sub-account.
             *
             * The dispatch origin for this call must be _Signed_ and the sender must have a registered
             * sub identity of `sub`.
             **/
            renameSub: AugmentedSubmittable<(sub: MultiAddress | {
                Id: any;
            } | {
                Index: any;
            } | {
                Raw: any;
            } | {
                Address32: any;
            } | {
                Address20: any;
            } | string | Uint8Array, data: Data | {
                None: any;
            } | {
                Raw: any;
            } | {
                BlakeTwo256: any;
            } | {
                Sha256: any;
            } | {
                Keccak256: any;
            } | {
                ShaThree256: any;
            } | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [MultiAddress, Data]>;
            /**
             * Request a judgement from a registrar.
             *
             * Payment: At most `max_fee` will be reserved for payment to the registrar if judgement
             * given.
             *
             * The dispatch origin for this call must be _Signed_ and the sender must have a
             * registered identity.
             *
             * - `reg_index`: The index of the registrar whose judgement is requested.
             * - `max_fee`: The maximum fee that may be paid. This should just be auto-populated as:
             *
             * ```nocompile
             * Self::registrars().get(reg_index).unwrap().fee
             * ```
             *
             * Emits `JudgementRequested` if successful.
             *
             * ## Complexity
             * - `O(R + X)`.
             * - where `R` registrar-count (governance-bounded).
             * - where `X` additional-field-count (deposit-bounded and code-bounded).
             **/
            requestJudgement: AugmentedSubmittable<(regIndex: Compact<u32> | AnyNumber | Uint8Array, maxFee: Compact<u128> | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [Compact<u32>, Compact<u128>]>;
            /**
             * Change the account associated with a registrar.
             *
             * The dispatch origin for this call must be _Signed_ and the sender must be the account
             * of the registrar whose index is `index`.
             *
             * - `index`: the index of the registrar whose fee is to be set.
             * - `new`: the new account ID.
             *
             * ## Complexity
             * - `O(R)`.
             * - where `R` registrar-count (governance-bounded).
             **/
            setAccountId: AugmentedSubmittable<(index: Compact<u32> | AnyNumber | Uint8Array, updated: MultiAddress | {
                Id: any;
            } | {
                Index: any;
            } | {
                Raw: any;
            } | {
                Address32: any;
            } | {
                Address20: any;
            } | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [Compact<u32>, MultiAddress]>;
            /**
             * Set the fee required for a judgement to be requested from a registrar.
             *
             * The dispatch origin for this call must be _Signed_ and the sender must be the account
             * of the registrar whose index is `index`.
             *
             * - `index`: the index of the registrar whose fee is to be set.
             * - `fee`: the new fee.
             *
             * ## Complexity
             * - `O(R)`.
             * - where `R` registrar-count (governance-bounded).
             **/
            setFee: AugmentedSubmittable<(index: Compact<u32> | AnyNumber | Uint8Array, fee: Compact<u128> | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [Compact<u32>, Compact<u128>]>;
            /**
             * Set the field information for a registrar.
             *
             * The dispatch origin for this call must be _Signed_ and the sender must be the account
             * of the registrar whose index is `index`.
             *
             * - `index`: the index of the registrar whose fee is to be set.
             * - `fields`: the fields that the registrar concerns themselves with.
             *
             * ## Complexity
             * - `O(R)`.
             * - where `R` registrar-count (governance-bounded).
             **/
            setFields: AugmentedSubmittable<(index: Compact<u32> | AnyNumber | Uint8Array, fields: PalletIdentityBitFlags) => SubmittableExtrinsic<ApiType>, [Compact<u32>, PalletIdentityBitFlags]>;
            /**
             * Set an account's identity information and reserve the appropriate deposit.
             *
             * If the account already has identity information, the deposit is taken as part payment
             * for the new deposit.
             *
             * The dispatch origin for this call must be _Signed_.
             *
             * - `info`: The identity information.
             *
             * Emits `IdentitySet` if successful.
             *
             * ## Complexity
             * - `O(X + X' + R)`
             * - where `X` additional-field-count (deposit-bounded and code-bounded)
             * - where `R` judgements-count (registrar-count-bounded)
             **/
            setIdentity: AugmentedSubmittable<(info: PalletIdentityIdentityInfo | {
                additional?: any;
                display?: any;
                legal?: any;
                web?: any;
                riot?: any;
                email?: any;
                pgpFingerprint?: any;
                image?: any;
                twitter?: any;
            } | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [PalletIdentityIdentityInfo]>;
            /**
             * Set the sub-accounts of the sender.
             *
             * Payment: Any aggregate balance reserved by previous `set_subs` calls will be returned
             * and an amount `SubAccountDeposit` will be reserved for each item in `subs`.
             *
             * The dispatch origin for this call must be _Signed_ and the sender must have a registered
             * identity.
             *
             * - `subs`: The identity's (new) sub-accounts.
             *
             * ## Complexity
             * - `O(P + S)`
             * - where `P` old-subs-count (hard- and deposit-bounded).
             * - where `S` subs-count (hard- and deposit-bounded).
             **/
            setSubs: AugmentedSubmittable<(subs: Vec<ITuple<[AccountId32, Data]>> | ([AccountId32 | string | Uint8Array, Data | {
                None: any;
            } | {
                Raw: any;
            } | {
                BlakeTwo256: any;
            } | {
                Sha256: any;
            } | {
                Keccak256: any;
            } | {
                ShaThree256: any;
            } | string | Uint8Array])[]) => SubmittableExtrinsic<ApiType>, [Vec<ITuple<[AccountId32, Data]>>]>;
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
        maintenance: {
            switchMaintenanceModeOff: AugmentedSubmittable<() => SubmittableExtrinsic<ApiType>, []>;
            switchMaintenanceModeOn: AugmentedSubmittable<() => SubmittableExtrinsic<ApiType>, []>;
            switchUpgradabilityInMaintenanceModeOff: AugmentedSubmittable<() => SubmittableExtrinsic<ApiType>, []>;
            switchUpgradabilityInMaintenanceModeOn: AugmentedSubmittable<() => SubmittableExtrinsic<ApiType>, []>;
            /**
             * Generic tx
             **/
            [key: string]: SubmittableExtrinsicFunction<ApiType>;
        };
        multiPurposeLiquidity: {
            reserveVestingLiquidityTokens: AugmentedSubmittable<(liquidityTokenId: u32 | AnyNumber | Uint8Array, liquidityTokenAmount: u128 | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [u32, u128]>;
            /**
             * Migrates vested liquidity tokens from Vested pallet to MPL. Information about
             * unlock schedule is preserved, so whenever one decides to move tokens back to
             * Vested pallet tokens can be unlocked.
             **/
            reserveVestingLiquidityTokensByVestingIndex: AugmentedSubmittable<(liquidityTokenId: u32 | AnyNumber | Uint8Array, liquidityTokenVestingIndex: u32 | AnyNumber | Uint8Array, liquidityTokenUnlockSomeAmountOrAll: Option<u128> | null | Uint8Array | u128 | AnyNumber) => SubmittableExtrinsic<ApiType>, [u32, u32, Option<u128>]>;
            /**
             * Migrates vested MGX from Vested pallet to MPL. Information about unlock schedule is
             * preserved, so whenever one decides to move tokens back to Vested pallet tokens can be
             * unlocked.
             **/
            reserveVestingNativeTokensByVestingIndex: AugmentedSubmittable<(liquidityTokenVestingIndex: u32 | AnyNumber | Uint8Array, liquidityTokenUnlockSomeAmountOrAll: Option<u128> | null | Uint8Array | u128 | AnyNumber) => SubmittableExtrinsic<ApiType>, [u32, Option<u128>]>;
            unreserveAndRelockInstance: AugmentedSubmittable<(liquidityTokenId: u32 | AnyNumber | Uint8Array, relockInstanceIndex: u32 | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [u32, u32]>;
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
                V2: any;
            } | {
                V3: any;
            } | string | Uint8Array, message: XcmVersionedXcm | {
                V2: any;
            } | {
                V3: any;
            } | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [XcmVersionedMultiLocation, XcmVersionedXcm]>;
            /**
             * Generic tx
             **/
            [key: string]: SubmittableExtrinsicFunction<ApiType>;
        };
        parachainStaking: {
            /**
             * Enables new staking token to be used for staking. Only tokens paired with MGX can be
             * used. Caller can pass the id of token for which MGX paired pool already exists or
             * liquidity token id itself. **Root only**
             **/
            addStakingLiquidityToken: AugmentedSubmittable<(pairedOrLiquidityToken: ParachainStakingPairedOrLiquidityToken | {
                Paired: any;
            } | {
                Liquidity: any;
            } | string | Uint8Array, currentLiquidityTokens: u32 | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [ParachainStakingPairedOrLiquidityToken, u32]>;
            /**
             * Modifies aggregator metadata by extending or reducing list of approved candidates
             * Account may only become aggregator only if its not collator or delegator at the moment
             **/
            aggregatorUpdateMetadata: AugmentedSubmittable<(collatorCandidates: Vec<AccountId32> | (AccountId32 | string | Uint8Array)[], action: ParachainStakingMetadataUpdateAction | 'ExtendApprovedCollators' | 'RemoveApprovedCollators' | number | Uint8Array) => SubmittableExtrinsic<ApiType>, [Vec<AccountId32>, ParachainStakingMetadataUpdateAction]>;
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
            delegate: AugmentedSubmittable<(collator: AccountId32 | string | Uint8Array, amount: u128 | AnyNumber | Uint8Array, useBalanceFrom: Option<MangataTypesMultipurposeLiquidityBondKind> | null | Uint8Array | MangataTypesMultipurposeLiquidityBondKind | 'AvailableBalance' | 'ActivatedUnstakedReserves' | 'UnspentReserves' | number, candidateDelegationCount: u32 | AnyNumber | Uint8Array, delegationCount: u32 | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [AccountId32, u128, Option<MangataTypesMultipurposeLiquidityBondKind>, u32, u32]>;
            /**
             * Execute pending request to adjust the collator candidate self bond
             **/
            executeCandidateBondRequest: AugmentedSubmittable<(candidate: AccountId32 | string | Uint8Array, useBalanceFrom: Option<MangataTypesMultipurposeLiquidityBondKind> | null | Uint8Array | MangataTypesMultipurposeLiquidityBondKind | 'AvailableBalance' | 'ActivatedUnstakedReserves' | 'UnspentReserves' | number) => SubmittableExtrinsic<ApiType>, [AccountId32, Option<MangataTypesMultipurposeLiquidityBondKind>]>;
            /**
             * Execute pending request to change an existing delegation
             **/
            executeDelegationRequest: AugmentedSubmittable<(delegator: AccountId32 | string | Uint8Array, candidate: AccountId32 | string | Uint8Array, useBalanceFrom: Option<MangataTypesMultipurposeLiquidityBondKind> | null | Uint8Array | MangataTypesMultipurposeLiquidityBondKind | 'AvailableBalance' | 'ActivatedUnstakedReserves' | 'UnspentReserves' | number) => SubmittableExtrinsic<ApiType>, [AccountId32, AccountId32, Option<MangataTypesMultipurposeLiquidityBondKind>]>;
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
            joinCandidates: AugmentedSubmittable<(bond: u128 | AnyNumber | Uint8Array, liquidityToken: u32 | AnyNumber | Uint8Array, useBalanceFrom: Option<MangataTypesMultipurposeLiquidityBondKind> | null | Uint8Array | MangataTypesMultipurposeLiquidityBondKind | 'AvailableBalance' | 'ActivatedUnstakedReserves' | 'UnspentReserves' | number, candidateCount: u32 | AnyNumber | Uint8Array, liquidityTokenCount: u32 | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [u128, u32, Option<MangataTypesMultipurposeLiquidityBondKind>, u32, u32]>;
            /**
             * This extrinsic should be used to distribute rewards for collator and assodiated
             * delegators. As round rewards are processed in random order its impossible predict
             * how many delegators (and assodiated transfer extrinsic calls) will be required so
             * worst case scenario (delegators_count = MaxCollatorCandidates) is assumed.
             *
             * params:
             * - collator - account id
             * - limit - number of rewards periods that should be processed within extrinsic. Note
             * that limit assumes worst case scenario of (delegators_count = MaxCollatorCandidates)
             * so as a result, `limit` or more session round rewards may be distributed
             **/
            payoutCollatorRewards: AugmentedSubmittable<(collator: AccountId32 | string | Uint8Array, numberOfSesisons: Option<u32> | null | Uint8Array | u32 | AnyNumber) => SubmittableExtrinsic<ApiType>, [AccountId32, Option<u32>]>;
            /**
             * Payout delegator rewards only for particular round. Collators should rather use
             * [`Pallet::payout_collator_rewards`] but if collator is inresponsive one can claim
             * particular delegator rewards manually.
             **/
            payoutDelegatorReward: AugmentedSubmittable<(round: u32 | AnyNumber | Uint8Array, collator: AccountId32 | string | Uint8Array, delegator: AccountId32 | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [u32, AccountId32, AccountId32]>;
            /**
             * Removes previously added liquidity token
             **/
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
            scheduleCandidateBondMore: AugmentedSubmittable<(more: u128 | AnyNumber | Uint8Array, useBalanceFrom: Option<MangataTypesMultipurposeLiquidityBondKind> | null | Uint8Array | MangataTypesMultipurposeLiquidityBondKind | 'AvailableBalance' | 'ActivatedUnstakedReserves' | 'UnspentReserves' | number) => SubmittableExtrinsic<ApiType>, [u128, Option<MangataTypesMultipurposeLiquidityBondKind>]>;
            /**
             * Request bond less for delegators wrt a specific collator candidate.
             **/
            scheduleDelegatorBondLess: AugmentedSubmittable<(candidate: AccountId32 | string | Uint8Array, less: u128 | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [AccountId32, u128]>;
            /**
             * Request to bond more for delegators wrt a specific collator candidate.
             **/
            scheduleDelegatorBondMore: AugmentedSubmittable<(candidate: AccountId32 | string | Uint8Array, more: u128 | AnyNumber | Uint8Array, useBalanceFrom: Option<MangataTypesMultipurposeLiquidityBondKind> | null | Uint8Array | MangataTypesMultipurposeLiquidityBondKind | 'AvailableBalance' | 'ActivatedUnstakedReserves' | 'UnspentReserves' | number) => SubmittableExtrinsic<ApiType>, [AccountId32, u128, Option<MangataTypesMultipurposeLiquidityBondKind>]>;
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
             * Assigns/replaces the candidate that given collator wants to aggregate under
             **/
            updateCandidateAggregator: AugmentedSubmittable<(maybeAggregator: Option<AccountId32> | null | Uint8Array | AccountId32 | string) => SubmittableExtrinsic<ApiType>, [Option<AccountId32>]>;
            /**
             * Generic tx
             **/
            [key: string]: SubmittableExtrinsicFunction<ApiType>;
        };
        parachainSystem: {
            /**
             * Authorize an upgrade to a given `code_hash` for the runtime. The runtime can be supplied
             * later.
             *
             * The `check_version` parameter sets a boolean flag for whether or not the runtime's spec
             * version and name should be verified on upgrade. Since the authorization only has a hash,
             * it cannot actually perform the verification.
             *
             * This call requires Root origin.
             **/
            authorizeUpgrade: AugmentedSubmittable<(codeHash: H256 | string | Uint8Array, checkVersion: bool | boolean | Uint8Array) => SubmittableExtrinsic<ApiType>, [H256, bool]>;
            /**
             * Provide the preimage (runtime binary) `code` for an upgrade that has been authorized.
             *
             * If the authorization required a version check, this call will ensure the spec name
             * remains unchanged and that the spec version has increased.
             *
             * Note that this function will not apply the new `code`, but only attempt to schedule the
             * upgrade with the Relay Chain.
             *
             * All origins are allowed.
             **/
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
                V2: any;
            } | {
                V3: any;
            } | string | Uint8Array, maxWeight: SpWeightsWeightV2Weight | {
                refTime?: any;
                proofSize?: any;
            } | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [XcmVersionedXcm, SpWeightsWeightV2Weight]>;
            /**
             * Set a safe XCM version (the version that XCM should be encoded with if the most recent
             * version a destination can accept is unknown).
             *
             * - `origin`: Must be Root.
             * - `maybe_xcm_version`: The default XCM encoding version, or `None` to disable.
             **/
            forceDefaultXcmVersion: AugmentedSubmittable<(maybeXcmVersion: Option<u32> | null | Uint8Array | u32 | AnyNumber) => SubmittableExtrinsic<ApiType>, [Option<u32>]>;
            /**
             * Ask a location to notify us regarding their XCM version and any changes to it.
             *
             * - `origin`: Must be Root.
             * - `location`: The location to which we should subscribe for XCM version notifications.
             **/
            forceSubscribeVersionNotify: AugmentedSubmittable<(location: XcmVersionedMultiLocation | {
                V2: any;
            } | {
                V3: any;
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
                V2: any;
            } | {
                V3: any;
            } | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [XcmVersionedMultiLocation]>;
            /**
             * Extoll that a particular destination can be communicated with through a particular
             * version of XCM.
             *
             * - `origin`: Must be Root.
             * - `location`: The destination that is being described.
             * - `xcm_version`: The latest version of XCM that `location` supports.
             **/
            forceXcmVersion: AugmentedSubmittable<(location: XcmV3MultiLocation | {
                parents?: any;
                interior?: any;
            } | string | Uint8Array, xcmVersion: u32 | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [XcmV3MultiLocation, u32]>;
            /**
             * Transfer some assets from the local chain to the sovereign account of a destination
             * chain and forward a notification XCM.
             *
             * Fee payment on the destination side is made from the asset in the `assets` vector of
             * index `fee_asset_item`, up to enough to pay for `weight_limit` of weight. If more weight
             * is needed than `weight_limit`, then the operation will fail and the assets send may be
             * at risk.
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
                V2: any;
            } | {
                V3: any;
            } | string | Uint8Array, beneficiary: XcmVersionedMultiLocation | {
                V2: any;
            } | {
                V3: any;
            } | string | Uint8Array, assets: XcmVersionedMultiAssets | {
                V2: any;
            } | {
                V3: any;
            } | string | Uint8Array, feeAssetItem: u32 | AnyNumber | Uint8Array, weightLimit: XcmV3WeightLimit | {
                Unlimited: any;
            } | {
                Limited: any;
            } | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [XcmVersionedMultiLocation, XcmVersionedMultiLocation, XcmVersionedMultiAssets, u32, XcmV3WeightLimit]>;
            /**
             * Teleport some assets from the local chain to some destination chain.
             *
             * Fee payment on the destination side is made from the asset in the `assets` vector of
             * index `fee_asset_item`, up to enough to pay for `weight_limit` of weight. If more weight
             * is needed than `weight_limit`, then the operation will fail and the assets send may be
             * at risk.
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
                V2: any;
            } | {
                V3: any;
            } | string | Uint8Array, beneficiary: XcmVersionedMultiLocation | {
                V2: any;
            } | {
                V3: any;
            } | string | Uint8Array, assets: XcmVersionedMultiAssets | {
                V2: any;
            } | {
                V3: any;
            } | string | Uint8Array, feeAssetItem: u32 | AnyNumber | Uint8Array, weightLimit: XcmV3WeightLimit | {
                Unlimited: any;
            } | {
                Limited: any;
            } | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [XcmVersionedMultiLocation, XcmVersionedMultiLocation, XcmVersionedMultiAssets, u32, XcmV3WeightLimit]>;
            /**
             * Transfer some assets from the local chain to the sovereign account of a destination
             * chain and forward a notification XCM.
             *
             * Fee payment on the destination side is made from the asset in the `assets` vector of
             * index `fee_asset_item`. The weight limit for fees is not provided and thus is unlimited,
             * with all fees taken as needed from the asset.
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
                V2: any;
            } | {
                V3: any;
            } | string | Uint8Array, beneficiary: XcmVersionedMultiLocation | {
                V2: any;
            } | {
                V3: any;
            } | string | Uint8Array, assets: XcmVersionedMultiAssets | {
                V2: any;
            } | {
                V3: any;
            } | string | Uint8Array, feeAssetItem: u32 | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [XcmVersionedMultiLocation, XcmVersionedMultiLocation, XcmVersionedMultiAssets, u32]>;
            send: AugmentedSubmittable<(dest: XcmVersionedMultiLocation | {
                V2: any;
            } | {
                V3: any;
            } | string | Uint8Array, message: XcmVersionedXcm | {
                V2: any;
            } | {
                V3: any;
            } | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [XcmVersionedMultiLocation, XcmVersionedXcm]>;
            /**
             * Teleport some assets from the local chain to some destination chain.
             *
             * Fee payment on the destination side is made from the asset in the `assets` vector of
             * index `fee_asset_item`. The weight limit for fees is not provided and thus is unlimited,
             * with all fees taken as needed from the asset.
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
                V2: any;
            } | {
                V3: any;
            } | string | Uint8Array, beneficiary: XcmVersionedMultiLocation | {
                V2: any;
            } | {
                V3: any;
            } | string | Uint8Array, assets: XcmVersionedMultiAssets | {
                V2: any;
            } | {
                V3: any;
            } | string | Uint8Array, feeAssetItem: u32 | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [XcmVersionedMultiLocation, XcmVersionedMultiLocation, XcmVersionedMultiAssets, u32]>;
            /**
             * Generic tx
             **/
            [key: string]: SubmittableExtrinsicFunction<ApiType>;
        };
        proofOfStake: {
            /**
             * Increases number of tokens used for liquidity mining purposes.
             *
             * Parameters:
             * - liquidity_token_id - id of the token
             * - amount - amount of the token
             * - use_balance_from - where from tokens should be used
             **/
            activateLiquidity: AugmentedSubmittable<(liquidityTokenId: u32 | AnyNumber | Uint8Array, amount: u128 | AnyNumber | Uint8Array, useBalanceFrom: Option<MangataTypesMultipurposeLiquidityActivateKind> | null | Uint8Array | MangataTypesMultipurposeLiquidityActivateKind | 'AvailableBalance' | 'StakedUnactivatedReserves' | 'UnspentReserves' | number) => SubmittableExtrinsic<ApiType>, [u32, u128, Option<MangataTypesMultipurposeLiquidityActivateKind>]>;
            /**
             * Claims liquidity mining rewards
             **/
            claimRewardsAll: AugmentedSubmittable<(liquidityTokenId: u32 | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [u32]>;
            /**
             * Decreases number of tokens used for liquidity mining purposes
             **/
            deactivateLiquidity: AugmentedSubmittable<(liquidityTokenId: u32 | AnyNumber | Uint8Array, amount: u128 | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [u32, u128]>;
            /**
             * Enables/disables pool for liquidity mining rewards
             **/
            updatePoolPromotion: AugmentedSubmittable<(liquidityTokenId: u32 | AnyNumber | Uint8Array, liquidityMiningIssuanceWeight: u8 | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [u32, u8]>;
            /**
             * Generic tx
             **/
            [key: string]: SubmittableExtrinsicFunction<ApiType>;
        };
        proxy: {
            /**
             * Register a proxy account for the sender that is able to make calls on its behalf.
             *
             * The dispatch origin for this call must be _Signed_.
             *
             * Parameters:
             * - `proxy`: The account that the `caller` would like to make a proxy.
             * - `proxy_type`: The permissions allowed for this proxy account.
             * - `delay`: The announcement period required of the initial proxy. Will generally be
             * zero.
             **/
            addProxy: AugmentedSubmittable<(delegate: MultiAddress | {
                Id: any;
            } | {
                Index: any;
            } | {
                Raw: any;
            } | {
                Address32: any;
            } | {
                Address20: any;
            } | string | Uint8Array, proxyType: CommonRuntimeConfigPalletProxyProxyType | 'AutoCompound' | number | Uint8Array, delay: u32 | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [MultiAddress, CommonRuntimeConfigPalletProxyProxyType, u32]>;
            /**
             * Publish the hash of a proxy-call that will be made in the future.
             *
             * This must be called some number of blocks before the corresponding `proxy` is attempted
             * if the delay associated with the proxy relationship is greater than zero.
             *
             * No more than `MaxPending` announcements may be made at any one time.
             *
             * This will take a deposit of `AnnouncementDepositFactor` as well as
             * `AnnouncementDepositBase` if there are no other pending announcements.
             *
             * The dispatch origin for this call must be _Signed_ and a proxy of `real`.
             *
             * Parameters:
             * - `real`: The account that the proxy will make a call on behalf of.
             * - `call_hash`: The hash of the call to be made by the `real` account.
             **/
            announce: AugmentedSubmittable<(real: MultiAddress | {
                Id: any;
            } | {
                Index: any;
            } | {
                Raw: any;
            } | {
                Address32: any;
            } | {
                Address20: any;
            } | string | Uint8Array, callHash: H256 | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [MultiAddress, H256]>;
            /**
             * Spawn a fresh new account that is guaranteed to be otherwise inaccessible, and
             * initialize it with a proxy of `proxy_type` for `origin` sender.
             *
             * Requires a `Signed` origin.
             *
             * - `proxy_type`: The type of the proxy that the sender will be registered as over the
             * new account. This will almost always be the most permissive `ProxyType` possible to
             * allow for maximum flexibility.
             * - `index`: A disambiguation index, in case this is called multiple times in the same
             * transaction (e.g. with `utility::batch`). Unless you're using `batch` you probably just
             * want to use `0`.
             * - `delay`: The announcement period required of the initial proxy. Will generally be
             * zero.
             *
             * Fails with `Duplicate` if this has already been called in this transaction, from the
             * same sender, with the same parameters.
             *
             * Fails if there are insufficient funds to pay for deposit.
             **/
            createPure: AugmentedSubmittable<(proxyType: CommonRuntimeConfigPalletProxyProxyType | 'AutoCompound' | number | Uint8Array, delay: u32 | AnyNumber | Uint8Array, index: u16 | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [CommonRuntimeConfigPalletProxyProxyType, u32, u16]>;
            /**
             * Removes a previously spawned pure proxy.
             *
             * WARNING: **All access to this account will be lost.** Any funds held in it will be
             * inaccessible.
             *
             * Requires a `Signed` origin, and the sender account must have been created by a call to
             * `pure` with corresponding parameters.
             *
             * - `spawner`: The account that originally called `pure` to create this account.
             * - `index`: The disambiguation index originally passed to `pure`. Probably `0`.
             * - `proxy_type`: The proxy type originally passed to `pure`.
             * - `height`: The height of the chain when the call to `pure` was processed.
             * - `ext_index`: The extrinsic index in which the call to `pure` was processed.
             *
             * Fails with `NoPermission` in case the caller is not a previously created pure
             * account whose `pure` call has corresponding parameters.
             **/
            killPure: AugmentedSubmittable<(spawner: MultiAddress | {
                Id: any;
            } | {
                Index: any;
            } | {
                Raw: any;
            } | {
                Address32: any;
            } | {
                Address20: any;
            } | string | Uint8Array, proxyType: CommonRuntimeConfigPalletProxyProxyType | 'AutoCompound' | number | Uint8Array, index: u16 | AnyNumber | Uint8Array, height: Compact<u32> | AnyNumber | Uint8Array, extIndex: Compact<u32> | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [MultiAddress, CommonRuntimeConfigPalletProxyProxyType, u16, Compact<u32>, Compact<u32>]>;
            /**
             * Dispatch the given `call` from an account that the sender is authorised for through
             * `add_proxy`.
             *
             * The dispatch origin for this call must be _Signed_.
             *
             * Parameters:
             * - `real`: The account that the proxy will make a call on behalf of.
             * - `force_proxy_type`: Specify the exact proxy type to be used and checked for this call.
             * - `call`: The call to be made by the `real` account.
             **/
            proxy: AugmentedSubmittable<(real: MultiAddress | {
                Id: any;
            } | {
                Index: any;
            } | {
                Raw: any;
            } | {
                Address32: any;
            } | {
                Address20: any;
            } | string | Uint8Array, forceProxyType: Option<CommonRuntimeConfigPalletProxyProxyType> | null | Uint8Array | CommonRuntimeConfigPalletProxyProxyType | 'AutoCompound' | number, call: Call | IMethod | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [MultiAddress, Option<CommonRuntimeConfigPalletProxyProxyType>, Call]>;
            /**
             * Dispatch the given `call` from an account that the sender is authorized for through
             * `add_proxy`.
             *
             * Removes any corresponding announcement(s).
             *
             * The dispatch origin for this call must be _Signed_.
             *
             * Parameters:
             * - `real`: The account that the proxy will make a call on behalf of.
             * - `force_proxy_type`: Specify the exact proxy type to be used and checked for this call.
             * - `call`: The call to be made by the `real` account.
             **/
            proxyAnnounced: AugmentedSubmittable<(delegate: MultiAddress | {
                Id: any;
            } | {
                Index: any;
            } | {
                Raw: any;
            } | {
                Address32: any;
            } | {
                Address20: any;
            } | string | Uint8Array, real: MultiAddress | {
                Id: any;
            } | {
                Index: any;
            } | {
                Raw: any;
            } | {
                Address32: any;
            } | {
                Address20: any;
            } | string | Uint8Array, forceProxyType: Option<CommonRuntimeConfigPalletProxyProxyType> | null | Uint8Array | CommonRuntimeConfigPalletProxyProxyType | 'AutoCompound' | number, call: Call | IMethod | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [MultiAddress, MultiAddress, Option<CommonRuntimeConfigPalletProxyProxyType>, Call]>;
            /**
             * Remove the given announcement of a delegate.
             *
             * May be called by a target (proxied) account to remove a call that one of their delegates
             * (`delegate`) has announced they want to execute. The deposit is returned.
             *
             * The dispatch origin for this call must be _Signed_.
             *
             * Parameters:
             * - `delegate`: The account that previously announced the call.
             * - `call_hash`: The hash of the call to be made.
             **/
            rejectAnnouncement: AugmentedSubmittable<(delegate: MultiAddress | {
                Id: any;
            } | {
                Index: any;
            } | {
                Raw: any;
            } | {
                Address32: any;
            } | {
                Address20: any;
            } | string | Uint8Array, callHash: H256 | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [MultiAddress, H256]>;
            /**
             * Remove a given announcement.
             *
             * May be called by a proxy account to remove a call they previously announced and return
             * the deposit.
             *
             * The dispatch origin for this call must be _Signed_.
             *
             * Parameters:
             * - `real`: The account that the proxy will make a call on behalf of.
             * - `call_hash`: The hash of the call to be made by the `real` account.
             **/
            removeAnnouncement: AugmentedSubmittable<(real: MultiAddress | {
                Id: any;
            } | {
                Index: any;
            } | {
                Raw: any;
            } | {
                Address32: any;
            } | {
                Address20: any;
            } | string | Uint8Array, callHash: H256 | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [MultiAddress, H256]>;
            /**
             * Unregister all proxy accounts for the sender.
             *
             * The dispatch origin for this call must be _Signed_.
             *
             * WARNING: This may be called on accounts created by `pure`, however if done, then
             * the unreserved fees will be inaccessible. **All access to this account will be lost.**
             **/
            removeProxies: AugmentedSubmittable<() => SubmittableExtrinsic<ApiType>, []>;
            /**
             * Unregister a proxy account for the sender.
             *
             * The dispatch origin for this call must be _Signed_.
             *
             * Parameters:
             * - `proxy`: The account that the `caller` would like to remove as a proxy.
             * - `proxy_type`: The permissions currently enabled for the removed proxy account.
             **/
            removeProxy: AugmentedSubmittable<(delegate: MultiAddress | {
                Id: any;
            } | {
                Index: any;
            } | {
                Raw: any;
            } | {
                Address32: any;
            } | {
                Address20: any;
            } | string | Uint8Array, proxyType: CommonRuntimeConfigPalletProxyProxyType | 'AutoCompound' | number | Uint8Array, delay: u32 | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [MultiAddress, CommonRuntimeConfigPalletProxyProxyType, u32]>;
            /**
             * Generic tx
             **/
            [key: string]: SubmittableExtrinsicFunction<ApiType>;
        };
        rootTesting: {
            /**
             * A dispatch that will fill the block weight up to the given ratio.
             **/
            fillBlock: AugmentedSubmittable<(ratio: Perbill | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [Perbill]>;
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
             * ## Complexity
             * - `O(1)` in number of key types. Actual cost depends on the number of length of
             * `T::Keys::key_ids()` which is fixed.
             **/
            purgeKeys: AugmentedSubmittable<() => SubmittableExtrinsic<ApiType>, []>;
            /**
             * Sets the session key(s) of the function caller to `keys`.
             * Allows an account to set its session key prior to becoming a validator.
             * This doesn't take effect until the next session.
             *
             * The dispatch origin of this function must be signed.
             *
             * ## Complexity
             * - `O(1)`. Actual cost depends on the number of length of `T::Keys::key_ids()` which is
             * fixed.
             **/
            setKeys: AugmentedSubmittable<(keys: MangataRococoRuntimeSessionKeys | {
                aura?: any;
            } | string | Uint8Array, proof: Bytes | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [MangataRococoRuntimeSessionKeys, Bytes]>;
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
            sudo: AugmentedSubmittable<(call: Call | IMethod | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [Call]>;
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
            } | string | Uint8Array, call: Call | IMethod | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [MultiAddress, Call]>;
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
            sudoUncheckedWeight: AugmentedSubmittable<(call: Call | IMethod | string | Uint8Array, weight: SpWeightsWeightV2Weight | {
                refTime?: any;
                proofSize?: any;
            } | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [Call, SpWeightsWeightV2Weight]>;
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
            sudo: AugmentedSubmittable<(call: Call | IMethod | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [Call]>;
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
            } | string | Uint8Array, call: Call | IMethod | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [MultiAddress, Call]>;
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
            sudoUncheckedWeight: AugmentedSubmittable<(call: Call | IMethod | string | Uint8Array, weight: SpWeightsWeightV2Weight | {
                refTime?: any;
                proofSize?: any;
            } | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [Call, SpWeightsWeightV2Weight]>;
            /**
             * Generic tx
             **/
            [key: string]: SubmittableExtrinsicFunction<ApiType>;
        };
        system: {
            /**
             * Persists list of encoded txs into the storage queue. There is an dedicated
             * check in [Executive](https://storage.googleapis.com/mangata-docs-node/frame_executive/struct.Executive.html) that verifies that passed binary data can be
             * decoded into extrinsics.
             **/
            enqueueTxs: AugmentedSubmittable<(txs: Vec<ITuple<[Option<AccountId32>, Bytes]>> | ([Option<AccountId32> | null | Uint8Array | AccountId32 | string, Bytes | string | Uint8Array])[]) => SubmittableExtrinsic<ApiType>, [Vec<ITuple<[Option<AccountId32>, Bytes]>>]>;
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
             * ## Complexity
             * - `O(1)`
             * # </weight>
             **/
            remark: AugmentedSubmittable<(remark: Bytes | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [Bytes]>;
            /**
             * Make some on-chain remark and emit event.
             **/
            remarkWithEvent: AugmentedSubmittable<(remark: Bytes | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [Bytes]>;
            /**
             * Set the new runtime code.
             *
             * ## Complexity
             * - `O(C + S)` where `C` length of `code` and `S` complexity of `can_set_code`
             **/
            setCode: AugmentedSubmittable<(code: Bytes | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [Bytes]>;
            /**
             * Set the new runtime code without doing any checks of the given `code`.
             *
             * ## Complexity
             * - `O(C)` where `C` length of `code`
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
             * ## Complexity
             * - `O(1)` (Note that implementations of `OnTimestampSet` must also be `O(1)`)
             * - 1 storage read and 1 storage mutation (codec `O(1)`). (because of `DidUpdate::take` in
             * `on_finalize`)
             * - 1 event handler `on_timestamp_set`. Must be `O(1)`.
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
             * ## Complexity
             * - O(1).
             **/
            approveProposal: AugmentedSubmittable<(proposalId: Compact<u32> | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [Compact<u32>]>;
            /**
             * Put forward a suggestion for spending. A deposit proportional to the value
             * is reserved and slashed if the proposal is rejected. It is returned once the
             * proposal is awarded.
             *
             * ## Complexity
             * - O(1)
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
             * ## Complexity
             * - O(1)
             **/
            rejectProposal: AugmentedSubmittable<(proposalId: Compact<u32> | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [Compact<u32>]>;
            /**
             * Force a previously approved proposal to be removed from the approval queue.
             * The original deposit will no longer be returned.
             *
             * May only be called from `T::RejectOrigin`.
             * - `proposal_id`: The index of a proposal
             *
             * ## Complexity
             * - O(A) where `A` is the number of approvals
             *
             * Errors:
             * - `ProposalNotApproved`: The `proposal_id` supplied was not found in the approval queue,
             * i.e., the proposal has not been approved. This could also mean the proposal does not
             * exist altogether, thus there is no way it would have been approved in the first place.
             **/
            removeApproval: AugmentedSubmittable<(proposalId: Compact<u32> | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [Compact<u32>]>;
            /**
             * Propose and approve a spend of treasury funds.
             *
             * - `origin`: Must be `SpendOrigin` with the `Success` value being at least `amount`.
             * - `amount`: The amount to be transferred from the treasury to the `beneficiary`.
             * - `beneficiary`: The destination account for the transfer.
             *
             * NOTE: For record-keeping purposes, the proposer is deemed to be equivalent to the
             * beneficiary.
             **/
            spend: AugmentedSubmittable<(amount: Compact<u128> | AnyNumber | Uint8Array, beneficiary: MultiAddress | {
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
            asDerivative: AugmentedSubmittable<(index: u16 | AnyNumber | Uint8Array, call: Call | IMethod | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [u16, Call]>;
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
            batch: AugmentedSubmittable<(calls: Vec<Call> | (Call | IMethod | string | Uint8Array)[]) => SubmittableExtrinsic<ApiType>, [Vec<Call>]>;
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
            batchAll: AugmentedSubmittable<(calls: Vec<Call> | (Call | IMethod | string | Uint8Array)[]) => SubmittableExtrinsic<ApiType>, [Vec<Call>]>;
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
            dispatchAs: AugmentedSubmittable<(asOrigin: MangataRococoRuntimeOriginCaller | {
                system: any;
            } | {
                Void: any;
            } | {
                PolkadotXcm: any;
            } | {
                CumulusXcm: any;
            } | {
                Council: any;
            } | string | Uint8Array, call: Call | IMethod | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [MangataRococoRuntimeOriginCaller, Call]>;
            /**
             * Send a batch of dispatch calls.
             * Unlike `batch`, it allows errors and won't interrupt.
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
            forceBatch: AugmentedSubmittable<(calls: Vec<Call> | (Call | IMethod | string | Uint8Array)[]) => SubmittableExtrinsic<ApiType>, [Vec<Call>]>;
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
            sudoUnlockAllVestingTokens: AugmentedSubmittable<(target: MultiAddress | {
                Id: any;
            } | {
                Index: any;
            } | {
                Raw: any;
            } | {
                Address32: any;
            } | {
                Address20: any;
            } | string | Uint8Array, tokenId: u32 | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [MultiAddress, u32]>;
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
             * Resumes all XCM executions for the XCMP queue.
             *
             * Note that this function doesn't change the status of the in/out bound channels.
             *
             * - `origin`: Must pass `ControllerOrigin`.
             **/
            resumeXcmExecution: AugmentedSubmittable<() => SubmittableExtrinsic<ApiType>, []>;
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
            serviceOverweight: AugmentedSubmittable<(index: u64 | AnyNumber | Uint8Array, weightLimit: SpWeightsWeightV2Weight | {
                refTime?: any;
                proofSize?: any;
            } | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [u64, SpWeightsWeightV2Weight]>;
            /**
             * Suspends all XCM executions for the XCMP queue, regardless of the sender's origin.
             *
             * - `origin`: Must pass `ControllerOrigin`.
             **/
            suspendXcmExecution: AugmentedSubmittable<() => SubmittableExtrinsic<ApiType>, []>;
            /**
             * Overwrites the number of pages of messages which must be in the queue after which we drop any further
             * messages from the channel.
             *
             * - `origin`: Must pass `Root`.
             * - `new`: Desired value for `QueueConfigData.drop_threshold`
             **/
            updateDropThreshold: AugmentedSubmittable<(updated: u32 | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [u32]>;
            /**
             * Overwrites the number of pages of messages which the queue must be reduced to before it signals that
             * message sending may recommence after it has been suspended.
             *
             * - `origin`: Must pass `Root`.
             * - `new`: Desired value for `QueueConfigData.resume_threshold`
             **/
            updateResumeThreshold: AugmentedSubmittable<(updated: u32 | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [u32]>;
            /**
             * Overwrites the number of pages of messages which must be in the queue for the other side to be told to
             * suspend their sending.
             *
             * - `origin`: Must pass `Root`.
             * - `new`: Desired value for `QueueConfigData.suspend_value`
             **/
            updateSuspendThreshold: AugmentedSubmittable<(updated: u32 | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [u32]>;
            /**
             * Overwrites the amount of remaining weight under which we stop processing messages.
             *
             * - `origin`: Must pass `Root`.
             * - `new`: Desired value for `QueueConfigData.threshold_weight`
             **/
            updateThresholdWeight: AugmentedSubmittable<(updated: SpWeightsWeightV2Weight | {
                refTime?: any;
                proofSize?: any;
            } | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [SpWeightsWeightV2Weight]>;
            /**
             * Overwrites the speed to which the available weight approaches the maximum weight.
             * A lower number results in a faster progression. A value of 1 makes the entire weight available initially.
             *
             * - `origin`: Must pass `Root`.
             * - `new`: Desired value for `QueueConfigData.weight_restrict_decay`.
             **/
            updateWeightRestrictDecay: AugmentedSubmittable<(updated: SpWeightsWeightV2Weight | {
                refTime?: any;
                proofSize?: any;
            } | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [SpWeightsWeightV2Weight]>;
            /**
             * Overwrite the maximum amount of weight any individual message may consume.
             * Messages above this weight go into the overweight queue and may only be serviced explicitly.
             *
             * - `origin`: Must pass `Root`.
             * - `new`: Desired value for `QueueConfigData.xcmp_max_individual_weight`.
             **/
            updateXcmpMaxIndividualWeight: AugmentedSubmittable<(updated: SpWeightsWeightV2Weight | {
                refTime?: any;
                proofSize?: any;
            } | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [SpWeightsWeightV2Weight]>;
            /**
             * Generic tx
             **/
            [key: string]: SubmittableExtrinsicFunction<ApiType>;
        };
        xTokens: {
            /**
             * Transfer native currencies.
             *
             * `dest_weight_limit` is the weight for XCM execution on the dest
             * chain, and it would be charged from the transferred assets. If set
             * below requirements, the execution may fail and assets wouldn't be
             * received.
             *
             * It's a no-op if any error on local XCM execution or message sending.
             * Note sending assets out per se doesn't guarantee they would be
             * received. Receiving depends on if the XCM message could be delivered
             * by the network, and if the receiving chain would handle
             * messages correctly.
             **/
            transfer: AugmentedSubmittable<(currencyId: u32 | AnyNumber | Uint8Array, amount: u128 | AnyNumber | Uint8Array, dest: XcmVersionedMultiLocation | {
                V2: any;
            } | {
                V3: any;
            } | string | Uint8Array, destWeightLimit: XcmV3WeightLimit | {
                Unlimited: any;
            } | {
                Limited: any;
            } | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [u32, u128, XcmVersionedMultiLocation, XcmV3WeightLimit]>;
            /**
             * Transfer `MultiAsset`.
             *
             * `dest_weight_limit` is the weight for XCM execution on the dest
             * chain, and it would be charged from the transferred assets. If set
             * below requirements, the execution may fail and assets wouldn't be
             * received.
             *
             * It's a no-op if any error on local XCM execution or message sending.
             * Note sending assets out per se doesn't guarantee they would be
             * received. Receiving depends on if the XCM message could be delivered
             * by the network, and if the receiving chain would handle
             * messages correctly.
             **/
            transferMultiasset: AugmentedSubmittable<(asset: XcmVersionedMultiAsset | {
                V2: any;
            } | {
                V3: any;
            } | string | Uint8Array, dest: XcmVersionedMultiLocation | {
                V2: any;
            } | {
                V3: any;
            } | string | Uint8Array, destWeightLimit: XcmV3WeightLimit | {
                Unlimited: any;
            } | {
                Limited: any;
            } | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [XcmVersionedMultiAsset, XcmVersionedMultiLocation, XcmV3WeightLimit]>;
            /**
             * Transfer several `MultiAsset` specifying the item to be used as fee
             *
             * `dest_weight_limit` is the weight for XCM execution on the dest
             * chain, and it would be charged from the transferred assets. If set
             * below requirements, the execution may fail and assets wouldn't be
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
                V2: any;
            } | {
                V3: any;
            } | string | Uint8Array, feeItem: u32 | AnyNumber | Uint8Array, dest: XcmVersionedMultiLocation | {
                V2: any;
            } | {
                V3: any;
            } | string | Uint8Array, destWeightLimit: XcmV3WeightLimit | {
                Unlimited: any;
            } | {
                Limited: any;
            } | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [XcmVersionedMultiAssets, u32, XcmVersionedMultiLocation, XcmV3WeightLimit]>;
            /**
             * Transfer `MultiAsset` specifying the fee and amount as separate.
             *
             * `dest_weight_limit` is the weight for XCM execution on the dest
             * chain, and it would be charged from the transferred assets. If set
             * below requirements, the execution may fail and assets wouldn't be
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
                V2: any;
            } | {
                V3: any;
            } | string | Uint8Array, fee: XcmVersionedMultiAsset | {
                V2: any;
            } | {
                V3: any;
            } | string | Uint8Array, dest: XcmVersionedMultiLocation | {
                V2: any;
            } | {
                V3: any;
            } | string | Uint8Array, destWeightLimit: XcmV3WeightLimit | {
                Unlimited: any;
            } | {
                Limited: any;
            } | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [XcmVersionedMultiAsset, XcmVersionedMultiAsset, XcmVersionedMultiLocation, XcmV3WeightLimit]>;
            /**
             * Transfer several currencies specifying the item to be used as fee
             *
             * `dest_weight_limit` is the weight for XCM execution on the dest
             * chain, and it would be charged from the transferred assets. If set
             * below requirements, the execution may fail and assets wouldn't be
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
                V2: any;
            } | {
                V3: any;
            } | string | Uint8Array, destWeightLimit: XcmV3WeightLimit | {
                Unlimited: any;
            } | {
                Limited: any;
            } | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [Vec<ITuple<[u32, u128]>>, u32, XcmVersionedMultiLocation, XcmV3WeightLimit]>;
            /**
             * Transfer native currencies specifying the fee and amount as
             * separate.
             *
             * `dest_weight_limit` is the weight for XCM execution on the dest
             * chain, and it would be charged from the transferred assets. If set
             * below requirements, the execution may fail and assets wouldn't be
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
                V2: any;
            } | {
                V3: any;
            } | string | Uint8Array, destWeightLimit: XcmV3WeightLimit | {
                Unlimited: any;
            } | {
                Limited: any;
            } | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [u32, u128, u128, XcmVersionedMultiLocation, XcmV3WeightLimit]>;
            /**
             * Generic tx
             **/
            [key: string]: SubmittableExtrinsicFunction<ApiType>;
        };
        xyk: {
            burnLiquidity: AugmentedSubmittable<(firstAssetId: u32 | AnyNumber | Uint8Array, secondAssetId: u32 | AnyNumber | Uint8Array, liquidityAssetAmount: u128 | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [u32, u32, u128]>;
            /**
             * Executes buy_asset swap.
             * First the swap is prevalidated, if it is successful then the extrinsic is accepted. Beyond this point the exchange commission will be charged.
             * The bought of the bought asset is used to determine the sold asset amount.
             * If the sold asset amount is higher than the max_amount_in then it will fail on slippage.
             * The percentage exchange commission is still charged even if the swap fails on slippage. Though the swap itself will be a no-op.
             * The slippage is calculated based upon the sold asset amount.
             * Upon slippage failure, the extrinsic is marked "successful", but an event for the failure is emitted
             *
             *
             * # Args:
             * - `sold_asset_id` - The token being sold
             * - `bought_asset_id` - The token being bought
             * - `bought_asset_amount`: The amount of the bought token being bought
             * - `max_amount_in` - The maximum amount of sold asset that must be sold in order to not fail on slippage. Slippage failures still charge exchange commission.
             **/
            buyAsset: AugmentedSubmittable<(soldAssetId: u32 | AnyNumber | Uint8Array, boughtAssetId: u32 | AnyNumber | Uint8Array, boughtAssetAmount: u128 | AnyNumber | Uint8Array, maxAmountIn: u128 | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [u32, u32, u128, u128]>;
            compoundRewards: AugmentedSubmittable<(liquidityAssetId: u32 | AnyNumber | Uint8Array, amountPermille: Permill | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [u32, Permill]>;
            createPool: AugmentedSubmittable<(firstAssetId: u32 | AnyNumber | Uint8Array, firstAssetAmount: u128 | AnyNumber | Uint8Array, secondAssetId: u32 | AnyNumber | Uint8Array, secondAssetAmount: u128 | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [u32, u128, u32, u128]>;
            mintLiquidity: AugmentedSubmittable<(firstAssetId: u32 | AnyNumber | Uint8Array, secondAssetId: u32 | AnyNumber | Uint8Array, firstAssetAmount: u128 | AnyNumber | Uint8Array, expectedSecondAssetAmount: u128 | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [u32, u32, u128, u128]>;
            mintLiquidityUsingVestingNativeTokens: AugmentedSubmittable<(vestingNativeAssetAmount: u128 | AnyNumber | Uint8Array, secondAssetId: u32 | AnyNumber | Uint8Array, expectedSecondAssetAmount: u128 | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [u128, u32, u128]>;
            mintLiquidityUsingVestingNativeTokensByVestingIndex: AugmentedSubmittable<(nativeAssetVestingIndex: u32 | AnyNumber | Uint8Array, vestingNativeAssetUnlockSomeAmountOrAll: Option<u128> | null | Uint8Array | u128 | AnyNumber, secondAssetId: u32 | AnyNumber | Uint8Array, expectedSecondAssetAmount: u128 | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [u32, Option<u128>, u32, u128]>;
            /**
             * Executes a multiswap buy asset in a series of buy asset atomic swaps.
             *
             * Multiswaps must fee lock instead of paying transaction fees.
             *
             * First the multiswap is prevalidated, if it is successful then the extrinsic is accepted
             * and the exchange commission will be charged upon execution on the *first* swap using *max_amount_in*.
             * multiswap_buy_asset cannot have two (or more) atomic swaps on the same pool.
             * multiswap_buy_asset prevaildation only checks for whether there are enough funds to pay for the exchange commission.
             * Failure to have the required amount of first asset funds will result in failure (and charging of the exchange commission).
             *
             * Upon failure of an atomic swap or bad slippage, all the atomic swaps are reverted and the exchange commission is charged.
             * Upon such a failure, the extrinsic is marked "successful", but an event for the failure is emitted
             *
             * # Args:
             * - `swap_token_list` - This list of tokens is the route of the atomic swaps, starting with the asset sold and ends with the asset finally bought
             * - `bought_asset_amount`: The amount of the last asset bought
             * - `max_amount_in` - The maximum amount of first asset that can be sold in order to not fail on slippage. Slippage failures still charge exchange commission.
             **/
            multiswapBuyAsset: AugmentedSubmittable<(swapTokenList: Vec<u32> | (u32 | AnyNumber | Uint8Array)[], boughtAssetAmount: u128 | AnyNumber | Uint8Array, maxAmountIn: u128 | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [Vec<u32>, u128, u128]>;
            /**
             * Executes a multiswap sell asset in a series of sell asset atomic swaps.
             *
             * Multiswaps must fee lock instead of paying transaction fees.
             *
             * First the multiswap is prevalidated, if it is successful then the extrinsic is accepted
             * and the exchange commission will be charged upon execution on the **first** swap using **sold_asset_amount**.
             *
             * Upon failure of an atomic swap or bad slippage, all the atomic swaps are reverted and the exchange commission is charged.
             * Upon such a failure, the extrinsic is marked "successful", but an event for the failure is emitted
             *
             * # Args:
             * - `swap_token_list` - This list of tokens is the route of the atomic swaps, starting with the asset sold and ends with the asset finally bought
             * - `sold_asset_amount`: The amount of the first asset sold
             * - `min_amount_out` - The minimum amount of last asset that must be bought in order to not fail on slippage. Slippage failures still charge exchange commission.
             **/
            multiswapSellAsset: AugmentedSubmittable<(swapTokenList: Vec<u32> | (u32 | AnyNumber | Uint8Array)[], soldAssetAmount: u128 | AnyNumber | Uint8Array, minAmountOut: u128 | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [Vec<u32>, u128, u128]>;
            provideLiquidityWithConversion: AugmentedSubmittable<(liquidityAssetId: u32 | AnyNumber | Uint8Array, providedAssetId: u32 | AnyNumber | Uint8Array, providedAssetAmount: u128 | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [u32, u32, u128]>;
            /**
             * Executes sell_asset swap.
             * First the swap is prevalidated, if it is successful then the extrinsic is accepted. Beyond this point the exchange commission will be charged.
             * The sold amount of the sold asset is used to determine the bought asset amount.
             * If the bought asset amount is lower than the min_amount_out then it will fail on slippage.
             * The percentage exchange commission is still charged even if the swap fails on slippage. Though the swap itself will be a no-op.
             * The slippage is calculated based upon the sold_asset_amount.
             * Upon slippage failure, the extrinsic is marked "successful", but an event for the failure is emitted
             *
             *
             * # Args:
             * - `sold_asset_id` - The token being sold
             * - `bought_asset_id` - The token being bought
             * - `sold_asset_amount`: The amount of the sold token being sold
             * - `min_amount_out` - The minimum amount of bought asset that must be bought in order to not fail on slippage. Slippage failures still charge exchange commission.
             **/
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
            submitAndWatchExtrinsic: AugmentedRpc<(extrinsic: Extrinsic | IExtrinsic | string | Uint8Array) => Observable<ExtrinsicStatus>>;
            /**
             * Submit a fully formatted extrinsic for block inclusion
             **/
            submitExtrinsic: AugmentedRpc<(extrinsic: Extrinsic | IExtrinsic | string | Uint8Array) => Observable<Hash>>;
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
             * @deprecated Use the runtime interface `api.call.contractsApi.call` instead
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
             * @deprecated Use the runtime interface `api.call.contractsApi.getStorage` instead
             * Returns the value under a specified storage key in a contract
             **/
            getStorage: AugmentedRpc<(address: AccountId | string | Uint8Array, key: H256 | string | Uint8Array, at?: BlockHash | string | Uint8Array) => Observable<Option<Bytes>>>;
            /**
             * @deprecated Use the runtime interface `api.call.contractsApi.instantiate` instead
             * Instantiate a new contract
             **/
            instantiate: AugmentedRpc<(request: InstantiateRequestV1 | {
                origin?: any;
                value?: any;
                gasLimit?: any;
                code?: any;
                data?: any;
                salt?: any;
            } | string | Uint8Array, at?: BlockHash | string | Uint8Array) => Observable<ContractInstantiateResult>>;
            /**
             * @deprecated Not available in newer versions of the contracts interfaces
             * Returns the projected time a given contract will be able to sustain paying its rent
             **/
            rentProjection: AugmentedRpc<(address: AccountId | string | Uint8Array, at?: BlockHash | string | Uint8Array) => Observable<Option<BlockNumber>>>;
            /**
             * @deprecated Use the runtime interface `api.call.contractsApi.uploadCode` instead
             * Upload new code without instantiating a contract from it
             **/
            uploadCode: AugmentedRpc<(uploadRequest: CodeUploadRequest | {
                origin?: any;
                code?: any;
                storageDepositLimit?: any;
            } | string | Uint8Array, at?: BlockHash | string | Uint8Array) => Observable<CodeUploadResult>>;
        };
        dev: {
            /**
             * Reexecute the specified `block_hash` and gather statistics while doing so
             **/
            getBlockStats: AugmentedRpc<(at: Hash | string | Uint8Array) => Observable<Option<BlockStats>>>;
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
             * Returns fee history for given block count & reward percentiles
             **/
            feeHistory: AugmentedRpc<(blockCount: U256 | AnyNumber | Uint8Array, newestBlock: BlockNumber | AnyNumber | Uint8Array, rewardPercentiles: Option<Vec<f64>> | null | Uint8Array | Vec<f64> | (f64)[]) => Observable<EthFeeHistory>>;
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
            getTransactionCount: AugmentedRpc<(address: H160 | string | Uint8Array, number?: BlockNumber | AnyNumber | Uint8Array) => Observable<U256>>;
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
             * Returns max priority fee per gas
             **/
            maxPriorityFeePerGas: AugmentedRpc<() => Observable<U256>>;
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
             * Generate MMR proof for the given block numbers.
             **/
            generateProof: AugmentedRpc<(blockNumbers: Vec<u64> | (u64 | AnyNumber | Uint8Array)[], bestKnownBlockNumber?: u64 | AnyNumber | Uint8Array, at?: BlockHash | string | Uint8Array) => Observable<MmrLeafBatchProof>>;
            /**
             * Get the MMR root hash for the current best block.
             **/
            root: AugmentedRpc<(at?: BlockHash | string | Uint8Array) => Observable<MmrHash>>;
            /**
             * Verify an MMR proof
             **/
            verifyProof: AugmentedRpc<(proof: MmrLeafBatchProof | {
                blockHash?: any;
                leaves?: any;
                proof?: any;
            } | string | Uint8Array) => Observable<bool>>;
            /**
             * Verify an MMR proof statelessly given an mmr_root
             **/
            verifyProofStateless: AugmentedRpc<(root: MmrHash | string | Uint8Array, proof: MmrLeafBatchProof | {
                blockHash?: any;
                leaves?: any;
                proof?: any;
            } | string | Uint8Array) => Observable<bool>>;
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
             * @deprecated Use `api.call.transactionPaymentApi.queryFeeDetails` instead
             * Query the detailed fee of a given encoded extrinsic
             **/
            queryFeeDetails: AugmentedRpc<(extrinsic: Bytes | string | Uint8Array, at?: BlockHash | string | Uint8Array) => Observable<FeeDetails>>;
            /**
             * @deprecated Use `api.call.transactionPaymentApi.queryInfo` instead
             * Retrieves the fee information for an encoded extrinsic
             **/
            queryInfo: AugmentedRpc<(extrinsic: Bytes | string | Uint8Array, at?: BlockHash | string | Uint8Array) => Observable<RuntimeDispatchInfoV1>>;
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
             * @deprecated Use `api.rpc.state.getKeysPaged` to retrieve keys
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
             * @deprecated Use `api.rpc.state.getKeysPaged` to retrieve keys
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
            traceBlock: AugmentedRpc<(block: Hash | string | Uint8Array, targets: Option<Text> | null | Uint8Array | Text | string, storageKeys: Option<Text> | null | Uint8Array | Text | string, methods: Option<Text> | null | Uint8Array | Text | string) => Observable<TraceBlockResponse>>;
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

declare module '@polkadot/api-base/types/calls' {
    interface AugmentedCalls<ApiType extends ApiTypes> {
        /** 0xbc9d89904f5b923f/1 */
        accountNonceApi: {
            /**
             * The API to query account nonce (aka transaction index)
             **/
            accountNonce: AugmentedCall<ApiType, (accountId: AccountId | string | Uint8Array) => Observable<Index>>;
            /**
             * Generic call
             **/
            [key: string]: DecoratedCallBase<ApiType>;
        };
        /** 0xdd718d5cc53262d4/1 */
        auraApi: {
            /**
             * Return the current set of authorities.
             **/
            authorities: AugmentedCall<ApiType, () => Observable<Vec<AuthorityId>>>;
            /**
             * Returns the slot duration for Aura.
             **/
            slotDuration: AugmentedCall<ApiType, () => Observable<SlotDuration>>;
            /**
             * Generic call
             **/
            [key: string]: DecoratedCallBase<ApiType>;
        };
        /** 0x40fe3ad401f8959a/6 */
        blockBuilder: {
            /**
             * Apply the given extrinsic.
             **/
            applyExtrinsic: AugmentedCall<ApiType, (extrinsic: Extrinsic | IExtrinsic | string | Uint8Array) => Observable<ApplyExtrinsicResult>>;
            /**
             * Check that the inherents are valid.
             **/
            checkInherents: AugmentedCall<ApiType, (block: Block | {
                header?: any;
                extrinsics?: any;
            } | string | Uint8Array, data: InherentData | {
                data?: any;
            } | string | Uint8Array) => Observable<CheckInherentsResult>>;
            /**
             * Finish the current block.
             **/
            finalizeBlock: AugmentedCall<ApiType, () => Observable<Header>>;
            /**
             * Generate inherent extrinsics.
             **/
            inherentExtrinsics: AugmentedCall<ApiType, (inherent: InherentData | {
                data?: any;
            } | string | Uint8Array) => Observable<Vec<Extrinsic>>>;
            /**
             * Generic call
             **/
            [key: string]: DecoratedCallBase<ApiType>;
        };
        /** 0xea93e3f16f3d6962/2 */
        collectCollationInfo: {
            /**
             * Collect information about a collation.
             **/
            collectCollationInfo: AugmentedCall<ApiType, (header: Header | {
                parentHash?: any;
                number?: any;
                stateRoot?: any;
                extrinsicsRoot?: any;
                digest?: any;
                seed?: any;
                count?: any;
            } | string | Uint8Array) => Observable<CollationInfo>>;
            /**
             * Generic call
             **/
            [key: string]: DecoratedCallBase<ApiType>;
        };
        /** 0xdf6acb689907609b/4 */
        core: {
            /**
             * Execute the given block.
             **/
            executeBlock: AugmentedCall<ApiType, (block: Block | {
                header?: any;
                extrinsics?: any;
            } | string | Uint8Array) => Observable<Null>>;
            /**
             * Initialize a block with the given header.
             **/
            initializeBlock: AugmentedCall<ApiType, (header: Header | {
                parentHash?: any;
                number?: any;
                stateRoot?: any;
                extrinsicsRoot?: any;
                digest?: any;
                seed?: any;
                count?: any;
            } | string | Uint8Array) => Observable<Null>>;
            /**
             * Returns the version of the runtime.
             **/
            version: AugmentedCall<ApiType, () => Observable<RuntimeVersion>>;
            /**
             * Generic call
             **/
            [key: string]: DecoratedCallBase<ApiType>;
        };
        /** 0x37e397fc7c91f5e4/1 */
        metadata: {
            /**
             * Returns the metadata of a runtime
             **/
            metadata: AugmentedCall<ApiType, () => Observable<OpaqueMetadata>>;
            /**
             * Generic call
             **/
            [key: string]: DecoratedCallBase<ApiType>;
        };
        /** 0xf78b278be53f454c/2 */
        offchainWorkerApi: {
            /**
             * Starts the off-chain task for given block header.
             **/
            offchainWorker: AugmentedCall<ApiType, (header: Header | {
                parentHash?: any;
                number?: any;
                stateRoot?: any;
                extrinsicsRoot?: any;
                digest?: any;
                seed?: any;
                count?: any;
            } | string | Uint8Array) => Observable<Null>>;
            /**
             * Generic call
             **/
            [key: string]: DecoratedCallBase<ApiType>;
        };
        /** 0xab3c0572291feb8b/1 */
        sessionKeys: {
            /**
             * Decode the given public session keys.
             **/
            decodeSessionKeys: AugmentedCall<ApiType, (encoded: Bytes | string | Uint8Array) => Observable<Option<Vec<ITuple<[Bytes, KeyTypeId]>>>>>;
            /**
             * Generate a set of session keys with optionally using the given seed.
             **/
            generateSessionKeys: AugmentedCall<ApiType, (seed: Option<Bytes> | null | Uint8Array | Bytes | string) => Observable<Bytes>>;
            /**
             * Generic call
             **/
            [key: string]: DecoratedCallBase<ApiType>;
        };
        /** 0xd2bc9897eed08f15/3 */
        taggedTransactionQueue: {
            /**
             * Validate the transaction.
             **/
            validateTransaction: AugmentedCall<ApiType, (source: TransactionSource | 'InBlock' | 'Local' | 'External' | number | Uint8Array, tx: Extrinsic | IExtrinsic | string | Uint8Array, blockHash: BlockHash | string | Uint8Array) => Observable<TransactionValidity>>;
            /**
             * Generic call
             **/
            [key: string]: DecoratedCallBase<ApiType>;
        };
        /** 0x37c8bb1350a9a2a8/2 */
        transactionPaymentApi: {
            /**
             * The transaction fee details
             **/
            queryFeeDetails: AugmentedCall<ApiType, (uxt: Extrinsic | IExtrinsic | string | Uint8Array, len: u32 | AnyNumber | Uint8Array) => Observable<FeeDetails>>;
            /**
             * The transaction info
             **/
            queryInfo: AugmentedCall<ApiType, (uxt: Extrinsic | IExtrinsic | string | Uint8Array, len: u32 | AnyNumber | Uint8Array) => Observable<RuntimeDispatchInfo>>;
            /**
             * Generic call
             **/
            [key: string]: DecoratedCallBase<ApiType>;
        };
    }
}

/** @name NumberOrHex */
interface NumberOrHex extends Enum {
    readonly isNumber: boolean;
    readonly asNumber: u64;
    readonly isHex: boolean;
    readonly asHex: U256;
    readonly type: 'Number' | 'Hex';
}
/** @name ShufflingSeed */
interface ShufflingSeed extends Struct {
    readonly seed: H256;
    readonly proof: H512;
}
/** @name TokenId */
interface TokenId extends u32 {
}
/** @name VestingInfo */
interface VestingInfo extends Struct {
    readonly locked: Balance;
    readonly perBlock: Balance;
    readonly startingBlock: BlockNumber;
}
/** @name VestingInfosWithLockedAt */
interface VestingInfosWithLockedAt extends Struct {
    readonly vestingInfosWithLockedAt: Vec<ITuple<[VestingInfo, Balance]>>;
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
        AccountId33: AccountId33;
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
        ApplyExtrinsicResultPre6: ApplyExtrinsicResultPre6;
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
        BabeGenesisConfiguration: BabeGenesisConfiguration;
        BabeGenesisConfigurationV1: BabeGenesisConfigurationV1;
        BabeWeight: BabeWeight;
        BackedCandidate: BackedCandidate;
        Balance: Balance;
        BalanceLock: BalanceLock;
        BalanceLockTo212: BalanceLockTo212;
        BalanceOf: BalanceOf;
        BalanceStatus: BalanceStatus;
        BeefyAuthoritySet: BeefyAuthoritySet;
        BeefyCommitment: BeefyCommitment;
        BeefyEquivocationProof: BeefyEquivocationProof;
        BeefyId: BeefyId;
        BeefyKey: BeefyKey;
        BeefyNextAuthoritySet: BeefyNextAuthoritySet;
        BeefyPayload: BeefyPayload;
        BeefyPayloadId: BeefyPayloadId;
        BeefySignedCommitment: BeefySignedCommitment;
        BeefyVoteMessage: BeefyVoteMessage;
        BenchmarkBatch: BenchmarkBatch;
        BenchmarkConfig: BenchmarkConfig;
        BenchmarkList: BenchmarkList;
        BenchmarkMetadata: BenchmarkMetadata;
        BenchmarkParameter: BenchmarkParameter;
        BenchmarkResult: BenchmarkResult;
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
        BlockStats: BlockStats;
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
        CandidateEvent: CandidateEvent;
        CandidateHash: CandidateHash;
        CandidateInfo: CandidateInfo;
        CandidatePendingAvailability: CandidatePendingAvailability;
        CandidateReceipt: CandidateReceipt;
        ChainId: ChainId;
        ChainProperties: ChainProperties;
        ChainType: ChainType;
        ChangesTrieConfiguration: ChangesTrieConfiguration;
        ChangesTrieSignal: ChangesTrieSignal;
        CheckInherentsResult: CheckInherentsResult;
        ClassDetails: ClassDetails;
        ClassId: ClassId;
        ClassMetadata: ClassMetadata;
        CodecHash: CodecHash;
        CodeHash: CodeHash;
        CodeSource: CodeSource;
        CodeUploadRequest: CodeUploadRequest;
        CodeUploadResult: CodeUploadResult;
        CodeUploadResultValue: CodeUploadResultValue;
        CollationInfo: CollationInfo;
        CollationInfoV1: CollationInfoV1;
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
        ContractConstructorSpecV4: ContractConstructorSpecV4;
        ContractContractSpecV0: ContractContractSpecV0;
        ContractContractSpecV1: ContractContractSpecV1;
        ContractContractSpecV2: ContractContractSpecV2;
        ContractContractSpecV3: ContractContractSpecV3;
        ContractContractSpecV4: ContractContractSpecV4;
        ContractCryptoHasher: ContractCryptoHasher;
        ContractDiscriminant: ContractDiscriminant;
        ContractDisplayName: ContractDisplayName;
        ContractEnvironmentV4: ContractEnvironmentV4;
        ContractEventParamSpecLatest: ContractEventParamSpecLatest;
        ContractEventParamSpecV0: ContractEventParamSpecV0;
        ContractEventParamSpecV2: ContractEventParamSpecV2;
        ContractEventSpecLatest: ContractEventSpecLatest;
        ContractEventSpecV0: ContractEventSpecV0;
        ContractEventSpecV1: ContractEventSpecV1;
        ContractEventSpecV2: ContractEventSpecV2;
        ContractExecResult: ContractExecResult;
        ContractExecResultOk: ContractExecResultOk;
        ContractExecResultResult: ContractExecResultResult;
        ContractExecResultSuccessTo255: ContractExecResultSuccessTo255;
        ContractExecResultSuccessTo260: ContractExecResultSuccessTo260;
        ContractExecResultTo255: ContractExecResultTo255;
        ContractExecResultTo260: ContractExecResultTo260;
        ContractExecResultTo267: ContractExecResultTo267;
        ContractExecResultU64: ContractExecResultU64;
        ContractInfo: ContractInfo;
        ContractInstantiateResult: ContractInstantiateResult;
        ContractInstantiateResultTo267: ContractInstantiateResultTo267;
        ContractInstantiateResultTo299: ContractInstantiateResultTo299;
        ContractInstantiateResultU64: ContractInstantiateResultU64;
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
        ContractMessageSpecV3: ContractMessageSpecV3;
        ContractMetadata: ContractMetadata;
        ContractMetadataLatest: ContractMetadataLatest;
        ContractMetadataV0: ContractMetadataV0;
        ContractMetadataV1: ContractMetadataV1;
        ContractMetadataV2: ContractMetadataV2;
        ContractMetadataV3: ContractMetadataV3;
        ContractMetadataV4: ContractMetadataV4;
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
        CoreState: CoreState;
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
        DispatchErrorModulePre6: DispatchErrorModulePre6;
        DispatchErrorModuleU8: DispatchErrorModuleU8;
        DispatchErrorModuleU8a: DispatchErrorModuleU8a;
        DispatchErrorPre6: DispatchErrorPre6;
        DispatchErrorPre6First: DispatchErrorPre6First;
        DispatchErrorTo198: DispatchErrorTo198;
        DispatchFeePayment: DispatchFeePayment;
        DispatchInfo: DispatchInfo;
        DispatchInfoTo190: DispatchInfoTo190;
        DispatchInfoTo244: DispatchInfoTo244;
        DispatchOutcome: DispatchOutcome;
        DispatchOutcomePre6: DispatchOutcomePre6;
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
        Epoch: Epoch;
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
        EthFeeHistory: EthFeeHistory;
        EthFilter: EthFilter;
        EthFilterAddress: EthFilterAddress;
        EthFilterChanges: EthFilterChanges;
        EthFilterTopic: EthFilterTopic;
        EthFilterTopicEntry: EthFilterTopicEntry;
        EthFilterTopicInner: EthFilterTopicInner;
        EthHeader: EthHeader;
        EthLog: EthLog;
        EthReceipt: EthReceipt;
        EthReceiptV0: EthReceiptV0;
        EthReceiptV3: EthReceiptV3;
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
        EvmCallInfo: EvmCallInfo;
        EvmCreateInfo: EvmCreateInfo;
        EvmLog: EvmLog;
        EvmVicinity: EvmVicinity;
        ExecReturnValue: ExecReturnValue;
        ExecutorParam: ExecutorParam;
        ExecutorParams: ExecutorParams;
        ExecutorParamsHash: ExecutorParamsHash;
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
        f32: f32;
        F32: F32;
        f64: f64;
        F64: F64;
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
        FungiblesAccessError: FungiblesAccessError;
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
        GroupRotationInfo: GroupRotationInfo;
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
        InherentData: InherentData;
        InherentIdentifier: InherentIdentifier;
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
        isize: isize;
        ISize: ISize;
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
        MetadataV15: MetadataV15;
        MetadataV9: MetadataV9;
        MigrationStatusResult: MigrationStatusResult;
        MmrBatchProof: MmrBatchProof;
        MmrEncodableOpaqueLeaf: MmrEncodableOpaqueLeaf;
        MmrError: MmrError;
        MmrHash: MmrHash;
        MmrLeafBatchProof: MmrLeafBatchProof;
        MmrLeafIndex: MmrLeafIndex;
        MmrLeafProof: MmrLeafProof;
        MmrNodeIndex: MmrNodeIndex;
        MmrProof: MmrProof;
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
        NftCollectionId: NftCollectionId;
        NftItemId: NftItemId;
        NodeRole: NodeRole;
        Nominations: Nominations;
        NominatorIndex: NominatorIndex;
        NominatorIndexCompact: NominatorIndexCompact;
        NotConnectedPeer: NotConnectedPeer;
        NpApiError: NpApiError;
        NpPoolId: NpPoolId;
        Null: Null;
        NumberOrHex: NumberOrHex;
        OccupiedCore: OccupiedCore;
        OccupiedCoreAssumption: OccupiedCoreAssumption;
        OffchainAccuracy: OffchainAccuracy;
        OffchainAccuracyCompact: OffchainAccuracyCompact;
        OffenceDetails: OffenceDetails;
        Offender: Offender;
        OldV1SessionInfo: OldV1SessionInfo;
        OpaqueCall: OpaqueCall;
        OpaqueKeyOwnershipProof: OpaqueKeyOwnershipProof;
        OpaqueMetadata: OpaqueMetadata;
        OpaqueMultiaddr: OpaqueMultiaddr;
        OpaqueNetworkState: OpaqueNetworkState;
        OpaquePeerId: OpaquePeerId;
        OpaqueTimeSlot: OpaqueTimeSlot;
        OpenTip: OpenTip;
        OpenTipFinderTo225: OpenTipFinderTo225;
        OpenTipTip: OpenTipTip;
        OpenTipTo225: OpenTipTo225;
        OperatingMode: OperatingMode;
        OptionBool: OptionBool;
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
        PalletMetadataV15: PalletMetadataV15;
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
        PvfCheckStatement: PvfCheckStatement;
        PvfExecTimeoutKind: PvfExecTimeoutKind;
        PvfPrepTimeoutKind: PvfPrepTimeoutKind;
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
        RpcMethods: RpcMethods;
        RuntimeApiMetadataLatest: RuntimeApiMetadataLatest;
        RuntimeApiMetadataV15: RuntimeApiMetadataV15;
        RuntimeApiMethodMetadataV15: RuntimeApiMethodMetadataV15;
        RuntimeApiMethodParamMetadataV15: RuntimeApiMethodParamMetadataV15;
        RuntimeCall: RuntimeCall;
        RuntimeDbWeight: RuntimeDbWeight;
        RuntimeDispatchInfo: RuntimeDispatchInfo;
        RuntimeDispatchInfoV1: RuntimeDispatchInfoV1;
        RuntimeDispatchInfoV2: RuntimeDispatchInfoV2;
        RuntimeEvent: RuntimeEvent;
        RuntimeVersion: RuntimeVersion;
        RuntimeVersionApi: RuntimeVersionApi;
        RuntimeVersionPartial: RuntimeVersionPartial;
        RuntimeVersionPre3: RuntimeVersionPre3;
        RuntimeVersionPre4: RuntimeVersionPre4;
        Schedule: Schedule;
        Scheduled: Scheduled;
        ScheduledCore: ScheduledCore;
        ScheduledTo254: ScheduledTo254;
        SchedulePeriod: SchedulePeriod;
        SchedulePriority: SchedulePriority;
        ScheduleTo212: ScheduleTo212;
        ScheduleTo258: ScheduleTo258;
        ScheduleTo264: ScheduleTo264;
        Scheduling: Scheduling;
        ScrapedOnChainVotes: ScrapedOnChainVotes;
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
        SlotDuration: SlotDuration;
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
        StorageInfo: StorageInfo;
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
        TransactionalError: TransactionalError;
        TransactionInfo: TransactionInfo;
        TransactionLongevity: TransactionLongevity;
        TransactionPriority: TransactionPriority;
        TransactionSource: TransactionSource;
        TransactionStorageProof: TransactionStorageProof;
        TransactionTag: TransactionTag;
        TransactionV0: TransactionV0;
        TransactionV1: TransactionV1;
        TransactionV2: TransactionV2;
        TransactionValidity: TransactionValidity;
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
        ValidatorSet: ValidatorSet;
        ValidatorSetId: ValidatorSetId;
        ValidatorSignature: ValidatorSignature;
        ValidDisputeStatementKind: ValidDisputeStatementKind;
        ValidityAttestation: ValidityAttestation;
        ValidTransaction: ValidTransaction;
        VecInboundHrmpMessage: VecInboundHrmpMessage;
        VersionedMultiAsset: VersionedMultiAsset;
        VersionedMultiAssets: VersionedMultiAssets;
        VersionedMultiLocation: VersionedMultiLocation;
        VersionedResponse: VersionedResponse;
        VersionedXcm: VersionedXcm;
        VersionMigrationStage: VersionMigrationStage;
        VestingInfo: VestingInfo$1;
        VestingInfosWithLockedAt: VestingInfosWithLockedAt;
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
        WeightV0: WeightV0;
        WeightV1: WeightV1;
        WeightV2: WeightV2;
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

declare module '@polkadot/types/lookup' {
    /** @name FrameSystemAccountInfo (3) */
    interface FrameSystemAccountInfo extends Struct {
        readonly nonce: u32;
        readonly consumers: u32;
        readonly providers: u32;
        readonly sufficients: u32;
        readonly data: Null;
    }
    /** @name FrameSupportDispatchPerDispatchClassWeight (6) */
    interface FrameSupportDispatchPerDispatchClassWeight extends Struct {
        readonly normal: SpWeightsWeightV2Weight;
        readonly operational: SpWeightsWeightV2Weight;
        readonly mandatory: SpWeightsWeightV2Weight;
    }
    /** @name SpWeightsWeightV2Weight (7) */
    interface SpWeightsWeightV2Weight extends Struct {
        readonly refTime: Compact<u64>;
        readonly proofSize: Compact<u64>;
    }
    /** @name SpRuntimeDigest (20) */
    interface SpRuntimeDigest extends Struct {
        readonly logs: Vec<SpRuntimeDigestDigestItem>;
    }
    /** @name SpRuntimeDigestDigestItem (22) */
    interface SpRuntimeDigestDigestItem extends Enum {
        readonly isOther: boolean;
        readonly asOther: Bytes;
        readonly isConsensus: boolean;
        readonly asConsensus: ITuple<[U8aFixed, Bytes]>;
        readonly isSeal: boolean;
        readonly asSeal: ITuple<[U8aFixed, Bytes]>;
        readonly isPreRuntime: boolean;
        readonly asPreRuntime: ITuple<[U8aFixed, Bytes]>;
        readonly isRuntimeEnvironmentUpdated: boolean;
        readonly type: 'Other' | 'Consensus' | 'Seal' | 'PreRuntime' | 'RuntimeEnvironmentUpdated';
    }
    /** @name FrameSystemEventRecord (25) */
    interface FrameSystemEventRecord extends Struct {
        readonly phase: FrameSystemPhase;
        readonly event: Event;
        readonly topics: Vec<H256>;
    }
    /** @name FrameSystemEvent (27) */
    interface FrameSystemEvent extends Enum {
        readonly isExtrinsicSuccess: boolean;
        readonly asExtrinsicSuccess: {
            readonly dispatchInfo: FrameSupportDispatchDispatchInfo;
        } & Struct;
        readonly isExtrinsicFailed: boolean;
        readonly asExtrinsicFailed: {
            readonly dispatchError: SpRuntimeDispatchError;
            readonly dispatchInfo: FrameSupportDispatchDispatchInfo;
        } & Struct;
        readonly isCodeUpdated: boolean;
        readonly isNewAccount: boolean;
        readonly asNewAccount: {
            readonly account: AccountId32;
        } & Struct;
        readonly isKilledAccount: boolean;
        readonly asKilledAccount: {
            readonly account: AccountId32;
        } & Struct;
        readonly isRemarked: boolean;
        readonly asRemarked: {
            readonly sender: AccountId32;
            readonly hash_: H256;
        } & Struct;
        readonly isTxsEnqueued: boolean;
        readonly asTxsEnqueued: {
            readonly count: u64;
        } & Struct;
        readonly type: 'ExtrinsicSuccess' | 'ExtrinsicFailed' | 'CodeUpdated' | 'NewAccount' | 'KilledAccount' | 'Remarked' | 'TxsEnqueued';
    }
    /** @name FrameSupportDispatchDispatchInfo (28) */
    interface FrameSupportDispatchDispatchInfo extends Struct {
        readonly weight: SpWeightsWeightV2Weight;
        readonly class: FrameSupportDispatchDispatchClass;
        readonly paysFee: FrameSupportDispatchPays;
    }
    /** @name FrameSupportDispatchDispatchClass (29) */
    interface FrameSupportDispatchDispatchClass extends Enum {
        readonly isNormal: boolean;
        readonly isOperational: boolean;
        readonly isMandatory: boolean;
        readonly type: 'Normal' | 'Operational' | 'Mandatory';
    }
    /** @name FrameSupportDispatchPays (30) */
    interface FrameSupportDispatchPays extends Enum {
        readonly isYes: boolean;
        readonly isNo: boolean;
        readonly type: 'Yes' | 'No';
    }
    /** @name SpRuntimeDispatchError (31) */
    interface SpRuntimeDispatchError extends Enum {
        readonly isOther: boolean;
        readonly isCannotLookup: boolean;
        readonly isBadOrigin: boolean;
        readonly isModule: boolean;
        readonly asModule: SpRuntimeModuleError;
        readonly isConsumerRemaining: boolean;
        readonly isNoProviders: boolean;
        readonly isTooManyConsumers: boolean;
        readonly isToken: boolean;
        readonly asToken: SpRuntimeTokenError;
        readonly isArithmetic: boolean;
        readonly asArithmetic: SpArithmeticArithmeticError;
        readonly isTransactional: boolean;
        readonly asTransactional: SpRuntimeTransactionalError;
        readonly isExhausted: boolean;
        readonly isCorruption: boolean;
        readonly isUnavailable: boolean;
        readonly type: 'Other' | 'CannotLookup' | 'BadOrigin' | 'Module' | 'ConsumerRemaining' | 'NoProviders' | 'TooManyConsumers' | 'Token' | 'Arithmetic' | 'Transactional' | 'Exhausted' | 'Corruption' | 'Unavailable';
    }
    /** @name SpRuntimeModuleError (32) */
    interface SpRuntimeModuleError extends Struct {
        readonly index: u8;
        readonly error: U8aFixed;
    }
    /** @name SpRuntimeTokenError (33) */
    interface SpRuntimeTokenError extends Enum {
        readonly isNoFunds: boolean;
        readonly isWouldDie: boolean;
        readonly isBelowMinimum: boolean;
        readonly isCannotCreate: boolean;
        readonly isUnknownAsset: boolean;
        readonly isFrozen: boolean;
        readonly isUnsupported: boolean;
        readonly type: 'NoFunds' | 'WouldDie' | 'BelowMinimum' | 'CannotCreate' | 'UnknownAsset' | 'Frozen' | 'Unsupported';
    }
    /** @name SpArithmeticArithmeticError (34) */
    interface SpArithmeticArithmeticError extends Enum {
        readonly isUnderflow: boolean;
        readonly isOverflow: boolean;
        readonly isDivisionByZero: boolean;
        readonly type: 'Underflow' | 'Overflow' | 'DivisionByZero';
    }
    /** @name SpRuntimeTransactionalError (35) */
    interface SpRuntimeTransactionalError extends Enum {
        readonly isLimitReached: boolean;
        readonly isNoLayer: boolean;
        readonly type: 'LimitReached' | 'NoLayer';
    }
    /** @name CumulusPalletParachainSystemEvent (36) */
    interface CumulusPalletParachainSystemEvent extends Enum {
        readonly isValidationFunctionStored: boolean;
        readonly isValidationFunctionApplied: boolean;
        readonly asValidationFunctionApplied: {
            readonly relayChainBlockNum: u32;
        } & Struct;
        readonly isValidationFunctionDiscarded: boolean;
        readonly isUpgradeAuthorized: boolean;
        readonly asUpgradeAuthorized: {
            readonly codeHash: H256;
        } & Struct;
        readonly isDownwardMessagesReceived: boolean;
        readonly asDownwardMessagesReceived: {
            readonly count: u32;
        } & Struct;
        readonly isDownwardMessagesProcessed: boolean;
        readonly asDownwardMessagesProcessed: {
            readonly weightUsed: SpWeightsWeightV2Weight;
            readonly dmqHead: H256;
        } & Struct;
        readonly isUpwardMessageSent: boolean;
        readonly asUpwardMessageSent: {
            readonly messageHash: Option<U8aFixed>;
        } & Struct;
        readonly type: 'ValidationFunctionStored' | 'ValidationFunctionApplied' | 'ValidationFunctionDiscarded' | 'UpgradeAuthorized' | 'DownwardMessagesReceived' | 'DownwardMessagesProcessed' | 'UpwardMessageSent';
    }
    /** @name PalletUtilityMangataEvent (38) */
    interface PalletUtilityMangataEvent extends Enum {
        readonly isBatchInterrupted: boolean;
        readonly asBatchInterrupted: {
            readonly index: u32;
            readonly error: SpRuntimeDispatchError;
        } & Struct;
        readonly isBatchCompleted: boolean;
        readonly isBatchCompletedWithErrors: boolean;
        readonly isItemCompleted: boolean;
        readonly isItemFailed: boolean;
        readonly asItemFailed: {
            readonly error: SpRuntimeDispatchError;
        } & Struct;
        readonly isDispatchedAs: boolean;
        readonly asDispatchedAs: {
            readonly result: Result<Null, SpRuntimeDispatchError>;
        } & Struct;
        readonly type: 'BatchInterrupted' | 'BatchCompleted' | 'BatchCompletedWithErrors' | 'ItemCompleted' | 'ItemFailed' | 'DispatchedAs';
    }
    /** @name PalletProxyEvent (40) */
    interface PalletProxyEvent extends Enum {
        readonly isProxyExecuted: boolean;
        readonly asProxyExecuted: {
            readonly result: Result<Null, SpRuntimeDispatchError>;
        } & Struct;
        readonly isPureCreated: boolean;
        readonly asPureCreated: {
            readonly pure: AccountId32;
            readonly who: AccountId32;
            readonly proxyType: CommonRuntimeConfigPalletProxyProxyType;
            readonly disambiguationIndex: u16;
        } & Struct;
        readonly isAnnounced: boolean;
        readonly asAnnounced: {
            readonly real: AccountId32;
            readonly proxy: AccountId32;
            readonly callHash: H256;
        } & Struct;
        readonly isProxyAdded: boolean;
        readonly asProxyAdded: {
            readonly delegator: AccountId32;
            readonly delegatee: AccountId32;
            readonly proxyType: CommonRuntimeConfigPalletProxyProxyType;
            readonly delay: u32;
        } & Struct;
        readonly isProxyRemoved: boolean;
        readonly asProxyRemoved: {
            readonly delegator: AccountId32;
            readonly delegatee: AccountId32;
            readonly proxyType: CommonRuntimeConfigPalletProxyProxyType;
            readonly delay: u32;
        } & Struct;
        readonly type: 'ProxyExecuted' | 'PureCreated' | 'Announced' | 'ProxyAdded' | 'ProxyRemoved';
    }
    /** @name CommonRuntimeConfigPalletProxyProxyType (41) */
    interface CommonRuntimeConfigPalletProxyProxyType extends Enum {
        readonly isAutoCompound: boolean;
        readonly type: 'AutoCompound';
    }
    /** @name PalletMaintenanceEvent (43) */
    interface PalletMaintenanceEvent extends Enum {
        readonly isMaintenanceModeSwitchedOn: boolean;
        readonly asMaintenanceModeSwitchedOn: AccountId32;
        readonly isMaintenanceModeSwitchedOff: boolean;
        readonly asMaintenanceModeSwitchedOff: AccountId32;
        readonly isUpgradabilityInMaintenanceModeSwitchedOn: boolean;
        readonly asUpgradabilityInMaintenanceModeSwitchedOn: AccountId32;
        readonly isUpgradabilityInMaintenanceModeSwitchedOff: boolean;
        readonly asUpgradabilityInMaintenanceModeSwitchedOff: AccountId32;
        readonly type: 'MaintenanceModeSwitchedOn' | 'MaintenanceModeSwitchedOff' | 'UpgradabilityInMaintenanceModeSwitchedOn' | 'UpgradabilityInMaintenanceModeSwitchedOff';
    }
    /** @name OrmlTokensModuleEvent (44) */
    interface OrmlTokensModuleEvent extends Enum {
        readonly isEndowed: boolean;
        readonly asEndowed: {
            readonly currencyId: u32;
            readonly who: AccountId32;
            readonly amount: u128;
        } & Struct;
        readonly isDustLost: boolean;
        readonly asDustLost: {
            readonly currencyId: u32;
            readonly who: AccountId32;
            readonly amount: u128;
        } & Struct;
        readonly isTransfer: boolean;
        readonly asTransfer: {
            readonly currencyId: u32;
            readonly from: AccountId32;
            readonly to: AccountId32;
            readonly amount: u128;
        } & Struct;
        readonly isReserved: boolean;
        readonly asReserved: {
            readonly currencyId: u32;
            readonly who: AccountId32;
            readonly amount: u128;
        } & Struct;
        readonly isUnreserved: boolean;
        readonly asUnreserved: {
            readonly currencyId: u32;
            readonly who: AccountId32;
            readonly amount: u128;
        } & Struct;
        readonly isReserveRepatriated: boolean;
        readonly asReserveRepatriated: {
            readonly currencyId: u32;
            readonly from: AccountId32;
            readonly to: AccountId32;
            readonly amount: u128;
            readonly status: FrameSupportTokensMiscBalanceStatus;
        } & Struct;
        readonly isBalanceSet: boolean;
        readonly asBalanceSet: {
            readonly currencyId: u32;
            readonly who: AccountId32;
            readonly free: u128;
            readonly reserved: u128;
        } & Struct;
        readonly isTotalIssuanceSet: boolean;
        readonly asTotalIssuanceSet: {
            readonly currencyId: u32;
            readonly amount: u128;
        } & Struct;
        readonly isWithdrawn: boolean;
        readonly asWithdrawn: {
            readonly currencyId: u32;
            readonly who: AccountId32;
            readonly amount: u128;
        } & Struct;
        readonly isSlashed: boolean;
        readonly asSlashed: {
            readonly currencyId: u32;
            readonly who: AccountId32;
            readonly freeAmount: u128;
            readonly reservedAmount: u128;
        } & Struct;
        readonly isDeposited: boolean;
        readonly asDeposited: {
            readonly currencyId: u32;
            readonly who: AccountId32;
            readonly amount: u128;
        } & Struct;
        readonly isLockSet: boolean;
        readonly asLockSet: {
            readonly lockId: U8aFixed;
            readonly currencyId: u32;
            readonly who: AccountId32;
            readonly amount: u128;
        } & Struct;
        readonly isLockRemoved: boolean;
        readonly asLockRemoved: {
            readonly lockId: U8aFixed;
            readonly currencyId: u32;
            readonly who: AccountId32;
        } & Struct;
        readonly isIssued: boolean;
        readonly asIssued: ITuple<[u32, AccountId32, u128]>;
        readonly isMinted: boolean;
        readonly asMinted: ITuple<[u32, AccountId32, u128]>;
        readonly isLocked: boolean;
        readonly asLocked: {
            readonly currencyId: u32;
            readonly who: AccountId32;
            readonly amount: u128;
        } & Struct;
        readonly isUnlocked: boolean;
        readonly asUnlocked: {
            readonly currencyId: u32;
            readonly who: AccountId32;
            readonly amount: u128;
        } & Struct;
        readonly type: 'Endowed' | 'DustLost' | 'Transfer' | 'Reserved' | 'Unreserved' | 'ReserveRepatriated' | 'BalanceSet' | 'TotalIssuanceSet' | 'Withdrawn' | 'Slashed' | 'Deposited' | 'LockSet' | 'LockRemoved' | 'Issued' | 'Minted' | 'Locked' | 'Unlocked';
    }
    /** @name FrameSupportTokensMiscBalanceStatus (46) */
    interface FrameSupportTokensMiscBalanceStatus extends Enum {
        readonly isFree: boolean;
        readonly isReserved: boolean;
        readonly type: 'Free' | 'Reserved';
    }
    /** @name PalletTransactionPaymentMangataEvent (48) */
    interface PalletTransactionPaymentMangataEvent extends Enum {
        readonly isTransactionFeePaid: boolean;
        readonly asTransactionFeePaid: {
            readonly who: AccountId32;
            readonly actualFee: u128;
            readonly tip: u128;
        } & Struct;
        readonly type: 'TransactionFeePaid';
    }
    /** @name PalletXykEvent (49) */
    interface PalletXykEvent extends Enum {
        readonly isPoolCreated: boolean;
        readonly asPoolCreated: ITuple<[AccountId32, u32, u128, u32, u128]>;
        readonly isAssetsSwapped: boolean;
        readonly asAssetsSwapped: ITuple<[AccountId32, Vec<u32>, u128, u128]>;
        readonly isSellAssetFailedDueToSlippage: boolean;
        readonly asSellAssetFailedDueToSlippage: ITuple<[AccountId32, u32, u128, u32, u128, u128]>;
        readonly isBuyAssetFailedDueToSlippage: boolean;
        readonly asBuyAssetFailedDueToSlippage: ITuple<[AccountId32, u32, u128, u32, u128, u128]>;
        readonly isLiquidityMinted: boolean;
        readonly asLiquidityMinted: ITuple<[AccountId32, u32, u128, u32, u128, u32, u128]>;
        readonly isLiquidityBurned: boolean;
        readonly asLiquidityBurned: ITuple<[AccountId32, u32, u128, u32, u128, u32, u128]>;
        readonly isPoolPromotionUpdated: boolean;
        readonly asPoolPromotionUpdated: ITuple<[u32, Option<u8>]>;
        readonly isLiquidityActivated: boolean;
        readonly asLiquidityActivated: ITuple<[AccountId32, u32, u128]>;
        readonly isLiquidityDeactivated: boolean;
        readonly asLiquidityDeactivated: ITuple<[AccountId32, u32, u128]>;
        readonly isRewardsClaimed: boolean;
        readonly asRewardsClaimed: ITuple<[AccountId32, u32, u128]>;
        readonly isMultiSwapAssetFailedOnAtomicSwap: boolean;
        readonly asMultiSwapAssetFailedOnAtomicSwap: ITuple<[AccountId32, Vec<u32>, u128, SpRuntimeModuleError]>;
        readonly type: 'PoolCreated' | 'AssetsSwapped' | 'SellAssetFailedDueToSlippage' | 'BuyAssetFailedDueToSlippage' | 'LiquidityMinted' | 'LiquidityBurned' | 'PoolPromotionUpdated' | 'LiquidityActivated' | 'LiquidityDeactivated' | 'RewardsClaimed' | 'MultiSwapAssetFailedOnAtomicSwap';
    }
    /** @name PalletProofOfStakeEvent (52) */
    interface PalletProofOfStakeEvent extends Enum {
        readonly isPoolPromotionUpdated: boolean;
        readonly asPoolPromotionUpdated: ITuple<[u32, Option<u8>]>;
        readonly isLiquidityActivated: boolean;
        readonly asLiquidityActivated: ITuple<[AccountId32, u32, u128]>;
        readonly isLiquidityDeactivated: boolean;
        readonly asLiquidityDeactivated: ITuple<[AccountId32, u32, u128]>;
        readonly isRewardsClaimed: boolean;
        readonly asRewardsClaimed: ITuple<[AccountId32, u32, u128]>;
        readonly type: 'PoolPromotionUpdated' | 'LiquidityActivated' | 'LiquidityDeactivated' | 'RewardsClaimed';
    }
    /** @name PalletFeeLockEvent (53) */
    interface PalletFeeLockEvent extends Enum {
        readonly isFeeLockMetadataUpdated: boolean;
        readonly isFeeLockUnlocked: boolean;
        readonly asFeeLockUnlocked: ITuple<[AccountId32, u128]>;
        readonly isFeeLocked: boolean;
        readonly asFeeLocked: {
            readonly who: AccountId32;
            readonly lockAmount: u128;
            readonly totalLocked: u128;
        } & Struct;
        readonly type: 'FeeLockMetadataUpdated' | 'FeeLockUnlocked' | 'FeeLocked';
    }
    /** @name PalletVestingMangataEvent (54) */
    interface PalletVestingMangataEvent extends Enum {
        readonly isVestingUpdated: boolean;
        readonly asVestingUpdated: ITuple<[AccountId32, u32, u128]>;
        readonly isVestingCompleted: boolean;
        readonly asVestingCompleted: ITuple<[AccountId32, u32]>;
        readonly type: 'VestingUpdated' | 'VestingCompleted';
    }
    /** @name PalletCrowdloanRewardsEvent (55) */
    interface PalletCrowdloanRewardsEvent extends Enum {
        readonly isInitialPaymentMade: boolean;
        readonly asInitialPaymentMade: ITuple<[AccountId32, u128]>;
        readonly isNativeIdentityAssociated: boolean;
        readonly asNativeIdentityAssociated: ITuple<[AccountId32, AccountId32, u128]>;
        readonly isRewardsPaid: boolean;
        readonly asRewardsPaid: ITuple<[AccountId32, u128]>;
        readonly isRewardAddressUpdated: boolean;
        readonly asRewardAddressUpdated: ITuple<[AccountId32, AccountId32]>;
        readonly isInitializedAlreadyInitializedAccount: boolean;
        readonly asInitializedAlreadyInitializedAccount: ITuple<[AccountId32, Option<AccountId32>, u128]>;
        readonly isInitializedAccountWithNotEnoughContribution: boolean;
        readonly asInitializedAccountWithNotEnoughContribution: ITuple<[AccountId32, Option<AccountId32>, u128]>;
        readonly type: 'InitialPaymentMade' | 'NativeIdentityAssociated' | 'RewardsPaid' | 'RewardAddressUpdated' | 'InitializedAlreadyInitializedAccount' | 'InitializedAccountWithNotEnoughContribution';
    }
    /** @name PalletIssuanceEvent (56) */
    interface PalletIssuanceEvent extends Enum {
        readonly isSessionIssuanceIssued: boolean;
        readonly asSessionIssuanceIssued: ITuple<[u32, u128, u128]>;
        readonly isSessionIssuanceRecorded: boolean;
        readonly asSessionIssuanceRecorded: ITuple<[u32, u128, u128]>;
        readonly isIssuanceConfigInitialized: boolean;
        readonly asIssuanceConfigInitialized: PalletIssuanceIssuanceInfo;
        readonly isTgeFinalized: boolean;
        readonly isTgeInstanceFailed: boolean;
        readonly asTgeInstanceFailed: PalletIssuanceTgeInfo;
        readonly isTgeInstanceSucceeded: boolean;
        readonly asTgeInstanceSucceeded: PalletIssuanceTgeInfo;
        readonly type: 'SessionIssuanceIssued' | 'SessionIssuanceRecorded' | 'IssuanceConfigInitialized' | 'TgeFinalized' | 'TgeInstanceFailed' | 'TgeInstanceSucceeded';
    }
    /** @name PalletIssuanceIssuanceInfo (57) */
    interface PalletIssuanceIssuanceInfo extends Struct {
        readonly cap: u128;
        readonly issuanceAtInit: u128;
        readonly linearIssuanceBlocks: u32;
        readonly liquidityMiningSplit: Perbill;
        readonly stakingSplit: Perbill;
        readonly totalCrowdloanAllocation: u128;
    }
    /** @name PalletIssuanceTgeInfo (59) */
    interface PalletIssuanceTgeInfo extends Struct {
        readonly who: AccountId32;
        readonly amount: u128;
    }
    /** @name PalletMultipurposeLiquidityEvent (60) */
    interface PalletMultipurposeLiquidityEvent extends Enum {
        readonly isVestingTokensReserved: boolean;
        readonly asVestingTokensReserved: ITuple<[AccountId32, u32, u128]>;
        readonly isTokensRelockedFromReserve: boolean;
        readonly asTokensRelockedFromReserve: ITuple<[AccountId32, u32, u128, u128]>;
        readonly type: 'VestingTokensReserved' | 'TokensRelockedFromReserve';
    }
    /** @name PalletBootstrapEvent (61) */
    interface PalletBootstrapEvent extends Enum {
        readonly isProvisioned: boolean;
        readonly asProvisioned: ITuple<[u32, u128]>;
        readonly isVestedProvisioned: boolean;
        readonly asVestedProvisioned: ITuple<[u32, u128]>;
        readonly isRewardsLiquidityAcitvationFailed: boolean;
        readonly asRewardsLiquidityAcitvationFailed: ITuple<[AccountId32, u32, u128]>;
        readonly isRewardsClaimed: boolean;
        readonly asRewardsClaimed: ITuple<[u32, u128]>;
        readonly isAccountsWhitelisted: boolean;
        readonly isBootstrapParitallyPreFinalized: boolean;
        readonly isBootstrapReadyToBeFinalized: boolean;
        readonly isBootstrapFinalized: boolean;
        readonly type: 'Provisioned' | 'VestedProvisioned' | 'RewardsLiquidityAcitvationFailed' | 'RewardsClaimed' | 'AccountsWhitelisted' | 'BootstrapParitallyPreFinalized' | 'BootstrapReadyToBeFinalized' | 'BootstrapFinalized';
    }
    /** @name ParachainStakingEvent (62) */
    interface ParachainStakingEvent extends Enum {
        readonly isNewRound: boolean;
        readonly asNewRound: ITuple<[u32, u32, u32, u128]>;
        readonly isJoinedCollatorCandidates: boolean;
        readonly asJoinedCollatorCandidates: ITuple<[AccountId32, u128, u128]>;
        readonly isCollatorChosen: boolean;
        readonly asCollatorChosen: ITuple<[u32, AccountId32, u128]>;
        readonly isCandidateBondMoreRequested: boolean;
        readonly asCandidateBondMoreRequested: ITuple<[AccountId32, u128, u32]>;
        readonly isCandidateBondLessRequested: boolean;
        readonly asCandidateBondLessRequested: ITuple<[AccountId32, u128, u32]>;
        readonly isCandidateBondedMore: boolean;
        readonly asCandidateBondedMore: ITuple<[AccountId32, u128, u128]>;
        readonly isCandidateBondedLess: boolean;
        readonly asCandidateBondedLess: ITuple<[AccountId32, u128, u128]>;
        readonly isCandidateWentOffline: boolean;
        readonly asCandidateWentOffline: ITuple<[u32, AccountId32]>;
        readonly isCandidateBackOnline: boolean;
        readonly asCandidateBackOnline: ITuple<[u32, AccountId32]>;
        readonly isCandidateScheduledExit: boolean;
        readonly asCandidateScheduledExit: ITuple<[u32, AccountId32, u32]>;
        readonly isCancelledCandidateExit: boolean;
        readonly asCancelledCandidateExit: AccountId32;
        readonly isCancelledCandidateBondChange: boolean;
        readonly asCancelledCandidateBondChange: ITuple<[AccountId32, ParachainStakingCandidateBondRequest]>;
        readonly isCandidateLeft: boolean;
        readonly asCandidateLeft: ITuple<[AccountId32, u128, u128]>;
        readonly isDelegationIncreaseScheduled: boolean;
        readonly asDelegationIncreaseScheduled: ITuple<[AccountId32, AccountId32, u128, u32]>;
        readonly isDelegationDecreaseScheduled: boolean;
        readonly asDelegationDecreaseScheduled: ITuple<[AccountId32, AccountId32, u128, u32]>;
        readonly isDelegationIncreased: boolean;
        readonly asDelegationIncreased: ITuple<[AccountId32, AccountId32, u128, bool]>;
        readonly isDelegationDecreased: boolean;
        readonly asDelegationDecreased: ITuple<[AccountId32, AccountId32, u128, bool]>;
        readonly isDelegatorExitScheduled: boolean;
        readonly asDelegatorExitScheduled: ITuple<[u32, AccountId32, u32]>;
        readonly isDelegationRevocationScheduled: boolean;
        readonly asDelegationRevocationScheduled: ITuple<[u32, AccountId32, AccountId32, u32]>;
        readonly isDelegatorLeft: boolean;
        readonly asDelegatorLeft: ITuple<[AccountId32, u128]>;
        readonly isDelegationRevoked: boolean;
        readonly asDelegationRevoked: ITuple<[AccountId32, AccountId32, u128]>;
        readonly isDelegatorExitCancelled: boolean;
        readonly asDelegatorExitCancelled: AccountId32;
        readonly isCancelledDelegationRequest: boolean;
        readonly asCancelledDelegationRequest: ITuple<[AccountId32, ParachainStakingDelegationRequest]>;
        readonly isDelegation: boolean;
        readonly asDelegation: ITuple<[AccountId32, u128, AccountId32, ParachainStakingDelegatorAdded]>;
        readonly isDelegatorLeftCandidate: boolean;
        readonly asDelegatorLeftCandidate: ITuple<[AccountId32, AccountId32, u128, u128]>;
        readonly isDelegatorDueReward: boolean;
        readonly asDelegatorDueReward: ITuple<[u32, AccountId32, AccountId32, u128]>;
        readonly isRewarded: boolean;
        readonly asRewarded: ITuple<[u32, AccountId32, u128]>;
        readonly isCollatorRewardsDistributed: boolean;
        readonly asCollatorRewardsDistributed: ITuple<[AccountId32, ParachainStakingPayoutRounds]>;
        readonly isStakeExpectationsSet: boolean;
        readonly asStakeExpectationsSet: ITuple<[u128, u128, u128]>;
        readonly isTotalSelectedSet: boolean;
        readonly asTotalSelectedSet: ITuple<[u32, u32]>;
        readonly isCollatorCommissionSet: boolean;
        readonly asCollatorCommissionSet: ITuple<[Perbill, Perbill]>;
        readonly isCandidateAggregatorUpdated: boolean;
        readonly asCandidateAggregatorUpdated: ITuple<[AccountId32, Option<AccountId32>]>;
        readonly isAggregatorMetadataUpdated: boolean;
        readonly asAggregatorMetadataUpdated: AccountId32;
        readonly type: 'NewRound' | 'JoinedCollatorCandidates' | 'CollatorChosen' | 'CandidateBondMoreRequested' | 'CandidateBondLessRequested' | 'CandidateBondedMore' | 'CandidateBondedLess' | 'CandidateWentOffline' | 'CandidateBackOnline' | 'CandidateScheduledExit' | 'CancelledCandidateExit' | 'CancelledCandidateBondChange' | 'CandidateLeft' | 'DelegationIncreaseScheduled' | 'DelegationDecreaseScheduled' | 'DelegationIncreased' | 'DelegationDecreased' | 'DelegatorExitScheduled' | 'DelegationRevocationScheduled' | 'DelegatorLeft' | 'DelegationRevoked' | 'DelegatorExitCancelled' | 'CancelledDelegationRequest' | 'Delegation' | 'DelegatorLeftCandidate' | 'DelegatorDueReward' | 'Rewarded' | 'CollatorRewardsDistributed' | 'StakeExpectationsSet' | 'TotalSelectedSet' | 'CollatorCommissionSet' | 'CandidateAggregatorUpdated' | 'AggregatorMetadataUpdated';
    }
    /** @name ParachainStakingCandidateBondRequest (63) */
    interface ParachainStakingCandidateBondRequest extends Struct {
        readonly amount: u128;
        readonly change: ParachainStakingCandidateBondChange;
        readonly whenExecutable: u32;
    }
    /** @name ParachainStakingCandidateBondChange (64) */
    interface ParachainStakingCandidateBondChange extends Enum {
        readonly isIncrease: boolean;
        readonly isDecrease: boolean;
        readonly type: 'Increase' | 'Decrease';
    }
    /** @name ParachainStakingDelegationRequest (65) */
    interface ParachainStakingDelegationRequest extends Struct {
        readonly collator: AccountId32;
        readonly amount: u128;
        readonly whenExecutable: u32;
        readonly action: ParachainStakingDelegationChange;
    }
    /** @name ParachainStakingDelegationChange (66) */
    interface ParachainStakingDelegationChange extends Enum {
        readonly isRevoke: boolean;
        readonly isIncrease: boolean;
        readonly isDecrease: boolean;
        readonly type: 'Revoke' | 'Increase' | 'Decrease';
    }
    /** @name ParachainStakingDelegatorAdded (67) */
    interface ParachainStakingDelegatorAdded extends Enum {
        readonly isAddedToTop: boolean;
        readonly asAddedToTop: {
            readonly newTotal: u128;
        } & Struct;
        readonly isAddedToBottom: boolean;
        readonly type: 'AddedToTop' | 'AddedToBottom';
    }
    /** @name ParachainStakingPayoutRounds (68) */
    interface ParachainStakingPayoutRounds extends Enum {
        readonly isAll: boolean;
        readonly isPartial: boolean;
        readonly asPartial: Vec<u32>;
        readonly type: 'All' | 'Partial';
    }
    /** @name PalletSessionEvent (69) */
    interface PalletSessionEvent extends Enum {
        readonly isNewSession: boolean;
        readonly asNewSession: {
            readonly sessionIndex: u32;
        } & Struct;
        readonly type: 'NewSession';
    }
    /** @name CumulusPalletXcmpQueueEvent (70) */
    interface CumulusPalletXcmpQueueEvent extends Enum {
        readonly isSuccess: boolean;
        readonly asSuccess: {
            readonly messageHash: Option<U8aFixed>;
            readonly weight: SpWeightsWeightV2Weight;
        } & Struct;
        readonly isFail: boolean;
        readonly asFail: {
            readonly messageHash: Option<U8aFixed>;
            readonly error: XcmV3TraitsError;
            readonly weight: SpWeightsWeightV2Weight;
        } & Struct;
        readonly isBadVersion: boolean;
        readonly asBadVersion: {
            readonly messageHash: Option<U8aFixed>;
        } & Struct;
        readonly isBadFormat: boolean;
        readonly asBadFormat: {
            readonly messageHash: Option<U8aFixed>;
        } & Struct;
        readonly isXcmpMessageSent: boolean;
        readonly asXcmpMessageSent: {
            readonly messageHash: Option<U8aFixed>;
        } & Struct;
        readonly isOverweightEnqueued: boolean;
        readonly asOverweightEnqueued: {
            readonly sender: u32;
            readonly sentAt: u32;
            readonly index: u64;
            readonly required: SpWeightsWeightV2Weight;
        } & Struct;
        readonly isOverweightServiced: boolean;
        readonly asOverweightServiced: {
            readonly index: u64;
            readonly used: SpWeightsWeightV2Weight;
        } & Struct;
        readonly type: 'Success' | 'Fail' | 'BadVersion' | 'BadFormat' | 'XcmpMessageSent' | 'OverweightEnqueued' | 'OverweightServiced';
    }
    /** @name XcmV3TraitsError (71) */
    interface XcmV3TraitsError extends Enum {
        readonly isOverflow: boolean;
        readonly isUnimplemented: boolean;
        readonly isUntrustedReserveLocation: boolean;
        readonly isUntrustedTeleportLocation: boolean;
        readonly isLocationFull: boolean;
        readonly isLocationNotInvertible: boolean;
        readonly isBadOrigin: boolean;
        readonly isInvalidLocation: boolean;
        readonly isAssetNotFound: boolean;
        readonly isFailedToTransactAsset: boolean;
        readonly isNotWithdrawable: boolean;
        readonly isLocationCannotHold: boolean;
        readonly isExceedsMaxMessageSize: boolean;
        readonly isDestinationUnsupported: boolean;
        readonly isTransport: boolean;
        readonly isUnroutable: boolean;
        readonly isUnknownClaim: boolean;
        readonly isFailedToDecode: boolean;
        readonly isMaxWeightInvalid: boolean;
        readonly isNotHoldingFees: boolean;
        readonly isTooExpensive: boolean;
        readonly isTrap: boolean;
        readonly asTrap: u64;
        readonly isExpectationFalse: boolean;
        readonly isPalletNotFound: boolean;
        readonly isNameMismatch: boolean;
        readonly isVersionIncompatible: boolean;
        readonly isHoldingWouldOverflow: boolean;
        readonly isExportError: boolean;
        readonly isReanchorFailed: boolean;
        readonly isNoDeal: boolean;
        readonly isFeesNotMet: boolean;
        readonly isLockError: boolean;
        readonly isNoPermission: boolean;
        readonly isUnanchored: boolean;
        readonly isNotDepositable: boolean;
        readonly isUnhandledXcmVersion: boolean;
        readonly isWeightLimitReached: boolean;
        readonly asWeightLimitReached: SpWeightsWeightV2Weight;
        readonly isBarrier: boolean;
        readonly isWeightNotComputable: boolean;
        readonly isExceedsStackLimit: boolean;
        readonly type: 'Overflow' | 'Unimplemented' | 'UntrustedReserveLocation' | 'UntrustedTeleportLocation' | 'LocationFull' | 'LocationNotInvertible' | 'BadOrigin' | 'InvalidLocation' | 'AssetNotFound' | 'FailedToTransactAsset' | 'NotWithdrawable' | 'LocationCannotHold' | 'ExceedsMaxMessageSize' | 'DestinationUnsupported' | 'Transport' | 'Unroutable' | 'UnknownClaim' | 'FailedToDecode' | 'MaxWeightInvalid' | 'NotHoldingFees' | 'TooExpensive' | 'Trap' | 'ExpectationFalse' | 'PalletNotFound' | 'NameMismatch' | 'VersionIncompatible' | 'HoldingWouldOverflow' | 'ExportError' | 'ReanchorFailed' | 'NoDeal' | 'FeesNotMet' | 'LockError' | 'NoPermission' | 'Unanchored' | 'NotDepositable' | 'UnhandledXcmVersion' | 'WeightLimitReached' | 'Barrier' | 'WeightNotComputable' | 'ExceedsStackLimit';
    }
    /** @name PalletXcmEvent (73) */
    interface PalletXcmEvent extends Enum {
        readonly isAttempted: boolean;
        readonly asAttempted: XcmV3TraitsOutcome;
        readonly isSent: boolean;
        readonly asSent: ITuple<[XcmV3MultiLocation, XcmV3MultiLocation, XcmV3Xcm]>;
        readonly isUnexpectedResponse: boolean;
        readonly asUnexpectedResponse: ITuple<[XcmV3MultiLocation, u64]>;
        readonly isResponseReady: boolean;
        readonly asResponseReady: ITuple<[u64, XcmV3Response]>;
        readonly isNotified: boolean;
        readonly asNotified: ITuple<[u64, u8, u8]>;
        readonly isNotifyOverweight: boolean;
        readonly asNotifyOverweight: ITuple<[u64, u8, u8, SpWeightsWeightV2Weight, SpWeightsWeightV2Weight]>;
        readonly isNotifyDispatchError: boolean;
        readonly asNotifyDispatchError: ITuple<[u64, u8, u8]>;
        readonly isNotifyDecodeFailed: boolean;
        readonly asNotifyDecodeFailed: ITuple<[u64, u8, u8]>;
        readonly isInvalidResponder: boolean;
        readonly asInvalidResponder: ITuple<[XcmV3MultiLocation, u64, Option<XcmV3MultiLocation>]>;
        readonly isInvalidResponderVersion: boolean;
        readonly asInvalidResponderVersion: ITuple<[XcmV3MultiLocation, u64]>;
        readonly isResponseTaken: boolean;
        readonly asResponseTaken: u64;
        readonly isAssetsTrapped: boolean;
        readonly asAssetsTrapped: ITuple<[H256, XcmV3MultiLocation, XcmVersionedMultiAssets]>;
        readonly isVersionChangeNotified: boolean;
        readonly asVersionChangeNotified: ITuple<[XcmV3MultiLocation, u32, XcmV3MultiassetMultiAssets]>;
        readonly isSupportedVersionChanged: boolean;
        readonly asSupportedVersionChanged: ITuple<[XcmV3MultiLocation, u32]>;
        readonly isNotifyTargetSendFail: boolean;
        readonly asNotifyTargetSendFail: ITuple<[XcmV3MultiLocation, u64, XcmV3TraitsError]>;
        readonly isNotifyTargetMigrationFail: boolean;
        readonly asNotifyTargetMigrationFail: ITuple<[XcmVersionedMultiLocation, u64]>;
        readonly isInvalidQuerierVersion: boolean;
        readonly asInvalidQuerierVersion: ITuple<[XcmV3MultiLocation, u64]>;
        readonly isInvalidQuerier: boolean;
        readonly asInvalidQuerier: ITuple<[XcmV3MultiLocation, u64, XcmV3MultiLocation, Option<XcmV3MultiLocation>]>;
        readonly isVersionNotifyStarted: boolean;
        readonly asVersionNotifyStarted: ITuple<[XcmV3MultiLocation, XcmV3MultiassetMultiAssets]>;
        readonly isVersionNotifyRequested: boolean;
        readonly asVersionNotifyRequested: ITuple<[XcmV3MultiLocation, XcmV3MultiassetMultiAssets]>;
        readonly isVersionNotifyUnrequested: boolean;
        readonly asVersionNotifyUnrequested: ITuple<[XcmV3MultiLocation, XcmV3MultiassetMultiAssets]>;
        readonly isFeesPaid: boolean;
        readonly asFeesPaid: ITuple<[XcmV3MultiLocation, XcmV3MultiassetMultiAssets]>;
        readonly isAssetsClaimed: boolean;
        readonly asAssetsClaimed: ITuple<[H256, XcmV3MultiLocation, XcmVersionedMultiAssets]>;
        readonly type: 'Attempted' | 'Sent' | 'UnexpectedResponse' | 'ResponseReady' | 'Notified' | 'NotifyOverweight' | 'NotifyDispatchError' | 'NotifyDecodeFailed' | 'InvalidResponder' | 'InvalidResponderVersion' | 'ResponseTaken' | 'AssetsTrapped' | 'VersionChangeNotified' | 'SupportedVersionChanged' | 'NotifyTargetSendFail' | 'NotifyTargetMigrationFail' | 'InvalidQuerierVersion' | 'InvalidQuerier' | 'VersionNotifyStarted' | 'VersionNotifyRequested' | 'VersionNotifyUnrequested' | 'FeesPaid' | 'AssetsClaimed';
    }
    /** @name XcmV3TraitsOutcome (74) */
    interface XcmV3TraitsOutcome extends Enum {
        readonly isComplete: boolean;
        readonly asComplete: SpWeightsWeightV2Weight;
        readonly isIncomplete: boolean;
        readonly asIncomplete: ITuple<[SpWeightsWeightV2Weight, XcmV3TraitsError]>;
        readonly isError: boolean;
        readonly asError: XcmV3TraitsError;
        readonly type: 'Complete' | 'Incomplete' | 'Error';
    }
    /** @name XcmV3MultiLocation (75) */
    interface XcmV3MultiLocation extends Struct {
        readonly parents: u8;
        readonly interior: XcmV3Junctions;
    }
    /** @name XcmV3Junctions (76) */
    interface XcmV3Junctions extends Enum {
        readonly isHere: boolean;
        readonly isX1: boolean;
        readonly asX1: XcmV3Junction;
        readonly isX2: boolean;
        readonly asX2: ITuple<[XcmV3Junction, XcmV3Junction]>;
        readonly isX3: boolean;
        readonly asX3: ITuple<[XcmV3Junction, XcmV3Junction, XcmV3Junction]>;
        readonly isX4: boolean;
        readonly asX4: ITuple<[XcmV3Junction, XcmV3Junction, XcmV3Junction, XcmV3Junction]>;
        readonly isX5: boolean;
        readonly asX5: ITuple<[XcmV3Junction, XcmV3Junction, XcmV3Junction, XcmV3Junction, XcmV3Junction]>;
        readonly isX6: boolean;
        readonly asX6: ITuple<[XcmV3Junction, XcmV3Junction, XcmV3Junction, XcmV3Junction, XcmV3Junction, XcmV3Junction]>;
        readonly isX7: boolean;
        readonly asX7: ITuple<[XcmV3Junction, XcmV3Junction, XcmV3Junction, XcmV3Junction, XcmV3Junction, XcmV3Junction, XcmV3Junction]>;
        readonly isX8: boolean;
        readonly asX8: ITuple<[XcmV3Junction, XcmV3Junction, XcmV3Junction, XcmV3Junction, XcmV3Junction, XcmV3Junction, XcmV3Junction, XcmV3Junction]>;
        readonly type: 'Here' | 'X1' | 'X2' | 'X3' | 'X4' | 'X5' | 'X6' | 'X7' | 'X8';
    }
    /** @name XcmV3Junction (77) */
    interface XcmV3Junction extends Enum {
        readonly isParachain: boolean;
        readonly asParachain: Compact<u32>;
        readonly isAccountId32: boolean;
        readonly asAccountId32: {
            readonly network: Option<XcmV3JunctionNetworkId>;
            readonly id: U8aFixed;
        } & Struct;
        readonly isAccountIndex64: boolean;
        readonly asAccountIndex64: {
            readonly network: Option<XcmV3JunctionNetworkId>;
            readonly index: Compact<u64>;
        } & Struct;
        readonly isAccountKey20: boolean;
        readonly asAccountKey20: {
            readonly network: Option<XcmV3JunctionNetworkId>;
            readonly key: U8aFixed;
        } & Struct;
        readonly isPalletInstance: boolean;
        readonly asPalletInstance: u8;
        readonly isGeneralIndex: boolean;
        readonly asGeneralIndex: Compact<u128>;
        readonly isGeneralKey: boolean;
        readonly asGeneralKey: {
            readonly length: u8;
            readonly data: U8aFixed;
        } & Struct;
        readonly isOnlyChild: boolean;
        readonly isPlurality: boolean;
        readonly asPlurality: {
            readonly id: XcmV3JunctionBodyId;
            readonly part: XcmV3JunctionBodyPart;
        } & Struct;
        readonly isGlobalConsensus: boolean;
        readonly asGlobalConsensus: XcmV3JunctionNetworkId;
        readonly type: 'Parachain' | 'AccountId32' | 'AccountIndex64' | 'AccountKey20' | 'PalletInstance' | 'GeneralIndex' | 'GeneralKey' | 'OnlyChild' | 'Plurality' | 'GlobalConsensus';
    }
    /** @name XcmV3JunctionNetworkId (80) */
    interface XcmV3JunctionNetworkId extends Enum {
        readonly isByGenesis: boolean;
        readonly asByGenesis: U8aFixed;
        readonly isByFork: boolean;
        readonly asByFork: {
            readonly blockNumber: u64;
            readonly blockHash: U8aFixed;
        } & Struct;
        readonly isPolkadot: boolean;
        readonly isKusama: boolean;
        readonly isWestend: boolean;
        readonly isRococo: boolean;
        readonly isWococo: boolean;
        readonly isEthereum: boolean;
        readonly asEthereum: {
            readonly chainId: Compact<u64>;
        } & Struct;
        readonly isBitcoinCore: boolean;
        readonly isBitcoinCash: boolean;
        readonly type: 'ByGenesis' | 'ByFork' | 'Polkadot' | 'Kusama' | 'Westend' | 'Rococo' | 'Wococo' | 'Ethereum' | 'BitcoinCore' | 'BitcoinCash';
    }
    /** @name XcmV3JunctionBodyId (83) */
    interface XcmV3JunctionBodyId extends Enum {
        readonly isUnit: boolean;
        readonly isMoniker: boolean;
        readonly asMoniker: U8aFixed;
        readonly isIndex: boolean;
        readonly asIndex: Compact<u32>;
        readonly isExecutive: boolean;
        readonly isTechnical: boolean;
        readonly isLegislative: boolean;
        readonly isJudicial: boolean;
        readonly isDefense: boolean;
        readonly isAdministration: boolean;
        readonly isTreasury: boolean;
        readonly type: 'Unit' | 'Moniker' | 'Index' | 'Executive' | 'Technical' | 'Legislative' | 'Judicial' | 'Defense' | 'Administration' | 'Treasury';
    }
    /** @name XcmV3JunctionBodyPart (84) */
    interface XcmV3JunctionBodyPart extends Enum {
        readonly isVoice: boolean;
        readonly isMembers: boolean;
        readonly asMembers: {
            readonly count: Compact<u32>;
        } & Struct;
        readonly isFraction: boolean;
        readonly asFraction: {
            readonly nom: Compact<u32>;
            readonly denom: Compact<u32>;
        } & Struct;
        readonly isAtLeastProportion: boolean;
        readonly asAtLeastProportion: {
            readonly nom: Compact<u32>;
            readonly denom: Compact<u32>;
        } & Struct;
        readonly isMoreThanProportion: boolean;
        readonly asMoreThanProportion: {
            readonly nom: Compact<u32>;
            readonly denom: Compact<u32>;
        } & Struct;
        readonly type: 'Voice' | 'Members' | 'Fraction' | 'AtLeastProportion' | 'MoreThanProportion';
    }
    /** @name XcmV3Xcm (85) */
    interface XcmV3Xcm extends Vec<XcmV3Instruction> {
    }
    /** @name XcmV3Instruction (87) */
    interface XcmV3Instruction extends Enum {
        readonly isWithdrawAsset: boolean;
        readonly asWithdrawAsset: XcmV3MultiassetMultiAssets;
        readonly isReserveAssetDeposited: boolean;
        readonly asReserveAssetDeposited: XcmV3MultiassetMultiAssets;
        readonly isReceiveTeleportedAsset: boolean;
        readonly asReceiveTeleportedAsset: XcmV3MultiassetMultiAssets;
        readonly isQueryResponse: boolean;
        readonly asQueryResponse: {
            readonly queryId: Compact<u64>;
            readonly response: XcmV3Response;
            readonly maxWeight: SpWeightsWeightV2Weight;
            readonly querier: Option<XcmV3MultiLocation>;
        } & Struct;
        readonly isTransferAsset: boolean;
        readonly asTransferAsset: {
            readonly assets: XcmV3MultiassetMultiAssets;
            readonly beneficiary: XcmV3MultiLocation;
        } & Struct;
        readonly isTransferReserveAsset: boolean;
        readonly asTransferReserveAsset: {
            readonly assets: XcmV3MultiassetMultiAssets;
            readonly dest: XcmV3MultiLocation;
            readonly xcm: XcmV3Xcm;
        } & Struct;
        readonly isTransact: boolean;
        readonly asTransact: {
            readonly originKind: XcmV2OriginKind;
            readonly requireWeightAtMost: SpWeightsWeightV2Weight;
            readonly call: XcmDoubleEncoded;
        } & Struct;
        readonly isHrmpNewChannelOpenRequest: boolean;
        readonly asHrmpNewChannelOpenRequest: {
            readonly sender: Compact<u32>;
            readonly maxMessageSize: Compact<u32>;
            readonly maxCapacity: Compact<u32>;
        } & Struct;
        readonly isHrmpChannelAccepted: boolean;
        readonly asHrmpChannelAccepted: {
            readonly recipient: Compact<u32>;
        } & Struct;
        readonly isHrmpChannelClosing: boolean;
        readonly asHrmpChannelClosing: {
            readonly initiator: Compact<u32>;
            readonly sender: Compact<u32>;
            readonly recipient: Compact<u32>;
        } & Struct;
        readonly isClearOrigin: boolean;
        readonly isDescendOrigin: boolean;
        readonly asDescendOrigin: XcmV3Junctions;
        readonly isReportError: boolean;
        readonly asReportError: XcmV3QueryResponseInfo;
        readonly isDepositAsset: boolean;
        readonly asDepositAsset: {
            readonly assets: XcmV3MultiassetMultiAssetFilter;
            readonly beneficiary: XcmV3MultiLocation;
        } & Struct;
        readonly isDepositReserveAsset: boolean;
        readonly asDepositReserveAsset: {
            readonly assets: XcmV3MultiassetMultiAssetFilter;
            readonly dest: XcmV3MultiLocation;
            readonly xcm: XcmV3Xcm;
        } & Struct;
        readonly isExchangeAsset: boolean;
        readonly asExchangeAsset: {
            readonly give: XcmV3MultiassetMultiAssetFilter;
            readonly want: XcmV3MultiassetMultiAssets;
            readonly maximal: bool;
        } & Struct;
        readonly isInitiateReserveWithdraw: boolean;
        readonly asInitiateReserveWithdraw: {
            readonly assets: XcmV3MultiassetMultiAssetFilter;
            readonly reserve: XcmV3MultiLocation;
            readonly xcm: XcmV3Xcm;
        } & Struct;
        readonly isInitiateTeleport: boolean;
        readonly asInitiateTeleport: {
            readonly assets: XcmV3MultiassetMultiAssetFilter;
            readonly dest: XcmV3MultiLocation;
            readonly xcm: XcmV3Xcm;
        } & Struct;
        readonly isReportHolding: boolean;
        readonly asReportHolding: {
            readonly responseInfo: XcmV3QueryResponseInfo;
            readonly assets: XcmV3MultiassetMultiAssetFilter;
        } & Struct;
        readonly isBuyExecution: boolean;
        readonly asBuyExecution: {
            readonly fees: XcmV3MultiAsset;
            readonly weightLimit: XcmV3WeightLimit;
        } & Struct;
        readonly isRefundSurplus: boolean;
        readonly isSetErrorHandler: boolean;
        readonly asSetErrorHandler: XcmV3Xcm;
        readonly isSetAppendix: boolean;
        readonly asSetAppendix: XcmV3Xcm;
        readonly isClearError: boolean;
        readonly isClaimAsset: boolean;
        readonly asClaimAsset: {
            readonly assets: XcmV3MultiassetMultiAssets;
            readonly ticket: XcmV3MultiLocation;
        } & Struct;
        readonly isTrap: boolean;
        readonly asTrap: Compact<u64>;
        readonly isSubscribeVersion: boolean;
        readonly asSubscribeVersion: {
            readonly queryId: Compact<u64>;
            readonly maxResponseWeight: SpWeightsWeightV2Weight;
        } & Struct;
        readonly isUnsubscribeVersion: boolean;
        readonly isBurnAsset: boolean;
        readonly asBurnAsset: XcmV3MultiassetMultiAssets;
        readonly isExpectAsset: boolean;
        readonly asExpectAsset: XcmV3MultiassetMultiAssets;
        readonly isExpectOrigin: boolean;
        readonly asExpectOrigin: Option<XcmV3MultiLocation>;
        readonly isExpectError: boolean;
        readonly asExpectError: Option<ITuple<[u32, XcmV3TraitsError]>>;
        readonly isExpectTransactStatus: boolean;
        readonly asExpectTransactStatus: XcmV3MaybeErrorCode;
        readonly isQueryPallet: boolean;
        readonly asQueryPallet: {
            readonly moduleName: Bytes;
            readonly responseInfo: XcmV3QueryResponseInfo;
        } & Struct;
        readonly isExpectPallet: boolean;
        readonly asExpectPallet: {
            readonly index: Compact<u32>;
            readonly name: Bytes;
            readonly moduleName: Bytes;
            readonly crateMajor: Compact<u32>;
            readonly minCrateMinor: Compact<u32>;
        } & Struct;
        readonly isReportTransactStatus: boolean;
        readonly asReportTransactStatus: XcmV3QueryResponseInfo;
        readonly isClearTransactStatus: boolean;
        readonly isUniversalOrigin: boolean;
        readonly asUniversalOrigin: XcmV3Junction;
        readonly isExportMessage: boolean;
        readonly asExportMessage: {
            readonly network: XcmV3JunctionNetworkId;
            readonly destination: XcmV3Junctions;
            readonly xcm: XcmV3Xcm;
        } & Struct;
        readonly isLockAsset: boolean;
        readonly asLockAsset: {
            readonly asset: XcmV3MultiAsset;
            readonly unlocker: XcmV3MultiLocation;
        } & Struct;
        readonly isUnlockAsset: boolean;
        readonly asUnlockAsset: {
            readonly asset: XcmV3MultiAsset;
            readonly target: XcmV3MultiLocation;
        } & Struct;
        readonly isNoteUnlockable: boolean;
        readonly asNoteUnlockable: {
            readonly asset: XcmV3MultiAsset;
            readonly owner: XcmV3MultiLocation;
        } & Struct;
        readonly isRequestUnlock: boolean;
        readonly asRequestUnlock: {
            readonly asset: XcmV3MultiAsset;
            readonly locker: XcmV3MultiLocation;
        } & Struct;
        readonly isSetFeesMode: boolean;
        readonly asSetFeesMode: {
            readonly jitWithdraw: bool;
        } & Struct;
        readonly isSetTopic: boolean;
        readonly asSetTopic: U8aFixed;
        readonly isClearTopic: boolean;
        readonly isAliasOrigin: boolean;
        readonly asAliasOrigin: XcmV3MultiLocation;
        readonly isUnpaidExecution: boolean;
        readonly asUnpaidExecution: {
            readonly weightLimit: XcmV3WeightLimit;
            readonly checkOrigin: Option<XcmV3MultiLocation>;
        } & Struct;
        readonly type: 'WithdrawAsset' | 'ReserveAssetDeposited' | 'ReceiveTeleportedAsset' | 'QueryResponse' | 'TransferAsset' | 'TransferReserveAsset' | 'Transact' | 'HrmpNewChannelOpenRequest' | 'HrmpChannelAccepted' | 'HrmpChannelClosing' | 'ClearOrigin' | 'DescendOrigin' | 'ReportError' | 'DepositAsset' | 'DepositReserveAsset' | 'ExchangeAsset' | 'InitiateReserveWithdraw' | 'InitiateTeleport' | 'ReportHolding' | 'BuyExecution' | 'RefundSurplus' | 'SetErrorHandler' | 'SetAppendix' | 'ClearError' | 'ClaimAsset' | 'Trap' | 'SubscribeVersion' | 'UnsubscribeVersion' | 'BurnAsset' | 'ExpectAsset' | 'ExpectOrigin' | 'ExpectError' | 'ExpectTransactStatus' | 'QueryPallet' | 'ExpectPallet' | 'ReportTransactStatus' | 'ClearTransactStatus' | 'UniversalOrigin' | 'ExportMessage' | 'LockAsset' | 'UnlockAsset' | 'NoteUnlockable' | 'RequestUnlock' | 'SetFeesMode' | 'SetTopic' | 'ClearTopic' | 'AliasOrigin' | 'UnpaidExecution';
    }
    /** @name XcmV3MultiassetMultiAssets (88) */
    interface XcmV3MultiassetMultiAssets extends Vec<XcmV3MultiAsset> {
    }
    /** @name XcmV3MultiAsset (90) */
    interface XcmV3MultiAsset extends Struct {
        readonly id: XcmV3MultiassetAssetId;
        readonly fun: XcmV3MultiassetFungibility;
    }
    /** @name XcmV3MultiassetAssetId (91) */
    interface XcmV3MultiassetAssetId extends Enum {
        readonly isConcrete: boolean;
        readonly asConcrete: XcmV3MultiLocation;
        readonly isAbstract: boolean;
        readonly asAbstract: U8aFixed;
        readonly type: 'Concrete' | 'Abstract';
    }
    /** @name XcmV3MultiassetFungibility (92) */
    interface XcmV3MultiassetFungibility extends Enum {
        readonly isFungible: boolean;
        readonly asFungible: Compact<u128>;
        readonly isNonFungible: boolean;
        readonly asNonFungible: XcmV3MultiassetAssetInstance;
        readonly type: 'Fungible' | 'NonFungible';
    }
    /** @name XcmV3MultiassetAssetInstance (93) */
    interface XcmV3MultiassetAssetInstance extends Enum {
        readonly isUndefined: boolean;
        readonly isIndex: boolean;
        readonly asIndex: Compact<u128>;
        readonly isArray4: boolean;
        readonly asArray4: U8aFixed;
        readonly isArray8: boolean;
        readonly asArray8: U8aFixed;
        readonly isArray16: boolean;
        readonly asArray16: U8aFixed;
        readonly isArray32: boolean;
        readonly asArray32: U8aFixed;
        readonly type: 'Undefined' | 'Index' | 'Array4' | 'Array8' | 'Array16' | 'Array32';
    }
    /** @name XcmV3Response (95) */
    interface XcmV3Response extends Enum {
        readonly isNull: boolean;
        readonly isAssets: boolean;
        readonly asAssets: XcmV3MultiassetMultiAssets;
        readonly isExecutionResult: boolean;
        readonly asExecutionResult: Option<ITuple<[u32, XcmV3TraitsError]>>;
        readonly isVersion: boolean;
        readonly asVersion: u32;
        readonly isPalletsInfo: boolean;
        readonly asPalletsInfo: Vec<XcmV3PalletInfo>;
        readonly isDispatchResult: boolean;
        readonly asDispatchResult: XcmV3MaybeErrorCode;
        readonly type: 'Null' | 'Assets' | 'ExecutionResult' | 'Version' | 'PalletsInfo' | 'DispatchResult';
    }
    /** @name XcmV3PalletInfo (99) */
    interface XcmV3PalletInfo extends Struct {
        readonly index: Compact<u32>;
        readonly name: Bytes;
        readonly moduleName: Bytes;
        readonly major: Compact<u32>;
        readonly minor: Compact<u32>;
        readonly patch: Compact<u32>;
    }
    /** @name XcmV3MaybeErrorCode (102) */
    interface XcmV3MaybeErrorCode extends Enum {
        readonly isSuccess: boolean;
        readonly isError: boolean;
        readonly asError: Bytes;
        readonly isTruncatedError: boolean;
        readonly asTruncatedError: Bytes;
        readonly type: 'Success' | 'Error' | 'TruncatedError';
    }
    /** @name XcmV2OriginKind (105) */
    interface XcmV2OriginKind extends Enum {
        readonly isNative: boolean;
        readonly isSovereignAccount: boolean;
        readonly isSuperuser: boolean;
        readonly isXcm: boolean;
        readonly type: 'Native' | 'SovereignAccount' | 'Superuser' | 'Xcm';
    }
    /** @name XcmDoubleEncoded (106) */
    interface XcmDoubleEncoded extends Struct {
        readonly encoded: Bytes;
    }
    /** @name XcmV3QueryResponseInfo (107) */
    interface XcmV3QueryResponseInfo extends Struct {
        readonly destination: XcmV3MultiLocation;
        readonly queryId: Compact<u64>;
        readonly maxWeight: SpWeightsWeightV2Weight;
    }
    /** @name XcmV3MultiassetMultiAssetFilter (108) */
    interface XcmV3MultiassetMultiAssetFilter extends Enum {
        readonly isDefinite: boolean;
        readonly asDefinite: XcmV3MultiassetMultiAssets;
        readonly isWild: boolean;
        readonly asWild: XcmV3MultiassetWildMultiAsset;
        readonly type: 'Definite' | 'Wild';
    }
    /** @name XcmV3MultiassetWildMultiAsset (109) */
    interface XcmV3MultiassetWildMultiAsset extends Enum {
        readonly isAll: boolean;
        readonly isAllOf: boolean;
        readonly asAllOf: {
            readonly id: XcmV3MultiassetAssetId;
            readonly fun: XcmV3MultiassetWildFungibility;
        } & Struct;
        readonly isAllCounted: boolean;
        readonly asAllCounted: Compact<u32>;
        readonly isAllOfCounted: boolean;
        readonly asAllOfCounted: {
            readonly id: XcmV3MultiassetAssetId;
            readonly fun: XcmV3MultiassetWildFungibility;
            readonly count: Compact<u32>;
        } & Struct;
        readonly type: 'All' | 'AllOf' | 'AllCounted' | 'AllOfCounted';
    }
    /** @name XcmV3MultiassetWildFungibility (110) */
    interface XcmV3MultiassetWildFungibility extends Enum {
        readonly isFungible: boolean;
        readonly isNonFungible: boolean;
        readonly type: 'Fungible' | 'NonFungible';
    }
    /** @name XcmV3WeightLimit (111) */
    interface XcmV3WeightLimit extends Enum {
        readonly isUnlimited: boolean;
        readonly isLimited: boolean;
        readonly asLimited: SpWeightsWeightV2Weight;
        readonly type: 'Unlimited' | 'Limited';
    }
    /** @name XcmVersionedMultiAssets (112) */
    interface XcmVersionedMultiAssets extends Enum {
        readonly isV2: boolean;
        readonly asV2: XcmV2MultiassetMultiAssets;
        readonly isV3: boolean;
        readonly asV3: XcmV3MultiassetMultiAssets;
        readonly type: 'V2' | 'V3';
    }
    /** @name XcmV2MultiassetMultiAssets (113) */
    interface XcmV2MultiassetMultiAssets extends Vec<XcmV2MultiAsset> {
    }
    /** @name XcmV2MultiAsset (115) */
    interface XcmV2MultiAsset extends Struct {
        readonly id: XcmV2MultiassetAssetId;
        readonly fun: XcmV2MultiassetFungibility;
    }
    /** @name XcmV2MultiassetAssetId (116) */
    interface XcmV2MultiassetAssetId extends Enum {
        readonly isConcrete: boolean;
        readonly asConcrete: XcmV2MultiLocation;
        readonly isAbstract: boolean;
        readonly asAbstract: Bytes;
        readonly type: 'Concrete' | 'Abstract';
    }
    /** @name XcmV2MultiLocation (117) */
    interface XcmV2MultiLocation extends Struct {
        readonly parents: u8;
        readonly interior: XcmV2MultilocationJunctions;
    }
    /** @name XcmV2MultilocationJunctions (118) */
    interface XcmV2MultilocationJunctions extends Enum {
        readonly isHere: boolean;
        readonly isX1: boolean;
        readonly asX1: XcmV2Junction;
        readonly isX2: boolean;
        readonly asX2: ITuple<[XcmV2Junction, XcmV2Junction]>;
        readonly isX3: boolean;
        readonly asX3: ITuple<[XcmV2Junction, XcmV2Junction, XcmV2Junction]>;
        readonly isX4: boolean;
        readonly asX4: ITuple<[XcmV2Junction, XcmV2Junction, XcmV2Junction, XcmV2Junction]>;
        readonly isX5: boolean;
        readonly asX5: ITuple<[XcmV2Junction, XcmV2Junction, XcmV2Junction, XcmV2Junction, XcmV2Junction]>;
        readonly isX6: boolean;
        readonly asX6: ITuple<[XcmV2Junction, XcmV2Junction, XcmV2Junction, XcmV2Junction, XcmV2Junction, XcmV2Junction]>;
        readonly isX7: boolean;
        readonly asX7: ITuple<[XcmV2Junction, XcmV2Junction, XcmV2Junction, XcmV2Junction, XcmV2Junction, XcmV2Junction, XcmV2Junction]>;
        readonly isX8: boolean;
        readonly asX8: ITuple<[XcmV2Junction, XcmV2Junction, XcmV2Junction, XcmV2Junction, XcmV2Junction, XcmV2Junction, XcmV2Junction, XcmV2Junction]>;
        readonly type: 'Here' | 'X1' | 'X2' | 'X3' | 'X4' | 'X5' | 'X6' | 'X7' | 'X8';
    }
    /** @name XcmV2Junction (119) */
    interface XcmV2Junction extends Enum {
        readonly isParachain: boolean;
        readonly asParachain: Compact<u32>;
        readonly isAccountId32: boolean;
        readonly asAccountId32: {
            readonly network: XcmV2NetworkId;
            readonly id: U8aFixed;
        } & Struct;
        readonly isAccountIndex64: boolean;
        readonly asAccountIndex64: {
            readonly network: XcmV2NetworkId;
            readonly index: Compact<u64>;
        } & Struct;
        readonly isAccountKey20: boolean;
        readonly asAccountKey20: {
            readonly network: XcmV2NetworkId;
            readonly key: U8aFixed;
        } & Struct;
        readonly isPalletInstance: boolean;
        readonly asPalletInstance: u8;
        readonly isGeneralIndex: boolean;
        readonly asGeneralIndex: Compact<u128>;
        readonly isGeneralKey: boolean;
        readonly asGeneralKey: Bytes;
        readonly isOnlyChild: boolean;
        readonly isPlurality: boolean;
        readonly asPlurality: {
            readonly id: XcmV2BodyId;
            readonly part: XcmV2BodyPart;
        } & Struct;
        readonly type: 'Parachain' | 'AccountId32' | 'AccountIndex64' | 'AccountKey20' | 'PalletInstance' | 'GeneralIndex' | 'GeneralKey' | 'OnlyChild' | 'Plurality';
    }
    /** @name XcmV2NetworkId (120) */
    interface XcmV2NetworkId extends Enum {
        readonly isAny: boolean;
        readonly isNamed: boolean;
        readonly asNamed: Bytes;
        readonly isPolkadot: boolean;
        readonly isKusama: boolean;
        readonly type: 'Any' | 'Named' | 'Polkadot' | 'Kusama';
    }
    /** @name XcmV2BodyId (122) */
    interface XcmV2BodyId extends Enum {
        readonly isUnit: boolean;
        readonly isNamed: boolean;
        readonly asNamed: Bytes;
        readonly isIndex: boolean;
        readonly asIndex: Compact<u32>;
        readonly isExecutive: boolean;
        readonly isTechnical: boolean;
        readonly isLegislative: boolean;
        readonly isJudicial: boolean;
        readonly isDefense: boolean;
        readonly isAdministration: boolean;
        readonly isTreasury: boolean;
        readonly type: 'Unit' | 'Named' | 'Index' | 'Executive' | 'Technical' | 'Legislative' | 'Judicial' | 'Defense' | 'Administration' | 'Treasury';
    }
    /** @name XcmV2BodyPart (123) */
    interface XcmV2BodyPart extends Enum {
        readonly isVoice: boolean;
        readonly isMembers: boolean;
        readonly asMembers: {
            readonly count: Compact<u32>;
        } & Struct;
        readonly isFraction: boolean;
        readonly asFraction: {
            readonly nom: Compact<u32>;
            readonly denom: Compact<u32>;
        } & Struct;
        readonly isAtLeastProportion: boolean;
        readonly asAtLeastProportion: {
            readonly nom: Compact<u32>;
            readonly denom: Compact<u32>;
        } & Struct;
        readonly isMoreThanProportion: boolean;
        readonly asMoreThanProportion: {
            readonly nom: Compact<u32>;
            readonly denom: Compact<u32>;
        } & Struct;
        readonly type: 'Voice' | 'Members' | 'Fraction' | 'AtLeastProportion' | 'MoreThanProportion';
    }
    /** @name XcmV2MultiassetFungibility (124) */
    interface XcmV2MultiassetFungibility extends Enum {
        readonly isFungible: boolean;
        readonly asFungible: Compact<u128>;
        readonly isNonFungible: boolean;
        readonly asNonFungible: XcmV2MultiassetAssetInstance;
        readonly type: 'Fungible' | 'NonFungible';
    }
    /** @name XcmV2MultiassetAssetInstance (125) */
    interface XcmV2MultiassetAssetInstance extends Enum {
        readonly isUndefined: boolean;
        readonly isIndex: boolean;
        readonly asIndex: Compact<u128>;
        readonly isArray4: boolean;
        readonly asArray4: U8aFixed;
        readonly isArray8: boolean;
        readonly asArray8: U8aFixed;
        readonly isArray16: boolean;
        readonly asArray16: U8aFixed;
        readonly isArray32: boolean;
        readonly asArray32: U8aFixed;
        readonly isBlob: boolean;
        readonly asBlob: Bytes;
        readonly type: 'Undefined' | 'Index' | 'Array4' | 'Array8' | 'Array16' | 'Array32' | 'Blob';
    }
    /** @name XcmVersionedMultiLocation (126) */
    interface XcmVersionedMultiLocation extends Enum {
        readonly isV2: boolean;
        readonly asV2: XcmV2MultiLocation;
        readonly isV3: boolean;
        readonly asV3: XcmV3MultiLocation;
        readonly type: 'V2' | 'V3';
    }
    /** @name CumulusPalletXcmEvent (127) */
    interface CumulusPalletXcmEvent extends Enum {
        readonly isInvalidFormat: boolean;
        readonly asInvalidFormat: U8aFixed;
        readonly isUnsupportedVersion: boolean;
        readonly asUnsupportedVersion: U8aFixed;
        readonly isExecutedDownward: boolean;
        readonly asExecutedDownward: ITuple<[U8aFixed, XcmV3TraitsOutcome]>;
        readonly type: 'InvalidFormat' | 'UnsupportedVersion' | 'ExecutedDownward';
    }
    /** @name CumulusPalletDmpQueueEvent (128) */
    interface CumulusPalletDmpQueueEvent extends Enum {
        readonly isInvalidFormat: boolean;
        readonly asInvalidFormat: {
            readonly messageId: U8aFixed;
        } & Struct;
        readonly isUnsupportedVersion: boolean;
        readonly asUnsupportedVersion: {
            readonly messageId: U8aFixed;
        } & Struct;
        readonly isExecutedDownward: boolean;
        readonly asExecutedDownward: {
            readonly messageId: U8aFixed;
            readonly outcome: XcmV3TraitsOutcome;
        } & Struct;
        readonly isWeightExhausted: boolean;
        readonly asWeightExhausted: {
            readonly messageId: U8aFixed;
            readonly remainingWeight: SpWeightsWeightV2Weight;
            readonly requiredWeight: SpWeightsWeightV2Weight;
        } & Struct;
        readonly isOverweightEnqueued: boolean;
        readonly asOverweightEnqueued: {
            readonly messageId: U8aFixed;
            readonly overweightIndex: u64;
            readonly requiredWeight: SpWeightsWeightV2Weight;
        } & Struct;
        readonly isOverweightServiced: boolean;
        readonly asOverweightServiced: {
            readonly overweightIndex: u64;
            readonly weightUsed: SpWeightsWeightV2Weight;
        } & Struct;
        readonly isMaxMessagesExhausted: boolean;
        readonly asMaxMessagesExhausted: {
            readonly messageId: U8aFixed;
        } & Struct;
        readonly type: 'InvalidFormat' | 'UnsupportedVersion' | 'ExecutedDownward' | 'WeightExhausted' | 'OverweightEnqueued' | 'OverweightServiced' | 'MaxMessagesExhausted';
    }
    /** @name OrmlXtokensModuleEvent (129) */
    interface OrmlXtokensModuleEvent extends Enum {
        readonly isTransferredMultiAssets: boolean;
        readonly asTransferredMultiAssets: {
            readonly sender: AccountId32;
            readonly assets: XcmV3MultiassetMultiAssets;
            readonly fee: XcmV3MultiAsset;
            readonly dest: XcmV3MultiLocation;
        } & Struct;
        readonly type: 'TransferredMultiAssets';
    }
    /** @name OrmlUnknownTokensModuleEvent (130) */
    interface OrmlUnknownTokensModuleEvent extends Enum {
        readonly isDeposited: boolean;
        readonly asDeposited: {
            readonly asset: XcmV3MultiAsset;
            readonly who: XcmV3MultiLocation;
        } & Struct;
        readonly isWithdrawn: boolean;
        readonly asWithdrawn: {
            readonly asset: XcmV3MultiAsset;
            readonly who: XcmV3MultiLocation;
        } & Struct;
        readonly type: 'Deposited' | 'Withdrawn';
    }
    /** @name OrmlXcmModuleEvent (131) */
    interface OrmlXcmModuleEvent extends Enum {
        readonly isSent: boolean;
        readonly asSent: {
            readonly to: XcmV3MultiLocation;
            readonly message: XcmV3Xcm;
        } & Struct;
        readonly type: 'Sent';
    }
    /** @name OrmlAssetRegistryModuleEvent (132) */
    interface OrmlAssetRegistryModuleEvent extends Enum {
        readonly isRegisteredAsset: boolean;
        readonly asRegisteredAsset: {
            readonly assetId: u32;
            readonly metadata: OrmlTraitsAssetRegistryAssetMetadata;
        } & Struct;
        readonly isUpdatedAsset: boolean;
        readonly asUpdatedAsset: {
            readonly assetId: u32;
            readonly metadata: OrmlTraitsAssetRegistryAssetMetadata;
        } & Struct;
        readonly type: 'RegisteredAsset' | 'UpdatedAsset';
    }
    /** @name OrmlTraitsAssetRegistryAssetMetadata (133) */
    interface OrmlTraitsAssetRegistryAssetMetadata extends Struct {
        readonly decimals: u32;
        readonly name: Bytes;
        readonly symbol: Bytes;
        readonly existentialDeposit: u128;
        readonly location: Option<XcmVersionedMultiLocation>;
        readonly additional: MangataTypesAssetsCustomMetadata;
    }
    /** @name MangataTypesAssetsCustomMetadata (134) */
    interface MangataTypesAssetsCustomMetadata extends Struct {
        readonly xcm: Option<MangataTypesAssetsXcmMetadata>;
        readonly xyk: Option<MangataTypesAssetsXykMetadata>;
    }
    /** @name MangataTypesAssetsXcmMetadata (136) */
    interface MangataTypesAssetsXcmMetadata extends Struct {
        readonly feePerSecond: u128;
    }
    /** @name MangataTypesAssetsXykMetadata (138) */
    interface MangataTypesAssetsXykMetadata extends Struct {
        readonly operationsDisabled: bool;
    }
    /** @name PalletTreasuryEvent (140) */
    interface PalletTreasuryEvent extends Enum {
        readonly isProposed: boolean;
        readonly asProposed: {
            readonly proposalIndex: u32;
        } & Struct;
        readonly isSpending: boolean;
        readonly asSpending: {
            readonly budgetRemaining: u128;
        } & Struct;
        readonly isAwarded: boolean;
        readonly asAwarded: {
            readonly proposalIndex: u32;
            readonly award: u128;
            readonly account: AccountId32;
        } & Struct;
        readonly isRejected: boolean;
        readonly asRejected: {
            readonly proposalIndex: u32;
            readonly slashed: u128;
        } & Struct;
        readonly isBurnt: boolean;
        readonly asBurnt: {
            readonly burntFunds: u128;
        } & Struct;
        readonly isRollover: boolean;
        readonly asRollover: {
            readonly rolloverBalance: u128;
        } & Struct;
        readonly isDeposit: boolean;
        readonly asDeposit: {
            readonly value: u128;
        } & Struct;
        readonly isSpendApproved: boolean;
        readonly asSpendApproved: {
            readonly proposalIndex: u32;
            readonly amount: u128;
            readonly beneficiary: AccountId32;
        } & Struct;
        readonly isUpdatedInactive: boolean;
        readonly asUpdatedInactive: {
            readonly reactivated: u128;
            readonly deactivated: u128;
        } & Struct;
        readonly type: 'Proposed' | 'Spending' | 'Awarded' | 'Rejected' | 'Burnt' | 'Rollover' | 'Deposit' | 'SpendApproved' | 'UpdatedInactive';
    }
    /** @name PalletSudoMangataEvent (141) */
    interface PalletSudoMangataEvent extends Enum {
        readonly isSudid: boolean;
        readonly asSudid: {
            readonly sudoResult: Result<Null, SpRuntimeDispatchError>;
        } & Struct;
        readonly isKeyChanged: boolean;
        readonly asKeyChanged: {
            readonly oldSudoer: Option<AccountId32>;
        } & Struct;
        readonly isSudoAsDone: boolean;
        readonly asSudoAsDone: {
            readonly sudoResult: Result<Null, SpRuntimeDispatchError>;
        } & Struct;
        readonly type: 'Sudid' | 'KeyChanged' | 'SudoAsDone';
    }
    /** @name PalletSudoOriginEvent (142) */
    interface PalletSudoOriginEvent extends Enum {
        readonly isSuOriginDid: boolean;
        readonly asSuOriginDid: Result<Null, SpRuntimeDispatchError>;
        readonly isSuOriginDoAsDone: boolean;
        readonly asSuOriginDoAsDone: Result<Null, SpRuntimeDispatchError>;
        readonly type: 'SuOriginDid' | 'SuOriginDoAsDone';
    }
    /** @name PalletCollectiveMangataEvent (143) */
    interface PalletCollectiveMangataEvent extends Enum {
        readonly isProposed: boolean;
        readonly asProposed: {
            readonly account: AccountId32;
            readonly proposalIndex: u32;
            readonly proposalHash: H256;
            readonly threshold: u32;
        } & Struct;
        readonly isVoted: boolean;
        readonly asVoted: {
            readonly account: AccountId32;
            readonly proposalHash: H256;
            readonly voted: bool;
            readonly yes: u32;
            readonly no: u32;
        } & Struct;
        readonly isApproved: boolean;
        readonly asApproved: {
            readonly proposalHash: H256;
        } & Struct;
        readonly isDisapproved: boolean;
        readonly asDisapproved: {
            readonly proposalHash: H256;
        } & Struct;
        readonly isExecuted: boolean;
        readonly asExecuted: {
            readonly proposalHash: H256;
            readonly result: Result<Null, SpRuntimeDispatchError>;
        } & Struct;
        readonly isMemberExecuted: boolean;
        readonly asMemberExecuted: {
            readonly proposalHash: H256;
            readonly result: Result<Null, SpRuntimeDispatchError>;
        } & Struct;
        readonly isClosed: boolean;
        readonly asClosed: {
            readonly proposalHash: H256;
            readonly yes: u32;
            readonly no: u32;
        } & Struct;
        readonly isMembersChanged: boolean;
        readonly asMembersChanged: {
            readonly newMembers: Vec<AccountId32>;
        } & Struct;
        readonly isPrimeSet: boolean;
        readonly asPrimeSet: {
            readonly newPrime: Option<AccountId32>;
        } & Struct;
        readonly type: 'Proposed' | 'Voted' | 'Approved' | 'Disapproved' | 'Executed' | 'MemberExecuted' | 'Closed' | 'MembersChanged' | 'PrimeSet';
    }
    /** @name PalletIdentityEvent (145) */
    interface PalletIdentityEvent extends Enum {
        readonly isIdentitySet: boolean;
        readonly asIdentitySet: {
            readonly who: AccountId32;
        } & Struct;
        readonly isIdentityCleared: boolean;
        readonly asIdentityCleared: {
            readonly who: AccountId32;
            readonly deposit: u128;
        } & Struct;
        readonly isIdentityKilled: boolean;
        readonly asIdentityKilled: {
            readonly who: AccountId32;
            readonly deposit: u128;
        } & Struct;
        readonly isJudgementRequested: boolean;
        readonly asJudgementRequested: {
            readonly who: AccountId32;
            readonly registrarIndex: u32;
        } & Struct;
        readonly isJudgementUnrequested: boolean;
        readonly asJudgementUnrequested: {
            readonly who: AccountId32;
            readonly registrarIndex: u32;
        } & Struct;
        readonly isJudgementGiven: boolean;
        readonly asJudgementGiven: {
            readonly target: AccountId32;
            readonly registrarIndex: u32;
        } & Struct;
        readonly isRegistrarAdded: boolean;
        readonly asRegistrarAdded: {
            readonly registrarIndex: u32;
        } & Struct;
        readonly isSubIdentityAdded: boolean;
        readonly asSubIdentityAdded: {
            readonly sub: AccountId32;
            readonly main: AccountId32;
            readonly deposit: u128;
        } & Struct;
        readonly isSubIdentityRemoved: boolean;
        readonly asSubIdentityRemoved: {
            readonly sub: AccountId32;
            readonly main: AccountId32;
            readonly deposit: u128;
        } & Struct;
        readonly isSubIdentityRevoked: boolean;
        readonly asSubIdentityRevoked: {
            readonly sub: AccountId32;
            readonly main: AccountId32;
            readonly deposit: u128;
        } & Struct;
        readonly type: 'IdentitySet' | 'IdentityCleared' | 'IdentityKilled' | 'JudgementRequested' | 'JudgementUnrequested' | 'JudgementGiven' | 'RegistrarAdded' | 'SubIdentityAdded' | 'SubIdentityRemoved' | 'SubIdentityRevoked';
    }
    /** @name FrameSystemPhase (146) */
    interface FrameSystemPhase extends Enum {
        readonly isApplyExtrinsic: boolean;
        readonly asApplyExtrinsic: u32;
        readonly isFinalization: boolean;
        readonly isInitialization: boolean;
        readonly type: 'ApplyExtrinsic' | 'Finalization' | 'Initialization';
    }
    /** @name FrameSystemLastRuntimeUpgradeInfo (150) */
    interface FrameSystemLastRuntimeUpgradeInfo extends Struct {
        readonly specVersion: Compact<u32>;
        readonly specName: Text;
    }
    /** @name FrameSystemCall (152) */
    interface FrameSystemCall extends Enum {
        readonly isEnqueueTxs: boolean;
        readonly asEnqueueTxs: {
            readonly txs: Vec<ITuple<[Option<AccountId32>, Bytes]>>;
        } & Struct;
        readonly isRemark: boolean;
        readonly asRemark: {
            readonly remark: Bytes;
        } & Struct;
        readonly isSetHeapPages: boolean;
        readonly asSetHeapPages: {
            readonly pages: u64;
        } & Struct;
        readonly isSetCode: boolean;
        readonly asSetCode: {
            readonly code: Bytes;
        } & Struct;
        readonly isSetCodeWithoutChecks: boolean;
        readonly asSetCodeWithoutChecks: {
            readonly code: Bytes;
        } & Struct;
        readonly isSetStorage: boolean;
        readonly asSetStorage: {
            readonly items: Vec<ITuple<[Bytes, Bytes]>>;
        } & Struct;
        readonly isKillStorage: boolean;
        readonly asKillStorage: {
            readonly keys_: Vec<Bytes>;
        } & Struct;
        readonly isKillPrefix: boolean;
        readonly asKillPrefix: {
            readonly prefix: Bytes;
            readonly subkeys: u32;
        } & Struct;
        readonly isRemarkWithEvent: boolean;
        readonly asRemarkWithEvent: {
            readonly remark: Bytes;
        } & Struct;
        readonly type: 'EnqueueTxs' | 'Remark' | 'SetHeapPages' | 'SetCode' | 'SetCodeWithoutChecks' | 'SetStorage' | 'KillStorage' | 'KillPrefix' | 'RemarkWithEvent';
    }
    /** @name FrameSystemLimitsBlockWeights (156) */
    interface FrameSystemLimitsBlockWeights extends Struct {
        readonly baseBlock: SpWeightsWeightV2Weight;
        readonly maxBlock: SpWeightsWeightV2Weight;
        readonly perClass: FrameSupportDispatchPerDispatchClassWeightsPerClass;
    }
    /** @name FrameSupportDispatchPerDispatchClassWeightsPerClass (157) */
    interface FrameSupportDispatchPerDispatchClassWeightsPerClass extends Struct {
        readonly normal: FrameSystemLimitsWeightsPerClass;
        readonly operational: FrameSystemLimitsWeightsPerClass;
        readonly mandatory: FrameSystemLimitsWeightsPerClass;
    }
    /** @name FrameSystemLimitsWeightsPerClass (158) */
    interface FrameSystemLimitsWeightsPerClass extends Struct {
        readonly baseExtrinsic: SpWeightsWeightV2Weight;
        readonly maxExtrinsic: Option<SpWeightsWeightV2Weight>;
        readonly maxTotal: Option<SpWeightsWeightV2Weight>;
        readonly reserved: Option<SpWeightsWeightV2Weight>;
    }
    /** @name FrameSystemLimitsBlockLength (160) */
    interface FrameSystemLimitsBlockLength extends Struct {
        readonly max: FrameSupportDispatchPerDispatchClassU32;
    }
    /** @name FrameSupportDispatchPerDispatchClassU32 (161) */
    interface FrameSupportDispatchPerDispatchClassU32 extends Struct {
        readonly normal: u32;
        readonly operational: u32;
        readonly mandatory: u32;
    }
    /** @name SpWeightsRuntimeDbWeight (162) */
    interface SpWeightsRuntimeDbWeight extends Struct {
        readonly read: u64;
        readonly write: u64;
    }
    /** @name SpVersionRuntimeVersion (163) */
    interface SpVersionRuntimeVersion extends Struct {
        readonly specName: Text;
        readonly implName: Text;
        readonly authoringVersion: u32;
        readonly specVersion: u32;
        readonly implVersion: u32;
        readonly apis: Vec<ITuple<[U8aFixed, u32]>>;
        readonly transactionVersion: u32;
        readonly stateVersion: u8;
    }
    /** @name FrameSystemError (167) */
    interface FrameSystemError extends Enum {
        readonly isInvalidSpecName: boolean;
        readonly isSpecVersionNeedsToIncrease: boolean;
        readonly isFailedToExtractRuntimeVersion: boolean;
        readonly isNonDefaultComposite: boolean;
        readonly isNonZeroRefCount: boolean;
        readonly isCallFiltered: boolean;
        readonly isStorageQueueFull: boolean;
        readonly type: 'InvalidSpecName' | 'SpecVersionNeedsToIncrease' | 'FailedToExtractRuntimeVersion' | 'NonDefaultComposite' | 'NonZeroRefCount' | 'CallFiltered' | 'StorageQueueFull';
    }
    /** @name PolkadotPrimitivesV2PersistedValidationData (168) */
    interface PolkadotPrimitivesV2PersistedValidationData extends Struct {
        readonly parentHead: Bytes;
        readonly relayParentNumber: u32;
        readonly relayParentStorageRoot: H256;
        readonly maxPovSize: u32;
    }
    /** @name PolkadotPrimitivesV2UpgradeRestriction (171) */
    interface PolkadotPrimitivesV2UpgradeRestriction extends Enum {
        readonly isPresent: boolean;
        readonly type: 'Present';
    }
    /** @name SpTrieStorageProof (172) */
    interface SpTrieStorageProof extends Struct {
        readonly trieNodes: BTreeSet<Bytes>;
    }
    /** @name CumulusPalletParachainSystemRelayStateSnapshotMessagingStateSnapshot (174) */
    interface CumulusPalletParachainSystemRelayStateSnapshotMessagingStateSnapshot extends Struct {
        readonly dmqMqcHead: H256;
        readonly relayDispatchQueueSize: ITuple<[u32, u32]>;
        readonly ingressChannels: Vec<ITuple<[u32, PolkadotPrimitivesV2AbridgedHrmpChannel]>>;
        readonly egressChannels: Vec<ITuple<[u32, PolkadotPrimitivesV2AbridgedHrmpChannel]>>;
    }
    /** @name PolkadotPrimitivesV2AbridgedHrmpChannel (177) */
    interface PolkadotPrimitivesV2AbridgedHrmpChannel extends Struct {
        readonly maxCapacity: u32;
        readonly maxTotalSize: u32;
        readonly maxMessageSize: u32;
        readonly msgCount: u32;
        readonly totalSize: u32;
        readonly mqcHead: Option<H256>;
    }
    /** @name PolkadotPrimitivesV2AbridgedHostConfiguration (179) */
    interface PolkadotPrimitivesV2AbridgedHostConfiguration extends Struct {
        readonly maxCodeSize: u32;
        readonly maxHeadDataSize: u32;
        readonly maxUpwardQueueCount: u32;
        readonly maxUpwardQueueSize: u32;
        readonly maxUpwardMessageSize: u32;
        readonly maxUpwardMessageNumPerCandidate: u32;
        readonly hrmpMaxMessageNumPerCandidate: u32;
        readonly validationUpgradeCooldown: u32;
        readonly validationUpgradeDelay: u32;
    }
    /** @name PolkadotCorePrimitivesOutboundHrmpMessage (185) */
    interface PolkadotCorePrimitivesOutboundHrmpMessage extends Struct {
        readonly recipient: u32;
        readonly data: Bytes;
    }
    /** @name CumulusPalletParachainSystemCodeUpgradeAuthorization (186) */
    interface CumulusPalletParachainSystemCodeUpgradeAuthorization extends Struct {
        readonly codeHash: H256;
        readonly checkVersion: bool;
    }
    /** @name CumulusPalletParachainSystemCall (187) */
    interface CumulusPalletParachainSystemCall extends Enum {
        readonly isSetValidationData: boolean;
        readonly asSetValidationData: {
            readonly data: CumulusPrimitivesParachainInherentParachainInherentData;
        } & Struct;
        readonly isSudoSendUpwardMessage: boolean;
        readonly asSudoSendUpwardMessage: {
            readonly message: Bytes;
        } & Struct;
        readonly isAuthorizeUpgrade: boolean;
        readonly asAuthorizeUpgrade: {
            readonly codeHash: H256;
            readonly checkVersion: bool;
        } & Struct;
        readonly isEnactAuthorizedUpgrade: boolean;
        readonly asEnactAuthorizedUpgrade: {
            readonly code: Bytes;
        } & Struct;
        readonly type: 'SetValidationData' | 'SudoSendUpwardMessage' | 'AuthorizeUpgrade' | 'EnactAuthorizedUpgrade';
    }
    /** @name CumulusPrimitivesParachainInherentParachainInherentData (188) */
    interface CumulusPrimitivesParachainInherentParachainInherentData extends Struct {
        readonly validationData: PolkadotPrimitivesV2PersistedValidationData;
        readonly relayChainState: SpTrieStorageProof;
        readonly downwardMessages: Vec<PolkadotCorePrimitivesInboundDownwardMessage>;
        readonly horizontalMessages: BTreeMap<u32, Vec<PolkadotCorePrimitivesInboundHrmpMessage>>;
    }
    /** @name PolkadotCorePrimitivesInboundDownwardMessage (190) */
    interface PolkadotCorePrimitivesInboundDownwardMessage extends Struct {
        readonly sentAt: u32;
        readonly msg: Bytes;
    }
    /** @name PolkadotCorePrimitivesInboundHrmpMessage (193) */
    interface PolkadotCorePrimitivesInboundHrmpMessage extends Struct {
        readonly sentAt: u32;
        readonly data: Bytes;
    }
    /** @name CumulusPalletParachainSystemError (196) */
    interface CumulusPalletParachainSystemError extends Enum {
        readonly isOverlappingUpgrades: boolean;
        readonly isProhibitedByPolkadot: boolean;
        readonly isTooBig: boolean;
        readonly isValidationDataNotAvailable: boolean;
        readonly isHostConfigurationNotAvailable: boolean;
        readonly isNotScheduled: boolean;
        readonly isNothingAuthorized: boolean;
        readonly isUnauthorized: boolean;
        readonly isUpgradeBlockedByMaintenanceMode: boolean;
        readonly type: 'OverlappingUpgrades' | 'ProhibitedByPolkadot' | 'TooBig' | 'ValidationDataNotAvailable' | 'HostConfigurationNotAvailable' | 'NotScheduled' | 'NothingAuthorized' | 'Unauthorized' | 'UpgradeBlockedByMaintenanceMode';
    }
    /** @name PalletTimestampCall (197) */
    interface PalletTimestampCall extends Enum {
        readonly isSet: boolean;
        readonly asSet: {
            readonly now: Compact<u64>;
        } & Struct;
        readonly type: 'Set';
    }
    /** @name PalletUtilityMangataCall (198) */
    interface PalletUtilityMangataCall extends Enum {
        readonly isBatch: boolean;
        readonly asBatch: {
            readonly calls: Vec<Call>;
        } & Struct;
        readonly isAsDerivative: boolean;
        readonly asAsDerivative: {
            readonly index: u16;
            readonly call: Call;
        } & Struct;
        readonly isBatchAll: boolean;
        readonly asBatchAll: {
            readonly calls: Vec<Call>;
        } & Struct;
        readonly isDispatchAs: boolean;
        readonly asDispatchAs: {
            readonly asOrigin: MangataRococoRuntimeOriginCaller;
            readonly call: Call;
        } & Struct;
        readonly isForceBatch: boolean;
        readonly asForceBatch: {
            readonly calls: Vec<Call>;
        } & Struct;
        readonly type: 'Batch' | 'AsDerivative' | 'BatchAll' | 'DispatchAs' | 'ForceBatch';
    }
    /** @name PalletProxyCall (201) */
    interface PalletProxyCall extends Enum {
        readonly isProxy: boolean;
        readonly asProxy: {
            readonly real: MultiAddress;
            readonly forceProxyType: Option<CommonRuntimeConfigPalletProxyProxyType>;
            readonly call: Call;
        } & Struct;
        readonly isAddProxy: boolean;
        readonly asAddProxy: {
            readonly delegate: MultiAddress;
            readonly proxyType: CommonRuntimeConfigPalletProxyProxyType;
            readonly delay: u32;
        } & Struct;
        readonly isRemoveProxy: boolean;
        readonly asRemoveProxy: {
            readonly delegate: MultiAddress;
            readonly proxyType: CommonRuntimeConfigPalletProxyProxyType;
            readonly delay: u32;
        } & Struct;
        readonly isRemoveProxies: boolean;
        readonly isCreatePure: boolean;
        readonly asCreatePure: {
            readonly proxyType: CommonRuntimeConfigPalletProxyProxyType;
            readonly delay: u32;
            readonly index: u16;
        } & Struct;
        readonly isKillPure: boolean;
        readonly asKillPure: {
            readonly spawner: MultiAddress;
            readonly proxyType: CommonRuntimeConfigPalletProxyProxyType;
            readonly index: u16;
            readonly height: Compact<u32>;
            readonly extIndex: Compact<u32>;
        } & Struct;
        readonly isAnnounce: boolean;
        readonly asAnnounce: {
            readonly real: MultiAddress;
            readonly callHash: H256;
        } & Struct;
        readonly isRemoveAnnouncement: boolean;
        readonly asRemoveAnnouncement: {
            readonly real: MultiAddress;
            readonly callHash: H256;
        } & Struct;
        readonly isRejectAnnouncement: boolean;
        readonly asRejectAnnouncement: {
            readonly delegate: MultiAddress;
            readonly callHash: H256;
        } & Struct;
        readonly isProxyAnnounced: boolean;
        readonly asProxyAnnounced: {
            readonly delegate: MultiAddress;
            readonly real: MultiAddress;
            readonly forceProxyType: Option<CommonRuntimeConfigPalletProxyProxyType>;
            readonly call: Call;
        } & Struct;
        readonly type: 'Proxy' | 'AddProxy' | 'RemoveProxy' | 'RemoveProxies' | 'CreatePure' | 'KillPure' | 'Announce' | 'RemoveAnnouncement' | 'RejectAnnouncement' | 'ProxyAnnounced';
    }
    /** @name PalletMaintenanceCall (205) */
    interface PalletMaintenanceCall extends Enum {
        readonly isSwitchMaintenanceModeOn: boolean;
        readonly isSwitchMaintenanceModeOff: boolean;
        readonly isSwitchUpgradabilityInMaintenanceModeOn: boolean;
        readonly isSwitchUpgradabilityInMaintenanceModeOff: boolean;
        readonly type: 'SwitchMaintenanceModeOn' | 'SwitchMaintenanceModeOff' | 'SwitchUpgradabilityInMaintenanceModeOn' | 'SwitchUpgradabilityInMaintenanceModeOff';
    }
    /** @name PalletRootTestingCall (206) */
    interface PalletRootTestingCall extends Enum {
        readonly isFillBlock: boolean;
        readonly asFillBlock: {
            readonly ratio: Perbill;
        } & Struct;
        readonly type: 'FillBlock';
    }
    /** @name OrmlTokensModuleCall (207) */
    interface OrmlTokensModuleCall extends Enum {
        readonly isTransfer: boolean;
        readonly asTransfer: {
            readonly dest: MultiAddress;
            readonly currencyId: u32;
            readonly amount: Compact<u128>;
        } & Struct;
        readonly isTransferAll: boolean;
        readonly asTransferAll: {
            readonly dest: MultiAddress;
            readonly currencyId: u32;
            readonly keepAlive: bool;
        } & Struct;
        readonly isTransferKeepAlive: boolean;
        readonly asTransferKeepAlive: {
            readonly dest: MultiAddress;
            readonly currencyId: u32;
            readonly amount: Compact<u128>;
        } & Struct;
        readonly isForceTransfer: boolean;
        readonly asForceTransfer: {
            readonly source: MultiAddress;
            readonly dest: MultiAddress;
            readonly currencyId: u32;
            readonly amount: Compact<u128>;
        } & Struct;
        readonly isSetBalance: boolean;
        readonly asSetBalance: {
            readonly who: MultiAddress;
            readonly currencyId: u32;
            readonly newFree: Compact<u128>;
            readonly newReserved: Compact<u128>;
        } & Struct;
        readonly isCreate: boolean;
        readonly asCreate: {
            readonly who: MultiAddress;
            readonly amount: Compact<u128>;
        } & Struct;
        readonly isMint: boolean;
        readonly asMint: {
            readonly currencyId: u32;
            readonly who: MultiAddress;
            readonly amount: Compact<u128>;
        } & Struct;
        readonly type: 'Transfer' | 'TransferAll' | 'TransferKeepAlive' | 'ForceTransfer' | 'SetBalance' | 'Create' | 'Mint';
    }
    /** @name PalletXykCall (208) */
    interface PalletXykCall extends Enum {
        readonly isCreatePool: boolean;
        readonly asCreatePool: {
            readonly firstAssetId: u32;
            readonly firstAssetAmount: u128;
            readonly secondAssetId: u32;
            readonly secondAssetAmount: u128;
        } & Struct;
        readonly isSellAsset: boolean;
        readonly asSellAsset: {
            readonly soldAssetId: u32;
            readonly boughtAssetId: u32;
            readonly soldAssetAmount: u128;
            readonly minAmountOut: u128;
        } & Struct;
        readonly isMultiswapSellAsset: boolean;
        readonly asMultiswapSellAsset: {
            readonly swapTokenList: Vec<u32>;
            readonly soldAssetAmount: u128;
            readonly minAmountOut: u128;
        } & Struct;
        readonly isBuyAsset: boolean;
        readonly asBuyAsset: {
            readonly soldAssetId: u32;
            readonly boughtAssetId: u32;
            readonly boughtAssetAmount: u128;
            readonly maxAmountIn: u128;
        } & Struct;
        readonly isMultiswapBuyAsset: boolean;
        readonly asMultiswapBuyAsset: {
            readonly swapTokenList: Vec<u32>;
            readonly boughtAssetAmount: u128;
            readonly maxAmountIn: u128;
        } & Struct;
        readonly isMintLiquidityUsingVestingNativeTokensByVestingIndex: boolean;
        readonly asMintLiquidityUsingVestingNativeTokensByVestingIndex: {
            readonly nativeAssetVestingIndex: u32;
            readonly vestingNativeAssetUnlockSomeAmountOrAll: Option<u128>;
            readonly secondAssetId: u32;
            readonly expectedSecondAssetAmount: u128;
        } & Struct;
        readonly isMintLiquidityUsingVestingNativeTokens: boolean;
        readonly asMintLiquidityUsingVestingNativeTokens: {
            readonly vestingNativeAssetAmount: u128;
            readonly secondAssetId: u32;
            readonly expectedSecondAssetAmount: u128;
        } & Struct;
        readonly isMintLiquidity: boolean;
        readonly asMintLiquidity: {
            readonly firstAssetId: u32;
            readonly secondAssetId: u32;
            readonly firstAssetAmount: u128;
            readonly expectedSecondAssetAmount: u128;
        } & Struct;
        readonly isCompoundRewards: boolean;
        readonly asCompoundRewards: {
            readonly liquidityAssetId: u32;
            readonly amountPermille: Permill;
        } & Struct;
        readonly isProvideLiquidityWithConversion: boolean;
        readonly asProvideLiquidityWithConversion: {
            readonly liquidityAssetId: u32;
            readonly providedAssetId: u32;
            readonly providedAssetAmount: u128;
        } & Struct;
        readonly isBurnLiquidity: boolean;
        readonly asBurnLiquidity: {
            readonly firstAssetId: u32;
            readonly secondAssetId: u32;
            readonly liquidityAssetAmount: u128;
        } & Struct;
        readonly type: 'CreatePool' | 'SellAsset' | 'MultiswapSellAsset' | 'BuyAsset' | 'MultiswapBuyAsset' | 'MintLiquidityUsingVestingNativeTokensByVestingIndex' | 'MintLiquidityUsingVestingNativeTokens' | 'MintLiquidity' | 'CompoundRewards' | 'ProvideLiquidityWithConversion' | 'BurnLiquidity';
    }
    /** @name PalletProofOfStakeCall (211) */
    interface PalletProofOfStakeCall extends Enum {
        readonly isClaimRewardsAll: boolean;
        readonly asClaimRewardsAll: {
            readonly liquidityTokenId: u32;
        } & Struct;
        readonly isUpdatePoolPromotion: boolean;
        readonly asUpdatePoolPromotion: {
            readonly liquidityTokenId: u32;
            readonly liquidityMiningIssuanceWeight: u8;
        } & Struct;
        readonly isActivateLiquidity: boolean;
        readonly asActivateLiquidity: {
            readonly liquidityTokenId: u32;
            readonly amount: u128;
            readonly useBalanceFrom: Option<MangataTypesMultipurposeLiquidityActivateKind>;
        } & Struct;
        readonly isDeactivateLiquidity: boolean;
        readonly asDeactivateLiquidity: {
            readonly liquidityTokenId: u32;
            readonly amount: u128;
        } & Struct;
        readonly type: 'ClaimRewardsAll' | 'UpdatePoolPromotion' | 'ActivateLiquidity' | 'DeactivateLiquidity';
    }
    /** @name MangataTypesMultipurposeLiquidityActivateKind (213) */
    interface MangataTypesMultipurposeLiquidityActivateKind extends Enum {
        readonly isAvailableBalance: boolean;
        readonly isStakedUnactivatedReserves: boolean;
        readonly isUnspentReserves: boolean;
        readonly type: 'AvailableBalance' | 'StakedUnactivatedReserves' | 'UnspentReserves';
    }
    /** @name PalletFeeLockCall (214) */
    interface PalletFeeLockCall extends Enum {
        readonly isUpdateFeeLockMetadata: boolean;
        readonly asUpdateFeeLockMetadata: {
            readonly periodLength: Option<u32>;
            readonly feeLockAmount: Option<u128>;
            readonly swapValueThreshold: Option<u128>;
            readonly shouldBeWhitelisted: Option<Vec<ITuple<[u32, bool]>>>;
        } & Struct;
        readonly isUnlockFee: boolean;
        readonly type: 'UpdateFeeLockMetadata' | 'UnlockFee';
    }
    /** @name PalletVestingMangataCall (218) */
    interface PalletVestingMangataCall extends Enum {
        readonly isVest: boolean;
        readonly asVest: {
            readonly tokenId: u32;
        } & Struct;
        readonly isVestOther: boolean;
        readonly asVestOther: {
            readonly tokenId: u32;
            readonly target: MultiAddress;
        } & Struct;
        readonly isForceVestedTransfer: boolean;
        readonly asForceVestedTransfer: {
            readonly tokenId: u32;
            readonly source: MultiAddress;
            readonly target: MultiAddress;
            readonly schedule: PalletVestingMangataVestingInfo;
        } & Struct;
        readonly isMergeSchedules: boolean;
        readonly asMergeSchedules: {
            readonly tokenId: u32;
            readonly schedule1Index: u32;
            readonly schedule2Index: u32;
        } & Struct;
        readonly isSudoUnlockAllVestingTokens: boolean;
        readonly asSudoUnlockAllVestingTokens: {
            readonly target: MultiAddress;
            readonly tokenId: u32;
        } & Struct;
        readonly type: 'Vest' | 'VestOther' | 'ForceVestedTransfer' | 'MergeSchedules' | 'SudoUnlockAllVestingTokens';
    }
    /** @name PalletVestingMangataVestingInfo (219) */
    interface PalletVestingMangataVestingInfo extends Struct {
        readonly locked: u128;
        readonly perBlock: u128;
        readonly startingBlock: u32;
    }
    /** @name PalletCrowdloanRewardsCall (220) */
    interface PalletCrowdloanRewardsCall extends Enum {
        readonly isAssociateNativeIdentity: boolean;
        readonly asAssociateNativeIdentity: {
            readonly rewardAccount: AccountId32;
            readonly relayAccount: AccountId32;
            readonly proof: SpRuntimeMultiSignature;
        } & Struct;
        readonly isChangeAssociationWithRelayKeys: boolean;
        readonly asChangeAssociationWithRelayKeys: {
            readonly rewardAccount: AccountId32;
            readonly previousAccount: AccountId32;
            readonly proofs: Vec<ITuple<[AccountId32, SpRuntimeMultiSignature]>>;
        } & Struct;
        readonly isClaim: boolean;
        readonly asClaim: {
            readonly crowdloanId: Option<u32>;
        } & Struct;
        readonly isUpdateRewardAddress: boolean;
        readonly asUpdateRewardAddress: {
            readonly newRewardAccount: AccountId32;
        } & Struct;
        readonly isCompleteInitialization: boolean;
        readonly asCompleteInitialization: {
            readonly leaseStartBlock: u32;
            readonly leaseEndingBlock: u32;
        } & Struct;
        readonly isSetCrowdloanAllocation: boolean;
        readonly asSetCrowdloanAllocation: {
            readonly crowdloanAllocationAmount: u128;
        } & Struct;
        readonly isInitializeRewardVec: boolean;
        readonly asInitializeRewardVec: {
            readonly rewards: Vec<ITuple<[AccountId32, Option<AccountId32>, u128]>>;
        } & Struct;
        readonly type: 'AssociateNativeIdentity' | 'ChangeAssociationWithRelayKeys' | 'Claim' | 'UpdateRewardAddress' | 'CompleteInitialization' | 'SetCrowdloanAllocation' | 'InitializeRewardVec';
    }
    /** @name SpRuntimeMultiSignature (221) */
    interface SpRuntimeMultiSignature extends Enum {
        readonly isEd25519: boolean;
        readonly asEd25519: SpCoreEd25519Signature;
        readonly isSr25519: boolean;
        readonly asSr25519: SpCoreSr25519Signature;
        readonly isEcdsa: boolean;
        readonly asEcdsa: SpCoreEcdsaSignature;
        readonly type: 'Ed25519' | 'Sr25519' | 'Ecdsa';
    }
    /** @name SpCoreEd25519Signature (222) */
    interface SpCoreEd25519Signature extends U8aFixed {
    }
    /** @name SpCoreSr25519Signature (224) */
    interface SpCoreSr25519Signature extends U8aFixed {
    }
    /** @name SpCoreEcdsaSignature (225) */
    interface SpCoreEcdsaSignature extends U8aFixed {
    }
    /** @name PalletIssuanceCall (231) */
    interface PalletIssuanceCall extends Enum {
        readonly isInitIssuanceConfig: boolean;
        readonly isFinalizeTge: boolean;
        readonly isExecuteTge: boolean;
        readonly asExecuteTge: {
            readonly tgeInfos: Vec<PalletIssuanceTgeInfo>;
        } & Struct;
        readonly type: 'InitIssuanceConfig' | 'FinalizeTge' | 'ExecuteTge';
    }
    /** @name PalletMultipurposeLiquidityCall (233) */
    interface PalletMultipurposeLiquidityCall extends Enum {
        readonly isReserveVestingLiquidityTokensByVestingIndex: boolean;
        readonly asReserveVestingLiquidityTokensByVestingIndex: {
            readonly liquidityTokenId: u32;
            readonly liquidityTokenVestingIndex: u32;
            readonly liquidityTokenUnlockSomeAmountOrAll: Option<u128>;
        } & Struct;
        readonly isReserveVestingNativeTokensByVestingIndex: boolean;
        readonly asReserveVestingNativeTokensByVestingIndex: {
            readonly liquidityTokenVestingIndex: u32;
            readonly liquidityTokenUnlockSomeAmountOrAll: Option<u128>;
        } & Struct;
        readonly isReserveVestingLiquidityTokens: boolean;
        readonly asReserveVestingLiquidityTokens: {
            readonly liquidityTokenId: u32;
            readonly liquidityTokenAmount: u128;
        } & Struct;
        readonly isUnreserveAndRelockInstance: boolean;
        readonly asUnreserveAndRelockInstance: {
            readonly liquidityTokenId: u32;
            readonly relockInstanceIndex: u32;
        } & Struct;
        readonly type: 'ReserveVestingLiquidityTokensByVestingIndex' | 'ReserveVestingNativeTokensByVestingIndex' | 'ReserveVestingLiquidityTokens' | 'UnreserveAndRelockInstance';
    }
    /** @name PalletBootstrapCall (234) */
    interface PalletBootstrapCall extends Enum {
        readonly isProvision: boolean;
        readonly asProvision: {
            readonly tokenId: u32;
            readonly amount: u128;
        } & Struct;
        readonly isWhitelistAccounts: boolean;
        readonly asWhitelistAccounts: {
            readonly accounts: Vec<AccountId32>;
        } & Struct;
        readonly isScheduleBootstrap: boolean;
        readonly asScheduleBootstrap: {
            readonly firstTokenId: u32;
            readonly secondTokenId: u32;
            readonly idoStart: u32;
            readonly whitelistPhaseLength: Option<u32>;
            readonly publicPhaseLenght: u32;
            readonly maxFirstToSecondRatio: Option<ITuple<[u128, u128]>>;
            readonly promoteBootstrapPool: bool;
        } & Struct;
        readonly isCancelBootstrap: boolean;
        readonly isUpdatePromoteBootstrapPool: boolean;
        readonly asUpdatePromoteBootstrapPool: {
            readonly promoteBootstrapPool: bool;
        } & Struct;
        readonly isClaimLiquidityTokens: boolean;
        readonly isClaimAndActivateLiquidityTokens: boolean;
        readonly isPreFinalize: boolean;
        readonly isFinalize: boolean;
        readonly isClaimLiquidityTokensForAccount: boolean;
        readonly asClaimLiquidityTokensForAccount: {
            readonly account: AccountId32;
            readonly activateRewards: bool;
        } & Struct;
        readonly type: 'Provision' | 'WhitelistAccounts' | 'ScheduleBootstrap' | 'CancelBootstrap' | 'UpdatePromoteBootstrapPool' | 'ClaimLiquidityTokens' | 'ClaimAndActivateLiquidityTokens' | 'PreFinalize' | 'Finalize' | 'ClaimLiquidityTokensForAccount';
    }
    /** @name ParachainStakingCall (237) */
    interface ParachainStakingCall extends Enum {
        readonly isSetTotalSelected: boolean;
        readonly asSetTotalSelected: {
            readonly new_: u32;
        } & Struct;
        readonly isSetCollatorCommission: boolean;
        readonly asSetCollatorCommission: {
            readonly new_: Perbill;
        } & Struct;
        readonly isJoinCandidates: boolean;
        readonly asJoinCandidates: {
            readonly bond: u128;
            readonly liquidityToken: u32;
            readonly useBalanceFrom: Option<MangataTypesMultipurposeLiquidityBondKind>;
            readonly candidateCount: u32;
            readonly liquidityTokenCount: u32;
        } & Struct;
        readonly isScheduleLeaveCandidates: boolean;
        readonly asScheduleLeaveCandidates: {
            readonly candidateCount: u32;
        } & Struct;
        readonly isExecuteLeaveCandidates: boolean;
        readonly asExecuteLeaveCandidates: {
            readonly candidate: AccountId32;
            readonly candidateDelegationCount: u32;
        } & Struct;
        readonly isCancelLeaveCandidates: boolean;
        readonly asCancelLeaveCandidates: {
            readonly candidateCount: u32;
        } & Struct;
        readonly isGoOffline: boolean;
        readonly isGoOnline: boolean;
        readonly isScheduleCandidateBondMore: boolean;
        readonly asScheduleCandidateBondMore: {
            readonly more: u128;
            readonly useBalanceFrom: Option<MangataTypesMultipurposeLiquidityBondKind>;
        } & Struct;
        readonly isScheduleCandidateBondLess: boolean;
        readonly asScheduleCandidateBondLess: {
            readonly less: u128;
        } & Struct;
        readonly isExecuteCandidateBondRequest: boolean;
        readonly asExecuteCandidateBondRequest: {
            readonly candidate: AccountId32;
            readonly useBalanceFrom: Option<MangataTypesMultipurposeLiquidityBondKind>;
        } & Struct;
        readonly isCancelCandidateBondRequest: boolean;
        readonly isDelegate: boolean;
        readonly asDelegate: {
            readonly collator: AccountId32;
            readonly amount: u128;
            readonly useBalanceFrom: Option<MangataTypesMultipurposeLiquidityBondKind>;
            readonly candidateDelegationCount: u32;
            readonly delegationCount: u32;
        } & Struct;
        readonly isScheduleLeaveDelegators: boolean;
        readonly isExecuteLeaveDelegators: boolean;
        readonly asExecuteLeaveDelegators: {
            readonly delegator: AccountId32;
            readonly delegationCount: u32;
        } & Struct;
        readonly isCancelLeaveDelegators: boolean;
        readonly isScheduleRevokeDelegation: boolean;
        readonly asScheduleRevokeDelegation: {
            readonly collator: AccountId32;
        } & Struct;
        readonly isScheduleDelegatorBondMore: boolean;
        readonly asScheduleDelegatorBondMore: {
            readonly candidate: AccountId32;
            readonly more: u128;
            readonly useBalanceFrom: Option<MangataTypesMultipurposeLiquidityBondKind>;
        } & Struct;
        readonly isScheduleDelegatorBondLess: boolean;
        readonly asScheduleDelegatorBondLess: {
            readonly candidate: AccountId32;
            readonly less: u128;
        } & Struct;
        readonly isExecuteDelegationRequest: boolean;
        readonly asExecuteDelegationRequest: {
            readonly delegator: AccountId32;
            readonly candidate: AccountId32;
            readonly useBalanceFrom: Option<MangataTypesMultipurposeLiquidityBondKind>;
        } & Struct;
        readonly isCancelDelegationRequest: boolean;
        readonly asCancelDelegationRequest: {
            readonly candidate: AccountId32;
        } & Struct;
        readonly isAddStakingLiquidityToken: boolean;
        readonly asAddStakingLiquidityToken: {
            readonly pairedOrLiquidityToken: ParachainStakingPairedOrLiquidityToken;
            readonly currentLiquidityTokens: u32;
        } & Struct;
        readonly isRemoveStakingLiquidityToken: boolean;
        readonly asRemoveStakingLiquidityToken: {
            readonly pairedOrLiquidityToken: ParachainStakingPairedOrLiquidityToken;
            readonly currentLiquidityTokens: u32;
        } & Struct;
        readonly isAggregatorUpdateMetadata: boolean;
        readonly asAggregatorUpdateMetadata: {
            readonly collatorCandidates: Vec<AccountId32>;
            readonly action: ParachainStakingMetadataUpdateAction;
        } & Struct;
        readonly isUpdateCandidateAggregator: boolean;
        readonly asUpdateCandidateAggregator: {
            readonly maybeAggregator: Option<AccountId32>;
        } & Struct;
        readonly isPayoutCollatorRewards: boolean;
        readonly asPayoutCollatorRewards: {
            readonly collator: AccountId32;
            readonly numberOfSesisons: Option<u32>;
        } & Struct;
        readonly isPayoutDelegatorReward: boolean;
        readonly asPayoutDelegatorReward: {
            readonly round: u32;
            readonly collator: AccountId32;
            readonly delegator: AccountId32;
        } & Struct;
        readonly type: 'SetTotalSelected' | 'SetCollatorCommission' | 'JoinCandidates' | 'ScheduleLeaveCandidates' | 'ExecuteLeaveCandidates' | 'CancelLeaveCandidates' | 'GoOffline' | 'GoOnline' | 'ScheduleCandidateBondMore' | 'ScheduleCandidateBondLess' | 'ExecuteCandidateBondRequest' | 'CancelCandidateBondRequest' | 'Delegate' | 'ScheduleLeaveDelegators' | 'ExecuteLeaveDelegators' | 'CancelLeaveDelegators' | 'ScheduleRevokeDelegation' | 'ScheduleDelegatorBondMore' | 'ScheduleDelegatorBondLess' | 'ExecuteDelegationRequest' | 'CancelDelegationRequest' | 'AddStakingLiquidityToken' | 'RemoveStakingLiquidityToken' | 'AggregatorUpdateMetadata' | 'UpdateCandidateAggregator' | 'PayoutCollatorRewards' | 'PayoutDelegatorReward';
    }
    /** @name MangataTypesMultipurposeLiquidityBondKind (239) */
    interface MangataTypesMultipurposeLiquidityBondKind extends Enum {
        readonly isAvailableBalance: boolean;
        readonly isActivatedUnstakedReserves: boolean;
        readonly isUnspentReserves: boolean;
        readonly type: 'AvailableBalance' | 'ActivatedUnstakedReserves' | 'UnspentReserves';
    }
    /** @name ParachainStakingPairedOrLiquidityToken (240) */
    interface ParachainStakingPairedOrLiquidityToken extends Enum {
        readonly isPaired: boolean;
        readonly asPaired: u32;
        readonly isLiquidity: boolean;
        readonly asLiquidity: u32;
        readonly type: 'Paired' | 'Liquidity';
    }
    /** @name ParachainStakingMetadataUpdateAction (241) */
    interface ParachainStakingMetadataUpdateAction extends Enum {
        readonly isExtendApprovedCollators: boolean;
        readonly isRemoveApprovedCollators: boolean;
        readonly type: 'ExtendApprovedCollators' | 'RemoveApprovedCollators';
    }
    /** @name PalletSessionCall (242) */
    interface PalletSessionCall extends Enum {
        readonly isSetKeys: boolean;
        readonly asSetKeys: {
            readonly keys_: MangataRococoRuntimeSessionKeys;
            readonly proof: Bytes;
        } & Struct;
        readonly isPurgeKeys: boolean;
        readonly type: 'SetKeys' | 'PurgeKeys';
    }
    /** @name MangataRococoRuntimeSessionKeys (243) */
    interface MangataRococoRuntimeSessionKeys extends Struct {
        readonly aura: SpConsensusAuraSr25519AppSr25519Public;
    }
    /** @name SpConsensusAuraSr25519AppSr25519Public (244) */
    interface SpConsensusAuraSr25519AppSr25519Public extends SpCoreSr25519Public {
    }
    /** @name SpCoreSr25519Public (245) */
    interface SpCoreSr25519Public extends U8aFixed {
    }
    /** @name CumulusPalletXcmpQueueCall (246) */
    interface CumulusPalletXcmpQueueCall extends Enum {
        readonly isServiceOverweight: boolean;
        readonly asServiceOverweight: {
            readonly index: u64;
            readonly weightLimit: SpWeightsWeightV2Weight;
        } & Struct;
        readonly isSuspendXcmExecution: boolean;
        readonly isResumeXcmExecution: boolean;
        readonly isUpdateSuspendThreshold: boolean;
        readonly asUpdateSuspendThreshold: {
            readonly new_: u32;
        } & Struct;
        readonly isUpdateDropThreshold: boolean;
        readonly asUpdateDropThreshold: {
            readonly new_: u32;
        } & Struct;
        readonly isUpdateResumeThreshold: boolean;
        readonly asUpdateResumeThreshold: {
            readonly new_: u32;
        } & Struct;
        readonly isUpdateThresholdWeight: boolean;
        readonly asUpdateThresholdWeight: {
            readonly new_: SpWeightsWeightV2Weight;
        } & Struct;
        readonly isUpdateWeightRestrictDecay: boolean;
        readonly asUpdateWeightRestrictDecay: {
            readonly new_: SpWeightsWeightV2Weight;
        } & Struct;
        readonly isUpdateXcmpMaxIndividualWeight: boolean;
        readonly asUpdateXcmpMaxIndividualWeight: {
            readonly new_: SpWeightsWeightV2Weight;
        } & Struct;
        readonly type: 'ServiceOverweight' | 'SuspendXcmExecution' | 'ResumeXcmExecution' | 'UpdateSuspendThreshold' | 'UpdateDropThreshold' | 'UpdateResumeThreshold' | 'UpdateThresholdWeight' | 'UpdateWeightRestrictDecay' | 'UpdateXcmpMaxIndividualWeight';
    }
    /** @name PalletXcmCall (247) */
    interface PalletXcmCall extends Enum {
        readonly isSend: boolean;
        readonly asSend: {
            readonly dest: XcmVersionedMultiLocation;
            readonly message: XcmVersionedXcm;
        } & Struct;
        readonly isTeleportAssets: boolean;
        readonly asTeleportAssets: {
            readonly dest: XcmVersionedMultiLocation;
            readonly beneficiary: XcmVersionedMultiLocation;
            readonly assets: XcmVersionedMultiAssets;
            readonly feeAssetItem: u32;
        } & Struct;
        readonly isReserveTransferAssets: boolean;
        readonly asReserveTransferAssets: {
            readonly dest: XcmVersionedMultiLocation;
            readonly beneficiary: XcmVersionedMultiLocation;
            readonly assets: XcmVersionedMultiAssets;
            readonly feeAssetItem: u32;
        } & Struct;
        readonly isExecute: boolean;
        readonly asExecute: {
            readonly message: XcmVersionedXcm;
            readonly maxWeight: SpWeightsWeightV2Weight;
        } & Struct;
        readonly isForceXcmVersion: boolean;
        readonly asForceXcmVersion: {
            readonly location: XcmV3MultiLocation;
            readonly xcmVersion: u32;
        } & Struct;
        readonly isForceDefaultXcmVersion: boolean;
        readonly asForceDefaultXcmVersion: {
            readonly maybeXcmVersion: Option<u32>;
        } & Struct;
        readonly isForceSubscribeVersionNotify: boolean;
        readonly asForceSubscribeVersionNotify: {
            readonly location: XcmVersionedMultiLocation;
        } & Struct;
        readonly isForceUnsubscribeVersionNotify: boolean;
        readonly asForceUnsubscribeVersionNotify: {
            readonly location: XcmVersionedMultiLocation;
        } & Struct;
        readonly isLimitedReserveTransferAssets: boolean;
        readonly asLimitedReserveTransferAssets: {
            readonly dest: XcmVersionedMultiLocation;
            readonly beneficiary: XcmVersionedMultiLocation;
            readonly assets: XcmVersionedMultiAssets;
            readonly feeAssetItem: u32;
            readonly weightLimit: XcmV3WeightLimit;
        } & Struct;
        readonly isLimitedTeleportAssets: boolean;
        readonly asLimitedTeleportAssets: {
            readonly dest: XcmVersionedMultiLocation;
            readonly beneficiary: XcmVersionedMultiLocation;
            readonly assets: XcmVersionedMultiAssets;
            readonly feeAssetItem: u32;
            readonly weightLimit: XcmV3WeightLimit;
        } & Struct;
        readonly type: 'Send' | 'TeleportAssets' | 'ReserveTransferAssets' | 'Execute' | 'ForceXcmVersion' | 'ForceDefaultXcmVersion' | 'ForceSubscribeVersionNotify' | 'ForceUnsubscribeVersionNotify' | 'LimitedReserveTransferAssets' | 'LimitedTeleportAssets';
    }
    /** @name XcmVersionedXcm (248) */
    interface XcmVersionedXcm extends Enum {
        readonly isV2: boolean;
        readonly asV2: XcmV2Xcm;
        readonly isV3: boolean;
        readonly asV3: XcmV3Xcm;
        readonly type: 'V2' | 'V3';
    }
    /** @name XcmV2Xcm (249) */
    interface XcmV2Xcm extends Vec<XcmV2Instruction> {
    }
    /** @name XcmV2Instruction (251) */
    interface XcmV2Instruction extends Enum {
        readonly isWithdrawAsset: boolean;
        readonly asWithdrawAsset: XcmV2MultiassetMultiAssets;
        readonly isReserveAssetDeposited: boolean;
        readonly asReserveAssetDeposited: XcmV2MultiassetMultiAssets;
        readonly isReceiveTeleportedAsset: boolean;
        readonly asReceiveTeleportedAsset: XcmV2MultiassetMultiAssets;
        readonly isQueryResponse: boolean;
        readonly asQueryResponse: {
            readonly queryId: Compact<u64>;
            readonly response: XcmV2Response;
            readonly maxWeight: Compact<u64>;
        } & Struct;
        readonly isTransferAsset: boolean;
        readonly asTransferAsset: {
            readonly assets: XcmV2MultiassetMultiAssets;
            readonly beneficiary: XcmV2MultiLocation;
        } & Struct;
        readonly isTransferReserveAsset: boolean;
        readonly asTransferReserveAsset: {
            readonly assets: XcmV2MultiassetMultiAssets;
            readonly dest: XcmV2MultiLocation;
            readonly xcm: XcmV2Xcm;
        } & Struct;
        readonly isTransact: boolean;
        readonly asTransact: {
            readonly originType: XcmV2OriginKind;
            readonly requireWeightAtMost: Compact<u64>;
            readonly call: XcmDoubleEncoded;
        } & Struct;
        readonly isHrmpNewChannelOpenRequest: boolean;
        readonly asHrmpNewChannelOpenRequest: {
            readonly sender: Compact<u32>;
            readonly maxMessageSize: Compact<u32>;
            readonly maxCapacity: Compact<u32>;
        } & Struct;
        readonly isHrmpChannelAccepted: boolean;
        readonly asHrmpChannelAccepted: {
            readonly recipient: Compact<u32>;
        } & Struct;
        readonly isHrmpChannelClosing: boolean;
        readonly asHrmpChannelClosing: {
            readonly initiator: Compact<u32>;
            readonly sender: Compact<u32>;
            readonly recipient: Compact<u32>;
        } & Struct;
        readonly isClearOrigin: boolean;
        readonly isDescendOrigin: boolean;
        readonly asDescendOrigin: XcmV2MultilocationJunctions;
        readonly isReportError: boolean;
        readonly asReportError: {
            readonly queryId: Compact<u64>;
            readonly dest: XcmV2MultiLocation;
            readonly maxResponseWeight: Compact<u64>;
        } & Struct;
        readonly isDepositAsset: boolean;
        readonly asDepositAsset: {
            readonly assets: XcmV2MultiassetMultiAssetFilter;
            readonly maxAssets: Compact<u32>;
            readonly beneficiary: XcmV2MultiLocation;
        } & Struct;
        readonly isDepositReserveAsset: boolean;
        readonly asDepositReserveAsset: {
            readonly assets: XcmV2MultiassetMultiAssetFilter;
            readonly maxAssets: Compact<u32>;
            readonly dest: XcmV2MultiLocation;
            readonly xcm: XcmV2Xcm;
        } & Struct;
        readonly isExchangeAsset: boolean;
        readonly asExchangeAsset: {
            readonly give: XcmV2MultiassetMultiAssetFilter;
            readonly receive: XcmV2MultiassetMultiAssets;
        } & Struct;
        readonly isInitiateReserveWithdraw: boolean;
        readonly asInitiateReserveWithdraw: {
            readonly assets: XcmV2MultiassetMultiAssetFilter;
            readonly reserve: XcmV2MultiLocation;
            readonly xcm: XcmV2Xcm;
        } & Struct;
        readonly isInitiateTeleport: boolean;
        readonly asInitiateTeleport: {
            readonly assets: XcmV2MultiassetMultiAssetFilter;
            readonly dest: XcmV2MultiLocation;
            readonly xcm: XcmV2Xcm;
        } & Struct;
        readonly isQueryHolding: boolean;
        readonly asQueryHolding: {
            readonly queryId: Compact<u64>;
            readonly dest: XcmV2MultiLocation;
            readonly assets: XcmV2MultiassetMultiAssetFilter;
            readonly maxResponseWeight: Compact<u64>;
        } & Struct;
        readonly isBuyExecution: boolean;
        readonly asBuyExecution: {
            readonly fees: XcmV2MultiAsset;
            readonly weightLimit: XcmV2WeightLimit;
        } & Struct;
        readonly isRefundSurplus: boolean;
        readonly isSetErrorHandler: boolean;
        readonly asSetErrorHandler: XcmV2Xcm;
        readonly isSetAppendix: boolean;
        readonly asSetAppendix: XcmV2Xcm;
        readonly isClearError: boolean;
        readonly isClaimAsset: boolean;
        readonly asClaimAsset: {
            readonly assets: XcmV2MultiassetMultiAssets;
            readonly ticket: XcmV2MultiLocation;
        } & Struct;
        readonly isTrap: boolean;
        readonly asTrap: Compact<u64>;
        readonly isSubscribeVersion: boolean;
        readonly asSubscribeVersion: {
            readonly queryId: Compact<u64>;
            readonly maxResponseWeight: Compact<u64>;
        } & Struct;
        readonly isUnsubscribeVersion: boolean;
        readonly type: 'WithdrawAsset' | 'ReserveAssetDeposited' | 'ReceiveTeleportedAsset' | 'QueryResponse' | 'TransferAsset' | 'TransferReserveAsset' | 'Transact' | 'HrmpNewChannelOpenRequest' | 'HrmpChannelAccepted' | 'HrmpChannelClosing' | 'ClearOrigin' | 'DescendOrigin' | 'ReportError' | 'DepositAsset' | 'DepositReserveAsset' | 'ExchangeAsset' | 'InitiateReserveWithdraw' | 'InitiateTeleport' | 'QueryHolding' | 'BuyExecution' | 'RefundSurplus' | 'SetErrorHandler' | 'SetAppendix' | 'ClearError' | 'ClaimAsset' | 'Trap' | 'SubscribeVersion' | 'UnsubscribeVersion';
    }
    /** @name XcmV2Response (252) */
    interface XcmV2Response extends Enum {
        readonly isNull: boolean;
        readonly isAssets: boolean;
        readonly asAssets: XcmV2MultiassetMultiAssets;
        readonly isExecutionResult: boolean;
        readonly asExecutionResult: Option<ITuple<[u32, XcmV2TraitsError]>>;
        readonly isVersion: boolean;
        readonly asVersion: u32;
        readonly type: 'Null' | 'Assets' | 'ExecutionResult' | 'Version';
    }
    /** @name XcmV2TraitsError (255) */
    interface XcmV2TraitsError extends Enum {
        readonly isOverflow: boolean;
        readonly isUnimplemented: boolean;
        readonly isUntrustedReserveLocation: boolean;
        readonly isUntrustedTeleportLocation: boolean;
        readonly isMultiLocationFull: boolean;
        readonly isMultiLocationNotInvertible: boolean;
        readonly isBadOrigin: boolean;
        readonly isInvalidLocation: boolean;
        readonly isAssetNotFound: boolean;
        readonly isFailedToTransactAsset: boolean;
        readonly isNotWithdrawable: boolean;
        readonly isLocationCannotHold: boolean;
        readonly isExceedsMaxMessageSize: boolean;
        readonly isDestinationUnsupported: boolean;
        readonly isTransport: boolean;
        readonly isUnroutable: boolean;
        readonly isUnknownClaim: boolean;
        readonly isFailedToDecode: boolean;
        readonly isMaxWeightInvalid: boolean;
        readonly isNotHoldingFees: boolean;
        readonly isTooExpensive: boolean;
        readonly isTrap: boolean;
        readonly asTrap: u64;
        readonly isUnhandledXcmVersion: boolean;
        readonly isWeightLimitReached: boolean;
        readonly asWeightLimitReached: u64;
        readonly isBarrier: boolean;
        readonly isWeightNotComputable: boolean;
        readonly type: 'Overflow' | 'Unimplemented' | 'UntrustedReserveLocation' | 'UntrustedTeleportLocation' | 'MultiLocationFull' | 'MultiLocationNotInvertible' | 'BadOrigin' | 'InvalidLocation' | 'AssetNotFound' | 'FailedToTransactAsset' | 'NotWithdrawable' | 'LocationCannotHold' | 'ExceedsMaxMessageSize' | 'DestinationUnsupported' | 'Transport' | 'Unroutable' | 'UnknownClaim' | 'FailedToDecode' | 'MaxWeightInvalid' | 'NotHoldingFees' | 'TooExpensive' | 'Trap' | 'UnhandledXcmVersion' | 'WeightLimitReached' | 'Barrier' | 'WeightNotComputable';
    }
    /** @name XcmV2MultiassetMultiAssetFilter (256) */
    interface XcmV2MultiassetMultiAssetFilter extends Enum {
        readonly isDefinite: boolean;
        readonly asDefinite: XcmV2MultiassetMultiAssets;
        readonly isWild: boolean;
        readonly asWild: XcmV2MultiassetWildMultiAsset;
        readonly type: 'Definite' | 'Wild';
    }
    /** @name XcmV2MultiassetWildMultiAsset (257) */
    interface XcmV2MultiassetWildMultiAsset extends Enum {
        readonly isAll: boolean;
        readonly isAllOf: boolean;
        readonly asAllOf: {
            readonly id: XcmV2MultiassetAssetId;
            readonly fun: XcmV2MultiassetWildFungibility;
        } & Struct;
        readonly type: 'All' | 'AllOf';
    }
    /** @name XcmV2MultiassetWildFungibility (258) */
    interface XcmV2MultiassetWildFungibility extends Enum {
        readonly isFungible: boolean;
        readonly isNonFungible: boolean;
        readonly type: 'Fungible' | 'NonFungible';
    }
    /** @name XcmV2WeightLimit (259) */
    interface XcmV2WeightLimit extends Enum {
        readonly isUnlimited: boolean;
        readonly isLimited: boolean;
        readonly asLimited: Compact<u64>;
        readonly type: 'Unlimited' | 'Limited';
    }
    /** @name CumulusPalletDmpQueueCall (268) */
    interface CumulusPalletDmpQueueCall extends Enum {
        readonly isServiceOverweight: boolean;
        readonly asServiceOverweight: {
            readonly index: u64;
            readonly weightLimit: SpWeightsWeightV2Weight;
        } & Struct;
        readonly type: 'ServiceOverweight';
    }
    /** @name OrmlXtokensModuleCall (269) */
    interface OrmlXtokensModuleCall extends Enum {
        readonly isTransfer: boolean;
        readonly asTransfer: {
            readonly currencyId: u32;
            readonly amount: u128;
            readonly dest: XcmVersionedMultiLocation;
            readonly destWeightLimit: XcmV3WeightLimit;
        } & Struct;
        readonly isTransferMultiasset: boolean;
        readonly asTransferMultiasset: {
            readonly asset: XcmVersionedMultiAsset;
            readonly dest: XcmVersionedMultiLocation;
            readonly destWeightLimit: XcmV3WeightLimit;
        } & Struct;
        readonly isTransferWithFee: boolean;
        readonly asTransferWithFee: {
            readonly currencyId: u32;
            readonly amount: u128;
            readonly fee: u128;
            readonly dest: XcmVersionedMultiLocation;
            readonly destWeightLimit: XcmV3WeightLimit;
        } & Struct;
        readonly isTransferMultiassetWithFee: boolean;
        readonly asTransferMultiassetWithFee: {
            readonly asset: XcmVersionedMultiAsset;
            readonly fee: XcmVersionedMultiAsset;
            readonly dest: XcmVersionedMultiLocation;
            readonly destWeightLimit: XcmV3WeightLimit;
        } & Struct;
        readonly isTransferMulticurrencies: boolean;
        readonly asTransferMulticurrencies: {
            readonly currencies: Vec<ITuple<[u32, u128]>>;
            readonly feeItem: u32;
            readonly dest: XcmVersionedMultiLocation;
            readonly destWeightLimit: XcmV3WeightLimit;
        } & Struct;
        readonly isTransferMultiassets: boolean;
        readonly asTransferMultiassets: {
            readonly assets: XcmVersionedMultiAssets;
            readonly feeItem: u32;
            readonly dest: XcmVersionedMultiLocation;
            readonly destWeightLimit: XcmV3WeightLimit;
        } & Struct;
        readonly type: 'Transfer' | 'TransferMultiasset' | 'TransferWithFee' | 'TransferMultiassetWithFee' | 'TransferMulticurrencies' | 'TransferMultiassets';
    }
    /** @name XcmVersionedMultiAsset (270) */
    interface XcmVersionedMultiAsset extends Enum {
        readonly isV2: boolean;
        readonly asV2: XcmV2MultiAsset;
        readonly isV3: boolean;
        readonly asV3: XcmV3MultiAsset;
        readonly type: 'V2' | 'V3';
    }
    /** @name OrmlXcmModuleCall (273) */
    interface OrmlXcmModuleCall extends Enum {
        readonly isSendAsSovereign: boolean;
        readonly asSendAsSovereign: {
            readonly dest: XcmVersionedMultiLocation;
            readonly message: XcmVersionedXcm;
        } & Struct;
        readonly type: 'SendAsSovereign';
    }
    /** @name OrmlAssetRegistryModuleCall (274) */
    interface OrmlAssetRegistryModuleCall extends Enum {
        readonly isRegisterAsset: boolean;
        readonly asRegisterAsset: {
            readonly metadata: OrmlTraitsAssetRegistryAssetMetadata;
            readonly assetId: Option<u32>;
        } & Struct;
        readonly isUpdateAsset: boolean;
        readonly asUpdateAsset: {
            readonly assetId: u32;
            readonly decimals: Option<u32>;
            readonly name: Option<Bytes>;
            readonly symbol: Option<Bytes>;
            readonly existentialDeposit: Option<u128>;
            readonly location: Option<Option<XcmVersionedMultiLocation>>;
            readonly additional: Option<MangataTypesAssetsCustomMetadata>;
        } & Struct;
        readonly type: 'RegisterAsset' | 'UpdateAsset';
    }
    /** @name PalletTreasuryCall (278) */
    interface PalletTreasuryCall extends Enum {
        readonly isProposeSpend: boolean;
        readonly asProposeSpend: {
            readonly value: Compact<u128>;
            readonly beneficiary: MultiAddress;
        } & Struct;
        readonly isRejectProposal: boolean;
        readonly asRejectProposal: {
            readonly proposalId: Compact<u32>;
        } & Struct;
        readonly isApproveProposal: boolean;
        readonly asApproveProposal: {
            readonly proposalId: Compact<u32>;
        } & Struct;
        readonly isSpend: boolean;
        readonly asSpend: {
            readonly amount: Compact<u128>;
            readonly beneficiary: MultiAddress;
        } & Struct;
        readonly isRemoveApproval: boolean;
        readonly asRemoveApproval: {
            readonly proposalId: Compact<u32>;
        } & Struct;
        readonly type: 'ProposeSpend' | 'RejectProposal' | 'ApproveProposal' | 'Spend' | 'RemoveApproval';
    }
    /** @name PalletSudoMangataCall (279) */
    interface PalletSudoMangataCall extends Enum {
        readonly isSudo: boolean;
        readonly asSudo: {
            readonly call: Call;
        } & Struct;
        readonly isSudoUncheckedWeight: boolean;
        readonly asSudoUncheckedWeight: {
            readonly call: Call;
            readonly weight: SpWeightsWeightV2Weight;
        } & Struct;
        readonly isSetKey: boolean;
        readonly asSetKey: {
            readonly new_: MultiAddress;
        } & Struct;
        readonly isSudoAs: boolean;
        readonly asSudoAs: {
            readonly who: MultiAddress;
            readonly call: Call;
        } & Struct;
        readonly type: 'Sudo' | 'SudoUncheckedWeight' | 'SetKey' | 'SudoAs';
    }
    /** @name PalletSudoOriginCall (280) */
    interface PalletSudoOriginCall extends Enum {
        readonly isSudo: boolean;
        readonly asSudo: {
            readonly call: Call;
        } & Struct;
        readonly isSudoUncheckedWeight: boolean;
        readonly asSudoUncheckedWeight: {
            readonly call: Call;
            readonly weight: SpWeightsWeightV2Weight;
        } & Struct;
        readonly isSudoAs: boolean;
        readonly asSudoAs: {
            readonly who: MultiAddress;
            readonly call: Call;
        } & Struct;
        readonly type: 'Sudo' | 'SudoUncheckedWeight' | 'SudoAs';
    }
    /** @name PalletCollectiveMangataCall (281) */
    interface PalletCollectiveMangataCall extends Enum {
        readonly isSetMembers: boolean;
        readonly asSetMembers: {
            readonly newMembers: Vec<AccountId32>;
            readonly prime: Option<AccountId32>;
            readonly oldCount: u32;
        } & Struct;
        readonly isExecute: boolean;
        readonly asExecute: {
            readonly proposal: Call;
            readonly lengthBound: Compact<u32>;
        } & Struct;
        readonly isPropose: boolean;
        readonly asPropose: {
            readonly threshold: Compact<u32>;
            readonly proposal: Call;
            readonly lengthBound: Compact<u32>;
        } & Struct;
        readonly isVote: boolean;
        readonly asVote: {
            readonly proposal: H256;
            readonly index: Compact<u32>;
            readonly approve: bool;
        } & Struct;
        readonly isClose: boolean;
        readonly asClose: {
            readonly proposalHash: H256;
            readonly index: Compact<u32>;
            readonly proposalWeightBound: SpWeightsWeightV2Weight;
            readonly lengthBound: Compact<u32>;
        } & Struct;
        readonly isDisapproveProposal: boolean;
        readonly asDisapproveProposal: {
            readonly proposalHash: H256;
        } & Struct;
        readonly type: 'SetMembers' | 'Execute' | 'Propose' | 'Vote' | 'Close' | 'DisapproveProposal';
    }
    /** @name PalletIdentityCall (282) */
    interface PalletIdentityCall extends Enum {
        readonly isAddRegistrar: boolean;
        readonly asAddRegistrar: {
            readonly account: MultiAddress;
        } & Struct;
        readonly isSetIdentity: boolean;
        readonly asSetIdentity: {
            readonly info: PalletIdentityIdentityInfo;
        } & Struct;
        readonly isSetSubs: boolean;
        readonly asSetSubs: {
            readonly subs: Vec<ITuple<[AccountId32, Data]>>;
        } & Struct;
        readonly isClearIdentity: boolean;
        readonly isRequestJudgement: boolean;
        readonly asRequestJudgement: {
            readonly regIndex: Compact<u32>;
            readonly maxFee: Compact<u128>;
        } & Struct;
        readonly isCancelRequest: boolean;
        readonly asCancelRequest: {
            readonly regIndex: u32;
        } & Struct;
        readonly isSetFee: boolean;
        readonly asSetFee: {
            readonly index: Compact<u32>;
            readonly fee: Compact<u128>;
        } & Struct;
        readonly isSetAccountId: boolean;
        readonly asSetAccountId: {
            readonly index: Compact<u32>;
            readonly new_: MultiAddress;
        } & Struct;
        readonly isSetFields: boolean;
        readonly asSetFields: {
            readonly index: Compact<u32>;
            readonly fields: PalletIdentityBitFlags;
        } & Struct;
        readonly isProvideJudgement: boolean;
        readonly asProvideJudgement: {
            readonly regIndex: Compact<u32>;
            readonly target: MultiAddress;
            readonly judgement: PalletIdentityJudgement;
            readonly identity: H256;
        } & Struct;
        readonly isKillIdentity: boolean;
        readonly asKillIdentity: {
            readonly target: MultiAddress;
        } & Struct;
        readonly isAddSub: boolean;
        readonly asAddSub: {
            readonly sub: MultiAddress;
            readonly data: Data;
        } & Struct;
        readonly isRenameSub: boolean;
        readonly asRenameSub: {
            readonly sub: MultiAddress;
            readonly data: Data;
        } & Struct;
        readonly isRemoveSub: boolean;
        readonly asRemoveSub: {
            readonly sub: MultiAddress;
        } & Struct;
        readonly isQuitSub: boolean;
        readonly type: 'AddRegistrar' | 'SetIdentity' | 'SetSubs' | 'ClearIdentity' | 'RequestJudgement' | 'CancelRequest' | 'SetFee' | 'SetAccountId' | 'SetFields' | 'ProvideJudgement' | 'KillIdentity' | 'AddSub' | 'RenameSub' | 'RemoveSub' | 'QuitSub';
    }
    /** @name PalletIdentityIdentityInfo (283) */
    interface PalletIdentityIdentityInfo extends Struct {
        readonly additional: Vec<ITuple<[Data, Data]>>;
        readonly display: Data;
        readonly legal: Data;
        readonly web: Data;
        readonly riot: Data;
        readonly email: Data;
        readonly pgpFingerprint: Option<U8aFixed>;
        readonly image: Data;
        readonly twitter: Data;
    }
    /** @name PalletIdentityBitFlags (319) */
    interface PalletIdentityBitFlags extends Set {
        readonly isDisplay: boolean;
        readonly isLegal: boolean;
        readonly isWeb: boolean;
        readonly isRiot: boolean;
        readonly isEmail: boolean;
        readonly isPgpFingerprint: boolean;
        readonly isImage: boolean;
        readonly isTwitter: boolean;
    }
    /** @name PalletIdentityIdentityField (320) */
    interface PalletIdentityIdentityField extends Enum {
        readonly isDisplay: boolean;
        readonly isLegal: boolean;
        readonly isWeb: boolean;
        readonly isRiot: boolean;
        readonly isEmail: boolean;
        readonly isPgpFingerprint: boolean;
        readonly isImage: boolean;
        readonly isTwitter: boolean;
        readonly type: 'Display' | 'Legal' | 'Web' | 'Riot' | 'Email' | 'PgpFingerprint' | 'Image' | 'Twitter';
    }
    /** @name PalletIdentityJudgement (321) */
    interface PalletIdentityJudgement extends Enum {
        readonly isUnknown: boolean;
        readonly isFeePaid: boolean;
        readonly asFeePaid: u128;
        readonly isReasonable: boolean;
        readonly isKnownGood: boolean;
        readonly isOutOfDate: boolean;
        readonly isLowQuality: boolean;
        readonly isErroneous: boolean;
        readonly type: 'Unknown' | 'FeePaid' | 'Reasonable' | 'KnownGood' | 'OutOfDate' | 'LowQuality' | 'Erroneous';
    }
    /** @name MangataRococoRuntimeOriginCaller (322) */
    interface MangataRococoRuntimeOriginCaller extends Enum {
        readonly isSystem: boolean;
        readonly asSystem: FrameSupportDispatchRawOrigin;
        readonly isVoid: boolean;
        readonly isPolkadotXcm: boolean;
        readonly asPolkadotXcm: PalletXcmOrigin;
        readonly isCumulusXcm: boolean;
        readonly asCumulusXcm: CumulusPalletXcmOrigin;
        readonly isCouncil: boolean;
        readonly asCouncil: PalletCollectiveMangataRawOrigin;
        readonly type: 'System' | 'Void' | 'PolkadotXcm' | 'CumulusXcm' | 'Council';
    }
    /** @name FrameSupportDispatchRawOrigin (323) */
    interface FrameSupportDispatchRawOrigin extends Enum {
        readonly isRoot: boolean;
        readonly isSigned: boolean;
        readonly asSigned: AccountId32;
        readonly isNone: boolean;
        readonly type: 'Root' | 'Signed' | 'None';
    }
    /** @name PalletXcmOrigin (324) */
    interface PalletXcmOrigin extends Enum {
        readonly isXcm: boolean;
        readonly asXcm: XcmV3MultiLocation;
        readonly isResponse: boolean;
        readonly asResponse: XcmV3MultiLocation;
        readonly type: 'Xcm' | 'Response';
    }
    /** @name CumulusPalletXcmOrigin (325) */
    interface CumulusPalletXcmOrigin extends Enum {
        readonly isRelay: boolean;
        readonly isSiblingParachain: boolean;
        readonly asSiblingParachain: u32;
        readonly type: 'Relay' | 'SiblingParachain';
    }
    /** @name PalletCollectiveMangataRawOrigin (326) */
    interface PalletCollectiveMangataRawOrigin extends Enum {
        readonly isMembers: boolean;
        readonly asMembers: ITuple<[u32, u32]>;
        readonly isMember: boolean;
        readonly asMember: AccountId32;
        readonly isPhantom: boolean;
        readonly type: 'Members' | 'Member' | 'Phantom';
    }
    /** @name SpCoreVoid (327) */
    type SpCoreVoid = Null;
    /** @name PalletUtilityMangataError (328) */
    interface PalletUtilityMangataError extends Enum {
        readonly isTooManyCalls: boolean;
        readonly type: 'TooManyCalls';
    }
    /** @name PalletProxyProxyDefinition (331) */
    interface PalletProxyProxyDefinition extends Struct {
        readonly delegate: AccountId32;
        readonly proxyType: CommonRuntimeConfigPalletProxyProxyType;
        readonly delay: u32;
    }
    /** @name PalletProxyAnnouncement (335) */
    interface PalletProxyAnnouncement extends Struct {
        readonly real: AccountId32;
        readonly callHash: H256;
        readonly height: u32;
    }
    /** @name PalletProxyError (337) */
    interface PalletProxyError extends Enum {
        readonly isTooMany: boolean;
        readonly isNotFound: boolean;
        readonly isNotProxy: boolean;
        readonly isUnproxyable: boolean;
        readonly isDuplicate: boolean;
        readonly isNoPermission: boolean;
        readonly isUnannounced: boolean;
        readonly isNoSelfProxy: boolean;
        readonly type: 'TooMany' | 'NotFound' | 'NotProxy' | 'Unproxyable' | 'Duplicate' | 'NoPermission' | 'Unannounced' | 'NoSelfProxy';
    }
    /** @name PalletMaintenanceMaintenanceStatusInfo (338) */
    interface PalletMaintenanceMaintenanceStatusInfo extends Struct {
        readonly isMaintenance: bool;
        readonly isUpgradableInMaintenance: bool;
    }
    /** @name PalletMaintenanceError (339) */
    interface PalletMaintenanceError extends Enum {
        readonly isNotFoundationAccount: boolean;
        readonly isNotInMaintenanceMode: boolean;
        readonly isAlreadyInMaintenanceMode: boolean;
        readonly isAlreadyUpgradableInMaintenanceMode: boolean;
        readonly isAlreadyNotUpgradableInMaintenanceMode: boolean;
        readonly type: 'NotFoundationAccount' | 'NotInMaintenanceMode' | 'AlreadyInMaintenanceMode' | 'AlreadyUpgradableInMaintenanceMode' | 'AlreadyNotUpgradableInMaintenanceMode';
    }
    /** @name OrmlTokensBalanceLock (342) */
    interface OrmlTokensBalanceLock extends Struct {
        readonly id: U8aFixed;
        readonly amount: u128;
    }
    /** @name OrmlTokensAccountData (344) */
    interface OrmlTokensAccountData extends Struct {
        readonly free: u128;
        readonly reserved: u128;
        readonly frozen: u128;
    }
    /** @name OrmlTokensReserveData (346) */
    interface OrmlTokensReserveData extends Struct {
        readonly id: U8aFixed;
        readonly amount: u128;
    }
    /** @name OrmlTokensModuleError (348) */
    interface OrmlTokensModuleError extends Enum {
        readonly isBalanceTooLow: boolean;
        readonly isAmountIntoBalanceFailed: boolean;
        readonly isLiquidityRestrictions: boolean;
        readonly isMaxLocksExceeded: boolean;
        readonly isKeepAlive: boolean;
        readonly isExistentialDeposit: boolean;
        readonly isDeadAccount: boolean;
        readonly isTokenIdNotExists: boolean;
        readonly isTooManyReserves: boolean;
        readonly type: 'BalanceTooLow' | 'AmountIntoBalanceFailed' | 'LiquidityRestrictions' | 'MaxLocksExceeded' | 'KeepAlive' | 'ExistentialDeposit' | 'DeadAccount' | 'TokenIdNotExists' | 'TooManyReserves';
    }
    /** @name PalletTransactionPaymentMangataReleases (350) */
    interface PalletTransactionPaymentMangataReleases extends Enum {
        readonly isV1Ancient: boolean;
        readonly isV2: boolean;
        readonly type: 'V1Ancient' | 'V2';
    }
    /** @name PalletXykError (352) */
    interface PalletXykError extends Enum {
        readonly isPoolAlreadyExists: boolean;
        readonly isNotEnoughAssets: boolean;
        readonly isNoSuchPool: boolean;
        readonly isNoSuchLiquidityAsset: boolean;
        readonly isNotEnoughReserve: boolean;
        readonly isZeroAmount: boolean;
        readonly isInsufficientInputAmount: boolean;
        readonly isInsufficientOutputAmount: boolean;
        readonly isSameAsset: boolean;
        readonly isAssetAlreadyExists: boolean;
        readonly isAssetDoesNotExists: boolean;
        readonly isDivisionByZero: boolean;
        readonly isUnexpectedFailure: boolean;
        readonly isNotMangataLiquidityAsset: boolean;
        readonly isSecondAssetAmountExceededExpectations: boolean;
        readonly isMathOverflow: boolean;
        readonly isLiquidityTokenCreationFailed: boolean;
        readonly isNotEnoughRewardsEarned: boolean;
        readonly isNotAPromotedPool: boolean;
        readonly isPastTimeCalculation: boolean;
        readonly isPoolAlreadyPromoted: boolean;
        readonly isSoldAmountTooLow: boolean;
        readonly isFunctionNotAvailableForThisToken: boolean;
        readonly isDisallowedPool: boolean;
        readonly isLiquidityCheckpointMathError: boolean;
        readonly isCalculateRewardsMathError: boolean;
        readonly isCalculateCumulativeWorkMaxRatioMathError: boolean;
        readonly isCalculateRewardsAllMathError: boolean;
        readonly isNoRights: boolean;
        readonly isMultiswapShouldBeAtleastTwoHops: boolean;
        readonly isMultiBuyAssetCantHaveSamePoolAtomicSwaps: boolean;
        readonly isMultiSwapCantHaveSameTokenConsequetively: boolean;
        readonly isTradingBlockedByMaintenanceMode: boolean;
        readonly type: 'PoolAlreadyExists' | 'NotEnoughAssets' | 'NoSuchPool' | 'NoSuchLiquidityAsset' | 'NotEnoughReserve' | 'ZeroAmount' | 'InsufficientInputAmount' | 'InsufficientOutputAmount' | 'SameAsset' | 'AssetAlreadyExists' | 'AssetDoesNotExists' | 'DivisionByZero' | 'UnexpectedFailure' | 'NotMangataLiquidityAsset' | 'SecondAssetAmountExceededExpectations' | 'MathOverflow' | 'LiquidityTokenCreationFailed' | 'NotEnoughRewardsEarned' | 'NotAPromotedPool' | 'PastTimeCalculation' | 'PoolAlreadyPromoted' | 'SoldAmountTooLow' | 'FunctionNotAvailableForThisToken' | 'DisallowedPool' | 'LiquidityCheckpointMathError' | 'CalculateRewardsMathError' | 'CalculateCumulativeWorkMaxRatioMathError' | 'CalculateRewardsAllMathError' | 'NoRights' | 'MultiswapShouldBeAtleastTwoHops' | 'MultiBuyAssetCantHaveSamePoolAtomicSwaps' | 'MultiSwapCantHaveSameTokenConsequetively' | 'TradingBlockedByMaintenanceMode';
    }
    /** @name PalletProofOfStakeRewardInfo (353) */
    interface PalletProofOfStakeRewardInfo extends Struct {
        readonly activatedAmount: u128;
        readonly rewardsNotYetClaimed: u128;
        readonly rewardsAlreadyClaimed: u128;
        readonly lastCheckpoint: u32;
        readonly poolRatioAtLastCheckpoint: U256;
        readonly missingAtLastCheckpoint: U256;
    }
    /** @name PalletProofOfStakePromotedPools (357) */
    interface PalletProofOfStakePromotedPools extends Struct {
        readonly weight: u8;
        readonly rewards: U256;
    }
    /** @name PalletProofOfStakeError (360) */
    interface PalletProofOfStakeError extends Enum {
        readonly isNotEnoughAssets: boolean;
        readonly isMathOverflow: boolean;
        readonly isNotEnoughRewardsEarned: boolean;
        readonly isNotAPromotedPool: boolean;
        readonly isPastTimeCalculation: boolean;
        readonly isLiquidityCheckpointMathError: boolean;
        readonly isCalculateRewardsMathError: boolean;
        readonly isMathError: boolean;
        readonly isCalculateRewardsAllMathError: boolean;
        readonly isMissingRewardsInfoError: boolean;
        readonly isDeprecatedExtrinsic: boolean;
        readonly type: 'NotEnoughAssets' | 'MathOverflow' | 'NotEnoughRewardsEarned' | 'NotAPromotedPool' | 'PastTimeCalculation' | 'LiquidityCheckpointMathError' | 'CalculateRewardsMathError' | 'MathError' | 'CalculateRewardsAllMathError' | 'MissingRewardsInfoError' | 'DeprecatedExtrinsic';
    }
    /** @name PalletFeeLockFeeLockMetadataInfo (361) */
    interface PalletFeeLockFeeLockMetadataInfo extends Struct {
        readonly periodLength: u32;
        readonly feeLockAmount: u128;
        readonly swapValueThreshold: u128;
        readonly whitelistedTokens: BTreeSet<u32>;
    }
    /** @name PalletFeeLockAccountFeeLockDataInfo (364) */
    interface PalletFeeLockAccountFeeLockDataInfo extends Struct {
        readonly totalFeeLockAmount: u128;
        readonly lastFeeLockBlock: u32;
    }
    /** @name PalletFeeLockError (365) */
    interface PalletFeeLockError extends Enum {
        readonly isFeeLocksIncorrectlyInitialzed: boolean;
        readonly isInvalidFeeLockMetadata: boolean;
        readonly isFeeLocksNotInitialized: boolean;
        readonly isNotFeeLocked: boolean;
        readonly isCantUnlockFeeYet: boolean;
        readonly isMaxCuratedTokensLimitExceeded: boolean;
        readonly isUnexpectedFailure: boolean;
        readonly type: 'FeeLocksIncorrectlyInitialzed' | 'InvalidFeeLockMetadata' | 'FeeLocksNotInitialized' | 'NotFeeLocked' | 'CantUnlockFeeYet' | 'MaxCuratedTokensLimitExceeded' | 'UnexpectedFailure';
    }
    /** @name PalletVestingMangataReleases (368) */
    interface PalletVestingMangataReleases extends Enum {
        readonly isV0: boolean;
        readonly isV1: boolean;
        readonly type: 'V0' | 'V1';
    }
    /** @name PalletVestingMangataError (369) */
    interface PalletVestingMangataError extends Enum {
        readonly isNotVesting: boolean;
        readonly isAtMaxVestingSchedules: boolean;
        readonly isAmountLow: boolean;
        readonly isScheduleIndexOutOfBounds: boolean;
        readonly isInvalidScheduleParams: boolean;
        readonly isNoSuitableScheduleFound: boolean;
        readonly isSudoUnlockIsDisallowed: boolean;
        readonly isInvalidVestingIndex: boolean;
        readonly isMathError: boolean;
        readonly type: 'NotVesting' | 'AtMaxVestingSchedules' | 'AmountLow' | 'ScheduleIndexOutOfBounds' | 'InvalidScheduleParams' | 'NoSuitableScheduleFound' | 'SudoUnlockIsDisallowed' | 'InvalidVestingIndex' | 'MathError';
    }
    /** @name PalletCrowdloanRewardsRewardInfo (371) */
    interface PalletCrowdloanRewardsRewardInfo extends Struct {
        readonly totalReward: u128;
        readonly claimedReward: u128;
        readonly contributedRelayAddresses: Vec<AccountId32>;
    }
    /** @name PalletCrowdloanRewardsError (372) */
    interface PalletCrowdloanRewardsError extends Enum {
        readonly isAlreadyAssociated: boolean;
        readonly isBatchBeyondFundPot: boolean;
        readonly isFirstClaimAlreadyDone: boolean;
        readonly isRewardNotHighEnough: boolean;
        readonly isInvalidClaimSignature: boolean;
        readonly isInvalidFreeClaimSignature: boolean;
        readonly isNoAssociatedClaim: boolean;
        readonly isRewardsAlreadyClaimed: boolean;
        readonly isRewardVecAlreadyInitialized: boolean;
        readonly isRewardVecNotFullyInitializedYet: boolean;
        readonly isRewardsDoNotMatchFund: boolean;
        readonly isTooManyContributors: boolean;
        readonly isVestingPeriodNonValid: boolean;
        readonly isNonContributedAddressProvided: boolean;
        readonly isInsufficientNumberOfValidProofs: boolean;
        readonly isClaimingLessThanED: boolean;
        readonly isMathOverflow: boolean;
        readonly isPeriodNotSet: boolean;
        readonly type: 'AlreadyAssociated' | 'BatchBeyondFundPot' | 'FirstClaimAlreadyDone' | 'RewardNotHighEnough' | 'InvalidClaimSignature' | 'InvalidFreeClaimSignature' | 'NoAssociatedClaim' | 'RewardsAlreadyClaimed' | 'RewardVecAlreadyInitialized' | 'RewardVecNotFullyInitializedYet' | 'RewardsDoNotMatchFund' | 'TooManyContributors' | 'VestingPeriodNonValid' | 'NonContributedAddressProvided' | 'InsufficientNumberOfValidProofs' | 'ClaimingLessThanED' | 'MathOverflow' | 'PeriodNotSet';
    }
    /** @name PalletIssuanceError (374) */
    interface PalletIssuanceError extends Enum {
        readonly isIssuanceConfigAlreadyInitialized: boolean;
        readonly isIssuanceConfigNotInitialized: boolean;
        readonly isTgeNotFinalized: boolean;
        readonly isTgeIsAlreadyFinalized: boolean;
        readonly isIssuanceConfigInvalid: boolean;
        readonly isMathError: boolean;
        readonly isUnknownPool: boolean;
        readonly type: 'IssuanceConfigAlreadyInitialized' | 'IssuanceConfigNotInitialized' | 'TgeNotFinalized' | 'TgeIsAlreadyFinalized' | 'IssuanceConfigInvalid' | 'MathError' | 'UnknownPool';
    }
    /** @name PalletMultipurposeLiquidityReserveStatusInfo (375) */
    interface PalletMultipurposeLiquidityReserveStatusInfo extends Struct {
        readonly stakedUnactivatedReserves: u128;
        readonly activatedUnstakedReserves: u128;
        readonly stakedAndActivatedReserves: u128;
        readonly unspentReserves: u128;
        readonly relockAmount: u128;
    }
    /** @name PalletMultipurposeLiquidityRelockStatusInfo (377) */
    interface PalletMultipurposeLiquidityRelockStatusInfo extends Struct {
        readonly amount: u128;
        readonly startingBlock: u32;
        readonly endingBlockAsBalance: u128;
    }
    /** @name PalletMultipurposeLiquidityError (379) */
    interface PalletMultipurposeLiquidityError extends Enum {
        readonly isNotALiquidityToken: boolean;
        readonly isRelockCountLimitExceeded: boolean;
        readonly isRelockInstanceIndexOOB: boolean;
        readonly isNotEnoughUnspentReserves: boolean;
        readonly isNotEnoughTokens: boolean;
        readonly isMathError: boolean;
        readonly type: 'NotALiquidityToken' | 'RelockCountLimitExceeded' | 'RelockInstanceIndexOOB' | 'NotEnoughUnspentReserves' | 'NotEnoughTokens' | 'MathError';
    }
    /** @name PalletBootstrapBootstrapPhase (381) */
    interface PalletBootstrapBootstrapPhase extends Enum {
        readonly isBeforeStart: boolean;
        readonly isWhitelist: boolean;
        readonly isPublic: boolean;
        readonly isFinished: boolean;
        readonly type: 'BeforeStart' | 'Whitelist' | 'Public' | 'Finished';
    }
    /** @name FrameSupportPalletId (384) */
    interface FrameSupportPalletId extends U8aFixed {
    }
    /** @name PalletBootstrapError (385) */
    interface PalletBootstrapError extends Enum {
        readonly isUnsupportedTokenId: boolean;
        readonly isNotEnoughAssets: boolean;
        readonly isNotEnoughVestedAssets: boolean;
        readonly isMathOverflow: boolean;
        readonly isUnauthorized: boolean;
        readonly isBootstrapStartInThePast: boolean;
        readonly isPhaseLengthCannotBeZero: boolean;
        readonly isAlreadyStarted: boolean;
        readonly isValuationRatio: boolean;
        readonly isFirstProvisionInSecondTokenId: boolean;
        readonly isPoolAlreadyExists: boolean;
        readonly isNotFinishedYet: boolean;
        readonly isNothingToClaim: boolean;
        readonly isWrongRatio: boolean;
        readonly isBootstrapNotReadyToBeFinished: boolean;
        readonly isSameToken: boolean;
        readonly isTokenIdDoesNotExists: boolean;
        readonly isTokensActivationFailed: boolean;
        readonly isBootstrapNotSchduled: boolean;
        readonly isBootstrapFinished: boolean;
        readonly isTooLateToUpdateBootstrap: boolean;
        readonly isProvisioningBlockedByMaintenanceMode: boolean;
        readonly isBootstrapMustBePreFinalized: boolean;
        readonly type: 'UnsupportedTokenId' | 'NotEnoughAssets' | 'NotEnoughVestedAssets' | 'MathOverflow' | 'Unauthorized' | 'BootstrapStartInThePast' | 'PhaseLengthCannotBeZero' | 'AlreadyStarted' | 'ValuationRatio' | 'FirstProvisionInSecondTokenId' | 'PoolAlreadyExists' | 'NotFinishedYet' | 'NothingToClaim' | 'WrongRatio' | 'BootstrapNotReadyToBeFinished' | 'SameToken' | 'TokenIdDoesNotExists' | 'TokensActivationFailed' | 'BootstrapNotSchduled' | 'BootstrapFinished' | 'TooLateToUpdateBootstrap' | 'ProvisioningBlockedByMaintenanceMode' | 'BootstrapMustBePreFinalized';
    }
    /** @name ParachainStakingRoundInfo (386) */
    interface ParachainStakingRoundInfo extends Struct {
        readonly current: u32;
        readonly first: u32;
        readonly length: u32;
    }
    /** @name ParachainStakingDelegator (387) */
    interface ParachainStakingDelegator extends Struct {
        readonly id: AccountId32;
        readonly delegations: ParachainStakingSetOrderedSetBond;
        readonly requests: ParachainStakingPendingDelegationRequests;
        readonly status: ParachainStakingDelegatorStatus;
    }
    /** @name ParachainStakingSetOrderedSetBond (388) */
    interface ParachainStakingSetOrderedSetBond extends Vec<ParachainStakingBond> {
    }
    /** @name ParachainStakingBond (389) */
    interface ParachainStakingBond extends Struct {
        readonly owner: AccountId32;
        readonly amount: u128;
        readonly liquidityToken: u32;
    }
    /** @name ParachainStakingPendingDelegationRequests (391) */
    interface ParachainStakingPendingDelegationRequests extends Struct {
        readonly requests: BTreeMap<AccountId32, ParachainStakingDelegationRequest>;
    }
    /** @name ParachainStakingDelegatorStatus (395) */
    interface ParachainStakingDelegatorStatus extends Enum {
        readonly isActive: boolean;
        readonly isLeaving: boolean;
        readonly asLeaving: u32;
        readonly type: 'Active' | 'Leaving';
    }
    /** @name ParachainStakingCollatorCandidate (396) */
    interface ParachainStakingCollatorCandidate extends Struct {
        readonly id: AccountId32;
        readonly bond: u128;
        readonly liquidityToken: u32;
        readonly delegators: ParachainStakingSetOrderedSetAccountId32;
        readonly topDelegations: Vec<ParachainStakingBond>;
        readonly bottomDelegations: Vec<ParachainStakingBond>;
        readonly totalCounted: u128;
        readonly totalBacking: u128;
        readonly request: Option<ParachainStakingCandidateBondRequest>;
        readonly state: ParachainStakingCollatorStatus;
    }
    /** @name ParachainStakingSetOrderedSetAccountId32 (397) */
    interface ParachainStakingSetOrderedSetAccountId32 extends Vec<AccountId32> {
    }
    /** @name ParachainStakingCollatorStatus (399) */
    interface ParachainStakingCollatorStatus extends Enum {
        readonly isActive: boolean;
        readonly isIdle: boolean;
        readonly isLeaving: boolean;
        readonly asLeaving: u32;
        readonly type: 'Active' | 'Idle' | 'Leaving';
    }
    /** @name ParachainStakingCollatorSnapshot (400) */
    interface ParachainStakingCollatorSnapshot extends Struct {
        readonly bond: u128;
        readonly delegations: Vec<ParachainStakingBond>;
        readonly total: u128;
        readonly liquidityToken: u32;
    }
    /** @name ParachainStakingAggregatorMetadataType (407) */
    interface ParachainStakingAggregatorMetadataType extends Struct {
        readonly tokenCollatorMap: BTreeMap<u32, AccountId32>;
        readonly approvedCandidates: BTreeSet<AccountId32>;
    }
    /** @name ParachainStakingRoundCollatorRewardInfoType (417) */
    interface ParachainStakingRoundCollatorRewardInfoType extends Struct {
        readonly collatorReward: u128;
        readonly delegatorRewards: BTreeMap<AccountId32, u128>;
    }
    /** @name ParachainStakingError (418) */
    interface ParachainStakingError extends Enum {
        readonly isDelegatorDNE: boolean;
        readonly isDelegatorDNEinTopNorBottom: boolean;
        readonly isDelegatorDNEInDelegatorSet: boolean;
        readonly isCandidateDNE: boolean;
        readonly isDelegationDNE: boolean;
        readonly isDelegatorExists: boolean;
        readonly isCandidateExists: boolean;
        readonly isCandidateBondBelowMin: boolean;
        readonly isInsufficientBalance: boolean;
        readonly isDelegationBelowMin: boolean;
        readonly isAlreadyOffline: boolean;
        readonly isAlreadyActive: boolean;
        readonly isDelegatorAlreadyLeaving: boolean;
        readonly isDelegatorNotLeaving: boolean;
        readonly isDelegatorCannotLeaveYet: boolean;
        readonly isCannotDelegateIfLeaving: boolean;
        readonly isCandidateAlreadyLeaving: boolean;
        readonly isCandidateNotLeaving: boolean;
        readonly isCandidateCannotLeaveYet: boolean;
        readonly isCannotGoOnlineIfLeaving: boolean;
        readonly isExceedMaxDelegationsPerDelegator: boolean;
        readonly isAlreadyDelegatedCandidate: boolean;
        readonly isInvalidSchedule: boolean;
        readonly isCannotSetBelowMin: boolean;
        readonly isNoWritingSameValue: boolean;
        readonly isTooLowCandidateCountWeightHintJoinCandidates: boolean;
        readonly isTooLowCandidateCountWeightHintCancelLeaveCandidates: boolean;
        readonly isTooLowCandidateCountToLeaveCandidates: boolean;
        readonly isTooLowDelegationCountToDelegate: boolean;
        readonly isTooLowCandidateDelegationCountToDelegate: boolean;
        readonly isTooLowDelegationCountToLeaveDelegators: boolean;
        readonly isPendingCandidateRequestsDNE: boolean;
        readonly isPendingCandidateRequestAlreadyExists: boolean;
        readonly isPendingCandidateRequestNotDueYet: boolean;
        readonly isPendingDelegationRequestDNE: boolean;
        readonly isPendingDelegationRequestAlreadyExists: boolean;
        readonly isPendingDelegationRequestNotDueYet: boolean;
        readonly isStakingLiquidityTokenNotListed: boolean;
        readonly isTooLowCurrentStakingLiquidityTokensCount: boolean;
        readonly isStakingLiquidityTokenAlreadyListed: boolean;
        readonly isExceedMaxCollatorCandidates: boolean;
        readonly isExceedMaxTotalDelegatorsPerCandidate: boolean;
        readonly isCandidateNotAggregating: boolean;
        readonly isCandidateNotAggregatingUnderAggregator: boolean;
        readonly isCandidateAlreadyApprovedByAggregator: boolean;
        readonly isAggregatorExists: boolean;
        readonly isCollatorRoundRewardsDNE: boolean;
        readonly isDelegatorRewardsDNE: boolean;
        readonly isAggregatorDNE: boolean;
        readonly isTargettedAggregatorSameAsCurrent: boolean;
        readonly isCandidateNotApprovedByAggregator: boolean;
        readonly isAggregatorLiquidityTokenTaken: boolean;
        readonly isIncorrectRewardDelegatorCount: boolean;
        readonly isMathError: boolean;
        readonly type: 'DelegatorDNE' | 'DelegatorDNEinTopNorBottom' | 'DelegatorDNEInDelegatorSet' | 'CandidateDNE' | 'DelegationDNE' | 'DelegatorExists' | 'CandidateExists' | 'CandidateBondBelowMin' | 'InsufficientBalance' | 'DelegationBelowMin' | 'AlreadyOffline' | 'AlreadyActive' | 'DelegatorAlreadyLeaving' | 'DelegatorNotLeaving' | 'DelegatorCannotLeaveYet' | 'CannotDelegateIfLeaving' | 'CandidateAlreadyLeaving' | 'CandidateNotLeaving' | 'CandidateCannotLeaveYet' | 'CannotGoOnlineIfLeaving' | 'ExceedMaxDelegationsPerDelegator' | 'AlreadyDelegatedCandidate' | 'InvalidSchedule' | 'CannotSetBelowMin' | 'NoWritingSameValue' | 'TooLowCandidateCountWeightHintJoinCandidates' | 'TooLowCandidateCountWeightHintCancelLeaveCandidates' | 'TooLowCandidateCountToLeaveCandidates' | 'TooLowDelegationCountToDelegate' | 'TooLowCandidateDelegationCountToDelegate' | 'TooLowDelegationCountToLeaveDelegators' | 'PendingCandidateRequestsDNE' | 'PendingCandidateRequestAlreadyExists' | 'PendingCandidateRequestNotDueYet' | 'PendingDelegationRequestDNE' | 'PendingDelegationRequestAlreadyExists' | 'PendingDelegationRequestNotDueYet' | 'StakingLiquidityTokenNotListed' | 'TooLowCurrentStakingLiquidityTokensCount' | 'StakingLiquidityTokenAlreadyListed' | 'ExceedMaxCollatorCandidates' | 'ExceedMaxTotalDelegatorsPerCandidate' | 'CandidateNotAggregating' | 'CandidateNotAggregatingUnderAggregator' | 'CandidateAlreadyApprovedByAggregator' | 'AggregatorExists' | 'CollatorRoundRewardsDNE' | 'DelegatorRewardsDNE' | 'AggregatorDNE' | 'TargettedAggregatorSameAsCurrent' | 'CandidateNotApprovedByAggregator' | 'AggregatorLiquidityTokenTaken' | 'IncorrectRewardDelegatorCount' | 'MathError';
    }
    /** @name SpCoreCryptoKeyTypeId (422) */
    interface SpCoreCryptoKeyTypeId extends U8aFixed {
    }
    /** @name PalletSessionError (423) */
    interface PalletSessionError extends Enum {
        readonly isInvalidProof: boolean;
        readonly isNoAssociatedValidatorId: boolean;
        readonly isDuplicatedKey: boolean;
        readonly isNoKeys: boolean;
        readonly isNoAccount: boolean;
        readonly type: 'InvalidProof' | 'NoAssociatedValidatorId' | 'DuplicatedKey' | 'NoKeys' | 'NoAccount';
    }
    /** @name CumulusPalletXcmpQueueInboundChannelDetails (428) */
    interface CumulusPalletXcmpQueueInboundChannelDetails extends Struct {
        readonly sender: u32;
        readonly state: CumulusPalletXcmpQueueInboundState;
        readonly messageMetadata: Vec<ITuple<[u32, PolkadotParachainPrimitivesXcmpMessageFormat]>>;
    }
    /** @name CumulusPalletXcmpQueueInboundState (429) */
    interface CumulusPalletXcmpQueueInboundState extends Enum {
        readonly isOk: boolean;
        readonly isSuspended: boolean;
        readonly type: 'Ok' | 'Suspended';
    }
    /** @name PolkadotParachainPrimitivesXcmpMessageFormat (432) */
    interface PolkadotParachainPrimitivesXcmpMessageFormat extends Enum {
        readonly isConcatenatedVersionedXcm: boolean;
        readonly isConcatenatedEncodedBlob: boolean;
        readonly isSignals: boolean;
        readonly type: 'ConcatenatedVersionedXcm' | 'ConcatenatedEncodedBlob' | 'Signals';
    }
    /** @name CumulusPalletXcmpQueueOutboundChannelDetails (435) */
    interface CumulusPalletXcmpQueueOutboundChannelDetails extends Struct {
        readonly recipient: u32;
        readonly state: CumulusPalletXcmpQueueOutboundState;
        readonly signalsExist: bool;
        readonly firstIndex: u16;
        readonly lastIndex: u16;
    }
    /** @name CumulusPalletXcmpQueueOutboundState (436) */
    interface CumulusPalletXcmpQueueOutboundState extends Enum {
        readonly isOk: boolean;
        readonly isSuspended: boolean;
        readonly type: 'Ok' | 'Suspended';
    }
    /** @name CumulusPalletXcmpQueueQueueConfigData (438) */
    interface CumulusPalletXcmpQueueQueueConfigData extends Struct {
        readonly suspendThreshold: u32;
        readonly dropThreshold: u32;
        readonly resumeThreshold: u32;
        readonly thresholdWeight: SpWeightsWeightV2Weight;
        readonly weightRestrictDecay: SpWeightsWeightV2Weight;
        readonly xcmpMaxIndividualWeight: SpWeightsWeightV2Weight;
    }
    /** @name CumulusPalletXcmpQueueError (440) */
    interface CumulusPalletXcmpQueueError extends Enum {
        readonly isFailedToSend: boolean;
        readonly isBadXcmOrigin: boolean;
        readonly isBadXcm: boolean;
        readonly isBadOverweightIndex: boolean;
        readonly isWeightOverLimit: boolean;
        readonly isXcmMsgProcessingBlockedByMaintenanceMode: boolean;
        readonly type: 'FailedToSend' | 'BadXcmOrigin' | 'BadXcm' | 'BadOverweightIndex' | 'WeightOverLimit' | 'XcmMsgProcessingBlockedByMaintenanceMode';
    }
    /** @name PalletXcmQueryStatus (441) */
    interface PalletXcmQueryStatus extends Enum {
        readonly isPending: boolean;
        readonly asPending: {
            readonly responder: XcmVersionedMultiLocation;
            readonly maybeMatchQuerier: Option<XcmVersionedMultiLocation>;
            readonly maybeNotify: Option<ITuple<[u8, u8]>>;
            readonly timeout: u32;
        } & Struct;
        readonly isVersionNotifier: boolean;
        readonly asVersionNotifier: {
            readonly origin: XcmVersionedMultiLocation;
            readonly isActive: bool;
        } & Struct;
        readonly isReady: boolean;
        readonly asReady: {
            readonly response: XcmVersionedResponse;
            readonly at: u32;
        } & Struct;
        readonly type: 'Pending' | 'VersionNotifier' | 'Ready';
    }
    /** @name XcmVersionedResponse (444) */
    interface XcmVersionedResponse extends Enum {
        readonly isV2: boolean;
        readonly asV2: XcmV2Response;
        readonly isV3: boolean;
        readonly asV3: XcmV3Response;
        readonly type: 'V2' | 'V3';
    }
    /** @name PalletXcmVersionMigrationStage (450) */
    interface PalletXcmVersionMigrationStage extends Enum {
        readonly isMigrateSupportedVersion: boolean;
        readonly isMigrateVersionNotifiers: boolean;
        readonly isNotifyCurrentTargets: boolean;
        readonly asNotifyCurrentTargets: Option<Bytes>;
        readonly isMigrateAndNotifyOldTargets: boolean;
        readonly type: 'MigrateSupportedVersion' | 'MigrateVersionNotifiers' | 'NotifyCurrentTargets' | 'MigrateAndNotifyOldTargets';
    }
    /** @name XcmVersionedAssetId (452) */
    interface XcmVersionedAssetId extends Enum {
        readonly isV3: boolean;
        readonly asV3: XcmV3MultiassetAssetId;
        readonly type: 'V3';
    }
    /** @name PalletXcmRemoteLockedFungibleRecord (453) */
    interface PalletXcmRemoteLockedFungibleRecord extends Struct {
        readonly amount: u128;
        readonly owner: XcmVersionedMultiLocation;
        readonly locker: XcmVersionedMultiLocation;
        readonly users: u32;
    }
    /** @name PalletXcmError (457) */
    interface PalletXcmError extends Enum {
        readonly isUnreachable: boolean;
        readonly isSendFailure: boolean;
        readonly isFiltered: boolean;
        readonly isUnweighableMessage: boolean;
        readonly isDestinationNotInvertible: boolean;
        readonly isEmpty: boolean;
        readonly isCannotReanchor: boolean;
        readonly isTooManyAssets: boolean;
        readonly isInvalidOrigin: boolean;
        readonly isBadVersion: boolean;
        readonly isBadLocation: boolean;
        readonly isNoSubscription: boolean;
        readonly isAlreadySubscribed: boolean;
        readonly isInvalidAsset: boolean;
        readonly isLowBalance: boolean;
        readonly isTooManyLocks: boolean;
        readonly isAccountNotSovereign: boolean;
        readonly isFeesNotMet: boolean;
        readonly isLockNotFound: boolean;
        readonly isInUse: boolean;
        readonly type: 'Unreachable' | 'SendFailure' | 'Filtered' | 'UnweighableMessage' | 'DestinationNotInvertible' | 'Empty' | 'CannotReanchor' | 'TooManyAssets' | 'InvalidOrigin' | 'BadVersion' | 'BadLocation' | 'NoSubscription' | 'AlreadySubscribed' | 'InvalidAsset' | 'LowBalance' | 'TooManyLocks' | 'AccountNotSovereign' | 'FeesNotMet' | 'LockNotFound' | 'InUse';
    }
    /** @name CumulusPalletXcmError (458) */
    type CumulusPalletXcmError = Null;
    /** @name CumulusPalletDmpQueueConfigData (459) */
    interface CumulusPalletDmpQueueConfigData extends Struct {
        readonly maxIndividual: SpWeightsWeightV2Weight;
    }
    /** @name CumulusPalletDmpQueuePageIndexData (460) */
    interface CumulusPalletDmpQueuePageIndexData extends Struct {
        readonly beginUsed: u32;
        readonly endUsed: u32;
        readonly overweightCount: u64;
    }
    /** @name CumulusPalletDmpQueueError (463) */
    interface CumulusPalletDmpQueueError extends Enum {
        readonly isUnknown: boolean;
        readonly isOverLimit: boolean;
        readonly isDmpMsgProcessingBlockedByMaintenanceMode: boolean;
        readonly type: 'Unknown' | 'OverLimit' | 'DmpMsgProcessingBlockedByMaintenanceMode';
    }
    /** @name OrmlXtokensModuleError (464) */
    interface OrmlXtokensModuleError extends Enum {
        readonly isAssetHasNoReserve: boolean;
        readonly isNotCrossChainTransfer: boolean;
        readonly isInvalidDest: boolean;
        readonly isNotCrossChainTransferableCurrency: boolean;
        readonly isUnweighableMessage: boolean;
        readonly isXcmExecutionFailed: boolean;
        readonly isCannotReanchor: boolean;
        readonly isInvalidAncestry: boolean;
        readonly isInvalidAsset: boolean;
        readonly isDestinationNotInvertible: boolean;
        readonly isBadVersion: boolean;
        readonly isDistinctReserveForAssetAndFee: boolean;
        readonly isZeroFee: boolean;
        readonly isZeroAmount: boolean;
        readonly isTooManyAssetsBeingSent: boolean;
        readonly isAssetIndexNonExistent: boolean;
        readonly isFeeNotEnough: boolean;
        readonly isNotSupportedMultiLocation: boolean;
        readonly isMinXcmFeeNotDefined: boolean;
        readonly type: 'AssetHasNoReserve' | 'NotCrossChainTransfer' | 'InvalidDest' | 'NotCrossChainTransferableCurrency' | 'UnweighableMessage' | 'XcmExecutionFailed' | 'CannotReanchor' | 'InvalidAncestry' | 'InvalidAsset' | 'DestinationNotInvertible' | 'BadVersion' | 'DistinctReserveForAssetAndFee' | 'ZeroFee' | 'ZeroAmount' | 'TooManyAssetsBeingSent' | 'AssetIndexNonExistent' | 'FeeNotEnough' | 'NotSupportedMultiLocation' | 'MinXcmFeeNotDefined';
    }
    /** @name OrmlUnknownTokensModuleError (467) */
    interface OrmlUnknownTokensModuleError extends Enum {
        readonly isBalanceTooLow: boolean;
        readonly isBalanceOverflow: boolean;
        readonly isUnhandledAsset: boolean;
        readonly type: 'BalanceTooLow' | 'BalanceOverflow' | 'UnhandledAsset';
    }
    /** @name OrmlXcmModuleError (468) */
    interface OrmlXcmModuleError extends Enum {
        readonly isUnreachable: boolean;
        readonly isSendFailure: boolean;
        readonly isBadVersion: boolean;
        readonly type: 'Unreachable' | 'SendFailure' | 'BadVersion';
    }
    /** @name OrmlAssetRegistryModuleError (469) */
    interface OrmlAssetRegistryModuleError extends Enum {
        readonly isAssetNotFound: boolean;
        readonly isBadVersion: boolean;
        readonly isInvalidAssetId: boolean;
        readonly isConflictingLocation: boolean;
        readonly isConflictingAssetId: boolean;
        readonly type: 'AssetNotFound' | 'BadVersion' | 'InvalidAssetId' | 'ConflictingLocation' | 'ConflictingAssetId';
    }
    /** @name PalletTreasuryProposal (470) */
    interface PalletTreasuryProposal extends Struct {
        readonly proposer: AccountId32;
        readonly value: u128;
        readonly beneficiary: AccountId32;
        readonly bond: u128;
    }
    /** @name PalletTreasuryError (472) */
    interface PalletTreasuryError extends Enum {
        readonly isInsufficientProposersBalance: boolean;
        readonly isInvalidIndex: boolean;
        readonly isTooManyApprovals: boolean;
        readonly isInsufficientPermission: boolean;
        readonly isProposalNotApproved: boolean;
        readonly type: 'InsufficientProposersBalance' | 'InvalidIndex' | 'TooManyApprovals' | 'InsufficientPermission' | 'ProposalNotApproved';
    }
    /** @name PalletSudoMangataError (473) */
    interface PalletSudoMangataError extends Enum {
        readonly isRequireSudo: boolean;
        readonly type: 'RequireSudo';
    }
    /** @name PalletSudoOriginError (474) */
    type PalletSudoOriginError = Null;
    /** @name PalletCollectiveMangataVotes (476) */
    interface PalletCollectiveMangataVotes extends Struct {
        readonly index: u32;
        readonly threshold: u32;
        readonly ayes: Vec<AccountId32>;
        readonly nays: Vec<AccountId32>;
        readonly end: u32;
    }
    /** @name PalletCollectiveMangataError (477) */
    interface PalletCollectiveMangataError extends Enum {
        readonly isNotMember: boolean;
        readonly isDuplicateProposal: boolean;
        readonly isProposalMissing: boolean;
        readonly isWrongIndex: boolean;
        readonly isDuplicateVote: boolean;
        readonly isAlreadyInitialized: boolean;
        readonly isTooEarly: boolean;
        readonly isTooEarlyToCloseByNonFoundationAccount: boolean;
        readonly isTooManyProposals: boolean;
        readonly isWrongProposalWeight: boolean;
        readonly isWrongProposalLength: boolean;
        readonly isNotFoundationAccountOrRoot: boolean;
        readonly type: 'NotMember' | 'DuplicateProposal' | 'ProposalMissing' | 'WrongIndex' | 'DuplicateVote' | 'AlreadyInitialized' | 'TooEarly' | 'TooEarlyToCloseByNonFoundationAccount' | 'TooManyProposals' | 'WrongProposalWeight' | 'WrongProposalLength' | 'NotFoundationAccountOrRoot';
    }
    /** @name PalletIdentityRegistration (478) */
    interface PalletIdentityRegistration extends Struct {
        readonly judgements: Vec<ITuple<[u32, PalletIdentityJudgement]>>;
        readonly deposit: u128;
        readonly info: PalletIdentityIdentityInfo;
    }
    /** @name PalletIdentityRegistrarInfo (486) */
    interface PalletIdentityRegistrarInfo extends Struct {
        readonly account: AccountId32;
        readonly fee: u128;
        readonly fields: PalletIdentityBitFlags;
    }
    /** @name PalletIdentityError (488) */
    interface PalletIdentityError extends Enum {
        readonly isTooManySubAccounts: boolean;
        readonly isNotFound: boolean;
        readonly isNotNamed: boolean;
        readonly isEmptyIndex: boolean;
        readonly isFeeChanged: boolean;
        readonly isNoIdentity: boolean;
        readonly isStickyJudgement: boolean;
        readonly isJudgementGiven: boolean;
        readonly isInvalidJudgement: boolean;
        readonly isInvalidIndex: boolean;
        readonly isInvalidTarget: boolean;
        readonly isTooManyFields: boolean;
        readonly isTooManyRegistrars: boolean;
        readonly isAlreadyClaimed: boolean;
        readonly isNotSub: boolean;
        readonly isNotOwned: boolean;
        readonly isJudgementForDifferentIdentity: boolean;
        readonly isJudgementPaymentFailed: boolean;
        readonly type: 'TooManySubAccounts' | 'NotFound' | 'NotNamed' | 'EmptyIndex' | 'FeeChanged' | 'NoIdentity' | 'StickyJudgement' | 'JudgementGiven' | 'InvalidJudgement' | 'InvalidIndex' | 'InvalidTarget' | 'TooManyFields' | 'TooManyRegistrars' | 'AlreadyClaimed' | 'NotSub' | 'NotOwned' | 'JudgementForDifferentIdentity' | 'JudgementPaymentFailed';
    }
    /** @name FrameSystemExtensionsCheckSpecVersion (491) */
    type FrameSystemExtensionsCheckSpecVersion = Null;
    /** @name FrameSystemExtensionsCheckTxVersion (492) */
    type FrameSystemExtensionsCheckTxVersion = Null;
    /** @name FrameSystemExtensionsCheckGenesis (493) */
    type FrameSystemExtensionsCheckGenesis = Null;
    /** @name FrameSystemExtensionsCheckNonce (496) */
    interface FrameSystemExtensionsCheckNonce extends Compact<u32> {
    }
    /** @name FrameSystemExtensionsCheckWeight (497) */
    type FrameSystemExtensionsCheckWeight = Null;
    /** @name PalletTransactionPaymentMangataChargeTransactionPayment (498) */
    interface PalletTransactionPaymentMangataChargeTransactionPayment extends Compact<u128> {
    }
    /** @name MangataRococoRuntimeRuntime (499) */
    type MangataRococoRuntimeRuntime = Null;
}
