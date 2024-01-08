import { Attribute } from '@docs/ui/src/types/list.type';
import attributes from '../attributes';

const SVCMissingDeliveryLog: Attribute[] = [
  { ...attributes.type, description: '"MISSING_DELIVERY_LOG"로 고정 값 입니다.' },
  { name: 'status', required: true, type: 'NONE | CHEKCED', description: '설명(미확인|확인)' },
  attributes.id,
  attributes.deleted,
  attributes.published,
  attributes.updated,
  attributes.created,
  { ...attributes.userData, type: 'LaundryNotify', description: 'SVCLaundryNotify의 고유 정보입니다.' },
];

const userData: Attribute[] = [
  { name: 'order', required: true, type: 'SVCOrder', description: '누락 된 주문에 대한 정보입니다.' },
  { name: 'products', required: true, type: 'SVCLaundryReceived[]', description: '누락 된 세탁물에 대한 정보입니다.' },
];

export default {
  root: SVCMissingDeliveryLog,
  userData: userData,
};
