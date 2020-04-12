// import original module declarations
import 'styled-components';
import { CSSProp } from 'styled-components';

// and extend them!
declare module 'styled-components' {
    export interface DefaultTheme {
        borderRadius?: string;
        body?: string;
        text?: string;
        toggleBorder?: string;
        gradient?: string;

        colors?: {
            main: string;
            secondary: string;
        };
    }

    declare module 'react' {
        interface HTMLAttributes<T> extends DOMAttributes<T> {
            css?: CSSProp;
        }
    }
}
// DefaultTheme está sendo usado como uma interface de props.theme pronto para uso. Por padrão, a interface DefaultTheme está vazia e é por isso que precisamos estendê-la.
