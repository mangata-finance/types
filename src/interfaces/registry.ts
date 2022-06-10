// Auto-generated via `yarn polkadot-types-from-defs`, do not edit
/* eslint-disable */

import type { ArtemisAssetCall, ArtemisAssetError, ArtemisAssetRawEvent, ArtemisCoreApp, ArtemisCoreMessage, ArtemisCoreVerificationInput, ArtemisErc20AppCall, ArtemisErc20AppError, ArtemisErc20AppRawEvent, ArtemisEthAppCall, ArtemisEthAppError, ArtemisEthAppRawEvent, CumulusPalletDmpQueueCall, CumulusPalletDmpQueueConfigData, CumulusPalletDmpQueueError, CumulusPalletDmpQueueEvent, CumulusPalletDmpQueuePageIndexData, CumulusPalletParachainSystemCall, CumulusPalletParachainSystemError, CumulusPalletParachainSystemEvent, CumulusPalletParachainSystemRelayStateSnapshotMessagingStateSnapshot, CumulusPalletXcmError, CumulusPalletXcmEvent, CumulusPalletXcmOrigin, CumulusPalletXcmpQueueCall, CumulusPalletXcmpQueueError, CumulusPalletXcmpQueueEvent, CumulusPalletXcmpQueueInboundChannelDetails, CumulusPalletXcmpQueueInboundState, CumulusPalletXcmpQueueOutboundChannelDetails, CumulusPalletXcmpQueueOutboundState, CumulusPalletXcmpQueueQueueConfigData, CumulusPrimitivesParachainInherentParachainInherentData, FrameSupportPalletId, FrameSupportTokensMiscBalanceStatus, FrameSupportWeightsDispatchClass, FrameSupportWeightsDispatchInfo, FrameSupportWeightsPays, FrameSupportWeightsPerDispatchClassU32, FrameSupportWeightsPerDispatchClassU64, FrameSupportWeightsPerDispatchClassWeightsPerClass, FrameSupportWeightsRuntimeDbWeight, FrameSupportWeightsWeightToFeeCoefficient, FrameSystemAccountInfo, FrameSystemCall, FrameSystemError, FrameSystemEvent, FrameSystemEventRecord, FrameSystemExtensionsCheckGenesis, FrameSystemExtensionsCheckNonce, FrameSystemExtensionsCheckSpecVersion, FrameSystemExtensionsCheckTxVersion, FrameSystemExtensionsCheckWeight, FrameSystemLastRuntimeUpgradeInfo, FrameSystemLimitsBlockLength, FrameSystemLimitsBlockWeights, FrameSystemLimitsWeightsPerClass, FrameSystemPhase, FrameSystemRawOrigin, MangataKusamaRuntimeOriginCaller, MangataKusamaRuntimeRuntime, MangataKusamaRuntimeSessionKeys, OrmlTokensAccountData, OrmlTokensBalanceLock, OrmlTokensModuleCall, OrmlTokensModuleError, OrmlTokensModuleEvent, OrmlUnknownTokensModuleError, OrmlUnknownTokensModuleEvent, OrmlXcmModuleCall, OrmlXcmModuleError, OrmlXcmModuleEvent, OrmlXtokensModuleCall, OrmlXtokensModuleError, OrmlXtokensModuleEvent, PalletAssetsInfoAssetInfo, PalletAssetsInfoCall, PalletAssetsInfoError, PalletAssetsInfoEvent, PalletAuthorshipCall, PalletAuthorshipError, PalletAuthorshipUncleEntryItem, PalletBootstrapBootstrapPhase, PalletBootstrapCall, PalletBootstrapError, PalletBootstrapEvent, PalletBridgeCall, PalletBridgeError, PalletBridgeEvent, PalletCollectiveCall, PalletCollectiveError, PalletCollectiveEvent, PalletCollectiveRawOrigin, PalletCollectiveVotes, PalletCrowdloanRewardsCall, PalletCrowdloanRewardsError, PalletCrowdloanRewardsEvent, PalletCrowdloanRewardsRewardInfo, PalletElectionsPhragmenCall, PalletElectionsPhragmenError, PalletElectionsPhragmenEvent, PalletElectionsPhragmenRenouncing, PalletElectionsPhragmenSeatHolder, PalletElectionsPhragmenVoter, PalletIssuanceCall, PalletIssuanceError, PalletIssuanceEvent, PalletIssuanceIssuanceInfo, PalletIssuanceTgeInfo, PalletSessionCall, PalletSessionError, PalletSessionEvent, PalletSudoCall, PalletSudoError, PalletSudoEvent, PalletSudoOriginCall, PalletSudoOriginError, PalletSudoOriginEvent, PalletTimestampCall, PalletTransactionPaymentChargeTransactionPayment, PalletTransactionPaymentReleases, PalletTreasuryCall, PalletTreasuryError, PalletTreasuryEvent, PalletTreasuryProposal, PalletUtilityCall, PalletUtilityError, PalletUtilityEvent, PalletVerifierCall, PalletVerifierError, PalletVerifierEvent, PalletVestingMangataCall, PalletVestingMangataError, PalletVestingMangataEvent, PalletVestingMangataReleases, PalletVestingMangataVestingInfo, PalletXcmCall, PalletXcmError, PalletXcmEvent, PalletXcmOrigin, PalletXcmQueryStatus, PalletXcmVersionMigrationStage, PalletXykCall, PalletXykError, PalletXykEvent, ParachainStakingBond, ParachainStakingCall, ParachainStakingCandidateBondChange, ParachainStakingCandidateBondRequest, ParachainStakingCollatorCandidate, ParachainStakingCollatorSnapshot, ParachainStakingCollatorStatus, ParachainStakingDelegationChange, ParachainStakingDelegationRequest, ParachainStakingDelegator, ParachainStakingDelegatorAdded, ParachainStakingDelegatorStatus, ParachainStakingError, ParachainStakingEvent, ParachainStakingPairedOrLiquidityToken, ParachainStakingPendingDelegationRequests, ParachainStakingRoundInfo, ParachainStakingSetOrderedSetAccountId32, ParachainStakingSetOrderedSetBond, PolkadotCorePrimitivesInboundDownwardMessage, PolkadotCorePrimitivesInboundHrmpMessage, PolkadotCorePrimitivesOutboundHrmpMessage, PolkadotParachainPrimitivesXcmpMessageFormat, PolkadotPrimitivesV1AbridgedHostConfiguration, PolkadotPrimitivesV1AbridgedHrmpChannel, PolkadotPrimitivesV1PersistedValidationData, PolkadotPrimitivesV1UpgradeRestriction, SpConsensusAuraSr25519AppSr25519Public, SpCoreCryptoKeyTypeId, SpCoreEcdsaSignature, SpCoreEd25519Signature, SpCoreSeedShufflingSeed, SpCoreSr25519Public, SpCoreSr25519Signature, SpCoreVoid, SpRuntimeArithmeticError, SpRuntimeBlakeTwo256, SpRuntimeDigest, SpRuntimeDigestDigestItem, SpRuntimeDispatchError, SpRuntimeHeaderVerHeader, SpRuntimeMultiSignature, SpRuntimeTokenError, SpTrieStorageProof, SpVersionRuntimeVersion, XcmAssetRegistryCall, XcmAssetRegistryError, XcmAssetRegistryEvent, XcmDoubleEncoded, XcmV0Junction, XcmV0JunctionBodyId, XcmV0JunctionBodyPart, XcmV0JunctionNetworkId, XcmV0MultiAsset, XcmV0MultiLocation, XcmV0Order, XcmV0OriginKind, XcmV0Response, XcmV0Xcm, XcmV1Junction, XcmV1MultiAsset, XcmV1MultiLocation, XcmV1MultiassetAssetId, XcmV1MultiassetAssetInstance, XcmV1MultiassetFungibility, XcmV1MultiassetMultiAssetFilter, XcmV1MultiassetMultiAssets, XcmV1MultiassetWildFungibility, XcmV1MultiassetWildMultiAsset, XcmV1MultilocationJunctions, XcmV1Order, XcmV1Response, XcmV1Xcm, XcmV2Instruction, XcmV2Response, XcmV2TraitsError, XcmV2TraitsOutcome, XcmV2WeightLimit, XcmV2Xcm, XcmVersionedMultiAsset, XcmVersionedMultiAssets, XcmVersionedMultiLocation, XcmVersionedResponse, XcmVersionedXcm } from '@polkadot/types/lookup';

declare module '@polkadot/types/types/registry' {
  export interface InterfaceTypes {
    ArtemisAssetCall: ArtemisAssetCall;
    ArtemisAssetError: ArtemisAssetError;
    ArtemisAssetRawEvent: ArtemisAssetRawEvent;
    ArtemisCoreApp: ArtemisCoreApp;
    ArtemisCoreMessage: ArtemisCoreMessage;
    ArtemisCoreVerificationInput: ArtemisCoreVerificationInput;
    ArtemisErc20AppCall: ArtemisErc20AppCall;
    ArtemisErc20AppError: ArtemisErc20AppError;
    ArtemisErc20AppRawEvent: ArtemisErc20AppRawEvent;
    ArtemisEthAppCall: ArtemisEthAppCall;
    ArtemisEthAppError: ArtemisEthAppError;
    ArtemisEthAppRawEvent: ArtemisEthAppRawEvent;
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
    FrameSupportPalletId: FrameSupportPalletId;
    FrameSupportTokensMiscBalanceStatus: FrameSupportTokensMiscBalanceStatus;
    FrameSupportWeightsDispatchClass: FrameSupportWeightsDispatchClass;
    FrameSupportWeightsDispatchInfo: FrameSupportWeightsDispatchInfo;
    FrameSupportWeightsPays: FrameSupportWeightsPays;
    FrameSupportWeightsPerDispatchClassU32: FrameSupportWeightsPerDispatchClassU32;
    FrameSupportWeightsPerDispatchClassU64: FrameSupportWeightsPerDispatchClassU64;
    FrameSupportWeightsPerDispatchClassWeightsPerClass: FrameSupportWeightsPerDispatchClassWeightsPerClass;
    FrameSupportWeightsRuntimeDbWeight: FrameSupportWeightsRuntimeDbWeight;
    FrameSupportWeightsWeightToFeeCoefficient: FrameSupportWeightsWeightToFeeCoefficient;
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
    FrameSystemRawOrigin: FrameSystemRawOrigin;
    MangataKusamaRuntimeOriginCaller: MangataKusamaRuntimeOriginCaller;
    MangataKusamaRuntimeRuntime: MangataKusamaRuntimeRuntime;
    MangataKusamaRuntimeSessionKeys: MangataKusamaRuntimeSessionKeys;
    OrmlTokensAccountData: OrmlTokensAccountData;
    OrmlTokensBalanceLock: OrmlTokensBalanceLock;
    OrmlTokensModuleCall: OrmlTokensModuleCall;
    OrmlTokensModuleError: OrmlTokensModuleError;
    OrmlTokensModuleEvent: OrmlTokensModuleEvent;
    OrmlUnknownTokensModuleError: OrmlUnknownTokensModuleError;
    OrmlUnknownTokensModuleEvent: OrmlUnknownTokensModuleEvent;
    OrmlXcmModuleCall: OrmlXcmModuleCall;
    OrmlXcmModuleError: OrmlXcmModuleError;
    OrmlXcmModuleEvent: OrmlXcmModuleEvent;
    OrmlXtokensModuleCall: OrmlXtokensModuleCall;
    OrmlXtokensModuleError: OrmlXtokensModuleError;
    OrmlXtokensModuleEvent: OrmlXtokensModuleEvent;
    PalletAssetsInfoAssetInfo: PalletAssetsInfoAssetInfo;
    PalletAssetsInfoCall: PalletAssetsInfoCall;
    PalletAssetsInfoError: PalletAssetsInfoError;
    PalletAssetsInfoEvent: PalletAssetsInfoEvent;
    PalletAuthorshipCall: PalletAuthorshipCall;
    PalletAuthorshipError: PalletAuthorshipError;
    PalletAuthorshipUncleEntryItem: PalletAuthorshipUncleEntryItem;
    PalletBootstrapBootstrapPhase: PalletBootstrapBootstrapPhase;
    PalletBootstrapCall: PalletBootstrapCall;
    PalletBootstrapError: PalletBootstrapError;
    PalletBootstrapEvent: PalletBootstrapEvent;
    PalletBridgeCall: PalletBridgeCall;
    PalletBridgeError: PalletBridgeError;
    PalletBridgeEvent: PalletBridgeEvent;
    PalletCollectiveCall: PalletCollectiveCall;
    PalletCollectiveError: PalletCollectiveError;
    PalletCollectiveEvent: PalletCollectiveEvent;
    PalletCollectiveRawOrigin: PalletCollectiveRawOrigin;
    PalletCollectiveVotes: PalletCollectiveVotes;
    PalletCrowdloanRewardsCall: PalletCrowdloanRewardsCall;
    PalletCrowdloanRewardsError: PalletCrowdloanRewardsError;
    PalletCrowdloanRewardsEvent: PalletCrowdloanRewardsEvent;
    PalletCrowdloanRewardsRewardInfo: PalletCrowdloanRewardsRewardInfo;
    PalletElectionsPhragmenCall: PalletElectionsPhragmenCall;
    PalletElectionsPhragmenError: PalletElectionsPhragmenError;
    PalletElectionsPhragmenEvent: PalletElectionsPhragmenEvent;
    PalletElectionsPhragmenRenouncing: PalletElectionsPhragmenRenouncing;
    PalletElectionsPhragmenSeatHolder: PalletElectionsPhragmenSeatHolder;
    PalletElectionsPhragmenVoter: PalletElectionsPhragmenVoter;
    PalletIssuanceCall: PalletIssuanceCall;
    PalletIssuanceError: PalletIssuanceError;
    PalletIssuanceEvent: PalletIssuanceEvent;
    PalletIssuanceIssuanceInfo: PalletIssuanceIssuanceInfo;
    PalletIssuanceTgeInfo: PalletIssuanceTgeInfo;
    PalletSessionCall: PalletSessionCall;
    PalletSessionError: PalletSessionError;
    PalletSessionEvent: PalletSessionEvent;
    PalletSudoCall: PalletSudoCall;
    PalletSudoError: PalletSudoError;
    PalletSudoEvent: PalletSudoEvent;
    PalletSudoOriginCall: PalletSudoOriginCall;
    PalletSudoOriginError: PalletSudoOriginError;
    PalletSudoOriginEvent: PalletSudoOriginEvent;
    PalletTimestampCall: PalletTimestampCall;
    PalletTransactionPaymentChargeTransactionPayment: PalletTransactionPaymentChargeTransactionPayment;
    PalletTransactionPaymentReleases: PalletTransactionPaymentReleases;
    PalletTreasuryCall: PalletTreasuryCall;
    PalletTreasuryError: PalletTreasuryError;
    PalletTreasuryEvent: PalletTreasuryEvent;
    PalletTreasuryProposal: PalletTreasuryProposal;
    PalletUtilityCall: PalletUtilityCall;
    PalletUtilityError: PalletUtilityError;
    PalletUtilityEvent: PalletUtilityEvent;
    PalletVerifierCall: PalletVerifierCall;
    PalletVerifierError: PalletVerifierError;
    PalletVerifierEvent: PalletVerifierEvent;
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
    PolkadotPrimitivesV1AbridgedHostConfiguration: PolkadotPrimitivesV1AbridgedHostConfiguration;
    PolkadotPrimitivesV1AbridgedHrmpChannel: PolkadotPrimitivesV1AbridgedHrmpChannel;
    PolkadotPrimitivesV1PersistedValidationData: PolkadotPrimitivesV1PersistedValidationData;
    PolkadotPrimitivesV1UpgradeRestriction: PolkadotPrimitivesV1UpgradeRestriction;
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
    SpRuntimeMultiSignature: SpRuntimeMultiSignature;
    SpRuntimeTokenError: SpRuntimeTokenError;
    SpTrieStorageProof: SpTrieStorageProof;
    SpVersionRuntimeVersion: SpVersionRuntimeVersion;
    XcmAssetRegistryCall: XcmAssetRegistryCall;
    XcmAssetRegistryError: XcmAssetRegistryError;
    XcmAssetRegistryEvent: XcmAssetRegistryEvent;
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
