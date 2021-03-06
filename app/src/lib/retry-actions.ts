import { Repository } from '../models/repository'
import { CloneOptions } from './git/clone'

/** The types of actions that can be retried. */
export enum RetryActionType {
  Push = 1,
  Pull,
  Fetch,
  Clone,
  PullPush,
}

/** The retriable actions and their associated data. */
export type RetryAction =
  | { type: RetryActionType.Push; repository: Repository }
  | { type: RetryActionType.Pull; repository: Repository }
  | { type: RetryActionType.Fetch; repository: Repository }
  | { 
      type: RetryActionType.PullPush
      repository: Repository
      message: string
    }
  | {
      type: RetryActionType.Clone
      url: string
      path: string
      options: CloneOptions
    }
