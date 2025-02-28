declare module 'docs/src/modules/components/HighlightedCode' {
  import * as React from 'react';
  import { StyledComponentProps } from '@material-ui/core/styles';

  type ClassKey = 'root';
  export interface Props extends StyledComponentProps<ClassKey> {
    className?: string;
    /**
     * plain string
     */
    code: string;
    /**
     * short identifier of the code language
     * see @material-ui/markdown/prism for possible languages
     */
    language: string;
    /**
     * copy button visible state
     */
    isCopyButtonEnabled?: boolean;
    /**
     * The component used for the root node.
     * @default MarkdownElement
     */
    component?: React.ElementType;
  }
  export default function HighlightedCode(props: Props): React.ReactElement;
}

declare module '@trendmicro/react-interpolate';

declare module 'react-imask';
