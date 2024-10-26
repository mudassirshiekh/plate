import {
  setNode,
  useEditorReadOnly,
  useEditorRef,
  useElement,
} from '@udecode/plate-common/react';

import type { TCalloutElement } from '../../lib';

export interface UseCalloutEmojiPickerOptions {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
}

export const useCalloutEmojiPicker = ({
  isOpen,
  setIsOpen,
}: UseCalloutEmojiPickerOptions) => {
  const editor = useEditorRef();
  const readOnly = useEditorReadOnly();
  const element = useElement<TCalloutElement>();

  return {
    emojiToolbarDropdownProps: {
      isOpen,
      setIsOpen: (v: boolean) => {
        if (readOnly) return;

        setIsOpen(v);
      },
    },
    props: {
      isOpen,
      setIsOpen,
      onSelectEmoji: (emojiValue: any) => {
        setNode<TCalloutElement>(editor, element, {
          icon: emojiValue.skins?.[0]?.native ?? emojiValue.icon,
        });
        setIsOpen(false);
      },
    },
  };
};
