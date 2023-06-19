/**
 * This code was AUTOGENERATED using the kinobi library.
 * Please DO NOT EDIT THIS FILE, instead use visitors
 * to add features, then rerun kinobi to update it.
 *
 * @see https://github.com/metaplex-foundation/kinobi
 */

import {
  Amount,
  Option,
  OptionOrNullable,
  mapAmountSerializer,
} from '@metaplex-foundation/umi';
import {
  Serializer,
  array,
  bool,
  option,
  string,
  struct,
  u16,
  u64,
} from '@metaplex-foundation/umi/serializers';
import {
  ConfigLineSettings,
  ConfigLineSettingsArgs,
  Creator,
  CreatorArgs,
  HiddenSettings,
  HiddenSettingsArgs,
  getConfigLineSettingsSerializer,
  getCreatorSerializer,
  getHiddenSettingsSerializer,
} from '.';

/** Candy machine configuration data. */
export type CandyMachineData = {
  /** Number of assets available */
  itemsAvailable: bigint;
  /** Symbol for the asset */
  symbol: string;
  /** Secondary sales royalty basis points (0-10000) */
  sellerFeeBasisPoints: Amount<'%', 2>;
  /** Max supply of each individual asset (default 0) */
  maxEditionSupply: bigint;
  /** Indicates if the asset is mutable or not (default yes) */
  isMutable: boolean;
  /** List of creators */
  creators: Array<Creator>;
  /** Config line settings */
  configLineSettings: Option<ConfigLineSettings>;
  /** Hidden setttings */
  hiddenSettings: Option<HiddenSettings>;
};

export type CandyMachineDataArgs = {
  /** Number of assets available */
  itemsAvailable: number | bigint;
  /** Symbol for the asset */
  symbol: string;
  /** Secondary sales royalty basis points (0-10000) */
  sellerFeeBasisPoints: Amount<'%', 2>;
  /** Max supply of each individual asset (default 0) */
  maxEditionSupply: number | bigint;
  /** Indicates if the asset is mutable or not (default yes) */
  isMutable: boolean;
  /** List of creators */
  creators: Array<CreatorArgs>;
  /** Config line settings */
  configLineSettings: OptionOrNullable<ConfigLineSettingsArgs>;
  /** Hidden setttings */
  hiddenSettings: OptionOrNullable<HiddenSettingsArgs>;
};

/** @deprecated Use `getCandyMachineDataSerializer()` without any argument instead. */
export function getCandyMachineDataSerializer(
  _context: object
): Serializer<CandyMachineDataArgs, CandyMachineData>;
export function getCandyMachineDataSerializer(): Serializer<
  CandyMachineDataArgs,
  CandyMachineData
>;
export function getCandyMachineDataSerializer(
  _context: object = {}
): Serializer<CandyMachineDataArgs, CandyMachineData> {
  return struct<CandyMachineData>(
    [
      ['itemsAvailable', u64()],
      ['symbol', string()],
      ['sellerFeeBasisPoints', mapAmountSerializer(u16(), '%', 2)],
      ['maxEditionSupply', u64()],
      ['isMutable', bool()],
      ['creators', array(getCreatorSerializer())],
      ['configLineSettings', option(getConfigLineSettingsSerializer())],
      ['hiddenSettings', option(getHiddenSettingsSerializer())],
    ],
    { description: 'CandyMachineData' }
  ) as Serializer<CandyMachineDataArgs, CandyMachineData>;
}
