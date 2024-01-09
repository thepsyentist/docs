import { Attribute } from '@docs/ui/src/types/list.type';
import attributes from '../attributes';

const SVCOrderLog: Attribute[] = [
  { ...attributes.type, description: 'Doc의 Type입니다. "ORDER_LOG"로 고정 값 입니다.' },
  attributes.id,
  attributes.deleted,
  attributes.published,
  attributes.updated,
  attributes.created,
  { ...attributes.userData, type: 'OrderLogging', description: '주문 로그의 고유정보를 나타냅니다.' },
];

const userData: Attribute[] = [
  { name: 'projectName', required: true, type: 'OrderLoggingProjectName', description: '설명' },
  { name: 'eventName', required: true, type: 'string', description: '설명' },
  { name: 'eventCategory', required: true, type: 'OrderLoggingEventCategory', description: '설명' },
  { name: 'eventType', required: true, type: 'OrderLogginEventType', description: '설명' },
  { name: 'pageName', required: true, type: 'string', description: '설명' },
  { name: 'functionName', required: true, type: 'string', description: '설명' },
  { name: 'orderId', required: true, type: 'string', description: '설명' },
  { name: 'laundryReceivedId', required: false, type: 'string', description: '설명' },
  { name: 'conversionFields', required: true, type: 'string[]', description: '설명' },
  { name: 'conversionData', required: true, type: 'any', description: '설명' },
  { name: 'creator', required: true, type: 'Object<creator>', description: '설명' },
  { name: 'timestamp', required: true, type: 'number', description: '설명' },
  { name: 'version', required: true, type: 'string', description: '설명' },
];

const creator: Attribute[] = [
  { name: 'id', required: true, type: 'string', description: '설명' },
  { name: 'name', required: true, type: 'string', description: '설명' },
];

export default {
  root: SVCOrderLog,
  userData: userData,
  creator: creator,
};
