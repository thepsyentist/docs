import { Attribute } from '@docs/ui/src/types/list.type';
import attributes from '../attributes';

const SVCOrderDateAttributes: Attribute[] = [
  { name: 'canceled', required: false, type: 'number[] | null', description: 'null인경우도있음, 시간을 순서대로 기록하기위해 배열형태, 가끔 넣기 후 또 넣기 하면 시간이 뒤에 하나씩 기록됨' },
  { name: 'delivered', required: false, type: 'number[] | null', description: '배송 완료시에 여기에 시간 기록' },
  { name: 'completed', required: false, type: 'number[] | null', description: '완료시에 여기에 시간 기록' },
  { name: 'inspected', required: false, type: 'number[] | null', description: '수거시에 여기에 시간 기록' },
  { name: 'payed', required: false, type: 'number[] | null', description: '결제완료시간기록' },
  { name: 'pickedup', required: false, type: 'number[] | null', description: '맡기기시에 여기에 시간 기록' },
];

export default SVCOrderDateAttributes;
