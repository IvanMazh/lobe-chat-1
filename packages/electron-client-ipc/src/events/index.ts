import { FilesDispatchEvents } from './file';
import { MenuDispatchEvents } from './menu';
import { FilesSearchDispatchEvents } from './search';
import { SystemDispatchEvents } from './system';
import { AutoUpdateBroadcastEvents, AutoUpdateDispatchEvents } from './update';
import { WindowsDispatchEvents } from './windows';

/**
 * renderer -> main dispatch events
 */
// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface ClientDispatchEvents
  extends WindowsDispatchEvents,
    FilesSearchDispatchEvents,
    SystemDispatchEvents,
    MenuDispatchEvents,
    FilesDispatchEvents,
    AutoUpdateDispatchEvents {}

export type ClientDispatchEventKey = keyof ClientDispatchEvents;

export type ClientEventReturnType<T extends ClientDispatchEventKey> = ReturnType<
  ClientDispatchEvents[T]
>;

/**
 * main -> render broadcast events
 */
// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface MainBroadcastEvents extends AutoUpdateBroadcastEvents {}

export type MainBroadcastEventKey = keyof MainBroadcastEvents;

export type MainBroadcastParams<T extends MainBroadcastEventKey> = Parameters<
  MainBroadcastEvents[T]
>[0];
