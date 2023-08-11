/**
 * This code was AUTOGENERATED using the kinobi library.
 * Please DO NOT EDIT THIS FILE, instead use visitors
 * to add features, then rerun kinobi to update it.
 *
 * @see https://github.com/metaplex-foundation/kinobi
 */

import {
  MetadataDelegateRole,
  findMasterEditionPda,
  findMetadataDelegateRecordPda,
  findMetadataPda,
} from '@metaplex-foundation/mpl-token-metadata';
import { findAssociatedTokenPda } from '@metaplex-foundation/mpl-toolbox';
import {
  AccountMeta,
  Context,
  Pda,
  PublicKey,
  Signer,
  TransactionBuilder,
  publicKey,
  transactionBuilder,
} from '@metaplex-foundation/umi';
import {
  Serializer,
  array,
  mapSerializer,
  struct,
  u8,
} from '@metaplex-foundation/umi/serializers';
import { findCandyMachineAuthorityPda } from '../../hooked';
import { addAccountMeta, addObjectProperty } from '../shared';

// Accounts.
export type MintFromCandyMachineV2InstructionAccounts = {
  /** Candy machine account. */
  candyMachine: PublicKey | Pda;
  /**
   * Candy machine authority account. This is the account that holds a delegate
   * to verify an item into the collection.
   *
   */

  authorityPda?: PublicKey | Pda;
  /** Candy machine mint authority (mint only allowed for the mint_authority). */
  mintAuthority: Signer;
  /** Payer for the transaction and account allocation (rent). */
  payer?: Signer;
  /**
   * NFT account owner.
   *
   */

  nftOwner: PublicKey | Pda;
  /**
   * Mint account of the NFT. The account will be initialized if necessary.
   *
   */

  nftMint: PublicKey | Pda | Signer;
  /** Mint authority of the NFT. In most cases this will be the owner of the NFT. */
  nftMintAuthority?: Signer;
  /**
   * Metadata account of the NFT. This account must be uninitialized.
   *
   */

  nftMetadata?: PublicKey | Pda;
  /**
   * Master edition account of the NFT. The account will be initialized if necessary.
   *
   */

  nftMasterEdition?: PublicKey | Pda;
  /**
   * Destination token account (required for pNFT).
   *
   */

  token?: PublicKey | Pda;
  /**
   * Token record (required for pNFT).
   *
   */

  tokenRecord?: PublicKey | Pda;
  /**
   * Collection authority or metadata delegate record.
   *
   */

  collectionDelegateRecord?: PublicKey | Pda;
  /**
   * Mint account of the collection NFT.
   *
   */

  collectionMint: PublicKey | Pda;
  /**
   * Metadata account of the collection NFT.
   *
   */

  collectionMetadata?: PublicKey | Pda;
  /**
   * Master edition account of the collection NFT.
   *
   */

  collectionMasterEdition?: PublicKey | Pda;
  /**
   * Update authority of the collection NFT.
   *
   */

  collectionUpdateAuthority: PublicKey | Pda;
  /**
   * Token Metadata program.
   *
   */

  tokenMetadataProgram?: PublicKey | Pda;
  /** SPL Token program. */
  splTokenProgram?: PublicKey | Pda;
  /** SPL Associated Token program. */
  splAtaProgram?: PublicKey | Pda;
  /** System program. */
  systemProgram?: PublicKey | Pda;
  /**
   * Instructions sysvar account.
   *
   */

  sysvarInstructions?: PublicKey | Pda;
  /**
   * SlotHashes sysvar cluster data.
   *
   */

  recentSlothashes?: PublicKey | Pda;
  /**
   * Token Authorization Rules program.
   *
   */

  authorizationRulesProgram?: PublicKey | Pda;
  /**
   * Token Authorization rules account for the collection metadata (if any).
   *
   */

  authorizationRules?: PublicKey | Pda;
};

// Data.
export type MintFromCandyMachineV2InstructionData = {
  discriminator: Array<number>;
};

export type MintFromCandyMachineV2InstructionDataArgs = {};

/** @deprecated Use `getMintFromCandyMachineV2InstructionDataSerializer()` without any argument instead. */
export function getMintFromCandyMachineV2InstructionDataSerializer(
  _context: object
): Serializer<
  MintFromCandyMachineV2InstructionDataArgs,
  MintFromCandyMachineV2InstructionData
>;
export function getMintFromCandyMachineV2InstructionDataSerializer(): Serializer<
  MintFromCandyMachineV2InstructionDataArgs,
  MintFromCandyMachineV2InstructionData
>;
export function getMintFromCandyMachineV2InstructionDataSerializer(
  _context: object = {}
): Serializer<
  MintFromCandyMachineV2InstructionDataArgs,
  MintFromCandyMachineV2InstructionData
> {
  return mapSerializer<
    MintFromCandyMachineV2InstructionDataArgs,
    any,
    MintFromCandyMachineV2InstructionData
  >(
    struct<MintFromCandyMachineV2InstructionData>(
      [['discriminator', array(u8(), { size: 8 })]],
      { description: 'MintFromCandyMachineV2InstructionData' }
    ),
    (value) => ({
      ...value,
      discriminator: [120, 121, 23, 146, 173, 110, 199, 205],
    })
  ) as Serializer<
    MintFromCandyMachineV2InstructionDataArgs,
    MintFromCandyMachineV2InstructionData
  >;
}

// Instruction.
export function mintFromCandyMachineV2(
  context: Pick<Context, 'programs' | 'eddsa' | 'identity' | 'payer'>,
  input: MintFromCandyMachineV2InstructionAccounts
): TransactionBuilder {
  const signers: Signer[] = [];
  const keys: AccountMeta[] = [];

  // Program ID.
  const programId = context.programs.getPublicKey(
    'mplCandyMachineCore',
    'CndyV3LdqHUfDLmE5naZjVN8rBZz4tqhdefbAnjHG3JR'
  );

  // Resolved inputs.
  const resolvedAccounts = {
    candyMachine: [input.candyMachine, true] as const,
    mintAuthority: [input.mintAuthority, false] as const,
    nftOwner: [input.nftOwner, false] as const,
    nftMint: [input.nftMint, true] as const,
    collectionMint: [input.collectionMint, false] as const,
    collectionUpdateAuthority: [
      input.collectionUpdateAuthority,
      false,
    ] as const,
  };
  addObjectProperty(
    resolvedAccounts,
    'authorityPda',
    input.authorityPda
      ? ([input.authorityPda, true] as const)
      : ([
          findCandyMachineAuthorityPda(context, {
            candyMachine: publicKey(input.candyMachine, false),
          }),
          true,
        ] as const)
  );
  addObjectProperty(
    resolvedAccounts,
    'payer',
    input.payer
      ? ([input.payer, true] as const)
      : ([context.payer, true] as const)
  );
  addObjectProperty(
    resolvedAccounts,
    'nftMintAuthority',
    input.nftMintAuthority
      ? ([input.nftMintAuthority, false] as const)
      : ([context.identity, false] as const)
  );
  addObjectProperty(
    resolvedAccounts,
    'nftMetadata',
    input.nftMetadata
      ? ([input.nftMetadata, true] as const)
      : ([
          findMetadataPda(context, { mint: publicKey(input.nftMint, false) }),
          true,
        ] as const)
  );
  addObjectProperty(
    resolvedAccounts,
    'nftMasterEdition',
    input.nftMasterEdition
      ? ([input.nftMasterEdition, true] as const)
      : ([
          findMasterEditionPda(context, {
            mint: publicKey(input.nftMint, false),
          }),
          true,
        ] as const)
  );
  addObjectProperty(
    resolvedAccounts,
    'token',
    input.token
      ? ([input.token, true] as const)
      : ([
          findAssociatedTokenPda(context, {
            mint: publicKey(input.nftMint, false),
            owner: publicKey(input.nftOwner, false),
          }),
          true,
        ] as const)
  );
  addObjectProperty(
    resolvedAccounts,
    'tokenRecord',
    input.tokenRecord
      ? ([input.tokenRecord, true] as const)
      : ([programId, false] as const)
  );
  addObjectProperty(
    resolvedAccounts,
    'collectionDelegateRecord',
    input.collectionDelegateRecord
      ? ([input.collectionDelegateRecord, false] as const)
      : ([
          findMetadataDelegateRecordPda(context, {
            mint: publicKey(input.collectionMint, false),
            delegateRole: MetadataDelegateRole.Collection,
            updateAuthority: publicKey(input.collectionUpdateAuthority, false),
            delegate: publicKey(resolvedAccounts.authorityPda[0], false),
          }),
          false,
        ] as const)
  );
  addObjectProperty(
    resolvedAccounts,
    'collectionMetadata',
    input.collectionMetadata
      ? ([input.collectionMetadata, true] as const)
      : ([
          findMetadataPda(context, {
            mint: publicKey(input.collectionMint, false),
          }),
          true,
        ] as const)
  );
  addObjectProperty(
    resolvedAccounts,
    'collectionMasterEdition',
    input.collectionMasterEdition
      ? ([input.collectionMasterEdition, false] as const)
      : ([
          findMasterEditionPda(context, {
            mint: publicKey(input.collectionMint, false),
          }),
          false,
        ] as const)
  );
  addObjectProperty(
    resolvedAccounts,
    'tokenMetadataProgram',
    input.tokenMetadataProgram
      ? ([input.tokenMetadataProgram, false] as const)
      : ([
          context.programs.getPublicKey(
            'mplTokenMetadata',
            'metaqbxxUerdq28cj1RbAWkYQm3ybzjb6a8bt518x1s'
          ),
          false,
        ] as const)
  );
  addObjectProperty(
    resolvedAccounts,
    'splTokenProgram',
    input.splTokenProgram
      ? ([input.splTokenProgram, false] as const)
      : ([
          context.programs.getPublicKey(
            'splToken',
            'TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA'
          ),
          false,
        ] as const)
  );
  addObjectProperty(
    resolvedAccounts,
    'splAtaProgram',
    input.splAtaProgram
      ? ([input.splAtaProgram, false] as const)
      : ([
          context.programs.getPublicKey(
            'splAssociatedToken',
            'ATokenGPvbdGVxr1b2hvZbsiqW5xWH25efTNsLJA8knL'
          ),
          false,
        ] as const)
  );
  addObjectProperty(
    resolvedAccounts,
    'systemProgram',
    input.systemProgram
      ? ([input.systemProgram, false] as const)
      : ([
          context.programs.getPublicKey(
            'splSystem',
            '11111111111111111111111111111111'
          ),
          false,
        ] as const)
  );
  addObjectProperty(
    resolvedAccounts,
    'sysvarInstructions',
    input.sysvarInstructions
      ? ([input.sysvarInstructions, false] as const)
      : ([
          publicKey('Sysvar1nstructions1111111111111111111111111'),
          false,
        ] as const)
  );
  addObjectProperty(
    resolvedAccounts,
    'recentSlothashes',
    input.recentSlothashes
      ? ([input.recentSlothashes, false] as const)
      : ([
          publicKey('SysvarS1otHashes111111111111111111111111111'),
          false,
        ] as const)
  );
  addObjectProperty(
    resolvedAccounts,
    'authorizationRulesProgram',
    input.authorizationRulesProgram
      ? ([input.authorizationRulesProgram, false] as const)
      : ([programId, false] as const)
  );
  addObjectProperty(
    resolvedAccounts,
    'authorizationRules',
    input.authorizationRules
      ? ([input.authorizationRules, false] as const)
      : ([programId, false] as const)
  );

  addAccountMeta(keys, signers, resolvedAccounts.candyMachine, false);
  addAccountMeta(keys, signers, resolvedAccounts.authorityPda, false);
  addAccountMeta(keys, signers, resolvedAccounts.mintAuthority, false);
  addAccountMeta(keys, signers, resolvedAccounts.payer, false);
  addAccountMeta(keys, signers, resolvedAccounts.nftOwner, false);
  addAccountMeta(keys, signers, resolvedAccounts.nftMint, false);
  addAccountMeta(keys, signers, resolvedAccounts.nftMintAuthority, false);
  addAccountMeta(keys, signers, resolvedAccounts.nftMetadata, false);
  addAccountMeta(keys, signers, resolvedAccounts.nftMasterEdition, false);
  addAccountMeta(keys, signers, resolvedAccounts.token, false);
  addAccountMeta(keys, signers, resolvedAccounts.tokenRecord, false);
  addAccountMeta(
    keys,
    signers,
    resolvedAccounts.collectionDelegateRecord,
    false
  );
  addAccountMeta(keys, signers, resolvedAccounts.collectionMint, false);
  addAccountMeta(keys, signers, resolvedAccounts.collectionMetadata, false);
  addAccountMeta(
    keys,
    signers,
    resolvedAccounts.collectionMasterEdition,
    false
  );
  addAccountMeta(
    keys,
    signers,
    resolvedAccounts.collectionUpdateAuthority,
    false
  );
  addAccountMeta(keys, signers, resolvedAccounts.tokenMetadataProgram, false);
  addAccountMeta(keys, signers, resolvedAccounts.splTokenProgram, false);
  addAccountMeta(keys, signers, resolvedAccounts.splAtaProgram, false);
  addAccountMeta(keys, signers, resolvedAccounts.systemProgram, false);
  addAccountMeta(keys, signers, resolvedAccounts.sysvarInstructions, false);
  addAccountMeta(keys, signers, resolvedAccounts.recentSlothashes, false);
  addAccountMeta(
    keys,
    signers,
    resolvedAccounts.authorizationRulesProgram,
    false
  );
  addAccountMeta(keys, signers, resolvedAccounts.authorizationRules, false);

  // Data.
  const data = getMintFromCandyMachineV2InstructionDataSerializer().serialize(
    {}
  );

  // Bytes Created On Chain.
  const bytesCreatedOnChain = 0;

  return transactionBuilder([
    { instruction: { keys, programId, data }, signers, bytesCreatedOnChain },
  ]);
}
