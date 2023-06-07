import { Attribute } from '@docs/ui/src/types/list.type';

const SVCBoxAttributes: Attribute[] = [
  { name: 'brokentime', required: true, type: 'string', description: '고장난 시간' },
  { name: 'code', required: true, type: 'number', description: '함 번호 주로 1~17' },
  { name: 'substatus', required: true, type: 'BoxInsideStatus', description: '함의 상태' },
  { name: 'isBroken', required: true, type: 'boolean', description: '고장났는지 여부' },
  { name: 'status', required: true, type: '"OPEN" | "CLOSE"', description: '문열림 상태' },
  { name: 'order', required: false, type: 'ORDER', description: '주문 Doc정보' },
];

export default SVCBoxAttributes;
