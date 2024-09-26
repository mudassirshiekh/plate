import { type Path, Node } from 'slate';

import type { TextOf } from '../text/TText';
import type { TNode } from './TNode';

/** Get the node at a specific path, ensuring it's a leaf text node. */
export const getNodeLeaf = <N extends TextOf<R>, R extends TNode = TNode>(
  root: R,
  path: Path
) => Node.leaf(root, path) as N;
