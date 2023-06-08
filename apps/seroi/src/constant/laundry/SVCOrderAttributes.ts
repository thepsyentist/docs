import { Attribute } from '@docs/ui/src/types/list.type';
import attributes from '../attributes';

const SVCOrder: Attribute[] = [
  { ...attributes.type, description: 'Doc의 Type입니다. "ORDER"로 고정 값 입니다.' },
  attributes.id,
  { ...attributes.bucketId, description: '해당 주문이 발생한 함의 bucketId입니다.(단지)' },
  { ...attributes.parentId, description: '해당 주문이 발생한 함의 docId입니다.(세탁함)' },
  { name: 'title', required: true, type: 'string', description: '고객 휴대폰 번호 \n ex) 01012345678' },
  attributes.deleted,
  attributes.published,
  attributes.updated,
  attributes.created,
  {
    ...attributes.status,
    type: '"DEPOSIT" | "PICKEDUP" | "SHIPPING" | "SHIPPING_CANCEL" | "INSPECT" | "CLEANING" | "PREPARE" | "DELIVERING" | "WAITPAY" | "PAYCOMPLETED" | "COMPLETED"',
    description: '각 주문에 대한 상태 \n*아래 설명 참고',
  },
  { ...attributes.userData, type: 'LaundryOrder', description: '주문의 고유정보를 나타냅니다.' },
];

const userData: Attribute[] = [
  { name: 'code', required: false, type: 'number', description: '세탁함의 번호 입니다.(보통 1~17번 중에 하나)' },
  { name: 'dates', required: false, type: 'OrderDate', description: '맡기기/찾기/배송/완료 등의 시간 정보 \nunix time의 배열 형태' },
  { name: 'isAgreed', required: false, type: 'boolean', description: '고객정보 확인 동의 여부 -> 사용하지 않음(추후 사용 가능성O)' },
];

const dates: Attribute[] = [
  {
    name: 'canceled',
    required: false,
    type: 'number(ms)[] | null',
    description: 'null인경우도있음, 시간을 순서대로 기록하기위해 배열형태, 가끔 넣기 후 또 넣기 하면 시간이 뒤에 하나씩 기록됨',
  },
  { name: 'delivered', required: false, type: 'number(ms)[] | null', description: '배송 완료시에 여기에 시간 기록' },
  { name: 'completed', required: false, type: 'number(ms)[] | null', description: '완료시에 여기에 시간 기록' },
  { name: 'inspected', required: false, type: 'number(ms)[] | null', description: '수거시에 여기에 시간 기록' },
  { name: 'payed', required: false, type: 'number(ms)[] | null', description: '결제완료시간기록' },
  { name: 'pickedup', required: false, type: 'number(ms)[] | null', description: '맡기기시에 여기에 시간 기록' },
];

export default {
  root: SVCOrder,
  userData: userData,
  dates: dates,
};
