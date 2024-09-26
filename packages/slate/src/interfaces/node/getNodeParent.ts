import { type Path, Node } from 'slate';

import type { AncestorOf } from './TAncestor';
import type { TNode } from './TNode';

/** Get the parent of a node at a specific path. */
export const getNodeParent = <N extends AncestorOf<R>, R extends TNode = TNode>(
  root: R,
  path: Path
) => Node.parent(root, path) as N;
