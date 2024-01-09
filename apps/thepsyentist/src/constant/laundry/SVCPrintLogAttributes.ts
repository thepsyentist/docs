import { Attribute } from '@docs/ui/src/types/list.type';
import attributes from '../attributes';

const SVCPrintLog: Attribute[] = [
  { ...attributes.type, description: 'Doc의 Type입니다. "SHIPOUT_PRINT_LOG"로 고정 값 입니다.' },
  attributes.id,
  attributes.deleted,
  attributes.published,
  attributes.updated,
  attributes.created,
  { ...attributes.userData, type: 'LaundryPrintLog', description: '출고 프린터 로그의 고유정보를 나타냅니다.' },
];

const userData: Attribute[] = [
  { name: 'phoneNumber', required: true, type: 'string', description: '출고된 주문의 고객 전화 번호입니다.' },
  { name: 'items', required: true, type: 'SVCLaundryReceived[]', description: '출고된 주문에 속하는 세탁물들에 대한 정보입니다.' },
  { name: 'receiptDate', required: true, type: 'string', description: '출고된 주문의 접수일시 입니다.' },
  { name: 'shipoutDate', required: true, type: 'string', description: '출고된 주문의 출고일시 입니다.' },
  { name: 'containerTitle', required: true, type: 'string', description: '출고된 주문의 세탁함의 이름 입니다.' },
  { name: 'orderNum', required: true, type: 'string', description: '출고된 주문의 주문번호입니다.' },
];

export default {
  root: SVCPrintLog,
  userData: userData,
};
