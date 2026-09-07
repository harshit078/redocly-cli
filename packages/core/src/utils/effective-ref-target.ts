import { type Location } from '../ref-utils.js';
import { type ResolvedRefChainHop } from '../resolve.js';

export type RefTarget = { node: unknown; location: Location };

export function effectiveRefTarget(resolved: {
  node: unknown;
  location: Location;
  chain?: ResolvedRefChainHop[];
}): RefTarget {
  return resolved.chain?.[0] ?? { node: resolved.node, location: resolved.location };
}
