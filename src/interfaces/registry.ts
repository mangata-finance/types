// Auto-generated via `yarn polkadot-types-from-defs`, do not edit
/* eslint-disable */

// import type lookup before we augment - in some environments
// this is required to allow for ambient/previous definitions
import '@polkadot/types/types/registry';

import type { CumulusPalletDmpQueueCall, CumulusPalletDmpQueueConfigData, CumulusPalletDmpQueueError, CumulusPalletDmpQueueEvent, CumulusPalletDmpQueuePageIndexData, CumulusPalletParachainSystemCall, CumulusPalletParachainSystemError, CumulusPalletParachainSystemEvent, CumulusPalletParachainSystemRelayStateSnapshotMessagingStateSnapshot, CumulusPalletXcmError, CumulusPalletXcmEvent, CumulusPalletXcmOrigin, CumulusPalletXcmpQueueCall, CumulusPalletXcmpQueueError, CumulusPalletXcmpQueueEvent, CumulusPalletXcmpQueueInboundChannelDetails, CumulusPalletXcmpQueueInboundState, CumulusPalletXcmpQueueOutboundChannelDetails, CumulusPalletXcmpQueueOutboundState, CumulusPalletXcmpQueueQueueConfigData, CumulusPrimitivesParachainInherentParachainInherentData, FrameSupportDispatchDispatchClass, FrameSupportDispatchDispatchInfo, FrameSupportDispatchPays, FrameSupportDispatchPerDispatchClassU32, FrameSupportDispatchPerDispatchClassWeight, FrameSupportDispatchPerDispatchClassWeightsPerClass, FrameSupportDispatchRawOrigin, FrameSupportPalletId, FrameSupportTokensMiscBalanceStatus, FrameSystemAccountInfo, FrameSystemCall, FrameSystemError, FrameSystemEvent, FrameSystemEventRecord, FrameSystemExtensionsCheckGenesis, FrameSystemExtensionsCheckNonce, FrameSystemExtensionsCheckSpecVersion, FrameSystemExtensionsCheckTxVersion, FrameSystemExtensionsCheckWeight, FrameSystemLastRuntimeUpgradeInfo, FrameSystemLimitsBlockLength, FrameSystemLimitsBlockWeights, FrameSystemLimitsWeightsPerClass, FrameSystemPhase, MangataRococoRuntimeOriginCaller, MangataRococoRuntimeProxyType, MangataRococoRuntimeRuntime, MangataRococoRuntimeSessionKeys, MangataTypesAssetsCustomMetadata, MangataTypesAssetsXcmMetadata, MangataTypesAssetsXykMetadata, MpMultipurposeLiquidityActivateKind, MpMultipurposeLiquidityBondKind, OrmlAssetRegistryModuleCall, OrmlAssetRegistryModuleError, OrmlAssetRegistryModuleEvent, OrmlTokensAccountData, OrmlTokensBalanceLock, OrmlTokensModuleCall, OrmlTokensModuleError, OrmlTokensModuleEvent, OrmlTokensReserveData, OrmlTraitsAssetRegistryAssetMetadata, OrmlUnknownTokensModuleError, OrmlUnknownTokensModuleEvent, OrmlXcmModuleCall, OrmlXcmModuleError, OrmlXcmModuleEvent, OrmlXtokensModuleCall, OrmlXtokensModuleError, OrmlXtokensModuleEvent, PalletAuthorshipCall, PalletAuthorshipError, PalletAuthorshipUncleEntryItem, PalletBootstrapBootstrapPhase, PalletBootstrapCall, PalletBootstrapError, PalletBootstrapEvent, PalletCollectiveMangataCall, PalletCollectiveMangataError, PalletCollectiveMangataEvent, PalletCollectiveMangataRawOrigin, PalletCollectiveMangataVotes, PalletCrowdloanRewardsCall, PalletCrowdloanRewardsError, PalletCrowdloanRewardsEvent, PalletCrowdloanRewardsRewardInfo, PalletIssuanceCall, PalletIssuanceError, PalletIssuanceEvent, PalletIssuanceIssuanceInfo, PalletIssuancePromotedPoolsRewardsInfo, PalletIssuanceTgeInfo, PalletMultipurposeLiquidityCall, PalletMultipurposeLiquidityError, PalletMultipurposeLiquidityEvent, PalletMultipurposeLiquidityRelockStatusInfo, PalletMultipurposeLiquidityReserveStatusInfo, PalletProxyAnnouncement, PalletProxyCall, PalletProxyError, PalletProxyEvent, PalletProxyProxyDefinition, PalletSessionCall, PalletSessionError, PalletSessionEvent, PalletSudoMangataCall, PalletSudoMangataError, PalletSudoMangataEvent, PalletSudoOriginCall, PalletSudoOriginError, PalletSudoOriginEvent, PalletTimestampCall, PalletTokenTimeoutAccountTimeoutDataInfo, PalletTokenTimeoutCall, PalletTokenTimeoutError, PalletTokenTimeoutEvent, PalletTokenTimeoutTimeoutMetadataInfo, PalletTransactionPaymentChargeTransactionPayment, PalletTransactionPaymentEvent, PalletTransactionPaymentReleases, PalletTreasuryCall, PalletTreasuryError, PalletTreasuryEvent, PalletTreasuryProposal, PalletUtilityCall, PalletUtilityError, PalletUtilityEvent, PalletVestingMangataCall, PalletVestingMangataError, PalletVestingMangataEvent, PalletVestingMangataReleases, PalletVestingMangataVestingInfo, PalletXcmCall, PalletXcmError, PalletXcmEvent, PalletXcmOrigin, PalletXcmQueryStatus, PalletXcmVersionMigrationStage, PalletXykCall, PalletXykError, PalletXykEvent, PalletXykRewardInfo, ParachainStakingBond, ParachainStakingCall, ParachainStakingCandidateBondChange, ParachainStakingCandidateBondRequest, ParachainStakingCollatorCandidate, ParachainStakingCollatorSnapshot, ParachainStakingCollatorStatus, ParachainStakingDelegationChange, ParachainStakingDelegationRequest, ParachainStakingDelegator, ParachainStakingDelegatorAdded, ParachainStakingDelegatorStatus, ParachainStakingError, ParachainStakingEvent, ParachainStakingPairedOrLiquidityToken, ParachainStakingPendingDelegationRequests, ParachainStakingRoundInfo, ParachainStakingSetOrderedSetAccountId32, ParachainStakingSetOrderedSetBond, PolkadotCorePrimitivesInboundDownwardMessage, PolkadotCorePrimitivesInboundHrmpMessage, PolkadotCorePrimitivesOutboundHrmpMessage, PolkadotParachainPrimitivesXcmpMessageFormat, PolkadotPrimitivesV2AbridgedHostConfiguration, PolkadotPrimitivesV2AbridgedHrmpChannel, PolkadotPrimitivesV2PersistedValidationData, PolkadotPrimitivesV2UpgradeRestriction, SpConsensusAuraSr25519AppSr25519Public, SpCoreCryptoKeyTypeId, SpCoreEcdsaSignature, SpCoreEd25519Signature, SpCoreSeedShufflingSeed, SpCoreSr25519Public, SpCoreSr25519Signature, SpCoreVoid, SpRuntimeArithmeticError, SpRuntimeBlakeTwo256, SpRuntimeDigest, SpRuntimeDigestDigestItem, SpRuntimeDispatchError, SpRuntimeHeaderVerHeader, SpRuntimeModuleError, SpRuntimeMultiSignature, SpRuntimeTokenError, SpRuntimeTransactionalError, SpTrieStorageProof, SpVersionRuntimeVersion, SpWeightsRuntimeDbWeight, SpWeightsWeightV2Weight, XcmDoubleEncoded, XcmV0Junction, XcmV0JunctionBodyId, XcmV0JunctionBodyPart, XcmV0JunctionNetworkId, XcmV0MultiAsset, XcmV0MultiLocation, XcmV0Order, XcmV0OriginKind, XcmV0Response, XcmV0Xcm, XcmV1Junction, XcmV1MultiAsset, XcmV1MultiLocation, XcmV1MultiassetAssetId, XcmV1MultiassetAssetInstance, XcmV1MultiassetFungibility, XcmV1MultiassetMultiAssetFilter, XcmV1MultiassetMultiAssets, XcmV1MultiassetWildFungibility, XcmV1MultiassetWildMultiAsset, XcmV1MultilocationJunctions, XcmV1Order, XcmV1Response, XcmV1Xcm, XcmV2Instruction, XcmV2Response, XcmV2TraitsError, XcmV2TraitsOutcome, XcmV2WeightLimit, XcmV2Xcm, XcmVersionedMultiAsset, XcmVersionedMultiAssets, XcmVersionedMultiLocation, XcmVersionedResponse, XcmVersionedXcm } from '@polkadot/types/lookup';

declare module '@polkadot/types/types/registry' {
  interface InterfaceTypes {
    CumulusPalletDmpQueueCall: CumulusPalletDmpQueueCall;
    CumulusPalletDmpQueueConfigData: CumulusPalletDmpQueueConfigData;
    CumulusPalletDmpQueueError: CumulusPalletDmpQueueError;
    CumulusPalletDmpQueueEvent: CumulusPalletDmpQueueEvent;
    CumulusPalletDmpQueuePageIndexData: CumulusPalletDmpQueuePageIndexData;
    CumulusPalletParachainSystemCall: CumulusPalletParachainSystemCall;
    CumulusPalletParachainSystemError: CumulusPalletParachainSystemError;
    CumulusPalletParachainSystemEvent: CumulusPalletParachainSystemEvent;
    CumulusPalletParachainSystemRelayStateSnapshotMessagingStateSnapshot: CumulusPalletParachainSystemRelayStateSnapshotMessagingStateSnapshot;
    CumulusPalletXcmError: CumulusPalletXcmError;
    CumulusPalletXcmEvent: CumulusPalletXcmEvent;
    CumulusPalletXcmOrigin: CumulusPalletXcmOrigin;
    CumulusPalletXcmpQueueCall: CumulusPalletXcmpQueueCall;
    CumulusPalletXcmpQueueError: CumulusPalletXcmpQueueError;
    CumulusPalletXcmpQueueEvent: CumulusPalletXcmpQueueEvent;
    CumulusPalletXcmpQueueInboundChannelDetails: CumulusPalletXcmpQueueInboundChannelDetails;
    CumulusPalletXcmpQueueInboundState: CumulusPalletXcmpQueueInboundState;
    CumulusPalletXcmpQueueOutboundChannelDetails: CumulusPalletXcmpQueueOutboundChannelDetails;
    CumulusPalletXcmpQueueOutboundState: CumulusPalletXcmpQueueOutboundState;
    CumulusPalletXcmpQueueQueueConfigData: CumulusPalletXcmpQueueQueueConfigData;
    CumulusPrimitivesParachainInherentParachainInherentData: CumulusPrimitivesParachainInherentParachainInherentData;
    FrameSupportDispatchDispatchClass: FrameSupportDispatchDispatchClass;
    FrameSupportDispatchDispatchInfo: FrameSupportDispatchDispatchInfo;
    FrameSupportDispatchPays: FrameSupportDispatchPays;
    FrameSupportDispatchPerDispatchClassU32: FrameSupportDispatchPerDispatchClassU32;
    FrameSupportDispatchPerDispatchClassWeight: FrameSupportDispatchPerDispatchClassWeight;
    FrameSupportDispatchPerDispatchClassWeightsPerClass: FrameSupportDispatchPerDispatchClassWeightsPerClass;
    FrameSupportDispatchRawOrigin: FrameSupportDispatchRawOrigin;
    FrameSupportPalletId: FrameSupportPalletId;
    FrameSupportTokensMiscBalanceStatus: FrameSupportTokensMiscBalanceStatus;
    FrameSystemAccountInfo: FrameSystemAccountInfo;
    FrameSystemCall: FrameSystemCall;
    FrameSystemError: FrameSystemError;
    FrameSystemEvent: FrameSystemEvent;
    FrameSystemEventRecord: FrameSystemEventRecord;
    FrameSystemExtensionsCheckGenesis: FrameSystemExtensionsCheckGenesis;
    FrameSystemExtensionsCheckNonce: FrameSystemExtensionsCheckNonce;
    FrameSystemExtensionsCheckSpecVersion: FrameSystemExtensionsCheckSpecVersion;
    FrameSystemExtensionsCheckTxVersion: FrameSystemExtensionsCheckTxVersion;
    FrameSystemExtensionsCheckWeight: FrameSystemExtensionsCheckWeight;
    FrameSystemLastRuntimeUpgradeInfo: FrameSystemLastRuntimeUpgradeInfo;
    FrameSystemLimitsBlockLength: FrameSystemLimitsBlockLength;
    FrameSystemLimitsBlockWeights: FrameSystemLimitsBlockWeights;
    FrameSystemLimitsWeightsPerClass: FrameSystemLimitsWeightsPerClass;
    FrameSystemPhase: FrameSystemPhase;
    MangataRococoRuntimeOriginCaller: MangataRococoRuntimeOriginCaller;
    MangataRococoRuntimeProxyType: MangataRococoRuntimeProxyType;
    MangataRococoRuntimeRuntime: MangataRococoRuntimeRuntime;
    MangataRococoRuntimeSessionKeys: MangataRococoRuntimeSessionKeys;
    MangataTypesAssetsCustomMetadata: MangataTypesAssetsCustomMetadata;
    MangataTypesAssetsXcmMetadata: MangataTypesAssetsXcmMetadata;
    MangataTypesAssetsXykMetadata: MangataTypesAssetsXykMetadata;
    MpMultipurposeLiquidityActivateKind: MpMultipurposeLiquidityActivateKind;
    MpMultipurposeLiquidityBondKind: MpMultipurposeLiquidityBondKind;
    OrmlAssetRegistryModuleCall: OrmlAssetRegistryModuleCall;
    OrmlAssetRegistryModuleError: OrmlAssetRegistryModuleError;
    OrmlAssetRegistryModuleEvent: OrmlAssetRegistryModuleEvent;
    OrmlTokensAccountData: OrmlTokensAccountData;
    OrmlTokensBalanceLock: OrmlTokensBalanceLock;
    OrmlTokensModuleCall: OrmlTokensModuleCall;
    OrmlTokensModuleError: OrmlTokensModuleError;
    OrmlTokensModuleEvent: OrmlTokensModuleEvent;
    OrmlTokensReserveData: OrmlTokensReserveData;
    OrmlTraitsAssetRegistryAssetMetadata: OrmlTraitsAssetRegistryAssetMetadata;
    OrmlUnknownTokensModuleError: OrmlUnknownTokensModuleError;
    OrmlUnknownTokensModuleEvent: OrmlUnknownTokensModuleEvent;
    OrmlXcmModuleCall: OrmlXcmModuleCall;
    OrmlXcmModuleError: OrmlXcmModuleError;
    OrmlXcmModuleEvent: OrmlXcmModuleEvent;
    OrmlXtokensModuleCall: OrmlXtokensModuleCall;
    OrmlXtokensModuleError: OrmlXtokensModuleError;
    OrmlXtokensModuleEvent: OrmlXtokensModuleEvent;
    PalletAuthorshipCall: PalletAuthorshipCall;
    PalletAuthorshipError: PalletAuthorshipError;
    PalletAuthorshipUncleEntryItem: PalletAuthorshipUncleEntryItem;
    PalletBootstrapBootstrapPhase: PalletBootstrapBootstrapPhase;
    PalletBootstrapCall: PalletBootstrapCall;
    PalletBootstrapError: PalletBootstrapError;
    PalletBootstrapEvent: PalletBootstrapEvent;
    PalletCollectiveMangataCall: PalletCollectiveMangataCall;
    PalletCollectiveMangataError: PalletCollectiveMangataError;
    PalletCollectiveMangataEvent: PalletCollectiveMangataEvent;
    PalletCollectiveMangataRawOrigin: PalletCollectiveMangataRawOrigin;
    PalletCollectiveMangataVotes: PalletCollectiveMangataVotes;
    PalletCrowdloanRewardsCall: PalletCrowdloanRewardsCall;
    PalletCrowdloanRewardsError: PalletCrowdloanRewardsError;
    PalletCrowdloanRewardsEvent: PalletCrowdloanRewardsEvent;
    PalletCrowdloanRewardsRewardInfo: PalletCrowdloanRewardsRewardInfo;
    PalletIssuanceCall: PalletIssuanceCall;
    PalletIssuanceError: PalletIssuanceError;
    PalletIssuanceEvent: PalletIssuanceEvent;
    PalletIssuanceIssuanceInfo: PalletIssuanceIssuanceInfo;
    PalletIssuancePromotedPoolsRewardsInfo: PalletIssuancePromotedPoolsRewardsInfo;
    PalletIssuanceTgeInfo: PalletIssuanceTgeInfo;
    PalletMultipurposeLiquidityCall: PalletMultipurposeLiquidityCall;
    PalletMultipurposeLiquidityError: PalletMultipurposeLiquidityError;
    PalletMultipurposeLiquidityEvent: PalletMultipurposeLiquidityEvent;
    PalletMultipurposeLiquidityRelockStatusInfo: PalletMultipurposeLiquidityRelockStatusInfo;
    PalletMultipurposeLiquidityReserveStatusInfo: PalletMultipurposeLiquidityReserveStatusInfo;
    PalletProxyAnnouncement: PalletProxyAnnouncement;
    PalletProxyCall: PalletProxyCall;
    PalletProxyError: PalletProxyError;
    PalletProxyEvent: PalletProxyEvent;
    PalletProxyProxyDefinition: PalletProxyProxyDefinition;
    PalletSessionCall: PalletSessionCall;
    PalletSessionError: PalletSessionError;
    PalletSessionEvent: PalletSessionEvent;
    PalletSudoMangataCall: PalletSudoMangataCall;
    PalletSudoMangataError: PalletSudoMangataError;
    PalletSudoMangataEvent: PalletSudoMangataEvent;
    PalletSudoOriginCall: PalletSudoOriginCall;
    PalletSudoOriginError: PalletSudoOriginError;
    PalletSudoOriginEvent: PalletSudoOriginEvent;
    PalletTimestampCall: PalletTimestampCall;
    PalletTokenTimeoutAccountTimeoutDataInfo: PalletTokenTimeoutAccountTimeoutDataInfo;
    PalletTokenTimeoutCall: PalletTokenTimeoutCall;
    PalletTokenTimeoutError: PalletTokenTimeoutError;
    PalletTokenTimeoutEvent: PalletTokenTimeoutEvent;
    PalletTokenTimeoutTimeoutMetadataInfo: PalletTokenTimeoutTimeoutMetadataInfo;
    PalletTransactionPaymentChargeTransactionPayment: PalletTransactionPaymentChargeTransactionPayment;
    PalletTransactionPaymentEvent: PalletTransactionPaymentEvent;
    PalletTransactionPaymentReleases: PalletTransactionPaymentReleases;
    PalletTreasuryCall: PalletTreasuryCall;
    PalletTreasuryError: PalletTreasuryError;
    PalletTreasuryEvent: PalletTreasuryEvent;
    PalletTreasuryProposal: PalletTreasuryProposal;
    PalletUtilityCall: PalletUtilityCall;
    PalletUtilityError: PalletUtilityError;
    PalletUtilityEvent: PalletUtilityEvent;
    PalletVestingMangataCall: PalletVestingMangataCall;
    PalletVestingMangataError: PalletVestingMangataError;
    PalletVestingMangataEvent: PalletVestingMangataEvent;
    PalletVestingMangataReleases: PalletVestingMangataReleases;
    PalletVestingMangataVestingInfo: PalletVestingMangataVestingInfo;
    PalletXcmCall: PalletXcmCall;
    PalletXcmError: PalletXcmError;
    PalletXcmEvent: PalletXcmEvent;
    PalletXcmOrigin: PalletXcmOrigin;
    PalletXcmQueryStatus: PalletXcmQueryStatus;
    PalletXcmVersionMigrationStage: PalletXcmVersionMigrationStage;
    PalletXykCall: PalletXykCall;
    PalletXykError: PalletXykError;
    PalletXykEvent: PalletXykEvent;
    PalletXykRewardInfo: PalletXykRewardInfo;
    ParachainStakingBond: ParachainStakingBond;
    ParachainStakingCall: ParachainStakingCall;
    ParachainStakingCandidateBondChange: ParachainStakingCandidateBondChange;
    ParachainStakingCandidateBondRequest: ParachainStakingCandidateBondRequest;
    ParachainStakingCollatorCandidate: ParachainStakingCollatorCandidate;
    ParachainStakingCollatorSnapshot: ParachainStakingCollatorSnapshot;
    ParachainStakingCollatorStatus: ParachainStakingCollatorStatus;
    ParachainStakingDelegationChange: ParachainStakingDelegationChange;
    ParachainStakingDelegationRequest: ParachainStakingDelegationRequest;
    ParachainStakingDelegator: ParachainStakingDelegator;
    ParachainStakingDelegatorAdded: ParachainStakingDelegatorAdded;
    ParachainStakingDelegatorStatus: ParachainStakingDelegatorStatus;
    ParachainStakingError: ParachainStakingError;
    ParachainStakingEvent: ParachainStakingEvent;
    ParachainStakingPairedOrLiquidityToken: ParachainStakingPairedOrLiquidityToken;
    ParachainStakingPendingDelegationRequests: ParachainStakingPendingDelegationRequests;
    ParachainStakingRoundInfo: ParachainStakingRoundInfo;
    ParachainStakingSetOrderedSetAccountId32: ParachainStakingSetOrderedSetAccountId32;
    ParachainStakingSetOrderedSetBond: ParachainStakingSetOrderedSetBond;
    PolkadotCorePrimitivesInboundDownwardMessage: PolkadotCorePrimitivesInboundDownwardMessage;
    PolkadotCorePrimitivesInboundHrmpMessage: PolkadotCorePrimitivesInboundHrmpMessage;
    PolkadotCorePrimitivesOutboundHrmpMessage: PolkadotCorePrimitivesOutboundHrmpMessage;
    PolkadotParachainPrimitivesXcmpMessageFormat: PolkadotParachainPrimitivesXcmpMessageFormat;
    PolkadotPrimitivesV2AbridgedHostConfiguration: PolkadotPrimitivesV2AbridgedHostConfiguration;
    PolkadotPrimitivesV2AbridgedHrmpChannel: PolkadotPrimitivesV2AbridgedHrmpChannel;
    PolkadotPrimitivesV2PersistedValidationData: PolkadotPrimitivesV2PersistedValidationData;
    PolkadotPrimitivesV2UpgradeRestriction: PolkadotPrimitivesV2UpgradeRestriction;
    SpConsensusAuraSr25519AppSr25519Public: SpConsensusAuraSr25519AppSr25519Public;
    SpCoreCryptoKeyTypeId: SpCoreCryptoKeyTypeId;
    SpCoreEcdsaSignature: SpCoreEcdsaSignature;
    SpCoreEd25519Signature: SpCoreEd25519Signature;
    SpCoreSeedShufflingSeed: SpCoreSeedShufflingSeed;
    SpCoreSr25519Public: SpCoreSr25519Public;
    SpCoreSr25519Signature: SpCoreSr25519Signature;
    SpCoreVoid: SpCoreVoid;
    SpRuntimeArithmeticError: SpRuntimeArithmeticError;
    SpRuntimeBlakeTwo256: SpRuntimeBlakeTwo256;
    SpRuntimeDigest: SpRuntimeDigest;
    SpRuntimeDigestDigestItem: SpRuntimeDigestDigestItem;
    SpRuntimeDispatchError: SpRuntimeDispatchError;
    SpRuntimeHeaderVerHeader: SpRuntimeHeaderVerHeader;
    SpRuntimeModuleError: SpRuntimeModuleError;
    SpRuntimeMultiSignature: SpRuntimeMultiSignature;
    SpRuntimeTokenError: SpRuntimeTokenError;
    SpRuntimeTransactionalError: SpRuntimeTransactionalError;
    SpTrieStorageProof: SpTrieStorageProof;
    SpVersionRuntimeVersion: SpVersionRuntimeVersion;
    SpWeightsRuntimeDbWeight: SpWeightsRuntimeDbWeight;
    SpWeightsWeightV2Weight: SpWeightsWeightV2Weight;
    XcmDoubleEncoded: XcmDoubleEncoded;
    XcmV0Junction: XcmV0Junction;
    XcmV0JunctionBodyId: XcmV0JunctionBodyId;
    XcmV0JunctionBodyPart: XcmV0JunctionBodyPart;
    XcmV0JunctionNetworkId: XcmV0JunctionNetworkId;
    XcmV0MultiAsset: XcmV0MultiAsset;
    XcmV0MultiLocation: XcmV0MultiLocation;
    XcmV0Order: XcmV0Order;
    XcmV0OriginKind: XcmV0OriginKind;
    XcmV0Response: XcmV0Response;
    XcmV0Xcm: XcmV0Xcm;
    XcmV1Junction: XcmV1Junction;
    XcmV1MultiAsset: XcmV1MultiAsset;
    XcmV1MultiLocation: XcmV1MultiLocation;
    XcmV1MultiassetAssetId: XcmV1MultiassetAssetId;
    XcmV1MultiassetAssetInstance: XcmV1MultiassetAssetInstance;
    XcmV1MultiassetFungibility: XcmV1MultiassetFungibility;
    XcmV1MultiassetMultiAssetFilter: XcmV1MultiassetMultiAssetFilter;
    XcmV1MultiassetMultiAssets: XcmV1MultiassetMultiAssets;
    XcmV1MultiassetWildFungibility: XcmV1MultiassetWildFungibility;
    XcmV1MultiassetWildMultiAsset: XcmV1MultiassetWildMultiAsset;
    XcmV1MultilocationJunctions: XcmV1MultilocationJunctions;
    XcmV1Order: XcmV1Order;
    XcmV1Response: XcmV1Response;
    XcmV1Xcm: XcmV1Xcm;
    XcmV2Instruction: XcmV2Instruction;
    XcmV2Response: XcmV2Response;
    XcmV2TraitsError: XcmV2TraitsError;
    XcmV2TraitsOutcome: XcmV2TraitsOutcome;
    XcmV2WeightLimit: XcmV2WeightLimit;
    XcmV2Xcm: XcmV2Xcm;
    XcmVersionedMultiAsset: XcmVersionedMultiAsset;
    XcmVersionedMultiAssets: XcmVersionedMultiAssets;
    XcmVersionedMultiLocation: XcmVersionedMultiLocation;
    XcmVersionedResponse: XcmVersionedResponse;
    XcmVersionedXcm: XcmVersionedXcm;
  } // InterfaceTypes
} // declare module
