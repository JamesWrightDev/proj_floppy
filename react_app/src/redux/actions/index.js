import { CONSUME_API } from '../constants/action-types';

export function addArticle(payload) {
    return { type: CONSUME_API, payload }
  };