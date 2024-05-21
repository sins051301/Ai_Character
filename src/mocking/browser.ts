// src/mocks/node.js
import { setupWorker } from 'msw/browser'
import { chathandler } from './chathandler'
 
export const worker = setupWorker(...chathandler)