import { Attribute } from '@docs/ui/src/types/list.type';
import attributes from '../attributes';

const SVCCounter: Attribute[] = [
  { ...attributes.type, description: '"COUNTER"로 고정 값 입니다.' },
  attributes.id,
  { name: 'title', required: false, type: 'string', description: '설명' },
  attributes.deleted,
  attributes.published,
  attributes.updated,
  attributes.created,
  { ...attributes.userData, type: 'LaundryCounter', description: 'Counter의 고유정보입니다' },
];

const userData: Attribute[] = [
  { name: 'laundryReceivedSeq', required: true, type: 'number', description: '설명' },
  { name: 'key', required: true, type: 'number', description: '설명' },
];

export default {
  root: SVCCounter,
  userData: userData,
};
