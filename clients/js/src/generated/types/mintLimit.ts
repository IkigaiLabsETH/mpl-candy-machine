/**
 * This code was AUTOGENERATED using the kinobi library.
 * Please DO NOT EDIT THIS FILE, instead use visitors
 * to add features, then rerun kinobi to update it.
 *
 * @see https://github.com/metaplex-foundation/kinobi
 */

import {
  Serializer,
  struct,
  u16,
  u8,
} from '@metaplex-foundation/umi/serializers';

/**
 * Gaurd to set a limit of mints per wallet.
 *
 * List of accounts required:
 *
 * 0. `[writable]` Mint counter PDA. The PDA is derived
 * using the seed `["mint_limit", mint guard id, payer key,
 * candy guard pubkey, candy machine pubkey]`.
 */

export type MintLimit = {
  /** Unique identifier of the mint limit. */
  id: number;
  /** Limit of mints per individual address. */
  limit: number;
};

export type MintLimitArgs = MintLimit;

/** @deprecated Use `getMintLimitSerializer()` without any argument instead. */
export function getMintLimitSerializer(
  _context: object
): Serializer<MintLimitArgs, MintLimit>;
export function getMintLimitSerializer(): Serializer<MintLimitArgs, MintLimit>;
export function getMintLimitSerializer(
  _context: object = {}
): Serializer<MintLimitArgs, MintLimit> {
  return struct<MintLimit>(
    [
      ['id', u8()],
      ['limit', u16()],
    ],
    { description: 'MintLimit' }
  ) as Serializer<MintLimitArgs, MintLimit>;
}
