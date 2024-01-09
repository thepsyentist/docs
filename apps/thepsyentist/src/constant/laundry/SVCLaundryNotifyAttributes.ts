import { Attribute } from '@docs/ui/src/types/list.type';
import attributes from '../attributes';

const SVCLaundryNotify: Attribute[] = [
  { ...attributes.type, description: '"LAUNDRY_NOTIFY"로 고정 값 입니다.' },
  { name: 'subtype', required: true, type: 'NORMAL | CHARGE', description: '설명(일반|요금청구)' },
  attributes.id,
  attributes.deleted,
  attributes.published,
  attributes.updated,
  attributes.created,
  { ...attributes.code, description: '설명' },
  { name: 'title', required: true, type: 'string', description: '설명' },
  { ...attributes.userData, type: 'LaundryNotify', description: 'SVCLaundryNotify의 고유 정보입니다.' },
];

const userData: Attribute[] = [
  { name: 'seq', required: true, type: 'number', description: '설명' },
  { name: 'responseNeeded', required: true, type: 'boolean', description: '설명' },
  { name: 'isReturn', required: false, type: 'boolean', description: '설명' },
  { name: 'smsTitle', required: true, type: 'string', description: '설명' },
  { name: 'smsContent', required: true, type: 'string', description: '설명' },
];

export default {
  root: SVCLaundryNotify,
  userData: userData,
};
