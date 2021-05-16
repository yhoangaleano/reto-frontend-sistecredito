
import { CreditosComponent } from './creditos.component';
import { CREDITOS_PRESENTATION_COMPONENTS } from './presentation-components';
import { CREDITOS_SMART_COMPONENTS } from './smart-components';

export const CREDITOS_PAGE = [
    ...CREDITOS_PRESENTATION_COMPONENTS,
    ...CREDITOS_SMART_COMPONENTS,
    CreditosComponent
];

export { CreditosComponent } from './creditos.component';
export * from './presentation-components';
export * from './smart-components';
