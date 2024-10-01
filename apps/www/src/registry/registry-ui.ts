import type { Registry } from './schema';

export const ui: Registry = [
  {
    dependencies: [],
    files: ['plate-ui/editor.tsx'],
    name: 'editor',
    registryDependencies: [],
    type: 'registry:ui',
  },
  {
    dependencies: ['@udecode/plate-selection'],
    files: ['plate-ui/block-selection.tsx'],
    name: 'block-selection',
    registryDependencies: [],
    type: 'registry:ui',
  },
  {
    dependencies: [],
    files: ['plate-ui/plate-element.tsx'],
    name: 'plate-element',
    registryDependencies: ['block-selection'],
    type: 'registry:ui',
  },
  {
    dependencies: ['@udecode/plate-cloud'],
    files: [
      'plate-ui/cloud.tsx',
      'plate-ui/cloud-attachment-element.tsx',
      'plate-ui/cloud-image-element.tsx',
      'plate-ui/cloud-resize-controls.tsx',
      'plate-ui/cloud-status-bar.tsx',
      'plate-ui/cloud-toolbar-buttons.tsx',
    ],
    name: 'cloud',
    registryDependencies: [],
    type: 'registry:ui',
  },
  {
    dependencies: ['@udecode/plate-code-block'],
    files: [
      'plate-ui/code-block-element.tsx',
      'plate-ui/code-block-element.css',
      'plate-ui/code-block-combobox.tsx',
    ],
    name: 'code-block-element',
    registryDependencies: ['command', 'plate-element'],
    type: 'registry:ui',
  },
  {
    dependencies: ['@udecode/plate-layout'],
    files: ['plate-ui/column-element.tsx', 'plate-ui/column-group-element.tsx'],
    name: 'column-element',
    registryDependencies: ['command', 'resizable', 'plate-element'],
    type: 'registry:ui',
  },
  {
    dependencies: [],
    files: [
      'plate-ui/color-dropdown-menu.tsx',
      'plate-ui/color-constants.ts',
      'plate-ui/color-dropdown-menu-items.tsx',
      'plate-ui/color-input.tsx',
      'plate-ui/color-picker.tsx',
      'plate-ui/colors-custom.tsx',
    ],
    name: 'color-dropdown-menu',
    registryDependencies: [
      'dropdown-menu',
      'toolbar',
      'separator',
      'button',
      'tooltip',
    ],
    type: 'registry:ui',
  },
  {
    dependencies: ['@udecode/plate-comments'],
    files: [
      'plate-ui/comments-popover.tsx',
      'plate-ui/comment-avatar.tsx',
      'plate-ui/comment-create-form.tsx',
      'plate-ui/comment-item.tsx',
      'plate-ui/comment-more-dropdown.tsx',
      'plate-ui/comment-reply-items.tsx',
      'plate-ui/comment-resolve-button.tsx',
      'plate-ui/comment-value.tsx',
    ],
    name: 'comments-popover',
    registryDependencies: ['popover', 'avatar'],
    type: 'registry:ui',
  },
  {
    dependencies: [
      '@udecode/plate-dnd',
      '@udecode/plate-selection',
      'react-dnd',
      'react-dnd-html5-backend',
    ],
    files: ['plate-ui/draggable.tsx', 'plate-ui/with-draggables.tsx'],
    name: 'draggable',
    registryDependencies: ['tooltip'],
    type: 'registry:ui',
  },
  {
    dependencies: ['@radix-ui/react-popover'],
    files: [
      'plate-ui/emoji-dropdown-menu.tsx',
      'plate-ui/emoji-toolbar-dropdown.tsx',
      'plate-ui/emoji-icons.tsx',
      'plate-ui/emoji-picker.tsx',
      'plate-ui/emoji-picker-content.tsx',
      'plate-ui/emoji-picker-navigation.tsx',
      'plate-ui/emoji-picker-preview.tsx',
      'plate-ui/emoji-picker-search-and-clear.tsx',
      'plate-ui/emoji-picker-search-bar.tsx',
    ],
    name: 'emoji-dropdown-menu',
    registryDependencies: ['toolbar'],

    type: 'registry:ui',
  },
  {
    dependencies: ['@udecode/plate-emoji'],
    files: ['plate-ui/emoji-input-element.tsx'],
    name: 'emoji-input-element',
    registryDependencies: ['inline-combobox', 'plate-element', 'use-debounce'],
    type: 'registry:ui',
  },
  {
    dependencies: ['@udecode/plate-alignment'],
    files: ['plate-ui/align-dropdown-menu.tsx'],
    name: 'align-dropdown-menu',
    registryDependencies: ['dropdown-menu', 'toolbar'],
    type: 'registry:ui',
  },
  {
    dependencies: ['@radix-ui/react-avatar'],
    files: ['plate-ui/avatar.tsx'],
    name: 'avatar',
    registryDependencies: [],
    type: 'registry:ui',
  },
  {
    dependencies: ['@udecode/plate-block-quote'],
    files: ['plate-ui/blockquote-element.tsx'],
    name: 'blockquote-element',
    registryDependencies: ['plate-element'],
    type: 'registry:ui',
  },
  {
    dependencies: ['@udecode/plate-date'],
    files: ['plate-ui/date-element.tsx'],
    name: 'date-element',
    registryDependencies: ['calendar', 'plate-element'],
    type: 'registry:ui',
  },
  {
    dependencies: ['react-day-picker@8.10.1', 'date-fns'],
    files: ['plate-ui/calendar.tsx'],
    name: 'calendar',
    registryDependencies: ['button'],
    type: 'registry:ui',
  },
  {
    dependencies: ['@radix-ui/react-slot'],
    files: ['plate-ui/button.tsx'],
    name: 'button',
    registryDependencies: [],
    type: 'registry:ui',
  },
  {
    dependencies: ['@udecode/plate-caption'],
    files: ['plate-ui/caption.tsx'],
    name: 'caption',
    registryDependencies: [],
    type: 'registry:ui',
  },
  {
    dependencies: ['@radix-ui/react-checkbox'],
    files: ['plate-ui/checkbox.tsx'],
    name: 'checkbox',
    registryDependencies: [],
    type: 'registry:ui',
  },
  {
    dependencies: ['@udecode/plate-basic-marks'],
    files: ['plate-ui/code-leaf.tsx'],
    name: 'code-leaf',
    registryDependencies: [],
    type: 'registry:ui',
  },
  {
    dependencies: ['@udecode/plate-code-block'],
    files: ['plate-ui/code-line-element.tsx'],
    name: 'code-line-element',
    registryDependencies: ['plate-element'],
    type: 'registry:ui',
  },
  {
    dependencies: ['@udecode/plate-code-block'],
    files: ['plate-ui/code-syntax-leaf.tsx'],
    name: 'code-syntax-leaf',
    registryDependencies: [],
    type: 'registry:ui',
  },
  {
    dependencies: ['cmdk'],
    files: ['plate-ui/command.tsx'],
    name: 'command',
    registryDependencies: ['dialog'],
    type: 'registry:ui',
  },
  {
    dependencies: ['@udecode/plate-comments'],
    files: ['plate-ui/comment-leaf.tsx'],
    name: 'comment-leaf',
    registryDependencies: [],
    type: 'registry:ui',
  },
  {
    dependencies: [],
    files: ['plate-ui/comment-toolbar-button.tsx'],
    name: 'comment-toolbar-button',
    registryDependencies: [],
    type: 'registry:ui',
  },
  {
    dependencies: [],
    files: ['plate-ui/cursor-overlay.tsx'],
    name: 'cursor-overlay',
    registryDependencies: [],
    type: 'registry:ui',
  },
  {
    dependencies: ['@radix-ui/react-dialog'],
    files: ['plate-ui/dialog.tsx'],
    name: 'dialog',
    registryDependencies: [],
    type: 'registry:ui',
  },
  {
    dependencies: ['@radix-ui/react-dropdown-menu'],
    files: ['plate-ui/dropdown-menu.tsx'],
    name: 'dropdown-menu',
    registryDependencies: [],
    type: 'registry:ui',
  },

  {
    dependencies: ['@udecode/plate-excalidraw'],
    files: ['plate-ui/excalidraw-element.tsx'],
    name: 'excalidraw-element',
    registryDependencies: ['plate-element'],
    type: 'registry:ui',
  },
  {
    dependencies: [],
    files: ['plate-ui/fixed-toolbar.tsx'],
    name: 'fixed-toolbar',
    registryDependencies: ['toolbar'],
    type: 'registry:ui',
  },
  {
    dependencies: ['@udecode/plate-basic-marks'],
    files: ['plate-ui/fixed-toolbar-buttons.tsx'],
    name: 'fixed-toolbar-buttons',
    registryDependencies: [
      'toolbar',
      'insert-dropdown-menu',
      'mark-toolbar-button',
      'mode-dropdown-menu',
      'turn-into-dropdown-menu',
    ],
    type: 'registry:ui',
  },
  {
    dependencies: ['@udecode/plate-floating'],
    files: ['plate-ui/floating-toolbar.tsx'],
    name: 'floating-toolbar',
    registryDependencies: ['toolbar'],
    type: 'registry:ui',
  },
  {
    dependencies: ['@udecode/plate-basic-marks'],
    files: ['plate-ui/floating-toolbar-buttons.tsx'],
    name: 'floating-toolbar-buttons',
    registryDependencies: [
      'mark-toolbar-button',
      'more-dropdown-menu',
      'turn-into-dropdown-menu',
    ],
    type: 'registry:ui',
  },
  {
    dependencies: ['@udecode/plate-heading'],
    files: ['plate-ui/heading-element.tsx'],
    name: 'heading-element',
    registryDependencies: ['plate-element'],
    type: 'registry:ui',
  },
  {
    dependencies: ['@udecode/plate-highlight'],
    files: ['plate-ui/highlight-leaf.tsx'],
    name: 'highlight-leaf',
    registryDependencies: [],
    type: 'registry:ui',
  },
  {
    dependencies: ['@udecode/plate-horizontal-rule'],
    files: ['plate-ui/hr-element.tsx'],
    name: 'hr-element',
    registryDependencies: ['plate-element'],
    type: 'registry:ui',
  },
  {
    dependencies: ['@udecode/plate-media'],
    files: ['plate-ui/image-element.tsx'],
    name: 'image-element',
    registryDependencies: [
      'media-popover',
      'caption',
      'resizable',
      'plate-element',
    ],
    type: 'registry:ui',
  },
  {
    dependencies: ['@udecode/plate-indent-list'],
    files: ['plate-ui/indent-list-toolbar-button.tsx'],
    name: 'indent-list-toolbar-button',
    registryDependencies: ['toolbar'],
    type: 'registry:ui',
  },
  {
    dependencies: ['@udecode/plate-indent'],
    files: ['plate-ui/indent-toolbar-button.tsx'],
    name: 'indent-toolbar-button',
    registryDependencies: ['toolbar'],
    type: 'registry:ui',
  },
  {
    dependencies: ['@ariakit/react', '@udecode/plate-combobox'],
    files: ['plate-ui/inline-combobox.tsx'],
    name: 'inline-combobox',
    registryDependencies: [],
    type: 'registry:ui',
  },
  {
    dependencies: [],
    files: ['plate-ui/input.tsx'],
    name: 'input',
    registryDependencies: [],
    type: 'registry:ui',
  },
  {
    dependencies: ['@udecode/plate-block-quote', '@udecode/plate-heading'],
    files: ['plate-ui/insert-dropdown-menu.tsx'],
    name: 'insert-dropdown-menu',
    registryDependencies: ['dropdown-menu', 'toolbar'],
    type: 'registry:ui',
  },
  {
    dependencies: ['@udecode/plate-kbd'],
    files: ['plate-ui/kbd-leaf.tsx'],
    name: 'kbd-leaf',
    registryDependencies: [],
    type: 'registry:ui',
  },
  {
    dependencies: ['@udecode/plate-line-height'],
    files: ['plate-ui/line-height-dropdown-menu.tsx'],
    name: 'line-height-dropdown-menu',
    registryDependencies: ['toolbar', 'dropdown-menu'],
    type: 'registry:ui',
  },
  {
    dependencies: ['@udecode/plate-link'],
    files: ['plate-ui/link-element.tsx'],
    name: 'link-element',
    registryDependencies: ['plate-element'],
    type: 'registry:ui',
  },
  {
    dependencies: ['@udecode/plate-link'],
    files: ['plate-ui/link-floating-toolbar.tsx'],
    name: 'link-floating-toolbar',
    registryDependencies: ['button', 'input', 'popover', 'separator'],
    type: 'registry:ui',
  },
  {
    dependencies: ['@udecode/plate-link'],
    files: ['plate-ui/link-toolbar-button.tsx'],
    name: 'link-toolbar-button',
    registryDependencies: ['toolbar'],
    type: 'registry:ui',
  },
  {
    dependencies: ['@udecode/plate-list'],
    files: ['plate-ui/list-element.tsx'],
    name: 'list-element',
    registryDependencies: ['plate-element'],
    type: 'registry:ui',
  },
  {
    dependencies: ['@udecode/plate-list'],
    files: ['plate-ui/list-toolbar-button.tsx'],
    name: 'list-toolbar-button',
    registryDependencies: ['toolbar'],
    type: 'registry:ui',
  },
  {
    dependencies: ['@udecode/plate-basic-marks'],
    files: ['plate-ui/mark-toolbar-button.tsx'],
    name: 'mark-toolbar-button',
    registryDependencies: ['toolbar'],
    type: 'registry:ui',
  },
  {
    dependencies: [
      '@udecode/plate-media',
      'react-tweet',
      'react-lite-youtube-embed',
    ],
    files: ['plate-ui/media-embed-element.tsx'],
    name: 'media-embed-element',
    registryDependencies: [
      'media-popover',
      'caption',
      'resizable',
      'plate-element',
    ],
    type: 'registry:ui',
  },
  {
    dependencies: ['@udecode/plate-media'],
    files: ['plate-ui/media-popover.tsx'],
    name: 'media-popover',
    registryDependencies: ['button', 'input', 'popover', 'separator'],
    type: 'registry:ui',
  },
  {
    dependencies: ['@udecode/plate-media'],
    files: ['plate-ui/media-toolbar-button.tsx'],
    name: 'media-toolbar-button',
    registryDependencies: ['toolbar'],
    type: 'registry:ui',
  },
  {
    dependencies: ['@udecode/plate-mention'],
    files: ['plate-ui/mention-element.tsx'],
    name: 'mention-element',
    registryDependencies: ['plate-element', 'use-mounted'],
    type: 'registry:ui',
  },
  {
    dependencies: ['@udecode/plate-mention'],
    files: ['plate-ui/mention-input-element.tsx'],
    name: 'mention-input-element',
    registryDependencies: ['inline-combobox', 'plate-element'],
    type: 'registry:ui',
  },
  {
    dependencies: [],
    files: ['plate-ui/mode-dropdown-menu.tsx'],
    name: 'mode-dropdown-menu',
    registryDependencies: ['dropdown-menu', 'toolbar'],
    type: 'registry:ui',
  },
  {
    dependencies: ['@udecode/plate-basic-marks'],
    files: ['plate-ui/more-dropdown-menu.tsx'],
    name: 'more-dropdown-menu',
    registryDependencies: ['dropdown-menu', 'toolbar'],
    type: 'registry:ui',
  },
  {
    dependencies: ['@udecode/plate-indent'],
    files: ['plate-ui/outdent-toolbar-button.tsx'],
    name: 'outdent-toolbar-button',
    registryDependencies: ['toolbar'],
    type: 'registry:ui',
  },
  {
    files: ['plate-ui/paragraph-element.tsx'],
    name: 'paragraph-element',
    registryDependencies: ['plate-element'],
    type: 'registry:ui',
  },
  {
    dependencies: ['@udecode/plate-heading'],
    files: ['plate-ui/placeholder.tsx'],
    name: 'placeholder',
    registryDependencies: ['paragraph-element'],
    type: 'registry:ui',
  },
  {
    dependencies: ['@radix-ui/react-popover'],
    files: ['plate-ui/popover.tsx'],
    name: 'popover',
    registryDependencies: [],
    type: 'registry:ui',
  },
  {
    dependencies: ['@udecode/plate-find-replace'],
    files: ['plate-ui/search-highlight-leaf.tsx'],
    name: 'search-highlight-leaf',
    registryDependencies: [],
    type: 'registry:ui',
  },
  {
    dependencies: ['@radix-ui/react-separator'],
    files: ['plate-ui/separator.tsx'],
    name: 'separator',
    registryDependencies: [],
    type: 'registry:ui',
  },
  {
    dependencies: ['@udecode/plate-heading', '@udecode/plate-indent-list'],
    files: ['plate-ui/slash-input-element.tsx'],
    name: 'slash-input-element',
    registryDependencies: ['inline-combobox', 'plate-element'],
    type: 'registry:ui',
  },
  {
    dependencies: ['@udecode/plate-table'],
    files: ['plate-ui/table-cell-element.tsx'],
    name: 'table-cell-element',
    registryDependencies: ['resizable', 'plate-element'],
    type: 'registry:ui',
  },
  {
    dependencies: ['@udecode/plate-table'],
    files: ['plate-ui/table-dropdown-menu.tsx'],
    name: 'table-dropdown-menu',
    registryDependencies: ['dropdown-menu', 'toolbar'],
    type: 'registry:ui',
  },

  {
    dependencies: ['@udecode/plate-table'],
    files: ['plate-ui/table-element.tsx'],
    name: 'table-element',
    registryDependencies: ['dropdown-menu', 'plate-element'],
    type: 'registry:ui',
  },
  {
    dependencies: ['@udecode/plate-table'],
    files: ['plate-ui/table-row-element.tsx'],
    name: 'table-row-element',
    registryDependencies: ['plate-element'],
    type: 'registry:ui',
  },
  {
    dependencies: ['@udecode/plate-list'],
    files: ['plate-ui/todo-list-element.tsx'],
    name: 'todo-list-element',
    registryDependencies: ['checkbox', 'plate-element'],
    type: 'registry:ui',
  },
  {
    dependencies: ['@udecode/plate-toggle'],
    files: ['plate-ui/toggle-element.tsx'],
    name: 'toggle-element',
    registryDependencies: ['plate-element'],
    type: 'registry:ui',
  },
  {
    dependencies: ['@udecode/plate-toggle'],
    files: ['plate-ui/toggle-toolbar-button.tsx'],
    name: 'toggle-toolbar-button',
    registryDependencies: ['toolbar'],
    type: 'registry:ui',
  },
  {
    dependencies: ['@radix-ui/react-toolbar'],
    files: ['plate-ui/toolbar.tsx'],
    name: 'toolbar',
    registryDependencies: ['tooltip', 'separator'],
    type: 'registry:ui',
  },
  {
    dependencies: ['@radix-ui/react-tooltip'],
    files: ['plate-ui/tooltip.tsx'],
    name: 'tooltip',
    registryDependencies: [],
    type: 'registry:ui',
  },
  {
    dependencies: ['@udecode/plate-block-quote', '@udecode/plate-heading'],
    files: ['plate-ui/turn-into-dropdown-menu.tsx'],
    name: 'turn-into-dropdown-menu',
    registryDependencies: ['dropdown-menu', 'toolbar'],
    type: 'registry:ui',
  },
  {
    dependencies: ['@udecode/plate-resizable'],
    files: ['plate-ui/resizable.tsx'],
    name: 'resizable',
    registryDependencies: [],
    type: 'registry:ui',
  },
];
