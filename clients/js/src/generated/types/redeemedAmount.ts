/**
 * This code was AUTOGENERATED using the kinobi library.
 * Please DO NOT EDIT THIS FILE, instead use visitors
 * to add features, then rerun kinobi to update it.
 *
 * @see https://github.com/metaplex-foundation/kinobi
 */

import { Context, Serializer } from '@metaplex-foundation/umi';

/**
 * Guard that stop the mint once the specified amount of items
 * redeenmed is reached.
 */

export type RedeemedAmount = { maximum: bigint };

export type RedeemedAmountArgs = { maximum: number | bigint };

export function getRedeemedAmountSerializer(
  context: Pick<Context, 'serializer'>
): Serializer<RedeemedAmountArgs, RedeemedAmount> {
  const s = context.serializer;
  return s.struct<RedeemedAmount>([['maximum', s.u64()]], {
    description: 'RedeemedAmount',
  }) as Serializer<RedeemedAmountArgs, RedeemedAmount>;
}