import { setupWorker } from 'msw';
import productsHandle from './productsHandle';

export const worker = setupWorker(...productsHandle);
