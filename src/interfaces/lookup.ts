// Auto-generated via `yarn polkadot-types-from-defs`, do not edit
/* eslint-disable */

/* eslint-disable sort-keys */

export default {
  /**
   * Lookup3: frame_system::AccountInfo<Index, AccountData>
   **/
  FrameSystemAccountInfo: {
    nonce: 'u32',
    consumers: 'u32',
    providers: 'u32',
    sufficients: 'u32',
    data: 'Null'
  },
  /**
   * Lookup6: frame_support::dispatch::PerDispatchClass<sp_weights::weight_v2::Weight>
   **/
  FrameSupportDispatchPerDispatchClassWeight: {
    normal: 'SpWeightsWeightV2Weight',
    operational: 'SpWeightsWeightV2Weight',
    mandatory: 'SpWeightsWeightV2Weight'
  },
  /**
   * Lookup7: sp_weights::weight_v2::Weight
   **/
  SpWeightsWeightV2Weight: {
    refTime: 'Compact<u64>',
    proofSize: 'Compact<u64>'
  },
  /**
   * Lookup20: sp_runtime::generic::digest::Digest
   **/
  SpRuntimeDigest: {
    logs: 'Vec<SpRuntimeDigestDigestItem>'
  },
  /**
   * Lookup22: sp_runtime::generic::digest::DigestItem
   **/
  SpRuntimeDigestDigestItem: {
    _enum: {
      Other: 'Bytes',
      __Unused1: 'Null',
      __Unused2: 'Null',
      __Unused3: 'Null',
      Consensus: '([u8;4],Bytes)',
      Seal: '([u8;4],Bytes)',
      PreRuntime: '([u8;4],Bytes)',
      __Unused7: 'Null',
      RuntimeEnvironmentUpdated: 'Null'
    }
  },
  /**
   * Lookup25: frame_system::EventRecord<mangata_kusama_runtime::RuntimeEvent, primitive_types::H256>
   **/
  FrameSystemEventRecord: {
    phase: 'FrameSystemPhase',
    event: 'Event',
    topics: 'Vec<H256>'
  },
  /**
   * Lookup27: frame_system::pallet::Event<T>
   **/
  FrameSystemEvent: {
    _enum: {
      ExtrinsicSuccess: {
        dispatchInfo: 'FrameSupportDispatchDispatchInfo',
      },
      ExtrinsicFailed: {
        dispatchError: 'SpRuntimeDispatchError',
        dispatchInfo: 'FrameSupportDispatchDispatchInfo',
      },
      CodeUpdated: 'Null',
      NewAccount: {
        account: 'AccountId32',
      },
      KilledAccount: {
        account: 'AccountId32',
      },
      Remarked: {
        _alias: {
          hash_: 'hash',
        },
        sender: 'AccountId32',
        hash_: 'H256',
      },
      TxsEnqueued: {
        count: 'u64'
      }
    }
  },
  /**
   * Lookup28: frame_support::dispatch::DispatchInfo
   **/
  FrameSupportDispatchDispatchInfo: {
    weight: 'SpWeightsWeightV2Weight',
    class: 'FrameSupportDispatchDispatchClass',
    paysFee: 'FrameSupportDispatchPays'
  },
  /**
   * Lookup29: frame_support::dispatch::DispatchClass
   **/
  FrameSupportDispatchDispatchClass: {
    _enum: ['Normal', 'Operational', 'Mandatory']
  },
  /**
   * Lookup30: frame_support::dispatch::Pays
   **/
  FrameSupportDispatchPays: {
    _enum: ['Yes', 'No']
  },
  /**
   * Lookup31: sp_runtime::DispatchError
   **/
  SpRuntimeDispatchError: {
    _enum: {
      Other: 'Null',
      CannotLookup: 'Null',
      BadOrigin: 'Null',
      Module: 'SpRuntimeModuleError',
      ConsumerRemaining: 'Null',
      NoProviders: 'Null',
      TooManyConsumers: 'Null',
      Token: 'SpRuntimeTokenError',
      Arithmetic: 'SpRuntimeArithmeticError',
      Transactional: 'SpRuntimeTransactionalError',
      Exhausted: 'Null',
      Corruption: 'Null',
      Unavailable: 'Null'
    }
  },
  /**
   * Lookup32: sp_runtime::ModuleError
   **/
  SpRuntimeModuleError: {
    index: 'u8',
    error: '[u8;4]'
  },
  /**
   * Lookup33: sp_runtime::TokenError
   **/
  SpRuntimeTokenError: {
    _enum: ['NoFunds', 'WouldDie', 'BelowMinimum', 'CannotCreate', 'UnknownAsset', 'Frozen', 'Unsupported']
  },
  /**
   * Lookup34: sp_runtime::ArithmeticError
   **/
  SpRuntimeArithmeticError: {
    _enum: ['Underflow', 'Overflow', 'DivisionByZero']
  },
  /**
   * Lookup35: sp_runtime::TransactionalError
   **/
  SpRuntimeTransactionalError: {
    _enum: ['LimitReached', 'NoLayer']
  },
  /**
   * Lookup36: cumulus_pallet_parachain_system::pallet::Event<T>
   **/
  CumulusPalletParachainSystemEvent: {
    _enum: {
      ValidationFunctionStored: 'Null',
      ValidationFunctionApplied: {
        relayChainBlockNum: 'u32',
      },
      ValidationFunctionDiscarded: 'Null',
      UpgradeAuthorized: {
        codeHash: 'H256',
      },
      DownwardMessagesReceived: {
        count: 'u32',
      },
      DownwardMessagesProcessed: {
        weightUsed: 'SpWeightsWeightV2Weight',
        dmqHead: 'H256'
      }
    }
  },
  /**
   * Lookup37: orml_tokens::module::Event<T>
   **/
  OrmlTokensModuleEvent: {
    _enum: {
      Endowed: {
        currencyId: 'u32',
        who: 'AccountId32',
        amount: 'u128',
      },
      DustLost: {
        currencyId: 'u32',
        who: 'AccountId32',
        amount: 'u128',
      },
      Transfer: {
        currencyId: 'u32',
        from: 'AccountId32',
        to: 'AccountId32',
        amount: 'u128',
      },
      Reserved: {
        currencyId: 'u32',
        who: 'AccountId32',
        amount: 'u128',
      },
      Unreserved: {
        currencyId: 'u32',
        who: 'AccountId32',
        amount: 'u128',
      },
      ReserveRepatriated: {
        currencyId: 'u32',
        from: 'AccountId32',
        to: 'AccountId32',
        amount: 'u128',
        status: 'FrameSupportTokensMiscBalanceStatus',
      },
      BalanceSet: {
        currencyId: 'u32',
        who: 'AccountId32',
        free: 'u128',
        reserved: 'u128',
      },
      TotalIssuanceSet: {
        currencyId: 'u32',
        amount: 'u128',
      },
      Withdrawn: {
        currencyId: 'u32',
        who: 'AccountId32',
        amount: 'u128',
      },
      Slashed: {
        currencyId: 'u32',
        who: 'AccountId32',
        freeAmount: 'u128',
        reservedAmount: 'u128',
      },
      Deposited: {
        currencyId: 'u32',
        who: 'AccountId32',
        amount: 'u128',
      },
      LockSet: {
        lockId: '[u8;8]',
        currencyId: 'u32',
        who: 'AccountId32',
        amount: 'u128',
      },
      LockRemoved: {
        lockId: '[u8;8]',
        currencyId: 'u32',
        who: 'AccountId32',
      },
      Issued: '(u32,AccountId32,u128)',
      Minted: '(u32,AccountId32,u128)'
    }
  },
  /**
   * Lookup39: frame_support::traits::tokens::misc::BalanceStatus
   **/
  FrameSupportTokensMiscBalanceStatus: {
    _enum: ['Free', 'Reserved']
  },
  /**
   * Lookup41: pallet_transaction_payment::pallet::Event<T>
   **/
  PalletTransactionPaymentEvent: {
    _enum: {
      TransactionFeePaid: {
        who: 'AccountId32',
        actualFee: 'u128',
        tip: 'u128'
      }
    }
  },
  /**
   * Lookup42: pallet_xyk::pallet::Event<T>
   **/
  PalletXykEvent: {
    _enum: {
      PoolCreated: '(AccountId32,u32,u128,u32,u128)',
      AssetsSwapped: '(AccountId32,u32,u128,u32,u128)',
      SellAssetFailedDueToSlippage: '(AccountId32,u32,u128,u32,u128,u128)',
      BuyAssetFailedDueToSlippage: '(AccountId32,u32,u128,u32,u128,u128)',
      LiquidityMinted: '(AccountId32,u32,u128,u32,u128,u32,u128)',
      LiquidityBurned: '(AccountId32,u32,u128,u32,u128,u32,u128)',
      PoolPromotionUpdated: '(u32,Option<u8>)',
      LiquidityActivated: '(AccountId32,u32,u128)',
      LiquidityDeactivated: '(AccountId32,u32,u128)',
      RewardsClaimed: '(AccountId32,u32,u128)',
      AssetsMultiSellSwapped: '(AccountId32,Vec<u32>,u128,u128)',
      AssetsMultiBuySwapped: '(AccountId32,Vec<u32>,u128,u128)',
      MultiSellAssetFailedDueToSlippage: '(AccountId32,Vec<u32>,u128)',
      MultiBuyAssetFailedDueToSlippage: '(AccountId32,Vec<u32>,u128)',
      MultiSellAssetFailedOnAtomicSwap: '(AccountId32,Vec<u32>,u128)',
      MultiBuyAssetFailedOnAtomicSwap: '(AccountId32,Vec<u32>,u128)',
      MultiSwapFailedDueToNotEnoughAssets: '(AccountId32,Vec<u32>,u128)'
    }
  },
  /**
   * Lookup45: pallet_fee_lock::pallet::Event<T>
   **/
  PalletFeeLockEvent: {
    _enum: {
      FeeLockMetadataUpdated: 'Null',
      FeeLockUnlocked: '(AccountId32,u128)'
    }
  },
  /**
   * Lookup46: pallet_vesting_mangata::pallet::Event<T>
   **/
  PalletVestingMangataEvent: {
    _enum: {
      VestingUpdated: '(AccountId32,u32,u128)',
      VestingCompleted: '(AccountId32,u32)'
    }
  },
  /**
   * Lookup47: pallet_crowdloan_rewards::pallet::Event<T>
   **/
  PalletCrowdloanRewardsEvent: {
    _enum: {
      InitialPaymentMade: '(AccountId32,u128)',
      NativeIdentityAssociated: '(AccountId32,AccountId32,u128)',
      RewardsPaid: '(AccountId32,u128)',
      RewardAddressUpdated: '(AccountId32,AccountId32)',
      InitializedAlreadyInitializedAccount: '(AccountId32,Option<AccountId32>,u128)',
      InitializedAccountWithNotEnoughContribution: '(AccountId32,Option<AccountId32>,u128)'
    }
  },
  /**
   * Lookup48: pallet_issuance::pallet::Event<T>
   **/
  PalletIssuanceEvent: {
    _enum: {
      SessionIssuanceIssued: '(u32,u128,u128)',
      SessionIssuanceRecorded: '(u32,u128,u128)',
      IssuanceConfigInitialized: 'PalletIssuanceIssuanceInfo',
      TGEFinalized: 'Null',
      TGEInstanceFailed: 'PalletIssuanceTgeInfo',
      TGEInstanceSucceeded: 'PalletIssuanceTgeInfo'
    }
  },
  /**
   * Lookup49: pallet_issuance::IssuanceInfo
   **/
  PalletIssuanceIssuanceInfo: {
    cap: 'u128',
    issuanceAtInit: 'u128',
    linearIssuanceBlocks: 'u32',
    liquidityMiningSplit: 'Perbill',
    stakingSplit: 'Perbill',
    totalCrowdloanAllocation: 'u128'
  },
  /**
   * Lookup51: pallet_issuance::TgeInfo<sp_core::crypto::AccountId32>
   **/
  PalletIssuanceTgeInfo: {
    who: 'AccountId32',
    amount: 'u128'
  },
  /**
   * Lookup52: parachain_staking::pallet::Event<T>
   **/
  ParachainStakingEvent: {
    _enum: {
      NewRound: '(u32,u32,u32,u128)',
      JoinedCollatorCandidates: '(AccountId32,u128,u128)',
      CollatorChosen: '(u32,AccountId32,u128)',
      CandidateBondMoreRequested: '(AccountId32,u128,u32)',
      CandidateBondLessRequested: '(AccountId32,u128,u32)',
      CandidateBondedMore: '(AccountId32,u128,u128)',
      CandidateBondedLess: '(AccountId32,u128,u128)',
      CandidateWentOffline: '(u32,AccountId32)',
      CandidateBackOnline: '(u32,AccountId32)',
      CandidateScheduledExit: '(u32,AccountId32,u32)',
      CancelledCandidateExit: 'AccountId32',
      CancelledCandidateBondChange: '(AccountId32,ParachainStakingCandidateBondRequest)',
      CandidateLeft: '(AccountId32,u128,u128)',
      DelegationIncreaseScheduled: '(AccountId32,AccountId32,u128,u32)',
      DelegationDecreaseScheduled: '(AccountId32,AccountId32,u128,u32)',
      DelegationIncreased: '(AccountId32,AccountId32,u128,bool)',
      DelegationDecreased: '(AccountId32,AccountId32,u128,bool)',
      DelegatorExitScheduled: '(u32,AccountId32,u32)',
      DelegationRevocationScheduled: '(u32,AccountId32,AccountId32,u32)',
      DelegatorLeft: '(AccountId32,u128)',
      DelegationRevoked: '(AccountId32,AccountId32,u128)',
      DelegatorExitCancelled: 'AccountId32',
      CancelledDelegationRequest: '(AccountId32,ParachainStakingDelegationRequest)',
      Delegation: '(AccountId32,u128,AccountId32,ParachainStakingDelegatorAdded)',
      DelegatorLeftCandidate: '(AccountId32,AccountId32,u128,u128)',
      DelegatorDueReward: '(AccountId32,AccountId32,u128)',
      Rewarded: '(AccountId32,u128)',
      StakeExpectationsSet: '(u128,u128,u128)',
      TotalSelectedSet: '(u32,u32)',
      CollatorCommissionSet: '(Perbill,Perbill)'
    }
  },
  /**
   * Lookup53: parachain_staking::pallet::CandidateBondRequest
   **/
  ParachainStakingCandidateBondRequest: {
    amount: 'u128',
    change: 'ParachainStakingCandidateBondChange',
    whenExecutable: 'u32'
  },
  /**
   * Lookup54: parachain_staking::pallet::CandidateBondChange
   **/
  ParachainStakingCandidateBondChange: {
    _enum: ['Increase', 'Decrease']
  },
  /**
   * Lookup55: parachain_staking::pallet::DelegationRequest<sp_core::crypto::AccountId32>
   **/
  ParachainStakingDelegationRequest: {
    collator: 'AccountId32',
    amount: 'u128',
    whenExecutable: 'u32',
    action: 'ParachainStakingDelegationChange'
  },
  /**
   * Lookup56: parachain_staking::pallet::DelegationChange
   **/
  ParachainStakingDelegationChange: {
    _enum: ['Revoke', 'Increase', 'Decrease']
  },
  /**
   * Lookup57: parachain_staking::pallet::DelegatorAdded
   **/
  ParachainStakingDelegatorAdded: {
    _enum: {
      AddedToTop: {
        newTotal: 'u128',
      },
      AddedToBottom: 'Null'
    }
  },
  /**
   * Lookup58: pallet_session::pallet::Event
   **/
  PalletSessionEvent: {
    _enum: {
      NewSession: {
        sessionIndex: 'u32'
      }
    }
  },
  /**
   * Lookup59: pallet_multipurpose_liquidity::pallet::Event<T>
   **/
  PalletMultipurposeLiquidityEvent: {
    _enum: {
      VestingTokensReserved: '(AccountId32,u32,u128)',
      TokensRelockedFromReserve: '(AccountId32,u32,u128,u128)'
    }
  },
  /**
   * Lookup60: cumulus_pallet_xcmp_queue::pallet::Event<T>
   **/
  CumulusPalletXcmpQueueEvent: {
    _enum: {
      Success: {
        messageHash: 'Option<H256>',
        weight: 'SpWeightsWeightV2Weight',
      },
      Fail: {
        messageHash: 'Option<H256>',
        error: 'XcmV2TraitsError',
        weight: 'SpWeightsWeightV2Weight',
      },
      BadVersion: {
        messageHash: 'Option<H256>',
      },
      BadFormat: {
        messageHash: 'Option<H256>',
      },
      UpwardMessageSent: {
        messageHash: 'Option<H256>',
      },
      XcmpMessageSent: {
        messageHash: 'Option<H256>',
      },
      OverweightEnqueued: {
        sender: 'u32',
        sentAt: 'u32',
        index: 'u64',
        required: 'SpWeightsWeightV2Weight',
      },
      OverweightServiced: {
        index: 'u64',
        used: 'SpWeightsWeightV2Weight'
      }
    }
  },
  /**
   * Lookup62: xcm::v2::traits::Error
   **/
  XcmV2TraitsError: {
    _enum: {
      Overflow: 'Null',
      Unimplemented: 'Null',
      UntrustedReserveLocation: 'Null',
      UntrustedTeleportLocation: 'Null',
      MultiLocationFull: 'Null',
      MultiLocationNotInvertible: 'Null',
      BadOrigin: 'Null',
      InvalidLocation: 'Null',
      AssetNotFound: 'Null',
      FailedToTransactAsset: 'Null',
      NotWithdrawable: 'Null',
      LocationCannotHold: 'Null',
      ExceedsMaxMessageSize: 'Null',
      DestinationUnsupported: 'Null',
      Transport: 'Null',
      Unroutable: 'Null',
      UnknownClaim: 'Null',
      FailedToDecode: 'Null',
      MaxWeightInvalid: 'Null',
      NotHoldingFees: 'Null',
      TooExpensive: 'Null',
      Trap: 'u64',
      UnhandledXcmVersion: 'Null',
      WeightLimitReached: 'u64',
      Barrier: 'Null',
      WeightNotComputable: 'Null'
    }
  },
  /**
   * Lookup64: pallet_xcm::pallet::Event<T>
   **/
  PalletXcmEvent: {
    _enum: {
      Attempted: 'XcmV2TraitsOutcome',
      Sent: '(XcmV1MultiLocation,XcmV1MultiLocation,XcmV2Xcm)',
      UnexpectedResponse: '(XcmV1MultiLocation,u64)',
      ResponseReady: '(u64,XcmV2Response)',
      Notified: '(u64,u8,u8)',
      NotifyOverweight: '(u64,u8,u8,SpWeightsWeightV2Weight,SpWeightsWeightV2Weight)',
      NotifyDispatchError: '(u64,u8,u8)',
      NotifyDecodeFailed: '(u64,u8,u8)',
      InvalidResponder: '(XcmV1MultiLocation,u64,Option<XcmV1MultiLocation>)',
      InvalidResponderVersion: '(XcmV1MultiLocation,u64)',
      ResponseTaken: 'u64',
      AssetsTrapped: '(H256,XcmV1MultiLocation,XcmVersionedMultiAssets)',
      VersionChangeNotified: '(XcmV1MultiLocation,u32)',
      SupportedVersionChanged: '(XcmV1MultiLocation,u32)',
      NotifyTargetSendFail: '(XcmV1MultiLocation,u64,XcmV2TraitsError)',
      NotifyTargetMigrationFail: '(XcmVersionedMultiLocation,u64)',
      AssetsClaimed: '(H256,XcmV1MultiLocation,XcmVersionedMultiAssets)'
    }
  },
  /**
   * Lookup65: xcm::v2::traits::Outcome
   **/
  XcmV2TraitsOutcome: {
    _enum: {
      Complete: 'u64',
      Incomplete: '(u64,XcmV2TraitsError)',
      Error: 'XcmV2TraitsError'
    }
  },
  /**
   * Lookup66: xcm::v1::multilocation::MultiLocation
   **/
  XcmV1MultiLocation: {
    parents: 'u8',
    interior: 'XcmV1MultilocationJunctions'
  },
  /**
   * Lookup67: xcm::v1::multilocation::Junctions
   **/
  XcmV1MultilocationJunctions: {
    _enum: {
      Here: 'Null',
      X1: 'XcmV1Junction',
      X2: '(XcmV1Junction,XcmV1Junction)',
      X3: '(XcmV1Junction,XcmV1Junction,XcmV1Junction)',
      X4: '(XcmV1Junction,XcmV1Junction,XcmV1Junction,XcmV1Junction)',
      X5: '(XcmV1Junction,XcmV1Junction,XcmV1Junction,XcmV1Junction,XcmV1Junction)',
      X6: '(XcmV1Junction,XcmV1Junction,XcmV1Junction,XcmV1Junction,XcmV1Junction,XcmV1Junction)',
      X7: '(XcmV1Junction,XcmV1Junction,XcmV1Junction,XcmV1Junction,XcmV1Junction,XcmV1Junction,XcmV1Junction)',
      X8: '(XcmV1Junction,XcmV1Junction,XcmV1Junction,XcmV1Junction,XcmV1Junction,XcmV1Junction,XcmV1Junction,XcmV1Junction)'
    }
  },
  /**
   * Lookup68: xcm::v1::junction::Junction
   **/
  XcmV1Junction: {
    _enum: {
      Parachain: 'Compact<u32>',
      AccountId32: {
        network: 'XcmV0JunctionNetworkId',
        id: '[u8;32]',
      },
      AccountIndex64: {
        network: 'XcmV0JunctionNetworkId',
        index: 'Compact<u64>',
      },
      AccountKey20: {
        network: 'XcmV0JunctionNetworkId',
        key: '[u8;20]',
      },
      PalletInstance: 'u8',
      GeneralIndex: 'Compact<u128>',
      GeneralKey: 'Bytes',
      OnlyChild: 'Null',
      Plurality: {
        id: 'XcmV0JunctionBodyId',
        part: 'XcmV0JunctionBodyPart'
      }
    }
  },
  /**
   * Lookup70: xcm::v0::junction::NetworkId
   **/
  XcmV0JunctionNetworkId: {
    _enum: {
      Any: 'Null',
      Named: 'Bytes',
      Polkadot: 'Null',
      Kusama: 'Null'
    }
  },
  /**
   * Lookup74: xcm::v0::junction::BodyId
   **/
  XcmV0JunctionBodyId: {
    _enum: {
      Unit: 'Null',
      Named: 'Bytes',
      Index: 'Compact<u32>',
      Executive: 'Null',
      Technical: 'Null',
      Legislative: 'Null',
      Judicial: 'Null'
    }
  },
  /**
   * Lookup75: xcm::v0::junction::BodyPart
   **/
  XcmV0JunctionBodyPart: {
    _enum: {
      Voice: 'Null',
      Members: {
        count: 'Compact<u32>',
      },
      Fraction: {
        nom: 'Compact<u32>',
        denom: 'Compact<u32>',
      },
      AtLeastProportion: {
        nom: 'Compact<u32>',
        denom: 'Compact<u32>',
      },
      MoreThanProportion: {
        nom: 'Compact<u32>',
        denom: 'Compact<u32>'
      }
    }
  },
  /**
   * Lookup76: xcm::v2::Xcm<RuntimeCall>
   **/
  XcmV2Xcm: 'Vec<XcmV2Instruction>',
  /**
   * Lookup78: xcm::v2::Instruction<RuntimeCall>
   **/
  XcmV2Instruction: {
    _enum: {
      WithdrawAsset: 'XcmV1MultiassetMultiAssets',
      ReserveAssetDeposited: 'XcmV1MultiassetMultiAssets',
      ReceiveTeleportedAsset: 'XcmV1MultiassetMultiAssets',
      QueryResponse: {
        queryId: 'Compact<u64>',
        response: 'XcmV2Response',
        maxWeight: 'Compact<u64>',
      },
      TransferAsset: {
        assets: 'XcmV1MultiassetMultiAssets',
        beneficiary: 'XcmV1MultiLocation',
      },
      TransferReserveAsset: {
        assets: 'XcmV1MultiassetMultiAssets',
        dest: 'XcmV1MultiLocation',
        xcm: 'XcmV2Xcm',
      },
      Transact: {
        originType: 'XcmV0OriginKind',
        requireWeightAtMost: 'Compact<u64>',
        call: 'XcmDoubleEncoded',
      },
      HrmpNewChannelOpenRequest: {
        sender: 'Compact<u32>',
        maxMessageSize: 'Compact<u32>',
        maxCapacity: 'Compact<u32>',
      },
      HrmpChannelAccepted: {
        recipient: 'Compact<u32>',
      },
      HrmpChannelClosing: {
        initiator: 'Compact<u32>',
        sender: 'Compact<u32>',
        recipient: 'Compact<u32>',
      },
      ClearOrigin: 'Null',
      DescendOrigin: 'XcmV1MultilocationJunctions',
      ReportError: {
        queryId: 'Compact<u64>',
        dest: 'XcmV1MultiLocation',
        maxResponseWeight: 'Compact<u64>',
      },
      DepositAsset: {
        assets: 'XcmV1MultiassetMultiAssetFilter',
        maxAssets: 'Compact<u32>',
        beneficiary: 'XcmV1MultiLocation',
      },
      DepositReserveAsset: {
        assets: 'XcmV1MultiassetMultiAssetFilter',
        maxAssets: 'Compact<u32>',
        dest: 'XcmV1MultiLocation',
        xcm: 'XcmV2Xcm',
      },
      ExchangeAsset: {
        give: 'XcmV1MultiassetMultiAssetFilter',
        receive: 'XcmV1MultiassetMultiAssets',
      },
      InitiateReserveWithdraw: {
        assets: 'XcmV1MultiassetMultiAssetFilter',
        reserve: 'XcmV1MultiLocation',
        xcm: 'XcmV2Xcm',
      },
      InitiateTeleport: {
        assets: 'XcmV1MultiassetMultiAssetFilter',
        dest: 'XcmV1MultiLocation',
        xcm: 'XcmV2Xcm',
      },
      QueryHolding: {
        queryId: 'Compact<u64>',
        dest: 'XcmV1MultiLocation',
        assets: 'XcmV1MultiassetMultiAssetFilter',
        maxResponseWeight: 'Compact<u64>',
      },
      BuyExecution: {
        fees: 'XcmV1MultiAsset',
        weightLimit: 'XcmV2WeightLimit',
      },
      RefundSurplus: 'Null',
      SetErrorHandler: 'XcmV2Xcm',
      SetAppendix: 'XcmV2Xcm',
      ClearError: 'Null',
      ClaimAsset: {
        assets: 'XcmV1MultiassetMultiAssets',
        ticket: 'XcmV1MultiLocation',
      },
      Trap: 'Compact<u64>',
      SubscribeVersion: {
        queryId: 'Compact<u64>',
        maxResponseWeight: 'Compact<u64>',
      },
      UnsubscribeVersion: 'Null'
    }
  },
  /**
   * Lookup79: xcm::v1::multiasset::MultiAssets
   **/
  XcmV1MultiassetMultiAssets: 'Vec<XcmV1MultiAsset>',
  /**
   * Lookup81: xcm::v1::multiasset::MultiAsset
   **/
  XcmV1MultiAsset: {
    id: 'XcmV1MultiassetAssetId',
    fun: 'XcmV1MultiassetFungibility'
  },
  /**
   * Lookup82: xcm::v1::multiasset::AssetId
   **/
  XcmV1MultiassetAssetId: {
    _enum: {
      Concrete: 'XcmV1MultiLocation',
      Abstract: 'Bytes'
    }
  },
  /**
   * Lookup83: xcm::v1::multiasset::Fungibility
   **/
  XcmV1MultiassetFungibility: {
    _enum: {
      Fungible: 'Compact<u128>',
      NonFungible: 'XcmV1MultiassetAssetInstance'
    }
  },
  /**
   * Lookup84: xcm::v1::multiasset::AssetInstance
   **/
  XcmV1MultiassetAssetInstance: {
    _enum: {
      Undefined: 'Null',
      Index: 'Compact<u128>',
      Array4: '[u8;4]',
      Array8: '[u8;8]',
      Array16: '[u8;16]',
      Array32: '[u8;32]',
      Blob: 'Bytes'
    }
  },
  /**
   * Lookup86: xcm::v2::Response
   **/
  XcmV2Response: {
    _enum: {
      Null: 'Null',
      Assets: 'XcmV1MultiassetMultiAssets',
      ExecutionResult: 'Option<(u32,XcmV2TraitsError)>',
      Version: 'u32'
    }
  },
  /**
   * Lookup89: xcm::v0::OriginKind
   **/
  XcmV0OriginKind: {
    _enum: ['Native', 'SovereignAccount', 'Superuser', 'Xcm']
  },
  /**
   * Lookup90: xcm::double_encoded::DoubleEncoded<T>
   **/
  XcmDoubleEncoded: {
    encoded: 'Bytes'
  },
  /**
   * Lookup91: xcm::v1::multiasset::MultiAssetFilter
   **/
  XcmV1MultiassetMultiAssetFilter: {
    _enum: {
      Definite: 'XcmV1MultiassetMultiAssets',
      Wild: 'XcmV1MultiassetWildMultiAsset'
    }
  },
  /**
   * Lookup92: xcm::v1::multiasset::WildMultiAsset
   **/
  XcmV1MultiassetWildMultiAsset: {
    _enum: {
      All: 'Null',
      AllOf: {
        id: 'XcmV1MultiassetAssetId',
        fun: 'XcmV1MultiassetWildFungibility'
      }
    }
  },
  /**
   * Lookup93: xcm::v1::multiasset::WildFungibility
   **/
  XcmV1MultiassetWildFungibility: {
    _enum: ['Fungible', 'NonFungible']
  },
  /**
   * Lookup94: xcm::v2::WeightLimit
   **/
  XcmV2WeightLimit: {
    _enum: {
      Unlimited: 'Null',
      Limited: 'Compact<u64>'
    }
  },
  /**
   * Lookup96: xcm::VersionedMultiAssets
   **/
  XcmVersionedMultiAssets: {
    _enum: {
      V0: 'Vec<XcmV0MultiAsset>',
      V1: 'XcmV1MultiassetMultiAssets'
    }
  },
  /**
   * Lookup98: xcm::v0::multi_asset::MultiAsset
   **/
  XcmV0MultiAsset: {
    _enum: {
      None: 'Null',
      All: 'Null',
      AllFungible: 'Null',
      AllNonFungible: 'Null',
      AllAbstractFungible: {
        id: 'Bytes',
      },
      AllAbstractNonFungible: {
        class: 'Bytes',
      },
      AllConcreteFungible: {
        id: 'XcmV0MultiLocation',
      },
      AllConcreteNonFungible: {
        class: 'XcmV0MultiLocation',
      },
      AbstractFungible: {
        id: 'Bytes',
        amount: 'Compact<u128>',
      },
      AbstractNonFungible: {
        class: 'Bytes',
        instance: 'XcmV1MultiassetAssetInstance',
      },
      ConcreteFungible: {
        id: 'XcmV0MultiLocation',
        amount: 'Compact<u128>',
      },
      ConcreteNonFungible: {
        class: 'XcmV0MultiLocation',
        instance: 'XcmV1MultiassetAssetInstance'
      }
    }
  },
  /**
   * Lookup99: xcm::v0::multi_location::MultiLocation
   **/
  XcmV0MultiLocation: {
    _enum: {
      Null: 'Null',
      X1: 'XcmV0Junction',
      X2: '(XcmV0Junction,XcmV0Junction)',
      X3: '(XcmV0Junction,XcmV0Junction,XcmV0Junction)',
      X4: '(XcmV0Junction,XcmV0Junction,XcmV0Junction,XcmV0Junction)',
      X5: '(XcmV0Junction,XcmV0Junction,XcmV0Junction,XcmV0Junction,XcmV0Junction)',
      X6: '(XcmV0Junction,XcmV0Junction,XcmV0Junction,XcmV0Junction,XcmV0Junction,XcmV0Junction)',
      X7: '(XcmV0Junction,XcmV0Junction,XcmV0Junction,XcmV0Junction,XcmV0Junction,XcmV0Junction,XcmV0Junction)',
      X8: '(XcmV0Junction,XcmV0Junction,XcmV0Junction,XcmV0Junction,XcmV0Junction,XcmV0Junction,XcmV0Junction,XcmV0Junction)'
    }
  },
  /**
   * Lookup100: xcm::v0::junction::Junction
   **/
  XcmV0Junction: {
    _enum: {
      Parent: 'Null',
      Parachain: 'Compact<u32>',
      AccountId32: {
        network: 'XcmV0JunctionNetworkId',
        id: '[u8;32]',
      },
      AccountIndex64: {
        network: 'XcmV0JunctionNetworkId',
        index: 'Compact<u64>',
      },
      AccountKey20: {
        network: 'XcmV0JunctionNetworkId',
        key: '[u8;20]',
      },
      PalletInstance: 'u8',
      GeneralIndex: 'Compact<u128>',
      GeneralKey: 'Bytes',
      OnlyChild: 'Null',
      Plurality: {
        id: 'XcmV0JunctionBodyId',
        part: 'XcmV0JunctionBodyPart'
      }
    }
  },
  /**
   * Lookup101: xcm::VersionedMultiLocation
   **/
  XcmVersionedMultiLocation: {
    _enum: {
      V0: 'XcmV0MultiLocation',
      V1: 'XcmV1MultiLocation'
    }
  },
  /**
   * Lookup102: cumulus_pallet_xcm::pallet::Event<T>
   **/
  CumulusPalletXcmEvent: {
    _enum: {
      InvalidFormat: '[u8;8]',
      UnsupportedVersion: '[u8;8]',
      ExecutedDownward: '([u8;8],XcmV2TraitsOutcome)'
    }
  },
  /**
   * Lookup103: cumulus_pallet_dmp_queue::pallet::Event<T>
   **/
  CumulusPalletDmpQueueEvent: {
    _enum: {
      InvalidFormat: {
        messageId: '[u8;32]',
      },
      UnsupportedVersion: {
        messageId: '[u8;32]',
      },
      ExecutedDownward: {
        messageId: '[u8;32]',
        outcome: 'XcmV2TraitsOutcome',
      },
      WeightExhausted: {
        messageId: '[u8;32]',
        remainingWeight: 'SpWeightsWeightV2Weight',
        requiredWeight: 'SpWeightsWeightV2Weight',
      },
      OverweightEnqueued: {
        messageId: '[u8;32]',
        overweightIndex: 'u64',
        requiredWeight: 'SpWeightsWeightV2Weight',
      },
      OverweightServiced: {
        overweightIndex: 'u64',
        weightUsed: 'SpWeightsWeightV2Weight'
      }
    }
  },
  /**
   * Lookup104: orml_xtokens::module::Event<T>
   **/
  OrmlXtokensModuleEvent: {
    _enum: {
      TransferredMultiAssets: {
        sender: 'AccountId32',
        assets: 'XcmV1MultiassetMultiAssets',
        fee: 'XcmV1MultiAsset',
        dest: 'XcmV1MultiLocation'
      }
    }
  },
  /**
   * Lookup105: orml_unknown_tokens::module::Event
   **/
  OrmlUnknownTokensModuleEvent: {
    _enum: {
      Deposited: {
        asset: 'XcmV1MultiAsset',
        who: 'XcmV1MultiLocation',
      },
      Withdrawn: {
        asset: 'XcmV1MultiAsset',
        who: 'XcmV1MultiLocation'
      }
    }
  },
  /**
   * Lookup106: orml_xcm::module::Event<T>
   **/
  OrmlXcmModuleEvent: {
    _enum: {
      Sent: {
        to: 'XcmV1MultiLocation',
        message: 'XcmV2Xcm'
      }
    }
  },
  /**
   * Lookup107: orml_asset_registry::module::Event<T>
   **/
  OrmlAssetRegistryModuleEvent: {
    _enum: {
      RegisteredAsset: {
        assetId: 'u32',
        metadata: 'OrmlTraitsAssetRegistryAssetMetadata',
      },
      UpdatedAsset: {
        assetId: 'u32',
        metadata: 'OrmlTraitsAssetRegistryAssetMetadata'
      }
    }
  },
  /**
   * Lookup108: orml_traits::asset_registry::AssetMetadata<Balance, mangata_types::assets::CustomMetadata>
   **/
  OrmlTraitsAssetRegistryAssetMetadata: {
    decimals: 'u32',
    name: 'Bytes',
    symbol: 'Bytes',
    existentialDeposit: 'u128',
    location: 'Option<XcmVersionedMultiLocation>',
    additional: 'MangataTypesAssetsCustomMetadata'
  },
  /**
   * Lookup109: mangata_types::assets::CustomMetadata
   **/
  MangataTypesAssetsCustomMetadata: {
    xcm: 'Option<MangataTypesAssetsXcmMetadata>',
    xyk: 'Option<MangataTypesAssetsXykMetadata>'
  },
  /**
   * Lookup111: mangata_types::assets::XcmMetadata
   **/
  MangataTypesAssetsXcmMetadata: {
    feePerSecond: 'u128'
  },
  /**
   * Lookup113: mangata_types::assets::XykMetadata
   **/
  MangataTypesAssetsXykMetadata: {
    operationsDisabled: 'bool'
  },
  /**
   * Lookup115: pallet_treasury::pallet::Event<T, I>
   **/
  PalletTreasuryEvent: {
    _enum: {
      Proposed: {
        proposalIndex: 'u32',
      },
      Spending: {
        budgetRemaining: 'u128',
      },
      Awarded: {
        proposalIndex: 'u32',
        award: 'u128',
        account: 'AccountId32',
      },
      Rejected: {
        proposalIndex: 'u32',
        slashed: 'u128',
      },
      Burnt: {
        burntFunds: 'u128',
      },
      Rollover: {
        rolloverBalance: 'u128',
      },
      Deposit: {
        value: 'u128',
      },
      SpendApproved: {
        proposalIndex: 'u32',
        amount: 'u128',
        beneficiary: 'AccountId32'
      }
    }
  },
  /**
   * Lookup116: pallet_sudo_mangata::pallet::Event<T>
   **/
  PalletSudoMangataEvent: {
    _enum: {
      Sudid: {
        sudoResult: 'Result<Null, SpRuntimeDispatchError>',
      },
      KeyChanged: {
        oldSudoer: 'Option<AccountId32>',
      },
      SudoAsDone: {
        sudoResult: 'Result<Null, SpRuntimeDispatchError>'
      }
    }
  },
  /**
   * Lookup118: pallet_sudo_origin::pallet::Event<T>
   **/
  PalletSudoOriginEvent: {
    _enum: {
      SuOriginDid: 'Result<Null, SpRuntimeDispatchError>',
      SuOriginDoAsDone: 'Result<Null, SpRuntimeDispatchError>'
    }
  },
  /**
   * Lookup119: pallet_collective_mangata::pallet::Event<T, I>
   **/
  PalletCollectiveMangataEvent: {
    _enum: {
      Proposed: {
        account: 'AccountId32',
        proposalIndex: 'u32',
        proposalHash: 'H256',
        threshold: 'u32',
      },
      Voted: {
        account: 'AccountId32',
        proposalHash: 'H256',
        voted: 'bool',
        yes: 'u32',
        no: 'u32',
      },
      Approved: {
        proposalHash: 'H256',
      },
      Disapproved: {
        proposalHash: 'H256',
      },
      Executed: {
        proposalHash: 'H256',
        result: 'Result<Null, SpRuntimeDispatchError>',
      },
      MemberExecuted: {
        proposalHash: 'H256',
        result: 'Result<Null, SpRuntimeDispatchError>',
      },
      Closed: {
        proposalHash: 'H256',
        yes: 'u32',
        no: 'u32',
      },
      MembersChanged: {
        newMembers: 'Vec<AccountId32>',
      },
      PrimeSet: {
        newPrime: 'Option<AccountId32>'
      }
    }
  },
  /**
   * Lookup121: pallet_bootstrap::pallet::Event<T>
   **/
  PalletBootstrapEvent: {
    _enum: {
      Provisioned: '(u32,u128)',
      VestedProvisioned: '(u32,u128)',
      RewardsLiquidityAcitvationFailed: '(AccountId32,u32,u128)',
      RewardsClaimed: '(u32,u128)',
      AccountsWhitelisted: 'Null',
      BootstrapParitallyFinalized: 'Null',
      BootstrapFinalized: 'Null'
    }
  },
  /**
   * Lookup122: pallet_utility_mangata::pallet::Event
   **/
  PalletUtilityMangataEvent: {
    _enum: {
      BatchInterrupted: {
        index: 'u32',
        error: 'SpRuntimeDispatchError',
      },
      BatchCompleted: 'Null',
      BatchCompletedWithErrors: 'Null',
      ItemCompleted: 'Null',
      ItemFailed: {
        error: 'SpRuntimeDispatchError',
      },
      DispatchedAs: {
        result: 'Result<Null, SpRuntimeDispatchError>'
      }
    }
  },
  /**
   * Lookup123: pallet_proxy::pallet::Event<T>
   **/
  PalletProxyEvent: {
    _enum: {
      ProxyExecuted: {
        result: 'Result<Null, SpRuntimeDispatchError>',
      },
      PureCreated: {
        pure: 'AccountId32',
        who: 'AccountId32',
        proxyType: 'MangataKusamaRuntimeProxyType',
        disambiguationIndex: 'u16',
      },
      Announced: {
        real: 'AccountId32',
        proxy: 'AccountId32',
        callHash: 'H256',
      },
      ProxyAdded: {
        delegator: 'AccountId32',
        delegatee: 'AccountId32',
        proxyType: 'MangataKusamaRuntimeProxyType',
        delay: 'u32',
      },
      ProxyRemoved: {
        delegator: 'AccountId32',
        delegatee: 'AccountId32',
        proxyType: 'MangataKusamaRuntimeProxyType',
        delay: 'u32'
      }
    }
  },
  /**
   * Lookup124: mangata_kusama_runtime::ProxyType
   **/
  MangataKusamaRuntimeProxyType: {
    _enum: ['AutoCompound']
  },
  /**
   * Lookup126: pallet_maintenance::pallet::Event<T>
   **/
  PalletMaintenanceEvent: {
    _enum: {
      MaintenanceModeSwitchedOn: 'AccountId32',
      MaintenanceModeSwitchedOff: 'AccountId32',
      UpgradabilityInMaintenanceModeSwitchedOn: 'AccountId32',
      UpgradabilityInMaintenanceModeSwitchedOff: 'AccountId32'
    }
  },
  /**
   * Lookup127: frame_system::Phase
   **/
  FrameSystemPhase: {
    _enum: {
      ApplyExtrinsic: 'u32',
      Finalization: 'Null',
      Initialization: 'Null'
    }
  },
  /**
   * Lookup131: frame_system::LastRuntimeUpgradeInfo
   **/
  FrameSystemLastRuntimeUpgradeInfo: {
    specVersion: 'Compact<u32>',
    specName: 'Text'
  },
  /**
   * Lookup133: frame_system::pallet::Call<T>
   **/
  FrameSystemCall: {
    _enum: {
      enqueue_txs: {
        txs: 'Vec<(Option<AccountId32>,Bytes)>',
      },
      remark: {
        remark: 'Bytes',
      },
      set_heap_pages: {
        pages: 'u64',
      },
      set_code: {
        code: 'Bytes',
      },
      set_code_without_checks: {
        code: 'Bytes',
      },
      set_storage: {
        items: 'Vec<(Bytes,Bytes)>',
      },
      kill_storage: {
        _alias: {
          keys_: 'keys',
        },
        keys_: 'Vec<Bytes>',
      },
      kill_prefix: {
        prefix: 'Bytes',
        subkeys: 'u32',
      },
      remark_with_event: {
        remark: 'Bytes'
      }
    }
  },
  /**
   * Lookup137: frame_system::limits::BlockWeights
   **/
  FrameSystemLimitsBlockWeights: {
    baseBlock: 'SpWeightsWeightV2Weight',
    maxBlock: 'SpWeightsWeightV2Weight',
    perClass: 'FrameSupportDispatchPerDispatchClassWeightsPerClass'
  },
  /**
   * Lookup138: frame_support::dispatch::PerDispatchClass<frame_system::limits::WeightsPerClass>
   **/
  FrameSupportDispatchPerDispatchClassWeightsPerClass: {
    normal: 'FrameSystemLimitsWeightsPerClass',
    operational: 'FrameSystemLimitsWeightsPerClass',
    mandatory: 'FrameSystemLimitsWeightsPerClass'
  },
  /**
   * Lookup139: frame_system::limits::WeightsPerClass
   **/
  FrameSystemLimitsWeightsPerClass: {
    baseExtrinsic: 'SpWeightsWeightV2Weight',
    maxExtrinsic: 'Option<SpWeightsWeightV2Weight>',
    maxTotal: 'Option<SpWeightsWeightV2Weight>',
    reserved: 'Option<SpWeightsWeightV2Weight>'
  },
  /**
   * Lookup141: frame_system::limits::BlockLength
   **/
  FrameSystemLimitsBlockLength: {
    max: 'FrameSupportDispatchPerDispatchClassU32'
  },
  /**
   * Lookup142: frame_support::dispatch::PerDispatchClass<T>
   **/
  FrameSupportDispatchPerDispatchClassU32: {
    normal: 'u32',
    operational: 'u32',
    mandatory: 'u32'
  },
  /**
   * Lookup143: sp_weights::RuntimeDbWeight
   **/
  SpWeightsRuntimeDbWeight: {
    read: 'u64',
    write: 'u64'
  },
  /**
   * Lookup144: sp_version::RuntimeVersion
   **/
  SpVersionRuntimeVersion: {
    specName: 'Text',
    implName: 'Text',
    authoringVersion: 'u32',
    specVersion: 'u32',
    implVersion: 'u32',
    apis: 'Vec<([u8;8],u32)>',
    transactionVersion: 'u32',
    stateVersion: 'u8'
  },
  /**
   * Lookup148: frame_system::pallet::Error<T>
   **/
  FrameSystemError: {
    _enum: ['InvalidSpecName', 'SpecVersionNeedsToIncrease', 'FailedToExtractRuntimeVersion', 'NonDefaultComposite', 'NonZeroRefCount', 'CallFiltered', 'StorageQueueFull']
  },
  /**
   * Lookup149: polkadot_primitives::v2::PersistedValidationData<primitive_types::H256, N>
   **/
  PolkadotPrimitivesV2PersistedValidationData: {
    parentHead: 'Bytes',
    relayParentNumber: 'u32',
    relayParentStorageRoot: 'H256',
    maxPovSize: 'u32'
  },
  /**
   * Lookup152: polkadot_primitives::v2::UpgradeRestriction
   **/
  PolkadotPrimitivesV2UpgradeRestriction: {
    _enum: ['Present']
  },
  /**
   * Lookup153: sp_trie::storage_proof::StorageProof
   **/
  SpTrieStorageProof: {
    trieNodes: 'BTreeSet<Bytes>'
  },
  /**
   * Lookup155: cumulus_pallet_parachain_system::relay_state_snapshot::MessagingStateSnapshot
   **/
  CumulusPalletParachainSystemRelayStateSnapshotMessagingStateSnapshot: {
    dmqMqcHead: 'H256',
    relayDispatchQueueSize: '(u32,u32)',
    ingressChannels: 'Vec<(u32,PolkadotPrimitivesV2AbridgedHrmpChannel)>',
    egressChannels: 'Vec<(u32,PolkadotPrimitivesV2AbridgedHrmpChannel)>'
  },
  /**
   * Lookup158: polkadot_primitives::v2::AbridgedHrmpChannel
   **/
  PolkadotPrimitivesV2AbridgedHrmpChannel: {
    maxCapacity: 'u32',
    maxTotalSize: 'u32',
    maxMessageSize: 'u32',
    msgCount: 'u32',
    totalSize: 'u32',
    mqcHead: 'Option<H256>'
  },
  /**
   * Lookup159: polkadot_primitives::v2::AbridgedHostConfiguration
   **/
  PolkadotPrimitivesV2AbridgedHostConfiguration: {
    maxCodeSize: 'u32',
    maxHeadDataSize: 'u32',
    maxUpwardQueueCount: 'u32',
    maxUpwardQueueSize: 'u32',
    maxUpwardMessageSize: 'u32',
    maxUpwardMessageNumPerCandidate: 'u32',
    hrmpMaxMessageNumPerCandidate: 'u32',
    validationUpgradeCooldown: 'u32',
    validationUpgradeDelay: 'u32'
  },
  /**
   * Lookup165: polkadot_core_primitives::OutboundHrmpMessage<polkadot_parachain::primitives::Id>
   **/
  PolkadotCorePrimitivesOutboundHrmpMessage: {
    recipient: 'u32',
    data: 'Bytes'
  },
  /**
   * Lookup166: cumulus_pallet_parachain_system::pallet::Call<T>
   **/
  CumulusPalletParachainSystemCall: {
    _enum: {
      set_validation_data: {
        data: 'CumulusPrimitivesParachainInherentParachainInherentData',
      },
      sudo_send_upward_message: {
        message: 'Bytes',
      },
      authorize_upgrade: {
        codeHash: 'H256',
      },
      enact_authorized_upgrade: {
        code: 'Bytes'
      }
    }
  },
  /**
   * Lookup167: cumulus_primitives_parachain_inherent::ParachainInherentData
   **/
  CumulusPrimitivesParachainInherentParachainInherentData: {
    validationData: 'PolkadotPrimitivesV2PersistedValidationData',
    relayChainState: 'SpTrieStorageProof',
    downwardMessages: 'Vec<PolkadotCorePrimitivesInboundDownwardMessage>',
    horizontalMessages: 'BTreeMap<u32, Vec<PolkadotCorePrimitivesInboundHrmpMessage>>'
  },
  /**
   * Lookup169: polkadot_core_primitives::InboundDownwardMessage<BlockNumber>
   **/
  PolkadotCorePrimitivesInboundDownwardMessage: {
    sentAt: 'u32',
    msg: 'Bytes'
  },
  /**
   * Lookup172: polkadot_core_primitives::InboundHrmpMessage<BlockNumber>
   **/
  PolkadotCorePrimitivesInboundHrmpMessage: {
    sentAt: 'u32',
    data: 'Bytes'
  },
  /**
   * Lookup175: cumulus_pallet_parachain_system::pallet::Error<T>
   **/
  CumulusPalletParachainSystemError: {
    _enum: ['OverlappingUpgrades', 'ProhibitedByPolkadot', 'TooBig', 'ValidationDataNotAvailable', 'HostConfigurationNotAvailable', 'NotScheduled', 'NothingAuthorized', 'Unauthorized', 'UpgradeBlockedByMaintenanceMode']
  },
  /**
   * Lookup176: pallet_timestamp::pallet::Call<T>
   **/
  PalletTimestampCall: {
    _enum: {
      set: {
        now: 'Compact<u64>'
      }
    }
  },
  /**
   * Lookup179: orml_tokens::BalanceLock<Balance>
   **/
  OrmlTokensBalanceLock: {
    id: '[u8;8]',
    amount: 'u128'
  },
  /**
   * Lookup181: orml_tokens::AccountData<Balance>
   **/
  OrmlTokensAccountData: {
    free: 'u128',
    reserved: 'u128',
    frozen: 'u128'
  },
  /**
   * Lookup183: orml_tokens::ReserveData<ReserveIdentifier, Balance>
   **/
  OrmlTokensReserveData: {
    id: '[u8;8]',
    amount: 'u128'
  },
  /**
   * Lookup185: orml_tokens::module::Call<T>
   **/
  OrmlTokensModuleCall: {
    _enum: {
      transfer: {
        dest: 'MultiAddress',
        currencyId: 'u32',
        amount: 'Compact<u128>',
      },
      transfer_all: {
        dest: 'MultiAddress',
        currencyId: 'u32',
        keepAlive: 'bool',
      },
      transfer_keep_alive: {
        dest: 'MultiAddress',
        currencyId: 'u32',
        amount: 'Compact<u128>',
      },
      force_transfer: {
        source: 'MultiAddress',
        dest: 'MultiAddress',
        currencyId: 'u32',
        amount: 'Compact<u128>',
      },
      set_balance: {
        who: 'MultiAddress',
        currencyId: 'u32',
        newFree: 'Compact<u128>',
        newReserved: 'Compact<u128>',
      },
      create: {
        who: 'MultiAddress',
        amount: 'Compact<u128>',
      },
      mint: {
        currencyId: 'u32',
        who: 'MultiAddress',
        amount: 'Compact<u128>'
      }
    }
  },
  /**
   * Lookup188: orml_tokens::module::Error<T>
   **/
  OrmlTokensModuleError: {
    _enum: ['BalanceTooLow', 'AmountIntoBalanceFailed', 'LiquidityRestrictions', 'MaxLocksExceeded', 'KeepAlive', 'ExistentialDeposit', 'DeadAccount', 'TokenIdNotExists', 'TooManyReserves']
  },
  /**
   * Lookup190: pallet_transaction_payment::Releases
   **/
  PalletTransactionPaymentReleases: {
    _enum: ['V1Ancient', 'V2']
  },
  /**
   * Lookup193: pallet_xyk::RewardInfo
   **/
  PalletXykRewardInfo: {
    activatedAmount: 'u128',
    rewardsNotYetClaimed: 'u128',
    rewardsAlreadyClaimed: 'u128',
    lastCheckpoint: 'u32',
    poolRatioAtLastCheckpoint: 'U256',
    missingAtLastCheckpoint: 'U256'
  },
  /**
   * Lookup197: pallet_xyk::pallet::Call<T>
   **/
  PalletXykCall: {
    _enum: {
      create_pool: {
        firstAssetId: 'u32',
        firstAssetAmount: 'u128',
        secondAssetId: 'u32',
        secondAssetAmount: 'u128',
      },
      sell_asset: {
        soldAssetId: 'u32',
        boughtAssetId: 'u32',
        soldAssetAmount: 'u128',
        minAmountOut: 'u128',
      },
      multiswap_sell_asset: {
        swapTokenList: 'Vec<u32>',
        soldAssetAmount: 'u128',
        minAmountOut: 'u128',
      },
      buy_asset: {
        soldAssetId: 'u32',
        boughtAssetId: 'u32',
        boughtAssetAmount: 'u128',
        maxAmountIn: 'u128',
      },
      multiswap_buy_asset: {
        swapTokenList: 'Vec<u32>',
        boughtAssetAmount: 'u128',
        maxAmountIn: 'u128',
      },
      mint_liquidity_using_vesting_native_tokens_by_vesting_index: {
        nativeAssetVestingIndex: 'u32',
        vestingNativeAssetUnlockSomeAmountOrAll: 'Option<u128>',
        secondAssetId: 'u32',
        expectedSecondAssetAmount: 'u128',
      },
      mint_liquidity_using_vesting_native_tokens: {
        vestingNativeAssetAmount: 'u128',
        secondAssetId: 'u32',
        expectedSecondAssetAmount: 'u128',
      },
      mint_liquidity: {
        firstAssetId: 'u32',
        secondAssetId: 'u32',
        firstAssetAmount: 'u128',
        expectedSecondAssetAmount: 'u128',
      },
      compound_rewards: {
        liquidityAssetId: 'u32',
        amountPermille: 'Permill',
      },
      provide_liquidity_with_conversion: {
        liquidityAssetId: 'u32',
        providedAssetId: 'u32',
        providedAssetAmount: 'u128',
      },
      burn_liquidity: {
        firstAssetId: 'u32',
        secondAssetId: 'u32',
        liquidityAssetAmount: 'u128',
      },
      claim_rewards_v2: {
        liquidityTokenId: 'u32',
        amount: 'u128',
      },
      claim_rewards_all_v2: {
        liquidityTokenId: 'u32',
      },
      update_pool_promotion: {
        liquidityTokenId: 'u32',
        liquidityMiningIssuanceWeight: 'u8',
      },
      activate_liquidity_v2: {
        liquidityTokenId: 'u32',
        amount: 'u128',
        useBalanceFrom: 'Option<MpMultipurposeLiquidityActivateKind>',
      },
      deactivate_liquidity_v2: {
        liquidityTokenId: 'u32',
        amount: 'u128'
      }
    }
  },
  /**
   * Lookup201: mp_multipurpose_liquidity::ActivateKind
   **/
  MpMultipurposeLiquidityActivateKind: {
    _enum: ['AvailableBalance', 'StakedUnactivatedReserves', 'UnspentReserves']
  },
  /**
   * Lookup202: pallet_xyk::pallet::Error<T>
   **/
  PalletXykError: {
    _enum: ['PoolAlreadyExists', 'NotEnoughAssets', 'NoSuchPool', 'NoSuchLiquidityAsset', 'NotEnoughReserve', 'ZeroAmount', 'InsufficientInputAmount', 'InsufficientOutputAmount', 'SameAsset', 'AssetAlreadyExists', 'AssetDoesNotExists', 'DivisionByZero', 'UnexpectedFailure', 'NotMangataLiquidityAsset', 'SecondAssetAmountExceededExpectations', 'MathOverflow', 'LiquidityTokenCreationFailed', 'NotEnoughRewardsEarned', 'NotAPromotedPool', 'PastTimeCalculation', 'PoolAlreadyPromoted', 'SoldAmountTooLow', 'FunctionNotAvailableForThisToken', 'DisallowedPool', 'LiquidityCheckpointMathError', 'CalculateRewardsMathError', 'CalculateCumulativeWorkMaxRatioMathError', 'CalculateRewardsAllMathError', 'NoRights', 'NonSlippageMultiSwapFailure', 'MultiswapShouldBeAtleastTwoHops', 'MultiBuyAssetCantHaveSamePoolAtomicSwaps', 'MultiSwapFailedOnBadSlippage', 'MultiSwapNotEnoughAssets', 'MultiSwapCantHaveSameTokenConsequetively', 'TradingBlockedByMaintenanceMode']
  },
  /**
   * Lookup203: pallet_fee_lock::pallet::FeeLockMetadataInfo<T>
   **/
  PalletFeeLockFeeLockMetadataInfo: {
    periodLength: 'u32',
    feeLockAmount: 'u128',
    swapValueThreshold: 'u128',
    whitelistedTokens: 'BTreeSet<u32>'
  },
  /**
   * Lookup206: pallet_fee_lock::pallet::AccountFeeLockDataInfo<BlockNumber>
   **/
  PalletFeeLockAccountFeeLockDataInfo: {
    totalFeeLockAmount: 'u128',
    lastFeeLockBlock: 'u32'
  },
  /**
   * Lookup207: pallet_fee_lock::pallet::Call<T>
   **/
  PalletFeeLockCall: {
    _enum: {
      update_fee_lock_metadata: {
        periodLength: 'Option<u32>',
        feeLockAmount: 'Option<u128>',
        swapValueThreshold: 'Option<u128>',
        shouldBeWhitelisted: 'Option<Vec<(u32,bool)>>',
      },
      unlock_fee: 'Null'
    }
  },
  /**
   * Lookup211: pallet_fee_lock::pallet::Error<T>
   **/
  PalletFeeLockError: {
    _enum: ['FeeLocksIncorrectlyInitialzed', 'InvalidFeeLockMetadata', 'FeeLocksNotInitialized', 'NotFeeLocked', 'CantUnlockFeeYet', 'MaxCuratedTokensLimitExceeded', 'UnexpectedFailure']
  },
  /**
   * Lookup213: pallet_vesting_mangata::vesting_info::VestingInfo<Balance, BlockNumber>
   **/
  PalletVestingMangataVestingInfo: {
    locked: 'u128',
    perBlock: 'u128',
    startingBlock: 'u32'
  },
  /**
   * Lookup215: pallet_vesting_mangata::Releases
   **/
  PalletVestingMangataReleases: {
    _enum: ['V0', 'V1']
  },
  /**
   * Lookup216: pallet_vesting_mangata::pallet::Call<T>
   **/
  PalletVestingMangataCall: {
    _enum: {
      vest: {
        tokenId: 'u32',
      },
      vest_other: {
        tokenId: 'u32',
        target: 'MultiAddress',
      },
      force_vested_transfer: {
        tokenId: 'u32',
        source: 'MultiAddress',
        target: 'MultiAddress',
        schedule: 'PalletVestingMangataVestingInfo',
      },
      merge_schedules: {
        tokenId: 'u32',
        schedule1Index: 'u32',
        schedule2Index: 'u32',
      },
      sudo_unlock_all_vesting_tokens: {
        target: 'MultiAddress',
        tokenId: 'u32'
      }
    }
  },
  /**
   * Lookup217: pallet_vesting_mangata::pallet::Error<T>
   **/
  PalletVestingMangataError: {
    _enum: ['NotVesting', 'AtMaxVestingSchedules', 'AmountLow', 'ScheduleIndexOutOfBounds', 'InvalidScheduleParams', 'NoSuitableScheduleFound', 'SudoUnlockIsDisallowed', 'InvalidVestingIndex', 'MathError']
  },
  /**
   * Lookup218: pallet_crowdloan_rewards::pallet::RewardInfo<T>
   **/
  PalletCrowdloanRewardsRewardInfo: {
    totalReward: 'u128',
    claimedReward: 'u128',
    contributedRelayAddresses: 'Vec<AccountId32>'
  },
  /**
   * Lookup219: pallet_crowdloan_rewards::pallet::Call<T>
   **/
  PalletCrowdloanRewardsCall: {
    _enum: {
      associate_native_identity: {
        rewardAccount: 'AccountId32',
        relayAccount: 'AccountId32',
        proof: 'SpRuntimeMultiSignature',
      },
      change_association_with_relay_keys: {
        rewardAccount: 'AccountId32',
        previousAccount: 'AccountId32',
        proofs: 'Vec<(AccountId32,SpRuntimeMultiSignature)>',
      },
      claim: 'Null',
      update_reward_address: {
        newRewardAccount: 'AccountId32',
      },
      complete_initialization: {
        leaseEndingBlock: 'u32',
      },
      set_crowdloan_allocation: {
        crowdloanAllocationAmount: 'u128',
      },
      initialize_reward_vec: {
        rewards: 'Vec<(AccountId32,Option<AccountId32>,u128)>'
      }
    }
  },
  /**
   * Lookup220: sp_runtime::MultiSignature
   **/
  SpRuntimeMultiSignature: {
    _enum: {
      Ed25519: 'SpCoreEd25519Signature',
      Sr25519: 'SpCoreSr25519Signature',
      Ecdsa: 'SpCoreEcdsaSignature'
    }
  },
  /**
   * Lookup221: sp_core::ed25519::Signature
   **/
  SpCoreEd25519Signature: '[u8;64]',
  /**
   * Lookup223: sp_core::sr25519::Signature
   **/
  SpCoreSr25519Signature: '[u8;64]',
  /**
   * Lookup224: sp_core::ecdsa::Signature
   **/
  SpCoreEcdsaSignature: '[u8;65]',
  /**
   * Lookup230: pallet_crowdloan_rewards::pallet::Error<T>
   **/
  PalletCrowdloanRewardsError: {
    _enum: ['AlreadyAssociated', 'BatchBeyondFundPot', 'FirstClaimAlreadyDone', 'RewardNotHighEnough', 'InvalidClaimSignature', 'InvalidFreeClaimSignature', 'NoAssociatedClaim', 'RewardsAlreadyClaimed', 'RewardVecAlreadyInitialized', 'RewardVecNotFullyInitializedYet', 'RewardsDoNotMatchFund', 'TooManyContributors', 'VestingPeriodNonValid', 'NonContributedAddressProvided', 'InsufficientNumberOfValidProofs', 'ClaimingLessThanED']
  },
  /**
   * Lookup233: pallet_issuance::pallet::PromotedPoolsRewardsInfo
   **/
  PalletIssuancePromotedPoolsRewardsInfo: {
    weight: 'u8',
    rewards: 'U256'
  },
  /**
   * Lookup236: pallet_issuance::pallet::Call<T>
   **/
  PalletIssuanceCall: {
    _enum: {
      init_issuance_config: 'Null',
      finalize_tge: 'Null',
      execute_tge: {
        tgeInfos: 'Vec<PalletIssuanceTgeInfo>'
      }
    }
  },
  /**
   * Lookup239: pallet_issuance::pallet::Error<T>
   **/
  PalletIssuanceError: {
    _enum: ['IssuanceConfigAlreadyInitialized', 'IssuanceConfigNotInitialized', 'TGENotFinalized', 'TGEIsAlreadyFinalized', 'IssuanceConfigInvalid', 'MathError', 'UnknownPool']
  },
  /**
   * Lookup241: pallet_authorship::UncleEntryItem<BlockNumber, primitive_types::H256, sp_core::crypto::AccountId32>
   **/
  PalletAuthorshipUncleEntryItem: {
    _enum: {
      InclusionHeight: 'u32',
      Uncle: '(H256,Option<AccountId32>)'
    }
  },
  /**
   * Lookup243: pallet_authorship::pallet::Call<T>
   **/
  PalletAuthorshipCall: {
    _enum: {
      set_uncles: {
        newUncles: 'Vec<SpRuntimeHeaderVerHeader>'
      }
    }
  },
  /**
   * Lookup245: sp_runtime::generic::header_ver::Header<Number, sp_runtime::traits::BlakeTwo256>
   **/
  SpRuntimeHeaderVerHeader: {
    parentHash: 'H256',
    number: 'Compact<u32>',
    stateRoot: 'H256',
    extrinsicsRoot: 'H256',
    digest: 'SpRuntimeDigest',
    seed: 'SpCoreSeedShufflingSeed',
    count: 'u32'
  },
  /**
   * Lookup246: sp_runtime::traits::BlakeTwo256
   **/
  SpRuntimeBlakeTwo256: 'Null',
  /**
   * Lookup247: sp_core::seed::ShufflingSeed
   **/
  SpCoreSeedShufflingSeed: {
    seed: 'H256',
    proof: 'H512'
  },
  /**
   * Lookup249: pallet_authorship::pallet::Error<T>
   **/
  PalletAuthorshipError: {
    _enum: ['InvalidUncleParent', 'UnclesAlreadySet', 'TooManyUncles', 'GenesisUncle', 'TooHighUncle', 'UncleAlreadyIncluded', 'OldUncle']
  },
  /**
   * Lookup250: parachain_staking::pallet::RoundInfo<BlockNumber>
   **/
  ParachainStakingRoundInfo: {
    current: 'u32',
    first: 'u32',
    length: 'u32'
  },
  /**
   * Lookup251: parachain_staking::pallet::Delegator<sp_core::crypto::AccountId32>
   **/
  ParachainStakingDelegator: {
    id: 'AccountId32',
    delegations: 'ParachainStakingSetOrderedSetBond',
    requests: 'ParachainStakingPendingDelegationRequests',
    status: 'ParachainStakingDelegatorStatus'
  },
  /**
   * Lookup252: parachain_staking::set::OrderedSet<parachain_staking::pallet::Bond<sp_core::crypto::AccountId32>>
   **/
  ParachainStakingSetOrderedSetBond: 'Vec<ParachainStakingBond>',
  /**
   * Lookup253: parachain_staking::pallet::Bond<sp_core::crypto::AccountId32>
   **/
  ParachainStakingBond: {
    owner: 'AccountId32',
    amount: 'u128',
    liquidityToken: 'u32'
  },
  /**
   * Lookup255: parachain_staking::pallet::PendingDelegationRequests<sp_core::crypto::AccountId32>
   **/
  ParachainStakingPendingDelegationRequests: {
    requests: 'BTreeMap<AccountId32, ParachainStakingDelegationRequest>'
  },
  /**
   * Lookup259: parachain_staking::pallet::DelegatorStatus
   **/
  ParachainStakingDelegatorStatus: {
    _enum: {
      Active: 'Null',
      Leaving: 'u32'
    }
  },
  /**
   * Lookup260: parachain_staking::pallet::CollatorCandidate<sp_core::crypto::AccountId32>
   **/
  ParachainStakingCollatorCandidate: {
    id: 'AccountId32',
    bond: 'u128',
    liquidityToken: 'u32',
    delegators: 'ParachainStakingSetOrderedSetAccountId32',
    topDelegations: 'Vec<ParachainStakingBond>',
    bottomDelegations: 'Vec<ParachainStakingBond>',
    totalCounted: 'u128',
    totalBacking: 'u128',
    request: 'Option<ParachainStakingCandidateBondRequest>',
    state: 'ParachainStakingCollatorStatus'
  },
  /**
   * Lookup261: parachain_staking::set::OrderedSet<sp_core::crypto::AccountId32>
   **/
  ParachainStakingSetOrderedSetAccountId32: 'Vec<AccountId32>',
  /**
   * Lookup263: parachain_staking::pallet::CollatorStatus
   **/
  ParachainStakingCollatorStatus: {
    _enum: {
      Active: 'Null',
      Idle: 'Null',
      Leaving: 'u32'
    }
  },
  /**
   * Lookup265: parachain_staking::pallet::CollatorSnapshot<sp_core::crypto::AccountId32>
   **/
  ParachainStakingCollatorSnapshot: {
    bond: 'u128',
    delegations: 'Vec<ParachainStakingBond>',
    total: 'u128',
    liquidityToken: 'u32'
  },
  /**
   * Lookup269: parachain_staking::pallet::Call<T>
   **/
  ParachainStakingCall: {
    _enum: {
      set_total_selected: {
        _alias: {
          new_: 'new',
        },
        new_: 'u32',
      },
      set_collator_commission: {
        _alias: {
          new_: 'new',
        },
        new_: 'Perbill',
      },
      join_candidates: {
        bond: 'u128',
        liquidityToken: 'u32',
        useBalanceFrom: 'Option<MpMultipurposeLiquidityBondKind>',
        candidateCount: 'u32',
        liquidityTokenCount: 'u32',
      },
      schedule_leave_candidates: {
        candidateCount: 'u32',
      },
      execute_leave_candidates: {
        candidate: 'AccountId32',
        candidateDelegationCount: 'u32',
      },
      cancel_leave_candidates: {
        candidateCount: 'u32',
      },
      go_offline: 'Null',
      go_online: 'Null',
      schedule_candidate_bond_more: {
        more: 'u128',
        useBalanceFrom: 'Option<MpMultipurposeLiquidityBondKind>',
      },
      schedule_candidate_bond_less: {
        less: 'u128',
      },
      execute_candidate_bond_request: {
        candidate: 'AccountId32',
        useBalanceFrom: 'Option<MpMultipurposeLiquidityBondKind>',
      },
      cancel_candidate_bond_request: 'Null',
      delegate: {
        collator: 'AccountId32',
        amount: 'u128',
        useBalanceFrom: 'Option<MpMultipurposeLiquidityBondKind>',
        candidateDelegationCount: 'u32',
        delegationCount: 'u32',
      },
      schedule_leave_delegators: 'Null',
      execute_leave_delegators: {
        delegator: 'AccountId32',
        delegationCount: 'u32',
      },
      cancel_leave_delegators: 'Null',
      schedule_revoke_delegation: {
        collator: 'AccountId32',
      },
      schedule_delegator_bond_more: {
        candidate: 'AccountId32',
        more: 'u128',
        useBalanceFrom: 'Option<MpMultipurposeLiquidityBondKind>',
      },
      schedule_delegator_bond_less: {
        candidate: 'AccountId32',
        less: 'u128',
      },
      execute_delegation_request: {
        delegator: 'AccountId32',
        candidate: 'AccountId32',
        useBalanceFrom: 'Option<MpMultipurposeLiquidityBondKind>',
      },
      cancel_delegation_request: {
        candidate: 'AccountId32',
      },
      add_staking_liquidity_token: {
        pairedOrLiquidityToken: 'ParachainStakingPairedOrLiquidityToken',
        currentLiquidityTokens: 'u32',
      },
      remove_staking_liquidity_token: {
        pairedOrLiquidityToken: 'ParachainStakingPairedOrLiquidityToken',
        currentLiquidityTokens: 'u32'
      }
    }
  },
  /**
   * Lookup271: mp_multipurpose_liquidity::BondKind
   **/
  MpMultipurposeLiquidityBondKind: {
    _enum: ['AvailableBalance', 'ActivatedUnstakedReserves', 'UnspentReserves']
  },
  /**
   * Lookup272: parachain_staking::pallet::PairedOrLiquidityToken
   **/
  ParachainStakingPairedOrLiquidityToken: {
    _enum: {
      Paired: 'u32',
      Liquidity: 'u32'
    }
  },
  /**
   * Lookup273: parachain_staking::pallet::Error<T>
   **/
  ParachainStakingError: {
    _enum: ['DelegatorDNE', 'DelegatorDNEinTopNorBottom', 'DelegatorDNEInDelegatorSet', 'CandidateDNE', 'DelegationDNE', 'DelegatorExists', 'CandidateExists', 'CandidateBondBelowMin', 'InsufficientBalance', 'DelegationBelowMin', 'AlreadyOffline', 'AlreadyActive', 'DelegatorAlreadyLeaving', 'DelegatorNotLeaving', 'DelegatorCannotLeaveYet', 'CannotDelegateIfLeaving', 'CandidateAlreadyLeaving', 'CandidateNotLeaving', 'CandidateCannotLeaveYet', 'CannotGoOnlineIfLeaving', 'ExceedMaxDelegationsPerDelegator', 'AlreadyDelegatedCandidate', 'InvalidSchedule', 'CannotSetBelowMin', 'NoWritingSameValue', 'TooLowCandidateCountWeightHintJoinCandidates', 'TooLowCandidateCountWeightHintCancelLeaveCandidates', 'TooLowCandidateCountToLeaveCandidates', 'TooLowDelegationCountToDelegate', 'TooLowCandidateDelegationCountToDelegate', 'TooLowDelegationCountToLeaveDelegators', 'PendingCandidateRequestsDNE', 'PendingCandidateRequestAlreadyExists', 'PendingCandidateRequestNotDueYet', 'PendingDelegationRequestDNE', 'PendingDelegationRequestAlreadyExists', 'PendingDelegationRequestNotDueYet', 'StakingLiquidityTokenNotListed', 'TooLowCurrentStakingLiquidityTokensCount', 'StakingLiquidityTokenAlreadyListed', 'ExceedMaxCollatorCandidates', 'ExceedMaxTotalDelegatorsPerCandidate', 'MathError']
  },
  /**
   * Lookup276: mangata_kusama_runtime::SessionKeys
   **/
  MangataKusamaRuntimeSessionKeys: {
    aura: 'SpConsensusAuraSr25519AppSr25519Public'
  },
  /**
   * Lookup277: sp_consensus_aura::sr25519::app_sr25519::Public
   **/
  SpConsensusAuraSr25519AppSr25519Public: 'SpCoreSr25519Public',
  /**
   * Lookup278: sp_core::sr25519::Public
   **/
  SpCoreSr25519Public: '[u8;32]',
  /**
   * Lookup280: sp_core::crypto::KeyTypeId
   **/
  SpCoreCryptoKeyTypeId: '[u8;4]',
  /**
   * Lookup281: pallet_session::pallet::Call<T>
   **/
  PalletSessionCall: {
    _enum: {
      set_keys: {
        _alias: {
          keys_: 'keys',
        },
        keys_: 'MangataKusamaRuntimeSessionKeys',
        proof: 'Bytes',
      },
      purge_keys: 'Null'
    }
  },
  /**
   * Lookup282: pallet_session::pallet::Error<T>
   **/
  PalletSessionError: {
    _enum: ['InvalidProof', 'NoAssociatedValidatorId', 'DuplicatedKey', 'NoKeys', 'NoAccount']
  },
  /**
   * Lookup286: pallet_multipurpose_liquidity::pallet::ReserveStatusInfo
   **/
  PalletMultipurposeLiquidityReserveStatusInfo: {
    stakedUnactivatedReserves: 'u128',
    activatedUnstakedReserves: 'u128',
    stakedAndActivatedReserves: 'u128',
    unspentReserves: 'u128',
    relockAmount: 'u128'
  },
  /**
   * Lookup288: pallet_multipurpose_liquidity::pallet::RelockStatusInfo
   **/
  PalletMultipurposeLiquidityRelockStatusInfo: {
    amount: 'u128',
    startingBlock: 'u32',
    endingBlockAsBalance: 'u128'
  },
  /**
   * Lookup290: pallet_multipurpose_liquidity::pallet::Call<T>
   **/
  PalletMultipurposeLiquidityCall: {
    _enum: {
      reserve_vesting_liquidity_tokens_by_vesting_index: {
        liquidityTokenId: 'u32',
        liquidityTokenVestingIndex: 'u32',
        liquidityTokenUnlockSomeAmountOrAll: 'Option<u128>',
      },
      reserve_vesting_liquidity_tokens: {
        liquidityTokenId: 'u32',
        liquidityTokenAmount: 'u128',
      },
      unreserve_and_relock_instance: {
        liquidityTokenId: 'u32',
        relockInstanceIndex: 'u32'
      }
    }
  },
  /**
   * Lookup291: pallet_multipurpose_liquidity::pallet::Error<T>
   **/
  PalletMultipurposeLiquidityError: {
    _enum: ['NotALiquidityToken', 'RelockCountLimitExceeded', 'RelockInstanceIndexOOB', 'NotEnoughUnspentReserves', 'NotEnoughTokens', 'MathError']
  },
  /**
   * Lookup293: cumulus_pallet_xcmp_queue::InboundChannelDetails
   **/
  CumulusPalletXcmpQueueInboundChannelDetails: {
    sender: 'u32',
    state: 'CumulusPalletXcmpQueueInboundState',
    messageMetadata: 'Vec<(u32,PolkadotParachainPrimitivesXcmpMessageFormat)>'
  },
  /**
   * Lookup294: cumulus_pallet_xcmp_queue::InboundState
   **/
  CumulusPalletXcmpQueueInboundState: {
    _enum: ['Ok', 'Suspended']
  },
  /**
   * Lookup297: polkadot_parachain::primitives::XcmpMessageFormat
   **/
  PolkadotParachainPrimitivesXcmpMessageFormat: {
    _enum: ['ConcatenatedVersionedXcm', 'ConcatenatedEncodedBlob', 'Signals']
  },
  /**
   * Lookup300: cumulus_pallet_xcmp_queue::OutboundChannelDetails
   **/
  CumulusPalletXcmpQueueOutboundChannelDetails: {
    recipient: 'u32',
    state: 'CumulusPalletXcmpQueueOutboundState',
    signalsExist: 'bool',
    firstIndex: 'u16',
    lastIndex: 'u16'
  },
  /**
   * Lookup301: cumulus_pallet_xcmp_queue::OutboundState
   **/
  CumulusPalletXcmpQueueOutboundState: {
    _enum: ['Ok', 'Suspended']
  },
  /**
   * Lookup303: cumulus_pallet_xcmp_queue::QueueConfigData
   **/
  CumulusPalletXcmpQueueQueueConfigData: {
    suspendThreshold: 'u32',
    dropThreshold: 'u32',
    resumeThreshold: 'u32',
    thresholdWeight: 'SpWeightsWeightV2Weight',
    weightRestrictDecay: 'SpWeightsWeightV2Weight',
    xcmpMaxIndividualWeight: 'SpWeightsWeightV2Weight'
  },
  /**
   * Lookup305: cumulus_pallet_xcmp_queue::pallet::Call<T>
   **/
  CumulusPalletXcmpQueueCall: {
    _enum: {
      service_overweight: {
        index: 'u64',
        weightLimit: 'u64',
      },
      suspend_xcm_execution: 'Null',
      resume_xcm_execution: 'Null',
      update_suspend_threshold: {
        _alias: {
          new_: 'new',
        },
        new_: 'u32',
      },
      update_drop_threshold: {
        _alias: {
          new_: 'new',
        },
        new_: 'u32',
      },
      update_resume_threshold: {
        _alias: {
          new_: 'new',
        },
        new_: 'u32',
      },
      update_threshold_weight: {
        _alias: {
          new_: 'new',
        },
        new_: 'u64',
      },
      update_weight_restrict_decay: {
        _alias: {
          new_: 'new',
        },
        new_: 'u64',
      },
      update_xcmp_max_individual_weight: {
        _alias: {
          new_: 'new',
        },
        new_: 'u64'
      }
    }
  },
  /**
   * Lookup306: cumulus_pallet_xcmp_queue::pallet::Error<T>
   **/
  CumulusPalletXcmpQueueError: {
    _enum: ['FailedToSend', 'BadXcmOrigin', 'BadXcm', 'BadOverweightIndex', 'WeightOverLimit', 'XcmMsgProcessingBlockedByMaintenanceMode']
  },
  /**
   * Lookup307: pallet_xcm::pallet::QueryStatus<BlockNumber>
   **/
  PalletXcmQueryStatus: {
    _enum: {
      Pending: {
        responder: 'XcmVersionedMultiLocation',
        maybeNotify: 'Option<(u8,u8)>',
        timeout: 'u32',
      },
      VersionNotifier: {
        origin: 'XcmVersionedMultiLocation',
        isActive: 'bool',
      },
      Ready: {
        response: 'XcmVersionedResponse',
        at: 'u32'
      }
    }
  },
  /**
   * Lookup310: xcm::VersionedResponse
   **/
  XcmVersionedResponse: {
    _enum: {
      V0: 'XcmV0Response',
      V1: 'XcmV1Response',
      V2: 'XcmV2Response'
    }
  },
  /**
   * Lookup311: xcm::v0::Response
   **/
  XcmV0Response: {
    _enum: {
      Assets: 'Vec<XcmV0MultiAsset>'
    }
  },
  /**
   * Lookup312: xcm::v1::Response
   **/
  XcmV1Response: {
    _enum: {
      Assets: 'XcmV1MultiassetMultiAssets',
      Version: 'u32'
    }
  },
  /**
   * Lookup318: pallet_xcm::pallet::VersionMigrationStage
   **/
  PalletXcmVersionMigrationStage: {
    _enum: {
      MigrateSupportedVersion: 'Null',
      MigrateVersionNotifiers: 'Null',
      NotifyCurrentTargets: 'Option<Bytes>',
      MigrateAndNotifyOldTargets: 'Null'
    }
  },
  /**
   * Lookup320: pallet_xcm::pallet::Call<T>
   **/
  PalletXcmCall: {
    _enum: {
      send: {
        dest: 'XcmVersionedMultiLocation',
        message: 'XcmVersionedXcm',
      },
      teleport_assets: {
        dest: 'XcmVersionedMultiLocation',
        beneficiary: 'XcmVersionedMultiLocation',
        assets: 'XcmVersionedMultiAssets',
        feeAssetItem: 'u32',
      },
      reserve_transfer_assets: {
        dest: 'XcmVersionedMultiLocation',
        beneficiary: 'XcmVersionedMultiLocation',
        assets: 'XcmVersionedMultiAssets',
        feeAssetItem: 'u32',
      },
      execute: {
        message: 'XcmVersionedXcm',
        maxWeight: 'u64',
      },
      force_xcm_version: {
        location: 'XcmV1MultiLocation',
        xcmVersion: 'u32',
      },
      force_default_xcm_version: {
        maybeXcmVersion: 'Option<u32>',
      },
      force_subscribe_version_notify: {
        location: 'XcmVersionedMultiLocation',
      },
      force_unsubscribe_version_notify: {
        location: 'XcmVersionedMultiLocation',
      },
      limited_reserve_transfer_assets: {
        dest: 'XcmVersionedMultiLocation',
        beneficiary: 'XcmVersionedMultiLocation',
        assets: 'XcmVersionedMultiAssets',
        feeAssetItem: 'u32',
        weightLimit: 'XcmV2WeightLimit',
      },
      limited_teleport_assets: {
        dest: 'XcmVersionedMultiLocation',
        beneficiary: 'XcmVersionedMultiLocation',
        assets: 'XcmVersionedMultiAssets',
        feeAssetItem: 'u32',
        weightLimit: 'XcmV2WeightLimit'
      }
    }
  },
  /**
   * Lookup321: xcm::VersionedXcm<RuntimeCall>
   **/
  XcmVersionedXcm: {
    _enum: {
      V0: 'XcmV0Xcm',
      V1: 'XcmV1Xcm',
      V2: 'XcmV2Xcm'
    }
  },
  /**
   * Lookup322: xcm::v0::Xcm<RuntimeCall>
   **/
  XcmV0Xcm: {
    _enum: {
      WithdrawAsset: {
        assets: 'Vec<XcmV0MultiAsset>',
        effects: 'Vec<XcmV0Order>',
      },
      ReserveAssetDeposit: {
        assets: 'Vec<XcmV0MultiAsset>',
        effects: 'Vec<XcmV0Order>',
      },
      TeleportAsset: {
        assets: 'Vec<XcmV0MultiAsset>',
        effects: 'Vec<XcmV0Order>',
      },
      QueryResponse: {
        queryId: 'Compact<u64>',
        response: 'XcmV0Response',
      },
      TransferAsset: {
        assets: 'Vec<XcmV0MultiAsset>',
        dest: 'XcmV0MultiLocation',
      },
      TransferReserveAsset: {
        assets: 'Vec<XcmV0MultiAsset>',
        dest: 'XcmV0MultiLocation',
        effects: 'Vec<XcmV0Order>',
      },
      Transact: {
        originType: 'XcmV0OriginKind',
        requireWeightAtMost: 'u64',
        call: 'XcmDoubleEncoded',
      },
      HrmpNewChannelOpenRequest: {
        sender: 'Compact<u32>',
        maxMessageSize: 'Compact<u32>',
        maxCapacity: 'Compact<u32>',
      },
      HrmpChannelAccepted: {
        recipient: 'Compact<u32>',
      },
      HrmpChannelClosing: {
        initiator: 'Compact<u32>',
        sender: 'Compact<u32>',
        recipient: 'Compact<u32>',
      },
      RelayedFrom: {
        who: 'XcmV0MultiLocation',
        message: 'XcmV0Xcm'
      }
    }
  },
  /**
   * Lookup324: xcm::v0::order::Order<RuntimeCall>
   **/
  XcmV0Order: {
    _enum: {
      Null: 'Null',
      DepositAsset: {
        assets: 'Vec<XcmV0MultiAsset>',
        dest: 'XcmV0MultiLocation',
      },
      DepositReserveAsset: {
        assets: 'Vec<XcmV0MultiAsset>',
        dest: 'XcmV0MultiLocation',
        effects: 'Vec<XcmV0Order>',
      },
      ExchangeAsset: {
        give: 'Vec<XcmV0MultiAsset>',
        receive: 'Vec<XcmV0MultiAsset>',
      },
      InitiateReserveWithdraw: {
        assets: 'Vec<XcmV0MultiAsset>',
        reserve: 'XcmV0MultiLocation',
        effects: 'Vec<XcmV0Order>',
      },
      InitiateTeleport: {
        assets: 'Vec<XcmV0MultiAsset>',
        dest: 'XcmV0MultiLocation',
        effects: 'Vec<XcmV0Order>',
      },
      QueryHolding: {
        queryId: 'Compact<u64>',
        dest: 'XcmV0MultiLocation',
        assets: 'Vec<XcmV0MultiAsset>',
      },
      BuyExecution: {
        fees: 'XcmV0MultiAsset',
        weight: 'u64',
        debt: 'u64',
        haltOnError: 'bool',
        xcm: 'Vec<XcmV0Xcm>'
      }
    }
  },
  /**
   * Lookup326: xcm::v1::Xcm<RuntimeCall>
   **/
  XcmV1Xcm: {
    _enum: {
      WithdrawAsset: {
        assets: 'XcmV1MultiassetMultiAssets',
        effects: 'Vec<XcmV1Order>',
      },
      ReserveAssetDeposited: {
        assets: 'XcmV1MultiassetMultiAssets',
        effects: 'Vec<XcmV1Order>',
      },
      ReceiveTeleportedAsset: {
        assets: 'XcmV1MultiassetMultiAssets',
        effects: 'Vec<XcmV1Order>',
      },
      QueryResponse: {
        queryId: 'Compact<u64>',
        response: 'XcmV1Response',
      },
      TransferAsset: {
        assets: 'XcmV1MultiassetMultiAssets',
        beneficiary: 'XcmV1MultiLocation',
      },
      TransferReserveAsset: {
        assets: 'XcmV1MultiassetMultiAssets',
        dest: 'XcmV1MultiLocation',
        effects: 'Vec<XcmV1Order>',
      },
      Transact: {
        originType: 'XcmV0OriginKind',
        requireWeightAtMost: 'u64',
        call: 'XcmDoubleEncoded',
      },
      HrmpNewChannelOpenRequest: {
        sender: 'Compact<u32>',
        maxMessageSize: 'Compact<u32>',
        maxCapacity: 'Compact<u32>',
      },
      HrmpChannelAccepted: {
        recipient: 'Compact<u32>',
      },
      HrmpChannelClosing: {
        initiator: 'Compact<u32>',
        sender: 'Compact<u32>',
        recipient: 'Compact<u32>',
      },
      RelayedFrom: {
        who: 'XcmV1MultilocationJunctions',
        message: 'XcmV1Xcm',
      },
      SubscribeVersion: {
        queryId: 'Compact<u64>',
        maxResponseWeight: 'Compact<u64>',
      },
      UnsubscribeVersion: 'Null'
    }
  },
  /**
   * Lookup328: xcm::v1::order::Order<RuntimeCall>
   **/
  XcmV1Order: {
    _enum: {
      Noop: 'Null',
      DepositAsset: {
        assets: 'XcmV1MultiassetMultiAssetFilter',
        maxAssets: 'u32',
        beneficiary: 'XcmV1MultiLocation',
      },
      DepositReserveAsset: {
        assets: 'XcmV1MultiassetMultiAssetFilter',
        maxAssets: 'u32',
        dest: 'XcmV1MultiLocation',
        effects: 'Vec<XcmV1Order>',
      },
      ExchangeAsset: {
        give: 'XcmV1MultiassetMultiAssetFilter',
        receive: 'XcmV1MultiassetMultiAssets',
      },
      InitiateReserveWithdraw: {
        assets: 'XcmV1MultiassetMultiAssetFilter',
        reserve: 'XcmV1MultiLocation',
        effects: 'Vec<XcmV1Order>',
      },
      InitiateTeleport: {
        assets: 'XcmV1MultiassetMultiAssetFilter',
        dest: 'XcmV1MultiLocation',
        effects: 'Vec<XcmV1Order>',
      },
      QueryHolding: {
        queryId: 'Compact<u64>',
        dest: 'XcmV1MultiLocation',
        assets: 'XcmV1MultiassetMultiAssetFilter',
      },
      BuyExecution: {
        fees: 'XcmV1MultiAsset',
        weight: 'u64',
        debt: 'u64',
        haltOnError: 'bool',
        instructions: 'Vec<XcmV1Xcm>'
      }
    }
  },
  /**
   * Lookup343: pallet_xcm::pallet::Error<T>
   **/
  PalletXcmError: {
    _enum: ['Unreachable', 'SendFailure', 'Filtered', 'UnweighableMessage', 'DestinationNotInvertible', 'Empty', 'CannotReanchor', 'TooManyAssets', 'InvalidOrigin', 'BadVersion', 'BadLocation', 'NoSubscription', 'AlreadySubscribed']
  },
  /**
   * Lookup344: cumulus_pallet_xcm::pallet::Error<T>
   **/
  CumulusPalletXcmError: 'Null',
  /**
   * Lookup345: cumulus_pallet_dmp_queue::ConfigData
   **/
  CumulusPalletDmpQueueConfigData: {
    maxIndividual: 'SpWeightsWeightV2Weight'
  },
  /**
   * Lookup346: cumulus_pallet_dmp_queue::PageIndexData
   **/
  CumulusPalletDmpQueuePageIndexData: {
    beginUsed: 'u32',
    endUsed: 'u32',
    overweightCount: 'u64'
  },
  /**
   * Lookup349: cumulus_pallet_dmp_queue::pallet::Call<T>
   **/
  CumulusPalletDmpQueueCall: {
    _enum: {
      service_overweight: {
        index: 'u64',
        weightLimit: 'u64'
      }
    }
  },
  /**
   * Lookup350: cumulus_pallet_dmp_queue::pallet::Error<T>
   **/
  CumulusPalletDmpQueueError: {
    _enum: ['Unknown', 'OverLimit', 'DmpMsgProcessingBlockedByMaintenanceMode']
  },
  /**
   * Lookup351: orml_xtokens::module::Call<T>
   **/
  OrmlXtokensModuleCall: {
    _enum: {
      transfer: {
        currencyId: 'u32',
        amount: 'u128',
        dest: 'XcmVersionedMultiLocation',
        destWeightLimit: 'XcmV2WeightLimit',
      },
      transfer_multiasset: {
        asset: 'XcmVersionedMultiAsset',
        dest: 'XcmVersionedMultiLocation',
        destWeightLimit: 'XcmV2WeightLimit',
      },
      transfer_with_fee: {
        currencyId: 'u32',
        amount: 'u128',
        fee: 'u128',
        dest: 'XcmVersionedMultiLocation',
        destWeightLimit: 'XcmV2WeightLimit',
      },
      transfer_multiasset_with_fee: {
        asset: 'XcmVersionedMultiAsset',
        fee: 'XcmVersionedMultiAsset',
        dest: 'XcmVersionedMultiLocation',
        destWeightLimit: 'XcmV2WeightLimit',
      },
      transfer_multicurrencies: {
        currencies: 'Vec<(u32,u128)>',
        feeItem: 'u32',
        dest: 'XcmVersionedMultiLocation',
        destWeightLimit: 'XcmV2WeightLimit',
      },
      transfer_multiassets: {
        assets: 'XcmVersionedMultiAssets',
        feeItem: 'u32',
        dest: 'XcmVersionedMultiLocation',
        destWeightLimit: 'XcmV2WeightLimit'
      }
    }
  },
  /**
   * Lookup352: xcm::VersionedMultiAsset
   **/
  XcmVersionedMultiAsset: {
    _enum: {
      V0: 'XcmV0MultiAsset',
      V1: 'XcmV1MultiAsset'
    }
  },
  /**
   * Lookup355: orml_xtokens::module::Error<T>
   **/
  OrmlXtokensModuleError: {
    _enum: ['AssetHasNoReserve', 'NotCrossChainTransfer', 'InvalidDest', 'NotCrossChainTransferableCurrency', 'UnweighableMessage', 'XcmExecutionFailed', 'CannotReanchor', 'InvalidAncestry', 'InvalidAsset', 'DestinationNotInvertible', 'BadVersion', 'DistinctReserveForAssetAndFee', 'ZeroFee', 'ZeroAmount', 'TooManyAssetsBeingSent', 'AssetIndexNonExistent', 'FeeNotEnough', 'NotSupportedMultiLocation', 'MinXcmFeeNotDefined']
  },
  /**
   * Lookup358: orml_unknown_tokens::module::Error<T>
   **/
  OrmlUnknownTokensModuleError: {
    _enum: ['BalanceTooLow', 'BalanceOverflow', 'UnhandledAsset']
  },
  /**
   * Lookup359: orml_xcm::module::Call<T>
   **/
  OrmlXcmModuleCall: {
    _enum: {
      send_as_sovereign: {
        dest: 'XcmVersionedMultiLocation',
        message: 'XcmVersionedXcm'
      }
    }
  },
  /**
   * Lookup360: orml_xcm::module::Error<T>
   **/
  OrmlXcmModuleError: {
    _enum: ['Unreachable', 'SendFailure', 'BadVersion']
  },
  /**
   * Lookup361: orml_asset_registry::module::Call<T>
   **/
  OrmlAssetRegistryModuleCall: {
    _enum: {
      register_asset: {
        metadata: 'OrmlTraitsAssetRegistryAssetMetadata',
        assetId: 'Option<u32>',
      },
      update_asset: {
        assetId: 'u32',
        decimals: 'Option<u32>',
        name: 'Option<Bytes>',
        symbol: 'Option<Bytes>',
        existentialDeposit: 'Option<u128>',
        location: 'Option<Option<XcmVersionedMultiLocation>>',
        additional: 'Option<MangataTypesAssetsCustomMetadata>'
      }
    }
  },
  /**
   * Lookup364: orml_asset_registry::module::Error<T>
   **/
  OrmlAssetRegistryModuleError: {
    _enum: ['AssetNotFound', 'BadVersion', 'InvalidAssetId', 'ConflictingLocation', 'ConflictingAssetId']
  },
  /**
   * Lookup365: pallet_treasury::Proposal<sp_core::crypto::AccountId32, Balance>
   **/
  PalletTreasuryProposal: {
    proposer: 'AccountId32',
    value: 'u128',
    beneficiary: 'AccountId32',
    bond: 'u128'
  },
  /**
   * Lookup367: pallet_treasury::pallet::Call<T, I>
   **/
  PalletTreasuryCall: {
    _enum: {
      propose_spend: {
        value: 'Compact<u128>',
        beneficiary: 'MultiAddress',
      },
      reject_proposal: {
        proposalId: 'Compact<u32>',
      },
      approve_proposal: {
        proposalId: 'Compact<u32>',
      },
      spend: {
        amount: 'Compact<u128>',
        beneficiary: 'MultiAddress',
      },
      remove_approval: {
        proposalId: 'Compact<u32>'
      }
    }
  },
  /**
   * Lookup368: frame_support::PalletId
   **/
  FrameSupportPalletId: '[u8;8]',
  /**
   * Lookup369: pallet_treasury::pallet::Error<T, I>
   **/
  PalletTreasuryError: {
    _enum: ['InsufficientProposersBalance', 'InvalidIndex', 'TooManyApprovals', 'InsufficientPermission', 'ProposalNotApproved']
  },
  /**
   * Lookup370: pallet_sudo_mangata::pallet::Call<T>
   **/
  PalletSudoMangataCall: {
    _enum: {
      sudo: {
        call: 'Call',
      },
      sudo_unchecked_weight: {
        call: 'Call',
        weight: 'SpWeightsWeightV2Weight',
      },
      set_key: {
        _alias: {
          new_: 'new',
        },
        new_: 'MultiAddress',
      },
      sudo_as: {
        who: 'MultiAddress',
        call: 'Call'
      }
    }
  },
  /**
   * Lookup372: pallet_sudo_origin::pallet::Call<T>
   **/
  PalletSudoOriginCall: {
    _enum: {
      sudo: {
        call: 'Call',
      },
      sudo_unchecked_weight: {
        call: 'Call',
        weight: 'SpWeightsWeightV2Weight',
      },
      sudo_as: {
        who: 'MultiAddress',
        call: 'Call'
      }
    }
  },
  /**
   * Lookup373: pallet_collective_mangata::pallet::Call<T, I>
   **/
  PalletCollectiveMangataCall: {
    _enum: {
      set_members: {
        newMembers: 'Vec<AccountId32>',
        prime: 'Option<AccountId32>',
        oldCount: 'u32',
      },
      execute: {
        proposal: 'Call',
        lengthBound: 'Compact<u32>',
      },
      propose: {
        threshold: 'Compact<u32>',
        proposal: 'Call',
        lengthBound: 'Compact<u32>',
      },
      vote: {
        proposal: 'H256',
        index: 'Compact<u32>',
        approve: 'bool',
      },
      close: {
        proposalHash: 'H256',
        index: 'Compact<u32>',
        proposalWeightBound: 'SpWeightsWeightV2Weight',
        lengthBound: 'Compact<u32>',
      },
      disapprove_proposal: {
        proposalHash: 'H256'
      }
    }
  },
  /**
   * Lookup374: pallet_bootstrap::pallet::Call<T>
   **/
  PalletBootstrapCall: {
    _enum: {
      provision: {
        tokenId: 'u32',
        amount: 'u128',
      },
      whitelist_accounts: {
        accounts: 'Vec<AccountId32>',
      },
      schedule_bootstrap: {
        firstTokenId: 'u32',
        secondTokenId: 'u32',
        idoStart: 'u32',
        whitelistPhaseLength: 'Option<u32>',
        publicPhaseLenght: 'u32',
        maxFirstToSecondRatio: 'Option<(u128,u128)>',
        promoteBootstrapPool: 'bool',
      },
      cancel_bootstrap: 'Null',
      update_promote_bootstrap_pool: {
        promoteBootstrapPool: 'bool',
      },
      claim_liquidity_tokens: 'Null',
      claim_and_activate_liquidity_tokens: 'Null',
      finalize: {
        limit: 'u32',
      },
      claim_liquidity_tokens_for_account: {
        account: 'AccountId32',
        activateRewards: 'bool'
      }
    }
  },
  /**
   * Lookup375: pallet_utility_mangata::pallet::Call<T>
   **/
  PalletUtilityMangataCall: {
    _enum: {
      batch: {
        calls: 'Vec<Call>',
      },
      as_derivative: {
        index: 'u16',
        call: 'Call',
      },
      batch_all: {
        calls: 'Vec<Call>',
      },
      dispatch_as: {
        asOrigin: 'MangataKusamaRuntimeOriginCaller',
        call: 'Call',
      },
      force_batch: {
        calls: 'Vec<Call>'
      }
    }
  },
  /**
   * Lookup377: mangata_kusama_runtime::OriginCaller
   **/
  MangataKusamaRuntimeOriginCaller: {
    _enum: {
      system: 'FrameSupportDispatchRawOrigin',
      __Unused1: 'Null',
      __Unused2: 'Null',
      __Unused3: 'Null',
      Void: 'SpCoreVoid',
      __Unused5: 'Null',
      __Unused6: 'Null',
      __Unused7: 'Null',
      __Unused8: 'Null',
      __Unused9: 'Null',
      __Unused10: 'Null',
      __Unused11: 'Null',
      __Unused12: 'Null',
      __Unused13: 'Null',
      __Unused14: 'Null',
      __Unused15: 'Null',
      __Unused16: 'Null',
      __Unused17: 'Null',
      __Unused18: 'Null',
      __Unused19: 'Null',
      __Unused20: 'Null',
      __Unused21: 'Null',
      __Unused22: 'Null',
      __Unused23: 'Null',
      __Unused24: 'Null',
      __Unused25: 'Null',
      __Unused26: 'Null',
      __Unused27: 'Null',
      __Unused28: 'Null',
      __Unused29: 'Null',
      __Unused30: 'Null',
      PolkadotXcm: 'PalletXcmOrigin',
      CumulusXcm: 'CumulusPalletXcmOrigin',
      __Unused33: 'Null',
      __Unused34: 'Null',
      __Unused35: 'Null',
      __Unused36: 'Null',
      __Unused37: 'Null',
      __Unused38: 'Null',
      __Unused39: 'Null',
      __Unused40: 'Null',
      __Unused41: 'Null',
      __Unused42: 'Null',
      __Unused43: 'Null',
      __Unused44: 'Null',
      __Unused45: 'Null',
      __Unused46: 'Null',
      __Unused47: 'Null',
      __Unused48: 'Null',
      __Unused49: 'Null',
      __Unused50: 'Null',
      Council: 'PalletCollectiveMangataRawOrigin'
    }
  },
  /**
   * Lookup378: frame_support::dispatch::RawOrigin<sp_core::crypto::AccountId32>
   **/
  FrameSupportDispatchRawOrigin: {
    _enum: {
      Root: 'Null',
      Signed: 'AccountId32',
      None: 'Null'
    }
  },
  /**
   * Lookup379: pallet_xcm::pallet::Origin
   **/
  PalletXcmOrigin: {
    _enum: {
      Xcm: 'XcmV1MultiLocation',
      Response: 'XcmV1MultiLocation'
    }
  },
  /**
   * Lookup380: cumulus_pallet_xcm::pallet::Origin
   **/
  CumulusPalletXcmOrigin: {
    _enum: {
      Relay: 'Null',
      SiblingParachain: 'u32'
    }
  },
  /**
   * Lookup381: pallet_collective_mangata::RawOrigin<sp_core::crypto::AccountId32, I>
   **/
  PalletCollectiveMangataRawOrigin: {
    _enum: {
      Members: '(u32,u32)',
      Member: 'AccountId32',
      _Phantom: 'Null'
    }
  },
  /**
   * Lookup382: sp_core::Void
   **/
  SpCoreVoid: 'Null',
  /**
   * Lookup383: pallet_proxy::pallet::Call<T>
   **/
  PalletProxyCall: {
    _enum: {
      proxy: {
        real: 'MultiAddress',
        forceProxyType: 'Option<MangataKusamaRuntimeProxyType>',
        call: 'Call',
      },
      add_proxy: {
        delegate: 'MultiAddress',
        proxyType: 'MangataKusamaRuntimeProxyType',
        delay: 'u32',
      },
      remove_proxy: {
        delegate: 'MultiAddress',
        proxyType: 'MangataKusamaRuntimeProxyType',
        delay: 'u32',
      },
      remove_proxies: 'Null',
      create_pure: {
        proxyType: 'MangataKusamaRuntimeProxyType',
        delay: 'u32',
        index: 'u16',
      },
      kill_pure: {
        spawner: 'MultiAddress',
        proxyType: 'MangataKusamaRuntimeProxyType',
        index: 'u16',
        height: 'Compact<u32>',
        extIndex: 'Compact<u32>',
      },
      announce: {
        real: 'MultiAddress',
        callHash: 'H256',
      },
      remove_announcement: {
        real: 'MultiAddress',
        callHash: 'H256',
      },
      reject_announcement: {
        delegate: 'MultiAddress',
        callHash: 'H256',
      },
      proxy_announced: {
        delegate: 'MultiAddress',
        real: 'MultiAddress',
        forceProxyType: 'Option<MangataKusamaRuntimeProxyType>',
        call: 'Call'
      }
    }
  },
  /**
   * Lookup385: pallet_maintenance::pallet::Call<T>
   **/
  PalletMaintenanceCall: {
    _enum: ['switch_maintenance_mode_on', 'switch_maintenance_mode_off', 'switch_upgradability_in_maintenance_mode_on', 'switch_upgradability_in_maintenance_mode_off']
  },
  /**
   * Lookup386: pallet_sudo_mangata::pallet::Error<T>
   **/
  PalletSudoMangataError: {
    _enum: ['RequireSudo']
  },
  /**
   * Lookup387: pallet_sudo_origin::pallet::Error<T>
   **/
  PalletSudoOriginError: 'Null',
  /**
   * Lookup389: pallet_collective_mangata::Votes<sp_core::crypto::AccountId32, BlockNumber>
   **/
  PalletCollectiveMangataVotes: {
    index: 'u32',
    threshold: 'u32',
    ayes: 'Vec<AccountId32>',
    nays: 'Vec<AccountId32>',
    end: 'u32'
  },
  /**
   * Lookup390: pallet_collective_mangata::pallet::Error<T, I>
   **/
  PalletCollectiveMangataError: {
    _enum: ['NotMember', 'DuplicateProposal', 'ProposalMissing', 'WrongIndex', 'DuplicateVote', 'AlreadyInitialized', 'TooEarly', 'TooEarlyToClose', 'TooManyProposals', 'WrongProposalWeight', 'WrongProposalLength']
  },
  /**
   * Lookup392: pallet_bootstrap::BootstrapPhase
   **/
  PalletBootstrapBootstrapPhase: {
    _enum: ['BeforeStart', 'Whitelist', 'Public', 'Finished']
  },
  /**
   * Lookup395: pallet_bootstrap::pallet::Error<T>
   **/
  PalletBootstrapError: {
    _enum: ['UnsupportedTokenId', 'NotEnoughAssets', 'NotEnoughVestedAssets', 'MathOverflow', 'Unauthorized', 'BootstrapStartInThePast', 'PhaseLengthCannotBeZero', 'AlreadyStarted', 'ValuationRatio', 'FirstProvisionInSecondTokenId', 'PoolAlreadyExists', 'NotFinishedYet', 'NothingToClaim', 'WrongRatio', 'BootstrapNotReadyToBeFinished', 'SameToken', 'TokenIdDoesNotExists', 'TokensActivationFailed', 'BootstrapNotSchduled', 'BootstrapFinished', 'TooLateToUpdateBootstrap', 'ProvisioningBlockedByMaintenanceMode']
  },
  /**
   * Lookup396: pallet_utility_mangata::pallet::Error<T>
   **/
  PalletUtilityMangataError: {
    _enum: ['TooManyCalls']
  },
  /**
   * Lookup399: pallet_proxy::ProxyDefinition<sp_core::crypto::AccountId32, mangata_kusama_runtime::ProxyType, BlockNumber>
   **/
  PalletProxyProxyDefinition: {
    delegate: 'AccountId32',
    proxyType: 'MangataKusamaRuntimeProxyType',
    delay: 'u32'
  },
  /**
   * Lookup403: pallet_proxy::Announcement<sp_core::crypto::AccountId32, primitive_types::H256, BlockNumber>
   **/
  PalletProxyAnnouncement: {
    real: 'AccountId32',
    callHash: 'H256',
    height: 'u32'
  },
  /**
   * Lookup405: pallet_proxy::pallet::Error<T>
   **/
  PalletProxyError: {
    _enum: ['TooMany', 'NotFound', 'NotProxy', 'Unproxyable', 'Duplicate', 'NoPermission', 'Unannounced', 'NoSelfProxy']
  },
  /**
   * Lookup406: pallet_maintenance::pallet::MaintenanceStatusInfo
   **/
  PalletMaintenanceMaintenanceStatusInfo: {
    isMaintenance: 'bool',
    isUpgradableInMaintenance: 'bool'
  },
  /**
   * Lookup407: pallet_maintenance::pallet::Error<T>
   **/
  PalletMaintenanceError: {
    _enum: ['NotFoundationAccount', 'NotInMaintenanceMode', 'AlreadyInMaintenanceMode', 'AlreadyUpgradableInMaintenanceMode', 'AlreadyNotUpgradableInMaintenanceMode']
  },
  /**
   * Lookup410: frame_system::extensions::check_spec_version::CheckSpecVersion<T>
   **/
  FrameSystemExtensionsCheckSpecVersion: 'Null',
  /**
   * Lookup411: frame_system::extensions::check_tx_version::CheckTxVersion<T>
   **/
  FrameSystemExtensionsCheckTxVersion: 'Null',
  /**
   * Lookup412: frame_system::extensions::check_genesis::CheckGenesis<T>
   **/
  FrameSystemExtensionsCheckGenesis: 'Null',
  /**
   * Lookup415: frame_system::extensions::check_nonce::CheckNonce<T>
   **/
  FrameSystemExtensionsCheckNonce: 'Compact<u32>',
  /**
   * Lookup416: frame_system::extensions::check_weight::CheckWeight<T>
   **/
  FrameSystemExtensionsCheckWeight: 'Null',
  /**
   * Lookup417: pallet_transaction_payment::ChargeTransactionPayment<T>
   **/
  PalletTransactionPaymentChargeTransactionPayment: 'Compact<u128>',
  /**
   * Lookup418: mangata_kusama_runtime::Runtime
   **/
  MangataKusamaRuntimeRuntime: 'Null'
};
